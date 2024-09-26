n.d(t, {
    E: function () {
        return Q;
    },
    Fc: function () {
        return ec;
    },
    Jz: function () {
        return X;
    },
    KK: function () {
        return w;
    },
    Kf: function () {
        return J;
    },
    L_: function () {
        return er;
    },
    TA: function () {
        return em;
    },
    XI: function () {
        return eu;
    },
    _w: function () {
        return $;
    },
    mG: function () {
        return en;
    },
    mk: function () {
        return M;
    },
    r7: function () {
        return T;
    },
    r_: function () {
        return ef;
    },
    v5: function () {
        return eE;
    },
    y0: function () {
        return eh;
    }
});
var r = n(182823),
    i = n(470079),
    a = n(651512),
    o = n(410914),
    s = n(846135),
    l = n(230012);
let u = 'default',
    c = '',
    d = new WeakMap();
function _(e) {
    if ((0, r.gn)()) {
        if ('default' === u) {
            let t = (0, r.r3)(e);
            (c = t.documentElement.style.webkitUserSelect), (t.documentElement.style.webkitUserSelect = 'none');
        }
        u = 'disabled';
    } else (e instanceof HTMLElement || e instanceof SVGElement) && (d.set(e, e.style.userSelect), (e.style.userSelect = 'none'));
}
function E(e) {
    if ((0, r.gn)())
        'disabled' === u &&
            ((u = 'restoring'),
            setTimeout(() => {
                (0, r.QB)(() => {
                    if ('restoring' === u) {
                        let t = (0, r.r3)(e);
                        'none' === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = c || ''), (c = ''), (u = 'default');
                    }
                });
            }, 300));
    else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && d.has(e)) {
        let t = d.get(e);
        'none' === e.style.userSelect && (e.style.userSelect = t), '' === e.getAttribute('style') && e.removeAttribute('style'), d.delete(e);
    }
}
let f = i.createContext({
    register: () => {}
});
function h(e) {
    let t = (0, i.useContext)(f);
    if (t) {
        let { register: n, ...i } = t;
        (e = (0, r.dG)(i, e)), n();
    }
    return (0, r.lE)(t, e.ref), e;
}
f.displayName = 'PressResponderContext';
var p = new WeakMap();
class m {
    continuePropagation() {
        (0, s._)(this, p, !1);
    }
    get shouldStopPropagation() {
        return (0, a._)(this, p);
    }
    constructor(e, t, n) {
        (0, o._)(this, p, {
            writable: !0,
            value: void 0
        }),
            (0, s._)(this, p, !0),
            (this.type = e),
            (this.pointerType = t),
            (this.target = n.currentTarget),
            (this.shiftKey = n.shiftKey),
            (this.metaKey = n.metaKey),
            (this.ctrlKey = n.ctrlKey),
            (this.altKey = n.altKey);
    }
}
let I = Symbol('linkClicked');
function T(e) {
    let { onPress: t, onPressChange: n, onPressStart: a, onPressEnd: o, onPressUp: s, isDisabled: l, isPressed: u, preventFocusOnPress: c, shouldCancelOnPointerExit: d, allowTextSelectionOnPress: f, ref: p, ...T } = h(e),
        [O, R] = (0, i.useState)(!1),
        b = (0, i.useRef)({
            isPressed: !1,
            ignoreEmulatedMouseEvents: !1,
            ignoreClickAfterPress: !1,
            didFirePressStart: !1,
            isTriggeringEvent: !1,
            activePointerId: null,
            target: null,
            isOverTarget: !1,
            pointerType: null
        }),
        { addGlobalListener: D, removeAllGlobalListeners: M } = (0, r.xi)(),
        P = (0, r.iW)((e, t) => {
            let r = b.current;
            if (l || r.didFirePressStart) return !1;
            let i = !0;
            if (((r.isTriggeringEvent = !0), a)) {
                let n = new m('pressstart', t, e);
                a(n), (i = n.shouldStopPropagation);
            }
            return n && n(!0), (r.isTriggeringEvent = !1), (r.didFirePressStart = !0), R(!0), i;
        }),
        U = (0, r.iW)((e, r, i = !0) => {
            let a = b.current;
            if (!a.didFirePressStart) return !1;
            (a.ignoreClickAfterPress = !0), (a.didFirePressStart = !1), (a.isTriggeringEvent = !0);
            let s = !0;
            if (o) {
                let t = new m('pressend', r, e);
                o(t), (s = t.shouldStopPropagation);
            }
            if ((n && n(!1), R(!1), t && i && !l)) {
                let n = new m('press', r, e);
                t(n), s && (s = n.shouldStopPropagation);
            }
            return (a.isTriggeringEvent = !1), s;
        }),
        w = (0, r.iW)((e, t) => {
            let n = b.current;
            if (l) return !1;
            if (s) {
                n.isTriggeringEvent = !0;
                let r = new m('pressup', t, e);
                return s(r), (n.isTriggeringEvent = !1), r.shouldStopPropagation;
            }
            return !0;
        }),
        x = (0, r.iW)((e) => {
            let t = b.current;
            t.isPressed && t.target && (t.isOverTarget && null != t.pointerType && U(N(t.target, e), t.pointerType, !1), (t.isPressed = !1), (t.isOverTarget = !1), (t.activePointerId = null), (t.pointerType = null), M(), !f && E(t.target));
        }),
        G = (0, r.iW)((e) => {
            d && x(e);
        }),
        k = (0, i.useMemo)(() => {
            let e = b.current,
                t = {
                    onKeyDown(t) {
                        if (S(t.nativeEvent, t.currentTarget) && t.currentTarget.contains(t.target)) {
                            var i;
                            L(t.target, t.key) && t.preventDefault();
                            let a = !0;
                            !e.isPressed && !t.repeat && ((e.target = t.currentTarget), (e.isPressed = !0), (a = P(t, 'keyboard')), D((0, r.r3)(t.currentTarget), 'keyup', n, !1)), a && t.stopPropagation(), t.metaKey && (0, r.V5)() && (null === (i = e.metaKeyEvents) || void 0 === i || i.set(t.key, t.nativeEvent));
                        } else 'Meta' === t.key && (e.metaKeyEvents = new Map());
                    },
                    onKeyUp(t) {
                        S(t.nativeEvent, t.currentTarget) && !t.repeat && t.currentTarget.contains(t.target) && e.target && w(N(e.target, t), 'keyboard');
                    },
                    onClick(t) {
                        if ((!t || t.currentTarget.contains(t.target)) && t && 0 === t.button && !e.isTriggeringEvent && !r.nG.isOpening) {
                            let n = !0;
                            if ((l && t.preventDefault(), !e.ignoreClickAfterPress && !e.ignoreEmulatedMouseEvents && !e.isPressed && ('virtual' === e.pointerType || (0, r.Zj)(t.nativeEvent)))) {
                                !l && !c && (0, r.Ao)(t.currentTarget);
                                let e = P(t, 'virtual'),
                                    i = w(t, 'virtual'),
                                    a = U(t, 'virtual');
                                n = e && i && a;
                            }
                            (e.ignoreEmulatedMouseEvents = !1), (e.ignoreClickAfterPress = !1), n && t.stopPropagation();
                        }
                    }
                },
                n = (t) => {
                    var n, i, a;
                    if (e.isPressed && e.target && S(t, e.target)) {
                        L(t.target, t.key) && t.preventDefault();
                        let n = t.target,
                            a = U(N(e.target, t), 'keyboard', e.target.contains(n));
                        M(), a && t.stopPropagation(), 'Enter' !== t.key && g(e.target) && e.target.contains(n) && !t[I] && ((t[I] = !0), (0, r.nG)(e.target, t, !1)), (e.isPressed = !1), null === (i = e.metaKeyEvents) || void 0 === i || i.delete(t.key);
                    } else if ('Meta' === t.key && (null === (n = e.metaKeyEvents) || void 0 === n ? void 0 : n.size)) {
                        let t = e.metaKeyEvents;
                        for (let n of ((e.metaKeyEvents = void 0), t.values())) null === (a = e.target) || void 0 === a || a.dispatchEvent(new KeyboardEvent('keyup', n));
                    }
                };
            if ('undefined' != typeof PointerEvent) {
                (t.onPointerDown = (t) => {
                    if (0 !== t.button || !t.currentTarget.contains(t.target)) return;
                    if ((0, r.cr)(t.nativeEvent)) {
                        e.pointerType = 'virtual';
                        return;
                    }
                    y(t.currentTarget) && t.preventDefault(), (e.pointerType = t.pointerType);
                    let o = !0;
                    !e.isPressed && ((e.isPressed = !0), (e.isOverTarget = !0), (e.activePointerId = t.pointerId), (e.target = t.currentTarget), !l && !c && (0, r.Ao)(t.currentTarget), !f && _(e.target), (o = P(t, e.pointerType)), D((0, r.r3)(t.currentTarget), 'pointermove', n, !1), D((0, r.r3)(t.currentTarget), 'pointerup', i, !1), D((0, r.r3)(t.currentTarget), 'pointercancel', a, !1)), o && t.stopPropagation();
                }),
                    (t.onMouseDown = (e) => {
                        e.currentTarget.contains(e.target) && 0 === e.button && (y(e.currentTarget) && e.preventDefault(), e.stopPropagation());
                    }),
                    (t.onPointerUp = (t) => {
                        t.currentTarget.contains(t.target) && 'virtual' !== e.pointerType && 0 === t.button && C(t, t.currentTarget) && w(t, e.pointerType || t.pointerType);
                    });
                let n = (t) => {
                        t.pointerId === e.activePointerId && (e.target && C(t, e.target) ? !e.isOverTarget && null != e.pointerType && ((e.isOverTarget = !0), P(N(e.target, t), e.pointerType)) : e.target && e.isOverTarget && null != e.pointerType && ((e.isOverTarget = !1), U(N(e.target, t), e.pointerType, !1), G(t)));
                    },
                    i = (t) => {
                        t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target && (C(t, e.target) && null != e.pointerType ? U(N(e.target, t), e.pointerType) : e.isOverTarget && null != e.pointerType && U(N(e.target, t), e.pointerType, !1), (e.isPressed = !1), (e.isOverTarget = !1), (e.activePointerId = null), (e.pointerType = null), M(), !f && E(e.target));
                    },
                    a = (e) => {
                        x(e);
                    };
                t.onDragStart = (e) => {
                    e.currentTarget.contains(e.target) && x(e);
                };
            } else {
                (t.onMouseDown = (t) => {
                    if (0 === t.button && !!t.currentTarget.contains(t.target)) {
                        if ((y(t.currentTarget) && t.preventDefault(), e.ignoreEmulatedMouseEvents)) {
                            t.stopPropagation();
                            return;
                        }
                        (e.isPressed = !0), (e.isOverTarget = !0), (e.target = t.currentTarget), (e.pointerType = (0, r.Zj)(t.nativeEvent) ? 'virtual' : 'mouse'), !l && !c && (0, r.Ao)(t.currentTarget), P(t, e.pointerType) && t.stopPropagation(), D((0, r.r3)(t.currentTarget), 'mouseup', n, !1);
                    }
                }),
                    (t.onMouseEnter = (t) => {
                        if (!t.currentTarget.contains(t.target)) return;
                        let n = !0;
                        e.isPressed && !e.ignoreEmulatedMouseEvents && null != e.pointerType && ((e.isOverTarget = !0), (n = P(t, e.pointerType))), n && t.stopPropagation();
                    }),
                    (t.onMouseLeave = (t) => {
                        if (!t.currentTarget.contains(t.target)) return;
                        let n = !0;
                        e.isPressed && !e.ignoreEmulatedMouseEvents && null != e.pointerType && ((e.isOverTarget = !1), (n = U(t, e.pointerType, !1)), G(t)), n && t.stopPropagation();
                    }),
                    (t.onMouseUp = (t) => {
                        t.currentTarget.contains(t.target) && !e.ignoreEmulatedMouseEvents && 0 === t.button && w(t, e.pointerType || 'mouse');
                    });
                let n = (t) => {
                    if (0 === t.button) {
                        if (((e.isPressed = !1), M(), e.ignoreEmulatedMouseEvents)) {
                            e.ignoreEmulatedMouseEvents = !1;
                            return;
                        }
                        e.target && C(t, e.target) && null != e.pointerType ? U(N(e.target, t), e.pointerType) : e.target && e.isOverTarget && null != e.pointerType && U(N(e.target, t), e.pointerType, !1), (e.isOverTarget = !1);
                    }
                };
                (t.onTouchStart = (t) => {
                    if (!t.currentTarget.contains(t.target)) return;
                    let n = A(t.nativeEvent);
                    if (!!n) (e.activePointerId = n.identifier), (e.ignoreEmulatedMouseEvents = !0), (e.isOverTarget = !0), (e.isPressed = !0), (e.target = t.currentTarget), (e.pointerType = 'touch'), !l && !c && (0, r.Ao)(t.currentTarget), !f && _(e.target), P(t, e.pointerType) && t.stopPropagation(), D((0, r.kR)(t.currentTarget), 'scroll', i, !0);
                }),
                    (t.onTouchMove = (t) => {
                        if (!t.currentTarget.contains(t.target)) return;
                        if (!e.isPressed) {
                            t.stopPropagation();
                            return;
                        }
                        let n = v(t.nativeEvent, e.activePointerId),
                            r = !0;
                        n && C(n, t.currentTarget) ? !e.isOverTarget && null != e.pointerType && ((e.isOverTarget = !0), (r = P(t, e.pointerType))) : e.isOverTarget && null != e.pointerType && ((e.isOverTarget = !1), (r = U(t, e.pointerType, !1)), G(t)), r && t.stopPropagation();
                    }),
                    (t.onTouchEnd = (t) => {
                        if (!t.currentTarget.contains(t.target)) return;
                        if (!e.isPressed) {
                            t.stopPropagation();
                            return;
                        }
                        let n = v(t.nativeEvent, e.activePointerId),
                            r = !0;
                        n && C(n, t.currentTarget) && null != e.pointerType ? (w(t, e.pointerType), (r = U(t, e.pointerType))) : e.isOverTarget && null != e.pointerType && (r = U(t, e.pointerType, !1)), r && t.stopPropagation(), (e.isPressed = !1), (e.activePointerId = null), (e.isOverTarget = !1), (e.ignoreEmulatedMouseEvents = !0), e.target && !f && E(e.target), M();
                    }),
                    (t.onTouchCancel = (t) => {
                        t.currentTarget.contains(t.target) && (t.stopPropagation(), e.isPressed && x(t));
                    });
                let i = (t) => {
                    e.isPressed &&
                        t.target.contains(e.target) &&
                        x({
                            currentTarget: e.target,
                            shiftKey: !1,
                            ctrlKey: !1,
                            metaKey: !1,
                            altKey: !1
                        });
                };
                t.onDragStart = (e) => {
                    e.currentTarget.contains(e.target) && x(e);
                };
            }
            return t;
        }, [D, l, c, M, f, x, G, U, P, w]);
    return (
        (0, i.useEffect)(
            () => () => {
                var e;
                !f && E(null !== (e = b.current.target) && void 0 !== e ? e : void 0);
            },
            [f]
        ),
        {
            isPressed: u || O,
            pressProps: (0, r.dG)(T, k)
        }
    );
}
function g(e) {
    return 'A' === e.tagName && e.hasAttribute('href');
}
function S(e, t) {
    let { key: n, code: i } = e,
        a = t,
        o = a.getAttribute('role');
    return ('Enter' === n || ' ' === n || 'Spacebar' === n || 'Space' === i) && !((a instanceof (0, r.kR)(a).HTMLInputElement && !D(a, n)) || a instanceof (0, r.kR)(a).HTMLTextAreaElement || a.isContentEditable) && !(('link' === o || (!o && g(a))) && 'Enter' !== n);
}
function A(e) {
    let { targetTouches: t } = e;
    return t.length > 0 ? t[0] : null;
}
function v(e, t) {
    let n = e.changedTouches;
    for (let e = 0; e < n.length; e++) {
        let r = n[e];
        if (r.identifier === t) return r;
    }
    return null;
}
function N(e, t) {
    return {
        currentTarget: e,
        shiftKey: t.shiftKey,
        ctrlKey: t.ctrlKey,
        metaKey: t.metaKey,
        altKey: t.altKey
    };
}
function O(e) {
    let t = 0,
        n = 0;
    return (
        void 0 !== e.width ? (t = e.width / 2) : void 0 !== e.radiusX && (t = e.radiusX),
        void 0 !== e.height ? (n = e.height / 2) : void 0 !== e.radiusY && (n = e.radiusY),
        {
            top: e.clientY - n,
            right: e.clientX + t,
            bottom: e.clientY + n,
            left: e.clientX - t
        }
    );
}
function R(e, t) {
    return !(e.left > t.right) && !(t.left > e.right) && !(e.top > t.bottom) && !(t.top > e.bottom) && !0;
}
function C(e, t) {
    return R(t.getBoundingClientRect(), O(e));
}
function y(e) {
    return !(e instanceof HTMLElement) || !e.hasAttribute('draggable');
}
function L(e, t) {
    return e instanceof HTMLInputElement ? !D(e, t) : e instanceof HTMLButtonElement ? 'submit' !== e.type && 'reset' !== e.type : !g(e) && !0;
}
let b = new Set(['checkbox', 'radio', 'range', 'color', 'file', 'image', 'button', 'submit', 'reset']);
function D(e, t) {
    return 'checkbox' === e.type || 'radio' === e.type ? ' ' === t : b.has(e.type);
}
function M({ children: e }) {
    let t = (0, i.useMemo)(
        () => ({
            register: () => {}
        }),
        []
    );
    return i.createElement(f.Provider, { value: t }, e);
}
class P {
    isDefaultPrevented() {
        return this.nativeEvent.defaultPrevented;
    }
    preventDefault() {
        (this.defaultPrevented = !0), this.nativeEvent.preventDefault();
    }
    stopPropagation() {
        this.nativeEvent.stopPropagation(), (this.isPropagationStopped = () => !0);
    }
    isPropagationStopped() {
        return !1;
    }
    persist() {}
    constructor(e, t) {
        (this.nativeEvent = t), (this.target = t.target), (this.currentTarget = t.currentTarget), (this.relatedTarget = t.relatedTarget), (this.bubbles = t.bubbles), (this.cancelable = t.cancelable), (this.defaultPrevented = t.defaultPrevented), (this.eventPhase = t.eventPhase), (this.isTrusted = t.isTrusted), (this.timeStamp = t.timeStamp), (this.type = e);
    }
}
function U(e) {
    let t = (0, i.useRef)({
        isFocused: !1,
        observer: null
    });
    (0, r.bt)(() => {
        let e = t.current;
        return () => {
            e.observer && (e.observer.disconnect(), (e.observer = null));
        };
    }, []);
    let n = (0, r.iW)((t) => {
        null == e || e(t);
    });
    return (0, i.useCallback)(
        (e) => {
            if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
                t.current.isFocused = !0;
                let r = e.target,
                    i = (e) => {
                        (t.current.isFocused = !1), r.disabled && n(new P('blur', e)), t.current.observer && (t.current.observer.disconnect(), (t.current.observer = null));
                    };
                r.addEventListener('focusout', i, { once: !0 }),
                    (t.current.observer = new MutationObserver(() => {
                        if (t.current.isFocused && r.disabled) {
                            var e;
                            null === (e = t.current.observer) || void 0 === e || e.disconnect();
                            let n = r === document.activeElement ? null : document.activeElement;
                            r.dispatchEvent(new FocusEvent('blur', { relatedTarget: n })),
                                r.dispatchEvent(
                                    new FocusEvent('focusout', {
                                        bubbles: !0,
                                        relatedTarget: n
                                    })
                                );
                        }
                    })),
                    t.current.observer.observe(r, {
                        attributes: !0,
                        attributeFilter: ['disabled']
                    });
            }
        },
        [n]
    );
}
function w(e) {
    let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: a } = e,
        o = (0, i.useCallback)(
            (e) => {
                if (e.target === e.currentTarget) return r && r(e), a && a(!1), !0;
            },
            [r, a]
        ),
        s = U(o),
        l = (0, i.useCallback)(
            (e) => {
                e.target === e.currentTarget && document.activeElement === e.target && (n && n(e), a && a(!0), s(e));
            },
            [a, n, s]
        );
    return {
        focusProps: {
            onFocus: !t && (n || a || r) ? l : void 0,
            onBlur: !t && (r || a) ? o : void 0
        }
    };
}
let x = null,
    G = new Set(),
    k = !1,
    B = !1,
    F = !1,
    Z = {
        Tab: !0,
        Escape: !0
    };
