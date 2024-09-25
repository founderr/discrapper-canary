let r;
n.d(t, {
    E: function () {
        return U;
    }
});
var i,
    a = n(724458);
var o = n(653041);
var s = n(47120);
var l = n(757143);
var u = n(879443),
    c = n.n(u),
    d = n(414861),
    _ = n.n(d),
    E = n(348327),
    f = n.n(E),
    h = n(392711),
    p = n.n(h),
    m = n(442837),
    I = n(570140),
    T = n(714338),
    g = n(710845),
    S = n(658785),
    A = n(131951),
    v = n(626135),
    N = n(358085),
    O = n(998502),
    R = n(13140),
    C = n(808506),
    y = n(981631),
    b = n(356659),
    L = n(710111),
    D = n(444675);
function M(e, t, n) {
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
let P = new g.Z('KeybindsStore'),
    U = {
        id: '1000',
        action: y.kg4.TOGGLE_MUTE,
        shortcut: (0, R.Kd)('mod+shift+m'),
        enabled: !0,
        managed: !0,
        params: {}
    },
    w = {},
    x = {},
    G = 0,
    k = !0,
    B = {},
    F = !1,
    Z = [y.kg4.PUSH_TO_TALK, y.kg4.TOGGLE_OVERLAY_INPUT_LOCK, y.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET];
function V(e, t) {
    let n = e === U.id ? U : x[e];
    null != n && B[n.action].onTrigger(t, n);
}
function H() {
    let { showKeybindIndicators: e } = S.Z.getCurrentConfig({ location: 'KeybindsStore' });
    null == p().find(x, (e) => U.action === e.action && e.enabled && e.shortcut.length > 0) && !__OVERLAY__ && !F && k && e && (z(U), (F = !0));
}
function Y() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    (F || e) && (K(U.id), (F = !1));
}
function j(e) {
    let { showKeybindIndicators: t } = e;
    t ? H() : Y(!0);
}
function W(e, t, n, r) {
    if (N.isPlatformEmbedded) O.ZP.inputEventRegister(parseInt(e), t, n, r);
    else {
        K(e);
        let i = _()(new (c())(document));
        r.keyup && i.bindGlobal((0, R.BB)(t), () => n(!1), 'keyup'), r.keydown && i.bindGlobal((0, R.BB)(t), () => n(!0), 'keydown'), (w[e] = i);
    }
}
function K(e) {
    if (N.isPlatformEmbedded) O.ZP.inputEventUnregister(parseInt(e, 10));
    else if (w[e]) {
        let t = x[e],
            n = B[t.action];
        (null == n ? void 0 : n.isPressed) === !0 && D.nextTick(() => n.onTrigger(!1, t)), w[e].reset(), (w[e] = null);
    }
}
function z(e) {
    if (!k || __OVERLAY__) return;
    let { shortcut: t, action: n, enabled: r } = e;
    if ('' === t || null == t || n === y.kg4.UNASSIGNED || !r) return;
    if (null == B[n]) {
        P.error('[kb store] KeybindStore: Looking for callback action '.concat(n, " but it doesn't exist in this version. Skipping"));
        return;
    }
    let i = e.id,
        a = B[n].keyEvents;
    e.action === y.kg4.TOGGLE_MUTE && Y(),
        W(i, t, (e) => V(i, e), {
            focused: !0,
            blurred: !0,
            keydown: !1,
            keyup: !1,
            ...a
        }),
        T.Z.validateKeybind((0, R.BB)(e.shortcut));
}
function q(e) {
    let t = {
        id: G.toString(),
        enabled: !0,
        action: y.kg4.UNASSIGNED,
        shortcut: [],
        managed: !1,
        params: {},
        ...e
    };
    return (
        (x = {
            ...x,
            [t.id]: t
        }),
        (G += 1),
        t
    );
}
function Q(e) {
    K(e.id), (x = { ...x }), delete x[e.id], e.action === y.kg4.TOGGLE_MUTE && H();
}
function X(e) {
    let { keybind: t } = e;
    z(q(t));
}
function $(e) {
    let { id: t } = e,
        n = x[t];
    !__OVERLAY__ &&
        v.default.track(y.rMx.USER_SETTINGS_KEYBIND_UPDATED, {
            keybind_action: n.action,
            keybind_is_bound: !1,
            keybind_has_shortcut: !1
        }),
        null != n && Q(n);
}
function J(e) {
    let { keybind: t } = e;
    (x = {
        ...x,
        [t.id]: t
    }),
        !__OVERLAY__ &&
            (v.default.track(y.rMx.USER_SETTINGS_KEYBIND_UPDATED, {
                keybind_action: t.action,
                keybind_is_bound: !0,
                keybind_has_shortcut: t.shortcut.length > 0
            }),
            t.action === y.kg4.TOGGLE_OVERLAY_INPUT_LOCK ? v.default.track(y.rMx.OVERLAY_SETTINGS_UPDATED, { hotkey: t.action === y.kg4.TOGGLE_OVERLAY_INPUT_LOCK ? (0, R.BB)(t.shortcut) : null }) : t.action === y.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET && v.default.track(y.rMx.OVERLAY_SETTINGS_UPDATED, { text_activation_hotkey: t.action === y.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET ? (0, R.BB)(t.shortcut) : null })),
        z(t);
}
function ee(e) {
    let { enable: t } = e;
    (k = t), t ? (T.Z.enable(), p().forEach(x, z), H()) : (T.Z.disable(), p().forEach(x, (e) => K(e.id)), Y());
}
function et(e) {
    let { keybinds: t } = e;
    (B = t),
        (w = {}),
        (G = 0),
        Object.values(x).filter((e) => Z.includes(e.action) && e.managed).length !== Z.length && ei(),
        p().forEach(x, (e) => {
            G = Math.max(parseInt(e.id, 10), G) + 1;
            try {
                z(e);
            } catch (t) {
                P.error('Failed to register keybind', e, t);
            }
        }),
        (k = !0),
        null == r && (r = S.Z.subscribe({ location: 'KeybindsStore' }, j));
}
function en(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return (
        null == p().find(x, (t) => t.action === e && (!n || t.managed === n)) &&
        (z(
            q({
                action: e,
                enabled: !0,
                shortcut: (0, R.Kd)(t),
                managed: !0,
                params: {}
            })
        ),
        !0)
    );
}
let er = [
    function e() {
        let e = A.Z.getShortcuts();
        return (
            p().each(x, (t) => {
                t.action === y.kg4.PUSH_TO_TALK && !0 === t.managed && (null == t.context || null == e[t.context]) && Q(t);
            }),
            p().reduce(
                A.Z.getShortcuts(),
                (e, t, n) => {
                    let r = p().find(x, (e) => e.action === y.kg4.PUSH_TO_TALK && !0 === e.managed && e.context === n);
                    if (null == r)
                        z(
                            q({
                                action: y.kg4.PUSH_TO_TALK,
                                enabled: !0,
                                shortcut: t,
                                managed: !0,
                                params: {},
                                context: n
                            })
                        );
                    else {
                        if (null == t) return e || !1;
                        J({
                            keybind: {
                                ...r,
                                shortcut: 'string' == typeof t ? (0, R.Kd)(t) : t,
                                context: n
                            }
                        });
                    }
                    return !0;
                },
                !1
            )
        );
    },
    function e() {
        return !!C.Z.enabled && en(y.kg4.TOGGLE_OVERLAY_INPUT_LOCK, 'shift+`');
    },
    function e() {
        return !!C.Z.enabled && en(y.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, ']`');
    },
    function e() {
        return en(y.kg4.SOUNDBOARD_HOLD, L.D_, !1);
    },
    function e() {
        return en(y.kg4.SAVE_CLIP, b.D_);
    }
];
function ei() {
    return H(), er.reduce((e, t) => t() || e, !1);
}
T.Z.setGetKeybindList(() => {
    let e = [];
    for (let t in x) {
        if (!!x.hasOwnProperty(t)) e.push((0, R.BB)(x[t].shortcut));
    }
    let { showKeybindIndicators: t } = S.Z.getCurrentConfig({ location: 'KeybindsStore' });
    return t && e.push((0, R.BB)(U.shortcut)), e;
});
class ea extends (i = m.ZP.DeviceSettingsStore) {
    initialize(e) {
        !__OVERLAY__ && this.waitFor(A.Z, C.Z), (x = null != e ? e : {});
    }
    getUserAgnosticState() {
        return x;
    }
    hasKeybind(e, t, n) {
        for (let r in x) for (let i of x[r].shortcut) if (i[0] === e && i[1] === t && (void 0 === n || n === i[2])) return !0;
        return !1;
    }
    hasExactKeybind(e) {
        for (let t in x) {
            let n = x[t];
            if (p().isEqual(n.shortcut, e)) return !0;
        }
        return !1;
    }
    getKeybindForAction(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            { showKeybindIndicators: r } = S.Z.getCurrentConfig({ location: 'KeybindsStore' }),
            i = p().find(x, (r) => r.action === e && (!t || r.managed) && (!n || (r.shortcut.length > 0 && r.enabled)));
        return null != i ? i : r && e === y.kg4.TOGGLE_MUTE ? U : null;
    }
    getOverlayKeybind() {
        return this.getKeybindForAction(y.kg4.TOGGLE_OVERLAY_INPUT_LOCK, !0);
    }
    getOverlayChatKeybind() {
        return this.getKeybindForAction(y.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, !0);
    }
}
M(ea, 'displayName', 'KeybindsStore'),
    M(ea, 'persistKey', 'keybinds'),
    M(ea, 'migrations', [
        function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                { v: t, keybinds: n = e } = e;
            return p().reduce(n, (e, n, r) => (isNaN(parseInt(n.id, 10)) || n.id !== r ? e : ((null == t || t < 2) && ('string' == typeof n.shortcut ? ((n.shortcut = n.shortcut.replace('escape', 'esc').replace('capslock', 'caps lock').replace('numlock', 'num lock').replace('pageup', 'page up').replace('pagedown', 'page down')), (n.shortcut = (0, R.Kd)(n.shortcut))) : (n.shortcut = n.shortcut.map((e) => (e.length < 3 ? [...e, (0, R.dU)()] : e)))), (e[r] = n), e)), {});
        },
        (e) => e,
        (e) => {
            let { keybinds: t = e } = e;
            return p().reduce(
                t,
                (e, t, n) => {
                    if ((0, N.isLinux)() && t.action === y.kg4.SOUNDBOARD_HOLD) {
                        let n = t.shortcut.map((e) => e[1]),
                            r = (0, R.Kd)('`').map((e) => e[1]);
                        if (f()(n, r)) return e;
                    }
                    return {
                        ...e,
                        [n]: t
                    };
                },
                {}
            );
        },
        (e) => {
            let t = {};
            for (let r in e) {
                let i = e[r];
                if (null != i) {
                    if (null == i.params || null == i.enabled) {
                        var n;
                        i = {
                            ...i,
                            enabled: !1 !== i.enabled,
                            params: null !== (n = i.params) && void 0 !== n ? n : {}
                        };
                    }
                    t[r] = i;
                }
            }
            return t;
        },
        (e) =>
            p().reduce(
                e,
                (e, t, n) =>
                    t.action === y.kg4.TOGGLE_GO_LIVE_STREAMING && t.managed
                        ? e
                        : {
                              ...e,
                              [n]: t
                          },
                {}
            )
    ]),
    (t.Z = new ea(I.Z, {
        CONNECTION_OPEN: ei,
        AUDIO_SET_MODE: ei,
        OVERLAY_SET_ENABLED: ei,
        RPC_APP_CONNECTED: ei,
        RPC_APP_DISCONNECTED: ei,
        KEYBINDS_ADD_KEYBIND: X,
        KEYBINDS_DELETE_KEYBIND: $,
        KEYBINDS_SET_KEYBIND: J,
        KEYBINDS_ENABLE_ALL_KEYBINDS: ee,
        KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS: et
    }));
