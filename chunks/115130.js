n.d(t, {
    O: function () {
        return r;
    }
});
var r,
    i,
    a = n(789020);
var o = n(442837),
    s = n(570140),
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
function _() {
    return {
        lastUsedObject: {},
        useActivityUrlOverride: !1,
        activityUrlOverride: null,
        filter: ''
    };
}
let E = _();
!(function (e) {
    (e.INITIALIZED = 'INITIALIZED'), (e.LOADING = 'LOADING'), (e.LOADED = 'LOADED'), (e.ERROR = 'ERROR');
})(r || (r = {}));
let f = 'INITIALIZED',
    h = [];
function p() {
    (E = _()), (f = 'INITIALIZED'), (h = []);
}
function m() {
    E.useActivityUrlOverride = !E.useActivityUrlOverride;
}
function I(e) {
    let { activityUrlOverride: t } = e;
    E.activityUrlOverride = t;
}
function T(e) {
    let { applicationId: t, timestamp: n } = e;
    if (null == h.find((e) => e.id === t)) return !1;
    E.lastUsedObject[t] = n;
}
function g(e) {
    let { applications: t } = e;
    (f = 'LOADED'), (h = t.filter((e) => null != e.flags && (0, u.yE)(e.flags, c.udG.EMBEDDED)));
}
function S(e) {
    let { type: t } = e;
    f = 'ERROR';
}
function A(e) {
    let { filter: t } = e;
    E.filter = t;
}
class v extends (i = o.ZP.PersistedStore) {
    initialize(e) {
        E = {
            ..._(),
            ...(null != e ? e : {})
        };
    }
    getState() {
        return E;
    }
    getIsEnabled() {
        return l.Sb.getSetting() && h.length > 0;
    }
    getLastUsedObject() {
        return E.lastUsedObject;
    }
    getUseActivityUrlOverride() {
        return this.getIsEnabled() && E.useActivityUrlOverride;
    }
    getActivityUrlOverride() {
        return this.getIsEnabled() ? E.activityUrlOverride : null;
    }
    getFetchState() {
        return f;
    }
    getFilter() {
        return this.getIsEnabled() ? E.filter : '';
    }
    getDeveloperShelfItems() {
        return this.getIsEnabled() ? h : [];
    }
    inDevModeForApplication(e) {
        return this.getIsEnabled() && null != h.find((t) => t.id === e);
    }
}
d(v, 'displayName', 'DeveloperActivityShelfStore'),
    d(v, 'persistKey', 'DeveloperActivityShelfStore'),
    d(v, 'migrations', [(e) => (delete e.isEnabled, { ...e })]),
    (t.Z = new v(s.Z, {
        LOGOUT: p,
        DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE: m,
        DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE: I,
        DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED: T,
        DEVELOPER_ACTIVITY_SHELF_FETCH_START() {
            f = 'LOADING';
        },
        DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: g,
        DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL: S,
        DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER: A,
        USER_SETTINGS_PROTO_UPDATE() {}
    }));
