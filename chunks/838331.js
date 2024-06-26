"use strict";
n.d(t, {
  A7: function() {
    return A
  },
  hQ: function() {
    return R
  },
  lo: function() {
    return C
  },
  yn: function() {
    return m
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(924826),
  l = n(91192),
  u = n(178940),
  _ = n(1561),
  c = n(260034),
  d = n(742746),
  E = n(326452),
  I = n(993365),
  T = n(481060),
  h = n(689938),
  f = n(326375);
let S = "data-listbox-item-id",
  N = Object.freeze({
    STANDARD: f.selected,
    BRAND: f.selectedBrand
  });

function A(e) {
  let [t, n] = r.useState(() => new Set(e));
  return [t, r.useCallback(e => {
    n(t => {
      let n = new Set(t);
      return n.has(e) ? n.delete(e) : n.add(e), n
    })
  }, [])]
}

function m(e) {
  let [t, n] = r.useState(() => new Set(null != e ? [e] : void 0));
  return [t, r.useCallback(e => {
    n(new Set([e]))
  }, [])]
}

function O(e) {
  return String(e)
}
let p = r.createContext({
  activeDescendant: null,
  selected: new Set,
  setSelected: () => null,
  itemToString: O
});

function R(e) {
  let {
    placeholder: t,
    children: n,
    value: s,
    onChange: u,
    className: _,
    listClassName: T,
    "aria-label": N,
    multiSelect: A = !1,
    autoFocus: m = !1,
    maxVisibleItems: R = 5,
    itemToString: g = O,
    showScrollbar: C = !1
  } = e, [v, L] = r.useState(""), [D] = r.useState(!0), [M, P] = r.useState(null), y = r.useId(), U = r.useRef(null);
  r.useLayoutEffect(() => {
    let e = document.querySelector("[".concat(S, '="').concat(M, '"]')),
      t = U.current;
    null != t && null != e && t.scrollIntoViewNode({
      node: e,
      padding: 12
    })
  }, [M]);
  let b = n(v),
    G = 0 === b.length,
    w = r.useId(),
    x = r.useCallback(() => new Promise(e => {
      let t = U.current;
      if (null == t) return e();
      t.scrollToTop({
        callback: () => requestAnimationFrame(() => e())
      })
    }), []),
    B = r.useCallback(() => new Promise(e => {
      let t = U.current;
      if (null == t) return e();
      t.scrollToTop({
        callback: () => requestAnimationFrame(() => e())
      })
    }), []),
    k = r.useCallback((e, t) => {
      P(t);
      let n = document.querySelector(e),
        i = U.current;
      null != i && null != n && i.scrollIntoViewNode({
        node: n
      })
    }, []),
    V = (0, a.ZP)({
      id: w,
      isEnabled: !0,
      useVirtualFocus: !0,
      scrollToStart: x,
      scrollToEnd: B,
      setFocus: k
    }),
    Z = C ? d.Tv : d.lW;
  return (0, i.jsx)(l.bG, {
    navigator: V,
    children: (0, i.jsx)(l.SJ, {
      children: e => {
        let {
          ref: n,
          onKeyDown: r,
          ...a
        } = e;
        return (0, i.jsxs)("div", {
          ref: n,
          role: "combobox",
          "aria-label": N,
          "aria-expanded": D,
          "aria-controls": D ? y : void 0,
          "aria-owns": y,
          "aria-haspopup": "listbox",
          className: o()(f.combobox, _),
          children: [(0, i.jsx)(E.E, {
            autoFocus: m,
            size: E.E.Sizes.MEDIUM,
            placeholder: t,
            query: v,
            onChange: L,
            onKeyDown: r,
            onBlur: () => P(null),
            onClear: () => L(""),
            className: o()({
              [f.searchWithScrollbar]: C
            }),
            inputProps: {
              "aria-multiline": !1,
              "aria-activedescendant": null != M ? M : void 0
            }
          }), (0, i.jsx)("div", {
            children: D && (G ? (0, i.jsxs)("div", {
              className: f.empty,
              children: [(0, i.jsx)(c.X, {
                variant: "heading-md/semibold",
                children: h.Z.Messages.AUTOCOMPLETE_NO_RESULTS_HEADER
              }), (0, i.jsx)(I.x, {
                color: "text-muted",
                variant: "text-md/normal",
                children: h.Z.Messages.AUTOCOMPLETE_NO_RESULTS_BODY
              })]
            }) : (0, i.jsx)(p.Provider, {
              value: {
                activeDescendant: M,
                selected: s,
                setSelected: u,
                itemToString: g
              },
              children: (0, i.jsx)(Z, {
                ...a,
                style: {
                  maxHeight: 46 * R
                },
                "aria-multiselectable": A,
                id: y,
                ref: U,
                className: o()(f.list, T, {
                  [f.scroller]: C
                }),
                sections: [b.length],
                sectionHeight: 0,
                rowHeight: 40,
                renderRow: e => {
                  let {
                    row: t
                  } = e;
                  return b[t]
                },
                renderSection: () => null
              })
            }))
          })]
        })
      }
    })
  })
}
let g = r.createContext(null);

function C(e) {
  var t;
  let {
    value: n,
    children: s,
    disabled: a = !1,
    selectedColor: u = N.STANDARD,
    ...c
  } = e, {
    activeDescendant: d,
    selected: E,
    setSelected: I,
    itemToString: T
  } = r.useContext(p), h = T(n), A = d === h, m = null !== (t = null == c ? void 0 : c.selected) && void 0 !== t ? t : E.has(n), O = (0, l.JA)(h);
  return (0, i.jsx)(_.P, {
    tag: "li",
    id: h,
    onClick: () => a ? null : I(n),
    [S]: n,
    className: o()(f.item, {
      [f.focused]: A,
      [u]: m,
      [f.disabled]: a
    }),
    ...O,
    role: "option",
    "aria-selected": m,
    "aria-disabled": a,
    children: (0, i.jsx)(g.Provider, {
      value: n,
      children: s
    })
  })
}
C.Colors = N, C.Label = function(e) {
  let {
    children: t
  } = e;
  return (0, i.jsx)("span", {
    className: f.itemLabel,
    children: t
  })
}, C.Icon = function(e) {
  let {
    children: t
  } = e;
  return (0, i.jsx)("span", {
    className: f.itemCheckbox,
    children: t
  })
}, C.Checkbox = function(e) {
  let {
    checked: t
  } = e, {
    selected: n
  } = r.useContext(p), s = r.useContext(g);
  return (0, i.jsx)("span", {
    className: f.itemCheckbox,
    children: (0, i.jsx)(u.X, {
      displayOnly: !0,
      value: null != t ? t : null != s && n.has(s),
      type: u.X.Types.INVERTED,
      size: 20
    })
  })
}, C.Checkmark = function() {
  let {
    selected: e
  } = r.useContext(p), t = r.useContext(g);
  return e.has(t) ? (0, i.jsx)("span", {
    className: f.itemCheckbox,
    children: (0, i.jsx)(T.CircleCheckIcon, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20
    })
  }) : null
}