"use strict";
s.r(t), s("653041"), s("47120");
var a, n, i, l, r = s("442837"),
  o = s("544891"),
  d = s("570140"),
  u = s("710845"),
  c = s("314897"),
  S = s("131951"),
  E = s("866960"),
  T = s("936349"),
  _ = s("979651"),
  I = s("622414"),
  N = s("42955"),
  g = s("399002"),
  f = s("369541"),
  m = s("981631"),
  A = s("65154");
new u.default("RTCSpeedTestStore");
let C = [{
    clusterSize: 40,
    clusterIntervalMs: 20,
    numClusters: 1500,
    direction: f.SpeedTestDirections.CLIENT_TO_SERVER
  }, {
    clusterSize: 40,
    clusterIntervalMs: 20,
    numClusters: 1500,
    direction: f.SpeedTestDirections.SERVER_TO_CLIENT
  }, {
    clusterSize: 160,
    clusterIntervalMs: 20,
    numClusters: 1500,
    direction: f.SpeedTestDirections.CLIENT_TO_SERVER
  }, {
    clusterSize: 160,
    clusterIntervalMs: 20,
    numClusters: 1500,
    direction: f.SpeedTestDirections.SERVER_TO_CLIENT
  }, {
    clusterSize: 4125,
    clusterIntervalMs: 33,
    numClusters: 455,
    direction: f.SpeedTestDirections.CLIENT_TO_SERVER
  }, {
    clusterSize: 4125,
    clusterIntervalMs: 33,
    numClusters: 455,
    direction: f.SpeedTestDirections.SERVER_TO_CLIENT
  }, {
    clusterSize: 17e3,
    clusterIntervalMs: 17,
    numClusters: 295,
    direction: f.SpeedTestDirections.CLIENT_TO_SERVER
  }, {
    clusterSize: 17e3,
    clusterIntervalMs: 17,
    numClusters: 295,
    direction: f.SpeedTestDirections.SERVER_TO_CLIENT
  }],
  O = C.length,
  h = {
    running: !1,
    region: null,
    endpoint: null,
    connection: null,
    rtcServerId: null,
    connected: !1,
    currentTest: null,
    failed: !1,
    lifecycle: f.SpeedTestLifecycles.INACTIVE,
    results: [],
    pings: [],
    notes: ""
  };

function R(e, t, s) {
  e === m.RTCConnectionStates.RTC_CONNECTED ? h.connected = !0 : (e === m.RTCConnectionStates.DISCONNECTED || e === m.RTCConnectionStates.RTC_DISCONNECTED) && (h.lifecycle === f.SpeedTestLifecycles.TESTING && (h.failed = !0, U(), j()), h.connected = !1)
}

function p() {
  h.lifecycle === f.SpeedTestLifecycles.TESTING && (h.failed = !0, U(), j())
}

function M() {
  if (h.lifecycle === f.SpeedTestLifecycles.CONNECTING) {
    var e;
    b(f.SpeedTestLifecycles.PINGING), null === (e = h.connection) || void 0 === e || e.setPingInterval(500), L()
  }
}

function D(e, t) {
  if (null != h.currentTest) !0 !== h.failed && (h.currentTest = h.currentTest + 1, h.results.push({
    payload: e,
    summary: t
  }), h.currentTest === O ? (b(f.SpeedTestLifecycles.UPLOADING), j()) : v())
}

function x(e) {
  void 0 !== e && h.pings.length < 10 && (h.pings.push(e), h.pings.length < 10 && b(f.SpeedTestLifecycles.PINGING), L())
}

function L() {
  if (h.lifecycle === f.SpeedTestLifecycles.PINGING && 10 === h.pings.length) {
    var e;
    null === (e = h.connection) || void 0 === e || e.setPingInterval(5e3), h.currentTest = 0, v()
  }
}

function P() {
  if (null == h.connection) return !1;
  h.connection.destroy(), h.connection = null
}

function b(e) {
  h.lifecycle = e, d.default.dispatch({
    type: "RTC_SPEED_TEST_STATE_UPDATE",
    lifecycle: e
  })
}

function v() {
  var e, t;
  null !== h.currentTest && (C[h.currentTest].direction === f.SpeedTestDirections.CLIENT_TO_SERVER ? null === (e = h.connection) || void 0 === e || e.startClientToServerSpeedTest(C[h.currentTest]) : C[h.currentTest].direction === f.SpeedTestDirections.SERVER_TO_CLIENT && (null === (t = h.connection) || void 0 === t || t.startServerToClientSpeedTest(C[h.currentTest])), b(f.SpeedTestLifecycles.TESTING))
}

