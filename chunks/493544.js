n.d(t, {
  ID: function() {
    return C
  },
  NM: function() {
    return I
  },
  Xi: function() {
    return E
  },
  bT: function() {
    return a
  }
});
var i, s, l, r, o, a, c = n(735250),
  d = n(470079),
  u = n(120356),
  h = n.n(u),
  m = n(920906),
  p = n(608863),
  b = n(873546),
  f = n(215569),
  S = n(481060),
  x = n(110924),
  v = n(358085),
  g = n(792125),
  N = n(425493),
  j = n(576107);
let C = {
    HEADER: "HEADER",
    DIVIDER: "DIVIDER",
    CUSTOM: "CUSTOM"
  },
  T = d.createContext(null);
class E extends(o = d.PureComponent) {
  renderContent() {
    let {
      scrollerRef: e,
      ...t
    } = this.props;
    return (0, c.jsx)("div", {
      className: j.customContainer,
      children: (0, c.jsx)(S.ListAuto, {
        ...t,
        className: h()(j.customScroller, j.contentRegionScroller),
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

function I(e) {
  let {
    children: t
  } = e;
  return (0, c.jsx)("div", {
    className: j.customColumn,
    children: (0, c.jsx)("div", {
      className: j.customContainer,
      children: (0, c.jsx)(S.ScrollerAuto, {
        className: h()(j.customScroller, j.contentRegionScroller),
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
  } = e, s = d.useRef(null);
  return null == i ? null : (0, c.jsx)("div", {
    className: h()(j.toolsContainer, {
      [j.mobileToolsContainer]: t,
      [j.mobileSidebarTools]: t,
      [j.closeIconOnly]: !n,
      [j.isMobileAndroid]: !n && !0 === (0, v.isAndroidWeb)()
    }),
    ref: s,
    children: (0, c.jsx)(S.FocusRingScope, {
      containerRef: s,
      children: (0, c.jsx)("div", {
        className: j.tools,
        children: (0, c.jsx)(N.Z, {
          className: h()({
            [j.mobileToolsCloseIcon]: t
          }),
          closeAction: i,
          keybind: "ESC"
        })
      })
    })
  })
}
t.ZP = function(e) {
  let {
    sidebar: t,
    content: n,
    notice: i,
    section: s,
    closeAction: l,
    sidebarTheme: r,
    contentType: o,
    scrollerRef: a,
    mobileSidebarOpen: u,
    toggleSidebar: v,
    hideSidebar: N = !1
  } = e, C = d.useRef(null), E = d.useRef(null), I = (0, x.Z)(s), A = (0, m.useTransition)(N, {
    from: {
      position: "absolute",
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    reverse: N,
    config: m.config.stiff
  }), y = d.useCallback(e => {
    C.current = e, null != a && (a.current = e)
  }, [a]);
  d.useLayoutEffect(() => {
    null != C.current && I !== s && C.current.scrollTo({
      to: 0
    })
  }, [s, I, C]);
  let O = (0, c.jsx)(R, {
    isMobile: b.tq,
    mobileSidebarOpen: u,
    closeAction: l
  });

  function _() {
    return null == i ? null : (0, c.jsx)(S.SlideIn, {
      className: h()(j.noticeRegion, {
        [j.noticeRegionHiddenSidebar]: N
      }),
      children: i
    }, s)
  }
  return (0, c.jsx)(c.Fragment, {
    children: A((e, i) => (0, c.jsxs)(m.animated.div, {
      style: e,
      className: j.standardSidebarView,
      children: [!i && (null == t ? null : (0, c.jsx)("div", {
        className: h()(j.sidebarRegion, (0, g.Q)(r), {
          [j.flexFullWidth]: b.tq,
          [j.hidden]: b.tq && !1 === u
        }),
        children: (0, c.jsx)(S.AdvancedScrollerThin, {
          className: j.sidebarRegionScroller,
          fade: !0,
          children: (0, c.jsxs)("nav", {
            className: h()(j.sidebar, {
              [j.mobileSidebar]: b.tq
            }),
            children: [b.tq && (0, c.jsx)("div", {
              className: j.mobileSidebarHeader,
              children: O
            }), t]
          })
        })
      })), function() {
        let e = null != v && null != l && u,
          t = b.tq && (0, c.jsxs)("div", {
            className: h()(j.mobileContentHeader, {
              [j.hideHamburger]: !e
            }),
            children: [e && (0, c.jsx)(p.r, {
              onClick: v
            }), O]
          });
        if ("custom" === o) return (0, c.jsxs)(f.W, {
          component: "div",
          className: j.contentRegion,
          children: [t, n, !b.tq && O, _()]
        });
        let i = P[null != o ? o : "default"];
        return (0, c.jsxs)(f.W, {
          component: "div",
          className: h()(j.contentRegion, {
            [j.hidden]: b.tq && !0 === u
          }),
          children: [(0, c.jsxs)("div", {
            className: j.contentTransitionWrap,
            children: [t, (0, c.jsxs)(S.AdvancedScrollerAuto, {
              className: h()(j.contentRegionScroller, N ? j.contentRegionHiddenSidebar : j.contentRegionShownSidebar),
              ref: y,
              children: [(0, c.jsx)(T.Provider, {
                value: C.current,
                children: (0, c.jsx)(S.TabBar.Panel, {
                  id: s,
                  className: h()(j.contentColumn, j[i], {
                    [j.mobileContent]: b.tq
                  }),
                  ref: E,
                  style: b.tq ? {
                    maxWidth: window.innerWidth
                  } : void 0,
                  children: N ? n : (0, c.jsx)(S.FocusRingScope, {
                    containerRef: E,
                    children: n
                  })
                })
              }), !b.tq && O]
            })]
          }), _()]
        })
      }()]
    }))
  })
}