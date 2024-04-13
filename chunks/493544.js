"use strict";
n.r(t), n.d(t, {
  ContentTypes: function() {
    return a
  },
  DefaultCustomContentScroller: function() {
    return I
  },
  ListContentScroller: function() {
    return A
  },
  SectionTypes: function() {
    return j
  }
});
var i, s, l, r, o, a, c = n("735250"),
  u = n("470079"),
  d = n("803997"),
  m = n.n(d),
  h = n("718017"),
  p = n("608863"),
  f = n("873546"),
  b = n("215569"),
  S = n("481060"),
  g = n("110924"),
  T = n("864293"),
  x = n("358085"),
  v = n("792125"),
  N = n("425493"),
  C = n("595663");
let j = {
    HEADER: "HEADER",
    DIVIDER: "DIVIDER",
    CUSTOM: "CUSTOM"
  },
  E = u.createContext(null);
class A extends(o = u.PureComponent) {
  renderContent() {
    let {
      scrollerRef: e,
      ...t
    } = this.props;
    return (0, c.jsx)("div", {
      className: C.customContainer,
      children: (0, c.jsx)(S.ListAuto, {
        ...t,
        className: m()(C.customScroller, C.contentRegionScroller),
        ref: e
      })
    })
  }
  render() {
    return (0, c.jsx)("div", {
      className: C.customColumn,
      children: this.renderContent()
    })
  }
}

function I(e) {
  let {
    children: t
  } = e;
  return (0, c.jsx)("div", {
    className: C.customColumn,
    children: (0, c.jsx)("div", {
      className: C.customContainer,
      children: (0, c.jsx)(S.ScrollerAuto, {
        className: m()(C.customScroller, C.contentRegionScroller),
        children: t
      })
    })
  })
}
l = {
  paddingTop: 60,
  paddingBottom: 60
}, (s = "defaultProps") in(i = A) ? Object.defineProperty(i, s, {
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
    className: m()(C.toolsContainer, {
      [C.mobileToolsContainer]: t,
      [C.mobileSidebarTools]: t,
      [C.closeIconOnly]: !n,
      [C.isMobileAndroid]: !n && !0 === (0, x.isAndroidWeb)()
    }),
    ref: s,
    children: (0, c.jsx)(S.FocusRingScope, {
      containerRef: s,
      children: (0, c.jsx)("div", {
        className: C.tools,
        children: (0, c.jsx)(N.default, {
          className: m()({
            [C.mobileToolsCloseIcon]: t
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
    toggleSidebar: x,
    hideSidebar: N = !1
  } = e, j = u.useRef(null), A = u.useRef(null), I = (0, g.default)(s), _ = (0, h.useTransition)(N, {
    from: {
      position: "absolute",
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    reverse: N,
    config: h.config.stiff
  }), M = u.useCallback(e => {
    j.current = e, null != a && (a.current = e)
  }, [a]);
  u.useLayoutEffect(() => {
    null != j.current && I !== s && j.current.scrollTo({
      to: 0
    })
  }, [s, I, j]);
  let y = (0, c.jsx)(R, {
    isMobile: f.isMobile,
    mobileSidebarOpen: d,
    closeAction: l
  });

  function O() {
    return null == i ? null : (0, c.jsx)(T.default, {
      className: m()(C.noticeRegion, {
        [C.noticeRegionHiddenSidebar]: N
      }),
      children: i
    }, s)
  }
  return (0, c.jsx)(c.Fragment, {
    children: _((e, i) => (0, c.jsxs)(h.animated.div, {
      style: e,
      className: C.standardSidebarView,
      children: [!i && (null == t ? null : (0, c.jsx)("div", {
        className: m()(C.sidebarRegion, (0, v.getThemeClass)(r), {
          [C.flexFullWidth]: f.isMobile,
          [C.hidden]: f.isMobile && !1 === d
        }),
        children: (0, c.jsx)(S.AdvancedScrollerThin, {
          className: C.sidebarRegionScroller,
          fade: !0,
          children: (0, c.jsxs)("nav", {
            className: m()(C.sidebar, {
              [C.mobileSidebar]: f.isMobile
            }),
            children: [f.isMobile && (0, c.jsx)("div", {
              className: C.mobileSidebarHeader,
              children: y
            }), t]
          })
        })
      })), function() {
        let e = null != x && null != l && d,
          t = f.isMobile && (0, c.jsxs)("div", {
            className: m()(C.mobileContentHeader, {
              [C.hideHamburger]: !e
            }),
            children: [e && (0, c.jsx)(p.HamburgerButton, {
              onClick: x
            }), y]
          });
        if ("custom" === o) return (0, c.jsxs)(b.TransitionGroup, {
          component: "div",
          className: C.contentRegion,
          children: [t, n, !f.isMobile && y, O()]
        });
        let i = P[null != o ? o : "default"];
        return (0, c.jsxs)(b.TransitionGroup, {
          component: "div",
          className: m()(C.contentRegion, {
            [C.hidden]: f.isMobile && !0 === d
          }),
          children: [(0, c.jsxs)("div", {
            className: C.contentTransitionWrap,
            children: [t, (0, c.jsxs)(S.AdvancedScrollerAuto, {
              className: m()(C.contentRegionScroller, N ? C.contentRegionHiddenSidebar : C.contentRegionShownSidebar),
              ref: M,
              children: [(0, c.jsx)(E.Provider, {
                value: j.current,
                children: (0, c.jsx)(S.TabBar.Panel, {
                  id: s,
                  className: m()(C.contentColumn, C[i], {
                    [C.mobileContent]: f.isMobile
                  }),
                  ref: A,
                  style: f.isMobile ? {
                    maxWidth: window.innerWidth
                  } : void 0,
                  children: N ? n : (0, c.jsx)(S.FocusRingScope, {
                    containerRef: A,
                    children: n
                  })
                })
              }), !f.isMobile && y]
            })]
          }), O()]
        })
      }()]
    }))
  })
}