function V(e, t) {
    for (let n of G) n(e, t);
}
function H(e) {
    return !(e.metaKey || (!(0, r.V5)() && e.altKey) || e.ctrlKey || 'Control' === e.key || 'Shift' === e.key || 'Meta' === e.key);
}
function Y(e) {
    (B = !0), H(e) && ((x = 'keyboard'), V('keyboard', e));
}
function j(e) {
    (x = 'pointer'), ('mousedown' === e.type || 'pointerdown' === e.type) && ((B = !0), V('pointer', e));
}
function W(e) {
    (0, r.Zj)(e) && ((B = !0), (x = 'virtual'));
}
function K(e) {
    e.target !== window && e.target !== document && (!B && !F && ((x = 'virtual'), V('virtual', e)), (B = !1), (F = !1));
}
function z() {
    (B = !1), (F = !0);
}
function q() {
    if ('undefined' == typeof window || k) return;
    let e = HTMLElement.prototype.focus;
    (HTMLElement.prototype.focus = function () {
        (B = !0), e.apply(this, arguments);
    }),
        document.addEventListener('keydown', Y, !0),
        document.addEventListener('keyup', Y, !0),
        document.addEventListener('click', W, !0),
        window.addEventListener('focus', K, !0),
        window.addEventListener('blur', z, !1),
        'undefined' != typeof PointerEvent ? (document.addEventListener('pointerdown', j, !0), document.addEventListener('pointermove', j, !0), document.addEventListener('pointerup', j, !0)) : (document.addEventListener('mousedown', j, !0), document.addEventListener('mousemove', j, !0), document.addEventListener('mouseup', j, !0)),
        (k = !0);
}
function Q() {
    return 'pointer' !== x;
}
function X() {
    return x;
}
function $(e) {
    (x = e), V(e, null);
}
function J() {
    q();
    let [e, t] = (0, i.useState)(x);
    return (
        (0, i.useEffect)(() => {
            let e = () => {
                t(x);
            };
            return (
                G.add(e),
                () => {
                    G.delete(e);
                }
            );
        }, []),
        (0, l.Av)() ? null : e
    );
}
'undefined' != typeof document && ('loading' !== document.readyState ? q() : document.addEventListener('DOMContentLoaded', q));
let ee = new Set(['checkbox', 'radio', 'range', 'color', 'file', 'image', 'button', 'submit', 'reset']);
function et(e, t, n) {
    var r;
    return !((e = e || ((null == n ? void 0 : n.target) instanceof HTMLInputElement && !ee.has(null == n ? void 0 : null === (r = n.target) || void 0 === r ? void 0 : r.type)) || (null == n ? void 0 : n.target) instanceof HTMLTextAreaElement || ((null == n ? void 0 : n.target) instanceof HTMLElement && (null == n ? void 0 : n.target.isContentEditable))) && 'keyboard' === t && n instanceof KeyboardEvent && !Z[n.key]);
}
function en(e, t, n) {
    q(),
        (0, i.useEffect)(() => {
            let t = (t, r) => {
                et(!!(null == n ? void 0 : n.isTextInput), t, r) && e(Q());
            };
            return (
                G.add(t),
                () => {
                    G.delete(t);
                }
            );
        }, t);
}
function er(e) {
    let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: a } = e,
        o = (0, i.useRef)({ isFocusWithin: !1 }),
        s = (0, i.useCallback)(
            (e) => {
                o.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && ((o.current.isFocusWithin = !1), n && n(e), a && a(!1));
            },
            [n, a, o]
        ),
        l = U(s),
        u = (0, i.useCallback)(
            (e) => {
                !o.current.isFocusWithin && document.activeElement === e.target && (r && r(e), a && a(!0), (o.current.isFocusWithin = !0), l(e));
            },
            [r, a, l]
        );
    return t
        ? {
              focusWithinProps: {
                  onFocus: void 0,
                  onBlur: void 0
              }
          }
        : {
              focusWithinProps: {
                  onFocus: u,
                  onBlur: s
              }
          };
}
let ei = !1,
    ea = 0;
