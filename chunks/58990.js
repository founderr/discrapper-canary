var a = r(961499);
e.exports = function (e, t) {
    var r = a(this, e),
        n = r.size;
    return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
};