function U() {
  if (h.lifecycle === f.SpeedTestLifecycles.TESTING && null != h.currentTest) {
    var e, t;
    C[h.currentTest].direction === f.SpeedTestDirections.CLIENT_TO_SERVER ? null === (e = h.connection) || void 0 === e || e.stopClientToServerSpeedTest() : null === (t = h.connection) || void 0 === t || t.stopServerToClientSpeedTest()
  }
}
async function j() {
  var e, t;
  let s = new Date().toISOString(),
    a = {
      date: s,
      endpoint: h.endpoint,
      networkOverhead: null === (e = h.connection) || void 0 === e ? void 0 : e.getNetworkOverhead(),
      networkType: E.default.getType(),
      networkEffectiveConnectionSpeed: E.default.getEffectiveConnectionSpeed(),
      networkServiceProvider: null !== (t = E.default.getServiceProvider()) && void 0 !== t ? t : "unknown",
      notes: h.notes
    },
    n = {
      info: a,
      ping: (0, g.speedTestPingInfo)(h.pings),
      tests: []
    },
    i = {
      info: a,
      pings: h.pings,
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
    t.params = C[e], s.params = C[e], e < h.results.length && (t.results = h.results[e].summary, s.results = h.results[e].payload), n.tests.push(t), i.tests.push(s)
  }
  await Promise.all([o.HTTP.post({
    url: m.Endpoints.DEBUG_LOG(m.DebugLogCategory.SPEED_TEST, "speed_test_summary_".concat(s, ".json")),
    body: JSON.stringify(n, void 0, 2),
    retries: 3,
    headers: {
      "Content-Type": "text/plain"
    }
  }), o.HTTP.post({
    url: m.Endpoints.DEBUG_LOG(m.DebugLogCategory.SPEED_TEST, "speed_test_results_".concat(s, ".json")),
    body: JSON.stringify(i, void 0, 2),
    retries: 3,
    headers: {
      "Content-Type": "text/plain"
    }
  })]), b(f.SpeedTestLifecycles.COMPLETED), P(), I.default.stopSpeedTest(), h.running = !1, h.notes = ""
}
class G extends(a = r.default.Store) {
  initialize() {
    this.waitFor(c.default, S.default, T.default, _.default)
  }
  getAvailable() {
    return !_.default.isCurrentClientInVoiceChannel()
  }
  getActive() {
    return h.running
  }
  getEndpoint() {
    return h.endpoint
  }
  getConnected() {
    var e;
    return null !== (e = h.connected) && void 0 !== e && e
  }
  getLifecycle() {
    return h.lifecycle
  }
  getFailed() {
    return h.failed
  }
  getCurrentTest() {
    return h.currentTest
  }
  getTestCases() {
    return C
  }
  getTestResults() {
    return h.results
  }
  getPings() {
    return h.pings
  }
  getNotes() {
    return h.notes
  }
  setNotes(e) {
    h.notes = e
  }
  isSupported() {
    return S.default.supports(A.Features.SPEED_TEST)
  }
}
l = "RTCSpeedTestStore", (i = "displayName") in(n = G) ? Object.defineProperty(n, i, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[i] = l, t.default = new G(d.default, {
  RTC_SPEED_TEST_START_TEST: function(e) {
    !h.running && (b(f.SpeedTestLifecycles.AWAITING_ENDPOINT), h.running = !0, h.currentTest = null, h.results = [], h.failed = !1, h.pings = [], h.connected = !1, P())
  },
  RTC_SPEED_TEST_STOP_TEST: function(e) {
    h.running = !1, P(), h.lifecycle !== f.SpeedTestLifecycles.COMPLETED && b(f.SpeedTestLifecycles.CANCELLED)
  },
  SPEED_TEST_CREATE: function(e) {
    if (!h.running) {
      I.default.stopSpeedTest();
      return
    }
    h.rtcServerId = e.rtcServerId
  },
  SPEED_TEST_DELETE: function(e) {
    P(), h.running = !1, h.lifecycle !== f.SpeedTestLifecycles.COMPLETED && b(f.SpeedTestLifecycles.INACTIVE)
  },
  SPEED_TEST_SERVER_UPDATE: function(e) {
    var t;
    P(), h.endpoint = null !== (t = e.endpoint) && void 0 !== t ? t : null, h.connection = new N.default({
      userId: c.default.getId(),
      sessionId: c.default.getSessionId(),
      rtcServerId: h.rtcServerId,
      endpoint: e.endpoint,
      token: e.token
    }), h.connection.on("state", R), h.connection.on("resuming", p), h.connection.on("ready", M), h.connection.on("speed-test-completed", D), h.connection.on("ping", x), h.connection.on("ping-timeout", x), h.connection.connect(), b(f.SpeedTestLifecycles.CONNECTING)
  }
})