r.d(n, {
    Z: function () {
        return _;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(442837),
    o = r(872810),
    l = r(569545),
    u = r(592125),
    c = r(112560),
    d = r(388032);
let f = r(340109);
function _(e) {
    let { stream: n, width: r, noArt: _ = !1, selected: h = !1 } = e,
        p = (0, s.e7)([u.Z], () => u.Z.getChannel(n.channelId));
    return (
        a.useEffect(() => {
            (null == p ? void 0 : p.isGuildStageVoice()) && (0, o.aP)((0, l.V9)(n), !1);
        }, []),
        (0, i.jsx)(c.Z, {
            artURL: f,
            noArt: _,
            selected: h,
            size: (0, c.L)(r),
            header: d.intl.formatToMarkdownString(d.t['1Ww0Hh'], {}),
            onCTAClick: () => (0, o.aP)((0, l.V9)(n)),
            callToAction: d.intl.string(d.t['4EGMWF'])
        })
    );
}
