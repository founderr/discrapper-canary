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
var n, i, l, s, r, o, d = a("735250"),
  u = a("470079"),
  c = a("120356"),
  S = a.n(c),
  f = a("718017"),
  E = a("608863"),
  p = a("873546"),
  T = a("215569"),
  m = a("481060"),
  I = a("110924"),
  g = a("864293"),
  _ = a("358085"),
  C = a("792125"),
  M = a("425493"),
  A = a("595663");
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
      className: A.customContainer,
      children: (0, d.jsx)(m.ListAuto, {
        ...t,
        className: S()(A.customScroller, A.contentRegionScroller),
        ref: e
      })
    })
  }
  render() {
    return (0, d.jsx)("div", {
      className: A.customColumn,
      children: this.renderContent()
    })
  }
}

function x(e) {
  let {
    children: t
  } = e;
  return (0, d.jsx)("div", {
    className: A.customColumn,
    children: (0, d.jsx)("div", {
      className: A.customContainer,
      children: (0, d.jsx)(m.ScrollerAuto, {
        className: S()(A.customScroller, A.contentRegionScroller),
        children: t
      })
    })
  })
}
l = {
  paddingTop: 60,
  paddingBottom: 60
}, (i = "defaultProps") in(n = b) ? Object.defineProperty(n, i, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[i] = l, (s = o || (o = {})).MINIMAL = "minimal", s.CUSTOM = "custom", s.DEFAULT = "default", s.WIDE = "wide";
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
  } = e, i = u.useRef(null);
  return null == n ? null : (0, d.jsx)("div", {
    className: S()(A.toolsContainer, {
      [A.mobileToolsContainer]: t,
      [A.mobileSidebarTools]: t,
      [A.closeIconOnly]: !a,
      [A.isMobileAndroid]: !a && !0 === (0, _.isAndroidWeb)()
    }),
    ref: i,
    children: (0, d.jsx)(m.FocusRingScope, {
      containerRef: i,
      children: (0, d.jsx)("div", {
        className: A.tools,
        children: (0, d.jsx)(M.default, {
          className: S()({
            [A.mobileToolsCloseIcon]: t
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
    section: i,
    closeAction: l,
    sidebarTheme: s,
    contentType: r,
    scrollerRef: o,
    mobileSidebarOpen: c,
    toggleSidebar: _,
    hideSidebar: M = !1
  } = e, N = u.useRef(null), b = u.useRef(null), x = (0, I.default)(i), G = (0, f.useTransition)(M, {
    from: {
      position: "absolute",
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    reverse: M,
    config: f.config.stiff
  }), v = u.useCallback(e => {
    N.current = e, null != o && (o.current = e)
  }, [o]);
  u.useLayoutEffect(() => {
    null != N.current && x !== i && N.current.scrollTo({
      to: 0
    })
  }, [i, x, N]);
  let D = (0, d.jsx)(R, {
    isMobile: p.isMobile,
    mobileSidebarOpen: c,
    closeAction: l
  });

  function j() {
    return null == n ? null : (0, d.jsx)(g.default, {
      className: S()(A.noticeRegion, {
        [A.noticeRegionHiddenSidebar]: M
      }),
      children: n
    }, i)
  }
  return (0, d.jsx)(d.Fragment, {
    children: G((e, n) => (0, d.jsxs)(f.animated.div, {
      style: e,
      className: A.standardSidebarView,
      children: [!n && (null == t ? null : (0, d.jsx)("div", {
        className: S()(A.sidebarRegion, (0, C.getThemeClass)(s), {
          [A.flexFullWidth]: p.isMobile,
          [A.hidden]: p.isMobile && !1 === c
        }),
        children: (0, d.jsx)(m.AdvancedScrollerThin, {
          className: A.sidebarRegionScroller,
          fade: !0,
          children: (0, d.jsxs)("nav", {
            className: S()(A.sidebar, {
              [A.mobileSidebar]: p.isMobile
            }),
            children: [p.isMobile && (0, d.jsx)("div", {
              className: A.mobileSidebarHeader,
              children: D
            }), t]
          })
        })
      })), function() {
        let e = null != _ && null != l && c,
          t = p.isMobile && (0, d.jsxs)("div", {
            className: S()(A.mobileContentHeader, {
              [A.hideHamburger]: !e
            }),
            children: [e && (0, d.jsx)(E.HamburgerButton, {
              onClick: _
            }), D]
          });
        if ("custom" === r) return (0, d.jsxs)(T.TransitionGroup, {
          component: "div",
          className: A.contentRegion,
          children: [t, a, !p.isMobile && D, j()]
        });
        let n = L[null != r ? r : "default"];
        return (0, d.jsxs)(T.TransitionGroup, {
          component: "div",
          className: S()(A.contentRegion, {
            [A.hidden]: p.isMobile && !0 === c
          }),
          children: [(0, d.jsxs)("div", {
            className: A.contentTransitionWrap,
            children: [t, (0, d.jsxs)(m.AdvancedScrollerAuto, {
              className: S()(A.contentRegionScroller, M ? A.contentRegionHiddenSidebar : A.contentRegionShownSidebar),
              ref: v,
              children: [(0, d.jsx)(h.Provider, {
                value: N.current,
                children: (0, d.jsx)(m.TabBar.Panel, {
                  id: i,
                  className: S()(A.contentColumn, A[n], {
                    [A.mobileContent]: p.isMobile
                  }),
                  ref: b,
                  style: p.isMobile ? {
                    maxWidth: window.innerWidth
                  } : void 0,
                  children: M ? a : (0, d.jsx)(m.FocusRingScope, {
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