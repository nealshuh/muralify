        function randomize_arrays(img_arr){
            return img_arr.forEach(x => x.albums.sort(() => Math.random() > .5 ? 1 : -1));
        }

        function artist1album(obj, length){
            var div = document.createElement('div');
            div.style = "width: " + length + "px; height: " + length + "px;";
            var artist = document.createElement("img");
            div.appendChild(artist);
            artist.src = obj.artist;
            artist.style = "object-fit: cover; filter: grayscale(100%); position: absolute; width: " + length / 2.0 + "px; height: " + length + "px; top: 0; left: 0;";
            var album = document.createElement("img");
            div.appendChild(album);
            album.src = obj.albums[0];
            album.style = "object-fit: cover; position: absolute; width: " + length / 2.0 + "px; height: " + length + "px; top: 0; left: " + length / 2.0 + "px;";
            return div;
        }

        function artist3albums(obj, length){
            var div = document.createElement('div');
            div.style = "width: " + length + "px; height: " + length + "px;";
            var artist = document.createElement("img");
            div.appendChild(artist);
            artist.src = obj.artist;
            artist.style = "object-fit: cover; filter: grayscale(100%); position: absolute; width: " + length + "px; height: " + length + "px; top: 0; left: 0;";
            var img1 = document.createElement('img');
            div.appendChild(img1);
            img1.src = obj.albums[0]
            img1.style = "position: absolute; top: " + 2.0 * length / 3.0 + "px; left: " + length / 3.0 + "px; width: "
                        + length / 3.0 + "px; height: " + length / 3.0 + "px;";
            var img2 = document.createElement('img');
            div.appendChild(img2);
            img2.src = obj.albums[1]
            img2.style = "position: absolute; top: " + 0 + "px; left: " + 0 + "px; width: "
                        + length / 3.0 + "px; height: " + length / 3.0 + "px;";
            var img3 = document.createElement('img');
            div.appendChild(img3);
            img3.src = obj.albums[2]
            img3.style = "position: absolute; top: " + 0 + "px; left: " + 2.0 * length / 3.0 + "px; width: "
                        + length / 3.0 + "px; height: " + length / 3.0 + "px;";
            return div;
        }


        function artist4albums(obj, length){
            var div = document.createElement('div');
            div.style = "width: " + length + "px; height: " + length + "px;";
            var img1 = document.createElement('img');
            div.appendChild(img1);
            img1.src = obj.albums[0]
            img1.style = "position: absolute; top: " + 0 + "px; left: " + 0 + "px; width: "
                        + length / 2.0 + "px; height: " + length / 2.0 + "px;";
            var img2 = document.createElement('img');
            div.appendChild(img2);
            img2.src = obj.albums[1]
            img2.style = "position: absolute; top: " + 0 + "px; left: " + length / 2.0 + "px; width: "
                        + length / 2.0 + "px; height: " + length / 2.0 + "px;";
            var img3 = document.createElement('img');
            div.appendChild(img3);
            img3.src = obj.albums[2]
            img3.style = "position: absolute; top: " + length / 2.0 + "px; left: " + length / 2.0 + "px; width: "
                        + length / 2.0 + "px; height: " + length / 2.0 + "px;";
            var img4 = document.createElement('img');
            div.appendChild(img4);
            img4.src = obj.albums[3]
            img4.style = "position: absolute; top: " + length / 2.0 + "px; left: " + 0 + "px; width: "
                        + length / 2.0 + "px; height: " + length / 2.0 + "px;";
            var artist = document.createElement("img");
            div.appendChild(artist);
            artist.src = obj.artist;
            artist.style = "object-fit: cover; filter: grayscale(100%); position: absolute; width: " + length / 2.0 + "px; height: " + length / 2.0 + "px; top: " + length / 4.0 + "px; left: " + length / 4.0 + "px;";
            return div;
        }

        function artist2albums(obj, length){
             var div = document.createElement('div');
            div.style = "width: " + length + "px; height: " + length + "px;";
            var artist = document.createElement("img");
            div.appendChild(artist);
            artist.src = obj.artist;
            artist.style = "object-fit: cover; filter: grayscale(100%); position: absolute; width: " + length + "px; height: " + length + "px; top: 0; left: 0;";
            var img1 = document.createElement('img');
            div.appendChild(img1);
            img1.src = obj.albums[0]
            img1.style = "position: absolute; top: " + 2.0 * length / 3.0 + "px; left: " + 2.0 * length / 3.0 + "px; width: "
                        + length / 3.0 + "px; height: " + length / 3.0 + "px;";
            var img2 = document.createElement('img');
            div.appendChild(img2);
            img2.src = obj.albums[1]
            img2.style = "position: absolute; top: " + 0 + "px; left: " + 0 + "px; width: "
                        + length / 3.0 + "px; height: " + length / 3.0 + "px;";
            return div;
        }

        function square4divs(arr, len){
            var div = document.createElement('div');
            div.height = len;
            div.width = len;
            arr.forEach(function(x){
                div.appendChild(x)
            });
            arr[0].style = "position: absolute; height: " + len / 2.0 + "px; width:" + len / 2.0 + "px; " + " top: 0; left : 0;";
            arr[1].style = "position: absolute; height: " + len / 2.0 + "px; width:" + len / 2.0 + "px; " + " top: " + len / 2.0 + "px; left: " + 0 + "px;";
            arr[2].style = "position: absolute; height: " + len / 2.0 + "px; width:" + len / 2.0 + "px; " + " top: " + 0 + "px; left: " + len / 2.0 + "px;";
            arr[3].style = "position: absolute; height: " + len / 2.0 + "px; width:" + len / 2.0 + "px; " + " top: " + len / 2.0 + "px; left: " + len / 2.0 + "px;";
            return div;
        }


        function artist12albums(obj, length){
            var z = 0;
            var x = 1;
            var y = 0;
            var div = document.createElement('div');
            div.height = length;
            div.width = length;
            var artist = document.createElement('img');
            div.appendChild(artist);
            artist.src = obj.artist;
            artist.style = "object-fit: cover; width: " + length / 2.0 + "px; height: " + length / 2.0 + "px; filter: grayscale(100%); position: absolute; top: " + length/4  + "px; left: " + length/4 + "px;";
            var leftdis = 0;
            var topdis = 0;
            while(x < 17){
                while(y < 4){
                    if(x != 6 && x != 7 && x != 10 && x != 11){
                        var img = document.createElement('img');
                        div.appendChild(img);
                        img.src = obj.albums[z]
                        ++z;
                        img.style = "position: absolute; top: " + topdis + "px; left: " + leftdis + "px; width: "
                        + length * 1.0 /4 + "px; height: " + length * 1.0 /4 + "px;";
                    }
                   leftdis = leftdis + length/4
                   ++x;
                   ++y;
                }
                leftdis = 0;
                topdis = topdis + length/4
                y = 0;
            }
            return div;
        }

        function artist5albums(obj, length){
            var obj1 = obj.albums.slice(0, 5)
            var div = document.createElement('div');
            div.height = length
            div.width = length
            var artist = document.createElement('img');
            div.appendChild(artist);
            artist.src = obj.artist;
            artist.style = "object-fit: cover; width: " + 2.0 * length / 3.0 + "px; height: " + 2.0 * length / 3.0  + "px; filter: grayscale(100%); position: absolute; top: " + length/3  + "px; left: " + length/3 + "px;";
            var imgarr = obj1.map(function(x){
                var img = document.createElement('img');
                div.appendChild(img);
                img.src = x;
                img.width = length/3;
                img.height = length/3;
                return img;
            });
            imgarr[0].style = "width: " + 1.0 * length / 3.0 + "px; height: " + 1.0 * length / 3.0 + "px; position: absolute; top: 0px; left: 0px;";
            imgarr[1].style = "width: " + 1.0 * length / 3.0 + "px; height: " + 1.0 * length / 3.0  + "px; position: absolute; top: 0px; left: " + length / 3.0 + "px;";
            imgarr[2].style = "width: " + 1.0 * length / 3.0 + "px; height: " + 1.0 * length / 3.0  + "px; position: absolute; top: 0px; left: " + 2.0 * length / 3.0 + "px;";
            imgarr[3].style = "width: " + 1.0 * length / 3.0 + "px; height: " + 1.0 * length / 3.0  + "px; position: absolute; top: " + length / 3.0 + "px; left: 0px;";
            imgarr[4].style = "width: " + 1.0 * length / 3.0 + "px; height: " + 1.0 * length / 3.0  + "px; position: absolute; top: " + 2.0 * length / 3.0 + "px; left: 0px;";
            return div;
        }