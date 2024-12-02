t.d(n, {
    D: function () {
        return _;
    }
});
var i = t(200651),
    r = t(192379),
    a = t(120356),
    l = t.n(a),
    o = t(378409),
    s = t(124347),
    u = t(80966),
    c = t(480050),
    d = t(524444),
    h = t(52824),
    m = t(956664),
    f = t(589530),
    p = t(591759),
    g = t(212459),
    x = t(427244);
function _(e) {
    let n = p.Z.toURLSafe(e);
    return null == n ? null : (n.searchParams.append('format', 'webp'), n.toString());
}
n.Z = r.memo(function (e) {
    let n,
        { media: t, obscured: r = !1, onContextMenu: a } = e,
        { width: C, height: S, url: v, proxyUrl: y, alt: E, type: I, maxWidth: b, maxHeight: L, ...M } = t,
        { zoomed: A, setZoomed: j } = (0, g.Y)(),
        O = (function (e, n, t) {
            return e && p.Z.isDiscordUrl(n, !0)
                ? (0, o.s$)(n)
                : (0, h.q)({
                      proxyURL: t,
                      url: n
                  });
        })(A, v, y),
        { width: T, height: R } = (0, m.zp)(null != C ? C : 0, null != S ? S : 0),
        w = !(null == C || 0 === C || null == S || 0 === S);
    if ('VIDEO' === I && w && null != y) {
        var k;
        let e = _(y);
        if (null == e) return null;
        let n = null !== (k = t.renderLinkComponent) && void 0 !== k ? k : d.iT;
        return (0, i.jsx)(u.Z, {
            ...M,
            src: O,
            width: C,
            height: S,
            maxWidth: T,
            maxHeight: R,
            responsive: !0,
            poster: e,
            naturalWidth: C,
            naturalHeight: S,
            volume: f.FC,
            autoMute: f.rs,
            onVolumeChange: f.jA,
            onMute: f.Zj,
            renderLinkComponent: n,
            autoPlay: !r,
            alt: E,
            onContextMenu: a
        });
    }
    return (
        'IMAGE' === I &&
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
                      animated: !r && t.animated,
                      autoPlay: !r,
                      alt: E,
                      zoomThumbnailPlaceholder: t.zoomThumbnailPlaceholder,
                      onContextMenu: a,
                      responsive: !0
                  })
                : (0, i.jsx)('img', {
                      src: O,
                      alt: E,
                      onContextMenu: a,
                      className: x.dimensionlessImage
                  })),
        null != n
            ? (0, i.jsx)(c.Z, {
                  width: C,
                  height: S,
                  maxWidth: T,
                  maxHeight: R,
                  active: A,
                  className: l()(x.wrapper, { [x.zoomed]: A }),
                  onClick: () => j(!A),
                  children: n
              })
            : null
    );
});
