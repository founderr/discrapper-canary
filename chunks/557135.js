var i = r(411104);
var a = r(200651);
r(192379);
var s = r(481060),
    o = r(287734),
    l = r(258609),
    u = r(703656),
    c = r(414509),
    d = r(452369),
    f = r(569471),
    _ = r(346479),
    h = r(314897),
    p = r(944486),
    m = r(979651),
    g = r(626135),
    E = r(366297),
    v = r(981631),
    I = r(110223);
function T(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = e.getGuildId();
    if (null == r && !n) throw Error('VoiceChannel, transitionTo: Channel does not have a guildId');
    (0, u.uL)(v.Z5c.CHANNEL(r, e.id));
}
n.Z = {
    async handleVoiceConnect(e) {
        let { channel: n, connected: i, needSubscriptionToAccess: u, locked: b = !1, routeDirectlyToChannel: y = !1, bypassChangeModal: S, bypassBlockedWarningModal: A, bypassGuildIdCheck: N = !1 } = e;
        n.isThread() && (await _.Z.unarchiveThreadIfNecessary(n.id), !f.Z.hasJoined(n.id) && (await _.Z.joinThread(n, 'Join Voice')));
        let C = l.Z.getRemoteSessionId(),
            R = m.Z.getVoiceStateForSession(h.default.getId(), C),
            O = (null == R ? void 0 : R.channelId) === n.id || p.Z.getChannelId() === m.Z.getCurrentClientVoiceChannelId(n.guild_id),
            D = d.Z.getBlockedUsersForVoiceChannel(n.id),
            L = d.Z.getIgnoredUsersForVoiceChannel(n.id);
        return ((0, c.B)(n.id) && (A = !0), A || b || i || (!(D.size > 0) && !(L.size > 0)))
            ? !S && !b && (0, E._)(n)
                ? new Promise((e) => {
                      (0, s.openModalLazy)(async () => {
                          let { default: s } = await r.e('65045').then(r.bind(r, 143782));
                          return (r) =>
                              (0, a.jsx)(s, {
                                  channel: n,
                                  onConfirm: () =>
                                      e(
                                          this.handleVoiceConnect({
                                              channel: n,
                                              connected: i,
                                              needSubscriptionToAccess: u,
                                              routeDirectlyToChannel: y,
                                              locked: b,
                                              bypassChangeModal: !0
                                          })
                                      ),
                                  ...r
                              });
                      });
                  })
                : (!b && !i && o.default.selectVoiceChannel(n.id), !__OVERLAY__ && (i || O || u || y) && T(n, N), !0)
            : new Promise((e) => {
                  (0, s.openModalLazy)(
                      async () => {
                          let { default: s } = await r.e('12858').then(r.bind(r, 404339));
                          return (r) => {
                              let { onClose: o, transitionState: l } = r;
                              return (0, a.jsx)(s, {
                                  channelId: n.id,
                                  blockedUserIds: D,
                                  ignoredUserIds: L,
                                  transitionState: l,
                                  onClose: o,
                                  onJoin: () =>
                                      e(
                                          this.handleVoiceConnect({
                                              channel: n,
                                              connected: i,
                                              needSubscriptionToAccess: u,
                                              routeDirectlyToChannel: y,
                                              locked: b,
                                              bypassChangeModal: !0,
                                              bypassBlockedWarningModal: !0
                                          })
                                      )
                              });
                          };
                      },
                      {
                          onCloseCallback: () => {
                              g.default.track(v.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                                  action: I.q.DISMISS,
                                  channel_id: n.id,
                                  blocked_user_ids: Array.from(D),
                                  ignored_user_ids: Array.from(L),
                                  warning_surface: I.fz.PRE_JOIN_MODAL
                              });
                          }
                      }
                  );
              });
    }
};
