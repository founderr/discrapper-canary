n.d(t, {
    Ay: function () {
        return K;
    },
    yk: function () {
        return J;
    }
}),
    n(47120),
    n(653041);
var i,
    l = n(149765),
    s = n(442837),
    o = n(433517),
    a = n(570140),
    u = n(493683),
    r = n(475179),
    d = n(749210),
    c = n(292556),
    _ = n(287734),
    E = n(802098),
    I = n(933557),
    T = n(456269),
    f = n(15274),
    N = n(336197),
    g = n(355298),
    C = n(601992),
    S = n(11352),
    A = n(671105),
    Z = n(703656),
    h = n(359110),
    O = n(922482),
    m = n(427679),
    v = n(488131),
    D = n(695346),
    p = n(592125),
    M = n(430824),
    R = n(292959),
    L = n(496675),
    y = n(699516),
    G = n(944486),
    U = n(885110),
    P = n(246946),
    F = n(594174),
    w = n(979651),
    b = n(5192),
    k = n(150097),
    V = n(912101),
    H = n(358085),
    Y = n(74538),
    B = n(557177),
    W = n(51144),
    x = n(981631),
    z = n(765305),
    q = n(689938);
function X(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let K = 'message1',
    J = 0.4,
    Q = 'discord_dismissed_notification_shown',
    $ = document.hasFocus(),
    j = null,
    ee = new Set(),
    et = ['FR', 'GF', 'PF', 'TF', 'RE', 'GP', 'MQ', 'YT', 'NC', 'PM', 'WF'],
    en = new (class {
        track(e, t) {
            let n = this._channels[e];
            for (null == n && ((n = []), (this._channels[e] = n)), n.push(t); n.length > 1; ) {
                let e = n.shift();
                null != e && null != e.close && e.close();
            }
        }
        clearChannel(e) {
            let t = this._channels[e];
            null != t && (delete this._channels[e], t.forEach((e) => e.close()));
        }
        constructor() {
            X(this, '_channels', {});
        }
    })();
function ei() {
    return !!(R.Z.getDesktopType() === x.qrD.NEVER || U.Z.getStatus() === x.Skl.DND || D.QZ.getSetting()) || !1;
}
function el(e) {
    return null != w.Z.getVoiceStateForChannel(e);
}
class es extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(F.default, p.Z, R.Z, M.Z, m.Z, y.Z, L.Z, w.Z, g.Z);
    }
}
X(es, 'displayName', 'NotificationStore'),
    new es(
        a.Z,
        __OVERLAY__
            ? {}
            : {
                  NOTIFICATIONS_SET_PERMISSION_STATE: function (e) {
                      let { enabled: t } = e;
                      t === x.$Ab.ENABLED &&
                          !H.isPlatformEmbedded &&
                          V.Z.showNotification(
                              n(185672),
                              q.Z.Messages.NOTIFICATION_TITLE_DISCORD,
                              q.Z.Messages.BROWSER_NOTIFICATIONS_ENABLED_BODY,
                              { notif_type: 'NOTIFICATIONS_SET_PERMISSION_STATE' },
                              {
                                  omitViewTracking: !0,
                                  sound: K,
                                  volume: J,
                                  tag: 'hello',
                                  onClick: () => {
                                      window.focus();
                                  }
                              }
                          );
                  },
                  NOTIFICATION_CREATE: function (e) {
                      let { icon: t, title: n, body: i, trackingProps: l, options: s } = e;
                      return !ei() && (V.Z.showNotification(t, n, i, l, s), !1);
                  },
                  WINDOW_FOCUS: function (e) {
                      if (($ = e.focused)) {
                          let e = G.Z.getChannelId();
                          null != e && en.clearChannel(e);
                      }
                  },
                  MESSAGE_CREATE: function (e) {
                      var t, i, l, s;
                      let { channelId: o, message: u, optimistic: d } = e;
                      if (d) return !1;
                      let _ = p.Z.getChannel(o),
                          I = F.default.getUser(null === (t = u.author) || void 0 === t ? void 0 : t.id),
                          T = F.default.getCurrentUser();
                      if (null == _ || null == I) return !1;
                      let f = (0, k.eF)(u, o, !$),
                          N = R.Z.getNotifyMessagesInSelectedChannel() && (0, k.N_)(u, o);
                      if ((!f && !N) || (u.type === x.uaV.CHANGELOG && (null == u.changelog_id || E.Z.latestChangelogId() !== u.changelog_id))) return !1;
                      let g = !R.Z.isSoundDisabled(K),
                          Z = Y.ZP.canUseCustomNotificationSounds(T),
                          O = S.Y.getCurrentConfig({ location: 'NotificationStore' }).enabled,
                          m = Z && O && g ? (null !== (s = (0, A.bb)(null !== (l = _.guild_id) && void 0 !== l ? l : x.aIL, o)) && void 0 !== s ? s : (0, A.iD)(_.guild_id)) : void 0;
                      if ((N && (g && B.GN('message3', 0.4, void 0, m), !$)) || !f) return !1;
                      let v = n(808506).Z,
                          D = n(237997).Z;
                      if (null != v.getFocusedPID() && D.getTextChatNotificationMode() === x.Ypu.ENABLED && !P.Z.disableNotifications) return !1;
                      let { icon: M, title: L, body: y } = (0, k.Xi)(_, u, I);
                      if (
                          (a.Z.dispatch({
                              type: 'RPC_NOTIFICATION_CREATE',
                              channelId: _.id,
                              message: u,
                              icon: M,
                              title: L,
                              body: y
                          }),
                          (0, C.R)(u, _.guild_id),
                          R.Z.getDesktopType() === x.qrD.NEVER)
                      )
                          return g && B.GN(K, J, void 0, m), !1;
                      let G = V.Z.showNotification(
                          M,
                          L,
                          y,
                          {
                              notif_type: 'MESSAGE_CREATE',
                              notif_user_id: null === (i = u.author) || void 0 === i ? void 0 : i.id,
                              message_id: u.id,
                              message_type: u.type,
                              channel_id: _.id,
                              channel_type: _.type,
                              guild_id: _.guild_id
                          },
                          {
                              omitViewTracking: !0,
                              tag: u.id,
                              sound: g ? K : void 0,
                              soundpack: m,
                              volume: J,
                              onClick() {
                                  (0, h.Kh)(_.id), (_.type === x.d4z.GUILD_VOICE || _.type === x.d4z.GUILD_STAGE_VOICE) && r.Z.updateChatOpen(_.id, !0), c.default.clickedNotification();
                              }
                          }
                      );
                      null != G && en.track(_.id, G);
                  },
                  CHANNEL_SELECT: function (e) {
                      let { channelId: t } = e;
                      return null != t && en.clearChannel(t), !1;
                  },
                  MESSAGE_ACK: function (e) {
                      let { channelId: t } = e;
                      return en.clearChannel(t), !1;
                  },
                  ACTIVITY_START: function (e) {
                      let { userId: t, activity: n } = e;
                      if (ei()) return !1;
                      if (n.type === x.IIU.PLAYING) {
                          let e = F.default.getUser(t);
                          if (null == e) return !1;
                          let i = W.ZP.getName(e),
                              l = n.name,
                              s = e.getAvatarURL(void 0, 128),
                              o = q.Z.Messages.NOTIFICATION_TITLE_START_GAME,
                              a = q.Z.Messages.NOTIFICATION_BODY_START_GAME.format({
                                  username: i,
                                  gameName: l
                              });
                          return (
                              V.Z.showNotification(
                                  s,
                                  o,
                                  a,
                                  {
                                      notif_type: 'ACTIVITY_START',
                                      activity_type: x.IIU.PLAYING,
                                      notif_user_id: t,
                                      activity_name: l
                                  },
                                  {
                                      sound: 'message2',
                                      playSoundIfDisabled: !1,
                                      volume: 0.4,
                                      onClick() {
                                          u.Z.openPrivateChannel(t);
                                      }
                                  }
                              ),
                              !1
                          );
                      }
                      return !1;
                  },
                  VOICE_STATE_UPDATES: function (e) {
                      let { voiceStates: t } = e;
                      if (ei()) return;
                      let n = F.default.getCurrentUser();
                      if (null == n) return;
                      let i = t.find((e) => e.userId === n.id);
                      if (null == i) return;
                      let { channelId: l, guildId: s, suppress: o, requestToSpeakTimestamp: a } = i;
                      if (null == l || null == s || !(!o && null != a)) return;
                      let u = M.Z.getGuild(s),
                          r = p.Z.getChannel(l),
                          d = m.Z.getStageInstanceByChannel(l);
                      null != u &&
                          null != r &&
                          null != d &&
                          V.Z.showNotification(
                              u.getIconURL(128),
                              r.name,
                              q.Z.Messages.STAGE_SPEAK_INVITE_PUSH_NOTIFICATION.format({
                                  channelName: (0, I.F6)(r, F.default, y.Z),
                                  channelTopic: null == d ? void 0 : d.topic
                              }),
                              { notif_type: 'Stage Speak Invite' },
                              {}
                          );
                  },
                  STAGE_INSTANCE_UPDATE: function (e) {
                      let { instance: t } = e;
                      if (ei() || !t.send_start_notification || el(t.channel_id)) return !1;
                      let n = F.default.getCurrentUser(),
                          i = M.Z.getGuild(t.guild_id),
                          s = p.Z.getChannel(t.channel_id),
                          o = F.default.getUser(t.host_id);
                      if (null == n || null == s || null == i || null == o || !(0, k.LL)(n, o, s) || !L.Z.can(l.$e(x.Plq.CONNECT, x.Plq.VIEW_CHANNEL), s) || ee.has(t.id)) return !1;
                      ee.add(t.id),
                          V.Z.showNotification(
                              i.getIconURL(128),
                              q.Z.Messages.STAGE_START_PUSH_NOTIFICATION_TITLE.format({ guildName: i.name }),
                              q.Z.Messages.STAGE_START_PUSH_NOTIFICATION_BODY.format({
                                  username: b.ZP.getName(i.id, s.id, o),
                                  topic: t.topic
                              }),
                              {
                                  notif_type: 'STAGE_INSTANCE_CREATE',
                                  guild_id: i.id,
                                  channel_id: s.id
                              },
                              {
                                  onClick() {
                                      (0, O.Cq)(s);
                                  }
                              }
                          );
                  },
                  STAGE_INSTANCE_DELETE: function (e) {
                      let { instance: t } = e;
                      ee.delete(t.id);
                  },
                  GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
                      let { guildScheduledEvent: t } = e;
                      if (ei() || null == t.notification_type) return !1;
                      t.notification_type === z.sy.EVENT_START &&
                          (t.entity_type === z.WX.STAGE_INSTANCE || t.entity_type === z.WX.VOICE
                              ? !(function (e) {
                                    if (ei()) return !1;
                                    let t = e.channel_id;
                                    if (null == t || el(t)) return !1;
                                    let n = F.default.getCurrentUser(),
                                        i = M.Z.getGuild(e.guild_id),
                                        s = p.Z.getChannel(e.channel_id),
                                        o = F.default.getUser(e.host_id);
                                    if (null == n || null == s || null == i || null == o || !L.Z.can(l.$e(x.Plq.CONNECT, x.Plq.VIEW_CHANNEL), s)) return !1;
                                    V.Z.showNotification(
                                        i.getIconURL(128),
                                        q.Z.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_TITLE.format({ guildName: i.name }),
                                        q.Z.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_BODY.format({
                                            topic: e.name,
                                            username: b.ZP.getName(i.id, s.id, o)
                                        }),
                                        {
                                            notif_type: 'GUILD_SCHEDULED_EVENT_UPDATE',
                                            guild_id: i.id,
                                            channel_id: s.id
                                        },
                                        {
                                            onClick() {
                                                e.entity_type === z.WX.STAGE_INSTANCE && (0, O.Cq)(s), e.entity_type === z.WX.VOICE && _.default.selectVoiceChannel(s.id);
                                            }
                                        }
                                    );
                                })(t)
                              : t.entity_type === z.WX.EXTERNAL &&
                                !(function (e) {
                                    if (ei()) return !1;
                                    let t = F.default.getCurrentUser(),
                                        n = M.Z.getGuild(e.guild_id);
                                    if (null == t || null == n) return !1;
                                    V.Z.showNotification(
                                        n.getIconURL(128),
                                        q.Z.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_TITLE.format({ guildName: n.name }),
                                        q.Z.Messages.GUILD_SCHEDULED_EVENT_EXTERNAL_START_BODY.format({ topic: e.name }),
                                        {
                                            notif_type: 'GUILD_SCHEDULED_EVENT_UPDATE',
                                            guild_id: n.id
                                        },
                                        {
                                            onClick() {
                                                d.Z.transitionToGuildSync(e.guild_id), (0, f.bO)({ eventId: e.id });
                                            }
                                        }
                                    );
                                })(t));
                  },
                  THREAD_CREATE: function (e) {
                      var t;
                      let { channel: n, isNewlyCreated: i } = e;
                      if (ei()) return !1;
                      let l = p.Z.getChannel(n.parent_id);
                      if (null == l || !x.TPd.GUILD_THREADS_ONLY.has(l.type) || !i || !(0, k.FI)(n, l, !$)) return !1;
                      let { author: s, user: o } = (0, T.MC)(n);
                      if (null == o) return !1;
                      let a = M.Z.getGuild(l.guild_id);
                      if (null == a) return !1;
                      let u = q.Z.Messages.FORUM_CHANNEL_THREAD_CREATED_PUSH_TITLE_MOBILE.format({
                              channelName: l.name,
                              guildName: a.name
                          }),
                          r = q.Z.Messages.FORUM_CHANNEL_THREAD_CREATED_PUSH_BODY_MOBILE.format({
                              channelName: n.name,
                              userUsername: null !== (t = null == s ? void 0 : s.nick) && void 0 !== t ? t : null == o ? void 0 : o.username
                          }),
                          d = o.getAvatarURL(void 0, 128);
                      V.Z.showNotification(
                          d,
                          u,
                          r,
                          {
                              notif_type: 'THREAD_CREATE',
                              notif_user_id: o.id
                          },
                          {
                              onClick() {
                                  (0, v.ok)(n);
                              }
                          }
                      );
                  },
                  GENERIC_PUSH_NOTIFICATION_SENT: function (e) {
                      let { icon: t, title: n, body: i, route: l, trackingType: s, tag: o } = e;
                      return (
                          !ei() &&
                          null != n &&
                          null != i &&
                          null != s &&
                          (V.Z.showNotification(
                              t,
                              n,
                              i,
                              { notif_type: s },
                              {
                                  onClick() {
                                      null != l && ((0, Z.uL)(l), c.default.clickedNotification());
                                  },
                                  tag: o
                              }
                          ),
                          !1)
                      );
                  },
                  WINDOW_HIDDEN: function () {
                      let e = (0, H.isWindows)(),
                          t = (0, H.isLinux)();
                      if (!(!o.K.get(Q, !1) && H.isPlatformEmbedded && (e || t))) return !1;
                      let i = !1;
                      return (
                          null != j && (i = et.includes(j)),
                          !!i &&
                              (V.Z.showNotification(
                                  n(95045),
                                  q.Z.Messages.NOTIFICATION_TITLE_DISCORD,
                                  q.Z.Messages.NOTIFICATION_BODY_DISCORD_HIDDEN,
                                  { notif_type: 'WINDOW_HIDDEN' },
                                  {
                                      overrideStreamerMode: !0,
                                      onClick: () => {
                                          (0, Z.uL)(x.Z5c.SETTINGS(e ? 'windows' : 'linux'));
                                      },
                                      onShown: () => {
                                          o.K.set(Q, !0);
                                      }
                                  }
                              ),
                              !1)
                      );
                  },
                  LOGOUT: function () {
                      return o.K.remove(Q), !1;
                  },
                  CONNECTION_OPEN: function (e) {
                      let { countryCode: t, guilds: n } = e;
                      (j = t), ee.clear(), n.forEach((e) => e.stage_instances.forEach((e) => ee.add(e.id)));
                  },
                  MESSAGE_REMINDER_DUE: function (e) {
                      let { savedMessage: t } = e,
                          n = t.message;
                      if (null == n || null == n.author) return !1;
                      let i = p.Z.getChannel(t.saveData.channelId);
                      if (null == i) return !1;
                      let { icon: l, body: s } = (0, k.Xi)(i, n, n.author);
                      V.Z.showNotification(
                          l,
                          q.Z.Messages.MESSAGE_REMINDER_DESKTOP_NOTIFICATION_TITLE,
                          s,
                          { notif_type: 'MESSAGE_REMINDER_DUE' },
                          {
                              onClick() {
                                  (0, N.Z)(x.Z5c.CHANNEL(null == i ? void 0 : i.getGuildId(), i.id, n.id));
                              }
                          }
                      );
                  }
              }
    );
