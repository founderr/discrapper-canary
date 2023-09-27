"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [56167], {
        446483: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var r = n(785893),
                s = (n(667294), n(294184)),
                a = n.n(s),
                i = n(545354),
                o = n.n(i);

            function l(e) {
                var t = e.application,
                    n = e.splashSize,
                    s = e.className,
                    i = e.overrideSplash,
                    l = null != i ? i : t.getSplashURL(n),
                    c = null != l ? "url(".concat(l, ")") : void 0;
                return (0, r.jsx)("div", {
                    className: a()(o().splashBackground, s),
                    style: {
                        backgroundImage: c
                    }
                })
            }
        },
        910740: (e, t, n) => {
            n.d(t, {
                Z: () => k
            });
            var r = n(785893),
                s = n(667294),
                a = n(202351),
                i = n(304548),
                o = n(744564),
                l = n(114126),
                c = n(161071),
                u = n(695166),
                p = n(951442),
                d = n(734691),
                f = n(536713),
                h = n(717902),
                I = n(784426),
                A = n(761814),
                P = n(430091),
                _ = n(64318),
                O = n(840974),
                m = n(107364),
                C = n(750203),
                R = n(709189),
                T = n(557931),
                N = n(534681),
                S = n(2590),
                E = n(473708),
                y = n(5759),
                b = n.n(y);

            function L(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function v(e) {
                v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return v(e)
            }

            function g(e, t) {
                return !t || "object" !== Z(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function B(e, t) {
                B = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return B(e, t)
            }
            var Z = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function M(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = v(e);
                    if (t) {
                        var s = v(this).constructor;
                        n = Reflect.construct(r, arguments, s)
                    } else n = r.apply(this, arguments);
                    return g(this, n)
                }
            }
            var U = function() {
                    return [E.Z.Messages.APPLICATION_STORE_PURCHASE_CONFIRMATION_TITLE_1, E.Z.Messages.APPLICATION_STORE_PURCHASE_CONFIRMATION_TITLE_2, E.Z.Messages.APPLICATION_STORE_PURCHASE_CONFIRMATION_TITLE_3, E.Z.Messages.APPLICATION_STORE_PURCHASE_CONFIRMATION_TITLE_4]
                },
                j = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && B(e, t)
                    }(n, e);
                    var t = M(n);

                    function n() {
                        L(this, n);
                        var e;
                        (e = t.apply(this, arguments)).state = {
                            confirmHeaderIndex: Math.floor(Math.random() * U().length),
                            installPath: e.props.defaultInstallationPath,
                            hasInstallPathError: !1,
                            hasAcceptedNeccessaryTerms: !1
                        };
                        e.handleInstallPathChange = function(t, n) {
                            e.setState({
                                installPath: t,
                                hasInstallPathError: n
                            })
                        };
                        e.handleInventoryClick = function() {
                            d.Z.open(S.oAB.INVENTORY);
                            e.props.onClose()
                        };
                        e.handleGoToLibrary = function() {
                            (0, I.uL)(S.Z5c.APPLICATION_LIBRARY);
                            e.props.onClose()
                        };
                        e.handleInstall = function() {
                            var t = e.props,
                                n = t.application,
                                r = t.branchId,
                                s = t.buildId,
                                a = t.hasPreviouslyAcceptedStoreTerms,
                                i = t.manifestIds,
                                o = t.onClose,
                                l = e.state,
                                c = l.installPath,
                                d = l.hasInstallPathError;
                            a || (0, u.Bv)();
                            null != n.eulaId && (0, u.DC)(n.eulaId);
                            if (!d && null != s && null != i) {
                                p.LO({
                                    application: n,
                                    branchId: r,
                                    buildId: s,
                                    manifestIds: i,
                                    installationPath: c,
                                    analyticsLocation: S.Sbl.APPLICATION_STORE_PAYMENT_MODAL
                                });
                                o();
                                (0, I.uL)(S.Z5c.APPLICATION_LIBRARY)
                            }
                        };
                        e.handlePurchaseTermsChange = function(t) {
                            e.setState({
                                hasAcceptedNeccessaryTerms: t
                            })
                        };
                        return e
                    }
                    var a = n.prototype;
                    a.fetchInstallSize = function() {
                        var e = this.props,
                            t = e.application,
                            n = e.branchId,
                            r = e.buildId,
                            s = e.manifestIds,
                            a = e.buildSizeKB;
                        null != r && null != s && null == a && o.Z.wait((function() {
                            (0, c.q)(t.id, n, r, s)
                        }))
                    };
                    a.componentDidMount = function() {
                        var e = this.props,
                            t = e.application,
                            n = e.branchId,
                            r = e.buildId,
                            s = e.manifestIds,
                            a = e.sku;
                        !e.isIAP && (0, T._f)(a) && (null == r || null == s ? o.Z.wait((function() {
                            return (0, l.l)(t.id, n)
                        })) : this.fetchInstallSize())
                    };
                    a.componentDidUpdate = function(e) {
                        this.props.buildId === e.buildId && this.props.manifestIds === e.manifestIds || this.fetchInstallSize()
                    };
                    a.getHeaderBlurb = function() {
                        var e = this.props,
                            t = e.sku,
                            n = e.application,
                            r = e.isIAP;
                        if (t.isPreorder() && null != t.preorderReleaseAt) return E.Z.Messages.APPLICATION_STORE_PREORDER_PURCHASE_CONFIRMATION_BLURB.format({
                            applicationName: n.name,
                            date: t.preorderReleaseAt.format("MMMM DD")
                        });
                        if (r || [S.epS.DURABLE, S.epS.CONSUMABLE].includes(t.type)) return E.Z.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
                            applicationName: n.name,
                            itemName: t.name
                        });
                        if (t.type === S.epS.BUNDLE) return E.Z.Messages.APPLICATION_STORE_BUNDLE_PURCHASE_CONFIRMATION_BLURB.format({
                            name: t.name
                        });
                        var s = t.supportedOperatingSystems[0];
                        return E.Z.Messages.APPLICATION_STORE_PURCHASE_CONFIRMATION_UNSUPPORTED_OS.format({
                            name: n.name,
                            operatingSystem: (0, N.XK)(s)
                        })
                    };
                    a.renderInstallationHeader = function() {
                        var e = this.props.application;
                        return (0, r.jsx)("div", {
                            className: b().blurb,
                            children: E.Z.Messages.APPLICATION_STORE_PURCHASE_CONFIRMATION_BLURB.format({
                                name: e.name
                            })
                        })
                    };
                    a.renderInstallationBody = function() {
                        var e = this.props,
                            t = e.isFetchingBuild,
                            n = e.buildId,
                            a = e.buildSizeKB,
                            o = e.application,
                            l = this.state,
                            c = l.installPath,
                            u = l.hasInstallPathError,
                            p = l.hasAcceptedNeccessaryTerms;
                        return (0, r.jsxs)(s.Fragment, {
                            children: [(0, r.jsx)(h.Z, {
                                className: b().installSelector,
                                value: c,
                                requiredDiskKB: a,
                                onChange: this.handleInstallPathChange
                            }), (0, r.jsx)(f.Z, {
                                eulaId: o.eulaId,
                                applicationName: o.name,
                                onChange: this.handlePurchaseTermsChange,
                                className: b().storeTerms
                            }), (0, r.jsx)(R.C, {
                                className: b().confirmButton,
                                disabled: u || null == n || !p,
                                onClick: this.handleInstall,
                                submitting: t,
                                color: i.Button.Colors.GREEN,
                                children: E.Z.Messages.APPLICATION_STORE_PURCHASE_INSTALL_GAME
                            })]
                        })
                    };
                    a.renderGenericHeader = function() {
                        return (0, r.jsx)("div", {
                            className: b().blurb,
                            children: this.getHeaderBlurb()
                        })
                    };
                    a.renderBlurbBody = function() {
                        var e, t = this.props,
                            n = t.isIAP,
                            a = t.sku,
                            o = t.onClose;
                        if (a.isPreorder()) {
                            e = E.Z.Messages.APPLICATION_PREORDER_PURCHASE_CONFIRMATION_BUTTON;
                            o = this.handleGoToLibrary
                        } else e = n ? E.Z.Messages.APPLICATION_IAP_PURCHASE_RETURN_TO_GAME : E.Z.Messages.OKAY;
                        return (0, r.jsx)(s.Fragment, {
                            children: (0, r.jsx)(i.Button, {
                                className: b().confirmButton,
                                onClick: o,
                                children: e
                            })
                        })
                    };
                    a.renderBlurb = function() {
                        var e = this.props,
                            t = e.sku;
                        return e.isIAP || !(0, T._f)(t) || t.isPreorder() ? this.renderGenericHeader() : this.renderInstallationHeader()
                    };
                    a.renderBody = function() {
                        var e = this.props,
                            t = e.sku;
                        return e.isIAP || !(0, T._f)(t) || t.isPreorder() ? this.renderBlurbBody() : this.renderInstallationBody()
                    };
                    a.render = function() {
                        var e = this.props.application,
                            t = this.state.confirmHeaderIndex;
                        return (0, r.jsxs)(m.Z, {
                            direction: m.Z.Direction.VERTICAL,
                            align: m.Z.Align.CENTER,
                            children: [(0, r.jsx)(C.Z, {
                                game: e,
                                className: b().icon,
                                size: C.Z.Sizes.LARGE
                            }), (0, r.jsx)("div", {
                                className: b().header,
                                children: U()[t]
                            }), this.renderBlurb(), (0, r.jsx)("div", {
                                className: b().divider
                            }), this.renderBody()]
                        })
                    };
                    return n
                }(s.Component);
            const k = a.ZP.connectStores([O.Z, P.Z, A.Z, _.Z], (function(e) {
                var t, n = e.application,
                    r = A.Z.getActiveLibraryApplication(n.id);
                t = null != r ? r.id : n.id;
                var s = P.Z.getTargetBuildId(n.id, t);
                return {
                    defaultInstallationPath: O.Z.defaultInstallationPath,
                    branchId: t,
                    isFetchingBuild: P.Z.isFetching(n.id, t),
                    buildId: s,
                    manifestIds: P.Z.getTargetManifests(n.id, t),
                    buildSizeKB: null != s ? P.Z.getBuildSize(s) : null,
                    hasPreviouslyAcceptedStoreTerms: _.Z.hasAcceptedStoreTerms
                }
            }))(j)
        },
        782158: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => b
            });
            var r = n(785893),
                s = n(667294),
                a = n(202351),
                i = n(304548),
                o = n(315804),
                l = n(446483),
                c = n(959207),
                u = n(746974),
                p = n(107364),
                d = n(815784),
                f = n(652591),
                h = n(910740),
                I = n(320641),
                A = n(2590),
                P = n(6369),
                _ = n.n(P),
                O = n(992911),
                m = n.n(O);

            function C(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function R(e) {
                R = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return R(e)
            }

            function T(e, t) {
                return !t || "object" !== S(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function N(e, t) {
                N = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return N(e, t)
            }
            var S = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function E(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = R(e);
                    if (t) {
                        var s = R(this).constructor;
                        n = Reflect.construct(r, arguments, s)
                    } else n = r.apply(this, arguments);
                    return T(this, n)
                }
            }
            var y = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && N(e, t)
                }(n, e);
                var t = E(n);

                function n() {
                    C(this, n);
                    return t.apply(this, arguments)
                }
                var s = n.prototype;
                s.componentDidMount = function() {
                    var e = this.props,
                        t = e.application,
                        n = e.skuId,
                        r = e.sku,
                        s = e.onClose;
                    null == r ? (0, o.jU)(t.id, n).catch((function(e) {
                        return s(e.message)
                    })) : this.track(r)
                };
                s.componentDidUpdate = function(e) {
                    var t = this.props.sku;
                    t !== e.sku && null != t && this.track(t)
                };
                s.track = function(e) {
                    var t = this.props.analyticsSource;
                    f.default.track(A.rMx.OPEN_MODAL, {
                        type: "Application Entitlement Confirmation",
                        source: t,
                        application_id: e.applicationId,
                        sku_id: e.id
                    })
                };
                s.render = function() {
                    var e = this.props,
                        t = e.sku,
                        n = e.application,
                        s = e.onClose,
                        a = e.isIAP,
                        o = e.transitionState,
                        c = null != t ? (0, I.Y)(a, t.type) : null;
                    return (0, r.jsxs)(i.ModalRoot, {
                        transitionState: o,
                        size: i.ModalSize.SMALL,
                        "aria-label": c,
                        className: m().modal,
                        children: [(0, r.jsx)(l.Z, {
                            application: n,
                            splashSize: 880
                        }), (0, r.jsx)(d.Z.Content, {
                            className: m().content,
                            children: (0, r.jsxs)(p.Z, {
                                direction: p.Z.Direction.VERTICAL,
                                className: _().confirmContent,
                                children: [(0, r.jsx)(i.ModalCloseButton, {
                                    onClick: function() {
                                        return s()
                                    },
                                    className: _().confirmCloseButton
                                }), null != t ? (0, r.jsx)(h.Z, {
                                    application: n,
                                    sku: t,
                                    isIAP: a,
                                    onClose: function() {
                                        return s()
                                    }
                                }) : null]
                            })
                        })]
                    })
                };
                return n
            }(s.Component);
            const b = a.ZP.connectStores([c.Z, u.Z], (function(e) {
                var t = e.applicationId,
                    n = e.skuId;
                return {
                    application: c.Z.getGame(t),
                    sku: u.Z.get(n)
                }
            }))(y)
        },
        320641: (e, t, n) => {
            n.d(t, {
                Y: () => a
            });
            var r = n(2590),
                s = n(473708);

            function a(e, t) {
                if (e) return s.Z.Messages.APPLICATION_STORE_PURCHASE_IAP;
                switch (t) {
                    case r.epS.DURABLE_PRIMARY:
                        return s.Z.Messages.APPLICATION_STORE_PURCHASE_APPLICATION;
                    case r.epS.DURABLE:
                        return s.Z.Messages.APPLICATION_STORE_PURCHASE_DLC;
                    case r.epS.CONSUMABLE:
                        return s.Z.Messages.APPLICATION_STORE_PURCHASE_CONSUMABLE;
                    case r.epS.BUNDLE:
                        return s.Z.Messages.APPLICATION_STORE_PURCHASE_BUNDLE
                }
            }
        }
    }
]);