n.d(t, {
    A7: function () {
        return S;
    },
    hQ: function () {
        return O;
    },
    lo: function () {
        return C;
    },
    yn: function () {
        return A;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(924826),
    u = n(91192),
    c = n(178940),
    d = n(1561),
    _ = n(742746),
    E = n(326452),
    f = n(993365),
    h = n(481060),
    p = n(689938),
    m = n(251887);
let I = 'data-listbox-item-id',
    T = 40,
    g = Object.freeze({
        STANDARD: m.selected,
        BRAND: m.selectedBrand
    });
function S(e) {
    let [t, n] = a.useState(() => new Set(e));
    return [
        t,
        a.useCallback((e) => {
            n((t) => {
                let n = new Set(t);
                return n.has(e) ? n.delete(e) : n.add(e), n;
            });
        }, [])
    ];
}
function A(e) {
    let [t, n] = a.useState(() => new Set(null != e ? [e] : void 0));
    return [
        t,
        a.useCallback((e) => {
            n(new Set([e]));
        }, [])
    ];
}
function v(e) {
    return String(e);
}
let N = a.createContext({
    activeDescendant: null,
    selected: new Set(),
    setSelected: () => null,
    itemToString: v
});
function O(e) {
    let { placeholder: t, children: n, value: r, onChange: o, className: c, listClassName: d, 'aria-label': g, multiSelect: S = !1, autoFocus: A = !1, maxVisibleItems: O = 5, itemToString: R = v, showScrollbar: C = !1 } = e,
        [y, L] = a.useState(''),
        [b] = a.useState(!0),
        [D, M] = a.useState(null),
        P = a.useId(),
        U = a.useRef(null);
    a.useLayoutEffect(() => {
        let e = document.querySelector('['.concat(I, '="').concat(D, '"]')),
            t = U.current;
        null != t &&
            null != e &&
            t.scrollIntoViewNode({
                node: e,
                padding: 12
            });
    }, [D]);
    let w = n(y),
        x = 0 === w.length,
        G = a.useId(),
        k = a.useCallback(
            () =>
                new Promise((e) => {
                    let t = U.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            []
        ),
        B = a.useCallback(
            () =>
                new Promise((e) => {
                    let t = U.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            []
        ),
        F = a.useCallback((e, t) => {
            M(t);
            let n = document.querySelector(e),
                r = U.current;
            null != r && null != n && r.scrollIntoViewNode({ node: n });
        }, []),
        Z = (0, l.ZP)({
            id: G,
            isEnabled: !0,
            useVirtualFocus: !0,
            scrollToStart: k,
            scrollToEnd: B,
            setFocus: F
        }),
        V = C ? _.Tv : _.lW;
    return (0, i.jsx)(u.bG, {
        navigator: Z,
        children: (0, i.jsx)(u.SJ, {
            children: (e) => {
                let { ref: n, onKeyDown: a, ...l } = e;
                return (0, i.jsxs)('div', {
                    ref: n,
                    role: 'combobox',
                    'aria-label': g,
                    'aria-expanded': b,
                    'aria-controls': b ? P : void 0,
                    'aria-owns': P,
                    'aria-haspopup': 'listbox',
                    className: s()(m.combobox, c),
                    children: [
                        (0, i.jsx)(E.E, {
                            autoFocus: A,
                            size: E.E.Sizes.MEDIUM,
                            placeholder: t,
                            query: y,
                            onChange: L,
                            onKeyDown: a,
                            onBlur: () => M(null),
                            onClear: () => L(''),
                            className: s()({ [m.searchWithScrollbar]: C }),
                            inputProps: {
                                'aria-multiline': !1,
                                'aria-activedescendant': null != D ? D : void 0
                            }
                        }),
                        (0, i.jsx)('div', {
                            children:
                                b &&
                                (x
                                    ? (0, i.jsxs)('div', {
                                          className: m.empty,
                                          children: [
                                              (0, i.jsx)(h.Heading, {
                                                  variant: 'heading-md/semibold',
                                                  children: p.Z.Messages.AUTOCOMPLETE_NO_RESULTS_HEADER
                                              }),
                                              (0, i.jsx)(f.x, {
                                                  color: 'text-muted',
                                                  variant: 'text-md/normal',
                                                  children: p.Z.Messages.AUTOCOMPLETE_NO_RESULTS_BODY
                                              })
                                          ]
                                      })
                                    : (0, i.jsx)(N.Provider, {
                                          value: {
                                              activeDescendant: D,
                                              selected: r,
                                              setSelected: o,
                                              itemToString: R
                                          },
                                          children: (0, i.jsx)(V, {
                                              ...l,
                                              style: { maxHeight: O * (T + 6) },
                                              'aria-multiselectable': S,
                                              id: P,
                                              ref: U,
                                              className: s()(m.list, d, { [m.scroller]: C }),
                                              sections: [w.length],
                                              sectionHeight: 0,
                                              rowHeight: T,
                                              renderRow: (e) => {
                                                  let { row: t } = e;
                                                  return w[t];
                                              },
                                              renderSection: () => null
                                          })
                                      }))
                        })
                    ]
                });
            }
        })
    });
}
let R = a.createContext(null);
function C(e) {
    var t;
    let { value: n, children: r, disabled: o = !1, selectedColor: l = g.STANDARD, ...c } = e,
        { activeDescendant: _, selected: E, setSelected: f, itemToString: h } = a.useContext(N),
        p = h(n),
        T = _ === p,
        S = null !== (t = null == c ? void 0 : c.selected) && void 0 !== t ? t : E.has(n),
        A = (0, u.JA)(p);
    return (0, i.jsx)(d.P, {
        tag: 'li',
        id: p,
        onClick: () => (o ? null : f(n)),
        [I]: n,
        className: s()(m.item, {
            [m.focused]: T,
            [l]: S,
            [m.disabled]: o
        }),
        ...A,
        role: 'option',
        'aria-selected': S,
        'aria-disabled': o,
        children: (0, i.jsx)(R.Provider, {
            value: n,
            children: r
        })
    });
}
(C.Colors = g),
    (C.Label = function (e) {
        let { children: t } = e;
        return (0, i.jsx)('span', {
            className: m.itemLabel,
            children: t
        });
    }),
    (C.Icon = function (e) {
        let { children: t } = e;
        return (0, i.jsx)('span', {
            className: m.itemCheckbox,
            children: t
        });
    }),
    (C.Checkbox = function (e) {
        let { checked: t } = e,
            { selected: n } = a.useContext(N),
            r = a.useContext(R);
        return (0, i.jsx)('span', {
            className: m.itemCheckbox,
            children: (0, i.jsx)(c.X, {
                displayOnly: !0,
                value: null != t ? t : null != r && n.has(r),
                type: c.X.Types.INVERTED,
                size: 20
            })
        });
    }),
    (C.Checkmark = function () {
        let { selected: e } = a.useContext(N),
            t = a.useContext(R);
        return e.has(t)
            ? (0, i.jsx)('span', {
                  className: m.itemCheckbox,
                  children: (0, i.jsx)(h.CircleCheckIcon, {
                      size: 'custom',
                      color: 'currentColor',
                      width: 20,
                      height: 20
                  })
              })
            : null;
    });
