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
    h = n(835473),
    m = n(592745),
    x = n(592125),
    v = n(757266),
    E = n(650774),
    _ = n(430824),
    p = n(283595),
    f = n(496675),
    T = n(699516),
    g = n(944486),
    I = n(594174),
    C = n(979651),
    N = n(181106),
    P = n(417363),
    Z = n(358085),
    A = n(804739),
    S = n(317381),
    M = n(638880),
    y = n(255621),
    R = n(452634),
    O = n(527805),
    j = n(620662),
    w = n(275920),
    L = n(915863),
    b = n(701488),
    D = n(981631),
    U = n(689938);
function k(e) {
    var t, n;
    let { activity: k, embeddedActivity: B, user: G, onAction: F, isEmbedded: H = !1, ButtonComponent: V = L.Z, ...Y } = e,
        { analyticsLocations: z } = (0, d.ZP)(),
        [W, q] = a.useState(!1),
        J = (0, i.e7)([I.default], () => I.default.getCurrentUser()),
        K = G.id === (null == J ? void 0 : J.id),
        X = null !== (t = null == B ? void 0 : B.applicationId) && void 0 !== t ? t : null == k ? void 0 : k.application_id,
        $ = (0, R.Z)({
            channelId: null == B ? void 0 : B.channelId,
            userId: G.id,
            activity: k
        }),
        Q = (0, i.e7)(
            [p.Z, m.Z, P.Z, v.Z],
            () =>
                H ||
                (null != X &&
                    (0, A.t)({
                        LibraryApplicationStore: p.Z,
                        LaunchableGameStore: m.Z,
                        DispatchApplicationStore: P.Z,
                        ConnectedAppsStore: v.Z,
                        applicationId: X
                    }))
        ),
        ee = (0, i.e7)([S.ZP], () =>
            Array.from(S.ZP.getSelfEmbeddedActivities().values()).some((e) => {
                let { applicationId: t, channelId: n } = e;
                return (t === (null == k ? void 0 : k.application_id) || t === (null == B ? void 0 : B.applicationId)) && n === $;
            })
        ),
        et = (0, i.e7)([N.Z], () => null != k && null != k.application_id && N.Z.getState(k.application_id, D.mFx.JOIN) === D.OcF.LOADING),
        [en] = (0, h.Z)((null == B ? void 0 : B.applicationId) != null ? [null == B ? void 0 : B.applicationId] : (null == k ? void 0 : k.application_id) != null ? [null == k ? void 0 : k.application_id] : []),
        el = (0, O.s5)({
            userId: G.id,
            activity: k,
            channelId: $,
            application: en
        }),
        ea = (0, i.e7)([x.Z, _.Z, E.Z, T.Z, g.Z, C.Z, f.Z], () =>
            null != B
                ? el === O.Fw.CAN_JOIN
                : null != k
                  ? (0, y.Z)({
                        user: G,
                        activity: k,
                        application: en,
                        channelId: $,
                        currentUser: J,
                        isEmbedded: H,
                        ChannelStore: x.Z,
                        GuildStore: _.Z,
                        GuildMemberCountStore: E.Z,
                        RelationshipStore: T.Z,
                        SelectedChannelStore: g.Z,
                        VoiceStateStore: C.Z,
                        PermissionStore: f.Z
                    })
                  : void 0
        ),
        ei = (0, i.e7)([S.ZP], () => Array.from(S.ZP.getSelfEmbeddedActivities().values()).some((e) => e.applicationId === (null == B ? void 0 : B.applicationId) && e.channelId === (null == B ? void 0 : B.channelId))),
        er = (0, c.O)(),
        es = !Z.isPlatformEmbedded;
    if (!((0, j.Z)(k, D.xjy.JOIN) || H) || null == X) return null;
    let eo = !K || (H && !ei),
        eu = eo && (es || Q) && !W && !ee && (!H || ea),
        ec = null;
    eo ? !es && !Q && null != k && (ec = U.Z.Messages.USER_ACTIVITY_NOT_DETECTED.format({ name: k.name })) : (ec = U.Z.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF);
    let ed = null !== (n = null == B ? void 0 : B.launchId) && void 0 !== n ? n : null == k ? void 0 : k.session_id,
        eh = async (e, t) => {
            var n, l;
            if (null == ed || null == X) return;
            let a = (0, j.Z)(t, D.xjy.EMBEDDED),
                i = g.Z.getVoiceChannelId(),
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
                    (0, w.Z)({
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
            if (H) {
                if (!ea || null == $ || null == X) return;
                e = await (0, M.Z)({
                    applicationId: X,
                    activityChannelId: $,
                    locationObject: er.location,
                    analyticsLocations: z
                });
            }
            if (!e) {
                let e;
                ea && (null == F || F(), eh(G, k)),
                    q(!0),
                    null != k &&
                        (e = await s.Z.sendActivityInviteUser({
                            type: D.mFx.JOIN_REQUEST,
                            userId: G.id,
                            activity: k,
                            location: D.Sbl.PROFILE_POPOUT
                        })),
                    null != e && u.default.selectPrivateChannel(e.id);
            }
        },
        ex = ea ? U.Z.Messages.JOIN : U.Z.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN;
    return (
        H && (ex = U.Z.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY),
        ei && (ex = U.Z.Messages.EMBEDDED_ACTIVITIES_JOINED),
        (0, l.jsx)(
            r.Tooltip,
            {
                text: ec,
                children: (e) => {
                    let { onMouseEnter: t, onMouseLeave: n } = e;
                    return (0, l.jsx)(V, {
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
