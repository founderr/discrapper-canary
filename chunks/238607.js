n.d(t, {
    Z: function () {
        return B;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(442837),
    s = n(481060),
    l = n(278323),
    u = n(224706),
    c = n(287734),
    d = n(566620),
    _ = n(317381),
    E = n(638880),
    f = n(255621),
    h = n(452634),
    p = n(620662),
    m = n(841784),
    I = n(275920),
    T = n(906732),
    g = n(835473),
    S = n(592745),
    A = n(592125),
    v = n(757266),
    N = n(650774),
    O = n(430824),
    R = n(283595),
    C = n(496675),
    y = n(699516),
    b = n(944486),
    L = n(979651),
    D = n(181106),
    M = n(417363),
    P = n(358085),
    U = n(804739),
    w = n(475413),
    x = n(981631),
    G = n(701488),
    k = n(689938);
function B(e) {
    let { user: t, currentUser: n, activity: r, onAction: B, onClose: F } = e,
        { analyticsLocations: Z, newestAnalyticsLocation: V } = (0, T.ZP)(),
        [H] = (0, g.Z)([null == r ? void 0 : r.application_id]),
        Y = (0, m.Z)(r),
        j = null == r ? void 0 : r.application_id,
        W = null == r ? void 0 : r.session_id,
        K = (0, h.Z)({
            activity: r,
            userId: t.id,
            channelId: void 0
        }),
        z =
            (0, o.e7)(
                [R.Z, S.Z, M.Z, v.Z],
                () =>
                    null != j &&
                    (0, U.t)({
                        applicationId: j,
                        LibraryApplicationStore: R.Z,
                        LaunchableGameStore: S.Z,
                        DispatchApplicationStore: M.Z,
                        ConnectedAppsStore: v.Z
                    })
            ) || Y,
        q = (0, o.e7)([_.ZP], () =>
            [..._.ZP.getSelfEmbeddedActivities().values()].some((e) => {
                let { applicationId: t, channelId: n } = e;
                return t === j && n === K;
            })
        ),
        Q = (0, o.e7)([D.Z], () => null != j && D.Z.getState(j, x.mFx.JOIN) === x.OcF.LOADING),
        X = (0, o.e7)([A.Z, O.Z, N.Z, y.Z, b.Z, L.Z, C.Z], () =>
            (0, f.Z)({
                user: t,
                activity: r,
                application: H,
                channelId: K,
                currentUser: n,
                isEmbedded: Y,
                ChannelStore: A.Z,
                GuildStore: O.Z,
                GuildMemberCountStore: N.Z,
                RelationshipStore: y.Z,
                SelectedChannelStore: b.Z,
                VoiceStateStore: L.Z,
                PermissionStore: C.Z
            })
        ),
        [$, J] = a.useState(!1),
        ee = $ || q || (P.isPlatformEmbedded && !z);
    if (null == j || !X || (!(0, p.Z)(r, x.xjy.JOIN) && !Y)) return null;
    let et = async () => {
            if (
                Y &&
                X &&
                null != K &&
                null != j &&
                (await (0, E.Z)({
                    applicationId: j,
                    activityChannelId: K,
                    locationObject: { page: x.ZY5.USER_PROFILE },
                    analyticsLocations: Z
                }))
            ) {
                null == F || F();
                return;
            }
            if (X && null != j && null != W) {
                var e, n;
                let i = b.Z.getVoiceChannelId(),
                    a = A.Z.getChannel(i);
                await u.Z.join({
                    userId: t.id,
                    sessionId: W,
                    applicationId: j,
                    channelId: i,
                    messageId: null,
                    intent: G.Ws.PLAY,
                    embedded: Y,
                    partyId: null == r ? void 0 : null === (e = r.party) || void 0 === e ? void 0 : e.id,
                    locationObject: { page: x.ZY5.USER_PROFILE },
                    analyticsLocations: Z
                }),
                    !Y &&
                        (0, I.Z)({
                            type: x.q5t.JOIN,
                            userId: t.id,
                            guildId: null == a ? void 0 : a.guild_id,
                            channelId: i,
                            channelType: null == a ? void 0 : a.type,
                            partyId: null == r ? void 0 : null === (n = r.party) || void 0 === n ? void 0 : n.id,
                            applicationId: j,
                            analyticsLocations: Z
                        });
            }
            if ((J(!0), null != K && null != j))
                return d.pu({
                    channelId: K,
                    applicationId: j,
                    userId: t.id,
                    location: V
                });
            if (null != r) {
                let e = await l.Z.sendActivityInviteUser({
                    type: x.mFx.JOIN_REQUEST,
                    userId: t.id,
                    activity: r,
                    location: x.Sbl.PROFILE_POPOUT
                });
                null != e && c.default.selectPrivateChannel(e.id);
            }
        },
        en = () => (t.id === n.id ? k.Z.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF : P.isPlatformEmbedded && !z && null != r ? k.Z.Messages.USER_ACTIVITY_NOT_DETECTED.format({ name: r.name }) : null);
    return Y
        ? (0, i.jsx)(s.Tooltip, {
              text: en(),
              children: (e) =>
                  (0, i.jsx)(w.tG, {
                      ...e,
                      icon: s.ActivitiesIcon,
                      text: k.Z.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY,
                      disabled: ee,
                      submitting: Q,
                      fullWidth: !0,
                      onClick: () => {
                          null == B || B({ action: 'PRESS_JOIN_BUTTON' }), et();
                      }
                  })
          })
        : (0, i.jsx)(s.Tooltip, {
              text: en(),
              children: (e) =>
                  (0, i.jsx)(w.tG, {
                      ...e,
                      icon: s.GameControllerIcon,
                      text: X ? k.Z.Messages.JOIN : k.Z.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN,
                      disabled: ee,
                      submitting: Q,
                      fullWidth: !0,
                      onClick: () => {
                          null == B || B({ action: 'PRESS_ASK_TO_JOIN_BUTTON' }), et();
                      }
                  })
          });
}
