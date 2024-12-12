r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(403182),
    o = r(640108);
class l extends a.PureComponent {
    render() {
        let { src: e, fileSize: n, fileName: r, className: a, playable: l, volume: u, renderLinkComponent: c, onVolumeChange: d, onVolumeShow: f, onVolumeHide: _, autoMute: h, onMute: p, mimeType: m, onPlay: g } = this.props;
        return (0, i.jsx)(o.ZP, {
            src: e,
            fileName: r,
            fileSize: (0, s.Ng)(n),
            fileSizeBytes: n,
            type: o.ZP.Types.AUDIO,
            className: a,
            playable: l,
            volume: u,
            onMute: p,
            autoMute: h,
            onVolumeChange: d,
            onVolumeShow: f,
            onVolumeHide: _,
            renderLinkComponent: c,
            mimeType: m,
            onPlay: g
        });
    }
}
