let i, a, s;
var o,
    l = r(47120);
var u = r(177593);
var c = r(442837),
    d = r(570140),
    f = r(238514),
    _ = r(695346),
    h = r(581883),
    p = r(283595);
function m(e, n, r) {
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
let g = {
        applicationId: null,
        originURL: null
    },
    E = g,
    v = new Set(),
    I = !1;
function T() {
    s = null;
}
function b() {
    (i = null), (a = null), (v = new Set()), (E.applicationId = null), (E.originURL = null), T();
}
function y(e) {
    let { applicationId: n } = e;
    v.add(n), (s = null);
}
function S(e) {
    let { applicationId: n, originURL: r } = e;
    (i = n), (a = r), v.delete(n), (s = null), (E.applicationId = n), (E.originURL = r);
}
function A(e) {
    let { applicationId: n, error: r } = e;
    v.delete(n), (s = r);
}
function N(e) {
    let { testModeApplicationId: n } = e;
    i = n;
}
class C extends (o = c.ZP.PersistedStore) {
    initialize(e) {
        (i = (E = { ...(null != e ? e : g) }).applicationId),
            (a = E.originURL),
            this.waitFor(h.Z, f.Z),
            this.syncWith([h.Z, f.Z], () => !0),
            p.Z.whenInitialized(() => {
                I = !0;
            });
    }
    inTestModeForApplication(e) {
        return i === e;
    }
    inTestModeForEmbeddedApplication(e) {
        return i === e && null != a;
    }
    shouldDisplayTestMode(e) {
        return _.Sb.getSetting() && this.inTestModeForApplication(e);
    }
    getState() {
        return E;
    }
    get isTestMode() {
        return null != i;
    }
    get isFetchingAuthorization() {
        return v.size > 0;
    }
    get testModeEmbeddedApplicationId() {
        return null != a ? i : null;
    }
    get testModeApplicationId() {
        return i;
    }
    get testModeOriginURL() {
        return a;
    }
    get error() {
        return s;
    }
    whenInitialized(e) {
        this.addConditionalChangeListener(() => {
            if (I) return setImmediate(e), !1;
        });
    }
}
m(C, 'displayName', 'TestModeStore'),
    m(C, 'persistKey', 'TestModeStore'),
    (n.Z = new C(d.Z, {
        DEVELOPER_TEST_MODE_AUTHORIZATION_START: y,
        DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: S,
        DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: A,
        OVERLAY_INITIALIZE: N,
        DEVELOPER_TEST_MODE_RESET_ERROR: T,
        LOGOUT: b,
        DEVELOPER_TEST_MODE_RESET: b
    }));
