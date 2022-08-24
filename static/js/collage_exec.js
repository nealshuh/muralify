



        var div = document.createElement('div');
        div.id = "background-grain"
        document.body.appendChild(div)
        var divarr1 = [ artist12albums(image_array[0], 250), artist2albums(image_array[1], 250), artist4albums(image_array[2], 250), artist4albums(image_array[3], 250)];
        var divarr2 = [ artist4albums(image_array[4], 250), artist4albums(image_array[5], 250), artist4albums(image_array[6], 250), artist1album(image_array[7], 250)];
        var divarr3 = [ artist1album(image_array[8], 250), artist5albums(image_array[9], 250), artist3albums(image_array[10], 250), artist1album(image_array[11], 250)];
        var divarr4 = [ artist1album(image_array[12], 250), artist2albums(image_array[13], 250), artist4albums(image_array[14], 250), artist1album(image_array[15], 250)];
        var bigdiv = square4divs( [square4divs(divarr1, 500), square4divs(divarr2, 500), square4divs(divarr3, 500), square4divs(divarr4, 500)], 1000)
        bigdiv.style = "position: relative;"
        document.body.appendChild(bigdiv);
        bigdiv.id = "bigdiv"