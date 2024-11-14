n.d(t, {
    Z: function () {
        return S;
    }
});
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(906732),
    c = n(864106),
    d = n(1585),
    u = n(580747),
    m = n(345861),
    h = n(150039),
    g = n(993413),
    p = n(388032),
    x = n(406926);
function S(e) {
    let { user: t, guild: n, className: r, sectionTitle: m, forcedDivider: S = !1, withTutorial: C = !1, isTryItOutFlow: _ = !1 } = e,
        { analyticsLocations: E } = (0, o.ZP)(),
        I = null != n,
        { userAvatarDecoration: f, guildAvatarDecoration: N, pendingAvatarDecoration: A, pendingErrors: b } = (0, h.$U)(t, n),
        v = (0, u.Z)('enable_avatar_decoration_uploads'),
        j = s.useCallback(
            () =>
                (0, d.ps)({
                    analyticsLocations: E,
                    isTryItOutFlow: _,
                    guild: n
                }),
            [E, _, n]
        ),
        O = _ || void 0 !== A ? null != A : (I ? N : f) != null,
        R = C ? a.ShinyButton : a.Button;
    return (0, i.jsxs)(g.Z, {
        className: r,
        forcedDivider: S,
        hasBackground: !0,
        title: m,
        errors: b,
        children: [
            (0, i.jsxs)('div', {
                className: x.buttonsContainer,
                children: [
                    (0, i.jsx)(R, {
                        size: a.Button.Sizes.SMALL,
                        onClick: j,
                        className: l()({ [x.buttonHighlighted]: C }),
                        children: p.intl.string(p.t['Tna/TU'])
                    }),
                    O &&
                        (0, i.jsx)(a.Button, {
                            className: x.removeButton,
                            color: a.Button.Colors.PRIMARY,
                            look: a.Button.Looks.LINK,
                            size: a.Button.Sizes.SMALL,
                            onClick: function () {
                                (0, h.PO)(null == n ? void 0 : n.id, null);
                            },
                            children: (0, c.ad)(t, n) ? p.intl.string(p.t['GsW4/v']) : p.intl.string(p.t.GReZ6O)
                        })
                ]
            }),
            t.isStaff() && v && (0, i.jsx)(T, { user: t })
        ]
    });
}
let T = (e) => {
    let { user: t } = e;
    return (0, i.jsxs)('div', {
        className: x.overrideButtonsContainer,
        children: [
            (0, i.jsx)(a.Text, {
                variant: 'text-xs/bold',
                children: 'STAFF ONLY and Experimental. Upload a decoration to view throughout the app.'
            }),
            (0, i.jsx)(m.Z, {
                onChange: (e) => {
                    null != e &&
                        (t.avatarDecoration = {
                            asset: e,
                            skuID: 'PALUE000000001'
                        });
                },
                buttonCTA: 'Upload Override'
            })
        ]
    });
};
