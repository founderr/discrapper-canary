t.d(s, {
    NW: function () {
        return l;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(65084),
    r = t(302454),
    o = t.n(r);
t(424395);
let l = new i.IntlManager('en-US').withFormatters({
    format: (0, i.makeReactFormatter)({
        $_: () => '',
        $i: (e, s) => (0, n.jsx)('em', { children: e }, s),
        $b: (e, s) => (0, n.jsx)('strong', { children: e }, s),
        $del: (e, s) => (0, n.jsx)('del', { children: e }, s),
        $p: (e, s) => (0, n.jsx)('p', { children: e }, s),
        $code: (e, s) => (0, n.jsx)('code', { children: e }, s),
        $link: (e, s) => {
            let [n, ...i] = e,
                { Anchor: r } = t(756715),
                l = {};
            switch (typeof n) {
                case 'string':
                    l.href = o().sanitizeUrl(n);
                    break;
                case 'object':
                    var c;
                    (l.onClick = null !== (c = n.onClick) && void 0 !== c ? c : n), (l.onContextMenu = n.onContextMenu);
                    break;
                default:
                    l.onClick = n;
            }
            return (0, a.createElement)(
                r,
                {
                    ...l,
                    key: s
                },
                i
            );
        }
    }),
    formatToPlainString: i.stringFormatter,
    formatToMarkdownString: i.markdownFormatter,
    formatToParts: i.astFormatter
});
