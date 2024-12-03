l.d(t, {
    Z: function () {
        return u;
    }
}),
    l(757143);
var n = l(200651);
l(192379);
var i = l(120356),
    r = l.n(i),
    a = l(729594),
    s = l(785992),
    o = l(616922),
    d = l(340702);
function u(e) {
    let {
        className: t,
        embed: { url: l }
    } = e;
    if (null == l) return null;
    let i = null,
        u = null;
    try {
        let e = a.parse(l.replace(/intl-[^/]+\//, ''), !0);
        (i = e.host), (u = e.pathname);
    } catch (e) {
        return null;
    }
    if (!(0, s.E)(i) || null == u) return null;
    let m = u.split('/'),
        h = null != m[1] ? m[1].toLowerCase() : null,
        c = null != m[3] ? m[3].toLowerCase() : null,
        p = m[4];
    if (!['track', 'playlist', 'album', 'artist', 'user', 'show', 'episode'].includes(null != h ? h : '') || ('user' === h && 'playlist' !== c)) return null;
    'user' === h && 'playlist' === c && null != p && (u = '/playlist/'.concat(p));
    let b = 352;
    return (
        'track' === h ? (b = 80) : ('episode' === h || 'show' === h) && (b = 232),
        (0, n.jsx)('iframe', {
            className: r()(d.embedSpotify, t),
            src: o.C7.EMBED(u),
            style: {
                width: 400,
                height: b
            },
            frameBorder: 0,
            sandbox: 'allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
        })
    );
}
