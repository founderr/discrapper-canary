l.d(n, {
    Z: function () {
        return f;
    }
});
var t = l(735250),
    r = l(120356),
    i = l.n(r),
    a = l(481060),
    s = l(318374),
    u = l(5192),
    o = l(192918),
    c = l(256139),
    d = l(91907),
    m = l(866040),
    p = l(689938),
    E = l(182408);
function f(e) {
    let { entry: n, channel: l, className: r } = e,
        { displayParticipants: f, participant1: N, participant2: C, numOtherParticipants: v, orderedParticipants: _ } = (0, o.Z)(n),
        h = [N, C];
    return (0, t.jsxs)('div', {
        className: i()(E.container, r),
        children: [
            f.length > 0
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)(m.Z, {
                              participants: _,
                              channel: l,
                              children: (e) =>
                                  (0, t.jsx)(a.Clickable, {
                                      className: E.clickable,
                                      ...e,
                                      children: (0, t.jsx)(s.Z, {
                                          maxUsers: 3,
                                          users: f,
                                          size: a.AvatarSizes.SIZE_20,
                                          avatarClassName: E.stackedAvatar,
                                          hideOverflowCount: !0,
                                          disableUsernameTooltip: !0
                                      })
                                  })
                          }),
                          (0, t.jsx)(a.Spacer, {
                              size: 6,
                              horizontal: !0
                          })
                      ]
                  })
                : null,
            (0, t.jsx)(a.Heading, {
                variant: 'text-sm/semibold',
                color: 'text-secondary',
                className: i()(E.truncatedText, E.usersHeader),
                scaleFontToUserSetting: !0,
                children: p.Z.Messages.CONTENT_INVENTORY_ENTRY_USERS_V2.format({
                    user0: u.ZP.getName(l.guild_id, l.id, h[0]),
                    user1: u.ZP.getName(l.guild_id, l.id, h[1]),
                    countOthers: v,
                    name0Hook: (e, n) =>
                        (0, t.jsx)(
                            d.Z,
                            {
                                text: e,
                                user: h[0],
                                channel: l
                            },
                            n
                        ),
                    name1Hook: (e, n) =>
                        (0, t.jsx)(
                            d.Z,
                            {
                                text: e,
                                user: h[1],
                                channel: l
                            },
                            n
                        ),
                    countOthersHook: (e, n) =>
                        (0, t.jsx)(
                            m.Z,
                            {
                                participants: _,
                                channel: l,
                                children: (n) =>
                                    (0, t.jsx)(c.Z, {
                                        ...n,
                                        tag: 'span',
                                        children: (0, t.jsx)(a.Text, {
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
