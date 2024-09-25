var r = n(411104);
var i = n(735250);
n(470079);
var a = n(481060),
    o = n(287734),
    s = n(258609),
    l = n(703656),
    u = n(569471),
    c = n(346479),
    d = n(314897),
    _ = n(944486),
    E = n(979651),
    f = n(366297),
    h = n(981631);
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = e.getGuildId();
    if (null == n && !t) throw Error('VoiceChannel, transitionTo: Channel does not have a guildId');
    (0, l.uL)(h.Z5c.CHANNEL(n, e.id));
}
t.Z = {
    async handleVoiceConnect(e) {
        let { channel: t, connected: r, needSubscriptionToAccess: l, locked: h = !1, routeDirectlyToChannel: m = !1, bypassChangeModal: I, bypassGuildIdCheck: T = !1 } = e;
        t.isThread() && (await c.Z.unarchiveThreadIfNecessary(t.id), !u.Z.hasJoined(t.id) && (await c.Z.joinThread(t, 'Join Voice')));
        let g = s.Z.getRemoteSessionId(),
            S = E.Z.getVoiceStateForSession(d.default.getId(), g),
            A = (null == S ? void 0 : S.channelId) === t.id || _.Z.getChannelId() === E.Z.getCurrentClientVoiceChannelId(t.guild_id);
        return !I && !h && (0, f._)(t)
            ? new Promise((e) => {
                  (0, a.openModalLazy)(async () => {
                      let { default: a } = await n.e('65045').then(n.bind(n, 143782));
                      return (n) =>
                          (0, i.jsx)(a, {
                              channel: t,
                              onConfirm: () =>
                                  e(
                                      this.handleVoiceConnect({
                                          channel: t,
                                          connected: r,
                                          needSubscriptionToAccess: l,
                                          routeDirectlyToChannel: m,
                                          locked: h,
                                          bypassChangeModal: !0
                                      })
                                  ),
                              ...n
                          });
                  });
              })
            : (!h && !r && o.default.selectVoiceChannel(t.id), !__OVERLAY__ && (r || A || l || m) && p(t, T), !0);
    }
};
