n.d(t, {
    v: function () {
        return y;
    }
});
var a = n(735250),
    l = n(470079),
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
    v = n(639351),
    E = n(823379),
    _ = n(379357),
    f = n(192918),
    p = n(22211),
    T = n(561308),
    g = n(919394),
    I = n(438226),
    C = n(206295),
    N = n(91140),
    P = n(297781),
    Z = n(591853),
    S = n(410441),
    A = n(797342),
    R = n(981631),
    M = n(689938);
let y = {
    [i.z.DESKTOP]: null,
    [i.z.LINUX]: null,
    [i.z.MACOS]: null,
    [i.z.NINTENDO]: null,
    [i.z.IOS]: null,
    [i.z.ANDROID]: null,
    [i.z.XBOX]: v.Z,
    [i.z.PLAYSTATION]: x.Z
};
t.Z = (e) => {
    let { channel: t, entry: n, disableGameProfileLinks: i, onReaction: x, onVoiceChannelPreview: v, onUserPopoutClosed: O } = e,
        { largeImage: j } = (0, _.rv)({ entry: n }),
        { user: w, details: L, appName: b, activity: k } = (0, A.n)(n),
        { primaryColor: D, secondaryColor: U } = (0, C.Z)(null == j ? void 0 : j.src),
        B = (0, r.e7)([m.default], () => m.default.locale),
        { streamPreviewUrl: G, stream: F } = (0, p.Z)(n),
        { displayParticipants: H, participant1: V, participant2: Y, numOtherParticipants: z } = (0, f.Z)(n, 3),
        W = l.useCallback(
            (e) => {
                if ((null == j ? void 0 : j.src) == null || null == t || null == w) return;
                let a =
                    z > 0
                        ? (0, I.VY)({
                              entry: n,
                              channel: t,
                              users: [V, Y],
                              countOthers: z
                          })
                        : (0, I.HV)(n, t, w);
                return (0, g.SO)({
                    entry: n,
                    applicationImageSrc: null == j ? void 0 : j.src,
                    avatarSrcs: H.map((e) => e.getAvatarURL(t.guild_id, 128)),
                    description: a,
                    timestamp: (0, T.yh)(n, B),
                    colors: [D, U],
                    channelId: e
                });
            },
            [null == j ? void 0 : j.src, t, H, n, B, z, V, Y, D, U, w]
        );
    if (null == w) return null;
    let q = null != n.extra.platform ? y[n.extra.platform] : null,
        J = (0, a.jsx)(P.Gk, {
            location: null == G ? P.Gt.POPOUT : P.Gt.STREAMING_POPOUT,
            children: N.W.map((e, t) => (0, a.jsx)(e, { entry: n }, t))
        }),
        K =
            null == G
                ? (0, a.jsx)(Z.wG, {
                      channel: t,
                      headerIcons:
                          null == q
                              ? null
                              : (0, a.jsx)(S.Z, {
                                    Icon: q,
                                    'aria-label': M.Z.Messages.GAME_LIBRARY_LIST_HEADER_PLATFORM
                                }),
                      userDescription: (0, T.kr)(n) ? M.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING_V2 : M.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2,
                      title: b,
                      subtitle: L,
                      badges: J,
                      entry: n,
                      disableGameProfileLinks: i,
                      onUserPopoutClosed: O
                  })
                : (0, a.jsx)(Z.jL, {
                      channel: t,
                      streamPreviewSrc: G,
                      title: n.extra.game_name,
                      subtitle: L,
                      badges: J,
                      userDescription: M.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_STREAMING_V2,
                      entry: n,
                      stream: F,
                      onUserPopoutClosed: O
                  }),
        X =
            (0, o.Z)(k, R.xjy.JOIN) || (0, u.Z)(k)
                ? (0, a.jsx)(d.Z, {
                      activity: k,
                      user: w,
                      ButtonComponent: (e) =>
                          (0, a.jsx)(Z.Ll, {
                              IconComponent: s.GameControllerIcon,
                              ...e
                          })
                  })
                : null,
        $ = [
            X,
            (0, c.Z)(k)
                ? (0, a.jsx)(h.Z, {
                      activity: k,
                      ButtonComponent: (e) =>
                          (0, a.jsx)(Z.Ll, {
                              IconComponent: s.EyeIcon,
                              ...e
                          })
                  })
                : null
        ].filter(E.lm);
    return (0, a.jsxs)(Z.yR, {
        children: [
            K,
            (0, a.jsx)(Z.St, {
                children: (0, a.jsx)(Z.WT, {
                    onReaction: x,
                    onVoiceChannelPreview: v,
                    user: w,
                    channel: t,
                    generateReactionImage: W,
                    reactionImageAltText: (0, I.IS)(n, w),
                    entry: n,
                    buttons: $
                })
            })
        ]
    });
};
