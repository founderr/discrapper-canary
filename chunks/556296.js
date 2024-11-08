let r;
n.d(t, {
    E: function () {
        return D;
    }
}),
    n(724458),
    n(653041),
    n(47120),
    n(757143);
var i,
    a = n(879443),
    s = n.n(a),
    o = n(414861),
    l = n.n(o),
    u = n(348327),
    c = n.n(u),
    d = n(392711),
    f = n.n(d),
    _ = n(442837),
    h = n(570140),
    p = n(714338),
    m = n(710845),
    g = n(658785),
    E = n(131951),
    v = n(626135),
    I = n(358085),
    S = n(998502),
    b = n(13140),
    T = n(808506),
    y = n(981631),
    A = n(356659),
    N = n(710111),
    C = n(444675);
function R(e, t, n) {
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
let O = new m.Z('KeybindsStore'),
    D = {
        id: '1000',
        action: y.kg4.TOGGLE_MUTE,
        shortcut: (0, b.Kd)('mod+shift+m'),
        enabled: !0,
        managed: !0,
        params: {}
    },
    L = {},
    x = {},
    w = 0,
    M = !0,
    P = {},
    k = !1,
    U = [y.kg4.PUSH_TO_TALK, y.kg4.TOGGLE_OVERLAY_INPUT_LOCK, y.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET];
function G() {
    let { showKeybindIndicators: e } = g.Z.getCurrentConfig({ location: 'KeybindsStore' });
    null == f().find(x, (e) => D.action === e.action && e.enabled && e.shortcut.length > 0) && !__OVERLAY__ && !k && M && e && (V(D), (k = !0));
}
function B() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    (k || e) && (F(D.id), (k = !1));
}
function Z(e) {
    let { showKeybindIndicators: t } = e;
    t ? G() : B(!0);
}
function F(e) {
    if (I.isPlatformEmbedded) S.ZP.inputEventUnregister(parseInt(e, 10));
    else if (L[e]) {
        let t = x[e],
            n = P[t.action];
        (null == n ? void 0 : n.isPressed) === !0 && C.nextTick(() => n.onTrigger(!1, t)), L[e].reset(), (L[e] = null);
    }
}
function V(e) {
    if (!M || __OVERLAY__) return;
    let { shortcut: t, action: n, enabled: r } = e;
    if ('' === t || null == t || n === y.kg4.UNASSIGNED || !r) return;
    if (null == P[n]) {
        O.error('[kb store] KeybindStore: Looking for callback action '.concat(n, " but it doesn't exist in this version. Skipping"));
        return;
    }
    let i = e.id,
        a = P[n].keyEvents;
    e.action === y.kg4.TOGGLE_MUTE && B(),
        !(function (e, t, n, r) {
            if (I.isPlatformEmbedded) S.ZP.inputEventRegister(parseInt(e), t, n, r);
            else {
                F(e);
                let i = l()(new (s())(document));
                r.keyup && i.bindGlobal((0, b.BB)(t), () => n(!1), 'keyup'), r.keydown && i.bindGlobal((0, b.BB)(t), () => n(!0), 'keydown'), (L[e] = i);
            }
        })(
            i,
            t,
            (e) =>
                (function (e, t) {
                    let n = e === D.id ? D : x[e];
                    null != n && P[n.action].onTrigger(t, n);
                })(i, e),
            {
                focused: !0,
                blurred: !0,
                keydown: !1,
                keyup: !1,
                ...a
            }
        ),
        p.Z.validateKeybind((0, b.BB)(e.shortcut));
}
function j(e) {
    let t = {
        id: w.toString(),
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
        (w += 1),
        t
    );
}
function H(e) {
    F(e.id), (x = { ...x }), delete x[e.id], e.action === y.kg4.TOGGLE_MUTE && G();
}
function Y(e) {
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
            t.action === y.kg4.TOGGLE_OVERLAY_INPUT_LOCK ? v.default.track(y.rMx.OVERLAY_SETTINGS_UPDATED, { hotkey: t.action === y.kg4.TOGGLE_OVERLAY_INPUT_LOCK ? (0, b.BB)(t.shortcut) : null }) : t.action === y.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET && v.default.track(y.rMx.OVERLAY_SETTINGS_UPDATED, { text_activation_hotkey: t.action === y.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET ? (0, b.BB)(t.shortcut) : null })),
        V(t);
}
function W(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return (
        null == f().find(x, (t) => t.action === e && (!n || t.managed === n)) &&
        (V(
            j({
                action: e,
                enabled: !0,
                shortcut: (0, b.Kd)(t),
                managed: !0,
                params: {}
            })
        ),
        !0)
    );
}
let K = [
    function () {
        let e = E.Z.getShortcuts();
        return (
            f().each(x, (t) => {
                t.action === y.kg4.PUSH_TO_TALK && !0 === t.managed && (null == t.context || null == e[t.context]) && H(t);
            }),
            f().reduce(
                E.Z.getShortcuts(),
                (e, t, n) => {
                    let r = f().find(x, (e) => e.action === y.kg4.PUSH_TO_TALK && !0 === e.managed && e.context === n);
                    if (null == r)
                        V(
                            j({
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
                        Y({
                            keybind: {
                                ...r,
                                shortcut: 'string' == typeof t ? (0, b.Kd)(t) : t,
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
    function () {
        return !!T.Z.enabled && W(y.kg4.TOGGLE_OVERLAY_INPUT_LOCK, 'shift+`');
    },
    function () {
        return !!T.Z.enabled && W(y.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, ']`');
    },
    function () {
        return W(y.kg4.SOUNDBOARD_HOLD, N.D_, !1);
    },
    function () {
        return W(y.kg4.SAVE_CLIP, A.D_);
    }
];
function z() {
    return G(), K.reduce((e, t) => t() || e, !1);
}
p.Z.setGetKeybindList(() => {
    let e = [];
    for (let t in x) {
        if (!!x.hasOwnProperty(t)) e.push((0, b.BB)(x[t].shortcut));
    }
    let { showKeybindIndicators: t } = g.Z.getCurrentConfig({ location: 'KeybindsStore' });
    return t && e.push((0, b.BB)(D.shortcut)), e;
});
class q extends (i = _.ZP.DeviceSettingsStore) {
    initialize(e) {
        !__OVERLAY__ && this.waitFor(E.Z, T.Z), (x = null != e ? e : {});
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
            if (f().isEqual(n.shortcut, e)) return !0;
        }
        return !1;
    }
    getKeybindForAction(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            { showKeybindIndicators: r } = g.Z.getCurrentConfig({ location: 'KeybindsStore' }),
            i = f().find(x, (r) => r.action === e && (!t || r.managed) && (!n || (r.shortcut.length > 0 && r.enabled)));
        return null != i ? i : r && e === y.kg4.TOGGLE_MUTE ? D : null;
    }
    getOverlayKeybind() {
        return this.getKeybindForAction(y.kg4.TOGGLE_OVERLAY_INPUT_LOCK, !0);
    }
    getOverlayChatKeybind() {
        return this.getKeybindForAction(y.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, !0);
    }
}
R(q, 'displayName', 'KeybindsStore'),
    R(q, 'persistKey', 'keybinds'),
    R(q, 'migrations', [
        function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                { v: t, keybinds: n = e } = e;
            return f().reduce(n, (e, n, r) => (isNaN(parseInt(n.id, 10)) || n.id !== r ? e : ((null == t || t < 2) && ('string' == typeof n.shortcut ? ((n.shortcut = n.shortcut.replace('escape', 'esc').replace('capslock', 'caps lock').replace('numlock', 'num lock').replace('pageup', 'page up').replace('pagedown', 'page down')), (n.shortcut = (0, b.Kd)(n.shortcut))) : (n.shortcut = n.shortcut.map((e) => (e.length < 3 ? [...e, (0, b.dU)()] : e)))), (e[r] = n), e)), {});
        },
        (e) => e,
        (e) => {
            let { keybinds: t = e } = e;
            return f().reduce(
                t,
                (e, t, n) => {
                    if ((0, I.isLinux)() && t.action === y.kg4.SOUNDBOARD_HOLD) {
                        let n = t.shortcut.map((e) => e[1]),
                            r = (0, b.Kd)('`').map((e) => e[1]);
                        if (c()(n, r)) return e;
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
            f().reduce(
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
    (t.Z = new q(h.Z, {
        CONNECTION_OPEN: z,
        AUDIO_SET_MODE: z,
        OVERLAY_SET_ENABLED: z,
        RPC_APP_CONNECTED: z,
        RPC_APP_DISCONNECTED: z,
        KEYBINDS_ADD_KEYBIND: function (e) {
            let { keybind: t } = e;
            V(j(t));
        },
        KEYBINDS_DELETE_KEYBIND: function (e) {
            let { id: t } = e,
                n = x[t];
            !__OVERLAY__ &&
                v.default.track(y.rMx.USER_SETTINGS_KEYBIND_UPDATED, {
                    keybind_action: n.action,
                    keybind_is_bound: !1,
                    keybind_has_shortcut: !1
                }),
                null != n && H(n);
        },
        KEYBINDS_SET_KEYBIND: Y,
        KEYBINDS_ENABLE_ALL_KEYBINDS: function (e) {
            let { enable: t } = e;
            (M = t), t ? (p.Z.enable(), f().forEach(x, V), G()) : (p.Z.disable(), f().forEach(x, (e) => F(e.id)), B());
        },
        KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS: function (e) {
            let { keybinds: t } = e;
            (P = t),
                (L = {}),
                (w = 0),
                Object.values(x).filter((e) => U.includes(e.action) && e.managed).length !== U.length && z(),
                f().forEach(x, (e) => {
                    w = Math.max(parseInt(e.id, 10), w) + 1;
                    try {
                        V(e);
                    } catch (t) {
                        O.error('Failed to register keybind', e, t);
                    }
                }),
                (M = !0),
                null == r && (r = g.Z.subscribe({ location: 'KeybindsStore' }, Z));
        }
    }));
