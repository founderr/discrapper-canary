n.d(t, {
    ID: function () {
        return j;
    },
    NM: function () {
        return E;
    },
    Xi: function () {
        return T;
    },
    bT: function () {
        return a;
    }
});
var i,
    s,
    l,
    r,
    o,
    a,
    c = n(200651),
    u = n(192379),
    d = n(120356),
    h = n.n(d),
    m = n(100621),
    p = n(608863),
    f = n(873546),
    b = n(215569),
    S = n(481060),
    v = n(110924),
    x = n(358085),
    g = n(425493),
    N = n(156725);
let j = {
        HEADER: 'HEADER',
        DIVIDER: 'DIVIDER',
        CUSTOM: 'CUSTOM'
    },
    C = u.createContext(null);
class T extends (o = u.PureComponent) {
    renderContent() {
        let { scrollerRef: e, ...t } = this.props;
        return (0, c.jsx)('div', {
            className: N.customContainer,
            children: (0, c.jsx)(S.ListAuto, {
                ...t,
                className: h()(N.customScroller, N.contentRegionScroller),
                ref: e
            })
        });
    }
    render() {
        return (0, c.jsx)('div', {
            className: N.customColumn,
            children: this.renderContent()
        });
    }
}
function E(e) {
    let { children: t } = e;
    return (0, c.jsx)('div', {
        className: N.customColumn,
        children: (0, c.jsx)('div', {
            className: N.customContainer,
            children: (0, c.jsx)(S.ScrollerAuto, {
                className: h()(N.customScroller, N.contentRegionScroller),
                children: t
            })
        })
    });
}
(l = {
    paddingTop: 60,
    paddingBottom: 60
}),
    (s = 'defaultProps') in (i = T)
        ? Object.defineProperty(i, s, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[s] = l),
    ((r = a || (a = {})).MINIMAL = 'minimal'),
    (r.CUSTOM = 'custom'),
    (r.DEFAULT = 'default'),
    (r.WIDE = 'wide');
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
              className: h()(N.toolsContainer, {
                  [N.mobileToolsContainer]: t,
                  [N.mobileSidebarTools]: t,
                  [N.closeIconOnly]: !n,
                  [N.isMobileAndroid]: !n && !0 === (0, x.isAndroidWeb)()
              }),
              ref: s,
              children: (0, c.jsx)(S.FocusRingScope, {
                  containerRef: s,
                  children: (0, c.jsx)('div', {
                      className: N.tools,
                      children: (0, c.jsx)(g.Z, {
                          className: h()({ [N.mobileToolsCloseIcon]: t }),
                          closeAction: i,
                          keybind: 'ESC'
                      })
                  })
              })
          });
}
t.ZP = function (e) {
    let { sidebar: t, content: n, notice: i, section: s, closeAction: l, sidebarTheme: r, contentType: o, scrollerRef: a, mobileSidebarOpen: d, toggleSidebar: x, hideSidebar: g = !1 } = e,
        j = u.useRef(null),
        T = u.useRef(null),
        E = (0, v.Z)(s),
        R = (0, S.useTransition)(
            g,
            {
                from: {
                    position: 'absolute',
                    opacity: 0
                },
                enter: { opacity: 1 },
                reverse: g,
                config: m.config.stiff
            },
            'animate-always'
        ),
        I = u.useCallback(
            (e) => {
                (j.current = e), null != a && (a.current = e);
            },
            [a]
        );
    u.useLayoutEffect(() => {
        null != j.current && E !== s && j.current.scrollTo({ to: 0 });
    }, [s, E, j]);
    let A = (0, c.jsx)(P, {
        isMobile: f.tq,
        mobileSidebarOpen: d,
        closeAction: l
    });
    function Z() {
        return null == i
            ? null
            : (0, c.jsx)(
                  S.SlideIn,
                  {
                      className: h()(N.noticeRegion, { [N.noticeRegionHiddenSidebar]: g }),
                      children: i
                  },
                  s
              );
    }
    return (0, c.jsx)(c.Fragment, {
        children: R((e, i) =>
            (0, c.jsxs)(m.animated.div, {
                style: e,
                className: N.standardSidebarView,
                children: [
                    !i &&
                        (null == t
                            ? null
                            : (0, c.jsx)(S.ThemeProvider, {
                                  theme: r,
                                  children: (e) =>
                                      (0, c.jsx)('div', {
                                          className: h()(N.sidebarRegion, e, {
                                              [N.flexFullWidth]: f.tq,
                                              [N.hidden]: f.tq && !1 === d
                                          }),
                                          children: (0, c.jsx)(S.AdvancedScrollerThin, {
                                              className: N.sidebarRegionScroller,
                                              fade: !0,
                                              children: (0, c.jsxs)('nav', {
                                                  className: h()(N.sidebar, { [N.mobileSidebar]: f.tq }),
                                                  children: [
                                                      f.tq &&
                                                          (0, c.jsx)('div', {
                                                              className: N.mobileSidebarHeader,
                                                              children: A
                                                          }),
                                                      t
                                                  ]
                                              })
                                          })
                                      })
                              })),
                    (function () {
                        let e = null != x && null != l && d,
                            t =
                                f.tq &&
                                (0, c.jsxs)('div', {
                                    className: h()(N.mobileContentHeader, { [N.hideHamburger]: !e }),
                                    children: [e && (0, c.jsx)(p.r, { onClick: x }), A]
                                });
                        if ('custom' === o)
                            return (0, c.jsxs)(b.W, {
                                component: 'div',
                                className: N.contentRegion,
                                children: [t, n, !f.tq && A, Z()]
                            });
                        let i = y[null != o ? o : 'default'];
                        return (0, c.jsxs)(b.W, {
                            component: 'div',
                            className: h()(N.contentRegion, { [N.hidden]: f.tq && !0 === d }),
                            children: [
                                (0, c.jsxs)('div', {
                                    className: N.contentTransitionWrap,
                                    children: [
                                        t,
                                        (0, c.jsxs)(S.AdvancedScrollerAuto, {
                                            className: h()(N.contentRegionScroller, g ? N.contentRegionHiddenSidebar : N.contentRegionShownSidebar),
                                            ref: I,
                                            children: [
                                                (0, c.jsx)(C.Provider, {
                                                    value: j.current,
                                                    children: (0, c.jsx)(S.TabBar.Panel, {
                                                        id: s,
                                                        className: h()(N.contentColumn, N[i], { [N.mobileContent]: f.tq }),
                                                        ref: T,
                                                        style: f.tq ? { maxWidth: window.innerWidth } : void 0,
                                                        children: g
                                                            ? n
                                                            : (0, c.jsx)(S.FocusRingScope, {
                                                                  containerRef: T,
                                                                  children: n
                                                              })
                                                    })
                                                }),
                                                !f.tq && A
                                            ]
                                        })
                                    ]
                                }),
                                Z()
                            ]
                        });
                    })()
                ]
            })
        )
    });
};
