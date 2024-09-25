n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(403182),
    o = n(124347),
    s = n(640108),
    l = n(981631),
    u = n(689938);
class c extends i.Component {
    render() {
        let { src: e, fileSize: t, className: n, mediaPlayerClassName: i, poster: c, fileName: d, naturalWidth: _, naturalHeight: E, playable: f, downloadable: h = !0, volume: p, autoPlay: m, autoMute: I, responsive: T, mediaLayoutType: g, mimeType: S, renderOverlayContent: A, renderLinkComponent: v, onClick: N, onPlay: O, onPause: R, onEnded: C, onControlsShow: y, onControlsHide: b, onVolumeChange: L, onMute: D, alt: M = u.Z.Messages.VIDEO, ...P } = this.props;
        return (0, r.jsx)(o.Z, {
            alt: M,
            className: n,
            src: c,
            ...P,
            minWidth: s.ZP.minWidth,
            minHeight: s.ZP.minHeight,
            shouldLink: !1,
            shouldAnimate: !1,
            mediaLayoutType: g,
            responsive: T,
            children: (n) => {
                let {
                        src: o,
                        size: { width: u, height: c }
                    } = n,
                    M = !((_ <= l.N_j && E <= l.XKF) || (_ <= l.XKF && E <= l.N_j));
                return (0, r.jsx)(s.ZP, {
                    className: i,
                    forceExternal: M,
                    src: e,
                    poster: o,
                    width: u,
                    height: c,
                    responsive: T,
                    volume: p,
                    autoPlay: null != m && m,
                    autoMute: null != I && I,
                    type: s.ZP.Types.VIDEO,
                    mediaLayoutType: g,
                    fileName: d,
                    fileSize: null == t ? void 0 : (0, a.Ng)(t),
                    fileSizeBytes: null == t ? void 0 : t,
                    playable: f,
                    renderLinkComponent: v,
                    renderOverlayContent: A,
                    onClick: N,
                    onPlay: O,
                    onPause: R,
                    onEnded: C,
                    onVolumeChange: L,
                    onMute: D,
                    onControlsShow: y,
                    onControlsHide: b,
                    mimeType: S,
                    downloadable: h
                });
            }
        });
    }
}
