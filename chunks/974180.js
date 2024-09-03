n.d(t, {
    Ay: function () {
        return X;
    },
    yk: function () {
        return J;
    }
}),
    n(47120),
    n(653041);
var i,
    l = n(149765),
    o = n(442837),
    s = n(433517),
    u = n(570140),
    a = n(493683),
    r = n(475179),
    d = n(749210),
    c = n(292556),
    _ = n(287734),
    E = n(802098),
    T = n(933557),
    I = n(456269),
    f = n(15274),
    N = n(355298),
    g = n(601992),
    C = n(11352),
    S = n(671105),
    A = n(703656),
    Z = n(359110),
    O = n(922482),
    h = n(427679),
    v = n(488131),
    m = n(695346),
    p = n(592125),
    D = n(430824),
    M = n(292959),
    R = n(496675),
    L = n(699516),
    y = n(944486),
    U = n(885110),
    G = n(246946),
    P = n(594174),
    F = n(979651),
    w = n(5192),
    b = n(150097),
    k = n(912101),
    V = n(358085),
    H = n(74538),
    Y = n(557177),
    B = n(51144),
    W = n(981631),
    x = n(765305),
    q = n(689938);
function z(e, t, n) {
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
let X = 'message1',
    J = 0.4,
    K = 'discord_dismissed_notification_shown',
    Q = document.hasFocus(),
    $ = null,
    j = new Set(),
    ee = ['FR', 'GF', 'PF', 'TF', 'RE', 'GP', 'MQ', 'YT', 'NC', 'PM', 'WF'],
    et = new (class {
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
            z(this, '_channels', {});
        }
    })();
