t.d(e, {
    D: function () {
        return f;
    }
});
var r = t(200651),
    i = t(192379),
    l = t(124347),
    o = t(80966),
    a = t(524444),
    s = t(52824),
    u = t(956664),
    c = t(589530),
    d = t(591759),
    m = t(718263);
function f(n) {
    let e = d.Z.toURLSafe(n);
    return null == e ? null : (e.searchParams.append('format', 'webp'), e.toString());
}
e.Z = i.memo(function (n) {
    let { media: e, obscured: t = !1, onContextMenu: i } = n,
        { width: d, height: h, url: _, proxyUrl: x, alt: p, type: C, maxWidth: g, maxHeight: S, ...E } = e,
        { width: L, height: v } = (0, u.zp)(null != d ? d : 0, null != h ? h : 0),
        A = (0, s.q)({
            proxyURL: x,
            url: _
        }),
        I = !(null == d || 0 === d || null == h || 0 === h);
    if ('VIDEO' === C && I && null != x) {
        var O;
        let n = f(x);
        if (null == n) return null;
        let l = null !== (O = e.renderLinkComponent) && void 0 !== O ? O : a.iT;
        return (0, r.jsx)(o.Z, {
            ...E,
            src: A,
            width: d,
            height: h,
            maxWidth: L,
            maxHeight: v,
            responsive: !0,
            poster: n,
            naturalWidth: d,
            naturalHeight: h,
            volume: c.FC,
            autoMute: c.rs,
            onVolumeChange: c.jA,
            onMute: c.Zj,
            renderLinkComponent: l,
            autoPlay: !t,
            alt: p,
            onContextMenu: i
        });
    }
    if ('IMAGE' === C)
        return I
            ? (0, r.jsx)(l.ZP, {
                  ...E,
                  src: A,
                  width: d,
                  height: h,
                  shouldLink: !1,
                  maxWidth: L,
                  maxHeight: v,
                  animated: !t && e.animated,
                  autoPlay: !t,
                  alt: p,
                  zoomThumbnailPlaceholder: e.zoomThumbnailPlaceholder,
                  onContextMenu: i,
                  responsive: !0
              })
            : (0, r.jsx)('img', {
                  src: A,
                  alt: p,
                  onContextMenu: i,
                  className: m.dimensionlessImage
              });
    return null;
});
