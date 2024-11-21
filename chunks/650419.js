n.d(t, {
    r: function () {
        return T;
    }
});
var r = n(78805),
    i = n(984544),
    a = n(651512),
    s = n(410914),
    o = n(846135),
    l = n(33693),
    u = n(609095),
    c = n(103865),
    d = n(317559),
    f = n(591734),
    _ = n(842763),
    p = n(780100),
    h = n(654990),
    m = n(386456),
    g = n(143538),
    E = n(192379),
    v = new WeakMap();
class b {
    continuePropagation() {
        (0, o._)(this, v, !1);
    }
    get shouldStopPropagation() {
        return (0, a._)(this, v);
    }
    constructor(e, t, n, r) {
        var i;
        (0, s._)(this, v, {
            writable: !0,
            value: void 0
        }),
            (0, o._)(this, v, !0);
        let a = null !== (i = null == r ? void 0 : r.target) && void 0 !== i ? i : n.currentTarget,
            l = null == a ? void 0 : a.getBoundingClientRect(),
            u,
            c = 0,
            d,
            f = null;
        null != n.clientX && null != n.clientY && ((d = n.clientX), (f = n.clientY)), l && (null != d && null != f ? ((u = d - l.left), (c = f - l.top)) : ((u = l.width / 2), (c = l.height / 2))), (this.type = e), (this.pointerType = t), (this.target = n.currentTarget), (this.shiftKey = n.shiftKey), (this.metaKey = n.metaKey), (this.ctrlKey = n.ctrlKey), (this.altKey = n.altKey), (this.x = u), (this.y = c);
    }
}
let I = Symbol('linkClicked');
function T(e) {
    let {
            onPress: t,
            onPressChange: n,
            onPressStart: a,
            onPressEnd: s,
            onPressUp: o,
            isDisabled: v,
            isPressed: T,
            preventFocusOnPress: x,
            shouldCancelOnPointerExit: w,
            allowTextSelectionOnPress: M,
            ref: P,
            ...k
        } = (function (e) {
            let t = (0, E.useContext)(i.O);
            if (t) {
                let { register: n, ...r } = t;
                (e = (0, l.d)(r, e)), n();
            }
            return (0, u.l)(t, e.ref), e;
        })(e),
        [U, G] = (0, E.useState)(!1),
        B = (0, E.useRef)({
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
        { addGlobalListener: Z, removeAllGlobalListeners: F } = (0, c.x)(),
        V = (0, d.i)((e, t) => {
            let r = B.current;
            if (v || r.didFirePressStart) return !1;
            let i = !0;
            if (((r.isTriggeringEvent = !0), a)) {
                let n = new b('pressstart', t, e);
                a(n), (i = n.shouldStopPropagation);
            }
            return n && n(!0), (r.isTriggeringEvent = !1), (r.didFirePressStart = !0), G(!0), i;
        }),
        j = (0, d.i)((e, r, i = !0) => {
            let a = B.current;
            if (!a.didFirePressStart) return !1;
            (a.ignoreClickAfterPress = !0), (a.didFirePressStart = !1), (a.isTriggeringEvent = !0);
            let o = !0;
            if (s) {
                let t = new b('pressend', r, e);
                s(t), (o = t.shouldStopPropagation);
            }
            if ((n && n(!1), G(!1), t && i && !v)) {
                let n = new b('press', r, e);
                t(n), o && (o = n.shouldStopPropagation);
            }
            return (a.isTriggeringEvent = !1), o;
        }),
        H = (0, d.i)((e, t) => {
            let n = B.current;
            if (v) return !1;
            if (o) {
                n.isTriggeringEvent = !0;
                let r = new b('pressup', t, e);
                return o(r), (n.isTriggeringEvent = !1), r.shouldStopPropagation;
            }
            return !0;
        }),
        Y = (0, d.i)((e) => {
            let t = B.current;
            t.isPressed && t.target && (t.isOverTarget && null != t.pointerType && j(C(t.target, e), t.pointerType, !1), (t.isPressed = !1), (t.isOverTarget = !1), (t.activePointerId = null), (t.pointerType = null), F(), !M && (0, r.A)(t.target));
        }),
        W = (0, d.i)((e) => {
            w && Y(e);
        }),
        K = (0, E.useMemo)(() => {
            let e = B.current,
                t = {
                    onKeyDown(t) {
                        if (y(t.nativeEvent, t.currentTarget) && t.currentTarget.contains(t.target)) {
                            var r;
                            L(t.target, t.key) && t.preventDefault();
                            let i = !0;
                            if (!e.isPressed && !t.repeat) {
                                (e.target = t.currentTarget), (e.isPressed = !0), (i = V(t, 'keyboard'));
                                let r = t.currentTarget;
                                Z(
                                    (0, f.r)(t.currentTarget),
                                    'keyup',
                                    (0, _.t)((t) => {
                                        y(t, r) && !t.repeat && r.contains(t.target) && e.target && H(C(e.target, t), 'keyboard');
                                    }, n),
                                    !0
                                );
                            }
                            i && t.stopPropagation(), t.metaKey && (0, p.V5)() && (null === (r = e.metaKeyEvents) || void 0 === r || r.set(t.key, t.nativeEvent));
                        } else 'Meta' === t.key && (e.metaKeyEvents = new Map());
                    },
                    onClick(t) {
                        if ((!t || t.currentTarget.contains(t.target)) && t && 0 === t.button && !e.isTriggeringEvent && !h.nG.isOpening) {
                            let n = !0;
                            if ((v && t.preventDefault(), !e.ignoreClickAfterPress && !e.ignoreEmulatedMouseEvents && !e.isPressed && ('virtual' === e.pointerType || (0, m.Z)(t.nativeEvent)))) {
                                !v && !x && (0, g.A)(t.currentTarget);
                                let e = V(t, 'virtual'),
                                    r = H(t, 'virtual'),
                                    i = j(t, 'virtual');
                                n = e && r && i;
                            }
                            (e.ignoreEmulatedMouseEvents = !1), (e.ignoreClickAfterPress = !1), n && t.stopPropagation();
                        }
                    }
                },
                n = (t) => {
                    var n, r, i;
                    if (e.isPressed && e.target && y(t, e.target)) {
                        L(t.target, t.key) && t.preventDefault();
                        let n = t.target;
                        j(C(e.target, t), 'keyboard', e.target.contains(n)), F(), 'Enter' !== t.key && S(e.target) && e.target.contains(n) && !t[I] && ((t[I] = !0), (0, h.nG)(e.target, t, !1)), (e.isPressed = !1), null === (r = e.metaKeyEvents) || void 0 === r || r.delete(t.key);
                    } else if ('Meta' === t.key && (null === (n = e.metaKeyEvents) || void 0 === n ? void 0 : n.size)) {
                        let t = e.metaKeyEvents;
                        for (let n of ((e.metaKeyEvents = void 0), t.values())) null === (i = e.target) || void 0 === i || i.dispatchEvent(new KeyboardEvent('keyup', n));
                    }
                };
            if ('undefined' != typeof PointerEvent) {
                (t.onPointerDown = (t) => {
                    if (0 !== t.button || !t.currentTarget.contains(t.target)) return;
                    if ((0, m.c)(t.nativeEvent)) {
                        e.pointerType = 'virtual';
                        return;
                    }
                    O(t.currentTarget) && t.preventDefault(), (e.pointerType = t.pointerType);
                    let a = !0;
                    !e.isPressed && ((e.isPressed = !0), (e.isOverTarget = !0), (e.activePointerId = t.pointerId), (e.target = t.currentTarget), !v && !x && (0, g.A)(t.currentTarget), !M && (0, r.l)(e.target), (a = V(t, e.pointerType)), Z((0, f.r)(t.currentTarget), 'pointermove', n, !1), Z((0, f.r)(t.currentTarget), 'pointerup', i, !1), Z((0, f.r)(t.currentTarget), 'pointercancel', s, !1)), a && t.stopPropagation();
                }),
                    (t.onMouseDown = (e) => {
                        e.currentTarget.contains(e.target) && 0 === e.button && (O(e.currentTarget) && e.preventDefault(), e.stopPropagation());
                    }),
                    (t.onPointerUp = (t) => {
                        t.currentTarget.contains(t.target) && 'virtual' !== e.pointerType && 0 === t.button && R(t, t.currentTarget) && H(t, e.pointerType || t.pointerType);
                    });
                let n = (t) => {
                        t.pointerId === e.activePointerId && (e.target && R(t, e.target) ? !e.isOverTarget && null != e.pointerType && ((e.isOverTarget = !0), V(C(e.target, t), e.pointerType)) : e.target && e.isOverTarget && null != e.pointerType && ((e.isOverTarget = !1), j(C(e.target, t), e.pointerType, !1), W(t)));
                    },
                    i = (t) => {
                        t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target && (R(t, e.target) && null != e.pointerType ? j(C(e.target, t), e.pointerType) : e.isOverTarget && null != e.pointerType && j(C(e.target, t), e.pointerType, !1), (e.isPressed = !1), (e.isOverTarget = !1), (e.activePointerId = null), (e.pointerType = null), F(), !M && (0, r.A)(e.target), 'ontouchend' in e.target && 'mouse' !== t.pointerType && Z(e.target, 'touchend', a, { once: !0 }));
                    },
                    a = (e) => {
                        D(e.currentTarget) && e.preventDefault();
                    },
                    s = (e) => {
                        Y(e);
                    };
                t.onDragStart = (e) => {
                    e.currentTarget.contains(e.target) && Y(e);
                };
            } else {
                (t.onMouseDown = (t) => {
                    if (0 === t.button && !!t.currentTarget.contains(t.target)) {
                        if ((O(t.currentTarget) && t.preventDefault(), e.ignoreEmulatedMouseEvents)) {
                            t.stopPropagation();
                            return;
                        }
                        (e.isPressed = !0), (e.isOverTarget = !0), (e.target = t.currentTarget), (e.pointerType = (0, m.Z)(t.nativeEvent) ? 'virtual' : 'mouse'), !v && !x && (0, g.A)(t.currentTarget), V(t, e.pointerType) && t.stopPropagation(), Z((0, f.r)(t.currentTarget), 'mouseup', n, !1);
                    }
                }),
                    (t.onMouseEnter = (t) => {
                        if (!t.currentTarget.contains(t.target)) return;
                        let n = !0;
                        e.isPressed && !e.ignoreEmulatedMouseEvents && null != e.pointerType && ((e.isOverTarget = !0), (n = V(t, e.pointerType))), n && t.stopPropagation();
                    }),
                    (t.onMouseLeave = (t) => {
                        if (!t.currentTarget.contains(t.target)) return;
                        let n = !0;
                        e.isPressed && !e.ignoreEmulatedMouseEvents && null != e.pointerType && ((e.isOverTarget = !1), (n = j(t, e.pointerType, !1)), W(t)), n && t.stopPropagation();
                    }),
                    (t.onMouseUp = (t) => {
                        t.currentTarget.contains(t.target) && !e.ignoreEmulatedMouseEvents && 0 === t.button && H(t, e.pointerType || 'mouse');
                    });
                let n = (t) => {
                    if (0 === t.button) {
                        if (((e.isPressed = !1), F(), e.ignoreEmulatedMouseEvents)) {
                            e.ignoreEmulatedMouseEvents = !1;
                            return;
                        }
                        e.target && R(t, e.target) && null != e.pointerType ? j(C(e.target, t), e.pointerType) : e.target && e.isOverTarget && null != e.pointerType && j(C(e.target, t), e.pointerType, !1), (e.isOverTarget = !1);
                    }
                };
                (t.onTouchStart = (t) => {
                    if (!t.currentTarget.contains(t.target)) return;
                    let n = (function (e) {
                        let { targetTouches: t } = e;
                        return t.length > 0 ? t[0] : null;
                    })(t.nativeEvent);
                    if (!!n) (e.activePointerId = n.identifier), (e.ignoreEmulatedMouseEvents = !0), (e.isOverTarget = !0), (e.isPressed = !0), (e.target = t.currentTarget), (e.pointerType = 'touch'), !v && !x && (0, g.A)(t.currentTarget), !M && (0, r.l)(e.target), V(N(e.target, t), e.pointerType) && t.stopPropagation(), Z((0, f.k)(t.currentTarget), 'scroll', i, !0);
                }),
                    (t.onTouchMove = (t) => {
                        if (!t.currentTarget.contains(t.target)) return;
                        if (!e.isPressed) {
                            t.stopPropagation();
                            return;
                        }
                        let n = A(t.nativeEvent, e.activePointerId),
                            r = !0;
                        n && R(n, t.currentTarget) ? !e.isOverTarget && null != e.pointerType && ((e.isOverTarget = !0), (r = V(N(e.target, t), e.pointerType))) : e.isOverTarget && null != e.pointerType && ((e.isOverTarget = !1), (r = j(N(e.target, t), e.pointerType, !1)), W(N(e.target, t))), r && t.stopPropagation();
                    }),
                    (t.onTouchEnd = (t) => {
                        if (!t.currentTarget.contains(t.target)) return;
                        if (!e.isPressed) {
                            t.stopPropagation();
                            return;
                        }
                        let n = A(t.nativeEvent, e.activePointerId),
                            i = !0;
                        n && R(n, t.currentTarget) && null != e.pointerType ? (H(N(e.target, t), e.pointerType), (i = j(N(e.target, t), e.pointerType))) : e.isOverTarget && null != e.pointerType && (i = j(N(e.target, t), e.pointerType, !1)), i && t.stopPropagation(), (e.isPressed = !1), (e.activePointerId = null), (e.isOverTarget = !1), (e.ignoreEmulatedMouseEvents = !0), e.target && !M && (0, r.A)(e.target), F();
                    }),
                    (t.onTouchCancel = (t) => {
                        t.currentTarget.contains(t.target) && (t.stopPropagation(), e.isPressed && Y(N(e.target, t)));
                    });
                let i = (t) => {
                    e.isPressed &&
                        t.target.contains(e.target) &&
                        Y({
                            currentTarget: e.target,
                            shiftKey: !1,
                            ctrlKey: !1,
                            metaKey: !1,
                            altKey: !1
                        });
                };
                t.onDragStart = (e) => {
                    e.currentTarget.contains(e.target) && Y(e);
                };
            }
            return t;
        }, [Z, v, x, F, M, Y, W, j, V, H]);
    return (
        (0, E.useEffect)(
            () => () => {
                var e;
                !M && (0, r.A)(null !== (e = B.current.target) && void 0 !== e ? e : void 0);
            },
            [M]
        ),
        {
            isPressed: T || U,
            pressProps: (0, l.d)(k, K)
        }
    );
}
function S(e) {
    return 'A' === e.tagName && e.hasAttribute('href');
}
function y(e, t) {
    let { key: n, code: r } = e,
        i = t.getAttribute('role');
    return ('Enter' === n || ' ' === n || 'Spacebar' === n || 'Space' === r) && !((t instanceof (0, f.k)(t).HTMLInputElement && !w(t, n)) || t instanceof (0, f.k)(t).HTMLTextAreaElement || t.isContentEditable) && !(('link' === i || (!i && S(t))) && 'Enter' !== n);
}
function A(e, t) {
    let n = e.changedTouches;
    for (let e = 0; e < n.length; e++) {
        let r = n[e];
        if (r.identifier === t) return r;
    }
    return null;
}
function N(e, t) {
    let n = 0,
        r = 0;
    return (
        t.targetTouches && 1 === t.targetTouches.length && ((n = t.targetTouches[0].clientX), (r = t.targetTouches[0].clientY)),
        {
            currentTarget: e,
            shiftKey: t.shiftKey,
            ctrlKey: t.ctrlKey,
            metaKey: t.metaKey,
            altKey: t.altKey,
            clientX: n,
            clientY: r
        }
    );
}
function C(e, t) {
    let n = t.clientX,
        r = t.clientY;
    return {
        currentTarget: e,
        shiftKey: t.shiftKey,
        ctrlKey: t.ctrlKey,
        metaKey: t.metaKey,
        altKey: t.altKey,
        clientX: n,
        clientY: r
    };
}
function R(e, t) {
    var n, r, i;
    let a,
        s,
        o = t.getBoundingClientRect();
    let l =
        ((a = 0),
        (s = 0),
        void 0 !== (n = e).width ? (a = n.width / 2) : void 0 !== n.radiusX && (a = n.radiusX),
        void 0 !== n.height ? (s = n.height / 2) : void 0 !== n.radiusY && (s = n.radiusY),
        {
            top: n.clientY - s,
            right: n.clientX + a,
            bottom: n.clientY + s,
            left: n.clientX - a
        });
    return (r = o), (i = l), !(r.left > i.right) && !(i.left > r.right) && !(r.top > i.bottom) && !(i.top > r.bottom) && !0;
}
function O(e) {
    return !(e instanceof HTMLElement) || !e.hasAttribute('draggable');
}
function D(e) {
    return !(e instanceof HTMLInputElement) && (e instanceof HTMLButtonElement ? 'submit' !== e.type && 'reset' !== e.type : !S(e) && !0);
}
function L(e, t) {
    return e instanceof HTMLInputElement ? !w(e, t) : D(e);
}
let x = new Set(['checkbox', 'radio', 'range', 'color', 'file', 'image', 'button', 'submit', 'reset']);
function w(e, t) {
    return 'checkbox' === e.type || 'radio' === e.type ? ' ' === t : x.has(e.type);
}
