"use strict";
n.r(t), n.d(t, {
  Menu: function() {
    return g
  },
  MenuSpinner: function() {
    return T
  }
}), n("881410"), n("808653"), n("424973"), n("222007"), n("70102");
var i = n("37983"),
  r = n("884691"),
  s = n("414456"),
  a = n.n(s),
  o = n("714617"),
  l = n.n(o),
  u = n("880317"),
  c = n("311720"),
  d = n("670914"),
  p = n("242670"),
  h = n("180748"),
  f = n("206230"),
  E = n("155823"),
  _ = n("107728"),
  m = n("537011"),
  S = n("639826");

function g(e) {
  var t;
  let {
    navId: n,
    variant: s = "flexible",
    hideScroller: o = !1,
    className: p,
    children: g,
    onClose: T,
    onSelect: v
  } = e, C = function e(t) {
    return (function e(t) {
      return null == t ? [] : r.Children.toArray(t).flatMap(t => {
        var n;
        return null == t ? [] : Array.isArray(t) ? e(t) : t.type === r.Fragment ? null !== (n = e(t.props.children)) && void 0 !== n ? n : [] : [t]
      })
    })(t).reduce((t, n) => {
      var i, r;
      if (n.type === E.MenuSeparator) return t.push({
        type: "separator",
        navigable: !1
      }), t;
      if (n.type === E.MenuGroup) {
        let i = e(n.props.children);
        return i.length > 0 && (t.push({
          type: "groupstart",
          length: i.length,
          navigable: !1,
          props: n.props
        }), t.push(...i), t.push({
          type: "groupend",
          length: i.length,
          navigable: !1,
          props: n.props
        })), t
      }
      if (n.type === E.MenuItem) return t.push(null != n.props.render ? {
        type: "customitem",
        key: n.props.id,
        navigable: null == n.props.navigable || n.props.navigable,
        render: n.props.render,
        props: n.props
      } : {
        type: "item",
        key: n.props.id,
        navigable: !0,
        label: n.props.label,
        children: n.props.children ? e(n.props.children) : void 0,
        onChildrenScroll: n.props.onChildrenScroll,
        props: n.props,
        childRowHeight: n.props.childRowHeight,
        listClassName: n.props.listClassName,
        subMenuClassName: n.props.subMenuClassName
      }), t;
      else if (n.type === E.MenuCheckboxItem) return t.push({
        type: "checkbox",
        key: n.props.id,
        navigable: !0,
        props: n.props
      }), t;
      else if (n.type === E.MenuRadioItem) return t.push({
        type: "radio",
        key: n.props.id,
        navigable: !0,
        props: n.props
      }), t;
      else if (n.type === E.MenuControlItem) return t.push(null != n.props.control ? {
        type: "control",
        key: n.props.id,
        navigable: !0,
        props: n.props
      } : {
        type: "compositecontrol",
        key: n.props.id,
        navigable: !1 !== n.props.interactive,
        children: n.props.children,
        props: n.props
      }), t;
      throw Error("Menu API only allows Items and groups of Items as children. Received ".concat(null !== (r = null !== (i = null == n ? void 0 : n.type) && void 0 !== i ? i : n) && void 0 !== r ? r : typeof n, " (").concat(typeof n, ") instead"))
    }, [])
  }(g), A = function e(t) {
    return t.reduce((t, n) => n.navigable ? (t.push({
      key: n.key,
      children: "item" === n.type && null != n.children ? e(n.children) : void 0
    }), t) : t, [])
  }(C), R = r.useRef([]);
  !l(R.current, A) && (R.current = A);
  let N = null === (t = C.find(e => null != e.key)) || void 0 === t ? void 0 : t.key,
    y = (0, u.useMenuNavigator)({
      navId: n,
      items: R.current,
      initialFocusPath: f.default.keyboardModeEnabled && null != N ? [N] : [],
      closeMenu: T
    });
  r.useEffect(() => {
    y.isUsingKeyboardNavigation ? !f.default.keyboardModeEnabled && (0, h.enableKeyboardMode)() : f.default.keyboardModeEnabled && (0, h.disableKeyboardMode)()
  }, [y.isUsingKeyboardNavigation]);
  let O = r.useRef(null);
  (0, c.useFocusLock)(O);
  let D = o ? d.ScrollerNone : d.ScrollerThin;
  return (0, i.jsx)(_.OnMenuSelectContext.Provider, {
    value: v,
    children: (0, i.jsx)("div", {
      className: a(S.menu, S[s], p),
      ...y.getContainerProps(),
      ref: O,
      "aria-label": e["aria-label"],
      children: (0, i.jsxs)(D, {
        className: S.scroller,
        children: [0 === C.length && (0, i.jsx)(m.Item, {
          disabled: !0,
          label: () => (0, i.jsx)(I, {}),
          menuItemProps: y.getItemProps({
            path: ["empty"]
          }),
          isFocused: !1,
          onFocus: () => {},
          onClose: T
        }), C.length > 0 && function e(t, n, r, s) {
          let a = 0,
            o = [];
          return t.reduce((t, l, u) => {
            let c = o.length > 0 ? o[o.length - 1] : t;
            switch (l.type) {
              case "separator":
                c.push((0, i.jsx)(m.Separator, {}, "separator-".concat(u))), a = 0;
                break;
              case "groupstart":
                a > 0 && l.length > 0 && (c.push((0, i.jsx)(m.Separator, {}, "separator-".concat(u))), a = 0), o.push([]);
                break;
              case "groupend":
                o.length > 0 && t.push((0, i.jsx)(m.Group, {
                  contents: o.pop(),
                  ...l.props
                }, "group-".concat(u)));
                break;
              case "item": {
                let {
                  children: t,
                  childRowHeight: o,
                  onChildrenScroll: u,
                  listClassName: d,
                  subMenuClassName: p
                } = l, h = null != t, f = [...r, l.key], E = n.isFocused(f), _ = (0, i.jsx)(m.Item, {
                  ...l.props,
                  label: l.label,
                  hasSubmenu: null != t,
                  isFocused: E,
                  menuItemProps: {
                    ...n.getItemProps({
                      path: f,
                      hasSubmenu: h
                    }),
                    ...null != t ? {
                      "aria-haspopup": !0
                    } : {}
                  },
                  onClose: s
                }, l.key);
                h ? null != o ? c.push((0, i.jsx)(m.SubmenuListItem, {
                  ...l.props,
                  parentItem: _,
                  isFocused: E,
                  menuSubmenuProps: n.getSubmenuProps({
                    path: f
                  }),
                  rows: e(t, n, f, s),
                  rowHeight: o,
                  onScroll: u,
                  listClassName: d
                }, "".concat(l.key, "-submenu"))) : c.push((0, i.jsx)(m.SubmenuItem, {
                  ...l.props,
                  subMenuClassName: p,
                  parentItem: _,
                  isFocused: E,
                  menuSubmenuProps: n.getSubmenuProps({
                    path: f
                  }),
                  renderSubmenu: () => e(t, n, f, s)
                }, "".concat(l.key, "-submenu"))) : c.push(_), a++;
                break
              }
              case "customitem": {
                let e = [...r, l.key];
                c.push((0, i.jsx)(m.CustomItem, {
                  ...l.props,
                  isFocused: n.isFocused(e),
                  menuItemProps: n.getItemProps({
                    path: e
                  }),
                  onClose: s,
                  children: l.render
                }, l.key)), a++;
                break
              }
              case "checkbox": {
                let e = [...r, l.key];
                c.push((0, i.jsx)(m.CheckboxItem, {
                  ...l.props,
                  isFocused: n.isFocused(e),
                  menuItemProps: n.getItemProps({
                    path: e,
                    role: "menuitemcheckbox"
                  })
                }, l.key)), a++;
                break
              }
              case "radio": {
                let e = [...r, l.key];
                c.push((0, i.jsx)(m.RadioItem, {
                  ...l.props,
                  isFocused: n.isFocused(e),
                  menuItemProps: n.getItemProps({
                    path: e,
                    role: "menuitemradio"
                  })
                }, l.key)), a++;
                break
              }
              case "control": {
                let e = [...r, l.key];
                c.push((0, i.jsx)(m.ControlItem, {
                  ...l.props,
                  isFocused: n.isFocused(e),
                  menuItemProps: n.getItemProps({
                    path: e
                  }),
                  onClose: s
                }, l.key)), a++;
                break
              }
              case "compositecontrol": {
                let e = [...r, l.key];
                c.push((0, i.jsx)(m.CompositeControlItem, {
                  ...l.props,
                  isFocused: n.isFocused(e),
                  menuItemProps: n.getItemProps({
                    path: e
                  }),
                  onClose: s,
                  children: l.children
                }, l.key)), a++
              }
            }
            return t
          }, [])
        }(C, y, [], T)]
      })
    })
  })
}

function T() {
  return (0, i.jsx)("div", {
    className: a(S.menu, S.loader, S.flexible),
    children: (0, i.jsx)(p.Spinner, {})
  })
}

function I() {
  let e = "♫ (つ｡◕‿‿◕｡)つ ♪",
    [t, n] = r.useState(e);
  return r.useEffect(() => {
    if (f.default.useReducedMotion) return;
    let t = setInterval(() => {
      n(t => t === e ? "♫ ⊂(｡◕‿‿◕｡⊂) ♪" : e)
    }, 700);
    return () => clearInterval(t)
  }, []), (0, i.jsx)("div", {
    style: {
      width: "100%",
      textAlign: "center"
    },
    children: t
  })
}