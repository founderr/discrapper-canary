t.d(n, {
    Z: function () {
        return p;
    }
});
var l = t(735250),
    a = t(120356),
    i = t.n(a),
    r = t(481060),
    o = t(318374),
    s = t(5192),
    c = t(192918),
    u = t(256139),
    d = t(91907),
    m = t(866040),
    _ = t(689938),
    f = t(182408);
function p(e) {
    let { entry: n, channel: t, className: a } = e,
        { displayParticipants: p, participant1: E, participant2: I, numOtherParticipants: C, orderedParticipants: h } = (0, c.Z)(n),
        N = [E, I];
    return (0, l.jsxs)('div', {
        className: i()(f.container, a),
        children: [
            p.length > 0
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(m.Z, {
                              participants: h,
                              channel: t,
                              children: (e) =>
                                  (0, l.jsx)(r.Clickable, {
                                      className: f.clickable,
                                      ...e,
                                      children: (0, l.jsx)(o.Z, {
                                          maxUsers: 3,
                                          users: p,
                                          size: r.AvatarSizes.SIZE_20,
                                          avatarClassName: f.stackedAvatar,
                                          hideOverflowCount: !0,
                                          disableUsernameTooltip: !0
                                      })
                                  })
                          }),
                          (0, l.jsx)(r.Spacer, {
                              size: 6,
                              horizontal: !0
                          })
                      ]
                  })
                : null,
            (0, l.jsx)(r.Heading, {
                variant: 'text-sm/semibold',
                color: 'text-secondary',
                className: i()(f.truncatedText, f.usersHeader),
                scaleFontToUserSetting: !0,
                children: _.Z.Messages.CONTENT_INVENTORY_ENTRY_USERS_V2.format({
                    user0: s.ZP.getName(t.guild_id, t.id, N[0]),
                    user1: s.ZP.getName(t.guild_id, t.id, N[1]),
                    countOthers: C,
                    name0Hook: (e, n) =>
                        (0, l.jsx)(
                            d.Z,
                            {
                                text: e,
                                user: N[0],
                                channel: t
                            },
                            n
                        ),
                    name1Hook: (e, n) =>
                        (0, l.jsx)(
                            d.Z,
                            {
                                text: e,
                                user: N[1],
                                channel: t
                            },
                            n
                        ),
                    countOthersHook: (e, n) =>
                        (0, l.jsx)(
                            m.Z,
                            {
                                participants: h,
                                channel: t,
                                children: (n) =>
                                    (0, l.jsx)(u.Z, {
                                        ...n,
                                        tag: 'span',
                                        children: (0, l.jsx)(r.Text, {
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
