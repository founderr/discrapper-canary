n.d(t, {
    Z: function () {
        return h;
    }
});
var r = n(735250),
    i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(318374),
    l = n(5192),
    u = n(192918),
    c = n(256139),
    d = n(91907),
    _ = n(866040),
    E = n(689938),
    f = n(756988);
function h(e) {
    let { entry: t, channel: n, className: i } = e,
        { displayParticipants: h, participant1: p, participant2: m, numOtherParticipants: I, orderedParticipants: T } = (0, u.Z)(t),
        g = [p, m];
    return (0, r.jsxs)('div', {
        className: a()(f.container, i),
        children: [
            h.length > 0
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(_.Z, {
                              participants: T,
                              channel: n,
                              children: (e) =>
                                  (0, r.jsx)(o.Clickable, {
                                      className: f.clickable,
                                      ...e,
                                      children: (0, r.jsx)(s.Z, {
                                          maxUsers: 3,
                                          users: h,
                                          size: o.AvatarSizes.SIZE_20,
                                          avatarClassName: f.stackedAvatar,
                                          hideOverflowCount: !0,
                                          disableUsernameTooltip: !0
                                      })
                                  })
                          }),
                          (0, r.jsx)(o.Spacer, {
                              size: 6,
                              horizontal: !0
                          })
                      ]
                  })
                : null,
            (0, r.jsx)(o.Heading, {
                variant: 'text-sm/semibold',
                color: 'text-secondary',
                className: a()(f.truncatedText, f.usersHeader),
                scaleFontToUserSetting: !0,
                children: E.Z.Messages.CONTENT_INVENTORY_ENTRY_USERS_V2.format({
                    user0: l.ZP.getName(n.guild_id, n.id, g[0]),
                    user1: l.ZP.getName(n.guild_id, n.id, g[1]),
                    countOthers: I,
                    name0Hook: (e, t) =>
                        (0, r.jsx)(
                            d.Z,
                            {
                                text: e,
                                user: g[0],
                                channel: n
                            },
                            t
                        ),
                    name1Hook: (e, t) =>
                        (0, r.jsx)(
                            d.Z,
                            {
                                text: e,
                                user: g[1],
                                channel: n
                            },
                            t
                        ),
                    countOthersHook: (e, t) =>
                        (0, r.jsx)(
                            _.Z,
                            {
                                participants: T,
                                channel: n,
                                children: (t) =>
                                    (0, r.jsx)(c.Z, {
                                        ...t,
                                        tag: 'span',
                                        children: (0, r.jsx)(o.Text, {
                                            variant: 'text-sm/semibold',
                                            color: 'text-primary',
                                            lineClamp: 1,
                                            scaleFontToUserSetting: !0,
                                            children: e
                                        })
                                    })
                            },
                            t
                        )
                })
            })
        ]
    });
}
