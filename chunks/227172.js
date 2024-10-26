n.d(t, {
    v: function () {
        return R;
    }
});
var l = n(200651),
    a = n(192379),
    i = n(758713),
    r = n(442837),
    s = n(481060),
    o = n(620662),
    u = n(841784),
    c = n(420660),
    d = n(429589),
    h = n(757182),
    m = n(706454),
    x = n(374129),
    E = n(639351),
    _ = n(823379),
    v = n(379357),
    C = n(192918),
    f = n(22211),
    p = n(561308),
    T = n(919394),
    g = n(438226),
    I = n(206295),
    N = n(91140),
    Z = n(297781),
    P = n(591853),
    M = n(410441),
    L = n(797342),
    S = n(981631),
    A = n(689938);
let R = {
    [i.z.DESKTOP]: null,
    [i.z.LINUX]: null,
    [i.z.MACOS]: null,
    [i.z.NINTENDO]: null,
    [i.z.IOS]: null,
    [i.z.ANDROID]: null,
    [i.z.XBOX]: E.Z,
    [i.z.PLAYSTATION]: x.Z
};
t.Z = (e) => {
    let { channel: t, entry: n, disableGameProfileLinks: i, onReaction: x, onVoiceChannelPreview: E, onUserPopoutClosed: y, trackRankingItemInteraction: O } = e,
        { largeImage: j } = (0, v.rv)({ entry: n }),
        { user: w, details: b, appName: D, activity: U } = (0, L.n)(n),
        { primaryColor: k, secondaryColor: H } = (0, I.Z)(null == j ? void 0 : j.src),
        B = (0, r.e7)([m.default], () => m.default.locale),
        { streamPreviewUrl: V, stream: F } = (0, f.Z)(n),
        { displayParticipants: G, participant1: Y, participant2: z, numOtherParticipants: W } = (0, C.Z)(n, 3),
        q = a.useCallback(
            (e) => {
                if ((null == j ? void 0 : j.src) == null || null == t || null == w) return;
                let l =
                    W > 0
                        ? (0, g.VY)({
                              entry: n,
                              channel: t,
                              users: [Y, z],
                              countOthers: W
                          })
                        : (0, g.HV)(n, t, w);
                return (0, T.SO)({
                    entry: n,
                    applicationImageSrc: null == j ? void 0 : j.src,
                    avatarSrcs: G.map((e) => e.getAvatarURL(t.guild_id, 128)),
                    description: l,
                    timestamp: (0, p.yh)(n, B),
                    colors: [k, H],
                    channelId: e
                });
            },
            [null == j ? void 0 : j.src, t, G, n, B, W, Y, z, k, H, w]
        );
    if (null == w) return null;
    let J = null != n.extra.platform ? R[n.extra.platform] : null,
        K = (0, l.jsx)(Z.Gk, {
            location: null == V ? Z.Gt.POPOUT : Z.Gt.STREAMING_POPOUT,
            children: N.W.map((e, t) => (0, l.jsx)(e, { entry: n }, t))
        }),
        X =
            null == V
                ? (0, l.jsx)(P.wG, {
                      channel: t,
                      headerIcons:
                          null == J
                              ? null
                              : (0, l.jsx)(M.Z, {
                                    Icon: J,
                                    'aria-label': A.Z.Messages.GAME_LIBRARY_LIST_HEADER_PLATFORM
                                }),
                      userDescription: (0, p.kr)(n) ? A.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING_V2 : A.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2,
                      title: D,
                      subtitle: b,
                      badges: K,
                      entry: n,
                      disableGameProfileLinks: i,
                      onUserPopoutClosed: y,
                      trackRankingItemInteraction: O
                  })
                : (0, l.jsx)(P.jL, {
                      channel: t,
                      streamPreviewSrc: V,
                      title: n.extra.game_name,
                      subtitle: b,
                      badges: K,
                      userDescription: A.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_STREAMING_V2,
                      entry: n,
                      stream: F,
                      onUserPopoutClosed: y,
                      trackRankingItemInteraction: O
                  }),
        $ =
            (0, o.Z)(U, S.xjy.JOIN) || (0, u.Z)(U)
                ? (0, l.jsx)(d.Z, {
                      activity: U,
                      user: w,
                      ButtonComponent: (e) =>
                          (0, l.jsx)(P.Ll, {
                              IconComponent: s.GameControllerIcon,
                              ...e
                          })
                  })
                : null,
        Q = [
            $,
            (0, c.Z)(U)
                ? (0, l.jsx)(h.Z, {
                      activity: U,
                      ButtonComponent: (e) =>
                          (0, l.jsx)(P.Ll, {
                              IconComponent: s.EyeIcon,
                              ...e
                          })
                  })
                : null
        ].filter(_.lm);
    return (0, l.jsxs)(P.yR, {
        children: [
            X,
            (0, l.jsx)(P.St, {
                children: (0, l.jsx)(P.WT, {
                    onReaction: x,
                    onVoiceChannelPreview: E,
                    user: w,
                    channel: t,
                    generateReactionImage: q,
                    reactionImageAltText: (0, g.IS)(n, w),
                    entry: n,
                    buttons: Q
                })
            })
        ]
    });
};
