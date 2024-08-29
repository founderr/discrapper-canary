l.d(n, {
    Z: function () {
        return N;
    }
});
var t = l(735250),
    r = l(120356),
    a = l.n(r),
    i = l(481060),
    s = l(318374),
    u = l(5192),
    o = l(192918),
    c = l(256139),
    d = l(91907),
    m = l(866040),
    E = l(689938),
    p = l(182408);
function N(e) {
    let { entry: n, channel: l, className: r } = e,
        { displayParticipants: N, participant1: f, participant2: _, numOtherParticipants: C, orderedParticipants: T } = (0, o.Z)(n),
        v = [f, _];
    return (0, t.jsxs)('div', {
        className: a()(p.container, r),
        children: [
            N.length > 0
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)(m.Z, {
                              participants: T,
                              channel: l,
                              children: (e) =>
                                  (0, t.jsx)(i.Clickable, {
                                      className: p.clickable,
                                      ...e,
                                      children: (0, t.jsx)(s.Z, {
                                          maxUsers: 3,
                                          users: N,
                                          size: i.AvatarSizes.SIZE_20,
                                          avatarClassName: p.stackedAvatar,
                                          hideOverflowCount: !0,
                                          disableUsernameTooltip: !0
                                      })
                                  })
                          }),
                          (0, t.jsx)(i.Spacer, {
                              size: 6,
                              horizontal: !0
                          })
                      ]
                  })
                : null,
            (0, t.jsx)(i.Heading, {
                variant: 'text-sm/semibold',
                color: 'text-secondary',
                className: a()(p.truncatedText, p.usersHeader),
                scaleFontToUserSetting: !0,
                children: E.Z.Messages.CONTENT_INVENTORY_ENTRY_USERS_V2.format({
                    user0: u.ZP.getName(l.guild_id, l.id, v[0]),
                    user1: u.ZP.getName(l.guild_id, l.id, v[1]),
                    countOthers: C,
                    name0Hook: (e, n) =>
                        (0, t.jsx)(
                            d.Z,
                            {
                                text: e,
                                user: v[0],
                                channel: l
                            },
                            n
                        ),
                    name1Hook: (e, n) =>
                        (0, t.jsx)(
                            d.Z,
                            {
                                text: e,
                                user: v[1],
                                channel: l
                            },
                            n
                        ),
                    countOthersHook: (e, n) =>
                        (0, t.jsx)(
                            m.Z,
                            {
                                participants: T,
                                channel: l,
                                children: (n) =>
                                    (0, t.jsx)(c.Z, {
                                        ...n,
                                        tag: 'span',
                                        children: (0, t.jsx)(i.Text, {
                                            variant: 'text-sm/semibold',
                                            color: 'text-primary',
                                            lineClamp: 1,
                                            scaleFontToUserSetting: !0,
                                            children: e
                                        })
                                    })
                            },
                            n
                        )
                })
            })
        ]
    });
}
