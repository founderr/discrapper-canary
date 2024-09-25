n.d(t, {
    A7: function () {
        return A;
    },
    hQ: function () {
        return R;
    },
    lo: function () {
        return y;
    },
    yn: function () {
        return v;
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
    _ = n(260034),
    E = n(742746),
    f = n(326452),
    h = n(993365),
    p = n(481060),
    m = n(689938),
    I = n(251887);
let T = 'data-listbox-item-id',
    g = 40,
    S = Object.freeze({
        STANDARD: I.selected,
        BRAND: I.selectedBrand
    });
function A(e) {
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
function v(e) {
    let [t, n] = a.useState(() => new Set(null != e ? [e] : void 0));
    return [
        t,
        a.useCallback((e) => {
            n(new Set([e]));
        }, [])
    ];
}
function N(e) {
    return String(e);
}
let O = a.createContext({
    activeDescendant: null,
    selected: new Set(),
    setSelected: () => null,
    itemToString: N
});
function R(e) {
    let { placeholder: t, children: n, value: r, onChange: o, className: c, listClassName: d, 'aria-label': p, multiSelect: S = !1, autoFocus: A = !1, maxVisibleItems: v = 5, itemToString: R = N, showScrollbar: C = !1 } = e,
        [y, b] = a.useState(''),
        [L] = a.useState(!0),
        [D, M] = a.useState(null),
        P = a.useId(),
        U = a.useRef(null);
    a.useLayoutEffect(() => {
        let e = document.querySelector('['.concat(T, '="').concat(D, '"]')),
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
        V = C ? E.Tv : E.lW;
    return (0, i.jsx)(u.bG, {
        navigator: Z,
        children: (0, i.jsx)(u.SJ, {
            children: (e) => {
                let { ref: n, onKeyDown: a, ...l } = e;
                return (0, i.jsxs)('div', {
                    ref: n,
                    role: 'combobox',
                    'aria-label': p,
                    'aria-expanded': L,
                    'aria-controls': L ? P : void 0,
                    'aria-owns': P,
                    'aria-haspopup': 'listbox',
                    className: s()(I.combobox, c),
                    children: [
                        (0, i.jsx)(f.E, {
                            autoFocus: A,
                            size: f.E.Sizes.MEDIUM,
                            placeholder: t,
                            query: y,
                            onChange: b,
                            onKeyDown: a,
                            onBlur: () => M(null),
                            onClear: () => b(''),
                            className: s()({ [I.searchWithScrollbar]: C }),
                            inputProps: {
                                'aria-multiline': !1,
                                'aria-activedescendant': null != D ? D : void 0
                            }
                        }),
                        (0, i.jsx)('div', {
                            children:
                                L &&
                                (x
                                    ? (0, i.jsxs)('div', {
                                          className: I.empty,
                                          children: [
                                              (0, i.jsx)(_.X, {
                                                  variant: 'heading-md/semibold',
                                                  children: m.Z.Messages.AUTOCOMPLETE_NO_RESULTS_HEADER
                                              }),
                                              (0, i.jsx)(h.x, {
                                                  color: 'text-muted',
                                                  variant: 'text-md/normal',
                                                  children: m.Z.Messages.AUTOCOMPLETE_NO_RESULTS_BODY
                                              })
                                          ]
                                      })
                                    : (0, i.jsx)(O.Provider, {
                                          value: {
                                              activeDescendant: D,
                                              selected: r,
                                              setSelected: o,
                                              itemToString: R
                                          },
                                          children: (0, i.jsx)(V, {
                                              ...l,
                                              style: { maxHeight: v * (g + 6) },
                                              'aria-multiselectable': S,
                                              id: P,
                                              ref: U,
                                              className: s()(I.list, d, { [I.scroller]: C }),
                                              sections: [w.length],
                                              sectionHeight: 0,
                                              rowHeight: g,
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
let C = a.createContext(null);
function y(e) {
    var t;
    let { value: n, children: r, disabled: o = !1, selectedColor: l = S.STANDARD, ...c } = e,
        { activeDescendant: _, selected: E, setSelected: f, itemToString: h } = a.useContext(O),
        p = h(n),
        m = _ === p,
        g = null !== (t = null == c ? void 0 : c.selected) && void 0 !== t ? t : E.has(n),
        A = (0, u.JA)(p);
    return (0, i.jsx)(d.P, {
        tag: 'li',
        id: p,
        onClick: () => (o ? null : f(n)),
        [T]: n,
        className: s()(I.item, {
            [I.focused]: m,
            [l]: g,
            [I.disabled]: o
        }),
        ...A,
        role: 'option',
        'aria-selected': g,
        'aria-disabled': o,
        children: (0, i.jsx)(C.Provider, {
            value: n,
            children: r
        })
    });
}
(y.Colors = S),
    (y.Label = function (e) {
        let { children: t } = e;
        return (0, i.jsx)('span', {
            className: I.itemLabel,
            children: t
        });
    }),
    (y.Icon = function (e) {
        let { children: t } = e;
        return (0, i.jsx)('span', {
            className: I.itemCheckbox,
            children: t
        });
    }),
    (y.Checkbox = function (e) {
        let { checked: t } = e,
            { selected: n } = a.useContext(O),
            r = a.useContext(C);
        return (0, i.jsx)('span', {
            className: I.itemCheckbox,
            children: (0, i.jsx)(c.X, {
                displayOnly: !0,
                value: null != t ? t : null != r && n.has(r),
                type: c.X.Types.INVERTED,
                size: 20
            })
        });
    }),
    (y.Checkmark = function () {
        let { selected: e } = a.useContext(O),
            t = a.useContext(C);
        return e.has(t)
            ? (0, i.jsx)('span', {
                  className: I.itemCheckbox,
                  children: (0, i.jsx)(p.CircleCheckIcon, {
                      size: 'custom',
                      color: 'currentColor',
                      width: 20,
                      height: 20
                  })
              })
            : null;
    });
