n.d(t, {
    O: function () {
        return r;
    }
}),
    n(789020);
var r,
    i,
    a,
    s = n(442837),
    o = n(570140),
    l = n(695346),
    u = n(630388),
    c = n(981631);
function d(e, t, n) {
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
function f() {
    return {
        lastUsedObject: {},
        useActivityUrlOverride: !1,
        activityUrlOverride: null,
        filter: ''
    };
}
let _ = f();
((a = r || (r = {})).INITIALIZED = 'INITIALIZED'), (a.LOADING = 'LOADING'), (a.LOADED = 'LOADED'), (a.ERROR = 'ERROR');
let h = 'INITIALIZED',
    p = [];
class m extends (i = s.ZP.PersistedStore) {
    initialize(e) {
        _ = {
            ...f(),
            ...(null != e ? e : {})
        };
    }
    getState() {
        return _;
    }
    getIsEnabled() {
        return l.Sb.getSetting() && p.length > 0;
    }
    getLastUsedObject() {
        return _.lastUsedObject;
    }
    getUseActivityUrlOverride() {
        return this.getIsEnabled() && _.useActivityUrlOverride;
    }
    getActivityUrlOverride() {
        return this.getIsEnabled() ? _.activityUrlOverride : null;
    }
    getFetchState() {
        return h;
    }
    getFilter() {
        return this.getIsEnabled() ? _.filter : '';
    }
    getDeveloperShelfItems() {
        return this.getIsEnabled() ? p : [];
    }
    inDevModeForApplication(e) {
        return this.getIsEnabled() && null != p.find((t) => t.id === e);
    }
}
d(m, 'displayName', 'DeveloperActivityShelfStore'),
    d(m, 'persistKey', 'DeveloperActivityShelfStore'),
    d(m, 'migrations', [(e) => (delete e.isEnabled, { ...e })]),
    (t.Z = new m(o.Z, {
        LOGOUT: function () {
            (_ = f()), (h = 'INITIALIZED'), (p = []);
        },
        DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE: function () {
            _.useActivityUrlOverride = !_.useActivityUrlOverride;
        },
        DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE: function (e) {
            let { activityUrlOverride: t } = e;
            _.activityUrlOverride = t;
        },
        DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED: function (e) {
            let { applicationId: t, timestamp: n } = e;
            if (null == p.find((e) => e.id === t)) return !1;
            _.lastUsedObject[t] = n;
        },
        DEVELOPER_ACTIVITY_SHELF_FETCH_START() {
            h = 'LOADING';
        },
        DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: function (e) {
            let { applications: t } = e;
            (h = 'LOADED'), (p = t.filter((e) => null != e.flags && (0, u.yE)(e.flags, c.udG.EMBEDDED)));
        },
        DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL: function (e) {
            let { type: t } = e;
            h = 'ERROR';
        },
        DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER: function (e) {
            let { filter: t } = e;
            _.filter = t;
        },
        USER_SETTINGS_PROTO_UPDATE() {}
    }));
