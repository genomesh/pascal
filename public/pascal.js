var xin, yin, out, tri;

(() => {
    xin = document.getElementById('x');
    yin = document.getElementById('y');
    out = document.getElementById('out');
    tri = [];
    
    console.log('setup complete');
})()

function calc() {
    let xi = parseInt(xin.value);
    let yi = parseInt(yin.value);
    if (!isNaN(xi) && !isNaN(yi)) { 
        out.value = iterative(xi-1, yi-1);
    }
}

function number (x,y) {
    this.val;
    this.x = x;
    this.y = y;
    this.bop = function() {
        if (this.x == 0 || this.y == 0) { this.val = 1}
        if (isNaN(this.val)) {
            if (!tri[x]) {tri[x] = []};
            if (!tri[x][y-1]) {tri[x][y-1] = new number(x,y-1)};
            
            if (!tri[x-1]) {tri[x-1] = []};
            if (!tri[x-1][y]) {tri[x-1][y] = new number(x-1,y)};
            
            this.val = tri[x][y-1].bop() + tri[x-1][y].bop()
        }
        return this.val;
    }
}

function iterative (x,y) {
    if(!tri[x]) { tri[x] = [];}
    tri[x][y] = new number(x,y);
    return tri[x][y].bop();
}