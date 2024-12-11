t.d(n, {
    D: function () {
        return x;
    }
});
var i = t(200651),
    a = t(192379),
    r = t(120356),
    l = t.n(r),
    o = t(378409),
    s = t(124347),
    u = t(80966),
    c = t(480050),
    d = t(524444),
    h = t(52824),
    m = t(956664),
    p = t(589530),
    f = t(591759),
    g = t(212459),
    _ = t(427244);
function x(e) {
    let n = f.Z.toURLSafe(e);
    return null == n ? null : (n.searchParams.append('format', 'webp'), n.toString());
}
n.Z = a.memo(function (e) {
    let n,
        { media: t, obscured: a = !1, onContextMenu: r } = e,
        { width: C, height: S, url: v, proxyUrl: E, alt: I, type: y, maxWidth: b, maxHeight: L, ...M } = t,
        { zoomed: A, setZoomed: j } = (0, g.Y)(),
        O = (function (e, n, t) {
            return e && f.Z.isDiscordUrl(n, !0)
                ? (0, o.s$)(n)
                : (0, h.q)({
                      proxyURL: t,
                      url: n
                  });
        })(A, v, E),
        { width: T, height: R } = (0, m.zp)(null != C ? C : 0, null != S ? S : 0),
        w = !(null == C || 0 === C || null == S || 0 === S);
    if ('VIDEO' === y && w && null != E) {
        var N;
        let e = x(E);
        if (null == e) return null;
        let n = null !== (N = t.renderLinkComponent) && void 0 !== N ? N : d.iT;
        return (0, i.jsx)(u.Z, {
            ...M,
            src: O,
            width: C,
            height: S,
            maxWidth: T,
            maxHeight: R,
            poster: e,
            naturalWidth: C,
            naturalHeight: S,
            volume: p.FC,
            autoMute: p.rs,
            onVolumeChange: p.jA,
            onMute: p.Zj,
            renderLinkComponent: n,
            autoPlay: !a,
            alt: I,
            onContextMenu: r
        });
    }
    return (
        'IMAGE' === y &&
            (n = w
                ? (0, i.jsx)(s.ZP, {
                      ...M,
                      src: O,
                      width: C,
                      height: S,
                      shouldLink: !1,
                      maxWidth: T,
                      maxHeight: R,
                      useFullWidth: !0,
                      animated: !a && t.animated,
                      autoPlay: !a,
                      alt: I,
                      zoomThumbnailPlaceholder: t.zoomThumbnailPlaceholder,
                      onContextMenu: r
                  })
                : (0, i.jsx)('img', {
                      src: O,
                      alt: I,
                      onContextMenu: r,
                      className: _.dimensionlessImage
                  })),
        null != n
            ? (0, i.jsx)(c.Z, {
                  width: C,
                  height: S,
                  maxWidth: T,
                  maxHeight: R,
                  active: A,
                  className: l()(_.wrapper, { [_.zoomed]: A }),
                  onClick: () => j(!A),
                  children: n
              })
            : null
    );
});
