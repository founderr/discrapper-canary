n.d(t, {
    Z: function () {
        return f;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(872810),
    o = n(569545),
    l = n(592125),
    u = n(112560),
    c = n(388032);
let d = n(340109);
function f(e) {
    let { stream: t, width: n, noArt: f = !1, selected: _ = !1 } = e,
        h = (0, a.e7)([l.Z], () => l.Z.getChannel(t.channelId));
    return (
        i.useEffect(() => {
            (null == h ? void 0 : h.isGuildStageVoice()) && (0, s.aP)((0, o.V9)(t), !1);
        }, []),
        (0, r.jsx)(u.Z, {
            artURL: d,
            noArt: f,
            selected: _,
            size: (0, u.L)(n),
            header: c.intl.formatToMarkdownString(c.t['1Ww0Hh'], {}),
            onCTAClick: () => (0, s.aP)((0, o.V9)(t)),
            callToAction: c.intl.string(c.t['4EGMWF'])
        })
    );
}
