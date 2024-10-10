var n = r(900624),
    a = r(117973),
    _ = r(302767);
e.exports = function (e, t) {
    var r = this.__data__;
    if (r instanceof n) {
        var o = r.__data__;
        if (!a || o.length < 199) return o.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new _(o);
    }
    return r.set(e, t), (this.size = r.size), this;
};
