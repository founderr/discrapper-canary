l.d(t, {
    Z: function () {
        return u;
    }
});
var n = l(200651);
l(192379);
var i = l(120356),
    r = l.n(i),
    a = l(729594),
    s = l(340702);
let o = RegExp('^music\\.amazon\\.(?:com|co\\.uk|de|co\\.jp|es|fr|it|com\\.au|in|ca|com\\.mx|com\\.br)');
function d(e) {
    let t = null,
        l = null,
        n = null;
    try {
        (t = (n = a.parse(e, !0)).host), (l = n.pathname);
    } catch (e) {
        return null;
    }
    return null != n && o.test(null != t ? t : '') && null != l ? n : null;
}
function u(e) {
    let {
        className: t,
        embed: { url: l, thumbnail: i }
    } = e;
    if (null == l || null == i) return null;
    let a = d(l);
    if (null == a) return null;
    let o = a.query.iframe_url;
    if (null == o || Array.isArray(o) || null == d(o)) return null;
    let { width: u, height: m } = i,
        h = u,
        c = m;
    return (
        (u > 500 || m > 400) && (u > m ? ((h = 500), (c = (500 * m) / u)) : ((h = (400 * u) / m), (c = 400))),
        (0, n.jsx)('iframe', {
            className: r()(s.embedAmazonMusic, t),
            src: o,
            style: {
                width: h,
                height: c
            },
            frameBorder: 0,
            sandbox: 'allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
        })
    );
}
