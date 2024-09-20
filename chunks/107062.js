n(627494), n(757143);
var l = n(735250),
    a = n(470079),
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
    p = n(561308),
    f = n(907152),
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
        let l = P.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_GAME,
            a = E.ZP.getName(t.guild_id, t.id, n),
            i = e.extra.activity_name;
        return l
            .plainFormat({
                gameName: i,
                userName: a
            })
            .replaceAll('*', '');
    },
    M = (e) => {
        let { entry: t, channel: n, users: l, countOthers: a } = e;
        return P.Z.Messages.CONTENT_INVENTORY_REACTION_USER_PLAYED.plainFormat({
            gameName: t.extra.activity_name,
            user1: E.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, l[0]),
            user2: E.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, l[1]),
            countOthers: a
        }).replaceAll('*', '');
    };
t.ZP = (e) => {
    let { channel: t, entry: n, onReaction: E, onVoiceChannelPreview: A } = e,
        { largeImage: y } = (0, v.rv)({ entry: n }),
        { user: R, details: O, activity: j, embeddedActivity: w } = (0, C.n)(n),
        { primaryColor: L, secondaryColor: b } = (0, T.Z)(null == y ? void 0 : y.src),
        D = (0, i.e7)([m.default], () => m.default.locale),
        { displayParticipants: U, participant1: B, participant2: k, numOtherParticipants: F } = (0, _.Z)(n, 3),
        G = () => {
            c._(d._b.TEXT, h.I.NORMAL, { applicationId: n.extra.application_id });
        },
        H = a.useCallback(
            (e) => {
                if ((null == y ? void 0 : y.src) == null || null == t || null == R) return;
                let l =
                    F > 0
                        ? M({
                              entry: n,
                              channel: t,
                              users: [B, k],
                              countOthers: F
                          })
                        : S(n, t, R);
                return (0, f.C4)({
                    entry: n,
                    applicationImageSrc: null == y ? void 0 : y.src,
                    avatarSrcs: U.map((e) => e.getAvatarURL(t.guild_id, 128)),
                    description: l,
                    timestamp: (0, p.yh)(n, D),
                    colors: [L, b],
                    channelId: e
                });
            },
            [null == y ? void 0 : y.src, t, U, n, D, F, B, k, L, b, R]
        );
    if (null == R) return null;
    let V = (0, l.jsx)(g.PZ, {
            location: g.Gt.POPOUT,
            entry: n
        }),
        Y = (0, l.jsx)(I.wG, {
            channel: t,
            userDescription: (0, p.kr)(n) ? P.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING_V2 : P.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2,
            title: n.extra.activity_name,
            subtitle: O,
            badges: V,
            entry: n,
            onClickTitle: G,
            onClickSubtitle: G,
            onClickThumbnail: G
        }),
        z = (0, s.Z)(j, N.xjy.JOIN) || (0, o.Z)(j),
        W = z
            ? (0, l.jsx)(u.Z, {
                  isEmbedded: (0, o.Z)(j),
                  embeddedActivity: w,
                  activity: j,
                  user: R,
                  ButtonComponent: (e) =>
                      (0, l.jsx)(I.Ll, {
                          IconComponent: r.DoorEnterIcon,
                          ...e
                      })
              })
            : null,
        q = (0, l.jsx)(I.Ll, {
            onClick: G,
            IconComponent: r.AppsIcon,
            children: P.Z.Messages.CONTENT_INVENTORY_VIEW_ACTIVITY
        }),
        J = [z ? W : q].filter(x.lm);
    return (0, l.jsxs)(I.yR, {
        children: [
            Y,
            (0, l.jsx)(I.St, {
                children: (0, l.jsx)(I.WT, {
                    onReaction: E,
                    onVoiceChannelPreview: A,
                    user: R,
                    channel: t,
                    generateReactionImage: H,
                    reactionImageAltText: Z(n, R),
                    entry: n,
                    buttons: J
                })
            })
        ]
    });
};
