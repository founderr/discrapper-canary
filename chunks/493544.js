n.d(t, {
    ID: function () {
        return C;
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
    g = n(792125),
    N = n(425493),
    j = n(326617);
let C = {
        HEADER: 'HEADER',
        DIVIDER: 'DIVIDER',
        CUSTOM: 'CUSTOM'
    },
    P = u.createContext(null);
class T extends (o = u.PureComponent) {
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
function E(e) {
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
function R(e) {
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
                      children: (0, c.jsx)(N.Z, {
                          className: h()({ [j.mobileToolsCloseIcon]: t }),
                          closeAction: i,
                          keybind: 'ESC'
                      })
                  })
              })
          });
}
t.ZP = function (e) {
    let { sidebar: t, content: n, notice: i, section: s, closeAction: l, sidebarTheme: r, contentType: o, scrollerRef: a, mobileSidebarOpen: d, toggleSidebar: x, hideSidebar: N = !1 } = e,
        C = u.useRef(null),
        T = u.useRef(null),
        E = (0, v.Z)(s),
        I = (0, S.useTransition)(
            N,
            {
                from: {
                    position: 'absolute',
                    opacity: 0
                },
                enter: { opacity: 1 },
                reverse: N,
                config: m.config.stiff
            },
            'animate-always'
        ),
        A = u.useCallback(
            (e) => {
                (C.current = e), null != a && (a.current = e);
            },
            [a]
        );
    u.useLayoutEffect(() => {
        null != C.current && E !== s && C.current.scrollTo({ to: 0 });
    }, [s, E, C]);
    let Z = (0, c.jsx)(R, {
        isMobile: f.tq,
        mobileSidebarOpen: d,
        closeAction: l
    });
    function O() {
        return null == i
            ? null
            : (0, c.jsx)(
                  S.SlideIn,
                  {
                      className: h()(j.noticeRegion, { [j.noticeRegionHiddenSidebar]: N }),
                      children: i
                  },
                  s
              );
    }
    return (0, c.jsx)(c.Fragment, {
        children: I((e, i) =>
            (0, c.jsxs)(m.animated.div, {
                style: e,
                className: j.standardSidebarView,
                children: [
                    !i &&
                        (null == t
                            ? null
                            : (0, c.jsx)('div', {
                                  className: h()(j.sidebarRegion, (0, g.Q)(r), {
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
                                                      children: Z
                                                  }),
                                              t
                                          ]
                                      })
                                  })
                              })),
                    (function () {
                        let e = null != x && null != l && d,
                            t =
                                f.tq &&
                                (0, c.jsxs)('div', {
                                    className: h()(j.mobileContentHeader, { [j.hideHamburger]: !e }),
                                    children: [e && (0, c.jsx)(p.r, { onClick: x }), Z]
                                });
                        if ('custom' === o)
                            return (0, c.jsxs)(b.W, {
                                component: 'div',
                                className: j.contentRegion,
                                children: [t, n, !f.tq && Z, O()]
                            });
                        let i = y[null != o ? o : 'default'];
                        return (0, c.jsxs)(b.W, {
                            component: 'div',
                            className: h()(j.contentRegion, { [j.hidden]: f.tq && !0 === d }),
                            children: [
                                (0, c.jsxs)('div', {
                                    className: j.contentTransitionWrap,
                                    children: [
                                        t,
                                        (0, c.jsxs)(S.AdvancedScrollerAuto, {
                                            className: h()(j.contentRegionScroller, N ? j.contentRegionHiddenSidebar : j.contentRegionShownSidebar),
                                            ref: A,
                                            children: [
                                                (0, c.jsx)(P.Provider, {
                                                    value: C.current,
                                                    children: (0, c.jsx)(S.TabBar.Panel, {
                                                        id: s,
                                                        className: h()(j.contentColumn, j[i], { [j.mobileContent]: f.tq }),
                                                        ref: T,
                                                        style: f.tq ? { maxWidth: window.innerWidth } : void 0,
                                                        children: N
                                                            ? n
                                                            : (0, c.jsx)(S.FocusRingScope, {
                                                                  containerRef: T,
                                                                  children: n
                                                              })
                                                    })
                                                }),
                                                !f.tq && Z
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
