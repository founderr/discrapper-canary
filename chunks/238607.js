n.d(t, {
    Z: function () {
        return G;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(278323),
    l = n(224706),
    u = n(287734),
    c = n(566620),
    d = n(317381),
    f = n(638880),
    _ = n(255621),
    p = n(452634),
    h = n(620662),
    m = n(841784),
    g = n(275920),
    E = n(906732),
    v = n(835473),
    b = n(592745),
    I = n(592125),
    T = n(757266),
    S = n(650774),
    y = n(430824),
    A = n(283595),
    N = n(496675),
    C = n(699516),
    R = n(944486),
    O = n(979651),
    D = n(181106),
    L = n(417363),
    x = n(358085),
    w = n(804739),
    M = n(475413),
    P = n(981631),
    k = n(701488),
    U = n(388032);
function G(e) {
    let { user: t, currentUser: n, activity: G, onAction: B, onClose: Z } = e,
        { analyticsLocations: F, newestAnalyticsLocation: V } = (0, E.ZP)(),
        [j] = (0, v.Z)([null == G ? void 0 : G.application_id]),
        H = (0, m.Z)(G),
        Y = null == G ? void 0 : G.application_id,
        W = null == G ? void 0 : G.session_id,
        K = (0, p.Z)({
            activity: G,
            userId: t.id,
            channelId: void 0
        }),
        z =
            (0, a.e7)(
                [A.Z, b.Z, L.Z, T.Z],
                () =>
                    null != Y &&
                    (0, w.t)({
                        applicationId: Y,
                        LibraryApplicationStore: A.Z,
                        LaunchableGameStore: b.Z,
                        DispatchApplicationStore: L.Z,
                        ConnectedAppsStore: T.Z
                    })
            ) || H,
        q = (0, a.e7)([d.ZP], () =>
            [...d.ZP.getSelfEmbeddedActivities().values()].some((e) => {
                let { applicationId: t, channelId: n } = e;
                return t === Y && n === K;
            })
        ),
        Q = (0, a.e7)([D.Z], () => null != Y && D.Z.getState(Y, P.mFx.JOIN) === P.OcF.LOADING),
        X = (0, a.e7)([I.Z, y.Z, S.Z, C.Z, R.Z, O.Z, N.Z], () =>
            (0, _.Z)({
                user: t,
                activity: G,
                application: j,
                channelId: K,
                currentUser: n,
                isEmbedded: H,
                ChannelStore: I.Z,
                GuildStore: y.Z,
                GuildMemberCountStore: S.Z,
                RelationshipStore: C.Z,
                SelectedChannelStore: R.Z,
                VoiceStateStore: O.Z,
                PermissionStore: N.Z
            })
        ),
        [J, $] = i.useState(!1),
        ee = J || q || (x.isPlatformEmbedded && !z);
    if (null == Y || !X || (!(0, h.Z)(G, P.xjy.JOIN) && !H)) return null;
    let et = async () => {
            if (
                H &&
                X &&
                null != K &&
                null != Y &&
                (await (0, f.Z)({
                    applicationId: Y,
                    activityChannelId: K,
                    locationObject: { page: P.ZY5.USER_PROFILE },
                    analyticsLocations: F
                }))
            ) {
                null == Z || Z();
                return;
            }
            if (X && null != Y && null != W) {
                var e, n;
                let r = R.Z.getVoiceChannelId(),
                    i = I.Z.getChannel(r);
                await l.Z.join({
                    userId: t.id,
                    sessionId: W,
                    applicationId: Y,
                    channelId: r,
                    messageId: null,
                    intent: k.Ws.PLAY,
                    embedded: H,
                    partyId: null == G ? void 0 : null === (e = G.party) || void 0 === e ? void 0 : e.id,
                    locationObject: { page: P.ZY5.USER_PROFILE },
                    analyticsLocations: F
                }),
                    !H &&
                        (0, g.Z)({
                            type: P.q5t.JOIN,
                            userId: t.id,
                            guildId: null == i ? void 0 : i.guild_id,
                            channelId: r,
                            channelType: null == i ? void 0 : i.type,
                            partyId: null == G ? void 0 : null === (n = G.party) || void 0 === n ? void 0 : n.id,
                            applicationId: Y,
                            analyticsLocations: F
                        });
            }
            if (($(!0), null != K && null != Y))
                return c.pu({
                    channelId: K,
                    applicationId: Y,
                    userId: t.id,
                    location: V
                });
            if (null != G) {
                let e = await o.Z.sendActivityInviteUser({
                    type: P.mFx.JOIN_REQUEST,
                    userId: t.id,
                    activity: G,
                    location: P.Sbl.PROFILE_POPOUT
                });
                null != e && u.default.selectPrivateChannel(e.id);
            }
        },
        en = () => (t.id === n.id ? U.intl.string(U.t['0OiwfH']) : x.isPlatformEmbedded && !z && null != G ? U.intl.formatToPlainString(U.t.SqJBnJ, { name: G.name }) : null);
    return H
        ? (0, r.jsx)(s.Tooltip, {
              text: en(),
              children: (e) =>
                  (0, r.jsx)(M.tG, {
                      ...e,
                      icon: s.ActivitiesIcon,
                      text: U.intl.string(U.t['4i2vj4']),
                      disabled: ee,
                      submitting: Q,
                      fullWidth: !0,
                      onClick: () => {
                          null == B || B({ action: 'PRESS_JOIN_BUTTON' }), et();
                      }
                  })
          })
        : (0, r.jsx)(s.Tooltip, {
              text: en(),
              children: (e) =>
                  (0, r.jsx)(M.tG, {
                      ...e,
                      icon: s.GameControllerIcon,
                      text: X ? U.intl.string(U.t.VJlc0d) : U.intl.string(U.t.OKsSCQ),
                      disabled: ee,
                      submitting: Q,
                      fullWidth: !0,
                      onClick: () => {
                          null == B || B({ action: 'PRESS_ASK_TO_JOIN_BUTTON' }), et();
                      }
                  })
          });
}
