n.d(t, {
    P: function () {
        return R;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(442837),
    o = n(481060),
    c = n(620662),
    u = n(841784),
    d = n(387903),
    h = n(850827),
    m = n(812206),
    p = n(202458),
    f = n(220779),
    g = n(142550),
    C = n(954017),
    x = n(314091),
    v = n(159244),
    _ = n(574176),
    I = n(952164),
    E = n(199902),
    b = n(592125),
    S = n(430824),
    Z = n(496675),
    T = n(979651),
    N = n(626135),
    j = n(153066),
    A = n(981631),
    y = n(388032),
    P = n(247111);
function M(e) {
    let { type: t, source: n, activity: l, applicationStream: r, user: s, guildId: a, channelId: c, onAction: d, isEmbedded: m = (0, u.Z)(l), actionColor: p } = e;
    return (0, i.jsx)(h.Z, {
        className: (0, j.l)(P, 'actions', t),
        type: t,
        source: n,
        activity: l,
        applicationStream: r,
        user: s,
        guildId: a,
        look: o.Button.Looks.FILLED,
        color: null != p ? p : o.Button.Colors.PRIMARY,
        channelId: c,
        onAction: d,
        isEmbedded: m
    });
}
let R = d.Z.Types;
t.Z = function (e) {
    let { activity: t, user: n, useStoreStream: r = !0, showActions: o = !0, hideHeader: u = !1, showChannelDetails: h = !1, analyticsParams: j, ...R } = e,
        L = (0, a.e7)([T.Z, b.Z], () => {
            var e;
            return b.Z.getChannel(null === (e = T.Z.getVoiceStateForUser(n.id)) || void 0 === e ? void 0 : e.channelId);
        }),
        { enableHangStatus: k } = _.n.useExperiment(
            {
                guildId: null == L ? void 0 : L.guild_id,
                location: 'UserActivityContainer'
            },
            { autoTrackExposure: !1 }
        ),
        O = (0, a.e7)([E.Z], () => (r ? E.Z.getAnyStreamForUser(n.id) : null)),
        w = k && Z.Z.can(A.Plq.CONNECT, L),
        D = (null == t ? void 0 : t.type) === A.IIU.HANG_STATUS && w ? L : null,
        U = (0, a.e7)([S.Z, T.Z, b.Z], () => {
            var e, i;
            return (0, c.Z)(t, A.xjy.EMBEDDED) ? S.Z.getGuild(null === (e = b.Z.getChannel(null === (i = T.Z.getVoiceStateForSession(n.id, null == t ? void 0 : t.session_id)) || void 0 === i ? void 0 : i.channelId)) || void 0 === e ? void 0 : e.getGuildId()) : null != D ? S.Z.getGuild(D.getGuildId()) : null;
        }),
        B = (0, a.e7)([S.Z], () => (null != O ? S.Z.getGuild(O.guildId) : null)),
        H = (0, a.e7)([m.Z], () => {
            if (null != t) return null != t.application_id ? m.Z.getApplication(t.application_id) : m.Z.getApplicationByName(t.name);
            return null;
        }),
        F = (0, p.Z)(),
        G = (0, v.Z)(n),
        V = F && null != t && G;
    return (l.useEffect(() => {
        (null == t ? void 0 : t.type) === A.IIU.HANG_STATUS &&
            w &&
            N.default.track(A.rMx.VIEW_HANG_STATUS, {
                source: 'UserProfilePopout',
                guild_id: null == D ? void 0 : D.guild_id,
                channel_id: null == D ? void 0 : D.id
            });
    }, [null == t ? void 0 : t.type, w, D]),
    (null == t ? void 0 : t.type) !== A.IIU.HANG_STATUS || w)
        ? (0, i.jsx)(d.Z, {
              ...R,
              activity: t,
              user: n,
              application: H,
              hideHeader: u,
              activityGuild: null != U ? U : B,
              showReactions: V,
              showChannelDetails: h,
              channel: h ? L : void 0,
              renderActions: o
                  ? () =>
                        (0, i.jsxs)('div', {
                            className: s()(V && P.actionsWrapper),
                            children: [
                                (0, i.jsx)(M, {
                                    ...R,
                                    applicationStream: O,
                                    activity: t,
                                    user: n
                                }),
                                V &&
                                    (0, i.jsx)(f.ZP, {
                                        showReact: !0,
                                        showReply: !0,
                                        popoutProps: {
                                            replyHeaderText: y.intl.formatToPlainString(y.t['1JSA19'], { activity: t.name }),
                                            replyPlaceholder: y.intl.formatToPlainString(y.t['8lzR/f'], { channel: '@'.concat(n.globalName) })
                                        },
                                        onInteraction: (e) => {
                                            let { interactionType: i, emoji: l, reply: r } = e;
                                            N.default.track(A.rMx.ACTIVITY_REACTOR_INTERACTED, {
                                                application_id: t.application_id,
                                                interaction_type: i,
                                                ...j
                                            }),
                                                i === g.L.ReactSubmit &&
                                                    null != l &&
                                                    (0, C.sendReactionToActivity)({
                                                        reaction: l,
                                                        user: n,
                                                        activity: t,
                                                        application: H,
                                                        altText: (0, x.xC)(n, t),
                                                        stream: O
                                                    }),
                                                i === g.L.ReplySubmit &&
                                                    null != r &&
                                                    (0, C.sendReplyToActivity)({
                                                        reply: r,
                                                        user: n,
                                                        activity: t,
                                                        application: H,
                                                        altText: (0, x.xC)(n, t),
                                                        stream: O
                                                    });
                                        }
                                    })
                            ]
                        })
                  : null,
              onOpenSpotifyTrack: I.aG,
              onOpenSpotifyArtist: I.d$,
              onOpenSpotifyAlbum: I.Z5
          })
        : null;
};
