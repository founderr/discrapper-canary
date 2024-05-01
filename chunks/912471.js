"use strict";
a.r(t), a.d(t, {
  initSessionHeartbeatScheduler: function() {
    return R
  }
}), a("411104");
var n = a("433517"),
  s = a("570140"),
  l = a("188471"),
  i = a("581567"),
  r = a("594190"),
  o = a("19780"),
  u = a("626135"),
  d = a("70956"),
  c = a("848479"),
  f = a("960048"),
  E = a("844889"),
  h = a("981631");
let _ = "LATEST_HEARTBEAST_EVENT_TIMESTAMP",
  C = null,
  m = null,
  S = null,
  p = !1;
async function I() {
  if (p) return;
  p = !0, (0, E.setSessionExtendingEnabled)(!0), f.default.addBreadcrumb({
    message: "Start Analytics Heartbeat"
  });
  let e = await n.Storage.getAfterRefresh(_).then(E.timestampOrZero);
  if (!p) return;
  let t = Date.now(),
    a = 15 * d.default.Millis.MINUTE + e - t;
  a > d.default.Millis.HOUR && f.default.addBreadcrumb({
    message: "Received invalid Date.now() when generating a heartbeat. Date.now() = ".concat(t, ", timeUntilNextHeartbeat = ").concat(a, ", latestHeartbeatEventTimestamp = ").concat(e)
  }), e > t && (a = 0), f.default.addBreadcrumb({
    message: "Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: ".concat(a / 1e3, " seconds. Scheduling Heartbeat")
  }), g(!1), m = setTimeout(() => {
    T(), C = setInterval(() => {
      T()
    }, 15 * d.default.Millis.MINUTE)
  }, Math.max(a, 0))
}

function g() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  null != m && (clearTimeout(m), m = null), null != C && (clearInterval(C), C = null), null != S && e && (f.default.addBreadcrumb({
    message: "Heartbeat correctly scheduled. Clearing 10s check timeout"
  }), clearTimeout(S), S = null)
}
async function T() {
  let e = Date.now(),
    t = await (0, E.getSession)(),
    a = Date.now();
  if (null == t) {
    f.default.captureException(Error("Null session when tracking session heartbeat. Waited ".concat(a - e, "ms")));
    return
  }
  if (!p) {
    f.default.captureException(Error("Heartbeat scheduler not started when tracking session heartbeat.")), g();
    return
  }
  f.default.addBreadcrumb({
    message: "Tracking Heartbeat",
    data: {
      initialized: t.initialized
    }
  });
  let s = {
      client_heartbeat_initialization_timestamp: t.initialized,
      client_heartbeat_version: 17
    },
    o = c.default.getMemoryUsageElectronRenderer();
  null != o && (s.client_heartbeat_renderer_memory = o);
  let d = c.default.getMemoryUsageElectronRendererUsedHeapSize();
  null != d && (s.client_heartbeat_renderer_memory_used_heap = d);
  {
    let e = r.default.getCurrentGameForAnalytics();
    null != e && (s.client_heartbeat_current_game_id = e.id, s.client_heartbeat_current_game_name = e.name, s.client_heartbeat_current_game_executable = (0, i.removeExecutablePathPrefix)(e.exePath), s.client_heartbeat_current_game_distributor = e.distributor)
  }
  u.default.track(h.AnalyticEvents.CLIENT_HEARTBEAT, s), n.Storage.set(_, Date.now().toString()), (0, l.drainClickstream)()
}
let A = null,
  N = !0;

function v() {
  if (N || null != A && A !== h.RTCConnectionStates.DISCONNECTED && A !== h.RTCConnectionStates.RTC_DISCONNECTED) try {
    I()
  } catch (e) {
    f.default.captureException(e)
  } else !p || (p = !1, f.default.addBreadcrumb({
    message: "Stopping Analytics Heartbeat"
  }), (0, E.setSessionExtendingEnabled)(!1), g(), (0, l.drainClickstream)())
}

function R() {
  f.default.addBreadcrumb({
    message: "Initializing SessionHeartbeatScheduler"
  }), o.default.addChangeListener(O), s.default.subscribe("WINDOW_FOCUS", M), s.default.subscribe("APP_STATE_UPDATE", P), s.default.subscribe("LOGIN_SUCCESS", L), v()
}

function L() {
  T()
}

function O() {
  let e = o.default.getState();
  A !== e && (A = e, v())
}

function M(e) {
  let {
    focused: t
  } = e;
  N = t, v()
}

function P(e) {
  let {
    state: t
  } = e;
  N = t === h.AppStates.ACTIVE, v()
}