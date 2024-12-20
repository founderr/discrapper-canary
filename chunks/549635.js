t.d(n, {
    D: function () {
        return E;
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
    _ = t(254109),
    g = t(212459),
    S = t(427244);
function E(e) {
    let n = f.Z.toURLSafe(e);
    return null == n ? null : (n.searchParams.append('format', 'webp'), n.toString());
}
n.Z = a.memo(function (e) {
    let n,
        { media: t, obscured: a = !1, onContextMenu: r } = e,
        { width: x, height: C, url: v, proxyUrl: I, alt: y, type: M, maxWidth: O, maxHeight: L, ...b } = t,
        { zoomed: A, setZoomed: T } = (0, g.Y)(),
        j = (function (e, n, t) {
            return e && f.Z.isDiscordUrl(n, !0)
                ? (0, o.s$)(n)
                : (0, h.q)({
                      proxyURL: t,
                      url: n
                  });
        })(A, v, I),
        { width: R, height: N } = (0, m.zp)(null != x ? x : 0, null != C ? C : 0),
        D = !(null == x || 0 === x || null == C || 0 === C);
    if ('VIDEO' === M && D && null != I) {
        var P;
        let e = E(I);
        if (null == e) return null;
        let n = null !== (P = t.renderLinkComponent) && void 0 !== P ? P : d.iT;
        return (0, i.jsx)(u.Z, {
            ...b,
            src: j,
            width: x,
            height: C,
            maxWidth: R,
            maxHeight: N,
            poster: e,
            naturalWidth: x,
            naturalHeight: C,
            volume: p.FC,
            autoMute: p.rs,
            onVolumeChange: p.jA,
            onMute: p.Zj,
            renderLinkComponent: n,
            autoPlay: !a,
            alt: y,
            onContextMenu: r
        });
    }
    return (
        'IMAGE' === M &&
            (n = D
                ? (0, i.jsx)(s.ZP, {
                      ...b,
                      src: j,
                      width: x,
                      height: C,
                      shouldLink: !1,
                      maxWidth: R,
                      maxHeight: N,
                      useFullWidth: !0,
                      animated: !a && t.animated,
                      autoPlay: !a,
                      alt: y,
                      zoomThumbnailPlaceholder: t.zoomThumbnailPlaceholder,
                      onContextMenu: r
                  })
                : (0, i.jsx)('img', {
                      src: j,
                      alt: y,
                      onContextMenu: r,
                      className: S.dimensionlessImage
                  })),
        null != n
            ? (0, i.jsx)(c.Z, {
                  width: x,
                  height: C,
                  maxWidth: R,
                  maxHeight: N,
                  active: A,
                  className: l()(S.wrapper, { [S.zoomed]: A }),
                  onClick: () => {
                      T(!A), (0, _.yg)(A ? _.uG.ZOOM_OUT_IMAGE_PRESSED : _.uG.ZOOM_IN_IMAGE_PRESSED);
                  },
                  children: n
              })
            : null
    );
});
