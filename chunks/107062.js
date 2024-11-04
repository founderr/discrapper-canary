n(627494), n(757143);
var l = n(200651),
    a = n(192379),
    i = n(442837),
    r = n(481060),
    o = n(620662),
    s = n(841784),
    c = n(429589),
    u = n(499254),
    d = n(827498),
    m = n(541716),
    x = n(706454),
    h = n(823379),
    p = n(5192),
    C = n(379357),
    v = n(192918),
    g = n(561308),
    f = n(907152),
    j = n(206295),
    I = n(297781),
    Z = n(591853),
    P = n(797342),
    y = n(981631),
    L = n(388032);
let T = (e, t) =>
        L.intl.formatToPlainString(L.t.tAwI1t, {
            username: t.username,
            activity: e.extra.activity_name
        }),
    N = (e, t, n) => {
        let l = L.t['bES+y8'],
            a = p.ZP.getName(t.guild_id, t.id, n),
            i = e.extra.activity_name;
        return L.intl
            .formatToMarkdownString(l, {
                gameName: i,
                userName: a
            })
            .replaceAll('*', '');
    },
    _ = (e) => {
        let { entry: t, channel: n, users: l, countOthers: a } = e,
            i = L.t['7j/5mp'];
        return L.intl
            .formatToMarkdownString(i, {
                gameName: t.extra.activity_name,
                user1: p.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, l[0]),
                user2: p.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, l[1]),
                countOthers: a
            })
            .replaceAll('*', '');
    };
t.ZP = (e) => {
    let { channel: t, entry: n, onReaction: p, onVoiceChannelPreview: S } = e,
        { largeImage: E } = (0, C.rv)({ entry: n }),
        { user: A, details: M, activity: k, embeddedActivity: w } = (0, P.n)(n),
        { primaryColor: R, secondaryColor: b } = (0, j.Z)(null == E ? void 0 : E.src),
        H = (0, i.e7)([x.default], () => x.default.locale),
        { displayParticipants: O, participant1: V, participant2: B, numOtherParticipants: U } = (0, v.Z)(n, 3),
        D = () => {
            u.__(d._b.TEXT, m.I.NORMAL, { applicationId: n.extra.application_id });
        },
        G = a.useCallback(
            (e) => {
                if ((null == E ? void 0 : E.src) == null || null == t || null == A) return;
                let l =
                    U > 0
                        ? _({
                              entry: n,
                              channel: t,
                              users: [V, B],
                              countOthers: U
                          })
                        : N(n, t, A);
                return (0, f.C4)({
                    entry: n,
                    applicationImageSrc: null == E ? void 0 : E.src,
                    avatarSrcs: O.map((e) => e.getAvatarURL(t.guild_id, 128)),
                    description: l,
                    timestamp: (0, g.yh)(n, H),
                    colors: [R, b],
                    channelId: e
                });
            },
            [null == E ? void 0 : E.src, t, O, n, H, U, V, B, R, b, A]
        );
    if (null == A) return null;
    let z = (0, l.jsx)(I.PZ, {
            location: I.Gt.POPOUT,
            entry: n
        }),
        q = (0, l.jsx)(Z.wG, {
            channel: t,
            userDescription: (0, g.kr)(n) ? L.t.vPg1JS : L.t.rPqqtr,
            title: n.extra.activity_name,
            subtitle: M,
            badges: z,
            entry: n,
            onClickTitle: D,
            onClickSubtitle: D,
            onClickThumbnail: D
        }),
        Y = (0, o.Z)(k, y.xjy.JOIN) || (0, s.Z)(k),
        W = Y
            ? (0, l.jsx)(c.Z, {
                  isEmbedded: (0, s.Z)(k),
                  embeddedActivity: w,
                  activity: k,
                  user: A,
                  ButtonComponent: (e) =>
                      (0, l.jsx)(Z.Ll, {
                          IconComponent: r.DoorEnterIcon,
                          ...e
                      })
              })
            : null,
        F = (0, l.jsx)(Z.Ll, {
            onClick: D,
            IconComponent: r.AppsIcon,
            children: L.intl.string(L.t.GDWYR0)
        }),
        J = [Y ? W : F].filter(h.lm);
    return (0, l.jsxs)(Z.yR, {
        children: [
            q,
            (0, l.jsx)(Z.St, {
                children: (0, l.jsx)(Z.WT, {
                    onReaction: p,
                    onVoiceChannelPreview: S,
                    user: A,
                    channel: t,
                    generateReactionImage: G,
                    reactionImageAltText: T(n, A),
                    entry: n,
                    buttons: J
                })
            })
        ]
    });
};
