"use strict";
n.r(t), n.d(t, {
  useMultiSelect: function() {
    return v
  },
  useSingleSelect: function() {
    return S
  },
  Combobox: function() {
    return C
  },
  ComboboxItem: function() {
    return y
  }
}), n("222007");
var i = n("37983"),
  s = n("884691"),
  r = n("414456"),
  a = n.n(r),
  o = n("974667"),
  l = n("685698"),
  u = n("227645"),
  d = n("605451"),
  c = n("433600"),
  f = n("577776"),
  _ = n("810567"),
  h = n("578706"),
  g = n("782340"),
  m = n("640698");
let E = "data-listbox-item-id",
  p = Object.freeze({
    STANDARD: m.selected,
    BRAND: m.selectedBrand
  });

function v(e) {
  let [t, n] = s.useState(() => new Set(e)), i = s.useCallback(e => {
    n(t => {
      let n = new Set(t);
      return n.has(e) ? n.delete(e) : n.add(e), n
    })
  }, []);
  return [t, i]
}

function S(e) {
  let [t, n] = s.useState(() => new Set(null != e ? [e] : void 0)), i = s.useCallback(e => {
    n(new Set([e]))
  }, []);
  return [t, i]
}

function T(e) {
  return String(e)
}
let I = s.createContext({
  activeDescendant: null,
  selected: new Set,
  setSelected: () => null,
  itemToString: T
});

function C(e) {
  let {
    placeholder: t,
    children: n,
    value: r,
    onChange: l,
    className: u,
    listClassName: h,
    "aria-label": p,
    multiSelect: v = !1,
    autoFocus: S = !1,
    maxVisibleItems: C = 5,
    itemToString: A = T,
    showScrollbar: y = !1
  } = e, [N, R] = s.useState(""), [D] = s.useState(!0), [O, P] = s.useState(null), b = s.useId(), L = s.useRef(null);
  s.useLayoutEffect(() => {
    let e = document.querySelector("[".concat(E, '="').concat(O, '"]')),
      t = L.current;
    null != t && null != e && t.scrollIntoViewNode({
      node: e,
      padding: 12
    })
  }, [O]);
  let M = n(N),
    U = 0 === M.length,
    w = s.useId(),
    k = s.useCallback(() => new Promise(e => {
      let t = L.current;
      if (null == t) return e();
      t.scrollToTop({
        callback: () => requestAnimationFrame(() => e())
      })
    }), []),
    V = s.useCallback(() => new Promise(e => {
      let t = L.current;
      if (null == t) return e();
      t.scrollToTop({
        callback: () => requestAnimationFrame(() => e())
      })
    }), []),
    G = s.useCallback((e, t) => {
      P(t);
      let n = document.querySelector(e),
        i = L.current;
      null != i && null != n && i.scrollIntoViewNode({
        node: n
      })
    }, []),
    F = (0, o.default)({
      id: w,
      isEnabled: !0,
      useVirtualFocus: !0,
      scrollToStart: k,
      scrollToEnd: V,
      setFocus: G
    }),
    x = y ? c.ListThin : c.ListNone;
  return (0, i.jsx)(o.ListNavigatorProvider, {
    navigator: F,
    children: (0, i.jsx)(o.ListNavigatorContainer, {
      children: e => {
        let {
          ref: n,
          onKeyDown: s,
          ...o
        } = e;
        return (0, i.jsxs)("div", {
          ref: n,
          role: "combobox",
          "aria-label": p,
          "aria-expanded": D,
          "aria-controls": D ? b : void 0,
          "aria-owns": b,
          "aria-haspopup": "listbox",
          className: a(m.combobox, u),
          children: [(0, i.jsx)(_.default, {
            autoFocus: S,
            size: _.default.Sizes.MEDIUM,
            placeholder: t,
            query: N,
            onChange: R,
            onKeyDown: s,
            onBlur: () => P(null),
            onClear: () => R(""),
            className: a({
              [m.searchWithScrollbar]: y
            }),
            inputProps: {
              "aria-multiline": !1,
              "aria-activedescendant": null != O ? O : void 0
            }
          }), (0, i.jsx)("div", {
            children: D && (U ? (0, i.jsxs)("div", {
              className: m.empty,
              children: [(0, i.jsx)(d.Heading, {
                variant: "heading-md/semibold",
                children: g.default.Messages.AUTOCOMPLETE_NO_RESULTS_HEADER
              }), (0, i.jsx)(f.Text, {
                color: "text-muted",
                variant: "text-md/normal",
                children: g.default.Messages.AUTOCOMPLETE_NO_RESULTS_BODY
              })]
            }) : (0, i.jsx)(I.Provider, {
              value: {
                activeDescendant: O,
                selected: r,
                setSelected: l,
                itemToString: A
              },
              children: (0, i.jsx)(x, {
                ...o,
                style: {
                  maxHeight: 46 * C
                },
                "aria-multiselectable": v,
                id: b,
                ref: L,
                className: a(m.list, h, {
                  [m.scroller]: y
                }),
                sections: [M.length],
                sectionHeight: 0,
                rowHeight: 40,
                renderRow: e => {
                  let {
                    row: t
                  } = e;
                  return M[t]
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
let A = s.createContext(null);

function y(e) {
  var t;
  let {
    value: n,
    children: r,
    disabled: l = !1,
    selectedColor: d = p.STANDARD,
    ...c
  } = e, {
    activeDescendant: f,
    selected: _,
    setSelected: h,
    itemToString: g
  } = s.useContext(I), v = g(n), S = f === v, T = null !== (t = null == c ? void 0 : c.selected) && void 0 !== t ? t : _.has(n), C = (0, o.useListItem)(v);
  return (0, i.jsx)(u.Clickable, {
    tag: "li",
    id: v,
    onClick: () => l ? null : h(n),
    [E]: n,
    className: a(m.item, {
      [m.focused]: S,
      [d]: T,
      [m.disabled]: l
    }),
    ...C,
    role: "option",
    "aria-selected": T,
    "aria-disabled": l,
    children: (0, i.jsx)(A.Provider, {
      value: n,
      children: r
    })
  })
}
y.Colors = p, y.Label = function(e) {
  let {
    children: t
  } = e;
  return (0, i.jsx)("span", {
    className: m.itemLabel,
    children: t
  })
}, y.Icon = function(e) {
  let {
    children: t
  } = e;
  return (0, i.jsx)("span", {
    className: m.itemCheckbox,
    children: t
  })
}, y.Checkbox = function(e) {
  let {
    checked: t
  } = e, {
    selected: n
  } = s.useContext(I), r = s.useContext(A);
  return (0, i.jsx)("span", {
    className: m.itemCheckbox,
    children: (0, i.jsx)(l.Checkbox, {
      displayOnly: !0,
      value: null != t ? t : null != r && n.has(r),
      type: l.Checkbox.Types.INVERTED,
      size: 20
    })
  })
}, y.Checkmark = function() {
  let {
    selected: e
  } = s.useContext(I), t = s.useContext(A), n = e.has(t);
  return n ? (0, i.jsx)("span", {
    className: m.itemCheckbox,
    children: (0, i.jsx)(h.default, {
      width: 20,
      height: 20
    })
  }) : null
}