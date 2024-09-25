n.d(t, {
    Z: function () {
        return k;
    }
}),
    n(47120);
var a = n(735250),
    l = n(470079),
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
    v = n(757266),
    _ = n(650774),
    f = n(430824),
    T = n(283595),
    p = n(496675),
    g = n(699516),
    I = n(944486),
    N = n(594174),
    C = n(979651),
    A = n(181106),
    Z = n(417363),
    P = n(358085),
    S = n(804739),
    M = n(317381),
    O = n(638880),
    R = n(255621),
    j = n(452634),
    y = n(527805),
    L = n(620662),
    w = n(275920),
    D = n(915863),
    b = n(701488),
    U = n(981631),
    B = n(689938);
function k(e) {
    var t, n;
    let { activity: k, embeddedActivity: F, user: G, onAction: H, isEmbedded: Y = !1, ButtonComponent: z = D.Z, ...V } = e,
        { analyticsLocations: W } = (0, d.ZP)(),
        [q, K] = l.useState(!1),
        J = (0, i.e7)([N.default], () => N.default.getCurrentUser()),
        X = G.id === (null == J ? void 0 : J.id),
        $ = null !== (t = null == F ? void 0 : F.applicationId) && void 0 !== t ? t : null == k ? void 0 : k.application_id,
        Q = (0, j.Z)({
            channelId: null == F ? void 0 : F.channelId,
            userId: G.id,
            activity: k
        }),
        ee = (0, i.e7)(
            [T.Z, x.Z, Z.Z, v.Z],
            () =>
                Y ||
                (null != $ &&
                    (0, S.t)({
                        LibraryApplicationStore: T.Z,
                        LaunchableGameStore: x.Z,
                        DispatchApplicationStore: Z.Z,
                        ConnectedAppsStore: v.Z,
                        applicationId: $
                    }))
        ),
        et = (0, i.e7)([M.ZP], () =>
            Array.from(M.ZP.getSelfEmbeddedActivities().values()).some((e) => {
                let { applicationId: t, channelId: n } = e;
                return (t === (null == k ? void 0 : k.application_id) || t === (null == F ? void 0 : F.applicationId)) && n === Q;
            })
        ),
        en = (0, i.e7)([A.Z], () => null != k && null != k.application_id && A.Z.getState(k.application_id, U.mFx.JOIN) === U.OcF.LOADING),
        [ea] = (0, m.Z)((null == F ? void 0 : F.applicationId) != null ? [null == F ? void 0 : F.applicationId] : (null == k ? void 0 : k.application_id) != null ? [null == k ? void 0 : k.application_id] : []),
        el = (0, y.s5)({
            userId: G.id,
            activity: k,
            channelId: Q,
            application: ea
        }),
        ei = (0, i.e7)([E.Z, f.Z, _.Z, g.Z, I.Z, C.Z, p.Z], () =>
            null != F
                ? el === y.Fw.CAN_JOIN
                : null != k
                  ? (0, R.Z)({
                        user: G,
                        activity: k,
                        application: ea,
                        channelId: Q,
                        currentUser: J,
                        isEmbedded: Y,
                        ChannelStore: E.Z,
                        GuildStore: f.Z,
                        GuildMemberCountStore: _.Z,
                        RelationshipStore: g.Z,
                        SelectedChannelStore: I.Z,
                        VoiceStateStore: C.Z,
                        PermissionStore: p.Z
                    })
                  : void 0
        ),
        er = (0, i.e7)([M.ZP], () => Array.from(M.ZP.getSelfEmbeddedActivities().values()).some((e) => e.applicationId === (null == F ? void 0 : F.applicationId) && e.channelId === (null == F ? void 0 : F.channelId))),
        es = (0, c.O)(),
        eo = !P.isPlatformEmbedded;
    if (!((0, L.Z)(k, U.xjy.JOIN) || Y) || null == $) return null;
    let eu = !X || (Y && !er),
        ec = eu && (eo || ee) && !q && !et && (!Y || ei),
        ed = null;
    eu ? !eo && !ee && null != k && (ed = B.Z.Messages.USER_ACTIVITY_NOT_DETECTED.format({ name: k.name })) : (ed = B.Z.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF);
    let eh = null !== (n = null == F ? void 0 : F.launchId) && void 0 !== n ? n : null == k ? void 0 : k.session_id,
        em = async (e, t) => {
            var n, a;
            if (null == eh || null == $) return;
            let l = (0, L.Z)(t, U.xjy.EMBEDDED),
                i = I.Z.getVoiceChannelId(),
                r = E.Z.getChannel(i);
            await o.Z.join({
                userId: e.id,
                sessionId: eh,
                applicationId: $,
                channelId: i,
                messageId: null,
                intent: b.Ws.PLAY,
                embedded: l,
                partyId: null != t ? (null == t ? void 0 : null === (n = t.party) || void 0 === n ? void 0 : n.id) : '',
                locationObject: es.location,
                analyticsLocations: W
            }),
                !l &&
                    (0, w.Z)({
                        type: U.q5t.JOIN,
                        userId: e.id,
                        guildId: null == r ? void 0 : r.guild_id,
                        channelId: i,
                        channelType: null == r ? void 0 : r.type,
                        applicationId: $,
                        partyId: null != t ? (null == t ? void 0 : null === (a = t.party) || void 0 === a ? void 0 : a.id) : '',
                        locationObject: es.location,
                        analyticsLocations: W
                    });
        },
        ex = async () => {
            let e = !1;
            if (Y) {
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
                ei && (null == H || H(), em(G, k)),
                    K(!0),
                    null != k &&
                        (e = await s.Z.sendActivityInviteUser({
                            type: U.mFx.JOIN_REQUEST,
                            userId: G.id,
                            activity: k,
                            location: U.Sbl.PROFILE_POPOUT
                        })),
                    null != e && u.default.selectPrivateChannel(e.id);
            }
        },
        eE = ei ? B.Z.Messages.JOIN : B.Z.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN;
    return (
        Y && (eE = B.Z.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY),
        er && (eE = B.Z.Messages.EMBEDDED_ACTIVITIES_JOINED),
        (0, a.jsx)(
            r.Tooltip,
            {
                text: ed,
                children: (e) => {
                    let { onMouseEnter: t, onMouseLeave: n } = e;
                    return (0, a.jsx)(z, {
                        onClick: ex,
                        onMouseEnter: t,
                        onMouseLeave: n,
                        disabled: !ec,
                        submitting: en,
                        fullWidth: !0,
                        ...V,
                        children: eE
                    });
                }
            },
            'join'
        )
    );
}
