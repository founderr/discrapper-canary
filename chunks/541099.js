n(47120);
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(827498);
let c = {
    show: !1,
    entrypoint: u._b.NONE,
    lastShownEntrypoint: u._b.NONE,
    activeViewType: null,
    closeReason: u.ti.DISMISSED,
    initialState: void 0
};
function d(e) {
    let { closeReason: t = u.ti.DISMISSED } = e;
    return (c.show = !1), (c.entrypoint = u._b.NONE), (c.closeReason = t), (c.initialState = void 0), !0;
}
let f = new Set();
class _ extends (r = o.ZP.Store) {
    initialize() {}
    shouldShowPopup() {
        return c.show && c.entrypoint === u._b.TEXT;
    }
    shouldShowModal() {
        return c.show && c.entrypoint === u._b.VOICE;
    }
    entrypoint() {
        return c.entrypoint;
    }
    lastShownEntrypoint() {
        return c.lastShownEntrypoint;
    }
    activeViewType() {
        return c.activeViewType;
    }
    closeReason() {
        return c.closeReason;
    }
    initialState() {
        return c.initialState;
    }
    appDMChannelsWithFailedLoads() {
        return f;
    }
}
function h() {
    d({ closeReason: u.ti.DISMISSED });
}
function p() {
    d({ closeReason: u.ti.COMMAND });
}
(s = 'AppLauncherStore'),
    (a = 'displayName') in (i = _)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s);
t.Z = new _(l.Z, {
    APP_LAUNCHER_SHOW: function (e) {
        let { entrypoint: t, activeViewType: n, initialState: r } = e;
        return (c.show = !0), (c.entrypoint = t), (c.lastShownEntrypoint = t), (c.closeReason = u.ti.DISMISSED), (c.activeViewType = n), (c.initialState = r), !0;
    },
    APP_LAUNCHER_DISMISS: d,
    CONNECTION_OPEN: h,
    LOGOUT: h,
    CHANNEL_SELECT: h,
    APPLICATION_COMMAND_SET_ACTIVE_COMMAND: p,
    APP_LAUNCHER_SET_ACTIVE_COMMAND: p,
    APP_LAUNCHER_ADD_FAILED_APP_DM_LOAD: function (e) {
        let { channelId: t } = e;
        f.add(t);
    },
    APP_LAUNCHER_REMOVE_FAILED_APP_DM_LOAD: function (e) {
        let { channelId: t } = e;
        f.delete(t);
    }
});
