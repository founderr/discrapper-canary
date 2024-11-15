t.d(n, {
    D: function () {
        return h;
    }
});
var r = t(200651),
    i = t(192379),
    a = t(124347),
    o = t(80966),
    l = t(524444),
    s = t(52824),
    u = t(956664),
    c = t(589530),
    d = t(591759),
    m = t(767656);
function h(e) {
    let n = d.Z.toURLSafe(e);
    return null == n ? null : (n.searchParams.append('format', 'webp'), n.toString());
}
n.Z = i.memo(function (e) {
    let { media: n, obscured: t = !1, onContextMenu: i } = e,
        { width: d, height: f, url: p, proxyUrl: g, alt: _, type: C, maxWidth: x, maxHeight: S, ...v } = n,
        { width: E, height: I } = (0, u.zp)(null != d ? d : 0, null != f ? f : 0),
        y = (0, s.q)({
            proxyURL: g,
            url: p
        }),
        L = !(null == d || 0 === d || null == f || 0 === f);
    if ('VIDEO' === C && L && null != g) {
        var A;
        let e = h(g);
        if (null == e) return null;
        let a = null !== (A = n.renderLinkComponent) && void 0 !== A ? A : l.iT;
        return (0, r.jsx)(o.Z, {
            ...v,
            src: y,
            width: d,
            height: f,
            maxWidth: E,
            maxHeight: I,
            responsive: !0,
            poster: e,
            naturalWidth: d,
            naturalHeight: f,
            volume: c.FC,
            autoMute: c.rs,
            onVolumeChange: c.jA,
            onMute: c.Zj,
            renderLinkComponent: a,
            autoPlay: !t,
            alt: _,
            onContextMenu: i
        });
    }
    if ('IMAGE' === C)
        return L
            ? (0, r.jsx)(a.ZP, {
                  ...v,
                  src: y,
                  width: d,
                  height: f,
                  shouldLink: !1,
                  maxWidth: E,
                  maxHeight: I,
                  animated: !t && n.animated,
                  autoPlay: !t,
                  alt: _,
                  zoomThumbnailPlaceholder: n.zoomThumbnailPlaceholder,
                  onContextMenu: i,
                  responsive: !0
              })
            : (0, r.jsx)('img', {
                  src: y,
                  alt: _,
                  onContextMenu: i,
                  className: m.dimensionlessImage
              });
    return null;
});
