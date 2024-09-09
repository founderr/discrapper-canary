n.d(t, {
    A7: function () {
        return S;
    },
    hQ: function () {
        return O;
    },
    lo: function () {
        return v;
    },
    yn: function () {
        return g;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(924826),
    l = n(91192),
    u = n(178940),
    c = n(1561),
    d = n(260034),
    _ = n(742746),
    E = n(326452),
    f = n(993365),
    h = n(481060),
    p = n(689938),
    I = n(310761);
let m = 'data-listbox-item-id',
    T = Object.freeze({
        STANDARD: I.selected,
        BRAND: I.selectedBrand
    });
function S(e) {
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
function g(e) {
    let [t, n] = i.useState(() => new Set(null != e ? [e] : void 0));
    return [
        t,
        i.useCallback((e) => {
            n(new Set([e]));
        }, [])
    ];
}
function A(e) {
    return String(e);
}
let N = i.createContext({
    activeDescendant: null,
    selected: new Set(),
    setSelected: () => null,
    itemToString: A
});
function O(e) {
    let { placeholder: t, children: n, value: a, onChange: u, className: c, listClassName: h, 'aria-label': T, multiSelect: S = !1, autoFocus: g = !1, maxVisibleItems: O = 5, itemToString: R = A, showScrollbar: v = !1 } = e,
        [C, y] = i.useState(''),
        [L] = i.useState(!0),
        [D, b] = i.useState(null),
        M = i.useId(),
        P = i.useRef(null);
    i.useLayoutEffect(() => {
        let e = document.querySelector('['.concat(m, '="').concat(D, '"]')),
            t = P.current;
        null != t &&
            null != e &&
            t.scrollIntoViewNode({
                node: e,
                padding: 12
            });
    }, [D]);
    let U = n(C),
        w = 0 === U.length,
        x = i.useId(),
        G = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = P.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            []
        ),
        k = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = P.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            []
        ),
        B = i.useCallback((e, t) => {
            b(t);
            let n = document.querySelector(e),
                r = P.current;
            null != r && null != n && r.scrollIntoViewNode({ node: n });
        }, []),
        F = (0, o.ZP)({
            id: x,
            isEnabled: !0,
            useVirtualFocus: !0,
            scrollToStart: G,
            scrollToEnd: k,
            setFocus: B
        }),
        V = v ? _.Tv : _.lW;
    return (0, r.jsx)(l.bG, {
        navigator: F,
        children: (0, r.jsx)(l.SJ, {
            children: (e) => {
                let { ref: n, onKeyDown: i, ...o } = e;
                return (0, r.jsxs)('div', {
                    ref: n,
                    role: 'combobox',
                    'aria-label': T,
                    'aria-expanded': L,
                    'aria-controls': L ? M : void 0,
                    'aria-owns': M,
                    'aria-haspopup': 'listbox',
                    className: s()(I.combobox, c),
                    children: [
                        (0, r.jsx)(E.E, {
                            autoFocus: g,
                            size: E.E.Sizes.MEDIUM,
                            placeholder: t,
                            query: C,
                            onChange: y,
                            onKeyDown: i,
                            onBlur: () => b(null),
                            onClear: () => y(''),
                            className: s()({ [I.searchWithScrollbar]: v }),
                            inputProps: {
                                'aria-multiline': !1,
                                'aria-activedescendant': null != D ? D : void 0
                            }
                        }),
                        (0, r.jsx)('div', {
                            children:
                                L &&
                                (w
                                    ? (0, r.jsxs)('div', {
                                          className: I.empty,
                                          children: [
                                              (0, r.jsx)(d.X, {
                                                  variant: 'heading-md/semibold',
                                                  children: p.Z.Messages.AUTOCOMPLETE_NO_RESULTS_HEADER
                                              }),
                                              (0, r.jsx)(f.x, {
                                                  color: 'text-muted',
                                                  variant: 'text-md/normal',
                                                  children: p.Z.Messages.AUTOCOMPLETE_NO_RESULTS_BODY
                                              })
                                          ]
                                      })
                                    : (0, r.jsx)(N.Provider, {
                                          value: {
                                              activeDescendant: D,
                                              selected: a,
                                              setSelected: u,
                                              itemToString: R
                                          },
                                          children: (0, r.jsx)(V, {
                                              ...o,
                                              style: { maxHeight: 46 * O },
                                              'aria-multiselectable': S,
                                              id: M,
                                              ref: P,
                                              className: s()(I.list, h, { [I.scroller]: v }),
                                              sections: [U.length],
                                              sectionHeight: 0,
                                              rowHeight: 40,
                                              renderRow: (e) => {
                                                  let { row: t } = e;
                                                  return U[t];
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
let R = i.createContext(null);
function v(e) {
    var t;
    let { value: n, children: a, disabled: o = !1, selectedColor: u = T.STANDARD, ...d } = e,
        { activeDescendant: _, selected: E, setSelected: f, itemToString: h } = i.useContext(N),
        p = h(n),
        S = _ === p,
        g = null !== (t = null == d ? void 0 : d.selected) && void 0 !== t ? t : E.has(n),
        A = (0, l.JA)(p);
    return (0, r.jsx)(c.P, {
        tag: 'li',
        id: p,
        onClick: () => (o ? null : f(n)),
        [m]: n,
        className: s()(I.item, {
            [I.focused]: S,
            [u]: g,
            [I.disabled]: o
        }),
        ...A,
        role: 'option',
        'aria-selected': g,
        'aria-disabled': o,
        children: (0, r.jsx)(R.Provider, {
            value: n,
            children: a
        })
    });
}
(v.Colors = T),
    (v.Label = function (e) {
        let { children: t } = e;
        return (0, r.jsx)('span', {
            className: I.itemLabel,
            children: t
        });
    }),
    (v.Icon = function (e) {
        let { children: t } = e;
        return (0, r.jsx)('span', {
            className: I.itemCheckbox,
            children: t
        });
    }),
    (v.Checkbox = function (e) {
        let { checked: t } = e,
            { selected: n } = i.useContext(N),
            a = i.useContext(R);
        return (0, r.jsx)('span', {
            className: I.itemCheckbox,
            children: (0, r.jsx)(u.X, {
                displayOnly: !0,
                value: null != t ? t : null != a && n.has(a),
                type: u.X.Types.INVERTED,
                size: 20
            })
        });
    }),
    (v.Checkmark = function () {
        let { selected: e } = i.useContext(N),
            t = i.useContext(R);
        return e.has(t)
            ? (0, r.jsx)('span', {
                  className: I.itemCheckbox,
                  children: (0, r.jsx)(h.CircleCheckIcon, {
                      size: 'custom',
                      color: 'currentColor',
                      width: 20,
                      height: 20
                  })
              })
            : null;
    });
