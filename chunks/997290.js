var r = n(689118),
    i = n(957578).Buffer,
    a = n(764900),
    o = i.alloc(128),
    s = 64;
function l(e, t) {
    a.call(this, 'digest'), 'string' == typeof t && (t = i.from(t)), (this._alg = e), (this._key = t), t.length > s ? (t = e(t)) : t.length < s && (t = i.concat([t, o], s));
    for (var n = (this._ipad = i.allocUnsafe(s)), r = (this._opad = i.allocUnsafe(s)), l = 0; l < s; l++) (n[l] = 54 ^ t[l]), (r[l] = 92 ^ t[l]);
    this._hash = [n];
}
r(l, a),
    (l.prototype._update = function (e) {
        this._hash.push(e);
    }),
    (l.prototype._final = function () {
        var e = this._alg(i.concat(this._hash));
        return this._alg(i.concat([this._opad, e]));
    }),
    (e.exports = l);
