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
    j = n(561308),
    I = n(919394),
    Z = n(438226),
    P = n(206295),
    y = n(91140),
    L = n(297781),
    T = n(591853),
    N = n(410441),
    _ = n(797342),
    S = n(981631),
    E = n(388032);
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
        { largeImage: w } = (0, v.rv)({ entry: n }),
        { user: R, details: b, appName: H, activity: O } = (0, _.n)(n),
        { primaryColor: V, secondaryColor: B } = (0, P.Z)(null == w ? void 0 : w.src),
        U = (0, r.e7)([x.default], () => x.default.locale),
        { streamPreviewUrl: D, stream: G } = (0, f.Z)(n),
        { displayParticipants: z, participant1: q, participant2: Y, numOtherParticipants: W } = (0, g.Z)(n, 3),
        F = a.useCallback(
            (e) => {
                if ((null == w ? void 0 : w.src) == null || null == t || null == R) return;
                let l =
                    W > 0
                        ? (0, Z.VY)({
                              entry: n,
                              channel: t,
                              users: [q, Y],
                              countOthers: W
                          })
                        : (0, Z.HV)(n, t, R);
                return (0, I.SO)({
                    entry: n,
                    applicationImageSrc: null == w ? void 0 : w.src,
                    avatarSrcs: z.map((e) => e.getAvatarURL(t.guild_id, 128)),
                    description: l,
                    timestamp: (0, j.yh)(n, U),
                    colors: [V, B],
                    channelId: e
                });
            },
            [null == w ? void 0 : w.src, t, z, n, U, W, q, Y, V, B, R]
        );
    if (null == R) return null;
    let J = null != n.extra.platform ? A[n.extra.platform] : null,
        K = (0, l.jsx)(L.Gk, {
            location: null == D ? L.Gt.POPOUT : L.Gt.STREAMING_POPOUT,
            children: y.W.map((e, t) => (0, l.jsx)(e, { entry: n }, t))
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
                                    'aria-label': E.intl.string(E.t.YR4cHB)
                                }),
                      userDescription: (0, j.kr)(n) ? E.t.vPg1JS : E.t.rPqqtr,
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
                      userDescription: E.t['6oWFUF'],
                      entry: n,
                      stream: G,
                      onUserPopoutClosed: M,
                      trackRankingItemInteraction: k
                  }),
        $ =
            (0, s.Z)(O, S.xjy.JOIN) || (0, c.Z)(O)
                ? (0, l.jsx)(d.Z, {
                      activity: O,
                      user: R,
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
                    user: R,
                    channel: t,
                    generateReactionImage: F,
                    reactionImageAltText: (0, Z.IS)(n, R),
                    entry: n,
                    buttons: Q
                })
            })
        ]
    });
};
