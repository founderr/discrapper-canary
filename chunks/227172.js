n.d(t, {
    v: function () {
        return R;
    }
});
var l = n(735250),
    a = n(470079),
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
    p = n(192918),
    T = n(22211),
    f = n(561308),
    g = n(919394),
    I = n(438226),
    C = n(206295),
    N = n(91140),
    P = n(297781),
    Z = n(591853),
    S = n(410441),
    M = n(797342),
    y = n(981631),
    A = n(689938);
let R = {
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
        { user: w, details: L, appName: b, activity: D } = (0, M.n)(n),
        { primaryColor: U, secondaryColor: B } = (0, C.Z)(null == j ? void 0 : j.src),
        k = (0, r.e7)([m.default], () => m.default.locale),
        { streamPreviewUrl: F, stream: G } = (0, T.Z)(n),
        { displayParticipants: H, participant1: V, participant2: Y, numOtherParticipants: z } = (0, p.Z)(n, 3),
        W = a.useCallback(
            (e) => {
                if ((null == j ? void 0 : j.src) == null || null == t || null == w) return;
                let l =
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
                    description: l,
                    timestamp: (0, f.yh)(n, k),
                    colors: [U, B],
                    channelId: e
                });
            },
            [null == j ? void 0 : j.src, t, H, n, k, z, V, Y, U, B, w]
        );
    if (null == w) return null;
    let q = null != n.extra.platform ? R[n.extra.platform] : null,
        J = (0, l.jsx)(P.Gk, {
            location: null == F ? P.Gt.POPOUT : P.Gt.STREAMING_POPOUT,
            children: N.W.map((e, t) => (0, l.jsx)(e, { entry: n }, t))
        }),
        K =
            null == F
                ? (0, l.jsx)(Z.wG, {
                      channel: t,
                      headerIcons:
                          null == q
                              ? null
                              : (0, l.jsx)(S.Z, {
                                    Icon: q,
                                    'aria-label': A.Z.Messages.GAME_LIBRARY_LIST_HEADER_PLATFORM
                                }),
                      userDescription: (0, f.kr)(n) ? A.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING_V2 : A.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2,
                      title: b,
                      subtitle: L,
                      badges: J,
                      entry: n,
                      disableGameProfileLinks: i,
                      onUserPopoutClosed: O
                  })
                : (0, l.jsx)(Z.jL, {
                      channel: t,
                      streamPreviewSrc: F,
                      title: n.extra.game_name,
                      subtitle: L,
                      badges: J,
                      userDescription: A.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_STREAMING_V2,
                      entry: n,
                      stream: G,
                      onUserPopoutClosed: O
                  }),
        X =
            (0, o.Z)(D, y.xjy.JOIN) || (0, u.Z)(D)
                ? (0, l.jsx)(d.Z, {
                      activity: D,
                      user: w,
                      ButtonComponent: (e) =>
                          (0, l.jsx)(Z.Ll, {
                              IconComponent: s.GameControllerIcon,
                              ...e
                          })
                  })
                : null,
        $ = [
            X,
            (0, c.Z)(D)
                ? (0, l.jsx)(h.Z, {
                      activity: D,
                      ButtonComponent: (e) =>
                          (0, l.jsx)(Z.Ll, {
                              IconComponent: s.EyeIcon,
                              ...e
                          })
                  })
                : null
        ].filter(E.lm);
    return (0, l.jsxs)(Z.yR, {
        children: [
            K,
            (0, l.jsx)(Z.St, {
                children: (0, l.jsx)(Z.WT, {
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
