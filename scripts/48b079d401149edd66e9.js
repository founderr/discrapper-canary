(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["94216"], {
        310013: function(e, t, l) {
            "use strict";
            var s = {
                    childContextTypes: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                a = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    arguments: !0,
                    arity: !0
                },
                n = "function" == typeof Object.getOwnPropertySymbols;
            e.exports = function(e, t, l) {
                if ("string" != typeof t) {
                    var i = Object.getOwnPropertyNames(t);
                    n && (i = i.concat(Object.getOwnPropertySymbols(t)));
                    for (var r = 0; r < i.length; ++r)
                        if (!s[i[r]] && !a[i[r]] && (!l || !l[i[r]])) try {
                            e[i[r]] = t[i[r]]
                        } catch (e) {}
                }
                return e
            }
        },
        229806: function(e, t, l) {
            "use strict";
            e.exports = l.p + "6cc337af6e577789bc25.svg"
        },
        654125: function(e, t, l) {
            "use strict";
            e.exports = l.p + "b45b4145db9ac11e2381.svg"
        },
        108647: function(e, t, l) {
            "use strict";
            e.exports = l.p + "ca2118f52077f527edd7.svg"
        },
        943005: function(e, t, l) {
            "use strict";
            e.exports = l.p + "b02c644f3c87d8b5aea8.svg"
        },
        872957: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                fetchBuildSize: function() {
                    return r
                }
            });
            var s = l("872717"),
                a = l("913144"),
                n = l("677225"),
                i = l("49111");
            async function r(e, t, l, r) {
                if (n.default.needsToFetchBuildSize(l)) {
                    a.default.dispatch({
                        type: "APPLICATION_BUILD_SIZE_FETCH_START",
                        buildId: l
                    });
                    try {
                        let n = await s.default.post({
                            url: i.Endpoints.APPLICATION_BUILD_SIZE(e, t, l),
                            body: {
                                manifest_ids: r
                            },
                            oldFormErrors: !0
                        });
                        a.default.dispatch({
                            type: "APPLICATION_BUILD_SIZE_FETCH_SUCCESS",
                            buildId: l,
                            sizeKB: n.body.size_kb
                        })
                    } catch (e) {
                        a.default.dispatch({
                            type: "APPLICATION_BUILD_SIZE_FETCH_FAIL",
                            buildId: l
                        })
                    }
                }
            }
        },
        676536: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                acceptPurchaseTerms: function() {
                    return a
                },
                acceptEULA: function() {
                    return n
                }
            });
            var s = l("913144");

            function a() {
                s.default.dispatch({
                    type: "APPLICATION_STORE_ACCEPT_STORE_TERMS"
                })
            }

            function n(e) {
                s.default.dispatch({
                    type: "APPLICATION_STORE_ACCEPT_EULA",
                    eulaId: e
                })
            }
        },
        641608: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                addInstallLocation: function() {
                    return n
                },
                removeInstallLocation: function() {
                    return i
                },
                updateInstallLocation: function() {
                    return r
                },
                fetchMetadata: function() {
                    return c
                }
            }), l("222007");
            var s = l("913144"),
                a = l("152723");

            function n(e) {
                a.default.queryDirectory(e, (t, l) => {
                    null == t && null != l && s.default.dispatch({
                        type: "INSTALLATION_LOCATION_ADD",
                        path: e,
                        metadata: l
                    })
                })
            }

            function i(e) {
                s.default.dispatch({
                    type: "INSTALLATION_LOCATION_REMOVE",
                    path: e
                })
            }

            function r(e, t) {
                let {
                    label: l,
                    isDefault: a
                } = t;
                s.default.dispatch({
                    type: "INSTALLATION_LOCATION_UPDATE",
                    path: e,
                    label: l,
                    isDefault: a
                })
            }

            function c(e) {
                let t = {},
                    l = 0;
                for (let n of e) null != n && "string" == typeof n && a.default.queryDirectory(n, (a, i) => {
                    ++l, null == a && null != i && (t[n] = i), l === e.length && s.default.dispatch({
                        type: "INSTALLATION_LOCATION_FETCH_METADATA",
                        metadataPayload: t
                    })
                })
            }
        },
        545876: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return g
                }
            }), l("70102"), l("222007");
            var s = l("37983"),
                a = l("884691"),
                n = l("414456"),
                i = l.n(n),
                r = l("627445"),
                c = l.n(r),
                u = l("446674"),
                o = l("77078"),
                d = l("971427"),
                h = l("701909"),
                p = l("719923"),
                f = l("49111"),
                I = l("646718"),
                L = l("782340"),
                A = l("461503");
            class m extends a.Component {
                componentDidMount() {
                    this.props.onChange(this.hasAcceptedNeccessaryTerms(this.props, this.state))
                }
                componentDidUpdate(e, t) {
                    let l = this.hasAcceptedNeccessaryTerms(e, t),
                        s = this.hasAcceptedNeccessaryTerms(this.props, this.state);
                    s !== l && this.props.onChange(s)
                }
                hasAcceptedNeccessaryTerms(e, t) {
                    return (null == e.eulaId || t.hasAcceptedEULA) && (!e.showWithdrawalWaiver || t.hasAcceptedWithdrawalWaiver)
                }
                formatInterval(e) {
                    if (e === I.SubscriptionIntervalTypes.YEAR) return L.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
                    if (e === I.SubscriptionIntervalTypes.MONTH) return L.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
                    throw Error("Invalid interval type: ".concat(e))
                }
                render() {
                    let {
                        eulaId: e,
                        applicationName: t,
                        hasPreviouslyAcceptedEULA: a,
                        forceShow: n,
                        disabled: r,
                        className: u,
                        checkboxClassname: d,
                        checkboxLabelClassname: I,
                        finePrint: m,
                        showPricingLink: g,
                        showWithdrawalWaiver: C,
                        isTrial: S,
                        isDiscount: T,
                        subscriptionPlan: E,
                        finePrintClassname: N
                    } = this.props, {
                        hasAcceptedEULA: v,
                        hasAcceptedWithdrawalWaiver: M
                    } = this.state;
                    return (c(!S || null != E, "subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true"), n || null != e && !a || C) ? (0, s.jsxs)("div", {
                        className: u,
                        children: [C && (0, s.jsx)(o.FormTitle, {
                            className: A.formTitle,
                            children: L.default.Messages.BILLING_ONLINE_PURCHASE_WAIVER
                        }), null != e && (n || !a) ? (0, s.jsx)(o.Checkbox, {
                            type: o.Checkbox.Types.INVERTED,
                            value: v,
                            onChange: this.handleToggleEULAAcceptance,
                            disabled: r,
                            className: A.checkbox,
                            children: (0, s.jsx)("div", {
                                className: A.checkboxLabel,
                                children: L.default.Messages.BILLING_THIRD_PARTY_EULA_LABEL.format({
                                    applicationName: t,
                                    onClick: t => {
                                        (0, o.openModalLazy)(async () => {
                                            let {
                                                default: t
                                            } = await l.el("523360").then(l.bind(l, "523360"));
                                            return l => (0, s.jsx)(t, {
                                                eulaId: e,
                                                ...l
                                            })
                                        }), t.preventDefault()
                                    }
                                })
                            })
                        }) : null, null == m ? null : (0, s.jsx)("div", {
                            className: i(A.finePrint, N),
                            children: m
                        }), C ? (0, s.jsxs)("div", {
                            className: u,
                            children: [(0, s.jsx)(o.Checkbox, {
                                type: o.Checkbox.Types.INVERTED,
                                value: M,
                                onChange: this.handleToggleEUWithdralWaiverAcceptance,
                                disabled: r,
                                className: i(A.checkbox, d),
                                children: (0, s.jsx)("div", {
                                    className: i(A.checkboxLabel, I),
                                    children: L.default.Messages.BILLING_ONLINE_PURCHASE_WAIVER_CHECKBOX
                                })
                            }), (0, s.jsx)("div", {
                                className: A.finePrint,
                                children: L.default.Messages.BILLING_ONLINE_PURCHASE_WAIVER_DISCLAIMER
                            })]
                        }) : null, g && (0, s.jsxs)("div", {
                            className: A.finePrint,
                            children: ["*", L.default.Messages.BILLING_HOW_PRICING_WORKS.format({
                                documentationLink: h.default.getArticleURL(f.HelpdeskArticles.LOCALIZED_PRICING)
                            })]
                        }), S && null != E && (0, s.jsx)(o.Text, {
                            variant: "text-xs/medium",
                            color: "interactive-normal",
                            children: L.default.Messages.BILLING_TRIAL_LEGAL_COPY_V2.format({
                                buttonText: (0, p.getBillingReviewSubheader)(null, E),
                                interval: this.formatInterval(null == E ? void 0 : E.interval),
                                cancelSubscriptionArticle: h.default.getArticleURL(f.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB),
                                paidServiceTermsArticle: h.default.getArticleURL(f.HelpdeskArticles.PAID_TERMS)
                            })
                        }), T && null != E && (0, s.jsx)(o.Text, {
                            variant: "text-xs/medium",
                            color: "interactive-normal",
                            children: L.default.Messages.BILLING_DISCOUNT_LEGAL_COPY.format({
                                buttonText: (0, p.getBillingReviewSubheader)(null, E),
                                interval: this.formatInterval(null == E ? void 0 : E.interval),
                                cancelSubscriptionArticle: h.default.getArticleURL(f.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB),
                                paidServiceTermsArticle: h.default.getArticleURL(f.HelpdeskArticles.PAID_TERMS)
                            })
                        })]
                    }) : null
                }
                constructor(...e) {
                    super(...e), this.state = {
                        hasAcceptedEULA: !this.props.forceShow && this.props.hasPreviouslyAcceptedEULA,
                        hasAcceptedWithdrawalWaiver: !1
                    }, this.handleToggleEUWithdralWaiverAcceptance = (e, t) => {
                        this.setState({
                            hasAcceptedWithdrawalWaiver: t
                        })
                    }, this.handleToggleEULAAcceptance = (e, t) => {
                        this.setState({
                            hasAcceptedEULA: t
                        })
                    }
                }
            }
            var g = u.default.connectStores([d.default], e => {
                let {
                    eulaId: t
                } = e;
                return {
                    hasPreviouslyAcceptedEULA: null != t && d.default.hasAcceptedEULA(t)
                }
            })(m)
        },
        727441: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return M
                }
            }), l("222007"), l("70102");
            var s = l("37983"),
                a = l("884691"),
                n = l("446674"),
                i = l("77078"),
                r = l("913144"),
                c = l("71313"),
                u = l("872957"),
                o = l("676536"),
                d = l("190017"),
                h = l("545876"),
                p = l("299285"),
                f = l("393414"),
                I = l("677225"),
                L = l("971427"),
                A = l("98328"),
                m = l("145131"),
                g = l("953109"),
                C = l("993105"),
                S = l("391820"),
                T = l("49111"),
                E = l("782340"),
                N = l("861144");
            class v extends a.Component {
                fetchInstallSize() {
                    let {
                        applicationId: e,
                        branchId: t,
                        buildId: l,
                        manifestIds: s,
                        buildSizeKB: a
                    } = this.props;
                    null != l && null != s && null == a && r.default.wait(() => {
                        (0, u.fetchBuildSize)(e, t, l, s)
                    })
                }
                componentDidMount() {
                    let {
                        applicationId: e,
                        branchId: t,
                        buildId: l,
                        manifestIds: s
                    } = this.props;
                    null == l || null == s ? (0, c.fetchLiveBuild)(e, t) : this.fetchInstallSize()
                }
                componentDidUpdate(e) {
                    (this.props.buildId !== e.buildId || this.props.manifestIds !== e.manifestIds) && this.fetchInstallSize()
                }
                componentWillUnmount() {
                    this.isUnmounted = !0
                }
                renderButton() {
                    let {
                        buildId: e
                    } = this.props, {
                        hasError: t,
                        hasAcceptedNeccessaryTerms: l
                    } = this.state;
                    return (0, s.jsx)(i.Button, {
                        disabled: t || null == e || !l,
                        color: i.Button.Colors.GREEN,
                        onClick: this.handleInstall,
                        children: E.default.Messages.GAME_ACTION_BUTTON_INSTALL
                    })
                }
                render() {
                    let {
                        application: e,
                        buildSizeKB: t,
                        transitionState: l
                    } = this.props, {
                        selectedInstallationPath: a,
                        isInstalling: n
                    } = this.state, r = null != e && e.getSplashURL(440);
                    return (0, s.jsxs)(i.ModalRoot, {
                        transitionState: l,
                        size: i.ModalSize.SMALL,
                        "aria-label": E.default.Messages.APPLICATION_INSTALLATION_MODAL_TITLE,
                        children: [null != r ? (0, s.jsx)("div", {
                            className: N.splash,
                            style: {
                                backgroundImage: "url(".concat(r, ")")
                            }
                        }) : null, (0, s.jsxs)(i.ModalHeader, {
                            justify: m.default.Justify.BETWEEN,
                            children: [(0, s.jsx)(m.default.Child, {
                                grow: 1,
                                children: (0, s.jsx)(i.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: E.default.Messages.APPLICATION_INSTALLATION_MODAL_TITLE
                                })
                            }), (0, s.jsx)(m.default.Child, {
                                grow: 0,
                                children: (0, s.jsx)(i.ModalCloseButton, {
                                    onClick: this.close
                                })
                            })]
                        }), (0, s.jsxs)(i.ModalContent, {
                            children: [(0, s.jsxs)(m.default, {
                                align: m.default.Align.CENTER,
                                children: [(0, s.jsx)(g.default, {
                                    game: e,
                                    size: g.default.Sizes.MEDIUM,
                                    className: N.gameIcon
                                }), (0, s.jsx)("div", {
                                    className: N.gameName,
                                    children: null != e && e.name
                                }), null != t ? (0, s.jsx)("div", {
                                    className: N.installSize,
                                    children: (0, C.formatSize)(t, {
                                        useKibibytes: !0
                                    })
                                }) : null]
                            }), (0, s.jsx)("div", {
                                className: N.divider
                            }), (0, s.jsx)(S.default, {
                                autoFocus: !0,
                                className: N.selector,
                                value: a,
                                requiredDiskKB: t,
                                onChange: this.handleChangePath
                            }), (0, s.jsx)(h.default, {
                                eulaId: e.eulaId,
                                applicationName: e.name,
                                disabled: n,
                                onChange: this.handlePurchaseTermsChange,
                                className: N.terms
                            })]
                        }), (0, s.jsx)(i.ModalFooter, {
                            children: this.renderButton()
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        selectedInstallationPath: this.props.defaultInstallationPath,
                        hasError: !1,
                        isInstalling: !1,
                        hasAcceptedNeccessaryTerms: !1
                    }, this.isUnmounted = !1, this.handleChangePath = (e, t) => {
                        this.setState({
                            selectedInstallationPath: e,
                            hasError: t
                        })
                    }, this.install = (e, t) => {
                        let {
                            application: l,
                            branchId: s,
                            analyticsLocation: a
                        } = this.props;
                        if (null == l) return null;
                        (0, d.installApplication)({
                            application: l,
                            branchId: s,
                            buildId: e,
                            manifestIds: t,
                            installationPath: this.state.selectedInstallationPath,
                            analyticsLocation: a
                        }), (0, f.transitionTo)(T.Routes.APPLICATION_LIBRARY), this.close()
                    }, this.handleInstall = () => {
                        let {
                            application: e,
                            buildId: t,
                            manifestIds: l,
                            hasPreviouslyAcceptedStoreTerms: s
                        } = this.props;
                        if (null != t && null != l) !s && (0, o.acceptPurchaseTerms)(), null != e && null != e.eulaId && (0, o.acceptEULA)(e.eulaId), this.install(t, l);
                        else throw Error("Unexpected missing build info for non-premium product")
                    }, this.handlePurchaseTermsChange = e => {
                        this.setState({
                            hasAcceptedNeccessaryTerms: e
                        })
                    }, this.close = () => {
                        this.props.onClose()
                    }
                }
            }
            var M = n.default.connectStores([I.default, A.default, L.default, p.default], e => {
                let {
                    applicationId: t,
                    branchId: l
                } = e, s = I.default.getTargetBuildId(t, l);
                return {
                    application: p.default.getApplication(t),
                    defaultInstallationPath: A.default.defaultInstallationPath,
                    buildId: s,
                    manifestIds: I.default.getTargetManifests(t, l),
                    buildSizeKB: null != s ? I.default.getBuildSize(s) : null,
                    hasPreviouslyAcceptedStoreTerms: L.default.hasAcceptedStoreTerms
                }
            })(v)
        },
        391820: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return I
                }
            }), l("424973"), l("222007");
            var s = l("37983"),
                a = l("884691"),
                n = l("446674"),
                i = l("77078"),
                r = l("641608"),
                c = l("98328"),
                u = l("993105"),
                o = l("50885"),
                d = l("782340"),
                h = l("335420");
            let p = "select";
            class f extends a.PureComponent {
                fetchAllDirectoryMetadata() {
                    let {
                        installationPaths: e
                    } = this.props, t = e.map(e => {
                        let {
                            path: t
                        } = e;
                        return t
                    }), {
                        newInstallationPath: l
                    } = this.state;
                    for (let e of (null != l && t.push(l), t = t.filter(e => !this.fetchedMetadataPaths.has(e)), (0, r.fetchMetadata)(t), t)) this.fetchedMetadataPaths.add(e)
                }
                componentDidMount() {
                    this.fetchAllDirectoryMetadata()
                }
                componentDidUpdate(e) {
                    this.fetchAllDirectoryMetadata(), (this.props.requiredDiskKB !== e.requiredDiskKB || this.props.installationPathsMetadata !== e.installationPathsMetadata) && this.sendChange(this.props.value)
                }
                getOptions() {
                    let {
                        installationPaths: e
                    } = this.props, {
                        newInstallationPath: t
                    } = this.state, l = e.map(e => {
                        let {
                            path: t,
                            label: l
                        } = e;
                        return {
                            value: t,
                            label: this.renderLabel(t, l)
                        }
                    });
                    return null != t && l.push({
                        value: t,
                        label: this.renderLabel(t)
                    }), l.push({
                        value: p,
                        label: d.default.Messages.APPLICATION_INSTALLATION_MODAL_SELECT_DIRECTORY
                    }), l
                }
                hasEnoughDiskSpace(e) {
                    let {
                        requiredDiskKB: t,
                        installationPathsMetadata: l
                    } = this.props, s = null != l[e] ? l[e].availableKB : null;
                    return null == t || null == s || t < s
                }
                sendChange(e) {
                    let {
                        installationPathsMetadata: t,
                        onChange: l
                    } = this.props, s = null != t[e] && !1 === t[e].hasPermission;
                    l(e, s || !this.hasEnoughDiskSpace(e))
                }
                renderError() {
                    let {
                        value: e,
                        installationPathsMetadata: t
                    } = this.props, l = null != t[e] && !1 === t[e].hasPermission;
                    return l ? (0, s.jsx)("div", {
                        className: h.error,
                        children: d.default.Messages.APPLICATION_INSTALLATION_MODAL_NO_PERMISSION
                    }) : this.hasEnoughDiskSpace(e) ? null : (0, s.jsx)("div", {
                        className: h.error,
                        children: d.default.Messages.APPLICATION_INSTALLATION_MODAL_NOT_ENOUGH_SPACE
                    })
                }
                renderLabel(e, t) {
                    let {
                        installationPathsMetadata: l
                    } = this.props, s = null != t ? t : e;
                    return null != l[e] && null != l[e].availableKB ? d.default.Messages.APPLICATION_INSTALLATION_MODAL_DIRECTORY_WITH_SPACE.format({
                        path: s,
                        size: (0, u.formatSize)(l[e].availableKB, {
                            useKibibytes: !0
                        })
                    }) : s
                }
                render() {
                    let {
                        value: e,
                        className: t,
                        autoFocus: l
                    } = this.props;
                    return (0, s.jsxs)("div", {
                        className: t,
                        children: [(0, s.jsx)(i.FormTitle, {
                            tag: "h5",
                            children: d.default.Messages.APPLICATION_INSTALLATION_MODAL_LOCATION
                        }), (0, s.jsx)(i.SingleSelect, {
                            autoFocus: l,
                            options: this.getOptions(),
                            value: e,
                            onChange: this.handleChange
                        }), this.renderError()]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        newInstallationPath: null
                    }, this.fetchedMetadataPaths = new Set, this.handleChange = e => {
                        e === p ? o.default.showOpenDialog(["openDirectory"]).then(e => {
                            if (null != e && e.length > 0) {
                                let t = e[0];
                                this.setState({
                                    newInstallationPath: null != this.props.installationPaths.find(e => {
                                        let {
                                            path: l
                                        } = e;
                                        return l === t
                                    }) ? null : t
                                }), this.sendChange(t)
                            }
                        }) : this.sendChange(e)
                    }
                }
            }
            var I = n.default.connectStores([c.default], () => ({
                installationPaths: c.default.installationPaths,
                installationPathsMetadata: c.default.installationPathsMetadata
            }))(f)
        },
        80300: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                backgroundImagePreloader: function() {
                    return o
                }
            }), l("424973");
            var s = l("37983"),
                a = l("884691"),
                n = l("310013"),
                i = l.n(n),
                r = l("407063");
            let c = /url\(['"](.*)['"]\)/,
                u = e => {
                    if (null == e || "" === e || "none" === e) return null;
                    let t = e.match(c);
                    return null != t ? t[1] : e
                };

            function o(e) {
                class t extends a.Component {
                    componentDidUpdate(e, t) {
                        if (t === this.state) return;
                        let {
                            cached: l,
                            loaded: s
                        } = this.state, {
                            style: a
                        } = this.props, n = null != a ? u(a.backgroundImage) : null;
                        null == n && n !== l ? this.setState({
                            loaded: !0,
                            cached: n
                        }) : this.cachedURLs.indexOf(n) >= 0 ? this.setState({
                            loaded: !0,
                            cached: n
                        }) : null != n && n !== l && !0 === s && this.setState({
                            loaded: !1
                        }, () => this.preloadURL(n))
                    }
                    preloadURL(e) {
                        this.canceller && this.canceller(), this.canceller = (0, r.loadImage)(e, t => {
                            this.canceller && (this.canceller = null), !t && (this.cachedURLs.push(e), this.setState({
                                cached: e,
                                loaded: !0
                            }));
                            let {
                                onBackgroundImageLoad: l
                            } = this.props;
                            l && l(t, e)
                        })
                    }
                    componentWillUnmount() {
                        this.canceller && this.canceller(), this.cachedURLs.length = 0
                    }
                    render() {
                        let {
                            style: t,
                            onBackgroundImageLoad: l,
                            ...a
                        } = this.props, {
                            loaded: n,
                            cached: i
                        } = this.state;
                        if (!n && null != t) {
                            var r;
                            t = {
                                ...t,
                                backgroundImage: null == (r = i) || "" === r || "none" === r ? "none" : "url(".concat(r, ")")
                            }
                        }
                        return (0, s.jsx)(e, {
                            style: t,
                            ...a
                        })
                    }
                    constructor(e) {
                        super(e), this.cachedURLs = [], this.canceller = null;
                        let {
                            style: t
                        } = e, l = null != t ? u(t.backgroundImage) : null;
                        this.cachedURLs = [l], this.state = {
                            cached: l,
                            loaded: !0
                        }
                    }
                }
                return i(t, e), t
            }
        },
        841248: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                UnknownGameIcon: function() {
                    return i
                }
            });
            var s = l("37983");
            l("884691");
            var a = l("669491"),
                n = l("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...c
                } = e;
                return (0, s.jsx)("svg", {
                    ...(0, n.default)(c),
                    width: t,
                    height: l,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, s.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5ZM11.8125 9C11.2655 9 10.8159 9.26336 10.5754 9.61494C10.2635 10.0708 9.64123 10.1875 9.1854 9.8757C8.72956 9.56388 8.61282 8.94157 8.92464 8.48573C9.54762 7.57504 10.6226 7 11.8125 7C13.6341 7 15.25 8.38122 15.25 10.25C15.25 11.7035 14.2725 12.8621 12.9809 13.3052L12.9829 13.3157C13.0847 13.8585 12.7271 14.3811 12.1843 14.4829C11.6415 14.5847 11.1189 14.2271 11.0171 13.6843L10.8296 12.6843C10.7748 12.3919 10.853 12.0903 11.043 11.8614C11.233 11.6324 11.515 11.5 11.8125 11.5C12.6833 11.5 13.25 10.8665 13.25 10.25C13.25 9.6335 12.6833 9 11.8125 9ZM13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16ZM20 5.5C20 6.32843 19.3284 7 18.5 7C17.6716 7 17 6.32843 17 5.5C17 4.67157 17.6716 4 18.5 4C19.3284 4 20 4.67157 20 5.5ZM18.5 20C19.3284 20 20 19.3284 20 18.5C20 17.6716 19.3284 17 18.5 17C17.6716 17 17 17.6716 17 18.5C17 19.3284 17.6716 20 18.5 20ZM7 18.5C7 19.3284 6.32843 20 5.5 20C4.67157 20 4 19.3284 4 18.5C4 17.6716 4.67157 17 5.5 17C6.32843 17 7 17.6716 7 18.5ZM5.5 7C6.32843 7 7 6.32843 7 5.5C7 4.67157 6.32843 4 5.5 4C4.67157 4 4 4.67157 4 5.5C4 6.32843 4.67157 7 5.5 7Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: r
                    })
                })
            }
        },
        227422: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return n
                }
            }), l("222007");
            var s = l("884691"),
                a = l("760850");

            function n(e, t) {
                let [l, n] = s.useState();
                return s.useEffect(() => {
                    if (null == e || null != t) {
                        n(void 0);
                        return
                    }(0, a.default)().then(t => {
                        null != t && t.identifyGame(e, (e, t) => {
                            0 === e && null != t.icon && "" !== t.icon && null != t.name && "" !== t.name && n("data:image/png;base64,".concat(t.icon))
                        })
                    })
                }, [e, t]), null != t ? t : l
            }
        },
        931138: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var s = l("37983"),
                a = l("884691"),
                n = l("414456"),
                i = l.n(n),
                r = l("77078"),
                c = l("760607"),
                u = l("89976");

            function o(e) {
                let {
                    children: t,
                    size: l = 16,
                    className: n,
                    flowerStarClassName: o,
                    ...d
                } = e, h = a.Children.only(t), p = (0, r.useRedesignIconContext)().enabled;
                return (0, s.jsxs)("div", {
                    className: i(u.flowerStarContainer, n),
                    style: {
                        width: l,
                        height: l
                    },
                    children: [(0, s.jsx)(c.default, {
                        ...d,
                        className: i(o, u.flowerStar)
                    }), (0, s.jsx)("div", {
                        className: i(u.childContainer, {
                            [u.redesignIconChildContainer]: p
                        }),
                        children: h
                    })]
                })
            }
        },
        953109: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return p
                }
            });
            var s = l("37983");
            l("884691");
            var a = l("414456"),
                n = l.n(a),
                i = l("227422"),
                r = l("476263"),
                c = l("547620"),
                u = l("646718"),
                o = l("257920");
            let d = {
                    XSMALL: o.xsmall,
                    SMALL: o.small,
                    MEDIUM: o.medium,
                    LARGE: o.large
                },
                h = e => {
                    let t, {
                        game: a,
                        guild: h,
                        skuId: p,
                        pid: f,
                        className: I,
                        guildClassName: L,
                        size: A = d.MEDIUM,
                        ...m
                    } = e;
                    if (null != p && (t = function(e) {
                            if (null == e) return null;
                            switch (e) {
                                case u.PremiumSubscriptionSKUs.GUILD:
                                    return l("229806");
                                case u.PremiumSubscriptionSKUs.TIER_0:
                                    return l("654125");
                                case u.PremiumSubscriptionSKUs.TIER_1:
                                    return l("108647");
                                case u.PremiumSubscriptionSKUs.TIER_2:
                                case u.PremiumSubscriptionSKUs.LEGACY:
                                    return l("943005");
                                default:
                                    return null
                            }
                        }(p)), null != a && null == t && (t = a.getIconURL(function(e) {
                            switch (e) {
                                case d.XSMALL:
                                    return 24;
                                case d.SMALL:
                                    return 30;
                                case d.MEDIUM:
                                    return 40;
                                case d.LARGE:
                                    return 60;
                                default:
                                    return 80
                            }
                        }(A))), null == (t = (0, i.default)(f, t)) && null != h) {
                        let e = function(e) {
                            switch (e) {
                                case d.XSMALL:
                                    return r.default.Sizes.SMALLER;
                                case d.SMALL:
                                    return r.default.Sizes.SMALL;
                                case d.LARGE:
                                    return r.default.Sizes.LARGE;
                                default:
                                case d.MEDIUM:
                                    return r.default.Sizes.MEDIUM
                            }
                        }(A);
                        return (0, s.jsx)(r.default, {
                            className: n(o.gameIcon, L, I),
                            guild: h,
                            size: e
                        })
                    }
                    return null == t ? (0, s.jsx)(c.default, {
                        className: n(o.gameIcon, A, I)
                    }) : (0, s.jsx)("div", {
                        ...m,
                        className: n(o.gameIcon, A, I),
                        style: {
                            backgroundImage: "url('".concat(t, "')")
                        }
                    })
                };
            h.Sizes = d;
            var p = h
        },
        476263: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return E
                }
            });
            var s = l("37983"),
                a = l("884691"),
                n = l("414456"),
                i = l.n(n),
                r = l("90915"),
                c = l("446674"),
                u = l("669491"),
                o = l("77078"),
                d = l("80300"),
                h = l("471671"),
                p = l("103603"),
                f = l("474293"),
                I = l("580357"),
                L = l("491088");
            let A = {
                    SMOL: "Smol",
                    MINI: "Mini",
                    SMALLER: "Smaller",
                    SMALL: "Small",
                    MEDIUM: "Medium",
                    LARGE: "Large",
                    LARGER: "Larger",
                    XLARGE: "XLarge"
                },
                m = {
                    [A.SMOL]: 16,
                    [A.MINI]: 20,
                    [A.SMALLER]: 24,
                    [A.SMALL]: 30,
                    [A.MEDIUM]: 40,
                    [A.LARGE]: 50,
                    [A.LARGER]: 64,
                    [A.XLARGE]: 100
                },
                g = {
                    [A.SMOL]: [10, 10, 8, 6, 6, 4],
                    [A.MINI]: [12, 12, 10, 10, 8, 6, 4],
                    [A.SMALLER]: [13, 13, 11, 11, 9, 7, 5],
                    [A.SMALL]: [14, 14, 12, 12, 10, 8, 6],
                    [A.MEDIUM]: [16, 16, 14, 14, 12, 10, 8],
                    [A.LARGE]: [18, 18, 16, 16, 14, 12, 10],
                    [A.LARGER]: [19, 19, 17, 17, 15, 13, 11],
                    [A.XLARGE]: [20, 20, 18, 18, 16, 14, 12]
                };
            class C extends a.PureComponent {
                renderAcronym() {
                    let {
                        guild: e,
                        iconSrc: t
                    } = this.props;
                    return null != e.icon || null != t ? null : (0, s.jsx)("div", {
                        className: L.acronym,
                        children: e.acronym
                    })
                }
                renderBadge() {
                    let {
                        showBadge: e,
                        guild: t,
                        badgeStrokeColor: l
                    } = this.props;
                    return e && null != t.hasFeature ? (0, s.jsx)(I.default, {
                        className: L.guildIconBadge,
                        guild: t,
                        badgeStrokeColor: l
                    }) : null
                }
                renderIcon() {
                    var e, t;
                    let {
                        guild: l,
                        className: a,
                        showBadge: n,
                        active: r,
                        size: c,
                        style: u = {},
                        textScale: d,
                        showTooltip: h,
                        tooltipPosition: p,
                        onClick: I,
                        to: A,
                        badgeStrokeColor: m,
                        animate: C,
                        tabIndex: S,
                        iconSrc: T,
                        "aria-hidden": E,
                        ...N
                    } = this.props, v = g[c], M = null != I ? o.Clickable : "div";
                    return (0, s.jsxs)(M, {
                        className: i(L.icon, a, (0, f.getClass)(L, "iconSize", c), {
                            [null !== (e = (0, f.getClass)(L, "iconActive", c)) && void 0 !== e ? e : ""]: r,
                            [L.iconInactive]: !r,
                            [L.noIcon]: null == l.icon
                        }),
                        "aria-hidden": E,
                        style: null == l.icon ? {
                            fontSize: (null !== (t = v[l.acronym.length]) && void 0 !== t ? t : v[v.length - 1]) * d,
                            ...u
                        } : u,
                        onClick: null != A || null == I ? void 0 : I,
                        tabIndex: S,
                        ...N,
                        children: [this.renderAcronym(), this.renderBadge()]
                    })
                }
                renderTooltip() {
                    let {
                        guild: e,
                        showTooltip: t,
                        tooltipPosition: l
                    } = this.props;
                    return t ? (0, s.jsx)(o.Tooltip, {
                        text: e.name,
                        position: l,
                        "aria-label": !1,
                        children: e => a.cloneElement(a.Children.only(this.renderIcon()), {
                            ...e
                        })
                    }) : this.renderIcon()
                }
                render() {
                    let {
                        to: e,
                        guild: t,
                        source: l,
                        tabIndex: a,
                        "aria-hidden": n
                    } = this.props;
                    return null != e ? (0, s.jsx)(r.Link, {
                        "aria-hidden": n,
                        to: {
                            pathname: e,
                            state: null != l ? {
                                analyticsSource: l
                            } : null
                        },
                        "aria-label": t.toString(),
                        tabIndex: a,
                        children: this.renderTooltip()
                    }) : this.renderTooltip()
                }
            }
            let S = c.default.connectStores([h.default], e => {
                let {
                    guild: t,
                    animate: l,
                    iconSrc: s,
                    style: a,
                    size: n
                } = e;
                return {
                    style: {
                        ...a,
                        backgroundImage: (0, p.makeCssUrlString)(null != s ? s : t.getIconURL(m[n], l && h.default.isFocused()))
                    }
                }
            })((0, d.backgroundImagePreloader)(e => (0, s.jsx)(C, {
                ...e
            })));
            class T extends a.PureComponent {
                render() {
                    return (0, s.jsx)(S, {
                        ...this.props
                    })
                }
            }
            T.Sizes = A, T.defaultProps = {
                size: A.LARGE,
                textScale: 1,
                showBadge: !1,
                showTooltip: !1,
                active: !1,
                tooltipPosition: "top",
                badgeStrokeColor: u.default.unsafe_rawColors.WHITE_500.css,
                animate: !1
            };
            var E = T
        },
        547620: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var s = l("37983");
            l("884691");
            var a = l("469563"),
                n = l("841248"),
                i = l("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: a = "currentColor",
                        foreground: n,
                        ...r
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: l,
                        viewBox: "0 0 40 40",
                        children: (0, s.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, s.jsx)("path", {
                                className: n,
                                fill: a,
                                fillOpacity: ".8",
                                d: "M21.226 30v-4.154h-3.755V30h3.755zm-.512-8.62c3.67-1.337 5.718-2.959 5.718-6.145 0-3.272-2.36-5.235-6.088-5.235-2.589 0-4.637.825-6.344 2.048l.484 3.3c1.621-1.251 3.47-2.162 5.49-2.162 1.707 0 2.845.854 2.845 2.305 0 1.593-1.08 2.475-3.812 3.442l-.882.342.342 4.523 2.076-.455.171-1.963z"
                            }), (0, s.jsx)("rect", {
                                className: n,
                                width: "38",
                                height: "38",
                                x: "1",
                                y: "1",
                                stroke: a,
                                strokeOpacity: ".4",
                                strokeWidth: "2",
                                rx: "5"
                            }), (0, s.jsx)("circle", {
                                className: n,
                                cx: "7",
                                cy: "7",
                                r: "2",
                                fill: a,
                                fillOpacity: ".4"
                            }), (0, s.jsx)("circle", {
                                className: n,
                                cx: "7",
                                cy: "33",
                                r: "2",
                                fill: a,
                                fillOpacity: ".4"
                            }), (0, s.jsx)("circle", {
                                className: n,
                                cx: "33",
                                cy: "7",
                                r: "2",
                                fill: a,
                                fillOpacity: ".4"
                            }), (0, s.jsx)("circle", {
                                className: n,
                                cx: "33",
                                cy: "33",
                                r: "2",
                                fill: a,
                                fillOpacity: ".4"
                            })]
                        })
                    })
                }, n.UnknownGameIcon, void 0, {
                    size: 24
                })
        },
        760607: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return n
                }
            });
            var s = l("37983");
            l("884691");
            var a = l("75196"),
                n = function(e) {
                    let {
                        width: t = 16,
                        height: l = 16,
                        color: n = "currentColor",
                        foreground: i,
                        ...r
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, a.default)(r),
                        width: t,
                        height: l,
                        viewBox: "0 0 16 15.2",
                        children: (0, s.jsx)("path", {
                            className: i,
                            fill: n,
                            fillRule: "evenodd",
                            d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
                        })
                    })
                }
        },
        474293: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                getClass: function() {
                    return a
                }
            }), l("808653");
            var s = l("159885");

            function a(e, t) {
                for (var l = arguments.length, a = Array(l > 2 ? l - 2 : 0), n = 2; n < l; n++) a[n - 2] = arguments[n];
                let i = a.reduce((e, t) => e + (0, s.upperCaseFirstChar)(t), ""),
                    r = "".concat(t).concat(i),
                    c = e[r];
                if (null != c) return c
            }
        }
    }
]);