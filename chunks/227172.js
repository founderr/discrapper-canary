n.d(t, {
    v: function () {
        return O;
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
    E = n(639351),
    _ = n(823379),
    v = n(379357),
    T = n(192918),
    p = n(22211),
    f = n(561308),
    g = n(919394),
    I = n(438226),
    C = n(206295),
    N = n(91140),
    P = n(297781),
    Z = n(591853),
    A = n(410441),
    S = n(797342),
    M = n(981631),
    y = n(689938);
let O = {
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
    let { channel: t, entry: n, disableGameProfileLinks: i, onReaction: x, onVoiceChannelPreview: E, onUserPopoutClosed: R } = e,
        { largeImage: j } = (0, v.rv)({ entry: n }),
        { user: L, details: w, appName: b, activity: D } = (0, S.n)(n),
        { primaryColor: U, secondaryColor: B } = (0, C.Z)(null == j ? void 0 : j.src),
        k = (0, r.e7)([m.default], () => m.default.locale),
        { streamPreviewUrl: F, stream: G } = (0, p.Z)(n),
        { displayParticipants: H, participant1: V, participant2: Y, numOtherParticipants: z } = (0, T.Z)(n, 3),
        W = a.useCallback(
            (e) => {
                if ((null == j ? void 0 : j.src) == null || null == t || null == L) return;
                let l =
                    z > 0
                        ? (0, I.VY)({
                              entry: n,
                              channel: t,
                              users: [V, Y],
                              countOthers: z
                          })
                        : (0, I.HV)(n, t, L);
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
            [null == j ? void 0 : j.src, t, H, n, k, z, V, Y, U, B, L]
        );
    if (null == L) return null;
    let q = null != n.extra.platform ? O[n.extra.platform] : null,
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
                              : (0, l.jsx)(A.Z, {
                                    Icon: q,
                                    'aria-label': y.Z.Messages.GAME_LIBRARY_LIST_HEADER_PLATFORM
                                }),
                      userDescription: (0, f.kr)(n) ? y.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING_V2 : y.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2,
                      title: b,
                      subtitle: w,
                      badges: J,
                      entry: n,
                      disableGameProfileLinks: i,
                      onUserPopoutClosed: R
                  })
                : (0, l.jsx)(Z.jL, {
                      channel: t,
                      streamPreviewSrc: F,
                      title: n.extra.game_name,
                      subtitle: w,
                      badges: J,
                      userDescription: y.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_STREAMING_V2,
                      entry: n,
                      stream: G,
                      onUserPopoutClosed: R
                  }),
        X =
            (0, o.Z)(D, M.xjy.JOIN) || (0, u.Z)(D)
                ? (0, l.jsx)(d.Z, {
                      activity: D,
                      user: L,
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
        ].filter(_.lm);
    return (0, l.jsxs)(Z.yR, {
        children: [
            K,
            (0, l.jsx)(Z.St, {
                children: (0, l.jsx)(Z.WT, {
                    onReaction: x,
                    onVoiceChannelPreview: E,
                    user: L,
                    channel: t,
                    generateReactionImage: W,
                    reactionImageAltText: (0, I.IS)(n, L),
                    entry: n,
                    buttons: $
                })
            })
        ]
    });
};
