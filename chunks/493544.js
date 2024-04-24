"use strict";
a.r(t), a.d(t, {
  ContentTypes: function() {
    return o
  },
  DefaultCustomContentScroller: function() {
    return x
  },
  ListContentScroller: function() {
    return b
  },
  SectionTypes: function() {
    return N
  }
});
var n, l, i, s, r, o, d = a("735250"),
  u = a("470079"),
  c = a("120356"),
  f = a.n(c),
  S = a("718017"),
  E = a("608863"),
  p = a("873546"),
  T = a("215569"),
  I = a("481060"),
  m = a("110924"),
  g = a("864293"),
  _ = a("358085"),
  C = a("792125"),
  A = a("425493"),
  M = a("595663");
let N = {
    HEADER: "HEADER",
    DIVIDER: "DIVIDER",
    CUSTOM: "CUSTOM"
  },
  h = u.createContext(null);
class b extends(r = u.PureComponent) {
  renderContent() {
    let {
      scrollerRef: e,
      ...t
    } = this.props;
    return (0, d.jsx)("div", {
      className: M.customContainer,
      children: (0, d.jsx)(I.ListAuto, {
        ...t,
        className: f()(M.customScroller, M.contentRegionScroller),
        ref: e
      })
    })
  }
  render() {
    return (0, d.jsx)("div", {
      className: M.customColumn,
      children: this.renderContent()
    })
  }
}

function x(e) {
  let {
    children: t
  } = e;
  return (0, d.jsx)("div", {
    className: M.customColumn,
    children: (0, d.jsx)("div", {
      className: M.customContainer,
      children: (0, d.jsx)(I.ScrollerAuto, {
        className: f()(M.customScroller, M.contentRegionScroller),
        children: t
      })
    })
  })
}
i = {
  paddingTop: 60,
  paddingBottom: 60
}, (l = "defaultProps") in(n = b) ? Object.defineProperty(n, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[l] = i, (s = o || (o = {})).MINIMAL = "minimal", s.CUSTOM = "custom", s.DEFAULT = "default", s.WIDE = "wide";
let L = Object.freeze({
  minimal: "contentColumnMinimal",
  custom: "contentColumnCustom",
  default: "contentColumnDefault",
  wide: "contentColumnWide"
});

function R(e) {
  let {
    isMobile: t,
    mobileSidebarOpen: a,
    closeAction: n
  } = e, l = u.useRef(null);
  return null == n ? null : (0, d.jsx)("div", {
    className: f()(M.toolsContainer, {
      [M.mobileToolsContainer]: t,
      [M.mobileSidebarTools]: t,
      [M.closeIconOnly]: !a,
      [M.isMobileAndroid]: !a && !0 === (0, _.isAndroidWeb)()
    }),
    ref: l,
    children: (0, d.jsx)(I.FocusRingScope, {
      containerRef: l,
      children: (0, d.jsx)("div", {
        className: M.tools,
        children: (0, d.jsx)(A.default, {
          className: f()({
            [M.mobileToolsCloseIcon]: t
          }),
          closeAction: n,
          keybind: "ESC"
        })
      })
    })
  })
}
t.default = function(e) {
  let {
    sidebar: t,
    content: a,
    notice: n,
    section: l,
    closeAction: i,
    sidebarTheme: s,
    contentType: r,
    scrollerRef: o,
    mobileSidebarOpen: c,
    toggleSidebar: _,
    hideSidebar: A = !1
  } = e, N = u.useRef(null), b = u.useRef(null), x = (0, m.default)(l), G = (0, S.useTransition)(A, {
    from: {
      position: "absolute",
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    reverse: A,
    config: S.config.stiff
  }), v = u.useCallback(e => {
    N.current = e, null != o && (o.current = e)
  }, [o]);
  u.useLayoutEffect(() => {
    null != N.current && x !== l && N.current.scrollTo({
      to: 0
    })
  }, [l, x, N]);
  let D = (0, d.jsx)(R, {
    isMobile: p.isMobile,
    mobileSidebarOpen: c,
    closeAction: i
  });

  function j() {
    return null == n ? null : (0, d.jsx)(g.default, {
      className: f()(M.noticeRegion, {
        [M.noticeRegionHiddenSidebar]: A
      }),
      children: n
    }, l)
  }
  return (0, d.jsx)(d.Fragment, {
    children: G((e, n) => (0, d.jsxs)(S.animated.div, {
      style: e,
      className: M.standardSidebarView,
      children: [!n && (null == t ? null : (0, d.jsx)("div", {
        className: f()(M.sidebarRegion, (0, C.getThemeClass)(s), {
          [M.flexFullWidth]: p.isMobile,
          [M.hidden]: p.isMobile && !1 === c
        }),
        children: (0, d.jsx)(I.AdvancedScrollerThin, {
          className: M.sidebarRegionScroller,
          fade: !0,
          children: (0, d.jsxs)("nav", {
            className: f()(M.sidebar, {
              [M.mobileSidebar]: p.isMobile
            }),
            children: [p.isMobile && (0, d.jsx)("div", {
              className: M.mobileSidebarHeader,
              children: D
            }), t]
          })
        })
      })), function() {
        let e = null != _ && null != i && c,
          t = p.isMobile && (0, d.jsxs)("div", {
            className: f()(M.mobileContentHeader, {
              [M.hideHamburger]: !e
            }),
            children: [e && (0, d.jsx)(E.HamburgerButton, {
              onClick: _
            }), D]
          });
        if ("custom" === r) return (0, d.jsxs)(T.TransitionGroup, {
          component: "div",
          className: M.contentRegion,
          children: [t, a, !p.isMobile && D, j()]
        });
        let n = L[null != r ? r : "default"];
        return (0, d.jsxs)(T.TransitionGroup, {
          component: "div",
          className: f()(M.contentRegion, {
            [M.hidden]: p.isMobile && !0 === c
          }),
          children: [(0, d.jsxs)("div", {
            className: M.contentTransitionWrap,
            children: [t, (0, d.jsxs)(I.AdvancedScrollerAuto, {
              className: f()(M.contentRegionScroller, A ? M.contentRegionHiddenSidebar : M.contentRegionShownSidebar),
              ref: v,
              children: [(0, d.jsx)(h.Provider, {
                value: N.current,
                children: (0, d.jsx)(I.TabBar.Panel, {
                  id: l,
                  className: f()(M.contentColumn, M[n], {
                    [M.mobileContent]: p.isMobile
                  }),
                  ref: b,
                  style: p.isMobile ? {
                    maxWidth: window.innerWidth
                  } : void 0,
                  children: A ? a : (0, d.jsx)(I.FocusRingScope, {
                    containerRef: b,
                    children: a
                  })
                })
              }), !p.isMobile && D]
            })]
          }), j()]
        })
      }()]
    }))
  })
}