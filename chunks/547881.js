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
  m = n("298119"),
  g = n("605094");
let E = p.OverlayWidgetTypes.DEFAULT,
  S = 1,
  v = r.createContext({
    type: E,
    opacity: S
  }),
  T = r.createContext(void 0),
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
        return (0, o.jsx)(T.Consumer, {
          children: e => (0, o.jsx)("div", {
            className: u()(n, m.bar, m[f()(a)]),
            style: e,
            ...i,
            children: t
          })
        })
      }
    })
  };
class I extends(i = r.PureComponent) {
  render() {
    let {
      disableScroll: e,
      children: t,
      className: n
    } = this.props;
    return (0, o.jsx)(T.Consumer, {
      children: i => (0, o.jsx)(v.Consumer, {
        children: a => {
          let l = u()(m.body, m[f()(a.type)], n);
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
}, (l = "defaultProps") in(a = I) ? Object.defineProperty(a, l, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[l] = s;
let N = e => {
    let {
      type: t = E,
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
        className: u()(m.widget, m[f()(t)], l),
        style: {
          width: n,
          height: i
        },
        onClick: r,
        children: a
      })
    })
  },
  O = e => {
    let {
      children: t,
      className: n,
      dynamicSize: i = !1
    } = e;
    return (0, o.jsx)(T.Consumer, {
      children: e => (0, o.jsx)("div", {
        className: u()(m.content, n, {
          [m.staticSize]: !i
        }),
        style: e,
        children: t
      })
    })
  };
N.Background = e => {
  let {
    children: t,
    opacityOverride: n
  } = e;
  if (null == t) return null;
  let i = [y, I, O];
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
        if (i.includes(t.type)) return (0, o.jsx)(T.Provider, {
          value: l,
          children: t
        });
        let e = t.type.displayName;
        throw Error("Widget.Background cannot be wrapped around ".concat(e, ". Pass a DOM node or one of ").concat(i.map(e => "Widget." + e.name).join(",")))
      }
    }
  })
}, N.Body = I, N.Content = O, N.Icon = e => {
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
      className: m.tutorialTip,
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
        className: u()(m.icon, {
          [m.toggledIconOn]: a
        }),
        innerClassName: g.flexCenter,
        "aria-label": n,
        children: (0, o.jsx)(t, {
          width: s,
          height: s,
          role: "img"
        })
      })
    }
  })
}, N.Bar = y, t.default = N