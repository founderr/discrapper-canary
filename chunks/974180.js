n.d(t, {
    Ay: function () {
        return Q;
    },
    yk: function () {
        return $;
    }
}),
    n(47120),
    n(653041);
var i,
    l = n(149765),
    o = n(442837),
    a = n(433517),
    s = n(570140),
    u = n(493683),
    r = n(475179),
    d = n(749210),
    c = n(292556),
    _ = n(287734),
    E = n(802098),
    f = n(933557),
    I = n(456269),
    T = n(15274),
    N = n(754688),
    g = n(336197),
    A = n(355298),
    C = n(601992),
    S = n(11352),
    Z = n(671105),
    h = n(106371),
    O = n(703656),
    p = n(359110),
    m = n(922482),
    v = n(427679),
    D = n(488131),
    R = n(695346),
    M = n(592125),
    y = n(430824),
    L = n(292959),
    G = n(496675),
    U = n(699516),
    F = n(944486),
    P = n(885110),
    b = n(246946),
    w = n(594174),
    k = n(979651),
    V = n(5192),
    H = n(150097),
    Y = n(912101),
    B = n(358085),
    W = n(74538),
    x = n(557177),
    z = n(51144),
    q = n(981631),
    X = n(765305),
    K = n(689938);
function J(e, t, n) {
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
let Q = 'message1',
    $ = 0.4,
    j = 'discord_dismissed_notification_shown',
    ee = document.hasFocus(),
    et = null,
    en = new Set(),
    ei = ['FR', 'GF', 'PF', 'TF', 'RE', 'GP', 'MQ', 'YT', 'NC', 'PM', 'WF'],
    el = new (class {
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
            J(this, '_channels', {});
        }
    })();
