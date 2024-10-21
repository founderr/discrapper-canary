t.d(s, {
    Z: function () {
        return u;
    }
});
var n = t(200651);
t(192379);
var a = t(442837),
    i = t(481060),
    r = t(993413),
    o = t(496675),
    l = t(52597),
    c = t(981631),
    d = t(689938),
    _ = t(983078);
function u(e) {
    let { errors: s, pendingNick: t, currentNick: u, username: E, guild: T } = e,
        S = null != t ? t : u,
        I = (0, a.e7)([o.Z], () => o.Z.can(c.Plq.CHANGE_NICKNAME, T) || o.Z.can(c.Plq.MANAGE_NICKNAMES, T));
    return (0, n.jsxs)(r.Z, {
        title: d.Z.Messages.SERVER_NICKNAME,
        errors: s,
        children: [
            (0, n.jsx)(i.TextInput, {
                value: null != S ? S : '',
                placeholder: E,
                maxLength: c.l$U,
                onChange: function (e) {
                    (0, l.wi)(e, u);
                },
                disabled: !I
            }),
            !I &&
                (0, n.jsx)(i.FormText, {
                    className: _.nicknameDisabled,
                    type: i.FormText.Types.DESCRIPTION,
                    children: d.Z.Messages.CHANGE_IDENTITY_NICKNAME_PERMISSIONS_DISABLED
                })
        ]
    });
}
