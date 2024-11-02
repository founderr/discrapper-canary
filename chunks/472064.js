n.r(e), n(47120), n(411104);
var l = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    r = n(570140),
    o = n(57513),
    c = n(689241),
    h = n(447273),
    d = n(51025),
    u = n(672971),
    p = n(812206),
    m = n(600164),
    f = n(925329),
    A = n(703656),
    I = n(173747),
    g = n(850840),
    T = n(391690),
    v = n(424218),
    b = n(94692),
    P = n(981631),
    N = n(388032),
    x = n(522222);
function L(t, e, n) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = n),
        t
    );
}
class C extends i.Component {
    fetchInstallSize() {
        let { applicationId: t, branchId: e, buildId: n, manifestIds: l, buildSizeKB: i } = this.props;
        null != n &&
            null != l &&
            null == i &&
            r.Z.wait(() => {
                (0, c.q)(t, e, n, l);
            });
    }
    componentDidMount() {
        let { applicationId: t, branchId: e, buildId: n, manifestIds: l } = this.props;
        null == n || null == l ? (0, o.l)(t, e) : this.fetchInstallSize();
    }
    componentDidUpdate(t) {
        (this.props.buildId !== t.buildId || this.props.manifestIds !== t.manifestIds) && this.fetchInstallSize();
    }
    componentWillUnmount() {
        this.isUnmounted = !0;
    }
    renderButton() {
        let { buildId: t } = this.props,
            { hasError: e, hasAcceptedNeccessaryTerms: n } = this.state;
        return (0, l.jsx)(a.Button, {
            disabled: e || null == t || !n,
            color: a.Button.Colors.GREEN,
            onClick: this.handleInstall,
            children: N.intl.string(N.t.nL0WvL)
        });
    }
    render() {
        let { application: t, buildSizeKB: e, transitionState: n } = this.props,
            { selectedInstallationPath: i, isInstalling: s } = this.state,
            r = null != t && t.getSplashURL(440);
        return (0, l.jsxs)(a.ModalRoot, {
            transitionState: n,
            size: a.ModalSize.SMALL,
            'aria-label': N.intl.string(N.t.PphjtL),
            children: [
                null != r
                    ? (0, l.jsx)('div', {
                          className: x.splash,
                          style: { backgroundImage: 'url('.concat(r, ')') }
                      })
                    : null,
                (0, l.jsxs)(a.ModalHeader, {
                    justify: m.Z.Justify.BETWEEN,
                    children: [
                        (0, l.jsx)(m.Z.Child, {
                            grow: 1,
                            children: (0, l.jsx)(a.Heading, {
                                variant: 'heading-lg/semibold',
                                children: N.intl.string(N.t.PphjtL)
                            })
                        }),
                        (0, l.jsx)(m.Z.Child, {
                            grow: 0,
                            children: (0, l.jsx)(a.ModalCloseButton, { onClick: this.close })
                        })
                    ]
                }),
                (0, l.jsxs)(a.ModalContent, {
                    children: [
                        (0, l.jsxs)(m.Z, {
                            align: m.Z.Align.CENTER,
                            children: [
                                (0, l.jsx)(f.Z, {
                                    game: t,
                                    size: f.Z.Sizes.MEDIUM,
                                    className: x.gameIcon
                                }),
                                (0, l.jsx)('div', {
                                    className: x.gameName,
                                    children: null != t && t.name
                                }),
                                null != e
                                    ? (0, l.jsx)('div', {
                                          className: x.installSize,
                                          children: (0, v.BU)(e, { useKibibytes: !0 })
                                      })
                                    : null
                            ]
                        }),
                        (0, l.jsx)('div', { className: x.divider }),
                        (0, l.jsx)(b.Z, {
                            autoFocus: !0,
                            className: x.selector,
                            value: i,
                            requiredDiskKB: e,
                            onChange: this.handleChangePath
                        }),
                        (0, l.jsx)(u.Z, {
                            eulaId: t.eulaId,
                            applicationName: t.name,
                            disabled: s,
                            onChange: this.handlePurchaseTermsChange,
                            className: x.terms
                        })
                    ]
                }),
                (0, l.jsx)(a.ModalFooter, { children: this.renderButton() })
            ]
        });
    }
    constructor(...t) {
        super(...t),
            L(this, 'state', {
                selectedInstallationPath: this.props.defaultInstallationPath,
                hasError: !1,
                isInstalling: !1,
                hasAcceptedNeccessaryTerms: !1
            }),
            L(this, 'isUnmounted', !1),
            L(this, 'handleChangePath', (t, e) => {
                this.setState({
                    selectedInstallationPath: t,
                    hasError: e
                });
            }),
            L(this, 'install', (t, e) => {
                let { application: n, branchId: l, analyticsLocation: i } = this.props;
                if (null == n) return null;
                (0, d.LO)({
                    application: n,
                    branchId: l,
                    buildId: t,
                    manifestIds: e,
                    installationPath: this.state.selectedInstallationPath,
                    analyticsLocation: i
                }),
                    (0, A.uL)(P.Z5c.APPLICATION_LIBRARY),
                    this.close();
            }),
            L(this, 'handleInstall', () => {
                let { application: t, buildId: e, manifestIds: n, hasPreviouslyAcceptedStoreTerms: l } = this.props;
                if (null != e && null != n) !l && (0, h.B)(), null != t && null != t.eulaId && (0, h.D)(t.eulaId), this.install(e, n);
                else throw Error('Unexpected missing build info for non-premium product');
            }),
            L(this, 'handlePurchaseTermsChange', (t) => {
                this.setState({ hasAcceptedNeccessaryTerms: t });
            }),
            L(this, 'close', () => {
                this.props.onClose();
            });
    }
}
e.default = s.ZP.connectStores([I.Z, T.Z, g.Z, p.Z], (t) => {
    let { applicationId: e, branchId: n } = t,
        l = I.Z.getTargetBuildId(e, n);
    return {
        application: p.Z.getApplication(e),
        defaultInstallationPath: T.Z.defaultInstallationPath,
        buildId: l,
        manifestIds: I.Z.getTargetManifests(e, n),
        buildSizeKB: null != l ? I.Z.getBuildSize(l) : null,
        hasPreviouslyAcceptedStoreTerms: g.Z.hasAcceptedStoreTerms
    };
})(C);
