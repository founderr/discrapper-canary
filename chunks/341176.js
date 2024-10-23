t.d(n, {
    D: function () {
        return _;
    },
    Z: function () {
        return p;
    }
});
var a = t(200651),
    r = t(120356),
    i = t.n(r),
    o = t(524444),
    l = t(52824),
    s = t(956664),
    u = t(589530),
    c = t(591759),
    d = t(124347),
    f = t(80966),
    h = t(519817);
let _ = {
    DEFAULT: null,
    CONTAIN: h.contain,
    SCALE_DOWN: h.scaleDown
};
function p(e) {
    let { media: n, fit: t = _.DEFAULT, obscured: r = !1, onContextMenu: p } = e,
        { width: m, height: C, url: E, proxyUrl: g, alt: S, type: L, maxWidth: x, maxHeight: A, ...O } = n,
        { width: v, height: R } = (0, s.zp)(null != m ? m : 0, null != C ? C : 0),
        N = (0, l.q)({
            proxyURL: g,
            url: E
        }),
        b = !(null == m || 0 === m || null == C || 0 === C);
    if ('VIDEO' === L && b && null != g) {
        var M;
        let e = (function (e) {
            let n = c.Z.toURLSafe(e);
            return null == n ? null : (n.searchParams.append('format', 'webp'), n.toString());
        })(g);
        if (null == e) return null;
        let t = null !== (M = n.renderLinkComponent) && void 0 !== M ? M : o.iT;
        return (0, a.jsx)(f.Z, {
            ...O,
            src: N,
            width: m,
            height: C,
            maxWidth: v,
            maxHeight: R,
            poster: e,
            naturalWidth: m,
            naturalHeight: C,
            volume: u.FC,
            autoMute: u.rs,
            onVolumeChange: u.jA,
            onMute: u.Zj,
            renderLinkComponent: t,
            autoPlay: !r,
            alt: S,
            onContextMenu: p
        });
    }
    if ('IMAGE' === L)
        return b
            ? (0, a.jsx)(d.ZP, {
                  ...O,
                  imageClassName: i()(h.slide, t),
                  src: N,
                  width: m,
                  height: C,
                  shouldLink: !1,
                  maxWidth: v,
                  maxHeight: R,
                  animated: !r && n.animated,
                  autoPlay: !r,
                  alt: S,
                  zoomThumbnailPlaceholder: n.zoomThumbnailPlaceholder,
                  onContextMenu: p
              })
            : (0, a.jsx)('img', {
                  src: N,
                  alt: S,
                  className: i()(h.slide, t),
                  onContextMenu: p
              });
    return null;
}
