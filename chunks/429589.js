n.d(e, {
    Z: function () {
        return k;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    o = n(442837),
    r = n(481060),
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
    C = n(979651),
    I = n(181106),
    S = n(417363),
    b = n(358085),
    R = n(804739),
    E = n(317381),
    T = n(638880),
    j = n(255621),
    A = n(16609),
    F = n(452634),
    O = n(527805),
    L = n(620662),
    D = n(275920),
    U = n(915863),
    N = n(701488),
    M = n(981631),
    _ = n(388032);
function k(t) {
    var e, n;
    let { activity: k, embeddedActivity: B, user: G, onAction: z, isEmbedded: J = !1, ButtonComponent: H = U.Z, ...W } = t,
        { analyticsLocations: Q } = (0, d.ZP)(),
        [V, X] = l.useState(!1),
        q = (0, o.e7)([Z.default], () => Z.default.getCurrentUser()),
        Y = G.id === (null == q ? void 0 : q.id),
        K = null !== (e = null == B ? void 0 : B.applicationId) && void 0 !== e ? e : null == k ? void 0 : k.application_id,
        $ = (0, F.Z)({
            channelId: (0, A.p)(null == B ? void 0 : B.location),
            userId: G.id,
            activity: k
        }),
        tt = (0, o.e7)(
            [m.Z, f.Z, S.Z, p.Z],
            () =>
                J ||
                (null != K &&
                    (0, R.t)({
                        LibraryApplicationStore: m.Z,
                        LaunchableGameStore: f.Z,
                        DispatchApplicationStore: S.Z,
                        ConnectedAppsStore: p.Z,
                        applicationId: K
                    }))
        ),
        te = (0, o.e7)([E.ZP], () =>
            Array.from(E.ZP.getSelfEmbeddedActivities().values()).some((t) => {
                let { applicationId: e, location: n } = t;
                return (e === (null == k ? void 0 : k.application_id) || e === (null == B ? void 0 : B.applicationId)) && (0, A.p)(n) === $;
            })
        ),
        tn = (0, o.e7)([I.Z], () => null != k && null != k.application_id && I.Z.getState(k.application_id, M.mFx.JOIN) === M.OcF.LOADING),
        [ti] = (0, h.Z)((null == B ? void 0 : B.applicationId) != null ? [null == B ? void 0 : B.applicationId] : (null == k ? void 0 : k.application_id) != null ? [null == k ? void 0 : k.application_id] : []),
        tl = (0, O.s5)({
            userId: G.id,
            activity: k,
            channelId: $,
            application: ti
        }),
        to = (0, o.e7)([v.Z, g.Z, x.Z, y.Z, P.Z, C.Z, w.Z], () =>
            null != B
                ? tl === O.Fw.CAN_JOIN
                : null != k
                  ? (0, j.Z)({
                        user: G,
                        activity: k,
                        application: ti,
                        channelId: $,
                        currentUser: q,
                        isEmbedded: J,
                        ChannelStore: v.Z,
                        GuildStore: g.Z,
                        GuildMemberCountStore: x.Z,
                        RelationshipStore: y.Z,
                        SelectedChannelStore: P.Z,
                        VoiceStateStore: C.Z,
                        PermissionStore: w.Z
                    })
                  : void 0
        ),
        tr = (0, o.e7)([E.ZP], () => Array.from(E.ZP.getSelfEmbeddedActivities().values()).some((t) => t.applicationId === (null == B ? void 0 : B.applicationId) && t.location.id === (null == B ? void 0 : B.location.id))),
        ta = (0, c.O)(),
        ts = !b.isPlatformEmbedded;
    if (!((0, L.Z)(k, M.xjy.JOIN) || J) || null == K) return null;
    let tu = !Y || (J && !tr),
        tc = tu && (ts || tt) && !V && !te && (!J || to),
        td = null;
    tu ? !ts && !tt && null != k && (td = _.intl.formatToPlainString(_.t.SqJBnJ, { name: k.name })) : (td = _.intl.string(_.t['0OiwfH']));
    let th = null !== (n = null == B ? void 0 : B.launchId) && void 0 !== n ? n : null == k ? void 0 : k.session_id,
        tf = async (t, e) => {
            var n, i;
            if (null == th || null == K) return;
            let l = (0, L.Z)(e, M.xjy.EMBEDDED),
                o = P.Z.getVoiceChannelId(),
                r = v.Z.getChannel(o);
            await s.Z.join({
                userId: t.id,
                sessionId: th,
                applicationId: K,
                channelId: o,
                messageId: null,
                intent: N.Ws.PLAY,
                embedded: l,
                partyId: null != e ? (null == e ? void 0 : null === (n = e.party) || void 0 === n ? void 0 : n.id) : '',
                locationObject: ta.location,
                analyticsLocations: Q
            }),
                !l &&
                    (0, D.Z)({
                        type: M.q5t.JOIN,
                        userId: t.id,
                        guildId: null == r ? void 0 : r.guild_id,
                        channelId: o,
                        channelType: null == r ? void 0 : r.type,
                        applicationId: K,
                        partyId: null != e ? (null == e ? void 0 : null === (i = e.party) || void 0 === i ? void 0 : i.id) : '',
                        locationObject: ta.location,
                        analyticsLocations: Q
                    });
        },
        tv = async () => {
            let t = !1;
            if (J) {
                if (!to || null == $ || null == K) return;
                t = await (0, T.Z)({
                    applicationId: K,
                    activityChannelId: $,
                    locationObject: ta.location,
                    analyticsLocations: Q
                });
            }
            if (!t) {
                let t;
                if (to) {
                    null == z || z(), tf(G, k);
                    return;
                }
                X(!0),
                    null != k &&
                        (t = await a.Z.sendActivityInviteUser({
                            type: M.mFx.JOIN_REQUEST,
                            userId: G.id,
                            activity: k,
                            location: M.Sbl.PROFILE_POPOUT
                        })),
                    null != t && u.default.selectPrivateChannel(t.id);
            }
        },
        tp = to ? _.intl.string(_.t.VJlc0d) : _.intl.string(_.t.OKsSCQ);
    return (
        J && (tp = _.intl.string(_.t['4i2vj4'])),
        tr && (tp = _.intl.string(_.t.DPfdsr)),
        (0, i.jsx)(
            r.Tooltip,
            {
                text: td,
                children: (t) => {
                    let { onMouseEnter: e, onMouseLeave: n } = t;
                    return (0, i.jsx)(H, {
                        onClick: tv,
                        onMouseEnter: e,
                        onMouseLeave: n,
                        disabled: !tc,
                        submitting: tn,
                        fullWidth: !0,
                        ...W,
                        children: tp
                    });
                }
            },
            'join'
        )
    );
}
