var r,
    i = n(47120);
var a = n(442837),
    o = n(570140),
    s = n(827498);
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
let u = {
    show: !1,
    entrypoint: s._b.NONE,
    lastShownEntrypoint: s._b.NONE,
    activeViewType: null,
    closeReason: s.ti.DISMISSED,
    initialState: void 0
};
function c(e) {
    let { entrypoint: t, activeViewType: n, initialState: r } = e;
    return (u.show = !0), (u.entrypoint = t), (u.lastShownEntrypoint = t), (u.closeReason = s.ti.DISMISSED), (u.activeViewType = n), (u.initialState = r), !0;
}
function d(e) {
    let { closeReason: t = s.ti.DISMISSED } = e;
    return (u.show = !1), (u.entrypoint = s._b.NONE), (u.closeReason = t), (u.initialState = void 0), !0;
}
let _ = new Set();
class E extends (r = a.ZP.Store) {
    initialize() {}
    shouldShowPopup() {
        return u.show && u.entrypoint === s._b.TEXT;
    }
    shouldShowModal() {
        return u.show && u.entrypoint === s._b.VOICE;
    }
    entrypoint() {
        return u.entrypoint;
    }
    lastShownEntrypoint() {
        return u.lastShownEntrypoint;
    }
    activeViewType() {
        return u.activeViewType;
    }
    closeReason() {
        return u.closeReason;
    }
    initialState() {
        return u.initialState;
    }
    appDMChannelsWithFailedLoads() {
        return _;
    }
}
function f() {
    d({ closeReason: s.ti.DISMISSED });
}
function h() {
    d({ closeReason: s.ti.COMMAND });
}
function p(e) {
    let { channelId: t } = e;
    _.add(t);
}
function m(e) {
    let { channelId: t } = e;
    _.delete(t);
}
l(E, 'displayName', 'AppLauncherStore'),
    (t.Z = new E(o.Z, {
        APP_LAUNCHER_SHOW: c,
        APP_LAUNCHER_DISMISS: d,
        CONNECTION_OPEN: f,
        LOGOUT: f,
        CHANNEL_SELECT: f,
        APPLICATION_COMMAND_SET_ACTIVE_COMMAND: h,
        APP_LAUNCHER_SET_ACTIVE_COMMAND: h,
        APP_LAUNCHER_ADD_FAILED_APP_DM_LOAD: p,
        APP_LAUNCHER_REMOVE_FAILED_APP_DM_LOAD: m
    }));
