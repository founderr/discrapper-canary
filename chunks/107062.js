n(627494), n(757143);
var a = n(735250),
    l = n(470079),
    i = n(442837),
    r = n(481060),
    s = n(620662),
    o = n(841784),
    u = n(429589),
    c = n(499254),
    d = n(827498),
    h = n(541716),
    m = n(706454),
    x = n(823379),
    v = n(5192),
    E = n(379357),
    _ = n(192918),
    f = n(561308),
    p = n(907152),
    T = n(206295),
    g = n(297781),
    I = n(591853),
    C = n(797342),
    N = n(981631),
    P = n(689938);
let Z = (e, t) =>
        P.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
            username: t.username,
            activity: e.extra.activity_name
        }),
    S = (e, t, n) => {
        let a = P.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_GAME,
            l = v.ZP.getName(t.guild_id, t.id, n),
            i = e.extra.activity_name;
        return a
            .plainFormat({
                gameName: i,
                userName: l
            })
            .replaceAll('*', '');
    },
    A = (e) => {
        let { entry: t, channel: n, users: a, countOthers: l } = e;
        return P.Z.Messages.CONTENT_INVENTORY_REACTION_USER_PLAYED.plainFormat({
            gameName: t.extra.activity_name,
            user1: v.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, a[0]),
            user2: v.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, a[1]),
            countOthers: l
        }).replaceAll('*', '');
    };
t.ZP = (e) => {
    let { channel: t, entry: n, onReaction: v, onVoiceChannelPreview: R } = e,
        { largeImage: M } = (0, E.rv)({ entry: n }),
        { user: y, details: O, activity: j, embeddedActivity: w } = (0, C.n)(n),
        { primaryColor: L, secondaryColor: b } = (0, T.Z)(null == M ? void 0 : M.src),
        k = (0, i.e7)([m.default], () => m.default.locale),
        { displayParticipants: D, participant1: U, participant2: B, numOtherParticipants: G } = (0, _.Z)(n, 3),
        F = () => {
            c._(d._b.TEXT, h.I.NORMAL, { applicationId: n.extra.application_id });
        },
        H = l.useCallback(
            (e) => {
                if ((null == M ? void 0 : M.src) == null || null == t || null == y) return;
                let a =
                    G > 0
                        ? A({
                              entry: n,
                              channel: t,
                              users: [U, B],
                              countOthers: G
                          })
                        : S(n, t, y);
                return (0, p.C4)({
                    entry: n,
                    applicationImageSrc: null == M ? void 0 : M.src,
                    avatarSrcs: D.map((e) => e.getAvatarURL(t.guild_id, 128)),
                    description: a,
                    timestamp: (0, f.yh)(n, k),
                    colors: [L, b],
                    channelId: e
                });
            },
            [null == M ? void 0 : M.src, t, D, n, k, G, U, B, L, b, y]
        );
    if (null == y) return null;
    let V = (0, a.jsx)(g.PZ, {
            location: g.Gt.POPOUT,
            entry: n
        }),
        Y = (0, a.jsx)(I.wG, {
            channel: t,
            userDescription: (0, f.kr)(n) ? P.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING_V2 : P.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2,
            title: n.extra.activity_name,
            subtitle: O,
            badges: V,
            entry: n,
            onClickTitle: F,
            onClickSubtitle: F,
            onClickThumbnail: F
        }),
        z = (0, s.Z)(j, N.xjy.JOIN) || (0, o.Z)(j),
        W = z
            ? (0, a.jsx)(u.Z, {
                  isEmbedded: (0, o.Z)(j),
                  embeddedActivity: w,
                  activity: j,
                  user: y,
                  ButtonComponent: (e) =>
                      (0, a.jsx)(I.Ll, {
                          IconComponent: r.DoorEnterIcon,
                          ...e
                      })
              })
            : null,
        q = (0, a.jsx)(I.Ll, {
            onClick: F,
            IconComponent: r.AppsIcon,
            children: P.Z.Messages.CONTENT_INVENTORY_VIEW_ACTIVITY
        }),
        J = [z ? W : q].filter(x.lm);
    return (0, a.jsxs)(I.yR, {
        children: [
            Y,
            (0, a.jsx)(I.St, {
                children: (0, a.jsx)(I.WT, {
                    onReaction: v,
                    onVoiceChannelPreview: R,
                    user: y,
                    channel: t,
                    generateReactionImage: H,
                    reactionImageAltText: Z(n, y),
                    entry: n,
                    buttons: J
                })
            })
        ]
    });
};
