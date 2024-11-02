n(47120);
var i,
    l = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(512722),
    c = n.n(o),
    u = n(568611),
    d = n(731965),
    h = n(442837),
    m = n(481060),
    p = n(490173),
    f = n(40851),
    g = n(607070),
    C = n(899663),
    x = n(317381),
    v = n(496616),
    _ = n(100527),
    I = n(906732),
    E = n(168551),
    b = n(597952),
    S = n(628123),
    Z = n(686546),
    T = n(80006),
    N = n(151851),
    j = n(587061),
    A = n(392358),
    y = n(314910),
    P = n(892254),
    M = n(706454),
    R = n(210887),
    L = n(740492),
    k = n(451478),
    O = n(358085),
    w = n(998502),
    D = n(473159),
    U = n(928518),
    B = n(981631),
    H = n(388032),
    F = n(661795);
function G(e, t, n) {
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
class V extends (i = r.Component) {
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
                m.useModalsStore.setState((e) => ({
                    ...e,
                    [m.POPOUT_MODAL_CONTEXT]: []
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
        let r = n.createElement('style');
        r.setAttribute(E.PQ, 'true'), (r.textContent = e), i.appendChild(r);
    }
    updateForcedColors() {
        let { useForcedColors: e, systemForcedColors: t, guestWindow: n } = this.props;
        n.document.documentElement.classList.toggle('disable-forced-colors', !e && 'active' === t);
    }
    render() {
        let { theme: e, forcedColors: t, focused: n, appFocused: i, children: r, windowKey: a, mouseModeEnabled: o, reducedMotionEnabled: c, fontScaleClass: d, withTitleBar: h, guestWindow: g, clientThemesClassName: x, contentClassName: v, appWrapperClassName: _ } = this.props,
            I = (0, O.getPlatform)(),
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
                    children: (0, l.jsx)(m.ThemeProvider, {
                        theme: e,
                        children: (e) =>
                            (0, l.jsx)(m.RedesignIconContextProvider, {
                                children: (0, l.jsx)('div', {
                                    'data-popout-root': !0,
                                    ref: this.rootRef,
                                    className: s()(e, (0, b.Z)(), E, x, _),
                                    children: (0, l.jsx)(m.FocusRingScope, {
                                        containerRef: this.rootRef,
                                        children: (0, l.jsx)(C.Z, {
                                            children: (0, l.jsxs)(S.Z, {
                                                children: [
                                                    (0, l.jsx)(Z.Co, {}),
                                                    (0, l.jsx)(f.Wu, {
                                                        appContext: B.IlC.POPOUT,
                                                        renderWindow: g,
                                                        children: (0, l.jsxs)(y.yP, {
                                                            children: [
                                                                (0, l.jsxs)('div', {
                                                                    className: F.popout,
                                                                    children: [
                                                                        h && null != I
                                                                            ? (0, l.jsx)(N.Z, {
                                                                                  focused: n,
                                                                                  type: I,
                                                                                  windowKey: a,
                                                                                  macOSFrame: !0
                                                                              })
                                                                            : null,
                                                                        (0, l.jsx)('div', {
                                                                            className: s()(F.content, v),
                                                                            children: r
                                                                        })
                                                                    ]
                                                                }),
                                                                (0, l.jsx)(m.Modals, {}),
                                                                (0, l.jsx)(p.Z, {}),
                                                                (0, l.jsx)(y.Un, {})
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
            G(this, 'rootRef', r.createRef()),
            G(this, '_cleanupWindowActionCreators', void 0),
            G(this, 'warnPopoutClose', (e) => {
                if (this.props.connectedToEmbeddedActivity && !L.ZP.disableEmbeddedActivityPopOutAlert) {
                    if (((e.returnValue = H.intl.string(H.t['bST/Y2'])), !!O.isPlatformEmbedded))
                        (0, v.Z)(() => {
                            U.Z.unmountWindow(this.props.windowKey), O.isPlatformEmbedded && w.ZP.close(this.props.windowKey);
                        });
                }
            }),
            G(this, 'handleBlur', () => {
                var e, t;
                null === (e = (t = this.props).onBlur) || void 0 === e || e.call(t);
            }),
            G(this, 'handleContextMenu', (e) => {
                e.preventDefault();
            });
    }
}
G(V, 'defaultProps', { withTitleBar: !0 });
let z = r.forwardRef(function (e, t) {
    let { guestWindow: n, focused: i } = (0, h.cj)([U.Z], () => ({
        guestWindow: U.Z.getWindow(e.windowKey),
        focused: U.Z.getWindowFocused(e.windowKey)
    }));
    c()(null != n, 'Missing guestWindow reference');
    let r = (0, h.e7)([k.Z], () => k.Z.isFocused()),
        { locale: a, theme: s } = (0, h.cj)([R.Z, M.default], () => ({
            locale: M.default.locale,
            theme: R.Z.theme
        })),
        o = (0, h.e7)([g.Z], () => (g.Z.useForcedColors ? 'yes' : 'no')),
        { accessibilitySettings: u, appWrapperClassName: d } = (0, T.I)(),
        p = (0, h.e7)([x.ZP], () => null != e.channelId && null !== x.ZP.getSelfEmbeddedActivityForChannel(e.channelId));
    (0, j.Z)(n, !1);
    let f = (0, A.Z)(n, i),
        { analyticsLocations: C } = (0, I.ZP)(_.Z.POPOUT_WINDOW),
        { clientThemesClassName: v, clientThemesCSS: b } = (0, E.ZP)();
    return null == n
        ? null
        : (0, l.jsx)(m.DnDProvider, {
              children: (0, l.jsx)(I.Gt, {
                  value: C,
                  children: (0, l.jsx)(V, {
                      ref: t,
                      ...e,
                      guestWindow: n,
                      focused: i,
                      appFocused: r,
                      locale: a,
                      theme: s,
                      forcedColors: o,
                      useForcedColors: u.useForcedColors,
                      systemForcedColors: u.systemForcedColors,
                      fontScale: u.fontScale,
                      keyboardModeEnabled: u.keyboardModeEnabled,
                      mouseModeEnabled: f,
                      reducedMotionEnabled: u.useReducedMotion,
                      connectedToEmbeddedActivity: p,
                      fontScaleClass: u.fontScaleClass,
                      saturation: u.saturation,
                      alwaysShowLinkDecorations: u.alwaysShowLinkDecorations,
                      clientThemesClassName: v,
                      clientThemesCSS: b,
                      appWrapperClassName: d
                  })
              })
          });
});
t.Z = z;
