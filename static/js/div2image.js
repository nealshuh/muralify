
 html2canvas(document.getElementById("bigdiv"), {
  width: 1000, height: 1000, useCORS: true
}).then(function (canvas) {
   canvas.toBlob((blob) => {
    const newImg = document.createElement('img');
    const url = URL.createObjectURL(blob);

    newImg.onload = () => {
    // no longer need to read the blob so it's revoked
        URL.revokeObjectURL(url);
    };

  newImg.src = url;
  document.body.appendChild(newImg);
});
});


