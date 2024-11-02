n(627494), n(757143);
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(481060),
    o = n(620662),
    s = n(841784),
    u = n(429589),
    c = n(499254),
    d = n(827498),
    h = n(541716),
    m = n(706454),
    x = n(823379),
    v = n(5192),
    f = n(379357),
    p = n(192918),
    g = n(561308),
    C = n(907152),
    I = n(206295),
    P = n(297781),
    Z = n(591853),
    y = n(797342),
    j = n(981631),
    w = n(388032);
let T = (e, t) =>
        w.intl.formatToPlainString(w.t.tAwI1t, {
            username: t.username,
            activity: e.extra.activity_name
        }),
    L = (e, t, n) => {
        let i = w.t['bES+y8'],
            l = v.ZP.getName(t.guild_id, t.id, n),
            a = e.extra.activity_name;
        return w.intl
            .formatToMarkdownString(i, {
                gameName: a,
                userName: l
            })
            .replaceAll('*', '');
    },
    S = (e) => {
        let { entry: t, channel: n, users: i, countOthers: l } = e,
            a = w.t['7j/5mp'];
        return w.intl
            .formatToMarkdownString(a, {
                gameName: t.extra.activity_name,
                user1: v.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, i[0]),
                user2: v.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, i[1]),
                countOthers: l
            })
            .replaceAll('*', '');
    };
t.ZP = (e) => {
    let { channel: t, entry: n, onReaction: v, onVoiceChannelPreview: N } = e,
        { largeImage: E } = (0, f.rv)({ entry: n }),
        { user: _, details: A, activity: R, embeddedActivity: b } = (0, y.n)(n),
        { primaryColor: M, secondaryColor: O } = (0, I.Z)(null == E ? void 0 : E.src),
        k = (0, a.e7)([m.default], () => m.default.locale),
        { displayParticipants: H, participant1: U, participant2: D, numOtherParticipants: B } = (0, p.Z)(n, 3),
        V = () => {
            c.__(d._b.TEXT, h.I.NORMAL, { applicationId: n.extra.application_id });
        },
        F = l.useCallback(
            (e) => {
                if ((null == E ? void 0 : E.src) == null || null == t || null == _) return;
                let i =
                    B > 0
                        ? S({
                              entry: n,
                              channel: t,
                              users: [U, D],
                              countOthers: B
                          })
                        : L(n, t, _);
                return (0, C.C4)({
                    entry: n,
                    applicationImageSrc: null == E ? void 0 : E.src,
                    avatarSrcs: H.map((e) => e.getAvatarURL(t.guild_id, 128)),
                    description: i,
                    timestamp: (0, g.yh)(n, k),
                    colors: [M, O],
                    channelId: e
                });
            },
            [null == E ? void 0 : E.src, t, H, n, k, B, U, D, M, O, _]
        );
    if (null == _) return null;
    let G = (0, i.jsx)(P.PZ, {
            location: P.Gt.POPOUT,
            entry: n
        }),
        z = (0, i.jsx)(Z.wG, {
            channel: t,
            userDescription: (0, g.kr)(n) ? w.t.vPg1JS : w.t.rPqqtr,
            title: n.extra.activity_name,
            subtitle: A,
            badges: G,
            entry: n,
            onClickTitle: V,
            onClickSubtitle: V,
            onClickThumbnail: V
        }),
        W = (0, o.Z)(R, j.xjy.JOIN) || (0, s.Z)(R),
        q = W
            ? (0, i.jsx)(u.Z, {
                  isEmbedded: (0, s.Z)(R),
                  embeddedActivity: b,
                  activity: R,
                  user: _,
                  ButtonComponent: (e) =>
                      (0, i.jsx)(Z.Ll, {
                          IconComponent: r.DoorEnterIcon,
                          ...e
                      })
              })
            : null,
        Y = (0, i.jsx)(Z.Ll, {
            onClick: V,
            IconComponent: r.AppsIcon,
            children: w.intl.string(w.t.GDWYR0)
        }),
        J = [W ? q : Y].filter(x.lm);
    return (0, i.jsxs)(Z.yR, {
        children: [
            z,
            (0, i.jsx)(Z.St, {
                children: (0, i.jsx)(Z.WT, {
                    onReaction: v,
                    onVoiceChannelPreview: N,
                    user: _,
                    channel: t,
                    generateReactionImage: F,
                    reactionImageAltText: T(n, _),
                    entry: n,
                    buttons: J
                })
            })
        ]
    });
};
