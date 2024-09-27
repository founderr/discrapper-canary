n.d(t, {
    P: function () {
        return O;
    }
});
var i = n(735250),
    s = n(470079),
    a = n(120356),
    l = n.n(a),
    r = n(442837),
    o = n(481060),
    c = n(620662),
    u = n(841784),
    d = n(387903),
    h = n(850827),
    m = n(812206),
    p = n(202458),
    _ = n(220779),
    f = n(142550),
    E = n(954017),
    g = n(314091),
    C = n(159244),
    I = n(574176),
    T = n(952164),
    x = n(199902),
    S = n(592125),
    v = n(430824),
    N = n(496675),
    A = n(979651),
    Z = n(626135),
    M = n(153066),
    b = n(981631),
    R = n(689938),
    L = n(247111);
function j(e) {
    let { type: t, source: n, activity: s, applicationStream: a, user: l, guildId: r, channelId: c, onAction: d, isEmbedded: m = (0, u.Z)(s), actionColor: p } = e;
    return (0, i.jsx)(h.Z, {
        className: (0, M.l)(L, 'actions', t),
        type: t,
        source: n,
        activity: s,
        applicationStream: a,
        user: l,
        guildId: r,
        look: o.Button.Looks.FILLED,
        color: null != p ? p : o.Button.Colors.PRIMARY,
        channelId: c,
        onAction: d,
        isEmbedded: m
    });
}
let O = d.Z.Types;
t.Z = function (e) {
    let { activity: t, user: n, useStoreStream: a = !0, showActions: o = !0, hideHeader: u = !1, showChannelDetails: h = !1, analyticsParams: M, ...O } = e,
        P = (0, r.e7)([A.Z, S.Z], () => {
            var e;
            return S.Z.getChannel(null === (e = A.Z.getVoiceStateForUser(n.id)) || void 0 === e ? void 0 : e.channelId);
        }),
        { enableHangStatus: y } = I.n.useExperiment(
            {
                guildId: null == P ? void 0 : P.guild_id,
                location: 'UserActivityContainer'
            },
            { autoTrackExposure: !1 }
        ),
        D = (0, r.e7)([x.Z], () => (a ? x.Z.getAnyStreamForUser(n.id) : null)),
        U = y && N.Z.can(b.Plq.CONNECT, P),
        k = (null == t ? void 0 : t.type) === b.IIU.HANG_STATUS && U ? P : null,
        w = (0, r.e7)([v.Z, A.Z, S.Z], () => {
            var e, i;
            return (0, c.Z)(t, b.xjy.EMBEDDED) ? v.Z.getGuild(null === (e = S.Z.getChannel(null === (i = A.Z.getVoiceStateForSession(n.id, null == t ? void 0 : t.session_id)) || void 0 === i ? void 0 : i.channelId)) || void 0 === e ? void 0 : e.getGuildId()) : null != k ? v.Z.getGuild(k.getGuildId()) : null;
        }),
        B = (0, r.e7)([v.Z], () => (null != D ? v.Z.getGuild(D.guildId) : null)),
        H = (0, r.e7)([m.Z], () => {
            if (null != t) return null != t.application_id ? m.Z.getApplication(t.application_id) : m.Z.getApplicationByName(t.name);
            return null;
        }),
        G = (0, p.Z)(),
        V = (0, C.Z)(n),
        F = G && null != t && V;
    return (s.useEffect(() => {
        (null == t ? void 0 : t.type) === b.IIU.HANG_STATUS &&
            U &&
            Z.default.track(b.rMx.VIEW_HANG_STATUS, {
                source: 'UserProfilePopout',
                guild_id: null == k ? void 0 : k.guild_id,
                channel_id: null == k ? void 0 : k.id
            });
    }, [null == t ? void 0 : t.type, U, k]),
    (null == t ? void 0 : t.type) !== b.IIU.HANG_STATUS || U)
        ? (0, i.jsx)(d.Z, {
              ...O,
              activity: t,
              user: n,
              application: H,
              hideHeader: u,
              activityGuild: null != w ? w : B,
              showReactions: F,
              showChannelDetails: h,
              channel: h ? P : void 0,
              renderActions: o
                  ? () =>
                        (0, i.jsxs)('div', {
                            className: l()(F && L.actionsWrapper),
                            children: [
                                (0, i.jsx)(j, {
                                    ...O,
                                    applicationStream: D,
                                    activity: t,
                                    user: n
                                }),
                                F &&
                                    (0, i.jsx)(_.ZP, {
                                        showReact: !0,
                                        showReply: !0,
                                        popoutProps: {
                                            replyHeaderText: R.Z.Messages.ACTIVITY_REACTION_REPLY_TITLE.format({ activity: t.name }),
                                            replyPlaceholder: R.Z.Messages.TEXTAREA_PLACEHOLDER.format({ channel: '@'.concat(n.globalName) })
                                        },
                                        onInteraction: (e) => {
                                            let { interactionType: i, emoji: s, reply: a } = e;
                                            Z.default.track(b.rMx.ACTIVITY_REACTOR_INTERACTED, {
                                                application_id: t.application_id,
                                                interaction_type: i,
                                                ...M
                                            }),
                                                i === f.L.ReactSubmit &&
                                                    null != s &&
                                                    (0, E.sendReactionToActivity)({
                                                        reaction: s,
                                                        user: n,
                                                        activity: t,
                                                        application: H,
                                                        altText: (0, g.xC)(n, t),
                                                        stream: D
                                                    }),
                                                i === f.L.ReplySubmit &&
                                                    null != a &&
                                                    (0, E.sendReplyToActivity)({
                                                        reply: a,
                                                        user: n,
                                                        activity: t,
                                                        application: H,
                                                        altText: (0, g.xC)(n, t),
                                                        stream: D
                                                    });
                                        }
                                    })
                            ]
                        })
                  : null,
              onOpenSpotifyTrack: T.aG,
              onOpenSpotifyArtist: T.d$,
              onOpenSpotifyAlbum: T.Z5
          })
        : null;
};
