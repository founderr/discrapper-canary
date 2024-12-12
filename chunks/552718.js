var i = r(957578).Buffer,
    a = r(108381),
    s = r(477260),
    o = r(689118),
    l = r(510838),
    u = r(517145),
    c = r(873213);
function d(e) {
    s.Writable.call(this);
    var n = c[e];
    if (!n) throw Error('Unknown message digest');
    (this._hashType = n.hash), (this._hash = a(n.hash)), (this._tag = n.id), (this._signType = n.sign);
}
function f(e) {
    s.Writable.call(this);
    var n = c[e];
    if (!n) throw Error('Unknown message digest');
    (this._hash = a(n.hash)), (this._tag = n.id), (this._signType = n.sign);
}
function _(e) {
    return new d(e);
}
function h(e) {
    return new f(e);
}
Object.keys(c).forEach(function (e) {
    (c[e].id = i.from(c[e].id, 'hex')), (c[e.toLowerCase()] = c[e]);
}),
    o(d, s.Writable),
    (d.prototype._write = function (e, n, r) {
        this._hash.update(e), r();
    }),
    (d.prototype.update = function (e, n) {
        return 'string' == typeof e && (e = i.from(e, n)), this._hash.update(e), this;
    }),
    (d.prototype.sign = function (e, n) {
        this.end();
        var r = l(this._hash.digest(), e, this._hashType, this._signType, this._tag);
        return n ? r.toString(n) : r;
    }),
    o(f, s.Writable),
    (f.prototype._write = function (e, n, r) {
        this._hash.update(e), r();
    }),
    (f.prototype.update = function (e, n) {
        return 'string' == typeof e && (e = i.from(e, n)), this._hash.update(e), this;
    }),
    (f.prototype.verify = function (e, n, r) {
        return 'string' == typeof n && (n = i.from(n, r)), this.end(), u(n, this._hash.digest(), e, this._signType, this._tag);
    }),
    (e.exports = {
        Sign: _,
        Verify: h,
        createSign: _,
        createVerify: h
    });
