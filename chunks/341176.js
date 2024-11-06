n.d(t, {
    D: function () {
        return m;
    },
    Z: function () {
        return g;
    }
});
var a = n(200651),
    i = n(120356),
    r = n.n(i),
    s = n(524444),
    l = n(52824),
    o = n(956664),
    d = n(589530),
    u = n(591759),
    c = n(124347),
    h = n(80966),
    p = n(519817);
let m = {
    DEFAULT: null,
    CONTAIN: p.contain,
    SCALE_DOWN: p.scaleDown
};
function g(e) {
    let { media: t, fit: n = m.DEFAULT, obscured: i = !1, onContextMenu: g } = e,
        { width: f, height: b, url: C, proxyUrl: I, alt: x, type: v, maxWidth: _, maxHeight: P, ...N } = t,
        { width: E, height: S } = (0, o.zp)(null != f ? f : 0, null != b ? b : 0),
        L = (0, l.q)({
            proxyURL: I,
            url: C
        }),
        y = !(null == f || 0 === f || null == b || 0 === b);
    if ('VIDEO' === v && y && null != I) {
        var w;
        let e = (function (e) {
            let t = u.Z.toURLSafe(e);
            return null == t ? null : (t.searchParams.append('format', 'webp'), t.toString());
        })(I);
        if (null == e) return null;
        let n = null !== (w = t.renderLinkComponent) && void 0 !== w ? w : s.iT;
        return (0, a.jsx)(h.Z, {
            ...N,
            src: L,
            width: f,
            height: b,
            maxWidth: E,
            maxHeight: S,
            poster: e,
            naturalWidth: f,
            naturalHeight: b,
            volume: d.FC,
            autoMute: d.rs,
            onVolumeChange: d.jA,
            onMute: d.Zj,
            renderLinkComponent: n,
            autoPlay: !i,
            alt: x,
            onContextMenu: g
        });
    }
    if ('IMAGE' === v)
        return y
            ? (0, a.jsx)(c.ZP, {
                  ...N,
                  imageClassName: r()(p.slide, n),
                  src: L,
                  width: f,
                  height: b,
                  shouldLink: !1,
                  maxWidth: E,
                  maxHeight: S,
                  animated: !i && t.animated,
                  autoPlay: !i,
                  alt: x,
                  zoomThumbnailPlaceholder: t.zoomThumbnailPlaceholder,
                  onContextMenu: g
              })
            : (0, a.jsx)('img', {
                  src: L,
                  alt: x,
                  className: r()(p.slide, n),
                  onContextMenu: g
              });
    return null;
}
