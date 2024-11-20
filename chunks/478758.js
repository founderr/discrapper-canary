n(653041);
var r = n(200651);
n(192379);
var i = n(392711),
    a = n.n(i),
    s = n(481060),
    o = n(730749),
    l = n(823379),
    u = n(429598);
let c = (0, o.Z)((e) => {
    let { member: t, empty: n, guildId: i } = e;
    return n || null == t
        ? (0, r.jsx)('div', { className: u.partyMember })
        : (0, r.jsx)('div', {
              className: u.partyMember,
              children: (0, r.jsx)(s.Avatar, {
                  src: t.getAvatarURL(i, 16),
                  'aria-label': t.username,
                  size: s.AvatarSizes.SIZE_16,
                  className: u.partyMember
              })
          });
});
t.Z = (e) => {
    let { partySize: t, members: n, minAvatarsShown: i = 1, maxAvatarsShown: s = 2, guildId: o } = e,
        { totalSize: d, knownSize: f } = t;
    if (d < i) return null;
    let _ = a()(n)
            .filter(l.lm)
            .take(s)
            .map((e) =>
                (0, r.jsx)(
                    c,
                    {
                        member: e,
                        guildId: o
                    },
                    e.id
                )
            )
            .value(),
        p = d - f;
    for (let e = 0; e < p && _.length < s; e++)
        _.push(
            (0, r.jsx)(
                c,
                {
                    empty: !0,
                    guildId: o
                },
                'empty-member-'.concat(e)
            )
        );
    let h = Math.max(Math.min(d - _.length, 99), 0);
    if (1 === h) {
        let e = n[s];
        _.push(
            (0, r.jsx)(
                c,
                {
                    member: e,
                    guildId: o
                },
                e.id
            )
        );
    }
    return (0, r.jsx)('div', {
        className: u.wrapper,
        children: (0, r.jsxs)('div', {
            className: u.partyMembers,
            children: [
                _,
                h > 1
                    ? (0, r.jsxs)('div', {
                          className: u.partyMemberOverflow,
                          children: ['+', h]
                      })
                    : null
            ]
        })
    });
};
