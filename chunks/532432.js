n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(481060),
    a = n(654904),
    o = n(993413),
    c = n(486324),
    d = n(388032),
    u = n(881483);
let m = [
    {
        name: 'gif',
        extensions: ['gif']
    }
];
function h(e) {
    let { showRemoveAvatarButton: t, errors: n, onAvatarChange: s, sectionTitle: h, changeAvatarButtonText: g, guildId: p, className: x, disabled: S = !1, isTryItOutFlow: T = !1, forcedDivider: E, withHighlight: C = !1 } = e,
        _ = C ? l.ShinyButton : l.Button;
    return (0, i.jsx)(o.Z, {
        className: x,
        title: h,
        errors: n,
        disabled: S,
        forcedDivider: E,
        children: (0, i.jsxs)('div', {
            className: u.buttonsContainer,
            children: [
                (0, i.jsx)(_, {
                    className: r()({ [u.buttonHighlighted]: C }),
                    size: l.Button.Sizes.SMALL,
                    onClick: () => (0, a.$r)(c.pC.AVATAR, p, T, T ? m : void 0),
                    children: null != g ? g : d.intl.string(d.t['4OynCA'])
                }),
                t &&
                    (0, i.jsx)(l.Button, {
                        className: u.removeButton,
                        color: l.Button.Colors.PRIMARY,
                        look: l.Button.Looks.LINK,
                        size: l.Button.Sizes.SMALL,
                        onClick: () => s(null),
                        children: null != p ? d.intl.string(d.t.TDjKDg) : d.intl.string(d.t.twB3f3)
                    })
            ]
        })
    });
}
