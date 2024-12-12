var i = r(900624),
    a = r(117973),
    s = r(302767),
    o = 200;
function l(e, n) {
    var r = this.__data__;
    if (r instanceof i) {
        var l = r.__data__;
        if (!a || l.length < o - 1) return l.push([e, n]), (this.size = ++r.size), this;
        r = this.__data__ = new s(l);
    }
    return r.set(e, n), (this.size = r.size), this;
}
e.exports = l;
