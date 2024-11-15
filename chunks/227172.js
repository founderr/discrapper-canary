n.d(t, {
    v: function () {
        return A;
    }
});
var l = n(200651),
    a = n(192379),
    i = n(758713),
    r = n(442837),
    o = n(481060),
    s = n(620662),
    c = n(841784),
    u = n(420660),
    d = n(429589),
    m = n(757182),
    x = n(706454),
    h = n(374129),
    p = n(639351),
    C = n(823379),
    v = n(379357),
    g = n(192918),
    f = n(22211),
    I = n(561308),
    j = n(919394),
    P = n(438226),
    Z = n(206295),
    L = n(91140),
    y = n(297781),
    T = n(591853),
    N = n(410441),
    _ = n(797342),
    E = n(981631),
    S = n(388032);
let A = {
    [i.z.DESKTOP]: null,
    [i.z.LINUX]: null,
    [i.z.MACOS]: null,
    [i.z.NINTENDO]: null,
    [i.z.IOS]: null,
    [i.z.ANDROID]: null,
    [i.z.XBOX]: p.Z,
    [i.z.PLAYSTATION]: h.Z
};
t.Z = (e) => {
    let { channel: t, entry: n, disableGameProfileLinks: i, onReaction: h, onVoiceChannelPreview: p, onUserPopoutClosed: M, trackRankingItemInteraction: k } = e,
        { largeImage: R } = (0, v.rv)({ entry: n }),
        { user: w, details: b, appName: H, activity: O } = (0, _.n)(n),
        { primaryColor: V, secondaryColor: B } = (0, Z.Z)(null == R ? void 0 : R.src),
        U = (0, r.e7)([x.default], () => x.default.locale),
        { streamPreviewUrl: D, stream: G } = (0, f.Z)(n),
        { displayParticipants: z, participant1: W, participant2: q, numOtherParticipants: Y } = (0, g.Z)(n, 3),
        F = a.useCallback(
            (e) => {
                if ((null == R ? void 0 : R.src) == null || null == t || null == w) return;
                let l =
                    Y > 0
                        ? (0, P.VY)({
                              entry: n,
                              channel: t,
                              users: [W, q],
                              countOthers: Y
                          })
                        : (0, P.HV)(n, t, w);
                return (0, j.SO)({
                    entry: n,
                    applicationImageSrc: null == R ? void 0 : R.src,
                    avatarSrcs: z.map((e) => e.getAvatarURL(t.guild_id, 128)),
                    description: l,
                    timestamp: (0, I.yh)(n, U),
                    colors: [V, B],
                    channelId: e
                });
            },
            [null == R ? void 0 : R.src, t, z, n, U, Y, W, q, V, B, w]
        );
    if (null == w) return null;
    let J = null != n.extra.platform ? A[n.extra.platform] : null,
        K = (0, l.jsx)(y.Gk, {
            location: null == D ? y.Gt.POPOUT : y.Gt.STREAMING_POPOUT,
            children: L.W.map((e, t) => (0, l.jsx)(e, { entry: n }, t))
        }),
        X =
            null == D
                ? (0, l.jsx)(T.wG, {
                      channel: t,
                      headerIcons:
                          null == J
                              ? null
                              : (0, l.jsx)(N.Z, {
                                    Icon: J,
                                    'aria-label': S.intl.string(S.t.YR4cHB)
                                }),
                      userDescription: (0, I.kr)(n) ? S.t.vPg1JS : S.t.rPqqtr,
                      title: H,
                      subtitle: b,
                      badges: K,
                      entry: n,
                      disableGameProfileLinks: i,
                      onUserPopoutClosed: M,
                      trackRankingItemInteraction: k
                  })
                : (0, l.jsx)(T.jL, {
                      channel: t,
                      streamPreviewSrc: D,
                      title: n.extra.game_name,
                      subtitle: b,
                      badges: K,
                      userDescription: S.t['6oWFUF'],
                      entry: n,
                      stream: G,
                      onUserPopoutClosed: M,
                      trackRankingItemInteraction: k
                  }),
        $ =
            (0, s.Z)(O, E.xjy.JOIN) || (0, c.Z)(O)
                ? (0, l.jsx)(d.Z, {
                      activity: O,
                      user: w,
                      ButtonComponent: (e) =>
                          (0, l.jsx)(T.Ll, {
                              IconComponent: o.GameControllerIcon,
                              ...e
                          })
                  })
                : null,
        Q = [
            $,
            (0, u.Z)(O)
                ? (0, l.jsx)(m.Z, {
                      activity: O,
                      ButtonComponent: (e) =>
                          (0, l.jsx)(T.Ll, {
                              IconComponent: o.EyeIcon,
                              ...e
                          })
                  })
                : null
        ].filter(C.lm);
    return (0, l.jsxs)(T.yR, {
        children: [
            X,
            (0, l.jsx)(T.St, {
                children: (0, l.jsx)(T.WT, {
                    onReaction: h,
                    onVoiceChannelPreview: p,
                    user: w,
                    channel: t,
                    generateReactionImage: F,
                    reactionImageAltText: (0, P.IS)(n, w),
                    entry: n,
                    buttons: Q
                })
            })
        ]
    });
};
