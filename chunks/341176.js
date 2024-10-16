n.d(t, {
    D: function () {
        return f;
    },
    Z: function () {
        return h;
    }
});
var r = n(735250),
    i = n(120356),
    a = n.n(i),
    s = n(524444),
    o = n(52824),
    l = n(956664),
    u = n(589530),
    c = n(591759),
    d = n(124347),
    _ = n(80966),
    E = n(519817);
let f = {
    DEFAULT: null,
    CONTAIN: E.contain,
    SCALE_DOWN: E.scaleDown
};
function h(e) {
    let { media: t, fit: n = f.DEFAULT, obscured: i = !1, onContextMenu: h } = e,
        { width: p, height: I, url: m, proxyUrl: T, alt: S, type: g, maxWidth: A, maxHeight: N, ...R } = t,
        { width: O, height: v } = (0, l.zp)(null != p ? p : 0, null != I ? I : 0),
        C = (0, o.q)({
            proxyURL: T,
            url: m
        }),
        L = !(null == p || 0 === p || null == I || 0 === I);
    if ('VIDEO' === g && L && null != T) {
        var y;
        let e = c.Z.toURLSafe(T);
        if (null == e) return null;
        e.searchParams.append('format', 'webp');
        let n = null !== (y = t.renderLinkComponent) && void 0 !== y ? y : s.iT;
        return (0, r.jsx)(_.Z, {
            ...R,
            src: C,
            width: p,
            height: I,
            maxWidth: O,
            maxHeight: v,
            poster: e.toString(),
            naturalWidth: p,
            naturalHeight: I,
            volume: u.FC,
            autoMute: u.rs,
            onVolumeChange: u.jA,
            onMute: u.Zj,
            renderLinkComponent: n,
            autoPlay: !i,
            alt: S,
            onContextMenu: h
        });
    }
    if ('IMAGE' === g)
        return L
            ? (0, r.jsx)(d.ZP, {
                  ...R,
                  imageClassName: a()(E.slide, n),
                  src: C,
                  width: p,
                  height: I,
                  shouldLink: !1,
                  maxWidth: O,
                  maxHeight: v,
                  animated: !i && t.animated,
                  autoPlay: !i,
                  alt: S,
                  zoomThumbnailPlaceholder: t.zoomThumbnailPlaceholder,
                  onContextMenu: h
              })
            : (0, r.jsx)('img', {
                  src: C,
                  alt: S,
                  className: a()(E.slide, n),
                  onContextMenu: h
              });
    return null;
}
