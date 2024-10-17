n(411104);
var r = n(735250);
n(470079);
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
    h = n(366297),
    p = n(981631);
t.Z = {
    async handleVoiceConnect(e) {
        let { channel: t, connected: I, needSubscriptionToAccess: m, locked: T = !1, routeDirectlyToChannel: S = !1, bypassChangeModal: g, bypassBlockedWarningModal: A, bypassGuildIdCheck: N = !1 } = e;
        t.isThread() && (await d.Z.unarchiveThreadIfNecessary(t.id), !c.Z.hasJoined(t.id) && (await d.Z.joinThread(t, 'Join Voice')));
        let R = s.Z.getRemoteSessionId(),
            O = f.Z.getVoiceStateForSession(_.default.getId(), R),
            v = (null == O ? void 0 : O.channelId) === t.id || E.Z.getChannelId() === f.Z.getCurrentClientVoiceChannelId(t.guild_id),
            C = u.Z.getBlockedUsersForVoiceChannel(t.id);
        return ((0, l.M)(t.id) && (A = !0), A || T || I || !(C.size > 0))
            ? !g && !T && (0, h._)(t)
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
                                              connected: I,
                                              needSubscriptionToAccess: m,
                                              routeDirectlyToChannel: S,
                                              locked: T,
                                              bypassChangeModal: !0
                                          })
                                      ),
                                  ...n
                              });
                      });
                  })
                : (!T && !I && a.default.selectVoiceChannel(t.id),
                  !__OVERLAY__ &&
                      (I || v || m || S) &&
                      !(function (e) {
                          let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                              n = e.getGuildId();
                          if (null == n && !t) throw Error('VoiceChannel, transitionTo: Channel does not have a guildId');
                          (0, o.uL)(p.Z5c.CHANNEL(n, e.id));
                      })(t, N),
                  !0)
            : new Promise((e) => {
                  (0, i.openModalLazy)(async () => {
                      let { default: i } = await n.e('12858').then(n.bind(n, 404339));
                      return (n) => {
                          let { onClose: a, transitionState: s } = n;
                          return (0, r.jsx)(i, {
                              channelId: t.id,
                              blockedUserIds: C,
                              transitionState: s,
                              onClose: a,
                              onJoin: () =>
                                  e(
                                      this.handleVoiceConnect({
                                          channel: t,
                                          connected: I,
                                          needSubscriptionToAccess: m,
                                          routeDirectlyToChannel: S,
                                          locked: T,
                                          bypassChangeModal: !0,
                                          bypassBlockedWarningModal: !0
                                      })
                                  )
                          });
                      };
                  });
              });
    }
};
