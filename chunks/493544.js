n.d(t, {
    ID: function () {
        return N;
    },
    NM: function () {
        return T;
    },
    Xi: function () {
        return P;
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
    c = n(735250),
    u = n(470079),
    d = n(120356),
    h = n.n(d),
    m = n(180081),
    p = n(608863),
    f = n(873546),
    b = n(215569),
    S = n(481060),
    v = n(110924),
    x = n(358085),
    g = n(425493),
    j = n(326617);
let N = {
        HEADER: 'HEADER',
        DIVIDER: 'DIVIDER',
        CUSTOM: 'CUSTOM'
    },
    C = u.createContext(null);
class P extends (o = u.PureComponent) {
    renderContent() {
        let { scrollerRef: e, ...t } = this.props;
        return (0, c.jsx)('div', {
            className: j.customContainer,
            children: (0, c.jsx)(S.ListAuto, {
                ...t,
                className: h()(j.customScroller, j.contentRegionScroller),
                ref: e
            })
        });
    }
    render() {
        return (0, c.jsx)('div', {
            className: j.customColumn,
            children: this.renderContent()
        });
    }
}
function T(e) {
    let { children: t } = e;
    return (0, c.jsx)('div', {
        className: j.customColumn,
        children: (0, c.jsx)('div', {
            className: j.customContainer,
            children: (0, c.jsx)(S.ScrollerAuto, {
                className: h()(j.customScroller, j.contentRegionScroller),
                children: t
            })
        })
    });
}
(l = {
    paddingTop: 60,
    paddingBottom: 60
}),
    (s = 'defaultProps') in (i = P)
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
let E = Object.freeze({
    minimal: 'contentColumnMinimal',
    custom: 'contentColumnCustom',
    default: 'contentColumnDefault',
    wide: 'contentColumnWide'
});
function y(e) {
    let { isMobile: t, mobileSidebarOpen: n, closeAction: i } = e,
        s = u.useRef(null);
    return null == i
        ? null
        : (0, c.jsx)('div', {
              className: h()(j.toolsContainer, {
                  [j.mobileToolsContainer]: t,
                  [j.mobileSidebarTools]: t,
                  [j.closeIconOnly]: !n,
                  [j.isMobileAndroid]: !n && !0 === (0, x.isAndroidWeb)()
              }),
              ref: s,
              children: (0, c.jsx)(S.FocusRingScope, {
                  containerRef: s,
                  children: (0, c.jsx)('div', {
                      className: j.tools,
                      children: (0, c.jsx)(g.Z, {
                          className: h()({ [j.mobileToolsCloseIcon]: t }),
                          closeAction: i,
                          keybind: 'ESC'
                      })
                  })
              })
          });
}
t.ZP = function (e) {
    let { sidebar: t, content: n, notice: i, section: s, closeAction: l, sidebarTheme: r, contentType: o, scrollerRef: a, mobileSidebarOpen: d, toggleSidebar: x, hideSidebar: g = !1 } = e,
        N = u.useRef(null),
        P = u.useRef(null),
        T = (0, v.Z)(s),
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
                (N.current = e), null != a && (a.current = e);
            },
            [a]
        );
    u.useLayoutEffect(() => {
        null != N.current && T !== s && N.current.scrollTo({ to: 0 });
    }, [s, T, N]);
    let A = (0, c.jsx)(y, {
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
                      className: h()(j.noticeRegion, { [j.noticeRegionHiddenSidebar]: g }),
                      children: i
                  },
                  s
              );
    }
    return (0, c.jsx)(c.Fragment, {
        children: R((e, i) =>
            (0, c.jsxs)(m.animated.div, {
                style: e,
                className: j.standardSidebarView,
                children: [
                    !i &&
                        (null == t
                            ? null
                            : (0, c.jsx)(S.ThemeProvider, {
                                  theme: r,
                                  children: (e) =>
                                      (0, c.jsx)('div', {
                                          className: h()(j.sidebarRegion, e, {
                                              [j.flexFullWidth]: f.tq,
                                              [j.hidden]: f.tq && !1 === d
                                          }),
                                          children: (0, c.jsx)(S.AdvancedScrollerThin, {
                                              className: j.sidebarRegionScroller,
                                              fade: !0,
                                              children: (0, c.jsxs)('nav', {
                                                  className: h()(j.sidebar, { [j.mobileSidebar]: f.tq }),
                                                  children: [
                                                      f.tq &&
                                                          (0, c.jsx)('div', {
                                                              className: j.mobileSidebarHeader,
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
                                    className: h()(j.mobileContentHeader, { [j.hideHamburger]: !e }),
                                    children: [e && (0, c.jsx)(p.r, { onClick: x }), A]
                                });
                        if ('custom' === o)
                            return (0, c.jsxs)(b.W, {
                                component: 'div',
                                className: j.contentRegion,
                                children: [t, n, !f.tq && A, Z()]
                            });
                        let i = E[null != o ? o : 'default'];
                        return (0, c.jsxs)(b.W, {
                            component: 'div',
                            className: h()(j.contentRegion, { [j.hidden]: f.tq && !0 === d }),
                            children: [
                                (0, c.jsxs)('div', {
                                    className: j.contentTransitionWrap,
                                    children: [
                                        t,
                                        (0, c.jsxs)(S.AdvancedScrollerAuto, {
                                            className: h()(j.contentRegionScroller, g ? j.contentRegionHiddenSidebar : j.contentRegionShownSidebar),
                                            ref: I,
                                            children: [
                                                (0, c.jsx)(C.Provider, {
                                                    value: N.current,
                                                    children: (0, c.jsx)(S.TabBar.Panel, {
                                                        id: s,
                                                        className: h()(j.contentColumn, j[i], { [j.mobileContent]: f.tq }),
                                                        ref: P,
                                                        style: f.tq ? { maxWidth: window.innerWidth } : void 0,
                                                        children: g
                                                            ? n
                                                            : (0, c.jsx)(S.FocusRingScope, {
                                                                  containerRef: P,
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
