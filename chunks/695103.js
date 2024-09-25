let r, i, a;
var o,
    s = n(47120);
var l = n(177593);
var u = n(442837),
    c = n(570140),
    d = n(238514),
    _ = n(695346),
    E = n(581883),
    f = n(283595);
function h(e, t, n) {
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
let p = {
        applicationId: null,
        originURL: null
    },
    m = p,
    I = new Set(),
    T = !1;
function g() {
    a = null;
}
function S() {
    (r = null), (i = null), (I = new Set()), (m.applicationId = null), (m.originURL = null), g();
}
function A(e) {
    let { applicationId: t } = e;
    I.add(t), (a = null);
}
function v(e) {
    let { applicationId: t, originURL: n } = e;
    (r = t), (i = n), I.delete(t), (a = null), (m.applicationId = t), (m.originURL = n);
}
function N(e) {
    let { applicationId: t, error: n } = e;
    I.delete(t), (a = n);
}
function O(e) {
    let { testModeApplicationId: t } = e;
    r = t;
}
class R extends (o = u.ZP.PersistedStore) {
    initialize(e) {
        (r = (m = { ...(null != e ? e : p) }).applicationId),
            (i = m.originURL),
            this.waitFor(E.Z, d.Z),
            this.syncWith([E.Z, d.Z], () => !0),
            f.Z.whenInitialized(() => {
                T = !0;
            });
    }
    inTestModeForApplication(e) {
        return r === e;
    }
    inTestModeForEmbeddedApplication(e) {
        return r === e && null != i;
    }
    shouldDisplayTestMode(e) {
        return _.Sb.getSetting() && this.inTestModeForApplication(e);
    }
    getState() {
        return m;
    }
    get isTestMode() {
        return null != r;
    }
    get isFetchingAuthorization() {
        return I.size > 0;
    }
    get testModeEmbeddedApplicationId() {
        return null != i ? r : null;
    }
    get testModeApplicationId() {
        return r;
    }
    get testModeOriginURL() {
        return i;
    }
    get error() {
        return a;
    }
    whenInitialized(e) {
        this.addConditionalChangeListener(() => {
            if (T) return setImmediate(e), !1;
        });
    }
}
h(R, 'displayName', 'TestModeStore'),
    h(R, 'persistKey', 'TestModeStore'),
    (t.Z = new R(c.Z, {
        DEVELOPER_TEST_MODE_AUTHORIZATION_START: A,
        DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: v,
        DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: N,
        OVERLAY_INITIALIZE: O,
        DEVELOPER_TEST_MODE_RESET_ERROR: g,
        LOGOUT: S,
        DEVELOPER_TEST_MODE_RESET: S
    }));
