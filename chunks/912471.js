n.d(t, {
  DL: function() {
    return v
  }
}), n(411104);
var i = n(433517),
  s = n(570140),
  l = n(188471),
  a = n(581567),
  r = n(594190),
  o = n(19780),
  c = n(626135),
  u = n(70956),
  d = n(848479),
  E = n(960048),
  h = n(844889),
  _ = n(981631);
let I = "LATEST_HEARTBEAST_EVENT_TIMESTAMP",
  m = null,
  g = null,
  p = null,
  T = !1;
async function N() {
  if (T) return;
  T = !0, (0, h.fr)(!0), E.Z.addBreadcrumb({
    message: "Start Analytics Heartbeat"
  });
  let e = await i.K.getAfterRefresh(I).then(h.Hg);
  if (!T) return;
  let t = Date.now(),
    n = 15 * u.Z.Millis.MINUTE + e - t;
  n > u.Z.Millis.HOUR && E.Z.addBreadcrumb({
    message: "Received invalid Date.now() when generating a heartbeat. Date.now() = ".concat(t, ", timeUntilNextHeartbeat = ").concat(n, ", latestHeartbeatEventTimestamp = ").concat(e)
  }), e > t && (n = 0), E.Z.addBreadcrumb({
    message: "Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: ".concat(n / 1e3, " seconds. Scheduling Heartbeat")
  }), S(!1), g = setTimeout(() => {
    C(), m = setInterval(() => {
      C()
    }, 15 * u.Z.Millis.MINUTE)
  }, Math.max(n, 0))
}

function S() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  null != g && (clearTimeout(g), g = null), null != m && (clearInterval(m), m = null), null != p && e && (E.Z.addBreadcrumb({
    message: "Heartbeat correctly scheduled. Clearing 10s check timeout"
  }), clearTimeout(p), p = null)
}
async function C() {
  let e = Date.now(),
    t = await (0, h.Gg)(),
    n = Date.now();
  if (null == t) {
    E.Z.captureException(Error("Null session when tracking session heartbeat. Waited ".concat(n - e, "ms")));
    return
  }
  if (!T) {
    E.Z.captureException(Error("Heartbeat scheduler not started when tracking session heartbeat.")), S();
    return
  }
  E.Z.addBreadcrumb({
    message: "Tracking Heartbeat",
    data: {
      initialized: t.initialized
    }
  });
  let s = {
      client_heartbeat_initialization_timestamp: t.initialized,
      client_heartbeat_version: 17
    },
    o = d.Z.getMemoryUsageElectronRenderer();
  null != o && (s.client_heartbeat_renderer_memory = o);
  let u = d.Z.getMemoryUsageElectronRendererUsedHeapSize();
  null != u && (s.client_heartbeat_renderer_memory_used_heap = u);
  {
    let e = r.ZP.getCurrentGameForAnalytics();
    null != e && (s.client_heartbeat_current_game_id = e.id, s.client_heartbeat_current_game_name = e.name, s.client_heartbeat_current_game_executable = (0, a.N6)(e.exePath), s.client_heartbeat_current_game_distributor = e.distributor)
  }
  c.default.track(_.rMx.CLIENT_HEARTBEAT, s), i.K.set(I, Date.now().toString()), (0, l.Z)()
}
let A = null,
  f = !0;

function Z() {
  if (f || null != A && A !== _.hes.DISCONNECTED && A !== _.hes.RTC_DISCONNECTED) try {
    N()
  } catch (e) {
    E.Z.captureException(e)
  } else ! function() {
    if (!!T) T = !1, E.Z.addBreadcrumb({
      message: "Stopping Analytics Heartbeat"
    }), (0, h.fr)(!1), S(), (0, l.Z)()
  }()
}

function v() {
  E.Z.addBreadcrumb({
    message: "Initializing SessionHeartbeatScheduler"
  }), o.Z.addChangeListener(O), s.Z.subscribe("WINDOW_FOCUS", R), s.Z.subscribe("APP_STATE_UPDATE", x), s.Z.subscribe("LOGIN_SUCCESS", L), Z()
}

function L() {
  C()
}

function O() {
  let e = o.Z.getState();
  A !== e && (A = e, Z())
}

function R(e) {
  let {
    focused: t
  } = e;
  f = t, Z()
}

function x(e) {
  let {
    state: t
  } = e;
  f = t === _.$7l.ACTIVE, Z()
}