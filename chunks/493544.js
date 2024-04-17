"use strict";
n.r(t), n.d(t, {
  ContentTypes: function() {
    return o
  },
  DefaultCustomContentScroller: function() {
    return h
  },
  ListContentScroller: function() {
    return g
  },
  SectionTypes: function() {
    return L
  }
});
var a, s, l, i, r, o, c = n("735250"),
  d = n("470079"),
  u = n("120356"),
  S = n.n(u),
  T = n("718017"),
  E = n("608863"),
  p = n("873546"),
  C = n("215569"),
  m = n("481060"),
  N = n("110924"),
  I = n("864293"),
  A = n("358085"),
  f = n("792125"),
  _ = n("425493"),
  b = n("595663");
let L = {
    HEADER: "HEADER",
    DIVIDER: "DIVIDER",
    CUSTOM: "CUSTOM"
  },
  M = d.createContext(null);
class g extends(r = d.PureComponent) {
  renderContent() {
    let {
      scrollerRef: e,
      ...t
    } = this.props;
    return (0, c.jsx)("div", {
      className: b.customContainer,
      children: (0, c.jsx)(m.ListAuto, {
        ...t,
        className: S()(b.customScroller, b.contentRegionScroller),
        ref: e
      })
    })
  }
  render() {
    return (0, c.jsx)("div", {
      className: b.customColumn,
      children: this.renderContent()
    })
  }
}

function h(e) {
  let {
    children: t
  } = e;
  return (0, c.jsx)("div", {
    className: b.customColumn,
    children: (0, c.jsx)("div", {
      className: b.customContainer,
      children: (0, c.jsx)(m.ScrollerAuto, {
        className: S()(b.customScroller, b.contentRegionScroller),
        children: t
      })
    })
  })
}
l = {
  paddingTop: 60,
  paddingBottom: 60
}, (s = "defaultProps") in(a = g) ? Object.defineProperty(a, s, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[s] = l, (i = o || (o = {})).MINIMAL = "minimal", i.CUSTOM = "custom", i.DEFAULT = "default", i.WIDE = "wide";
let R = Object.freeze({
  minimal: "contentColumnMinimal",
  custom: "contentColumnCustom",
  default: "contentColumnDefault",
  wide: "contentColumnWide"
});

function x(e) {
  let {
    isMobile: t,
    mobileSidebarOpen: n,
    closeAction: a
  } = e, s = d.useRef(null);
  return null == a ? null : (0, c.jsx)("div", {
    className: S()(b.toolsContainer, {
      [b.mobileToolsContainer]: t,
      [b.mobileSidebarTools]: t,
      [b.closeIconOnly]: !n,
      [b.isMobileAndroid]: !n && !0 === (0, A.isAndroidWeb)()
    }),
    ref: s,
    children: (0, c.jsx)(m.FocusRingScope, {
      containerRef: s,
      children: (0, c.jsx)("div", {
        className: b.tools,
        children: (0, c.jsx)(_.default, {
          className: S()({
            [b.mobileToolsCloseIcon]: t
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
    section: s,
    closeAction: l,
    sidebarTheme: i,
    contentType: r,
    scrollerRef: o,
    mobileSidebarOpen: u,
    toggleSidebar: A,
    hideSidebar: _ = !1
  } = e, L = d.useRef(null), g = d.useRef(null), h = (0, N.default)(s), D = (0, T.useTransition)(_, {
    from: {
      position: "absolute",
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    reverse: _,
    config: T.config.stiff
  }), y = d.useCallback(e => {
    L.current = e, null != o && (o.current = e)
  }, [o]);
  d.useLayoutEffect(() => {
    null != L.current && h !== s && L.current.scrollTo({
      to: 0
    })
  }, [s, h, L]);
  let P = (0, c.jsx)(x, {
    isMobile: p.isMobile,
    mobileSidebarOpen: u,
    closeAction: l
  });

  function j() {
    return null == a ? null : (0, c.jsx)(I.default, {
      className: S()(b.noticeRegion, {
        [b.noticeRegionHiddenSidebar]: _
      }),
      children: a
    }, s)
  }
  return (0, c.jsx)(c.Fragment, {
    children: D((e, a) => (0, c.jsxs)(T.animated.div, {
      style: e,
      className: b.standardSidebarView,
      children: [!a && (null == t ? null : (0, c.jsx)("div", {
        className: S()(b.sidebarRegion, (0, f.getThemeClass)(i), {
          [b.flexFullWidth]: p.isMobile,
          [b.hidden]: p.isMobile && !1 === u
        }),
        children: (0, c.jsx)(m.AdvancedScrollerThin, {
          className: b.sidebarRegionScroller,
          fade: !0,
          children: (0, c.jsxs)("nav", {
            className: S()(b.sidebar, {
              [b.mobileSidebar]: p.isMobile
            }),
            children: [p.isMobile && (0, c.jsx)("div", {
              className: b.mobileSidebarHeader,
              children: P
            }), t]
          })
        })
      })), function() {
        let e = null != A && null != l && u,
          t = p.isMobile && (0, c.jsxs)("div", {
            className: S()(b.mobileContentHeader, {
              [b.hideHamburger]: !e
            }),
            children: [e && (0, c.jsx)(E.HamburgerButton, {
              onClick: A
            }), P]
          });
        if ("custom" === r) return (0, c.jsxs)(C.TransitionGroup, {
          component: "div",
          className: b.contentRegion,
          children: [t, n, !p.isMobile && P, j()]
        });
        let a = R[null != r ? r : "default"];
        return (0, c.jsxs)(C.TransitionGroup, {
          component: "div",
          className: S()(b.contentRegion, {
            [b.hidden]: p.isMobile && !0 === u
          }),
          children: [(0, c.jsxs)("div", {
            className: b.contentTransitionWrap,
            children: [t, (0, c.jsxs)(m.AdvancedScrollerAuto, {
              className: S()(b.contentRegionScroller, _ ? b.contentRegionHiddenSidebar : b.contentRegionShownSidebar),
              ref: y,
              children: [(0, c.jsx)(M.Provider, {
                value: L.current,
                children: (0, c.jsx)(m.TabBar.Panel, {
                  id: s,
                  className: S()(b.contentColumn, b[a], {
                    [b.mobileContent]: p.isMobile
                  }),
                  ref: g,
                  style: p.isMobile ? {
                    maxWidth: window.innerWidth
                  } : void 0,
                  children: _ ? n : (0, c.jsx)(m.FocusRingScope, {
                    containerRef: g,
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