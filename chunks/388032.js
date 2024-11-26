n.r(t),
    n.d(t, {
        getAvailableLocales: function () {
            return l.u5;
        },
        getLanguages: function () {
            return l.Vb;
        },
        getSystemLocale: function () {
            return f;
        },
        initialLocale: function () {
            return p;
        },
        international: function () {
            return c.Z;
        },
        intl: function () {
            return h;
        },
        systemLocale: function () {
            return _;
        },
        t: function () {
            return m;
        }
    }),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(436772),
    s = n(302454),
    o = n.n(s),
    l = n(424395),
    u = n(786738),
    c = n(604568),
    d = n(681276);
function f(e) {
    return [Array.isArray(navigator.languages) ? navigator.languages[0] : null, navigator.language, navigator.browserLanguage, navigator.userLanguage, e].find((e) => null != e && '' !== e);
}
let _ = f('en-US'),
    p = (0, l.YI)(_, 'en-US'),
    h = new a.IntlManager({
        initialLocale: p,
        defaultLocale: 'en-US'
    }).withFormatters({
        format: (0, a.makeReactFormatter)({
            $i: (e, t) => (0, r.jsx)('em', { children: e }, t),
            $b: (e, t) => (0, r.jsx)('strong', { children: e }, t),
            $del: (e, t) => (0, r.jsx)('del', { children: e }, t),
            $p: (e, t) => (0, r.jsx)('p', { children: e }, t),
            $code: (e, t) => (0, r.jsx)('code', { children: e }, t),
            $link: (e, t, r) => {
                let [a] = r,
                    { Anchor: s } = n(756715),
                    l = {};
                switch (typeof a) {
                    case 'string':
                        l.href = o().sanitizeUrl(a);
                        break;
                    case 'function':
                    default:
                        l.onClick = a;
                        break;
                    case 'object':
                        var u;
                        if (null == a) break;
                        (l.onClick = null !== (u = a.onClick) && void 0 !== u ? u : a), (l.onContextMenu = a.onContextMenu);
                }
                return (0, i.createElement)(
                    s,
                    {
                        ...l,
                        key: t
                    },
                    e
                );
            }
        }),
        formatToPlainString: a.stringFormatter,
        formatToMarkdownString: a.markdownFormatter,
        formatToParts: a.astFormatter
    }),
    m = {
        ...u.Z,
        ...d.Z
    };
