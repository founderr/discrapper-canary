r.d(n, {
    S: function () {
        return u;
    }
});
var i = r(52948),
    a = r(968735),
    s = r(548097),
    o = ['numeric', 'style'];
function l(e, n, r) {
    var a = e.locale,
        s = e.formats,
        l = e.onError;
    void 0 === r && (r = {});
    var u = r.format,
        c = (!!u && (0, i.TB)(s, 'relative', u, l)) || {};
    return n(a, (0, i.L6)(r, o, c));
}
function u(e, n, r, i, o) {
    void 0 === o && (o = {}), !i && (i = 'second'), !Intl.RelativeTimeFormat && e.onError(new a.u_('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', a.jK.MISSING_INTL_API));
    try {
        return l(e, n, o).format(r, i);
    } catch (n) {
        e.onError(new s.Qe('Error formatting relative time.', e.locale, n));
    }
    return String(r);
}
