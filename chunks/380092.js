var i = r(559969);
function a(e, n) {
    var r = this.__data__,
        a = i(r, e);
    return a < 0 ? (++this.size, r.push([e, n])) : (r[a][1] = n), this;
}
e.exports = a;
