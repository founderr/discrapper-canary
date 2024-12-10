n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var r = n(324262),
    l = n(434404),
    a = n(929507),
    o = n(981631),
    s = n(388032),
    c = n(943935);
function d(e) {
    let { guild: t } = e,
        n = () => a.Z.dismissNotice(t.id);
    return (0, i.jsx)(r.Z, {
        guild: t,
        onDismissed: n,
        cta: s.intl.string(s.t.RzWDqa),
        message: s.intl.format(s.t['kQ/MDg'], {}),
        type: o.vID.COMMANDS_MIGRATION,
        image: c,
        onClick: () => {
            n(), l.Z.open(t.id, o.pNK.INTEGRATIONS);
        },
        imageMarginTop: 15,
        imageMarginX: 22
    });
}
