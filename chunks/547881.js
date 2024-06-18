"use strict";
n.d(t, {
  wB: function() {
    return Z
  }
}), n(411104);
var i, s, l, o, a = n(735250),
  r = n(470079),
  c = n(120356),
  d = n.n(c),
  u = n(877921),
  h = n.n(u),
  p = n(481060),
  f = n(981631),
  E = n(744537),
  g = n(961047);
let m = f.t_t.DEFAULT,
  Z = 1,
  I = r.createContext({
    type: m,
    opacity: Z
  }),
  S = r.createContext(void 0),
  _ = e => {
    let {
      children: t,
      className: n,
      ...i
    } = e;
    return (0, a.jsx)(I.Consumer, {
      children: e => {
        let {
          type: s
        } = e;
        return (0, a.jsx)(S.Consumer, {
          children: e => (0, a.jsx)("div", {
            className: d()(n, E.bar, E[h()(s)]),
            style: e,
            ...i,
            children: t
          })
        })
      }
    })
  };
class C extends(i = r.PureComponent) {
  render() {
    let {
      disableScroll: e,
      children: t,
      className: n
    } = this.props;
    return (0, a.jsx)(S.Consumer, {
      children: i => (0, a.jsx)(I.Consumer, {
        children: s => {
          let l = d()(E.body, E[h()(s.type)], n);
          return e ? (0, a.jsx)("div", {
            className: l,
            style: i,
            children: t
          }) : (0, a.jsx)(p.Scroller, {
            fade: !0,
            className: l,
            children: t
          })
        }
      })
    })
  }
}
o = {
  disableScroll: !1
}, (l = "defaultProps") in(s = C) ? Object.defineProperty(s, l, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[l] = o;
let v = e => {
    let {
      type: t = m,
      width: n,
      height: i,
      children: s,
      className: l,
      opacity: o = Z,
      onClick: r
    } = e;
    return (0, a.jsx)(I.Provider, {
      value: {
        type: t,
        opacity: o
      },
      children: (0, a.jsx)("div", {
        className: d()(E.widget, E[h()(t)], l),
        style: {
          width: n,
          height: i
        },
        onClick: r,
        children: s
      })
    })
  },
  x = e => {
    let {
      children: t,
      className: n,
      dynamicSize: i = !1
    } = e;
    return (0, a.jsx)(S.Consumer, {
      children: e => (0, a.jsx)("div", {
        className: d()(E.content, n, {
          [E.staticSize]: !i
        }),
        style: e,
        children: t
      })
    })
  };
v.Background = e => {
  let {
    children: t,
    opacityOverride: n
  } = e;
  if (null == t) return null;
  let i = [_, C, x];
  return (0, a.jsx)(I.Consumer, {
    children: e => {
      let {
        opacity: s
      } = e, l = {
        backgroundColor: "rgba(54, 57, 63, ".concat("" + (null != n ? n : s), ")")
      };
      if ("string" == typeof t.type) return r.cloneElement(t, {
        style: l
      });
      if (i.includes(t.type)) return (0, a.jsx)(S.Provider, {
        value: l,
        children: t
      });
      {
        let e = t.type.displayName;
        throw Error("Widget.Background cannot be wrapped around ".concat(e, ". Pass a DOM node or one of ").concat(i.map(e => "Widget." + e.name).join(",")))
      }
    }
  })
}, v.Body = C, v.Content = x, v.Icon = e => {
  let {
    icon: t,
    label: n,
    onClick: i,
    isActive: s,
    tooltipPosition: l = "top",
    size: o = 20,
    isTutorial: r = !1
  } = e;
  return (0, a.jsx)(p.Tooltip, {
    text: r ? (0, a.jsx)("div", {
      className: E.tutorialTip,
      children: n
    }) : n,
    "aria-label": n,
    position: l,
    forceOpen: r,
    color: r ? p.Tooltip.Colors.BRAND : p.Tooltip.Colors.BLACK,
    children: e => {
      let {
        onMouseEnter: l,
        onMouseLeave: r
      } = e;
      return (0, a.jsx)(p.Button, {
        look: p.Button.Looks.BLANK,
        size: p.Button.Sizes.NONE,
        onClick: i,
        onMouseEnter: l,
        onMouseLeave: r,
        className: d()(E.icon, {
          [E.toggledIconOn]: s
        }),
        innerClassName: g.flexCenter,
        "aria-label": n,
        children: (0, a.jsx)(t, {
          color: "currentColor",
          size: "custom",
          width: o,
          height: o,
          role: "img"
        })
      })
    }
  })
}, v.Bar = _, t.ZP = v