function eo() {
    return !!(L.Z.getDesktopType() === q.qrD.NEVER || P.Z.getStatus() === q.Skl.DND || R.QZ.getSetting()) || !1;
}
function ea(e) {
    return null != k.Z.getVoiceStateForChannel(e);
}
class es extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(w.default, M.Z, L.Z, y.Z, v.Z, U.Z, G.Z, k.Z, A.Z);
    }
}
J(es, 'displayName', 'NotificationStore'),
    new es(
        s.Z,
        __OVERLAY__
            ? {}
            : {
                  NOTIFICATIONS_SET_PERMISSION_STATE: function (e) {
                      let { enabled: t } = e;
                      t === q.$Ab.ENABLED &&
                          !B.isPlatformEmbedded &&
                          Y.Z.showNotification(
                              n(185672),
                              K.Z.Messages.NOTIFICATION_TITLE_DISCORD,
                              K.Z.Messages.BROWSER_NOTIFICATIONS_ENABLED_BODY,
                              { notif_type: 'NOTIFICATIONS_SET_PERMISSION_STATE' },
                              {
                                  omitViewTracking: !0,
                                  sound: Q,
                                  volume: $,
                                  tag: 'hello',
                                  onClick: () => {
                                      window.focus();
                                  }
                              }
                          );
                  },
                  NOTIFICATION_CREATE: function (e) {
                      let { icon: t, title: n, body: i, trackingProps: l, options: o } = e;
                      return !eo() && (Y.Z.showNotification(t, n, i, l, o), !1);
                  },
                  WINDOW_FOCUS: function (e) {
                      if ((ee = e.focused)) {
                          let e = F.Z.getChannelId();
                          null != e && el.clearChannel(e);
                      }
                  },
                  MESSAGE_CREATE: function (e) {
                      var t, i, l, o;
                      let { channelId: a, message: u, optimistic: d } = e;
                      if (d) return !1;
                      let _ = M.Z.getChannel(a),
                          f = w.default.getUser(null === (t = u.author) || void 0 === t ? void 0 : t.id),
                          I = w.default.getCurrentUser();
                      if (null == _ || null == f) return !1;
                      let T = (0, H.eF)(u, a, !ee),
                          N = L.Z.getNotifyMessagesInSelectedChannel() && (0, H.N_)(u, a);
                      if ((!T && !N) || (u.type === q.uaV.CHANGELOG && (null == u.changelog_id || E.Z.latestChangelogId() !== u.changelog_id))) return !1;
                      let g = !L.Z.isSoundDisabled(Q),
                          A = W.ZP.canUseCustomNotificationSounds(I),
                          h = S.Y.getCurrentConfig({ location: 'NotificationStore' }).enabled,
                          O = A && h && g ? (null !== (o = (0, Z.bb)(null !== (l = _.guild_id) && void 0 !== l ? l : q.aIL, a)) && void 0 !== o ? o : (0, Z.iD)(_.guild_id)) : void 0;
                      if ((N && (g && x.GN('message3', 0.4, void 0, O), !ee)) || !T) return !1;
                      let m = n(808506).Z,
                          v = n(237997).Z;
                      if (null != m.getFocusedPID() && v.getTextChatNotificationMode() === q.Ypu.ENABLED && !b.Z.disableNotifications) return !1;
                      let { icon: D, title: R, body: y } = (0, H.Xi)(_, u, f);
                      if (
                          (s.Z.dispatch({
                              type: 'RPC_NOTIFICATION_CREATE',
                              channelId: _.id,
                              message: u,
                              icon: D,
                              title: R,
                              body: y
                          }),
                          (0, C.R)(u, _.guild_id),
                          L.Z.getDesktopType() === q.qrD.NEVER)
                      )
                          return g && x.GN(Q, $, void 0, O), !1;
                      let G = Y.Z.showNotification(
                          D,
                          R,
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
                              sound: g ? Q : void 0,
                              soundpack: O,
                              volume: $,
                              onClick() {
                                  (0, p.Kh)(_.id), (_.type === q.d4z.GUILD_VOICE || _.type === q.d4z.GUILD_STAGE_VOICE) && r.Z.updateChatOpen(_.id, !0), c.default.clickedNotification();
                              }
                          }
                      );
                      null != G && el.track(_.id, G);
                  },
                  CHANNEL_SELECT: function (e) {
                      let { channelId: t } = e;
                      return null != t && el.clearChannel(t), !1;
                  },
                  MESSAGE_ACK: function (e) {
                      let { channelId: t } = e;
                      return el.clearChannel(t), !1;
                  },
                  ACTIVITY_START: function (e) {
                      let { userId: t, activity: n } = e;
                      if (eo()) return !1;
                      if (n.type === q.IIU.PLAYING) {
                          let e = w.default.getUser(t);
                          if (null == e) return !1;
                          let i = z.ZP.getName(e),
                              l = n.name,
                              o = e.getAvatarURL(void 0, 128),
                              a = K.Z.Messages.NOTIFICATION_TITLE_START_GAME,
                              s = K.Z.Messages.NOTIFICATION_BODY_START_GAME.format({
                                  username: i,
                                  gameName: l
                              });
                          return (
                              Y.Z.showNotification(
                                  o,
                                  a,
                                  s,
                                  {
                                      notif_type: 'ACTIVITY_START',
                                      activity_type: q.IIU.PLAYING,
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
                      if (eo()) return;
                      let n = w.default.getCurrentUser();
                      if (null == n) return;
                      let i = t.find((e) => e.userId === n.id);
                      if (null == i) return;
                      let { channelId: l, guildId: o, suppress: a, requestToSpeakTimestamp: s } = i;
                      if (null == l || null == o || !(!a && null != s)) return;
                      let u = y.Z.getGuild(o),
                          r = M.Z.getChannel(l),
                          d = v.Z.getStageInstanceByChannel(l);
                      null != u &&
                          null != r &&
                          null != d &&
                          Y.Z.showNotification(
                              u.getIconURL(128),
                              r.name,
                              K.Z.Messages.STAGE_SPEAK_INVITE_PUSH_NOTIFICATION.format({
                                  channelName: (0, f.F6)(r, w.default, U.Z),
                                  channelTopic: null == d ? void 0 : d.topic
                              }),
                              { notif_type: 'Stage Speak Invite' },
                              {}
                          );
                  },
                  STAGE_INSTANCE_UPDATE: function (e) {
                      let { instance: t } = e;
                      if (eo() || !t.send_start_notification || ea(t.channel_id)) return !1;
                      let n = w.default.getCurrentUser(),
                          i = y.Z.getGuild(t.guild_id),
                          o = M.Z.getChannel(t.channel_id),
                          a = w.default.getUser(t.host_id);
                      if (null == n || null == o || null == i || null == a || !(0, H.LL)(n, a, o) || !G.Z.can(l.$e(q.Plq.CONNECT, q.Plq.VIEW_CHANNEL), o) || en.has(t.id)) return !1;
                      en.add(t.id),
                          Y.Z.showNotification(
                              i.getIconURL(128),
                              K.Z.Messages.STAGE_START_PUSH_NOTIFICATION_TITLE.format({ guildName: i.name }),
                              K.Z.Messages.STAGE_START_PUSH_NOTIFICATION_BODY.format({
                                  username: V.ZP.getName(i.id, o.id, a),
                                  topic: t.topic
                              }),
                              {
                                  notif_type: 'STAGE_INSTANCE_CREATE',
                                  guild_id: i.id,
                                  channel_id: o.id
                              },
                              {
                                  onClick() {
                                      (0, m.Cq)(o);
                                  }
                              }
                          );
                  },
                  STAGE_INSTANCE_DELETE: function (e) {
                      let { instance: t } = e;
                      en.delete(t.id);
                  },
                  GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
                      let { guildScheduledEvent: t } = e;
                      if (eo() || null == t.notification_type) return !1;
                      t.notification_type === X.sy.EVENT_START &&
                          (t.entity_type === X.WX.STAGE_INSTANCE || t.entity_type === X.WX.VOICE
                              ? !(function (e) {
                                    if (eo()) return !1;
                                    let t = e.channel_id;
                                    if (null == t || ea(t)) return !1;
                                    let n = w.default.getCurrentUser(),
                                        i = y.Z.getGuild(e.guild_id),
                                        o = M.Z.getChannel(e.channel_id),
                                        a = w.default.getUser(e.host_id);
                                    if (null == n || null == o || null == i || null == a || !G.Z.can(l.$e(q.Plq.CONNECT, q.Plq.VIEW_CHANNEL), o)) return !1;
                                    Y.Z.showNotification(
                                        i.getIconURL(128),
                                        K.Z.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_TITLE.format({ guildName: i.name }),
                                        K.Z.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_BODY.format({
                                            topic: e.name,
                                            username: V.ZP.getName(i.id, o.id, a)
                                        }),
                                        {
                                            notif_type: 'GUILD_SCHEDULED_EVENT_UPDATE',
                                            guild_id: i.id,
                                            channel_id: o.id
                                        },
                                        {
                                            onClick() {
                                                e.entity_type === X.WX.STAGE_INSTANCE && (0, m.Cq)(o), e.entity_type === X.WX.VOICE && _.default.selectVoiceChannel(o.id);
                                            }
                                        }
                                    );
                                })(t)
                              : t.entity_type === X.WX.EXTERNAL &&
                                !(function (e) {
                                    if (eo()) return !1;
                                    let t = w.default.getCurrentUser(),
                                        n = y.Z.getGuild(e.guild_id);
                                    if (null == t || null == n) return !1;
                                    Y.Z.showNotification(
                                        n.getIconURL(128),
                                        K.Z.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_TITLE.format({ guildName: n.name }),
                                        K.Z.Messages.GUILD_SCHEDULED_EVENT_EXTERNAL_START_BODY.format({ topic: e.name }),
                                        {
                                            notif_type: 'GUILD_SCHEDULED_EVENT_UPDATE',
                                            guild_id: n.id
                                        },
                                        {
                                            onClick() {
                                                d.Z.transitionToGuildSync(e.guild_id), (0, T.bO)({ eventId: e.id });
                                            }
                                        }
                                    );
                                })(t));
                  },
                  THREAD_CREATE: function (e) {
                      var t;
                      let { channel: n, isNewlyCreated: i } = e;
                      if (eo()) return !1;
                      let l = M.Z.getChannel(n.parent_id);
                      if (null == l || !q.TPd.GUILD_THREADS_ONLY.has(l.type) || !i || !(0, H.FI)(n, l, !ee)) return !1;
                      let { author: o, user: a } = (0, I.MC)(n);
                      if (null == a) return !1;
                      let s = y.Z.getGuild(l.guild_id);
                      if (null == s) return !1;
                      let u = K.Z.Messages.FORUM_CHANNEL_THREAD_CREATED_PUSH_TITLE_MOBILE.format({
                              channelName: l.name,
                              guildName: s.name
                          }),
                          r = K.Z.Messages.FORUM_CHANNEL_THREAD_CREATED_PUSH_BODY_MOBILE.format({
                              channelName: n.name,
                              userUsername: null !== (t = null == o ? void 0 : o.nick) && void 0 !== t ? t : null == a ? void 0 : a.username
                          }),
                          d = a.getAvatarURL(void 0, 128);
                      Y.Z.showNotification(
                          d,
                          u,
                          r,
                          {
                              notif_type: 'THREAD_CREATE',
                              notif_user_id: a.id
                          },
                          {
                              onClick() {
                                  (0, D.ok)(n);
                              }
                          }
                      );
                  },
                  GENERIC_PUSH_NOTIFICATION_SENT: function (e) {
                      let t,
                          { icon: n, title: i, body: l, route: o, trackingType: a, tag: s } = e;
                      if (eo() || null == i || null == l || null == a) return !1;
                      if ('reactions_push_notification' === a) {
                          var u;
                          let { enableInAppNotifications: e } = h.Z.getCurrentConfig({ location: 'desktopNotification' }, { autoTrackExposure: !0 });
                          if (!e) return !1;
                          let n =
                              null !== (u = (0, N.Qj)(o)) && void 0 !== u
                                  ? u
                                  : {
                                        channelId: null,
                                        guildId: null
                                    };
                          if (null == (t = n.channelId) || null == n.guildId || (F.Z.getCurrentlySelectedChannelId() === t && ee)) return !1;
                      }
                      let r = Y.Z.showNotification(
                          n,
                          i,
                          l,
                          { notif_type: a },
                          {
                              onClick() {
                                  null != o && ((0, g.Z)(o), c.default.clickedNotification());
                              },
                              tag: s
                          }
                      );
                      null != r && null != t && el.track(t, r);
                  },
                  WINDOW_HIDDEN: function () {
                      let e = (0, B.isWindows)(),
                          t = (0, B.isLinux)();
                      if (!(!a.K.get(j, !1) && B.isPlatformEmbedded && (e || t))) return !1;
                      let i = !1;
                      return (
                          null != et && (i = ei.includes(et)),
                          !!i &&
                              (Y.Z.showNotification(
                                  n(95045),
                                  K.Z.Messages.NOTIFICATION_TITLE_DISCORD,
                                  K.Z.Messages.NOTIFICATION_BODY_DISCORD_HIDDEN,
                                  { notif_type: 'WINDOW_HIDDEN' },
                                  {
                                      overrideStreamerMode: !0,
                                      onClick: () => {
                                          (0, O.uL)(q.Z5c.SETTINGS(e ? 'windows' : 'linux'));
                                      },
                                      onShown: () => {
                                          a.K.set(j, !0);
                                      }
                                  }
                              ),
                              !1)
                      );
                  },
                  LOGOUT: function () {
                      return a.K.remove(j), !1;
                  },
                  CONNECTION_OPEN: function (e) {
                      let { countryCode: t, guilds: n } = e;
                      (et = t), en.clear(), n.forEach((e) => e.stage_instances.forEach((e) => en.add(e.id)));
                  },
                  MESSAGE_REMINDER_DUE: function (e) {
                      let { savedMessage: t } = e;
                      if (eo()) return !1;
                      let n = t.message;
                      if (null == n || null == n.author) return !1;
                      let i = M.Z.getChannel(t.saveData.channelId);
                      if (null == i) return !1;
                      let { icon: l, body: o } = (0, H.Xi)(i, n, n.author);
                      Y.Z.showNotification(
                          l,
                          K.Z.Messages.MESSAGE_REMINDER_DESKTOP_NOTIFICATION_TITLE,
                          o,
                          { notif_type: 'MESSAGE_REMINDER_DUE' },
                          {
                              onClick() {
                                  (0, g.Z)(q.Z5c.CHANNEL(null == i ? void 0 : i.getGuildId(), i.id, n.id));
                              }
                          }
                      );
                  }
              }
    );
