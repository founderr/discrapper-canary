n.d(t, {
    o: function () {
        return _;
    },
    p: function () {
        return E;
    }
});
var r = n(661763),
    i = n(239700),
    a = n(192379),
    s = n(921336),
    o = n(523603),
    l = n(649859),
    u = n(662845);
let c = new WeakMap();
function d(e, t) {
    let n = c.get(e);
    if (!n) throw Error('Unknown slider state');
    return `${n.id}-${t}`;
}
function _(e, t, n) {
    var u;
    let { labelProps: _, fieldProps: E } = (0, o.N)(e),
        f = 'vertical' === e.orientation;
    c.set(t, {
        id: null !== (u = _.id) && void 0 !== u ? u : E.id,
        'aria-describedby': e['aria-describedby'],
        'aria-details': e['aria-details']
    });
    let { direction: h } = (0, l.bU)(),
        { addGlobalListener: p, removeGlobalListener: I } = (0, r.xi)(),
        m = (0, a.useRef)(null),
        T = 'rtl' === h,
        S = (0, a.useRef)(null),
        { moveProps: g } = (0, s.r_)({
            onMoveStart() {
                S.current = null;
            },
            onMove({ deltaX: e, deltaY: r }) {
                let { height: a, width: s } = n.current.getBoundingClientRect(),
                    o = f ? a : s;
                null == S.current && (S.current = t.getThumbPercent(m.current) * o);
                let l = f ? r : e;
                if (((f || T) && (l = -l), (S.current += l), null != m.current && n.current)) {
                    let e = (0, i.uZ)(S.current / o, 0, 1);
                    t.setThumbPercent(m.current, e);
                }
            },
            onMoveEnd() {
                null != m.current && (t.setThumbDragging(m.current, !1), (m.current = null));
            }
        }),
        A = (0, a.useRef)(void 0),
        N = (r, i, a, s) => {
            if (n.current && !e.isDisabled && t.values.every((e, n) => !t.isThumbDragging(n))) {
                let e,
                    { height: o, width: l, top: u, left: c } = n.current.getBoundingClientRect(),
                    d = ((f ? s : a) - (f ? u : c)) / (f ? o : l);
                ('rtl' === h || f) && (d = 1 - d);
                let _ = t.getPercentValue(d),
                    E = t.values.findIndex((e) => _ - e < 0);
                (e = 0 === E ? E : -1 === E ? t.values.length - 1 : Math.abs(t.values[E - 1] - _) < Math.abs(t.values[E] - _) ? E - 1 : E) >= 0 && t.isThumbEditable(e) ? (r.preventDefault(), (m.current = e), t.setFocusedThumb(e), (A.current = i), t.setThumbDragging(m.current, !0), t.setThumbValue(e, _), p(window, 'mouseup', R, !1), p(window, 'touchend', R, !1), p(window, 'pointerup', R, !1)) : (m.current = null);
            }
        },
        R = (e) => {
            var n, r;
            (null !== (r = e.pointerId) && void 0 !== r ? r : null === (n = e.changedTouches) || void 0 === n ? void 0 : n[0].identifier) === A.current && (null != m.current && (t.setThumbDragging(m.current, !1), (m.current = null)), I(window, 'mouseup', R, !1), I(window, 'touchend', R, !1), I(window, 'pointerup', R, !1));
        };
    return (
        'htmlFor' in _ &&
            _.htmlFor &&
            (delete _.htmlFor,
            (_.onClick = () => {
                var e;
                null === (e = document.getElementById(d(t, 0))) || void 0 === e || e.focus(), (0, s._w)('keyboard');
            })),
        {
            labelProps: _,
            groupProps: {
                role: 'group',
                ...E
            },
            trackProps: (0, r.dG)(
                {
                    onMouseDown(e) {
                        0 === e.button && !e.altKey && !e.ctrlKey && !e.metaKey && N(e, void 0, e.clientX, e.clientY);
                    },
                    onPointerDown(e) {
                        ('mouse' !== e.pointerType || (0 === e.button && !e.altKey && !e.ctrlKey && !e.metaKey)) && N(e, e.pointerId, e.clientX, e.clientY);
                    },
                    onTouchStart(e) {
                        N(e, e.changedTouches[0].identifier, e.changedTouches[0].clientX, e.changedTouches[0].clientY);
                    },
                    style: {
                        position: 'relative',
                        touchAction: 'none'
                    }
                },
                g
            ),
            outputProps: {
                htmlFor: t.values.map((e, n) => d(t, n)).join(' '),
                'aria-live': 'off'
            }
        }
    );
}
function E(e, t) {
    var n;
    let { index: _ = 0, isRequired: E, validationState: f, isInvalid: h, trackRef: p, inputRef: I, orientation: m = t.orientation, name: T } = e,
        S = e.isDisabled || t.isDisabled,
        g = 'vertical' === m,
        { direction: A } = (0, l.bU)(),
        { addGlobalListener: N, removeGlobalListener: R } = (0, r.xi)(),
        O = c.get(t),
        { labelProps: v, fieldProps: C } = (0, o.N)({
            ...e,
            id: d(t, _),
            'aria-labelledby': `${O.id} ${null !== (n = e['aria-labelledby']) && void 0 !== n ? n : ''}`.trim()
        }),
        L = t.values[_],
        D = (0, a.useCallback)(() => {
            I.current && (0, r.Ao)(I.current);
        }, [I]),
        y = t.focusedThumb === _;
    (0, a.useEffect)(() => {
        y && D();
    }, [y, D]);
    let b = 'rtl' === A,
        M = (0, a.useRef)(null),
        { keyboardProps: P } = (0, s.v5)({
            onKeyDown(e) {
                let { getThumbMaxValue: n, getThumbMinValue: r, decrementThumb: i, incrementThumb: a, setThumbValue: s, setThumbDragging: o, pageSize: l } = t;
                if (!/^(PageUp|PageDown|Home|End)$/.test(e.key)) {
                    e.continuePropagation();
                    return;
                }
                switch ((e.preventDefault(), o(_, !0), e.key)) {
                    case 'PageUp':
                        a(_, l);
                        break;
                    case 'PageDown':
                        i(_, l);
                        break;
                    case 'Home':
                        s(_, r(_));
                        break;
                    case 'End':
                        s(_, n(_));
                }
                o(_, !1);
            }
        }),
        { moveProps: U } = (0, s.r_)({
            onMoveStart() {
                (M.current = null), t.setThumbDragging(_, !0);
            },
            onMove({ deltaX: e, deltaY: n, pointerType: r, shiftKey: a }) {
                let { getThumbPercent: s, setThumbPercent: o, decrementThumb: l, incrementThumb: u, step: c, pageSize: d } = t,
                    { width: E, height: f } = p.current.getBoundingClientRect(),
                    h = g ? f : E;
                if ((null == M.current && (M.current = s(_) * h), 'keyboard' === r)) (e > 0 && b) || (e < 0 && !b) || n > 0 ? l(_, a ? d : c) : u(_, a ? d : c);
                else {
                    let t = g ? n : e;
                    (g || b) && (t = -t), (M.current += t), o(_, (0, i.uZ)(M.current / h, 0, 1));
                }
            },
            onMoveEnd() {
                t.setThumbDragging(_, !1);
            }
        });
    t.setThumbEditable(_, !S);
    let { focusableProps: w } = (0, u.kc)(
            (0, r.dG)(e, {
                onFocus: () => t.setFocusedThumb(_),
                onBlur: () => t.setFocusedThumb(void 0)
            }),
            I
        ),
        x = (0, a.useRef)(void 0),
        G = (e) => {
            D(), (x.current = e), t.setThumbDragging(_, !0), N(window, 'mouseup', k, !1), N(window, 'touchend', k, !1), N(window, 'pointerup', k, !1);
        },
        k = (e) => {
            var n, r;
            (null !== (r = e.pointerId) && void 0 !== r ? r : null === (n = e.changedTouches) || void 0 === n ? void 0 : n[0].identifier) === x.current && (D(), t.setThumbDragging(_, !1), R(window, 'mouseup', k, !1), R(window, 'touchend', k, !1), R(window, 'pointerup', k, !1));
        },
        B = t.getThumbPercent(_);
    (g || 'rtl' === A) && (B = 1 - B);
    let F = S
        ? {}
        : (0, r.dG)(P, U, {
              onMouseDown: (e) => {
                  0 === e.button && !e.altKey && !e.ctrlKey && !e.metaKey && G();
              },
              onPointerDown: (e) => {
                  0 === e.button && !e.altKey && !e.ctrlKey && !e.metaKey && G(e.pointerId);
              },
              onTouchStart: (e) => {
                  G(e.changedTouches[0].identifier);
              }
          });
    return (
        (0, r.y$)(I, L, (e) => {
            t.setThumbValue(_, e);
        }),
        {
            inputProps: (0, r.dG)(w, C, {
                type: 'range',
                tabIndex: S ? void 0 : 0,
                min: t.getThumbMinValue(_),
                max: t.getThumbMaxValue(_),
                step: t.step,
                value: L,
                name: T,
                disabled: S,
                'aria-orientation': m,
                'aria-valuetext': t.getThumbValueLabel(_),
                'aria-required': E || void 0,
                'aria-invalid': h || 'invalid' === f || void 0,
                'aria-errormessage': e['aria-errormessage'],
                'aria-describedby': [O['aria-describedby'], e['aria-describedby']].filter(Boolean).join(' '),
                'aria-details': [O['aria-details'], e['aria-details']].filter(Boolean).join(' '),
                onChange: (e) => {
                    t.setThumbValue(_, parseFloat(e.target.value));
                }
            }),
            thumbProps: {
                ...F,
                style: {
                    position: 'absolute',
                    [g ? 'top' : 'left']: `${100 * B}%`,
                    transform: 'translate(-50%, -50%)',
                    touchAction: 'none'
                }
            },
            labelProps: v,
            isDragging: t.isThumbDragging(_),
            isDisabled: S,
            isFocused: y
        }
    );
}
