r.d(n, {
    w: function () {
        return f;
    }
});
var i = r(259630),
    a = r(731750),
    s = r(19929),
    o = r(548097),
    l = r(739292);
function u(e, n) {
    return Object.keys(e).reduce(function (r, a) {
        return (r[a] = (0, i.pi)({ timeZone: n }, e[a])), r;
    }, {});
}
function c(e, n) {
    return Object.keys((0, i.pi)((0, i.pi)({}, e), n)).reduce(function (r, a) {
        return (r[a] = (0, i.pi)((0, i.pi)({}, e[a] || {}), n[a] || {})), r;
    }, {});
}
function d(e, n) {
    if (!n) return e;
    var r = s.C.formats;
    return (0, i.pi)((0, i.pi)((0, i.pi)({}, r), e), {
        date: c(u(r.date, n), u(e.date || {}, n)),
        time: c(u(r.time, n), u(e.time || {}, n))
    });
}
var f = function (e, n, r, s, u) {
    var c = e.locale,
        f = e.formats,
        _ = e.messages,
        h = e.defaultLocale,
        p = e.defaultFormats,
        m = e.fallbackOnEmptyString,
        g = e.onError,
        E = e.timeZone,
        v = e.defaultRichTextElements;
    void 0 === r && (r = { id: '' });
    var I = r.id,
        T = r.defaultMessage;
    (0, a.kG)(!!I, '[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue');
    var b = String(I),
        y = _ && Object.prototype.hasOwnProperty.call(_, b) && _[b];
    if (Array.isArray(y) && 1 === y.length && y[0].type === l.wD.literal) return y[0].value;
    if (!s && y && 'string' == typeof y && !v) return y.replace(/'\{(.*?)\}'/gi, '{$1}');
    if (((s = (0, i.pi)((0, i.pi)({}, v), s || {})), (f = d(f, E)), (p = d(p, E)), !y)) {
        if (!1 === m && '' === y) return y;
        if (((!T || (c && c.toLowerCase() !== h.toLowerCase())) && g(new o.$6(r, c)), T))
            try {
                var S = n.getMessageFormat(T, h, p, u);
                return S.format(s);
            } catch (e) {
                return g(new o.X9('Error formatting default message for: "'.concat(b, '", rendering default message verbatim'), c, r, e)), 'string' == typeof T ? T : b;
            }
        return b;
    }
    try {
        var S = n.getMessageFormat(y, c, f, (0, i.pi)({ formatters: n }, u || {}));
        return S.format(s);
    } catch (e) {
        g(new o.X9('Error formatting message: "'.concat(b, '", using ').concat(T ? 'default message' : 'id', ' as fallback.'), c, r, e));
    }
    if (T)
        try {
            var S = n.getMessageFormat(T, h, p, u);
            return S.format(s);
        } catch (e) {
            g(new o.X9('Error formatting the default message for: "'.concat(b, '", rendering message verbatim'), c, r, e));
        }
    return 'string' == typeof y ? y : 'string' == typeof T ? T : b;
};
