"use strict";
n.d(t, {
  T: function() {
    return N
  },
  v: function() {
    return A
  }
}), n(390547), n(724458), n(653041), n(47120), n(411104);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(348327),
  l = n.n(a),
  u = n(498405),
  _ = n(597442),
  c = n(21340),
  d = n(922770),
  E = n(857595),
  I = n(607070),
  T = n(828214),
  h = n(898560),
  f = n(788314),
  S = n(639897);

function A(e) {
  var t;
  let {
    navId: n,
    variant: s = "flexible",
    hideScroller: a = !1,
    className: d,
    children: A,
    onClose: N,
    onSelect: O
  } = e, p = function e(t) {
    return (function e(t) {
      return null == t ? [] : r.Children.toArray(t).flatMap(t => {
        var n;
        return null == t ? [] : Array.isArray(t) ? e(t) : t.type === r.Fragment ? null !== (n = e(t.props.children)) && void 0 !== n ? n : [] : [t]
      })
    })(t).reduce((t, n) => {
      var i, r;
      if (n.type === T.Cl) return t.push({
        type: "separator",
        navigable: !1
      }), t;
      if (n.type === T.kS) {
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
      if (n.type === T.sN) return t.push(null != n.props.render ? {
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
      else if (n.type === T.S8) return t.push({
        type: "checkbox",
        key: n.props.id,
        navigable: !0,
        props: n.props
      }), t;
      else if (n.type === T.k5) return t.push({
        type: "radio",
        key: n.props.id,
        navigable: !0,
        props: n.props
      }), t;
      else if (n.type === T.II) return t.push(null != n.props.control ? {
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
  }(A), R = function e(t) {
    return t.reduce((t, n) => n.navigable ? (t.push({
      key: n.key,
      children: "item" === n.type && null != n.children ? e(n.children) : void 0
    }), t) : t, [])
  }(p), g = r.useRef([]);
  !l()(g.current, R) && (g.current = R);
  let C = null === (t = p.find(e => null != e.key)) || void 0 === t ? void 0 : t.key,
    v = (0, u.ZP)({
      navId: n,
      items: g.current,
      initialFocusPath: I.Z.keyboardModeEnabled && null != C ? [C] : [],
      closeMenu: N
    });
  r.useEffect(() => {
    v.isUsingKeyboardNavigation ? !I.Z.keyboardModeEnabled && (0, E.Qj)() : I.Z.keyboardModeEnabled && (0, E.rf)()
  }, [v.isUsingKeyboardNavigation]);
  let L = r.useRef(null);
  (0, _.T)(L);
  let D = a ? c.u2 : c.zJ;
  return (0, i.jsx)(h.r.Provider, {
    value: O,
    children: (0, i.jsx)("div", {
      className: o()(S.menu, S[s], d),
      ...v.getContainerProps(),
      ref: L,
      "aria-label": e["aria-label"],
      children: (0, i.jsxs)(D, {
        className: S.scroller,
        children: [0 === p.length && (0, i.jsx)(f.ck, {
          disabled: !0,
          label: () => (0, i.jsx)(m, {}),
          menuItemProps: v.getItemProps({
            path: ["empty"]
          }),
          isFocused: !1,
          onFocus: () => {},
          onClose: N
        }), p.length > 0 && function e(t, n, r, s) {
          let o = 0,
            a = [];
          return t.reduce((t, l, u) => {
            let _ = a.length > 0 ? a[a.length - 1] : t;
            switch (l.type) {
              case "separator":
                _.push((0, i.jsx)(f.Z0, {}, "separator-".concat(u))), o = 0;
                break;
              case "groupstart":
                o > 0 && l.length > 0 && (_.push((0, i.jsx)(f.Z0, {}, "separator-".concat(u))), o = 0), a.push([]);
                break;
              case "groupend":
                a.length > 0 && t.push((0, i.jsx)(f.ZA, {
                  contents: a.pop(),
                  ...l.props
                }, "group-".concat(u)));
                break;
              case "item": {
                let {
                  children: t,
                  childRowHeight: a,
                  onChildrenScroll: u,
                  listClassName: c,
                  subMenuClassName: d
                } = l, E = null != t, I = [...r, l.key], T = n.isFocused(I), h = (0, i.jsx)(f.ck, {
                  ...l.props,
                  label: l.label,
                  hasSubmenu: null != t,
                  isFocused: T,
                  menuItemProps: {
                    ...n.getItemProps({
                      path: I,
                      hasSubmenu: E
                    }),
                    ...null != t ? {
                      "aria-haspopup": !0
                    } : {}
                  },
                  onClose: s
                }, l.key);
                E ? null != a ? _.push((0, i.jsx)(f.P2, {
                  ...l.props,
                  parentItem: h,
                  isFocused: T,
                  menuSubmenuProps: n.getSubmenuProps({
                    path: I
                  }),
                  rows: e(t, n, I, s),
                  rowHeight: a,
                  onScroll: u,
                  listClassName: c
                }, "".concat(l.key, "-submenu"))) : _.push((0, i.jsx)(f.LY, {
                  ...l.props,
                  subMenuClassName: d,
                  parentItem: h,
                  isFocused: T,
                  menuSubmenuProps: n.getSubmenuProps({
                    path: I
                  }),
                  renderSubmenu: () => e(t, n, I, s)
                }, "".concat(l.key, "-submenu"))) : _.push(h), o++;
                break
              }
              case "customitem": {
                let e = [...r, l.key];
                _.push((0, i.jsx)(f.kq, {
                  ...l.props,
                  isFocused: n.isFocused(e),
                  menuItemProps: n.getItemProps({
                    path: e
                  }),
                  onClose: s,
                  children: l.render
                }, l.key)), o++;
                break
              }
              case "checkbox": {
                let e = [...r, l.key];
                _.push((0, i.jsx)(f.oC, {
                  ...l.props,
                  isFocused: n.isFocused(e),
                  menuItemProps: n.getItemProps({
                    path: e,
                    role: "menuitemcheckbox"
                  })
                }, l.key)), o++;
                break
              }
              case "radio": {
                let e = [...r, l.key];
                _.push((0, i.jsx)(f.Rk, {
                  ...l.props,
                  isFocused: n.isFocused(e),
                  menuItemProps: n.getItemProps({
                    path: e,
                    role: "menuitemradio"
                  })
                }, l.key)), o++;
                break
              }
              case "control": {
                let e = [...r, l.key];
                _.push((0, i.jsx)(f.lc, {
                  ...l.props,
                  isFocused: n.isFocused(e),
                  menuItemProps: n.getItemProps({
                    path: e
                  }),
                  onClose: s
                }, l.key)), o++;
                break
              }
              case "compositecontrol": {
                let e = [...r, l.key];
                _.push((0, i.jsx)(f.$I, {
                  ...l.props,
                  isFocused: n.isFocused(e),
                  menuItemProps: n.getItemProps({
                    path: e
                  }),
                  onClose: s,
                  children: l.children
                }, l.key)), o++
              }
            }
            return t
          }, [])
        }(p, v, [], N)]
      })
    })
  })
}

function N() {
  return (0, i.jsx)("div", {
    className: o()(S.menu, S.loader, S.flexible),
    children: (0, i.jsx)(d.$, {})
  })
}

function m() {
  let e = "♫ (つ｡◕‿‿◕｡)つ ♪",
    [t, n] = r.useState(e);
  return r.useEffect(() => {
    if (I.Z.useReducedMotion) return;
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