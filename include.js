function pictureSwap(num) {
        if (num==0) {
            pic = "images/alert.png"
            thiswidth = 24
            thisheight = 24
        }
        if (num==1) {
            pic = "images/welcome.png"
            thiswidth = 166
            thisheight = 43
        }
    document.getElementById('myImage').src = pic
    document.getElementById('myImage').width = thiswidth
    document.getElementById('myImage').height = thisheight
    }
