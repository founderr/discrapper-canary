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
  g = t(65154);
new d.Z("RTCSpeedTestStore");
let O = [{
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
  h = O.length,
  p = {
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

function R(e, s, t) {
  e === A.hes.RTC_CONNECTED ? p.connected = !0 : (e === A.hes.DISCONNECTED || e === A.hes.RTC_DISCONNECTED) && (p.lifecycle === m.N7.TESTING && (p.failed = !0, b(), j()), p.connected = !1)
}

function x() {
  p.lifecycle === m.N7.TESTING && (p.failed = !0, b(), j())
}

function M() {
  if (p.lifecycle === m.N7.CONNECTING) {
    var e;
    Z(m.N7.PINGING), null === (e = p.connection) || void 0 === e || e.setPingInterval(500), L()
  }
}

function D(e, s) {
  if (null != p.currentTest) {
    if (!0 !== p.failed) p.currentTest = p.currentTest + 1, p.results.push({
      payload: e,
      summary: s
    }), p.currentTest === h ? (Z(m.N7.UPLOADING), j()) : v()
  }
}

function f(e) {
  if (void 0 !== e) p.pings.length < 10 && (p.pings.push(e), p.pings.length < 10 && Z(m.N7.PINGING), L())
}

function L() {
  if (p.lifecycle === m.N7.PINGING && 10 === p.pings.length) {
    var e;
    null === (e = p.connection) || void 0 === e || e.setPingInterval(5e3), p.currentTest = 0, v()
  }
}

function P() {
  if (null == p.connection) return !1;
  p.connection.destroy(), p.connection = null
}

function Z(e) {
  p.lifecycle = e, c.Z.dispatch({
    type: "RTC_SPEED_TEST_STATE_UPDATE",
    lifecycle: e
  })
}

function v() {
  var e, s;
  null !== p.currentTest && (O[p.currentTest].direction === m.u_.CLIENT_TO_SERVER ? null === (e = p.connection) || void 0 === e || e.startClientToServerSpeedTest(O[p.currentTest]) : O[p.currentTest].direction === m.u_.SERVER_TO_CLIENT && (null === (s = p.connection) || void 0 === s || s.startServerToClientSpeedTest(O[p.currentTest])), Z(m.N7.TESTING))
}

function b() {
  if (p.lifecycle === m.N7.TESTING && null != p.currentTest) {
    var e, s;
    O[p.currentTest].direction === m.u_.CLIENT_TO_SERVER ? null === (e = p.connection) || void 0 === e || e.stopClientToServerSpeedTest() : null === (s = p.connection) || void 0 === s || s.stopServerToClientSpeedTest()
  }
}
async function j() {
  var e, s;
  let t = new Date().toISOString(),
    n = {
      date: t,
      endpoint: p.endpoint,
      networkOverhead: null === (e = p.connection) || void 0 === e ? void 0 : e.getNetworkOverhead(),
      networkType: u.Z.getType(),
      networkEffectiveConnectionSpeed: u.Z.getEffectiveConnectionSpeed(),
      networkServiceProvider: null !== (s = u.Z.getServiceProvider()) && void 0 !== s ? s : "unknown",
      notes: p.notes
    },
    a = {
      info: n,
      ping: (0, C.B9)(p.pings),
      tests: []
    },
    i = {
      info: n,
      pings: p.pings,
      tests: []
    };
  for (let e = 0; e < O.length; e++) {
    let s = {
        params: null,
        results: null
      },
      t = {
        params: null,
        results: null
      };
    s.params = O[e], t.params = O[e], e < p.results.length && (s.results = p.results[e].summary, t.results = p.results[e].payload), a.tests.push(s), i.tests.push(t)
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
  })]), Z(m.N7.COMPLETED), P(), I.Z.stopSpeedTest(), p.running = !1, p.notes = ""
}
class B extends(n = o.ZP.Store) {
  initialize() {
    this.waitFor(_.default, E.Z, T.Z, S.Z)
  }
  getAvailable() {
    return !S.Z.isCurrentClientInVoiceChannel()
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
    return O
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
    return E.Z.supports(g.AN.SPEED_TEST)
  }
}
r = "RTCSpeedTestStore", (i = "displayName") in(a = B) ? Object.defineProperty(a, i, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[i] = r, s.Z = new B(c.Z, {
  RTC_SPEED_TEST_START_TEST: function(e) {
    !p.running && (Z(m.N7.AWAITING_ENDPOINT), p.running = !0, p.currentTest = null, p.results = [], p.failed = !1, p.pings = [], p.connected = !1, P())
  },
  RTC_SPEED_TEST_STOP_TEST: function(e) {
    p.running = !1, P(), p.lifecycle !== m.N7.COMPLETED && Z(m.N7.CANCELLED)
  },
  SPEED_TEST_CREATE: function(e) {
    if (!p.running) {
      I.Z.stopSpeedTest();
      return
    }
    p.rtcServerId = e.rtcServerId
  },
  SPEED_TEST_DELETE: function(e) {
    P(), p.running = !1, p.lifecycle !== m.N7.COMPLETED && Z(m.N7.INACTIVE)
  },
  SPEED_TEST_SERVER_UPDATE: function(e) {
    var s;
    P(), p.endpoint = null !== (s = e.endpoint) && void 0 !== s ? s : null, p.connection = new N.Z({
      userId: _.default.getId(),
      sessionId: _.default.getSessionId(),
      rtcServerId: p.rtcServerId,
      endpoint: e.endpoint,
      token: e.token
    }), p.connection.on("state", R), p.connection.on("resuming", x), p.connection.on("ready", M), p.connection.on("speed-test-completed", D), p.connection.on("ping", f), p.connection.on("ping-timeout", f), p.connection.connect(), Z(m.N7.CONNECTING)
  }
})