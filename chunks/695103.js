let r, i, a;
n(47120), n(177593);
var s,
    o = n(442837),
    l = n(570140),
    u = n(238514),
    c = n(695346),
    d = n(581883),
    f = n(283595);
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
let h = {
        applicationId: null,
        originURL: null
    },
    p = h,
    m = new Set(),
    g = !1;
function E() {
    a = null;
}
function v() {
    (r = null), (i = null), (m = new Set()), (p.applicationId = null), (p.originURL = null), E();
}
class I extends (s = o.ZP.PersistedStore) {
    initialize(e) {
        (r = (p = { ...(null != e ? e : h) }).applicationId),
            (i = p.originURL),
            this.waitFor(d.Z, u.Z),
            this.syncWith([d.Z, u.Z], () => !0),
            f.Z.whenInitialized(() => {
                g = !0;
            });
    }
    inTestModeForApplication(e) {
        return r === e;
    }
    inTestModeForEmbeddedApplication(e) {
        return r === e && null != i;
    }
    shouldDisplayTestMode(e) {
        return c.Sb.getSetting() && this.inTestModeForApplication(e);
    }
    getState() {
        return p;
    }
    get isTestMode() {
        return null != r;
    }
    get isFetchingAuthorization() {
        return m.size > 0;
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
            if (g) return setImmediate(e), !1;
        });
    }
}
_(I, 'displayName', 'TestModeStore'),
    _(I, 'persistKey', 'TestModeStore'),
    (t.Z = new I(l.Z, {
        DEVELOPER_TEST_MODE_AUTHORIZATION_START: function (e) {
            let { applicationId: t } = e;
            m.add(t), (a = null);
        },
        DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: function (e) {
            let { applicationId: t, originURL: n } = e;
            (r = t), (i = n), m.delete(t), (a = null), (p.applicationId = t), (p.originURL = n);
        },
        DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: function (e) {
            let { applicationId: t, error: n } = e;
            m.delete(t), (a = n);
        },
        OVERLAY_INITIALIZE: function (e) {
            let { testModeApplicationId: t } = e;
            r = t;
        },
        DEVELOPER_TEST_MODE_RESET_ERROR: E,
        LOGOUT: v,
        DEVELOPER_TEST_MODE_RESET: v
    }));
