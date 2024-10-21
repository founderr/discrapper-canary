t.d(s, {
    Z: function () {
        return u;
    }
});
var n = t(200651),
    a = t(442837),
    i = t(718629),
    r = t(615830),
    o = t(630759),
    l = t(838436),
    c = t(51331),
    d = t(726985),
    _ = t(689938);
function u() {
    let e = (0, a.e7)([r.Z], () => r.Z.getPersistentCodesEnabled());
    return (0, n.jsx)(l.U, {
        setting: d.s6.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES,
        children: (0, n.jsx)(c.Z, {
            value: e,
            onChange: i.Z.updatePersistentCodesEnabled,
            title: _.Z.Messages.E2EE_ENABLE_PERSISTENT_CODES,
            note: _.Z.Messages.E2EE_PERSISTENT_CODES_DESCRIPTION.format({ helpArticle: (0, o.aZ)() })
        })
    });
}
