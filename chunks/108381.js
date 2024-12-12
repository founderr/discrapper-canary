var i = r(689118),
    a = r(292735),
    s = r(335613),
    o = r(315893),
    l = r(764900);
function u(e) {
    l.call(this, 'digest'), (this._hash = e);
}
i(u, l),
    (u.prototype._update = function (e) {
        this._hash.update(e);
    }),
    (u.prototype._final = function () {
        return this._hash.digest();
    }),
    (e.exports = function (e) {
        return 'md5' === (e = e.toLowerCase()) ? new a() : 'rmd160' === e || 'ripemd160' === e ? new s() : new u(o(e));
    });
