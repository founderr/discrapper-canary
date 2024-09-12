n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(735250),
    s = n(120356),
    a = n.n(s),
    r = n(789978),
    l = n(657707),
    o = n(442837),
    c = n(481060),
    u = n(43267),
    d = n(933557),
    _ = n(471445),
    E = n(565138),
    I = n(430824),
    m = n(594174),
    T = n(686478),
    N = n(689938),
    h = n(239048);
let C = {
    top: 8,
    bottom: 8,
    left: -4,
    right: -4
};
function f(e) {
    let { channel: t, children: n } = e;
    return (0, i.jsx)(r.tE, {
        offset: C,
        children: (0, i.jsxs)('div', {
            className: h.channelHeader,
            'data-recents-channel': t.id,
            children: [(0, i.jsx)(p, { channel: t }), t.isPrivate() ? null : (0, i.jsx)(l.Fbu, { size: 'xxs' }), (0, i.jsx)(g, { channel: t }), n]
        })
    });
}
function p(e) {
    let { channel: t } = e,
        n = (0, o.e7)([m.default], () => (t.isDM() ? m.default.getUser(t.getRecipientId()) : null)),
        s = (0, o.e7)([I.Z], () => I.Z.getGuild(t.guild_id));
    if (null != s)
        return (0, i.jsx)(E.Z, {
            className: h.icon,
            guild: s,
            size: E.Z.Sizes.SMALLER,
            'aria-hidden': !0
        });
    if (null != n || t.guild_id === T.Dw)
        return (0, i.jsx)('div', {
            className: a()(h.icon, h.dmIcon),
            children: (0, i.jsx)(l.kBi, { size: 'xxs' })
        });
    let r = (0, u.x)(t);
    return (0, i.jsx)('img', {
        className: h.icon,
        src: r,
        alt: '',
        'aria-hidden': !0
    });
}
function g(e) {
    let { channel: t } = e,
        n = (0, o.e7)([I.Z], () => I.Z.getGuild(t.guild_id)),
        s = (0, d.ZP)(t, !1),
        a = (0, _.KS)(t, n),
        r = t.isPrivate() || null == a,
        l = t.isDM() ? N.Z.Messages.FOR_LATER_DIRECT_MESSAGE_WITH.format({ username: s }) : s;
    return (0, i.jsxs)('div', {
        className: h.channelNameSection,
        children: [
            r
                ? null
                : (0, i.jsx)(a, {
                      className: h.channelTypeIcon,
                      size: 'xxs'
                  }),
            (0, i.jsx)(c.Heading, {
                variant: 'text-md/semibold',
                color: 'header-secondary',
                children: l
            })
        ]
    });
}