function eo() {
    (ei = !0),
        setTimeout(() => {
            ei = !1;
        }, 50);
}
function es(e) {
    'touch' === e.pointerType && eo();
}
function el() {
    if ('undefined' != typeof document)
        return (
            'undefined' != typeof PointerEvent ? document.addEventListener('pointerup', es) : document.addEventListener('touchend', eo),
            ea++,
            () => {
                !(--ea > 0) && ('undefined' != typeof PointerEvent ? document.removeEventListener('pointerup', es) : document.removeEventListener('touchend', eo));
            }
        );
}
function eu(e) {
    let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: a } = e,
        [o, s] = (0, i.useState)(!1),
        l = (0, i.useRef)({
            isHovered: !1,
            ignoreEmulatedMouseEvents: !1,
            pointerType: '',
            target: null
        }).current;
    (0, i.useEffect)(el, []);
    let { hoverProps: u, triggerHoverEnd: c } = (0, i.useMemo)(() => {
        let e = (e, r) => {
                if (((l.pointerType = r), a || 'touch' === r || l.isHovered || !e.currentTarget.contains(e.target))) return;
                l.isHovered = !0;
                let i = e.currentTarget;
                (l.target = i),
                    t &&
                        t({
                            type: 'hoverstart',
                            target: i,
                            pointerType: r
                        }),
                    n && n(!0),
                    s(!0);
            },
            i = (e, t) => {
                if (((l.pointerType = ''), (l.target = null), 'touch' === t || !l.isHovered)) return;
                l.isHovered = !1;
                let i = e.currentTarget;
                r &&
                    r({
                        type: 'hoverend',
                        target: i,
                        pointerType: t
                    }),
                    n && n(!1),
                    s(!1);
            },
            o = {};
        return (
            'undefined' != typeof PointerEvent
                ? ((o.onPointerEnter = (t) => {
                      (!ei || 'mouse' !== t.pointerType) && e(t, t.pointerType);
                  }),
                  (o.onPointerLeave = (e) => {
                      !a && e.currentTarget.contains(e.target) && i(e, e.pointerType);
                  }))
                : ((o.onTouchStart = () => {
                      l.ignoreEmulatedMouseEvents = !0;
                  }),
                  (o.onMouseEnter = (t) => {
                      !l.ignoreEmulatedMouseEvents && !ei && e(t, 'mouse'), (l.ignoreEmulatedMouseEvents = !1);
                  }),
                  (o.onMouseLeave = (e) => {
                      !a && e.currentTarget.contains(e.target) && i(e, 'mouse');
                  })),
            {
                hoverProps: o,
                triggerHoverEnd: i
            }
        );
    }, [t, n, r, a, l]);
    return (
        (0, i.useEffect)(() => {
            a && c({ currentTarget: l.target }, l.pointerType);
        }, [a]),
        {
            hoverProps: u,
            isHovered: o
        }
    );
}
function ec(e) {
    let { ref: t, onInteractOutside: n, isDisabled: a, onInteractOutsideStart: o } = e,
        s = (0, i.useRef)({
            isPointerDown: !1,
            ignoreEmulatedMouseEvents: !1
        }),
        l = (0, r.iW)((e) => {
            n && ed(e, t) && (o && o(e), (s.current.isPointerDown = !0));
        }),
        u = (0, r.iW)((e) => {
            n && n(e);
        });
    (0, i.useEffect)(() => {
        let e = s.current;
        if (a) return;
        let n = t.current,
            i = (0, r.r3)(n);
        if ('undefined' != typeof PointerEvent) {
            let n = (n) => {
                e.isPointerDown && ed(n, t) && u(n), (e.isPointerDown = !1);
            };
            return (
                i.addEventListener('pointerdown', l, !0),
                i.addEventListener('pointerup', n, !0),
                () => {
                    i.removeEventListener('pointerdown', l, !0), i.removeEventListener('pointerup', n, !0);
                }
            );
        }
        {
            let n = (n) => {
                    e.ignoreEmulatedMouseEvents ? (e.ignoreEmulatedMouseEvents = !1) : e.isPointerDown && ed(n, t) && u(n), (e.isPointerDown = !1);
                },
                r = (n) => {
                    (e.ignoreEmulatedMouseEvents = !0), e.isPointerDown && ed(n, t) && u(n), (e.isPointerDown = !1);
                };
            return (
                i.addEventListener('mousedown', l, !0),
                i.addEventListener('mouseup', n, !0),
                i.addEventListener('touchstart', l, !0),
                i.addEventListener('touchend', r, !0),
                () => {
                    i.removeEventListener('mousedown', l, !0), i.removeEventListener('mouseup', n, !0), i.removeEventListener('touchstart', l, !0), i.removeEventListener('touchend', r, !0);
                }
            );
        }
    }, [t, a, l, u]);
}
function ed(e, t) {
    if (e.button > 0) return !1;
    if (e.target) {
        let t = e.target.ownerDocument;
        if (!t || !t.documentElement.contains(e.target) || e.target.closest('[data-react-aria-top-layer]')) return !1;
    }
    return t.current && !t.current.contains(e.target);
}
function e_(e) {
    if (!e) return;
    let t = !0;
    return (n) => {
        e({
            ...n,
            preventDefault() {
                n.preventDefault();
            },
            isDefaultPrevented: () => n.isDefaultPrevented(),
            stopPropagation() {
                console.error('stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.');
            },
            continuePropagation() {
                t = !1;
            }
        }),
            t && n.stopPropagation();
    };
}
function eE(e) {
    return {
        keyboardProps: e.isDisabled
            ? {}
            : {
                  onKeyDown: e_(e.onKeyDown),
                  onKeyUp: e_(e.onKeyUp)
              }
    };
}
function ef(e) {
    let { onMoveStart: t, onMove: n, onMoveEnd: a } = e,
        o = (0, i.useRef)({
            didMove: !1,
            lastPosition: null,
            id: null
        }),
        { addGlobalListener: s, removeGlobalListener: l } = (0, r.xi)(),
        u = (0, r.iW)((e, r, i, a) => {
            (0 !== i || 0 !== a) &&
                (!o.current.didMove &&
                    ((o.current.didMove = !0),
                    null == t ||
                        t({
                            type: 'movestart',
                            pointerType: r,
                            shiftKey: e.shiftKey,
                            metaKey: e.metaKey,
                            ctrlKey: e.ctrlKey,
                            altKey: e.altKey
                        })),
                null == n ||
                    n({
                        type: 'move',
                        pointerType: r,
                        deltaX: i,
                        deltaY: a,
                        shiftKey: e.shiftKey,
                        metaKey: e.metaKey,
                        ctrlKey: e.ctrlKey,
                        altKey: e.altKey
                    }));
        }),
        c = (0, r.iW)((e, t) => {
            E(),
                o.current.didMove &&
                    (null == a ||
                        a({
                            type: 'moveend',
                            pointerType: t,
                            shiftKey: e.shiftKey,
                            metaKey: e.metaKey,
                            ctrlKey: e.ctrlKey,
                            altKey: e.altKey
                        }));
        });
    return {
        moveProps: (0, i.useMemo)(() => {
            let e = {},
                t = () => {
                    _(), (o.current.didMove = !1);
                };
            if ('undefined' == typeof PointerEvent) {
                let n = (e) => {
                        if (0 === e.button) {
                            var t, n, r, i;
                            u(e, 'mouse', e.pageX - (null !== (r = null === (t = o.current.lastPosition) || void 0 === t ? void 0 : t.pageX) && void 0 !== r ? r : 0), e.pageY - (null !== (i = null === (n = o.current.lastPosition) || void 0 === n ? void 0 : n.pageY) && void 0 !== i ? i : 0)),
                                (o.current.lastPosition = {
                                    pageX: e.pageX,
                                    pageY: e.pageY
                                });
                        }
                    },
                    r = (e) => {
                        0 === e.button && (c(e, 'mouse'), l(window, 'mousemove', n, !1), l(window, 'mouseup', r, !1));
                    };
                e.onMouseDown = (e) => {
                    0 === e.button &&
                        (t(),
                        e.stopPropagation(),
                        e.preventDefault(),
                        (o.current.lastPosition = {
                            pageX: e.pageX,
                            pageY: e.pageY
                        }),
                        s(window, 'mousemove', n, !1),
                        s(window, 'mouseup', r, !1));
                };
                let i = (e) => {
                        let t = [...e.changedTouches].findIndex(({ identifier: e }) => e === o.current.id);
                        if (t >= 0) {
                            var n, r, i, a;
                            let { pageX: s, pageY: l } = e.changedTouches[t];
                            u(e, 'touch', s - (null !== (i = null === (n = o.current.lastPosition) || void 0 === n ? void 0 : n.pageX) && void 0 !== i ? i : 0), l - (null !== (a = null === (r = o.current.lastPosition) || void 0 === r ? void 0 : r.pageY) && void 0 !== a ? a : 0)),
                                (o.current.lastPosition = {
                                    pageX: s,
                                    pageY: l
                                });
                        }
                    },
                    a = (e) => {
                        [...e.changedTouches].findIndex(({ identifier: e }) => e === o.current.id) >= 0 && (c(e, 'touch'), (o.current.id = null), l(window, 'touchmove', i), l(window, 'touchend', a), l(window, 'touchcancel', a));
                    };
                e.onTouchStart = (e) => {
                    if (0 === e.changedTouches.length || null != o.current.id) return;
                    let { pageX: n, pageY: r, identifier: l } = e.changedTouches[0];
                    t(),
                        e.stopPropagation(),
                        e.preventDefault(),
                        (o.current.lastPosition = {
                            pageX: n,
                            pageY: r
                        }),
                        (o.current.id = l),
                        s(window, 'touchmove', i, !1),
                        s(window, 'touchend', a, !1),
                        s(window, 'touchcancel', a, !1);
                };
            } else {
                let n = (e) => {
                        if (e.pointerId === o.current.id) {
                            var t, n, r, i;
                            let a = e.pointerType || 'mouse';
                            u(e, a, e.pageX - (null !== (r = null === (t = o.current.lastPosition) || void 0 === t ? void 0 : t.pageX) && void 0 !== r ? r : 0), e.pageY - (null !== (i = null === (n = o.current.lastPosition) || void 0 === n ? void 0 : n.pageY) && void 0 !== i ? i : 0)),
                                (o.current.lastPosition = {
                                    pageX: e.pageX,
                                    pageY: e.pageY
                                });
                        }
                    },
                    r = (e) => {
                        if (e.pointerId === o.current.id) {
                            let t = e.pointerType || 'mouse';
                            c(e, t), (o.current.id = null), l(window, 'pointermove', n, !1), l(window, 'pointerup', r, !1), l(window, 'pointercancel', r, !1);
                        }
                    };
                e.onPointerDown = (e) => {
                    0 === e.button &&
                        null == o.current.id &&
                        (t(),
                        e.stopPropagation(),
                        e.preventDefault(),
                        (o.current.lastPosition = {
                            pageX: e.pageX,
                            pageY: e.pageY
                        }),
                        (o.current.id = e.pointerId),
                        s(window, 'pointermove', n, !1),
                        s(window, 'pointerup', r, !1),
                        s(window, 'pointercancel', r, !1));
                };
            }
            let n = (e, n, r) => {
                t(), u(e, 'keyboard', n, r), c(e, 'keyboard');
            };
            return (
                (e.onKeyDown = (e) => {
                    switch (e.key) {
                        case 'Left':
                        case 'ArrowLeft':
                            e.preventDefault(), e.stopPropagation(), n(e, -1, 0);
                            break;
                        case 'Right':
                        case 'ArrowRight':
                            e.preventDefault(), e.stopPropagation(), n(e, 1, 0);
                            break;
                        case 'Up':
                        case 'ArrowUp':
                            e.preventDefault(), e.stopPropagation(), n(e, 0, -1);
                            break;
                        case 'Down':
                        case 'ArrowDown':
                            e.preventDefault(), e.stopPropagation(), n(e, 0, 1);
                    }
                }),
                e
            );
        }, [o, s, l, u, c])
    };
}
function eh(e, t) {
    let { onScroll: n, isDisabled: a } = e,
        o = (0, i.useCallback)(
            (e) => {
                !e.ctrlKey &&
                    (e.preventDefault(),
                    e.stopPropagation(),
                    n &&
                        n({
                            deltaX: e.deltaX,
                            deltaY: e.deltaY
                        }));
            },
            [n]
        );
    (0, r.zX)(t, 'wheel', a ? void 0 : o);
}
let ep = 500;
function em(e) {
    let { isDisabled: t, onLongPressStart: n, onLongPressEnd: a, onLongPress: o, threshold: s = ep, accessibilityDescription: l } = e,
        u = (0, i.useRef)(),
        { addGlobalListener: c, removeGlobalListener: d } = (0, r.xi)(),
        { pressProps: _ } = T({
            isDisabled: t,
            onPressStart(e) {
                if (
                    (e.continuePropagation(),
                    ('mouse' === e.pointerType || 'touch' === e.pointerType) &&
                        (n &&
                            n({
                                ...e,
                                type: 'longpressstart'
                            }),
                        (u.current = setTimeout(() => {
                            e.target.dispatchEvent(new PointerEvent('pointercancel', { bubbles: !0 })),
                                o &&
                                    o({
                                        ...e,
                                        type: 'longpress'
                                    }),
                                (u.current = void 0);
                        }, s)),
                        'touch' === e.pointerType))
                ) {
                    let t = (e) => {
                        e.preventDefault();
                    };
                    c(e.target, 'contextmenu', t, { once: !0 }),
                        c(
                            window,
                            'pointerup',
                            () => {
                                setTimeout(() => {
                                    d(e.target, 'contextmenu', t);
                                }, 30);
                            },
                            { once: !0 }
                        );
                }
            },
            onPressEnd(e) {
                u.current && clearTimeout(u.current),
                    a &&
                        ('mouse' === e.pointerType || 'touch' === e.pointerType) &&
                        a({
                            ...e,
                            type: 'longpressend'
                        });
            }
        }),
        E = (0, r.PK)(o && !t ? l : void 0);
    return { longPressProps: (0, r.dG)(_, E) };
}
