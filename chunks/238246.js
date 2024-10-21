n(47120);
var i,
    s = n(200651),
    a = n(192379),
    l = n(120356),
    r = n.n(l),
    o = n(512722),
    c = n.n(o),
    u = n(568611),
    d = n(731965),
    h = n(442837),
    p = n(481060),
    m = n(490173),
    _ = n(40851),
    f = n(607070),
    E = n(899663),
    g = n(317381),
    C = n(496616),
    I = n(100527),
    T = n(906732),
    x = n(168551),
    v = n(597952),
    S = n(628123),
    N = n(686546),
    A = n(80006),
    Z = n(151851),
    M = n(587061),
    b = n(392358),
    R = n(314910),
    L = n(892254),
    j = n(706454),
    P = n(210887),
    O = n(740492),
    y = n(451478),
    D = n(358085),
    U = n(998502),
    k = n(473159),
    w = n(928518),
    B = n(981631),
    H = n(689938),
    G = n(661795);
function V(e, t, n) {
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
class F extends (i = a.Component) {
    componentDidMount() {
        let { guestWindow: e } = this.props,
            t = e.document;
        null == t.querySelector('title') && null != t.head && t.head.appendChild(t.createElement('title')), this.updateTitle(), this.updateFontScale(), this.updateLocale(), this.updateClientTheme(), this.updateSaturationFactor(), this.updateForcedColors(), (0, k.O)(e), e.addEventListener('blur', this.handleBlur), t.addEventListener('contextmenu', this.handleContextMenu, !0), e.addEventListener('beforeunload', this.warnPopoutClose);
    }
    componentDidUpdate(e) {
        let { title: t, fontScale: n, locale: i, clientThemesCSS: s } = this.props;
        e.title !== t && this.updateTitle(), e.fontScale !== n && this.updateFontScale(), e.locale !== i && this.updateLocale(), e.clientThemesCSS !== s && this.updateClientTheme(), e.saturation !== this.props.saturation && this.updateSaturationFactor(), (e.forcedColors !== this.props.forcedColors || e.systemForcedColors !== this.props.systemForcedColors) && this.updateForcedColors();
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
        let s = i.querySelector('style['.concat(x.PQ, ']'));
        if (null != s) {
            s.textContent = e;
            return;
        }
        let a = n.createElement('style');
        a.setAttribute(x.PQ, 'true'), (a.textContent = e), i.appendChild(a);
    }
    updateForcedColors() {
        let { useForcedColors: e, systemForcedColors: t, guestWindow: n } = this.props;
        n.document.documentElement.classList.toggle('disable-forced-colors', !e && 'active' === t);
    }
    render() {
        let { theme: e, forcedColors: t, focused: n, appFocused: i, children: a, windowKey: l, mouseModeEnabled: o, reducedMotionEnabled: c, fontScaleClass: d, withTitleBar: h, guestWindow: f, clientThemesClassName: g, contentClassName: C, appWrapperClassName: I } = this.props,
            T = (0, D.getPlatform)(),
            x = r()(d, {
                'mouse-mode': o,
                'reduce-motion': c,
                'full-motion': !c,
                'app-focused': n || i
            });
        return (0, s.jsx)(u.VK, {
            children: (0, s.jsx)(
                L.Z,
                {
                    children: (0, s.jsx)(p.ThemeProvider, {
                        theme: e,
                        children: (e) =>
                            (0, s.jsx)(p.RedesignIconContextProvider, {
                                children: (0, s.jsx)('div', {
                                    'data-popout-root': !0,
                                    ref: this.rootRef,
                                    className: r()(e, (0, v.Z)(), x, g, I),
                                    children: (0, s.jsx)(p.FocusRingScope, {
                                        containerRef: this.rootRef,
                                        children: (0, s.jsx)(E.Z, {
                                            children: (0, s.jsxs)(S.Z, {
                                                children: [
                                                    (0, s.jsx)(N.Co, {}),
                                                    (0, s.jsx)(_.Wu, {
                                                        appContext: B.IlC.POPOUT,
                                                        renderWindow: f,
                                                        children: (0, s.jsxs)(R.yP, {
                                                            children: [
                                                                (0, s.jsxs)('div', {
                                                                    className: G.popout,
                                                                    children: [
                                                                        h && null != T
                                                                            ? (0, s.jsx)(Z.Z, {
                                                                                  focused: n,
                                                                                  type: T,
                                                                                  windowKey: l,
                                                                                  macOSFrame: !0
                                                                              })
                                                                            : null,
                                                                        (0, s.jsx)('div', {
                                                                            className: r()(G.content, C),
                                                                            children: a
                                                                        })
                                                                    ]
                                                                }),
                                                                (0, s.jsx)(p.Modals, {}),
                                                                (0, s.jsx)(m.Z, {}),
                                                                (0, s.jsx)(R.Un, {})
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
            V(this, 'rootRef', a.createRef()),
            V(this, '_cleanupWindowActionCreators', void 0),
            V(this, 'warnPopoutClose', (e) => {
                if (this.props.connectedToEmbeddedActivity && !O.ZP.disableEmbeddedActivityPopOutAlert) {
                    if (((e.returnValue = H.Z.Messages.EMBEDDED_ACTIVITIES_ARE_YOU_SURE_WANT_TO_LEAVE), !!D.isPlatformEmbedded))
                        (0, C.Z)(() => {
                            w.Z.unmountWindow(this.props.windowKey), D.isPlatformEmbedded && U.ZP.close(this.props.windowKey);
                        });
                }
            }),
            V(this, 'handleBlur', () => {
                var e, t;
                null === (e = (t = this.props).onBlur) || void 0 === e || e.call(t);
            }),
            V(this, 'handleContextMenu', (e) => {
                e.preventDefault();
            });
    }
}
V(F, 'defaultProps', { withTitleBar: !0 });
let W = a.forwardRef(function (e, t) {
    let { guestWindow: n, focused: i } = (0, h.cj)([w.Z], () => ({
        guestWindow: w.Z.getWindow(e.windowKey),
        focused: w.Z.getWindowFocused(e.windowKey)
    }));
    c()(null != n, 'Missing guestWindow reference');
    let a = (0, h.e7)([y.Z], () => y.Z.isFocused()),
        { locale: l, theme: r } = (0, h.cj)([P.Z, j.default], () => ({
            locale: j.default.locale,
            theme: P.Z.theme
        })),
        o = (0, h.e7)([f.Z], () => (f.Z.useForcedColors ? 'yes' : 'no')),
        { accessibilitySettings: u, appWrapperClassName: d } = (0, A.I)(),
        m = (0, h.e7)([g.ZP], () => null != e.channelId && null !== g.ZP.getSelfEmbeddedActivityForChannel(e.channelId));
    (0, M.Z)(n, !1);
    let _ = (0, b.Z)(n, i),
        { analyticsLocations: E } = (0, T.ZP)(I.Z.POPOUT_WINDOW),
        { clientThemesClassName: C, clientThemesCSS: v } = (0, x.ZP)();
    return null == n
        ? null
        : (0, s.jsx)(p.DnDProvider, {
              children: (0, s.jsx)(T.Gt, {
                  value: E,
                  children: (0, s.jsx)(F, {
                      ref: t,
                      ...e,
                      guestWindow: n,
                      focused: i,
                      appFocused: a,
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
                      clientThemesClassName: C,
                      clientThemesCSS: v,
                      appWrapperClassName: d
                  })
              })
          });
});
t.Z = W;
