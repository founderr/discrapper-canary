t.d(n, {
    v: function () {
        return O;
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
    m = t(757182),
    _ = t(706454),
    E = t(374129),
    T = t(639351),
    h = t(823379),
    x = t(192918),
    N = t(22211),
    I = t(561308),
    C = t(919394),
    p = t(438226),
    g = t(206295),
    f = t(91140),
    v = t(297781),
    M = t(591853),
    P = t(410441),
    Z = t(797342),
    S = t(981631),
    A = t(689938);
let O = {
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
    var n;
    let { channel: t, entry: i, disableGameProfileLinks: E, onReaction: T, onVoiceChannelPreview: j } = e,
        { iconUrl: R, iconTitle: y, user: L, details: w, appName: b, activity: B, coverImageUrl: k, richIcon: U } = (0, Z.n)(i),
        { primaryColor: G, secondaryColor: D } = (0, g.Z)(R),
        H = (0, r.e7)([_.default], () => _.default.locale),
        { streamPreviewUrl: V, stream: Y } = (0, N.Z)(i),
        { displayParticipants: F, participant1: W, participant2: z, numOtherParticipants: q } = (0, x.Z)(i, 3),
        K = l.useCallback(
            (e) => {
                if (null == R || null == t || null == L) return;
                let n =
                    q > 0
                        ? (0, p.VY)({
                              entry: i,
                              channel: t,
                              users: [W, z],
                              countOthers: q
                          })
                        : (0, p.HV)(i, t, L);
                return (0, C.SO)({
                    entry: i,
                    applicationImageSrc: R,
                    avatarSrcs: F.map((e) => e.getAvatarURL(t.guild_id, 128)),
                    description: n,
                    timestamp: (0, I.yh)(i, H),
                    colors: [G, D],
                    channelId: e
                });
            },
            [R, t, F, i, H, q, W, z, G, D, L]
        );
    if (null == L) return null;
    let J = null != i.extra.platform ? O[i.extra.platform] : null,
        X = (0, a.jsx)(v.Gk, {
            location: null == V ? v.Gt.POPOUT : v.Gt.STREAMING_POPOUT,
            children: f.W.map((e, n) => (0, a.jsx)(e, { entry: i }, n))
        }),
        $ =
            null == V
                ? (0, a.jsx)(M.wG, {
                      thumbnailSrc: null !== (n = null != U ? U : k) && void 0 !== n ? n : R,
                      thumbnailTitle: y,
                      channel: t,
                      headerIcons:
                          null == J
                              ? null
                              : (0, a.jsx)(P.Z, {
                                    Icon: J,
                                    'aria-label': A.Z.Messages.GAME_LIBRARY_LIST_HEADER_PLATFORM
                                }),
                      userDescription: (0, I.kr)(i) ? A.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING_V2 : A.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2,
                      title: b,
                      subtitle: w,
                      badges: X,
                      entry: i,
                      disableGameProfileLinks: E
                  })
                : (0, a.jsx)(M.jL, {
                      thumbnailSrc: U,
                      thumbnailTitle: y,
                      channel: t,
                      streamPreviewSrc: V,
                      title: i.extra.game_name,
                      subtitle: w,
                      badges: X,
                      userDescription: A.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_STREAMING_V2,
                      entry: i,
                      stream: Y
                  }),
        Q =
            (0, o.Z)(B, S.xjy.JOIN) || (0, u.Z)(B)
                ? (0, a.jsx)(d.Z, {
                      activity: B,
                      user: L,
                      ButtonComponent: (e) =>
                          (0, a.jsx)(M.Ll, {
                              IconComponent: s.GameControllerIcon,
                              ...e
                          })
                  })
                : null,
        ee = [
            Q,
            (0, c.Z)(B)
                ? (0, a.jsx)(m.Z, {
                      activity: B,
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
            $,
            (0, a.jsx)(M.St, {
                children: (0, a.jsx)(M.WT, {
                    onReaction: T,
                    onVoiceChannelPreview: j,
                    user: L,
                    channel: t,
                    generateReactionImage: K,
                    reactionImageAltText: (0, p.IS)(i, L),
                    entry: i,
                    buttons: ee
                })
            })
        ]
    });
};
