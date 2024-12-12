r.d(n, {
    R: function () {
        return l;
    }
});
var i = r(52948),
    a = r(548097),
    s = r(968735),
    o = ['type'];
function l(e, n, r, l) {
    var u = e.locale,
        c = e.onError;
    void 0 === l && (l = {}), !Intl.PluralRules && c(new s.u_('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', s.jK.MISSING_INTL_API));
    var d = (0, i.L6)(l, o);
    try {
        return n(u, d).select(r);
    } catch (e) {
        c(new a.Qe('Error formatting plural.', u, e));
    }
    return 'other';
}
