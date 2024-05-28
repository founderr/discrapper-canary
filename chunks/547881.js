"use strict";
n.r(t), n.d(t, {
  DEFAULT_OPACITY: function() {
    return S
  }
}), n("411104");
var i, a, l, s, o = n("735250"),
  r = n("470079"),
  d = n("120356"),
  u = n.n(d),
  c = n("877921"),
  f = n.n(c),
  h = n("481060"),
  p = n("981631"),
  E = n("744537"),
  m = n("961047");
let g = p.OverlayWidgetTypes.DEFAULT,
  S = 1,
  v = r.createContext({
    type: g,
    opacity: S
  }),
  C = r.createContext(void 0),
  y = e => {
    let {
      children: t,
      className: n,
      ...i
    } = e;
    return (0, o.jsx)(v.Consumer, {
      children: e => {
        let {
          type: a
        } = e;
        return (0, o.jsx)(C.Consumer, {
          children: e => (0, o.jsx)("div", {
            className: u()(n, E.bar, E[f()(a)]),
            style: e,
            ...i,
            children: t
          })
        })
      }
    })
  };
class _ extends(i = r.PureComponent) {
  render() {
    let {
      disableScroll: e,
      children: t,
      className: n
    } = this.props;
    return (0, o.jsx)(C.Consumer, {
      children: i => (0, o.jsx)(v.Consumer, {
        children: a => {
          let l = u()(E.body, E[f()(a.type)], n);
          return e ? (0, o.jsx)("div", {
            className: l,
            style: i,
            children: t
          }) : (0, o.jsx)(h.Scroller, {
            fade: !0,
            className: l,
            children: t
          })
        }
      })
    })
  }
}
s = {
  disableScroll: !1
}, (l = "defaultProps") in(a = _) ? Object.defineProperty(a, l, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[l] = s;
let O = e => {
    let {
      type: t = g,
      width: n,
      height: i,
      children: a,
      className: l,
      opacity: s = S,
      onClick: r
    } = e;
    return (0, o.jsx)(v.Provider, {
      value: {
        type: t,
        opacity: s
      },
      children: (0, o.jsx)("div", {
        className: u()(E.widget, E[f()(t)], l),
        style: {
          width: n,
          height: i
        },
        onClick: r,
        children: a
      })
    })
  },
  T = e => {
    let {
      children: t,
      className: n,
      dynamicSize: i = !1
    } = e;
    return (0, o.jsx)(C.Consumer, {
      children: e => (0, o.jsx)("div", {
        className: u()(E.content, n, {
          [E.staticSize]: !i
        }),
        style: e,
        children: t
      })
    })
  };
O.Background = e => {
  let {
    children: t,
    opacityOverride: n
  } = e;
  if (null == t) return null;
  let i = [y, _, T];
  return (0, o.jsx)(v.Consumer, {
    children: e => {
      let {
        opacity: a
      } = e, l = {
        backgroundColor: "rgba(54, 57, 63, ".concat("" + (null != n ? n : a), ")")
      };
      if ("string" == typeof t.type) return r.cloneElement(t, {
        style: l
      });
      {
        if (i.includes(t.type)) return (0, o.jsx)(C.Provider, {
          value: l,
          children: t
        });
        let e = t.type.displayName;
        throw Error("Widget.Background cannot be wrapped around ".concat(e, ". Pass a DOM node or one of ").concat(i.map(e => "Widget." + e.name).join(",")))
      }
    }
  })
}, O.Body = _, O.Content = T, O.Icon = e => {
  let {
    icon: t,
    label: n,
    onClick: i,
    isActive: a,
    tooltipPosition: l = "top",
    size: s = 20,
    isTutorial: r = !1
  } = e;
  return (0, o.jsx)(h.Tooltip, {
    text: r ? (0, o.jsx)("div", {
      className: E.tutorialTip,
      children: n
    }) : n,
    "aria-label": n,
    position: l,
    forceOpen: r,
    color: r ? h.Tooltip.Colors.BRAND : h.Tooltip.Colors.BLACK,
    children: e => {
      let {
        onMouseEnter: l,
        onMouseLeave: r
      } = e;
      return (0, o.jsx)(h.Button, {
        look: h.Button.Looks.BLANK,
        size: h.Button.Sizes.NONE,
        onClick: i,
        onMouseEnter: l,
        onMouseLeave: r,
        className: u()(E.icon, {
          [E.toggledIconOn]: a
        }),
        innerClassName: m.flexCenter,
        "aria-label": n,
        children: (0, o.jsx)(t, {
          width: s,
          height: s,
          role: "img"
        })
      })
    }
  })
}, O.Bar = y, t.default = O