n.d(t, {
    Z: function () {
        return I;
    }
});
var r = n(735250),
    i = n(120356),
    a = n.n(i),
    o = n(789978),
    s = n(657707),
    l = n(442837),
    u = n(481060),
    c = n(933557),
    d = n(471445),
    _ = n(266076),
    E = n(565138),
    f = n(430824),
    h = n(689938),
    p = n(239048);
let m = {
    top: 8,
    bottom: 8,
    left: -4,
    right: -4
};
function I(e) {
    let { channel: t, children: n } = e;
    return (0, r.jsx)(o.tE, {
        offset: m,
        children: (0, r.jsxs)('div', {
            className: p.channelHeader,
            'data-recents-channel': t.id,
            children: [(0, r.jsx)(T, { channel: t }), t.isPrivate() ? null : (0, r.jsx)(s.Fbu, { size: 'xxs' }), (0, r.jsx)(g, { channel: t }), n]
        })
    });
}
function T(e) {
    let { channel: t } = e,
        n = (0, l.e7)([f.Z], () => f.Z.getGuild(t.guild_id));
    return null != n
        ? (0, r.jsx)(E.Z, {
              className: p.icon,
              guild: n,
              size: E.Z.Sizes.SMALLER,
              'aria-hidden': !0
          })
        : t.isGroupDM()
          ? (0, r.jsx)(_.Z, {
                channel: t,
                size: u.AvatarSizes.SIZE_24,
                experimentLocation: 'ForLaterChannelHeader'
            })
          : (0, r.jsx)('div', {
                className: a()(p.icon, p.dmIcon),
                children: (0, r.jsx)(s.kBi, { size: 'xxs' })
            });
}
function g(e) {
    let { channel: t } = e,
        n = (0, l.e7)([f.Z], () => f.Z.getGuild(t.guild_id)),
        i = (0, c.ZP)(t, !1),
        a = (0, d.KS)(t, n),
        o = t.isPrivate() || null == a,
        s = t.isDM() ? h.Z.Messages.FOR_LATER_DIRECT_MESSAGE_WITH.format({ username: i }) : i;
    return (0, r.jsxs)('div', {
        className: p.channelNameSection,
        children: [
            o
                ? null
                : (0, r.jsx)(a, {
                      className: p.channelTypeIcon,
                      size: 'xxs'
                  }),
            (0, r.jsx)(u.Heading, {
                variant: 'text-md/semibold',
                color: 'header-secondary',
                children: s
            })
        ]
    });
}
