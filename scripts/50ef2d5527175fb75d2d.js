"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [24278], {
        179949: (t, n, e) => {
            e.r(n);
            e.d(n, {
                default: () => O
            });
            var a = e(785893),
                i = e(667294),
                s = e(202351),
                r = e(70418),
                l = e(744564),
                o = e(114126),
                c = e(161071),
                u = e(695166),
                d = e(951442),
                p = e(536713),
                h = e(784426),
                f = e(959207),
                I = e(430091),
                m = e(64318),
                b = e(840974),
                g = e(107364),
                y = e(750203),
                v = e(452723),
                P = e(717902),
                T = e(2590),
                Z = e(473708),
                S = e(584357),
                N = e.n(S);

            function C(t, n) {
                if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function _(t) {
                _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return _(t)
            }

            function A(t, n) {
                return !n || "object" !== M(n) && "function" != typeof n ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : n
            }

            function E(t, n) {
                E = Object.setPrototypeOf || function(t, n) {
                    t.__proto__ = n;
                    return t
                };
                return E(t, n)
            }
            var M = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function j(t) {
                var n = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var e, a = _(t);
                    if (n) {
                        var i = _(this).constructor;
                        e = Reflect.construct(a, arguments, i)
                    } else e = a.apply(this, arguments);
                    return A(this, e)
                }
            }
            var x = function(t) {
                ! function(t, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && E(t, n)
                }(e, t);
                var n = j(e);

                function e() {
                    C(this, e);
                    var t;
                    (t = n.apply(this, arguments)).state = {
                        selectedInstallationPath: t.props.defaultInstallationPath,
                        hasError: !1,
                        isInstalling: !1,
                        hasAcceptedNeccessaryTerms: !1
                    };
                    t.isUnmounted = !1;
                    t.handleChangePath = function(n, e) {
                        t.setState({
                            selectedInstallationPath: n,
                            hasError: e
                        })
                    };
                    t.install = function(n, e) {
                        var a = t.props,
                            i = a.application,
                            s = a.branchId,
                            r = a.analyticsLocation;
                        if (null == i) return null;
                        (0, d.LO)({
                            application: i,
                            branchId: s,
                            buildId: n,
                            manifestIds: e,
                            installationPath: t.state.selectedInstallationPath,
                            analyticsLocation: r
                        });
                        (0, h.uL)(T.Z5c.APPLICATION_LIBRARY);
                        t.close()
                    };
                    t.handleInstall = function() {
                        var n = t.props,
                            e = n.application,
                            a = n.buildId,
                            i = n.manifestIds,
                            s = n.hasPreviouslyAcceptedStoreTerms;
                        if (null == a || null == i) throw new Error("Unexpected missing build info for non-premium product");
                        s || (0, u.Bv)();
                        null != e && null != e.eulaId && (0, u.DC)(e.eulaId);
                        t.install(a, i)
                    };
                    t.handlePurchaseTermsChange = function(n) {
                        t.setState({
                            hasAcceptedNeccessaryTerms: n
                        })
                    };
                    t.close = function() {
                        t.props.onClose()
                    };
                    return t
                }
                var i = e.prototype;
                i.fetchInstallSize = function() {
                    var t = this.props,
                        n = t.applicationId,
                        e = t.branchId,
                        a = t.buildId,
                        i = t.manifestIds,
                        s = t.buildSizeKB;
                    null != a && null != i && null == s && l.Z.wait((function() {
                        (0, c.q)(n, e, a, i)
                    }))
                };
                i.componentDidMount = function() {
                    var t = this.props,
                        n = t.applicationId,
                        e = t.branchId,
                        a = t.buildId,
                        i = t.manifestIds;
                    null == a || null == i ? (0, o.l)(n, e) : this.fetchInstallSize()
                };
                i.componentDidUpdate = function(t) {
                    this.props.buildId === t.buildId && this.props.manifestIds === t.manifestIds || this.fetchInstallSize()
                };
                i.componentWillUnmount = function() {
                    this.isUnmounted = !0
                };
                i.renderButton = function() {
                    var t = this.props.buildId,
                        n = this.state,
                        e = n.hasError,
                        i = n.hasAcceptedNeccessaryTerms;
                    return (0, a.jsx)(r.Button, {
                        disabled: e || null == t || !i,
                        color: r.Button.Colors.GREEN,
                        onClick: this.handleInstall,
                        children: Z.Z.Messages.GAME_ACTION_BUTTON_INSTALL
                    })
                };
                i.render = function() {
                    var t = this.props,
                        n = t.application,
                        e = t.buildSizeKB,
                        i = t.transitionState,
                        s = this.state,
                        l = s.selectedInstallationPath,
                        o = s.isInstalling,
                        c = null != n && n.getSplashURL(440);
                    return (0, a.jsxs)(r.ModalRoot, {
                        transitionState: i,
                        size: r.ModalSize.SMALL,
                        "aria-label": Z.Z.Messages.APPLICATION_INSTALLATION_MODAL_TITLE,
                        children: [null != c ? (0, a.jsx)("div", {
                            className: N().splash,
                            style: {
                                backgroundImage: "url(".concat(c, ")")
                            }
                        }) : null, (0, a.jsxs)(r.ModalHeader, {
                            justify: g.Z.Justify.BETWEEN,
                            children: [(0, a.jsx)(g.Z.Child, {
                                grow: 1,
                                children: (0, a.jsx)(r.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: Z.Z.Messages.APPLICATION_INSTALLATION_MODAL_TITLE
                                })
                            }), (0, a.jsx)(g.Z.Child, {
                                grow: 0,
                                children: (0, a.jsx)(r.ModalCloseButton, {
                                    onClick: this.close
                                })
                            })]
                        }), (0, a.jsxs)(r.ModalContent, {
                            children: [(0, a.jsxs)(g.Z, {
                                align: g.Z.Align.CENTER,
                                children: [(0, a.jsx)(y.Z, {
                                    game: n,
                                    size: y.Z.Sizes.MEDIUM,
                                    className: N().gameIcon
                                }), (0, a.jsx)("div", {
                                    className: N().gameName,
                                    children: null != n && n.name
                                }), null != e ? (0, a.jsx)("div", {
                                    className: N().installSize,
                                    children: (0, v.BU)(e, {
                                        useKibibytes: !0
                                    })
                                }) : null]
                            }), (0, a.jsx)("div", {
                                className: N().divider
                            }), (0, a.jsx)(P.Z, {
                                autoFocus: !0,
                                className: N().selector,
                                value: l,
                                requiredDiskKB: e,
                                onChange: this.handleChangePath
                            }), (0, a.jsx)(p.Z, {
                                eulaId: n.eulaId,
                                applicationName: n.name,
                                disabled: o,
                                onChange: this.handlePurchaseTermsChange,
                                className: N().terms
                            })]
                        }), (0, a.jsx)(r.ModalFooter, {
                            children: this.renderButton()
                        })]
                    })
                };
                return e
            }(i.Component);
            const O = s.ZP.connectStores([b.Z, f.Z, I.Z, m.Z], (function(t) {
                var n = t.applicationId,
                    e = t.branchId,
                    a = I.Z.getTargetBuildId(n, e);
                return {
                    application: f.Z.getGame(n),
                    defaultInstallationPath: b.Z.defaultInstallationPath,
                    buildId: a,
                    manifestIds: I.Z.getTargetManifests(n, e),
                    buildSizeKB: null != a ? I.Z.getBuildSize(a) : null,
                    hasPreviouslyAcceptedStoreTerms: m.Z.hasAcceptedStoreTerms
                }
            }))(x)
        },
        530562: (t, n, e) => {
            e.d(n, {
                GY: () => d,
                R4: () => u,
                oE: () => p,
                yb: () => c
            });
            var a = e(441143),
                i = e.n(a),
                s = e(810978),
                r = e(551778),
                l = e(2590),
                o = e(203600);

            function c(t) {
                return function(t) {
                    return t.items.map((function(t) {
                        var n = r.Z.get(t.planId);
                        i()(null != n, "Unable to fetch plan");
                        return n
                    }))
                }(t).map((function(t) {
                    return t.skuId
                }))
            }

            function u(t, n, e) {
                var a = t.getCurrentSubscriptionPlanIdForGroup(e);
                if (t.type === l.NYc.PREMIUM && null == a) return !0;
                i()(null != a, "Current subscription has no plan in group");
                i()(!(a === o.Xh.PREMIUM_YEAR_TIER_1 && n === o.Xh.PREMIUM_MONTH_TIER_2), "Unexpected plan switch");
                return e.indexOf(a) < e.indexOf(n)
            }

            function d(t, n, e) {
                return !u(t, n, e)
            }

            function p(t, n) {
                var e = r.Z.get(t);
                if (null == e) {
                    var a = o.GP[t];
                    i()(null != a, "Missing hardcoded subscriptionPlan: ".concat(t));
                    var l = a.skuId;
                    r.Z.isFetchingForSKU(l) || (0, s.GZ)(l, n)
                }
                return e
            }
        }
    }
]);