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
  I = s("622414"),
  N = s("42955"),
  g = s("399002"),
  f = s("369541"),
  m = s("981631"),
  C = s("65154");
new u.default("RTCSpeedTestStore");
let A = [{
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
  h = A.length,
  O = {
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

function p(e, t, s) {
  e === m.RTCConnectionStates.RTC_CONNECTED ? O.connected = !0 : (e === m.RTCConnectionStates.DISCONNECTED || e === m.RTCConnectionStates.RTC_DISCONNECTED) && (O.lifecycle === f.SpeedTestLifecycles.TESTING && (O.failed = !0, U(), j()), O.connected = !1)
}

function R() {
  O.lifecycle === f.SpeedTestLifecycles.TESTING && (O.failed = !0, U(), j())
}

function M() {
  if (O.lifecycle === f.SpeedTestLifecycles.CONNECTING) {
    var e;
    b(f.SpeedTestLifecycles.PINGING), null === (e = O.connection) || void 0 === e || e.setPingInterval(500), L()
  }
}

function x(e, t) {
  if (null != O.currentTest) !0 !== O.failed && (O.currentTest = O.currentTest + 1, O.results.push({
    payload: e,
    summary: t
  }), O.currentTest === h ? (b(f.SpeedTestLifecycles.UPLOADING), j()) : v())
}

function D(e) {
  void 0 !== e && O.pings.length < 10 && (O.pings.push(e), O.pings.length < 10 && b(f.SpeedTestLifecycles.PINGING), L())
}

function L() {
  if (O.lifecycle === f.SpeedTestLifecycles.PINGING && 10 === O.pings.length) {
    var e;
    null === (e = O.connection) || void 0 === e || e.setPingInterval(5e3), O.currentTest = 0, v()
  }
}

function P() {
  if (null == O.connection) return !1;
  O.connection.destroy(), O.connection = null
}

function b(e) {
  O.lifecycle = e, d.default.dispatch({
    type: "RTC_SPEED_TEST_STATE_UPDATE",
    lifecycle: e
  })
}

function v() {
  var e, t;
  null !== O.currentTest && (A[O.currentTest].direction === f.SpeedTestDirections.CLIENT_TO_SERVER ? null === (e = O.connection) || void 0 === e || e.startClientToServerSpeedTest(A[O.currentTest]) : A[O.currentTest].direction === f.SpeedTestDirections.SERVER_TO_CLIENT && (null === (t = O.connection) || void 0 === t || t.startServerToClientSpeedTest(A[O.currentTest])), b(f.SpeedTestLifecycles.TESTING))
}

function U() {
  if (O.lifecycle === f.SpeedTestLifecycles.TESTING && null != O.currentTest) {
    var e, t;
    A[O.currentTest].direction === f.SpeedTestDirections.CLIENT_TO_SERVER ? null === (e = O.connection) || void 0 === e || e.stopClientToServerSpeedTest() : null === (t = O.connection) || void 0 === t || t.stopServerToClientSpeedTest()
  }
}
async function j() {
  var e, t;
  let s = new Date().toISOString(),
    a = {
      date: s,
      endpoint: O.endpoint,
      networkOverhead: null === (e = O.connection) || void 0 === e ? void 0 : e.getNetworkOverhead(),
      networkType: E.default.getType(),
      networkEffectiveConnectionSpeed: E.default.getEffectiveConnectionSpeed(),
      networkServiceProvider: null !== (t = E.default.getServiceProvider()) && void 0 !== t ? t : "unknown",
      notes: O.notes
    },
    n = {
      info: a,
      ping: (0, g.speedTestPingInfo)(O.pings),
      tests: []
    },
    l = {
      info: a,
      pings: O.pings,
      tests: []
    };
  for (let e = 0; e < A.length; e++) {
    let t = {
        params: null,
        results: null
      },
      s = {
        params: null,
        results: null
      };
    t.params = A[e], s.params = A[e], e < O.results.length && (t.results = O.results[e].summary, s.results = O.results[e].payload), n.tests.push(t), l.tests.push(s)
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
    body: JSON.stringify(l, void 0, 2),
    retries: 3,
    headers: {
      "Content-Type": "text/plain"
    }
  })]), b(f.SpeedTestLifecycles.COMPLETED), P(), I.default.stopSpeedTest(), O.running = !1, O.notes = ""
}
class G extends(a = r.default.Store) {
  initialize() {
    this.waitFor(c.default, S.default, T.default, _.default)
  }
  getAvailable() {
    return !_.default.isCurrentClientInVoiceChannel()
  }
  getActive() {
    return O.running
  }
  getEndpoint() {
    return O.endpoint
  }
  getConnected() {
    var e;
    return null !== (e = O.connected) && void 0 !== e && e
  }
  getLifecycle() {
    return O.lifecycle
  }
  getFailed() {
    return O.failed
  }
  getCurrentTest() {
    return O.currentTest
  }
  getTestCases() {
    return A
  }
  getTestResults() {
    return O.results
  }
  getPings() {
    return O.pings
  }
  getNotes() {
    return O.notes
  }
  setNotes(e) {
    O.notes = e
  }
  isSupported() {
    return S.default.supports(C.Features.SPEED_TEST)
  }
}
i = "RTCSpeedTestStore", (l = "displayName") in(n = G) ? Object.defineProperty(n, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[l] = i, t.default = new G(d.default, {
  RTC_SPEED_TEST_START_TEST: function(e) {
    !O.running && (b(f.SpeedTestLifecycles.AWAITING_ENDPOINT), O.running = !0, O.currentTest = null, O.results = [], O.failed = !1, O.pings = [], O.connected = !1, P())
  },
  RTC_SPEED_TEST_STOP_TEST: function(e) {
    O.running = !1, P(), O.lifecycle !== f.SpeedTestLifecycles.COMPLETED && b(f.SpeedTestLifecycles.CANCELLED)
  },
  SPEED_TEST_CREATE: function(e) {
    if (!O.running) {
      I.default.stopSpeedTest();
      return
    }
    O.rtcServerId = e.rtcServerId
  },
  SPEED_TEST_DELETE: function(e) {
    P(), O.running = !1, O.lifecycle !== f.SpeedTestLifecycles.COMPLETED && b(f.SpeedTestLifecycles.INACTIVE)
  },
  SPEED_TEST_SERVER_UPDATE: function(e) {
    var t;
    P(), O.endpoint = null !== (t = e.endpoint) && void 0 !== t ? t : null, O.connection = new N.default({
      userId: c.default.getId(),
      sessionId: c.default.getSessionId(),
      rtcServerId: O.rtcServerId,
      endpoint: e.endpoint,
      token: e.token
    }), O.connection.on("state", p), O.connection.on("resuming", R), O.connection.on("ready", M), O.connection.on("speed-test-completed", x), O.connection.on("ping", D), O.connection.on("ping-timeout", D), O.connection.connect(), b(f.SpeedTestLifecycles.CONNECTING)
  }
})