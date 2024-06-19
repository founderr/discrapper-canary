t(653041), t(47120);
var n, i, a, l, r = t(442837),
  o = t(544891),
  c = t(570140),
  E = t(710845),
  d = t(314897),
  _ = t(131951),
  T = t(866960),
  S = t(936349),
  u = t(979651),
  I = t(622414),
  N = t(42955),
  A = t(399002),
  C = t(369541),
  O = t(981631),
  m = t(65154);
new E.Z("RTCSpeedTestStore");
let h = [{
    clusterSize: 40,
    clusterIntervalMs: 20,
    numClusters: 1500,
    direction: C.u_.CLIENT_TO_SERVER
  }, {
    clusterSize: 40,
    clusterIntervalMs: 20,
    numClusters: 1500,
    direction: C.u_.SERVER_TO_CLIENT
  }, {
    clusterSize: 160,
    clusterIntervalMs: 20,
    numClusters: 1500,
    direction: C.u_.CLIENT_TO_SERVER
  }, {
    clusterSize: 160,
    clusterIntervalMs: 20,
    numClusters: 1500,
    direction: C.u_.SERVER_TO_CLIENT
  }, {
    clusterSize: 4125,
    clusterIntervalMs: 33,
    numClusters: 455,
    direction: C.u_.CLIENT_TO_SERVER
  }, {
    clusterSize: 4125,
    clusterIntervalMs: 33,
    numClusters: 455,
    direction: C.u_.SERVER_TO_CLIENT
  }, {
    clusterSize: 17e3,
    clusterIntervalMs: 17,
    numClusters: 295,
    direction: C.u_.CLIENT_TO_SERVER
  }, {
    clusterSize: 17e3,
    clusterIntervalMs: 17,
    numClusters: 295,
    direction: C.u_.SERVER_TO_CLIENT
  }],
  g = h.length,
  R = {
    running: !1,
    region: null,
    endpoint: null,
    connection: null,
    rtcServerId: null,
    connected: !1,
    currentTest: null,
    failed: !1,
    lifecycle: C.N7.INACTIVE,
    results: [],
    pings: [],
    notes: ""
  };

function M(e, s, t) {
  e === O.hes.RTC_CONNECTED ? R.connected = !0 : (e === O.hes.DISCONNECTED || e === O.hes.RTC_DISCONNECTED) && (R.lifecycle === C.N7.TESTING && (R.failed = !0, j(), U()), R.connected = !1)
}

function x() {
  R.lifecycle === C.N7.TESTING && (R.failed = !0, j(), U())
}

function D() {
  if (R.lifecycle === C.N7.CONNECTING) {
    var e;
    f(C.N7.PINGING), null === (e = R.connection) || void 0 === e || e.setPingInterval(500), P()
  }
}

function p(e, s) {
  if (null != R.currentTest) {
    if (!0 !== R.failed) R.currentTest = R.currentTest + 1, R.results.push({
      payload: e,
      summary: s
    }), R.currentTest === g ? (f(C.N7.UPLOADING), U()) : v()
  }
}

function L(e) {
  if (void 0 !== e) R.pings.length < 10 && (R.pings.push(e), R.pings.length < 10 && f(C.N7.PINGING), P())
}

function P() {
  if (R.lifecycle === C.N7.PINGING && 10 === R.pings.length) {
    var e;
    null === (e = R.connection) || void 0 === e || e.setPingInterval(5e3), R.currentTest = 0, v()
  }
}

function Z() {
  if (null == R.connection) return !1;
  R.connection.destroy(), R.connection = null
}

function f(e) {
  R.lifecycle = e, c.Z.dispatch({
    type: "RTC_SPEED_TEST_STATE_UPDATE",
    lifecycle: e
  })
}

function v() {
  var e, s;
  null !== R.currentTest && (h[R.currentTest].direction === C.u_.CLIENT_TO_SERVER ? null === (e = R.connection) || void 0 === e || e.startClientToServerSpeedTest(h[R.currentTest]) : h[R.currentTest].direction === C.u_.SERVER_TO_CLIENT && (null === (s = R.connection) || void 0 === s || s.startServerToClientSpeedTest(h[R.currentTest])), f(C.N7.TESTING))
}

