n.d(t, {
    Z: function () {
        return U;
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
    h = n(835473),
    m = n(592745),
    x = n(592125),
    v = n(757266),
    E = n(650774),
    _ = n(430824),
    f = n(283595),
    p = n(496675),
    T = n(699516),
    g = n(944486),
    I = n(594174),
    C = n(979651),
    N = n(181106),
    P = n(417363),
    Z = n(358085),
    S = n(804739),
    A = n(317381),
    R = n(638880),
    M = n(255621),
    y = n(452634),
    O = n(527805),
    j = n(620662),
    w = n(275920),
    L = n(915863),
    b = n(701488),
    k = n(981631),
    D = n(689938);
function U(e) {
    var t, n;
    let { activity: U, embeddedActivity: B, user: G, onAction: F, isEmbedded: H = !1, ButtonComponent: V = L.Z, ...Y } = e,
        { analyticsLocations: z } = (0, d.ZP)(),
        [W, q] = l.useState(!1),
        J = (0, i.e7)([I.default], () => I.default.getCurrentUser()),
        K = G.id === (null == J ? void 0 : J.id),
        X = null !== (t = null == B ? void 0 : B.applicationId) && void 0 !== t ? t : null == U ? void 0 : U.application_id,
        $ = (0, y.Z)({
            channelId: null == B ? void 0 : B.channelId,
            userId: G.id,
            activity: U
        }),
        Q = (0, i.e7)(
            [f.Z, m.Z, P.Z, v.Z],
            () =>
                H ||
                (null != X &&
                    (0, S.t)({
                        LibraryApplicationStore: f.Z,
                        LaunchableGameStore: m.Z,
                        DispatchApplicationStore: P.Z,
                        ConnectedAppsStore: v.Z,
                        applicationId: X
                    }))
        ),
        ee = (0, i.e7)([A.ZP], () =>
            Array.from(A.ZP.getSelfEmbeddedActivities().values()).some((e) => {
                let { applicationId: t, channelId: n } = e;
                return (t === (null == U ? void 0 : U.application_id) || t === (null == B ? void 0 : B.applicationId)) && n === $;
            })
        ),
        et = (0, i.e7)([N.Z], () => null != U && null != U.application_id && N.Z.getState(U.application_id, k.mFx.JOIN) === k.OcF.LOADING),
        [en] = (0, h.Z)((null == B ? void 0 : B.applicationId) != null ? [null == B ? void 0 : B.applicationId] : (null == U ? void 0 : U.application_id) != null ? [null == U ? void 0 : U.application_id] : []),
        ea = (0, O.s5)({
            userId: G.id,
            activity: U,
            channelId: $,
            application: en
        }),
        el = (0, i.e7)([x.Z, _.Z, E.Z, T.Z, g.Z, C.Z, p.Z], () =>
            null != B
                ? ea === O.Fw.CAN_JOIN
                : null != U
                  ? (0, M.Z)({
                        user: G,
                        activity: U,
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
                        PermissionStore: p.Z
                    })
                  : void 0
        ),
        ei = (0, i.e7)([A.ZP], () => Array.from(A.ZP.getSelfEmbeddedActivities().values()).some((e) => e.applicationId === (null == B ? void 0 : B.applicationId) && e.channelId === (null == B ? void 0 : B.channelId))),
        er = (0, c.O)(),
        es = !Z.isPlatformEmbedded;
    if (!((0, j.Z)(U, k.xjy.JOIN) || H) || null == X) return null;
    let eo = !K || (H && !ei),
        eu = eo && (es || Q) && !W && !ee && (!H || el),
        ec = null;
    eo ? !es && !Q && null != U && (ec = D.Z.Messages.USER_ACTIVITY_NOT_DETECTED.format({ name: U.name })) : (ec = D.Z.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF);
    let ed = null !== (n = null == B ? void 0 : B.launchId) && void 0 !== n ? n : null == U ? void 0 : U.session_id,
        eh = async (e, t) => {
            var n, a;
            if (null == ed || null == X) return;
            let l = (0, j.Z)(t, k.xjy.EMBEDDED),
                i = g.Z.getVoiceChannelId(),
                r = x.Z.getChannel(i);
            await o.Z.join({
                userId: e.id,
                sessionId: ed,
                applicationId: X,
                channelId: i,
                messageId: null,
                intent: b.Ws.PLAY,
                embedded: l,
                partyId: null != t ? (null == t ? void 0 : null === (n = t.party) || void 0 === n ? void 0 : n.id) : '',
                locationObject: er.location,
                analyticsLocations: z
            }),
                !l &&
                    (0, w.Z)({
                        type: k.q5t.JOIN,
                        userId: e.id,
                        guildId: null == r ? void 0 : r.guild_id,
                        channelId: i,
                        channelType: null == r ? void 0 : r.type,
                        applicationId: X,
                        partyId: null != t ? (null == t ? void 0 : null === (a = t.party) || void 0 === a ? void 0 : a.id) : '',
                        locationObject: er.location,
                        analyticsLocations: z
                    });
        },
        em = async () => {
            let e = !1;
            if (H) {
                if (!el || null == $ || null == X) return;
                e = await (0, R.Z)({
                    applicationId: X,
                    activityChannelId: $,
                    locationObject: er.location,
                    analyticsLocations: z
                });
            }
            if (!e) {
                let e;
                el && (null == F || F(), eh(G, U)),
                    q(!0),
                    null != U &&
                        (e = await s.Z.sendActivityInviteUser({
                            type: k.mFx.JOIN_REQUEST,
                            userId: G.id,
                            activity: U,
                            location: k.Sbl.PROFILE_POPOUT
                        })),
                    null != e && u.default.selectPrivateChannel(e.id);
            }
        },
        ex = el ? D.Z.Messages.JOIN : D.Z.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN;
    return (
        H && (ex = D.Z.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY),
        ei && (ex = D.Z.Messages.EMBEDDED_ACTIVITIES_JOINED),
        (0, a.jsx)(
            r.Tooltip,
            {
                text: ec,
                children: (e) => {
                    let { onMouseEnter: t, onMouseLeave: n } = e;
                    return (0, a.jsx)(V, {
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