function en() {
    return !!(M.Z.getDesktopType() === W.qrD.NEVER || U.Z.getStatus() === W.Skl.DND || m.QZ.getSetting()) || !1;
}
function ei(e) {
    return null != F.Z.getVoiceStateForChannel(e);
}
class el extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(P.default, p.Z, M.Z, D.Z, h.Z, L.Z, R.Z, F.Z, N.Z);
    }
}
z(el, 'displayName', 'NotificationStore'),
    new el(
        u.Z,
        __OVERLAY__
            ? {}
            : {
                  NOTIFICATIONS_SET_PERMISSION_STATE: function (e) {
                      let { enabled: t } = e;
                      t === W.$Ab.ENABLED &&
                          !V.isPlatformEmbedded &&
                          k.Z.showNotification(
                              n(185672),
                              q.Z.Messages.NOTIFICATION_TITLE_DISCORD,
                              q.Z.Messages.BROWSER_NOTIFICATIONS_ENABLED_BODY,
                              { notif_type: 'NOTIFICATIONS_SET_PERMISSION_STATE' },
                              {
                                  omitViewTracking: !0,
                                  sound: X,
                                  volume: J,
                                  tag: 'hello',
                                  onClick: () => {
                                      window.focus();
                                  }
                              }
                          );
                  },
                  NOTIFICATION_CREATE: function (e) {
                      let { icon: t, title: n, body: i, trackingProps: l, options: o } = e;
                      return !en() && (k.Z.showNotification(t, n, i, l, o), !1);
                  },
                  WINDOW_FOCUS: function (e) {
                      if ((Q = e.focused)) {
                          let e = y.Z.getChannelId();
                          null != e && et.clearChannel(e);
                      }
                  },
                  MESSAGE_CREATE: function (e) {
                      var t, i, l, o;
                      let { channelId: s, message: a, optimistic: d } = e;
                      if (d) return !1;
                      let _ = p.Z.getChannel(s),
                          T = P.default.getUser(null === (t = a.author) || void 0 === t ? void 0 : t.id),
                          I = P.default.getCurrentUser();
                      if (null == _ || null == T || _.isBroadcastChannel()) return !1;
                      let f = (0, b.eF)(a, s, !Q),
                          N = M.Z.getNotifyMessagesInSelectedChannel() && (0, b.N_)(a, s);
                      if ((!f && !N) || (a.type === W.uaV.CHANGELOG && (null == a.changelog_id || E.Z.latestChangelogId() !== a.changelog_id))) return !1;
                      let A = !M.Z.isSoundDisabled(X),
                          O = H.ZP.canUseCustomNotificationSounds(I),
                          h = C.Y.getCurrentConfig({ location: 'NotificationStore' }).enabled,
                          v = O && h && A ? (null !== (o = (0, S.bb)(null !== (l = _.guild_id) && void 0 !== l ? l : W.aIL, s)) && void 0 !== o ? o : (0, S.iD)(_.guild_id)) : void 0;
                      if ((N && (A && Y.GN('message3', 0.4, void 0, v), !Q)) || !f) return !1;
                      let m = n(808506).Z,
                          D = n(237997).Z;
                      if (null != m.getFocusedPID() && D.getTextChatNotificationMode() === W.Ypu.ENABLED && !G.Z.disableNotifications) return !1;
                      let { icon: R, title: L, body: y } = (0, b.Xi)(_, a, T);
                      if (
                          (u.Z.dispatch({
                              type: 'RPC_NOTIFICATION_CREATE',
                              channelId: _.id,
                              message: a,
                              icon: R,
                              title: L,
                              body: y
                          }),
                          (0, g.R)(a, _.guild_id),
                          M.Z.getDesktopType() === W.qrD.NEVER)
                      )
                          return A && Y.GN(X, J, void 0, v), !1;
                      let U = k.Z.showNotification(
                          R,
                          L,
                          y,
                          {
                              notif_type: 'MESSAGE_CREATE',
                              notif_user_id: null === (i = a.author) || void 0 === i ? void 0 : i.id,
                              message_id: a.id,
                              message_type: a.type,
                              channel_id: _.id,
                              channel_type: _.type,
                              guild_id: _.guild_id
                          },
                          {
                              omitViewTracking: !0,
                              tag: a.id,
                              sound: A ? X : void 0,
                              soundpack: v,
                              volume: J,
                              onClick() {
                                  (0, Z.Kh)(_.id), (_.type === W.d4z.GUILD_VOICE || _.type === W.d4z.GUILD_STAGE_VOICE) && r.Z.updateChatOpen(_.id, !0), c.default.clickedNotification();
                              }
                          }
                      );
                      null != U && et.track(_.id, U);
                  },
                  CHANNEL_SELECT: function (e) {
                      let { channelId: t } = e;
                      return null != t && et.clearChannel(t), !1;
                  },
                  MESSAGE_ACK: function (e) {
                      let { channelId: t } = e;
                      return et.clearChannel(t), !1;
                  },
                  ACTIVITY_START: function (e) {
                      let { userId: t, activity: n } = e;
                      if (en()) return !1;
                      if (n.type === W.IIU.PLAYING) {
                          let e = P.default.getUser(t);
                          if (null == e) return !1;
                          let i = B.ZP.getName(e),
                              l = n.name,
                              o = e.getAvatarURL(void 0, 128),
                              s = q.Z.Messages.NOTIFICATION_TITLE_START_GAME,
                              u = q.Z.Messages.NOTIFICATION_BODY_START_GAME.format({
                                  username: i,
                                  gameName: l
                              });
                          return (
                              k.Z.showNotification(
                                  o,
                                  s,
                                  u,
                                  {
                                      notif_type: 'ACTIVITY_START',
                                      activity_type: W.IIU.PLAYING,
                                      notif_user_id: t,
                                      activity_name: l
                                  },
                                  {
                                      sound: 'message2',
                                      playSoundIfDisabled: !1,
                                      volume: 0.4,
                                      onClick() {
                                          a.Z.openPrivateChannel(t);
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
                      if (en()) return;
                      let n = P.default.getCurrentUser();
                      if (null == n) return;
                      let i = t.find((e) => e.userId === n.id);
                      if (null == i) return;
                      let { channelId: l, guildId: o, suppress: s, requestToSpeakTimestamp: u } = i;
                      if (null == l || null == o || !(!s && null != u)) return;
                      let a = D.Z.getGuild(o),
                          r = p.Z.getChannel(l),
                          d = h.Z.getStageInstanceByChannel(l);
                      null != a &&
                          null != r &&
                          null != d &&
                          k.Z.showNotification(
                              a.getIconURL(128),
                              r.name,
                              q.Z.Messages.STAGE_SPEAK_INVITE_PUSH_NOTIFICATION.format({
                                  channelName: (0, T.F6)(r, P.default, L.Z),
                                  channelTopic: null == d ? void 0 : d.topic
                              }),
                              { notif_type: 'Stage Speak Invite' },
                              {}
                          );
                  },
                  STAGE_INSTANCE_UPDATE: function (e) {
                      let { instance: t } = e;
                      if (en() || !t.send_start_notification || ei(t.channel_id)) return !1;
                      let n = P.default.getCurrentUser(),
                          i = D.Z.getGuild(t.guild_id),
                          o = p.Z.getChannel(t.channel_id),
                          s = P.default.getUser(t.host_id);
                      if (null == n || null == o || null == i || null == s || !(0, b.LL)(n, s, o) || !R.Z.can(l.$e(W.Plq.CONNECT, W.Plq.VIEW_CHANNEL), o) || j.has(t.id)) return !1;
                      j.add(t.id),
                          k.Z.showNotification(
                              i.getIconURL(128),
                              q.Z.Messages.STAGE_START_PUSH_NOTIFICATION_TITLE.format({ guildName: i.name }),
                              q.Z.Messages.STAGE_START_PUSH_NOTIFICATION_BODY.format({
                                  username: w.ZP.getName(i.id, o.id, s),
                                  topic: t.topic
                              }),
                              {
                                  notif_type: 'STAGE_INSTANCE_CREATE',
                                  guild_id: i.id,
                                  channel_id: o.id
                              },
                              {
                                  onClick() {
                                      (0, O.Cq)(o);
                                  }
                              }
                          );
                  },
                  STAGE_INSTANCE_DELETE: function (e) {
                      let { instance: t } = e;
                      j.delete(t.id);
                  },
                  GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
                      let { guildScheduledEvent: t } = e;
                      if (en() || null == t.notification_type) return !1;
                      t.notification_type === x.sy.EVENT_START &&
                          (t.entity_type === x.WX.STAGE_INSTANCE || t.entity_type === x.WX.VOICE
                              ? !(function (e) {
                                    if (en()) return !1;
                                    let t = e.channel_id;
                                    if (null == t || ei(t)) return !1;
                                    let n = P.default.getCurrentUser(),
                                        i = D.Z.getGuild(e.guild_id),
                                        o = p.Z.getChannel(e.channel_id),
                                        s = P.default.getUser(e.host_id);
                                    if (null == n || null == o || null == i || null == s || !R.Z.can(l.$e(W.Plq.CONNECT, W.Plq.VIEW_CHANNEL), o)) return !1;
                                    k.Z.showNotification(
                                        i.getIconURL(128),
                                        q.Z.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_TITLE.format({ guildName: i.name }),
                                        q.Z.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_BODY.format({
                                            topic: e.name,
                                            username: w.ZP.getName(i.id, o.id, s)
                                        }),
                                        {
                                            notif_type: 'GUILD_SCHEDULED_EVENT_UPDATE',
                                            guild_id: i.id,
                                            channel_id: o.id
                                        },
                                        {
                                            onClick() {
                                                e.entity_type === x.WX.STAGE_INSTANCE && (0, O.Cq)(o), e.entity_type === x.WX.VOICE && _.default.selectVoiceChannel(o.id);
                                            }
                                        }
                                    );
                                })(t)
                              : t.entity_type === x.WX.EXTERNAL &&
                                !(function (e) {
                                    if (en()) return !1;
                                    let t = P.default.getCurrentUser(),
                                        n = D.Z.getGuild(e.guild_id);
                                    if (null == t || null == n) return !1;
                                    k.Z.showNotification(
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
                      if (en()) return !1;
                      let l = p.Z.getChannel(n.parent_id);
                      if (null == l || !W.TPd.GUILD_THREADS_ONLY.has(l.type) || !i || !(0, b.FI)(n, l, !Q)) return !1;
                      let { author: o, user: s } = (0, I.MC)(n);
                      if (null == s) return !1;
                      let u = D.Z.getGuild(l.guild_id);
                      if (null == u) return !1;
                      let a = q.Z.Messages.FORUM_CHANNEL_THREAD_CREATED_PUSH_TITLE_MOBILE.format({
                              channelName: l.name,
                              guildName: u.name
                          }),
                          r = q.Z.Messages.FORUM_CHANNEL_THREAD_CREATED_PUSH_BODY_MOBILE.format({
                              channelName: n.name,
                              userUsername: null !== (t = null == o ? void 0 : o.nick) && void 0 !== t ? t : null == s ? void 0 : s.username
                          }),
                          d = s.getAvatarURL(void 0, 128);
                      k.Z.showNotification(
                          d,
                          a,
                          r,
                          {
                              notif_type: 'THREAD_CREATE',
                              notif_user_id: s.id
                          },
                          {
                              onClick() {
                                  (0, v.ok)(n);
                              }
                          }
                      );
                  },
                  GENERIC_PUSH_NOTIFICATION_SENT: function (e) {
                      let { icon: t, title: n, body: i, route: l, trackingType: o, tag: s } = e;
                      return (
                          !en() &&
                          null != n &&
                          null != i &&
                          null != o &&
                          (k.Z.showNotification(
                              t,
                              n,
                              i,
                              { notif_type: o },
                              {
                                  onClick() {
                                      null != l && (0, A.uL)(l);
                                  },
                                  tag: s
                              }
                          ),
                          !1)
                      );
                  },
                  WINDOW_HIDDEN: function () {
                      let e = (0, V.isWindows)(),
                          t = (0, V.isLinux)();
                      if (!(!s.K.get(K, !1) && V.isPlatformEmbedded && (e || t))) return !1;
                      let i = !1;
                      return (
                          null != $ && (i = ee.includes($)),
                          !!i &&
                              (k.Z.showNotification(
                                  n(95045),
                                  q.Z.Messages.NOTIFICATION_TITLE_DISCORD,
                                  q.Z.Messages.NOTIFICATION_BODY_DISCORD_HIDDEN,
                                  { notif_type: 'WINDOW_HIDDEN' },
                                  {
                                      overrideStreamerMode: !0,
                                      onClick: () => {
                                          (0, A.uL)(W.Z5c.SETTINGS(e ? 'windows' : 'linux'));
                                      },
                                      onShown: () => {
                                          s.K.set(K, !0);
                                      }
                                  }
                              ),
                              !1)
                      );
                  },
                  LOGOUT: function () {
                      return s.K.remove(K), !1;
                  },
                  CONNECTION_OPEN: function (e) {
                      let { countryCode: t, guilds: n } = e;
                      ($ = t), j.clear(), n.forEach((e) => e.stage_instances.forEach((e) => j.add(e.id)));
                  }
              }
    );
