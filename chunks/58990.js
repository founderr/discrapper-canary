var i = r(961499);
function a(e, n) {
    var r = i(this, e),
        a = r.size;
    return r.set(e, n), (this.size += r.size == a ? 0 : 1), this;
}
e.exports = a;
