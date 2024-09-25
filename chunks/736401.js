var r = n(47120);
var i = n(433517),
    a = n(147913),
    o = n(594174),
    s = n(918505),
    l = n(548161),
    u = n(347649),
    c = n(776319),
    d = n(801461);
function _(e, t, n) {
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
let E = 604800000,
    f = 'lastSawPomelo',
    h = 'lastSawPomeloMigration';
function p() {
    i.K.set(f, Date.now());
}
function m() {
    if (!s.w8.getCurrentConfig({ location: 'b9eb97_1' }, { autoTrackExposure: !1 }).enabled) return !1;
    let e = o.default.getCurrentUser();
    if (null == e || e.isPomelo() || !e.hasVerifiedEmailOrPhone()) return !1;
    let t = (0, u.ov)() ? h : f,
        n = i.K.get(t);
    return !(null != n && Date.now() - n < E) && !0;
}
class I extends a.Z {
    constructor(...e) {
        super(...e),
            _(this, 'actions', { POST_CONNECTION_OPEN: () => this.onPostConnectionOpen() }),
            _(this, 'onPostConnectionOpen', () => {
                if (m()) {
                    let e = c.Z.getCurrentConfig({ location: 'uu_one_click' }, { autoTrackExposure: !1 }).enabled;
                    (0, l.a)(d.Kq.APP_START, e, !1) && p();
                }
            });
    }
}
t.Z = new I();
