"use strict";
a.r(t), a.d(t, {
  ContentTypes: function() {
    return o
  },
  DefaultCustomContentScroller: function() {
    return L
  },
  ListContentScroller: function() {
    return x
  },
  SectionTypes: function() {
    return N
  }
});
var n, s, l, i, r, o, d = a("735250"),
  u = a("470079"),
  c = a("120356"),
  S = a.n(c),
  f = a("513715"),
  E = a("608863"),
  T = a("873546"),
  p = a("215569"),
  I = a("481060"),
  g = a("110924"),
  m = a("864293"),
  _ = a("358085"),
  C = a("792125"),
  A = a("425493"),
  M = a("84885");
let N = {
    HEADER: "HEADER",
    DIVIDER: "DIVIDER",
    CUSTOM: "CUSTOM"
  },
  h = u.createContext(null);
class x extends(r = u.PureComponent) {
  renderContent() {
    let {
      scrollerRef: e,
      ...t
    } = this.props;
    return (0, d.jsx)("div", {
      className: M.customContainer,
      children: (0, d.jsx)(I.ListAuto, {
        ...t,
        className: S()(M.customScroller, M.contentRegionScroller),
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

function L(e) {
  let {
    children: t
  } = e;
  return (0, d.jsx)("div", {
    className: M.customColumn,
    children: (0, d.jsx)("div", {
      className: M.customContainer,
      children: (0, d.jsx)(I.ScrollerAuto, {
        className: S()(M.customScroller, M.contentRegionScroller),
        children: t
      })
    })
  })
}
l = {
  paddingTop: 60,
  paddingBottom: 60
}, (s = "defaultProps") in(n = x) ? Object.defineProperty(n, s, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[s] = l, (i = o || (o = {})).MINIMAL = "minimal", i.CUSTOM = "custom", i.DEFAULT = "default", i.WIDE = "wide";
let b = Object.freeze({
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
  } = e, s = u.useRef(null);
  return null == n ? null : (0, d.jsx)("div", {
    className: S()(M.toolsContainer, {
      [M.mobileToolsContainer]: t,
      [M.mobileSidebarTools]: t,
      [M.closeIconOnly]: !a,
      [M.isMobileAndroid]: !a && !0 === (0, _.isAndroidWeb)()
    }),
    ref: s,
    children: (0, d.jsx)(I.FocusRingScope, {
      containerRef: s,
      children: (0, d.jsx)("div", {
        className: M.tools,
        children: (0, d.jsx)(A.default, {
          className: S()({
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
    section: s,
    closeAction: l,
    sidebarTheme: i,
    contentType: r,
    scrollerRef: o,
    mobileSidebarOpen: c,
    toggleSidebar: _,
    hideSidebar: A = !1
  } = e, N = u.useRef(null), x = u.useRef(null), L = (0, g.default)(s), G = (0, f.useTransition)(A, {
    from: {
      position: "absolute",
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    reverse: A,
    config: f.config.stiff
  }), v = u.useCallback(e => {
    N.current = e, null != o && (o.current = e)
  }, [o]);
  u.useLayoutEffect(() => {
    null != N.current && L !== s && N.current.scrollTo({
      to: 0
    })
  }, [s, L, N]);
  let D = (0, d.jsx)(R, {
    isMobile: T.isMobile,
    mobileSidebarOpen: c,
    closeAction: l
  });

  function j() {
    return null == n ? null : (0, d.jsx)(m.default, {
      className: S()(M.noticeRegion, {
        [M.noticeRegionHiddenSidebar]: A
      }),
      children: n
    }, s)
  }
  return (0, d.jsx)(d.Fragment, {
    children: G((e, n) => (0, d.jsxs)(f.animated.div, {
      style: e,
      className: M.standardSidebarView,
      children: [!n && (null == t ? null : (0, d.jsx)("div", {
        className: S()(M.sidebarRegion, (0, C.getThemeClass)(i), {
          [M.flexFullWidth]: T.isMobile,
          [M.hidden]: T.isMobile && !1 === c
        }),
        children: (0, d.jsx)(I.AdvancedScrollerThin, {
          className: M.sidebarRegionScroller,
          fade: !0,
          children: (0, d.jsxs)("nav", {
            className: S()(M.sidebar, {
              [M.mobileSidebar]: T.isMobile
            }),
            children: [T.isMobile && (0, d.jsx)("div", {
              className: M.mobileSidebarHeader,
              children: D
            }), t]
          })
        })
      })), function() {
        let e = null != _ && null != l && c,
          t = T.isMobile && (0, d.jsxs)("div", {
            className: S()(M.mobileContentHeader, {
              [M.hideHamburger]: !e
            }),
            children: [e && (0, d.jsx)(E.HamburgerButton, {
              onClick: _
            }), D]
          });
        if ("custom" === r) return (0, d.jsxs)(p.TransitionGroup, {
          component: "div",
          className: M.contentRegion,
          children: [t, a, !T.isMobile && D, j()]
        });
        let n = b[null != r ? r : "default"];
        return (0, d.jsxs)(p.TransitionGroup, {
          component: "div",
          className: S()(M.contentRegion, {
            [M.hidden]: T.isMobile && !0 === c
          }),
          children: [(0, d.jsxs)("div", {
            className: M.contentTransitionWrap,
            children: [t, (0, d.jsxs)(I.AdvancedScrollerAuto, {
              className: S()(M.contentRegionScroller, A ? M.contentRegionHiddenSidebar : M.contentRegionShownSidebar),
              ref: v,
              children: [(0, d.jsx)(h.Provider, {
                value: N.current,
                children: (0, d.jsx)(I.TabBar.Panel, {
                  id: s,
                  className: S()(M.contentColumn, M[n], {
                    [M.mobileContent]: T.isMobile
                  }),
                  ref: x,
                  style: T.isMobile ? {
                    maxWidth: window.innerWidth
                  } : void 0,
                  children: A ? a : (0, d.jsx)(I.FocusRingScope, {
                    containerRef: x,
                    children: a
                  })
                })
              }), !T.isMobile && D]
            })]
          }), j()]
        })
      }()]
    }))
  })
}