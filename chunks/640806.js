n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var r = n(704215),
    l = n(230711),
    a = n(765585),
    o = n(981631),
    s = n(921944),
    c = n(388032),
    d = n(502957);
function u(e) {
    let { markAsDismissed: t } = e;
    return (0, i.jsx)(a.Z, {
        header: c.intl.string(c.t['89R9tb']),
        body: c.intl.string(c.t['/BB09P']),
        tryItText: c.intl.string(c.t.jVcuVV),
        dismissibleContent: r.z.SOUNDBOARD_VOLUME_EDUCATION,
        artClassName: d.art,
        onTryFeature: () => {
            l.Z.open(o.oAB.VOICE), t(s.L.UNKNOWN);
        },
        onClose: () => t(s.L.UNKNOWN),
        shouldUseHorizontalButtons: !0,
        inlineArt: !0
    });
}
