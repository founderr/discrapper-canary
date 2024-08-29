n(47120);
var i,
    a = n(735250),
    s = n(470079),
    l = n(120356),
    r = n.n(l),
    o = n(512722),
    c = n.n(o),
    u = n(613828),
    d = n(731965),
    h = n(442837),
    p = n(481060),
    m = n(490173),
    _ = n(40851),
    f = n(607070),
    E = n(899663),
    C = n(317381),
    g = n(496616),
    I = n(100527),
    x = n(906732),
    T = n(168551),
    N = n(597952),
    S = n(628123),
    v = n(686546),
    Z = n(80006),
    A = n(151851),
    M = n(587061),
    b = n(392358),
    R = n(314910),
    L = n(892254),
    j = n(706454),
    O = n(210887),
    P = n(740492),
    y = n(451478),
    D = n(358085),
    k = n(792125),
    U = n(998502),
    w = n(473159),
    B = n(928518),
    H = n(981631),
    G = n(689938),
    V = n(138997);
function F(e, t, n) {
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
class W extends (i = s.Component) {
    componentDidMount() {
        let { guestWindow: e } = this.props,
            t = e.document;
        null == t.querySelector('title') && null != t.head && t.head.appendChild(t.createElement('title')), this.updateTitle(), this.updateFontScale(), this.updateLocale(), this.updateClientTheme(), this.updateSaturationFactor(), this.updateForcedColors(), (0, w.O)(e), e.addEventListener('blur', this.handleBlur), t.addEventListener('contextmenu', this.handleContextMenu, !0), e.addEventListener('beforeunload', this.warnPopoutClose);
    }
    componentDidUpdate(e) {
        let { title: t, fontScale: n, locale: i, clientThemesCSS: a } = this.props;
        e.title !== t && this.updateTitle(), e.fontScale !== n && this.updateFontScale(), e.locale !== i && this.updateLocale(), e.clientThemesCSS !== a && this.updateClientTheme(), e.saturation !== this.props.saturation && this.updateSaturationFactor(), (e.forcedColors !== this.props.forcedColors || e.systemForcedColors !== this.props.systemForcedColors) && this.updateForcedColors();
    }
    componentWillUnmount() {
        let { guestWindow: e } = this.props,
            t = e.document;
        e.removeEventListener('blur', this.handleBlur),
            t.removeEventListener('contextmenu', this.handleContextMenu, !0),
            (0, d.j)(() =>
                p.useModalsStore.setState((e) => ({
                    ...e,
                    [p.POPOUT_MODAL_CONTEXT]: []
                }))
            ),
            e.removeEventListener('beforeunload', this.warnPopoutClose);
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
        let a = i.querySelector('style['.concat(T.PQ, ']'));
        if (null != a) {
            a.textContent = e;
            return;
        }
        let s = n.createElement('style');
        s.setAttribute(T.PQ, 'true'), (s.textContent = e), i.appendChild(s);
    }
    updateForcedColors() {
        let { useForcedColors: e, systemForcedColors: t, guestWindow: n } = this.props;
        n.document.documentElement.classList.toggle('disable-forced-colors', !e && 'active' === t);
    }
    render() {
        let { theme: e, forcedColors: t, focused: n, appFocused: i, children: s, windowKey: l, mouseModeEnabled: o, reducedMotionEnabled: c, fontScaleClass: d, withTitleBar: h, guestWindow: f, clientThemesClassName: C, contentClassName: g, appWrapperClassName: I } = this.props,
            x = (0, D.getPlatform)(),
            T = r()(d, {
                'mouse-mode': o,
                'reduce-motion': c,
                'full-motion': !c,
                'app-focused': n || i
            });
        return (0, a.jsx)(u.VK, {
            children: (0, a.jsx)(
                L.Z,
                {
                    children: (0, a.jsx)(p.ThemeContextProvider, {
                        theme: e,
                        children: (0, a.jsx)(p.RedesignIconContextProvider, {
                            children: (0, a.jsx)('div', {
                                'data-popout-root': !0,
                                ref: this.rootRef,
                                className: r()((0, k.Q)(e), (0, N.Z)(), T, C, I),
                                children: (0, a.jsx)(p.FocusRingScope, {
                                    containerRef: this.rootRef,
                                    children: (0, a.jsx)(E.Z, {
                                        children: (0, a.jsxs)(S.Z, {
                                            children: [
                                                (0, a.jsx)(v.Co, {}),
                                                (0, a.jsx)(_.Wu, {
                                                    appContext: H.IlC.POPOUT,
                                                    renderWindow: f,
                                                    children: (0, a.jsxs)(R.yP, {
                                                        children: [
                                                            (0, a.jsxs)('div', {
                                                                className: V.popout,
                                                                children: [
                                                                    h && null != x
                                                                        ? (0, a.jsx)(A.Z, {
                                                                              focused: n,
                                                                              type: x,
                                                                              windowKey: l,
                                                                              macOSFrame: !0
                                                                          })
                                                                        : null,
                                                                    (0, a.jsx)('div', {
                                                                        className: r()(V.content, g),
                                                                        children: s
                                                                    })
                                                                ]
                                                            }),
                                                            (0, a.jsx)(p.Modals, {}),
                                                            (0, a.jsx)(m.Z, {}),
                                                            (0, a.jsx)(R.Un, {})
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
            F(this, 'rootRef', s.createRef()),
            F(this, '_cleanupWindowActionCreators', void 0),
            F(this, 'warnPopoutClose', (e) => {
                if (this.props.connectedToEmbeddedActivity && !P.ZP.disableEmbeddedActivityPopOutAlert) {
                    if (((e.returnValue = G.Z.Messages.EMBEDDED_ACTIVITIES_ARE_YOU_SURE_WANT_TO_LEAVE), !!D.isPlatformEmbedded))
                        (0, g.Z)(() => {
                            B.Z.unmountWindow(this.props.windowKey), D.isPlatformEmbedded && U.ZP.close(this.props.windowKey);
                        });
                }
            }),
            F(this, 'handleBlur', () => {
                var e, t;
                null === (e = (t = this.props).onBlur) || void 0 === e || e.call(t);
            }),
            F(this, 'handleContextMenu', (e) => {
                e.preventDefault();
            });
    }
}
F(W, 'defaultProps', { withTitleBar: !0 });
let z = s.forwardRef(function (e, t) {
    let { guestWindow: n, focused: i } = (0, h.cj)([B.Z], () => ({
        guestWindow: B.Z.getWindow(e.windowKey),
        focused: B.Z.getWindowFocused(e.windowKey)
    }));
    c()(null != n, 'Missing guestWindow reference');
    let s = (0, h.e7)([y.Z], () => y.Z.isFocused()),
        { locale: l, theme: r } = (0, h.cj)([O.Z, j.default], () => ({
            locale: j.default.locale,
            theme: O.Z.theme
        })),
        o = (0, h.e7)([f.Z], () => (f.Z.useForcedColors ? 'yes' : 'no')),
        { accessibilitySettings: u, appWrapperClassName: d } = (0, Z.I)(),
        m = (0, h.e7)([C.ZP], () => null != e.channelId && null !== C.ZP.getSelfEmbeddedActivityForChannel(e.channelId));
    (0, M.Z)(n, !1);
    let _ = (0, b.Z)(n, i),
        { analyticsLocations: E } = (0, x.ZP)(I.Z.POPOUT_WINDOW),
        { clientThemesClassName: g, clientThemesCSS: N } = (0, T.ZP)();
    return null == n
        ? null
        : (0, a.jsx)(p.DnDProvider, {
              children: (0, a.jsx)(x.Gt, {
                  value: E,
                  children: (0, a.jsx)(W, {
                      ref: t,
                      ...e,
                      guestWindow: n,
                      focused: i,
                      appFocused: s,
                      locale: l,
                      theme: r,
                      forcedColors: o,
                      useForcedColors: u.useForcedColors,
                      systemForcedColors: u.systemForcedColors,
                      fontScale: u.fontScale,
                      keyboardModeEnabled: u.keyboardModeEnabled,
                      mouseModeEnabled: _,
                      reducedMotionEnabled: u.useReducedMotion,
                      connectedToEmbeddedActivity: m,
                      fontScaleClass: u.fontScaleClass,
                      saturation: u.saturation,
                      alwaysShowLinkDecorations: u.alwaysShowLinkDecorations,
                      clientThemesClassName: g,
                      clientThemesCSS: N,
                      appWrapperClassName: d
                  })
              })
          });
});
t.Z = z;
