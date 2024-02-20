"use strict";
n.r(t), n.d(t, {
  useMultiSelect: function() {
    return g
  },
  useSingleSelect: function() {
    return T
  },
  Combobox: function() {
    return C
  },
  ComboboxItem: function() {
    return R
  }
}), n("222007");
var i = n("37983"),
  r = n("884691"),
  s = n("414456"),
  a = n.n(s),
  o = n("974667"),
  l = n("685698"),
  u = n("227645"),
  c = n("605451"),
  d = n("433600"),
  p = n("577776"),
  h = n("810567"),
  f = n("578706"),
  E = n("782340"),
  _ = n("30441");
let m = "data-listbox-item-id",
  S = Object.freeze({
    STANDARD: _.selected,
    BRAND: _.selectedBrand
  });

function g(e) {
  let [t, n] = r.useState(() => new Set(e)), i = r.useCallback(e => {
    n(t => {
      let n = new Set(t);
      return n.has(e) ? n.delete(e) : n.add(e), n
    })
  }, []);
  return [t, i]
}

function T(e) {
  let [t, n] = r.useState(() => new Set(null != e ? [e] : void 0)), i = r.useCallback(e => {
    n(new Set([e]))
  }, []);
  return [t, i]
}

function I(e) {
  return String(e)
}
let v = r.createContext({
  activeDescendant: null,
  selected: new Set,
  setSelected: () => null,
  itemToString: I
});

function C(e) {
  let {
    placeholder: t,
    children: n,
    value: s,
    onChange: l,
    className: u,
    listClassName: f,
    "aria-label": S,
    multiSelect: g = !1,
    autoFocus: T = !1,
    maxVisibleItems: C = 5,
    itemToString: A = I,
    showScrollbar: R = !1
  } = e, [N, y] = r.useState(""), [O] = r.useState(!0), [D, b] = r.useState(null), P = r.useId(), L = r.useRef(null);
  r.useLayoutEffect(() => {
    let e = document.querySelector("[".concat(m, '="').concat(D, '"]')),
      t = L.current;
    null != t && null != e && t.scrollIntoViewNode({
      node: e,
      padding: 12
    })
  }, [D]);
  let M = n(N),
    U = 0 === M.length,
    w = r.useId(),
    k = r.useCallback(() => new Promise(e => {
      let t = L.current;
      if (null == t) return e();
      t.scrollToTop({
        callback: () => requestAnimationFrame(() => e())
      })
    }), []),
    G = r.useCallback(() => new Promise(e => {
      let t = L.current;
      if (null == t) return e();
      t.scrollToTop({
        callback: () => requestAnimationFrame(() => e())
      })
    }), []),
    x = r.useCallback((e, t) => {
      b(t);
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
      scrollToEnd: G,
      setFocus: x
    }),
    V = R ? d.ListThin : d.ListNone;
  return (0, i.jsx)(o.ListNavigatorProvider, {
    navigator: F,
    children: (0, i.jsx)(o.ListNavigatorContainer, {
      children: e => {
        let {
          ref: n,
          onKeyDown: r,
          ...o
        } = e;
        return (0, i.jsxs)("div", {
          ref: n,
          role: "combobox",
          "aria-label": S,
          "aria-expanded": O,
          "aria-controls": O ? P : void 0,
          "aria-owns": P,
          "aria-haspopup": "listbox",
          className: a(_.combobox, u),
          children: [(0, i.jsx)(h.default, {
            autoFocus: T,
            size: h.default.Sizes.MEDIUM,
            placeholder: t,
            query: N,
            onChange: y,
            onKeyDown: r,
            onBlur: () => b(null),
            onClear: () => y(""),
            className: a({
              [_.searchWithScrollbar]: R
            }),
            inputProps: {
              "aria-multiline": !1,
              "aria-activedescendant": null != D ? D : void 0
            }
          }), (0, i.jsx)("div", {
            children: O && (U ? (0, i.jsxs)("div", {
              className: _.empty,
              children: [(0, i.jsx)(c.Heading, {
                variant: "heading-md/semibold",
                children: E.default.Messages.AUTOCOMPLETE_NO_RESULTS_HEADER
              }), (0, i.jsx)(p.Text, {
                color: "text-muted",
                variant: "text-md/normal",
                children: E.default.Messages.AUTOCOMPLETE_NO_RESULTS_BODY
              })]
            }) : (0, i.jsx)(v.Provider, {
              value: {
                activeDescendant: D,
                selected: s,
                setSelected: l,
                itemToString: A
              },
              children: (0, i.jsx)(V, {
                ...o,
                style: {
                  maxHeight: 46 * C
                },
                "aria-multiselectable": g,
                id: P,
                ref: L,
                className: a(_.list, f, {
                  [_.scroller]: R
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
let A = r.createContext(null);

function R(e) {
  var t;
  let {
    value: n,
    children: s,
    disabled: l = !1,
    selectedColor: c = S.STANDARD,
    ...d
  } = e, {
    activeDescendant: p,
    selected: h,
    setSelected: f,
    itemToString: E
  } = r.useContext(v), g = E(n), T = p === g, I = null !== (t = null == d ? void 0 : d.selected) && void 0 !== t ? t : h.has(n), C = (0, o.useListItem)(g);
  return (0, i.jsx)(u.Clickable, {
    tag: "li",
    id: g,
    onClick: () => l ? null : f(n),
    [m]: n,
    className: a(_.item, {
      [_.focused]: T,
      [c]: I,
      [_.disabled]: l
    }),
    ...C,
    role: "option",
    "aria-selected": I,
    "aria-disabled": l,
    children: (0, i.jsx)(A.Provider, {
      value: n,
      children: s
    })
  })
}
R.Colors = S, R.Label = function(e) {
  let {
    children: t
  } = e;
  return (0, i.jsx)("span", {
    className: _.itemLabel,
    children: t
  })
}, R.Icon = function(e) {
  let {
    children: t
  } = e;
  return (0, i.jsx)("span", {
    className: _.itemCheckbox,
    children: t
  })
}, R.Checkbox = function(e) {
  let {
    checked: t
  } = e, {
    selected: n
  } = r.useContext(v), s = r.useContext(A);
  return (0, i.jsx)("span", {
    className: _.itemCheckbox,
    children: (0, i.jsx)(l.Checkbox, {
      displayOnly: !0,
      value: null != t ? t : null != s && n.has(s),
      type: l.Checkbox.Types.INVERTED,
      size: 20
    })
  })
}, R.Checkmark = function() {
  let {
    selected: e
  } = r.useContext(v), t = r.useContext(A), n = e.has(t);
  return n ? (0, i.jsx)("span", {
    className: _.itemCheckbox,
    children: (0, i.jsx)(f.default, {
      width: 20,
      height: 20
    })
  }) : null
}