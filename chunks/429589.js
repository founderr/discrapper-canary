n.d(t, {
    Z: function () {
        return U;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(481060),
    o = n(278323),
    s = n(224706),
    u = n(287734),
    c = n(2052),
    d = n(906732),
    h = n(835473),
    m = n(592745),
    x = n(592125),
    v = n(757266),
    f = n(650774),
    p = n(430824),
    g = n(283595),
    C = n(496675),
    I = n(699516),
    P = n(944486),
    Z = n(594174),
    y = n(979651),
    j = n(181106),
    w = n(417363),
    T = n(358085),
    L = n(804739),
    S = n(317381),
    N = n(638880),
    E = n(255621),
    _ = n(452634),
    A = n(527805),
    R = n(620662),
    b = n(275920),
    M = n(915863),
    O = n(701488),
    k = n(981631),
    H = n(388032);
function U(e) {
    var t, n;
    let { activity: U, embeddedActivity: D, user: B, onAction: V, isEmbedded: F = !1, ButtonComponent: G = M.Z, ...z } = e,
        { analyticsLocations: W } = (0, d.ZP)(),
        [q, Y] = l.useState(!1),
        J = (0, a.e7)([Z.default], () => Z.default.getCurrentUser()),
        X = B.id === (null == J ? void 0 : J.id),
        K = null !== (t = null == D ? void 0 : D.applicationId) && void 0 !== t ? t : null == U ? void 0 : U.application_id,
        Q = (0, _.Z)({
            channelId: null == D ? void 0 : D.channelId,
            userId: B.id,
            activity: U
        }),
        $ = (0, a.e7)(
            [g.Z, m.Z, w.Z, v.Z],
            () =>
                F ||
                (null != K &&
                    (0, L.t)({
                        LibraryApplicationStore: g.Z,
                        LaunchableGameStore: m.Z,
                        DispatchApplicationStore: w.Z,
                        ConnectedAppsStore: v.Z,
                        applicationId: K
                    }))
        ),
        ee = (0, a.e7)([S.ZP], () =>
            Array.from(S.ZP.getSelfEmbeddedActivities().values()).some((e) => {
                let { applicationId: t, channelId: n } = e;
                return (t === (null == U ? void 0 : U.application_id) || t === (null == D ? void 0 : D.applicationId)) && n === Q;
            })
        ),
        et = (0, a.e7)([j.Z], () => null != U && null != U.application_id && j.Z.getState(U.application_id, k.mFx.JOIN) === k.OcF.LOADING),
        [en] = (0, h.Z)((null == D ? void 0 : D.applicationId) != null ? [null == D ? void 0 : D.applicationId] : (null == U ? void 0 : U.application_id) != null ? [null == U ? void 0 : U.application_id] : []),
        ei = (0, A.s5)({
            userId: B.id,
            activity: U,
            channelId: Q,
            application: en
        }),
        el = (0, a.e7)([x.Z, p.Z, f.Z, I.Z, P.Z, y.Z, C.Z], () =>
            null != D
                ? ei === A.Fw.CAN_JOIN
                : null != U
                  ? (0, E.Z)({
                        user: B,
                        activity: U,
                        application: en,
                        channelId: Q,
                        currentUser: J,
                        isEmbedded: F,
                        ChannelStore: x.Z,
                        GuildStore: p.Z,
                        GuildMemberCountStore: f.Z,
                        RelationshipStore: I.Z,
                        SelectedChannelStore: P.Z,
                        VoiceStateStore: y.Z,
                        PermissionStore: C.Z
                    })
                  : void 0
        ),
        ea = (0, a.e7)([S.ZP], () => Array.from(S.ZP.getSelfEmbeddedActivities().values()).some((e) => e.applicationId === (null == D ? void 0 : D.applicationId) && e.channelId === (null == D ? void 0 : D.channelId))),
        er = (0, c.O)(),
        eo = !T.isPlatformEmbedded;
    if (!((0, R.Z)(U, k.xjy.JOIN) || F) || null == K) return null;
    let es = !X || (F && !ea),
        eu = es && (eo || $) && !q && !ee && (!F || el),
        ec = null;
    es ? !eo && !$ && null != U && (ec = H.intl.formatToPlainString(H.t.SqJBnJ, { name: U.name })) : (ec = H.intl.string(H.t['0OiwfH']));
    let ed = null !== (n = null == D ? void 0 : D.launchId) && void 0 !== n ? n : null == U ? void 0 : U.session_id,
        eh = async (e, t) => {
            var n, i;
            if (null == ed || null == K) return;
            let l = (0, R.Z)(t, k.xjy.EMBEDDED),
                a = P.Z.getVoiceChannelId(),
                r = x.Z.getChannel(a);
            await s.Z.join({
                userId: e.id,
                sessionId: ed,
                applicationId: K,
                channelId: a,
                messageId: null,
                intent: O.Ws.PLAY,
                embedded: l,
                partyId: null != t ? (null == t ? void 0 : null === (n = t.party) || void 0 === n ? void 0 : n.id) : '',
                locationObject: er.location,
                analyticsLocations: W
            }),
                !l &&
                    (0, b.Z)({
                        type: k.q5t.JOIN,
                        userId: e.id,
                        guildId: null == r ? void 0 : r.guild_id,
                        channelId: a,
                        channelType: null == r ? void 0 : r.type,
                        applicationId: K,
                        partyId: null != t ? (null == t ? void 0 : null === (i = t.party) || void 0 === i ? void 0 : i.id) : '',
                        locationObject: er.location,
                        analyticsLocations: W
                    });
        },
        em = async () => {
            let e = !1;
            if (F) {
                if (!el || null == Q || null == K) return;
                e = await (0, N.Z)({
                    applicationId: K,
                    activityChannelId: Q,
                    locationObject: er.location,
                    analyticsLocations: W
                });
            }
            if (!e) {
                let e;
                el && (null == V || V(), eh(B, U)),
                    Y(!0),
                    null != U &&
                        (e = await o.Z.sendActivityInviteUser({
                            type: k.mFx.JOIN_REQUEST,
                            userId: B.id,
                            activity: U,
                            location: k.Sbl.PROFILE_POPOUT
                        })),
                    null != e && u.default.selectPrivateChannel(e.id);
            }
        },
        ex = el ? H.intl.string(H.t.VJlc0d) : H.intl.string(H.t.OKsSCQ);
    return (
        F && (ex = H.intl.string(H.t['4i2vj4'])),
        ea && (ex = H.intl.string(H.t.DPfdsr)),
        (0, i.jsx)(
            r.Tooltip,
            {
                text: ec,
                children: (e) => {
                    let { onMouseEnter: t, onMouseLeave: n } = e;
                    return (0, i.jsx)(G, {
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
