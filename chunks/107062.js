t(627494), t(757143);
var a = t(735250),
    l = t(470079),
    i = t(442837),
    r = t(481060),
    s = t(2052),
    o = t(620662),
    u = t(841784),
    c = t(429589),
    d = t(403404),
    _ = t(906732),
    m = t(522474),
    E = t(706454),
    T = t(823379),
    h = t(5192),
    x = t(379357),
    I = t(192918),
    N = t(561308),
    C = t(907152),
    p = t(206295),
    g = t(297781),
    v = t(591853),
    f = t(797342),
    M = t(981631),
    P = t(701488),
    Z = t(689938);
let A = (e, n) =>
        Z.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
            username: n.username,
            activity: e.extra.activity_name
        }),
    S = (e, n, t) => {
        let a = Z.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_GAME,
            l = h.ZP.getName(n.guild_id, n.id, t),
            i = e.extra.activity_name;
        return a
            .plainFormat({
                gameName: i,
                userName: l
            })
            .replaceAll('*', '');
    },
    O = (e) => {
        let { entry: n, channel: t, users: a, countOthers: l } = e;
        return Z.Z.Messages.CONTENT_INVENTORY_REACTION_USER_PLAYED.plainFormat({
            gameName: n.extra.activity_name,
            user1: h.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, a[0]),
            user2: h.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, a[1]),
            countOthers: l
        }).replaceAll('*', '');
    };
n.ZP = (e) => {
    let { channel: n, entry: t, onReaction: h, onVoiceChannelPreview: R } = e,
        { largeImage: j } = (0, x.rv)({ entry: t }),
        { user: y, details: L, activity: w } = (0, f.n)(t),
        { primaryColor: B, secondaryColor: k } = (0, p.Z)(null == j ? void 0 : j.src),
        b = (0, i.e7)([E.default], () => E.default.locale),
        { displayParticipants: U, participant1: G, participant2: D, numOtherParticipants: H } = (0, I.Z)(t, 3),
        V = (0, s.O)(),
        { analyticsLocations: Y } = (0, _.ZP)(),
        F = m.Z.getWindowOpen(M.KJ3.CHANNEL_CALL_POPOUT),
        W = () => {
            (0, d.Z)({
                guildId: null == n ? void 0 : n.guild_id,
                locationObject: V.location,
                openInPopout: F,
                initialSelectedApplicationId: t.extra.application_id,
                initialSlide: P.ag.SELECT_CHANNEL,
                analyticsLocations: Y
            });
        },
        z = l.useCallback(
            (e) => {
                if ((null == j ? void 0 : j.src) == null || null == n || null == y) return;
                let a =
                    H > 0
                        ? O({
                              entry: t,
                              channel: n,
                              users: [G, D],
                              countOthers: H
                          })
                        : S(t, n, y);
                return (0, C.C4)({
                    entry: t,
                    applicationImageSrc: null == j ? void 0 : j.src,
                    avatarSrcs: U.map((e) => e.getAvatarURL(n.guild_id, 128)),
                    description: a,
                    timestamp: (0, N.yh)(t, b),
                    colors: [B, k],
                    channelId: e
                });
            },
            [null == j ? void 0 : j.src, n, U, t, b, H, G, D, B, k, y]
        );
    if (null == y) return null;
    let q = (0, a.jsx)(g.PZ, {
            location: g.Gt.POPOUT,
            entry: t
        }),
        K = (0, a.jsx)(v.wG, {
            channel: n,
            userDescription: (0, N.kr)(t) ? Z.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING_V2 : Z.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2,
            title: t.extra.activity_name,
            subtitle: L,
            badges: q,
            entry: t,
            onClickTitle: W,
            onClickSubtitle: W,
            onClickThumbnail: W
        }),
        J =
            (0, o.Z)(w, M.xjy.JOIN) || (0, u.Z)(w)
                ? (0, a.jsx)(c.Z, {
                      activity: w,
                      user: y,
                      ButtonComponent: (e) =>
                          (0, a.jsx)(v.Ll, {
                              IconComponent: r.GameControllerIcon,
                              ...e
                          })
                  })
                : null,
        X = [
            J,
            (0, a.jsx)(v.Ll, {
                onClick: W,
                IconComponent: r.ActivitiesIcon,
                children: Z.Z.Messages.CONTENT_INVENTORY_VIEW_ACTIVITY
            })
        ].filter(T.lm);
    return (0, a.jsxs)(v.yR, {
        children: [
            K,
            (0, a.jsx)(v.St, {
                children: (0, a.jsx)(v.WT, {
                    onReaction: h,
                    onVoiceChannelPreview: R,
                    user: y,
                    channel: n,
                    generateReactionImage: z,
                    reactionImageAltText: A(t, y),
                    entry: t,
                    buttons: X
                })
            })
        ]
    });
};
