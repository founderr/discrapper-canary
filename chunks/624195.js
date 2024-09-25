n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(729594),
    s = n(269625);
let l = RegExp('^music\\.amazon\\.(?:com|co\\.uk|de|co\\.jp|es|fr|it|com\\.au|in|ca|com\\.mx|com\\.br)'),
    u = 500,
    c = 400;
function d(e) {
    let t = null,
        n = null,
        r = null;
    try {
        (t = (r = o.parse(e, !0)).host), (n = r.pathname);
    } catch (e) {
        return null;
    }
    return null != r && l.test(null != t ? t : '') && null != n ? r : null;
}
function _(e) {
    let {
        className: t,
        embed: { url: n, thumbnail: i }
    } = e;
    if (null == n || null == i) return null;
    let o = d(n);
    if (null == o) return null;
    let l = o.query.iframe_url;
    if (null == l || Array.isArray(l) || null == d(l)) return null;
    let { width: _, height: E } = i,
        f = _,
        h = E;
    return (
        (_ > u || E > c) && (_ > E ? ((f = u), (h = (u * E) / _)) : ((f = (c * _) / E), (h = c))),
        (0, r.jsx)('iframe', {
            className: a()(s.embedAmazonMusic, t),
            src: l,
            style: {
                width: f,
                height: h
            },
            frameBorder: 0,
            sandbox: 'allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
        })
    );
}
