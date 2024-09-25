n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(757143);
var i = n(735250);
n(470079);
var a = n(120356),
    o = n.n(a),
    s = n(729594),
    l = n(785992),
    u = n(616922),
    c = n(269625);
function d(e) {
    let t = /intl-[^/]+\//;
    return e.replace(t, '');
}
function _(e) {
    let {
        className: t,
        embed: { url: n }
    } = e;
    if (null == n) return null;
    let r = null,
        a = null;
    try {
        let e = s.parse(d(n), !0);
        (r = e.host), (a = e.pathname);
    } catch (e) {
        return null;
    }
    if (!(0, l.E)(r) || null == a) return null;
    let _ = a.split('/'),
        E = null != _[1] ? _[1].toLowerCase() : null,
        f = null != _[3] ? _[3].toLowerCase() : null,
        h = _[4];
    if (!['track', 'playlist', 'album', 'artist', 'user', 'show', 'episode'].includes(null != E ? E : '') || ('user' === E && 'playlist' !== f)) return null;
    'user' === E && 'playlist' === f && null != h && (a = '/playlist/'.concat(h));
    let p = 352;
    return (
        'track' === E ? (p = 80) : ('episode' === E || 'show' === E) && (p = 232),
        (0, i.jsx)('iframe', {
            className: o()(c.embedSpotify, t),
            src: u.C7.EMBED(a),
            style: {
                width: 400,
                height: p
            },
            frameBorder: 0,
            sandbox: 'allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
        })
    );
}
