n(411104);
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(287734),
    s = n(258609),
    o = n(703656),
    l = n(414509),
    u = n(452369),
    c = n(569471),
    d = n(346479),
    _ = n(314897),
    E = n(944486),
    f = n(979651),
    h = n(626135),
    p = n(366297),
    I = n(981631),
    m = n(110223);
t.Z = {
    async handleVoiceConnect(e) {
        let { channel: t, connected: T, needSubscriptionToAccess: S, locked: g = !1, routeDirectlyToChannel: A = !1, bypassChangeModal: N, bypassBlockedWarningModal: R, bypassGuildIdCheck: O = !1 } = e;
        t.isThread() && (await d.Z.unarchiveThreadIfNecessary(t.id), !c.Z.hasJoined(t.id) && (await d.Z.joinThread(t, 'Join Voice')));
        let v = s.Z.getRemoteSessionId(),
            C = f.Z.getVoiceStateForSession(_.default.getId(), v),
            L = (null == C ? void 0 : C.channelId) === t.id || E.Z.getChannelId() === f.Z.getCurrentClientVoiceChannelId(t.guild_id),
            D = u.Z.getBlockedUsersForVoiceChannel(t.id);
        return ((0, l.M)(t.id) && (R = !0), R || g || T || !(D.size > 0))
            ? !N && !g && (0, p._)(t)
                ? new Promise((e) => {
                      (0, i.openModalLazy)(async () => {
                          let { default: i } = await n.e('65045').then(n.bind(n, 143782));
                          return (n) =>
                              (0, r.jsx)(i, {
                                  channel: t,
                                  onConfirm: () =>
                                      e(
                                          this.handleVoiceConnect({
                                              channel: t,
                                              connected: T,
                                              needSubscriptionToAccess: S,
                                              routeDirectlyToChannel: A,
                                              locked: g,
                                              bypassChangeModal: !0
                                          })
                                      ),
                                  ...n
                              });
                      });
                  })
                : (!g && !T && a.default.selectVoiceChannel(t.id),
                  !__OVERLAY__ &&
                      (T || L || S || A) &&
                      !(function (e) {
                          let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                              n = e.getGuildId();
                          if (null == n && !t) throw Error('VoiceChannel, transitionTo: Channel does not have a guildId');
                          (0, o.uL)(I.Z5c.CHANNEL(n, e.id));
                      })(t, O),
                  !0)
            : new Promise((e) => {
                  (0, i.openModalLazy)(
                      async () => {
                          let { default: i } = await n.e('12858').then(n.bind(n, 404339));
                          return (n) => {
                              let { onClose: a, transitionState: s } = n;
                              return (0, r.jsx)(i, {
                                  channelId: t.id,
                                  blockedUserIds: D,
                                  transitionState: s,
                                  onClose: a,
                                  onJoin: () =>
                                      e(
                                          this.handleVoiceConnect({
                                              channel: t,
                                              connected: T,
                                              needSubscriptionToAccess: S,
                                              routeDirectlyToChannel: A,
                                              locked: g,
                                              bypassChangeModal: !0,
                                              bypassBlockedWarningModal: !0
                                          })
                                      )
                              });
                          };
                      },
                      {
                          onCloseCallback: () => {
                              h.default.track(I.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                                  action: m.q.DISMISS,
                                  channel_id: t.id,
                                  blocked_user_ids: Array.from(D),
                                  warning_surface: m.fz.PRE_JOIN_MODAL
                              });
                          }
                      }
                  );
              });
    }
};
