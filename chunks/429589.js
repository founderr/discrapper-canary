n.d(t, {
    Z: function () {
        return V;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(442837),
    s = n(481060),
    o = n(278323),
    l = n(224706),
    u = n(287734),
    c = n(2052),
    d = n(906732),
    _ = n(895924),
    E = n(835473),
    f = n(592745),
    h = n(592125),
    p = n(757266),
    I = n(650774),
    m = n(430824),
    T = n(283595),
    g = n(496675),
    S = n(699516),
    A = n(944486),
    N = n(594174),
    O = n(979651),
    v = n(181106),
    R = n(417363),
    C = n(358085),
    y = n(804739),
    D = n(566620),
    L = n(317381),
    b = n(638880),
    M = n(255621),
    P = n(452634),
    U = n(527805),
    w = n(620662),
    x = n(275920),
    G = n(915863),
    k = n(701488),
    B = n(981631),
    F = n(689938);
function V(e) {
    var t, n;
    let { activity: V, embeddedActivity: H, user: Z, onAction: Y, isEmbedded: j = !1, ButtonComponent: W = G.Z, ...K } = e,
        { analyticsLocations: z } = (0, d.ZP)(),
        [q, Q] = i.useState(!1),
        X = (0, a.e7)([N.default], () => N.default.getCurrentUser()),
        $ = Z.id === (null == X ? void 0 : X.id),
        J = null !== (t = null == H ? void 0 : H.applicationId) && void 0 !== t ? t : null == V ? void 0 : V.application_id,
        ee = (0, P.Z)({
            channelId: null == H ? void 0 : H.channelId,
            userId: Z.id,
            activity: V
        }),
        et = (0, a.e7)(
            [T.Z, f.Z, R.Z, p.Z],
            () =>
                j ||
                (null != J &&
                    (0, y.t)({
                        LibraryApplicationStore: T.Z,
                        LaunchableGameStore: f.Z,
                        DispatchApplicationStore: R.Z,
                        ConnectedAppsStore: p.Z,
                        applicationId: J
                    }))
        ),
        en = (0, a.e7)([L.ZP], () =>
            Array.from(L.ZP.getSelfEmbeddedActivities().values()).some((e) => {
                let { applicationId: t, channelId: n } = e;
                return (t === (null == V ? void 0 : V.application_id) || t === (null == H ? void 0 : H.applicationId)) && n === ee;
            })
        ),
        er = (0, a.e7)([v.Z], () => null != V && null != V.application_id && v.Z.getState(V.application_id, B.mFx.JOIN) === B.OcF.LOADING),
        [ei] = (0, E.Z)((null == H ? void 0 : H.applicationId) != null ? [null == H ? void 0 : H.applicationId] : (null == V ? void 0 : V.application_id) != null ? [null == V ? void 0 : V.application_id] : []),
        ea = (0, U.s5)({
            userId: Z.id,
            activity: V,
            channelId: ee,
            application: ei
        }),
        es = (0, a.e7)([h.Z, m.Z, I.Z, S.Z, A.Z, O.Z, g.Z], () =>
            null != H
                ? ea === U.Fw.CAN_JOIN
                : null != V
                  ? (0, M.Z)({
                        user: Z,
                        activity: V,
                        application: ei,
                        channelId: ee,
                        currentUser: X,
                        isEmbedded: j,
                        ChannelStore: h.Z,
                        GuildStore: m.Z,
                        GuildMemberCountStore: I.Z,
                        RelationshipStore: S.Z,
                        SelectedChannelStore: A.Z,
                        VoiceStateStore: O.Z,
                        PermissionStore: g.Z
                    })
                  : void 0
        ),
        eo = (0, a.e7)([L.ZP], () => Array.from(L.ZP.getSelfEmbeddedActivities().values()).some((e) => e.applicationId === (null == H ? void 0 : H.applicationId) && e.channelId === (null == H ? void 0 : H.channelId))),
        el = (0, c.O)(),
        eu = !C.isPlatformEmbedded;
    if (!((0, w.Z)(V, B.xjy.JOIN) || j) || null == J) return null;
    let ec = !$ || (j && !eo),
        ed = ec && (eu || et) && !q && !en && (!j || es),
        e_ = null;
    ec ? !eu && !et && null != V && (e_ = F.Z.Messages.USER_ACTIVITY_NOT_DETECTED.format({ name: V.name })) : (e_ = F.Z.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF);
    let eE = null !== (n = null == H ? void 0 : H.launchId) && void 0 !== n ? n : null == V ? void 0 : V.session_id,
        ef = async (e, t) => {
            var n;
            if (null != eE && null != J)
                await l.Z.join({
                    userId: e.id,
                    sessionId: eE,
                    applicationId: J,
                    channelId: A.Z.getVoiceChannelId(),
                    messageId: null,
                    intent: k.Ws.PLAY,
                    embedded: (0, w.Z)(t, B.xjy.EMBEDDED)
                }),
                    (0, x.Z)({
                        type: B.q5t.JOIN,
                        userId: e.id,
                        applicationId: J,
                        partyId: null != t ? (null == t ? void 0 : null === (n = t.party) || void 0 === n ? void 0 : n.id) : '',
                        locationObject: el.location,
                        analyticsLocations: z
                    });
        },
        eh = async () => {
            let e = !1;
            if (j) {
                if (!es || null == ee || null == J) return;
                e = await (0, b.Z)({
                    applicationId: J,
                    activityChannelId: ee,
                    locationObject: el.location,
                    analyticsLocations: z,
                    commandOrigin: _.bB.VOICE_UI
                });
            }
            if (!e) {
                let e;
                es && (null == Y || Y(), ef(Z, V)),
                    Q(!0),
                    null != ee && null != J
                        ? (e = await D.pu({
                              channelId: ee,
                              applicationId: J,
                              userId: Z.id,
                              location: B.Sbl.PROFILE_POPOUT
                          }))
                        : null != V &&
                          (e = await o.Z.sendActivityInviteUser({
                              type: B.mFx.JOIN_REQUEST,
                              userId: Z.id,
                              activity: V,
                              location: B.Sbl.PROFILE_POPOUT
                          })),
                    null != e && u.default.selectPrivateChannel(e.id);
            }
        },
        ep = es ? F.Z.Messages.JOIN : F.Z.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN;
    return (
        j && (ep = F.Z.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY),
        eo && (ep = F.Z.Messages.EMBEDDED_ACTIVITIES_JOINED),
        (0, r.jsx)(
            s.Tooltip,
            {
                text: e_,
                children: (e) => {
                    let { onMouseEnter: t, onMouseLeave: n } = e;
                    return (0, r.jsx)(W, {
                        onClick: eh,
                        onMouseEnter: t,
                        onMouseLeave: n,
                        disabled: !ed,
                        submitting: er,
                        fullWidth: !0,
                        ...K,
                        children: ep
                    });
                }
            },
            'join'
        )
    );
}
