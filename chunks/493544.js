"use strict";
n.r(t), n.d(t, {
  ContentTypes: function() {
    return a
  },
  DefaultCustomContentScroller: function() {
    return P
  },
  ListContentScroller: function() {
    return I
  },
  SectionTypes: function() {
    return C
  }
});
var i, s, l, r, o, a, c = n("735250"),
  u = n("470079"),
  d = n("120356"),
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
  j = n("421765");
let C = {
    HEADER: "HEADER",
    DIVIDER: "DIVIDER",
    CUSTOM: "CUSTOM"
  },
  E = u.createContext(null);
class I extends(o = u.PureComponent) {
  renderContent() {
    let {
      scrollerRef: e,
      ...t
    } = this.props;
    return (0, c.jsx)("div", {
      className: j.customContainer,
      children: (0, c.jsx)(S.ListAuto, {
        ...t,
        className: m()(j.customScroller, j.contentRegionScroller),
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
        className: m()(j.customScroller, j.contentRegionScroller),
        children: t
      })
    })
  })
}
l = {
  paddingTop: 60,
  paddingBottom: 60
}, (s = "defaultProps") in(i = I) ? Object.defineProperty(i, s, {
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

function A(e) {
  let {
    isMobile: t,
    mobileSidebarOpen: n,
    closeAction: i
  } = e, s = u.useRef(null);
  return null == i ? null : (0, c.jsx)("div", {
    className: m()(j.toolsContainer, {
      [j.mobileToolsContainer]: t,
      [j.mobileSidebarTools]: t,
      [j.closeIconOnly]: !n,
      [j.isMobileAndroid]: !n && !0 === (0, x.isAndroidWeb)()
    }),
    ref: s,
    children: (0, c.jsx)(S.FocusRingScope, {
      containerRef: s,
      children: (0, c.jsx)("div", {
        className: j.tools,
        children: (0, c.jsx)(N.default, {
          className: m()({
            [j.mobileToolsCloseIcon]: t
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
  } = e, C = u.useRef(null), I = u.useRef(null), P = (0, g.default)(s), _ = (0, h.useTransition)(N, {
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
    C.current = e, null != a && (a.current = e)
  }, [a]);
  u.useLayoutEffect(() => {
    null != C.current && P !== s && C.current.scrollTo({
      to: 0
    })
  }, [s, P, C]);
  let y = (0, c.jsx)(A, {
    isMobile: f.isMobile,
    mobileSidebarOpen: d,
    closeAction: l
  });

  function O() {
    return null == i ? null : (0, c.jsx)(T.default, {
      className: m()(j.noticeRegion, {
        [j.noticeRegionHiddenSidebar]: N
      }),
      children: i
    }, s)
  }
  return (0, c.jsx)(c.Fragment, {
    children: _((e, i) => (0, c.jsxs)(h.animated.div, {
      style: e,
      className: j.standardSidebarView,
      children: [!i && (null == t ? null : (0, c.jsx)("div", {
        className: m()(j.sidebarRegion, (0, v.getThemeClass)(r), {
          [j.flexFullWidth]: f.isMobile,
          [j.hidden]: f.isMobile && !1 === d
        }),
        children: (0, c.jsx)(S.AdvancedScrollerThin, {
          className: j.sidebarRegionScroller,
          fade: !0,
          children: (0, c.jsxs)("nav", {
            className: m()(j.sidebar, {
              [j.mobileSidebar]: f.isMobile
            }),
            children: [f.isMobile && (0, c.jsx)("div", {
              className: j.mobileSidebarHeader,
              children: y
            }), t]
          })
        })
      })), function() {
        let e = null != x && null != l && d,
          t = f.isMobile && (0, c.jsxs)("div", {
            className: m()(j.mobileContentHeader, {
              [j.hideHamburger]: !e
            }),
            children: [e && (0, c.jsx)(p.HamburgerButton, {
              onClick: x
            }), y]
          });
        if ("custom" === o) return (0, c.jsxs)(b.TransitionGroup, {
          component: "div",
          className: j.contentRegion,
          children: [t, n, !f.isMobile && y, O()]
        });
        let i = R[null != o ? o : "default"];
        return (0, c.jsxs)(b.TransitionGroup, {
          component: "div",
          className: m()(j.contentRegion, {
            [j.hidden]: f.isMobile && !0 === d
          }),
          children: [(0, c.jsxs)("div", {
            className: j.contentTransitionWrap,
            children: [t, (0, c.jsxs)(S.AdvancedScrollerAuto, {
              className: m()(j.contentRegionScroller, N ? j.contentRegionHiddenSidebar : j.contentRegionShownSidebar),
              ref: M,
              children: [(0, c.jsx)(E.Provider, {
                value: C.current,
                children: (0, c.jsx)(S.TabBar.Panel, {
                  id: s,
                  className: m()(j.contentColumn, j[i], {
                    [j.mobileContent]: f.isMobile
                  }),
                  ref: I,
                  style: f.isMobile ? {
                    maxWidth: window.innerWidth
                  } : void 0,
                  children: N ? n : (0, c.jsx)(S.FocusRingScope, {
                    containerRef: I,
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