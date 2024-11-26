var a = r(815869),
    n = Array.prototype.splice;
e.exports = function (e) {
    var t = this.__data__,
        r = a(t, e);
    return !(r < 0) && (r == t.length - 1 ? t.pop() : n.call(t, r, 1), --this.size, !0);
};
