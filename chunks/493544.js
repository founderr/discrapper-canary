n.d(t, {
    ID: function () {
        return R;
    },
    NM: function () {
        return g;
    },
    Xi: function () {
        return v;
    },
    bT: function () {
        return a;
    }
});
var s,
    i,
    r,
    l,
    o,
    a,
    c = n(735250),
    u = n(470079),
    d = n(120356),
    h = n.n(d),
    m = n(212433),
    p = n(608863),
    f = n(873546),
    S = n(215569),
    N = n(481060),
    _ = n(110924),
    T = n(358085),
    b = n(425493),
    x = n(156725);
let R = {
        HEADER: 'HEADER',
        DIVIDER: 'DIVIDER',
        CUSTOM: 'CUSTOM'
    },
    I = u.createContext(null);
class v extends (o = u.PureComponent) {
    renderContent() {
        let { scrollerRef: e, ...t } = this.props;
        return (0, c.jsx)('div', {
            className: x.customContainer,
            children: (0, c.jsx)(N.ListAuto, {
                ...t,
                className: h()(x.customScroller, x.contentRegionScroller),
                ref: e
            })
        });
    }
    render() {
        return (0, c.jsx)('div', {
            className: x.customColumn,
            children: this.renderContent()
        });
    }
}
function g(e) {
    let { children: t } = e;
    return (0, c.jsx)('div', {
        className: x.customColumn,
        children: (0, c.jsx)('div', {
            className: x.customContainer,
            children: (0, c.jsx)(N.ScrollerAuto, {
                className: h()(x.customScroller, x.contentRegionScroller),
                children: t
            })
        })
    });
}
(r = {
    paddingTop: 60,
    paddingBottom: 60
}),
    (i = 'defaultProps') in (s = v)
        ? Object.defineProperty(s, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[i] = r),
    ((l = a || (a = {})).MINIMAL = 'minimal'),
    (l.CUSTOM = 'custom'),
    (l.DEFAULT = 'default'),
    (l.WIDE = 'wide');
let E = Object.freeze({
    minimal: 'contentColumnMinimal',
    custom: 'contentColumnCustom',
    default: 'contentColumnDefault',
    wide: 'contentColumnWide'
});
function C(e) {
    let { isMobile: t, mobileSidebarOpen: n, closeAction: s } = e,
        i = u.useRef(null);
    return null == s
        ? null
        : (0, c.jsx)('div', {
              className: h()(x.toolsContainer, {
                  [x.mobileToolsContainer]: t,
                  [x.mobileSidebarTools]: t,
                  [x.closeIconOnly]: !n,
                  [x.isMobileAndroid]: !n && !0 === (0, T.isAndroidWeb)()
              }),
              ref: i,
              children: (0, c.jsx)(N.FocusRingScope, {
                  containerRef: i,
                  children: (0, c.jsx)('div', {
                      className: x.tools,
                      children: (0, c.jsx)(b.Z, {
                          className: h()({ [x.mobileToolsCloseIcon]: t }),
                          closeAction: s,
                          keybind: 'ESC'
                      })
                  })
              })
          });
}
t.ZP = function (e) {
    let { sidebar: t, content: n, notice: s, section: i, closeAction: r, sidebarTheme: l, contentType: o, scrollerRef: a, mobileSidebarOpen: d, toggleSidebar: T, hideSidebar: b = !1 } = e,
        R = u.useRef(null),
        v = u.useRef(null),
        g = (0, _.Z)(i),
        j = (0, N.useTransition)(
            b,
            {
                from: {
                    position: 'absolute',
                    opacity: 0
                },
                enter: { opacity: 1 },
                reverse: b,
                config: m.config.stiff
            },
            'animate-always'
        ),
        A = u.useCallback(
            (e) => {
                (R.current = e), null != a && (a.current = e);
            },
            [a]
        );
    u.useLayoutEffect(() => {
        null != R.current && g !== i && R.current.scrollTo({ to: 0 });
    }, [i, g, R]);
    let M = (0, c.jsx)(C, {
        isMobile: f.tq,
        mobileSidebarOpen: d,
        closeAction: r
    });
    function O() {
        return null == s
            ? null
            : (0, c.jsx)(
                  N.SlideIn,
                  {
                      className: h()(x.noticeRegion, { [x.noticeRegionHiddenSidebar]: b }),
                      children: s
                  },
                  i
              );
    }
    return (0, c.jsx)(c.Fragment, {
        children: j((e, s) =>
            (0, c.jsxs)(m.animated.div, {
                style: e,
                className: x.standardSidebarView,
                children: [
                    !s &&
                        (null == t
                            ? null
                            : (0, c.jsx)(N.ThemeProvider, {
                                  theme: l,
                                  children: (e) =>
                                      (0, c.jsx)('div', {
                                          className: h()(x.sidebarRegion, e, {
                                              [x.flexFullWidth]: f.tq,
                                              [x.hidden]: f.tq && !1 === d
                                          }),
                                          children: (0, c.jsx)(N.AdvancedScrollerThin, {
                                              className: x.sidebarRegionScroller,
                                              fade: !0,
                                              children: (0, c.jsxs)('nav', {
                                                  className: h()(x.sidebar, { [x.mobileSidebar]: f.tq }),
                                                  children: [
                                                      f.tq &&
                                                          (0, c.jsx)('div', {
                                                              className: x.mobileSidebarHeader,
                                                              children: M
                                                          }),
                                                      t
                                                  ]
                                              })
                                          })
                                      })
                              })),
                    (function () {
                        let e = null != T && null != r && d,
                            t =
                                f.tq &&
                                (0, c.jsxs)('div', {
                                    className: h()(x.mobileContentHeader, { [x.hideHamburger]: !e }),
                                    children: [e && (0, c.jsx)(p.r, { onClick: T }), M]
                                });
                        if ('custom' === o)
                            return (0, c.jsxs)(S.W, {
                                component: 'div',
                                className: x.contentRegion,
                                children: [t, n, !f.tq && M, O()]
                            });
                        let s = E[null != o ? o : 'default'];
                        return (0, c.jsxs)(S.W, {
                            component: 'div',
                            className: h()(x.contentRegion, { [x.hidden]: f.tq && !0 === d }),
                            children: [
                                (0, c.jsxs)('div', {
                                    className: x.contentTransitionWrap,
                                    children: [
                                        t,
                                        (0, c.jsxs)(N.AdvancedScrollerAuto, {
                                            className: h()(x.contentRegionScroller, b ? x.contentRegionHiddenSidebar : x.contentRegionShownSidebar),
                                            ref: A,
                                            children: [
                                                (0, c.jsx)(I.Provider, {
                                                    value: R.current,
                                                    children: (0, c.jsx)(N.TabBar.Panel, {
                                                        id: i,
                                                        className: h()(x.contentColumn, x[s], { [x.mobileContent]: f.tq }),
                                                        ref: v,
                                                        style: f.tq ? { maxWidth: window.innerWidth } : void 0,
                                                        children: b
                                                            ? n
                                                            : (0, c.jsx)(N.FocusRingScope, {
                                                                  containerRef: v,
                                                                  children: n
                                                              })
                                                    })
                                                }),
                                                !f.tq && M
                                            ]
                                        })
                                    ]
                                }),
                                O()
                            ]
                        });
                    })()
                ]
            })
        )
    });
};
