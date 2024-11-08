let i, r;
n(47120);
var l,
    a,
    s,
    o,
    c = n(392711),
    d = n.n(c),
    u = n(442837),
    h = n(433517),
    m = n(570140),
    p = n(700785),
    g = n(388610),
    f = n(592125),
    _ = n(981631),
    E = n(71080);
let I = new Set(),
    C = _.QZA.CLOSED,
    v = !1,
    S = null,
    N = null,
    T = null,
    x = null,
    A = null,
    b = null,
    Z = h.K.get(E.kf) || !1;
function y(e) {
    let t = e.getGuildId(),
        n = { ...e.permissionOverwrites };
    return null != t && null == n[t] && (n[t] = p.we(t)), n;
}
function L() {
    if (((T = g.Z.getChannel()), (x = g.Z.getCategory()), null == T)) return !1;
    let e = T.getGuildId();
    (N = S = y(T)), null == S[A] && (A = e), (r = null != x), (i = p.o4(T, x)), (b = null), (v = !1), (C = _.QZA.CLOSED), I.clear();
}
class j extends (l = u.ZP.Store) {
    initialize() {
        this.waitFor(g.Z, f.Z);
    }
    hasChanges() {
        return v;
    }
    showNotice() {
        return this.hasChanges();
    }
    getPermissionOverwrite(e) {
        return null == S ? void 0 : S[e];
    }
    get editedPermissionIds() {
        return Array.from(I);
    }
    get permissionOverwrites() {
        return S;
    }
    get selectedOverwriteId() {
        return A;
    }
    get formState() {
        return C;
    }
    get isLockable() {
        return r;
    }
    get locked() {
        return i;
    }
    get channel() {
        return T;
    }
    get category() {
        return x;
    }
    get advancedMode() {
        return Z;
    }
}
(o = 'ChannelSettingsPermissionsStore'),
    (s = 'displayName') in (a = j)
        ? Object.defineProperty(a, s, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = o),
    (t.Z = new j(m.Z, {
        CHANNEL_SETTINGS_SET_SECTION: function (e) {
            let { section: t } = e;
            if (null != T || t !== _.CoT.PERMISSIONS) return !1;
            L();
        },
        CHANNEL_SETTINGS_PERMISSIONS_INIT: L,
        CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION: function (e) {
            let { id: t, allow: n, deny: r } = e,
                l = null == S ? void 0 : S[t];
            if (null == l || null == T) return !1;
            (l = {
                ...l,
                allow: n,
                deny: r
            }),
                (S = {
                    ...S,
                    [t]: l
                }),
                I.add(t),
                (C = _.QZA.OPEN),
                (v = !d().isEqual(S, N)),
                (i = p.o4(T, x));
        },
        CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION: function (e) {
            let { id: t } = e;
            if (null != S && null != S[t]) A = t;
            else {
                if (null == T) return !1;
                b = t;
            }
        },
        CHANNEL_SETTINGS_CLOSE: function () {
            (C = _.QZA.CLOSED), (S = null), (N = null), (T = null), (x = null), (v = !1), I.clear(), (A = null), (b = null);
        },
        CHANNEL_UPDATES: function (e) {
            let { channels: t } = e;
            if (null == T) return !1;
            let n = !1;
            for (let e of t)
                !1 !==
                    (function (e) {
                        if (null == T || T.id !== e || null == (T = f.Z.getChannel(e))) return !1;
                        x = g.Z.getCategory();
                        let t = T.getGuildId();
                        if (null == t) return !1;
                        N = y(T);
                        let n = {};
                        return (
                            I.forEach((e) => {
                                null != S && (n[e] = S[e]);
                            }),
                            null == n[t] && null == T.permissionOverwrites[t] && (n[t] = p.we(t)),
                            null ==
                            (S = {
                                ...T.permissionOverwrites,
                                ...n
                            })[A]
                                ? (A = t)
                                : null != b && null != S[b] && ((A = b), (b = null)),
                            (i = p.o4(T, x)),
                            !0
                        );
                    })(e.id) && (n = !0);
            return n;
        },
        CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING: function () {
            C = _.QZA.SUBMITTING;
        },
        CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS: function (e) {
            let { silent: t } = e;
            t ? (C = _.QZA.OPEN) : ((C = _.QZA.CLOSED), L());
        },
        CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE: function (e) {
            let { advancedMode: t } = e;
            (Z = t), h.K.set(E.kf, t);
        }
    }));
