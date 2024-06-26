t(653041), t(47120);
var n, a, i, r, o = t(442837),
  l = t(544891),
  c = t(570140),
  d = t(710845),
  _ = t(314897),
  E = t(131951),
  u = t(866960),
  T = t(936349),
  S = t(979651),
  I = t(622414),
  N = t(42955),
  C = t(399002),
  m = t(369541),
  A = t(981631),
  O = t(65154);
new d.Z("RTCSpeedTestStore");
let g = [{
    clusterSize: 40,
    clusterIntervalMs: 20,
    numClusters: 1500,
    direction: m.u_.CLIENT_TO_SERVER
  }, {
    clusterSize: 40,
    clusterIntervalMs: 20,
    numClusters: 1500,
    direction: m.u_.SERVER_TO_CLIENT
  }, {
    clusterSize: 160,
    clusterIntervalMs: 20,
    numClusters: 1500,
    direction: m.u_.CLIENT_TO_SERVER
  }, {
    clusterSize: 160,
    clusterIntervalMs: 20,
    numClusters: 1500,
    direction: m.u_.SERVER_TO_CLIENT
  }, {
    clusterSize: 4125,
    clusterIntervalMs: 33,
    numClusters: 455,
    direction: m.u_.CLIENT_TO_SERVER
  }, {
    clusterSize: 4125,
    clusterIntervalMs: 33,
    numClusters: 455,
    direction: m.u_.SERVER_TO_CLIENT
  }, {
    clusterSize: 17e3,
    clusterIntervalMs: 17,
    numClusters: 295,
    direction: m.u_.CLIENT_TO_SERVER
  }, {
    clusterSize: 17e3,
    clusterIntervalMs: 17,
    numClusters: 295,
    direction: m.u_.SERVER_TO_CLIENT
  }],
  h = g.length,
  R = {
    running: !1,
    region: null,
    endpoint: null,
    connection: null,
    rtcServerId: null,
    connected: !1,
    currentTest: null,
    failed: !1,
    lifecycle: m.N7.INACTIVE,
    results: [],
    pings: [],
    notes: ""
  };

function p(e, s, t) {
  e === A.hes.RTC_CONNECTED ? R.connected = !0 : (e === A.hes.DISCONNECTED || e === A.hes.RTC_DISCONNECTED) && (R.lifecycle === m.N7.TESTING && (R.failed = !0, b(), j()), R.connected = !1)
}

function x() {
  R.lifecycle === m.N7.TESTING && (R.failed = !0, b(), j())
}

function M() {
  if (R.lifecycle === m.N7.CONNECTING) {
    var e;
    Z(m.N7.PINGING), null === (e = R.connection) || void 0 === e || e.setPingInterval(500), L()
  }
}

function D(e, s) {
  if (null != R.currentTest) {
    if (!0 !== R.failed) R.currentTest = R.currentTest + 1, R.results.push({
      payload: e,
      summary: s
    }), R.currentTest === h ? (Z(m.N7.UPLOADING), j()) : v()
  }
}

function f(e) {
  if (void 0 !== e) R.pings.length < 10 && (R.pings.push(e), R.pings.length < 10 && Z(m.N7.PINGING), L())
}

function L() {
  if (R.lifecycle === m.N7.PINGING && 10 === R.pings.length) {
    var e;
    null === (e = R.connection) || void 0 === e || e.setPingInterval(5e3), R.currentTest = 0, v()
  }
}

function P() {
  if (null == R.connection) return !1;
  R.connection.destroy(), R.connection = null
}

function Z(e) {
  R.lifecycle = e, c.Z.dispatch({
    type: "RTC_SPEED_TEST_STATE_UPDATE",
    lifecycle: e
  })
}

function v() {
  var e, s;
  null !== R.currentTest && (g[R.currentTest].direction === m.u_.CLIENT_TO_SERVER ? null === (e = R.connection) || void 0 === e || e.startClientToServerSpeedTest(g[R.currentTest]) : g[R.currentTest].direction === m.u_.SERVER_TO_CLIENT && (null === (s = R.connection) || void 0 === s || s.startServerToClientSpeedTest(g[R.currentTest])), Z(m.N7.TESTING))
}

