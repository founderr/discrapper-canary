r.d(e, {
    I: function () {
        return s;
    }
});
var n = r(278253),
    i = r(78385),
    o = r(926832),
    a = ['style', 'type', 'fallback', 'languageDisplay'];
function s(t, e, r, s) {
    var u = t.locale,
        c = t.onError;
    !Intl.DisplayNames && c(new i.u_('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', i.jK.MISSING_INTL_API));
    var l = (0, n.L6)(s, a);
    try {
        return e(u, l).of(r);
    } catch (t) {
        c(new o.Qe('Error formatting display name.', u, t));
    }
}
