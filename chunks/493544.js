n.d(t, {
  ID: function() {
    return C
  },
  NM: function() {
    return P
  },
  Xi: function() {
    return E
  },
  bT: function() {
    return a
  }
});
var i, s, l, r, o, a, c = n(735250),
  u = n(470079),
  d = n(120356),
  h = n.n(d),
  m = n(920906),
  p = n(608863),
  b = n(873546),
  f = n(215569),
  S = n(481060),
  x = n(110924),
  v = n(358085),
  g = n(792125),
  N = n(425493),
  j = n(576107);
let C = {
    HEADER: "HEADER",
    DIVIDER: "DIVIDER",
    CUSTOM: "CUSTOM"
  },
  T = u.createContext(null);
class E extends(o = u.PureComponent) {
  renderContent() {
    let {
      scrollerRef: e,
      ...t
    } = this.props;
    return (0, c.jsx)("div", {
      className: j.customContainer,
      children: (0, c.jsx)(S.ListAuto, {
        ...t,
        className: h()(j.customScroller, j.contentRegionScroller),
        ref: e
      })
    })
  }
  render() {
    return (0, c.jsx)("div", {
      className: j.customColumn,
      children: this.renderContent()
    })
  }
}

function P(e) {
  let {
    children: t
  } = e;
  return (0, c.jsx)("div", {
    className: j.customColumn,
    children: (0, c.jsx)("div", {
      className: j.customContainer,
      children: (0, c.jsx)(S.ScrollerAuto, {
        className: h()(j.customScroller, j.contentRegionScroller),
        children: t
      })
    })
  })
}
l = {
  paddingTop: 60,
  paddingBottom: 60
}, (s = "defaultProps") in(i = E) ? Object.defineProperty(i, s, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[s] = l, (r = a || (a = {})).MINIMAL = "minimal", r.CUSTOM = "custom", r.DEFAULT = "default", r.WIDE = "wide";
let R = Object.freeze({
  minimal: "contentColumnMinimal",
  custom: "contentColumnCustom",
  default: "contentColumnDefault",
  wide: "contentColumnWide"
});

function I(e) {
  let {
    isMobile: t,
    mobileSidebarOpen: n,
    closeAction: i
  } = e, s = u.useRef(null);
  return null == i ? null : (0, c.jsx)("div", {
    className: h()(j.toolsContainer, {
      [j.mobileToolsContainer]: t,
      [j.mobileSidebarTools]: t,
      [j.closeIconOnly]: !n,
      [j.isMobileAndroid]: !n && !0 === (0, v.isAndroidWeb)()
    }),
    ref: s,
    children: (0, c.jsx)(S.FocusRingScope, {
      containerRef: s,
      children: (0, c.jsx)("div", {
        className: j.tools,
        children: (0, c.jsx)(N.Z, {
          className: h()({
            [j.mobileToolsCloseIcon]: t
          }),
          closeAction: i,
          keybind: "ESC"
        })
      })
    })
  })
}
t.ZP = function(e) {
  let {
    sidebar: t,
    content: n,
    notice: i,
    section: s,
    closeAction: l,
    sidebarTheme: r,
    contentType: o,
    scrollerRef: a,
    mobileSidebarOpen: d,
    toggleSidebar: v,
    hideSidebar: N = !1
  } = e, C = u.useRef(null), E = u.useRef(null), P = (0, x.Z)(s), y = (0, m.useTransition)(N, {
    from: {
      position: "absolute",
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    reverse: N,
    config: m.config.stiff
  }), A = u.useCallback(e => {
    C.current = e, null != a && (a.current = e)
  }, [a]);
  u.useLayoutEffect(() => {
    null != C.current && P !== s && C.current.scrollTo({
      to: 0
    })
  }, [s, P, C]);
  let B = (0, c.jsx)(I, {
    isMobile: b.tq,
    mobileSidebarOpen: d,
    closeAction: l
  });

  function Z() {
    return null == i ? null : (0, c.jsx)(S.SlideIn, {
      className: h()(j.noticeRegion, {
        [j.noticeRegionHiddenSidebar]: N
      }),
      children: i
    }, s)
  }
  return (0, c.jsx)(c.Fragment, {
    children: y((e, i) => (0, c.jsxs)(m.animated.div, {
      style: e,
      className: j.standardSidebarView,
      children: [!i && (null == t ? null : (0, c.jsx)("div", {
        className: h()(j.sidebarRegion, (0, g.Q)(r), {
          [j.flexFullWidth]: b.tq,
          [j.hidden]: b.tq && !1 === d
        }),
        children: (0, c.jsx)(S.AdvancedScrollerThin, {
          className: j.sidebarRegionScroller,
          fade: !0,
          children: (0, c.jsxs)("nav", {
            className: h()(j.sidebar, {
              [j.mobileSidebar]: b.tq
            }),
            children: [b.tq && (0, c.jsx)("div", {
              className: j.mobileSidebarHeader,
              children: B
            }), t]
          })
        })
      })), function() {
        let e = null != v && null != l && d,
          t = b.tq && (0, c.jsxs)("div", {
            className: h()(j.mobileContentHeader, {
              [j.hideHamburger]: !e
            }),
            children: [e && (0, c.jsx)(p.r, {
              onClick: v
            }), B]
          });
        if ("custom" === o) return (0, c.jsxs)(f.W, {
          component: "div",
          className: j.contentRegion,
          children: [t, n, !b.tq && B, Z()]
        });
        let i = R[null != o ? o : "default"];
        return (0, c.jsxs)(f.W, {
          component: "div",
          className: h()(j.contentRegion, {
            [j.hidden]: b.tq && !0 === d
          }),
          children: [(0, c.jsxs)("div", {
            className: j.contentTransitionWrap,
            children: [t, (0, c.jsxs)(S.AdvancedScrollerAuto, {
              className: h()(j.contentRegionScroller, N ? j.contentRegionHiddenSidebar : j.contentRegionShownSidebar),
              ref: A,
              children: [(0, c.jsx)(T.Provider, {
                value: C.current,
                children: (0, c.jsx)(S.TabBar.Panel, {
                  id: s,
                  className: h()(j.contentColumn, j[i], {
                    [j.mobileContent]: b.tq
                  }),
                  ref: E,
                  style: b.tq ? {
                    maxWidth: window.innerWidth
                  } : void 0,
                  children: N ? n : (0, c.jsx)(S.FocusRingScope, {
                    containerRef: E,
                    children: n
                  })
                })
              }), !b.tq && B]
            })]
          }), Z()]
        })
      }()]
    }))
  })
}