"use strict";
n.r(t), n.d(t, {
  ContentTypes: function() {
    return o
  },
  DefaultCustomContentScroller: function() {
    return b
  },
  ListContentScroller: function() {
    return x
  },
  SectionTypes: function() {
    return h
  }
});
var a, l, s, i, r, o, d = n("735250"),
  u = n("470079"),
  c = n("120356"),
  f = n.n(c),
  S = n("718017"),
  E = n("608863"),
  p = n("873546"),
  m = n("215569"),
  I = n("481060"),
  g = n("110924"),
  T = n("864293"),
  C = n("358085"),
  _ = n("792125"),
  A = n("425493"),
  M = n("595663");
let h = {
    HEADER: "HEADER",
    DIVIDER: "DIVIDER",
    CUSTOM: "CUSTOM"
  },
  N = u.createContext(null);
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

function b(e) {
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
s = {
  paddingTop: 60,
  paddingBottom: 60
}, (l = "defaultProps") in(a = x) ? Object.defineProperty(a, l, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[l] = s, (i = o || (o = {})).MINIMAL = "minimal", i.CUSTOM = "custom", i.DEFAULT = "default", i.WIDE = "wide";
let R = Object.freeze({
  minimal: "contentColumnMinimal",
  custom: "contentColumnCustom",
  default: "contentColumnDefault",
  wide: "contentColumnWide"
});

function L(e) {
  let {
    isMobile: t,
    mobileSidebarOpen: n,
    closeAction: a
  } = e, l = u.useRef(null);
  return null == a ? null : (0, d.jsx)("div", {
    className: f()(M.toolsContainer, {
      [M.mobileToolsContainer]: t,
      [M.mobileSidebarTools]: t,
      [M.closeIconOnly]: !n,
      [M.isMobileAndroid]: !n && !0 === (0, C.isAndroidWeb)()
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
          closeAction: a,
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
    notice: a,
    section: l,
    closeAction: s,
    sidebarTheme: i,
    contentType: r,
    scrollerRef: o,
    mobileSidebarOpen: c,
    toggleSidebar: C,
    hideSidebar: A = !1
  } = e, h = u.useRef(null), x = u.useRef(null), b = (0, g.default)(l), v = (0, S.useTransition)(A, {
    from: {
      position: "absolute",
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    reverse: A,
    config: S.config.stiff
  }), G = u.useCallback(e => {
    h.current = e, null != o && (o.current = e)
  }, [o]);
  u.useLayoutEffect(() => {
    null != h.current && b !== l && h.current.scrollTo({
      to: 0
    })
  }, [l, b, h]);
  let D = (0, d.jsx)(L, {
    isMobile: p.isMobile,
    mobileSidebarOpen: c,
    closeAction: s
  });

  function j() {
    return null == a ? null : (0, d.jsx)(T.default, {
      className: f()(M.noticeRegion, {
        [M.noticeRegionHiddenSidebar]: A
      }),
      children: a
    }, l)
  }
  return (0, d.jsx)(d.Fragment, {
    children: v((e, a) => (0, d.jsxs)(S.animated.div, {
      style: e,
      className: M.standardSidebarView,
      children: [!a && (null == t ? null : (0, d.jsx)("div", {
        className: f()(M.sidebarRegion, (0, _.getThemeClass)(i), {
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
        let e = null != C && null != s && c,
          t = p.isMobile && (0, d.jsxs)("div", {
            className: f()(M.mobileContentHeader, {
              [M.hideHamburger]: !e
            }),
            children: [e && (0, d.jsx)(E.HamburgerButton, {
              onClick: C
            }), D]
          });
        if ("custom" === r) return (0, d.jsxs)(m.TransitionGroup, {
          component: "div",
          className: M.contentRegion,
          children: [t, n, !p.isMobile && D, j()]
        });
        let a = R[null != r ? r : "default"];
        return (0, d.jsxs)(m.TransitionGroup, {
          component: "div",
          className: f()(M.contentRegion, {
            [M.hidden]: p.isMobile && !0 === c
          }),
          children: [(0, d.jsxs)("div", {
            className: M.contentTransitionWrap,
            children: [t, (0, d.jsxs)(I.AdvancedScrollerAuto, {
              className: f()(M.contentRegionScroller, A ? M.contentRegionHiddenSidebar : M.contentRegionShownSidebar),
              ref: G,
              children: [(0, d.jsx)(N.Provider, {
                value: h.current,
                children: (0, d.jsx)(I.TabBar.Panel, {
                  id: l,
                  className: f()(M.contentColumn, M[a], {
                    [M.mobileContent]: p.isMobile
                  }),
                  ref: x,
                  style: p.isMobile ? {
                    maxWidth: window.innerWidth
                  } : void 0,
                  children: A ? n : (0, d.jsx)(I.FocusRingScope, {
                    containerRef: x,
                    children: n
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