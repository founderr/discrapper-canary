t.d(n, {
    v: function () {
        return j;
    }
});
var a = t(735250),
    l = t(470079),
    i = t(758713),
    r = t(442837),
    s = t(481060),
    o = t(620662),
    u = t(841784),
    c = t(420660),
    d = t(429589),
    _ = t(757182),
    m = t(706454),
    E = t(374129),
    T = t(639351),
    h = t(823379),
    x = t(379357),
    I = t(192918),
    N = t(22211),
    p = t(561308),
    C = t(919394),
    g = t(438226),
    v = t(206295),
    f = t(91140),
    P = t(297781),
    M = t(591853),
    Z = t(410441),
    A = t(797342),
    S = t(981631),
    O = t(689938);
let j = {
    [i.z.DESKTOP]: null,
    [i.z.LINUX]: null,
    [i.z.MACOS]: null,
    [i.z.NINTENDO]: null,
    [i.z.IOS]: null,
    [i.z.ANDROID]: null,
    [i.z.XBOX]: T.Z,
    [i.z.PLAYSTATION]: E.Z
};
n.Z = (e) => {
    let { channel: n, entry: t, disableGameProfileLinks: i, onReaction: E, onVoiceChannelPreview: T, onUserPopoutClosed: R } = e,
        { largeImage: y } = (0, x.rv)({ entry: t }),
        { user: L, details: w, appName: B, activity: U } = (0, A.n)(t),
        { primaryColor: b, secondaryColor: k } = (0, v.Z)(null == y ? void 0 : y.src),
        D = (0, r.e7)([m.default], () => m.default.locale),
        { streamPreviewUrl: G, stream: H } = (0, N.Z)(t),
        { displayParticipants: V, participant1: Y, participant2: F, numOtherParticipants: W } = (0, I.Z)(t, 3),
        z = l.useCallback(
            (e) => {
                if ((null == y ? void 0 : y.src) == null || null == n || null == L) return;
                let a =
                    W > 0
                        ? (0, g.VY)({
                              entry: t,
                              channel: n,
                              users: [Y, F],
                              countOthers: W
                          })
                        : (0, g.HV)(t, n, L);
                return (0, C.SO)({
                    entry: t,
                    applicationImageSrc: null == y ? void 0 : y.src,
                    avatarSrcs: V.map((e) => e.getAvatarURL(n.guild_id, 128)),
                    description: a,
                    timestamp: (0, p.yh)(t, D),
                    colors: [b, k],
                    channelId: e
                });
            },
            [null == y ? void 0 : y.src, n, V, t, D, W, Y, F, b, k, L]
        );
    if (null == L) return null;
    let q = null != t.extra.platform ? j[t.extra.platform] : null,
        K = (0, a.jsx)(P.Gk, {
            location: null == G ? P.Gt.POPOUT : P.Gt.STREAMING_POPOUT,
            children: f.W.map((e, n) => (0, a.jsx)(e, { entry: t }, n))
        }),
        J =
            null == G
                ? (0, a.jsx)(M.wG, {
                      channel: n,
                      headerIcons:
                          null == q
                              ? null
                              : (0, a.jsx)(Z.Z, {
                                    Icon: q,
                                    'aria-label': O.Z.Messages.GAME_LIBRARY_LIST_HEADER_PLATFORM
                                }),
                      userDescription: (0, p.kr)(t) ? O.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING_V2 : O.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2,
                      title: B,
                      subtitle: w,
                      badges: K,
                      entry: t,
                      disableGameProfileLinks: i,
                      onUserPopoutClosed: R
                  })
                : (0, a.jsx)(M.jL, {
                      channel: n,
                      streamPreviewSrc: G,
                      title: t.extra.game_name,
                      subtitle: w,
                      badges: K,
                      userDescription: O.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_STREAMING_V2,
                      entry: t,
                      stream: H,
                      onUserPopoutClosed: R
                  }),
        X =
            (0, o.Z)(U, S.xjy.JOIN) || (0, u.Z)(U)
                ? (0, a.jsx)(d.Z, {
                      activity: U,
                      user: L,
                      ButtonComponent: (e) =>
                          (0, a.jsx)(M.Ll, {
                              IconComponent: s.GameControllerIcon,
                              ...e
                          })
                  })
                : null,
        $ = [
            X,
            (0, c.Z)(U)
                ? (0, a.jsx)(_.Z, {
                      activity: U,
                      ButtonComponent: (e) =>
                          (0, a.jsx)(M.Ll, {
                              IconComponent: s.EyeIcon,
                              ...e
                          })
                  })
                : null
        ].filter(h.lm);
    return (0, a.jsxs)(M.yR, {
        children: [
            J,
            (0, a.jsx)(M.St, {
                children: (0, a.jsx)(M.WT, {
                    onReaction: E,
                    onVoiceChannelPreview: T,
                    user: L,
                    channel: n,
                    generateReactionImage: z,
                    reactionImageAltText: (0, g.IS)(t, L),
                    entry: t,
                    buttons: $
                })
            })
        ]
    });
};
