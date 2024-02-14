"use strict";
n.r(t), n.d(t, {
  getGameName: function() {
    return S
  },
  startBroadcastForStream: function() {
    return h
  },
  stopBroadcast: function() {
    return C
  },
  fetchBroadcasterBuckets: function() {
    return p
  },
  maybeFetchBroadcastChannels: function() {
    return m
  }
});
var a = n("872717"),
  r = n("913144"),
  s = n("374014"),
  i = n("766274"),
  l = n("271938"),
  u = n("42203"),
  o = n("546463"),
  d = n("568307"),
  c = n("9759"),
  f = n("194051"),
  E = n("49111");

function S(e) {
  var t;
  let n = null !== (t = null == e ? void 0 : e.gameName) && void 0 !== t ? t : null == e ? void 0 : e.name;
  return null != n ? n.trim() : null
}

function h(e, t) {
  if (null == t) return;
  let {
    canBroadcast: n
  } = c.default.getCurrentConfig({
    location: "start_broadcast_for_stream"
  }, {
    autoTrackExposure: !1
  });
  if (!n) return;
  let a = (0, s.decodeStreamKey)(e),
    {
      ownerId: i,
      channelId: f
    } = a;
  if (null == i || null == f) return;
  let E = l.default.getId();
  if (i !== E) return;
  let h = l.default.getSessionId();
  if (null == h) return;
  let C = u.default.getChannel(f),
    _ = null != C && C.isBroadcastChannel();
  if (null == C || i !== C.ownerId || !_) return;
  let p = function(e) {
    var t;
    let n = d.default.getGameForPID(e),
      a = S(n),
      r = o.default.getGameByName(a);
    return null !== (t = null == r ? void 0 : r.id) && void 0 !== t ? t : "0"
  }(t);
  null != p && ! function(e) {
    let t = l.default.getId(),
      n = l.default.getSessionId();
    null != t && null != n && r.default.dispatch({
      type: "BROADCAST_START",
      broadcast: e
    })
  }({
    sessionId: h,
    userId: E,
    applicationId: p,
    channelId: C.id,
    streamKey: e
  })
}

function C() {
  r.default.dispatch({
    type: "BROADCAST_STOP"
  })
}

function _(e) {
  let t = {};
  e.forEach(e => {
    t[e] = -1
  }), r.default.dispatch({
    type: "BROADCASTER_BUCKETS_RECEIVED",
    data: t
  })
}
async function p() {
  let e = f.default.getUserIdsToValidate();
  try {
    let t = await a.default.get({
      url: E.Endpoints.USER_BROADCASTS,
      query: {
        user_ids: e
      }
    });
    if (t.ok && null != t.body) {
      let n = {};
      e.forEach(e => {
        var a;
        n[e] = null !== (a = t.body[e]) && void 0 !== a ? a : -1
      }), r.default.dispatch({
        type: "BROADCASTER_BUCKETS_RECEIVED",
        data: n
      })
    } else _(e)
  } catch (t) {
    _(e)
  }
}
async function m() {
  let e = f.default.getBroadcastsToValidateChannels(),
    t = e.filter(e => null == e.viewers).map(e => e.channelId);
  if (0 !== t.length) try {
    let e = await a.default.get({
      url: E.Endpoints.BROADCAST_CHANNELS,
      query: {
        channel_ids: t
      }
    });
    if (e.ok && null != e.body) {
      let t = e.body,
        n = {};
      t.forEach(e => {
        var t;
        let a = f.default.getBroadcastByChannel(e.id).userId,
          r = null !== (t = e.recipients) && void 0 !== t ? t : [];
        n[a] = r.map(e => new i.default(e)).filter(e => e.id !== a)
      }), r.default.dispatch({
        type: "BROADCAST_VIEWERS_UPDATE",
        viewers: n
      })
    }
  } catch (e) {}
}