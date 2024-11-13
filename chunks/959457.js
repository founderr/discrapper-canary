let r, i;
n(653041);
var a,
    s,
    o,
    l,
    u = n(512722),
    c = n.n(u),
    d = n(392711),
    f = n.n(d),
    _ = n(442837),
    p = n(46973),
    h = n(570140),
    m = n(594190),
    g = n(444852),
    E = n(569545),
    v = n(687516),
    I = n(139656),
    b = n(358085),
    S = n(199902),
    T = n(314897),
    y = n(131951),
    A = n(158776),
    N = n(19780),
    C = n(981631),
    R = n(65154);
let O = {},
    D = {},
    L = {},
    x = {},
    w = C.hVg.THEATRE,
    M = {},
    P = [];
function k() {
    f().forEach(M, (e, t) => {
        e.destroy(e.isOwner ? 'sender-disconnect' : 'receiver-disconnect'), delete M[t];
    });
}
function U(e) {
    f().forEach(M, (t, n) => {
        t.updateStats(e);
    }),
        e
            .filter((e) => {
                let { connection: t } = e;
                return t.context === R.Yn.STREAM;
            })
            .forEach((e) => {
                let { stats: t } = e;
                h.Z.dispatch({
                    type: 'STREAM_STATS_UPDATE',
                    stats: t
                });
            });
}
function G() {
    return !0;
}
class B extends (a = _.ZP.Store) {
    getActiveStreamKey() {
        return (0, I.Z)(y.Z) ? i : null;
    }
    getRTCConnections() {
        return M;
    }
    getAllActiveStreamKeys() {
        return Object.keys(M);
    }
    getRTCConnection(e) {
        return M[e];
    }
    getStatsHistory(e, t, n) {
        if (!(0, I.Z)(y.Z) || null == t) return null;
        if (n) {
            let n = S.Z.getActiveStreamForUser(t, e);
            if (null == n || 0 === S.Z.getViewerIds(n).length) return null;
        }
        return P.map((e) =>
            n
                ? (function (e) {
                      var t, n, r, i, a;
                      let s = e.find((e) => 'video' === e.type);
                      return null != s && 'video' === s.type
                          ? {
                                type: 'streamer',
                                packetsSentOrReceived: null !== (n = s.packetsSent) && void 0 !== n ? n : 0,
                                packetsLost: null !== (r = s.packetsLost) && void 0 !== r ? r : 0,
                                frameRate: null !== (i = s.frameRateEncode) && void 0 !== i ? i : 0,
                                resolution: null !== (a = null === (t = s.resolution) || void 0 === t ? void 0 : t.height) && void 0 !== a ? a : 0,
                                bitrate: 0
                            }
                          : null;
                  })(e.rtp.outbound)
                : (function (e) {
                      var t, n, r, i, a, s;
                      if (null == e) return null;
                      let o = e.find((e) => 'video' === e.type);
                      return null != o && 'video' === o.type
                          ? {
                                type: 'spectator',
                                packetsSentOrReceived: null !== (n = o.packetsReceived) && void 0 !== n ? n : 0,
                                packetsLost: null !== (r = o.packetsLost) && void 0 !== r ? r : 0,
                                frameRate: null !== (i = o.frameRateDecode) && void 0 !== i ? i : 0,
                                bitrate: null !== (a = o.bitrate) && void 0 !== a ? a : 0,
                                resolution: null !== (s = null === (t = o.resolution) || void 0 === t ? void 0 : t.height) && void 0 !== s ? s : 0
                            }
                          : null;
                  })(e.rtp.inbound[t])
        );
    }
    getQuality() {
        if (!(0, I.Z)(y.Z)) return C.IE4.UNKNOWN;
        let e = this.getActiveStreamKey(),
            t = null != e ? M[e] : null;
        return null != t ? t.quality : C.IE4.UNKNOWN;
    }
    getMediaSessionId(e) {
        if (null == e) return null;
        let t = M[e];
        if (null != t) return null != t ? t.getMediaSessionId() : null;
    }
    getRtcConnectionId(e) {
        if (null == e) return null;
        let t = M[e];
        if (null != t) return null != t ? t.getRTCConnectionId() : null;
    }
    getVideoStats(e) {
        if (null == e) return null;
        let t = M[e];
        return null != t ? t.getVideoStats() : null;
    }
    getHostname(e) {
        if (null == e) return '';
        let t = M[e];
        return null != t ? (null != t.hostname ? t.hostname : '') : '';
    }
    getRegion(e) {
        if (null == e) return null;
        let t = M[e];
        return null != t ? t.getRegion() : null;
    }
    getMaxViewers(e) {
        if (null == e) return null;
        let t = M[e];
        return null != t ? t.getMaxViewers() : null;
    }
    getStreamSourceId(e) {
        return x[e];
    }
    getUserIds(e) {
        let t = M[e];
        return null == t ? void 0 : t.getUserIds();
    }
    isUserConnected(e, t) {
        let n = M[e];
        return null == n ? void 0 : n.getIsUserConnected(t);
    }
    getSecureFramesState(e) {
        let t = M[e];
        return null == t ? void 0 : t.getSecureFramesState();
    }
    getSecureFramesRosterMapEntry(e, t) {
        let n = M[e],
            r = null == n ? void 0 : n.getSecureFramesRosterMap();
        return null == r ? void 0 : r.get(t);
    }
}
(l = 'StreamRTCConnectionStore'),
    (o = 'displayName') in (s = B)
        ? Object.defineProperty(s, o, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[o] = l),
    (t.Z = new B(
        h.Z,
        !y.Z.isSupported() || __OVERLAY__
            ? {}
            : {
                  CONNECTION_OPEN: function (e) {
                      (r = e.sessionId), (i = null), k();
                  },
                  CONNECTION_CLOSED: function () {
                      (r = null), (i = null), k();
                  },
                  RTC_CONNECTION_STATE: G,
                  RTC_CONNECTION_PING: G,
                  RTC_CONNECTION_LOSS_RATE: G,
                  RTC_CONNECTION_UPDATE_ID: function (e) {
                      return f().some(M, (t) => t === e.connection);
                  },
                  RTC_CONNECTION_SECURE_FRAMES_UPDATE: G,
                  STREAM_START: function (e) {
                      let { streamType: t, guildId: n, channelId: r, appContext: i, pid: a, sourceId: s } = e,
                          o = (0, E.V9)({
                              streamType: t,
                              guildId: n,
                              channelId: r,
                              ownerId: T.default.getId()
                          });
                      if (
                          ((O[o] = i),
                          f().forEach(M, (e) => {
                              let { analyticsContext: t } = e;
                              t.setActionContext(i);
                          }),
                          (x[o] = s),
                          (L[o] = a),
                          null != a)
                      ) {
                          let e = m.ZP.getGameForPID(a);
                          null != e &&
                              (D[o] = {
                                  name: e.name,
                                  id: e.id,
                                  exe: e.exeName,
                                  distributor: e.distributor
                              });
                      }
                  },
                  STREAM_STOP: function (e) {
                      let { appContext: t, streamKey: n } = e;
                      (O[n] = t),
                          f().forEach(M, (e) => {
                              let { analyticsContext: n } = e;
                              n.setActionContext(t);
                          }),
                          (x[n] = null),
                          (L[n] = null);
                  },
                  STREAM_CREATE: function (e) {
                      let { streamKey: t, rtcServerId: n, region: a, viewerIds: s } = e;
                      i = t;
                      let o = M[t];
                      if (null == o && null != n) {
                          var l, u, d;
                          null == L[t] && (D[t] = null);
                          let e = (0, E.my)(t);
                          null == D[t] && null == x[t] && (D[t] = (0, v.L2)(e, A.Z));
                          let i = new g.A({
                              streamRegion: a,
                              streamApplication: D[t],
                              streamSourceType: (function (e) {
                                  var t, n, r;
                                  if (null == e) return 'unknown';
                                  if (b.isPlatformEmbedded || (null === (t = platform) || void 0 === t ? void 0 : t.name) === 'Chrome') {
                                      if (e.startsWith('web-contents-media-stream:')) return 'tab';
                                      if (e.startsWith('window:')) return 'window';
                                      else if (e.startsWith('screen:')) return 'screen';
                                  } else if ((null === (n = platform) || void 0 === n ? void 0 : n.name) === 'Firefox') return '' !== e ? 'window' : 'screen';
                                  else if ((null === (r = platform) || void 0 === r ? void 0 : r.name) === 'Safari') return 'window';
                                  return 'unknown';
                              })(x[t]),
                              actionContext: O[t],
                              numViewers: null != s ? s.length : 0
                          });
                          (l = t),
                              (u = n),
                              (d = i),
                              c()(null != r, 'Creating RTCConnection without session.'),
                              (o = new g.Z({
                                  sessionId: r,
                                  streamKey: l,
                                  serverId: u,
                                  initialLayout: w,
                                  analyticsContext: d,
                                  isStreamer: null != D[l],
                                  parentMediaSessionId: N.Z.getMediaSessionId()
                              })),
                              (M[t] = o);
                      }
                      (P = []), y.Z.getMediaEngine().on(p.aB.ConnectionStats, U);
                  },
                  STREAM_SERVER_UPDATE: function (e) {
                      let t = M[e.streamKey];
                      if (null == t) return !1;
                      t.connect(e.endpoint, e.token);
                  },
                  STREAM_UPDATE: function (e) {
                      let { streamKey: t, viewerIds: n, paused: r } = e,
                          i = M[t];
                      if (null == i) return !1;
                      null != n && i.analyticsContext.trackViewerCount(n.length), i.streamUpdate(r);
                  },
                  STREAM_DELETE: function (e) {
                      let { streamKey: t } = e,
                          n = M[t];
                      if (null == n) return !1;
                      t === i && ((i = null), y.Z.getMediaEngine().off(p.aB.ConnectionStats, U)), n.destroy('stream-end'), delete M[t];
                  },
                  STREAM_STATS_UPDATE: function (e) {
                      let { stats: t } = e;
                      if (null == t) return !1;
                      P.push(t), P.length > 30 && P.shift();
                  },
                  STREAM_LAYOUT_UPDATE: function (e) {
                      let { layout: t } = e;
                      (w = t), Object.values(M).forEach((e) => e.layoutChange(t));
                  },
                  RTC_DEBUG_SET_SIMULCAST_OVERRIDE: function (e) {
                      let { userId: t, context: n, quality: r } = e;
                      f().forEach(M, (e) => {
                          e.setSimulcastDebugOverride(t, n, r);
                      });
                  }
              }
    ));
