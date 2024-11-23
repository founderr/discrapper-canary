n.d(t, {
    A7: function () {
        return v;
    },
    hQ: function () {
        return S;
    },
    lo: function () {
        return A;
    },
    yn: function () {
        return I;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(924826),
    l = n(91192),
    u = n(178940),
    c = n(1561),
    d = n(742746),
    f = n(326452),
    _ = n(993365),
    p = n(481060),
    h = n(388032),
    m = n(251887);
let g = 'data-listbox-item-id',
    E = Object.freeze({
        STANDARD: m.selected,
        BRAND: m.selectedBrand
    });
function v(e) {
    let [t, n] = i.useState(() => new Set(e));
    return [
        t,
        i.useCallback((e) => {
            n((t) => {
                let n = new Set(t);
                return n.has(e) ? n.delete(e) : n.add(e), n;
            });
        }, [])
    ];
}
function I(e) {
    let [t, n] = i.useState(() => new Set(null != e ? [e] : void 0));
    return [
        t,
        i.useCallback((e) => {
            n(new Set([e]));
        }, [])
    ];
}
function b(e) {
    return String(e);
}
let T = i.createContext({
    activeDescendant: null,
    selected: new Set(),
    setSelected: () => null,
    itemToString: b
});
function S(e) {
    let { placeholder: t, children: n, value: a, onChange: u, className: c, listClassName: E, 'aria-label': v, multiSelect: I = !1, autoFocus: S = !1, maxVisibleItems: y = 5, itemToString: A = b, showScrollbar: N = !1 } = e,
        [C, R] = i.useState(''),
        [O] = i.useState(!0),
        [D, L] = i.useState(null),
        x = i.useId(),
        w = i.useRef(null);
    i.useLayoutEffect(() => {
        let e = document.querySelector('['.concat(g, '="').concat(D, '"]')),
            t = w.current;
        null != t &&
            null != e &&
            t.scrollIntoViewNode({
                node: e,
                padding: 12
            });
    }, [D]);
    let M = n(C),
        P = 0 === M.length,
        k = i.useId(),
        U = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = w.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            []
        ),
        B = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = w.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            []
        ),
        G = i.useCallback((e, t) => {
            L(t);
            let n = document.querySelector(e),
                r = w.current;
            null != r && null != n && r.scrollIntoViewNode({ node: n });
        }, []),
        Z = (0, o.ZP)({
            id: k,
            isEnabled: !0,
            useVirtualFocus: !0,
            scrollToStart: U,
            scrollToEnd: B,
            setFocus: G
        }),
        F = N ? d.Tv : d.lW;
    return (0, r.jsx)(l.bG, {
        navigator: Z,
        children: (0, r.jsx)(l.SJ, {
            children: (e) => {
                let { ref: n, onKeyDown: i, ...o } = e;
                return (0, r.jsxs)('div', {
                    ref: n,
                    role: 'combobox',
                    'aria-label': v,
                    'aria-expanded': O,
                    'aria-controls': O ? x : void 0,
                    'aria-owns': x,
                    'aria-haspopup': 'listbox',
                    className: s()(m.combobox, c),
                    children: [
                        (0, r.jsx)(f.E, {
                            autoFocus: S,
                            size: f.E.Sizes.MEDIUM,
                            placeholder: t,
                            query: C,
                            onChange: R,
                            onKeyDown: i,
                            onBlur: () => L(null),
                            onClear: () => R(''),
                            className: s()({ [m.searchWithScrollbar]: N }),
                            inputProps: {
                                'aria-multiline': !1,
                                'aria-activedescendant': null != D ? D : void 0
                            }
                        }),
                        (0, r.jsx)('div', {
                            children:
                                O &&
                                (P
                                    ? (0, r.jsxs)('div', {
                                          className: m.empty,
                                          children: [
                                              (0, r.jsx)(p.Heading, {
                                                  variant: 'heading-md/semibold',
                                                  children: h.intl.string(h.t['4o4z3d'])
                                              }),
                                              (0, r.jsx)(_.x, {
                                                  color: 'text-muted',
                                                  variant: 'text-md/normal',
                                                  children: h.intl.string(h.t.QwSXv7)
                                              })
                                          ]
                                      })
                                    : (0, r.jsx)(T.Provider, {
                                          value: {
                                              activeDescendant: D,
                                              selected: a,
                                              setSelected: u,
                                              itemToString: A
                                          },
                                          children: (0, r.jsx)(F, {
                                              ...o,
                                              style: { maxHeight: 46 * y },
                                              'aria-multiselectable': I,
                                              id: x,
                                              ref: w,
                                              className: s()(m.list, E, { [m.scroller]: N }),
                                              sections: [M.length],
                                              sectionHeight: 0,
                                              rowHeight: 40,
                                              renderRow: (e) => {
                                                  let { row: t } = e;
                                                  return M[t];
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
let y = i.createContext(null);
function A(e) {
    var t;
    let { value: n, children: a, disabled: o = !1, selectedColor: u = E.STANDARD, ...d } = e,
        { activeDescendant: f, selected: _, setSelected: p, itemToString: h } = i.useContext(T),
        v = h(n),
        I = f === v,
        b = null !== (t = null == d ? void 0 : d.selected) && void 0 !== t ? t : _.has(n),
        S = (0, l.JA)(v);
    return (0, r.jsx)(c.P, {
        tag: 'li',
        id: v,
        onClick: () => (o ? null : p(n)),
        [g]: n,
        className: s()(m.item, {
            [m.focused]: I,
            [u]: b,
            [m.disabled]: o
        }),
        ...S,
        role: 'option',
        'aria-selected': b,
        'aria-disabled': o,
        children: (0, r.jsx)(y.Provider, {
            value: n,
            children: a
        })
    });
}
(A.Colors = E),
    (A.Label = function (e) {
        let { children: t } = e;
        return (0, r.jsx)('span', {
            className: m.itemLabel,
            children: t
        });
    }),
    (A.Icon = function (e) {
        let { children: t } = e;
        return (0, r.jsx)('span', {
            className: m.itemCheckbox,
            children: t
        });
    }),
    (A.Checkbox = function (e) {
        let { checked: t } = e,
            { selected: n } = i.useContext(T),
            a = i.useContext(y);
        return (0, r.jsx)('span', {
            className: m.itemCheckbox,
            children: (0, r.jsx)(u.X, {
                displayOnly: !0,
                value: null != t ? t : null != a && n.has(a),
                type: u.X.Types.INVERTED,
                size: 20
            })
        });
    }),
    (A.Checkmark = function () {
        let { selected: e } = i.useContext(T),
            t = i.useContext(y);
        return e.has(t)
            ? (0, r.jsx)('span', {
                  className: m.itemCheckbox,
                  children: (0, r.jsx)(p.CircleCheckIcon, {
                      size: 'custom',
                      color: 'currentColor',
                      width: 20,
                      height: 20
                  })
              })
            : null;
    });
