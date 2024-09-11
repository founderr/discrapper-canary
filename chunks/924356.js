t.d(s, {
    Z: function () {
        return d;
    }
});
var n = t(735250),
    a = t(695346),
    i = t(682578),
    r = t(838436),
    o = t(51331),
    l = t(726985),
    c = t(689938);
function d() {
    let e = a.xM.useSetting(),
        s = (0, i.J)();
    return (0, n.jsx)(r.U, {
        setting: l.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2,
        children: (0, n.jsx)(o.Z, {
            value: !!s && e,
            onChange: a.xM.updateSetting,
            title: c.Z.Messages.NSFW_DM_COMMANDS_HEADER,
            note: c.Z.Messages.NSFW_DM_COMMANDS_CAPTION,
            disabled: !s
        })
    });
}
