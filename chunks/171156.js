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
  I = s("42955"),
  m = s("399002"),
  N = s("369541"),
  g = s("981631"),
  h = s("65154");
new u.default("RTCSpeedTestStore");
let C = [{
    clusterSize: 40,
    clusterIntervalMs: 20,
    numClusters: 1500,
    direction: N.SpeedTestDirections.CLIENT_TO_SERVER
  }, {
    clusterSize: 40,
    clusterIntervalMs: 20,
    numClusters: 1500,
    direction: N.SpeedTestDirections.SERVER_TO_CLIENT
  }, {
    clusterSize: 160,
    clusterIntervalMs: 20,
    numClusters: 1500,
    direction: N.SpeedTestDirections.CLIENT_TO_SERVER
  }, {
    clusterSize: 160,
    clusterIntervalMs: 20,
    numClusters: 1500,
    direction: N.SpeedTestDirections.SERVER_TO_CLIENT
  }, {
    clusterSize: 4125,
    clusterIntervalMs: 33,
    numClusters: 455,
    direction: N.SpeedTestDirections.CLIENT_TO_SERVER
  }, {
    clusterSize: 4125,
    clusterIntervalMs: 33,
    numClusters: 455,
    direction: N.SpeedTestDirections.SERVER_TO_CLIENT
  }, {
    clusterSize: 17e3,
    clusterIntervalMs: 17,
    numClusters: 295,
    direction: N.SpeedTestDirections.CLIENT_TO_SERVER
  }, {
    clusterSize: 17e3,
    clusterIntervalMs: 17,
    numClusters: 295,
    direction: N.SpeedTestDirections.SERVER_TO_CLIENT
  }],
  A = C.length,
  O = {
    running: !1,
    region: null,
    endpoint: null,
    connection: null,
    rtcServerId: null,
    connected: !1,
    currentTest: null,
    failed: !1,
    lifecycle: N.SpeedTestLifecycles.INACTIVE,
    results: [],
    pings: [],
    notes: ""
  };

function p(e, t, s) {
  e === g.RTCConnectionStates.RTC_CONNECTED ? O.connected = !0 : (e === g.RTCConnectionStates.DISCONNECTED || e === g.RTCConnectionStates.RTC_DISCONNECTED) && (O.lifecycle === N.SpeedTestLifecycles.TESTING && (O.failed = !0, U(), j()), O.connected = !1)
}

function R() {
  O.lifecycle === N.SpeedTestLifecycles.TESTING && (O.failed = !0, U(), j())
}

function x() {
  if (O.lifecycle === N.SpeedTestLifecycles.CONNECTING) {
    var e;
    P(N.SpeedTestLifecycles.PINGING), null === (e = O.connection) || void 0 === e || e.setPingInterval(500), L()
  }
}

function M(e, t) {
  if (null != O.currentTest) !0 !== O.failed && (O.currentTest = O.currentTest + 1, O.results.push({
    payload: e,
    summary: t
  }), O.currentTest === A ? (P(N.SpeedTestLifecycles.UPLOADING), j()) : b())
}

function D(e) {
  void 0 !== e && O.pings.length < 10 && (O.pings.push(e), O.pings.length < 10 && P(N.SpeedTestLifecycles.PINGING), L())
}

function L() {
  if (O.lifecycle === N.SpeedTestLifecycles.PINGING && 10 === O.pings.length) {
    var e;
    null === (e = O.connection) || void 0 === e || e.setPingInterval(5e3), O.currentTest = 0, b()
  }
}

function v() {
  if (null == O.connection) return !1;
  O.connection.destroy(), O.connection = null
}

function P(e) {
  O.lifecycle = e, d.default.dispatch({
    type: "RTC_SPEED_TEST_STATE_UPDATE",
    lifecycle: e
  })
}

