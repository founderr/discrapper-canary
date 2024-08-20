l.d(n, {
    Z: function () {
        return E;
    }
});
var t = l(735250),
    r = l(120356),
    i = l.n(r),
    a = l(481060),
    s = l(318374),
    u = l(171368),
    o = l(5192),
    c = l(192918),
    d = l(256139),
    m = l(689938),
    f = l(182408);
function E(e) {
    let { entry: n, channel: l, className: r } = e,
        { displayParticipants: E, participant1: p, participant2: C, numOtherParticipants: N } = (0, c.Z)(n, 3),
        v = [p, C];
    return (0, t.jsxs)('div', {
        className: i()(f.container, r),
        children: [
            E.length > 0
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)(s.Z, {
                              maxUsers: 3,
                              users: E,
                              size: a.AvatarSizes.SIZE_20,
                              avatarClassName: f.stackedAvatar,
                              hideOverflowCount: !0,
                              disableUsernameTooltip: !0
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
                className: i()(f.textSecondary, f.truncatedText, f.usersHeader),
                scaleFontToUserSetting: !0,
                children: m.Z.Messages.CONTENT_INVENTORY_ENTRY_USERS.format({
                    user1: o.ZP.getName(l.guild_id, l.id, v[0]),
                    user2: o.ZP.getName(l.guild_id, l.id, v[1]),
                    countOthers: N,
                    nameHook: (e, n) =>
                        (0, t.jsx)(d.Z, {
                            tag: 'span',
                            onClick: () => (0, u.openUserProfileModal)({ userId: v[parseInt(n)].id }),
                            children: (0, t.jsx)(
                                a.Text,
                                {
                                    variant: 'text-sm/semibold',
                                    className: i()(f.textPrimary, f.truncatedText),
                                    lineClamp: 1,
                                    scaleFontToUserSetting: !0,
                                    children: e
                                },
                                n
                            )
                        })
                })
            })
        ]
    });
}
