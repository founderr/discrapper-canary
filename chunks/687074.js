var a = r(815869);
e.exports = function (e, t) {
    var r = this.__data__,
        n = a(r, e);
    return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
};
