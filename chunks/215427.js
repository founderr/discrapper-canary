var r,
    i = n(442837),
    a = n(433517),
    o = n(570140),
    s = n(205355);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let u = 'MaintenanceStore',
    c = null,
    d = null,
    _ = null;
function E() {
    c = null;
    s.Z.checkScheduledMaintenances();
}
function f(e) {
    c = e.incident;
}
function h(e) {
    d = e.maintenance;
}
function p() {
    if (null == d) return !1;
    (_ = d.id), a.K.set(u, _);
}
class m extends (r = i.ZP.Store) {
    initialize() {
        _ = a.K.get(u);
    }
    getIncident() {
        return c;
    }
    getScheduledMaintenance() {
        return null != d && d.id !== _ ? d : null;
    }
}
l(m, 'displayName', 'MaintenanceStore'),
    (t.Z = new m(o.Z, {
        CONNECTION_OPEN: E,
        STATUS_PAGE_INCIDENT: f,
        STATUS_PAGE_SCHEDULED_MAINTENANCE: h,
        STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: p
    }));
