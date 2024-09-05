t.d(s, {
    Z: function () {
        return E;
    }
});
var n = t(735250);
t(470079);
var a = t(120356),
    i = t.n(a),
    r = t(481060),
    o = t(654904),
    l = t(993413),
    c = t(486324),
    d = t(689938),
    u = t(335027);
let _ = [
    {
        name: 'gif',
        extensions: ['gif']
    }
];
function E(e) {
    let { showRemoveAvatarButton: s, errors: t, onAvatarChange: a, sectionTitle: E, changeAvatarButtonText: T, guildId: S, className: I, disabled: N = !1, isTryItOutFlow: m = !1, forcedDivider: C, withHighlight: g = !1 } = e,
        A = g ? r.ShinyButton : r.Button;
    return (0, n.jsx)(l.Z, {
        className: I,
        title: E,
        errors: t,
        disabled: N,
        forcedDivider: C,
        children: (0, n.jsxs)('div', {
            className: u.buttonsContainer,
            children: [
                (0, n.jsx)(A, {
                    className: i()({ [u.buttonHighlighted]: g }),
                    size: r.Button.Sizes.SMALL,
                    onClick: () => (0, o.$r)(c.pC.AVATAR, S, m, m ? _ : void 0),
                    children: null != T ? T : d.Z.Messages.USER_SETTINGS_CHANGE_AVATAR
                }),
                s &&
                    (0, n.jsx)(r.Button, {
                        className: u.removeButton,
                        color: r.Button.Colors.PRIMARY,
                        look: r.Button.Looks.LINK,
                        size: r.Button.Sizes.SMALL,
                        onClick: () => a(null),
                        children: null != S ? d.Z.Messages.USER_SETTINGS_RESET_AVATAR : d.Z.Messages.USER_SETTINGS_REMOVE_AVATAR
                    })
            ]
        })
    });
}
