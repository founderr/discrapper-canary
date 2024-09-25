n.d(t, {
    Z: function () {
        return F;
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
    g = n(895924),
    S = n(835473),
    A = n(592745),
    v = n(592125),
    N = n(757266),
    O = n(650774),
    R = n(430824),
    C = n(283595),
    y = n(496675),
    b = n(699516),
    L = n(944486),
    D = n(979651),
    M = n(181106),
    P = n(417363),
    U = n(358085),
    w = n(804739),
    x = n(475413),
    G = n(981631),
    k = n(701488),
    B = n(689938);
function F(e) {
    let { user: t, currentUser: n, activity: r, onAction: F, onClose: Z } = e,
        { analyticsLocations: V, newestAnalyticsLocation: H } = (0, T.ZP)(),
        [Y] = (0, S.Z)([null == r ? void 0 : r.application_id]),
        j = (0, m.Z)(r),
        W = null == r ? void 0 : r.application_id,
        K = null == r ? void 0 : r.session_id,
        z = (0, h.Z)({
            activity: r,
            userId: t.id,
            channelId: void 0
        }),
        q =
            (0, o.e7)(
                [C.Z, A.Z, P.Z, N.Z],
                () =>
                    null != W &&
                    (0, w.t)({
                        applicationId: W,
                        LibraryApplicationStore: C.Z,
                        LaunchableGameStore: A.Z,
                        DispatchApplicationStore: P.Z,
                        ConnectedAppsStore: N.Z
                    })
            ) || j,
        Q = (0, o.e7)([_.ZP], () =>
            [..._.ZP.getSelfEmbeddedActivities().values()].some((e) => {
                let { applicationId: t, channelId: n } = e;
                return t === W && n === z;
            })
        ),
        X = (0, o.e7)([M.Z], () => null != W && M.Z.getState(W, G.mFx.JOIN) === G.OcF.LOADING),
        $ = (0, o.e7)([v.Z, R.Z, O.Z, b.Z, L.Z, D.Z, y.Z], () =>
            (0, f.Z)({
                user: t,
                activity: r,
                application: Y,
                channelId: z,
                currentUser: n,
                isEmbedded: j,
                ChannelStore: v.Z,
                GuildStore: R.Z,
                GuildMemberCountStore: O.Z,
                RelationshipStore: b.Z,
                SelectedChannelStore: L.Z,
                VoiceStateStore: D.Z,
                PermissionStore: y.Z
            })
        ),
        [J, ee] = a.useState(!1),
        et = J || Q || (U.isPlatformEmbedded && !q);
    if (null == W || !$ || (!(0, p.Z)(r, G.xjy.JOIN) && !j)) return null;
    let en = async () => {
            if (
                j &&
                $ &&
                null != z &&
                null != W &&
                (await (0, E.Z)({
                    applicationId: W,
                    activityChannelId: z,
                    locationObject: { page: G.ZY5.USER_PROFILE },
                    analyticsLocations: V,
                    commandOrigin: g.bB.USER_PROFILE
                }))
            ) {
                null == Z || Z();
                return;
            }
            if ($ && null != W && null != K) {
                var e, n;
                let i = L.Z.getVoiceChannelId(),
                    a = v.Z.getChannel(i);
                await u.Z.join({
                    userId: t.id,
                    sessionId: K,
                    applicationId: W,
                    channelId: i,
                    messageId: null,
                    intent: k.Ws.PLAY,
                    embedded: j,
                    partyId: null == r ? void 0 : null === (e = r.party) || void 0 === e ? void 0 : e.id,
                    locationObject: { page: G.ZY5.USER_PROFILE },
                    analyticsLocations: V
                }),
                    !j &&
                        (0, I.Z)({
                            type: G.q5t.JOIN,
                            userId: t.id,
                            guildId: null == a ? void 0 : a.guild_id,
                            channelId: i,
                            channelType: null == a ? void 0 : a.type,
                            partyId: null == r ? void 0 : null === (n = r.party) || void 0 === n ? void 0 : n.id,
                            applicationId: W,
                            analyticsLocations: V
                        });
            }
            if ((ee(!0), null != z && null != W))
                return d.pu({
                    channelId: z,
                    applicationId: W,
                    userId: t.id,
                    location: H
                });
            if (null != r) {
                let e = await l.Z.sendActivityInviteUser({
                    type: G.mFx.JOIN_REQUEST,
                    userId: t.id,
                    activity: r,
                    location: G.Sbl.PROFILE_POPOUT
                });
                null != e && c.default.selectPrivateChannel(e.id);
            }
        },
        er = () => (t.id === n.id ? B.Z.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF : U.isPlatformEmbedded && !q && null != r ? B.Z.Messages.USER_ACTIVITY_NOT_DETECTED.format({ name: r.name }) : null);
    return j
        ? (0, i.jsx)(s.Tooltip, {
              text: er(),
              children: (e) =>
                  (0, i.jsx)(x.tG, {
                      ...e,
                      icon: s.ActivitiesIcon,
                      text: B.Z.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY,
                      disabled: et,
                      submitting: X,
                      fullWidth: !0,
                      onClick: () => {
                          null == F || F({ action: 'PRESS_JOIN_BUTTON' }), en();
                      }
                  })
          })
        : (0, i.jsx)(s.Tooltip, {
              text: er(),
              children: (e) =>
                  (0, i.jsx)(x.tG, {
                      ...e,
                      icon: s.GameControllerIcon,
                      text: $ ? B.Z.Messages.JOIN : B.Z.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN,
                      disabled: et,
                      submitting: X,
                      fullWidth: !0,
                      onClick: () => {
                          null == F || F({ action: 'PRESS_ASK_TO_JOIN_BUTTON' }), en();
                      }
                  })
          });
}
