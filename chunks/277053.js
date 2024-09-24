let i, a;
n(47120);
var s,
    r,
    l,
    o,
    c = n(392711),
    d = n.n(c),
    u = n(442837),
    _ = n(433517),
    E = n(570140),
    h = n(700785),
    m = n(388610),
    I = n(592125),
    g = n(981631),
    p = n(71080);
let T = new Set(),
    f = g.QZA.CLOSED,
    S = !1,
    C = null,
    N = null,
    A = null,
    v = null,
    L = null,
    Z = null,
    R = _.K.get(p.kf) || !1;
function O(e) {
    let t = e.getGuildId(),
        n = { ...e.permissionOverwrites };
    return null != t && null == n[t] && (n[t] = h.we(t)), n;
}
function x() {
    if (((A = m.Z.getChannel()), (v = m.Z.getCategory()), null == A)) return !1;
    let e = A.getGuildId();
    (N = C = O(A)), null == C[L] && (L = e), (a = null != v), (i = h.o4(A, v)), (Z = null), (S = !1), (f = g.QZA.CLOSED), T.clear();
}
class b extends (s = u.ZP.Store) {
    initialize() {
        this.waitFor(m.Z, I.Z);
    }
    hasChanges() {
        return S;
    }
    showNotice() {
        return this.hasChanges();
    }
    getPermissionOverwrite(e) {
        return null == C ? void 0 : C[e];
    }
    get editedPermissionIds() {
        return Array.from(T);
    }
    get permissionOverwrites() {
        return C;
    }
    get selectedOverwriteId() {
        return L;
    }
    get formState() {
        return f;
    }
    get isLockable() {
        return a;
    }
    get locked() {
        return i;
    }
    get channel() {
        return A;
    }
    get category() {
        return v;
    }
    get advancedMode() {
        return R;
    }
}
(o = 'ChannelSettingsPermissionsStore'),
    (l = 'displayName') in (r = b)
        ? Object.defineProperty(r, l, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[l] = o),
    (t.Z = new b(E.Z, {
        CHANNEL_SETTINGS_SET_SECTION: function (e) {
            let { section: t } = e;
            if (null != A || t !== g.CoT.PERMISSIONS) return !1;
            x();
        },
        CHANNEL_SETTINGS_PERMISSIONS_INIT: x,
        CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION: function (e) {
            let { id: t, allow: n, deny: a } = e,
                s = null == C ? void 0 : C[t];
            if (null == s || null == A) return !1;
            (s = {
                ...s,
                allow: n,
                deny: a
            }),
                (C = {
                    ...C,
                    [t]: s
                }),
                T.add(t),
                (f = g.QZA.OPEN),
                (S = !d().isEqual(C, N)),
                (i = h.o4(A, v));
        },
        CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION: function (e) {
            let { id: t } = e;
            if (null != C && null != C[t]) L = t;
            else {
                if (null == A) return !1;
                Z = t;
            }
        },
        CHANNEL_SETTINGS_CLOSE: function () {
            (f = g.QZA.CLOSED), (C = null), (N = null), (A = null), (v = null), (S = !1), T.clear(), (L = null), (Z = null);
        },
        CHANNEL_UPDATES: function (e) {
            let { channels: t } = e;
            if (null == A) return !1;
            let n = !1;
            for (let e of t)
                !1 !==
                    (function (e) {
                        if (null == A || A.id !== e || null == (A = I.Z.getChannel(e))) return !1;
                        v = m.Z.getCategory();
                        let t = A.getGuildId();
                        if (null == t) return !1;
                        N = O(A);
                        let n = {};
                        return (
                            T.forEach((e) => {
                                null != C && (n[e] = C[e]);
                            }),
                            null == n[t] && null == A.permissionOverwrites[t] && (n[t] = h.we(t)),
                            null ==
                            (C = {
                                ...A.permissionOverwrites,
                                ...n
                            })[L]
                                ? (L = t)
                                : null != Z && null != C[Z] && ((L = Z), (Z = null)),
                            (i = h.o4(A, v)),
                            !0
                        );
                    })(e.id) && (n = !0);
            return n;
        },
        CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING: function () {
            f = g.QZA.SUBMITTING;
        },
        CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS: function (e) {
            let { silent: t } = e;
            t ? (f = g.QZA.OPEN) : ((f = g.QZA.CLOSED), x());
        },
        CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE: function (e) {
            let { advancedMode: t } = e;
            (R = t), _.K.set(p.kf, t);
        }
    }));
