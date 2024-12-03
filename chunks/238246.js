n(47120);
var i,
    l = n(200651),
    a = n(192379),
    r = n(120356),
    s = n.n(r),
    o = n(512722),
    c = n.n(o),
    u = n(568611),
    d = n(731965),
    m = n(442837),
    f = n(481060),
    p = n(490173),
    g = n(40851),
    h = n(607070),
    v = n(899663),
    S = n(636449),
    I = n(317381),
    _ = n(496616),
    x = n(100527),
    E = n(906732),
    Z = n(168551),
    C = n(597952),
    y = n(628123),
    b = n(686546),
    T = n(80006),
    A = n(151851),
    N = n(587061),
    w = n(392358),
    j = n(314910),
    P = n(892254),
    R = n(706454),
    M = n(210887),
    O = n(740492),
    L = n(451478),
    k = n(358085),
    D = n(62883),
    U = n(998502),
    V = n(473159),
    F = n(928518),
    W = n(981631),
    B = n(388032),
    G = n(81796);
function z(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class H extends (i = a.Component) {
    componentDidMount() {
        let { guestWindow: e } = this.props,
            t = e.document;
        null == t.querySelector('title') && null != t.head && t.head.appendChild(t.createElement('title')), this.updateTitle(), this.updateFontScale(), this.updateLocale(), this.updateClientTheme(), this.updateSaturationFactor(), this.updateForcedColors(), (0, V.O)(e), e.addEventListener('blur', this.handleBlur), k.isPlatformEmbedded ? t.addEventListener('contextmenu', D.contextMenuCallbackNative, !1) : t.addEventListener('contextmenu', D.contextMenuCallbackWeb, !1), e.addEventListener('beforeunload', this.beforeUnload);
    }
    componentDidUpdate(e) {
        let { title: t, fontScale: n, locale: i, clientThemesCSS: l } = this.props;
        e.title !== t && this.updateTitle(), e.fontScale !== n && this.updateFontScale(), e.locale !== i && this.updateLocale(), e.clientThemesCSS !== l && this.updateClientTheme(), e.saturation !== this.props.saturation && this.updateSaturationFactor(), (e.forcedColors !== this.props.forcedColors || e.systemForcedColors !== this.props.systemForcedColors) && this.updateForcedColors();
    }
    componentWillUnmount() {
        let { guestWindow: e } = this.props,
            t = e.document;
        e.removeEventListener('blur', this.handleBlur),
            k.isPlatformEmbedded ? t.removeEventListener('contextmenu', D.contextMenuCallbackNative) : t.removeEventListener('contextmenu', D.contextMenuCallbackWeb),
            (0, d.j)(() =>
                f.useModalsStore.setState((e) => ({
                    ...e,
                    [f.POPOUT_MODAL_CONTEXT]: []
                }))
            ),
            e.removeEventListener('beforeunload', this.beforeUnload);
    }
    updateSaturationFactor() {
        let { saturation: e, guestWindow: t } = this.props,
            n = t.document.documentElement;
        c()(null != n, 'Window document element was null'), n.style.setProperty('--saturation-factor', e.toString());
    }
    updateLocale() {
        let { locale: e, guestWindow: t } = this.props,
            n = t.document.documentElement;
        c()(null != n, 'Window document element was null'), (n.lang = e);
    }
    updateTitle() {
        let { title: e, guestWindow: t } = this.props,
            n = t.document.querySelector('title');
        null != n && (n.innerText = e);
    }
    updateFontScale() {
        let { fontScale: e, guestWindow: t } = this.props,
            n = t.document.documentElement;
        c()(null != n, 'Window document element was null'), (n.style.fontSize = ''.concat(e, '%'));
    }
    updateClientTheme() {
        let { clientThemesCSS: e, guestWindow: t } = this.props,
            n = t.document,
            i = (0, n.head);
        c()(null != i, 'Window document '.concat('head', ' was null'));
        let l = i.querySelector('style['.concat(Z.PQ, ']'));
        if (null != l) {
            l.textContent = e;
            return;
        }
        let a = n.createElement('style');
        a.setAttribute(Z.PQ, 'true'), (a.textContent = e), i.appendChild(a);
    }
    updateForcedColors() {
        let { useForcedColors: e, systemForcedColors: t, guestWindow: n } = this.props;
        n.document.documentElement.classList.toggle('disable-forced-colors', !e && 'active' === t);
    }
    render() {
        let { theme: e, forcedColors: t, focused: n, appFocused: i, children: a, windowKey: r, mouseModeEnabled: o, reducedMotionEnabled: c, fontScaleClass: d, withTitleBar: m, guestWindow: h, clientThemesClassName: S, contentClassName: I, appWrapperClassName: _ } = this.props,
            x = (0, k.getPlatform)(),
            E = s()(d, {
                'mouse-mode': o,
                'reduce-motion': c,
                'full-motion': !c,
                'app-focused': n || i
            });
        return (0, l.jsx)(u.VK, {
            children: (0, l.jsx)(
                P.Z,
                {
                    children: (0, l.jsx)(f.ThemeProvider, {
                        theme: e,
                        children: (e) =>
                            (0, l.jsx)(f.RedesignIconContextProvider, {
                                children: (0, l.jsx)('div', {
                                    'data-popout-root': !0,
                                    ref: this.rootRef,
                                    className: s()(e, (0, C.Z)(), E, S, _),
                                    children: (0, l.jsx)(f.FocusRingScope, {
                                        containerRef: this.rootRef,
                                        children: (0, l.jsx)(v.Z, {
                                            children: (0, l.jsxs)(y.Z, {
                                                children: [
                                                    (0, l.jsx)(b.Co, {}),
                                                    (0, l.jsx)(g.Wu, {
                                                        appContext: W.IlC.POPOUT,
                                                        renderWindow: h,
                                                        children: (0, l.jsxs)(j.yP, {
                                                            children: [
                                                                (0, l.jsxs)('div', {
                                                                    className: G.popout,
                                                                    children: [
                                                                        m && null != x
                                                                            ? (0, l.jsx)(A.Z, {
                                                                                  focused: n,
                                                                                  type: x,
                                                                                  windowKey: r,
                                                                                  macOSFrame: !0
                                                                              })
                                                                            : null,
                                                                        (0, l.jsx)('div', {
                                                                            className: s()(G.content, I),
                                                                            children: a
                                                                        })
                                                                    ]
                                                                }),
                                                                (0, l.jsx)(f.Modals, {}),
                                                                (0, l.jsx)(p.Z, {}),
                                                                (0, l.jsx)(j.Un, {})
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            })
                    })
                },
                t
            )
        });
    }
    constructor(...e) {
        super(...e),
            z(this, 'rootRef', a.createRef()),
            z(this, '_cleanupWindowActionCreators', void 0),
            z(this, 'beforeUnload', (e) => {
                let t = () => {
                    F.Z.unmountWindow(this.props.windowKey), k.isPlatformEmbedded && U.ZP.close(this.props.windowKey);
                };
                if (this.props.connectedToEmbeddedActivity && !O.ZP.disableEmbeddedActivityPopOutAlert) {
                    if (!k.isPlatformEmbedded) return;
                    (0, S.R)()
                        ? t()
                        : ((e.returnValue = B.intl.string(B.t['bST/Y2'])),
                          (0, _.Z)(() => {
                              t();
                          }));
                } else t();
            }),
            z(this, 'handleBlur', () => {
                var e, t;
                null === (e = (t = this.props).onBlur) || void 0 === e || e.call(t);
            });
    }
}
z(H, 'defaultProps', { withTitleBar: !0 });
let Y = a.forwardRef(function (e, t) {
    let { guestWindow: n, focused: i } = (0, m.cj)([F.Z], () => ({
        guestWindow: F.Z.getWindow(e.windowKey),
        focused: F.Z.getWindowFocused(e.windowKey)
    }));
    c()(null != n, 'Missing guestWindow reference');
    let a = (0, m.e7)([L.Z], () => L.Z.isFocused()),
        { locale: r, theme: s } = (0, m.cj)([M.Z, R.default], () => ({
            locale: R.default.locale,
            theme: M.Z.theme
        })),
        o = (0, m.e7)([h.Z], () => (h.Z.useForcedColors ? 'yes' : 'no')),
        { accessibilitySettings: u, appWrapperClassName: d } = (0, T.I)(),
        p = (0, m.e7)([I.ZP], () => null != e.channelId && null !== I.ZP.getSelfEmbeddedActivityForChannel(e.channelId));
    (0, N.Z)(n, !1);
    let g = (0, w.Z)(n, i),
        { analyticsLocations: v } = (0, E.ZP)(x.Z.POPOUT_WINDOW),
        { clientThemesClassName: S, clientThemesCSS: _ } = (0, Z.ZP)();
    return null == n
        ? null
        : (0, l.jsx)(f.DnDProvider, {
              children: (0, l.jsx)(E.Gt, {
                  value: v,
                  children: (0, l.jsx)(H, {
                      ref: t,
                      ...e,
                      guestWindow: n,
                      focused: i,
                      appFocused: a,
                      locale: r,
                      theme: s,
                      forcedColors: o,
                      useForcedColors: u.useForcedColors,
                      systemForcedColors: u.systemForcedColors,
                      fontScale: u.fontScale,
                      keyboardModeEnabled: u.keyboardModeEnabled,
                      mouseModeEnabled: g,
                      reducedMotionEnabled: u.useReducedMotion,
                      connectedToEmbeddedActivity: p,
                      fontScaleClass: u.fontScaleClass,
                      saturation: u.saturation,
                      alwaysShowLinkDecorations: u.alwaysShowLinkDecorations,
                      clientThemesClassName: S,
                      clientThemesCSS: _,
                      appWrapperClassName: d
                  })
              })
          });
});
t.Z = Y;
