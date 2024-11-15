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
    T = null,
    N = null,
    A = null,
    b = null,
    x = null,
    Z = h.K.get(E.kf) || !1;
function L(e) {
    let t = e.getGuildId(),
        n = { ...e.permissionOverwrites };
    return null != t && null == n[t] && (n[t] = p.we(t)), n;
}
function y() {
    if (((N = g.Z.getChannel()), (A = g.Z.getCategory()), null == N)) return !1;
    let e = N.getGuildId();
    (T = S = L(N)), null == S[b] && (b = e), (r = null != A), (i = p.o4(N, A)), (x = null), (v = !1), (C = _.QZA.CLOSED), I.clear();
}
class O extends (l = u.ZP.Store) {
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
        return b;
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
        return N;
    }
    get category() {
        return A;
    }
    get advancedMode() {
        return Z;
    }
}
(o = 'ChannelSettingsPermissionsStore'),
    (s = 'displayName') in (a = O)
        ? Object.defineProperty(a, s, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = o),
    (t.Z = new O(m.Z, {
        CHANNEL_SETTINGS_SET_SECTION: function (e) {
            let { section: t } = e;
            if (null != N || t !== _.CoT.PERMISSIONS) return !1;
            y();
        },
        CHANNEL_SETTINGS_PERMISSIONS_INIT: y,
        CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION: function (e) {
            let { id: t, allow: n, deny: r } = e,
                l = null == S ? void 0 : S[t];
            if (null == l || null == N) return !1;
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
                (v = !d().isEqual(S, T)),
                (i = p.o4(N, A));
        },
        CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION: function (e) {
            let { id: t } = e;
            if (null != S && null != S[t]) b = t;
            else {
                if (null == N) return !1;
                x = t;
            }
        },
        CHANNEL_SETTINGS_CLOSE: function () {
            (C = _.QZA.CLOSED), (S = null), (T = null), (N = null), (A = null), (v = !1), I.clear(), (b = null), (x = null);
        },
        CHANNEL_UPDATES: function (e) {
            let { channels: t } = e;
            if (null == N) return !1;
            let n = !1;
            for (let e of t)
                !1 !==
                    (function (e) {
                        if (null == N || N.id !== e || null == (N = f.Z.getChannel(e))) return !1;
                        A = g.Z.getCategory();
                        let t = N.getGuildId();
                        if (null == t) return !1;
                        T = L(N);
                        let n = {};
                        return (
                            I.forEach((e) => {
                                null != S && (n[e] = S[e]);
                            }),
                            null == n[t] && null == N.permissionOverwrites[t] && (n[t] = p.we(t)),
                            null ==
                            (S = {
                                ...N.permissionOverwrites,
                                ...n
                            })[b]
                                ? (b = t)
                                : null != x && null != S[x] && ((b = x), (x = null)),
                            (i = p.o4(N, A)),
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
            t ? (C = _.QZA.OPEN) : ((C = _.QZA.CLOSED), y());
        },
        CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE: function (e) {
            let { advancedMode: t } = e;
            (Z = t), h.K.set(E.kf, t);
        }
    }));
