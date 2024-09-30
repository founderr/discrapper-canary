n.r(t),
    n.d(t, {
        getAvailableLocales: function () {
            return r.u;
        },
        international: function () {
            return u;
        },
        intl: function () {
            return c;
        },
        t: function () {
            return u;
        },
        untranslated: function () {
            return u;
        }
    }),
    n(47120);
var o = n(735250),
    a = n(470079),
    s = n(65084),
    i = n(302454),
    l = n.n(i),
    r = n(424395);
let u = {},
    c = new s.IntlManager('en-US').withFormatters({
        format: (0, s.makeReactFormatter)({
            $_: () => '',
            $i: (e, t) => (0, o.jsx)('em', { children: e }, t),
            $b: (e, t) => (0, o.jsx)('strong', { children: e }, t),
            $del: (e, t) => (0, o.jsx)('del', { children: e }, t),
            $p: (e, t) => (0, o.jsx)('p', { children: e }, t),
            $code: (e, t) => (0, o.jsx)('code', { children: e }, t),
            $link: (e, t) => {
                let [o, ...s] = e,
                    { Anchor: i } = n(756715),
                    r = {};
                switch (typeof o) {
                    case 'string':
                        r.href = l().sanitizeUrl(o);
                        break;
                    case 'object':
                        var u;
                        (r.onClick = null !== (u = o.onClick) && void 0 !== u ? u : o), (r.onContextMenu = o.onContextMenu);
                        break;
                    default:
                        r.onClick = o;
                }
                return (0, a.createElement)(
                    i,
                    {
                        ...r,
                        key: t
                    },
                    s
                );
            }
        }),
        formatToPlainString: s.stringFormatter,
        formatToMarkdownString: s.markdownFormatter,
        formatToParts: s.astFormatter
    });
