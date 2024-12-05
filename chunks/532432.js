n.d(t, {
    Z: function () {
        return g;
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
function g(e) {
    let { showRemoveAvatarButton: t, errors: n, onAvatarChange: s, sectionTitle: g, changeAvatarButtonText: h, guildId: p, className: x, disabled: T = !1, isTryItOutFlow: S = !1, forcedDivider: _, withHighlight: E = !1 } = e,
        C = E ? l.ShinyButton : l.Button;
    return (0, i.jsx)(o.Z, {
        className: x,
        title: g,
        errors: n,
        disabled: T,
        forcedDivider: _,
        children: (0, i.jsxs)('div', {
            className: u.buttonsContainer,
            children: [
                (0, i.jsx)(C, {
                    className: r()({ [u.buttonHighlighted]: E }),
                    size: l.Button.Sizes.SMALL,
                    onClick: () => (0, a.$r)(c.pC.AVATAR, p, S, S ? m : void 0),
                    children: null != h ? h : d.intl.string(d.t['4OynCA'])
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
