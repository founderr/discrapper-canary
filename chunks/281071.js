r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(200651);
r(192379);
var a = r(477660);
function s(e) {
    return (
        (e.heading = a.defaultRules.heading),
        (e.lheading = a.defaultRules.lheading),
        (e.list = a.defaultRules.list),
        (e.paragraph = {
            ...e.paragraph,
            react: function (e, n, r) {
                return (0, i.jsx)('p', { children: n(e.content, r) }, r.key);
            }
        }),
        (e.link = {
            ...e.link,
            react: function (e, n, r) {
                let s = {};
                if (null != e.context) {
                    let n = e.context[e.target];
                    n && n.onClick ? ((s.onClick = n.onClick), (s.onContextMenu = n.onContextMenu)) : (s.onClick = n);
                }
                if (null == s.onClick) {
                    var o;
                    (s.href = null !== (o = (0, a.sanitizeUrl)(e.target)) && void 0 !== o ? o : void 0), (s.target = '_blank');
                }
                return (0, i.jsx)(
                    'a',
                    {
                        title: e.title,
                        ...s,
                        rel: 'noreferrer',
                        children: n(e.content, r)
                    },
                    r.key
                );
            }
        }),
        e
    );
}
