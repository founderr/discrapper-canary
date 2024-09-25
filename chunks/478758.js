var r = n(653041);
var i = n(735250);
n(470079);
var a = n(392711),
    o = n.n(a),
    s = n(481060),
    l = n(730749),
    u = n(823379),
    c = n(429598);
let d = 99,
    _ = (e) => {
        let { member: t, empty: n, guildId: r } = e;
        return n || null == t
            ? (0, i.jsx)('div', { className: c.partyMember })
            : (0, i.jsx)('div', {
                  className: c.partyMember,
                  children: (0, i.jsx)(s.Avatar, {
                      src: t.getAvatarURL(r, 16),
                      'aria-label': t.username,
                      size: s.AvatarSizes.SIZE_16,
                      className: c.partyMember
                  })
              });
    },
    E = (0, l.Z)(_),
    f = (e) => {
        let { partySize: t, members: n, minAvatarsShown: r = 1, maxAvatarsShown: a = 2, guildId: s } = e,
            { totalSize: l, knownSize: _ } = t;
        if (l < r) return null;
        let f = o()(n)
                .filter(u.lm)
                .take(a)
                .map((e) =>
                    (0, i.jsx)(
                        E,
                        {
                            member: e,
                            guildId: s
                        },
                        e.id
                    )
                )
                .value(),
            h = l - _;
        for (let e = 0; e < h && f.length < a; e++)
            f.push(
                (0, i.jsx)(
                    E,
                    {
                        empty: !0,
                        guildId: s
                    },
                    'empty-member-'.concat(e)
                )
            );
        let p = Math.max(Math.min(l - f.length, d), 0);
        if (1 === p) {
            let e = n[a];
            f.push(
                (0, i.jsx)(
                    E,
                    {
                        member: e,
                        guildId: s
                    },
                    e.id
                )
            );
        }
        return (0, i.jsx)('div', {
            className: c.wrapper,
            children: (0, i.jsxs)('div', {
                className: c.partyMembers,
                children: [
                    f,
                    p > 1
                        ? (0, i.jsxs)('div', {
                              className: c.partyMemberOverflow,
                              children: ['+', p]
                          })
                        : null
                ]
            })
        });
    };
t.Z = f;
