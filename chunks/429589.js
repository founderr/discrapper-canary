n.d(t, {
    Z: function () {
        return B;
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
    E = n(757266),
    v = n(650774),
    _ = n(430824),
    f = n(283595),
    T = n(496675),
    p = n(699516),
    g = n(944486),
    I = n(594174),
    N = n(979651),
    C = n(181106),
    A = n(417363),
    Z = n(358085),
    P = n(804739),
    S = n(317381),
    M = n(638880),
    O = n(255621),
    R = n(452634),
    j = n(527805),
    y = n(620662),
    L = n(275920),
    w = n(915863),
    D = n(701488),
    b = n(981631),
    U = n(689938);
function B(e) {
    var t, n;
    let { activity: B, embeddedActivity: k, user: F, onAction: G, isEmbedded: H = !1, ButtonComponent: Y = w.Z, ...z } = e,
        { analyticsLocations: V } = (0, d.ZP)(),
        [W, q] = l.useState(!1),
        K = (0, i.e7)([I.default], () => I.default.getCurrentUser()),
        J = F.id === (null == K ? void 0 : K.id),
        X = null !== (t = null == k ? void 0 : k.applicationId) && void 0 !== t ? t : null == B ? void 0 : B.application_id,
        $ = (0, R.Z)({
            channelId: null == k ? void 0 : k.channelId,
            userId: F.id,
            activity: B
        }),
        Q = (0, i.e7)(
            [f.Z, m.Z, A.Z, E.Z],
            () =>
                H ||
                (null != X &&
                    (0, P.t)({
                        LibraryApplicationStore: f.Z,
                        LaunchableGameStore: m.Z,
                        DispatchApplicationStore: A.Z,
                        ConnectedAppsStore: E.Z,
                        applicationId: X
                    }))
        ),
        ee = (0, i.e7)([S.ZP], () =>
            Array.from(S.ZP.getSelfEmbeddedActivities().values()).some((e) => {
                let { applicationId: t, channelId: n } = e;
                return (t === (null == B ? void 0 : B.application_id) || t === (null == k ? void 0 : k.applicationId)) && n === $;
            })
        ),
        et = (0, i.e7)([C.Z], () => null != B && null != B.application_id && C.Z.getState(B.application_id, b.mFx.JOIN) === b.OcF.LOADING),
        [en] = (0, h.Z)((null == k ? void 0 : k.applicationId) != null ? [null == k ? void 0 : k.applicationId] : (null == B ? void 0 : B.application_id) != null ? [null == B ? void 0 : B.application_id] : []),
        ea = (0, j.s5)({
            userId: F.id,
            activity: B,
            channelId: $,
            application: en
        }),
        el = (0, i.e7)([x.Z, _.Z, v.Z, p.Z, g.Z, N.Z, T.Z], () =>
            null != k
                ? ea === j.Fw.CAN_JOIN
                : null != B
                  ? (0, O.Z)({
                        user: F,
                        activity: B,
                        application: en,
                        channelId: $,
                        currentUser: K,
                        isEmbedded: H,
                        ChannelStore: x.Z,
                        GuildStore: _.Z,
                        GuildMemberCountStore: v.Z,
                        RelationshipStore: p.Z,
                        SelectedChannelStore: g.Z,
                        VoiceStateStore: N.Z,
                        PermissionStore: T.Z
                    })
                  : void 0
        ),
        ei = (0, i.e7)([S.ZP], () => Array.from(S.ZP.getSelfEmbeddedActivities().values()).some((e) => e.applicationId === (null == k ? void 0 : k.applicationId) && e.channelId === (null == k ? void 0 : k.channelId))),
        er = (0, c.O)(),
        es = !Z.isPlatformEmbedded;
    if (!((0, y.Z)(B, b.xjy.JOIN) || H) || null == X) return null;
    let eo = !J || (H && !ei),
        eu = eo && (es || Q) && !W && !ee && (!H || el),
        ec = null;
    eo ? !es && !Q && null != B && (ec = U.Z.Messages.USER_ACTIVITY_NOT_DETECTED.format({ name: B.name })) : (ec = U.Z.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF);
    let ed = null !== (n = null == k ? void 0 : k.launchId) && void 0 !== n ? n : null == B ? void 0 : B.session_id,
        eh = async (e, t) => {
            var n, a;
            if (null == ed || null == X) return;
            let l = (0, y.Z)(t, b.xjy.EMBEDDED),
                i = g.Z.getVoiceChannelId(),
                r = x.Z.getChannel(i);
            await o.Z.join({
                userId: e.id,
                sessionId: ed,
                applicationId: X,
                channelId: i,
                messageId: null,
                intent: D.Ws.PLAY,
                embedded: l,
                partyId: null != t ? (null == t ? void 0 : null === (n = t.party) || void 0 === n ? void 0 : n.id) : '',
                locationObject: er.location,
                analyticsLocations: V
            }),
                !l &&
                    (0, L.Z)({
                        type: b.q5t.JOIN,
                        userId: e.id,
                        guildId: null == r ? void 0 : r.guild_id,
                        channelId: i,
                        channelType: null == r ? void 0 : r.type,
                        applicationId: X,
                        partyId: null != t ? (null == t ? void 0 : null === (a = t.party) || void 0 === a ? void 0 : a.id) : '',
                        locationObject: er.location,
                        analyticsLocations: V
                    });
        },
        em = async () => {
            let e = !1;
            if (H) {
                if (!el || null == $ || null == X) return;
                e = await (0, M.Z)({
                    applicationId: X,
                    activityChannelId: $,
                    locationObject: er.location,
                    analyticsLocations: V
                });
            }
            if (!e) {
                let e;
                el && (null == G || G(), eh(F, B)),
                    q(!0),
                    null != B &&
                        (e = await s.Z.sendActivityInviteUser({
                            type: b.mFx.JOIN_REQUEST,
                            userId: F.id,
                            activity: B,
                            location: b.Sbl.PROFILE_POPOUT
                        })),
                    null != e && u.default.selectPrivateChannel(e.id);
            }
        },
        ex = el ? U.Z.Messages.JOIN : U.Z.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN;
    return (
        H && (ex = U.Z.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY),
        ei && (ex = U.Z.Messages.EMBEDDED_ACTIVITIES_JOINED),
        (0, a.jsx)(
            r.Tooltip,
            {
                text: ec,
                children: (e) => {
                    let { onMouseEnter: t, onMouseLeave: n } = e;
                    return (0, a.jsx)(Y, {
                        onClick: em,
                        onMouseEnter: t,
                        onMouseLeave: n,
                        disabled: !eu,
                        submitting: et,
                        fullWidth: !0,
                        ...z,
                        children: ex
                    });
                }
            },
            'join'
        )
    );
}
