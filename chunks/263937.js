var r,
    i = n(47120);
var a = n(442837),
    o = n(433517),
    s = n(570140),
    l = n(581883);
function u(e, t, n) {
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
let c = {},
    d = {};
function _() {
    var e, t, n, r, i, a;
    let o = l.Z.settings;
    return {
        gifAutoPlay: null === (t = o.textAndImages) || void 0 === t ? void 0 : null === (e = t.gifAutoPlay) || void 0 === e ? void 0 : e.value,
        animateEmoji: null === (r = o.textAndImages) || void 0 === r ? void 0 : null === (n = r.animateEmoji) || void 0 === n ? void 0 : n.value,
        animateStickers: null === (a = o.textAndImages) || void 0 === a ? void 0 : null === (i = a.animateStickers) || void 0 === i ? void 0 : i.value
    };
}
function E() {
    return (d = _()), !1;
}
function f() {
    c = {};
}
function h() {
    c = {};
}
function p(e) {
    let { settings: t } = e;
    c = {
        ...c,
        ...t
    };
}
function m(e) {
    let { settings: t } = e;
    for (let e of t) delete c[e];
}
function I() {
    let e = _(),
        t = !1;
    for (let n in e) {
        let r = n;
        e[r] !== d[r] && (delete c[r], (t = !0));
    }
    return t;
}
class T extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        (c = null != e ? e : {}), this.syncWith([l.Z], E);
    }
    getState() {
        return c;
    }
    getAppliedOverrideReasonKey(e) {
        var t;
        return null === (t = c[e]) || void 0 === t ? void 0 : t.reasonKey;
    }
    getOverride(e) {
        return c[e];
    }
}
u(T, 'displayName', 'UserSettingsOverridesStore'),
    u(T, 'persistKey', 'UserSettingsOverridesStore'),
    u(T, 'migrations', [
        () => {
            var e;
            let t = null !== (e = o.K.get('UserSettingsStoreOverrides')) && void 0 !== e ? e : {};
            return o.K.remove('UserSettingsStoreOverrides'), t;
        }
    ]),
    (t.Z = new T(s.Z, {
        USER_SETTINGS_PROTO_UPDATE: I,
        USER_SETTINGS_OVERRIDE_APPLY: p,
        USER_SETTINGS_OVERRIDE_CLEAR: m,
        LOGOUT: f,
        LOGIN_SUCCESS: h
    }));
