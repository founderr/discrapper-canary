n.d(e, {
    Z: function () {
        return _;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    o = n(481060),
    a = n(278323),
    s = n(224706),
    u = n(287734),
    c = n(2052),
    d = n(906732),
    h = n(835473),
    f = n(592745),
    v = n(592125),
    p = n(757266),
    x = n(650774),
    g = n(430824),
    m = n(283595),
    w = n(496675),
    y = n(699516),
    P = n(944486),
    Z = n(594174),
    I = n(979651),
    C = n(181106),
    S = n(417363),
    b = n(358085),
    R = n(804739),
    E = n(317381),
    T = n(638880),
    F = n(255621),
    j = n(452634),
    A = n(527805),
    L = n(620662),
    O = n(275920),
    D = n(915863),
    M = n(701488),
    U = n(981631),
    N = n(388032);
function _(t) {
    var e, n;
    let { activity: _, embeddedActivity: k, user: B, onAction: G, isEmbedded: z = !1, ButtonComponent: J = D.Z, ...H } = t,
        { analyticsLocations: W } = (0, d.ZP)(),
        [V, Q] = l.useState(!1),
        X = (0, r.e7)([Z.default], () => Z.default.getCurrentUser()),
        q = B.id === (null == X ? void 0 : X.id),
        Y = null !== (e = null == k ? void 0 : k.applicationId) && void 0 !== e ? e : null == _ ? void 0 : _.application_id,
        K = (0, j.Z)({
            channelId: null == k ? void 0 : k.channelId,
            userId: B.id,
            activity: _
        }),
        $ = (0, r.e7)(
            [m.Z, f.Z, S.Z, p.Z],
            () =>
                z ||
                (null != Y &&
                    (0, R.t)({
                        LibraryApplicationStore: m.Z,
                        LaunchableGameStore: f.Z,
                        DispatchApplicationStore: S.Z,
                        ConnectedAppsStore: p.Z,
                        applicationId: Y
                    }))
        ),
        tt = (0, r.e7)([E.ZP], () =>
            Array.from(E.ZP.getSelfEmbeddedActivities().values()).some((t) => {
                let { applicationId: e, channelId: n } = t;
                return (e === (null == _ ? void 0 : _.application_id) || e === (null == k ? void 0 : k.applicationId)) && n === K;
            })
        ),
        te = (0, r.e7)([C.Z], () => null != _ && null != _.application_id && C.Z.getState(_.application_id, U.mFx.JOIN) === U.OcF.LOADING),
        [tn] = (0, h.Z)((null == k ? void 0 : k.applicationId) != null ? [null == k ? void 0 : k.applicationId] : (null == _ ? void 0 : _.application_id) != null ? [null == _ ? void 0 : _.application_id] : []),
        ti = (0, A.s5)({
            userId: B.id,
            activity: _,
            channelId: K,
            application: tn
        }),
        tl = (0, r.e7)([v.Z, g.Z, x.Z, y.Z, P.Z, I.Z, w.Z], () =>
            null != k
                ? ti === A.Fw.CAN_JOIN
                : null != _
                  ? (0, F.Z)({
                        user: B,
                        activity: _,
                        application: tn,
                        channelId: K,
                        currentUser: X,
                        isEmbedded: z,
                        ChannelStore: v.Z,
                        GuildStore: g.Z,
                        GuildMemberCountStore: x.Z,
                        RelationshipStore: y.Z,
                        SelectedChannelStore: P.Z,
                        VoiceStateStore: I.Z,
                        PermissionStore: w.Z
                    })
                  : void 0
        ),
        tr = (0, r.e7)([E.ZP], () => Array.from(E.ZP.getSelfEmbeddedActivities().values()).some((t) => t.applicationId === (null == k ? void 0 : k.applicationId) && t.channelId === (null == k ? void 0 : k.channelId))),
        to = (0, c.O)(),
        ta = !b.isPlatformEmbedded;
    if (!((0, L.Z)(_, U.xjy.JOIN) || z) || null == Y) return null;
    let ts = !q || (z && !tr),
        tu = ts && (ta || $) && !V && !tt && (!z || tl),
        tc = null;
    ts ? !ta && !$ && null != _ && (tc = N.intl.formatToPlainString(N.t.SqJBnJ, { name: _.name })) : (tc = N.intl.string(N.t['0OiwfH']));
    let td = null !== (n = null == k ? void 0 : k.launchId) && void 0 !== n ? n : null == _ ? void 0 : _.session_id,
        th = async (t, e) => {
            var n, i;
            if (null == td || null == Y) return;
            let l = (0, L.Z)(e, U.xjy.EMBEDDED),
                r = P.Z.getVoiceChannelId(),
                o = v.Z.getChannel(r);
            await s.Z.join({
                userId: t.id,
                sessionId: td,
                applicationId: Y,
                channelId: r,
                messageId: null,
                intent: M.Ws.PLAY,
                embedded: l,
                partyId: null != e ? (null == e ? void 0 : null === (n = e.party) || void 0 === n ? void 0 : n.id) : '',
                locationObject: to.location,
                analyticsLocations: W
            }),
                !l &&
                    (0, O.Z)({
                        type: U.q5t.JOIN,
                        userId: t.id,
                        guildId: null == o ? void 0 : o.guild_id,
                        channelId: r,
                        channelType: null == o ? void 0 : o.type,
                        applicationId: Y,
                        partyId: null != e ? (null == e ? void 0 : null === (i = e.party) || void 0 === i ? void 0 : i.id) : '',
                        locationObject: to.location,
                        analyticsLocations: W
                    });
        },
        tf = async () => {
            let t = !1;
            if (z) {
                if (!tl || null == K || null == Y) return;
                t = await (0, T.Z)({
                    applicationId: Y,
                    activityChannelId: K,
                    locationObject: to.location,
                    analyticsLocations: W
                });
            }
            if (!t) {
                let t;
                tl && (null == G || G(), th(B, _)),
                    Q(!0),
                    null != _ &&
                        (t = await a.Z.sendActivityInviteUser({
                            type: U.mFx.JOIN_REQUEST,
                            userId: B.id,
                            activity: _,
                            location: U.Sbl.PROFILE_POPOUT
                        })),
                    null != t && u.default.selectPrivateChannel(t.id);
            }
        },
        tv = tl ? N.intl.string(N.t.VJlc0d) : N.intl.string(N.t.OKsSCQ);
    return (
        z && (tv = N.intl.string(N.t['4i2vj4'])),
        tr && (tv = N.intl.string(N.t.DPfdsr)),
        (0, i.jsx)(
            o.Tooltip,
            {
                text: tc,
                children: (t) => {
                    let { onMouseEnter: e, onMouseLeave: n } = t;
                    return (0, i.jsx)(J, {
                        onClick: tf,
                        onMouseEnter: e,
                        onMouseLeave: n,
                        disabled: !tu,
                        submitting: te,
                        fullWidth: !0,
                        ...H,
                        children: tv
                    });
                }
            },
            'join'
        )
    );
}