function b() {
  var e, t;
  null !== O.currentTest && (C[O.currentTest].direction === N.SpeedTestDirections.CLIENT_TO_SERVER ? null === (e = O.connection) || void 0 === e || e.startClientToServerSpeedTest(C[O.currentTest]) : C[O.currentTest].direction === N.SpeedTestDirections.SERVER_TO_CLIENT && (null === (t = O.connection) || void 0 === t || t.startServerToClientSpeedTest(C[O.currentTest])), P(N.SpeedTestLifecycles.TESTING))
}

function U() {
  if (O.lifecycle === N.SpeedTestLifecycles.TESTING && null != O.currentTest) {
    var e, t;
    C[O.currentTest].direction === N.SpeedTestDirections.CLIENT_TO_SERVER ? null === (e = O.connection) || void 0 === e || e.stopClientToServerSpeedTest() : null === (t = O.connection) || void 0 === t || t.stopServerToClientSpeedTest()
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
      ping: (0, m.speedTestPingInfo)(O.pings),
      tests: []
    },
    l = {
      info: a,
      pings: O.pings,
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
    t.params = C[e], s.params = C[e], e < O.results.length && (t.results = O.results[e].summary, s.results = O.results[e].payload), n.tests.push(t), l.tests.push(s)
  }
  await Promise.all([o.HTTP.post({
    url: g.Endpoints.DEBUG_LOG(g.DebugLogCategory.SPEED_TEST, "speed_test_summary_".concat(s, ".json")),
    body: JSON.stringify(n, void 0, 2),
    retries: 3,
    headers: {
      "Content-Type": "text/plain"
    }
  }), o.HTTP.post({
    url: g.Endpoints.DEBUG_LOG(g.DebugLogCategory.SPEED_TEST, "speed_test_results_".concat(s, ".json")),
    body: JSON.stringify(l, void 0, 2),
    retries: 3,
    headers: {
      "Content-Type": "text/plain"
    }
  })]), P(N.SpeedTestLifecycles.COMPLETED), v(), f.default.stopSpeedTest(), O.running = !1, O.notes = ""
}
class F extends(a = r.default.Store) {
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
    return C
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
    return S.default.supports(h.Features.SPEED_TEST)
  }
}
i = "RTCSpeedTestStore", (l = "displayName") in(n = F) ? Object.defineProperty(n, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[l] = i, t.default = new F(d.default, {
  RTC_SPEED_TEST_START_TEST: function(e) {
    !O.running && (P(N.SpeedTestLifecycles.AWAITING_ENDPOINT), O.running = !0, O.currentTest = null, O.results = [], O.failed = !1, O.pings = [], O.connected = !1, v())
  },
  RTC_SPEED_TEST_STOP_TEST: function(e) {
    O.running = !1, v(), O.lifecycle !== N.SpeedTestLifecycles.COMPLETED && P(N.SpeedTestLifecycles.CANCELLED)
  },
  SPEED_TEST_CREATE: function(e) {
    if (!O.running) {
      f.default.stopSpeedTest();
      return
    }
    O.rtcServerId = e.rtcServerId
  },
  SPEED_TEST_DELETE: function(e) {
    v(), O.running = !1, O.lifecycle !== N.SpeedTestLifecycles.COMPLETED && P(N.SpeedTestLifecycles.INACTIVE)
  },
  SPEED_TEST_SERVER_UPDATE: function(e) {
    var t;
    v(), O.endpoint = null !== (t = e.endpoint) && void 0 !== t ? t : null, O.connection = new I.default({
      userId: c.default.getId(),
      sessionId: c.default.getSessionId(),
      rtcServerId: O.rtcServerId,
      endpoint: e.endpoint,
      token: e.token
    }), O.connection.on("state", p), O.connection.on("resuming", R), O.connection.on("ready", x), O.connection.on("speed-test-completed", M), O.connection.on("ping", D), O.connection.on("ping-timeout", D), O.connection.connect(), P(N.SpeedTestLifecycles.CONNECTING)
  }
})