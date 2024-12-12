var i,
    a = r(442837),
    s = r(570140),
    o = r(626135),
    l = r(314897),
    u = r(981631);
function c(e, n, r) {
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
function d(e, n) {
    o.default.track(u.rMx.STREAMER_MODE_TOGGLE, {
        enabled: e,
        automatic: n
    });
}
let f = {
        enabled: !1,
        autoToggle: !0,
        hideInstantInvites: !0,
        hidePersonalInformation: !0,
        disableSounds: !0,
        disableNotifications: !0,
        enableContentProtection: !1
    },
    _ = {},
    h = { ...f };
function p(e) {
    let n = _[e];
    return null == n && (n = _[e] = { ...f }), n;
}
function m(e) {
    !e.isSwitchingAccount && (_ = {});
}
function g(e) {
    e.userId in _ && delete _[e.userId];
}
function E(e) {
    let n = { ...h };
    return (
        (h[e.key] = e.value),
        'enabled' === e.key
            ? d(e.value, !1)
            : o.default.track(u.rMx.UPDATE_STREAMER_MODE_SETTINGS, {
                  enabled: h.enabled,
                  automatic: h.autoToggle,
                  disable_notifications: h.disableNotifications,
                  disable_sounds: h.disableSounds,
                  hide_instant_invites: h.hideInstantInvites,
                  hide_personal_info: h.hidePersonalInformation,
                  enable_content_protection: h.enableContentProtection,
                  old_enabled: n.enabled,
                  old_automatic: n.autoToggle,
                  old_disable_notifications: n.disableNotifications,
                  old_disable_sounds: n.disableSounds,
                  old_hide_instant_invites: n.hideInstantInvites,
                  old_hide_personal_info: n.hidePersonalInformation,
                  old_enable_content_protection: n.enableContentProtection
              }),
        !0
    );
}
function v(e) {
    if (!h.autoToggle) return !1;
    {
        let n = e.count > 0;
        return (h.enabled = n), d(n, !0), !0;
    }
}
class I extends (i = a.ZP.PersistedStore) {
    initialize(e) {
        Object.assign(_, e),
            this.syncWith([l.default], () => {
                let e = l.default.getId();
                h = null != e ? p(e) : { ...f };
            });
    }
    getState() {
        return _;
    }
    getSettings() {
        return h;
    }
    get enabled() {
        return h.enabled;
    }
    get autoToggle() {
        return h.autoToggle;
    }
    get hideInstantInvites() {
        return this.enabled && h.hideInstantInvites;
    }
    get hidePersonalInformation() {
        return this.enabled && h.hidePersonalInformation;
    }
    get disableSounds() {
        return this.enabled && h.disableSounds;
    }
    get disableNotifications() {
        return this.enabled && h.disableNotifications;
    }
    get enableContentProtection() {
        return this.enabled && h.enableContentProtection;
    }
}
c(I, 'displayName', 'StreamerModeStore'),
    c(I, 'persistKey', 'StreamerModeStore'),
    c(I, 'migrations', [
        (e) => {
            let n = l.default.getId();
            return null == e || null == n ? {} : { [n]: { ...e } };
        }
    ]),
    (n.Z = new I(s.Z, {
        LOGOUT: m,
        MULTI_ACCOUNT_REMOVE_ACCOUNT: g,
        STREAMER_MODE_UPDATE: E,
        RUNNING_STREAMER_TOOLS_CHANGE: v
    }));
