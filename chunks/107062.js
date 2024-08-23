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
    m = t(906732),
    _ = t(522474),
    E = t(706454),
    T = t(823379),
    h = t(5192),
    x = t(192918),
    N = t(561308),
    I = t(907152),
    C = t(206295),
    p = t(297781),
    g = t(591853),
    v = t(797342),
    f = t(981631),
    M = t(701488),
    P = t(689938);
let Z = (e, n) =>
        P.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
            username: n.username,
            activity: e.extra.activity_name
        }),
    S = (e, n, t) => {
        let a = P.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_GAME,
            l = h.ZP.getName(n.guild_id, n.id, t),
            i = e.extra.activity_name;
        return a
            .plainFormat({
                gameName: i,
                userName: l
            })
            .replaceAll('*', '');
    },
    A = (e) => {
        let { entry: n, channel: t, users: a, countOthers: l } = e;
        return P.Z.Messages.CONTENT_INVENTORY_REACTION_USER_PLAYED.plainFormat({
            gameName: n.extra.activity_name,
            user1: h.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, a[0]),
            user2: h.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, a[1]),
            countOthers: l
        }).replaceAll('*', '');
    };
n.ZP = (e) => {
    var n;
    let { channel: t, entry: h, onReaction: O, onVoiceChannelPreview: j } = e,
        { iconUrl: R, iconTitle: y, user: L, details: w, activity: b, coverImageUrl: B, richIcon: k } = (0, v.n)(h),
        { primaryColor: U, secondaryColor: G } = (0, C.Z)(R),
        D = (0, i.e7)([E.default], () => E.default.locale),
        { displayParticipants: H, participant1: V, participant2: Y, numOtherParticipants: F } = (0, x.Z)(h, 3),
        W = (0, s.O)(),
        { analyticsLocations: z } = (0, m.ZP)(),
        q = _.Z.getWindowOpen(f.KJ3.CHANNEL_CALL_POPOUT),
        K = () => {
            (0, d.Z)({
                guildId: null == t ? void 0 : t.guild_id,
                locationObject: W.location,
                openInPopout: q,
                initialSelectedApplicationId: h.extra.application_id,
                initialSlide: M.ag.SELECT_CHANNEL,
                analyticsLocations: z
            });
        },
        J = l.useCallback(
            (e) => {
                if (null == R || null == t || null == L) return;
                let n =
                    F > 0
                        ? A({
                              entry: h,
                              channel: t,
                              users: [V, Y],
                              countOthers: F
                          })
                        : S(h, t, L);
                return (0, I.C4)({
                    entry: h,
                    applicationImageSrc: R,
                    avatarSrcs: H.map((e) => e.getAvatarURL(t.guild_id, 128)),
                    description: n,
                    timestamp: (0, N.yh)(h, D),
                    colors: [U, G],
                    channelId: e
                });
            },
            [R, t, H, h, D, F, V, Y, U, G, L]
        );
    if (null == L) return null;
    let X = (0, a.jsx)(p.PZ, {
            location: p.Gt.POPOUT,
            entry: h
        }),
        $ = (0, a.jsx)(g.wG, {
            thumbnailSrc: null !== (n = null != k ? k : B) && void 0 !== n ? n : R,
            thumbnailTitle: y,
            channel: t,
            userDescription: (0, N.kr)(h) ? P.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING_V2 : P.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2,
            title: h.extra.activity_name,
            subtitle: w,
            badges: X,
            entry: h,
            onClickTitle: K,
            onClickSubtitle: K,
            onClickThumbnail: K
        }),
        Q =
            (0, o.Z)(b, f.xjy.JOIN) || (0, u.Z)(b)
                ? (0, a.jsx)(c.Z, {
                      activity: b,
                      user: L,
                      ButtonComponent: (e) =>
                          (0, a.jsx)(g.Ll, {
                              IconComponent: r.GameControllerIcon,
                              ...e
                          })
                  })
                : null,
        ee = [
            Q,
            (0, a.jsx)(g.Ll, {
                onClick: K,
                IconComponent: r.ActivitiesIcon,
                children: P.Z.Messages.CONTENT_INVENTORY_VIEW_ACTIVITY
            })
        ].filter(T.lm);
    return (0, a.jsxs)(g.yR, {
        children: [
            $,
            (0, a.jsx)(g.St, {
                children: (0, a.jsx)(g.WT, {
                    onReaction: O,
                    onVoiceChannelPreview: j,
                    user: L,
                    channel: t,
                    generateReactionImage: J,
                    reactionImageAltText: Z(h, L),
                    entry: h,
                    buttons: ee
                })
            })
        ]
    });
};
