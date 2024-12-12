r.d(n, {
    Z: function () {
        return d;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(403182),
    o = r(124347),
    l = r(640108),
    u = r(981631),
    c = r(388032);
class d extends a.Component {
    render() {
        let { src: e, fileSize: n, className: r, mediaPlayerClassName: a, poster: d, fileName: f, naturalWidth: _, naturalHeight: h, playable: p, downloadable: m = !0, volume: g, autoPlay: E, autoMute: v, responsive: I, mediaLayoutType: T, mimeType: b, renderOverlayContent: y, renderLinkComponent: S, onClick: A, onPlay: N, onPause: C, onEnded: R, onControlsShow: O, onControlsHide: D, onVolumeChange: L, onMute: x, alt: w = c.intl.string(c.t.FlNoSU), ...P } = this.props;
        return (0, i.jsx)(o.ZP, {
            alt: w,
            className: r,
            src: d,
            ...P,
            minWidth: l.ZP.minWidth,
            minHeight: l.ZP.minHeight,
            shouldLink: !1,
            shouldAnimate: !1,
            mediaLayoutType: T,
            responsive: I,
            children: (r) => {
                let {
                        src: o,
                        size: { width: c, height: d }
                    } = r,
                    w = !((_ <= u.N_j && h <= u.XKF) || (_ <= u.XKF && h <= u.N_j));
                return (0, i.jsx)(l.ZP, {
                    className: a,
                    forceExternal: w,
                    src: e,
                    poster: o,
                    width: c,
                    height: d,
                    responsive: I,
                    volume: g,
                    autoPlay: null != E && E,
                    autoMute: null != v && v,
                    type: l.ZP.Types.VIDEO,
                    mediaLayoutType: T,
                    fileName: f,
                    fileSize: null == n ? void 0 : (0, s.Ng)(n),
                    fileSizeBytes: null == n ? void 0 : n,
                    playable: p,
                    renderLinkComponent: S,
                    renderOverlayContent: y,
                    onClick: A,
                    onPlay: N,
                    onPause: C,
                    onEnded: R,
                    onVolumeChange: L,
                    onMute: x,
                    onControlsShow: O,
                    onControlsHide: D,
                    mimeType: b,
                    downloadable: m
                });
            }
        });
    }
}
