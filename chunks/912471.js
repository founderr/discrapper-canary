n.d(t, {
    D: function () {
        return b;
    }
}),
    n(411104);
var i = n(433517),
    r = n(570140),
    l = n(188471),
    a = n(581567),
    s = n(594190),
    o = n(19780),
    c = n(626135),
    d = n(70956),
    u = n(848479),
    h = n(960048),
    m = n(844889),
    p = n(981631);
let g = 'LATEST_HEARTBEAST_EVENT_TIMESTAMP',
    f = null,
    _ = null,
    E = !1;
async function I() {
    if (E) return;
    (E = !0), (0, m.fr)(!0), h.Z.addBreadcrumb({ message: 'Start Analytics Heartbeat' });
    let e = await i.K.getAfterRefresh(g).then(m.Hg);
    if (!E) return;
    let t = Date.now(),
        n = 15 * d.Z.Millis.MINUTE + e - t;
    n > d.Z.Millis.HOUR && h.Z.addBreadcrumb({ message: 'Received invalid Date.now() when generating a heartbeat. Date.now() = '.concat(t, ', timeUntilNextHeartbeat = ').concat(n, ', latestHeartbeatEventTimestamp = ').concat(e) }),
        e > t && (n = 0),
        h.Z.addBreadcrumb({ message: 'Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: '.concat(n / 1000, ' seconds. Scheduling Heartbeat') }),
        C(),
        (_ = setTimeout(
            () => {
                v(),
                    (f = setInterval(() => {
                        v();
                    }, 15 * d.Z.Millis.MINUTE));
            },
            Math.max(n, 0)
        ));
}
function C() {
    null != _ && (clearTimeout(_), (_ = null)), null != f && (clearInterval(f), (f = null));
}
async function v() {
    let e = Date.now(),
        t = await (0, m.Gg)(),
        n = Date.now();
    if (null == t) {
        h.Z.captureException(Error('Null session when tracking session heartbeat. Waited '.concat(n - e, 'ms')));
        return;
    }
    if (!E) {
        h.Z.captureException(Error('Heartbeat scheduler not started when tracking session heartbeat.')), C();
        return;
    }
    h.Z.addBreadcrumb({
        message: 'Tracking Heartbeat',
        data: { initialized: t.initialized }
    });
    let r = {
            client_heartbeat_initialization_timestamp: t.initialized,
            client_heartbeat_version: 17
        },
        o = u.Z.getMemoryUsageElectronRenderer();
    null != o && (r.client_heartbeat_renderer_memory = o);
    let d = u.Z.getMemoryUsageElectronRendererUsedHeapSize();
    null != d && (r.client_heartbeat_renderer_memory_used_heap = d);
    {
        let e = s.ZP.getCurrentGameForAnalytics();
        null != e && ((r.client_heartbeat_current_game_id = e.id), (r.client_heartbeat_current_game_name = e.name), (r.client_heartbeat_current_game_executable = (0, a.N6)(e.exePath)), (r.client_heartbeat_current_game_distributor = e.distributor));
    }
    c.default.track(p.rMx.CLIENT_HEARTBEAT, r), i.K.set(g, Date.now().toString()), (0, l.Z)();
}
let N = null,
    S = !0;
function T() {
    if (S || (null != N && N !== p.hes.DISCONNECTED && N !== p.hes.RTC_DISCONNECTED))
        try {
            I();
        } catch (e) {
            h.Z.captureException(e);
        }
    else
        !(function () {
            if (!!E) (E = !1), h.Z.addBreadcrumb({ message: 'Stopping Analytics Heartbeat' }), (0, m.fr)(!1), C(), (0, l.Z)();
        })();
}
function b() {
    h.Z.addBreadcrumb({ message: 'Initializing SessionHeartbeatScheduler' }), o.Z.addChangeListener(A), r.Z.subscribe('WINDOW_FOCUS', Z), r.Z.subscribe('APP_STATE_UPDATE', L), r.Z.subscribe('LOGIN_SUCCESS', x), T();
}
function x() {
    v();
}
function A() {
    let e = o.Z.getState();
    N !== e && ((N = e), T());
}
function Z(e) {
    let { focused: t } = e;
    (S = t), T();
}
function L(e) {
    let { state: t } = e;
    (S = t === p.$7l.ACTIVE), T();
}