function j() {
  if (R.lifecycle === C.N7.TESTING && null != R.currentTest) {
    var e, s;
    h[R.currentTest].direction === C.u_.CLIENT_TO_SERVER ? null === (e = R.connection) || void 0 === e || e.stopClientToServerSpeedTest() : null === (s = R.connection) || void 0 === s || s.stopServerToClientSpeedTest()
  }
}
async function U() {
  var e, s;
  let t = new Date().toISOString(),
    n = {
      date: t,
      endpoint: R.endpoint,
      networkOverhead: null === (e = R.connection) || void 0 === e ? void 0 : e.getNetworkOverhead(),
      networkType: T.Z.getType(),
      networkEffectiveConnectionSpeed: T.Z.getEffectiveConnectionSpeed(),
      networkServiceProvider: null !== (s = T.Z.getServiceProvider()) && void 0 !== s ? s : "unknown",
      notes: R.notes
    },
    i = {
      info: n,
      ping: (0, A.B9)(R.pings),
      tests: []
    },
    a = {
      info: n,
      pings: R.pings,
      tests: []
    };
  for (let e = 0; e < h.length; e++) {
    let s = {
        params: null,
        results: null
      },
      t = {
        params: null,
        results: null
      };
    s.params = h[e], t.params = h[e], e < R.results.length && (s.results = R.results[e].summary, t.results = R.results[e].payload), i.tests.push(s), a.tests.push(t)
  }
  await Promise.all([o.tn.post({
    url: O.ANM.DEBUG_LOG(O.GU0.SPEED_TEST, "speed_test_summary_".concat(t, ".json")),
    body: JSON.stringify(i, void 0, 2),
    retries: 3,
    headers: {
      "Content-Type": "text/plain"
    }
  }), o.tn.post({
    url: O.ANM.DEBUG_LOG(O.GU0.SPEED_TEST, "speed_test_results_".concat(t, ".json")),
    body: JSON.stringify(a, void 0, 2),
    retries: 3,
    headers: {
      "Content-Type": "text/plain"
    }
  })]), f(C.N7.COMPLETED), Z(), I.Z.stopSpeedTest(), R.running = !1, R.notes = ""
}
class B extends(n = r.ZP.Store) {
  initialize() {
    this.waitFor(d.default, _.Z, S.Z, u.Z)
  }
  getAvailable() {
    return !u.Z.isCurrentClientInVoiceChannel()
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
    return h
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
    return _.Z.supports(m.AN.SPEED_TEST)
  }
}
l = "RTCSpeedTestStore", (a = "displayName") in(i = B) ? Object.defineProperty(i, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = l, s.Z = new B(c.Z, {
  RTC_SPEED_TEST_START_TEST: function(e) {
    !R.running && (f(C.N7.AWAITING_ENDPOINT), R.running = !0, R.currentTest = null, R.results = [], R.failed = !1, R.pings = [], R.connected = !1, Z())
  },
  RTC_SPEED_TEST_STOP_TEST: function(e) {
    R.running = !1, Z(), R.lifecycle !== C.N7.COMPLETED && f(C.N7.CANCELLED)
  },
  SPEED_TEST_CREATE: function(e) {
    if (!R.running) {
      I.Z.stopSpeedTest();
      return
    }
    R.rtcServerId = e.rtcServerId
  },
  SPEED_TEST_DELETE: function(e) {
    Z(), R.running = !1, R.lifecycle !== C.N7.COMPLETED && f(C.N7.INACTIVE)
  },
  SPEED_TEST_SERVER_UPDATE: function(e) {
    var s;
    Z(), R.endpoint = null !== (s = e.endpoint) && void 0 !== s ? s : null, R.connection = new N.Z({
      userId: d.default.getId(),
      sessionId: d.default.getSessionId(),
      rtcServerId: R.rtcServerId,
      endpoint: e.endpoint,
      token: e.token
    }), R.connection.on("state", M), R.connection.on("resuming", x), R.connection.on("ready", D), R.connection.on("speed-test-completed", p), R.connection.on("ping", L), R.connection.on("ping-timeout", L), R.connection.connect(), f(C.N7.CONNECTING)
  }
})