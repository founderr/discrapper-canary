n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(735250),
    a = n(120356),
    s = n.n(a),
    r = n(789978),
    l = n(657707),
    o = n(442837),
    c = n(481060),
    u = n(933557),
    d = n(471445),
    _ = n(266076),
    E = n(565138),
    I = n(430824),
    m = n(689938),
    T = n(239048);
let f = {
    top: 8,
    bottom: 8,
    left: -4,
    right: -4
};
function h(e) {
    let { channel: t, children: n } = e;
    return (0, i.jsx)(r.tE, {
        offset: f,
        children: (0, i.jsxs)('div', {
            className: T.channelHeader,
            'data-recents-channel': t.id,
            children: [(0, i.jsx)(N, { channel: t }), t.isPrivate() ? null : (0, i.jsx)(l.Fbu, { size: 'xxs' }), (0, i.jsx)(p, { channel: t }), n]
        })
    });
}
function N(e) {
    let { channel: t } = e,
        n = (0, o.e7)([I.Z], () => I.Z.getGuild(t.guild_id));
    return null != n
        ? (0, i.jsx)(E.Z, {
              className: T.icon,
              guild: n,
              size: E.Z.Sizes.SMALLER,
              'aria-hidden': !0
          })
        : t.isGroupDM()
          ? (0, i.jsx)(_.Z, {
                channel: t,
                size: c.AvatarSizes.SIZE_24,
                experimentLocation: 'ForLaterChannelHeader'
            })
          : (0, i.jsx)('div', {
                className: s()(T.icon, T.dmIcon),
                children: (0, i.jsx)(l.kBi, { size: 'xxs' })
            });
}
function p(e) {
    let { channel: t } = e,
        n = (0, o.e7)([I.Z], () => I.Z.getGuild(t.guild_id)),
        a = (0, u.ZP)(t, !1),
        s = (0, d.KS)(t, n),
        r = t.isPrivate() || null == s,
        l = t.isDM() ? m.Z.Messages.FOR_LATER_DIRECT_MESSAGE_WITH.format({ username: a }) : a;
    return (0, i.jsxs)('div', {
        className: T.channelNameSection,
        children: [
            r
                ? null
                : (0, i.jsx)(s, {
                      className: T.channelTypeIcon,
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
