"use strict";
n.r(t), n.d(t, {
  initSessionHeartbeatScheduler: function() {
    return A
  }
}), n("70102");
var a = n("976255"),
  s = n("95410"),
  l = n("913144"),
  i = n("945956"),
  r = n("599110"),
  o = n("718517"),
  u = n("872507"),
  d = n("286235"),
  c = n("49111");
let f = "LATEST_HEARTBEAST_EVENT_TIMESTAMP",
  E = null,
  h = null,
  _ = null,
  C = !1;
async function I() {
  if (C) return;
  C = !0, (0, a.setSessionExtendingEnabled)(!0), d.default.addBreadcrumb({
    message: "Start Analytics Heartbeat"
  });
  let e = await s.default.getAfterRefresh(f).then(a.timestampOrZero);
  if (!C) return;
  let t = Date.now(),
    n = 15 * o.default.Millis.MINUTE + e - t;
  n > o.default.Millis.HOUR && d.default.addBreadcrumb({
    message: "Received invalid Date.now() when generating a heartbeat. Date.now() = ".concat(t, ", timeUntilNextHeartbeat = ").concat(n, ", latestHeartbeatEventTimestamp = ").concat(e)
  }), e > t && (n = 0), d.default.addBreadcrumb({
    message: "Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: ".concat(n / 1e3, " seconds. Scheduling Heartbeat")
  }), S(!1), h = setTimeout(() => {
    m(), E = setInterval(() => {
      m()
    }, 15 * o.default.Millis.MINUTE)
  }, Math.max(n, 0))
}

function S() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  null != h && (clearTimeout(h), h = null), null != E && (clearInterval(E), E = null), null != _ && e && (clearTimeout(_), _ = null)
}
async function m() {
  let e = Date.now(),
    t = await (0, a.getSession)(),
    n = Date.now();
  if (null == t) {
    d.default.captureException(Error("Null session when tracking session heartbeat. Waited ".concat(n - e, "ms")));
    return
  }
  if (!C) {
    d.default.captureException(Error("Heartbeat scheduler not started when tracking session heartbeat.")), S();
    return
  }
  d.default.addBreadcrumb({
    message: "Tracking Heartbeat",
    data: {
      initialized: t.initialized
    }
  });
  let l = {
      client_heartbeat_initialization_timestamp: t.initialized,
      client_heartbeat_version: 17
    },
    i = u.default.getMemoryUsageElectronRenderer();
  null != i && (l.client_heartbeat_renderer_memory = i);
  let o = u.default.getMemoryUsageElectronRendererUsedHeapSize();
  null != o && (l.client_heartbeat_renderer_memory_used_heap = o), r.default.track(c.AnalyticEvents.CLIENT_HEARTBEAT, l), s.default.set(f, Date.now().toString())
}
let p = null,
  T = !0;

function g() {
  if (T || null != p && p !== c.RTCConnectionStates.DISCONNECTED && p !== c.RTCConnectionStates.RTC_DISCONNECTED) try {
    I()
  } catch (e) {
    d.default.captureException(e)
  } else !C || (C = !1, d.default.addBreadcrumb({
    message: "Stopping Analytics Heartbeat"
  }), (0, a.setSessionExtendingEnabled)(!1), S())
}

function A() {
  d.default.addBreadcrumb({
    message: "Initializing SessionHeartbeatScheduler"
  }), i.default.addChangeListener(R), l.default.subscribe("WINDOW_FOCUS", O), l.default.subscribe("APP_STATE_UPDATE", v), l.default.subscribe("LOGIN_SUCCESS", N), g()
}

function N() {
  m()
}

function R() {
  let e = i.default.getState();
  p !== e && (p = e, g())
}

function O(e) {
  let {
    focused: t
  } = e;
  T = t, g()
}

function v(e) {
  let {
    state: t
  } = e;
  T = t === c.AppStates.ACTIVE, g()
}