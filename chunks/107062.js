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
    E = n(5192),
    v = n(379357),
    _ = n(192918),
    f = n(561308),
    T = n(907152),
    p = n(206295),
    g = n(297781),
    I = n(591853),
    N = n(797342),
    C = n(981631),
    A = n(689938);
let Z = (e, t) =>
        A.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
            username: t.username,
            activity: e.extra.activity_name
        }),
    P = (e, t, n) => {
        let a = A.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_GAME,
            l = E.ZP.getName(t.guild_id, t.id, n),
            i = e.extra.activity_name;
        return a
            .plainFormat({
                gameName: i,
                userName: l
            })
            .replaceAll('*', '');
    },
    S = (e) => {
        let { entry: t, channel: n, users: a, countOthers: l } = e;
        return A.Z.Messages.CONTENT_INVENTORY_REACTION_USER_PLAYED.plainFormat({
            gameName: t.extra.activity_name,
            user1: E.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, a[0]),
            user2: E.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, a[1]),
            countOthers: l
        }).replaceAll('*', '');
    };
t.ZP = (e) => {
    let { channel: t, entry: n, onReaction: E, onVoiceChannelPreview: M } = e,
        { largeImage: O } = (0, v.rv)({ entry: n }),
        { user: R, details: j, activity: y, embeddedActivity: L } = (0, N.n)(n),
        { primaryColor: w, secondaryColor: D } = (0, p.Z)(null == O ? void 0 : O.src),
        b = (0, i.e7)([m.default], () => m.default.locale),
        { displayParticipants: U, participant1: B, participant2: k, numOtherParticipants: F } = (0, _.Z)(n, 3),
        G = () => {
            c._(d._b.TEXT, h.I.NORMAL, { applicationId: n.extra.application_id });
        },
        H = l.useCallback(
            (e) => {
                if ((null == O ? void 0 : O.src) == null || null == t || null == R) return;
                let a =
                    F > 0
                        ? S({
                              entry: n,
                              channel: t,
                              users: [B, k],
                              countOthers: F
                          })
                        : P(n, t, R);
                return (0, T.C4)({
                    entry: n,
                    applicationImageSrc: null == O ? void 0 : O.src,
                    avatarSrcs: U.map((e) => e.getAvatarURL(t.guild_id, 128)),
                    description: a,
                    timestamp: (0, f.yh)(n, b),
                    colors: [w, D],
                    channelId: e
                });
            },
            [null == O ? void 0 : O.src, t, U, n, b, F, B, k, w, D, R]
        );
    if (null == R) return null;
    let Y = (0, a.jsx)(g.PZ, {
            location: g.Gt.POPOUT,
            entry: n
        }),
        z = (0, a.jsx)(I.wG, {
            channel: t,
            userDescription: (0, f.kr)(n) ? A.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING_V2 : A.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2,
            title: n.extra.activity_name,
            subtitle: j,
            badges: Y,
            entry: n,
            onClickTitle: G,
            onClickSubtitle: G,
            onClickThumbnail: G
        }),
        V = (0, s.Z)(y, C.xjy.JOIN) || (0, o.Z)(y),
        W = V
            ? (0, a.jsx)(u.Z, {
                  isEmbedded: (0, o.Z)(y),
                  embeddedActivity: L,
                  activity: y,
                  user: R,
                  ButtonComponent: (e) =>
                      (0, a.jsx)(I.Ll, {
                          IconComponent: r.DoorEnterIcon,
                          ...e
                      })
              })
            : null,
        q = (0, a.jsx)(I.Ll, {
            onClick: G,
            IconComponent: r.AppsIcon,
            children: A.Z.Messages.CONTENT_INVENTORY_VIEW_ACTIVITY
        }),
        K = [V ? W : q].filter(x.lm);
    return (0, a.jsxs)(I.yR, {
        children: [
            z,
            (0, a.jsx)(I.St, {
                children: (0, a.jsx)(I.WT, {
                    onReaction: E,
                    onVoiceChannelPreview: M,
                    user: R,
                    channel: t,
                    generateReactionImage: H,
                    reactionImageAltText: Z(n, R),
                    entry: n,
                    buttons: K
                })
            })
        ]
    });
};
