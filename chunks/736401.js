var i = r(47120);
var a = r(433517),
    s = r(147913),
    o = r(594174),
    l = r(918505),
    u = r(548161),
    c = r(347649),
    d = r(776319),
    f = r(801461);
function _(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let h = 604800000,
    p = 'lastSawPomelo',
    m = 'lastSawPomeloMigration';
function g() {
    a.K.set(p, Date.now());
}
function E() {
    if (!l.w8.getCurrentConfig({ location: 'b9eb97_1' }, { autoTrackExposure: !1 }).enabled) return !1;
    let e = o.default.getCurrentUser();
    if (null == e || e.isPomelo() || !e.hasVerifiedEmailOrPhone()) return !1;
    let n = (0, c.ov)() ? m : p,
        r = a.K.get(n);
    return !(null != r && Date.now() - r < h) && !0;
}
class v extends s.Z {
    constructor(...e) {
        super(...e),
            _(this, 'actions', { POST_CONNECTION_OPEN: () => this.onPostConnectionOpen() }),
            _(this, 'onPostConnectionOpen', () => {
                if (E()) {
                    let e = d.Z.getCurrentConfig({ location: 'uu_one_click' }, { autoTrackExposure: !1 }).enabled;
                    (0, u.a)(f.Kq.APP_START, e, !1) && g();
                }
            });
    }
}
n.Z = new v();
