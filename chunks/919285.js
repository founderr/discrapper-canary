n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var a = n(82950),
    s = n(434404),
    r = n(929507),
    l = n(981631),
    o = n(689938),
    c = n(943935);
function d(e) {
    let { guild: t } = e,
        n = () => r.Z.dismissNotice(t.id);
    return (0, i.jsx)(a.Z, {
        guild: t,
        onDismissed: n,
        cta: o.Z.Messages.CHECK_IT_OUT,
        message: o.Z.Messages.COMMANDS_SCOPE_MIGRATION_ADMIN_NOTICE.format(),
        type: l.vID.COMMANDS_MIGRATION,
        image: c,
        onClick: () => {
            n(), s.Z.open(t.id, l.pNK.INTEGRATIONS);
        },
        imageMarginTop: 15,
        imageMarginX: 22
    });
}