function b() {
  if (R.lifecycle === m.N7.TESTING && null != R.currentTest) {
    var e, s;
    g[R.currentTest].direction === m.u_.CLIENT_TO_SERVER ? null === (e = R.connection) || void 0 === e || e.stopClientToServerSpeedTest() : null === (s = R.connection) || void 0 === s || s.stopServerToClientSpeedTest()
  }
}
async function j() {
  var e, s;
  let t = new Date().toISOString(),
    n = {
      date: t,
      endpoint: R.endpoint,
      networkOverhead: null === (e = R.connection) || void 0 === e ? void 0 : e.getNetworkOverhead(),
      networkType: u.Z.getType(),
      networkEffectiveConnectionSpeed: u.Z.getEffectiveConnectionSpeed(),
      networkServiceProvider: null !== (s = u.Z.getServiceProvider()) && void 0 !== s ? s : "unknown",
      notes: R.notes
    },
    a = {
      info: n,
      ping: (0, C.B9)(R.pings),
      tests: []
    },
    i = {
      info: n,
      pings: R.pings,
      tests: []
    };
  for (let e = 0; e < g.length; e++) {
    let s = {
        params: null,
        results: null
      },
      t = {
        params: null,
        results: null
      };
    s.params = g[e], t.params = g[e], e < R.results.length && (s.results = R.results[e].summary, t.results = R.results[e].payload), a.tests.push(s), i.tests.push(t)
  }
  await Promise.all([l.tn.post({
    url: A.ANM.DEBUG_LOG(A.GU0.SPEED_TEST, "speed_test_summary_".concat(t, ".json")),
    body: JSON.stringify(a, void 0, 2),
    retries: 3,
    headers: {
      "Content-Type": "text/plain"
    }
  }), l.tn.post({
    url: A.ANM.DEBUG_LOG(A.GU0.SPEED_TEST, "speed_test_results_".concat(t, ".json")),
    body: JSON.stringify(i, void 0, 2),
    retries: 3,
    headers: {
      "Content-Type": "text/plain"
    }
  })]), Z(m.N7.COMPLETED), P(), I.Z.stopSpeedTest(), R.running = !1, R.notes = ""
}
class U extends(n = o.ZP.Store) {
  initialize() {
    this.waitFor(_.default, E.Z, T.Z, S.Z)
  }
  getAvailable() {
    return !S.Z.isCurrentClientInVoiceChannel()
  }
  getActive() {
    return R.running
  }
  getEndpoint() {
    return R.endpoint
  }
  getConnected() {
    var e;
    return null !== (e = R.connected) && void 0 !== e && e
  }
  getLifecycle() {
    return R.lifecycle
  }
  getFailed() {
    return R.failed
  }
  getCurrentTest() {
    return R.currentTest
  }
  getTestCases() {
    return g
  }
  getTestResults() {
    return R.results
  }
  getPings() {
    return R.pings
  }
  getNotes() {
    return R.notes
  }
  setNotes(e) {
    R.notes = e
  }
  isSupported() {
    return E.Z.supports(O.AN.SPEED_TEST)
  }
}
r = "RTCSpeedTestStore", (i = "displayName") in(a = U) ? Object.defineProperty(a, i, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[i] = r, s.Z = new U(c.Z, {
  RTC_SPEED_TEST_START_TEST: function(e) {
    !R.running && (Z(m.N7.AWAITING_ENDPOINT), R.running = !0, R.currentTest = null, R.results = [], R.failed = !1, R.pings = [], R.connected = !1, P())
  },
  RTC_SPEED_TEST_STOP_TEST: function(e) {
    R.running = !1, P(), R.lifecycle !== m.N7.COMPLETED && Z(m.N7.CANCELLED)
  },
  SPEED_TEST_CREATE: function(e) {
    if (!R.running) {
      I.Z.stopSpeedTest();
      return
    }
    R.rtcServerId = e.rtcServerId
  },
  SPEED_TEST_DELETE: function(e) {
    P(), R.running = !1, R.lifecycle !== m.N7.COMPLETED && Z(m.N7.INACTIVE)
  },
  SPEED_TEST_SERVER_UPDATE: function(e) {
    var s;
    P(), R.endpoint = null !== (s = e.endpoint) && void 0 !== s ? s : null, R.connection = new N.Z({
      userId: _.default.getId(),
      sessionId: _.default.getSessionId(),
      rtcServerId: R.rtcServerId,
      endpoint: e.endpoint,
      token: e.token
    }), R.connection.on("state", p), R.connection.on("resuming", x), R.connection.on("ready", M), R.connection.on("speed-test-completed", D), R.connection.on("ping", f), R.connection.on("ping-timeout", f), R.connection.connect(), Z(m.N7.CONNECTING)
  }
})