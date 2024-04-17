"use strict";
s.r(t), s.d(t, {
  ContentTypes: function() {
    return o
  },
  DefaultCustomContentScroller: function() {
    return h
  },
  ListContentScroller: function() {
    return L
  },
  SectionTypes: function() {
    return g
  }
});
var n, a, l, i, r, o, d = s("735250"),
  c = s("470079"),
  u = s("120356"),
  S = s.n(u),
  T = s("718017"),
  E = s("608863"),
  p = s("873546"),
  C = s("215569"),
  m = s("481060"),
  _ = s("110924"),
  N = s("864293"),
  I = s("358085"),
  A = s("792125"),
  f = s("425493"),
  b = s("595663");
let g = {
    HEADER: "HEADER",
    DIVIDER: "DIVIDER",
    CUSTOM: "CUSTOM"
  },
  M = c.createContext(null);
class L extends(r = c.PureComponent) {
  renderContent() {
    let {
      scrollerRef: e,
      ...t
    } = this.props;
    return (0, d.jsx)("div", {
      className: b.customContainer,
      children: (0, d.jsx)(m.ListAuto, {
        ...t,
        className: S()(b.customScroller, b.contentRegionScroller),
        ref: e
      })
    })
  }
  render() {
    return (0, d.jsx)("div", {
      className: b.customColumn,
      children: this.renderContent()
    })
  }
}

function h(e) {
  let {
    children: t
  } = e;
  return (0, d.jsx)("div", {
    className: b.customColumn,
    children: (0, d.jsx)("div", {
      className: b.customContainer,
      children: (0, d.jsx)(m.ScrollerAuto, {
        className: S()(b.customScroller, b.contentRegionScroller),
        children: t
      })
    })
  })
}
l = {
  paddingTop: 60,
  paddingBottom: 60
}, (a = "defaultProps") in(n = L) ? Object.defineProperty(n, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[a] = l, (i = o || (o = {})).MINIMAL = "minimal", i.CUSTOM = "custom", i.DEFAULT = "default", i.WIDE = "wide";
let R = Object.freeze({
  minimal: "contentColumnMinimal",
  custom: "contentColumnCustom",
  default: "contentColumnDefault",
  wide: "contentColumnWide"
});

function x(e) {
  let {
    isMobile: t,
    mobileSidebarOpen: s,
    closeAction: n
  } = e, a = c.useRef(null);
  return null == n ? null : (0, d.jsx)("div", {
    className: S()(b.toolsContainer, {
      [b.mobileToolsContainer]: t,
      [b.mobileSidebarTools]: t,
      [b.closeIconOnly]: !s,
      [b.isMobileAndroid]: !s && !0 === (0, I.isAndroidWeb)()
    }),
    ref: a,
    children: (0, d.jsx)(m.FocusRingScope, {
      containerRef: a,
      children: (0, d.jsx)("div", {
        className: b.tools,
        children: (0, d.jsx)(f.default, {
          className: S()({
            [b.mobileToolsCloseIcon]: t
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
    content: s,
    notice: n,
    section: a,
    closeAction: l,
    sidebarTheme: i,
    contentType: r,
    scrollerRef: o,
    mobileSidebarOpen: u,
    toggleSidebar: I,
    hideSidebar: f = !1
  } = e, g = c.useRef(null), L = c.useRef(null), h = (0, _.default)(a), y = (0, T.useTransition)(f, {
    from: {
      position: "absolute",
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    reverse: f,
    config: T.config.stiff
  }), D = c.useCallback(e => {
    g.current = e, null != o && (o.current = e)
  }, [o]);
  c.useLayoutEffect(() => {
    null != g.current && h !== a && g.current.scrollTo({
      to: 0
    })
  }, [a, h, g]);
  let P = (0, d.jsx)(x, {
    isMobile: p.isMobile,
    mobileSidebarOpen: u,
    closeAction: l
  });

  function j() {
    return null == n ? null : (0, d.jsx)(N.default, {
      className: S()(b.noticeRegion, {
        [b.noticeRegionHiddenSidebar]: f
      }),
      children: n
    }, a)
  }
  return (0, d.jsx)(d.Fragment, {
    children: y((e, n) => (0, d.jsxs)(T.animated.div, {
      style: e,
      className: b.standardSidebarView,
      children: [!n && (null == t ? null : (0, d.jsx)("div", {
        className: S()(b.sidebarRegion, (0, A.getThemeClass)(i), {
          [b.flexFullWidth]: p.isMobile,
          [b.hidden]: p.isMobile && !1 === u
        }),
        children: (0, d.jsx)(m.AdvancedScrollerThin, {
          className: b.sidebarRegionScroller,
          fade: !0,
          children: (0, d.jsxs)("nav", {
            className: S()(b.sidebar, {
              [b.mobileSidebar]: p.isMobile
            }),
            children: [p.isMobile && (0, d.jsx)("div", {
              className: b.mobileSidebarHeader,
              children: P
            }), t]
          })
        })
      })), function() {
        let e = null != I && null != l && u,
          t = p.isMobile && (0, d.jsxs)("div", {
            className: S()(b.mobileContentHeader, {
              [b.hideHamburger]: !e
            }),
            children: [e && (0, d.jsx)(E.HamburgerButton, {
              onClick: I
            }), P]
          });
        if ("custom" === r) return (0, d.jsxs)(C.TransitionGroup, {
          component: "div",
          className: b.contentRegion,
          children: [t, s, !p.isMobile && P, j()]
        });
        let n = R[null != r ? r : "default"];
        return (0, d.jsxs)(C.TransitionGroup, {
          component: "div",
          className: S()(b.contentRegion, {
            [b.hidden]: p.isMobile && !0 === u
          }),
          children: [(0, d.jsxs)("div", {
            className: b.contentTransitionWrap,
            children: [t, (0, d.jsxs)(m.AdvancedScrollerAuto, {
              className: S()(b.contentRegionScroller, f ? b.contentRegionHiddenSidebar : b.contentRegionShownSidebar),
              ref: D,
              children: [(0, d.jsx)(M.Provider, {
                value: g.current,
                children: (0, d.jsx)(m.TabBar.Panel, {
                  id: a,
                  className: S()(b.contentColumn, b[n], {
                    [b.mobileContent]: p.isMobile
                  }),
                  ref: L,
                  style: p.isMobile ? {
                    maxWidth: window.innerWidth
                  } : void 0,
                  children: f ? s : (0, d.jsx)(m.FocusRingScope, {
                    containerRef: L,
                    children: s
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