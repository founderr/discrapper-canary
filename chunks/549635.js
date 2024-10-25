t.d(n, {
    D: function () {
        return _;
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
function _(e) {
    let n = d.Z.toURLSafe(e);
    return null == n ? null : (n.searchParams.append('format', 'webp'), n.toString());
}
n.Z = i.memo(function (e) {
    let { media: n, obscured: t = !1, onContextMenu: i } = e,
        { width: d, height: f, url: h, proxyUrl: E, alt: x, type: p, maxWidth: C, maxHeight: g, ...A } = n,
        { width: I, height: L } = (0, u.zp)(null != d ? d : 0, null != f ? f : 0),
        S = (0, s.q)({
            proxyURL: E,
            url: h
        }),
        M = !(null == d || 0 === d || null == f || 0 === f);
    if ('VIDEO' === p && M && null != E) {
        var O;
        let e = _(E);
        if (null == e) return null;
        let a = null !== (O = n.renderLinkComponent) && void 0 !== O ? O : o.iT;
        return (0, r.jsx)(l.Z, {
            ...A,
            src: S,
            width: d,
            height: f,
            maxWidth: I,
            maxHeight: L,
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
            alt: x,
            onContextMenu: i
        });
    }
    if ('IMAGE' === p)
        return M
            ? (0, r.jsx)(a.ZP, {
                  ...A,
                  src: S,
                  width: d,
                  height: f,
                  shouldLink: !1,
                  maxWidth: I,
                  maxHeight: L,
                  animated: !t && n.animated,
                  autoPlay: !t,
                  alt: x,
                  zoomThumbnailPlaceholder: n.zoomThumbnailPlaceholder,
                  onContextMenu: i,
                  responsive: !0
              })
            : (0, r.jsx)('img', {
                  src: S,
                  alt: x,
                  onContextMenu: i,
                  className: m.dimensionlessImage
              });
    return null;
});
