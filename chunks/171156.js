"use strict";
s.r(t), s("653041"), s("47120");
var a, n, l, i, r = s("442837"),
  o = s("544891"),
  d = s("570140"),
  u = s("710845"),
  c = s("314897"),
  S = s("131951"),
  E = s("866960"),
  T = s("936349"),
  _ = s("979651"),
  f = s("622414"),
  m = s("42955"),
  g = s("399002"),
  I = s("369541"),
  N = s("981631"),
  h = s("65154");
new u.default("RTCSpeedTestStore");
let C = [{
    clusterSize: 40,
    clusterIntervalMs: 20,
    numClusters: 1500,
    direction: I.SpeedTestDirections.CLIENT_TO_SERVER
  }, {
    clusterSize: 40,
    clusterIntervalMs: 20,
    numClusters: 1500,
    direction: I.SpeedTestDirections.SERVER_TO_CLIENT
  }, {
    clusterSize: 160,
    clusterIntervalMs: 20,
    numClusters: 1500,
    direction: I.SpeedTestDirections.CLIENT_TO_SERVER
  }, {
    clusterSize: 160,
    clusterIntervalMs: 20,
    numClusters: 1500,
    direction: I.SpeedTestDirections.SERVER_TO_CLIENT
  }, {
    clusterSize: 4125,
    clusterIntervalMs: 33,
    numClusters: 455,
    direction: I.SpeedTestDirections.CLIENT_TO_SERVER
  }, {
    clusterSize: 4125,
    clusterIntervalMs: 33,
    numClusters: 455,
    direction: I.SpeedTestDirections.SERVER_TO_CLIENT
  }, {
    clusterSize: 17e3,
    clusterIntervalMs: 17,
    numClusters: 295,
    direction: I.SpeedTestDirections.CLIENT_TO_SERVER
  }, {
    clusterSize: 17e3,
    clusterIntervalMs: 17,
    numClusters: 295,
    direction: I.SpeedTestDirections.SERVER_TO_CLIENT
  }],
  A = C.length,
  p = {
    running: !1,
    region: null,
    endpoint: null,
    connection: null,
    rtcServerId: null,
    connected: !1,
    currentTest: null,
    failed: !1,
    lifecycle: I.SpeedTestLifecycles.INACTIVE,
    results: [],
    pings: [],
    notes: ""
  };

function O(e, t, s) {
  e === N.RTCConnectionStates.RTC_CONNECTED ? p.connected = !0 : (e === N.RTCConnectionStates.DISCONNECTED || e === N.RTCConnectionStates.RTC_DISCONNECTED) && (p.lifecycle === I.SpeedTestLifecycles.TESTING && (p.failed = !0, j(), U()), p.connected = !1)
}

function R() {
  p.lifecycle === I.SpeedTestLifecycles.TESTING && (p.failed = !0, j(), U())
}

function x() {
  if (p.lifecycle === I.SpeedTestLifecycles.CONNECTING) {
    var e;
    P(I.SpeedTestLifecycles.PINGING), null === (e = p.connection) || void 0 === e || e.setPingInterval(500), L()
  }
}

function M(e, t) {
  if (null != p.currentTest) !0 !== p.failed && (p.currentTest = p.currentTest + 1, p.results.push({
    payload: e,
    summary: t
  }), p.currentTest === A ? (P(I.SpeedTestLifecycles.UPLOADING), U()) : b())
}

function v(e) {
  void 0 !== e && p.pings.length < 10 && (p.pings.push(e), p.pings.length < 10 && P(I.SpeedTestLifecycles.PINGING), L())
}

function L() {
  if (p.lifecycle === I.SpeedTestLifecycles.PINGING && 10 === p.pings.length) {
    var e;
    null === (e = p.connection) || void 0 === e || e.setPingInterval(5e3), p.currentTest = 0, b()
  }
}

function D() {
  if (null == p.connection) return !1;
  p.connection.destroy(), p.connection = null
}

function P(e) {
  p.lifecycle = e, d.default.dispatch({
    type: "RTC_SPEED_TEST_STATE_UPDATE",
    lifecycle: e
  })
}

function b() {
  var e, t;
  null !== p.currentTest && (C[p.currentTest].direction === I.SpeedTestDirections.CLIENT_TO_SERVER ? null === (e = p.connection) || void 0 === e || e.startClientToServerSpeedTest(C[p.currentTest]) : C[p.currentTest].direction === I.SpeedTestDirections.SERVER_TO_CLIENT && (null === (t = p.connection) || void 0 === t || t.startServerToClientSpeedTest(C[p.currentTest])), P(I.SpeedTestLifecycles.TESTING))
}

