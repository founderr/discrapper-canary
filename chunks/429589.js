n.d(t, {
    Z: function () {
        return k;
    }
}),
    n(47120);
var l = n(735250),
    a = n(470079),
    i = n(442837),
    r = n(481060),
    s = n(278323),
    o = n(224706),
    u = n(287734),
    c = n(2052),
    d = n(906732),
    h = n(895924),
    m = n(835473),
    x = n(592745),
    E = n(592125),
    _ = n(757266),
    v = n(650774),
    T = n(430824),
    p = n(283595),
    f = n(496675),
    g = n(699516),
    I = n(944486),
    C = n(594174),
    N = n(979651),
    P = n(181106),
    Z = n(417363),
    A = n(358085),
    S = n(804739),
    M = n(317381),
    O = n(638880),
    y = n(255621),
    R = n(452634),
    j = n(527805),
    L = n(620662),
    w = n(275920),
    b = n(915863),
    D = n(701488),
    U = n(981631),
    B = n(689938);
function k(e) {
    var t, n;
    let { activity: k, embeddedActivity: G, user: F, onAction: H, isEmbedded: V = !1, ButtonComponent: Y = b.Z, ...z } = e,
        { analyticsLocations: W } = (0, d.ZP)(),
        [q, J] = a.useState(!1),
        K = (0, i.e7)([C.default], () => C.default.getCurrentUser()),
        X = F.id === (null == K ? void 0 : K.id),
        $ = null !== (t = null == G ? void 0 : G.applicationId) && void 0 !== t ? t : null == k ? void 0 : k.application_id,
        Q = (0, R.Z)({
            channelId: null == G ? void 0 : G.channelId,
            userId: F.id,
            activity: k
        }),
        ee = (0, i.e7)(
            [p.Z, x.Z, Z.Z, _.Z],
            () =>
                V ||
                (null != $ &&
                    (0, S.t)({
                        LibraryApplicationStore: p.Z,
                        LaunchableGameStore: x.Z,
                        DispatchApplicationStore: Z.Z,
                        ConnectedAppsStore: _.Z,
                        applicationId: $
                    }))
        ),
        et = (0, i.e7)([M.ZP], () =>
            Array.from(M.ZP.getSelfEmbeddedActivities().values()).some((e) => {
                let { applicationId: t, channelId: n } = e;
                return (t === (null == k ? void 0 : k.application_id) || t === (null == G ? void 0 : G.applicationId)) && n === Q;
            })
        ),
        en = (0, i.e7)([P.Z], () => null != k && null != k.application_id && P.Z.getState(k.application_id, U.mFx.JOIN) === U.OcF.LOADING),
        [el] = (0, m.Z)((null == G ? void 0 : G.applicationId) != null ? [null == G ? void 0 : G.applicationId] : (null == k ? void 0 : k.application_id) != null ? [null == k ? void 0 : k.application_id] : []),
        ea = (0, j.s5)({
            userId: F.id,
            activity: k,
            channelId: Q,
            application: el
        }),
        ei = (0, i.e7)([E.Z, T.Z, v.Z, g.Z, I.Z, N.Z, f.Z], () =>
            null != G
                ? ea === j.Fw.CAN_JOIN
                : null != k
                  ? (0, y.Z)({
                        user: F,
                        activity: k,
                        application: el,
                        channelId: Q,
                        currentUser: K,
                        isEmbedded: V,
                        ChannelStore: E.Z,
                        GuildStore: T.Z,
                        GuildMemberCountStore: v.Z,
                        RelationshipStore: g.Z,
                        SelectedChannelStore: I.Z,
                        VoiceStateStore: N.Z,
                        PermissionStore: f.Z
                    })
                  : void 0
        ),
        er = (0, i.e7)([M.ZP], () => Array.from(M.ZP.getSelfEmbeddedActivities().values()).some((e) => e.applicationId === (null == G ? void 0 : G.applicationId) && e.channelId === (null == G ? void 0 : G.channelId))),
        es = (0, c.O)(),
        eo = !A.isPlatformEmbedded;
    if (!((0, L.Z)(k, U.xjy.JOIN) || V) || null == $) return null;
    let eu = !X || (V && !er),
        ec = eu && (eo || ee) && !q && !et && (!V || ei),
        ed = null;
    eu ? !eo && !ee && null != k && (ed = B.Z.Messages.USER_ACTIVITY_NOT_DETECTED.format({ name: k.name })) : (ed = B.Z.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF);
    let eh = null !== (n = null == G ? void 0 : G.launchId) && void 0 !== n ? n : null == k ? void 0 : k.session_id,
        em = async (e, t) => {
            var n, l;
            if (null == eh || null == $) return;
            let a = (0, L.Z)(t, U.xjy.EMBEDDED),
                i = I.Z.getVoiceChannelId(),
                r = E.Z.getChannel(i);
            await o.Z.join({
                userId: e.id,
                sessionId: eh,
                applicationId: $,
                channelId: i,
                messageId: null,
                intent: D.Ws.PLAY,
                embedded: a,
                partyId: null != t ? (null == t ? void 0 : null === (n = t.party) || void 0 === n ? void 0 : n.id) : '',
                locationObject: es.location,
                analyticsLocations: W
            }),
                !a &&
                    (0, w.Z)({
                        type: U.q5t.JOIN,
                        userId: e.id,
                        guildId: null == r ? void 0 : r.guild_id,
                        channelId: i,
                        channelType: null == r ? void 0 : r.type,
                        applicationId: $,
                        partyId: null != t ? (null == t ? void 0 : null === (l = t.party) || void 0 === l ? void 0 : l.id) : '',
                        locationObject: es.location,
                        analyticsLocations: W
                    });
        },
        ex = async () => {
            let e = !1;
            if (V) {
                if (!ei || null == Q || null == $) return;
                e = await (0, O.Z)({
                    applicationId: $,
                    activityChannelId: Q,
                    locationObject: es.location,
                    analyticsLocations: W,
                    commandOrigin: h.bB.VOICE_UI
                });
            }
            if (!e) {
                let e;
                ei && (null == H || H(), em(F, k)),
                    J(!0),
                    null != k &&
                        (e = await s.Z.sendActivityInviteUser({
                            type: U.mFx.JOIN_REQUEST,
                            userId: F.id,
                            activity: k,
                            location: U.Sbl.PROFILE_POPOUT
                        })),
                    null != e && u.default.selectPrivateChannel(e.id);
            }
        },
        eE = ei ? B.Z.Messages.JOIN : B.Z.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN;
    return (
        V && (eE = B.Z.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY),
        er && (eE = B.Z.Messages.EMBEDDED_ACTIVITIES_JOINED),
        (0, l.jsx)(
            r.Tooltip,
            {
                text: ed,
                children: (e) => {
                    let { onMouseEnter: t, onMouseLeave: n } = e;
                    return (0, l.jsx)(Y, {
                        onClick: ex,
                        onMouseEnter: t,
                        onMouseLeave: n,
                        disabled: !ec,
                        submitting: en,
                        fullWidth: !0,
                        ...z,
                        children: eE
                    });
                }
            },
            'join'
        )
    );
}
