n.d(t, {
    v: function () {
        return _;
    }
});
var i = n(200651),
    l = n(192379),
    a = n(758713),
    r = n(442837),
    o = n(481060),
    s = n(620662),
    u = n(841784),
    c = n(420660),
    d = n(429589),
    h = n(757182),
    m = n(706454),
    x = n(374129),
    v = n(639351),
    f = n(823379),
    p = n(379357),
    g = n(192918),
    C = n(22211),
    I = n(561308),
    P = n(919394),
    Z = n(438226),
    y = n(206295),
    j = n(91140),
    w = n(297781),
    T = n(591853),
    L = n(410441),
    S = n(797342),
    N = n(981631),
    E = n(388032);
let _ = {
    [a.z.DESKTOP]: null,
    [a.z.LINUX]: null,
    [a.z.MACOS]: null,
    [a.z.NINTENDO]: null,
    [a.z.IOS]: null,
    [a.z.ANDROID]: null,
    [a.z.XBOX]: v.Z,
    [a.z.PLAYSTATION]: x.Z
};
t.Z = (e) => {
    let { channel: t, entry: n, disableGameProfileLinks: a, onReaction: x, onVoiceChannelPreview: v, onUserPopoutClosed: A, trackRankingItemInteraction: R } = e,
        { largeImage: b } = (0, p.rv)({ entry: n }),
        { user: M, details: O, appName: k, activity: H } = (0, S.n)(n),
        { primaryColor: U, secondaryColor: D } = (0, y.Z)(null == b ? void 0 : b.src),
        B = (0, r.e7)([m.default], () => m.default.locale),
        { streamPreviewUrl: V, stream: F } = (0, C.Z)(n),
        { displayParticipants: G, participant1: z, participant2: W, numOtherParticipants: q } = (0, g.Z)(n, 3),
        Y = l.useCallback(
            (e) => {
                if ((null == b ? void 0 : b.src) == null || null == t || null == M) return;
                let i =
                    q > 0
                        ? (0, Z.VY)({
                              entry: n,
                              channel: t,
                              users: [z, W],
                              countOthers: q
                          })
                        : (0, Z.HV)(n, t, M);
                return (0, P.SO)({
                    entry: n,
                    applicationImageSrc: null == b ? void 0 : b.src,
                    avatarSrcs: G.map((e) => e.getAvatarURL(t.guild_id, 128)),
                    description: i,
                    timestamp: (0, I.yh)(n, B),
                    colors: [U, D],
                    channelId: e
                });
            },
            [null == b ? void 0 : b.src, t, G, n, B, q, z, W, U, D, M]
        );
    if (null == M) return null;
    let J = null != n.extra.platform ? _[n.extra.platform] : null,
        X = (0, i.jsx)(w.Gk, {
            location: null == V ? w.Gt.POPOUT : w.Gt.STREAMING_POPOUT,
            children: j.W.map((e, t) => (0, i.jsx)(e, { entry: n }, t))
        }),
        K =
            null == V
                ? (0, i.jsx)(T.wG, {
                      channel: t,
                      headerIcons:
                          null == J
                              ? null
                              : (0, i.jsx)(L.Z, {
                                    Icon: J,
                                    'aria-label': E.intl.string(E.t.YR4cHB)
                                }),
                      userDescription: (0, I.kr)(n) ? E.t.vPg1JS : E.t.rPqqtr,
                      title: k,
                      subtitle: O,
                      badges: X,
                      entry: n,
                      disableGameProfileLinks: a,
                      onUserPopoutClosed: A,
                      trackRankingItemInteraction: R
                  })
                : (0, i.jsx)(T.jL, {
                      channel: t,
                      streamPreviewSrc: V,
                      title: n.extra.game_name,
                      subtitle: O,
                      badges: X,
                      userDescription: E.t['6oWFUF'],
                      entry: n,
                      stream: F,
                      onUserPopoutClosed: A,
                      trackRankingItemInteraction: R
                  }),
        Q =
            (0, s.Z)(H, N.xjy.JOIN) || (0, u.Z)(H)
                ? (0, i.jsx)(d.Z, {
                      activity: H,
                      user: M,
                      ButtonComponent: (e) =>
                          (0, i.jsx)(T.Ll, {
                              IconComponent: o.GameControllerIcon,
                              ...e
                          })
                  })
                : null,
        $ = [
            Q,
            (0, c.Z)(H)
                ? (0, i.jsx)(h.Z, {
                      activity: H,
                      ButtonComponent: (e) =>
                          (0, i.jsx)(T.Ll, {
                              IconComponent: o.EyeIcon,
                              ...e
                          })
                  })
                : null
        ].filter(f.lm);
    return (0, i.jsxs)(T.yR, {
        children: [
            K,
            (0, i.jsx)(T.St, {
                children: (0, i.jsx)(T.WT, {
                    onReaction: x,
                    onVoiceChannelPreview: v,
                    user: M,
                    channel: t,
                    generateReactionImage: Y,
                    reactionImageAltText: (0, Z.IS)(n, M),
                    entry: n,
                    buttons: $
                })
            })
        ]
    });
};
