function clock(){

// angle of the hands

    var d, h, m, s;
    d = new Date;

    h = 30 * ((d.getHours() % 12) + d.getMinutes() / 60);
    m = 6 * d.getMinutes();
    s = 6 * d.getSeconds();

    console.log(d);
    console.log(h);
    console.log(m);
    console.log(s);

//move the hands
    setAttr('h-hand', h);
    setAttr('m-hand', m);
    setAttr('s-hand', s);
    setAttr('s-tail', s+180);


// set display time

h = d.getHours();
m = d.getMinutes();
s = d.getSeconds();

    if (h >= 12){
        setText('suffix', 'PM')
    } else {
        setText('suffix', 'AM');
    }

    if (h != 12){
        h %= 12;
    }

    setText('sec', s);
    setText('min', m); 
    setText('hr', h);

    console.log("second round");
    console.log(h);
    console.log(m);
    console.log(s);

    setTimeout(clock, 10000);

};

function setAttr(id,val){
    let v = 'rotate(' + val + ', 70, 70)'; 
    document.getElementById(id).setAttribute('transform', v);
    console.log(v)
};

function setText(id,val){
    if(val < 10){
        val = '0' + val;
    }
    document.getElementById(id).innerHTML = val;
    console.log(val)
};

window.onload= clock;