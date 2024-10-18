n.d(t, {
    ID: function () {
        return C;
    },
    NM: function () {
        return T;
    },
    Xi: function () {
        return E;
    },
    bT: function () {
        return a;
    }
});
var i,
    s,
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
    x = n(215569),
    b = n(481060),
    v = n(110924),
    S = n(358085),
    j = n(425493),
    g = n(156725);
let C = {
        HEADER: 'HEADER',
        DIVIDER: 'DIVIDER',
        CUSTOM: 'CUSTOM'
    },
    N = u.createContext(null);
class E extends (o = u.PureComponent) {
    renderContent() {
        let { scrollerRef: e, ...t } = this.props;
        return (0, c.jsx)('div', {
            className: g.customContainer,
            children: (0, c.jsx)(b.ListAuto, {
                ...t,
                className: h()(g.customScroller, g.contentRegionScroller),
                ref: e
            })
        });
    }
    render() {
        return (0, c.jsx)('div', {
            className: g.customColumn,
            children: this.renderContent()
        });
    }
}
function T(e) {
    let { children: t } = e;
    return (0, c.jsx)('div', {
        className: g.customColumn,
        children: (0, c.jsx)('div', {
            className: g.customContainer,
            children: (0, c.jsx)(b.ScrollerAuto, {
                className: h()(g.customScroller, g.contentRegionScroller),
                children: t
            })
        })
    });
}
(r = {
    paddingTop: 60,
    paddingBottom: 60
}),
    (s = 'defaultProps') in (i = E)
        ? Object.defineProperty(i, s, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[s] = r),
    ((l = a || (a = {})).MINIMAL = 'minimal'),
    (l.CUSTOM = 'custom'),
    (l.DEFAULT = 'default'),
    (l.WIDE = 'wide');
let y = Object.freeze({
    minimal: 'contentColumnMinimal',
    custom: 'contentColumnCustom',
    default: 'contentColumnDefault',
    wide: 'contentColumnWide'
});
function P(e) {
    let { isMobile: t, mobileSidebarOpen: n, closeAction: i } = e,
        s = u.useRef(null);
    return null == i
        ? null
        : (0, c.jsx)('div', {
              className: h()(g.toolsContainer, {
                  [g.mobileToolsContainer]: t,
                  [g.mobileSidebarTools]: t,
                  [g.closeIconOnly]: !n,
                  [g.isMobileAndroid]: !n && !0 === (0, S.isAndroidWeb)()
              }),
              ref: s,
              children: (0, c.jsx)(b.FocusRingScope, {
                  containerRef: s,
                  children: (0, c.jsx)('div', {
                      className: g.tools,
                      children: (0, c.jsx)(j.Z, {
                          className: h()({ [g.mobileToolsCloseIcon]: t }),
                          closeAction: i,
                          keybind: 'ESC'
                      })
                  })
              })
          });
}
t.ZP = function (e) {
    let { sidebar: t, content: n, notice: i, section: s, closeAction: r, sidebarTheme: l, contentType: o, scrollerRef: a, mobileSidebarOpen: d, toggleSidebar: S, hideSidebar: j = !1 } = e,
        C = u.useRef(null),
        E = u.useRef(null),
        T = (0, v.Z)(s),
        R = (0, b.useTransition)(
            j,
            {
                from: {
                    position: 'absolute',
                    opacity: 0
                },
                enter: { opacity: 1 },
                reverse: j,
                config: m.config.stiff
            },
            'animate-always'
        ),
        I = u.useCallback(
            (e) => {
                (C.current = e), null != a && (a.current = e);
            },
            [a]
        );
    u.useLayoutEffect(() => {
        null != C.current && T !== s && C.current.scrollTo({ to: 0 });
    }, [s, T, C]);
    let A = (0, c.jsx)(P, {
        isMobile: f.tq,
        mobileSidebarOpen: d,
        closeAction: r
    });
    function _() {
        return null == i
            ? null
            : (0, c.jsx)(
                  b.SlideIn,
                  {
                      className: h()(g.noticeRegion, { [g.noticeRegionHiddenSidebar]: j }),
                      children: i
                  },
                  s
              );
    }
    return (0, c.jsx)(c.Fragment, {
        children: R((e, i) =>
            (0, c.jsxs)(m.animated.div, {
                style: e,
                className: g.standardSidebarView,
                children: [
                    !i &&
                        (null == t
                            ? null
                            : (0, c.jsx)(b.ThemeProvider, {
                                  theme: l,
                                  children: (e) =>
                                      (0, c.jsx)('div', {
                                          className: h()(g.sidebarRegion, e, {
                                              [g.flexFullWidth]: f.tq,
                                              [g.hidden]: f.tq && !1 === d
                                          }),
                                          children: (0, c.jsx)(b.AdvancedScrollerThin, {
                                              className: g.sidebarRegionScroller,
                                              fade: !0,
                                              children: (0, c.jsxs)('nav', {
                                                  className: h()(g.sidebar, { [g.mobileSidebar]: f.tq }),
                                                  children: [
                                                      f.tq &&
                                                          (0, c.jsx)('div', {
                                                              className: g.mobileSidebarHeader,
                                                              children: A
                                                          }),
                                                      t
                                                  ]
                                              })
                                          })
                                      })
                              })),
                    (function () {
                        let e = null != S && null != r && d,
                            t =
                                f.tq &&
                                (0, c.jsxs)('div', {
                                    className: h()(g.mobileContentHeader, { [g.hideHamburger]: !e }),
                                    children: [e && (0, c.jsx)(p.r, { onClick: S }), A]
                                });
                        if ('custom' === o)
                            return (0, c.jsxs)(x.W, {
                                component: 'div',
                                className: g.contentRegion,
                                children: [t, n, !f.tq && A, _()]
                            });
                        let i = y[null != o ? o : 'default'];
                        return (0, c.jsxs)(x.W, {
                            component: 'div',
                            className: h()(g.contentRegion, { [g.hidden]: f.tq && !0 === d }),
                            children: [
                                (0, c.jsxs)('div', {
                                    className: g.contentTransitionWrap,
                                    children: [
                                        t,
                                        (0, c.jsxs)(b.AdvancedScrollerAuto, {
                                            className: h()(g.contentRegionScroller, j ? g.contentRegionHiddenSidebar : g.contentRegionShownSidebar),
                                            ref: I,
                                            children: [
                                                (0, c.jsx)(N.Provider, {
                                                    value: C.current,
                                                    children: (0, c.jsx)(b.TabBar.Panel, {
                                                        id: s,
                                                        className: h()(g.contentColumn, g[i], { [g.mobileContent]: f.tq }),
                                                        ref: E,
                                                        style: f.tq ? { maxWidth: window.innerWidth } : void 0,
                                                        children: j
                                                            ? n
                                                            : (0, c.jsx)(b.FocusRingScope, {
                                                                  containerRef: E,
                                                                  children: n
                                                              })
                                                    })
                                                }),
                                                !f.tq && A
                                            ]
                                        })
                                    ]
                                }),
                                _()
                            ]
                        });
                    })()
                ]
            })
        )
    });
};
