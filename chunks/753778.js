n.d(t, {
    w: function () {
        return d;
    }
});
var r = n(259630),
    i = n(731750),
    a = n(19929),
    s = n(548097),
    o = n(739292);
function l(e, t) {
    return Object.keys(e).reduce(function (n, i) {
        return (n[i] = (0, r.pi)({ timeZone: t }, e[i])), n;
    }, {});
}
function u(e, t) {
    return Object.keys((0, r.pi)((0, r.pi)({}, e), t)).reduce(function (n, i) {
        return (n[i] = (0, r.pi)((0, r.pi)({}, e[i] || {}), t[i] || {})), n;
    }, {});
}
function c(e, t) {
    if (!t) return e;
    var n = a.C.formats;
    return (0, r.pi)((0, r.pi)((0, r.pi)({}, n), e), {
        date: u(l(n.date, t), l(e.date || {}, t)),
        time: u(l(n.time, t), l(e.time || {}, t))
    });
}
var d = function (e, t, n, a, l) {
    var u = e.locale,
        d = e.formats,
        f = e.messages,
        _ = e.defaultLocale,
        p = e.defaultFormats,
        h = e.fallbackOnEmptyString,
        m = e.onError,
        g = e.timeZone,
        E = e.defaultRichTextElements;
    void 0 === n && (n = { id: '' });
    var v = n.id,
        b = n.defaultMessage;
    (0, i.kG)(!!v, '[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue');
    var I = String(v),
        T = f && Object.prototype.hasOwnProperty.call(f, I) && f[I];
    if (Array.isArray(T) && 1 === T.length && T[0].type === o.wD.literal) return T[0].value;
    if (!a && T && 'string' == typeof T && !E) return T.replace(/'\{(.*?)\}'/gi, '{$1}');
    if (((a = (0, r.pi)((0, r.pi)({}, E), a || {})), (d = c(d, g)), (p = c(p, g)), !T)) {
        if (!1 === h && '' === T) return T;
        if (((!b || (u && u.toLowerCase() !== _.toLowerCase())) && m(new s.$6(n, u)), b))
            try {
                var S = t.getMessageFormat(b, _, p, l);
                return S.format(a);
            } catch (e) {
                return m(new s.X9('Error formatting default message for: "'.concat(I, '", rendering default message verbatim'), u, n, e)), 'string' == typeof b ? b : I;
            }
        return I;
    }
    try {
        var S = t.getMessageFormat(T, u, d, (0, r.pi)({ formatters: t }, l || {}));
        return S.format(a);
    } catch (e) {
        m(new s.X9('Error formatting message: "'.concat(I, '", using ').concat(b ? 'default message' : 'id', ' as fallback.'), u, n, e));
    }
    if (b)
        try {
            var S = t.getMessageFormat(b, _, p, l);
            return S.format(a);
        } catch (e) {
            m(new s.X9('Error formatting the default message for: "'.concat(I, '", rendering message verbatim'), u, n, e));
        }
    return 'string' == typeof T ? T : 'string' == typeof b ? b : I;
};
