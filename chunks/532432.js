t.d(s, {
    Z: function () {
        return E;
    }
});
var n = t(200651);
t(192379);
var a = t(120356),
    i = t.n(a),
    r = t(481060),
    o = t(654904),
    l = t(993413),
    c = t(486324),
    d = t(689938),
    _ = t(680029);
let u = [
    {
        name: 'gif',
        extensions: ['gif']
    }
];
function E(e) {
    let { showRemoveAvatarButton: s, errors: t, onAvatarChange: a, sectionTitle: E, changeAvatarButtonText: T, guildId: S, className: I, disabled: N = !1, isTryItOutFlow: m = !1, forcedDivider: A, withHighlight: C = !1 } = e,
        g = C ? r.ShinyButton : r.Button;
    return (0, n.jsx)(l.Z, {
        className: I,
        title: E,
        errors: t,
        disabled: N,
        forcedDivider: A,
        children: (0, n.jsxs)('div', {
            className: _.buttonsContainer,
            children: [
                (0, n.jsx)(g, {
                    className: i()({ [_.buttonHighlighted]: C }),
                    size: r.Button.Sizes.SMALL,
                    onClick: () => (0, o.$r)(c.pC.AVATAR, S, m, m ? u : void 0),
                    children: null != T ? T : d.Z.Messages.USER_SETTINGS_CHANGE_AVATAR
                }),
                s &&
                    (0, n.jsx)(r.Button, {
                        className: _.removeButton,
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
