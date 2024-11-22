n.d(t, {
    v: function () {
        return M;
    }
});
var l = n(200651),
    a = n(192379),
    i = n(758713),
    r = n(442837),
    o = n(481060),
    s = n(620662),
    u = n(841784),
    c = n(420660),
    d = n(429589),
    m = n(757182),
    h = n(706454),
    x = n(374129),
    C = n(639351),
    p = n(823379),
    v = n(379357),
    g = n(192918),
    f = n(22211),
    I = n(561308),
    j = n(919394),
    Z = n(438226),
    P = n(31074),
    L = n(206295),
    T = n(91140),
    y = n(297781),
    N = n(591853),
    _ = n(410441),
    S = n(797342),
    E = n(981631),
    A = n(388032);
let M = {
    [i.z.DESKTOP]: null,
    [i.z.LINUX]: null,
    [i.z.MACOS]: null,
    [i.z.NINTENDO]: null,
    [i.z.IOS]: null,
    [i.z.ANDROID]: null,
    [i.z.XBOX]: C.Z,
    [i.z.PLAYSTATION]: x.Z
};
t.Z = (e) => {
    let { channel: t, entry: n, disableGameProfileLinks: x, onReaction: C, onVoiceChannelPreview: k, onUserPopoutClosed: R, trackRankingItemInteraction: w } = e,
        { largeImage: O } = (0, v.rv)({ entry: n }),
        { user: b, details: H, appName: V, activity: B } = (0, S.n)(n),
        { primaryColor: U, secondaryColor: D } = (0, L.Z)(null == O ? void 0 : O.src),
        G = (0, r.e7)([h.default], () => h.default.locale),
        { streamPreviewUrl: z, stream: Y } = (0, f.Z)(n),
        { displayParticipants: W, participant1: q, participant2: F, numOtherParticipants: J } = (0, g.Z)(n, 3),
        X = n.extra.platform,
        K = null != X ? M[X] : null,
        $ = X === i.z.XBOX ? E.ABu.XBOX : X === i.z.PLAYSTATION ? E.ABu.PLAYSTATION : void 0,
        Q = (0, P.Z)($),
        ee = a.useCallback(
            (e) => {
                if ((null == O ? void 0 : O.src) == null || null == t || null == b) return;
                let l =
                    J > 0
                        ? (0, Z.VY)({
                              entry: n,
                              channel: t,
                              users: [q, F],
                              countOthers: J
                          })
                        : (0, Z.HV)(n, t, b);
                return (0, j.SO)({
                    entry: n,
                    applicationImageSrc: null == O ? void 0 : O.src,
                    avatarSrcs: W.map((e) => e.getAvatarURL(t.guild_id, 128)),
                    description: l,
                    timestamp: (0, I.yh)(n, G),
                    colors: [U, D],
                    channelId: e
                });
            },
            [null == O ? void 0 : O.src, t, W, n, G, J, q, F, U, D, b]
        );
    if (null == b) return null;
    let et = (0, l.jsx)(y.Gk, {
            location: null == z ? y.Gt.POPOUT : y.Gt.STREAMING_POPOUT,
            children: T.W.map((e, t) => (0, l.jsx)(e, { entry: n }, t))
        }),
        en =
            null == z
                ? (0, l.jsx)(N.wG, {
                      channel: t,
                      headerIcons:
                          null == K
                              ? null
                              : (0, l.jsx)(_.Z, {
                                    onClick: Q,
                                    Icon: K,
                                    'aria-label': A.intl.string(A.t.YR4cHB)
                                }),
                      userDescription: (0, I.kr)(n) ? A.t.vPg1JS : A.t.rPqqtr,
                      title: V,
                      subtitle: H,
                      badges: et,
                      entry: n,
                      disableGameProfileLinks: x,
                      onUserPopoutClosed: R,
                      trackRankingItemInteraction: w
                  })
                : (0, l.jsx)(N.jL, {
                      channel: t,
                      streamPreviewSrc: z,
                      title: n.extra.game_name,
                      subtitle: H,
                      badges: et,
                      userDescription: A.t['6oWFUF'],
                      entry: n,
                      stream: Y,
                      onUserPopoutClosed: R,
                      trackRankingItemInteraction: w
                  }),
        el =
            (0, s.Z)(B, E.xjy.JOIN) || (0, u.Z)(B)
                ? (0, l.jsx)(d.Z, {
                      activity: B,
                      user: b,
                      ButtonComponent: (e) =>
                          (0, l.jsx)(N.Ll, {
                              IconComponent: o.GameControllerIcon,
                              ...e
                          })
                  })
                : null,
        ea = [
            el,
            (0, c.Z)(B)
                ? (0, l.jsx)(m.Z, {
                      activity: B,
                      ButtonComponent: (e) =>
                          (0, l.jsx)(N.Ll, {
                              IconComponent: o.EyeIcon,
                              ...e
                          })
                  })
                : null
        ].filter(p.lm);
    return (0, l.jsxs)(N.yR, {
        children: [
            en,
            (0, l.jsx)(N.St, {
                children: (0, l.jsx)(N.WT, {
                    onReaction: C,
                    onVoiceChannelPreview: k,
                    user: b,
                    channel: t,
                    generateReactionImage: ee,
                    reactionImageAltText: (0, Z.IS)(n, b),
                    entry: n,
                    buttons: ea
                })
            })
        ]
    });
};
