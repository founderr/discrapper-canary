n.d(t, {
    Z: function () {
        return b;
    }
});
var r = n(200651);
n(192379);
var i = n(990547),
    a = n(442837),
    s = n(780384),
    o = n(481060),
    l = n(410030),
    u = n(100527),
    c = n(906732),
    d = n(213609),
    f = n(703656),
    _ = n(430824),
    p = n(687476),
    h = n(761966),
    m = n(981631),
    g = n(176505),
    E = n(388032),
    v = n(799274);
let I = () => {
    let e = (0, l.ZP)();
    return (0, s.ap)(e) ? n(537381) : n(341048);
};
function b(e) {
    let { onClose: t, guildId: n, emojiId: s } = e,
        l = I(),
        { analyticsLocations: b } = (0, c.ZP)(u.Z.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
    (0, d.Z)({
        type: i.ImpressionTypes.MODAL,
        name: i.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
        properties: {
            location_stack: b,
            emoji_guild_id: n,
            emoji_id: null != s ? s : null
        }
    });
    let S = (0, a.e7)([_.Z], () => _.Z.getGuild(n)),
        T = (0, a.e7)([p.Z], () => null != n && p.Z.getUserSubscriptionRoles(n).size > 0),
        y = T ? E.intl.string(E.t['GoLM9/']) : E.intl.formatToPlainString(E.t['h0u/Hh'], { serverName: null == S ? void 0 : S.name }),
        A = T ? E.intl.string(E.t.PjZ7DQ) : E.intl.string(E.t.p8FG1N);
    return (0, r.jsxs)('div', {
        className: v.container,
        children: [
            (0, r.jsx)('div', { className: v.background }),
            (0, r.jsxs)('div', {
                className: v.content,
                children: [
                    (0, r.jsx)(o.Button, {
                        look: o.Button.Looks.BLANK,
                        size: o.Button.Sizes.ICON,
                        className: v.closeButton,
                        onClick: t,
                        children: (0, r.jsx)(o.XSmallIcon, {
                            size: 'xs',
                            color: 'currentColor',
                            'aria-label': E.intl.string(E.t.cpT0Cg),
                            className: v.closeButtonIcon
                        })
                    }),
                    (0, r.jsx)('img', {
                        alt: '',
                        src: l,
                        className: v.upsellImage
                    }),
                    (0, r.jsx)(o.Spacer, { size: 22 }),
                    (0, r.jsx)(o.Heading, {
                        color: 'header-primary',
                        variant: 'heading-lg/extrabold',
                        className: v.header,
                        children: E.intl.string(E.t.cBjkc3)
                    }),
                    (0, r.jsx)(o.Spacer, { size: 4 }),
                    (0, r.jsx)(o.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: v.description,
                        children: y
                    }),
                    (0, r.jsx)(o.Spacer, { size: 24 }),
                    (0, r.jsx)(h.Z, {
                        onClick: () => {
                            (0, f.uL)(m.Z5c.CHANNEL(n, g.oC.ROLE_SUBSCRIPTIONS), { sourceLocationStack: b });
                        },
                        children: A
                    })
                ]
            })
        ]
    });
}
