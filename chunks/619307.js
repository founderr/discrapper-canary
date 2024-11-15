n.d(t, {
    Ph: function () {
        return R;
    },
    UN: function () {
        return A;
    },
    Vn: function () {
        return I;
    },
    cY: function () {
        return S;
    },
    gz: function () {
        return T;
    },
    nV: function () {
        return b;
    },
    q4: function () {
        return L;
    },
    s6: function () {
        return y;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(924826),
    l = n(91192),
    u = n(1561),
    c = n(597442),
    d = n(235874),
    f = n(147479),
    _ = n(481060),
    p = n(393238),
    h = n(434650),
    m = n(98650),
    g = n(748585),
    E = n(388032),
    v = n(711230);
function b(e) {
    let { value: t, onChange: n, serialize: r = (e) => String(e) } = e;
    return {
        select: (e) => n(e),
        isSelected: (e) => e === t,
        clear: () => n(null),
        serialize: r
    };
}
function I(e) {
    let { value: t, onChange: n, serialize: r = (e) => String(e) } = e;
    return {
        select: (e) => {
            let r = new Set(t);
            r.has(e) ? r.delete(e) : r.add(e), n(r);
        },
        isSelected: (e) => {
            var n;
            return null !== (n = null == t ? void 0 : t.has(e)) && void 0 !== n && n;
        },
        clear: () => n(new Set()),
        serialize: r
    };
}
function S(e) {
    let { value: t, onChange: n, onSelectInteraction: r, serialize: i = (e) => String(e) } = e;
    return {
        select: (e) => {
            let { newValues: i, updated: a } = r(e, t);
            if (!!a) n(i);
        },
        isSelected: (e) => {
            var n;
            return null !== (n = null == t ? void 0 : t.has(e)) && void 0 !== n && n;
        },
        clear: () => n(new Set()),
        serialize: i
    };
}
function T(e, t) {
    let n = new Set(t);
    return (
        n.has(e) ? n.delete(e) : n.add(e),
        {
            newValues: n,
            updated: !0
        }
    );
}
function y(e, t) {
    return t.has(e)
        ? {
              newValues: new Set(),
              updated: !0
          }
        : {
              newValues: new Set([e]),
              updated: !0
          };
}
function A(e, t) {
    return t.has(e)
        ? {
              newValues: t,
              updated: !1
          }
        : {
              newValues: new Set([e]),
              updated: !0
          };
}
function N(e) {
    return null == e ? void 0 : e.label;
}
function C(e) {
    return e.map((e) => N(e)).join(', ');
}
function R(e) {
    let { options: t, placeholder: n = E.intl.string(E.t.XqMe3N), className: a, isDisabled: o = !1, maxVisibleItems: l = 7, autoFocus: c = !1, popoutWidth: f, clearable: m = !1, look: b = g.q.FILLED, onClose: I, onOpen: S, renderOptionLabel: T = N, renderOptionValue: y = C, popoutClassName: A, popoutPosition: R = 'bottom', popoutLayerContext: D, optionClassName: L, closeOnSelect: x, select: w, isSelected: M, serialize: P, clear: k, hideIcon: U = !1, 'aria-label': B, 'aria-labelledby': G } = e,
        [Z, F] = i.useState(!1),
        { ref: V, width: j, height: H } = (0, p.Z)(),
        Y = i.useCallback(
            (e) => {
                Z !== e && !o && (F(e), e ? null == S || S() : null == I || I());
            },
            [o, I, S, Z]
        ),
        W = i.useCallback(
            (e) => {
                Z && !e && Y(!1);
            },
            [Y, Z]
        ),
        K = (0, h.O)(W),
        z = i.useCallback(
            (e) => {
                if ((w(e), x)) {
                    var t;
                    null === (t = V.current) || void 0 === t || t.focus();
                }
            },
            [w, x]
        ),
        q = i.useCallback(
            (e) => {
                e.stopPropagation(), null == k || k();
            },
            [k]
        ),
        Q = t.filter((e) => M(e.value));
    i.useLayoutEffect(() => {
        if (c) {
            var e;
            null === (e = V.current) || void 0 === e || e.focus();
        }
    }, [c]);
    let X = (0, _.useRedesignIconContext)().enabled;
    return (0, r.jsx)(d.y, {
        spacing: 0,
        animation: d.y.Animation.NONE,
        shouldShow: Z,
        onRequestOpen: () => {
            Y(!0);
        },
        onRequestClose: () => {
            Y(!1);
        },
        renderPopout: (e) => {
            let { closePopout: n, position: i, updatePosition: a } = e;
            return (0, r.jsx)(O, {
                className: A,
                closeOnSelect: x,
                maxVisibleItems: l,
                width: null != f ? f : j,
                isSelected: M,
                closePopout: n,
                buttonHeight: null != H ? H : 0,
                onSelect: z,
                options: t,
                serialize: P,
                renderOptionLabel: T,
                optionClassName: L,
                updatePosition: a,
                popoutPosition: i
            });
        },
        position: R,
        layerContext: D,
        children: (e, t) => {
            let { onClick: i, onKeyDown: l, ...c } = e,
                { isShown: d, position: f } = t,
                p = d ? _.ChevronSmallUpIcon : _.ChevronSmallDownIcon,
                h = X ? 18 : 24;
            return (0, r.jsxs)(u.P, {
                role: 'button',
                'aria-disabled': o,
                innerRef: (e) => {
                    (V.current = e), (K.current = e);
                },
                onClick: o
                    ? void 0
                    : (e) => {
                          i(e), Y(!Z);
                      },
                onKeyDown: (e) => {
                    'ArrowDown' === e.key ? Y(!0) : 'Escape' === e.key && (e.stopPropagation(), Y(!1)), l(e);
                },
                ...c,
                className: s()(v.select, a, {
                    [v.open]: d,
                    [v.disabled]: o,
                    [v.selectPositionTop]: 'top' === f,
                    [v.lookFilled]: b === g.q.FILLED
                }),
                'aria-haspopup': 'listbox',
                'aria-expanded': d,
                'aria-label': B,
                'aria-labelledby': G,
                children: [
                    Q.length > 0
                        ? (0, r.jsx)('span', {
                              className: v.value,
                              children: y(Q)
                          })
                        : (0, r.jsx)('span', {
                              className: v.placeholder,
                              children: n
                          }),
                    (0, r.jsxs)('div', {
                        className: v.icons,
                        children: [
                            m
                                ? (0, r.jsx)(u.P, {
                                      role: 'button',
                                      'aria-disabled': o,
                                      onClick: q,
                                      'aria-label': E.intl.string(E.t.VkKicX),
                                      children: (0, r.jsx)(_.XSmallIcon, {
                                          size: 'xs',
                                          color: 'currentColor',
                                          className: v.clear
                                      })
                                  })
                                : null,
                            U
                                ? null
                                : (0, r.jsx)(p, {
                                      color: 'currentColor',
                                      size: 'custom',
                                      width: h,
                                      height: h
                                  })
                        ]
                    })
                ]
            });
        }
    });
}
function O(e) {
    let { className: t, onSelect: n, closePopout: a, closeOnSelect: u = !0, isSelected: d, options: _, width: p, maxVisibleItems: h, renderOptionLabel: g, serialize: E, optionClassName: b, buttonHeight: I, updatePosition: S, popoutPosition: T } = e,
        [y, A] = i.useState(0),
        N = i.useRef(null),
        C = i.useId(),
        R = (0, o.ZP)({
            id: C,
            async scrollToEnd() {},
            async scrollToStart() {},
            isEnabled: !0,
            wrap: !0
        }),
        O = i.useRef(null);
    (0, c.T)(O),
        i.useLayoutEffect(() => {
            var e;
            null === (e = O.current) || void 0 === e || e.focus();
        }, []),
        i.useEffect(() => {
            I > 0 && S();
        }, [I, S]),
        (0, m.Z)(S),
        i.useLayoutEffect(() => {
            var e, t;
            let n = null === (t = N.current) || void 0 === t ? void 0 : null === (e = t.getBoundingClientRect()) || void 0 === e ? void 0 : e.height;
            null != n && A(n);
        }, [h]),
        i.useEffect(() => {
            S();
        }, [S, y]);
    let L = i.useCallback(
            (e) => {
                n(e), u && a();
            },
            [a, n, u]
        ),
        x = _.map((e, t) => {
            var n;
            return (0, r.jsx)(
                D,
                {
                    isSelected: d(e.value),
                    value: e.value,
                    label: g(e),
                    onSelect: L,
                    className: b,
                    isDisabled: e.disabled,
                    serialize: E
                },
                null !== (n = e.key) && void 0 !== n ? n : t
            );
        }),
        w = _.length <= h ? f.xV : f.h2;
    return (0, r.jsx)(l.bG, {
        navigator: R,
        children: (0, r.jsx)(l.SJ, {
            children: (e) => {
                let { ref: n, ...i } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(w, {
                            className: s()(v.popout, t, { [v.popoutPositionTop]: 'top' === T }),
                            style: {
                                width: p,
                                maxHeight: y
                            },
                            ref: (e) => {
                                var t;
                                let r = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null;
                                (n.current = r), (O.current = r);
                            },
                            ...i,
                            role: 'listbox',
                            children: x
                        }),
                        (0, r.jsx)('div', {
                            'aria-hidden': !0,
                            ref: N,
                            className: v.measurement,
                            children: x.slice(0, h)
                        })
                    ]
                });
            }
        })
    });
}
function D(e) {
    let { className: t, value: n, label: i, onSelect: a, isSelected: o, isDisabled: c, serialize: d } = e,
        f = (0, l.JA)(d(n));
    return (0, r.jsxs)(u.P, {
        focusProps: { enabled: !1 },
        className: s()(v.option, t),
        onClick: () => !c && a(n),
        ...f,
        'aria-selected': o,
        'aria-disabled': c,
        role: 'option',
        children: [
            i,
            o &&
                (0, r.jsx)(_.CircleCheckIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    secondaryColor: 'white',
                    className: v.selectedIcon,
                    width: 20,
                    height: 20
                })
        ]
    });
}
function L(e) {
    let { value: t, onChange: n, ...i } = e,
        a = b({
            value: t,
            onChange: n
        });
    return (0, r.jsx)(R, {
        ...i,
        ...a
    });
}
