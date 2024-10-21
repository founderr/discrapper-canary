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
    p = n(22211),
    f = n(561308),
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
    let { channel: t, entry: n, disableGameProfileLinks: i, onReaction: x, onVoiceChannelPreview: E, onUserPopoutClosed: y } = e,
        { largeImage: O } = (0, v.rv)({ entry: n }),
        { user: j, details: w, appName: b, activity: D } = (0, L.n)(n),
        { primaryColor: U, secondaryColor: H } = (0, I.Z)(null == O ? void 0 : O.src),
        B = (0, r.e7)([m.default], () => m.default.locale),
        { streamPreviewUrl: k, stream: V } = (0, p.Z)(n),
        { displayParticipants: F, participant1: G, participant2: Y, numOtherParticipants: z } = (0, C.Z)(n, 3),
        W = a.useCallback(
            (e) => {
                if ((null == O ? void 0 : O.src) == null || null == t || null == j) return;
                let l =
                    z > 0
                        ? (0, g.VY)({
                              entry: n,
                              channel: t,
                              users: [G, Y],
                              countOthers: z
                          })
                        : (0, g.HV)(n, t, j);
                return (0, T.SO)({
                    entry: n,
                    applicationImageSrc: null == O ? void 0 : O.src,
                    avatarSrcs: F.map((e) => e.getAvatarURL(t.guild_id, 128)),
                    description: l,
                    timestamp: (0, f.yh)(n, B),
                    colors: [U, H],
                    channelId: e
                });
            },
            [null == O ? void 0 : O.src, t, F, n, B, z, G, Y, U, H, j]
        );
    if (null == j) return null;
    let q = null != n.extra.platform ? R[n.extra.platform] : null,
        J = (0, l.jsx)(Z.Gk, {
            location: null == k ? Z.Gt.POPOUT : Z.Gt.STREAMING_POPOUT,
            children: N.W.map((e, t) => (0, l.jsx)(e, { entry: n }, t))
        }),
        K =
            null == k
                ? (0, l.jsx)(P.wG, {
                      channel: t,
                      headerIcons:
                          null == q
                              ? null
                              : (0, l.jsx)(M.Z, {
                                    Icon: q,
                                    'aria-label': A.Z.Messages.GAME_LIBRARY_LIST_HEADER_PLATFORM
                                }),
                      userDescription: (0, f.kr)(n) ? A.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING_V2 : A.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2,
                      title: b,
                      subtitle: w,
                      badges: J,
                      entry: n,
                      disableGameProfileLinks: i,
                      onUserPopoutClosed: y
                  })
                : (0, l.jsx)(P.jL, {
                      channel: t,
                      streamPreviewSrc: k,
                      title: n.extra.game_name,
                      subtitle: w,
                      badges: J,
                      userDescription: A.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_STREAMING_V2,
                      entry: n,
                      stream: V,
                      onUserPopoutClosed: y
                  }),
        X =
            (0, o.Z)(D, S.xjy.JOIN) || (0, u.Z)(D)
                ? (0, l.jsx)(d.Z, {
                      activity: D,
                      user: j,
                      ButtonComponent: (e) =>
                          (0, l.jsx)(P.Ll, {
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
                          (0, l.jsx)(P.Ll, {
                              IconComponent: s.EyeIcon,
                              ...e
                          })
                  })
                : null
        ].filter(_.lm);
    return (0, l.jsxs)(P.yR, {
        children: [
            K,
            (0, l.jsx)(P.St, {
                children: (0, l.jsx)(P.WT, {
                    onReaction: x,
                    onVoiceChannelPreview: E,
                    user: j,
                    channel: t,
                    generateReactionImage: W,
                    reactionImageAltText: (0, g.IS)(n, j),
                    entry: n,
                    buttons: $
                })
            })
        ]
    });
};
