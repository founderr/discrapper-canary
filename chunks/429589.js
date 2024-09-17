n.d(t, {
    Z: function () {
        return B;
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
    v = n(757266),
    _ = n(650774),
    p = n(430824),
    T = n(283595),
    f = n(496675),
    g = n(699516),
    I = n(944486),
    C = n(594174),
    N = n(979651),
    P = n(181106),
    Z = n(417363),
    S = n(358085),
    M = n(804739),
    y = n(317381),
    A = n(638880),
    O = n(255621),
    R = n(452634),
    j = n(527805),
    w = n(620662),
    L = n(275920),
    b = n(915863),
    U = n(701488),
    D = n(981631),
    k = n(689938);
function B(e) {
    var t, n;
    let { activity: B, embeddedActivity: F, user: G, onAction: H, isEmbedded: V = !1, ButtonComponent: Y = b.Z, ...z } = e,
        { analyticsLocations: W } = (0, d.ZP)(),
        [J, q] = a.useState(!1),
        K = (0, i.e7)([C.default], () => C.default.getCurrentUser()),
        X = G.id === (null == K ? void 0 : K.id),
        $ = null !== (t = null == F ? void 0 : F.applicationId) && void 0 !== t ? t : null == B ? void 0 : B.application_id,
        Q = (0, R.Z)({
            channelId: null == F ? void 0 : F.channelId,
            userId: G.id,
            activity: B
        }),
        ee = (0, i.e7)(
            [T.Z, x.Z, Z.Z, v.Z],
            () =>
                V ||
                (null != $ &&
                    (0, M.t)({
                        LibraryApplicationStore: T.Z,
                        LaunchableGameStore: x.Z,
                        DispatchApplicationStore: Z.Z,
                        ConnectedAppsStore: v.Z,
                        applicationId: $
                    }))
        ),
        et = (0, i.e7)([y.ZP], () =>
            Array.from(y.ZP.getSelfEmbeddedActivities().values()).some((e) => {
                let { applicationId: t, channelId: n } = e;
                return (t === (null == B ? void 0 : B.application_id) || t === (null == F ? void 0 : F.applicationId)) && n === Q;
            })
        ),
        en = (0, i.e7)([P.Z], () => null != B && null != B.application_id && P.Z.getState(B.application_id, D.mFx.JOIN) === D.OcF.LOADING),
        [el] = (0, m.Z)((null == F ? void 0 : F.applicationId) != null ? [null == F ? void 0 : F.applicationId] : (null == B ? void 0 : B.application_id) != null ? [null == B ? void 0 : B.application_id] : []),
        ea = (0, j.s5)({
            userId: G.id,
            activity: B,
            channelId: Q,
            application: el
        }),
        ei = (0, i.e7)([E.Z, p.Z, _.Z, g.Z, I.Z, N.Z, f.Z], () =>
            null != F
                ? ea === j.Fw.CAN_JOIN
                : null != B
                  ? (0, O.Z)({
                        user: G,
                        activity: B,
                        application: el,
                        channelId: Q,
                        currentUser: K,
                        isEmbedded: V,
                        ChannelStore: E.Z,
                        GuildStore: p.Z,
                        GuildMemberCountStore: _.Z,
                        RelationshipStore: g.Z,
                        SelectedChannelStore: I.Z,
                        VoiceStateStore: N.Z,
                        PermissionStore: f.Z
                    })
                  : void 0
        ),
        er = (0, i.e7)([y.ZP], () => Array.from(y.ZP.getSelfEmbeddedActivities().values()).some((e) => e.applicationId === (null == F ? void 0 : F.applicationId) && e.channelId === (null == F ? void 0 : F.channelId))),
        es = (0, c.O)(),
        eo = !S.isPlatformEmbedded;
    if (!((0, w.Z)(B, D.xjy.JOIN) || V) || null == $) return null;
    let eu = !X || (V && !er),
        ec = eu && (eo || ee) && !J && !et && (!V || ei),
        ed = null;
    eu ? !eo && !ee && null != B && (ed = k.Z.Messages.USER_ACTIVITY_NOT_DETECTED.format({ name: B.name })) : (ed = k.Z.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF);
    let eh = null !== (n = null == F ? void 0 : F.launchId) && void 0 !== n ? n : null == B ? void 0 : B.session_id,
        em = async (e, t) => {
            var n, l;
            if (null == eh || null == $) return;
            let a = (0, w.Z)(t, D.xjy.EMBEDDED),
                i = I.Z.getVoiceChannelId(),
                r = E.Z.getChannel(i);
            await o.Z.join({
                userId: e.id,
                sessionId: eh,
                applicationId: $,
                channelId: i,
                messageId: null,
                intent: U.Ws.PLAY,
                embedded: a,
                partyId: null != t ? (null == t ? void 0 : null === (n = t.party) || void 0 === n ? void 0 : n.id) : '',
                locationObject: es.location,
                analyticsLocations: W
            }),
                !a &&
                    (0, L.Z)({
                        type: D.q5t.JOIN,
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
                e = await (0, A.Z)({
                    applicationId: $,
                    activityChannelId: Q,
                    locationObject: es.location,
                    analyticsLocations: W,
                    commandOrigin: h.bB.VOICE_UI
                });
            }
            if (!e) {
                let e;
                ei && (null == H || H(), em(G, B)),
                    q(!0),
                    null != B &&
                        (e = await s.Z.sendActivityInviteUser({
                            type: D.mFx.JOIN_REQUEST,
                            userId: G.id,
                            activity: B,
                            location: D.Sbl.PROFILE_POPOUT
                        })),
                    null != e && u.default.selectPrivateChannel(e.id);
            }
        },
        eE = ei ? k.Z.Messages.JOIN : k.Z.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN;
    return (
        V && (eE = k.Z.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY),
        er && (eE = k.Z.Messages.EMBEDDED_ACTIVITIES_JOINED),
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
