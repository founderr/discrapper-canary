t.d(s, {
    Z: function () {
        return N;
    }
});
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(481060),
    l = t(906732),
    c = t(864106),
    d = t(1585),
    u = t(580747),
    _ = t(345861),
    E = t(150039),
    T = t(993413),
    I = t(689938),
    S = t(539523);
function N(e) {
    let { user: s, guild: t, className: i, sectionTitle: _, forcedDivider: N = !1, withTutorial: C = !1, isTryItOutFlow: g = !1 } = e,
        { analyticsLocations: A } = (0, l.ZP)(),
        h = null != t,
        { userAvatarDecoration: O, guildAvatarDecoration: p, pendingAvatarDecoration: x, pendingErrors: R } = (0, E.$U)(s, t),
        f = (0, u.Z)('enable_avatar_decoration_uploads'),
        M = a.useCallback(
            () =>
                (0, d.ps)({
                    analyticsLocations: A,
                    isTryItOutFlow: g,
                    guild: t
                }),
            [A, g, t]
        ),
        D = g || void 0 !== x ? null != x : (h ? p : O) != null,
        P = C ? o.ShinyButton : o.Button;
    return (0, n.jsxs)(T.Z, {
        className: i,
        forcedDivider: N,
        hasBackground: !0,
        title: _,
        errors: R,
        children: [
            (0, n.jsxs)('div', {
                className: S.buttonsContainer,
                children: [
                    (0, n.jsx)(P, {
                        size: o.Button.Sizes.SMALL,
                        onClick: M,
                        className: r()({ [S.buttonHighlighted]: C }),
                        children: I.Z.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
                    }),
                    D &&
                        (0, n.jsx)(o.Button, {
                            className: S.removeButton,
                            color: o.Button.Colors.PRIMARY,
                            look: o.Button.Looks.LINK,
                            size: o.Button.Sizes.SMALL,
                            onClick: function () {
                                (0, E.PO)(null == t ? void 0 : t.id, null);
                            },
                            children: (0, c.ad)(s, t) ? I.Z.Messages.USER_SETTINGS_REMOVE_PER_GUILD_AVATAR_DECORATION : I.Z.Messages.USER_SETTINGS_REMOVE_AVATAR_DECORATION
                        })
                ]
            }),
            s.isStaff() && f && (0, n.jsx)(m, { user: s })
        ]
    });
}
let m = (e) => {
    let { user: s } = e;
    return (0, n.jsxs)('div', {
        className: S.overrideButtonsContainer,
        children: [
            (0, n.jsx)(o.Text, {
                variant: 'text-xs/bold',
                children: 'STAFF ONLY and Experimental. Upload a decoration to view throughout the app.'
            }),
            (0, n.jsx)(_.Z, {
                onChange: (e) => {
                    null != e &&
                        (s.avatarDecoration = {
                            asset: e,
                            skuID: 'PALUE000000001'
                        });
                },
                buttonCTA: 'Upload Override'
            })
        ]
    });
};
