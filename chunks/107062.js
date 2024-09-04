t(627494), t(757143);
var a = t(735250),
    l = t(470079),
    i = t(442837),
    r = t(481060),
    s = t(620662),
    o = t(841784),
    u = t(429589),
    c = t(499254),
    d = t(827498),
    _ = t(812236),
    m = t(541716),
    E = t(706454),
    T = t(823379),
    h = t(5192),
    x = t(379357),
    I = t(192918),
    N = t(561308),
    p = t(907152),
    C = t(206295),
    g = t(297781),
    v = t(591853),
    f = t(797342),
    P = t(981631),
    M = t(689938);
let Z = (e, n) =>
        M.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
            username: n.username,
            activity: e.extra.activity_name
        }),
    A = (e, n, t) => {
        let a = M.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_GAME,
            l = h.ZP.getName(n.guild_id, n.id, t),
            i = e.extra.activity_name;
        return a
            .plainFormat({
                gameName: i,
                userName: l
            })
            .replaceAll('*', '');
    },
    S = (e) => {
        let { entry: n, channel: t, users: a, countOthers: l } = e;
        return M.Z.Messages.CONTENT_INVENTORY_REACTION_USER_PLAYED.plainFormat({
            gameName: n.extra.activity_name,
            user1: h.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, a[0]),
            user2: h.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, a[1]),
            countOthers: l
        }).replaceAll('*', '');
    },
    O = (e) => {
        let { channel: n, entry: t, onReaction: c, onVoiceChannelPreview: d, appLoading: _, handleViewActivityClick: m } = e,
            { largeImage: h } = (0, x.rv)({ entry: t }),
            { user: O, details: j, activity: R, embeddedActivity: y } = (0, f.n)(t),
            { primaryColor: L, secondaryColor: w } = (0, C.Z)(null == h ? void 0 : h.src),
            B = (0, i.e7)([E.default], () => E.default.locale),
            { displayParticipants: U, participant1: b, participant2: k, numOtherParticipants: D } = (0, I.Z)(t, 3),
            G = l.useCallback(
                (e) => {
                    if ((null == h ? void 0 : h.src) == null || null == n || null == O) return;
                    let a =
                        D > 0
                            ? S({
                                  entry: t,
                                  channel: n,
                                  users: [b, k],
                                  countOthers: D
                              })
                            : A(t, n, O);
                    return (0, p.C4)({
                        entry: t,
                        applicationImageSrc: null == h ? void 0 : h.src,
                        avatarSrcs: U.map((e) => e.getAvatarURL(n.guild_id, 128)),
                        description: a,
                        timestamp: (0, N.yh)(t, B),
                        colors: [L, w],
                        channelId: e
                    });
                },
                [null == h ? void 0 : h.src, n, U, t, B, D, b, k, L, w, O]
            );
        if (null == O) return null;
        let H = (0, a.jsx)(g.PZ, {
                location: g.Gt.POPOUT,
                entry: t
            }),
            V = (0, a.jsx)(v.wG, {
                channel: n,
                userDescription: (0, N.kr)(t) ? M.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING_V2 : M.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2,
                title: t.extra.activity_name,
                subtitle: j,
                badges: H,
                entry: t,
                onClickTitle: m,
                onClickSubtitle: m,
                onClickThumbnail: m
            }),
            Y = (0, s.Z)(R, P.xjy.JOIN) || (0, o.Z)(R),
            F = Y
                ? (0, a.jsx)(u.Z, {
                      isEmbedded: (0, o.Z)(R),
                      embeddedActivity: y,
                      activity: R,
                      user: O,
                      ButtonComponent: (e) =>
                          (0, a.jsx)(v.Ll, {
                              IconComponent: r.AppsIcon,
                              ...e
                          })
                  })
                : null,
            W = (0, a.jsx)(v.Ll, {
                onClick: m,
                IconComponent: r.AppsIcon,
                disabled: _,
                children: _ ? M.Z.Messages.DEFAULT_INPUT_PLACEHOLDER : M.Z.Messages.CONTENT_INVENTORY_VIEW_ACTIVITY
            }),
            z = [Y ? F : W].filter(T.lm);
        return (0, a.jsxs)(v.yR, {
            children: [
                V,
                (0, a.jsx)(v.St, {
                    children: (0, a.jsx)(v.WT, {
                        onReaction: c,
                        onVoiceChannelPreview: d,
                        user: O,
                        channel: n,
                        generateReactionImage: G,
                        reactionImageAltText: Z(t, O),
                        entry: t,
                        buttons: z
                    })
                })
            ]
        });
    },
    j = (e) => (0, a.jsx)(O, { ...e }),
    R = (e) => {
        let { channel: n, entry: t } = e;
        l.useEffect(() => {
            (0, _.ZP)(n.id, t.extra.application_id);
        }, [t.extra.application_id, n]);
        let { loading: i } = (0, _.SY)(n, t.extra.application_id);
        return (0, a.jsx)(O, {
            ...e,
            appLoading: i,
            handleViewActivityClick: () => {
                if (!i) c._(d._b.TEXT, m.I.NORMAL, { applicationId: t.extra.application_id });
            }
        });
    };
n.ZP = function (e) {
    let { channel: n, ...t } = e;
    return null == n
        ? (0, a.jsx)(j, { ...t })
        : (0, a.jsx)(R, {
              channel: n,
              ...t
          });
};