function j() {
  if (p.lifecycle === I.SpeedTestLifecycles.TESTING && null != p.currentTest) {
    var e, t;
    C[p.currentTest].direction === I.SpeedTestDirections.CLIENT_TO_SERVER ? null === (e = p.connection) || void 0 === e || e.stopClientToServerSpeedTest() : null === (t = p.connection) || void 0 === t || t.stopServerToClientSpeedTest()
  }
}
async function U() {
  var e, t;
  let s = new Date().toISOString(),
    a = {
      date: s,
      endpoint: p.endpoint,
      networkOverhead: null === (e = p.connection) || void 0 === e ? void 0 : e.getNetworkOverhead(),
      networkType: E.default.getType(),
      networkEffectiveConnectionSpeed: E.default.getEffectiveConnectionSpeed(),
      networkServiceProvider: null !== (t = E.default.getServiceProvider()) && void 0 !== t ? t : "unknown",
      notes: p.notes
    },
    n = {
      info: a,
      ping: (0, g.speedTestPingInfo)(p.pings),
      tests: []
    },
    l = {
      info: a,
      pings: p.pings,
      tests: []
    };
  for (let e = 0; e < C.length; e++) {
    let t = {
        params: null,
        results: null
      },
      s = {
        params: null,
        results: null
      };
    t.params = C[e], s.params = C[e], e < p.results.length && (t.results = p.results[e].summary, s.results = p.results[e].payload), n.tests.push(t), l.tests.push(s)
  }
  await Promise.all([o.HTTP.post({
    url: N.Endpoints.DEBUG_LOG(N.DebugLogCategory.SPEED_TEST, "speed_test_summary_".concat(s, ".json")),
    body: JSON.stringify(n, void 0, 2),
    retries: 3,
    headers: {
      "Content-Type": "text/plain"
    }
  }), o.HTTP.post({
    url: N.Endpoints.DEBUG_LOG(N.DebugLogCategory.SPEED_TEST, "speed_test_results_".concat(s, ".json")),
    body: JSON.stringify(l, void 0, 2),
    retries: 3,
    headers: {
      "Content-Type": "text/plain"
    }
  })]), P(I.SpeedTestLifecycles.COMPLETED), D(), f.default.stopSpeedTest(), p.running = !1, p.notes = ""
}
class y extends(a = r.default.Store) {
  initialize() {
    this.waitFor(c.default, S.default, T.default, _.default)
  }
  getAvailable() {
    return !_.default.isCurrentClientInVoiceChannel()
  }
  getActive() {
    return p.running
  }
  getEndpoint() {
    return p.endpoint
  }
  getConnected() {
    var e;
    return null !== (e = p.connected) && void 0 !== e && e
  }
  getLifecycle() {
    return p.lifecycle
  }
  getFailed() {
    return p.failed
  }
  getCurrentTest() {
    return p.currentTest
  }
  getTestCases() {
    return C
  }
  getTestResults() {
    return p.results
  }
  getPings() {
    return p.pings
  }
  getNotes() {
    return p.notes
  }
  setNotes(e) {
    p.notes = e
  }
  isSupported() {
    return S.default.supports(h.Features.SPEED_TEST)
  }
}
i = "RTCSpeedTestStore", (l = "displayName") in(n = y) ? Object.defineProperty(n, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[l] = i, t.default = new y(d.default, {
  RTC_SPEED_TEST_START_TEST: function(e) {
    !p.running && (P(I.SpeedTestLifecycles.AWAITING_ENDPOINT), p.running = !0, p.currentTest = null, p.results = [], p.failed = !1, p.pings = [], p.connected = !1, D())
  },
  RTC_SPEED_TEST_STOP_TEST: function(e) {
    p.running = !1, D(), p.lifecycle !== I.SpeedTestLifecycles.COMPLETED && P(I.SpeedTestLifecycles.CANCELLED)
  },
  SPEED_TEST_CREATE: function(e) {
    if (!p.running) {
      f.default.stopSpeedTest();
      return
    }
    p.rtcServerId = e.rtcServerId
  },
  SPEED_TEST_DELETE: function(e) {
    D(), p.running = !1, p.lifecycle !== I.SpeedTestLifecycles.COMPLETED && P(I.SpeedTestLifecycles.INACTIVE)
  },
  SPEED_TEST_SERVER_UPDATE: function(e) {
    var t;
    D(), p.endpoint = null !== (t = e.endpoint) && void 0 !== t ? t : null, p.connection = new m.default({
      userId: c.default.getId(),
      sessionId: c.default.getSessionId(),
      rtcServerId: p.rtcServerId,
      endpoint: e.endpoint,
      token: e.token
    }), p.connection.on("state", O), p.connection.on("resuming", R), p.connection.on("ready", x), p.connection.on("speed-test-completed", M), p.connection.on("ping", v), p.connection.on("ping-timeout", v), p.connection.connect(), P(I.SpeedTestLifecycles.CONNECTING)
  }
})