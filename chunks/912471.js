n.d(t, {
    D: function () {
        return A;
    }
}),
    n(411104);
var i = n(433517),
    r = n(570140),
    l = n(188471),
    a = n(97145),
    o = n(581567),
    s = n(594190),
    c = n(19780),
    d = n(626135),
    u = n(70956),
    h = n(848479),
    m = n(960048),
    p = n(844889),
    g = n(981631);
let f = 'LATEST_HEARTBEAST_EVENT_TIMESTAMP',
    _ = null,
    E = null,
    I = !1;
async function C() {
    if (I) return;
    (I = !0), (0, p.fr)(!0), m.Z.addBreadcrumb({ message: 'Start Analytics Heartbeat' });
    let e = await i.K.getAfterRefresh(f).then(p.Hg);
    if (!I) return;
    let t = Date.now(),
        n = 15 * u.Z.Millis.MINUTE + e - t;
    n > u.Z.Millis.HOUR && m.Z.addBreadcrumb({ message: 'Received invalid Date.now() when generating a heartbeat. Date.now() = '.concat(t, ', timeUntilNextHeartbeat = ').concat(n, ', latestHeartbeatEventTimestamp = ').concat(e) }),
        e > t && (n = 0),
        m.Z.addBreadcrumb({ message: 'Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: '.concat(n / 1000, ' seconds. Scheduling Heartbeat') }),
        v(),
        (E = setTimeout(
            () => {
                S(),
                    (_ = setInterval(() => {
                        S();
                    }, 15 * u.Z.Millis.MINUTE));
            },
            Math.max(n, 0)
        ));
}
function v() {
    null != E && (clearTimeout(E), (E = null)), null != _ && (clearInterval(_), (_ = null));
}
async function S() {
    let e = Date.now(),
        t = await (0, p.Gg)(),
        n = Date.now();
    if (null == t) {
        m.Z.captureException(Error('Null session when tracking session heartbeat. Waited '.concat(n - e, 'ms')));
        return;
    }
    if (!I) {
        m.Z.captureException(Error('Heartbeat scheduler not started when tracking session heartbeat.')), v();
        return;
    }
    m.Z.addBreadcrumb({
        message: 'Tracking Heartbeat',
        data: { initialized: t.initialized }
    });
    let r = {
            client_heartbeat_initialization_timestamp: t.initialized,
            client_heartbeat_version: 17
        },
        c = h.Z.getMemoryUsageElectronRenderer();
    null != c && (r.client_heartbeat_renderer_memory = c);
    let u = h.Z.getMemoryUsageElectronRendererUsedHeapSize();
    null != u && (r.client_heartbeat_renderer_memory_used_heap = u);
    {
        let e = s.ZP.getCurrentGameForAnalytics();
        null != e && ((r.client_heartbeat_current_game_id = e.id), (r.client_heartbeat_current_game_name = e.name), (r.client_heartbeat_current_game_executable = (0, o.N6)(e.exePath)), (r.client_heartbeat_current_game_distributor = e.distributor), (r.uses_client_mods = (0, a.eQ)()));
    }
    d.default.track(g.rMx.CLIENT_HEARTBEAT, r), i.K.set(f, Date.now().toString()), (0, l.Z)();
}
let N = null,
    T = !0;
function b() {
    if (T || (null != N && N !== g.hes.DISCONNECTED && N !== g.hes.RTC_DISCONNECTED))
        try {
            C();
        } catch (e) {
            m.Z.captureException(e);
        }
    else
        !(function () {
            if (!!I) (I = !1), m.Z.addBreadcrumb({ message: 'Stopping Analytics Heartbeat' }), (0, p.fr)(!1), v(), (0, l.Z)();
        })();
}
function A() {
    m.Z.addBreadcrumb({ message: 'Initializing SessionHeartbeatScheduler' }), c.Z.addChangeListener(Z), r.Z.subscribe('WINDOW_FOCUS', L), r.Z.subscribe('APP_STATE_UPDATE', y), r.Z.subscribe('LOGIN_SUCCESS', x), b();
}
function x() {
    S();
}
function Z() {
    let e = c.Z.getState();
    N !== e && ((N = e), b());
}
function L(e) {
    let { focused: t } = e;
    (T = t), b();
}
function y(e) {
    let { state: t } = e;
    (T = t === g.$7l.ACTIVE), b();
}
