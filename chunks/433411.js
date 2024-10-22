t.d(s, {
    Z: function () {
        return N;
    }
});
var n = t(200651),
    a = t(192379),
    i = t(120356),
    r = t.n(i),
    o = t(481060),
    l = t(906732),
    c = t(864106),
    d = t(1585),
    _ = t(580747),
    u = t(345861),
    E = t(150039),
    T = t(993413),
    S = t(689938),
    I = t(406926);
function N(e) {
    let { user: s, guild: t, className: i, sectionTitle: u, forcedDivider: N = !1, withTutorial: C = !1, isTryItOutFlow: A = !1 } = e,
        { analyticsLocations: g } = (0, l.ZP)(),
        h = null != t,
        { userAvatarDecoration: O, guildAvatarDecoration: p, pendingAvatarDecoration: R, pendingErrors: x } = (0, E.$U)(s, t),
        M = (0, _.Z)('enable_avatar_decoration_uploads'),
        f = a.useCallback(
            () =>
                (0, d.ps)({
                    analyticsLocations: g,
                    isTryItOutFlow: A,
                    guild: t
                }),
            [g, A, t]
        ),
        D = A || void 0 !== R ? null != R : (h ? p : O) != null,
        L = C ? o.ShinyButton : o.Button;
    return (0, n.jsxs)(T.Z, {
        className: i,
        forcedDivider: N,
        hasBackground: !0,
        title: u,
        errors: x,
        children: [
            (0, n.jsxs)('div', {
                className: I.buttonsContainer,
                children: [
                    (0, n.jsx)(L, {
                        size: o.Button.Sizes.SMALL,
                        onClick: f,
                        className: r()({ [I.buttonHighlighted]: C }),
                        children: S.Z.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
                    }),
                    D &&
                        (0, n.jsx)(o.Button, {
                            className: I.removeButton,
                            color: o.Button.Colors.PRIMARY,
                            look: o.Button.Looks.LINK,
                            size: o.Button.Sizes.SMALL,
                            onClick: function () {
                                (0, E.PO)(null == t ? void 0 : t.id, null);
                            },
                            children: (0, c.ad)(s, t) ? S.Z.Messages.USER_SETTINGS_REMOVE_PER_GUILD_AVATAR_DECORATION : S.Z.Messages.USER_SETTINGS_REMOVE_AVATAR_DECORATION
                        })
                ]
            }),
            s.isStaff() && M && (0, n.jsx)(m, { user: s })
        ]
    });
}
let m = (e) => {
    let { user: s } = e;
    return (0, n.jsxs)('div', {
        className: I.overrideButtonsContainer,
        children: [
            (0, n.jsx)(o.Text, {
                variant: 'text-xs/bold',
                children: 'STAFF ONLY and Experimental. Upload a decoration to view throughout the app.'
            }),
            (0, n.jsx)(u.Z, {
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
