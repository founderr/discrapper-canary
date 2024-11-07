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
    h = n(40851),
    g = n(607070),
    v = n(899663),
    S = n(317381),
    I = n(496616),
    _ = n(100527),
    x = n(906732),
    E = n(168551),
    Z = n(597952),
    C = n(628123),
    y = n(686546),
    b = n(80006),
    T = n(151851),
    A = n(587061),
    N = n(392358),
    w = n(314910),
    j = n(892254),
    P = n(706454),
    R = n(210887),
    M = n(740492),
    O = n(451478),
    L = n(358085),
    k = n(998502),
    D = n(473159),
    U = n(928518),
    V = n(981631),
    F = n(388032),
    W = n(25176);
function B(e, t, n) {
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
class G extends (i = a.Component) {
    componentDidMount() {
        let { guestWindow: e } = this.props,
            t = e.document;
        null == t.querySelector('title') && null != t.head && t.head.appendChild(t.createElement('title')), this.updateTitle(), this.updateFontScale(), this.updateLocale(), this.updateClientTheme(), this.updateSaturationFactor(), this.updateForcedColors(), (0, D.O)(e), e.addEventListener('blur', this.handleBlur), t.addEventListener('contextmenu', this.handleContextMenu, !0), e.addEventListener('beforeunload', this.warnPopoutClose);
    }
    componentDidUpdate(e) {
        let { title: t, fontScale: n, locale: i, clientThemesCSS: l } = this.props;
        e.title !== t && this.updateTitle(), e.fontScale !== n && this.updateFontScale(), e.locale !== i && this.updateLocale(), e.clientThemesCSS !== l && this.updateClientTheme(), e.saturation !== this.props.saturation && this.updateSaturationFactor(), (e.forcedColors !== this.props.forcedColors || e.systemForcedColors !== this.props.systemForcedColors) && this.updateForcedColors();
    }
    componentWillUnmount() {
        let { guestWindow: e } = this.props,
            t = e.document;
        e.removeEventListener('blur', this.handleBlur),
            t.removeEventListener('contextmenu', this.handleContextMenu, !0),
            (0, d.j)(() =>
                f.useModalsStore.setState((e) => ({
                    ...e,
                    [f.POPOUT_MODAL_CONTEXT]: []
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
        let l = i.querySelector('style['.concat(E.PQ, ']'));
        if (null != l) {
            l.textContent = e;
            return;
        }
        let a = n.createElement('style');
        a.setAttribute(E.PQ, 'true'), (a.textContent = e), i.appendChild(a);
    }
    updateForcedColors() {
        let { useForcedColors: e, systemForcedColors: t, guestWindow: n } = this.props;
        n.document.documentElement.classList.toggle('disable-forced-colors', !e && 'active' === t);
    }
    render() {
        let { theme: e, forcedColors: t, focused: n, appFocused: i, children: a, windowKey: r, mouseModeEnabled: o, reducedMotionEnabled: c, fontScaleClass: d, withTitleBar: m, guestWindow: g, clientThemesClassName: S, contentClassName: I, appWrapperClassName: _ } = this.props,
            x = (0, L.getPlatform)(),
            E = s()(d, {
                'mouse-mode': o,
                'reduce-motion': c,
                'full-motion': !c,
                'app-focused': n || i
            });
        return (0, l.jsx)(u.VK, {
            children: (0, l.jsx)(
                j.Z,
                {
                    children: (0, l.jsx)(f.ThemeProvider, {
                        theme: e,
                        children: (e) =>
                            (0, l.jsx)(f.RedesignIconContextProvider, {
                                children: (0, l.jsx)('div', {
                                    'data-popout-root': !0,
                                    ref: this.rootRef,
                                    className: s()(e, (0, Z.Z)(), E, S, _),
                                    children: (0, l.jsx)(f.FocusRingScope, {
                                        containerRef: this.rootRef,
                                        children: (0, l.jsx)(v.Z, {
                                            children: (0, l.jsxs)(C.Z, {
                                                children: [
                                                    (0, l.jsx)(y.Co, {}),
                                                    (0, l.jsx)(h.Wu, {
                                                        appContext: V.IlC.POPOUT,
                                                        renderWindow: g,
                                                        children: (0, l.jsxs)(w.yP, {
                                                            children: [
                                                                (0, l.jsxs)('div', {
                                                                    className: W.popout,
                                                                    children: [
                                                                        m && null != x
                                                                            ? (0, l.jsx)(T.Z, {
                                                                                  focused: n,
                                                                                  type: x,
                                                                                  windowKey: r,
                                                                                  macOSFrame: !0
                                                                              })
                                                                            : null,
                                                                        (0, l.jsx)('div', {
                                                                            className: s()(W.content, I),
                                                                            children: a
                                                                        })
                                                                    ]
                                                                }),
                                                                (0, l.jsx)(f.Modals, {}),
                                                                (0, l.jsx)(p.Z, {}),
                                                                (0, l.jsx)(w.Un, {})
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
            B(this, 'rootRef', a.createRef()),
            B(this, '_cleanupWindowActionCreators', void 0),
            B(this, 'warnPopoutClose', (e) => {
                if (this.props.connectedToEmbeddedActivity && !M.ZP.disableEmbeddedActivityPopOutAlert) {
                    if (((e.returnValue = F.intl.string(F.t['bST/Y2'])), !!L.isPlatformEmbedded))
                        (0, I.Z)(() => {
                            U.Z.unmountWindow(this.props.windowKey), L.isPlatformEmbedded && k.ZP.close(this.props.windowKey);
                        });
                }
            }),
            B(this, 'handleBlur', () => {
                var e, t;
                null === (e = (t = this.props).onBlur) || void 0 === e || e.call(t);
            }),
            B(this, 'handleContextMenu', (e) => {
                e.preventDefault();
            });
    }
}
B(G, 'defaultProps', { withTitleBar: !0 });
let z = a.forwardRef(function (e, t) {
    let { guestWindow: n, focused: i } = (0, m.cj)([U.Z], () => ({
        guestWindow: U.Z.getWindow(e.windowKey),
        focused: U.Z.getWindowFocused(e.windowKey)
    }));
    c()(null != n, 'Missing guestWindow reference');
    let a = (0, m.e7)([O.Z], () => O.Z.isFocused()),
        { locale: r, theme: s } = (0, m.cj)([R.Z, P.default], () => ({
            locale: P.default.locale,
            theme: R.Z.theme
        })),
        o = (0, m.e7)([g.Z], () => (g.Z.useForcedColors ? 'yes' : 'no')),
        { accessibilitySettings: u, appWrapperClassName: d } = (0, b.I)(),
        p = (0, m.e7)([S.ZP], () => null != e.channelId && null !== S.ZP.getSelfEmbeddedActivityForChannel(e.channelId));
    (0, A.Z)(n, !1);
    let h = (0, N.Z)(n, i),
        { analyticsLocations: v } = (0, x.ZP)(_.Z.POPOUT_WINDOW),
        { clientThemesClassName: I, clientThemesCSS: Z } = (0, E.ZP)();
    return null == n
        ? null
        : (0, l.jsx)(f.DnDProvider, {
              children: (0, l.jsx)(x.Gt, {
                  value: v,
                  children: (0, l.jsx)(G, {
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
                      mouseModeEnabled: h,
                      reducedMotionEnabled: u.useReducedMotion,
                      connectedToEmbeddedActivity: p,
                      fontScaleClass: u.fontScaleClass,
                      saturation: u.saturation,
                      alwaysShowLinkDecorations: u.alwaysShowLinkDecorations,
                      clientThemesClassName: I,
                      clientThemesCSS: Z,
                      appWrapperClassName: d
                  })
              })
          });
});
t.Z = z;
