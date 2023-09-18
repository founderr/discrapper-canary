(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [72853, 58635, 71402], {
        460122: (e, t, n) => {
            e.exports = n.p + "fdbcc8efcf1ba7be0df5fa425a5df5b3.svg"
        },
        873994: (e, t, n) => {
            e.exports = n.p + "b2ce83d133a3d9fa54411e732f2fa74c.svg"
        },
        413369: (e, t, n) => {
            e.exports = n.p + "b820b6002cb6ff7c3c2fb123d72c7866.svg"
        },
        132354: (e, t, n) => {
            e.exports = n.p + "a9009aaba5bfab576a517f6915b3c0b6.svg"
        },
        971402: (e, t, n) => {
            "use strict";
            n.d(t, {
                Zy: () => f,
                vq: () => p,
                jW: () => d
            });
            var r = n(744564),
                o = n(26468),
                i = n(120415),
                s = n(73105),
                u = n(2590);

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        a(e, t, n[t])
                    }))
                }
                return e
            }

            function l(e) {
                r.Z.dispatch({
                    type: "CONTEXT_MENU_OPEN",
                    contextMenu: e
                })
            }

            function f(e) {
                (0, n(973935).flushSync)((function() {
                    r.Z.wait((function() {
                        r.Z.dispatch({
                            type: "CONTEXT_MENU_CLOSE"
                        }).finally(e)
                    }))
                }))
            }

            function p(e, t, n, r) {
                e.stopPropagation();
                if (null == e.currentTarget.contains || e.currentTarget.contains(e.target)) {
                    var a, f, p = 0,
                        d = 0;
                    if ("pageX" in e) {
                        p = e.pageX;
                        d = e.pageY
                    }
                    if (0 === p && 0 === d) {
                        var y, h = null === (y = e.target) || void 0 === y ? void 0 : y.getBoundingClientRect(),
                            _ = null != h ? h : {},
                            O = _.left,
                            E = void 0 === O ? 0 : O,
                            g = _.top,
                            b = void 0 === g ? 0 : g,
                            N = _.width,
                            A = void 0 === N ? 0 : N,
                            R = _.height;
                        p = E + A / 2;
                        d = b + (void 0 === R ? 0 : R) / 2
                    }
                    var m = {
                        render: t,
                        renderLazy: r,
                        target: null !== (a = e.target) && void 0 !== a ? a : e.currentTarget,
                        rect: new DOMRect(p, d, 0, 0),
                        config: c({
                            context: __OVERLAY__ ? u.IlC.OVERLAY : null !== (f = (0, o.GB)()) && void 0 !== f ? f : u.IlC.APP
                        }, n)
                    };
                    if ((null == n ? void 0 : n.enableSpellCheck) && (0, i.nI)()) var S = (0, s.RD)((function() {
                        S();
                        l(m)
                    }));
                    else {
                        e.preventDefault();
                        l(m)
                    }
                }
            }

            function d(e, t, n) {
                p(e, void 0, n, t)
            }
        },
        735885: (e, t, n) => {
            "use strict";
            n.d(t, {
                jN: () => o,
                xf: () => i,
                Ou: () => s
            });
            var r = n(744564);

            function o(e) {
                r.Z.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function i() {
                r.Z.dispatch({
                    type: "LAYER_POP"
                })
            }

            function s() {
                r.Z.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        933599: (e, t, n) => {
            "use strict";
            n.d(t, {
                Xt: () => o,
                sn: () => i,
                tt: () => s,
                Ow: () => u,
                fw: () => a
            });
            var r = n(744564);

            function o(e) {
                r.Z.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function i(e, t) {
                r.Z.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function s() {
                r.Z.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function u(e, t) {
                r.Z.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function a() {
                r.Z.wait((function() {
                    return r.Z.dispatch({
                        type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR"
                    })
                }))
            }
        },
        560923: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => R
            });
            var r = n(281110),
                o = n(575945),
                i = n(744564),
                s = n(852626);
            var u = n(3930),
                a = n(625183),
                c = n(473903),
                l = n(908478),
                f = n(749565),
                p = n(105783),
                d = n(971402),
                y = n(2590),
                h = n(473708);

            function _(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function O(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function E(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        O(e, t, n[t])
                    }))
                }
                return e
            }

            function g(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            s = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(s = (r = n.next()).done); s = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return _(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function b(e) {
                (0, d.Zy)();
                p.Z.show(e)
            }

            function N(e, t) {
                var n = e.status,
                    r = e.body,
                    o = r && r.code;
                switch (n) {
                    case 429:
                        b({
                            title: h.Z.Messages.FRIEND_REQUEST_RATE_LIMITED_HEADER,
                            body: h.Z.Messages.FRIEND_REQUEST_RATE_LIMITED_BODY,
                            confirmText: h.Z.Messages.FRIEND_REQUEST_RATE_LIMITED_BUTTON
                        });
                        break;
                    case 403:
                        if (o === y.evJ.EMAIL_VERIFICATION_REQUIRED) {
                            b({
                                title: h.Z.Messages.FRIEND_REQUEST_REQUIRES_EMAIL_VALIDATION_HEADER,
                                body: h.Z.Messages.FRIEND_REQUEST_REQUIRES_EMAIL_VALIDATION_BODY,
                                confirmText: h.Z.Messages.FRIEND_REQUEST_REQUIRES_EMAIL_VALIDATION_BUTTON,
                                onConfirm: function() {
                                    s.j()
                                }
                            });
                            break
                        }
                    default:
                        if (o === y.evJ.USER_QUARANTINED) ! function() {
                            (0, d.Zy)();
                            (0, u.default)()
                        }();
                        else {
                            if ((0, a.b)(n, o)) break;
                            var i = null != t ? (0, l.N)(o || 0, t) : h.Z.Messages.POMELO_ADD_FRIEND_ERROR;
                            b({
                                title: h.Z.Messages.FRIEND_REQUEST_FAILED_HEADER,
                                body: i,
                                confirmText: h.Z.Messages.OKAY
                            })
                        }
                }
                throw e
            }
            var A = {
                sendRequest: function(e, t, n) {
                    var o = g(e.split("#"), 2),
                        i = o[0],
                        s = o[1];
                    return r.ZP.post({
                        url: y.ANM.USER_RELATIONSHIPS(),
                        body: E({
                            username: i,
                            discriminator: parseInt(s)
                        }, n),
                        context: t,
                        oldFormErrors: !0
                    }).catch((function(t) {
                        N(t, e)
                    }))
                },
                addRelationship: function(e, t) {
                    var n = e.userId,
                        o = e.context,
                        i = e.type,
                        s = e.friendToken,
                        u = e.fromFriendSuggestion,
                        a = e.captchaPayload,
                        l = c.default.getUser(n);
                    return r.ZP.put({
                        url: y.ANM.USER_RELATIONSHIP(n),
                        body: E({
                            type: i,
                            friend_token: s,
                            from_friend_suggestion: u
                        }, a),
                        context: o,
                        oldFormErrors: !0
                    }).then((function() {
                        null == t || t()
                    })).catch((function(e) {
                        N(e, f.ZP.getUserTag(l))
                    }))
                },
                acceptFriendRequest: function(e) {
                    return A.addRelationship(e, (function() {
                        o.uv.announce(h.Z.Messages.A11Y_ANNOUNCEMENT_FRIEND_ACCEPT_REQUEST)
                    }))
                },
                cancelFriendRequest: function(e, t) {
                    return A.removeRelationship(e, t, (function() {
                        o.uv.announce(h.Z.Messages.A11Y_ANNOUNCEMENT_FRIEND_CANCEL_REQUEST)
                    }))
                },
                removeFriend: function(e, t) {
                    A.removeRelationship(e, t, (function() {
                        o.uv.announce(h.Z.Messages.A11Y_ANNOUNCEMENT_FRIEND_REMOVED)
                    }))
                },
                unblockUser: function(e, t) {
                    A.removeRelationship(e, t, (function() {
                        o.uv.announce(h.Z.Messages.A11Y_ANNOUNCEMENT_USER_UNBLOCKED)
                    }))
                },
                removeRelationship: function(e, t, n) {
                    return r.ZP.delete({
                        url: y.ANM.USER_RELATIONSHIP(e),
                        context: t,
                        oldFormErrors: !0
                    }).then((function() {
                        null == n || n()
                    })).catch((function() {
                        o.uv.announce(h.Z.Messages.A11Y_ANNOUNCEMENT_GENERIC_FAIL)
                    }))
                },
                updateRelationship: function(e, t) {
                    return r.ZP.patch({
                        url: y.ANM.USER_RELATIONSHIP(e),
                        body: {
                            nickname: t
                        }
                    })
                },
                fetchRelationships: function() {
                    r.ZP.get({
                        url: y.ANM.USER_RELATIONSHIPS(),
                        oldFormErrors: !0
                    }).then((function(e) {
                        return i.Z.dispatch({
                            type: "LOAD_RELATIONSHIPS_SUCCESS",
                            relationships: e.body
                        })
                    }), (function() {
                        return i.Z.dispatch({
                            type: "LOAD_RELATIONSHIPS_FAILURE"
                        })
                    }))
                },
                confirmClearPendingRelationships: function(e) {
                    ! function(e) {
                        (0, n(577657).Z)(e)
                    }(e)
                },
                clearPendingRelationships: function() {
                    return r.ZP.delete({
                        url: y.ANM.USER_RELATIONSHIPS(),
                        query: {
                            relationship_type: y.OGo.PENDING_INCOMING
                        }
                    }).then((function() {
                        i.Z.dispatch({
                            type: "RELATIONSHIP_PENDING_INCOMING_REMOVED"
                        })
                    })).catch((function() {
                        o.uv.announce(h.Z.Messages.A11Y_ANNOUNCEMENT_GENERIC_FAIL)
                    }))
                }
            };
            const R = A
        },
        758635: (e, t, n) => {
            "use strict";
            n.d(t, {
                W: () => u
            });
            var r = n(281110),
                o = n(744564),
                i = n(239734),
                s = n(2590);

            function u() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                if (i.Z.needsRefresh()) {
                    o.Z.dispatch({
                        type: "LOAD_USER_AFFINITIES"
                    });
                    return r.ZP.get({
                        url: s.ANM.USER_AFFINITIES,
                        retries: e ? 3 : 0,
                        oldFormErrors: !0
                    }).then((function(e) {
                        var t = e.body;
                        o.Z.dispatch({
                            type: "LOAD_USER_AFFINITIES_SUCCESS",
                            affinities: t
                        })
                    }), (function() {
                        o.Z.dispatch({
                            type: "LOAD_USER_AFFINITIES_FAILURE"
                        })
                    }))
                }
                return Promise.resolve()
            }
        },
        734691: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => O
            });
            var r = n(281110),
                o = n(630631),
                i = n(744564),
                s = n(223219),
                u = n(652591),
                a = n(775173),
                c = n(488110),
                l = n(120415),
                f = n(735885),
                p = n(2590),
                d = n(473708);

            function y(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        y(e, t, n[t])
                    }))
                }
                return e
            }

            function _(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }
            const O = {
                open: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                            openWithoutBackstack: !1
                        };
                    i.Z.dispatch(h({
                        type: "USER_SETTINGS_MODAL_OPEN",
                        section: e,
                        subsection: t
                    }, n));
                    (0, f.jN)(p.S9g.USER_SETTINGS)
                },
                init: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    i.Z.dispatch(h({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: e,
                        subsection: t
                    }, n))
                },
                close: function() {
                    var e = s.Z.onClose;
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLOSE"
                    });
                    null != e && e()
                },
                setSection: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    i.Z.dispatch(h({
                        type: "USER_SETTINGS_MODAL_SET_SECTION",
                        section: e,
                        subsection: t
                    }, n))
                },
                clearSubsection: function(e) {
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
                        forSection: e
                    })
                },
                clearScrollPosition: function(e) {
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
                        forSection: e
                    })
                },
                updateAccount: function(e) {
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
                        settings: e
                    })
                },
                submitComplete: function() {
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE"
                    })
                },
                reset: function() {
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_RESET"
                    })
                },
                saveAccountChanges: function(e, t) {
                    var n = this;
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_SUBMIT"
                    });
                    var s = e.username,
                        f = e.email,
                        y = e.emailToken,
                        O = e.password,
                        E = e.avatar,
                        g = e.newPassword,
                        b = e.discriminator,
                        N = t.close;
                    return (0, c.Z)((function(e) {
                        var t = _(h({
                                username: s,
                                email: f,
                                email_token: y,
                                password: O,
                                avatar: E,
                                new_password: g
                            }, e), {
                                discriminator: null != b && "" !== b ? b : void 0
                            }),
                            n = o.Z.get(p.JkL),
                            i = (0, l.xJ)();
                        if (null != i && null != n) {
                            t.push_provider = i;
                            t.push_token = n
                        }
                        var u = o.Z.get(p.scU);
                        if (null != p.mvA && null != u) {
                            t.push_voip_provider = p.mvA;
                            t.push_voip_token = u
                        }
                        return r.ZP.patch({
                            url: p.ANM.ME,
                            oldFormErrors: !0,
                            body: t
                        })
                    }), {
                        checkEnabled: !1,
                        modalProps: {
                            title: d.Z.Messages.TWO_FA_CHANGE_ACCOUNT
                        },
                        hooks: {
                            onEarlyClose: function() {
                                return i.Z.dispatch({
                                    type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                                    errors: {}
                                })
                            }
                        }
                    }).then((function(e) {
                        var t = e.body,
                            r = t.token;
                        u.default.track(p.rMx.USER_AVATAR_UPDATED, {
                            animated: (0, a.xR)(t.avatar)
                        });
                        delete t.token;
                        i.Z.dispatch({
                            type: "UPDATE_TOKEN",
                            token: r,
                            userId: t.id
                        });
                        i.Z.dispatch({
                            type: "CURRENT_USER_UPDATE",
                            user: t
                        });
                        null != g && i.Z.dispatch({
                            type: "USER_PASSWORD_UPDATE",
                            user: t,
                            newPassword: g
                        });
                        null != O && null != g && i.Z.dispatch({
                            type: "PASSWORD_UPDATED",
                            userId: t.id
                        });
                        N ? n.close() : n.submitComplete();
                        return e
                    }), (function(e) {
                        i.Z.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                            errors: e.body
                        });
                        return e
                    }))
                }
            }
        },
        152042: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => f
            });
            var r = n(785893),
                o = (n(667294), n(116094)),
                i = n(249052),
                s = n(2590),
                u = n(203600),
                a = n(473708),
                c = n(750347),
                l = n.n(c);
            const f = function(e) {
                var t, n, c, f = e.subscriptionPlan,
                    p = e.isGift,
                    d = e.isEmbeddedIAP,
                    y = e.renewalInvoice,
                    h = e.paymentSourceType,
                    _ = e.hide,
                    O = e.purchaseType,
                    E = e.productLine;
                if (_) return null;
                if (null != y) {
                    var g = o.ZP.getIntervalForInvoice(y);
                    t = g.intervalType;
                    n = g.intervalCount;
                    c = (0, i.og)((0, i.T4)(y.total, y.currency), t, n)
                } else if (null != f) {
                    t = f.interval;
                    n = f.intervalCount
                }
                var b = "";
                if (d)
                    if (null != c && null != (null == y ? void 0 : y.subscriptionPeriodEnd)) b = a.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_RATE_AND_RENEWAL.format({
                        rate: c,
                        renewalDate: y.subscriptionPeriodEnd
                    });
                    else switch (t) {
                        case u.rV.MONTH:
                            b = 1 === n ? a.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_MONTHLY : a.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_MULTI_MONTH.format({
                                intervalCount: n
                            });
                            break;
                        case u.rV.YEAR:
                            b = a.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_YEARLY;
                            break;
                        case void 0:
                            b = a.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE.format({});
                            break;
                        default:
                            throw new Error("Unexpected interval: ".concat(t))
                    } else if (O === s.GZQ.ONE_TIME)
                        if (E === s.POd.COLLECTIBLES) b = a.Z.Messages.COLLECTIBLES_PURCHASE_DISCLAIMER_PAYMENT;
                        else b = a.Z.Messages.ONE_TIME_PURCHASE_FINE_PRINT;
                else switch (t) {
                    case u.rV.MONTH:
                        b = p ? a.Z.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY : a.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY;
                        b = p ? a.Z.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY : 1 === n ? a.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY : a.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MULTI_MONTH.format({
                            intervalCount: n
                        });
                        break;
                    case u.rV.YEAR:
                        b = p ? a.Z.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_YEARLY : a.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_YEARLY;
                        break;
                    case void 0:
                        b = "";
                        break;
                    default:
                        throw new Error("Unexpected interval: ".concat(t))
                }
                return (0, r.jsxs)(r.Fragment, {
                    children: [b, h === s.HeQ.PAYSAFE_CARD && (0, r.jsx)("div", {
                        className: l().paymentSourceNoticeCopy,
                        children: a.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_PAYSAFECARD
                    }), h === s.HeQ.SOFORT && (0, r.jsxs)("div", {
                        className: l().paymentSourceNoticeCopy,
                        children: [a.Z.Messages.SOFORT_MANDATE_AGREEMENT, " "]
                    })]
                })
            }
        },
        661299: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                s = n(468811),
                u = n.n(s),
                a = n(305484),
                c = n.n(a);

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var f = u().v4();
            const p = function(e) {
                var t, n = e.open,
                    o = e.className,
                    s = e.withHighlight,
                    u = void 0 !== s && s;
                return (0, r.jsxs)("svg", {
                    width: "18",
                    height: "18",
                    className: i()(c().button, o, (t = {}, l(t, c().open, n), l(t, c().withHighlight, u), t)),
                    children: [u && (0, r.jsx)("defs", {
                        children: (0, r.jsxs)("linearGradient", {
                            id: f,
                            x1: "0",
                            y1: "0",
                            x2: "0",
                            y2: "18",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, r.jsx)("stop", {
                                offset: "0",
                                stopColor: "#B473F5"
                            }), (0, r.jsx)("stop", {
                                offset: "1",
                                stopColor: "#E292AA"
                            })]
                        })
                    }), (0, r.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, r.jsx)("path", {
                            d: "M0 0h18v18H0"
                        }), (0, r.jsx)("path", {
                            stroke: u ? "url(#".concat(f, ")") : "currentColor",
                            d: "M4.5 4.5l9 9",
                            strokeLinecap: "round"
                        }), (0, r.jsx)("path", {
                            stroke: u ? "url(#".concat(f, ")") : "currentColor",
                            d: "M13.5 4.5l-9 9",
                            strokeLinecap: "round"
                        })]
                    })]
                })
            }
        },
        934869: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => W
            });
            var r = n(785893),
                o = n(667294),
                i = n(496486),
                s = n.n(i),
                u = n(202351),
                a = n(513328),
                c = n(882723),
                l = n(735885),
                f = n(560923),
                p = n(758635),
                d = n(734691),
                y = n(657539),
                h = n(467345),
                _ = n(543976),
                O = n(840922),
                E = n(793461),
                g = n(239734),
                b = n(473903),
                N = n(459940),
                A = n(107364),
                R = n(641277),
                m = n(691797),
                S = n(644144),
                T = n(116094),
                v = n(749565),
                M = n(2590),
                C = n(203600),
                P = n(473708),
                I = n(867943),
                Z = n.n(I);

            function U(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function w(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function j(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function L(e) {
                L = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return L(e)
            }

            function D(e, t) {
                return !t || "object" !== k(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Y(e, t) {
                Y = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Y(e, t)
            }

            function x(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            s = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(s = (r = n.next()).done); s = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || G(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function B(e) {
                return function(e) {
                    if (Array.isArray(e)) return U(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || G(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var k = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function G(e, t) {
                if (e) {
                    if ("string" == typeof e) return U(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? U(e, t) : void 0
                }
            }

            function F(e) {
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
                    var n, r = L(e);
                    if (t) {
                        var o = L(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return D(this, n)
                }
            }
            var H = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && Y(e, t)
                    }(n, e);
                    var t = F(n);

                    function n() {
                        w(this, n);
                        var e;
                        (e = t.apply(this, arguments)).state = {
                            copyMode: N.Z.Modes.DEFAULT
                        };
                        e._copyModeTimeout = new a.V7;
                        e.handleGiftCodeCopy = function(t, n) {
                            var r = e.props.sku;
                            null != r && (0, S.dM)(new _.Z({
                                code: n,
                                maxUses: 1
                            }), r);
                            try {
                                (0, m.JG)(t);
                                e.setState({
                                    copyMode: N.Z.Modes.SUCCESS
                                })
                            } catch (t) {
                                e.setState({
                                    copyMode: N.Z.Modes.ERROR
                                })
                            }
                            e._copyModeTimeout.start(1500, (function() {
                                e.setState({
                                    copyMode: N.Z.Modes.DEFAULT
                                })
                            }))
                        };
                        e.handleInventoryClick = function() {
                            d.Z.open(M.oAB.INVENTORY);
                            e.props.onClose()
                        };
                        e.renderGiftCodeSection = function() {
                            var t = e.props,
                                n = t.obscureGiftCode,
                                o = t.giftCode;
                            if (null == o) return null;
                            var i, s = e.state.copyMode;
                            switch (s) {
                                case N.Z.Modes.SUCCESS:
                                    i = P.Z.Messages.BILLING_GIFT_COPIED;
                                    break;
                                case N.Z.Modes.ERROR:
                                    i = P.Z.Messages.FAILED;
                                    break;
                                default:
                                    i = P.Z.Messages.COPY
                            }
                            return (0, r.jsx)(A.Z, {
                                direction: A.Z.Direction.VERTICAL,
                                children: (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)(c.FormTitle, {
                                        children: P.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_PRIVATE_LINK
                                    }), null != o && (0, r.jsx)(N.Z, {
                                        hideMessage: n ? P.Z.Messages.GIFT_INVENTORY_HIDDEN : null,
                                        value: (0, S.Nz)(o),
                                        mode: s,
                                        text: i,
                                        onCopy: function(t) {
                                            return e.handleGiftCodeCopy(t, o)
                                        },
                                        supportsCopy: m.wS,
                                        className: Z().copyInput,
                                        buttonColor: N.Z.ButtonColors.LINK,
                                        buttonLook: N.Z.ButtonLooks.LINK
                                    }), (0, r.jsx)("div", {
                                        className: Z().subtext,
                                        children: P.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_SUBTEXT_NO_FORMAT
                                    })]
                                })
                            })
                        };
                        e.renderRequestSendGift = function() {
                            var t = e.props,
                                n = t.giftCode,
                                o = t.onClose,
                                i = t.giftMessageError;
                            return (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)("div", {
                                    className: Z().blurb,
                                    children: e.headerBlurb
                                }), null == i && (0, r.jsx)(V, {
                                    giftCode: n,
                                    onClose: o
                                }), (0,
                                    r.jsx)("div", {
                                    className: Z().divider
                                }), e.renderGiftCodeSection()]
                            })
                        };
                        e.renderConfirmSentGift = function() {
                            var t = e.props.giftRecipient;
                            return (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(y.Z, {
                                    user: t,
                                    className: Z().giftRecipient,
                                    size: c.AvatarSizes.SIZE_80
                                }), (0, r.jsx)(c.Heading, {
                                    className: Z().giftRecipientName,
                                    variant: "heading-md/semibold",
                                    children: v.ZP.getName(t)
                                }), (0, r.jsxs)("div", {
                                    className: Z().giftRecipientTag,
                                    children: [" ", v.ZP.getUserTag(t)]
                                }), (0, r.jsx)("div", {
                                    className: Z().giftSentMessage,
                                    children: e.headerBlurb
                                })]
                            })
                        };
                        return e
                    }
                    var o = n.prototype;
                    o.componentWillUnmount = function() {
                        this._copyModeTimeout.stop()
                    };
                    o.render = function() {
                        var e, t, n = this.props,
                            o = n.application,
                            i = n.selectedGiftStyle,
                            s = n.hasSentMessage,
                            u = n.giftRecipient,
                            a = n.giftMessageError,
                            l = n.isSendingMessage;
                        e = (0,
                            S.a8)(u) ? "" : s && null == a ? P.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_AND_MESSAGE_CONFIRMATION_TITLE : null != a ? P.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_FAILED : P.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_CONFIRMATION_TITLE;
                        t = l ? (0, r.jsx)(c.Spinner, {
                            type: c.SpinnerTypes.PULSING_ELLIPSIS
                        }) : (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(c.Heading, {
                                variant: "heading-lg/semibold",
                                className: null != i ? Z().headerCustomGifting : Z().header,
                                children: e
                            }), s && null != u && null == a || (0, S.a8)(u) ? this.renderConfirmSentGift() : this.renderRequestSendGift()]
                        });
                        return (0, r.jsxs)(A.Z, {
                            direction: A.Z.Direction.VERTICAL,
                            align: A.Z.Align.CENTER,
                            children: [null != o ? (0, r.jsx)(R.Z, {
                                game: o,
                                className: Z().icon,
                                size: R.Z.Sizes.LARGE,
                                skuId: this.iconSKUId
                            }) : null, t]
                        })
                    };
                    ! function(e, t, n) {
                        t && j(e.prototype, t);
                        n && j(e, n)
                    }(n, [{
                        key: "iconSKUId",
                        get: function() {
                            var e = this.props,
                                t = e.subscriptionPlan,
                                n = e.sku;
                            return null != t ? t.skuId : null != n ? n.id : null
                        }
                    }, {
                        key: "headerBlurb",
                        get: function() {
                            var e = this.props,
                                t = e.subscriptionPlan,
                                n = e.hasSentMessage;
                            return null != e.giftMessageError ? P.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_FAILURE_GENERIC_BLURB : null == t ? P.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_BLURB : (t.interval === C.rV.MONTH ? n ? P.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : P.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_MONTHLY : n ? P.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : P.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_YEARLY).format({
                                skuName: (0, T.aq)(t.id),
                                intervalCount: t.intervalCount
                            })
                        }
                    }]);
                    return n
                }(o.Component),
                V = function(e) {
                    var t = e.giftCode,
                        n = e.onClose;
                    o.useEffect((function() {
                        f.Z.fetchRelationships();
                        (0, p.W)()
                    }), []);
                    var i = x(o.useState(), 2),
                        a = i[0],
                        d = i[1],
                        _ = x(o.useState(!1), 2),
                        E = _[0],
                        N = _[1],
                        A = x(o.useState(!1), 2),
                        R = A[0],
                        m = A[1],
                        S = (0, u.cj)([g.Z], (function() {
                            return {
                                userAffinities: g.Z.getUserAffinitiesUserIds(),
                                isLoading: g.Z.getFetching()
                            }
                        })),
                        T = S.userAffinities,
                        M = S.isLoading,
                        C = Array.from(T.values()),
                        I = (0, u.e7)([O.Z], (function() {
                            return O.Z.getFriendIDs()
                        })),
                        U = s().difference(I, C),
                        w = B(C).concat(B(U)),
                        j = (0, u.e7)([b.default], (function() {
                            return b.default.filter((function(e) {
                                return w.includes(e.id) && !e.bot
                            }))
                        }), [w]);
                    if (null == j || 0 === j.length) return null;
                    var L = s().sortBy(j, (function(e) {
                        return w.indexOf(e.id)
                    }));
                    return (0, r.jsxs)("div", {
                        className: Z().giftRecipientSection,
                        children: [(0, r.jsx)(c.FormTitle, {
                            children: P.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SECTION_LABEL
                        }), (0, r.jsxs)("div", {
                            className: Z().giftRecipient,
                            children: [(0, r.jsx)(c.SearchableSelect, {
                                placeholder: P.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SELECT_PLACEHOLDER,
                                wrapperClassName: Z().giftRecipientInputWrapper,
                                className: E ? Z().giftRecipientInputError : void 0,
                                renderOptionPrefix: function(e) {
                                    return null == (null == e ? void 0 : e.value) ? null : (0, r.jsx)(y.Z, {
                                        user: e.value,
                                        size: c.AvatarSizes.SIZE_20
                                    })
                                },
                                renderLeading: function() {
                                    return M ? (0,
                                        r.jsx)(c.Spinner, {
                                        type: c.SpinnerTypes.PULSING_ELLIPSIS
                                    }) : null
                                },
                                value: a,
                                onChange: function(e) {
                                    d(e);
                                    N(!1)
                                },
                                options: L.map((function(e) {
                                    return {
                                        value: e,
                                        label: "".concat(v.ZP.getUserTag(e))
                                    }
                                }))
                            }), (0, r.jsx)(c.Button, {
                                disabled: null == a,
                                submitting: R,
                                className: Z().sendToRecipientButton,
                                onClick: function() {
                                    m(!0);
                                    (0, h.Y)(a, t).then((function() {
                                        n();
                                        (0, l.Ou)()
                                    })).catch((function() {
                                        N(!0);
                                        m(!1)
                                    }))
                                },
                                children: P.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_SEND_NOW_BUTTON
                            })]
                        }), (0, r.jsx)("div", {
                            className: E ? Z().subtextError : Z().subtext,
                            children: E ? P.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_ERROR_SENDING_LINK : P.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SUBTEXT
                        })]
                    })
                };
            const W = u.ZP.connectStores([E.Z], (function() {
                return {
                    obscureGiftCode: E.Z.enabled
                }
            }))(H)
        },
        359891: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => It
            });
            var r = n(785893),
                o = n(667294),
                i = n(468811),
                s = n.n(i),
                u = n(202351),
                a = n(882723),
                c = n(744564),
                l = n(695166),
                f = n(315804),
                p = n(152042),
                d = n(673679),
                y = n(933599),
                h = n(856281),
                _ = n(458823),
                O = n(711531),
                E = n(939065),
                g = n(886664),
                b = n(872589),
                N = n(793461),
                A = n(615796),
                R = n(20405),
                m = n(107364),
                S = n(120415),
                T = n(421281),
                v = n(799105),
                M = n(842257),
                C = n(773262),
                P = n(520983),
                I = n(387652),
                Z = n(886433),
                U = n(608452),
                w = n(473708),
                j = function(e) {
                    var t = e.submitting,
                        n = e.braintreeNonce,
                        o = e.braintreeEmail,
                        i = e.onPaypalContinue,
                        s = e.onReopenPaypal,
                        u = e.renderBackButton,
                        c = 0 !== o.length && null != n;
                    return (0, r.jsxs)(a.ModalFooter, {
                        justify: m.Z.Justify.BETWEEN,
                        direction: m.Z.Direction.HORIZONTAL,
                        children: [u(), (0, r.jsx)(a.Button, {
                            submitting: t,
                            color: c ? a.Button.Colors.BRAND : a.Button.Colors.PRIMARY,
                            onClick: c ? i : s,
                            children: c ? w.Z.Messages.NEXT : w.Z.Messages.PAYMENT_SOURCE_CONNECT_TO_PAYPAL
                        })]
                    })
                },
                L = n(19120),
                D = n(700812),
                Y = n(536713),
                x = n(709189),
                B = n(269295),
                k = n(856236),
                G = n(249052),
                F = n(860856),
                H = n.n(F);

            function V(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function W(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        V(e, t, n[t])
                    }))
                }
                return e
            }

            function K(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }
            var z = function(e) {
                    var t = e.legalNotice,
                        n = e.paymentSources,
                        i = e.price,
                        s = e.hidePersonalInformation,
                        u = e.paymentSourceId,
                        c = e.isGiftable,
                        l = e.isGift,
                        f = e.needsToBeGift,
                        p = e.onPaymentSourceChange,
                        d = e.onPaymentSourceAdd,
                        y = e.onPurchaseTermsChange,
                        h = e.onToggleIsGift,
                        _ = [],
                        O = null != u ? n[u] : null;
                    null != O && O.invalid && _.push((0, r.jsx)(L.Z, {
                        icon: k.Z,
                        color: L.Z.Colors.ERROR,
                        iconSize: L.Z.Sizes.NONE,
                        iconClassName: H().invalidIcon,
                        children: w.Z.Messages.BILLING_PAYMENT_SOURCE_INVALID
                    }, "source_invalid"));
                    null != i && (i.taxInclusive ? _.push((0, r.jsx)(L.Z, {
                        icon: B.Z,
                        color: L.Z.Colors.PRIMARY,
                        iconSize: L.Z.Sizes.LARGE,
                        children: w.Z.Messages.BILLING_SALES_TAX_INCLUDED
                    }, "tax_included")) : i.tax > 0 && _.push((0, r.jsx)(L.Z, {
                        icon: B.Z,
                        color: L.Z.Colors.PRIMARY,
                        iconSize: L.Z.Sizes.LARGE,
                        children: w.Z.Messages.BILLING_SALES_TAX_ADDED.format({
                            tax: (0, G.T4)(i.tax, i.currency)
                        })
                    }, "tax_added")));
                    return (0, r.jsxs)(o.Fragment, {
                        children: [(0, r.jsx)(a.FormTitle, {
                            className: H().formTitle,
                            children: w.Z.Messages.BILLING_PAY_FOR_IT_WITH
                        }), (0, r.jsx)(D.Z, {
                            paymentSources: Object.values(n),
                            selectedPaymentSourceId: u,
                            hidePersonalInformation: s,
                            onChange: p,
                            onPaymentSourceAdd: d
                        }), _, c && (0, r.jsx)(a.Checkbox, {
                            disabled: f,
                            className: H().giftToggle,
                            type: a.Checkbox.Types.INVERTED,
                            value: l,
                            onChange: h,
                            children: (0, r.jsx)("div", {
                                className: H().checkboxLabel,
                                children: w.Z.Messages.BILLING_IS_GIFT_PURCHASE
                            })
                        }), (0, r.jsx)(Y.Z, {
                            onChange: y,
                            forceShow: !0,
                            className: H().purchaseTerms,
                            finePrint: t
                        })]
                    })
                },
                Q = function(e) {
                    var t = e.canSubmit,
                        n = e.submitButtonText,
                        o = e.useShinySubmitButton,
                        i = e.isPurchasing,
                        s = e.hasAcceptedTerms,
                        u = e.paymentSource,
                        c = e.onPurchase,
                        l = e.tooltipText,
                        f = e.needsToBeGift,
                        p = e.isGift,
                        d = null != u && !u.invalid,
                        y = s && !(f && !p) && d && t,
                        h = {
                            submitting: i,
                            color: a.Button.Colors.GREEN,
                            disabled: !y,
                            onClick: c
                        };
                    return (0, r.jsx)(a.ModalFooter, {
                        children: (0, r.jsxs)("div", {
                            className: H().buyButtonTooltipWrapper,
                            children: [h.disabled && null != l ? (0, r.jsx)(a.Tooltip, {
                                text: l,
                                children: function(e) {
                                    return (0, r.jsx)("div", W({
                                        "aria-hidden": !0,
                                        className: H().buyButtonTooltipTarget
                                    }, e))
                                }
                            }) : null, o ? (0,
                                r.jsx)(x.C, K(W({}, h), {
                                children: n
                            })) : (0, r.jsx)(a.Button, K(W({
                                type: "submit"
                            }, h), {
                                children: n
                            }))]
                        })
                    })
                },
                J = function(e) {
                    var t = e.submitting,
                        n = e.braintreeNonce,
                        o = e.venmoUsername,
                        i = e.onVenmoContinue,
                        s = e.onReopenVenmo,
                        u = e.renderBackButton,
                        c = 0 !== o.length && null != n;
                    return (0, r.jsxs)(a.ModalFooter, {
                        justify: m.Z.Justify.BETWEEN,
                        direction: m.Z.Direction.HORIZONTAL,
                        children: [u(), (0, r.jsx)(a.Button, {
                            submitting: t,
                            color: c ? a.Button.Colors.BRAND : a.Button.Colors.PRIMARY,
                            onClick: c ? i : s,
                            children: c ? w.Z.Messages.NEXT : w.Z.Messages.PAYMENT_SOURCE_CONNECT_TO_VENMO
                        })]
                    })
                },
                q = n(2590),
                X = n(667810),
                $ = n.n(X);

            function ee(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function te(e, t, n, r, o, i, s) {
                try {
                    var u = e[i](s),
                        a = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(a) : Promise.resolve(a).then(r, o)
            }

            function ne(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function s(e) {
                            te(i, r, o, s, u, "next", e)
                        }

                        function u(e) {
                            te(i, r, o, s, u, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function re(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function oe(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function ie(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function se(e) {
                se = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return se(e)
            }

            function ue(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        ie(e, t, n[t])
                    }))
                }
                return e
            }

            function ae(e, t) {
                return !t || "object" !== le(t) && "function" != typeof t ? ee(e) : t
            }

            function ce(e, t) {
                ce = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return ce(e, t)
            }
            var le = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function fe(e) {
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
                    var n, r = se(e);
                    if (t) {
                        var o = se(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return ae(this, n)
                }
            }
            var pe = function(e, t) {
                    var n, r, o, i, s = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function u(i) {
                        return function(u) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                                            0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    (r = 0, o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            s.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            s.label++;
                                            r = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = s.ops.pop();
                                            s.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = s.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                s.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && s.label < o[1]) {
                                                s.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && s.label < o[2]) {
                                                s.label = o[2];
                                                s.ops.push(i);
                                                break
                                            }
                                            o[2] && s.ops.pop();
                                            s.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, s)
                                } catch (e) {
                                    i = [6, e];
                                    r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, u])
                        }
                    }
                },
                de = [E.Rg.PAYMENT_TYPE, E.Rg.CREDIT_CARD_INFORMATION, E.Rg.REVIEW],
                ye = [E.Rg.PAYMENT_TYPE, E.Rg.CREDIT_CARD_INFORMATION, E.Rg.REVIEW],
                he = [E.Rg.PAYMENT_TYPE, E.Rg.CREDIT_CARD_INFORMATION, E.Rg.ADDRESS, E.Rg.REVIEW],
                _e = [E.Rg.PAYMENT_TYPE, E.Rg.PAYPAL, E.Rg.PAYPAL_ADDRESS, E.Rg.REVIEW],
                Oe = [E.Rg.PAYMENT_TYPE, E.Rg.PAYMENT_REQUEST_INFO, E.Rg.REVIEW],
                Ee = [E.Rg.PAYMENT_TYPE, E.Rg.ADDRESS, E.Rg.REVIEW],
                ge = [E.Rg.PAYMENT_TYPE, E.Rg.ADDRESS, E.Rg.REVIEW],
                be = [E.Rg.PAYMENT_TYPE, E.Rg.VENMO, E.Rg.VENMO_ADDRESS, E.Rg.REVIEW],
                Ne = (0, T.Mg)($().innerPadding),
                Ae = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && ce(e, t)
                    }(n, e);
                    var t = fe(n);

                    function n() {
                        re(this, n);
                        var e;
                        (e = t.apply(this, arguments)).state = {
                            hasAcceptedNeccessaryTerms: !1,
                            token: null,
                            confirmingCard: !1,
                            stripe: null
                        };
                        e.handleToggleIsGift = function(t, n) {
                            var r = e.props.onIsGiftUpdate;
                            null == r || r(n)
                        };
                        e.handlePurchaseTermsChange = function(t) {
                            e.setState({
                                hasAcceptedNeccessaryTerms: t
                            })
                        };
                        e.handleReopenPaypal = function() {
                            b.i0()
                        };
                        e.handleReopenVenmo = function() {
                            b.og()
                        };
                        e.handleCardInfoChange = function(e, t) {
                            c.Z.wait((function() {
                                return y.sn(e, t)
                            }))
                        };
                        e.handleBillingAddressChange = function(e, t) {
                            c.Z.wait((function() {
                                return y.Ow(e, t)
                            }))
                        };
                        var i = ee(e);
                        e.handleCreditCardAdd = ne((function() {
                            var e, t, n, r, o;
                            return pe(this, (function(s) {
                                switch (s.label) {
                                    case 0:
                                        e = i.props.billingAddressInfo;
                                        t = i.state, n = t.stripe, r = t.token;
                                        s.label = 1;
                                    case 1:
                                        s.trys.push([1, 3, , 4]);
                                        return [4, d.f0(n, r, e)];
                                    case 2:
                                        o = s.sent();
                                        i.props.onPaymentSourceAdd(o.id);
                                        return [3, 4];
                                    case 3:
                                        s.sent();
                                        return [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }));
                        var s, u = ee(e);
                        e.handleStripePaymentRequestAdd = (s = ne((function(e) {
                            var t;
                            return pe(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        y.Xt(e);
                                        if (null == e) {
                                            u.props.onBack();
                                            return [2]
                                        }
                                        n.label = 1;
                                    case 1:
                                        n.trys.push([1, 3, , 4]);
                                        return [4, d.i6(e)];
                                    case 2:
                                        t = n.sent();
                                        u.props.onPaymentSourceAdd(t.id);
                                        return [3, 4];
                                    case 3:
                                        n.sent();
                                        return [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        })), function(e) {
                            return s.apply(this, arguments)
                        });
                        var l = ee(e);
                        e.handlePaypalAdd = ne((function() {
                            var e, t, n, r, o;
                            return pe(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        e = l.props, t = e.braintreeEmail, n = e.braintreeNonce, r = e.billingAddressInfo;
                                        if (0 === t.length || null == n) return [2];
                                        i.label = 1;
                                    case 1:
                                        i.trys.push([1, 3, , 4]);
                                        return [4, d.lP(n, r)];
                                    case 2:
                                        o = i.sent();
                                        l.props.onPaymentSourceAdd(o.id);
                                        return [3, 4];
                                    case 3:
                                        i.sent();
                                        return [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }));
                        var f, p = ee(e);
                        e.handleVenmoAdd = ne((function() {
                            var e, t, n, r, o;
                            return pe(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        e = p.props, t = e.venmoUsername, n = e.braintreeNonce, r = e.billingAddressInfo;
                                        if (0 === t.length || null == n) return [2];
                                        i.label = 1;
                                    case 1:
                                        i.trys.push([1, 3, , 4]);
                                        return [4, d.lP(n, r)];
                                    case 2:
                                        o = i.sent();
                                        p.props.onPaymentSourceAdd(o.id);
                                        return [3, 4];
                                    case 3:
                                        i.sent();
                                        return [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }));
                        e.renderBackButton = function() {
                            var t = e.props,
                                n = t.step,
                                o = t.steps,
                                i = t.paymentSources,
                                s = t.onBack,
                                u = (0, E.Yp)(n, o),
                                c = (0,
                                    E.NW)(u, i) ? w.Z.Messages.BACK : w.Z.Messages.CANCEL;
                            return (0, r.jsx)(a.Button, {
                                look: a.Button.Looks.LINK,
                                className: H().backButton,
                                color: H().backButtonColor,
                                size: H().backButtonSize,
                                onClick: s,
                                children: c
                            })
                        };
                        e.stepRenderer = ue((ie(f = {}, E.Rg.PAYMENT_TYPE, {
                            renderBody: function() {
                                var t = e.props,
                                    n = t.hidePersonalInformation,
                                    i = t.onChoosePaymentType,
                                    s = t.isGiftable,
                                    u = t.needsToBeGift,
                                    c = t.isGift;
                                return n ? (0, r.jsx)(a.FormErrorBlock, {
                                    className: H().errorBlock,
                                    children: w.Z.Messages.BILLING_ERROR_ADD_PAYMENT_SOURCE_STREAMER_MODE
                                }) : (0, r.jsxs)(o.Fragment, {
                                    children: [(0, r.jsx)(M.Z, {
                                        className: H().choosePaymentSourceType,
                                        onChooseType: i,
                                        allowStripeRequestPayments: !S.FB,
                                        onStripePaymentMethodReceived: e.handleStripePaymentRequestAdd
                                    }), s && (0, r.jsx)(a.Checkbox, {
                                        disabled: u,
                                        className: H().giftToggle,
                                        type: a.Checkbox.Types.INVERTED,
                                        value: c,
                                        onChange: e.handleToggleIsGift,
                                        children: (0, r.jsx)("div", {
                                            className: H().checkboxLabel,
                                            children: w.Z.Messages.BILLING_IS_GIFT_PURCHASE
                                        })
                                    })]
                                })
                            },
                            renderFooter: function() {
                                return (0,
                                    r.jsx)(a.ModalFooter, {
                                    direction: m.Z.Direction.HORIZONTAL,
                                    children: e.renderBackButton()
                                })
                            }
                        }), ie(f, E.Rg.PAYMENT_REQUEST_INFO, {
                            renderBody: function() {
                                return (0, r.jsx)(U.k, {
                                    className: H().formItem,
                                    stripePaymentMethod: e.props.stripePaymentMethod,
                                    submitting: e.props.submitting
                                })
                            },
                            renderFooter: function() {
                                return (0, r.jsx)(a.ModalFooter, {
                                    direction: m.Z.Direction.HORIZONTAL,
                                    children: e.renderBackButton()
                                })
                            }
                        }), ie(f, E.Rg.PAYPAL, {
                            renderBody: function() {
                                return (0, r.jsx)(C.Z, {
                                    className: H().formItem
                                })
                            },
                            renderFooter: function() {
                                var t = e.props,
                                    n = t.submitting,
                                    o = t.braintreeNonce,
                                    i = t.braintreeEmail,
                                    s = t.onPaypalContinue,
                                    u = t.paypalClient;
                                return (0, r.jsx)(j, {
                                    submitting: n || null == u,
                                    braintreeNonce: o,
                                    braintreeEmail: i,
                                    onPaypalContinue: s,
                                    onReopenPaypal: e.handleReopenPaypal,
                                    renderBackButton: e.renderBackButton
                                })
                            }
                        }), ie(f, E.Rg.VENMO, {
                            renderBody: function() {
                                return (0, r.jsx)(P.Z, {
                                    className: H().formItem
                                })
                            },
                            renderFooter: function() {
                                var t = e.props,
                                    n = t.submitting,
                                    o = t.braintreeNonce,
                                    i = t.venmoUsername,
                                    s = t.onVenmoContinue,
                                    u = t.venmoClient;
                                return (0, r.jsx)(J, {
                                    submitting: n || null == u,
                                    braintreeNonce: o,
                                    venmoUsername: i,
                                    onVenmoContinue: s,
                                    onReopenVenmo: e.handleReopenVenmo,
                                    renderBackButton: e.renderBackButton
                                })
                            }
                        }), ie(f, E.Rg.CREDIT_CARD_INFORMATION, {
                            renderBody: function() {
                                var t = e.props.billingError;
                                return (0, r.jsx)(Z.j, {
                                    billingError: t,
                                    onCardInfoChange: e.handleCardInfoChange
                                })
                            },
                            renderFooter: function() {
                                var t = e.props,
                                    n = t.isCardInfoValid,
                                    o = t.onCreditCardContinue,
                                    i = e.state,
                                    s = i.stripe,
                                    u = i.confirmingCard,
                                    a = ee(e),
                                    c = function() {
                                        var e = ne((function(e) {
                                            var t;
                                            return pe(this, (function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        a.setState({
                                                            confirmingCard: !0
                                                        });
                                                        n.label = 1;
                                                    case 1:
                                                        n.trys.push([1, 3, 4, 5]);
                                                        return [4, d.qv(s, e)];
                                                    case 2:
                                                        t = n.sent();
                                                        a.setState({
                                                            token: t
                                                        });
                                                        y.fw();
                                                        o();
                                                        return [3, 5];
                                                    case 3:
                                                        n.sent();
                                                        return [3, 5];
                                                    case 4:
                                                        a.setState({
                                                            confirmingCard: !1
                                                        });
                                                        return [7];
                                                    case 5:
                                                        return [2]
                                                }
                                            }))
                                        }));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }();
                                return (0, r.jsx)(g.ElementsConsumer, {
                                    children: function(t) {
                                        var o = t.elements;
                                        return (0, r.jsx)(Z.r, {
                                            isCardInfoValid: n,
                                            submitting: u,
                                            renderBackButton: e.renderBackButton,
                                            onCreditCardContinue: function() {
                                                return c(o)
                                            }
                                        })
                                    }
                                })
                            }
                        }), ie(f, E.Rg.PAYPAL_ADDRESS, {
                            renderBody: function() {
                                var t = e.props,
                                    n = t.billingAddressInfo,
                                    o = t.billingError;
                                return (0, r.jsx)(I.P, {
                                    billingAddressInfo: n,
                                    billingError: o,
                                    onBillingAddressChange: e.handleBillingAddressChange,
                                    paymentSourceType: q.HeQ.PAYPAL
                                })
                            },
                            renderFooter: function() {
                                var t = e.props,
                                    n = t.isBillingAddressInfoValid,
                                    o = t.submitting;
                                return (0, r.jsx)(I.B, {
                                    isBillingAddressInfoValid: n,
                                    submitting: o,
                                    onContinue: e.handlePaypalAdd,
                                    renderBackButton: e.renderBackButton
                                })
                            }
                        }), ie(f, E.Rg.VENMO_ADDRESS, {
                            renderBody: function() {
                                var t = e.props,
                                    n = t.billingAddressInfo,
                                    o = t.billingError;
                                return (0, r.jsx)(I.P, {
                                    billingAddressInfo: n,
                                    billingError: o,
                                    onBillingAddressChange: e.handleBillingAddressChange,
                                    paymentSourceType: q.HeQ.VENMO
                                })
                            },
                            renderFooter: function() {
                                var t = e.props,
                                    n = t.isBillingAddressInfoValid,
                                    o = t.submitting;
                                return (0, r.jsx)(I.B, {
                                    isBillingAddressInfoValid: n,
                                    submitting: o,
                                    onContinue: e.handleVenmoAdd,
                                    renderBackButton: e.renderBackButton
                                })
                            }
                        }), ie(f, E.Rg.ADDRESS, {
                            renderBody: function() {
                                var t = e.props,
                                    n = t.billingAddressInfo,
                                    o = t.billingError,
                                    i = t.steps;
                                return (0, r.jsx)(I.P, {
                                    billingAddressInfo: n,
                                    billingError: o,
                                    onBillingAddressChange: e.handleBillingAddressChange,
                                    paymentSourceType: i === Ee ? q.HeQ.GIROPAY : q.HeQ.CARD
                                })
                            },
                            renderFooter: function() {
                                var t = e.props,
                                    n = t.isBillingAddressInfoValid,
                                    o = t.submitting;
                                return (0, r.jsx)(I.B, {
                                    isBillingAddressInfoValid: n,
                                    submitting: o,
                                    onContinue: e.handleCreditCardAdd,
                                    renderBackButton: e.renderBackButton
                                })
                            }
                        }), ie(f, E.Rg.REVIEW, {
                            renderBody: function() {
                                var t = e.props,
                                    n = t.legalNotice,
                                    o = t.paymentSources,
                                    i = t.price,
                                    s = t.hidePersonalInformation,
                                    u = t.paymentSourceId,
                                    a = t.onReviewPaymentSourceChange,
                                    c = t.onReviewPaymentSourceAdd,
                                    l = t.isGiftable,
                                    f = t.isGift,
                                    p = t.needsToBeGift;
                                return (0, r.jsx)(z, {
                                    legalNotice: n,
                                    paymentSources: o,
                                    price: i,
                                    hidePersonalInformation: s,
                                    paymentSourceId: u,
                                    onPaymentSourceChange: a,
                                    onPaymentSourceAdd: c,
                                    onPurchaseTermsChange: e.handlePurchaseTermsChange,
                                    onToggleIsGift: e.handleToggleIsGift,
                                    isGiftable: l,
                                    isGift: f,
                                    needsToBeGift: p
                                })
                            },
                            renderFooter: function() {
                                var t = e.props,
                                    n = t.canSubmit,
                                    o = t.submitButtonText,
                                    i = t.useShinySubmitButton,
                                    s = t.isPurchasing,
                                    u = t.paymentSourceId,
                                    a = t.onPurchase,
                                    c = t.needsToBeGift,
                                    l = t.isGift,
                                    f = t.paymentSources;
                                return (0, r.jsx)(Q, {
                                    canSubmit: n,
                                    submitButtonText: o,
                                    useShinySubmitButton: i,
                                    isPurchasing: s,
                                    hasAcceptedTerms: e.state.hasAcceptedNeccessaryTerms,
                                    paymentSource: null != u ? f[u] : null,
                                    onPurchase: a,
                                    tooltipText: e.disabledTooltip,
                                    needsToBeGift: c,
                                    isGift: l
                                })
                            }
                        }), ie(f, E.Rg.CONFIRM, {
                            renderBody: q.VqG,
                            renderFooter: q.VqG
                        }), ie(f, E.Rg.AWAITING_AUTHENTICATION, {
                            renderBody: function() {
                                return (0, r.jsx)(a.FormTitle, {
                                    className: H().formTitle,
                                    children: w.Z.Messages.PAYMENT_WAITING_FOR_AUTHENTICATION
                                })
                            },
                            renderFooter: q.VqG
                        }), f), e.props.extraRenderers);
                        return e
                    }
                    var i = n.prototype;
                    i.componentDidMount = function() {
                        var e = this;
                        return ne((function() {
                            var t, n, r, o, i, s;
                            return pe(this, (function(u) {
                                switch (u.label) {
                                    case 0:
                                        b.eI();
                                        t = e.props, n = t.onPaymentSourceChange, r = t.paymentSources, o = t.defaultPaymentSourceId,
                                            i = t.paymentSourceId;
                                        null != n && (null != i && i !== o && null != r[i] ? n(r[i]) : null != o && null != r[o] ? n(r[o]) : n(null));
                                        return [4, (0, v.d2)()];
                                    case 1:
                                        s = u.sent();
                                        e.setState({
                                            stripe: s
                                        });
                                        return [2]
                                }
                            }))
                        }))()
                    };
                    i.componentDidUpdate = function(e) {
                        var t = this.props,
                            n = t.onPaymentSourceChange,
                            r = t.paymentSources,
                            o = t.paymentSourceId;
                        e.paymentSourceId !== o && null != o && null != r[o] && (null == n || n(r[o]))
                    };
                    i.componentWillUnmount = function() {
                        b.gy();
                        y.tt();
                        var e = this.props.onClearError;
                        null == e || e();
                        y.fw()
                    };
                    i.preventDefault = function(e) {
                        e.preventDefault()
                    };
                    i.renderHeader = function() {
                        var e = this.props,
                            t = e.renderHeader,
                            n = e.billingError;
                        return t(e.step, e.steps.map((function(e) {
                            return {
                                id: e,
                                label: (0, E.fO)(e)
                            }
                        })), null == (0, E.ly)(n) ? n : null)
                    };
                    i.render = function() {
                        var e = this.props,
                            t = e.size,
                            n = e.step,
                            o = e.steps,
                            i = e.className,
                            s = e.transitionState,
                            u = this.stepRenderer[n],
                            c = u.renderBody();
                        return (0, r.jsx)(g.Elements, {
                            options: q.OBo,
                            stripe: this.state.stripe,
                            children: (0, r.jsx)(a.ModalRoot, {
                                size: t,
                                className: i,
                                "aria-label": w.Z.Messages.SKU_PAYMENT_STEPS_LABEL,
                                transitionState: s,
                                children: (0, r.jsx)(a.Scroller, {
                                    children: (0, r.jsxs)("form", {
                                        className: H().form,
                                        onSubmit: this.preventDefault,
                                        children: [this.renderHeader(), n !== E.Rg.CONFIRM ? (0, r.jsx)("div", {
                                            className: H().divider
                                        }) : null, null != c && (0, r.jsx)(a.ModalContent, {
                                            className: H().modalContent,
                                            children: (0, r.jsx)("div", {
                                                className: H().content,
                                                children: (0, r.jsx)(a.Sequencer, {
                                                    step: n,
                                                    steps: o,
                                                    sideMargin: Ne,
                                                    children: c
                                                })
                                            })
                                        }), u.renderFooter()]
                                    })
                                })
                            })
                        })
                    };
                    ! function(e, t, n) {
                        t && oe(e.prototype, t);
                        n && oe(e, n)
                    }(n, [{
                        key: "disabledTooltip",
                        get: function() {
                            var e = this.props,
                                t = e.needsToBeGift,
                                n = e.isGift,
                                r = e.isGiftable;
                            return this.state.hasAcceptedNeccessaryTerms ? t && !n ? r ? w.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_ONLY : w.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_ONLY_UNGIFTABLE : null : w.Z.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP
                        }
                    }]);
                    return n
                }(o.PureComponent);
            Ae.defaultProps = {
                canSubmit: !0,
                useShinySubmitButton: !1,
                size: a.ModalSize.SMALL,
                billingError: null,
                extraRenderers: {},
                className: H().modal
            };
            const Re = u.ZP.connectStores([O.Z, h.Z, A.Z, N.Z, R.Z], (function() {
                return {
                    submitting: A.Z.isBusy,
                    paymentSources: O.Z.paymentSources,
                    defaultPaymentSourceId: O.Z.defaultPaymentSourceId,
                    stripePaymentMethod: h.Z.stripePaymentMethod,
                    creditCardInfo: h.Z.getCreditCardInfo(),
                    isCardInfoValid: h.Z.isCardInfoValid,
                    billingAddressInfo: h.Z.getBillingAddressInfo(),
                    isBillingAddressInfoValid: h.Z.isBillingAddressInfoValid,
                    braintreeEmail: h.Z.braintreeEmail,
                    braintreeNonce: h.Z.braintreeNonce,
                    venmoUsername: h.Z.venmoUsername,
                    billingError: h.Z.error,
                    paypalClient: R.Z.getPayPalClient(),
                    venmoClient: R.Z.getVenmoClient(),
                    hidePersonalInformation: N.Z.hidePersonalInformation
                }
            }))(Ae);

            function me(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Se(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function Te(e, t, n, r, o, i, s) {
                try {
                    var u = e[i](s),
                        a = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(a) : Promise.resolve(a).then(r, o)
            }

            function ve(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function s(e) {
                            Te(i, r, o, s, u, "next", e)
                        }

                        function u(e) {
                            Te(i, r, o, s, u, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function Me(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function Ce(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Pe(e) {
                Pe = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Pe(e)
            }

            function Ie(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function Ze(e, t) {
                return !t || "object" !== Le(t) && "function" != typeof t ? Se(e) : t
            }

            function Ue(e, t) {
                Ue = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Ue(e, t)
            }

            function we(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            s = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(s = (r = n.next()).done); s = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || De(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function je(e) {
                return function(e) {
                    if (Array.isArray(e)) return me(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || De(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Le = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function De(e, t) {
                if (e) {
                    if ("string" == typeof e) return me(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? me(e, t) : void 0
                }
            }

            function Ye(e) {
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
                    var n, r = Pe(e);
                    if (t) {
                        var o = Pe(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Ze(this, n)
                }
            }
            var xe = function(e, t) {
                    var n, r, o, i, s = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function u(i) {
                        return function(u) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    (r = 0, o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            s.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            s.label++;
                                            r = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = s.ops.pop();
                                            s.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = s.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                s.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && s.label < o[1]) {
                                                s.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && s.label < o[2]) {
                                                s.label = o[2];
                                                s.ops.push(i);
                                                break
                                            }
                                            o[2] && s.ops.pop();
                                            s.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, s)
                                } catch (e) {
                                    i = [6, e];
                                    r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, u])
                        }
                    }
                },
                Be = [E.Rg.REVIEW, E.Rg.CONFIRM],
                ke = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && Ue(e, t)
                    }(n, e);
                    var t = Ye(n);

                    function n(e) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, n);
                        var r;
                        (r = t.call(this, e))._hasChangedSteps = !1;
                        r.handlePaypalContinue = function() {
                            r.setState({
                                step: E.Rg.PAYPAL_ADDRESS
                            })
                        };
                        r.handleVenmoContinue = function() {
                            r.setState({
                                step: E.Rg.VENMO_ADDRESS
                            })
                        };
                        r.handleCreditCardContinue = function() {
                            r.setState({
                                step: E.Rg.ADDRESS
                            })
                        };
                        r.handleReviewPaymentSourceChange = function(e) {
                            r.setState({
                                paymentSourceId: null != e ? e.id : null
                            })
                        };
                        r.handleReviewPaymentSourceAdd = function() {
                            r.setState({
                                step: E.Rg.PAYMENT_TYPE,
                                steps: ye,
                                paymentSourceId: null
                            });
                            var e = r.props.onClearError;
                            e && e()
                        };
                        r.handleBack = function() {
                            var e = r.props,
                                t = e.paymentSources,
                                n = e.onClose,
                                o = r.state,
                                i = o.step,
                                s = o.steps,
                                u = r.stepsToRender,
                                a = (0, E.Yp)(i, u);
                            if (a > 0) {
                                var c = u[a - 1],
                                    l = c === E.Rg.PAYMENT_TYPE;
                                l && y.fw();
                                r.setState({
                                    step: c,
                                    steps: l ? ye : s
                                })
                            } else if ((0, E.NW)(a, t)) {
                                var f = r.props.defaultPaymentSourceId;
                                r.setState({
                                    step: E.Rg.REVIEW,
                                    steps: de,
                                    paymentSourceId: f
                                })
                            } else n()
                        };
                        r.handleChoosePaymentType = function(e) {
                            switch (e) {
                                case q.HeQ.PAYPAL:
                                    r.setState({
                                        step: E.Rg.PAYPAL,
                                        steps: _e
                                    });
                                    break;
                                case q.HeQ.CARD:
                                    r.setState({
                                        step: E.Rg.CREDIT_CARD_INFORMATION,
                                        steps: he
                                    });
                                    break;
                                case q.HeQ.PAYMENT_REQUEST:
                                    r.setState({
                                        step: E.Rg.PAYMENT_REQUEST_INFO,
                                        steps: Oe
                                    });
                                    break;
                                case q.HeQ.GIROPAY:
                                    r.setState({
                                        step: E.Rg.ADDRESS,
                                        steps: Ee
                                    });
                                    break;
                                case q.HeQ.PAYSAFE_CARD:
                                    r.setState({
                                        step: E.Rg.ADDRESS,
                                        steps: ge
                                    });
                                    break;
                                case q.HeQ.VENMO:
                                    r.setState({
                                        step: E.Rg.VENMO,
                                        steps: be
                                    })
                            }
                        };
                        r.handlePaymentSourceAdd = function(e) {
                            r.setState({
                                step: E.Rg.REVIEW,
                                paymentSourceId: e
                            })
                        };
                        var o = Se(r);
                        r.handlePurchase = ve((function() {
                            var e, t, n, r, i;
                            return xe(this, (function(s) {
                                switch (s.label) {
                                    case 0:
                                        e = o.props, t = e.paymentSources, n = e.onPurchase, r = e.isGift;
                                        if (null == (i = o.state.paymentSourceId)) return [2];
                                        s.label = 1;
                                    case 1:
                                        s.trys.push([1, 3, , 4]);
                                        return [4, n(t[i], r)];
                                    case 2:
                                        s.sent();
                                        o.setState({
                                            steps: Be,
                                            step: E.Rg.CONFIRM
                                        });
                                        return [3, 4];
                                    case 3:
                                        s.sent();
                                        return [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }));
                        r.handleSelectPlan = function() {
                            var e = r.props.paymentSources,
                                t = Object.values(e).length > 0;
                            r.setState({
                                step: t ? E.Rg.REVIEW : E.Rg.PAYMENT_TYPE
                            })
                        };
                        var i = e.defaultPaymentSourceId,
                            s = e.paymentSources,
                            u = e.initialStep,
                            a = Object.values(s).length > 0,
                            c = u;
                        null == c && (c = a ? E.Rg.REVIEW : E.Rg.PAYMENT_TYPE);
                        r.state = {
                            paymentSourceId: i,
                            steps: a ? de : ye,
                            step: c,
                            errorStep: null
                        };
                        return r
                    }
                    var o = n.prototype;
                    o.componentDidMount = function() {
                        O.Z.hasFetchedPaymentSources || d.tZ()
                    };
                    o.componentDidUpdate = function(e, t) {
                        var n = this.props.onStepChange,
                            r = this.state.step;
                        if (r !== t.step) {
                            this._hasChangedSteps = !0;
                            null != n && n(t.step, r)
                        }
                    };
                    o.render = function() {
                        var e, t = this,
                            n = this.props,
                            o = n.isPurchasing,
                            i = n.canSubmit,
                            s = n.submitButtonText,
                            u = n.useShinySubmitButton,
                            a = n.legalNotice,
                            c = n.renderHeader,
                            l = n.onPaymentSourceChange,
                            f = n.price,
                            p = n.onClearError,
                            d = n.size,
                            y = n.renderConfirmationBody,
                            h = n.renderConfirmationFooter,
                            _ = n.className,
                            O = n.isGift,
                            g = n.isGiftable,
                            b = n.needsToBeGift,
                            N = n.onIsGiftUpdate,
                            A = n.transitionState,
                            R = (Ce(e = {}, E.Rg.CONFIRM, {
                                renderBody: y,
                                renderFooter: h
                            }), Ce(e, E.Rg.SELECT_PLAN, {
                                renderBody: function() {
                                    return t.props.renderSelectPlanBody(t.handleSelectPlan)
                                },
                                renderFooter: function() {
                                    return t.props.renderSelectPlanFooter()
                                }
                            }), e),
                            m = this.state,
                            S = m.step,
                            T = m.paymentSourceId,
                            v = this.stepsToRender;
                        return (0, r.jsx)(Re, {
                            transitionState: A,
                            className: _,
                            isPurchasing: o,
                            canSubmit: i,
                            submitButtonText: s,
                            useShinySubmitButton: u,
                            legalNotice: a,
                            renderHeader: c,
                            onPaymentSourceChange: l,
                            price: f,
                            onClearError: p,
                            size: d,
                            extraRenderers: R,
                            step: S,
                            steps: v,
                            paymentSourceId: T,
                            isGiftable: g,
                            isGift: O,
                            needsToBeGift: b,
                            onIsGiftUpdate: N,
                            onBack: this.handleBack,
                            onChoosePaymentType: this.handleChoosePaymentType,
                            onCreditCardContinue: this.handleCreditCardContinue,
                            onPaymentSourceAdd: this.handlePaymentSourceAdd,
                            onPurchase: this.handlePurchase,
                            onPaypalContinue: this.handlePaypalContinue,
                            onVenmoContinue: this.handleVenmoContinue,
                            onReviewPaymentSourceChange: this.handleReviewPaymentSourceChange,
                            onReviewPaymentSourceAdd: this.handleReviewPaymentSourceAdd
                        })
                    };
                    n.getDerivedStateFromProps = function(e, t) {
                        var n = e.billingError,
                            r = e.isAwaitingAuthentication,
                            o = t.errorStep,
                            i = {};
                        if (null == n) null != o && (i.errorStep = null);
                        else {
                            var s = (0, E.ly)(n);
                            if (null != s && s !== t.errorStep) {
                                i.step = s;
                                i.errorStep = s
                            }
                        }
                        null == t.paymentSourceId && null != e.defaultPaymentSourceId && (i.paymentSourceId = e.defaultPaymentSourceId);
                        r ? i.step = E.Rg.AWAITING_AUTHENTICATION : t.step === E.Rg.AWAITING_AUTHENTICATION && (i.step = null != n ? E.Rg.REVIEW : E.Rg.CONFIRM);
                        return i
                    };
                    ! function(e, t, n) {
                        t && Me(e.prototype, t);
                        n && Me(e, n)
                    }(n, [{
                        key: "stepsToRender",
                        get: function() {
                            var e = this.props.prependSteps,
                                t = this.state.steps;
                            return null != e ? je(e).concat(je(t)) : t
                        }
                    }, {
                        key: "closable",
                        get: function() {
                            var e = this.state.step;
                            return 0 === (0, E.Yp)(e, this.stepsToRender) || !this._hasChangedSteps
                        }
                    }]);
                    return n
                }(o.Component);
            ke.defaultProps = {
                useShinySubmitButton: !1,
                needsToBeGift: !1,
                isGiftable: !1,
                isGift: !1,
                renderConfirmationBody: q.VqG,
                renderConfirmationFooter: q.VqG,
                renderSelectPlanBody: q.VqG,
                renderSelectPlanFooter: q.VqG
            };
            const Ge = o.forwardRef((function(e, t) {
                var n = we((0, u.Wu)([O.Z], (function() {
                        return [O.Z.paymentSources, O.Z.defaultPaymentSourceId]
                    })), 2),
                    o = n[0],
                    i = n[1],
                    s = (0, u.e7)([h.Z], (function() {
                        return h.Z.error
                    })),
                    a = we((0, u.Wu)([_.Z], (function() {
                        return [_.Z.error, _.Z.isAwaitingAuthentication]
                    })), 2),
                    c = a[0],
                    l = a[1];
                return (0, r.jsx)(ke, Ie(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            Ce(e, t, n[t])
                        }))
                    }
                    return e
                }({}, e), {
                    ref: t,
                    billingError: null != c ? c : s,
                    paymentSources: o,
                    defaultPaymentSourceId: i,
                    isAwaitingAuthentication: l
                }))
            }));
            var Fe = n(446483),
                He = n(560213),
                Ve = n(94340),
                We = n(959207),
                Ke = n(473903),
                ze = n(151367),
                Qe = n(908434),
                Je = n(746974),
                qe = n(325213),
                Xe = n(669426),
                $e = n(641277),
                et = n(652591),
                tt = n(661123),
                nt = n(557931),
                rt = n(534681),
                ot = n(934869),
                it = n(910740),
                st = n(320641),
                ut = n(122557),
                at = n.n(ut);

            function ct(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function lt(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function ft(e, t, n, r, o, i, s) {
                try {
                    var u = e[i](s),
                        a = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(a) : Promise.resolve(a).then(r, o)
            }

            function pt(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function s(e) {
                            ft(i, r, o, s, u, "next", e)
                        }

                        function u(e) {
                            ft(i, r, o, s, u, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function dt(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function yt(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function ht(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function _t(e) {
                _t = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return _t(e)
            }

            function Ot(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                });
                t && At(e, t)
            }

            function Et(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        ht(e, t, n[t])
                    }))
                }
                return e
            }

            function gt(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function bt(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function Nt(e, t) {
                return !t || "object" !== mt(t) && "function" != typeof t ? lt(e) : t
            }

            function At(e, t) {
                At = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return At(e, t)
            }

            function Rt(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            s = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(s = (r = n.next()).done); s = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return ct(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ct(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var mt = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function St(e) {
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
                    var n, r = _t(e);
                    if (t) {
                        var o = _t(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Nt(this, n)
                }
            }
            var Tt, vt = function(e, t) {
                var n, r, o, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        s.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        s.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = s.ops.pop();
                                        s.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = s.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            s.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && s.label < o[1]) {
                                            s.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && s.label < o[2]) {
                                            s.label = o[2];
                                            s.ops.push(i);
                                            break
                                        }
                                        o[2] && s.ops.pop();
                                        s.trys.pop();
                                        continue
                                }
                                i = t.call(e, s)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };
            ! function(e) {
                e.UNSUPPORTED_OS = "UNSUPPORTED_OS";
                e.TEST_MODE = "TEST_MODE";
                e.GIFT_ONLY = "GIFT_ONLY";
                e.PREORDER = "PREORDER"
            }(Tt || (Tt = {}));
            var Mt = function(e) {
                    Ot(n, e);
                    var t = St(n);

                    function n() {
                        dt(this, n);
                        var e;
                        (e = t.apply(this, arguments)).state = {
                            paymentSourceId: null
                        };
                        e._loadId = s().v4();
                        e._stepStartTime = Date.now();
                        e._flowStartTime = Date.now();
                        e._paymentModalRef = o.createRef();
                        e.handlePaymentSourceChange = function(t) {
                            var n = e.props,
                                r = n.applicationId,
                                o = n.skuId;
                            if (null != t) {
                                f.x2(r, o, t.id);
                                e.setState({
                                    paymentSourceId: t.id
                                })
                            } else {
                                f.x2(r, o, null);
                                e.setState({
                                    paymentSourceId: null
                                })
                            }
                        };
                        var i, u = lt(e);
                        e.handlePurchase = (i = pt((function(e) {
                            var t, n, r, o, i, s, a;
                            return vt(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        t = u.props, n = t.applicationId, r = t.sku;
                                        o = u.getPrice();
                                        i = null != o ? o.amount : 0;
                                        s = null != o ? o.currency : q.pKx.USD;
                                        if (null == r) throw new Error("SKU is null during purchase");
                                        if (Qe.Z.isPurchasingSKU) return [2];
                                        c.label = 1;
                                    case 1:
                                        c.trys.push([1, 3, , 4]);
                                        et.default.track(q.rMx.PAYMENT_FLOW_COMPLETED, gt(Et({}, u.getBaseAnalyticsData()), {
                                            duration_ms: Date.now() - u._flowStartTime
                                        }));
                                        return [4, f.ZZ(n, r.id, {
                                            expectedAmount: i,
                                            expectedCurrency: s,
                                            paymentSource: e,
                                            analyticsLoadId: u._loadId,
                                            isGift: u.isGift
                                        })];
                                    case 2:
                                        c.sent();
                                        (0, l.Bv)();
                                        return [3, 4];
                                    case 3:
                                        a = c.sent();
                                        et.default.track(q.rMx.PAYMENT_FLOW_FAILED, gt(Et({}, u.getBaseAnalyticsData()), {
                                            payment_gateway: e.type === q.HeQ.CARD ? q.gg$.STRIPE : q.gg$.BRAINTREE,
                                            payment_source_id: e.id,
                                            duration_ms: Date.now() - u._flowStartTime,
                                            payment_error_code: a.code
                                        }));
                                        throw a;
                                    case 4:
                                        return [2]
                                }
                            }))
                        })), function(e) {
                            return i.apply(this, arguments)
                        });
                        e.handleClose = function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                n = e.props.onClose;
                            n(t)
                        };
                        e.handleStepChange = function(t, n) {
                            var r = Date.now();
                            et.default.track(q.rMx.PAYMENT_FLOW_STEP, gt(Et({}, e.getBaseAnalyticsData()), {
                                from_step: t,
                                to_step: n,
                                step_duration_ms: r - e._stepStartTime,
                                flow_duration_ms: r - e._flowStartTime
                            }));
                            e._stepStartTime = r;
                            n === E.Rg.CONFIRM && f.WD()
                        };
                        e.renderHeader = function(t, n, o) {
                            var i = e.props.application;
                            return t === E.Rg.CONFIRM ? null != i ? (0, r.jsx)(Fe.Z, {
                                application: i,
                                splashSize: 880
                            }) : null : e.renderDefaultHeader(t, n, o)
                        };
                        e.renderConfirmation = function() {
                            var t = e.props,
                                n = t.application,
                                o = t.sku,
                                i = t.isIAP,
                                s = t.giftCode;
                            if (null == o || null == n) throw new Error("No SKU for confirmation step!");
                            return (0, r.jsx)("div", {
                                className: at().confirmContent,
                                children: (0, r.jsxs)(m.Z, {
                                    direction: m.Z.Direction.VERTICAL,
                                    children: [(0, r.jsx)(a.ModalCloseButton, {
                                        onClick: function() {
                                            return e.handleClose()
                                        },
                                        className: at().confirmCloseButton
                                    }), null != s ? (0, r.jsx)(ot.Z, {
                                        giftCode: s,
                                        application: n,
                                        sku: o,
                                        onClose: function() {
                                            return e.handleClose()
                                        }
                                    }) : (0, r.jsx)(it.Z, {
                                        application: n,
                                        sku: o,
                                        isIAP: i,
                                        onClose: function() {
                                            return e.handleClose()
                                        }
                                    })]
                                })
                            })
                        };
                        return e
                    }
                    var i = n.prototype;
                    i.getSkuPrice = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state,
                            n = e.prices,
                            r = t.paymentSourceId;
                        return null == n ? null : n[null != r ? r : Qe.c]
                    };
                    i.componentDidMount = function() {
                        var e = this,
                            t = this.props,
                            n = t.sku,
                            r = t.skuId,
                            o = t.applicationId;
                        null == n ? f.jU(o, r).catch((function(t) {
                            return e.handleClose(t.message)
                        })) : et.default.track(q.rMx.PAYMENT_FLOW_STARTED, this.getBaseAnalyticsData())
                    };
                    i.componentDidUpdate = function(e, t) {
                        null == e.sku && null != this.props.sku && et.default.track(q.rMx.PAYMENT_FLOW_STARTED, this.getBaseAnalyticsData());
                        this.checkPriceChange(this.getSkuPrice(e, t), this.getSkuPrice())
                    };
                    i.checkPriceChange = function(e, t) {
                        var n = this.props,
                            r = n.sku,
                            o = n.onClose;
                        null != e && null != t && e.discount_percent_off !== t.discount_percent_off && c.Z.wait((function() {
                            if (null == r) throw new Error("Unexpected null SKU");
                            o(q.G5l)
                        }))
                    };
                    i.getPrice = function() {
                        var e = this.props,
                            t = e.sku,
                            n = e.isFetchingSKU;
                        if (null == t || n) return null;
                        var r = this.getSkuPrice();
                        if (null != r) return {
                            amount: r.amount,
                            tax: r.tax,
                            taxInclusive: r.tax_inclusive,
                            currency: r.currency
                        };
                        if (null == this.state.paymentSourceId) {
                            var o = t.getPrice();
                            if (null == o) throw new Error("Sku Price cannot be null");
                            return {
                                amount: o.amount,
                                tax: 0,
                                taxInclusive: !1,
                                currency: o.currency
                            }
                        }
                        return null
                    };
                    i.getBaseAnalyticsData = function() {
                        var e = this.props,
                            t = e.sku,
                            n = e.analyticsLocation,
                            r = e.appContext,
                            o = e.promotionId;
                        if (null == t) return {};
                        var i = this.getPrice();
                        return gt(Et({}, (0, Ve.Z)(t)), {
                            load_id: this._loadId,
                            payment_type: q.Zuq[q.GZQ.ONE_TIME],
                            is_gift: this.isGift,
                            client_event_source: r === q.IlC.OVERLAY ? q.IlC.OVERLAY : null,
                            location: n,
                            price: null != i ? i.amount : null,
                            currency: null != i ? i.currency : null,
                            location_promotion_id: o
                        })
                    };
                    i.renderPurchaseWarning = function() {
                        var e = this.props,
                            t = e.sku,
                            n = e.isInTestMode,
                            i = e.isIAP,
                            s = e.isUserEntitledToSku;
                        if (null == t) return null;
                        var u = (0, rt.hX)((0, S.Xf)()),
                            a = [];
                        null != u && t.supportedOperatingSystems.includes(u) || i || a.push((0, r.jsx)(L.Z, {
                            icon: k.Z,
                            iconSize: L.Z.Sizes.SMALL,
                            color: L.Z.Colors.WARNING,
                            className: at().errorBlock,
                            children: w.Z.Messages.APPLICATION_STORE_PURCHASE_GAME_CURRENT_OS_UNSUPPORTED
                        }, Tt.UNSUPPORTED_OS));
                        n && a.push((0, r.jsx)(L.Z, {
                            icon: k.Z,
                            iconSize: L.Z.Sizes.SMALL,
                            color: L.Z.Colors.WARNING,
                            className: at().errorBlock,
                            children: w.Z.Messages.APPLICATION_STORE_PURCHASE_TEST_MODE
                        }, Tt.TEST_MODE));
                        !0 === s && this.isGiftable && a.push((0, r.jsx)(L.Z, {
                            icon: k.Z,
                            iconSize: L.Z.Sizes.SMALL,
                            color: L.Z.Colors.PRIMARY,
                            className: at().errorBlock,
                            children: w.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_ONLY
                        }, Tt.GIFT_ONLY));
                        t.isPreorder() && a.push((0, r.jsx)(L.Z, {
                            icon: k.Z,
                            iconSize: L.Z.Sizes.SMALL,
                            color: L.Z.Colors.PRIMARY,
                            className: at().errorBlock,
                            children: w.Z.Messages.APPLICATION_STORE_PURCHASE_WARNING_PREORDER.format({
                                date: (0, nt.en)(t)
                            })
                        }, Tt.PREORDER));
                        return (0, r.jsx)(o.Fragment, {
                            children: a
                        })
                    };
                    i.renderGenericError = function(e, t) {
                        return null == e && null == t ? null : (0, r.jsx)(a.FormErrorBlock, {
                            className: at().errorBlock,
                            children: null != e ? e.message : null != t ? t.message : null
                        })
                    };
                    i.renderDefaultHeader = function(e, t, n) {
                        var o = this,
                            i = this.props,
                            s = i.isIAP,
                            u = i.application,
                            c = i.sku,
                            l = i.purchaseError;
                        if (null == c || null == u) return null;
                        var f = this.getPrice();
                        return (0, r.jsxs)(a.ModalHeader, {
                            direction: m.Z.Direction.VERTICAL,
                            align: m.Z.Align.START,
                            separator: !1,
                            children: [(0, r.jsx)(Fe.Z, {
                                application: u,
                                splashSize: 880
                            }), (0, r.jsxs)(m.Z, {
                                align: m.Z.Align.CENTER,
                                className: at().headerHeader,
                                children: [(0, r.jsx)(a.FormTitle, {
                                    tag: a.FormTitleTags.H4,
                                    children: (0, st.Y)(s, c.type)
                                }), (0, r.jsx)(a.ModalCloseButton, {
                                    onClick: function() {
                                        return o.handleClose()
                                    }
                                })]
                            }), (0, r.jsxs)(m.Z, {
                                align: m.Z.Align.CENTER,
                                className: at().headerContent,
                                children: [(0, r.jsxs)(m.Z, {
                                    align: m.Z.Align.CENTER,
                                    children: [(0, r.jsx)($e.Z, {
                                        game: u
                                    }), (0, r.jsx)("div", {
                                        className: at().applicationName,
                                        children: c.name
                                    })]
                                }), (0, r.jsx)("div", {
                                    className: at().price,
                                    children: null != f ? (0, G.T4)(f.amount, f.currency) : (0, r.jsx)(a.Spinner, {
                                        type: a.Spinner.Type.PULSING_ELLIPSIS,
                                        className: at().priceSpinner
                                    })
                                })]
                            }), this.renderPurchaseWarning(), this.renderGenericError(l, n), t.length > 1 ? (0, r.jsx)(Xe.Z, {
                                activeId: e,
                                breadcrumbs: t,
                                className: at().breadcrumbs
                            }) : null]
                        })
                    };
                    i.render = function() {
                        var e = this,
                            t = this.props,
                            n = t.sku,
                            o = t.isFetchingSKU,
                            i = t.isPurchasing,
                            s = t.isEmbeddedIAP,
                            u = t.purchaseError,
                            c = t.isUserEntitledToSku,
                            l = t.forceConfirmationStepOnMount,
                            d = t.transitionState;
                        return null == n || o ? (0, r.jsx)(a.Spinner, {}) : (0, r.jsx)(Ge, {
                            ref: this._paymentModalRef,
                            transitionState: d,
                            canSubmit: null != this.getSkuPrice(),
                            needsToBeGift: n.type === q.epS.DURABLE_PRIMARY && !0 === c,
                            isGiftable: this.isGiftable,
                            legalNotice: s ? (0, r.jsx)(p.Z, {
                                isEmbeddedIAP: s
                            }) : null,
                            isPurchasing: i,
                            purchaseError: u,
                            price: this.getPrice(),
                            size: a.ModalSize.SMALL,
                            onPurchase: this.handlePurchase,
                            onIsGiftUpdate: f.x9,
                            onPaymentSourceChange: this.handlePaymentSourceChange,
                            onClose: function() {
                                return e.handleClose()
                            },
                            onClearError: f.pB,
                            renderHeader: this.renderHeader,
                            renderConfirmationBody: this.renderConfirmation,
                            submitButtonText: this.isGift ? w.Z.Messages.APPLICATION_STORE_BUY_GIFT : w.Z.Messages.APPLICATION_STORE_BUY,
                            initialStep: l ? E.Rg.CONFIRM : null,
                            onStepChange: this.handleStepChange,
                            isGift: this.isGift
                        })
                    };
                    ! function(e, t, n) {
                        t && yt(e.prototype, t);
                        n && yt(e, n)
                    }(n, [{
                        key: "closable",
                        get: function() {
                            var e = this._paymentModalRef.current;
                            return null != e && e.closable
                        }
                    }, {
                        key: "isGiftable",
                        get: function() {
                            var e = this.props.sku;
                            return null != e && e.isGiftable(this.getPrice())
                        }
                    }, {
                        key: "isGift",
                        get: function() {
                            return this.props.isGift && this.isGiftable
                        }
                    }]);
                    return n
                }(o.PureComponent),
                Ct = o.forwardRef((function(e, t) {
                    var n, o, i = e.applicationId,
                        s = e.skuId,
                        a = bt(e, ["applicationId", "skuId"]),
                        c = (0, u.e7)([We.Z], (function() {
                            return We.Z.getGame(i)
                        })),
                        l = (0, tt.yE)(null !== (n = null == c ? void 0 : c.flags) && void 0 !== n ? n : 0, q.udG.EMBEDDED) && (0, tt.yE)(null !== (o = null == c ? void 0 : c.flags) && void 0 !== o ? o : 0, q.udG.EMBEDDED_IAP),
                        f = Rt((0, u.Wu)([Qe.Z], (function() {
                            return [Qe.Z.getPricesForSku(s), Qe.Z.isPurchasingSKU, Qe.Z.error, Qe.Z.analyticsLocation, Qe.Z.promotionId, Qe.Z.giftCode, Qe.Z.isGift, Qe.Z.isIAP, Qe.Z.forceConfirmationStepOnMount]
                        })), 9),
                        p = f[0],
                        d = f[1],
                        y = f[2],
                        h = f[3],
                        O = f[4],
                        E = f[5],
                        g = f[6],
                        b = f[7],
                        N = f[8],
                        A = Rt((0, u.Wu)([Je.Z], (function() {
                            return [Je.Z.get(s), Je.Z.isFetching(s)]
                        })), 2),
                        R = A[0],
                        m = A[1],
                        S = (0, u.e7)([He.Z, qe.Z], (function() {
                            return qe.Z.inTestModeForApplication(i) || He.Z.inDevModeForApplication(i)
                        }), [i]),
                        T = (0, u.e7)([ze.Z, Ke.default], (function() {
                            return ze.Z.isEntitledToSku(Ke.default.getCurrentUser(), s, i)
                        })),
                        v = (0, u.e7)([_.Z], (function() {
                            return _.Z.error
                        }));
                    return (0,
                        r.jsx)(Mt, gt(Et({}, a), {
                        application: c,
                        applicationId: i,
                        skuId: s,
                        prices: p,
                        isPurchasing: d,
                        purchaseError: null != v ? v : y,
                        analyticsLocation: h,
                        promotionId: O,
                        isIAP: b,
                        giftCode: E,
                        isGift: g,
                        forceConfirmationStepOnMount: N,
                        sku: R,
                        isFetchingSKU: m,
                        isInTestMode: S,
                        isUserEntitledToSku: T,
                        isEmbeddedIAP: l,
                        ref: t
                    }))
                })),
                Pt = function(e) {
                    Ot(n, e);
                    var t = St(n);

                    function n() {
                        dt(this, n);
                        var e;
                        (e = t.apply(this, arguments))._skuPaymentModalRef = o.createRef();
                        return e
                    }
                    var i = n.prototype;
                    i.close = function() {
                        null != this._skuPaymentModalRef.current && this._skuPaymentModalRef.current.closable && this.handleClose()
                    };
                    i.handleClose = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                        this.props.onClose(e)
                    };
                    i.render = function() {
                        var e = this;
                        return (0, r.jsx)(Ct, gt(Et({}, this.props), {
                            ref: this._skuPaymentModalRef,
                            onClose: function() {
                                return e.handleClose()
                            }
                        }))
                    };
                    return n
                }(o.PureComponent);
            const It = Pt
        },
        919244: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => E
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                s = n.n(i),
                u = n(882723),
                a = n(473708),
                c = n(775823),
                l = n.n(c);

            function f(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e) {
                p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return p(e)
            }

            function d(e, t) {
                return !t || "object" !== h(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function y(e, t) {
                y = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return y(e, t)
            }
            var h = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function _(e) {
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
                    var n, r = p(e);
                    if (t) {
                        var o = p(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return d(this, n)
                }
            }
            var O = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && y(e, t)
                }(n, e);
                var t = _(n);

                function n() {
                    f(this, n);
                    var e;
                    (e = t.apply(this, arguments)).state = {
                        code: "",
                        errorMessage: "",
                        retrySuccess: !1
                    };
                    e.setRef = function(t) {
                        e._input = t
                    };
                    e.getLabelText = function() {
                        var t;
                        return null !== (t = e.props.label) && void 0 !== t ? t : e.props.disallowBackupCodes ? a.Z.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : a.Z.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    };
                    e.getSupportedCodeTypes = function() {
                        return e.props.disallowBackupCodes ? a.Z.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : a.Z.Messages.TWO_FA_AUTH_CODE
                    };
                    e.getPlaceholder = function() {
                        return e.props.forceNoPlaceholder ? null : null !== (t = e.props.placeholder) && void 0 !== t ? t : e.getSupportedCodeTypes();
                        var t
                    };
                    e.errorPresent = function() {
                        return null != e.props.error && "" !== e.props.error || null != e.state.errorMessage && "" !== e.state.errorMessage
                    };
                    e.handleRetry = function() {
                        var t = e.props.onRetry;
                        null == t || t().then((function() {
                            return e.setState({
                                retrySuccess: !0
                            })
                        }))
                    };
                    e.handleSubmit = function(t) {
                        t.preventDefault();
                        var n = e.props,
                            r = n.handleSubmit,
                            o = n.onError;
                        r(e.state.code).catch((function(t) {
                            if (null != t.body) {
                                null == o || o(t.body);
                                t.body.message && e.setState({
                                    errorMessage: t.body.message
                                })
                            }
                        }))
                    };
                    e.handleCancel = function() {
                        var t = e.props,
                            n = t.onClose,
                            r = t.handleEarlyClose;
                        n();
                        null == r || r()
                    };
                    e.handleCodeChange = function(t) {
                        e.setState({
                            code: t
                        })
                    };
                    return e
                }
                n.prototype.render = function() {
                    var e, t = this.props,
                        n = t.title,
                        i = t.actionText,
                        c = t.children,
                        f = t.error,
                        p = t.isLoading,
                        d = t.maxLength,
                        y = t.transitionState,
                        h = t.helpMessage,
                        _ = t.retryPrompt,
                        O = t.retrySuccessMessage,
                        E = this.state,
                        g = E.code,
                        b = E.errorMessage,
                        N = E.retrySuccess,
                        A = o.Children.count(c) > 0 ? (0, r.jsx)(u.Card, {
                            type: u.Card.Types.WARNING,
                            className: l().card,
                            children: (0,
                                r.jsx)(u.Text, {
                                variant: "text-md/normal",
                                children: c
                            })
                        }) : null,
                        R = null != _ ? (0, r.jsxs)(u.Text, {
                            className: s()(l().submitText, l().spacing),
                            variant: "text-sm/normal",
                            children: [(0, r.jsx)("br", {}), (0, r.jsx)(u.Clickable, {
                                className: s()(l().spacing, l().link),
                                onClick: this.handleRetry,
                                children: (0, r.jsx)(u.Anchor, {
                                    children: _
                                })
                            })]
                        }) : null,
                        m = N ? (0, r.jsx)(u.Card, {
                            type: u.Card.Types.SUCCESS,
                            className: l().card,
                            children: (0, r.jsx)(u.Text, {
                                variant: "text-md/normal",
                                children: O
                            })
                        }) : null;
                    return (0, r.jsx)(u.ModalRoot, {
                        transitionState: y,
                        children: (0, r.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, r.jsx)(u.ModalHeader, {
                                separator: !1,
                                children: (0, r.jsx)(u.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: n
                                })
                            }), (0, r.jsxs)(u.ModalContent, {
                                children: [null != h ? (0, r.jsx)(u.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: l().spacing,
                                    children: h
                                }) : null, A, m, (0, r.jsxs)(u.FormItem, {
                                    title: this.getLabelText(),
                                    className: l().spacing,
                                    children: [(0, r.jsx)(u.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != d ? d : 10,
                                        value: g,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, r.jsx)(u.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: l().error,
                                        children: null != f ? f : b
                                    }) : null, R]
                                })]
                            }), (0, r.jsxs)(u.ModalFooter, {
                                children: [(0, r.jsx)(u.Button, {
                                    type: "submit",
                                    disabled: p || 0 === g.length,
                                    children: null != i ? i : a.Z.Messages.CONFIRM
                                }), (0, r.jsx)(u.Button, {
                                    onClick: this.handleCancel,
                                    disabled: p,
                                    look: u.Button.Looks.LINK,
                                    color: u.Button.Colors.PRIMARY,
                                    children: a.Z.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                };
                return n
            }(o.PureComponent);
            O.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            const E = O
        },
        973889: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => f
            });
            var r = n(281110),
                o = n(2590),
                i = n(473708);

            function s(e) {
                s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return s(e)
            }

            function u(e, t) {
                return !t || "object" !== c(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function a(e, t) {
                a = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return a(e, t)
            }
            var c = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function l(e) {
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
                    var n, r = s(e);
                    if (t) {
                        var o = s(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return u(this, n)
                }
            }
            var f = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && a(e, t)
                }(n, e);
                var t = l(n);

                function n(e, r) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    return t.call(this, e, r, i.Z.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: o.yXt.STATUS
                    }))
                }
                return n
            }(r.ZP.V6OrEarlierAPIError)
        },
        662478: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var r = n(667294);

            function o(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function i(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            s = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(s = (r = n.next()).done); s = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return o(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function s(e) {
                var t = i((0, r.useState)(!1), 2),
                    n = t[0],
                    o = t[1],
                    s = (0, r.useRef)(e.current);
                (0, r.useEffect)((function() {
                    s.current = e.current
                }), [e]);
                (0, r.useEffect)((function() {
                    var e = s.current;
                    if (null != e) {
                        var t = function() {
                                return o(!0)
                            },
                            n = function() {
                                return o(!1)
                            };
                        e.addEventListener("mouseenter", t);
                        e.addEventListener("mouseleave", n);
                        return function() {
                            e.removeEventListener("mouseenter", t);
                            e.removeEventListener("mouseleave", n)
                        }
                    }
                }), [s]);
                return n
            }
        },
        560213: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => E
            });
            var r = n(202351),
                o = n(744564),
                i = n(661123),
                s = n(2590);

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function c(e) {
                c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return c(e)
            }

            function l(e, t) {
                return !t || "object" !== p(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function f(e, t) {
                f = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return f(e, t)
            }
            var p = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function d(e) {
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
                    var n, r = c(e);
                    if (t) {
                        var o = c(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return l(this, n)
                }
            }
            var y = {
                    isEnabled: !1,
                    lastUsedObject: {},
                    useActivityUrlOverride: !1,
                    activityUrlOverride: null,
                    filter: ""
                },
                h = null,
                _ = [];
            var O = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && f(e, t)
                }(n, e);
                var t = d(n);

                function n() {
                    u(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    y = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))));
                            r.forEach((function(t) {
                                a(e, t, n[t])
                            }))
                        }
                        return e
                    }({}, {
                        isEnabled: !1,
                        lastUsedObject: {},
                        useActivityUrlOverride: !1,
                        activityUrlOverride: null,
                        filter: ""
                    }, null != e ? e : {})
                };
                r.getState = function() {
                    return y
                };
                r.getIsEnabled = function() {
                    return y.isEnabled
                };
                r.getLastUsedObject = function() {
                    return y.lastUsedObject
                };
                r.getUseActivityUrlOverride = function() {
                    return y.useActivityUrlOverride
                };
                r.getActivityUrlOverride = function() {
                    return y.activityUrlOverride
                };
                r.getFetchState = function() {
                    return h
                };
                r.getFilter = function() {
                    return y.filter
                };
                r.getDeveloperShelfItems = function() {
                    return _
                };
                r.isApplicationInDevShelf = function(e) {
                    return null != _.find((function(t) {
                        return t.id === e
                    }))
                };
                r.inDevModeForApplication = function(e) {
                    return y.isEnabled && this.isApplicationInDevShelf(e)
                };
                r.__getLocalVars = function() {
                    return {
                        state: y,
                        fetchState: h,
                        developerShelfItems: _
                    }
                };
                return n
            }(r.ZP.PersistedStore);
            O.displayName = "DeveloperActivityShelfStore";
            O.persistKey = "DeveloperActivityShelfStore";
            const E = new O(o.Z, {
                LOGOUT: function() {
                    y = {
                        isEnabled: !1,
                        lastUsedObject: {},
                        useActivityUrlOverride: !1,
                        activityUrlOverride: null,
                        filter: ""
                    };
                    h = null;
                    _ = []
                },
                DEVELOPER_ACTIVITY_SHELF_TOGGLE_ENABLED: function() {
                    y.isEnabled = !y.isEnabled
                },
                DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE: function() {
                    y.useActivityUrlOverride = !y.useActivityUrlOverride
                },
                DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE: function(e) {
                    var t = e.activityUrlOverride;
                    y.activityUrlOverride = t
                },
                DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED: function(e) {
                    var t = e.applicationId,
                        n = e.timestamp;
                    if (null == _.find((function(e) {
                            return e.id === t
                        }))) return !1;
                    y.lastUsedObject[t] = n
                },
                DEVELOPER_ACTIVITY_SHELF_FETCH_START: function() {
                    h = "loading"
                },
                DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: function(e) {
                    var t = e.items;
                    h = "loaded";
                    _ = t.filter((function(e) {
                        return null != e.flags && (0, i.yE)(e.flags, s.udG.EMBEDDED)
                    }))
                },
                DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL: function(e) {
                    e.type;
                    h = "errored"
                },
                DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER: function(e) {
                    var t = e.filter;
                    y.filter = t
                }
            })
        },
        269116: (e, t, n) => {
            "use strict";
            n.d(t, {
                I: () => _,
                Z: () => O
            });
            var r = n(496486),
                o = n.n(r),
                i = n(306472),
                s = n(296602),
                u = n(120415),
                a = n(310126);

            function c(e, t, n, r, o, i, s) {
                try {
                    var u = e[i](s),
                        a = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(a) : Promise.resolve(a).then(r, o)
            }

            function l(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function s(e) {
                            c(i, r, o, s, u, "next", e)
                        }

                        function u(e) {
                            c(i, r, o, s, u, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }
            var f, p = function(e, t) {
                    var n, r, o, i, s = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function u(i) {
                        return function(u) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    (r = 0, o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            s.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            s.label++;
                                            r = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = s.ops.pop();
                                            s.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = s.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                s.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && s.label < o[1]) {
                                                s.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && s.label < o[2]) {
                                                s.label = o[2];
                                                s.ops.push(i);
                                                break
                                            }
                                            o[2] && s.ops.pop();
                                            s.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, s)
                                } catch (e) {
                                    i = [6, e];
                                    r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, u])
                        }
                    }
                },
                d = [];

            function y(e) {
                e = e.toLowerCase();
                (0, u.ED)() && (e = (e = e.replace(/^[a-z]:/, "")).replace(/\\/g, "/"));
                return e
            }

            function h(e) {
                if (null != e && "" !== e) {
                    (e = y(e)).endsWith("/") || (e += "/");
                    d.push(e)
                }
            }

            function _(e, t) {
                e = y(e);
                var n = !1;
                d.forEach((function(t) {
                    if (!n && e.startsWith(t)) {
                        e = e.substr(t.length);
                        n = !0
                    }
                }));
                n || (e = e.split("/").pop());
                t || (e = e.includes("dosbox.exe") ? e.split("/").slice(-3).join("/") : e.split("/").slice(-2).join("/"));
                return e
            }

            function O() {
                return E.apply(this, arguments)
            }

            function E() {
                return (E = l((function() {
                    var e, t, n;
                    return p(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                if (null != f) return [2, f];
                                r.label = 1;
                            case 1:
                                r.trys.push([1, 4, , 5]);
                                return [4, a.ZP.ensureModule("discord_game_utils")];
                            case 2:
                                r.sent();
                                return [4, a.ZP.requireModule("discord_game_utils")];
                            case 3:
                                f = r.sent();
                                return [3, 5];
                            case 4:
                                e = r.sent();
                                new s.Z("GamesActionCreators").error("could not load discord_game_utils", e);
                                return [3, 5];
                            case 5:
                                if ((0, u.ED)()) {
                                    h((t = i.Z.process.env).LOCALAPPDATA);
                                    h(t["PROGRAMFILES(X86)"]);
                                    h(t.PROGRAMFILES);
                                    h(t.PROGRAMW6432);
                                    h(t.PROGRAMDATA);
                                    h("/games/")
                                }
                                return [4, (n = i.Z.remoteApp.getPath)("home")];
                            case 6:
                                h.apply(void 0, [r.sent()]);
                                return [4, n("appData")];
                            case 7:
                                h.apply(void 0, [r.sent()]);
                                return [4, n("desktop")];
                            case 8:
                                h.apply(void 0, [r.sent()]);
                                return [4, n("documents")];
                            case 9:
                                h.apply(void 0, [r.sent()]);
                                return [4, n("downloads")];
                            case 10:
                                h.apply(void 0, [r.sent()]);
                                (d = o().uniq(d)).sort((function(e, t) {
                                    return t.length - e.length
                                }));
                                return [2, f]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        852626: (e, t, n) => {
            "use strict";
            n.d(t, {
                i: () => p,
                j: () => d
            });
            var r = n(785893),
                o = (n(667294), n(264817)),
                i = n(561210),
                s = n(520453);

            function u(e, t, n, r, o, i, s) {
                try {
                    var u = e[i](s),
                        a = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(a) : Promise.resolve(a).then(r, o)
            }

            function a(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function s(e) {
                            u(i, r, o, s, a, "next", e)
                        }

                        function a(e) {
                            u(i, r, o, s, a, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        c(e, t, n[t])
                    }))
                }
                return e
            }
            var f = function(e, t) {
                var n, r, o, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1,
                                    r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        s.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        s.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = s.ops.pop();
                                        s.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = s.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            s.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && s.label < o[1]) {
                                            s.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && s.label < o[2]) {
                                            s.label = o[2];
                                            s.ops.push(i);
                                            break
                                        }
                                        o[2] && s.ops.pop();
                                        s.trys.pop();
                                        continue
                                }
                                i = t.call(e, s)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };

            function p(e) {
                (0, o.ZD)(a((function() {
                    var e, t;
                    return f(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(92224), n.e(21859), n.e(62593)]).then(n.bind(n, 321859))];
                            case 1:
                                e = o.sent(), t = e.default;
                                return [2, function(e) {
                                    return (0, r.jsx)(t, l({}, e))
                                }]
                        }
                    }))
                })), {
                    modalKey: i.$$,
                    onCloseRequest: s.dG,
                    onCloseCallback: e
                })
            }

            function d() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = arguments.length > 1 ? arguments[1] : void 0;
                (0, o.ZD)(a((function() {
                    var t, o;
                    return f(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(84441), n.e(16273)]).then(n.bind(n, 854104))];
                            case 1:
                                t = i.sent(), o = t.default;
                                return [2, function(t) {
                                    return (0, r.jsx)(o, l({
                                        claimRequired: e
                                    }, t))
                                }]
                        }
                    }))
                })), {
                    onCloseRequest: e ? s.dG : null,
                    onCloseCallback: t
                })
            }
        },
        87931: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            const r = n(517586).Z
        },
        335186: (e, t, n) => {
            "use strict";
            n.d(t, {
                Zz: () => u,
                K4: () => a,
                q9: () => l
            });
            var r = n(441143),
                o = n.n(r),
                i = n(268335),
                s = n(473708);

            function u(e) {
                var t = i.Z.find((function(t) {
                    return t.alpha2 === e
                }));
                if (null != t) return {
                    name: t.name,
                    code: t.phoneCountryCode,
                    alpha2: t.alpha2
                }
            }

            function a() {
                var e = function(e) {
                    var t = i.Z.find((function(t) {
                        return t.name === e
                    }));
                    if (null != t) return {
                        name: t.name,
                        code: t.phoneCountryCode,
                        alpha2: t.alpha2
                    }
                }("United States");
                o()(e, "Default country code cannot be missing.");
                return e
            }
            var c = {
                AF: function() {
                    return s.Z.Messages.COUNTRY_NAME_AF
                },
                AX: function() {
                    return s.Z.Messages.COUNTRY_NAME_AX
                },
                AL: function() {
                    return s.Z.Messages.COUNTRY_NAME_AL
                },
                DZ: function() {
                    return s.Z.Messages.COUNTRY_NAME_DZ
                },
                AS: function() {
                    return s.Z.Messages.COUNTRY_NAME_AS
                },
                AD: function() {
                    return s.Z.Messages.COUNTRY_NAME_AD
                },
                AO: function() {
                    return s.Z.Messages.COUNTRY_NAME_AO
                },
                AI: function() {
                    return s.Z.Messages.COUNTRY_NAME_AI
                },
                AQ: function() {
                    return s.Z.Messages.COUNTRY_NAME_AQ
                },
                AG: function() {
                    return s.Z.Messages.COUNTRY_NAME_AG
                },
                AR: function() {
                    return s.Z.Messages.COUNTRY_NAME_AR
                },
                AM: function() {
                    return s.Z.Messages.COUNTRY_NAME_AM
                },
                AW: function() {
                    return s.Z.Messages.COUNTRY_NAME_AW
                },
                AC: function() {
                    return s.Z.Messages.COUNTRY_NAME_AC
                },
                AU: function() {
                    return s.Z.Messages.COUNTRY_NAME_AU
                },
                AT: function() {
                    return s.Z.Messages.COUNTRY_NAME_AT
                },
                AZ: function() {
                    return s.Z.Messages.COUNTRY_NAME_AZ
                },
                BS: function() {
                    return s.Z.Messages.COUNTRY_NAME_BS
                },
                BH: function() {
                    return s.Z.Messages.COUNTRY_NAME_BH
                },
                BD: function() {
                    return s.Z.Messages.COUNTRY_NAME_BD
                },
                BB: function() {
                    return s.Z.Messages.COUNTRY_NAME_BB
                },
                BY: function() {
                    return s.Z.Messages.COUNTRY_NAME_BY
                },
                BE: function() {
                    return s.Z.Messages.COUNTRY_NAME_BE
                },
                BZ: function() {
                    return s.Z.Messages.COUNTRY_NAME_BZ
                },
                BJ: function() {
                    return s.Z.Messages.COUNTRY_NAME_BJ
                },
                BM: function() {
                    return s.Z.Messages.COUNTRY_NAME_BM
                },
                BT: function() {
                    return s.Z.Messages.COUNTRY_NAME_BT
                },
                BO: function() {
                    return s.Z.Messages.COUNTRY_NAME_BO
                },
                BQ: function() {
                    return s.Z.Messages.COUNTRY_NAME_BQ
                },
                BA: function() {
                    return s.Z.Messages.COUNTRY_NAME_BA
                },
                BW: function() {
                    return s.Z.Messages.COUNTRY_NAME_BW
                },
                BV: function() {
                    return s.Z.Messages.COUNTRY_NAME_BV
                },
                BR: function() {
                    return s.Z.Messages.COUNTRY_NAME_BR
                },
                IO: function() {
                    return s.Z.Messages.COUNTRY_NAME_IO
                },
                BN: function() {
                    return s.Z.Messages.COUNTRY_NAME_BN
                },
                BG: function() {
                    return s.Z.Messages.COUNTRY_NAME_BG
                },
                BF: function() {
                    return s.Z.Messages.COUNTRY_NAME_BF
                },
                BI: function() {
                    return s.Z.Messages.COUNTRY_NAME_BI
                },
                KH: function() {
                    return s.Z.Messages.COUNTRY_NAME_KH
                },
                CM: function() {
                    return s.Z.Messages.COUNTRY_NAME_CM
                },
                CA: function() {
                    return s.Z.Messages.COUNTRY_NAME_CA
                },
                CV: function() {
                    return s.Z.Messages.COUNTRY_NAME_CV
                },
                KY: function() {
                    return s.Z.Messages.COUNTRY_NAME_KY
                },
                CF: function() {
                    return s.Z.Messages.COUNTRY_NAME_CF
                },
                TD: function() {
                    return s.Z.Messages.COUNTRY_NAME_TD
                },
                CL: function() {
                    return s.Z.Messages.COUNTRY_NAME_CL
                },
                CN: function() {
                    return s.Z.Messages.COUNTRY_NAME_CN
                },
                CX: function() {
                    return s.Z.Messages.COUNTRY_NAME_CX
                },
                CC: function() {
                    return s.Z.Messages.COUNTRY_NAME_CC
                },
                CO: function() {
                    return s.Z.Messages.COUNTRY_NAME_CO
                },
                KM: function() {
                    return s.Z.Messages.COUNTRY_NAME_KM
                },
                CG: function() {
                    return s.Z.Messages.COUNTRY_NAME_CG
                },
                CD: function() {
                    return s.Z.Messages.COUNTRY_NAME_CD
                },
                CK: function() {
                    return s.Z.Messages.COUNTRY_NAME_CK
                },
                CR: function() {
                    return s.Z.Messages.COUNTRY_NAME_CR
                },
                CI: function() {
                    return s.Z.Messages.COUNTRY_NAME_CI
                },
                HR: function() {
                    return s.Z.Messages.COUNTRY_NAME_HR
                },
                CU: function() {
                    return s.Z.Messages.COUNTRY_NAME_CU
                },
                CW: function() {
                    return s.Z.Messages.COUNTRY_NAME_CW
                },
                CY: function() {
                    return s.Z.Messages.COUNTRY_NAME_CY
                },
                CZ: function() {
                    return s.Z.Messages.COUNTRY_NAME_CZ
                },
                DK: function() {
                    return s.Z.Messages.COUNTRY_NAME_DK
                },
                DG: function() {
                    return s.Z.Messages.COUNTRY_NAME_DG
                },
                DJ: function() {
                    return s.Z.Messages.COUNTRY_NAME_DJ
                },
                DM: function() {
                    return s.Z.Messages.COUNTRY_NAME_DM
                },
                DO: function() {
                    return s.Z.Messages.COUNTRY_NAME_DO
                },
                TP: function() {
                    return s.Z.Messages.COUNTRY_NAME_TP
                },
                EC: function() {
                    return s.Z.Messages.COUNTRY_NAME_EC
                },
                EG: function() {
                    return s.Z.Messages.COUNTRY_NAME_EG
                },
                SV: function() {
                    return s.Z.Messages.COUNTRY_NAME_SV
                },
                GQ: function() {
                    return s.Z.Messages.COUNTRY_NAME_GQ
                },
                ER: function() {
                    return s.Z.Messages.COUNTRY_NAME_ER
                },
                EE: function() {
                    return s.Z.Messages.COUNTRY_NAME_EE
                },
                ET: function() {
                    return s.Z.Messages.COUNTRY_NAME_ET
                },
                FK: function() {
                    return s.Z.Messages.COUNTRY_NAME_FK
                },
                FO: function() {
                    return s.Z.Messages.COUNTRY_NAME_FO
                },
                FJ: function() {
                    return s.Z.Messages.COUNTRY_NAME_FJ
                },
                FI: function() {
                    return s.Z.Messages.COUNTRY_NAME_FI
                },
                FR: function() {
                    return s.Z.Messages.COUNTRY_NAME_FR
                },
                GF: function() {
                    return s.Z.Messages.COUNTRY_NAME_GF
                },
                PF: function() {
                    return s.Z.Messages.COUNTRY_NAME_PF
                },
                TF: function() {
                    return s.Z.Messages.COUNTRY_NAME_TF
                },
                GA: function() {
                    return s.Z.Messages.COUNTRY_NAME_GA
                },
                GM: function() {
                    return s.Z.Messages.COUNTRY_NAME_GM
                },
                GE: function() {
                    return s.Z.Messages.COUNTRY_NAME_GE
                },
                DE: function() {
                    return s.Z.Messages.COUNTRY_NAME_DE
                },
                GH: function() {
                    return s.Z.Messages.COUNTRY_NAME_GH
                },
                GI: function() {
                    return s.Z.Messages.COUNTRY_NAME_GI
                },
                GR: function() {
                    return s.Z.Messages.COUNTRY_NAME_GR
                },
                GL: function() {
                    return s.Z.Messages.COUNTRY_NAME_GL
                },
                GD: function() {
                    return s.Z.Messages.COUNTRY_NAME_GD
                },
                GP: function() {
                    return s.Z.Messages.COUNTRY_NAME_GP
                },
                GU: function() {
                    return s.Z.Messages.COUNTRY_NAME_GU
                },
                GT: function() {
                    return s.Z.Messages.COUNTRY_NAME_GT
                },
                GG: function() {
                    return s.Z.Messages.COUNTRY_NAME_GG
                },
                GN: function() {
                    return s.Z.Messages.COUNTRY_NAME_GN
                },
                GW: function() {
                    return s.Z.Messages.COUNTRY_NAME_GW
                },
                GY: function() {
                    return s.Z.Messages.COUNTRY_NAME_GY
                },
                HT: function() {
                    return s.Z.Messages.COUNTRY_NAME_HT
                },
                HM: function() {
                    return s.Z.Messages.COUNTRY_NAME_HM
                },
                VA: function() {
                    return s.Z.Messages.COUNTRY_NAME_VA
                },
                HN: function() {
                    return s.Z.Messages.COUNTRY_NAME_HN
                },
                HK: function() {
                    return s.Z.Messages.COUNTRY_NAME_HK
                },
                HU: function() {
                    return s.Z.Messages.COUNTRY_NAME_HU
                },
                IS: function() {
                    return s.Z.Messages.COUNTRY_NAME_IS
                },
                IN: function() {
                    return s.Z.Messages.COUNTRY_NAME_IN
                },
                ID: function() {
                    return s.Z.Messages.COUNTRY_NAME_ID
                },
                IR: function() {
                    return s.Z.Messages.COUNTRY_NAME_IR
                },
                IQ: function() {
                    return s.Z.Messages.COUNTRY_NAME_IQ
                },
                IE: function() {
                    return s.Z.Messages.COUNTRY_NAME_IE
                },
                IM: function() {
                    return s.Z.Messages.COUNTRY_NAME_IM
                },
                IL: function() {
                    return s.Z.Messages.COUNTRY_NAME_IL
                },
                IT: function() {
                    return s.Z.Messages.COUNTRY_NAME_IT
                },
                JM: function() {
                    return s.Z.Messages.COUNTRY_NAME_JM
                },
                JP: function() {
                    return s.Z.Messages.COUNTRY_NAME_JP
                },
                JE: function() {
                    return s.Z.Messages.COUNTRY_NAME_JE
                },
                JO: function() {
                    return s.Z.Messages.COUNTRY_NAME_JO
                },
                KZ: function() {
                    return s.Z.Messages.COUNTRY_NAME_KZ
                },
                KE: function() {
                    return s.Z.Messages.COUNTRY_NAME_KE
                },
                KI: function() {
                    return s.Z.Messages.COUNTRY_NAME_KI
                },
                XK: function() {
                    return s.Z.Messages.COUNTRY_NAME_XK
                },
                KP: function() {
                    return s.Z.Messages.COUNTRY_NAME_KP
                },
                KR: function() {
                    return s.Z.Messages.COUNTRY_NAME_KR
                },
                KW: function() {
                    return s.Z.Messages.COUNTRY_NAME_KW
                },
                KG: function() {
                    return s.Z.Messages.COUNTRY_NAME_KG
                },
                LA: function() {
                    return s.Z.Messages.COUNTRY_NAME_LA
                },
                LV: function() {
                    return s.Z.Messages.COUNTRY_NAME_LV
                },
                LB: function() {
                    return s.Z.Messages.COUNTRY_NAME_LB
                },
                LS: function() {
                    return s.Z.Messages.COUNTRY_NAME_LS
                },
                LR: function() {
                    return s.Z.Messages.COUNTRY_NAME_LR
                },
                LY: function() {
                    return s.Z.Messages.COUNTRY_NAME_LY
                },
                LI: function() {
                    return s.Z.Messages.COUNTRY_NAME_LI
                },
                LT: function() {
                    return s.Z.Messages.COUNTRY_NAME_LT
                },
                LU: function() {
                    return s.Z.Messages.COUNTRY_NAME_LU
                },
                MO: function() {
                    return s.Z.Messages.COUNTRY_NAME_MO
                },
                MK: function() {
                    return s.Z.Messages.COUNTRY_NAME_MK
                },
                MG: function() {
                    return s.Z.Messages.COUNTRY_NAME_MG
                },
                MW: function() {
                    return s.Z.Messages.COUNTRY_NAME_MW
                },
                MY: function() {
                    return s.Z.Messages.COUNTRY_NAME_MY
                },
                MV: function() {
                    return s.Z.Messages.COUNTRY_NAME_MV
                },
                ML: function() {
                    return s.Z.Messages.COUNTRY_NAME_ML
                },
                MT: function() {
                    return s.Z.Messages.COUNTRY_NAME_MT
                },
                MH: function() {
                    return s.Z.Messages.COUNTRY_NAME_MH
                },
                MQ: function() {
                    return s.Z.Messages.COUNTRY_NAME_MQ
                },
                MR: function() {
                    return s.Z.Messages.COUNTRY_NAME_MR
                },
                MU: function() {
                    return s.Z.Messages.COUNTRY_NAME_MU
                },
                YT: function() {
                    return s.Z.Messages.COUNTRY_NAME_YT
                },
                MX: function() {
                    return s.Z.Messages.COUNTRY_NAME_MX
                },
                FM: function() {
                    return s.Z.Messages.COUNTRY_NAME_FM
                },
                MI: function() {
                    return s.Z.Messages.COUNTRY_NAME_MI
                },
                MD: function() {
                    return s.Z.Messages.COUNTRY_NAME_MD
                },
                MC: function() {
                    return s.Z.Messages.COUNTRY_NAME_MC
                },
                MN: function() {
                    return s.Z.Messages.COUNTRY_NAME_MN
                },
                ME: function() {
                    return s.Z.Messages.COUNTRY_NAME_ME
                },
                MS: function() {
                    return s.Z.Messages.COUNTRY_NAME_MS
                },
                MA: function() {
                    return s.Z.Messages.COUNTRY_NAME_MA
                },
                MZ: function() {
                    return s.Z.Messages.COUNTRY_NAME_MZ
                },
                MM: function() {
                    return s.Z.Messages.COUNTRY_NAME_MM
                },
                NA: function() {
                    return s.Z.Messages.COUNTRY_NAME_NA
                },
                NR: function() {
                    return s.Z.Messages.COUNTRY_NAME_NR
                },
                NP: function() {
                    return s.Z.Messages.COUNTRY_NAME_NP
                },
                NL: function() {
                    return s.Z.Messages.COUNTRY_NAME_NL
                },
                AN: function() {
                    return s.Z.Messages.COUNTRY_NAME_AN
                },
                NC: function() {
                    return s.Z.Messages.COUNTRY_NAME_NC
                },
                NZ: function() {
                    return s.Z.Messages.COUNTRY_NAME_NZ
                },
                NI: function() {
                    return s.Z.Messages.COUNTRY_NAME_NI
                },
                NE: function() {
                    return s.Z.Messages.COUNTRY_NAME_NE
                },
                NG: function() {
                    return s.Z.Messages.COUNTRY_NAME_NG
                },
                NU: function() {
                    return s.Z.Messages.COUNTRY_NAME_NU
                },
                NF: function() {
                    return s.Z.Messages.COUNTRY_NAME_NF
                },
                MP: function() {
                    return s.Z.Messages.COUNTRY_NAME_MP
                },
                NO: function() {
                    return s.Z.Messages.COUNTRY_NAME_NO
                },
                OM: function() {
                    return s.Z.Messages.COUNTRY_NAME_OM
                },
                PK: function() {
                    return s.Z.Messages.COUNTRY_NAME_PK
                },
                PW: function() {
                    return s.Z.Messages.COUNTRY_NAME_PW
                },
                PS: function() {
                    return s.Z.Messages.COUNTRY_NAME_PS
                },
                PA: function() {
                    return s.Z.Messages.COUNTRY_NAME_PA
                },
                PG: function() {
                    return s.Z.Messages.COUNTRY_NAME_PG
                },
                PY: function() {
                    return s.Z.Messages.COUNTRY_NAME_PY
                },
                PE: function() {
                    return s.Z.Messages.COUNTRY_NAME_PE
                },
                PH: function() {
                    return s.Z.Messages.COUNTRY_NAME_PH
                },
                PN: function() {
                    return s.Z.Messages.COUNTRY_NAME_PN
                },
                PL: function() {
                    return s.Z.Messages.COUNTRY_NAME_PL
                },
                PT: function() {
                    return s.Z.Messages.COUNTRY_NAME_PT
                },
                PR: function() {
                    return s.Z.Messages.COUNTRY_NAME_PR
                },
                QA: function() {
                    return s.Z.Messages.COUNTRY_NAME_QA
                },
                RE: function() {
                    return s.Z.Messages.COUNTRY_NAME_RE
                },
                RO: function() {
                    return s.Z.Messages.COUNTRY_NAME_RO
                },
                RU: function() {
                    return s.Z.Messages.COUNTRY_NAME_RU
                },
                RW: function() {
                    return s.Z.Messages.COUNTRY_NAME_RW
                },
                BL: function() {
                    return s.Z.Messages.COUNTRY_NAME_BL
                },
                SH: function() {
                    return s.Z.Messages.COUNTRY_NAME_SH
                },
                KN: function() {
                    return s.Z.Messages.COUNTRY_NAME_KN
                },
                LC: function() {
                    return s.Z.Messages.COUNTRY_NAME_LC
                },
                MF: function() {
                    return s.Z.Messages.COUNTRY_NAME_MF
                },
                PM: function() {
                    return s.Z.Messages.COUNTRY_NAME_PM
                },
                VC: function() {
                    return s.Z.Messages.COUNTRY_NAME_VC
                },
                WS: function() {
                    return s.Z.Messages.COUNTRY_NAME_WS
                },
                SM: function() {
                    return s.Z.Messages.COUNTRY_NAME_SM
                },
                ST: function() {
                    return s.Z.Messages.COUNTRY_NAME_ST
                },
                SA: function() {
                    return s.Z.Messages.COUNTRY_NAME_SA
                },
                SN: function() {
                    return s.Z.Messages.COUNTRY_NAME_SN
                },
                RS: function() {
                    return s.Z.Messages.COUNTRY_NAME_RS
                },
                SC: function() {
                    return s.Z.Messages.COUNTRY_NAME_SC
                },
                SL: function() {
                    return s.Z.Messages.COUNTRY_NAME_SL
                },
                SG: function() {
                    return s.Z.Messages.COUNTRY_NAME_SG
                },
                SX: function() {
                    return s.Z.Messages.COUNTRY_NAME_SX
                },
                SK: function() {
                    return s.Z.Messages.COUNTRY_NAME_SK
                },
                SI: function() {
                    return s.Z.Messages.COUNTRY_NAME_SI
                },
                SB: function() {
                    return s.Z.Messages.COUNTRY_NAME_SB
                },
                SO: function() {
                    return s.Z.Messages.COUNTRY_NAME_SO
                },
                ZA: function() {
                    return s.Z.Messages.COUNTRY_NAME_ZA
                },
                GS: function() {
                    return s.Z.Messages.COUNTRY_NAME_GS
                },
                SS: function() {
                    return s.Z.Messages.COUNTRY_NAME_SS
                },
                ES: function() {
                    return s.Z.Messages.COUNTRY_NAME_ES
                },
                LK: function() {
                    return s.Z.Messages.COUNTRY_NAME_LK
                },
                SD: function() {
                    return s.Z.Messages.COUNTRY_NAME_SD
                },
                SR: function() {
                    return s.Z.Messages.COUNTRY_NAME_SR
                },
                SJ: function() {
                    return s.Z.Messages.COUNTRY_NAME_SJ
                },
                SZ: function() {
                    return s.Z.Messages.COUNTRY_NAME_SZ
                },
                SE: function() {
                    return s.Z.Messages.COUNTRY_NAME_SE
                },
                CH: function() {
                    return s.Z.Messages.COUNTRY_NAME_CH
                },
                SY: function() {
                    return s.Z.Messages.COUNTRY_NAME_SY
                },
                TW: function() {
                    return s.Z.Messages.COUNTRY_NAME_TW
                },
                TJ: function() {
                    return s.Z.Messages.COUNTRY_NAME_TJ
                },
                TZ: function() {
                    return s.Z.Messages.COUNTRY_NAME_TZ
                },
                TH: function() {
                    return s.Z.Messages.COUNTRY_NAME_TH
                },
                TL: function() {
                    return s.Z.Messages.COUNTRY_NAME_TL
                },
                TG: function() {
                    return s.Z.Messages.COUNTRY_NAME_TG
                },
                TK: function() {
                    return s.Z.Messages.COUNTRY_NAME_TK
                },
                TO: function() {
                    return s.Z.Messages.COUNTRY_NAME_TO
                },
                TT: function() {
                    return s.Z.Messages.COUNTRY_NAME_TT
                },
                TN: function() {
                    return s.Z.Messages.COUNTRY_NAME_TN
                },
                TR: function() {
                    return s.Z.Messages.COUNTRY_NAME_TR
                },
                TM: function() {
                    return s.Z.Messages.COUNTRY_NAME_TM
                },
                TC: function() {
                    return s.Z.Messages.COUNTRY_NAME_TC
                },
                TV: function() {
                    return s.Z.Messages.COUNTRY_NAME_TV
                },
                UG: function() {
                    return s.Z.Messages.COUNTRY_NAME_UG
                },
                UA: function() {
                    return s.Z.Messages.COUNTRY_NAME_UA
                },
                AE: function() {
                    return s.Z.Messages.COUNTRY_NAME_AE
                },
                GB: function() {
                    return s.Z.Messages.COUNTRY_NAME_GB
                },
                US: function() {
                    return s.Z.Messages.COUNTRY_NAME_US
                },
                UM: function() {
                    return s.Z.Messages.COUNTRY_NAME_UM
                },
                UY: function() {
                    return s.Z.Messages.COUNTRY_NAME_UY
                },
                UZ: function() {
                    return s.Z.Messages.COUNTRY_NAME_UZ
                },
                VU: function() {
                    return s.Z.Messages.COUNTRY_NAME_VU
                },
                VE: function() {
                    return s.Z.Messages.COUNTRY_NAME_VE
                },
                VN: function() {
                    return s.Z.Messages.COUNTRY_NAME_VN
                },
                VG: function() {
                    return s.Z.Messages.COUNTRY_NAME_VG
                },
                VI: function() {
                    return s.Z.Messages.COUNTRY_NAME_VI
                },
                WF: function() {
                    return s.Z.Messages.COUNTRY_NAME_WF
                },
                EH: function() {
                    return s.Z.Messages.COUNTRY_NAME_EH
                },
                YE: function() {
                    return s.Z.Messages.COUNTRY_NAME_YE
                },
                ZM: function() {
                    return s.Z.Messages.COUNTRY_NAME_ZM
                },
                ZW: function() {
                    return s.Z.Messages.COUNTRY_NAME_ZW
                }
            };

            function l(e) {
                return c[e]()
            }
        },
        577657: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n(785893),
                o = (n(667294), n(264817));

            function i(e, t, n, r, o, i, s) {
                try {
                    var u = e[i](s),
                        a = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(a) : Promise.resolve(a).then(r, o)
            }

            function s(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var s = e.apply(t, n);

                        function u(e) {
                            i(s, r, o, u, a, "next", e)
                        }

                        function a(e) {
                            i(s, r, o, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }
            var c = function(e, t) {
                var n, r, o, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        s.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        s.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = s.ops.pop();
                                        s.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = s.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            s.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && s.label < o[1]) {
                                            s.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && s.label < o[2]) {
                                            s.label = o[2];
                                            s.ops.push(i);
                                            break
                                        }
                                        o[2] && s.ops.pop();
                                        s.trys.pop();
                                        continue
                                }
                                i = t.call(e, s)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };

            function l(e) {
                (0, o.ZD)(s((function() {
                    var t, o;
                    return c(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, n.e(72591).then(n.bind(n, 672591))];
                            case 1:
                                t = i.sent(), o = t.default;
                                return [2, function(t) {
                                    return (0, r.jsx)(o, a(function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                                            }))));
                                            r.forEach((function(t) {
                                                u(e, t, n[t])
                                            }))
                                        }
                                        return e
                                    }({}, t), {
                                        incomingRequestCount: e
                                    }))
                                }]
                        }
                    }))
                })))
            }
        },
        43299: (e, t, n) => {
            "use strict";
            n.d(t, {
                Wo: () => _,
                Gv: () => E,
                vB: () => g
            });
            var r = n(268335),
                o = n(335186),
                i = n(348592),
                s = n(249052),
                u = n(2590),
                a = n(520453),
                c = n(473708);

            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function f(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function p(e) {
                return function(e) {
                    if (Array.isArray(e)) return l(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return l(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var d, y = new Set([a.pK.ARS, a.pK.CLP, a.pK.COP]),
                h = new Set([a.pK.USD, a.pK.JPY]),
                _ = (f(d = {}, u.HeQ.CARD, (function() {
                        return c.Z.Messages.PAYMENT_SOURCE_CREDIT_CARD_CARD_ONLY
                    })), f(d, u.HeQ.PAYPAL, (function() {
                        return c.Z.Messages.PAYMENT_SOURCE_PAYPAL
                    })), f(d, u.HeQ.SOFORT, (function() {
                        return c.Z.Messages.PAYMENT_SOURCE_SOFORT
                    })), f(d, u.HeQ.GIROPAY, (function() {
                        return c.Z.Messages.PAYMENT_SOURCE_GIROPAY
                    })), f(d, u.HeQ.PRZELEWY24, (function() {
                        return c.Z.Messages.PAYMENT_SOURCE_PRZELEWY24
                    })), f(d, u.HeQ.PAYSAFE_CARD, (function() {
                        return c.Z.Messages.PAYMENT_SOURCE_PAYSAFE_CARD
                    })), f(d, u.HeQ.GCASH, (function() {
                        return c.Z.Messages.PAYMENT_SOURCE_GCASH
                    })), f(d, u.HeQ.GRABPAY_MY, (function() {
                        return c.Z.Messages.PAYMENT_SOURCE_GRABPAY
                    })),
                    f(d, u.HeQ.MOMO_WALLET, (function() {
                        return c.Z.Messages.PAYMENT_SOURCE_MOMO_WALLET
                    })), f(d, u.HeQ.VENMO, (function() {
                        return c.Z.Messages.PAYMENT_SOURCE_VENMO
                    })), f(d, u.HeQ.KAKAOPAY, (function() {
                        return c.Z.Messages.PAYMENT_SOURCE_KAKAOPAY
                    })), f(d, u.HeQ.GOPAY_WALLET, (function() {
                        return c.Z.Messages.PAYMENT_SOURCE_GOPAY_WALLET
                    })), f(d, u.HeQ.BANCONTACT, (function() {
                        return c.Z.Messages.PAYMENT_SOURCE_BANCONTACT
                    })), f(d, u.HeQ.EPS, (function() {
                        return c.Z.Messages.PAYMENT_SOURCE_EPS
                    })), f(d, u.HeQ.IDEAL, (function() {
                        return c.Z.Messages.PAYMENT_SOURCE_IDEAL
                    })), d),
                O = [u.HeQ.EPS, u.HeQ.BANCONTACT, u.HeQ.IDEAL, u.HeQ.SOFORT, u.HeQ.GIROPAY, u.HeQ.SEPA_DEBIT, u.HeQ.PAYSAFE_CARD],
                E = function(e, t, n, r) {
                    if (null == e) return "";
                    var i = (0, o.q9)(e);
                    return t === a.pK.EUR ? n ? c.Z.Messages.LOCALIZED_PRICING_NOTICE_GENERALIZED_PAYMENT_METHODS_PROMO.format({
                        country: i
                    }) : c.Z.Messages.LOCALIZED_PRICING_NOTICE_NO_LOWERED_PRICE.format({
                        currencyISOCode: t.toUpperCase()
                    }) : r ? c.Z.Messages.NOTICE_NITRO_PRICE_CHANGED.format({
                        countryName: i
                    }) : c.Z.Messages.LOCALIZED_PRICING_NOTICE.format({
                        country: i
                    })
                },
                g = function(e) {
                    var t = e.localizedPricingPromo,
                        n = e.subscription,
                        r = e.forceSingleLine,
                        l = void 0 !== r && r,
                        f = e.userLocale,
                        d = t.countryCode,
                        E = t.amount,
                        g = t.currency,
                        N = t.paymentSourceTypes,
                        A = 0 !== N.length,
                        R = b(d),
                        m = (0, s.T4)(E, g, {
                            style: "currency",
                            currency: g,
                            currencyDisplay: "symbol",
                            localeOverride: R
                        }),
                        S = c.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY.format({
                            helpCenterLink: i.Z.getArticleURL(u.BhN.LOCALIZED_PRICING),
                            currencyISOCode: g.toUpperCase(),
                            localizedPriceWithCurrencySymbol: m
                        });
                    h.has(g) && (S = c.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_EXISTING_CURRENCY.format({
                        helpCenterLink: i.Z.getArticleURL(u.BhN.LOCALIZED_PRICING),
                        localizedPriceWithCurrencySymbol: m
                    }));
                    y.has(g) && (S = c.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY_WITH_AMBIGUOUS_SYMBOL.format({
                        helpCenterLink: i.Z.getArticleURL(u.BhN.LOCALIZED_PRICING),
                        currencyISOCode: g.toUpperCase(),
                        localizedPriceWithCurrencySymbol: m
                    }));
                    null == n || n.hasPremiumNitroMonthly || (S = c.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_WITHOUT_PRICE.format({
                        helpCenterLink: i.Z.getArticleURL(u.BhN.LOCALIZED_PRICING),
                        currencyISOCode: g.toUpperCase()
                    }));
                    g === a.pK.EUR && (S = l ? c.Z.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE_SINGLE_STRING.format({
                        country: (0, o.q9)(d),
                        currencyISOCode: g.toUpperCase(),
                        helpCenterLink: i.Z.getArticleURL(u.BhN.LOCALIZED_PRICING)
                    }) : c.Z.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE.format({
                        currencyISOCode: g.toUpperCase(),
                        helpCenterLink: i.Z.getArticleURL(u.BhN.LOCALIZED_PRICING)
                    }));
                    if (A) {
                        var T = O.filter((function(e) {
                                return N.includes(e)
                            })),
                            v = N.filter((function(e) {
                                return !O.includes(e)
                            })),
                            M = p(T).concat(p(v)).slice(0, 2).map((function(e) {
                                var t, n;
                                return null !== (n = null === (t = _[e]) || void 0 === t ? void 0 : t.call(_)) && void 0 !== n ? n : c.Z.Messages.PAYMENT_SOURCE_UNKNOWN
                            }));
                        N.length >= 3 && M.push(c.Z.Messages.LOCALIZED_PRICING_MORE_NEW_WAYS_TO_PAY);
                        var C = new Intl.ListFormat(f, {
                            style: "short",
                            type: "conjunction"
                        });
                        S = c.Z.Messages.LOCALIZED_PRICING_PAYMENT_METHODS_PROMO.format({
                            helpCenterLink: i.Z.getArticleURL(u.BhN.LOCALIZED_PRICING),
                            paymentMethods: C.format(M)
                        })
                    }
                    return {
                        localizedPricingBannerHeader: c.Z.Messages.LOCALIZED_PRICING_BANNER_HEADER.format({
                            country: (0, o.q9)(d)
                        }),
                        localizedPricingBannerBody: S,
                        localizedPricingBannerLinkOnly: c.Z.Messages.LOCALIZED_PRICING_BANNER_LINK_ONLY.format({
                            helpCenterLink: i.Z.getArticleURL(u.BhN.LOCALIZED_PRICING)
                        }),
                        localizedPricingBannerSubNotif: A ? void 0 : c.Z.Messages.LOCALIZED_PRICING_BANNER_SUB_NOTIF
                    }
                },
                b = function(e) {
                    var t = r.Z.find((function(t) {
                        return t.alpha2 === e
                    }));
                    return null == t ? void 0 : t.localeForICU
                }
        },
        3930: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => c
            });
            var r = n(785893),
                o = (n(667294), n(264817));

            function i(e, t, n, r, o, i, s) {
                try {
                    var u = e[i](s),
                        a = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(a) : Promise.resolve(a).then(r, o)
            }

            function s(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var s = e.apply(t, n);

                        function u(e) {
                            i(s, r, o, u, a, "next", e)
                        }

                        function a(e) {
                            i(s, r, o, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var a = function(e, t) {
                var n, r, o, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        s.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        s.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = s.ops.pop();
                                        s.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = s.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            s.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && s.label < o[1]) {
                                            s.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && s.label < o[2]) {
                                            s.label = o[2];
                                            s.ops.push(i);
                                            break
                                        }
                                        o[2] && s.ops.pop();
                                        s.trys.pop();
                                        continue
                                }
                                i = t.call(e, s)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };

            function c() {
                (0, o.ZD)(s((function() {
                    var e, t;
                    return a(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(75600)]).then(n.bind(n, 75600))];
                            case 1:
                                e = o.sent(), t = e.default;
                                return [2, function(e) {
                                    return (0, r.jsx)(t, function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                                            }))));
                                            r.forEach((function(t) {
                                                u(e, t, n[t])
                                            }))
                                        }
                                        return e
                                    }({}, e))
                                }]
                        }
                    }))
                })))
            }
        },
        625183: (e, t, n) => {
            "use strict";
            n.d(t, {
                b: () => o
            });
            var r = n(2590);

            function o(e, t) {
                return e >= 400 && e < 500 && null != t && t >= r.evJ.USER_LIMITED_ACCESS_DEFAULT && t <= r.evJ.USER_LIMITED_ACCESS_MAX
            }
        },
        239734: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => b
            });
            var r = n(202351),
                o = n(744564),
                i = n(840922);

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return a(e)
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        u(e, t, n[t])
                    }))
                }
                return e
            }

            function l(e, t) {
                return !t || "object" !== p(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function f(e, t) {
                f = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return f(e, t)
            }
            var p = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function d(e) {
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
                    var n, r = a(e);
                    if (t) {
                        var o = a(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return l(this, n)
                }
            }
            var y = 864e5,
                h = !1,
                _ = Object.freeze({
                    userAffinities: [],
                    affinityUserIds: new Set,
                    lastFetched: 0
                }),
                O = c({}, _);

            function E() {
                O.affinityUserIds = new Set(O.userAffinities.map((function(e) {
                    return e.user_id
                })).filter((function(e) {
                    return !i.Z.isBlocked(e)
                })))
            }
            var g = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && f(e, t)
                }(n, e);
                var t = d(n);

                function n() {
                    s(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    this.waitFor(i.Z);
                    if (null != e) {
                        O.userAffinities = e.userAffinities;
                        O.affinityUserIds = new Set(e.affinityUserIds);
                        O.lastFetched = e.lastFetched
                    }
                    this.syncWith([i.Z], E)
                };
                r.needsRefresh = function() {
                    return Date.now() - O.lastFetched > y
                };
                r.getFetching = function() {
                    return h
                };
                r.getState = function() {
                    return O
                };
                r.getUserAffinities = function() {
                    return O.userAffinities
                };
                r.getUserAffinitiesUserIds = function() {
                    return O.affinityUserIds
                };
                r.__getLocalVars = function() {
                    return {
                        USER_AFFINITY_TTL: y,
                        fetching: h,
                        DEFAULT_AFFINITY_STORE_STATE: _,
                        state: O
                    }
                };
                return n
            }(r.ZP.PersistedStore);
            g.displayName = "UserAffinitiesStore";
            g.persistKey = "UserAffinitiesStore";
            g.migrations = [function(e) {
                return null
            }];
            const b = new g(o.Z, {
                LOAD_USER_AFFINITIES_SUCCESS: function(e) {
                    var t, n = e.affinities;
                    O.userAffinities = null !== (t = n.user_affinities) && void 0 !== t ? t : [];
                    O.lastFetched = Date.now();
                    E();
                    h = !1
                },
                LOAD_USER_AFFINITIES: function() {
                    h = !0
                },
                LOAD_USER_AFFINITIES_FAILURE: function() {
                    h = !1
                },
                LOGOUT: function() {
                    O = c({}, _)
                }
            })
        },
        223219: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => Y
            });
            var r = n(496486),
                o = n.n(r),
                i = n(202351),
                s = n(744564),
                u = n(473903),
                a = n(2590);

            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function f(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function p(e) {
                p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return p(e)
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        f(e, t, n[t])
                    }))
                }
                return e
            }

            function y(e, t) {
                return !t || "object" !== _(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function h(e, t) {
                h = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return h(e, t)
            }
            var _ = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function O(e) {
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
                    var n, r = p(e);
                    if (t) {
                        var o = p(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return y(this, n)
                }
            }
            var E = a.QZA.CLOSED,
                g = null,
                b = null,
                N = {},
                A = {},
                R = {},
                m = null,
                S = null,
                T = !1,
                v = !1,
                M = null,
                C = null,
                P = null,
                I = [],
                Z = null,
                U = null;

            function w(e) {
                var t, n, r, o, i, s, c = u.default.getCurrentUser();
                if (null == c) return j();
                b = null !== (t = e.section) && void 0 !== t ? t : b;
                Z = null !== (n = e.section) && void 0 !== n ? n : b;
                null != e.subsection && null != b && (N[b] = e.subsection);
                null != e.scrollPosition && null != b && (A[b] = e.scrollPosition);
                v = !!e.openWithoutBackstack;
                E = a.QZA.OPEN;
                R = {};
                m = f({}, a.oAB.ACCOUNT, {
                    userId: c.id,
                    username: c.username,
                    discriminator: c.discriminator,
                    email: c.email,
                    avatar: c.avatar,
                    password: "",
                    newPassword: null,
                    claimed: c.isClaimed()
                });
                S = d({}, m);
                C = null !== (r = e.onClose) && void 0 !== r ? r : null;
                P = null !== (o = e.analyticsLocation) && void 0 !== o ? o : null;
                I = null !== (i = e.analyticsLocations) && void 0 !== i ? i : [];
                U = null !== (s = e.impressionSource) && void 0 !== s ? s : null
            }

            function j() {
                E = a.QZA.CLOSED;
                T = !1;
                m = null;
                Z = null;
                S = null;
                g = null;
                b = null;
                N = {};
                A = {};
                C = null;
                P = null;
                I = [];
                U = null
            }

            function L() {
                E = a.QZA.OPEN;
                R = {}
            }
            var D = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && h(e, t)
                }(n, e);
                var t = O(n);

                function n() {
                    c(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(u.default)
                };
                r.hasChanges = function() {
                    return null != S && null != m && (!(!this.isOpen() && M !== a.cII.USER_SETTINGS) && !o().isEqual(S, m))
                };
                r.isOpen = function() {
                    return T
                };
                r.getPreviousSection = function() {
                    return g
                };
                r.getSection = function() {
                    return b
                };
                r.getSubsection = function() {
                    return null != b ? N[b] : null
                };
                r.getScrollPosition = function() {
                    return null != b ? A[b] : null
                };
                r.shouldOpenWithoutBackstack = function() {
                    return v
                };
                r.getProps = function() {
                    return {
                        submitting: E === a.QZA.SUBMITTING,
                        section: b,
                        subsection: null != b ? N[b] : null,
                        scrollPosition: null != b ? A[b] : null,
                        settings: S,
                        errors: R,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: v,
                        analyticsLocation: P,
                        analyticsLocations: I,
                        initialSection: Z,
                        impressionSource: U
                    }
                };
                r.__getLocalVars = function() {
                    return {
                        formState: E,
                        previousSection: g,
                        section: b,
                        subsections: N,
                        scrollPositions: A,
                        errors: R,
                        originalSettings: m,
                        settings: S,
                        open: T,
                        openWithoutBackstack: v,
                        tab: M,
                        onClose: C,
                        analyticsLocation: P,
                        analyticsLocations: I,
                        initialSection: Z,
                        impressionSource: U
                    }
                };
                ! function(e, t, n) {
                    t && l(e.prototype, t);
                    n && l(e, n)
                }(n, [{
                    key: "onClose",
                    get: function() {
                        return C
                    }
                }]);
                return n
            }(i.ZP.Store);
            D.displayName = "UserSettingsModalStore";
            const Y = new D(s.Z, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    T = !0;
                    w(e)
                },
                USER_SETTINGS_MODAL_INIT: w,
                USER_SETTINGS_MODAL_CLOSE: j,
                LOGOUT: j,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    E = a.QZA.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    if (E !== a.QZA.SUBMITTING) return !1;
                    E = a.QZA.OPEN;
                    b = a.oAB.ACCOUNT;
                    var t;
                    R = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    g = b;
                    b = e.section;
                    P = null;
                    var t;
                    I = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [];
                    null != e.subsection && (N[b] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    var t = e.forSection;
                    null != t ? delete N[t] : null != b && delete N[b]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
                    var t = e.forSection;
                    null != t ? delete A[t] : null != b && delete A[b]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
                    var t = e.settings;
                    null == S && (S = {});
                    var n = S[a.oAB.ACCOUNT];
                    S[a.oAB.ACCOUNT] = d({}, n, t)
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: L,
                USER_SETTINGS_MODAL_RESET: function() {
                    var e = u.default.getCurrentUser();
                    L();
                    if (null != e) {
                        m = f({}, a.oAB.ACCOUNT, {
                            userId: e.id,
                            username: e.username,
                            discriminator: e.discriminator,
                            email: e.email,
                            avatar: e.avatar,
                            password: "",
                            newPassword: null,
                            claimed: e.isClaimed()
                        });
                        S = d({}, m)
                    }
                },
                DRAWER_SELECT_TAB: function(e) {
                    M = e.tab;
                    return null == b && M === a.cII.USER_SETTINGS && w({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
                }
            })
        },
        64318: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => O
            });
            var r = n(202351),
                o = n(744564);

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return a(e)
            }

            function c(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function l(e, t) {
                return !t || "object" !== p(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function f(e, t) {
                f = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return f(e, t)
            }
            var p = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function d(e) {
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
                    var n, r = a(e);
                    if (t) {
                        var o = a(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return l(this, n)
                }
            }
            var y, h = {
                hasAcceptedStoreTerms: !1,
                hasAcceptedEulaIds: []
            };
            var _ = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && f(e, t)
                }(n, e);
                var t = d(n);

                function n() {
                    i(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    y = null != e ? e : h
                };
                r.getState = function() {
                    return y
                };
                r.hasAcceptedEULA = function(e) {
                    return y.hasAcceptedEulaIds.includes(e)
                };
                r.__getLocalVars = function() {
                    return {
                        initialState: h,
                        state: y
                    }
                };
                ! function(e, t, n) {
                    t && s(e.prototype, t);
                    n && s(e, n)
                }(n, [{
                    key: "hasAcceptedStoreTerms",
                    get: function() {
                        return y.hasAcceptedStoreTerms
                    }
                }]);
                return n
            }(r.ZP.PersistedStore);
            _.displayName = "ApplicationStoreUserSettingsStore";
            _.persistKey = "ApplicationStoreUserSettingsStore";
            _.migrations = [function(e) {
                return null == e.hasAcceptedEulaIds ? c(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            u(e, t, n[t])
                        }))
                    }
                    return e
                }({}, e), {
                    hasAcceptedEulaIds: []
                }) : e
            }];
            const O = new _(o.Z, {
                APPLICATION_STORE_ACCEPT_STORE_TERMS: function() {
                    y.hasAcceptedStoreTerms = !0
                },
                APPLICATION_STORE_ACCEPT_EULA: function(e) {
                    var t = e.eulaId;
                    if (y.hasAcceptedEulaIds.includes(t)) return !1;
                    y.hasAcceptedEulaIds.push(t)
                }
            })
        },
        325213: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => v
            });
            var r = n(202351),
                o = n(744564),
                i = n(121534),
                s = n(968449),
                u = n(473419),
                a = n(761814);

            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function f(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function p(e) {
                p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return p(e)
            }

            function d(e, t) {
                return !t || "object" !== h(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function y(e, t) {
                y = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return y(e, t)
            }
            var h = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function _(e) {
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
                    var n, r = p(e);
                    if (t) {
                        var o = p(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return d(this, n)
                }
            }
            var O, E, g, b = {
                    applicationId: null,
                    originURL: null
                },
                N = b,
                A = new Set,
                R = !1;

            function m() {
                g = null
            }

            function S() {
                O = null;
                E = null;
                A = new Set;
                N.applicationId = null;
                N.originURL = null;
                m()
            }
            var T = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && y(e, t)
                }(n, e);
                var t = _(n);

                function n() {
                    c(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    N = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))));
                            r.forEach((function(t) {
                                f(e, t, n[t])
                            }))
                        }
                        return e
                    }({}, null != e ? e : b);
                    O = N.applicationId;
                    E = N.originURL;
                    this.waitFor(u.Z, i.Z);
                    this.syncWith([u.Z, i.Z], (function() {
                        return !0
                    }));
                    a.Z.whenInitialized((function() {
                        R = !0
                    }))
                };
                r.inTestModeForApplication = function(e) {
                    return O === e
                };
                r.inTestModeForEmbeddedApplication = function(e) {
                    return O === e && null != E
                };
                r.shouldDisplayTestMode = function(e) {
                    return s.Sb.getSetting() && this.inTestModeForApplication(e)
                };
                r.getState = function() {
                    return N
                };
                r.whenInitialized = function(e) {
                    this.addConditionalChangeListener((function() {
                        if (R) {
                            setImmediate(e);
                            return !1
                        }
                    }))
                };
                r.__getLocalVars = function() {
                    return {
                        initialState: b,
                        state: N,
                        testModeApplicationId: O,
                        testModeOriginURL: E,
                        fetchingAuthorizations: A,
                        authorizationError: g,
                        initialized: R
                    }
                };
                ! function(e, t, n) {
                    t && l(e.prototype, t);
                    n && l(e, n)
                }(n, [{
                    key: "isTestMode",
                    get: function() {
                        return null != O
                    }
                }, {
                    key: "isFetchingAuthorization",
                    get: function() {
                        return A.size > 0
                    }
                }, {
                    key: "testModeEmbeddedApplicationId",
                    get: function() {
                        return null != E ? O : null
                    }
                }, {
                    key: "testModeApplicationId",
                    get: function() {
                        return O
                    }
                }, {
                    key: "testModeOriginURL",
                    get: function() {
                        return E
                    }
                }, {
                    key: "error",
                    get: function() {
                        return g
                    }
                }]);
                return n
            }(r.ZP.PersistedStore);
            T.displayName = "TestModeStore";
            T.persistKey = "TestModeStore";
            const v = new T(o.Z, {
                DEVELOPER_TEST_MODE_AUTHORIZATION_START: function(e) {
                    var t = e.applicationId;
                    A.add(t);
                    g = null
                },
                DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: function(e) {
                    var t = e.applicationId,
                        n = e.originURL;
                    O = t;
                    E = n;
                    A.delete(t);
                    g = null;
                    N.applicationId = t;
                    N.originURL = n
                },
                DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: function(e) {
                    var t = e.applicationId,
                        n = e.error;
                    A.delete(t);
                    g = n
                },
                OVERLAY_INITIALIZE: function(e) {
                    var t = e.testModeApplicationId;
                    O = t
                },
                DEVELOPER_TEST_MODE_RESET_ERROR: m,
                LOGOUT: S,
                DEVELOPER_TEST_MODE_RESET: S
            })
        },
        669426: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => g
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                s = n.n(i),
                u = n(882723),
                a = n(107364),
                c = n(718831),
                l = n(49032),
                f = n.n(l);

            function p(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function d(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function y(e) {
                y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return y(e)
            }

            function h(e, t) {
                return !t || "object" !== O(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function _(e, t) {
                _ = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return _(e, t)
            }
            var O = function(e) {
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
                    var n, r = y(e);
                    if (t) {
                        var o = y(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return h(this, n)
                }
            }
            const g = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && _(e, t)
                }(n, e);
                var t = E(n);

                function n() {
                    p(this, n);
                    var e;
                    (e = t.apply(this, arguments)).renderBreadcrumb = function(t, n) {
                        var o, i = e.props,
                            a = i.activeId,
                            l = i.onBreadcrumbClick,
                            p = i.breadcrumbs,
                            y = i.renderCustomBreadcrumb,
                            h = i.separatorClassName,
                            _ = t.id === a,
                            O = n === p.length - 1,
                            E = null != y ? y(t, _) : (0, r.jsx)("span", {
                                className: s()(f().breadcrumb, (o = {}, d(o, f().activeBreadcrumb, _), d(o, f().interactiveBreadcrumb, null != l), o)),
                                children: t.label
                            });
                        return (0, r.jsxs)("div", {
                            className: s()(f().breadcrumbWrapper, d({}, f().breadcrumbFinalWrapper, O)),
                            children: [null != l ? (0, r.jsx)(u.Clickable, {
                                tag: "span",
                                onClick: function() {
                                    return e.handleClick(t)
                                },
                                className: f().breadcrumbClickWrapper,
                                children: E
                            }) : E, O ? null : (0, r.jsx)(c.Z, {
                                className: s()(f().breadcrumbArrow, h),
                                direction: c.Z.Directions.RIGHT
                            })]
                        }, t.id)
                    };
                    return e
                }
                var o = n.prototype;
                o.handleClick = function(e) {
                    var t = this.props.onBreadcrumbClick;
                    null != t && t(e)
                };
                o.render = function() {
                    var e = this.props,
                        t = e.breadcrumbs,
                        n = e.className,
                        o = t.map(this.renderBreadcrumb);
                    return (0, r.jsx)(a.Z, {
                        justify: a.Z.Justify.START,
                        className: s()(f().breadcrumbs, n),
                        children: o
                    })
                };
                return n
            }(o.PureComponent)
        },
        459940: (e, t, n) => {
            "use strict";
            n.d(t, {
                u: () => b,
                Z: () => A
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                s = n.n(i),
                u = n(882723),
                a = n(990554),
                c = n(107364),
                l = n(473708),
                f = n(592934),
                p = n.n(f);

            function d(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function y(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function h(e) {
                h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return h(e)
            }

            function _(e, t) {
                return !t || "object" !== E(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function O(e, t) {
                O = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return O(e, t)
            }
            var E = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function g(e) {
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
                    var n, r = h(e);
                    if (t) {
                        var o = h(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return _(this, n)
                }
            }
            var b = {
                    DEFAULT: "default",
                    SUCCESS: "success",
                    ERROR: "error"
                },
                N = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && O(e, t)
                    }(n, e);
                    var t = g(n);

                    function n() {
                        d(this, n);
                        var e;
                        (e = t.apply(this, arguments)).inputRef = o.createRef();
                        e.containerRef = o.createRef();
                        e.handleButtonClick = function() {
                            e.select();
                            var t = e.props;
                            (0, t.onCopy)(t.value)
                        };
                        e.handleInputClick = function() {
                            e.select()
                        };
                        return e
                    }
                    var i = n.prototype;
                    i.select = function() {
                        var e;
                        null === (e = this.inputRef.current) || void 0 === e || e.select()
                    };
                    i.renderInput = function(e) {
                        var t, n = this.props,
                            o = n.value,
                            i = n.mode,
                            u = null === (t = this.context) || void 0 === t ? void 0 : t.titleId;
                        return (0, r.jsx)("input", {
                            className: s()((0, a.l)(p(), "input", i), y({}, p().inputHidden, e)),
                            ref: this.inputRef,
                            type: "text",
                            value: o,
                            onClick: this.handleInputClick,
                            readOnly: !0,
                            "aria-labelledby": u
                        })
                    };
                    i.render = function() {
                        var e, t = this.props,
                            n = t.text,
                            o = void 0 === n ? l.Z.Messages.COPY : n,
                            i = t.mode,
                            f = t.hideMessage,
                            d = t.className,
                            y = t.buttonLook,
                            h = null != f;
                        switch (i) {
                            case b.SUCCESS:
                                e = u.ButtonColors.GREEN;
                                break;
                            case b.ERROR:
                                e = u.ButtonColors.RED;
                                break;
                            default:
                                e = this.props.buttonColor
                        }
                        return (0, r.jsx)(u.FocusRing, {
                            focusTarget: this.inputRef,
                            ringTarget: this.containerRef,
                            children: (0, r.jsx)("div", {
                                className: s()((0, a.l)(p(), "copyInput", i), d),
                                ref: this.containerRef,
                                children: (0, r.jsxs)(c.Z, {
                                    className: p().layout,
                                    children: [(0, r.jsxs)(c.Z, {
                                        className: p().inputWrapper,
                                        children: [this.renderInput(h), h ? (0, r.jsx)("div", {
                                            className: p().hiddenMessage,
                                            children: f
                                        }) : null]
                                    }), (0, r.jsx)(c.Z, {
                                        shrink: 1,
                                        grow: 0,
                                        style: {
                                            margin: 0
                                        },
                                        children: (0, r.jsx)(u.Button, {
                                            className: p().button,
                                            onClick: this.handleButtonClick,
                                            size: u.ButtonSizes.MIN,
                                            color: e,
                                            look: y,
                                            children: o
                                        })
                                    })]
                                })
                            })
                        })
                    };
                    return n
                }(o.PureComponent);
            N.contextType = u.FormContext;
            N.defaultProps = {
                supportsCopy: !0,
                buttonColor: u.ButtonColors.PRIMARY,
                buttonLook: u.ButtonLooks.FILLED,
                mode: b.DEFAULT
            };
            N.Modes = b;
            N.ButtonColors = u.ButtonColors;
            N.ButtonLooks = u.ButtonLooks;
            const A = N
        },
        641277: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => m
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                s = n.n(i),
                u = n(269116);

            function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function c(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            s = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(s = (r = n.next()).done); s = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return a(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var l = n(124251),
                f = n(633878);

            function p(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function d(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function y(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function h(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    s = e.color,
                    u = void 0 === s ? "currentColor" : s,
                    a = e.foreground,
                    c = y(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", d(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            p(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, f.Z)(c)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 40 40",
                    children: (0, r.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, r.jsx)("path", {
                            className: a,
                            fill: u,
                            fillOpacity: ".8",
                            d: "M21.226 30v-4.154h-3.755V30h3.755zm-.512-8.62c3.67-1.337 5.718-2.959 5.718-6.145 0-3.272-2.36-5.235-6.088-5.235-2.589 0-4.637.825-6.344 2.048l.484 3.3c1.621-1.251 3.47-2.162 5.49-2.162 1.707 0 2.845.854 2.845 2.305 0 1.593-1.08 2.475-3.812 3.442l-.882.342.342 4.523 2.076-.455.171-1.963z"
                        }), (0, r.jsx)("rect", {
                            className: a,
                            width: "38",
                            height: "38",
                            x: "1",
                            y: "1",
                            stroke: u,
                            strokeOpacity: ".4",
                            strokeWidth: "2",
                            rx: "5"
                        }), (0, r.jsx)("circle", {
                            className: a,
                            cx: "7",
                            cy: "7",
                            r: "2",
                            fill: u,
                            fillOpacity: ".4"
                        }), (0, r.jsx)("circle", {
                            className: a,
                            cx: "7",
                            cy: "33",
                            r: "2",
                            fill: u,
                            fillOpacity: ".4"
                        }), (0, r.jsx)("circle", {
                            className: a,
                            cx: "33",
                            cy: "7",
                            r: "2",
                            fill: u,
                            fillOpacity: ".4"
                        }), (0, r.jsx)("circle", {
                            className: a,
                            cx: "33",
                            cy: "33",
                            r: "2",
                            fill: u,
                            fillOpacity: ".4"
                        })]
                    })
                }))
            }
            var _ = n(203600),
                O = n(331774),
                E = n.n(O);

            function g(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function b(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function N(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            var A = {
                XSMALL: E().xsmall,
                SMALL: E().small,
                MEDIUM: E().medium,
                LARGE: E().large
            };
            var R = function(e) {
                var t, i = e.game,
                    a = e.guild,
                    f = e.skuId,
                    p = e.pid,
                    d = e.className,
                    y = e.guildClassName,
                    O = e.size,
                    R = void 0 === O ? A.MEDIUM : O,
                    m = N(e, ["game", "guild", "skuId", "pid", "className", "guildClassName", "size"]);
                null != f && (t = function(e) {
                    if (null == e) return null;
                    switch (e) {
                        case _.Si.GUILD:
                            return n(460122);
                        case _.Si.TIER_0:
                            return n(873994);
                        case _.Si.TIER_1:
                            return n(413369);
                        case _.Si.TIER_2:
                        case _.Si.LEGACY:
                            return n(132354);
                        default:
                            return null
                    }
                }(f));
                null != i && null == t && (t = i.getIconURL(function(e) {
                    switch (e) {
                        case A.XSMALL:
                            return 24;
                        case A.SMALL:
                            return 30;
                        case A.MEDIUM:
                            return 40;
                        case A.LARGE:
                            return 60;
                        default:
                            return 80
                    }
                }(R)));
                t = function(e, t) {
                    var n = c(o.useState(), 2),
                        r = n[0],
                        i = n[1];
                    o.useEffect((function() {
                        null != e && null == t ? (0, u.Z)().then((function(t) {
                            null != t && t.identifyGame(e, (function(e, t) {
                                0 === e && null != t.icon && "" !== t.icon && null != t.name && "" !== t.name && i("data:image/png;base64,".concat(t.icon))
                            }))
                        })) : i(void 0)
                    }), [e, t]);
                    return null != t ? t : r
                }(p, t);
                if (null == t && null != a) {
                    var S = function(e) {
                        switch (e) {
                            case A.XSMALL:
                                return l.Z.Sizes.SMALLER;
                            case A.SMALL:
                                return l.Z.Sizes.SMALL;
                            case A.LARGE:
                                return l.Z.Sizes.LARGE;
                            default:
                                return l.Z.Sizes.MEDIUM
                        }
                    }(R);
                    return (0, r.jsx)(l.Z, {
                        className: s()(E().gameIcon, y, d),
                        guild: a,
                        size: S
                    })
                }
                return null == t ? (0, r.jsx)(h, {
                    className: s()(E().gameIcon, R, d)
                }) : (0, r.jsx)("div", b(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            g(e, t, n[t])
                        }))
                    }
                    return e
                }({}, m), {
                    className: s()(E().gameIcon, R, d),
                    style: {
                        backgroundImage: "url('".concat(t, "')")
                    }
                }))
            };
            R.Sizes = A;
            const m = R
        },
        709189: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => M,
                C: () => P
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                s = n.n(i),
                u = n(853158),
                a = n(882723),
                c = n(662478),
                l = n(107364),
                f = n(109994),
                p = n.n(f);

            function d(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function y(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function h(e) {
                h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return h(e)
            }

            function _(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        y(e, t, n[t])
                    }))
                }
                return e
            }

            function O(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function E(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function g(e, t) {
                return !t || "object" !== R(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function b(e, t) {
                b = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return b(e, t)
            }
            var N, A, R = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function m(e) {
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
                    var n, r = h(e);
                    if (t) {
                        var o = h(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return g(this, n)
                }
            }! function(e) {
                e.DEFAULT = "default";
                e.SMALL = "small"
            }(N || (N = {}));
            var S, T = (y(A = {}, N.DEFAULT, p().shineDefault), y(A, N.SMALL, p().shineSmall), A),
                v = (y(S = {}, N.DEFAULT, p().shineInnerDefault), y(S, N.SMALL, p().shineInnerSmall), S),
                M = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && b(e, t)
                    }(n, e);
                    var t = m(n);

                    function n() {
                        d(this, n);
                        return t.apply(this, arguments)
                    }
                    n.prototype.render = function() {
                        var e = this.props,
                            t = e.className,
                            n = e.shineSize,
                            o = e.shinePaused,
                            i = E(e, ["className", "shineSize", "shinePaused"]);
                        return (0, r.jsx)(u.Z.div, O(_({}, i), {
                            className: s()(p().shineContainer, t, y({}, p().shinePaused, o)),
                            children: (0, r.jsx)(l.Z, {
                                align: l.Z.Align.CENTER,
                                justify: l.Z.Justify.CENTER,
                                className: T[n],
                                children: (0, r.jsx)("div", {
                                    className: v[n]
                                })
                            })
                        }))
                    };
                    return n
                }(o.PureComponent);
            M.defaultProps = {
                shineSize: N.DEFAULT
            };
            var C = function(e) {
                var t = e.children,
                    n = e.className,
                    i = e.disabled,
                    u = e.submitting,
                    l = e.pauseAnimation,
                    f = e.shineSize,
                    d = void 0 === f ? N.DEFAULT : f,
                    y = e.shinePaused,
                    h = e.buttonShineClassName,
                    g = e.onlyShineOnHover,
                    b = E(e, ["children", "className", "disabled", "submitting", "pauseAnimation", "shineSize", "shinePaused", "buttonShineClassName", "onlyShineOnHover"]),
                    A = o.createRef(),
                    R = (0, c.Z)(A),
                    m = !i && !u && !0 !== l && (!g || R);
                return (0, r.jsxs)(a.Button, O(_({
                    buttonRef: A
                }, b), {
                    className: s()(p().shinyButton, n),
                    disabled: i,
                    submitting: u,
                    children: [t, m ? (0, r.jsx)(M, {
                        shinePaused: y,
                        className: s()(p().buttonShine, g ? p().onlyShineOnHover : void 0, h),
                        shineSize: d
                    }) : null]
                }))
            };
            C.ShineSizes = N;
            const P = C
        },
        443812: (e, t, n) => {
            "use strict";
            n.d(t, {
                hQ: () => s,
                Dt: () => u,
                FG: () => a
            });
            var r = n(873955),
                o = n.n(r),
                i = n(989824),
                s = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return o()(e)
                },
                u = function() {
                    return (0, i.Z)((function() {
                        return s()
                    }))
                },
                a = function(e) {
                    return (0, e.children)(u())
                }
        },
        718831: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => y
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                s = n(633878),
                u = n(871979),
                a = n.n(u);

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function f(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            var p = {
                    UP: a().directionUp,
                    RIGHT: a().directionRight,
                    DOWN: a().directionDown,
                    LEFT: a().directionLeft
                },
                d = function(e) {
                    var t = e.direction,
                        n = void 0 === t ? p.DOWN : t,
                        o = e.width,
                        u = void 0 === o ? 24 : o,
                        d = e.height,
                        y = void 0 === d ? 24 : d,
                        h = e.color,
                        _ = void 0 === h ? "currentColor" : h,
                        O = e.transition,
                        E = void 0 === O ? a().transition : O,
                        g = e.className,
                        b = e.foreground,
                        N = e.expanded,
                        A = f(e, ["direction", "width", "height", "color", "transition", "className", "foreground", "expanded"]),
                        R = n;
                    !0 === N ? R = p.DOWN : !1 === N && (R = p.RIGHT);
                    return (0,
                        r.jsx)("svg", l(function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))));
                            r.forEach((function(t) {
                                c(e, t, n[t])
                            }))
                        }
                        return e
                    }({
                        className: i()(g, E, R),
                        width: u,
                        height: y,
                        viewBox: "0 0 24 24"
                    }, (0, s.Z)(A)), {
                        children: (0, r.jsx)("path", {
                            className: b,
                            fill: "none",
                            stroke: _,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M7 10L12 15 17 10",
                            "aria-hidden": !0
                        })
                    }))
                };
            d.Directions = p;
            const y = d
        },
        269295: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var r = n(785893),
                o = (n(667294), n(633878));

            function i(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function s(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function u(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function a(e) {
                var t = e.width,
                    n = void 0 === t ? 16 : t,
                    a = e.height,
                    c = void 0 === a ? 16 : a,
                    l = e.color,
                    f = void 0 === l ? "currentColor" : l,
                    p = e.foreground,
                    d = u(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", s(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            i(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(d)), {
                    width: n,
                    height: c,
                    viewBox: "0 0 18 20",
                    children: (0, r.jsx)("path", {
                        className: p,
                        fill: f,
                        d: "M15,15H3V13H15Zm0-4H3V9H15Zm0-4H3V5H15ZM0,20l1.5-1.5L3,20l1.5-1.5L6,20l1.5-1.5L9,20l1.5-1.5L12,20l1.5-1.5L15,20l1.5-1.5L18,20V0L16.5,1.5,15,0,13.5,1.5,12,0,10.5,1.5,9,0,7.5,1.5,6,0,4.5,1.5,3,0,1.5,1.5,0,0Z"
                    })
                }))
            }
        },
        856236: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var r = n(785893),
                o = (n(667294), n(633878));

            function i(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function s(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function u(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function a(e) {
                var t = e.width,
                    n = void 0 === t ? 14 : t,
                    a = e.height,
                    c = void 0 === a ? 14 : a,
                    l = e.color,
                    f = void 0 === l ? "currentColor" : l,
                    p = e.foreground,
                    d = u(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", s(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            i(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(d)), {
                    width: n,
                    height: c,
                    viewBox: "0 0 14 14",
                    children: (0, r.jsx)("path", {
                        className: p,
                        fill: f,
                        d: "M12,0 C12.8284271,0 14,1.17157288 14,2 L14,12 C14,12.8284271 12.8284271,14 12,14 L2,14 C1.17157288,14 0,12.8284271 0,12 L0,2 C0,1.17157288 1.17157288,0 2,0 L12,0 Z M8,3 L6,3 L6,8 L8,8 L8,3 Z M8,11 L8,9 L6,9 L6,11 L8,11 Z"
                    })
                }))
            }
        },
        531441: (e, t, n) => {
            "use strict";
            n.d(t, {
                Dv: () => d,
                OV: () => h,
                NG: () => _,
                mA: () => O,
                IG: () => E,
                lB: () => g,
                G2: () => b,
                fW: () => N
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                s = (n(882723), n(87931)),
                u = (n(473708), n(202427)),
                a = n.n(u);

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        c(e, t, n[t])
                    }))
                }
                return e
            }

            function f(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function p(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            var d = {
                ROUND: a().baseShapeRound,
                ROUND_LEFT: a().baseShapeRoundLeft,
                ROUND_RIGHT: a().baseShapeRoundRight,
                SQUARE: ""
            };

            function y(e) {
                switch (e) {
                    case 1:
                    case 4:
                    case 6:
                        return 1;
                    default:
                        return
                }
            }

            function h(e) {
                return e < 10 ? 16 : e < 100 ? 22 : 30
            }

            function _(e) {
                return e < 1e3 ? "".concat(e) : "".concat(Math.min(Math.floor(e / 1e3), 9), "k+")
            }
            var O = function(e) {
                    var t = e.count,
                        n = e.color,
                        o = void 0 === n ? s.Z.STATUS_DANGER : n,
                        u = e.disableColor,
                        c = void 0 !== u && u,
                        O = e.shape,
                        E = void 0 === O ? d.ROUND : O,
                        g = e.className,
                        b = e.style,
                        N = p(e, ["count", "color", "disableColor", "shape", "className", "style"]);
                    return (0, r.jsx)("div", f(l({
                        className: i()(g, a().numberBadge, E),
                        style: l({
                            backgroundColor: c ? void 0 : o,
                            width: h(t),
                            paddingRight: y(t)
                        }, b)
                    }, N), {
                        children: _(t)
                    }))
                },
                E = function(e) {
                    var t = e.text,
                        n = e.className,
                        o = e.color,
                        u = void 0 === o ? s.Z.STATUS_DANGER : o,
                        c = e.shape,
                        y = void 0 === c ? d.ROUND : c,
                        h = e.disableColor,
                        _ = void 0 !== h && h,
                        O = e.style,
                        E = p(e, ["text", "className", "color", "shape", "disableColor", "style"]);
                    return (0, r.jsx)("div", f(l({
                        className: i()(n, a().textBadge, y),
                        style: l({
                            backgroundColor: _ ? void 0 : u
                        }, O)
                    }, E), {
                        children: t
                    }))
                },
                g = function(e) {
                    var t = e.text,
                        n = e.className,
                        o = p(e, ["text", "className"]);
                    return (0, r.jsx)(E, l({
                        className: i()(a().premiumBadge, n),
                        text: t
                    }, o))
                },
                b = function(e) {
                    var t = e.icon,
                        n = e.className,
                        o = e.color,
                        u = void 0 === o ? s.Z.STATUS_DANGER : o,
                        c = e.shape,
                        f = void 0 === c ? d.ROUND : c,
                        p = e.disableColor,
                        y = void 0 !== p && p,
                        h = e.style;
                    return (0, r.jsx)("div", {
                        className: i()(n, a().iconBadge, f),
                        style: l({
                            backgroundColor: y ? void 0 : u
                        }, h),
                        children: (0, r.jsx)(t, {
                            className: a().icon
                        })
                    })
                },
                N = function(e) {
                    var t = e.className,
                        n = e.color,
                        o = void 0 === n ? s.Z.INTERACTIVE_ACTIVE : n,
                        u = e.shape,
                        c = void 0 === u ? d.ROUND : u,
                        f = e.disableColor,
                        y = void 0 !== f && f,
                        h = e.style,
                        _ = p(e, ["className", "color", "shape", "disableColor", "style"]);
                    return (0,
                        r.jsx)("div", l({
                        className: i()(t, a().circleBadge, c),
                        style: l({
                            backgroundColor: y ? void 0 : o
                        }, h)
                    }, _))
                }
        },
        691797: (e, t, n) => {
            "use strict";
            n.d(t, {
                wS: () => s,
                JG: () => u
            });
            var r = n(482507),
                o = n(120415),
                i = n(310126),
                s = function() {
                    if (o.FB) return null != i.ZP.copy;
                    try {
                        return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                    } catch (e) {
                        return !1
                    }
                }();

            function u(e) {
                if (!s) return !1;
                if (o.FB) {
                    i.ZP.copy(e);
                    return !0
                }
                return r.J(e)
            }
        },
        908478: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p,
                N: () => d
            });
            var r = n(652591),
                o = n(322500),
                i = n(2590),
                s = n(473708);

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function a(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            s = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(s = (r = n.next()).done); s = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return u(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var c = /^\d+$/,
                l = /^(.+?@.+?\..+?|.+?#\d{4})$/,
                f = /^[a-zA-Z0-9_\\.]+$/;

            function p(e) {
                if (f.test(e)) return null;
                if (e.includes("#") && l.test(e)) return null;
                ! function(e) {
                    var t = a(e.split("#"), 2),
                        n = t[0],
                        s = t[1];
                    r.default.track(i.rMx.FRIEND_REQUEST_FAILED, {
                        reason: "Invalid Username",
                        query: e,
                        discrim_len: (null != s ? s : "").length,
                        username_len: n.length,
                        is_email_like: o.Z.isEmail(e),
                        is_invite_like: o.Z.isInvite(e),
                        is_num_only: c.test(e)
                    })
                }(e);
                return s.Z.Messages.POMELO_ADD_FRIEND_ERROR
            }

            function d(e, t) {
                switch (e) {
                    case i.evJ.RELATIONSHIP_INCOMING_DISABLED:
                        return s.Z.Messages.ADD_FRIEND_ERROR_INVALID_DISCORD_TAG.format({
                            discordTag: t
                        });
                    case i.evJ.TOO_MANY_FRIENDS:
                        return s.Z.Messages.ADD_FRIEND_ERROR_TOO_MANY_FRIENDS;
                    case i.evJ.RELATIONSHIP_ALREADY_FRIENDS:
                        return s.Z.Messages.ADD_FRIEND_ERROR_ALREADY_FRIENDS;
                    case i.evJ.USER_QUARANTINED:
                    case i.evJ.USER_FRIEND_REQUEST_LIMITED_ACCESS:
                        return s.Z.Messages.LIMITED_ACCESS_INFO_MODAL_HEADING;
                    case i.evJ.TOO_MANY_BLOCKED_USERS:
                        return s.Z.Messages.BLOCK_USER_ERROR_TOO_MANY_BLOCKED_USERS;
                    case i.evJ.RELATIONSHIP_INCOMING_BLOCKED:
                    case i.evJ.RELATIONSHIP_INVALID_SELF:
                    case i.evJ.RELATIONSHIP_INVALUD_USER_BOT:
                    case i.evJ.RELATIONSHIP_INVALID_DISCORD_TAG:
                    default:
                        return s.Z.Messages.POMELO_ADD_FRIEND_ERROR
                }
            }
        },
        347117: (e, t, n) => {
            "use strict";
            n.d(t, {
                Tj: () => p,
                zp: () => d,
                Dc: () => y,
                rn: () => h,
                rv: () => _,
                XN: () => E,
                OF: () => g,
                fD: () => N,
                QB: () => A,
                Bo: () => R,
                c0: () => T
            });
            var r = n(441143),
                o = n.n(r),
                i = n(496486),
                s = n.n(i),
                u = n(16243),
                a = n.n(u);

            function c(e, t, n, r, o, i, s) {
                try {
                    var u = e[i](s),
                        a = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(a) : Promise.resolve(a).then(r, o)
            }

            function l(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function s(e) {
                            c(i, r, o, s, u, "next", e)
                        }

                        function u(e) {
                            c(i, r, o, s, u, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }
            var f = function(e, t) {
                var n, r, o, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        s.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        s.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = s.ops.pop();
                                        s.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = s.trys,
                                                o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            s.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && s.label < o[1]) {
                                            s.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && s.label < o[2]) {
                                            s.label = o[2];
                                            s.ops.push(i);
                                            break
                                        }
                                        o[2] && s.ops.pop();
                                        s.trys.pop();
                                        continue
                                }
                                i = t.call(e, s)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };
            0;

            function p(e) {
                var t = e.width,
                    n = e.height,
                    r = e.maxWidth,
                    o = e.maxHeight,
                    i = e.minWidth,
                    s = void 0 === i ? 0 : i,
                    u = e.minHeight,
                    a = void 0 === u ? 0 : u;
                if (t !== r || n !== o) {
                    var c = t > r ? r / t : 1;
                    t = Math.max(Math.round(t * c), s);
                    var l = (n = Math.max(Math.round(n * c), a)) > o ? o / n : 1;
                    t = Math.max(Math.round(t * l), s);
                    n = Math.max(Math.round(n * l), a)
                }
                return {
                    width: t,
                    height: n
                }
            }

            function d(e, t) {
                var n = Math.min(Math.round(.65 * window.innerHeight), 2e3);
                return p({
                    width: e,
                    height: t,
                    maxWidth: Math.min(Math.round(.75 * window.innerWidth), 2e3),
                    maxHeight: n
                })
            }

            function y(e) {
                var t = e.width,
                    n = e.height,
                    r = e.maxWidth,
                    o = e.maxHeight,
                    i = 1;
                t > r && (i = r / t);
                t = Math.round(t * i);
                var s = 1;
                (n = Math.round(n * i)) > o && (s = o / n);
                return Math.min(i * s, 1)
            }

            function h(e) {
                var t = e.width,
                    n = e.height,
                    r = e.maxWidth,
                    o = e.maxHeight;
                if (t === n) return 1;
                var i = Math.max(r / t, o / n);
                return Math.min(i, 1)
            }

            function _(e) {
                return null == e || "" === e ? "none" : "url(".concat(e, ")")
            }
            var O = [
                [0, 0, 0]
            ];

            function E(e, t, n) {
                var r = document.createElement("canvas"),
                    o = r.getContext("2d");
                if (null == o) return O;
                var i = r.width = 0 === e.width ? 128 : e.width,
                    s = r.height = 0 === e.height ? 128 : e.height;
                o.drawImage(e, 0, 0, i, s);
                var u = function(e, t, n) {
                        for (var r, o, i, s, u, a = [], c = 0; c < t; c += n) {
                            o = e[0 + (r = 4 * c)];
                            i = e[r + 1];
                            s = e[r + 2];
                            (void 0 === (u = e[r + 3]) || u >= 125) && (o > 250 && i > 250 && s > 250 || a.push([o, i, s]))
                        }
                        return a
                    }(o.getImageData(0, 0, i, s).data, i * s, n),
                    c = a()(u, t);
                return "boolean" == typeof c ? O : c.palette()
            }
            var g = function(e) {
                    return b(e)
                },
                b = s().memoize((function(e) {
                    return new Promise((function(t, n) {
                        var r = new Image;
                        r.crossOrigin = "Anonymous";
                        r.onerror = function(e) {
                            n(e);
                            r.onerror = r.onload = null;
                            r = null
                        };
                        r.onload = function() {
                            t(E(r, 5, 10));
                            r.onerror = r.onload = null;
                            r = null
                        };
                        r.src = e
                    }))
                }));

            function N(e) {
                return new Promise((function(t, n) {
                    var r = new FileReader;
                    r.readAsDataURL(e);
                    r.onload = function() {
                        o()("string" == typeof r.result, "Result must be a string");
                        t(r.result)
                    };
                    r.onerror = function(e) {
                        return n(e)
                    }
                }))
            }

            function A(e) {
                var t = e.split(";base64,");
                o()(2 === t.length, "Input data is not a valid image.");
                return atob(t[1]).length
            }

            function R(e, t, n) {
                return m.apply(this, arguments)
            }

            function m() {
                return (m = l((function(e, t, n) {
                    var r;
                    return f(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, S(e).arrayBuffer()];
                            case 1:
                                r = o.sent();
                                return [2, new File([r], t, {
                                    type: n
                                })]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function S(e) {
                var t;
                t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
                for (var n = e.split(",")[0].split(":")[1].split(";")[0], r = new Uint8Array(t.length), o = 0; o < t.length; o++) r[o] = t.charCodeAt(o);
                return new Blob([r], {
                    type: n
                })
            }

            function T(e) {
                return v.apply(this, arguments)
            }

            function v() {
                return (v = l((function(e) {
                    var t, n, r;
                    return f(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                if ("image/png" !== (null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0])) throw new Error("File is not a PNG");
                                return [4, e.text()];
                            case 1:
                                n = o.sent();
                                return (r = n.indexOf("IDAT")) > 0 && -1 !== n.substring(0, r).indexOf("acTL") ? [2, !0] : [2, !1]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        488110: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => _
            });
            var r = n(473903),
                o = n(496486),
                i = function(e) {
                    return "function" == typeof e ? e() : e
                };
            n.n(o)().curry((function(e, t, n) {
                return i(t) ? e(n) : n({})
            }));

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        s(e, t, n[t])
                    }))
                }
                return e
            }

            function a(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function c(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            var l, f, p = function() {
                    throw new Error("updateModal has not been implemented.")
                },
                d = n(680918);
            l = d.showModal;
            p = d.updateModalProps;
            f = n(264817).Mr;

            function y(e) {
                var t = e.promiseFn,
                    n = e.resolve,
                    r = e.reject,
                    o = e.modalProps,
                    i = void 0 === o ? {} : o,
                    s = e.hooks,
                    c = (void 0 === s ? {} : s).onEarlyClose,
                    d = function() {
                        null == c || c()
                    },
                    y = function(e) {
                        f(E);
                        n(e)
                    },
                    _ = function(e) {
                        f(E);
                        r(e)
                    },
                    O = function(e) {
                        var t = e.res;
                        p(E, g, d, a(u({}, i), {
                            error: t.body.message
                        }))
                    };
                if (null != l) var E = l(g, d, i);
                else null == c || c();

                function g(e) {
                    p(E, g, d, a(u({}, i), {
                        isLoading: !0
                    }));
                    return h({
                        promiseFn: t,
                        resolve: y,
                        reject: _,
                        code: e,
                        mfaCodeHandler: O,
                        isModalOpen: !0
                    })
                }
            }

            function h(e) {
                var t = e.promiseFn,
                    n = e.resolve,
                    r = e.reject,
                    o = e.code,
                    i = e.mfaCodeHandler,
                    s = void 0 === i ? y : i,
                    a = e.isModalOpen,
                    l = void 0 !== a && a,
                    f = c(e, ["promiseFn", "resolve", "reject", "code", "mfaCodeHandler", "isModalOpen"]);
                return t(null != o ? {
                    code: o
                } : {}).then(n, (function(e) {
                    if (function(e, t) {
                            return e.body && 60008 === e.body.code || t && 429 === e.status
                        }(e, l)) return s(u({
                        promiseFn: t,
                        resolve: n,
                        reject: r,
                        res: e
                    }, f));
                    r(e)
                }))
            }

            function _(e, t) {
                var n, o, s = null != t ? t : {},
                    a = s.checkEnabled,
                    l = void 0 === a ? null !== (o = null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== o && o : a,
                    f = c(s, ["checkEnabled"]);
                return new Promise((function(t, n) {
                    (i(l) ? y : h)(u({
                        promiseFn: e,
                        resolve: t,
                        reject: n
                    }, f))
                }))
            }
        },
        73105: (e, t, n) => {
            "use strict";
            n.d(t, {
                RD: () => K,
                WA: () => k,
                f5: () => x,
                Gb: () => U,
                Rs: () => F,
                _2: () => V,
                gL: () => j,
                fG: () => D
            });
            var r = n(306472),
                o = n(737264),
                i = n(496486),
                s = n.n(i),
                u = n(809784),
                a = n(296602),
                c = n(384411),
                l = n(72580),
                f = n(310126);

            function p(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }
            var d = function() {
                function e(t, n) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    this._shouldProcess = !1;
                    this._processing = !1;
                    this._minimumTimeRemaining = 5;
                    this._language = t;
                    this._languageHint = t;
                    this._onChange = n;
                    n(t)
                }
                var t = e.prototype;
                t.process = function(e) {
                    var t = this;
                    if (!this._processing) {
                        this._processing = !0;
                        requestIdleCallback((function(n) {
                            if (n.timeRemaining() <= t._minimumTimeRemaining) t._processEnd();
                            else {
                                e.length > 256 && (e = e.slice(0, 256));
                                (function(e, t) {
                                    return f.ZP.ensureModule("discord_spellcheck").then((function() {
                                        var n = f.ZP.requireModule("discord_spellcheck").cld;
                                        return new Promise((function(r, o) {
                                            n.detect(e, {
                                                httpHint: t,
                                                encodingHint: "UTF8"
                                            }, (function(e, t) {
                                                null != e ? o(new Error(e.message)) : !t.reliable || t.languages[0].percent < 90 || t.languages[0].score < 500 ? o(new Error("Not enough reliable text.")) : r(t.languages[0].code)
                                            }))
                                        }))
                                    }))
                                })(e, t._languageHint).then((function(e) {
                                    t.language = e;
                                    t._processEnd(n.didTimeout)
                                }), (function() {
                                    t._processEnd(n.didTimeout)
                                }))
                            }
                        }))
                    }
                };
                t._processEnd = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this._processing = !1;
                    e && this._minimumTimeRemaining++
                };
                ! function(e, t, n) {
                    t && p(e.prototype, t);
                    n && p(e, n)
                }(e, [{
                    key: "language",
                    get: function() {
                        return this._language
                    },
                    set: function(e) {
                        if (this._language !== e) {
                            this._language = e;
                            this._onChange(e)
                        }
                    }
                }, {
                    key: "languageHint",
                    set: function(e) {
                        this._languageHint = e
                    }
                }]);
                return e
            }();
            const y = {
                aa: "aa-ET",
                af: "af-ZA",
                ak: "ak-GH",
                am: "am-ET",
                an: "an-ES",
                ar: "ar-MA",
                as: "as-IN",
                ay: "ay-PE",
                az: "az-AZ",
                be: "be-BY",
                bg: "bg-BG",
                bi: "bi-TV",
                bn: "bn-BD",
                bo: "bo-CN",
                br: "br-FR",
                bs: "bs-BA",
                ca: "ca-ES",
                ce: "ce-RU",
                cs: "cs-CZ",
                cv: "cv-RU",
                cy: "cy-GB",
                da: "da-DK",
                de: "de-DE",
                dv: "dv-MV",
                dz: "dz-BT",
                el: "el-GR",
                en: "en-US",
                es: "es-ES",
                et: "et-EE",
                eu: "eu-ES",
                fa: "fa-IR",
                ff: "ff-SN",
                fi: "fi-FI",
                fo: "fo-FO",
                fr: "fr-FR",
                fy: "fy-DE",
                ga: "ga-IE",
                gd: "gd-GB",
                gl: "gl-ES",
                gu: "gu-IN",
                gv: "gv-GB",
                ha: "ha-NG",
                he: "he-IL",
                hi: "hi-IN",
                hr: "hr-HR",
                ht: "ht-HT",
                hu: "hu-HU",
                hy: "hy-AM",
                ia: "ia-FR",
                id: "id-ID",
                ig: "ig-NG",
                ik: "ik-CA",
                is: "is-IS",
                it: "it-IT",
                iu: "iu-CA",
                ja: "ja-JP",
                ka: "ka-GE",
                kk: "kk-KZ",
                kl: "kl-GL",
                km: "km-KH",
                kn: "kn-IN",
                ko: "ko-KR",
                ks: "ks-IN",
                ku: "ku-TR",
                kw: "kw-GB",
                ky: "ky-KG",
                lb: "lb-LU",
                lg: "lg-UG",
                li: "li-BE",
                ln: "ln-CD",
                lo: "lo-LA",
                lt: "lt-LT",
                lv: "lv-LV",
                mg: "mg-MG",
                mh: "mh-MH",
                mi: "mi-NZ",
                mk: "mk-MK",
                ml: "ml-IN",
                mn: "mn-MN",
                mr: "mr-IN",
                ms: "ms-MY",
                mt: "mt-MT",
                my: "my-MM",
                nb: "nb-NO",
                ne: "ne-NP",
                nl: "nl-NL",
                nn: "nn-NO",
                nr: "nr-ZA",
                oc: "oc-FR",
                om: "om-KE",
                or: "or-IN",
                os: "os-RU",
                pa: "pa-PK",
                pl: "pl-PL",
                ps: "ps-AF",
                pt: "pt-PT",
                ro: "ro-RO",
                ru: "ru-RU",
                rw: "rw-RW",
                sa: "sa-IN",
                sc: "sc-IT",
                sd: "sd-IN",
                se: "se-NO",
                si: "si-LK",
                sk: "sk-SK",
                sl: "sl-SI",
                so: "so-SO",
                sq: "sq-AL",
                sr: "sr-RS",
                ss: "ss-ZA",
                st: "st-ZA",
                sv: "sv-SE",
                sw: "sw-KE",
                ta: "ta-IN",
                te: "te-IN",
                tg: "tg-TJ",
                th: "th-TH",
                ti: "ti-ER",
                tk: "tk-TM",
                tl: "tl-PH",
                tn: "tn-ZA",
                tr: "tr-TR",
                ts: "ts-ZA",
                tt: "tt-RU",
                ug: "ug-CN",
                uk: "uk-UA",
                ur: "ur-PK",
                uz: "uz-UZ",
                ve: "ve-ZA",
                vi: "vi-VN",
                wa: "wa-BE",
                wo: "wo-SN",
                xh: "xh-ZA",
                yi: "yi-US",
                yo: "yo-NG",
                zh: "zh-CN",
                zu: "zu-ZA"
            };

            function h(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function _(e, t, n, r, o, i, s) {
                try {
                    var u = e[i](s),
                        a = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(a) : Promise.resolve(a).then(r, o)
            }

            function O(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function s(e) {
                            _(i, r, o, s, u, "next", e)
                        }

                        function u(e) {
                            _(i, r, o, s, u, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function E(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function g(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            s = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(s = (r = n.next()).done); s = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return h(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var b = function(e, t) {
                    var n, r, o, i, s = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function u(i) {
                        return function(u) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    (r = 0, o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            s.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            s.label++;
                                            r = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = s.ops.pop();
                                            s.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = s.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                s.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && s.label < o[1]) {
                                                s.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && s.label < o[2]) {
                                                s.label = o[2];
                                                s.ops.push(i);
                                                break
                                            }
                                            o[2] && s.ops.pop();
                                            s.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, s)
                                } catch (e) {
                                    i = [6, e];
                                    r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, u])
                        }
                    }
                },
                N = new a.Z("Spellchecker"),
                A = null === r.Z || void 0 === r.Z ? void 0 : r.Z.spellCheck;

            function R(e) {
                var t;
                e = null !== (t = y[e]) && void 0 !== t ? t : e;
                var n = (0, o.Q)(e.replace(/[_-]/g, "-"));
                if (null != n && null != n.langtag.language && null != n.langtag.region) {
                    var r = n.langtag,
                        i = r.language,
                        s = r.region;
                    return "".concat(i.language.toLowerCase(), "-").concat(s.toUpperCase())
                }
                N.error("".concat(e, " is not a valid locale."))
            }
            var m = function() {
                    function e(t) {
                        var n = this;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        this._enabled = !0;
                        this.misspelledWord = "";
                        this.corrections = [];
                        var r = g(c.default.locale.split("-"), 2),
                            o = r[0],
                            i = r[1];
                        this.regionPreference = i;
                        var s = this.getAvailableLanguages(t);
                        this.languageDetector = new d(o, (function(e) {
                            var r = "".concat(e, "-").concat(n.regionPreference);
                            if (-1 !== t.indexOf(r)) n.setLocale(r);
                            else {
                                var i, u = null !== (i = s[e]) && void 0 !== i ? i : y[o];
                                null != u && n.setLocale(u)
                            }
                        }));
                        A.on("spellcheck-result", (function(e, t) {
                            n.misspelledWord = null != e ? e : "";
                            n.corrections = null != t ? t : []
                        }))
                    }
                    var t = e.prototype;
                    t.setLearnedWords = function(e) {
                        A.setLearnedWords(e)
                    };
                    t.setLocale = function(e) {
                        var t;
                        null === (t = A.setLocale(e)) || void 0 === t || t.then((function(t) {
                            N.info("Switching to ".concat(e), t ? "(available)" : "(unavailable)")
                        }))
                    };
                    t.setAppLocale = function(e) {
                        this.regionPreference = e.split("-")[1]
                    };
                    t.detectLanguage = function(e) {
                        this.enabled && this.languageDetector.process(e)
                    };
                    t.getAvailableLanguages = function(e) {
                        var t = {};
                        e.forEach((function(e) {
                            var n, r = g(e.split("-"), 1)[0];
                            t[r] = null !== (n = t[r]) && void 0 !== n ? n : e
                        }));
                        return t
                    };
                    t.isMisspelled = function(e, t) {
                        return "" !== this.misspelledWord && e === this.misspelledWord
                    };
                    t.getCorrectionsForMisspelling = function(e, t) {
                        return this.isMisspelled(e, t) ? this.corrections : []
                    };
                    t.replaceMisspelling = function(e) {
                        A.replaceMisspelling(e)
                    };
                    ! function(e, t, n) {
                        t && E(e.prototype, t);
                        n && E(e, n)
                    }(e, [{
                        key: "enabled",
                        get: function() {
                            return this._enabled
                        },
                        set: function(e) {
                            this._enabled = e
                        }
                    }]);
                    return e
                }(),
                S = s().debounce((function(e, t) {
                    var n = function(e) {
                        if (null == e) return null;
                        if ((0, u.k)(e, HTMLInputElement) || (0, u.k)(e, HTMLTextAreaElement)) return e.value;
                        if ((0, u.k)(e) && e.hasAttribute("contenteditable")) return e.textContent
                    }(t);
                    null != n && e.detectLanguage(n)
                }), 250);

            function T(e) {
                null != document.body && document.body.addEventListener("beforeinput", (function(t) {
                    return S(e, t.target)
                }), !0)
            }

            function v() {
                return (v = O((function() {
                    var e, t, n, r;
                    return b(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, A.getAvailableDictionaries()];
                            case 1:
                                t = null !== (e = o.sent()) && void 0 !== e ? e : [];
                                n = t.map(R).filter(l.lm);
                                T(r = new m(n));
                                return [2, r]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var M = n(120415);

            function C(e, t, n, r, o, i, s) {
                try {
                    var u = e[i](s),
                        a = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(a) : Promise.resolve(a).then(r, o)
            }

            function P(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function s(e) {
                            C(i, r, o, s, u, "next", e)
                        }

                        function u(e) {
                            C(i, r, o, s, u, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }
            var I = function(e, t) {
                var n, r, o, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        s.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        s.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = s.ops.pop();
                                        s.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = s.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            s.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && s.label < o[1]) {
                                            s.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && s.label < o[2]) {
                                            s.label = o[2];
                                            s.ops.push(i);
                                            break
                                        }
                                        o[2] && s.ops.pop();
                                        s.trys.pop();
                                        continue
                                }
                                i = t.call(e, s)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };

            function Z() {
                return null != (null === r.Z || void 0 === r.Z ? void 0 : r.Z.spellCheck)
            }

            function U() {
                return (0, M.nI)() && Z()
            }
            var w = U() ? function() {
                return v.apply(this, arguments)
            }() : null;

            function j(e) {
                return L.apply(this, arguments)
            }

            function L() {
                return (L = P((function(e) {
                    var t;
                    return I(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, w];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.enabled = e;
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function D(e) {
                return Y.apply(this, arguments)
            }

            function Y() {
                return (Y = P((function(e) {
                    var t;
                    return I(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, w];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.setLearnedWords(e);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function x(e) {
                return B.apply(this, arguments)
            }

            function B() {
                B = P((function(e) {
                    var t, n, r = arguments;
                    return I(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                t = r.length > 1 && void 0 !== r[1] && r[1];
                                return [4, w];
                            case 1:
                                return null == (n = o.sent()) ? [2, !1] : [2, n.isMisspelled(e, t)]
                        }
                    }))
                }));
                return B.apply(this, arguments)
            }

            function k(e) {
                return G.apply(this, arguments)
            }

            function G() {
                G = P((function(e) {
                    var t, n, r, o = arguments;
                    return I(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                t = o.length > 1 && void 0 !== o[1] && o[1], n = o.length > 2 && void 0 !== o[2] ? o[2] : 5;
                                return [4, w];
                            case 1:
                                return null == (r = i.sent()) ? [2, []] : [2, r.getCorrectionsForMisspelling(e, t).slice(0, n)]
                        }
                    }))
                }));
                return G.apply(this, arguments)
            }

            function F(e) {
                return H.apply(this, arguments)
            }

            function H() {
                return (H = P((function(e) {
                    var t;
                    return I(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, w];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.replaceMisspelling(e);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function V(e) {
                return W.apply(this, arguments)
            }

            function W() {
                return (W = P((function(e) {
                    var t;
                    return I(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, w];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.setAppLocale(e);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function K(e) {
                if (!Z()) return function() {};
                var t = r.Z.spellCheck.on("spellcheck-result", e);
                return null != t ? t : function() {}
            }
        },
        990554: (e, t, n) => {
            "use strict";
            n.d(t, {
                l: () => o
            });
            var r = n(421281);

            function o(e, t) {
                for (var n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) o[i - 2] = arguments[i];
                var s = o.reduce((function(e, t) {
                        return e + (0, r.De)(t)
                    }), ""),
                    u = "".concat(t).concat(s),
                    a = e[u];
                if (null != a) return a;
                0
            }
        },
        322500: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = /^([\w-+]+(?:\.[\w-+]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,63}(?:\.[a-z]{2})?)$/i,
                o = /^((https:\/\/)?(discord\.gg\/)|(discord\.com\/)(invite\/)?)?[A-Za-z0-9]{8,8}$/,
                i = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                s = /^(.*)#[0-9]{1,5}$/,
                u = ["@", "#", ":", "```", "discord", "hypesquad", "system message", "system mesage", "sustem message", "sustem mesage"],
                a = ["discordtag", "everyone", "here", "discord nitro", "discord"];
            const c = {
                isEmail: function(e) {
                    return r.test(e)
                },
                isInvite: function(e) {
                    return o.test(e)
                },
                isPhoneNumber: function(e) {
                    return i.test(e)
                },
                isUserTagLike: function(e) {
                    var t = s.exec(e);
                    if (null != t && t.length > 1) {
                        var n = t[1],
                            r = u.some((function(e) {
                                return n.includes(e)
                            })),
                            o = a.includes(n);
                        return !r && !o
                    }
                    return !1
                }
            }
        },
        680918: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                showModal: () => a,
                updateModalProps: () => c
            });
            var r = n(785893),
                o = (n(667294), n(264817)),
                i = n(919244);

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var u = function(e, t, n) {
                return function(o) {
                    return (0, r.jsx)(i.Z, function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))));
                            r.forEach((function(t) {
                                s(e, t, n[t])
                            }))
                        }
                        return e
                    }({
                        handleSubmit: e,
                        handleEarlyClose: t
                    }, n, o))
                }
            };

            function a(e, t, n) {
                return (0, o.h7)(u(e, t, n), {
                    onCloseCallback: t
                })
            }

            function c(e, t, n, r) {
                return (0, o.o)(e, u(t, n, r))
            }
        }
    }
]);
//# sourceMappingURL=3d3c6a4fd32b4a23e0be.js.map