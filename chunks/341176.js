t.d(n, {
    D: function () {
        return m;
    },
    Z: function () {
        return I;
    }
});
var a = t(735250),
    r = t(120356),
    s = t.n(r),
    i = t(524444),
    o = t(52824),
    l = t(956664),
    c = t(589530),
    d = t(591759),
    u = t(124347),
    _ = t(80966),
    E = t(519817);
let m = {
    DEFAULT: null,
    CONTAIN: E.contain,
    SCALE_DOWN: E.scaleDown
};
function I(e) {
    let { media: n, fit: t = m.DEFAULT, obscured: r = !1, onContextMenu: I } = e,
        { width: A, height: p, url: g, proxyUrl: f, alt: T, type: O, maxWidth: N, maxHeight: h, ...R } = n,
        { width: P, height: C } = (0, l.zp)(null != A ? A : 0, null != p ? p : 0),
        L = (0, o.q)({
            proxyURL: f,
            url: g
        }),
        M = !(null == A || 0 === A || null == p || 0 === p);
    if ('VIDEO' === O && M && null != f) {
        var x;
        let e = d.Z.toURLSafe(f);
        if (null == e) return null;
        e.searchParams.append('format', 'webp');
        let t = null !== (x = n.renderLinkComponent) && void 0 !== x ? x : i.iT;
        return (0, a.jsx)(_.Z, {
            ...R,
            src: L,
            width: A,
            height: p,
            maxWidth: P,
            maxHeight: C,
            poster: e.toString(),
            naturalWidth: A,
            naturalHeight: p,
            volume: c.FC,
            autoMute: c.rs,
            onVolumeChange: c.jA,
            onMute: c.Zj,
            renderLinkComponent: t,
            autoPlay: !r,
            alt: T,
            onContextMenu: I
        });
    }
    if ('IMAGE' === O)
        return null == A || 0 === A || null == p || 0 === p
            ? (0, a.jsx)('img', {
                  src: L,
                  alt: T,
                  className: s()(E.slide, t),
                  onContextMenu: I
              })
            : (0, a.jsx)(u.ZP, {
                  ...R,
                  imageClassName: s()(E.slide, t),
                  src: L,
                  width: A,
                  height: p,
                  shouldLink: !1,
                  maxWidth: P,
                  maxHeight: C,
                  animated: !r && n.animated,
                  autoPlay: !r,
                  alt: T,
                  zoomThumbnailPlaceholder: n.zoomThumbnailPlaceholder,
                  onContextMenu: I
              });
    return null;
}
