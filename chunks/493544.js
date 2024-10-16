n.d(t, {
    ID: function () {
        return T;
    },
    NM: function () {
        return j;
    },
    Xi: function () {
        return C;
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
    b = n(110924),
    x = n(358085),
    v = n(425493),
    _ = n(156725);
let T = {
        HEADER: 'HEADER',
        DIVIDER: 'DIVIDER',
        CUSTOM: 'CUSTOM'
    },
    g = u.createContext(null);
class C extends (o = u.PureComponent) {
    renderContent() {
        let { scrollerRef: e, ...t } = this.props;
        return (0, c.jsx)('div', {
            className: _.customContainer,
            children: (0, c.jsx)(N.ListAuto, {
                ...t,
                className: h()(_.customScroller, _.contentRegionScroller),
                ref: e
            })
        });
    }
    render() {
        return (0, c.jsx)('div', {
            className: _.customColumn,
            children: this.renderContent()
        });
    }
}
function j(e) {
    let { children: t } = e;
    return (0, c.jsx)('div', {
        className: _.customColumn,
        children: (0, c.jsx)('div', {
            className: _.customContainer,
            children: (0, c.jsx)(N.ScrollerAuto, {
                className: h()(_.customScroller, _.contentRegionScroller),
                children: t
            })
        })
    });
}
(r = {
    paddingTop: 60,
    paddingBottom: 60
}),
    (i = 'defaultProps') in (s = C)
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
function I(e) {
    let { isMobile: t, mobileSidebarOpen: n, closeAction: s } = e,
        i = u.useRef(null);
    return null == s
        ? null
        : (0, c.jsx)('div', {
              className: h()(_.toolsContainer, {
                  [_.mobileToolsContainer]: t,
                  [_.mobileSidebarTools]: t,
                  [_.closeIconOnly]: !n,
                  [_.isMobileAndroid]: !n && !0 === (0, x.isAndroidWeb)()
              }),
              ref: i,
              children: (0, c.jsx)(N.FocusRingScope, {
                  containerRef: i,
                  children: (0, c.jsx)('div', {
                      className: _.tools,
                      children: (0, c.jsx)(v.Z, {
                          className: h()({ [_.mobileToolsCloseIcon]: t }),
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
        C = u.useRef(null),
        j = (0, b.Z)(i),
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
        A = u.useCallback(
            (e) => {
                (T.current = e), null != a && (a.current = e);
            },
            [a]
        );
    u.useLayoutEffect(() => {
        null != T.current && j !== i && T.current.scrollTo({ to: 0 });
    }, [i, j, T]);
    let M = (0, c.jsx)(I, {
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
                      className: h()(_.noticeRegion, { [_.noticeRegionHiddenSidebar]: v }),
                      children: s
                  },
                  i
              );
    }
    return (0, c.jsx)(c.Fragment, {
        children: R((e, s) =>
            (0, c.jsxs)(m.animated.div, {
                style: e,
                className: _.standardSidebarView,
                children: [
                    !s &&
                        (null == t
                            ? null
                            : (0, c.jsx)(N.ThemeProvider, {
                                  theme: l,
                                  children: (e) =>
                                      (0, c.jsx)('div', {
                                          className: h()(_.sidebarRegion, e, {
                                              [_.flexFullWidth]: f.tq,
                                              [_.hidden]: f.tq && !1 === d
                                          }),
                                          children: (0, c.jsx)(N.AdvancedScrollerThin, {
                                              className: _.sidebarRegionScroller,
                                              fade: !0,
                                              children: (0, c.jsxs)('nav', {
                                                  className: h()(_.sidebar, { [_.mobileSidebar]: f.tq }),
                                                  children: [
                                                      f.tq &&
                                                          (0, c.jsx)('div', {
                                                              className: _.mobileSidebarHeader,
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
                                f.tq &&
                                (0, c.jsxs)('div', {
                                    className: h()(_.mobileContentHeader, { [_.hideHamburger]: !e }),
                                    children: [e && (0, c.jsx)(p.r, { onClick: x }), M]
                                });
                        if ('custom' === o)
                            return (0, c.jsxs)(S.W, {
                                component: 'div',
                                className: _.contentRegion,
                                children: [t, n, !f.tq && M, O()]
                            });
                        let s = E[null != o ? o : 'default'];
                        return (0, c.jsxs)(S.W, {
                            component: 'div',
                            className: h()(_.contentRegion, { [_.hidden]: f.tq && !0 === d }),
                            children: [
                                (0, c.jsxs)('div', {
                                    className: _.contentTransitionWrap,
                                    children: [
                                        t,
                                        (0, c.jsxs)(N.AdvancedScrollerAuto, {
                                            className: h()(_.contentRegionScroller, v ? _.contentRegionHiddenSidebar : _.contentRegionShownSidebar),
                                            ref: A,
                                            children: [
                                                (0, c.jsx)(g.Provider, {
                                                    value: T.current,
                                                    children: (0, c.jsx)(N.TabBar.Panel, {
                                                        id: i,
                                                        className: h()(_.contentColumn, _[s], { [_.mobileContent]: f.tq }),
                                                        ref: C,
                                                        style: f.tq ? { maxWidth: window.innerWidth } : void 0,
                                                        children: v
                                                            ? n
                                                            : (0, c.jsx)(N.FocusRingScope, {
                                                                  containerRef: C,
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
