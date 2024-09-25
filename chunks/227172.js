n.d(t, {
    v: function () {
        return R;
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
    E = n(639351),
    v = n(823379),
    _ = n(379357),
    f = n(192918),
    T = n(22211),
    p = n(561308),
    g = n(919394),
    I = n(438226),
    N = n(206295),
    C = n(91140),
    A = n(297781),
    Z = n(591853),
    P = n(410441),
    S = n(797342),
    M = n(981631),
    O = n(689938);
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
    let { channel: t, entry: n, disableGameProfileLinks: i, onReaction: x, onVoiceChannelPreview: E, onUserPopoutClosed: j } = e,
        { largeImage: y } = (0, _.rv)({ entry: n }),
        { user: L, details: w, appName: D, activity: b } = (0, S.n)(n),
        { primaryColor: U, secondaryColor: B } = (0, N.Z)(null == y ? void 0 : y.src),
        k = (0, r.e7)([m.default], () => m.default.locale),
        { streamPreviewUrl: F, stream: G } = (0, T.Z)(n),
        { displayParticipants: H, participant1: Y, participant2: z, numOtherParticipants: V } = (0, f.Z)(n, 3),
        W = l.useCallback(
            (e) => {
                if ((null == y ? void 0 : y.src) == null || null == t || null == L) return;
                let a =
                    V > 0
                        ? (0, I.VY)({
                              entry: n,
                              channel: t,
                              users: [Y, z],
                              countOthers: V
                          })
                        : (0, I.HV)(n, t, L);
                return (0, g.SO)({
                    entry: n,
                    applicationImageSrc: null == y ? void 0 : y.src,
                    avatarSrcs: H.map((e) => e.getAvatarURL(t.guild_id, 128)),
                    description: a,
                    timestamp: (0, p.yh)(n, k),
                    colors: [U, B],
                    channelId: e
                });
            },
            [null == y ? void 0 : y.src, t, H, n, k, V, Y, z, U, B, L]
        );
    if (null == L) return null;
    let q = null != n.extra.platform ? R[n.extra.platform] : null,
        K = (0, a.jsx)(A.Gk, {
            location: null == F ? A.Gt.POPOUT : A.Gt.STREAMING_POPOUT,
            children: C.W.map((e, t) => (0, a.jsx)(e, { entry: n }, t))
        }),
        J =
            null == F
                ? (0, a.jsx)(Z.wG, {
                      channel: t,
                      headerIcons:
                          null == q
                              ? null
                              : (0, a.jsx)(P.Z, {
                                    Icon: q,
                                    'aria-label': O.Z.Messages.GAME_LIBRARY_LIST_HEADER_PLATFORM
                                }),
                      userDescription: (0, p.kr)(n) ? O.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING_V2 : O.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2,
                      title: D,
                      subtitle: w,
                      badges: K,
                      entry: n,
                      disableGameProfileLinks: i,
                      onUserPopoutClosed: j
                  })
                : (0, a.jsx)(Z.jL, {
                      channel: t,
                      streamPreviewSrc: F,
                      title: n.extra.game_name,
                      subtitle: w,
                      badges: K,
                      userDescription: O.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_STREAMING_V2,
                      entry: n,
                      stream: G,
                      onUserPopoutClosed: j
                  }),
        X =
            (0, o.Z)(b, M.xjy.JOIN) || (0, u.Z)(b)
                ? (0, a.jsx)(d.Z, {
                      activity: b,
                      user: L,
                      ButtonComponent: (e) =>
                          (0, a.jsx)(Z.Ll, {
                              IconComponent: s.GameControllerIcon,
                              ...e
                          })
                  })
                : null,
        $ = [
            X,
            (0, c.Z)(b)
                ? (0, a.jsx)(h.Z, {
                      activity: b,
                      ButtonComponent: (e) =>
                          (0, a.jsx)(Z.Ll, {
                              IconComponent: s.EyeIcon,
                              ...e
                          })
                  })
                : null
        ].filter(v.lm);
    return (0, a.jsxs)(Z.yR, {
        children: [
            J,
            (0, a.jsx)(Z.St, {
                children: (0, a.jsx)(Z.WT, {
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
