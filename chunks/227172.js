t.d(n, {
    v: function () {
        return R;
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
    C = t(561308),
    p = t(919394),
    g = t(438226),
    v = t(206295),
    f = t(91140),
    M = t(297781),
    P = t(591853),
    Z = t(410441),
    A = t(797342),
    S = t(981631),
    O = t(689938);
let R = {
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
    let { channel: n, entry: t, disableGameProfileLinks: i, onReaction: E, onVoiceChannelPreview: T } = e,
        { largeImage: j } = (0, x.rv)({ entry: t }),
        { user: y, details: L, appName: w, activity: B } = (0, A.n)(t),
        { primaryColor: k, secondaryColor: U } = (0, v.Z)(null == j ? void 0 : j.src),
        b = (0, r.e7)([m.default], () => m.default.locale),
        { streamPreviewUrl: D, stream: G } = (0, N.Z)(t),
        { displayParticipants: H, participant1: V, participant2: Y, numOtherParticipants: F } = (0, I.Z)(t, 3),
        W = l.useCallback(
            (e) => {
                if ((null == j ? void 0 : j.src) == null || null == n || null == y) return;
                let a =
                    F > 0
                        ? (0, g.VY)({
                              entry: t,
                              channel: n,
                              users: [V, Y],
                              countOthers: F
                          })
                        : (0, g.HV)(t, n, y);
                return (0, p.SO)({
                    entry: t,
                    applicationImageSrc: null == j ? void 0 : j.src,
                    avatarSrcs: H.map((e) => e.getAvatarURL(n.guild_id, 128)),
                    description: a,
                    timestamp: (0, C.yh)(t, b),
                    colors: [k, U],
                    channelId: e
                });
            },
            [null == j ? void 0 : j.src, n, H, t, b, F, V, Y, k, U, y]
        );
    if (null == y) return null;
    let z = null != t.extra.platform ? R[t.extra.platform] : null,
        q = (0, a.jsx)(M.Gk, {
            location: null == D ? M.Gt.POPOUT : M.Gt.STREAMING_POPOUT,
            children: f.W.map((e, n) => (0, a.jsx)(e, { entry: t }, n))
        }),
        K =
            null == D
                ? (0, a.jsx)(P.wG, {
                      channel: n,
                      headerIcons:
                          null == z
                              ? null
                              : (0, a.jsx)(Z.Z, {
                                    Icon: z,
                                    'aria-label': O.Z.Messages.GAME_LIBRARY_LIST_HEADER_PLATFORM
                                }),
                      userDescription: (0, C.kr)(t) ? O.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING_V2 : O.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2,
                      title: w,
                      subtitle: L,
                      badges: q,
                      entry: t,
                      disableGameProfileLinks: i
                  })
                : (0, a.jsx)(P.jL, {
                      channel: n,
                      streamPreviewSrc: D,
                      title: t.extra.game_name,
                      subtitle: L,
                      badges: q,
                      userDescription: O.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_STREAMING_V2,
                      entry: t,
                      stream: G
                  }),
        J =
            (0, o.Z)(B, S.xjy.JOIN) || (0, u.Z)(B)
                ? (0, a.jsx)(d.Z, {
                      activity: B,
                      user: y,
                      ButtonComponent: (e) =>
                          (0, a.jsx)(P.Ll, {
                              IconComponent: s.GameControllerIcon,
                              ...e
                          })
                  })
                : null,
        X = [
            J,
            (0, c.Z)(B)
                ? (0, a.jsx)(_.Z, {
                      activity: B,
                      ButtonComponent: (e) =>
                          (0, a.jsx)(P.Ll, {
                              IconComponent: s.EyeIcon,
                              ...e
                          })
                  })
                : null
        ].filter(h.lm);
    return (0, a.jsxs)(P.yR, {
        children: [
            K,
            (0, a.jsx)(P.St, {
                children: (0, a.jsx)(P.WT, {
                    onReaction: E,
                    onVoiceChannelPreview: T,
                    user: y,
                    channel: n,
                    generateReactionImage: W,
                    reactionImageAltText: (0, g.IS)(t, y),
                    entry: t,
                    buttons: X
                })
            })
        ]
    });
};
