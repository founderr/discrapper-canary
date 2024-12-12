var i = r(458340),
    a = r(957578).Buffer,
    s = r(764900);
function o(e, n, r, o) {
    s.call(this), (this._cipher = new i.AES(n)), (this._prev = a.from(r)), (this._cache = a.allocUnsafe(0)), (this._secCache = a.allocUnsafe(0)), (this._decrypt = o), (this._mode = e);
}
r(689118)(o, s),
    (o.prototype._update = function (e) {
        return this._mode.encrypt(this, e, this._decrypt);
    }),
    (o.prototype._final = function () {
        this._cipher.scrub();
    }),
    (e.exports = o);
