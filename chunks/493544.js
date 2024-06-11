"use strict";
n.r(t), n.d(t, {
  ContentTypes: function() {
    return a
  },
  DefaultCustomContentScroller: function() {
    return I
  },
  ListContentScroller: function() {
    return E
  },
  SectionTypes: function() {
    return j
  }
});
var i, s, l, r, o, a, c = n("735250"),
  u = n("470079"),
  d = n("120356"),
  h = n.n(d),
  m = n("920906"),
  p = n("608863"),
  f = n("873546"),
  b = n("215569"),
  S = n("481060"),
  g = n("110924"),
  v = n("358085"),
  x = n("792125"),
  N = n("425493"),
  T = n("84885");
let j = {
    HEADER: "HEADER",
    DIVIDER: "DIVIDER",
    CUSTOM: "CUSTOM"
  },
  C = u.createContext(null);
class E extends(o = u.PureComponent) {
  renderContent() {
    let {
      scrollerRef: e,
      ...t
    } = this.props;
    return (0, c.jsx)("div", {
      className: T.customContainer,
      children: (0, c.jsx)(S.ListAuto, {
        ...t,
        className: h()(T.customScroller, T.contentRegionScroller),
        ref: e
      })
    })
  }
  render() {
    return (0, c.jsx)("div", {
      className: T.customColumn,
      children: this.renderContent()
    })
  }
}

function I(e) {
  let {
    children: t
  } = e;
  return (0, c.jsx)("div", {
    className: T.customColumn,
    children: (0, c.jsx)("div", {
      className: T.customContainer,
      children: (0, c.jsx)(S.ScrollerAuto, {
        className: h()(T.customScroller, T.contentRegionScroller),
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
let P = Object.freeze({
  minimal: "contentColumnMinimal",
  custom: "contentColumnCustom",
  default: "contentColumnDefault",
  wide: "contentColumnWide"
});

function R(e) {
  let {
    isMobile: t,
    mobileSidebarOpen: n,
    closeAction: i
  } = e, s = u.useRef(null);
  return null == i ? null : (0, c.jsx)("div", {
    className: h()(T.toolsContainer, {
      [T.mobileToolsContainer]: t,
      [T.mobileSidebarTools]: t,
      [T.closeIconOnly]: !n,
      [T.isMobileAndroid]: !n && !0 === (0, v.isAndroidWeb)()
    }),
    ref: s,
    children: (0, c.jsx)(S.FocusRingScope, {
      containerRef: s,
      children: (0, c.jsx)("div", {
        className: T.tools,
        children: (0, c.jsx)(N.default, {
          className: h()({
            [T.mobileToolsCloseIcon]: t
          }),
          closeAction: i,
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
    notice: i,
    section: s,
    closeAction: l,
    sidebarTheme: r,
    contentType: o,
    scrollerRef: a,
    mobileSidebarOpen: d,
    toggleSidebar: v,
    hideSidebar: N = !1
  } = e, j = u.useRef(null), E = u.useRef(null), I = (0, g.default)(s), _ = (0, m.useTransition)(N, {
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
    j.current = e, null != a && (a.current = e)
  }, [a]);
  u.useLayoutEffect(() => {
    null != j.current && I !== s && j.current.scrollTo({
      to: 0
    })
  }, [s, I, j]);
  let O = (0, c.jsx)(R, {
    isMobile: f.isMobile,
    mobileSidebarOpen: d,
    closeAction: l
  });

  function y() {
    return null == i ? null : (0, c.jsx)(S.SlideIn, {
      className: h()(T.noticeRegion, {
        [T.noticeRegionHiddenSidebar]: N
      }),
      children: i
    }, s)
  }
  return (0, c.jsx)(c.Fragment, {
    children: _((e, i) => (0, c.jsxs)(m.animated.div, {
      style: e,
      className: T.standardSidebarView,
      children: [!i && (null == t ? null : (0, c.jsx)("div", {
        className: h()(T.sidebarRegion, (0, x.getThemeClass)(r), {
          [T.flexFullWidth]: f.isMobile,
          [T.hidden]: f.isMobile && !1 === d
        }),
        children: (0, c.jsx)(S.AdvancedScrollerThin, {
          className: T.sidebarRegionScroller,
          fade: !0,
          children: (0, c.jsxs)("nav", {
            className: h()(T.sidebar, {
              [T.mobileSidebar]: f.isMobile
            }),
            children: [f.isMobile && (0, c.jsx)("div", {
              className: T.mobileSidebarHeader,
              children: O
            }), t]
          })
        })
      })), function() {
        let e = null != v && null != l && d,
          t = f.isMobile && (0, c.jsxs)("div", {
            className: h()(T.mobileContentHeader, {
              [T.hideHamburger]: !e
            }),
            children: [e && (0, c.jsx)(p.HamburgerButton, {
              onClick: v
            }), O]
          });
        if ("custom" === o) return (0, c.jsxs)(b.TransitionGroup, {
          component: "div",
          className: T.contentRegion,
          children: [t, n, !f.isMobile && O, y()]
        });
        let i = P[null != o ? o : "default"];
        return (0, c.jsxs)(b.TransitionGroup, {
          component: "div",
          className: h()(T.contentRegion, {
            [T.hidden]: f.isMobile && !0 === d
          }),
          children: [(0, c.jsxs)("div", {
            className: T.contentTransitionWrap,
            children: [t, (0, c.jsxs)(S.AdvancedScrollerAuto, {
              className: h()(T.contentRegionScroller, N ? T.contentRegionHiddenSidebar : T.contentRegionShownSidebar),
              ref: A,
              children: [(0, c.jsx)(C.Provider, {
                value: j.current,
                children: (0, c.jsx)(S.TabBar.Panel, {
                  id: s,
                  className: h()(T.contentColumn, T[i], {
                    [T.mobileContent]: f.isMobile
                  }),
                  ref: E,
                  style: f.isMobile ? {
                    maxWidth: window.innerWidth
                  } : void 0,
                  children: N ? n : (0, c.jsx)(S.FocusRingScope, {
                    containerRef: E,
                    children: n
                  })
                })
              }), !f.isMobile && O]
            })]
          }), y()]
        })
      }()]
    }))
  })
}