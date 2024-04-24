"use strict";
n.r(t), n.d(t, {
  ContentTypes: function() {
    return o
  },
  DefaultCustomContentScroller: function() {
    return R
  },
  ListContentScroller: function() {
    return L
  },
  SectionTypes: function() {
    return b
  }
});
var s, a, i, l, r, o, c = n("735250"),
  d = n("470079"),
  u = n("120356"),
  S = n.n(u),
  T = n("718017"),
  E = n("608863"),
  p = n("873546"),
  C = n("215569"),
  m = n("481060"),
  _ = n("110924"),
  I = n("864293"),
  N = n("358085"),
  f = n("792125"),
  A = n("425493"),
  g = n("595663");
let b = {
    HEADER: "HEADER",
    DIVIDER: "DIVIDER",
    CUSTOM: "CUSTOM"
  },
  M = d.createContext(null);
class L extends(r = d.PureComponent) {
  renderContent() {
    let {
      scrollerRef: e,
      ...t
    } = this.props;
    return (0, c.jsx)("div", {
      className: g.customContainer,
      children: (0, c.jsx)(m.ListAuto, {
        ...t,
        className: S()(g.customScroller, g.contentRegionScroller),
        ref: e
      })
    })
  }
  render() {
    return (0, c.jsx)("div", {
      className: g.customColumn,
      children: this.renderContent()
    })
  }
}

function R(e) {
  let {
    children: t
  } = e;
  return (0, c.jsx)("div", {
    className: g.customColumn,
    children: (0, c.jsx)("div", {
      className: g.customContainer,
      children: (0, c.jsx)(m.ScrollerAuto, {
        className: S()(g.customScroller, g.contentRegionScroller),
        children: t
      })
    })
  })
}
i = {
  paddingTop: 60,
  paddingBottom: 60
}, (a = "defaultProps") in(s = L) ? Object.defineProperty(s, a, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[a] = i, (l = o || (o = {})).MINIMAL = "minimal", l.CUSTOM = "custom", l.DEFAULT = "default", l.WIDE = "wide";
let h = Object.freeze({
  minimal: "contentColumnMinimal",
  custom: "contentColumnCustom",
  default: "contentColumnDefault",
  wide: "contentColumnWide"
});

function x(e) {
  let {
    isMobile: t,
    mobileSidebarOpen: n,
    closeAction: s
  } = e, a = d.useRef(null);
  return null == s ? null : (0, c.jsx)("div", {
    className: S()(g.toolsContainer, {
      [g.mobileToolsContainer]: t,
      [g.mobileSidebarTools]: t,
      [g.closeIconOnly]: !n,
      [g.isMobileAndroid]: !n && !0 === (0, N.isAndroidWeb)()
    }),
    ref: a,
    children: (0, c.jsx)(m.FocusRingScope, {
      containerRef: a,
      children: (0, c.jsx)("div", {
        className: g.tools,
        children: (0, c.jsx)(A.default, {
          className: S()({
            [g.mobileToolsCloseIcon]: t
          }),
          closeAction: s,
          keybind: "ESC"
        })
      })
    })
  })
}
t.default = function(e) {
  let {
    sidebar: t,
    content: n,
    notice: s,
    section: a,
    closeAction: i,
    sidebarTheme: l,
    contentType: r,
    scrollerRef: o,
    mobileSidebarOpen: u,
    toggleSidebar: N,
    hideSidebar: A = !1
  } = e, b = d.useRef(null), L = d.useRef(null), R = (0, _.default)(a), y = (0, T.useTransition)(A, {
    from: {
      position: "absolute",
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    reverse: A,
    config: T.config.stiff
  }), D = d.useCallback(e => {
    b.current = e, null != o && (o.current = e)
  }, [o]);
  d.useLayoutEffect(() => {
    null != b.current && R !== a && b.current.scrollTo({
      to: 0
    })
  }, [a, R, b]);
  let P = (0, c.jsx)(x, {
    isMobile: p.isMobile,
    mobileSidebarOpen: u,
    closeAction: i
  });

  function j() {
    return null == s ? null : (0, c.jsx)(I.default, {
      className: S()(g.noticeRegion, {
        [g.noticeRegionHiddenSidebar]: A
      }),
      children: s
    }, a)
  }
  return (0, c.jsx)(c.Fragment, {
    children: y((e, s) => (0, c.jsxs)(T.animated.div, {
      style: e,
      className: g.standardSidebarView,
      children: [!s && (null == t ? null : (0, c.jsx)("div", {
        className: S()(g.sidebarRegion, (0, f.getThemeClass)(l), {
          [g.flexFullWidth]: p.isMobile,
          [g.hidden]: p.isMobile && !1 === u
        }),
        children: (0, c.jsx)(m.AdvancedScrollerThin, {
          className: g.sidebarRegionScroller,
          fade: !0,
          children: (0, c.jsxs)("nav", {
            className: S()(g.sidebar, {
              [g.mobileSidebar]: p.isMobile
            }),
            children: [p.isMobile && (0, c.jsx)("div", {
              className: g.mobileSidebarHeader,
              children: P
            }), t]
          })
        })
      })), function() {
        let e = null != N && null != i && u,
          t = p.isMobile && (0, c.jsxs)("div", {
            className: S()(g.mobileContentHeader, {
              [g.hideHamburger]: !e
            }),
            children: [e && (0, c.jsx)(E.HamburgerButton, {
              onClick: N
            }), P]
          });
        if ("custom" === r) return (0, c.jsxs)(C.TransitionGroup, {
          component: "div",
          className: g.contentRegion,
          children: [t, n, !p.isMobile && P, j()]
        });
        let s = h[null != r ? r : "default"];
        return (0, c.jsxs)(C.TransitionGroup, {
          component: "div",
          className: S()(g.contentRegion, {
            [g.hidden]: p.isMobile && !0 === u
          }),
          children: [(0, c.jsxs)("div", {
            className: g.contentTransitionWrap,
            children: [t, (0, c.jsxs)(m.AdvancedScrollerAuto, {
              className: S()(g.contentRegionScroller, A ? g.contentRegionHiddenSidebar : g.contentRegionShownSidebar),
              ref: D,
              children: [(0, c.jsx)(M.Provider, {
                value: b.current,
                children: (0, c.jsx)(m.TabBar.Panel, {
                  id: a,
                  className: S()(g.contentColumn, g[s], {
                    [g.mobileContent]: p.isMobile
                  }),
                  ref: L,
                  style: p.isMobile ? {
                    maxWidth: window.innerWidth
                  } : void 0,
                  children: A ? n : (0, c.jsx)(m.FocusRingScope, {
                    containerRef: L,
                    children: n
                  })
                })
              }), !p.isMobile && P]
            })]
          }), j()]
        })
      }()]
    }))
  })
}