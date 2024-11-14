t.d(n, {
    D: function () {
        return f;
    }
});
var r = t(200651),
    i = t(192379),
    a = t(124347),
    l = t(80966),
    o = t(524444),
    s = t(52824),
    u = t(956664),
    c = t(589530),
    d = t(591759),
    m = t(718263);
function f(e) {
    let n = d.Z.toURLSafe(e);
    return null == n ? null : (n.searchParams.append('format', 'webp'), n.toString());
}
n.Z = i.memo(function (e) {
    let { media: n, obscured: t = !1, onContextMenu: i } = e,
        { width: d, height: h, url: p, proxyUrl: g, alt: _, type: x, maxWidth: S, maxHeight: C, ...v } = n,
        { width: E, height: y } = (0, u.zp)(null != d ? d : 0, null != h ? h : 0),
        L = (0, s.q)({
            proxyURL: g,
            url: p
        }),
        I = !(null == d || 0 === d || null == h || 0 === h);
    if ('VIDEO' === x && I && null != g) {
        var A;
        let e = f(g);
        if (null == e) return null;
        let a = null !== (A = n.renderLinkComponent) && void 0 !== A ? A : o.iT;
        return (0, r.jsx)(l.Z, {
            ...v,
            src: L,
            width: d,
            height: h,
            maxWidth: E,
            maxHeight: y,
            responsive: !0,
            poster: e,
            naturalWidth: d,
            naturalHeight: h,
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
    if ('IMAGE' === x)
        return I
            ? (0, r.jsx)(a.ZP, {
                  ...v,
                  src: L,
                  width: d,
                  height: h,
                  shouldLink: !1,
                  maxWidth: E,
                  maxHeight: y,
                  animated: !t && n.animated,
                  autoPlay: !t,
                  alt: _,
                  zoomThumbnailPlaceholder: n.zoomThumbnailPlaceholder,
                  onContextMenu: i,
                  responsive: !0
              })
            : (0, r.jsx)('img', {
                  src: L,
                  alt: _,
                  onContextMenu: i,
                  className: m.dimensionlessImage
              });
    return null;
});
