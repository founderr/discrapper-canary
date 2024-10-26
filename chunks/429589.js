n.d(t, {
    Z: function () {
        return k;
    }
}),
    n(47120);
var l = n(200651),
    a = n(192379),
    i = n(442837),
    r = n(481060),
    s = n(278323),
    o = n(224706),
    u = n(287734),
    c = n(2052),
    d = n(906732),
    h = n(835473),
    m = n(592745),
    x = n(592125),
    E = n(757266),
    _ = n(650774),
    v = n(430824),
    C = n(283595),
    f = n(496675),
    p = n(699516),
    T = n(944486),
    g = n(594174),
    I = n(979651),
    N = n(181106),
    Z = n(417363),
    P = n(358085),
    M = n(804739),
    L = n(317381),
    S = n(638880),
    A = n(255621),
    R = n(452634),
    y = n(527805),
    O = n(620662),
    j = n(275920),
    w = n(915863),
    b = n(701488),
    D = n(981631),
    U = n(689938);
function k(e) {
    var t, n;
    let { activity: k, embeddedActivity: H, user: B, onAction: V, isEmbedded: F = !1, ButtonComponent: G = w.Z, ...Y } = e,
        { analyticsLocations: z } = (0, d.ZP)(),
        [W, q] = a.useState(!1),
        J = (0, i.e7)([g.default], () => g.default.getCurrentUser()),
        K = B.id === (null == J ? void 0 : J.id),
        X = null !== (t = null == H ? void 0 : H.applicationId) && void 0 !== t ? t : null == k ? void 0 : k.application_id,
        $ = (0, R.Z)({
            channelId: null == H ? void 0 : H.channelId,
            userId: B.id,
            activity: k
        }),
        Q = (0, i.e7)(
            [C.Z, m.Z, Z.Z, E.Z],
            () =>
                F ||
                (null != X &&
                    (0, M.t)({
                        LibraryApplicationStore: C.Z,
                        LaunchableGameStore: m.Z,
                        DispatchApplicationStore: Z.Z,
                        ConnectedAppsStore: E.Z,
                        applicationId: X
                    }))
        ),
        ee = (0, i.e7)([L.ZP], () =>
            Array.from(L.ZP.getSelfEmbeddedActivities().values()).some((e) => {
                let { applicationId: t, channelId: n } = e;
                return (t === (null == k ? void 0 : k.application_id) || t === (null == H ? void 0 : H.applicationId)) && n === $;
            })
        ),
        et = (0, i.e7)([N.Z], () => null != k && null != k.application_id && N.Z.getState(k.application_id, D.mFx.JOIN) === D.OcF.LOADING),
        [en] = (0, h.Z)((null == H ? void 0 : H.applicationId) != null ? [null == H ? void 0 : H.applicationId] : (null == k ? void 0 : k.application_id) != null ? [null == k ? void 0 : k.application_id] : []),
        el = (0, y.s5)({
            userId: B.id,
            activity: k,
            channelId: $,
            application: en
        }),
        ea = (0, i.e7)([x.Z, v.Z, _.Z, p.Z, T.Z, I.Z, f.Z], () =>
            null != H
                ? el === y.Fw.CAN_JOIN
                : null != k
                  ? (0, A.Z)({
                        user: B,
                        activity: k,
                        application: en,
                        channelId: $,
                        currentUser: J,
                        isEmbedded: F,
                        ChannelStore: x.Z,
                        GuildStore: v.Z,
                        GuildMemberCountStore: _.Z,
                        RelationshipStore: p.Z,
                        SelectedChannelStore: T.Z,
                        VoiceStateStore: I.Z,
                        PermissionStore: f.Z
                    })
                  : void 0
        ),
        ei = (0, i.e7)([L.ZP], () => Array.from(L.ZP.getSelfEmbeddedActivities().values()).some((e) => e.applicationId === (null == H ? void 0 : H.applicationId) && e.channelId === (null == H ? void 0 : H.channelId))),
        er = (0, c.O)(),
        es = !P.isPlatformEmbedded;
    if (!((0, O.Z)(k, D.xjy.JOIN) || F) || null == X) return null;
    let eo = !K || (F && !ei),
        eu = eo && (es || Q) && !W && !ee && (!F || ea),
        ec = null;
    eo ? !es && !Q && null != k && (ec = U.Z.Messages.USER_ACTIVITY_NOT_DETECTED.format({ name: k.name })) : (ec = U.Z.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF);
    let ed = null !== (n = null == H ? void 0 : H.launchId) && void 0 !== n ? n : null == k ? void 0 : k.session_id,
        eh = async (e, t) => {
            var n, l;
            if (null == ed || null == X) return;
            let a = (0, O.Z)(t, D.xjy.EMBEDDED),
                i = T.Z.getVoiceChannelId(),
                r = x.Z.getChannel(i);
            await o.Z.join({
                userId: e.id,
                sessionId: ed,
                applicationId: X,
                channelId: i,
                messageId: null,
                intent: b.Ws.PLAY,
                embedded: a,
                partyId: null != t ? (null == t ? void 0 : null === (n = t.party) || void 0 === n ? void 0 : n.id) : '',
                locationObject: er.location,
                analyticsLocations: z
            }),
                !a &&
                    (0, j.Z)({
                        type: D.q5t.JOIN,
                        userId: e.id,
                        guildId: null == r ? void 0 : r.guild_id,
                        channelId: i,
                        channelType: null == r ? void 0 : r.type,
                        applicationId: X,
                        partyId: null != t ? (null == t ? void 0 : null === (l = t.party) || void 0 === l ? void 0 : l.id) : '',
                        locationObject: er.location,
                        analyticsLocations: z
                    });
        },
        em = async () => {
            let e = !1;
            if (F) {
                if (!ea || null == $ || null == X) return;
                e = await (0, S.Z)({
                    applicationId: X,
                    activityChannelId: $,
                    locationObject: er.location,
                    analyticsLocations: z
                });
            }
            if (!e) {
                let e;
                ea && (null == V || V(), eh(B, k)),
                    q(!0),
                    null != k &&
                        (e = await s.Z.sendActivityInviteUser({
                            type: D.mFx.JOIN_REQUEST,
                            userId: B.id,
                            activity: k,
                            location: D.Sbl.PROFILE_POPOUT
                        })),
                    null != e && u.default.selectPrivateChannel(e.id);
            }
        },
        ex = ea ? U.Z.Messages.JOIN : U.Z.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN;
    return (
        F && (ex = U.Z.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY),
        ei && (ex = U.Z.Messages.EMBEDDED_ACTIVITIES_JOINED),
        (0, l.jsx)(
            r.Tooltip,
            {
                text: ec,
                children: (e) => {
                    let { onMouseEnter: t, onMouseLeave: n } = e;
                    return (0, l.jsx)(G, {
                        onClick: em,
                        onMouseEnter: t,
                        onMouseLeave: n,
                        disabled: !eu,
                        submitting: et,
                        fullWidth: !0,
                        ...Y,
                        children: ex
                    });
                }
            },
            'join'
        )
    );
}
