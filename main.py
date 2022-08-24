import random
from flask import Flask, request, redirect, url_for, session, render_template
import spotipy
from spotipy.oauth2 import SpotifyOAuth
import time
from credentials import CLIENT_ID, CLIENT_SECRET, SECRET_KEY

app = Flask(__name__)

app.secret_key = SECRET_KEY
app.config['SESSION_COOKIE_NAME'] = 'NEALSHAHCOOKIE!'

# put this in another document later-- do not add this to the file if you want to upload it to GitHub
clientId = CLIENT_ID
clientSecret = CLIENT_SECRET
TOKEN_INFO = 'token_info'


@app.route('/login')
def login():
    session.clear()
    sp_oauth = create_spotify_oauth()
    auth_url = sp_oauth.get_authorize_url()
    return redirect(auth_url)

@app.route('/')
def index():
    return render_template("index.html")


@app.route('/redirect')
def redirectPage():
    sp_oauth = create_spotify_oauth()  # Makes a Spotify OAuth using given information
    session.clear()  # Flask: For any web app, clears the session
    code = request.args.get('code')  # Flask: This creates a space in the user request to spotify to access the token
    token_info = sp_oauth.get_access_token(code, as_dict=True, check_cache=False)  # Spotipy interacting with the request from Flask
    session[TOKEN_INFO] = token_info  # Places the token in the session
    return redirect(url_for("muralify", _external=False))  # Redirects it to /muralify


@app.route('/muralify')
def muralify():
    try:
        token_info = get_token()
    except:
        print('user not logged in')
        redirect(url_for('login', _external=False))
    sp = spotipy.Spotify(auth=token_info['access_token'])
    current_top_artists = sp.current_user_top_artists(limit=20, offset=0, time_range='medium_term')
    artist_ids = [x['uri'] for x in current_top_artists['items']]
    image_array = []
    for artist_id in artist_ids:
        albumcovers = [x['images'][0]['url'] for x in sp.artist_albums(artist_id, album_type="single", country="US", limit=30, offset=0)['items']] + [x['images'][0]['url'] for x in sp.artist_albums(artist_id, album_type="album", country="US", limit=30, offset=0)['items']]
        random.shuffle(albumcovers)
        artistcover = sp.artist(artist_id)['images'][0]['url']
        image_array.append({'artist': artistcover, 'albums': albumcovers})
    return render_template("muralCon.html", image_array=image_array)
    #return str(image_array)


def get_token():
    token_info = session.get(TOKEN_INFO, None)
    if not token_info:
        raise Exception("exception")

    now = int(time.time())
    is_expired = token_info['expires_at'] - now < 60
    if is_expired:
        sp_oauth = create_spotify_oauth()
        token_info = sp_oauth.refresh_access_token(token_info['refresh_token'])
    return token_info


def create_spotify_oauth():
    return SpotifyOAuth(
        client_id=clientId,
        client_secret=clientSecret,
        redirect_uri="http://127.0.0.1:5000/redirect",
        scope='user-top-read'
    )


if __name__ == "__main__":
    app.run(host='127.0.0.1', port=5000)
