"use strict";
n.r(t), n.d(t, {
  SectionTypes: function() {
    return x
  },
  ListContentScroller: function() {
    return T
  },
  DefaultCustomContentScroller: function() {
    return j
  },
  ContentTypes: function() {
    return s
  },
  default: function() {
    return P
  }
});
var i, s, l = n("37983"),
  o = n("884691"),
  r = n("414456"),
  a = n.n(r),
  c = n("907002"),
  d = n("353386"),
  u = n("394846"),
  h = n("266491"),
  m = n("77078"),
  f = n("84339"),
  p = n("965397"),
  S = n("773336"),
  b = n("439932"),
  g = n("304580"),
  v = n("7691");
let x = {
    HEADER: "HEADER",
    DIVIDER: "DIVIDER",
    CUSTOM: "CUSTOM"
  },
  N = o.createContext(null);
class T extends o.PureComponent {
  renderContent() {
    let {
      scrollerRef: e,
      ...t
    } = this.props;
    return (0, l.jsx)("div", {
      className: v.customContainer,
      children: (0, l.jsx)(m.ListAuto, {
        ...t,
        className: a(v.customScroller, v.contentRegionScroller),
        ref: e
      })
    })
  }
  render() {
    return (0, l.jsx)("div", {
      className: v.customColumn,
      children: this.renderContent()
    })
  }
}

function j(e) {
  let {
    children: t
  } = e;
  return (0, l.jsx)("div", {
    className: v.customColumn,
    children: (0, l.jsx)("div", {
      className: v.customContainer,
      children: (0, l.jsx)(m.ScrollerAuto, {
        className: a(v.customScroller, v.contentRegionScroller),
        children: t
      })
    })
  })
}
T.defaultProps = {
  paddingTop: 60,
  paddingBottom: 60
}, (i = s || (s = {})).MINIMAL = "minimal", i.CUSTOM = "custom", i.DEFAULT = "default", i.WIDE = "wide";
let C = Object.freeze({
  minimal: "contentColumnMinimal",
  custom: "contentColumnCustom",
  default: "contentColumnDefault",
  wide: "contentColumnWide"
});

function E(e) {
  let {
    isMobile: t,
    mobileSidebarOpen: n,
    closeAction: i
  } = e, s = o.useRef(null);
  return null == i ? null : (0, l.jsx)("div", {
    className: a(v.toolsContainer, {
      [v.mobileToolsContainer]: t,
      [v.mobileSidebarTools]: t,
      [v.closeIconOnly]: !n,
      [v.isMobileAndroid]: !n && !0 === (0, S.isAndroidWeb)()
    }),
    ref: s,
    children: (0, l.jsx)(m.FocusRingScope, {
      containerRef: s,
      children: (0, l.jsx)("div", {
        className: v.tools,
        children: (0, l.jsx)(g.default, {
          className: a({
            [v.mobileToolsCloseIcon]: t
          }),
          closeAction: i,
          keybind: "ESC"
        })
      })
    })
  })
}
var P = function(e) {
  let {
    sidebar: t,
    content: n,
    notice: i,
    section: s,
    closeAction: r,
    sidebarTheme: S,
    contentType: g,
    scrollerRef: x,
    mobileSidebarOpen: T,
    toggleSidebar: j,
    hideSidebar: P = !1
  } = e, R = o.useRef(null), y = o.useRef(null), I = (0, f.default)(s), A = (0, c.useTransition)(P, {
    from: {
      position: "absolute",
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    reverse: P,
    config: c.config.stiff
  }), M = o.useCallback(e => {
    R.current = e, null != x && (x.current = e)
  }, [x]);
  o.useLayoutEffect(() => {
    null != R.current && I !== s && R.current.scrollTo({
      to: 0
    })
  }, [s, I, R]);
  let O = (0, l.jsx)(E, {
    isMobile: u.isMobile,
    mobileSidebarOpen: T,
    closeAction: r
  });

  function _() {
    return null == i ? null : (0, l.jsx)(p.default, {
      className: a(v.noticeRegion, {
        [v.noticeRegionHiddenSidebar]: P
      }),
      children: i
    }, s)
  }
  return (0, l.jsx)(l.Fragment, {
    children: A((e, i) => (0, l.jsxs)(c.animated.div, {
      style: e,
      className: v.standardSidebarView,
      children: [!i && (null == t ? null : (0, l.jsx)("div", {
        className: a(v.sidebarRegion, (0, b.getThemeClass)(S), {
          [v.flexFullWidth]: u.isMobile,
          [v.hidden]: u.isMobile && !1 === T
        }),
        children: (0, l.jsx)(m.AdvancedScrollerThin, {
          className: v.sidebarRegionScroller,
          fade: !0,
          children: (0, l.jsxs)("nav", {
            className: a(v.sidebar, {
              [v.mobileSidebar]: u.isMobile
            }),
            children: [u.isMobile && (0, l.jsx)("div", {
              className: v.mobileSidebarHeader,
              children: O
            }), t]
          })
        })
      })), function() {
        let e = null != j && null != r && T,
          t = u.isMobile && (0, l.jsxs)("div", {
            className: a(v.mobileContentHeader, {
              [v.hideHamburger]: !e
            }),
            children: [e && (0, l.jsx)(d.default, {
              onClick: j
            }), O]
          });
        if ("custom" === g) return (0, l.jsxs)(h.default, {
          component: "div",
          className: v.contentRegion,
          children: [t, n, !u.isMobile && O, _()]
        });
        let i = C[null != g ? g : "default"];
        return (0, l.jsxs)(h.default, {
          component: "div",
          className: a(v.contentRegion, {
            [v.hidden]: u.isMobile && !0 === T
          }),
          children: [(0, l.jsxs)("div", {
            className: v.contentTransitionWrap,
            children: [t, (0, l.jsxs)(m.AdvancedScrollerAuto, {
              className: a(v.contentRegionScroller, P ? v.contentRegionHiddenSidebar : v.contentRegionShownSidebar),
              ref: M,
              children: [(0, l.jsx)(N.Provider, {
                value: R.current,
                children: (0, l.jsx)(m.TabBar.Panel, {
                  id: s,
                  className: a(v.contentColumn, v[i], {
                    [v.mobileContent]: u.isMobile
                  }),
                  ref: y,
                  style: u.isMobile ? {
                    maxWidth: window.innerWidth
                  } : void 0,
                  children: P ? n : (0, l.jsx)(m.FocusRingScope, {
                    containerRef: y,
                    children: n
                  })
                })
              }), !u.isMobile && O]
            })]
          }), _()]
        })
      }()]
    }))
  })
}