e.d(n, {
    Ay: function () {
        return j;
    },
    yk: function () {
        return Q;
    }
}),
    e(47120),
    e(653041);
var i,
    l = e(149765),
    o = e(442837),
    a = e(433517),
    u = e(570140),
    r = e(493683),
    s = e(475179),
    d = e(749210),
    c = e(292556),
    f = e(287734),
    g = e(802098),
    E = e(933557),
    _ = e(456269),
    N = e(15274),
    h = e(754688),
    I = e(336197),
    p = e(355298),
    T = e(601992),
    S = e(11352),
    C = e(671105),
    v = e(106371),
    m = e(703656),
    Z = e(359110),
    A = e(922482),
    y = e(427679),
    P = e(488131),
    R = e(695346),
    b = e(592125),
    D = e(430824),
    O = e(292959),
    U = e(496675),
    G = e(699516),
    L = e(944486),
    w = e(885110),
    k = e(246946),
    M = e(594174),
    F = e(979651),
    V = e(5192),
    W = e(150097),
    H = e(912101),
    x = e(358085),
    q = e(74538),
    z = e(557177),
    Y = e(51144),
    B = e(981631),
    X = e(765305),
    J = e(388032);
function K(t, n, e) {
    return (
        n in t
            ? Object.defineProperty(t, n, {
                  value: e,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[n] = e),
        t
    );
}
let j = 'message1',
    Q = 0.4,
    $ = 'discord_dismissed_notification_shown',
    tt = document.hasFocus(),
    tn = null,
    te = new Set(),
    ti = ['FR', 'GF', 'PF', 'TF', 'RE', 'GP', 'MQ', 'YT', 'NC', 'PM', 'WF'],
    tl = new (class {
        track(t, n) {
            let e = this._channels[t];
            for (null == e && ((e = []), (this._channels[t] = e)), e.push(n); e.length > 1; ) {
                let t = e.shift();
                null != t && null != t.close && t.close();
            }
        }
        clearChannel(t) {
            let n = this._channels[t];
            null != n && (delete this._channels[t], n.forEach((t) => t.close()));
        }
        constructor() {
            K(this, '_channels', {});
        }
    })();
function to() {
    return !!(O.Z.getDesktopType() === B.qrD.NEVER || w.Z.getStatus() === B.Skl.DND || R.QZ.getSetting()) || !1;
}
function ta(t) {
    return null != F.Z.getVoiceStateForChannel(t);
}
class tu extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(M.default, b.Z, O.Z, D.Z, y.Z, G.Z, U.Z, F.Z, p.Z);
    }
}
K(tu, 'displayName', 'NotificationStore'),
    new tu(
        u.Z,
        __OVERLAY__
            ? {}
            : {
                  NOTIFICATIONS_SET_PERMISSION_STATE: function (t) {
                      let { enabled: n } = t;
                      n === B.$Ab.ENABLED &&
                          !x.isPlatformEmbedded &&
                          H.Z.showNotification(
                              e(185672),
                              J.intl.string(J.t.VSgOVl),
                              J.intl.string(J.t['1UJvqa']),
                              { notif_type: 'NOTIFICATIONS_SET_PERMISSION_STATE' },
                              {
                                  omitViewTracking: !0,
                                  sound: j,
                                  volume: Q,
                                  tag: 'hello',
                                  onClick: () => {
                                      window.focus();
                                  }
                              }
                          );
                  },
                  NOTIFICATION_CREATE: function (t) {
                      let { icon: n, title: e, body: i, trackingProps: l, options: o } = t;
                      return !to() && (H.Z.showNotification(n, e, i, l, o), !1);
                  },
                  WINDOW_FOCUS: function (t) {
                      if ((tt = t.focused)) {
                          let t = L.Z.getChannelId();
                          null != t && tl.clearChannel(t);
                      }
                  },
                  MESSAGE_CREATE: function (t) {
                      var n, i, l, o;
                      let { channelId: a, message: r, optimistic: d } = t;
                      if (d) return !1;
                      let f = b.Z.getChannel(a),
                          E = M.default.getUser(null === (n = r.author) || void 0 === n ? void 0 : n.id),
                          _ = M.default.getCurrentUser();
                      if (null == f || null == E) return !1;
                      let N = (0, W.eF)(r, a, !tt),
                          h = O.Z.getNotifyMessagesInSelectedChannel() && (0, W.N_)(r, a);
                      if ((!N && !h) || (r.type === B.uaV.CHANGELOG && (null == r.changelog_id || g.Z.latestChangelogId() !== r.changelog_id))) return !1;
                      let I = !O.Z.isSoundDisabled(j),
                          p = q.ZP.canUseCustomNotificationSounds(_),
                          v = S.Y.getCurrentConfig({ location: 'NotificationStore' }).enabled,
                          m = p && v && I ? (null !== (o = (0, C.bb)(null !== (l = f.guild_id) && void 0 !== l ? l : B.aIL, a)) && void 0 !== o ? o : (0, C.iD)(f.guild_id)) : void 0;
                      if ((h && (I && z.GN('message3', 0.4, void 0, m), !tt)) || !N) return !1;
                      let A = e(808506).Z,
                          y = e(237997).Z;
                      if (null != A.getFocusedPID() && y.getTextChatNotificationMode() === B.Ypu.ENABLED && !k.Z.disableNotifications) return !1;
                      let { icon: P, title: R, body: D } = (0, W.Xi)(f, r, E);
                      if (
                          (u.Z.dispatch({
                              type: 'RPC_NOTIFICATION_CREATE',
                              channelId: f.id,
                              message: r,
                              icon: P,
                              title: R,
                              body: D
                          }),
                          (0, T.R)(r, f.guild_id),
                          O.Z.getDesktopType() === B.qrD.NEVER)
                      )
                          return I && z.GN(j, Q, void 0, m), !1;
                      let U = H.Z.showNotification(
                          P,
                          R,
                          D,
                          {
                              notif_type: 'MESSAGE_CREATE',
                              notif_user_id: null === (i = r.author) || void 0 === i ? void 0 : i.id,
                              message_id: r.id,
                              message_type: r.type,
                              channel_id: f.id,
                              channel_type: f.type,
                              guild_id: f.guild_id
                          },
                          {
                              omitViewTracking: !0,
                              tag: r.id,
                              sound: I ? j : void 0,
                              soundpack: m,
                              volume: Q,
                              onClick() {
                                  (0, Z.Kh)(f.id), (f.type === B.d4z.GUILD_VOICE || f.type === B.d4z.GUILD_STAGE_VOICE) && s.Z.updateChatOpen(f.id, !0), c.default.clickedNotification();
                              }
                          }
                      );
                      null != U && tl.track(f.id, U);
                  },
                  CHANNEL_SELECT: function (t) {
                      let { channelId: n } = t;
                      return null != n && tl.clearChannel(n), !1;
                  },
                  MESSAGE_ACK: function (t) {
                      let { channelId: n } = t;
                      return tl.clearChannel(n), !1;
                  },
                  ACTIVITY_START: function (t) {
                      let { userId: n, activity: e } = t;
                      if (to()) return !1;
                      if (e.type === B.IIU.PLAYING) {
                          let t = M.default.getUser(n);
                          if (null == t) return !1;
                          let i = Y.ZP.getName(t),
                              l = e.name,
                              o = t.getAvatarURL(void 0, 128),
                              a = J.intl.string(J.t.XoTWsL),
                              u = J.intl.formatToPlainString(J.t.o4Aipq, {
                                  username: i,
                                  gameName: l
                              });
                          return (
                              H.Z.showNotification(
                                  o,
                                  a,
                                  u,
                                  {
                                      notif_type: 'ACTIVITY_START',
                                      activity_type: B.IIU.PLAYING,
                                      notif_user_id: n,
                                      activity_name: l
                                  },
                                  {
                                      sound: 'message2',
                                      playSoundIfDisabled: !1,
                                      volume: 0.4,
                                      onClick() {
                                          r.Z.openPrivateChannel(n);
                                      }
                                  }
                              ),
                              !1
                          );
                      }
                      return !1;
                  },
                  VOICE_STATE_UPDATES: function (t) {
                      let { voiceStates: n } = t;
                      if (to()) return;
                      let e = M.default.getCurrentUser();
                      if (null == e) return;
                      let i = n.find((t) => t.userId === e.id);
                      if (null == i) return;
                      let { channelId: l, guildId: o, suppress: a, requestToSpeakTimestamp: u } = i;
                      if (null == l || null == o || !(!a && null != u)) return;
                      let r = D.Z.getGuild(o),
                          s = b.Z.getChannel(l),
                          d = y.Z.getStageInstanceByChannel(l);
                      null != r &&
                          null != s &&
                          null != d &&
                          H.Z.showNotification(
                              r.getIconURL(128),
                              s.name,
                              J.intl.formatToPlainString(J.t.sqnsSE, {
                                  channelName: (0, E.F6)(s, M.default, G.Z),
                                  channelTopic: null == d ? void 0 : d.topic
                              }),
                              { notif_type: 'Stage Speak Invite' },
                              {}
                          );
                  },
                  STAGE_INSTANCE_UPDATE: function (t) {
                      let { instance: n } = t;
                      if (to() || !n.send_start_notification || ta(n.channel_id)) return !1;
                      let e = M.default.getCurrentUser(),
                          i = D.Z.getGuild(n.guild_id),
                          o = b.Z.getChannel(n.channel_id),
                          a = M.default.getUser(n.host_id);
                      if (null == e || null == o || null == i || null == a || !(0, W.LL)(e, a, o) || !U.Z.can(l.$e(B.Plq.CONNECT, B.Plq.VIEW_CHANNEL), o) || te.has(n.id)) return !1;
                      te.add(n.id),
                          H.Z.showNotification(
                              i.getIconURL(128),
                              J.intl.formatToPlainString(J.t.bZ4OkZ, { guildName: i.name }),
                              J.intl.formatToPlainString(J.t.qTelnJ, {
                                  username: V.ZP.getName(i.id, o.id, a),
                                  topic: n.topic
                              }),
                              {
                                  notif_type: 'STAGE_INSTANCE_CREATE',
                                  guild_id: i.id,
                                  channel_id: o.id
                              },
                              {
                                  onClick() {
                                      (0, A.Cq)(o);
                                  }
                              }
                          );
                  },
                  STAGE_INSTANCE_DELETE: function (t) {
                      let { instance: n } = t;
                      te.delete(n.id);
                  },
                  GUILD_SCHEDULED_EVENT_UPDATE: function (t) {
                      let { guildScheduledEvent: n } = t;
                      if (to() || null == n.notification_type) return !1;
                      n.notification_type === X.sy.EVENT_START &&
                          (n.entity_type === X.WX.STAGE_INSTANCE || n.entity_type === X.WX.VOICE
                              ? !(function (t) {
                                    if (to()) return !1;
                                    let n = t.channel_id;
                                    if (null == n || ta(n)) return !1;
                                    let e = M.default.getCurrentUser(),
                                        i = D.Z.getGuild(t.guild_id),
                                        o = b.Z.getChannel(t.channel_id),
                                        a = M.default.getUser(t.host_id);
                                    if (null == e || null == o || null == i || null == a || !U.Z.can(l.$e(B.Plq.CONNECT, B.Plq.VIEW_CHANNEL), o)) return !1;
                                    H.Z.showNotification(
                                        i.getIconURL(128),
                                        J.intl.formatToPlainString(J.t.bOu6Wl, { guildName: i.name }),
                                        J.intl.formatToPlainString(J.t.GV9L8v, {
                                            topic: t.name,
                                            username: V.ZP.getName(i.id, o.id, a)
                                        }),
                                        {
                                            notif_type: 'GUILD_SCHEDULED_EVENT_UPDATE',
                                            guild_id: i.id,
                                            channel_id: o.id
                                        },
                                        {
                                            onClick() {
                                                t.entity_type === X.WX.STAGE_INSTANCE && (0, A.Cq)(o), t.entity_type === X.WX.VOICE && f.default.selectVoiceChannel(o.id);
                                            }
                                        }
                                    );
                                })(n)
                              : n.entity_type === X.WX.EXTERNAL &&
                                !(function (t) {
                                    if (to()) return !1;
                                    let n = M.default.getCurrentUser(),
                                        e = D.Z.getGuild(t.guild_id);
                                    if (null == n || null == e) return !1;
                                    H.Z.showNotification(
                                        e.getIconURL(128),
                                        J.intl.formatToPlainString(J.t.bOu6Wl, { guildName: e.name }),
                                        J.intl.formatToPlainString(J.t.mYyaRE, { topic: t.name }),
                                        {
                                            notif_type: 'GUILD_SCHEDULED_EVENT_UPDATE',
                                            guild_id: e.id
                                        },
                                        {
                                            onClick() {
                                                d.Z.transitionToGuildSync(t.guild_id), (0, N.bO)({ eventId: t.id });
                                            }
                                        }
                                    );
                                })(n));
                  },
                  THREAD_CREATE: function (t) {
                      var n;
                      let { channel: e, isNewlyCreated: i } = t;
                      if (to()) return !1;
                      let l = b.Z.getChannel(e.parent_id);
                      if (null == l || !B.TPd.GUILD_THREADS_ONLY.has(l.type) || !i || !(0, W.FI)(e, l, !tt)) return !1;
                      let { author: o, user: a } = (0, _.MC)(e);
                      if (null == a) return !1;
                      let u = D.Z.getGuild(l.guild_id);
                      if (null == u) return !1;
                      let r = J.intl.formatToPlainString(J.t['2IGVl5'], {
                              channelName: l.name,
                              guildName: u.name
                          }),
                          s = J.intl.formatToPlainString(J.t.jPhTvb, {
                              channelName: e.name,
                              userUsername: null !== (n = null == o ? void 0 : o.nick) && void 0 !== n ? n : null == a ? void 0 : a.username
                          }),
                          d = a.getAvatarURL(void 0, 128);
                      H.Z.showNotification(
                          d,
                          r,
                          s,
                          {
                              notif_type: 'THREAD_CREATE',
                              notif_user_id: a.id
                          },
                          {
                              onClick() {
                                  (0, P.ok)(e);
                              }
                          }
                      );
                  },
                  GENERIC_PUSH_NOTIFICATION_SENT: function (t) {
                      let n,
                          { icon: e, title: i, body: l, route: o, trackingType: a, tag: u } = t;
                      if (to() || null == i || null == l || null == a) return !1;
                      if ('reactions_push_notification' === a) {
                          var r;
                          let { enableInAppNotifications: t } = v.Z.getCurrentConfig({ location: 'desktopNotification' }, { autoTrackExposure: !0 });
                          if (!t) return !1;
                          let e =
                              null !== (r = (0, h.Qj)(o)) && void 0 !== r
                                  ? r
                                  : {
                                        channelId: null,
                                        guildId: null
                                    };
                          if (null == (n = e.channelId) || null == e.guildId || (L.Z.getCurrentlySelectedChannelId() === n && tt)) return !1;
                      }
                      let s = H.Z.showNotification(
                          e,
                          i,
                          l,
                          { notif_type: a },
                          {
                              onClick() {
                                  null != o && ((0, I.Z)(o), c.default.clickedNotification());
                              },
                              tag: u
                          }
                      );
                      null != s && null != n && tl.track(n, s);
                  },
                  WINDOW_HIDDEN: function () {
                      let t = (0, x.isWindows)(),
                          n = (0, x.isLinux)();
                      if (!(!a.K.get($, !1) && x.isPlatformEmbedded && (t || n))) return !1;
                      let i = !1;
                      return (
                          null != tn && (i = ti.includes(tn)),
                          !!i &&
                              (H.Z.showNotification(
                                  e(95045),
                                  J.intl.string(J.t.VSgOVl),
                                  J.intl.string(J.t['+J/F6+']),
                                  { notif_type: 'WINDOW_HIDDEN' },
                                  {
                                      overrideStreamerMode: !0,
                                      onClick: () => {
                                          (0, m.uL)(B.Z5c.SETTINGS(t ? 'windows' : 'linux'));
                                      },
                                      onShown: () => {
                                          a.K.set($, !0);
                                      }
                                  }
                              ),
                              !1)
                      );
                  },
                  LOGOUT: function () {
                      return a.K.remove($), !1;
                  },
                  CONNECTION_OPEN: function (t) {
                      let { countryCode: n, guilds: e } = t;
                      (tn = n), te.clear(), e.forEach((t) => t.stage_instances.forEach((t) => te.add(t.id)));
                  },
                  MESSAGE_REMINDER_DUE: function (t) {
                      let { savedMessage: n } = t;
                      if (to()) return !1;
                      let e = n.message;
                      if (null == e || null == e.author) return !1;
                      let i = b.Z.getChannel(n.saveData.channelId);
                      if (null == i) return !1;
                      let { icon: l, body: o } = (0, W.Xi)(i, e, e.author);
                      H.Z.showNotification(
                          l,
                          J.intl.string(J.t.IjZJBw),
                          o,
                          { notif_type: 'MESSAGE_REMINDER_DUE' },
                          {
                              onClick() {
                                  (0, I.Z)(B.Z5c.CHANNEL(null == i ? void 0 : i.getGuildId(), i.id, e.id));
                              }
                          }
                      );
                  }
              }
    );
