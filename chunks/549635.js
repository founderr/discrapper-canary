var r = t(200651),
    a = t(192379),
    i = t(124347),
    o = t(80966),
    l = t(524444),
    s = t(52824),
    u = t(956664),
    c = t(589530),
    d = t(591759),
    _ = t(718263);
n.Z = a.memo(function (e) {
    let { media: n, obscured: t = !1, onContextMenu: a } = e,
        { width: m, height: h, url: f, proxyUrl: E, alt: x, type: p, maxWidth: C, maxHeight: S, ...g } = n,
        { width: A, height: L } = (0, u.zp)(null != m ? m : 0, null != h ? h : 0),
        O = (0, s.q)({
            proxyURL: E,
            url: f
        }),
        M = !(null == m || 0 === m || null == h || 0 === h);
    if ('VIDEO' === p && M && null != E) {
        var I;
        let e = (function (e) {
            let n = d.Z.toURLSafe(e);
            return null == n ? null : (n.searchParams.append('format', 'webp'), n.toString());
        })(E);
        if (null == e) return null;
        let i = null !== (I = n.renderLinkComponent) && void 0 !== I ? I : l.iT;
        return (0, r.jsx)(o.Z, {
            ...g,
            src: O,
            width: m,
            height: h,
            maxWidth: A,
            maxHeight: L,
            responsive: !0,
            poster: e,
            naturalWidth: m,
            naturalHeight: h,
            volume: c.FC,
            autoMute: c.rs,
            onVolumeChange: c.jA,
            onMute: c.Zj,
            renderLinkComponent: i,
            autoPlay: !t,
            alt: x,
            onContextMenu: a
        });
    }
    if ('IMAGE' === p)
        return M
            ? (0, r.jsx)(i.ZP, {
                  ...g,
                  src: O,
                  width: m,
                  height: h,
                  shouldLink: !1,
                  maxWidth: A,
                  maxHeight: L,
                  animated: !t && n.animated,
                  autoPlay: !t,
                  alt: x,
                  zoomThumbnailPlaceholder: n.zoomThumbnailPlaceholder,
                  onContextMenu: a,
                  responsive: !0
              })
            : (0, r.jsx)('img', {
                  src: O,
                  alt: x,
                  onContextMenu: a,
                  className: _.dimensionlessImage
              });
    return null;
});
