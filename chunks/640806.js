n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var r = n(704215),
    a = n(230711),
    l = n(765585),
    s = n(981631),
    o = n(921944),
    c = n(388032),
    d = n(501656);
function u(e) {
    let { markAsDismissed: t } = e;
    return (0, i.jsx)(l.Z, {
        header: c.intl.string(c.t['89R9tb']),
        body: c.intl.string(c.t['/BB09P']),
        tryItText: c.intl.string(c.t.jVcuVV),
        dismissibleContent: r.z.SOUNDBOARD_VOLUME_EDUCATION,
        artClassName: d.art,
        onTryFeature: () => {
            a.Z.open(s.oAB.VOICE), t(o.L.UNKNOWN);
        },
        onClose: () => t(o.L.UNKNOWN),
        shouldUseHorizontalButtons: !0,
        inlineArt: !0
    });
}
