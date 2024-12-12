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
    C = n(168551),
    Z = n(597952),
    y = n(628123),
    b = n(686546),
    T = n(80006),
    A = n(151851),
    N = n(587061),
    w = n(392358),
    j = n(540059),
    P = n(314910),
    R = n(892254),
    M = n(706454),
    O = n(210887),
    L = n(740492),
    k = n(451478),
    D = n(358085),
    U = n(62883),
    V = n(998502),
    F = n(473159),
    W = n(928518),
    B = n(981631),
    G = n(388032),
    z = n(81796);
function H(e, t, n) {
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
class Y extends (i = a.Component) {
    componentDidMount() {
        let { guestWindow: e } = this.props,
            t = e.document;
        null == t.querySelector('title') && null != t.head && t.head.appendChild(t.createElement('title')), this.updateTitle(), this.updateFontScale(), this.updateLocale(), this.updateClientTheme(), this.updateSaturationFactor(), this.updateForcedColors(), (0, F.O)(e), e.addEventListener('blur', this.handleBlur), D.isPlatformEmbedded ? t.addEventListener('contextmenu', U.contextMenuCallbackNative, !1) : t.addEventListener('contextmenu', U.contextMenuCallbackWeb, !1), e.addEventListener('beforeunload', this.beforeUnload);
    }
    componentDidUpdate(e) {
        let { title: t, fontScale: n, locale: i, clientThemesCSS: l } = this.props;
        e.title !== t && this.updateTitle(), e.fontScale !== n && this.updateFontScale(), e.locale !== i && this.updateLocale(), e.clientThemesCSS !== l && this.updateClientTheme(), e.saturation !== this.props.saturation && this.updateSaturationFactor(), (e.forcedColors !== this.props.forcedColors || e.systemForcedColors !== this.props.systemForcedColors) && this.updateForcedColors();
    }
    componentWillUnmount() {
        let { guestWindow: e } = this.props,
            t = e.document;
        e.removeEventListener('blur', this.handleBlur),
            D.isPlatformEmbedded ? t.removeEventListener('contextmenu', U.contextMenuCallbackNative) : t.removeEventListener('contextmenu', U.contextMenuCallbackWeb),
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
        let l = i.querySelector('style['.concat(C.PQ, ']'));
        if (null != l) {
            l.textContent = e;
            return;
        }
        let a = n.createElement('style');
        a.setAttribute(C.PQ, 'true'), (a.textContent = e), i.appendChild(a);
    }
    updateForcedColors() {
        let { useForcedColors: e, systemForcedColors: t, guestWindow: n } = this.props;
        n.document.documentElement.classList.toggle('disable-forced-colors', !e && 'active' === t);
    }
    render() {
        let { theme: e, forcedColors: t, focused: n, appFocused: i, children: a, windowKey: r, isRefreshEnabled: o, mouseModeEnabled: c, reducedMotionEnabled: d, fontScaleClass: m, withTitleBar: h, guestWindow: S, clientThemesClassName: I, contentClassName: _, appWrapperClassName: x } = this.props,
            E = (0, D.getPlatform)(),
            C = s()(m, {
                'mouse-mode': c,
                'reduce-motion': d,
                'full-motion': !d,
                'app-focused': n || i,
                'visual-refresh': o
            });
        return (0, l.jsx)(u.VK, {
            children: (0, l.jsx)(
                R.Z,
                {
                    children: (0, l.jsx)(f.ThemeProvider, {
                        theme: e,
                        children: (e) =>
                            (0, l.jsx)(f.RedesignIconContextProvider, {
                                children: (0, l.jsx)('div', {
                                    'data-popout-root': !0,
                                    ref: this.rootRef,
                                    className: s()(e, (0, Z.Z)(), C, I, x),
                                    children: (0, l.jsx)(f.FocusRingScope, {
                                        containerRef: this.rootRef,
                                        children: (0, l.jsx)(v.Z, {
                                            children: (0, l.jsxs)(y.Z, {
                                                children: [
                                                    (0, l.jsx)(b.Co, {}),
                                                    (0, l.jsx)(g.Wu, {
                                                        appContext: B.IlC.POPOUT,
                                                        renderWindow: S,
                                                        children: (0, l.jsxs)(P.yP, {
                                                            children: [
                                                                (0, l.jsxs)('div', {
                                                                    className: z.popout,
                                                                    children: [
                                                                        h && null != E
                                                                            ? (0, l.jsx)(A.Z, {
                                                                                  focused: n,
                                                                                  type: E,
                                                                                  windowKey: r,
                                                                                  macOSFrame: !0
                                                                              })
                                                                            : null,
                                                                        (0, l.jsx)('div', {
                                                                            className: s()(z.content, _),
                                                                            children: a
                                                                        })
                                                                    ]
                                                                }),
                                                                (0, l.jsx)(f.Modals, {}),
                                                                (0, l.jsx)(p.Z, {}),
                                                                (0, l.jsx)(P.Un, {})
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
            H(this, 'rootRef', a.createRef()),
            H(this, '_cleanupWindowActionCreators', void 0),
            H(this, 'beforeUnload', (e) => {
                let t = () => {
                    W.Z.unmountWindow(this.props.windowKey), D.isPlatformEmbedded && V.ZP.close(this.props.windowKey);
                };
                if (this.props.connectedToEmbeddedActivity && !L.ZP.disableEmbeddedActivityPopOutAlert) {
                    if (!D.isPlatformEmbedded) return;
                    (0, S.R)()
                        ? t()
                        : ((e.returnValue = G.intl.string(G.t['bST/Y2'])),
                          (0, _.Z)(() => {
                              t();
                          }));
                } else t();
            }),
            H(this, 'handleBlur', () => {
                var e, t;
                null === (e = (t = this.props).onBlur) || void 0 === e || e.call(t);
            });
    }
}
H(Y, 'defaultProps', { withTitleBar: !0 });
let J = a.forwardRef(function (e, t) {
    let { guestWindow: n, focused: i } = (0, m.cj)([W.Z], () => ({
        guestWindow: W.Z.getWindow(e.windowKey),
        focused: W.Z.getWindowFocused(e.windowKey)
    }));
    c()(null != n, 'Missing guestWindow reference');
    let a = (0, j.Q3)('PopoutWindow'),
        r = (0, m.e7)([k.Z], () => k.Z.isFocused()),
        { locale: s, theme: o } = (0, m.cj)([O.Z, M.default], () => ({
            locale: M.default.locale,
            theme: O.Z.theme
        })),
        u = (0, m.e7)([h.Z], () => (h.Z.useForcedColors ? 'yes' : 'no')),
        { accessibilitySettings: d, appWrapperClassName: p } = (0, T.I)(),
        g = (0, m.e7)([I.ZP], () => null != e.channelId && null !== I.ZP.getSelfEmbeddedActivityForChannel(e.channelId));
    (0, N.Z)(n, !1);
    let v = (0, w.Z)(n, i),
        { analyticsLocations: S } = (0, E.ZP)(x.Z.POPOUT_WINDOW),
        { clientThemesClassName: _, clientThemesCSS: Z } = (0, C.ZP)();
    return null == n
        ? null
        : (0, l.jsx)(f.DnDProvider, {
              children: (0, l.jsx)(E.Gt, {
                  value: S,
                  children: (0, l.jsx)(Y, {
                      ref: t,
                      ...e,
                      guestWindow: n,
                      focused: i,
                      appFocused: r,
                      locale: s,
                      theme: o,
                      forcedColors: u,
                      useForcedColors: d.useForcedColors,
                      systemForcedColors: d.systemForcedColors,
                      fontScale: d.fontScale,
                      keyboardModeEnabled: d.keyboardModeEnabled,
                      mouseModeEnabled: v,
                      reducedMotionEnabled: d.useReducedMotion,
                      connectedToEmbeddedActivity: g,
                      fontScaleClass: d.fontScaleClass,
                      saturation: d.saturation,
                      alwaysShowLinkDecorations: d.alwaysShowLinkDecorations,
                      clientThemesClassName: _,
                      clientThemesCSS: Z,
                      appWrapperClassName: p,
                      isRefreshEnabled: a
                  })
              })
          });
});
t.Z = J;
