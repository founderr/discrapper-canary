n.d(t, {
    ID: function () {
        return T;
    },
    NM: function () {
        return E;
    },
    Xi: function () {
        return A;
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
    f = n(608863),
    p = n(873546),
    S = n(215569),
    N = n(481060),
    b = n(110924),
    x = n(358085),
    v = n(425493),
    g = n(156725);
let T = {
        HEADER: 'HEADER',
        DIVIDER: 'DIVIDER',
        CUSTOM: 'CUSTOM'
    },
    _ = u.createContext(null);
class A extends (o = u.PureComponent) {
    renderContent() {
        let { scrollerRef: e, ...t } = this.props;
        return (0, c.jsx)('div', {
            className: g.customContainer,
            children: (0, c.jsx)(N.ListAuto, {
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
function E(e) {
    let { children: t } = e;
    return (0, c.jsx)('div', {
        className: g.customColumn,
        children: (0, c.jsx)('div', {
            className: g.customContainer,
            children: (0, c.jsx)(N.ScrollerAuto, {
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
    (i = 'defaultProps') in (s = A)
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
let C = Object.freeze({
    minimal: 'contentColumnMinimal',
    custom: 'contentColumnCustom',
    default: 'contentColumnDefault',
    wide: 'contentColumnWide'
});
function I(e) {
    let { isMobile: t, mobileSidebarOpen: n, closeAction: s } = e,
        i = u.useRef(null);
    return null == s
        ? null
        : (0, c.jsx)('div', {
              className: h()(g.toolsContainer, {
                  [g.mobileToolsContainer]: t,
                  [g.mobileSidebarTools]: t,
                  [g.closeIconOnly]: !n,
                  [g.isMobileAndroid]: !n && !0 === (0, x.isAndroidWeb)()
              }),
              ref: i,
              children: (0, c.jsx)(N.FocusRingScope, {
                  containerRef: i,
                  children: (0, c.jsx)('div', {
                      className: g.tools,
                      children: (0, c.jsx)(v.Z, {
                          className: h()({ [g.mobileToolsCloseIcon]: t }),
                          closeAction: s,
                          keybind: 'ESC'
                      })
                  })
              })
          });
}
t.ZP = function (e) {
    let { sidebar: t, content: n, notice: s, section: i, closeAction: r, sidebarTheme: l, contentType: o, scrollerRef: a, mobileSidebarOpen: d, toggleSidebar: x, hideSidebar: v = !1 } = e,
        T = u.useRef(null),
        A = u.useRef(null),
        E = (0, b.Z)(i),
        R = (0, N.useTransition)(
            v,
            {
                from: {
                    position: 'absolute',
                    opacity: 0
                },
                enter: { opacity: 1 },
                reverse: v,
                config: m.config.stiff
            },
            'animate-always'
        ),
        j = u.useCallback(
            (e) => {
                (T.current = e), null != a && (a.current = e);
            },
            [a]
        );
    u.useLayoutEffect(() => {
        null != T.current && E !== i && T.current.scrollTo({ to: 0 });
    }, [i, E, T]);
    let M = (0, c.jsx)(I, {
        isMobile: p.tq,
        mobileSidebarOpen: d,
        closeAction: r
    });
    function O() {
        return null == s
            ? null
            : (0, c.jsx)(
                  N.SlideIn,
                  {
                      className: h()(g.noticeRegion, { [g.noticeRegionHiddenSidebar]: v }),
                      children: s
                  },
                  i
              );
    }
    return (0, c.jsx)(c.Fragment, {
        children: R((e, s) =>
            (0, c.jsxs)(m.animated.div, {
                style: e,
                className: g.standardSidebarView,
                children: [
                    !s &&
                        (null == t
                            ? null
                            : (0, c.jsx)(N.ThemeProvider, {
                                  theme: l,
                                  children: (e) =>
                                      (0, c.jsx)('div', {
                                          className: h()(g.sidebarRegion, e, {
                                              [g.flexFullWidth]: p.tq,
                                              [g.hidden]: p.tq && !1 === d
                                          }),
                                          children: (0, c.jsx)(N.AdvancedScrollerThin, {
                                              className: g.sidebarRegionScroller,
                                              fade: !0,
                                              children: (0, c.jsxs)('nav', {
                                                  className: h()(g.sidebar, { [g.mobileSidebar]: p.tq }),
                                                  children: [
                                                      p.tq &&
                                                          (0, c.jsx)('div', {
                                                              className: g.mobileSidebarHeader,
                                                              children: M
                                                          }),
                                                      t
                                                  ]
                                              })
                                          })
                                      })
                              })),
                    (function () {
                        let e = null != x && null != r && d,
                            t =
                                p.tq &&
                                (0, c.jsxs)('div', {
                                    className: h()(g.mobileContentHeader, { [g.hideHamburger]: !e }),
                                    children: [e && (0, c.jsx)(f.r, { onClick: x }), M]
                                });
                        if ('custom' === o)
                            return (0, c.jsxs)(S.W, {
                                component: 'div',
                                className: g.contentRegion,
                                children: [t, n, !p.tq && M, O()]
                            });
                        let s = C[null != o ? o : 'default'];
                        return (0, c.jsxs)(S.W, {
                            component: 'div',
                            className: h()(g.contentRegion, { [g.hidden]: p.tq && !0 === d }),
                            children: [
                                (0, c.jsxs)('div', {
                                    className: g.contentTransitionWrap,
                                    children: [
                                        t,
                                        (0, c.jsxs)(N.AdvancedScrollerAuto, {
                                            className: h()(g.contentRegionScroller, v ? g.contentRegionHiddenSidebar : g.contentRegionShownSidebar),
                                            ref: j,
                                            children: [
                                                (0, c.jsx)(_.Provider, {
                                                    value: T.current,
                                                    children: (0, c.jsx)(N.TabBar.Panel, {
                                                        id: i,
                                                        className: h()(g.contentColumn, g[s], { [g.mobileContent]: p.tq }),
                                                        ref: A,
                                                        style: p.tq ? { maxWidth: window.innerWidth } : void 0,
                                                        children: v
                                                            ? n
                                                            : (0, c.jsx)(N.FocusRingScope, {
                                                                  containerRef: A,
                                                                  children: n
                                                              })
                                                    })
                                                }),
                                                !p.tq && M
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
