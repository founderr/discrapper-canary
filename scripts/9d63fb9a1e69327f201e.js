(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [54776, 58635, 88110, 96043, 71402], {
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
                u = n(73105),
                a = n(2590);

            function s(e, t, n) {
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
                        s(e, t, n[t])
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
                    var s, f, p = 0,
                        d = 0;
                    if ("pageX" in e) {
                        p = e.pageX;
                        d = e.pageY
                    }
                    if (0 === p && 0 === d) {
                        var y, h = null === (y = e.target) || void 0 === y ? void 0 : y.getBoundingClientRect(),
                            O = null != h ? h : {},
                            b = O.left,
                            E = void 0 === b ? 0 : b,
                            S = O.top,
                            _ = void 0 === S ? 0 : S,
                            g = O.width,
                            m = void 0 === g ? 0 : g,
                            v = O.height;
                        p = E + m / 2;
                        d = _ + (void 0 === v ? 0 : v) / 2
                    }
                    var I = {
                        render: t,
                        renderLazy: r,
                        target: null !== (s = e.target) && void 0 !== s ? s : e.currentTarget,
                        rect: new DOMRect(p, d, 0, 0),
                        config: c({
                            context: __OVERLAY__ ? a.IlC.OVERLAY : null !== (f = (0, o.GB)()) && void 0 !== f ? f : a.IlC.APP
                        }, n)
                    };
                    if ((null == n ? void 0 : n.enableSpellCheck) && (0, i.nI)()) var P = (0, u.RD)((function() {
                        P();
                        l(I)
                    }));
                    else {
                        e.preventDefault();
                        l(I)
                    }
                }
            }

            function d(e, t, n) {
                p(e, void 0, n, t)
            }
        },
        595138: (e, t, n) => {
            "use strict";
            n.d(t, {
                yD: () => l,
                p0: () => f,
                Qv: () => d
            });
            var r = n(281110),
                o = n(744564),
                i = n(534681),
                u = n(2590);

            function a(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        s = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(s) : Promise.resolve(s).then(r, o)
            }

            function s(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            a(i, r, o, u, s, "next", e)
                        }

                        function s(e) {
                            a(i, r, o, u, s, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            var c = function(e, t) {
                var n, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            u.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && u.label < o[1]) {
                                            u.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && u.label < o[2]) {
                                            u.label = o[2];
                                            u.ops.push(i);
                                            break
                                        }
                                        o[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                i = t.call(e, u)
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
                        }([i, a])
                    }
                }
            };

            function l(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                o.Z.wait((function() {
                    o.Z.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_START",
                        applicationId: e
                    })
                }));
                return r.ZP.get({
                    url: u.ANM.ENTITLEMENTS_FOR_APPLICATION(e),
                    oldFormErrors: !0,
                    query: {
                        exclude_consumed: t
                    }
                }).then((function(t) {
                    o.Z.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_SUCCESS",
                        applicationId: e,
                        entitlements: t.body
                    });
                    return t.body
                })).catch((function() {
                    o.Z.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_FAIL",
                        applicationId: e
                    })
                }))
            }

            function f(e) {
                return p.apply(this, arguments)
            }

            function p() {
                return (p = s((function(e) {
                    var t, n, i, a, s, l;
                    return c(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                t = e.withSku, n = void 0 !== t && t, i = e.withApplication, a = void 0 !== i && i, s = e.entitlementType;
                                o.Z.dispatch({
                                    type: "ENTITLEMENTS_FETCH_FOR_USER_START"
                                });
                                c.label = 1;
                            case 1:
                                c.trys.push([1, 3, , 4]);
                                return [4, r.ZP.get({
                                    url: u.ANM.ENTITLEMENTS_FOR_USER,
                                    query: {
                                        with_sku: n,
                                        with_application: a,
                                        entitlement_type: s
                                    }
                                })];
                            case 2:
                                l = c.sent();
                                o.Z.dispatch({
                                    type: "ENTITLEMENTS_FETCH_FOR_USER_SUCCESS",
                                    entitlements: l.body
                                });
                                return [3, 4];
                            case 3:
                                c.sent();
                                o.Z.dispatch({
                                    type: "ENTITLEMENTS_FETCH_FOR_USER_FAIL"
                                });
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function d() {
                return y.apply(this, arguments)
            }

            function y() {
                return (y = s((function() {
                    var e;
                    return c(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                o.Z.dispatch({
                                    type: "ENTITLEMENTS_GIFTABLE_FETCH"
                                });
                                t.label = 1;
                            case 1:
                                t.trys.push([1, 3, , 4]);
                                return [4, (0, i.Kb)({
                                    url: u.ANM.ENTITLEMENTS_GIFTABLE
                                })];
                            case 2:
                                e = t.sent();
                                o.Z.dispatch({
                                    type: "ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS",
                                    entitlements: e.body
                                });
                                return [3, 4];
                            case 3:
                                t.sent();
                                o.Z.dispatch({
                                    type: "ENTITLEMENTS_GIFTABLE_FETCH_FAIL"
                                });
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        735885: (e, t, n) => {
            "use strict";
            n.d(t, {
                jN: () => o,
                xf: () => i,
                Ou: () => u
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

            function u() {
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
                tt: () => u,
                Ow: () => a,
                fw: () => s
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

            function u() {
                r.Z.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function a(e, t) {
                r.Z.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function s() {
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
                Z: () => v
            });
            var r = n(281110),
                o = n(575945),
                i = n(744564),
                u = n(852626);
            var a = n(3930),
                s = n(625183),
                c = n(473903),
                l = n(908478),
                f = n(749565),
                p = n(105783),
                d = n(971402),
                y = n(2590),
                h = n(473708);

            function O(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function b(e, t, n) {
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
                        b(e, t, n[t])
                    }))
                }
                return e
            }

            function S(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return O(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return O(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function _(e) {
                (0, d.Zy)();
                p.Z.show(e)
            }

            function g(e, t) {
                var n = e.status,
                    r = e.body,
                    o = r && r.code;
                switch (n) {
                    case 429:
                        _({
                            title: h.Z.Messages.FRIEND_REQUEST_RATE_LIMITED_HEADER,
                            body: h.Z.Messages.FRIEND_REQUEST_RATE_LIMITED_BODY,
                            confirmText: h.Z.Messages.FRIEND_REQUEST_RATE_LIMITED_BUTTON
                        });
                        break;
                    case 403:
                        if (o === y.evJ.EMAIL_VERIFICATION_REQUIRED) {
                            _({
                                title: h.Z.Messages.FRIEND_REQUEST_REQUIRES_EMAIL_VALIDATION_HEADER,
                                body: h.Z.Messages.FRIEND_REQUEST_REQUIRES_EMAIL_VALIDATION_BODY,
                                confirmText: h.Z.Messages.FRIEND_REQUEST_REQUIRES_EMAIL_VALIDATION_BUTTON,
                                onConfirm: function() {
                                    u.j()
                                }
                            });
                            break
                        }
                    default:
                        if (o === y.evJ.USER_QUARANTINED) ! function() {
                            (0, d.Zy)();
                            (0, a.default)()
                        }();
                        else {
                            if ((0, s.b)(n, o)) break;
                            var i = null != t ? (0, l.N)(o || 0, t) : h.Z.Messages.POMELO_ADD_FRIEND_ERROR;
                            _({
                                title: h.Z.Messages.FRIEND_REQUEST_FAILED_HEADER,
                                body: i,
                                confirmText: h.Z.Messages.OKAY
                            })
                        }
                }
                throw e
            }
            var m = {
                sendRequest: function(e, t, n) {
                    var o = S(e.split("#"), 2),
                        i = o[0],
                        u = o[1];
                    return r.ZP.post({
                        url: y.ANM.USER_RELATIONSHIPS(),
                        body: E({
                            username: i,
                            discriminator: parseInt(u)
                        }, n),
                        context: t,
                        oldFormErrors: !0
                    }).catch((function(t) {
                        g(t, e)
                    }))
                },
                addRelationship: function(e, t) {
                    var n = e.userId,
                        o = e.context,
                        i = e.type,
                        u = e.friendToken,
                        a = e.fromFriendSuggestion,
                        s = e.captchaPayload,
                        l = c.default.getUser(n);
                    return r.ZP.put({
                        url: y.ANM.USER_RELATIONSHIP(n),
                        body: E({
                            type: i,
                            friend_token: u,
                            from_friend_suggestion: a
                        }, s),
                        context: o,
                        oldFormErrors: !0
                    }).then((function() {
                        null == t || t()
                    })).catch((function(e) {
                        g(e, f.ZP.getUserTag(l))
                    }))
                },
                acceptFriendRequest: function(e) {
                    return m.addRelationship(e, (function() {
                        o.uv.announce(h.Z.Messages.A11Y_ANNOUNCEMENT_FRIEND_ACCEPT_REQUEST)
                    }))
                },
                cancelFriendRequest: function(e, t) {
                    return m.removeRelationship(e, t, (function() {
                        o.uv.announce(h.Z.Messages.A11Y_ANNOUNCEMENT_FRIEND_CANCEL_REQUEST)
                    }))
                },
                removeFriend: function(e, t) {
                    m.removeRelationship(e, t, (function() {
                        o.uv.announce(h.Z.Messages.A11Y_ANNOUNCEMENT_FRIEND_REMOVED)
                    }))
                },
                unblockUser: function(e, t) {
                    m.removeRelationship(e, t, (function() {
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
            const v = m
        },
        810978: (e, t, n) => {
            "use strict";
            n.d(t, {
                GZ: () => y,
                Gn: () => O,
                Y2: () => b,
                mE: () => E
            });
            var r = n(281110),
                o = n(744564),
                i = n(973889),
                u = n(615796),
                a = n(264628),
                s = n(673679),
                c = n(2590),
                l = n(203600);

            function f(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        s = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(s) : Promise.resolve(s).then(r, o)
            }

            function p(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            f(i, r, o, u, a, "next", e)
                        }

                        function a(e) {
                            f(i, r, o, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            var d = function(e, t) {
                var n, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            u.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && u.label < o[1]) {
                                            u.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && u.label < o[2]) {
                                            u.label = o[2];
                                            u.ops.push(i);
                                            break
                                        }
                                        o[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                i = t.call(e, u)
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
                        }([i, a])
                    }
                }
            };

            function y(e, t, n, r, o) {
                return h.apply(this, arguments)
            }

            function h() {
                return (h = p((function(e, t, n, l, f) {
                    var p, y, h, O;
                    return d(this, (function(d) {
                        switch (d.label) {
                            case 0:
                                o.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH",
                                    skuId: e
                                });
                                d.label = 1;
                            case 1:
                                d.trys.push([1, 5, , 6]);
                                p = {
                                    url: c.ANM.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(e),
                                    oldFormErrors: !0
                                };
                                y = {};
                                null != t && (y.country_code = t);
                                null != n && (y.payment_source_id = n);
                                null != l && (y.include_unpublished = l);
                                null != f && (y.revenue_surface = f);
                                p.query = y;
                                return u.Z.ipCountryCodeLoaded ? [3, 3] : [4, (0, s.GE)()];
                            case 2:
                                d.sent();
                                d.label = 3;
                            case 3:
                                return [4, r.ZP.get(p)];
                            case 4:
                                h = d.sent();
                                o.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                                    skuId: e,
                                    subscriptionPlans: h.body
                                });
                                return [3, 6];
                            case 5:
                                O = d.sent();
                                o.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                                    skuId: e
                                });
                                (0, a.q2)(O);
                                throw new i.Z(O);
                            case 6:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function O(e, t) {
                return Promise.all(e.filter((function(e) {
                    return e !== l.Si.NONE
                })).map((function(e) {
                    return y(e, t)
                })))
            }

            function b(e, t, n) {
                return Promise.all(l.YQ.filter((function(e) {
                    return e !== l.Si.NONE
                })).map((function(r) {
                    return y(r, e, t, void 0, n)
                })))
            }

            function E() {
                o.Z.dispatch({
                    type: "SUBSCRIPTION_PLANS_RESET"
                })
            }
        },
        758635: (e, t, n) => {
            "use strict";
            n.d(t, {
                W: () => a
            });
            var r = n(281110),
                o = n(744564),
                i = n(239734),
                u = n(2590);

            function a() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                if (i.Z.needsRefresh()) {
                    o.Z.dispatch({
                        type: "LOAD_USER_AFFINITIES"
                    });
                    return r.ZP.get({
                        url: u.ANM.USER_AFFINITIES,
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
        396179: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => _
            });
            var r = n(281110),
                o = n(630631),
                i = n(744564),
                u = n(735885),
                a = n(2590);

            function s(e, t, n) {
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
                        s(e, t, n[t])
                    }))
                }
                return e
            }

            function l() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        openWithoutBackstack: !1
                    };
                i.Z.dispatch(c({
                    type: "USER_SETTINGS_MODAL_OPEN",
                    section: e,
                    subsection: t
                }, n));
                (0, u.jN)(a.S9g.USER_SETTINGS)
            }
            var f = n(223219),
                p = n(652591),
                d = n(775173),
                y = n(488110),
                h = n(239620),
                O = n(473708);

            function b(e, t, n) {
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
                        b(e, t, n[t])
                    }))
                }
                return e
            }

            function S(e, t) {
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
            const _ = {
                open: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                            openWithoutBackstack: !1
                        };
                    l(e, t, n)
                },
                init: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    i.Z.dispatch(E({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: e,
                        subsection: t
                    }, n))
                },
                close: function() {
                    var e = f.Z.onClose;
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLOSE"
                    });
                    null != e && e()
                },
                setSection: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    i.Z.dispatch(E({
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
                    var u = e.username,
                        s = e.email,
                        c = e.emailToken,
                        l = e.password,
                        f = e.avatar,
                        b = e.newPassword,
                        _ = e.discriminator,
                        g = t.close;
                    return (0, y.Z)((function(e) {
                        var t = S(E({
                                username: u,
                                email: s,
                                email_token: c,
                                password: l,
                                avatar: f,
                                new_password: b
                            }, e), {
                                discriminator: null != _ && "" !== _ ? _ : void 0
                            }),
                            n = o.Z.get(a.JkL),
                            i = (0, h.xJ)();
                        if (null != i && null != n) {
                            t.push_provider = i;
                            t.push_token = n
                        }
                        var p = o.Z.get(a.scU);
                        if (null != h.mv && null != p) {
                            t.push_voip_provider = h.mv;
                            t.push_voip_token = p
                        }
                        return r.ZP.patch({
                            url: a.ANM.ME,
                            oldFormErrors: !0,
                            body: t
                        })
                    }), {
                        checkEnabled: !1,
                        modalProps: {
                            title: O.Z.Messages.TWO_FA_CHANGE_ACCOUNT
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
                        p.default.track(a.rMx.USER_AVATAR_UPDATED, {
                            animated: (0, d.xR)(t.avatar)
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
                        null != b && i.Z.dispatch({
                            type: "USER_PASSWORD_UPDATE",
                            user: t,
                            newPassword: b
                        });
                        null != l && null != b && i.Z.dispatch({
                            type: "PASSWORD_UPDATED",
                            userId: t.id
                        });
                        g ? n.close() : n.submitComplete();
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
                Z: () => O
            });
            var r = n(785893),
                o = (n(667294), n(786483)),
                i = n(820610),
                u = n(264628),
                a = n(348592),
                s = n(116094),
                c = n(249052),
                l = n(530562),
                f = n(2590),
                p = n(203600),
                d = n(473708),
                y = n(501235),
                h = n.n(y);
            const O = function(e) {
                var t = e.subscriptionPlan,
                    n = e.isGift,
                    y = e.isEmbeddedIAP,
                    O = e.renewalInvoice,
                    b = e.paymentSourceType,
                    E = e.hide,
                    S = e.purchaseType,
                    _ = e.productLine,
                    g = e.basePrice,
                    m = e.currentSubscription;
                if (E) return null;
                var v, I, P, T = null == e.planGroup ? [] : e.planGroup;
                if (null != O) {
                    var A = s.ZP.getIntervalForInvoice(O);
                    v = A.intervalType;
                    I = A.intervalCount;
                    P = (0, c.og)((0, c.T4)(O.total, O.currency), v, I)
                } else if (null != t) {
                    v = t.interval;
                    I = t.intervalCount
                }
                var R = (0, i.K)({
                        purchaseType: S || f.GZQ.SUBSCRIPTION,
                        plan: t,
                        premiumSubscription: null == m ? null : m,
                        isGift: !!n,
                        planGroup: T,
                        isPrepaidPaymentSource: !1
                    }),
                    N = "",
                    C = "";
                if (y)
                    if (null != P && null != (null == O ? void 0 : O.subscriptionPeriodEnd)) N = d.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_RATE_AND_RENEWAL.format({
                        rate: P,
                        renewalDate: O.subscriptionPeriodEnd
                    });
                    else switch (v) {
                        case p.rV.MONTH:
                            N = 1 === I ? d.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_MONTHLY : d.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_MULTI_MONTH.format({
                                intervalCount: I
                            });
                            break;
                        case p.rV.YEAR:
                            N = d.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_YEARLY;
                            break;
                        case void 0:
                            C = d.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
                                primaryText: R,
                                paidURL: f.EYA.PAID_TERMS
                            });
                            N = d.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE.format({});
                            break;
                        default:
                            throw new Error("Unexpected interval: ".concat(v))
                    } else if (S === f.GZQ.ONE_TIME) {
                        C = d.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
                            primaryText: R,
                            paidURL: f.EYA.PAID_TERMS
                        });
                        if (_ === f.POd.COLLECTIBLES) N = d.Z.Messages.COLLECTIBLES_PURCHASE_DISCLAIMER_PAYMENT;
                        else N = d.Z.Messages.ONE_TIME_PURCHASE_FINE_PRINT
                    } else {
                        var w = (0, o.s)("legal_fine_print", {
                            autoTrackExposure: !1
                        });
                        if (null != t && !n && w.enabled && 1 === w.bucket) {
                            var L, j = (0, i.K)({
                                purchaseType: f.GZQ.SUBSCRIPTION,
                                plan: t,
                                premiumSubscription: null == m ? null : m,
                                isGift: !1,
                                planGroup: T,
                                isPrepaidPaymentSource: !1
                            });
                            null != g && null != v && null != I && (L = (0, c.og)((0, c.T4)(g.amount, g.currency), v, I));
                            if (null == L) {
                                var M = new Error("Missing base rate for legal fine print");
                                (0, u.q2)(M, {
                                    tags: {
                                        planId: t.id
                                    }
                                })
                            }
                            N = null != m && (0, l.GY)(m, t.id, T) ? d.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_PLAN_CHANGE_V2.format({
                                primaryText: j,
                                rate: L,
                                paidURL: f.EYA.PAID_TERMS,
                                contactLink: f.EYA.CONTACT,
                                helpdeskArticle: a.Z.getArticleURL(f.BhN.BILLING)
                            }) : d.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_V2.format({
                                primaryText: j,
                                rate: L,
                                paidURL: f.EYA.PAID_TERMS,
                                contactLink: f.EYA.CONTACT,
                                helpdeskArticle: a.Z.getArticleURL(f.BhN.BILLING)
                            })
                        } else {
                            n && (C = d.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
                                primaryText: R,
                                paidURL: f.EYA.PAID_TERMS
                            }));
                            switch (v) {
                                case p.rV.MONTH:
                                    N = n ? d.Z.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY : d.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY;
                                    N = n ? d.Z.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY : 1 === I ? d.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY : d.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MULTI_MONTH.format({
                                        intervalCount: I
                                    });
                                    break;
                                case p.rV.YEAR:
                                    N = n ? d.Z.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_YEARLY : d.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_YEARLY;
                                    break;
                                case void 0:
                                    N = "";
                                    break;
                                default:
                                    throw new Error("Unexpected interval: ".concat(v))
                            }
                        }
                    } return (0, r.jsxs)(r.Fragment, {
                    children: ["" !== C && (0, r.jsxs)("div", {
                        children: [(0, r.jsx)("div", {
                            children: C
                        }), (0,
                            r.jsx)("div", {
                            className: h().divider
                        })]
                    }), "" !== N && (0, r.jsx)("div", {
                        children: N
                    }), b === f.HeQ.PAYSAFE_CARD && (0, r.jsx)("div", {
                        className: h().paymentSourceNoticeCopy,
                        children: d.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_PAYSAFECARD
                    }), b === f.HeQ.SOFORT && (0, r.jsxs)("div", {
                        className: h().paymentSourceNoticeCopy,
                        children: [d.Z.Messages.SOFORT_MANDATE_AGREEMENT, " "]
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
                u = n(468811),
                a = n.n(u),
                s = n(349480),
                c = n.n(s);

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var f = a().v4();
            const p = function(e) {
                var t, n = e.open,
                    o = e.className,
                    u = e.withHighlight,
                    a = void 0 !== u && u;
                return (0, r.jsxs)("svg", {
                    width: "18",
                    height: "18",
                    className: i()(c().button, o, (t = {}, l(t, c().open, n), l(t, c().withHighlight, a), t)),
                    children: [a && (0, r.jsx)("defs", {
                        children: (0, r.jsxs)("linearGradient", {
                            id: f,
                            x1: "0",
                            y1: "0",
                            x2: "0",
                            y2: "18",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0,
                                r.jsx)("stop", {
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
                            stroke: a ? "url(#".concat(f, ")") : "currentColor",
                            d: "M4.5 4.5l9 9",
                            strokeLinecap: "round"
                        }), (0, r.jsx)("path", {
                            stroke: a ? "url(#".concat(f, ")") : "currentColor",
                            d: "M13.5 4.5l-9 9",
                            strokeLinecap: "round"
                        })]
                    })]
                })
            }
        },
        446483: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                u = n(545354),
                a = n.n(u);

            function s(e) {
                var t = e.application,
                    n = e.splashSize,
                    o = e.className,
                    u = e.overrideSplash,
                    s = null != u ? u : t.getSplashURL(n),
                    c = null != s ? "url(".concat(s, ")") : void 0;
                return (0, r.jsx)("div", {
                    className: i()(a().splashBackground, o),
                    style: {
                        backgroundImage: c
                    }
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
                u = n.n(i),
                a = n(202351),
                s = n(513328),
                c = n(304548),
                l = n(735885),
                f = n(560923),
                p = n(758635),
                d = n(396179),
                y = n(657539),
                h = n(467345),
                O = n(543976),
                b = n(840922),
                E = n(793461),
                S = n(239734),
                _ = n(473903),
                g = n(459940),
                m = n(107364),
                v = n(750203),
                I = n(691797),
                P = n(644144),
                T = n(116094),
                A = n(749565),
                R = n(2590),
                N = n(203600),
                C = n(473708),
                w = n(5759),
                L = n.n(w);

            function j(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function M(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Z(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function U(e) {
                U = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return U(e)
            }

            function D(e, t) {
                return !t || "object" !== F(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function x(e, t) {
                x = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return x(e, t)
            }

            function B(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || G(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function k(e) {
                return function(e) {
                    if (Array.isArray(e)) return j(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || G(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var F = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function G(e, t) {
                if (e) {
                    if ("string" == typeof e) return j(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? j(e, t) : void 0
                }
            }

            function H(e) {
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
                    var n, r = U(e);
                    if (t) {
                        var o = U(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return D(this, n)
                }
            }
            var Y = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && x(e, t)
                    }(n, e);
                    var t = H(n);

                    function n() {
                        M(this, n);
                        var e;
                        (e = t.apply(this, arguments)).state = {
                            copyMode: g.Z.Modes.DEFAULT
                        };
                        e._copyModeTimeout = new s.V7;
                        e.handleGiftCodeCopy = function(t, n) {
                            var r = e.props.sku;
                            null != r && (0, P.dM)(new O.Z({
                                code: n,
                                maxUses: 1
                            }), r);
                            try {
                                (0, I.JG)(t);
                                e.setState({
                                    copyMode: g.Z.Modes.SUCCESS
                                })
                            } catch (t) {
                                e.setState({
                                    copyMode: g.Z.Modes.ERROR
                                })
                            }
                            e._copyModeTimeout.start(1500, (function() {
                                e.setState({
                                    copyMode: g.Z.Modes.DEFAULT
                                })
                            }))
                        };
                        e.handleInventoryClick = function() {
                            d.Z.open(R.oAB.INVENTORY);
                            e.props.onClose()
                        };
                        e.renderGiftCodeSection = function() {
                            var t = e.props,
                                n = t.obscureGiftCode,
                                o = t.giftCode;
                            if (null == o) return null;
                            var i, u = e.state.copyMode;
                            switch (u) {
                                case g.Z.Modes.SUCCESS:
                                    i = C.Z.Messages.BILLING_GIFT_COPIED;
                                    break;
                                case g.Z.Modes.ERROR:
                                    i = C.Z.Messages.FAILED;
                                    break;
                                default:
                                    i = C.Z.Messages.COPY
                            }
                            return (0, r.jsx)(m.Z, {
                                direction: m.Z.Direction.VERTICAL,
                                children: (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)(c.FormTitle, {
                                        children: C.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_PRIVATE_LINK
                                    }), null != o && (0, r.jsx)(g.Z, {
                                        hideMessage: n ? C.Z.Messages.GIFT_INVENTORY_HIDDEN : null,
                                        value: (0, P.Nz)(o),
                                        mode: u,
                                        text: i,
                                        onCopy: function(t) {
                                            return e.handleGiftCodeCopy(t, o)
                                        },
                                        supportsCopy: I.wS,
                                        className: L().copyInput,
                                        buttonColor: g.Z.ButtonColors.LINK,
                                        buttonLook: g.Z.ButtonLooks.LINK
                                    }), (0, r.jsx)("div", {
                                        className: L().subtext,
                                        children: C.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_SUBTEXT_NO_FORMAT
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
                                    className: L().blurb,
                                    children: e.headerBlurb
                                }), null == i && (0, r.jsx)(V, {
                                    giftCode: n,
                                    onClose: o
                                }), (0, r.jsx)("div", {
                                    className: L().divider
                                }), e.renderGiftCodeSection()]
                            })
                        };
                        e.renderConfirmSentGift = function() {
                            var t = e.props.giftRecipient;
                            return (0,
                                r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(y.Z, {
                                    user: t,
                                    className: L().giftRecipient,
                                    size: c.AvatarSizes.SIZE_80
                                }), (0, r.jsx)(c.Heading, {
                                    className: L().giftRecipientName,
                                    variant: "heading-md/semibold",
                                    children: A.ZP.getName(t)
                                }), (0, r.jsxs)("div", {
                                    className: L().giftRecipientTag,
                                    children: [" ", A.ZP.getUserTag(t)]
                                }), (0, r.jsx)("div", {
                                    className: L().giftSentMessage,
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
                            u = n.hasSentMessage,
                            a = n.giftRecipient,
                            s = n.giftMessageError,
                            l = n.isSendingMessage;
                        e = (0, P.a8)(a) || u && null == s ? C.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_AND_MESSAGE_CONFIRMATION_TITLE : null != s ? C.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_FAILED : C.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_CONFIRMATION_TITLE;
                        t = l ? (0, r.jsx)(c.Spinner, {
                            type: c.SpinnerTypes.PULSING_ELLIPSIS
                        }) : (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(c.Heading, {
                                variant: "heading-lg/semibold",
                                className: null != i ? L().headerCustomGifting : L().header,
                                children: e
                            }), u && null != a && null == s || (0, P.a8)(a) ? this.renderConfirmSentGift() : this.renderRequestSendGift()]
                        });
                        return (0, r.jsxs)(m.Z, {
                            direction: m.Z.Direction.VERTICAL,
                            align: m.Z.Align.CENTER,
                            children: [null != o ? (0, r.jsx)(v.Z, {
                                game: o,
                                className: L().icon,
                                size: v.Z.Sizes.LARGE,
                                skuId: this.iconSKUId
                            }) : null, t]
                        })
                    };
                    ! function(e, t, n) {
                        t && Z(e.prototype, t);
                        n && Z(e, n)
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
                                n = e.hasSentMessage,
                                r = e.giftMessageError,
                                o = e.giftRecipient;
                            if (null != r) return C.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_FAILURE_GENERIC_BLURB;
                            if (null == t) return C.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_BLURB;
                            var i = n || null != o;
                            return (t.interval === N.rV.MONTH ? i ? C.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : C.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_MONTHLY : i ? C.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : C.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_YEARLY).format({
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
                    var i = B(o.useState(), 2),
                        s = i[0],
                        d = i[1],
                        O = B(o.useState(!1), 2),
                        E = O[0],
                        g = O[1],
                        m = B(o.useState(!1), 2),
                        v = m[0],
                        I = m[1],
                        P = (0, a.cj)([S.Z], (function() {
                            return {
                                userAffinities: S.Z.getUserAffinitiesUserIds(),
                                isLoading: S.Z.getFetching()
                            }
                        })),
                        T = P.userAffinities,
                        R = P.isLoading,
                        N = Array.from(T.values()),
                        w = (0, a.e7)([b.Z], (function() {
                            return b.Z.getFriendIDs()
                        })),
                        j = u().difference(w, N),
                        M = k(N).concat(k(j)),
                        Z = (0, a.e7)([_.default], (function() {
                            return _.default.filter((function(e) {
                                return M.includes(e.id) && !e.bot
                            }))
                        }), [M]);
                    if (null == Z || 0 === Z.length) return null;
                    var U = u().sortBy(Z, (function(e) {
                        return M.indexOf(e.id)
                    }));
                    return (0, r.jsxs)("div", {
                        className: L().giftRecipientSection,
                        children: [(0, r.jsx)(c.FormTitle, {
                            children: C.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SECTION_LABEL
                        }), (0, r.jsxs)("div", {
                            className: L().giftRecipient,
                            children: [(0, r.jsx)(c.SearchableSelect, {
                                placeholder: C.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SELECT_PLACEHOLDER,
                                wrapperClassName: L().giftRecipientInputWrapper,
                                className: E ? L().giftRecipientInputError : void 0,
                                renderOptionPrefix: function(e) {
                                    return null == (null == e ? void 0 : e.value) ? null : (0, r.jsx)(y.Z, {
                                        user: e.value,
                                        size: c.AvatarSizes.SIZE_20
                                    })
                                },
                                renderLeading: function() {
                                    return R ? (0, r.jsx)(c.Spinner, {
                                        type: c.SpinnerTypes.PULSING_ELLIPSIS
                                    }) : null
                                },
                                value: s,
                                onChange: function(e) {
                                    d(e);
                                    g(!1)
                                },
                                options: U.map((function(e) {
                                    return {
                                        value: e,
                                        label: "".concat(A.ZP.getUserTag(e))
                                    }
                                }))
                            }), (0, r.jsx)(c.Button, {
                                disabled: null == s,
                                submitting: v,
                                className: L().sendToRecipientButton,
                                onClick: function() {
                                    I(!0);
                                    (0, h.YD)(s, t).then((function() {
                                        n();
                                        (0, l.Ou)()
                                    })).catch((function() {
                                        g(!0);
                                        I(!1)
                                    }))
                                },
                                children: C.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_SEND_NOW_BUTTON
                            })]
                        }), (0, r.jsx)("div", {
                            className: E ? L().subtextError : L().subtext,
                            children: E ? C.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_ERROR_SENDING_LINK : C.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SUBTEXT
                        })]
                    })
                };
            const W = a.ZP.connectStores([E.Z], (function() {
                return {
                    obscureGiftCode: E.Z.enabled
                }
            }))(Y)
        },
        910740: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => D
            });
            var r = n(785893),
                o = n(667294),
                i = n(202351),
                u = n(304548),
                a = n(744564),
                s = n(114126),
                c = n(161071),
                l = n(695166),
                f = n(951442),
                p = n(396179),
                d = n(536713),
                y = n(717902),
                h = n(784426),
                O = n(761814),
                b = n(430091),
                E = n(64318),
                S = n(840974),
                _ = n(107364),
                g = n(750203),
                m = n(709189),
                v = n(557931),
                I = n(534681),
                P = n(2590),
                T = n(473708),
                A = n(5759),
                R = n.n(A);

            function N(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function C(e) {
                C = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return C(e)
            }

            function w(e, t) {
                return !t || "object" !== j(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function L(e, t) {
                L = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return L(e, t)
            }
            var j = function(e) {
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
                    var n, r = C(e);
                    if (t) {
                        var o = C(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return w(this, n)
                }
            }
            var Z = function() {
                    return [T.Z.Messages.APPLICATION_STORE_PURCHASE_CONFIRMATION_TITLE_1, T.Z.Messages.APPLICATION_STORE_PURCHASE_CONFIRMATION_TITLE_2, T.Z.Messages.APPLICATION_STORE_PURCHASE_CONFIRMATION_TITLE_3, T.Z.Messages.APPLICATION_STORE_PURCHASE_CONFIRMATION_TITLE_4]
                },
                U = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && L(e, t)
                    }(n, e);
                    var t = M(n);

                    function n() {
                        N(this, n);
                        var e;
                        (e = t.apply(this, arguments)).state = {
                            confirmHeaderIndex: Math.floor(Math.random() * Z().length),
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
                            p.Z.open(P.oAB.INVENTORY);
                            e.props.onClose()
                        };
                        e.handleGoToLibrary = function() {
                            (0,
                                h.uL)(P.Z5c.APPLICATION_LIBRARY);
                            e.props.onClose()
                        };
                        e.handleInstall = function() {
                            var t = e.props,
                                n = t.application,
                                r = t.branchId,
                                o = t.buildId,
                                i = t.hasPreviouslyAcceptedStoreTerms,
                                u = t.manifestIds,
                                a = t.onClose,
                                s = e.state,
                                c = s.installPath,
                                p = s.hasInstallPathError;
                            i || (0, l.Bv)();
                            null != n.eulaId && (0, l.DC)(n.eulaId);
                            if (!p && null != o && null != u) {
                                f.LO({
                                    application: n,
                                    branchId: r,
                                    buildId: o,
                                    manifestIds: u,
                                    installationPath: c,
                                    analyticsLocation: P.Sbl.APPLICATION_STORE_PAYMENT_MODAL
                                });
                                a();
                                (0, h.uL)(P.Z5c.APPLICATION_LIBRARY)
                            }
                        };
                        e.handlePurchaseTermsChange = function(t) {
                            e.setState({
                                hasAcceptedNeccessaryTerms: t
                            })
                        };
                        return e
                    }
                    var i = n.prototype;
                    i.fetchInstallSize = function() {
                        var e = this.props,
                            t = e.application,
                            n = e.branchId,
                            r = e.buildId,
                            o = e.manifestIds,
                            i = e.buildSizeKB;
                        null != r && null != o && null == i && a.Z.wait((function() {
                            (0, c.q)(t.id, n, r, o)
                        }))
                    };
                    i.componentDidMount = function() {
                        var e = this.props,
                            t = e.application,
                            n = e.branchId,
                            r = e.buildId,
                            o = e.manifestIds,
                            i = e.sku;
                        !e.isIAP && (0, v._f)(i) && (null == r || null == o ? a.Z.wait((function() {
                            return (0, s.l)(t.id, n)
                        })) : this.fetchInstallSize())
                    };
                    i.componentDidUpdate = function(e) {
                        this.props.buildId === e.buildId && this.props.manifestIds === e.manifestIds || this.fetchInstallSize()
                    };
                    i.getHeaderBlurb = function() {
                        var e = this.props,
                            t = e.sku,
                            n = e.application,
                            r = e.isIAP;
                        if (t.isPreorder() && null != t.preorderReleaseAt) return T.Z.Messages.APPLICATION_STORE_PREORDER_PURCHASE_CONFIRMATION_BLURB.format({
                            applicationName: n.name,
                            date: t.preorderReleaseAt.format("MMMM DD")
                        });
                        if (r || [P.epS.DURABLE, P.epS.CONSUMABLE].includes(t.type)) return T.Z.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
                            applicationName: n.name,
                            itemName: t.name
                        });
                        if (t.type === P.epS.BUNDLE) return T.Z.Messages.APPLICATION_STORE_BUNDLE_PURCHASE_CONFIRMATION_BLURB.format({
                            name: t.name
                        });
                        var o = t.supportedOperatingSystems[0];
                        return T.Z.Messages.APPLICATION_STORE_PURCHASE_CONFIRMATION_UNSUPPORTED_OS.format({
                            name: n.name,
                            operatingSystem: (0, I.XK)(o)
                        })
                    };
                    i.renderInstallationHeader = function() {
                        var e = this.props.application;
                        return (0, r.jsx)("div", {
                            className: R().blurb,
                            children: T.Z.Messages.APPLICATION_STORE_PURCHASE_CONFIRMATION_BLURB.format({
                                name: e.name
                            })
                        })
                    };
                    i.renderInstallationBody = function() {
                        var e = this.props,
                            t = e.isFetchingBuild,
                            n = e.buildId,
                            i = e.buildSizeKB,
                            a = e.application,
                            s = this.state,
                            c = s.installPath,
                            l = s.hasInstallPathError,
                            f = s.hasAcceptedNeccessaryTerms;
                        return (0, r.jsxs)(o.Fragment, {
                            children: [(0, r.jsx)(y.Z, {
                                className: R().installSelector,
                                value: c,
                                requiredDiskKB: i,
                                onChange: this.handleInstallPathChange
                            }), (0, r.jsx)(d.Z, {
                                eulaId: a.eulaId,
                                applicationName: a.name,
                                onChange: this.handlePurchaseTermsChange,
                                className: R().storeTerms
                            }), (0, r.jsx)(m.C, {
                                className: R().confirmButton,
                                disabled: l || null == n || !f,
                                onClick: this.handleInstall,
                                submitting: t,
                                color: u.Button.Colors.GREEN,
                                children: T.Z.Messages.APPLICATION_STORE_PURCHASE_INSTALL_GAME
                            })]
                        })
                    };
                    i.renderGenericHeader = function() {
                        return (0, r.jsx)("div", {
                            className: R().blurb,
                            children: this.getHeaderBlurb()
                        })
                    };
                    i.renderBlurbBody = function() {
                        var e, t = this.props,
                            n = t.isIAP,
                            i = t.sku,
                            a = t.onClose;
                        if (i.isPreorder()) {
                            e = T.Z.Messages.APPLICATION_PREORDER_PURCHASE_CONFIRMATION_BUTTON;
                            a = this.handleGoToLibrary
                        } else e = n ? T.Z.Messages.APPLICATION_IAP_PURCHASE_RETURN_TO_GAME : T.Z.Messages.OKAY;
                        return (0, r.jsx)(o.Fragment, {
                            children: (0, r.jsx)(u.Button, {
                                className: R().confirmButton,
                                onClick: a,
                                children: e
                            })
                        })
                    };
                    i.renderBlurb = function() {
                        var e = this.props,
                            t = e.sku;
                        return e.isIAP || !(0, v._f)(t) || t.isPreorder() ? this.renderGenericHeader() : this.renderInstallationHeader()
                    };
                    i.renderBody = function() {
                        var e = this.props,
                            t = e.sku;
                        return e.isIAP || !(0, v._f)(t) || t.isPreorder() ? this.renderBlurbBody() : this.renderInstallationBody()
                    };
                    i.render = function() {
                        var e = this.props.application,
                            t = this.state.confirmHeaderIndex;
                        return (0, r.jsxs)(_.Z, {
                            direction: _.Z.Direction.VERTICAL,
                            align: _.Z.Align.CENTER,
                            children: [(0, r.jsx)(g.Z, {
                                game: e,
                                className: R().icon,
                                size: g.Z.Sizes.LARGE
                            }), (0, r.jsx)("div", {
                                className: R().header,
                                children: Z()[t]
                            }), this.renderBlurb(), (0, r.jsx)("div", {
                                className: R().divider
                            }), this.renderBody()]
                        })
                    };
                    return n
                }(o.Component);
            const D = i.ZP.connectStores([S.Z, b.Z, O.Z, E.Z], (function(e) {
                var t, n = e.application,
                    r = O.Z.getActiveLibraryApplication(n.id);
                t = null != r ? r.id : n.id;
                var o = b.Z.getTargetBuildId(n.id, t);
                return {
                    defaultInstallationPath: S.Z.defaultInstallationPath,
                    branchId: t,
                    isFetchingBuild: b.Z.isFetching(n.id, t),
                    buildId: o,
                    manifestIds: b.Z.getTargetManifests(n.id, t),
                    buildSizeKB: null != o ? b.Z.getBuildSize(o) : null,
                    hasPreviouslyAcceptedStoreTerms: E.Z.hasAcceptedStoreTerms
                }
            }))(U)
        },
        320641: (e, t, n) => {
            "use strict";
            n.d(t, {
                Y: () => i
            });
            var r = n(2590),
                o = n(473708);

            function i(e, t) {
                if (e) return o.Z.Messages.APPLICATION_STORE_PURCHASE_IAP;
                switch (t) {
                    case r.epS.DURABLE_PRIMARY:
                        return o.Z.Messages.APPLICATION_STORE_PURCHASE_APPLICATION;
                    case r.epS.DURABLE:
                        return o.Z.Messages.APPLICATION_STORE_PURCHASE_DLC;
                    case r.epS.CONSUMABLE:
                        return o.Z.Messages.APPLICATION_STORE_PURCHASE_CONSUMABLE;
                    case r.epS.BUNDLE:
                        return o.Z.Messages.APPLICATION_STORE_PURCHASE_BUNDLE
                }
            }
        },
        359891: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => Lt
            });
            var r = n(785893),
                o = n(667294),
                i = n(468811),
                u = n.n(i),
                a = n(202351),
                s = n(304548),
                c = n(744564),
                l = n(695166),
                f = n(315804),
                p = n(152042),
                d = n(673679),
                y = n(933599),
                h = n(856281),
                O = n(458823),
                b = n(711531),
                E = n(939065),
                S = n(886664),
                _ = n(872589),
                g = n(711013),
                m = n(793461),
                v = n(615796),
                I = n(20405),
                P = n(107364),
                T = n(120415),
                A = n(421281),
                R = n(799105),
                N = n(842257),
                C = n(773262),
                w = n(520983),
                L = n(387652),
                j = n(886433),
                M = n(608452),
                Z = n(473708),
                U = function(e) {
                    var t = e.submitting,
                        n = e.braintreeNonce,
                        o = e.braintreeEmail,
                        i = e.onPaypalContinue,
                        u = e.onReopenPaypal,
                        a = e.renderBackButton,
                        c = 0 !== o.length && null != n;
                    return (0, r.jsxs)(s.ModalFooter, {
                        justify: P.Z.Justify.BETWEEN,
                        direction: P.Z.Direction.HORIZONTAL,
                        children: [a(), (0, r.jsx)(s.Button, {
                            submitting: t,
                            color: c ? s.Button.Colors.BRAND : s.Button.Colors.PRIMARY,
                            onClick: c ? i : u,
                            children: c ? Z.Z.Messages.NEXT : Z.Z.Messages.PAYMENT_SOURCE_CONNECT_TO_PAYPAL
                        })]
                    })
                },
                D = n(19120),
                x = n(700812),
                B = n(536713),
                k = n(709189),
                F = n(822511),
                G = n(856236),
                H = n(249052),
                Y = n(992911),
                V = n.n(Y);

            function W(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function z(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        W(e, t, n[t])
                    }))
                }
                return e
            }

            function Q(e, t) {
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
            var K = function(e) {
                    var t = e.legalNotice,
                        n = e.paymentSources,
                        i = e.price,
                        u = e.hidePersonalInformation,
                        a = e.paymentSourceId,
                        c = e.isGiftable,
                        l = e.isGift,
                        f = e.needsToBeGift,
                        p = e.onPaymentSourceChange,
                        d = e.onPaymentSourceAdd,
                        y = e.onPurchaseTermsChange,
                        h = e.onToggleIsGift,
                        O = [],
                        b = null != a ? n[a] : null;
                    null != b && b.invalid && O.push((0, r.jsx)(D.Z, {
                        icon: G.Z,
                        color: D.Z.Colors.ERROR,
                        iconSize: D.Z.Sizes.NONE,
                        iconClassName: V().invalidIcon,
                        children: Z.Z.Messages.BILLING_PAYMENT_SOURCE_INVALID
                    }, "source_invalid"));
                    null != i && (i.taxInclusive ? O.push((0, r.jsx)(D.Z, {
                        icon: F.Z,
                        color: D.Z.Colors.PRIMARY,
                        iconSize: D.Z.Sizes.LARGE,
                        children: Z.Z.Messages.BILLING_SALES_TAX_INCLUDED
                    }, "tax_included")) : i.tax > 0 && O.push((0, r.jsx)(D.Z, {
                        icon: F.Z,
                        color: D.Z.Colors.PRIMARY,
                        iconSize: D.Z.Sizes.LARGE,
                        children: Z.Z.Messages.BILLING_SALES_TAX_ADDED.format({
                            tax: (0, H.T4)(i.tax, i.currency)
                        })
                    }, "tax_added")));
                    return (0, r.jsxs)(o.Fragment, {
                        children: [(0, r.jsx)(s.FormTitle, {
                            className: V().formTitle,
                            children: Z.Z.Messages.BILLING_PAY_FOR_IT_WITH
                        }), (0, r.jsx)(x.Z, {
                            paymentSources: Object.values(n),
                            selectedPaymentSourceId: a,
                            hidePersonalInformation: u,
                            onChange: p,
                            onPaymentSourceAdd: d
                        }), O, c && (0, r.jsx)(s.Checkbox, {
                            disabled: f,
                            className: V().giftToggle,
                            type: s.Checkbox.Types.INVERTED,
                            value: l,
                            onChange: h,
                            children: (0, r.jsx)("div", {
                                className: V().checkboxLabel,
                                children: Z.Z.Messages.BILLING_IS_GIFT_PURCHASE
                            })
                        }), (0, r.jsx)(B.Z, {
                            onChange: y,
                            forceShow: !0,
                            className: V().purchaseTerms,
                            finePrint: t
                        })]
                    })
                },
                q = function(e) {
                    var t = e.canSubmit,
                        n = e.submitButtonText,
                        o = e.useShinySubmitButton,
                        i = e.isPurchasing,
                        u = e.hasAcceptedTerms,
                        a = e.paymentSource,
                        c = e.onPurchase,
                        l = e.tooltipText,
                        f = e.needsToBeGift,
                        p = e.isGift,
                        d = null != a && !a.invalid,
                        y = u && !(f && !p) && d && t,
                        h = {
                            submitting: i,
                            color: s.Button.Colors.GREEN,
                            disabled: !y,
                            onClick: c
                        };
                    return (0, r.jsx)(s.ModalFooter, {
                        children: (0, r.jsxs)("div", {
                            className: V().buyButtonTooltipWrapper,
                            children: [h.disabled && null != l ? (0, r.jsx)(s.Tooltip, {
                                text: l,
                                children: function(e) {
                                    return (0, r.jsx)("div", z({
                                        "aria-hidden": !0,
                                        className: V().buyButtonTooltipTarget
                                    }, e))
                                }
                            }) : null, o ? (0,
                                r.jsx)(k.C, Q(z({}, h), {
                                children: n
                            })) : (0, r.jsx)(s.Button, Q(z({
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
                        u = e.onReopenVenmo,
                        a = e.renderBackButton,
                        c = 0 !== o.length && null != n;
                    return (0, r.jsxs)(s.ModalFooter, {
                        justify: P.Z.Justify.BETWEEN,
                        direction: P.Z.Direction.HORIZONTAL,
                        children: [a(), (0, r.jsx)(s.Button, {
                            submitting: t,
                            color: c ? s.Button.Colors.BRAND : s.Button.Colors.PRIMARY,
                            onClick: c ? i : u,
                            children: c ? Z.Z.Messages.NEXT : Z.Z.Messages.PAYMENT_SOURCE_CONNECT_TO_VENMO
                        })]
                    })
                },
                X = n(2590),
                $ = n(910368),
                ee = n.n($);

            function te(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function ne(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        s = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(s) : Promise.resolve(s).then(r, o)
            }

            function re(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            ne(i, r, o, u, a, "next", e)
                        }

                        function a(e) {
                            ne(i, r, o, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function oe(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function ie(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function ue(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function ae(e) {
                ae = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return ae(e)
            }

            function se(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        ue(e, t, n[t])
                    }))
                }
                return e
            }

            function ce(e, t) {
                return !t || "object" !== fe(t) && "function" != typeof t ? te(e) : t
            }

            function le(e, t) {
                le = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return le(e, t)
            }
            var fe = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function pe(e) {
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
                    var n, r = ae(e);
                    if (t) {
                        var o = ae(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return ce(this, n)
                }
            }
            var de = function(e, t) {
                    var n, r, o, i, u = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function a(i) {
                        return function(a) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; u;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                                            0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    (r = 0, o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            u.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            u.label++;
                                            r = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = u.ops.pop();
                                            u.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                u = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                u.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && u.label < o[1]) {
                                                u.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && u.label < o[2]) {
                                                u.label = o[2];
                                                u.ops.push(i);
                                                break
                                            }
                                            o[2] && u.ops.pop();
                                            u.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, u)
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
                            }([i, a])
                        }
                    }
                },
                ye = [E.Rg.PAYMENT_TYPE, E.Rg.CREDIT_CARD_INFORMATION, E.Rg.REVIEW],
                he = [E.Rg.PAYMENT_TYPE, E.Rg.CREDIT_CARD_INFORMATION, E.Rg.REVIEW],
                Oe = [E.Rg.PAYMENT_TYPE, E.Rg.CREDIT_CARD_INFORMATION, E.Rg.ADDRESS, E.Rg.REVIEW],
                be = [E.Rg.PAYMENT_TYPE, E.Rg.PAYPAL, E.Rg.PAYPAL_ADDRESS, E.Rg.REVIEW],
                Ee = [E.Rg.PAYMENT_TYPE, E.Rg.PAYMENT_REQUEST_INFO, E.Rg.REVIEW],
                Se = [E.Rg.PAYMENT_TYPE, E.Rg.ADDRESS, E.Rg.REVIEW],
                _e = [E.Rg.PAYMENT_TYPE, E.Rg.ADDRESS, E.Rg.REVIEW],
                ge = [E.Rg.PAYMENT_TYPE, E.Rg.VENMO, E.Rg.VENMO_ADDRESS, E.Rg.REVIEW],
                me = (0, A.Mg)(ee().innerPadding),
                ve = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && le(e, t)
                    }(n, e);
                    var t = pe(n);

                    function n() {
                        oe(this, n);
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
                            _.i0()
                        };
                        e.handleReopenVenmo = function() {
                            _.og()
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
                        var i = te(e);
                        e.handleCreditCardAdd = re((function() {
                            var e, t, n, r, o;
                            return de(this, (function(u) {
                                switch (u.label) {
                                    case 0:
                                        e = i.props.billingAddressInfo;
                                        t = i.state, n = t.stripe, r = t.token;
                                        u.label = 1;
                                    case 1:
                                        u.trys.push([1, 3, , 4]);
                                        return [4, d.f0(n, r, e)];
                                    case 2:
                                        o = u.sent();
                                        i.props.onPaymentSourceAdd(o.id);
                                        return [3, 4];
                                    case 3:
                                        u.sent();
                                        return [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }));
                        var u, a = te(e);
                        e.handleStripePaymentRequestAdd = (u = re((function(e) {
                            var t;
                            return de(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        y.Xt(e);
                                        if (null == e) {
                                            a.props.onBack();
                                            return [2]
                                        }
                                        n.label = 1;
                                    case 1:
                                        n.trys.push([1, 3, , 4]);
                                        return [4, d.i6(e)];
                                    case 2:
                                        t = n.sent();
                                        a.props.onPaymentSourceAdd(t.id);
                                        return [3, 4];
                                    case 3:
                                        n.sent();
                                        return [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        })), function(e) {
                            return u.apply(this, arguments)
                        });
                        var l = te(e);
                        e.handlePaypalAdd = re((function() {
                            var e, t, n, r, o;
                            return de(this, (function(i) {
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
                        var f, p = te(e);
                        e.handleVenmoAdd = re((function() {
                            var e, t, n, r, o;
                            return de(this, (function(i) {
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
                                u = t.onBack,
                                a = (0, E.Yp)(n, o),
                                c = (0,
                                    E.NW)(a, i) ? Z.Z.Messages.BACK : Z.Z.Messages.CANCEL;
                            return (0, r.jsx)(s.Button, {
                                look: s.Button.Looks.LINK,
                                className: V().backButton,
                                color: V().backButtonColor,
                                size: V().backButtonSize,
                                onClick: u,
                                children: c
                            })
                        };
                        e.stepRenderer = se((ue(f = {}, E.Rg.PAYMENT_TYPE, {
                            renderBody: function() {
                                var t = e.props,
                                    n = t.hidePersonalInformation,
                                    i = t.onChoosePaymentType,
                                    u = t.isGiftable,
                                    a = t.needsToBeGift,
                                    c = t.isGift;
                                return n ? (0, r.jsx)(s.FormErrorBlock, {
                                    className: V().errorBlock,
                                    children: Z.Z.Messages.BILLING_ERROR_ADD_PAYMENT_SOURCE_STREAMER_MODE
                                }) : (0, r.jsxs)(o.Fragment, {
                                    children: [(0, r.jsx)(N.Z, {
                                        className: V().choosePaymentSourceType,
                                        onChooseType: i,
                                        allowStripeRequestPayments: !T.FB,
                                        onStripePaymentMethodReceived: e.handleStripePaymentRequestAdd
                                    }), u && (0, r.jsx)(s.Checkbox, {
                                        disabled: a,
                                        className: V().giftToggle,
                                        type: s.Checkbox.Types.INVERTED,
                                        value: c,
                                        onChange: e.handleToggleIsGift,
                                        children: (0, r.jsx)("div", {
                                            className: V().checkboxLabel,
                                            children: Z.Z.Messages.BILLING_IS_GIFT_PURCHASE
                                        })
                                    })]
                                })
                            },
                            renderFooter: function() {
                                return (0,
                                    r.jsx)(s.ModalFooter, {
                                    direction: P.Z.Direction.HORIZONTAL,
                                    children: e.renderBackButton()
                                })
                            }
                        }), ue(f, E.Rg.PAYMENT_REQUEST_INFO, {
                            renderBody: function() {
                                return (0, r.jsx)(M.k, {
                                    className: V().formItem,
                                    stripePaymentMethod: e.props.stripePaymentMethod,
                                    submitting: e.props.submitting
                                })
                            },
                            renderFooter: function() {
                                return (0, r.jsx)(s.ModalFooter, {
                                    direction: P.Z.Direction.HORIZONTAL,
                                    children: e.renderBackButton()
                                })
                            }
                        }), ue(f, E.Rg.PAYPAL, {
                            renderBody: function() {
                                return (0, r.jsx)(C.Z, {
                                    className: V().formItem
                                })
                            },
                            renderFooter: function() {
                                var t = e.props,
                                    n = t.submitting,
                                    o = t.braintreeNonce,
                                    i = t.braintreeEmail,
                                    u = t.onPaypalContinue,
                                    a = t.paypalClient;
                                return (0, r.jsx)(U, {
                                    submitting: n || null == a,
                                    braintreeNonce: o,
                                    braintreeEmail: i,
                                    onPaypalContinue: u,
                                    onReopenPaypal: e.handleReopenPaypal,
                                    renderBackButton: e.renderBackButton
                                })
                            }
                        }), ue(f, E.Rg.VENMO, {
                            renderBody: function() {
                                return (0, r.jsx)(w.Z, {
                                    className: V().formItem
                                })
                            },
                            renderFooter: function() {
                                var t = e.props,
                                    n = t.submitting,
                                    o = t.braintreeNonce,
                                    i = t.venmoUsername,
                                    u = t.onVenmoContinue,
                                    a = t.venmoClient;
                                return (0, r.jsx)(J, {
                                    submitting: n || null == a,
                                    braintreeNonce: o,
                                    venmoUsername: i,
                                    onVenmoContinue: u,
                                    onReopenVenmo: e.handleReopenVenmo,
                                    renderBackButton: e.renderBackButton
                                })
                            }
                        }), ue(f, E.Rg.CREDIT_CARD_INFORMATION, {
                            renderBody: function() {
                                var t = e.props.billingError;
                                return (0, r.jsx)(j.j, {
                                    billingError: t,
                                    onCardInfoChange: e.handleCardInfoChange
                                })
                            },
                            renderFooter: function() {
                                var t = e.props,
                                    n = t.isCardInfoValid,
                                    o = t.onCreditCardContinue,
                                    i = e.state,
                                    u = i.stripe,
                                    a = i.confirmingCard,
                                    s = te(e),
                                    c = function() {
                                        var e = re((function(e) {
                                            var t;
                                            return de(this, (function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        s.setState({
                                                            confirmingCard: !0
                                                        });
                                                        n.label = 1;
                                                    case 1:
                                                        n.trys.push([1, 3, 4, 5]);
                                                        return [4, d.qv(u, e)];
                                                    case 2:
                                                        t = n.sent();
                                                        s.setState({
                                                            token: t
                                                        });
                                                        y.fw();
                                                        o();
                                                        return [3, 5];
                                                    case 3:
                                                        n.sent();
                                                        return [3, 5];
                                                    case 4:
                                                        s.setState({
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
                                return (0, r.jsx)(S.ElementsConsumer, {
                                    children: function(t) {
                                        var o = t.elements;
                                        return (0, r.jsx)(j.r, {
                                            isCardInfoValid: n,
                                            submitting: a,
                                            renderBackButton: e.renderBackButton,
                                            onCreditCardContinue: function() {
                                                return c(o)
                                            }
                                        })
                                    }
                                })
                            }
                        }), ue(f, E.Rg.PAYPAL_ADDRESS, {
                            renderBody: function() {
                                var t = e.props,
                                    n = t.billingAddressInfo,
                                    o = t.billingError;
                                return (0, r.jsx)(L.P, {
                                    billingAddressInfo: n,
                                    billingError: o,
                                    onBillingAddressChange: e.handleBillingAddressChange,
                                    paymentSourceType: X.HeQ.PAYPAL
                                })
                            },
                            renderFooter: function() {
                                var t = e.props,
                                    n = t.isBillingAddressInfoValid,
                                    o = t.submitting;
                                return (0, r.jsx)(L.B, {
                                    isBillingAddressInfoValid: n,
                                    submitting: o,
                                    onContinue: e.handlePaypalAdd,
                                    renderBackButton: e.renderBackButton
                                })
                            }
                        }), ue(f, E.Rg.VENMO_ADDRESS, {
                            renderBody: function() {
                                var t = e.props,
                                    n = t.billingAddressInfo,
                                    o = t.billingError;
                                return (0, r.jsx)(L.P, {
                                    billingAddressInfo: n,
                                    billingError: o,
                                    onBillingAddressChange: e.handleBillingAddressChange,
                                    paymentSourceType: X.HeQ.VENMO
                                })
                            },
                            renderFooter: function() {
                                var t = e.props,
                                    n = t.isBillingAddressInfoValid,
                                    o = t.submitting;
                                return (0, r.jsx)(L.B, {
                                    isBillingAddressInfoValid: n,
                                    submitting: o,
                                    onContinue: e.handleVenmoAdd,
                                    renderBackButton: e.renderBackButton
                                })
                            }
                        }), ue(f, E.Rg.ADDRESS, {
                            renderBody: function() {
                                var t = e.props,
                                    n = t.billingAddressInfo,
                                    o = t.billingError,
                                    i = t.steps;
                                return (0, r.jsx)(L.P, {
                                    billingAddressInfo: n,
                                    billingError: o,
                                    onBillingAddressChange: e.handleBillingAddressChange,
                                    paymentSourceType: i === Se ? X.HeQ.GIROPAY : X.HeQ.CARD
                                })
                            },
                            renderFooter: function() {
                                var t = e.props,
                                    n = t.isBillingAddressInfoValid,
                                    o = t.submitting;
                                return (0, r.jsx)(L.B, {
                                    isBillingAddressInfoValid: n,
                                    submitting: o,
                                    onContinue: e.handleCreditCardAdd,
                                    renderBackButton: e.renderBackButton
                                })
                            }
                        }), ue(f, E.Rg.REVIEW, {
                            renderBody: function() {
                                var t = e.props,
                                    n = t.legalNotice,
                                    o = t.paymentSources,
                                    i = t.price,
                                    u = t.hidePersonalInformation,
                                    a = t.paymentSourceId,
                                    s = t.onReviewPaymentSourceChange,
                                    c = t.onReviewPaymentSourceAdd,
                                    l = t.isGiftable,
                                    f = t.isGift,
                                    p = t.needsToBeGift;
                                return (0, r.jsx)(K, {
                                    legalNotice: n,
                                    paymentSources: o,
                                    price: i,
                                    hidePersonalInformation: u,
                                    paymentSourceId: a,
                                    onPaymentSourceChange: s,
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
                                    u = t.isPurchasing,
                                    a = t.paymentSourceId,
                                    s = t.onPurchase,
                                    c = t.needsToBeGift,
                                    l = t.isGift,
                                    f = t.paymentSources;
                                return (0, r.jsx)(q, {
                                    canSubmit: n,
                                    submitButtonText: o,
                                    useShinySubmitButton: i,
                                    isPurchasing: u,
                                    hasAcceptedTerms: e.state.hasAcceptedNeccessaryTerms,
                                    paymentSource: null != a ? f[a] : null,
                                    onPurchase: s,
                                    tooltipText: e.disabledTooltip,
                                    needsToBeGift: c,
                                    isGift: l
                                })
                            }
                        }), ue(f, E.Rg.CONFIRM, {
                            renderBody: X.VqG,
                            renderFooter: X.VqG
                        }), ue(f, E.Rg.AWAITING_AUTHENTICATION, {
                            renderBody: function() {
                                return (0, r.jsx)(s.FormTitle, {
                                    className: V().formTitle,
                                    children: Z.Z.Messages.PAYMENT_WAITING_FOR_AUTHENTICATION
                                })
                            },
                            renderFooter: X.VqG
                        }), f), e.props.extraRenderers);
                        return e
                    }
                    var i = n.prototype;
                    i.componentDidMount = function() {
                        var e = this;
                        return re((function() {
                            var t, n, r, o, i, u;
                            return de(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        _.eI();
                                        t = e.props, n = t.onPaymentSourceChange, r = t.paymentSources, o = t.defaultPaymentSourceId,
                                            i = t.paymentSourceId;
                                        null != n && (null != i && i !== o && null != r[i] ? n(r[i]) : null != o && null != r[o] ? n(r[o]) : n(null));
                                        return [4, (0, R.d2)()];
                                    case 1:
                                        u = a.sent();
                                        e.setState({
                                            stripe: u
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
                        _.gy();
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
                            u = e.transitionState,
                            a = this.stepRenderer[n],
                            c = a.renderBody();
                        return (0, r.jsx)(g.Z, {
                            stripe: this.state.stripe,
                            children: (0, r.jsx)(s.ModalRoot, {
                                size: t,
                                className: i,
                                "aria-label": Z.Z.Messages.SKU_PAYMENT_STEPS_LABEL,
                                transitionState: u,
                                children: (0, r.jsx)(s.Scroller, {
                                    children: (0, r.jsxs)("form", {
                                        className: V().form,
                                        onSubmit: this.preventDefault,
                                        children: [this.renderHeader(), n !== E.Rg.CONFIRM ? (0, r.jsx)("div", {
                                            className: V().divider
                                        }) : null, null != c && (0, r.jsx)(s.ModalContent, {
                                            className: V().modalContent,
                                            children: (0, r.jsx)("div", {
                                                className: V().content,
                                                children: (0, r.jsx)(s.Sequencer, {
                                                    step: n,
                                                    steps: o,
                                                    sideMargin: me,
                                                    children: c
                                                })
                                            })
                                        }), a.renderFooter()]
                                    })
                                })
                            })
                        })
                    };
                    ! function(e, t, n) {
                        t && ie(e.prototype, t);
                        n && ie(e, n)
                    }(n, [{
                        key: "disabledTooltip",
                        get: function() {
                            var e = this.props,
                                t = e.needsToBeGift,
                                n = e.isGift,
                                r = e.isGiftable;
                            return this.state.hasAcceptedNeccessaryTerms ? t && !n ? r ? Z.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_ONLY : Z.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_ONLY_UNGIFTABLE : null : Z.Z.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP
                        }
                    }]);
                    return n
                }(o.PureComponent);
            ve.defaultProps = {
                canSubmit: !0,
                useShinySubmitButton: !1,
                size: s.ModalSize.SMALL,
                billingError: null,
                extraRenderers: {},
                className: V().modal
            };
            const Ie = a.ZP.connectStores([b.Z, h.Z, v.Z, m.Z, I.Z], (function() {
                return {
                    submitting: v.Z.isBusy,
                    paymentSources: b.Z.paymentSources,
                    defaultPaymentSourceId: b.Z.defaultPaymentSourceId,
                    stripePaymentMethod: h.Z.stripePaymentMethod,
                    creditCardInfo: h.Z.getCreditCardInfo(),
                    isCardInfoValid: h.Z.isCardInfoValid,
                    billingAddressInfo: h.Z.getBillingAddressInfo(),
                    isBillingAddressInfoValid: h.Z.isBillingAddressInfoValid,
                    braintreeEmail: h.Z.braintreeEmail,
                    braintreeNonce: h.Z.braintreeNonce,
                    venmoUsername: h.Z.venmoUsername,
                    billingError: h.Z.error,
                    paypalClient: I.Z.getPayPalClient(),
                    venmoClient: I.Z.getVenmoClient(),
                    hidePersonalInformation: m.Z.hidePersonalInformation
                }
            }))(ve);

            function Pe(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Te(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function Ae(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        s = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(s) : Promise.resolve(s).then(r, o)
            }

            function Re(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            Ae(i, r, o, u, a, "next", e)
                        }

                        function a(e) {
                            Ae(i, r, o, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function Ne(e, t) {
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

            function we(e) {
                we = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return we(e)
            }

            function Le(e, t) {
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

            function je(e, t) {
                return !t || "object" !== De(t) && "function" != typeof t ? Te(e) : t
            }

            function Me(e, t) {
                Me = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Me(e, t)
            }

            function Ze(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || xe(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ue(e) {
                return function(e) {
                    if (Array.isArray(e)) return Pe(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || xe(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var De = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function xe(e, t) {
                if (e) {
                    if ("string" == typeof e) return Pe(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Pe(e, t) : void 0
                }
            }

            function Be(e) {
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
                    var n, r = we(e);
                    if (t) {
                        var o = we(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return je(this, n)
                }
            }
            var ke = function(e, t) {
                    var n, r, o, i, u = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function a(i) {
                        return function(a) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; u;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    (r = 0, o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            u.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            u.label++;
                                            r = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = u.ops.pop();
                                            u.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                u = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                u.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && u.label < o[1]) {
                                                u.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && u.label < o[2]) {
                                                u.label = o[2];
                                                u.ops.push(i);
                                                break
                                            }
                                            o[2] && u.ops.pop();
                                            u.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, u)
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
                            }([i, a])
                        }
                    }
                },
                Fe = [E.Rg.REVIEW, E.Rg.CONFIRM],
                Ge = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && Me(e, t)
                    }(n, e);
                    var t = Be(n);

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
                                steps: he,
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
                                u = o.steps,
                                a = r.stepsToRender,
                                s = (0, E.Yp)(i, a);
                            if (s > 0) {
                                var c = a[s - 1],
                                    l = c === E.Rg.PAYMENT_TYPE;
                                l && y.fw();
                                r.setState({
                                    step: c,
                                    steps: l ? he : u
                                })
                            } else if ((0, E.NW)(s, t)) {
                                var f = r.props.defaultPaymentSourceId;
                                r.setState({
                                    step: E.Rg.REVIEW,
                                    steps: ye,
                                    paymentSourceId: f
                                })
                            } else n()
                        };
                        r.handleChoosePaymentType = function(e) {
                            switch (e) {
                                case X.HeQ.PAYPAL:
                                    r.setState({
                                        step: E.Rg.PAYPAL,
                                        steps: be
                                    });
                                    break;
                                case X.HeQ.CARD:
                                    r.setState({
                                        step: E.Rg.CREDIT_CARD_INFORMATION,
                                        steps: Oe
                                    });
                                    break;
                                case X.HeQ.PAYMENT_REQUEST:
                                    r.setState({
                                        step: E.Rg.PAYMENT_REQUEST_INFO,
                                        steps: Ee
                                    });
                                    break;
                                case X.HeQ.GIROPAY:
                                    r.setState({
                                        step: E.Rg.ADDRESS,
                                        steps: Se
                                    });
                                    break;
                                case X.HeQ.PAYSAFE_CARD:
                                    r.setState({
                                        step: E.Rg.ADDRESS,
                                        steps: _e
                                    });
                                    break;
                                case X.HeQ.VENMO:
                                    r.setState({
                                        step: E.Rg.VENMO,
                                        steps: ge
                                    })
                            }
                        };
                        r.handlePaymentSourceAdd = function(e) {
                            r.setState({
                                step: E.Rg.REVIEW,
                                paymentSourceId: e
                            })
                        };
                        var o = Te(r);
                        r.handlePurchase = Re((function() {
                            var e, t, n, r, i;
                            return ke(this, (function(u) {
                                switch (u.label) {
                                    case 0:
                                        e = o.props, t = e.paymentSources, n = e.onPurchase, r = e.isGift;
                                        if (null == (i = o.state.paymentSourceId)) return [2];
                                        u.label = 1;
                                    case 1:
                                        u.trys.push([1, 3, , 4]);
                                        return [4, n(t[i], r)];
                                    case 2:
                                        u.sent();
                                        o.setState({
                                            steps: Fe,
                                            step: E.Rg.CONFIRM
                                        });
                                        return [3, 4];
                                    case 3:
                                        u.sent();
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
                            u = e.paymentSources,
                            a = e.initialStep,
                            s = Object.values(u).length > 0,
                            c = a;
                        null == c && (c = s ? E.Rg.REVIEW : E.Rg.PAYMENT_TYPE);
                        r.state = {
                            paymentSourceId: i,
                            steps: s ? ye : he,
                            step: c,
                            errorStep: null
                        };
                        return r
                    }
                    var o = n.prototype;
                    o.componentDidMount = function() {
                        b.Z.hasFetchedPaymentSources || d.tZ()
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
                            u = n.submitButtonText,
                            a = n.useShinySubmitButton,
                            s = n.legalNotice,
                            c = n.renderHeader,
                            l = n.onPaymentSourceChange,
                            f = n.price,
                            p = n.onClearError,
                            d = n.size,
                            y = n.renderConfirmationBody,
                            h = n.renderConfirmationFooter,
                            O = n.className,
                            b = n.isGift,
                            S = n.isGiftable,
                            _ = n.needsToBeGift,
                            g = n.onIsGiftUpdate,
                            m = n.transitionState,
                            v = (Ce(e = {}, E.Rg.CONFIRM, {
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
                            I = this.state,
                            P = I.step,
                            T = I.paymentSourceId,
                            A = this.stepsToRender;
                        return (0, r.jsx)(Ie, {
                            transitionState: m,
                            className: O,
                            isPurchasing: o,
                            canSubmit: i,
                            submitButtonText: u,
                            useShinySubmitButton: a,
                            legalNotice: s,
                            renderHeader: c,
                            onPaymentSourceChange: l,
                            price: f,
                            onClearError: p,
                            size: d,
                            extraRenderers: v,
                            step: P,
                            steps: A,
                            paymentSourceId: T,
                            isGiftable: S,
                            isGift: b,
                            needsToBeGift: _,
                            onIsGiftUpdate: g,
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
                            var u = (0, E.ly)(n);
                            if (null != u && u !== t.errorStep) {
                                i.step = u;
                                i.errorStep = u
                            }
                        }
                        null == t.paymentSourceId && null != e.defaultPaymentSourceId && (i.paymentSourceId = e.defaultPaymentSourceId);
                        r ? i.step = E.Rg.AWAITING_AUTHENTICATION : t.step === E.Rg.AWAITING_AUTHENTICATION && (i.step = null != n ? E.Rg.REVIEW : E.Rg.CONFIRM);
                        return i
                    };
                    ! function(e, t, n) {
                        t && Ne(e.prototype, t);
                        n && Ne(e, n)
                    }(n, [{
                        key: "stepsToRender",
                        get: function() {
                            var e = this.props.prependSteps,
                                t = this.state.steps;
                            return null != e ? Ue(e).concat(Ue(t)) : t
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
            Ge.defaultProps = {
                useShinySubmitButton: !1,
                needsToBeGift: !1,
                isGiftable: !1,
                isGift: !1,
                renderConfirmationBody: X.VqG,
                renderConfirmationFooter: X.VqG,
                renderSelectPlanBody: X.VqG,
                renderSelectPlanFooter: X.VqG
            };
            const He = o.forwardRef((function(e, t) {
                var n = Ze((0, a.Wu)([b.Z], (function() {
                        return [b.Z.paymentSources, b.Z.defaultPaymentSourceId]
                    })), 2),
                    o = n[0],
                    i = n[1],
                    u = (0, a.e7)([h.Z], (function() {
                        return h.Z.error
                    })),
                    s = Ze((0, a.Wu)([O.Z], (function() {
                        return [O.Z.error, O.Z.isAwaitingAuthentication]
                    })), 2),
                    c = s[0],
                    l = s[1];
                return (0, r.jsx)(Ge, Le(function(e) {
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
                    billingError: null != c ? c : u,
                    paymentSources: o,
                    defaultPaymentSourceId: i,
                    isAwaitingAuthentication: l
                }))
            }));
            var Ye = n(446483),
                Ve = n(560213),
                We = n(94340),
                ze = n(959207),
                Qe = n(473903),
                Ke = n(151367),
                qe = n(908434),
                Je = n(746974),
                Xe = n(325213),
                $e = n(669426),
                et = n(750203),
                tt = n(652591),
                nt = n(661123),
                rt = n(557931),
                ot = n(534681),
                it = n(934869),
                ut = n(910740),
                at = n(320641),
                st = n(6369),
                ct = n.n(st);

            function lt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function ft(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function pt(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        s = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(s) : Promise.resolve(s).then(r, o)
            }

            function dt(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            pt(i, r, o, u, a, "next", e)
                        }

                        function a(e) {
                            pt(i, r, o, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function yt(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function ht(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function Ot(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function bt(e) {
                bt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return bt(e)
            }

            function Et(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                });
                t && vt(e, t)
            }

            function St(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        Ot(e, t, n[t])
                    }))
                }
                return e
            }

            function _t(e, t) {
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

            function gt(e, t) {
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

            function mt(e, t) {
                return !t || "object" !== Pt(t) && "function" != typeof t ? ft(e) : t
            }

            function vt(e, t) {
                vt = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return vt(e, t)
            }

            function It(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return lt(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return lt(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Pt = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Tt(e) {
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
                    var n, r = bt(e);
                    if (t) {
                        var o = bt(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return mt(this, n)
                }
            }
            var At, Rt = function(e, t) {
                var n, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            u.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && u.label < o[1]) {
                                            u.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && u.label < o[2]) {
                                            u.label = o[2];
                                            u.ops.push(i);
                                            break
                                        }
                                        o[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                i = t.call(e, u)
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
                        }([i, a])
                    }
                }
            };
            ! function(e) {
                e.UNSUPPORTED_OS = "UNSUPPORTED_OS";
                e.TEST_MODE = "TEST_MODE";
                e.GIFT_ONLY = "GIFT_ONLY";
                e.PREORDER = "PREORDER"
            }(At || (At = {}));
            var Nt = function(e) {
                    Et(n, e);
                    var t = Tt(n);

                    function n() {
                        yt(this, n);
                        var e;
                        (e = t.apply(this, arguments)).state = {
                            paymentSourceId: null
                        };
                        e._loadId = u().v4();
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
                        var i, a = ft(e);
                        e.handlePurchase = (i = dt((function(e) {
                            var t, n, r, o, i, u, s;
                            return Rt(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        t = a.props, n = t.applicationId, r = t.sku;
                                        o = a.getPrice();
                                        i = null != o ? o.amount : 0;
                                        u = null != o ? o.currency : X.pKx.USD;
                                        if (null == r) throw new Error("SKU is null during purchase");
                                        if (qe.Z.isPurchasingSKU) return [2];
                                        c.label = 1;
                                    case 1:
                                        c.trys.push([1, 3, , 4]);
                                        tt.default.track(X.rMx.PAYMENT_FLOW_COMPLETED, _t(St({}, a.getBaseAnalyticsData()), {
                                            duration_ms: Date.now() - a._flowStartTime
                                        }));
                                        return [4, f.ZZ(n, r.id, {
                                            expectedAmount: i,
                                            expectedCurrency: u,
                                            paymentSource: e,
                                            analyticsLoadId: a._loadId,
                                            isGift: a.isGift
                                        })];
                                    case 2:
                                        c.sent();
                                        (0, l.Bv)();
                                        return [3, 4];
                                    case 3:
                                        s = c.sent();
                                        tt.default.track(X.rMx.PAYMENT_FLOW_FAILED, _t(St({}, a.getBaseAnalyticsData()), {
                                            payment_gateway: e.type === X.HeQ.CARD ? X.gg$.STRIPE : X.gg$.BRAINTREE,
                                            payment_source_id: e.id,
                                            duration_ms: Date.now() - a._flowStartTime,
                                            payment_error_code: s.code
                                        }));
                                        throw s;
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
                            tt.default.track(X.rMx.PAYMENT_FLOW_STEP, _t(St({}, e.getBaseAnalyticsData()), {
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
                            return t === E.Rg.CONFIRM ? null != i ? (0, r.jsx)(Ye.Z, {
                                application: i,
                                splashSize: 880
                            }) : null : e.renderDefaultHeader(t, n, o)
                        };
                        e.renderConfirmation = function() {
                            var t = e.props,
                                n = t.application,
                                o = t.sku,
                                i = t.isIAP,
                                u = t.giftCode;
                            if (null == o || null == n) throw new Error("No SKU for confirmation step!");
                            return (0, r.jsx)("div", {
                                className: ct().confirmContent,
                                children: (0, r.jsxs)(P.Z, {
                                    direction: P.Z.Direction.VERTICAL,
                                    children: [(0, r.jsx)(s.ModalCloseButton, {
                                        onClick: function() {
                                            return e.handleClose()
                                        },
                                        className: ct().confirmCloseButton
                                    }), null != u ? (0, r.jsx)(it.Z, {
                                        giftCode: u,
                                        application: n,
                                        sku: o,
                                        onClose: function() {
                                            return e.handleClose()
                                        }
                                    }) : (0, r.jsx)(ut.Z, {
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
                        return null == n ? null : n[null != r ? r : qe.c]
                    };
                    i.componentDidMount = function() {
                        var e = this,
                            t = this.props,
                            n = t.sku,
                            r = t.skuId,
                            o = t.applicationId;
                        null == n ? f.jU(o, r).catch((function(t) {
                            return e.handleClose(t.message)
                        })) : tt.default.track(X.rMx.PAYMENT_FLOW_STARTED, this.getBaseAnalyticsData())
                    };
                    i.componentDidUpdate = function(e, t) {
                        null == e.sku && null != this.props.sku && tt.default.track(X.rMx.PAYMENT_FLOW_STARTED, this.getBaseAnalyticsData());
                        this.checkPriceChange(this.getSkuPrice(e, t), this.getSkuPrice())
                    };
                    i.checkPriceChange = function(e, t) {
                        var n = this.props,
                            r = n.sku,
                            o = n.onClose;
                        null != e && null != t && e.discount_percent_off !== t.discount_percent_off && c.Z.wait((function() {
                            if (null == r) throw new Error("Unexpected null SKU");
                            o(X.G5l)
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
                        return _t(St({}, (0, We.Z)(t)), {
                            load_id: this._loadId,
                            payment_type: X.Zuq[X.GZQ.ONE_TIME],
                            is_gift: this.isGift,
                            client_event_source: r === X.IlC.OVERLAY ? X.IlC.OVERLAY : null,
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
                            u = e.isUserEntitledToSku;
                        if (null == t) return null;
                        var a = (0, ot.hX)((0, T.Xf)()),
                            s = [];
                        null != a && t.supportedOperatingSystems.includes(a) || i || s.push((0, r.jsx)(D.Z, {
                            icon: G.Z,
                            iconSize: D.Z.Sizes.SMALL,
                            color: D.Z.Colors.WARNING,
                            className: ct().errorBlock,
                            children: Z.Z.Messages.APPLICATION_STORE_PURCHASE_GAME_CURRENT_OS_UNSUPPORTED
                        }, At.UNSUPPORTED_OS));
                        n && s.push((0, r.jsx)(D.Z, {
                            icon: G.Z,
                            iconSize: D.Z.Sizes.SMALL,
                            color: D.Z.Colors.WARNING,
                            className: ct().errorBlock,
                            children: Z.Z.Messages.APPLICATION_STORE_PURCHASE_TEST_MODE
                        }, At.TEST_MODE));
                        !0 === u && this.isGiftable && s.push((0, r.jsx)(D.Z, {
                            icon: G.Z,
                            iconSize: D.Z.Sizes.SMALL,
                            color: D.Z.Colors.PRIMARY,
                            className: ct().errorBlock,
                            children: Z.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_ONLY
                        }, At.GIFT_ONLY));
                        t.isPreorder() && s.push((0, r.jsx)(D.Z, {
                            icon: G.Z,
                            iconSize: D.Z.Sizes.SMALL,
                            color: D.Z.Colors.PRIMARY,
                            className: ct().errorBlock,
                            children: Z.Z.Messages.APPLICATION_STORE_PURCHASE_WARNING_PREORDER.format({
                                date: (0, rt.en)(t)
                            })
                        }, At.PREORDER));
                        return (0, r.jsx)(o.Fragment, {
                            children: s
                        })
                    };
                    i.renderGenericError = function(e, t) {
                        return null == e && null == t ? null : (0, r.jsx)(s.FormErrorBlock, {
                            className: ct().errorBlock,
                            children: null != e ? e.message : null != t ? t.message : null
                        })
                    };
                    i.renderDefaultHeader = function(e, t, n) {
                        var o = this,
                            i = this.props,
                            u = i.isIAP,
                            a = i.application,
                            c = i.sku,
                            l = i.purchaseError;
                        if (null == c || null == a) return null;
                        var f = this.getPrice();
                        return (0, r.jsxs)(s.ModalHeader, {
                            direction: P.Z.Direction.VERTICAL,
                            align: P.Z.Align.START,
                            separator: !1,
                            children: [(0, r.jsx)(Ye.Z, {
                                application: a,
                                splashSize: 880
                            }), (0, r.jsxs)(P.Z, {
                                align: P.Z.Align.CENTER,
                                className: ct().headerHeader,
                                children: [(0, r.jsx)(s.FormTitle, {
                                    tag: s.FormTitleTags.H4,
                                    children: (0, at.Y)(u, c.type)
                                }), (0, r.jsx)(s.ModalCloseButton, {
                                    onClick: function() {
                                        return o.handleClose()
                                    }
                                })]
                            }), (0, r.jsxs)(P.Z, {
                                align: P.Z.Align.CENTER,
                                className: ct().headerContent,
                                children: [(0, r.jsxs)(P.Z, {
                                    align: P.Z.Align.CENTER,
                                    children: [(0, r.jsx)(et.Z, {
                                        game: a
                                    }), (0, r.jsx)("div", {
                                        className: ct().applicationName,
                                        children: c.name
                                    })]
                                }), (0, r.jsx)("div", {
                                    className: ct().price,
                                    children: null != f ? (0, H.T4)(f.amount, f.currency) : (0, r.jsx)(s.Spinner, {
                                        type: s.Spinner.Type.PULSING_ELLIPSIS,
                                        className: ct().priceSpinner
                                    })
                                })]
                            }), this.renderPurchaseWarning(), this.renderGenericError(l, n), t.length > 1 ? (0, r.jsx)($e.Z, {
                                activeId: e,
                                breadcrumbs: t,
                                className: ct().breadcrumbs
                            }) : null]
                        })
                    };
                    i.render = function() {
                        var e = this,
                            t = this.props,
                            n = t.sku,
                            o = t.isFetchingSKU,
                            i = t.isPurchasing,
                            u = t.isEmbeddedIAP,
                            a = t.purchaseError,
                            c = t.isUserEntitledToSku,
                            l = t.forceConfirmationStepOnMount,
                            d = t.transitionState;
                        return null == n || o ? (0, r.jsx)(s.Spinner, {}) : (0, r.jsx)(He, {
                            ref: this._paymentModalRef,
                            transitionState: d,
                            canSubmit: null != this.getSkuPrice(),
                            needsToBeGift: n.type === X.epS.DURABLE_PRIMARY && !0 === c,
                            isGiftable: this.isGiftable,
                            legalNotice: u ? (0, r.jsx)(p.Z, {
                                isEmbeddedIAP: u
                            }) : null,
                            isPurchasing: i,
                            purchaseError: a,
                            price: this.getPrice(),
                            size: s.ModalSize.SMALL,
                            onPurchase: this.handlePurchase,
                            onIsGiftUpdate: f.x9,
                            onPaymentSourceChange: this.handlePaymentSourceChange,
                            onClose: function() {
                                return e.handleClose()
                            },
                            onClearError: f.pB,
                            renderHeader: this.renderHeader,
                            renderConfirmationBody: this.renderConfirmation,
                            submitButtonText: this.isGift ? Z.Z.Messages.APPLICATION_STORE_BUY_GIFT : Z.Z.Messages.APPLICATION_STORE_BUY,
                            initialStep: l ? E.Rg.CONFIRM : null,
                            onStepChange: this.handleStepChange,
                            isGift: this.isGift
                        })
                    };
                    ! function(e, t, n) {
                        t && ht(e.prototype, t);
                        n && ht(e, n)
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
                        u = e.skuId,
                        s = gt(e, ["applicationId", "skuId"]),
                        c = (0, a.e7)([ze.Z], (function() {
                            return ze.Z.getGame(i)
                        })),
                        l = (0, nt.yE)(null !== (n = null == c ? void 0 : c.flags) && void 0 !== n ? n : 0, X.udG.EMBEDDED) && (0, nt.yE)(null !== (o = null == c ? void 0 : c.flags) && void 0 !== o ? o : 0, X.udG.EMBEDDED_IAP),
                        f = It((0, a.Wu)([qe.Z], (function() {
                            return [qe.Z.getPricesForSku(u), qe.Z.isPurchasingSKU, qe.Z.error, qe.Z.analyticsLocation, qe.Z.promotionId, qe.Z.giftCode, qe.Z.isGift, qe.Z.isIAP, qe.Z.forceConfirmationStepOnMount]
                        })), 9),
                        p = f[0],
                        d = f[1],
                        y = f[2],
                        h = f[3],
                        b = f[4],
                        E = f[5],
                        S = f[6],
                        _ = f[7],
                        g = f[8],
                        m = It((0, a.Wu)([Je.Z], (function() {
                            return [Je.Z.get(u), Je.Z.isFetching(u)]
                        })), 2),
                        v = m[0],
                        I = m[1],
                        P = (0, a.e7)([Ve.Z, Xe.Z], (function() {
                            return Xe.Z.inTestModeForApplication(i) || Ve.Z.inDevModeForApplication(i)
                        }), [i]),
                        T = (0, a.e7)([Ke.Z, Qe.default], (function() {
                            return Ke.Z.isEntitledToSku(Qe.default.getCurrentUser(), u, i)
                        })),
                        A = (0, a.e7)([O.Z], (function() {
                            return O.Z.error
                        }));
                    return (0,
                        r.jsx)(Nt, _t(St({}, s), {
                        application: c,
                        applicationId: i,
                        skuId: u,
                        prices: p,
                        isPurchasing: d,
                        purchaseError: null != A ? A : y,
                        analyticsLocation: h,
                        promotionId: b,
                        isIAP: _,
                        giftCode: E,
                        isGift: S,
                        forceConfirmationStepOnMount: g,
                        sku: v,
                        isFetchingSKU: I,
                        isInTestMode: P,
                        isUserEntitledToSku: T,
                        isEmbeddedIAP: l,
                        ref: t
                    }))
                })),
                wt = function(e) {
                    Et(n, e);
                    var t = Tt(n);

                    function n() {
                        yt(this, n);
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
                        return (0, r.jsx)(Ct, _t(St({}, this.props), {
                            ref: this._skuPaymentModalRef,
                            onClose: function() {
                                return e.handleClose()
                            }
                        }))
                    };
                    return n
                }(o.PureComponent);
            const Lt = wt
        },
        919244: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => E
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                u = n.n(i),
                a = n(304548),
                s = n(473708),
                c = n(949095),
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
                    return d(this, n)
                }
            }
            var b = function(e) {
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
                var t = O(n);

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
                        return null !== (t = e.props.label) && void 0 !== t ? t : e.props.disallowBackupCodes ? s.Z.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : s.Z.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    };
                    e.getSupportedCodeTypes = function() {
                        return e.props.disallowBackupCodes ? s.Z.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : s.Z.Messages.TWO_FA_AUTH_CODE
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
                        O = t.retryPrompt,
                        b = t.retrySuccessMessage,
                        E = this.state,
                        S = E.code,
                        _ = E.errorMessage,
                        g = E.retrySuccess,
                        m = o.Children.count(c) > 0 ? (0, r.jsx)(a.Card, {
                            type: a.Card.Types.WARNING,
                            className: l().card,
                            children: (0,
                                r.jsx)(a.Text, {
                                variant: "text-md/normal",
                                children: c
                            })
                        }) : null,
                        v = null != O ? (0, r.jsxs)(a.Text, {
                            className: u()(l().submitText, l().spacing),
                            variant: "text-sm/normal",
                            children: [(0, r.jsx)("br", {}), (0, r.jsx)(a.Clickable, {
                                className: u()(l().spacing, l().link),
                                onClick: this.handleRetry,
                                children: (0, r.jsx)(a.Anchor, {
                                    children: O
                                })
                            })]
                        }) : null,
                        I = g ? (0, r.jsx)(a.Card, {
                            type: a.Card.Types.SUCCESS,
                            className: l().card,
                            children: (0, r.jsx)(a.Text, {
                                variant: "text-md/normal",
                                children: b
                            })
                        }) : null;
                    return (0, r.jsx)(a.ModalRoot, {
                        transitionState: y,
                        children: (0, r.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, r.jsx)(a.ModalHeader, {
                                separator: !1,
                                children: (0, r.jsx)(a.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: n
                                })
                            }), (0, r.jsxs)(a.ModalContent, {
                                children: [null != h ? (0, r.jsx)(a.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: l().spacing,
                                    children: h
                                }) : null, m, I, (0, r.jsxs)(a.FormItem, {
                                    title: this.getLabelText(),
                                    className: l().spacing,
                                    children: [(0, r.jsx)(a.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != d ? d : 10,
                                        value: S,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, r.jsx)(a.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: l().error,
                                        children: null != f ? f : _
                                    }) : null, v]
                                })]
                            }), (0, r.jsxs)(a.ModalFooter, {
                                children: [(0, r.jsx)(a.Button, {
                                    type: "submit",
                                    disabled: p || 0 === S.length,
                                    children: null != i ? i : s.Z.Messages.CONFIRM
                                }), (0, r.jsx)(a.Button, {
                                    onClick: this.handleCancel,
                                    disabled: p,
                                    look: a.Button.Looks.LINK,
                                    color: a.Button.Colors.PRIMARY,
                                    children: s.Z.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                };
                return n
            }(o.PureComponent);
            b.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            const E = b
        },
        973889: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => f
            });
            var r = n(281110),
                o = n(2590),
                i = n(473708);

            function u(e) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return u(e)
            }

            function a(e, t) {
                return !t || "object" !== c(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function s(e, t) {
                s = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return s(e, t)
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
                    var n, r = u(e);
                    if (t) {
                        var o = u(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return a(this, n)
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
                    t && s(e, t)
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
                Z: () => u
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
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
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

            function u(e) {
                var t = i((0, r.useState)(!1), 2),
                    n = t[0],
                    o = t[1],
                    u = (0, r.useRef)(e.current);
                (0, r.useEffect)((function() {
                    u.current = e.current
                }), [e]);
                (0, r.useEffect)((function() {
                    var e = u.current;
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
                }), [u]);
                return n
            }
        },
        320142: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var r = n(120415);

            function o(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        s = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(s) : Promise.resolve(s).then(r, o)
            }

            function i(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var u = e.apply(t, n);

                        function a(e) {
                            o(u, r, i, a, s, "next", e)
                        }

                        function s(e) {
                            o(u, r, i, a, s, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var u = function(e, t) {
                var n, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            u.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && u.label < o[1]) {
                                            u.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && u.label < o[2]) {
                                            u.label = o[2];
                                            u.ops.push(i);
                                            break
                                        }
                                        o[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                i = t.call(e, u)
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
                        }([i, a])
                    }
                }
            };

            function a(e, t) {
                return s.apply(this, arguments)
            }

            function s() {
                return (s = i((function(e, t) {
                    var o, i, a, s;
                    return u(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                0;
                                return [4, Promise.all([n.e(40532), n.e(39685), n.e(47007), n.e(6543), n.e(29342), n.e(84832), n.e(27499), n.e(79913), n.e(64466), n.e(92465), n.e(45353), n.e(10675), n.e(73727), n.e(52555), n.e(61953), n.e(84441), n.e(14990), n.e(33227), n.e(24501), n.e(17667)]).then(n.bind(n, 624501))];
                            case 1:
                                o = u.sent(), i = o.default;
                                if (null != (a = i(e, {
                                        skipExtensionCheck: t,
                                        analyticsLocations: []
                                    }))) a(null);
                                else if (r.FB) window.open(e);
                                else {
                                    (s = document.createElement("a")).href = e;
                                    s.target = "_blank";
                                    s.rel = "noreferrer noopener";
                                    s.click()
                                }
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        83797: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });
            var r = n(2590);

            function o(e) {
                return null != e && e.type !== r.IIU.CUSTOM_STATUS && (null != e.details || null != e.assets && (null != e.assets.large_image || null != e.assets.small_text) || null != e.party || null != e.secrets || null != e.state)
            }
        },
        396043: (e, t, n) => {
            "use strict";
            n.d(t, {
                v_: () => w,
                JS: () => C,
                hH: () => R,
                AB: () => L,
                ZP: () => D,
                oG: () => U,
                kO: () => Z,
                yw: () => M
            });
            var r = n(496486),
                o = n.n(r),
                i = n(940060),
                u = n(382060),
                a = n(664625),
                s = n(61209),
                c = n(5544),
                l = n(27851),
                f = n(21372),
                p = n(567403),
                d = n(964517),
                y = n(682776),
                h = n(491260),
                O = n(563367),
                b = n(715107),
                E = n(464187),
                S = n(407561),
                _ = n(652591),
                g = n(563135),
                m = n(671723);
            var v = n(2590),
                I = n(897196);

            function P(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function T(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        P(e, t, n[t])
                    }))
                }
                return e
            }

            function A(e) {
                var t = 0;
                for (var n in e) t += 1;
                return t
            }

            function R(e) {
                if (null == e) return null;
                var t = p.Z.getGuild(e);
                if (null == t) return null;
                var n, r = a.default.getId(),
                    o = f.ZP.getMember(e, r),
                    i = c.ZP.getChannels(e),
                    u = i[c.sH].length,
                    s = i[c.Zb].length,
                    d = S.Z.getVoiceStates(e);
                return {
                    guild_id: t.id,
                    guild_size_total: l.Z.getMemberCount(e),
                    guild_num_channels: u + s,
                    guild_num_text_channels: u,
                    guild_num_voice_channels: s,
                    guild_num_roles: A(t.roles),
                    guild_member_num_roles: null != o ? o.roles.length : 0,
                    guild_member_perms: String(null !== (n = y.Z.getGuildPermissions(t)) && void 0 !== n ? n : g.ZP.NONE),
                    guild_is_vip: t.hasFeature(v.oNc.VIP_REGIONS),
                    is_member: null != o,
                    num_voice_channels_active: A(d)
                }
            }

            function N(e, t) {
                return {
                    channel_static_route: t,
                    channel_hidden: !1
                }
            }

            function C(e) {
                if (null == e) return null;
                var t = s.Z.getChannel(e);
                return null == t ? null : w(t)
            }

            function w(e) {
                if (null == e) return null;
                var t, n = !1,
                    r = e.getGuildId();
                if (null != r) {
                    var o = function(e) {
                        if (null == e) return !1;
                        var t = e.permissionOverwrites[r];
                        return null != t && i.Z.has(t.deny, v.Plq.VIEW_CHANNEL)
                    };
                    n = u.Ec.has(e.type) && null != e.parent_id ? o(s.Z.getChannel(e.parent_id)) : o(e)
                }
                return {
                    channel_id: e.id,
                    channel_type: e.type,
                    channel_size_total: e.isPrivate() ? e.recipients.length : 0,
                    channel_member_perms: String(null != r && null !== (t = y.Z.getChannelPermissions(e)) && void 0 !== t ? t : g.ZP.NONE),
                    channel_hidden: n
                }
            }

            function L(e) {
                if (null == e) return null;
                var t = s.Z.getChannel(e);
                if (null == t) return null;
                var n, r = d.Z.isVideoEnabled(),
                    o = O.Z.getMediaSessionId();
                return T({
                    channel_id: t.id,
                    channel_type: t.type,
                    guild_id: t.getGuildId(),
                    media_session_id: o
                }, Z(t.getGuildId(), t.id, r), {
                    game_name: null != (n = m.ZP.getCurrentGameForAnalytics()) ? n.name : null,
                    game_id: null != n ? n.id : null
                })
            }

            function j(e, t) {
                return null == e ? null != t ? t : null : e.isPrivate() ? null : null !== (r = null !== (n = e.getGuildId()) && void 0 !== n ? n : t) && void 0 !== r ? r : null;
                var n, r
            }

            function M(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!_.default.isThrottled(e)) {
                    var r = !("location" in t) || t.location !== v.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
                        o = "guild_id" in t ? t.guild_id : r ? E.Z.getGuildId() : null,
                        i = "channel_id" in t ? t.channel_id : r ? b.Z.getChannelId(o) : null,
                        u = s.Z.getChannel(i),
                        a = j(u, o),
                        c = T({}, t, R(a), null != o && null != i && (0, I.AB)(i) ? N(0, i) : w(u));
                    _.default.track(e, c, {
                        flush: n
                    })
                }
            }

            function Z(e, t, n) {
                var r = {
                    voice_state_count: 0,
                    video_stream_count: 0,
                    video_enabled: n
                };
                o()(S.Z.getVoiceStates(e)).filter((function(e) {
                    return e.channelId === t
                })).filter((function(e) {
                    return e.userId !== a.default.getId()
                })).forEach((function(e) {
                    r.voice_state_count++;
                    (e.selfVideo || e.selfStream) && r.video_stream_count++
                }));
                return r
            }

            function U(e, t) {
                var n = {
                    custom_status_count: 0
                };
                o()(S.Z.getVoiceStates(e)).forEach((function(e) {
                    e.channelId === t && null != h.Z.findActivity(e.userId, (function(e) {
                        return e.type === v.IIU.CUSTOM_STATUS
                    })) && n.custom_status_count++
                }));
                return n
            }
            const D = {
                trackWithMetadata: M,
                getVoiceStateMetadata: Z
            }
        },
        333398: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => _
            });
            var r = n(202351),
                o = n(744564),
                i = n(451936);

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

            function s(e) {
                s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return s(e)
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
                return !t || "object" !== d(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function p(e, t) {
                p = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return p(e, t)
            }
            var d = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function y(e) {
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
                    return f(this, n)
                }
            }
            var h = {},
                O = {},
                b = [];

            function E(e) {
                var t = e.entitlements,
                    n = !1,
                    r = !0,
                    o = !1,
                    u = void 0;
                try {
                    for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done); r = !0) {
                        var l = a.value.sku;
                        if (null != l && null != l.application) {
                            var f = l.application;
                            h[f.id] = i.Z.createFromServer(f);
                            n = !0
                        }
                    }
                } catch (e) {
                    o = !0;
                    u = e
                } finally {
                    try {
                        r || null == s.return || s.return()
                    } finally {
                        if (o) throw u
                    }
                }
                n && (h = c({}, h));
                return n
            }
            var S = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && p(e, t)
                }(n, e);
                var t = y(n);

                function n() {
                    u(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getApplications = function() {
                    return h
                };
                r.getGuildApplication = function(e, t) {
                    if (null != e) {
                        var n = !0,
                            r = !1,
                            o = void 0;
                        try {
                            for (var i, u = Object.values(h)[Symbol.iterator](); !(n = (i = u.next()).done); n = !0) {
                                var a = i.value;
                                if (a.guildId === e && a.type === t) return a
                            }
                        } catch (e) {
                            r = !0;
                            o = e
                        } finally {
                            try {
                                n || null == u.return || u.return()
                            } finally {
                                if (r) throw o
                            }
                        }
                    }
                };
                r.getGuildApplications = function(e) {
                    return null == e ? b : O[e]
                };
                r.getApplication = function(e) {
                    return h[e]
                };
                return n
            }(r.ZP.Store);
            S.displayName = "ApplicationStore";
            const _ = new S(o.Z, {
                APPLICATION_FETCH_SUCCESS: function(e) {
                    var t = e.application;
                    h = l(c({}, h), a({}, t.id, i.Z.createFromServer(t)))
                },
                APPLICATIONS_FETCH_SUCCESS: function(e) {
                    var t = e.applications,
                        n = c({}, h),
                        r = !0,
                        o = !1,
                        u = void 0;
                    try {
                        for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done); r = !0) {
                            var l = a.value;
                            n[l.id] = i.Z.createFromServer(l)
                        }
                    } catch (e) {
                        o = !0;
                        u = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (o) throw u
                        }
                    }
                    h = n
                },
                APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: E,
                ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: E,
                GUILD_SETTINGS_LOADED_INTEGRATIONS: function(e) {
                    var t = e.integrations,
                        n = e.guildId,
                        r = !1,
                        o = [],
                        i = !0,
                        u = !1,
                        a = void 0;
                    try {
                        for (var s, l = t[Symbol.iterator](); !(i = (s = l.next()).done); i = !0) {
                            var f = s.value.application;
                            if (null != f) {
                                o.push(f.id);
                                h[f.id] = f;
                                r = !0
                            }
                        }
                    } catch (e) {
                        u = !0;
                        a = e
                    } finally {
                        try {
                            i || null == l.return || l.return()
                        } finally {
                            if (u) throw a
                        }
                    }
                    if (r) {
                        h = c({}, h);
                        O[n] = o;
                        var p = {};
                        for (var d in O) p[d] = O[d];
                        O = p
                    }
                    return r
                },
                CONNECTION_OPEN: function() {
                    h = {};
                    O = {}
                }
            })
        },
        269116: (e, t, n) => {
            "use strict";
            n.d(t, {
                F: () => O,
                Z: () => b
            });
            var r = n(496486),
                o = n.n(r),
                i = n(306472),
                u = n(296602),
                a = n(120415),
                s = n(310126);

            function c(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        s = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(s) : Promise.resolve(s).then(r, o)
            }

            function l(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            c(i, r, o, u, a, "next", e)
                        }

                        function a(e) {
                            c(i, r, o, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            var f, p = function(e, t) {
                    var n, r, o, i, u = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function a(i) {
                        return function(a) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; u;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                                            0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    (r = 0, o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            u.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            u.label++;
                                            r = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = u.ops.pop();
                                            u.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                u = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                u.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && u.label < o[1]) {
                                                u.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && u.label < o[2]) {
                                                u.label = o[2];
                                                u.ops.push(i);
                                                break
                                            }
                                            o[2] && u.ops.pop();
                                            u.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, u)
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
                            }([i, a])
                        }
                    }
                },
                d = [];

            function y(e) {
                e = e.toLowerCase();
                (0, a.ED)() && (e = (e = e.replace(/^[a-z]:/, "")).replace(/\\/g, "/"));
                return e
            }

            function h(e) {
                if (null != e && "" !== e) {
                    (e = y(e)).endsWith("/") || (e += "/");
                    d.push(e)
                }
            }

            function O(e) {
                e = y(e);
                var t = !1;
                d.forEach((function(n) {
                    if (!t && e.startsWith(n)) {
                        e = e.substr(n.length);
                        t = !0
                    }
                }));
                return t ? e = e.includes("dosbox.exe") ? e.split("/").slice(-3).join("/") : e.split("/").slice(-2).join("/") : null
            }

            function b() {
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
                                return [4, s.ZP.ensureModule("discord_game_utils")];
                            case 2:
                                r.sent();
                                return [4, s.ZP.requireModule("discord_game_utils")];
                            case 3:
                                f = r.sent();
                                return [3, 5];
                            case 4:
                                e = r.sent();
                                new u.Z("GamesActionCreators").error("could not load discord_game_utils", e);
                                return [3, 5];
                            case 5:
                                if ((0, a.ED)()) {
                                    h((t = i.Z.process.env).LOCALAPPDATA);
                                    h(t["PROGRAMFILES(X86)"]);
                                    h(t.PROGRAMFILES);
                                    h(t.PROGRAMW6432);
                                    h(t.PROGRAMDATA);
                                    h("/games/");
                                    h("/steamlibrary/steamapps/common/")
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
        387099: (e, t, n) => {
            "use strict";
            n.d(t, {
                Q: () => a,
                Z: () => s
            });
            var r = n(260561),
                o = n(165666),
                i = (0, r.B)({
                    kind: "user",
                    id: "2022-03_block_russian_purchases",
                    label: "Block purchases based on country",
                    defaultConfig: {
                        paymentsBlocked: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Payments Blocked",
                        config: {
                            paymentsBlocked: !0
                        }
                    }]
                }),
                u = (0, r.B)({
                    kind: "user",
                    id: "2022-03_block_russian_purchases_desktop",
                    label: "Block purchases based on country (desktop specific flags)",
                    defaultConfig: {
                        checkPaymentSource: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Check Payment Source",
                        config: {
                            checkPaymentSource: !0
                        }
                    }]
                });

            function a() {
                var e = i.useExperiment({
                        location: "c519a9_1"
                    }, {
                        autoTrackExposure: !1
                    }).paymentsBlocked,
                    t = u.useExperiment({
                        location: "c519a9_2"
                    }, {
                        autoTrackExposure: !1
                    }).checkPaymentSource,
                    n = (0, o.Z)().defaultBillingCountryCode;
                return e || t && "RU" === n
            }
            const s = i
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
                u = n(520453);

            function a(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        s = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(s) : Promise.resolve(s).then(r, o)
            }

            function s(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            a(i, r, o, u, s, "next", e)
                        }

                        function s(e) {
                            a(i, r, o, u, s, "throw", e)
                        }
                        u(void 0)
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
                var n, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            u.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && u.label < o[1]) {
                                            u.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && u.label < o[2]) {
                                            u.label = o[2];
                                            u.ops.push(i);
                                            break
                                        }
                                        o[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                i = t.call(e, u)
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
                        }([i, a])
                    }
                }
            };

            function p(e) {
                (0, o.ZD)(s((function() {
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
                    onCloseRequest: u.dG,
                    onCloseCallback: e
                })
            }

            function d() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = arguments.length > 1 ? arguments[1] : void 0;
                (0, o.ZD)(s((function() {
                    var t, o;
                    return f(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(84441), n.e(88110), n.e(96844)]).then(n.bind(n, 854104))];
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
                    onCloseRequest: e ? u.dG : null,
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
        165586: (e, t, n) => {
            "use strict";
            n.d(t, {
                LY: () => r,
                aW: () => f,
                ws: () => o,
                tI: () => i,
                L9: () => p,
                no: () => d,
                ND: () => y,
                WC: () => O,
                z8: () => b,
                km: () => S,
                k0: () => _,
                af: () => g
            });
            var r, o, i, u, a = n(2590),
                s = n(203600),
                c = n(473708);

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }! function(e) {
                e[e.RESOLUTION_480 = 480] = "RESOLUTION_480";
                e[e.RESOLUTION_720 = 720] = "RESOLUTION_720";
                e[e.RESOLUTION_1080 = 1080] = "RESOLUTION_1080";
                e[e.RESOLUTION_1440 = 1440] = "RESOLUTION_1440";
                e[e.RESOLUTION_SOURCE = 0] = "RESOLUTION_SOURCE"
            }(r || (r = {}));

            function f(e) {
                switch (e) {
                    case r.RESOLUTION_480:
                        return r.RESOLUTION_480;
                    case r.RESOLUTION_720:
                        return r.RESOLUTION_720;
                    case r.RESOLUTION_1080:
                        return r.RESOLUTION_1080;
                    case r.RESOLUTION_SOURCE:
                        return r.RESOLUTION_SOURCE;
                    default:
                        throw new Error("Unknown resolution: ".concat(e))
                }
            }! function(e) {
                e[e.FPS_5 = 5] = "FPS_5";
                e[e.FPS_15 = 15] = "FPS_15";
                e[e.FPS_30 = 30] = "FPS_30";
                e[e.FPS_60 = 60] = "FPS_60"
            }(o || (o = {}));
            ! function(e) {
                e[e.PRESET_VIDEO = 1] = "PRESET_VIDEO";
                e[e.PRESET_DOCUMENTS = 2] = "PRESET_DOCUMENTS";
                e[e.PRESET_CUSTOM = 3] = "PRESET_CUSTOM"
            }(i || (i = {}));

            function p(e) {
                switch (e) {
                    case o.FPS_5:
                        return o.FPS_5;
                    case o.FPS_15:
                        return o.FPS_15;
                    case o.FPS_30:
                        return o.FPS_30;
                    case o.FPS_60:
                        return o.FPS_60;
                    default:
                        throw new Error("Unknown frame rate: ".concat(e))
                }
            }
            var d = (l(u = {}, i.PRESET_DOCUMENTS, [{
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_15
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_5
                }]), l(u, i.PRESET_VIDEO, [{
                    resolution: r.RESOLUTION_1440,
                    fps: o.FPS_60
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: o.FPS_60
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: o.FPS_60
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: o.FPS_30
                }]), l(u, i.PRESET_CUSTOM, []), u),
                y = [{
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_60,
                    quality: s.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_30,
                    quality: s.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_15,
                    quality: s.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_5,
                    preset: i.PRESET_DOCUMENTS
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: o.FPS_60,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: s.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: o.FPS_30,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: s.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: o.FPS_15,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: s.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: o.FPS_60,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: s.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: o.FPS_30,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: s.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: o.FPS_15,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: s.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: o.FPS_60,
                    guildPremiumTier: a.Eu4.TIER_1,
                    quality: s.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: o.FPS_30
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: o.FPS_15
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: o.FPS_5
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: o.FPS_60,
                    guildPremiumTier: a.Eu4.TIER_1,
                    quality: s.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: o.FPS_30
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: o.FPS_15
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: o.FPS_5
                }];

            function h(e, t) {
                return {
                    value: e,
                    get label() {
                        return null != t ? t() : e
                    }
                }
            }
            var O = [h(r.RESOLUTION_720), h(r.RESOLUTION_1080), h(r.RESOLUTION_1440), h(r.RESOLUTION_SOURCE, (function() {
                    return c.Z.Messages.SCREENSHARE_SOURCE
                }))],
                b = [h(r.RESOLUTION_720), h(r.RESOLUTION_1080), h(r.RESOLUTION_1440)],
                E = function(e) {
                    return "".concat(e, "p")
                },
                S = [h(r.RESOLUTION_480, (function() {
                    return E(r.RESOLUTION_480)
                })), h(r.RESOLUTION_720, (function() {
                    return E(r.RESOLUTION_720)
                })), h(r.RESOLUTION_1080, (function() {
                    return E(r.RESOLUTION_1080)
                })), h(r.RESOLUTION_1440, (function() {
                    return E(r.RESOLUTION_1440)
                })), h(r.RESOLUTION_SOURCE, (function() {
                    return c.Z.Messages.SCREENSHARE_SOURCE
                }))],
                _ = [h(o.FPS_15), h(o.FPS_30), h(o.FPS_60)],
                g = [h(o.FPS_15, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: o.FPS_15
                    })
                })), h(o.FPS_30, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: o.FPS_30
                    })
                })), h(o.FPS_60, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: o.FPS_60
                    })
                }))]
        },
        327930: (e, t, n) => {
            "use strict";
            n.d(t, {
                Jv: () => h,
                M0: () => O,
                Qj: () => b,
                Ao: () => E,
                YO: () => S,
                VO: () => _
            });
            var r = n(61209),
                o = n(567403),
                i = n(682776),
                u = n(968696),
                a = n(2590),
                s = n(897196),
                c = Array.from(s.Vg).map((function(e) {
                    return u.Z.escape(e)
                })).join("|"),
                l = new RegExp("^/channels/(\\d+|".concat(a.ME, ")(?:/)?(\\d+|").concat(c, ")?")),
                f = new RegExp("^/channels/(\\d+|".concat(a.ME, ")(?:/)(\\d+|").concat(c, ")(?:/)(\\d+)")),
                p = new RegExp("^/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)"),
                d = new RegExp("^/guild-stages/(\\d+)(?:/)?(\\d+)?"),
                y = new RegExp("^/events/(\\d+)(?:/)(\\d+)?"),
                h = new RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+|".concat(a.ME, ")(?:/(\\d+|[a-zA-Z-]+))?(?:/(\\d+|[a-zA-Z-]+))?")),
                O = new RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)");

            function b(e) {
                if (null == e) return null;
                var t = e.match(f);
                if (null != t && t.length > 3) return {
                    guildId: t[1],
                    channelId: t[2],
                    messageId: t[3]
                };
                var n = e.match(p);
                if (null != n && n.length > 4) return {
                    guildId: n[1],
                    channelId: n[2],
                    threadId: n[3],
                    messageId: n[4]
                };
                var r = e.match(l);
                if (null != r && r.length > 1) {
                    var o;
                    return {
                        guildId: r[1],
                        channelId: null !== (o = r[2]) && void 0 !== o ? o : void 0
                    }
                }
                var i = e.match(d);
                return null != i && i.length > 1 ? {
                    guildId: i[1]
                } : null
            }

            function E(e) {
                if (null == e) return null;
                var t = e.match(y);
                return null != t && t.length > 1 ? {
                    guildId: t[1],
                    guildEventId: t[2]
                } : null
            }

            function S(e) {
                return !!e.isPrivate() || i.Z.can(a.Plq.VIEW_CHANNEL, e)
            }

            function _(e) {
                var t = e.guildId,
                    n = e.channelId;
                if (null == o.Z.getGuild(t) && t !== a.ME) return !1;
                if (null == n) return !0;
                var i = r.Z.getChannel(n);
                return null != i && S(i)
            }
        },
        577657: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n(785893),
                o = (n(667294), n(264817));

            function i(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        s = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(s) : Promise.resolve(s).then(r, o)
            }

            function u(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var u = e.apply(t, n);

                        function a(e) {
                            i(u, r, o, a, s, "next", e)
                        }

                        function s(e) {
                            i(u, r, o, a, s, "throw", e)
                        }
                        a(void 0)
                    }))
                }
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
            var c = function(e, t) {
                var n, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            u.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && u.label < o[1]) {
                                            u.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && u.label < o[2]) {
                                            u.label = o[2];
                                            u.ops.push(i);
                                            break
                                        }
                                        o[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                i = t.call(e, u)
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
                        }([i, a])
                    }
                }
            };

            function l(e) {
                (0, o.ZD)(u((function() {
                    var t, o;
                    return c(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, n.e(72591).then(n.bind(n, 672591))];
                            case 1:
                                t = i.sent(), o = t.default;
                                return [2, function(t) {
                                    return (0, r.jsx)(o, s(function(e) {
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
                Wo: () => O,
                Gv: () => E,
                vB: () => S
            });
            var r = n(268335),
                o = n(335186),
                i = n(348592),
                u = n(249052),
                a = n(2590),
                s = n(520453),
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
            var d, y = new Set([s.pK.ARS, s.pK.CLP, s.pK.COP]),
                h = new Set([s.pK.USD, s.pK.JPY]),
                O = (f(d = {}, a.HeQ.CARD, (function() {
                        return c.Z.Messages.PAYMENT_SOURCE_CREDIT_CARD_CARD_ONLY
                    })), f(d, a.HeQ.PAYPAL, (function() {
                        return c.Z.Messages.PAYMENT_SOURCE_PAYPAL
                    })), f(d, a.HeQ.SOFORT, (function() {
                        return c.Z.Messages.PAYMENT_SOURCE_SOFORT
                    })), f(d, a.HeQ.GIROPAY, (function() {
                        return c.Z.Messages.PAYMENT_SOURCE_GIROPAY
                    })), f(d, a.HeQ.PRZELEWY24, (function() {
                        return c.Z.Messages.PAYMENT_SOURCE_PRZELEWY24
                    })), f(d, a.HeQ.PAYSAFE_CARD, (function() {
                        return c.Z.Messages.PAYMENT_SOURCE_PAYSAFE_CARD
                    })), f(d, a.HeQ.GCASH, (function() {
                        return c.Z.Messages.PAYMENT_SOURCE_GCASH
                    })), f(d, a.HeQ.GRABPAY_MY, (function() {
                        return c.Z.Messages.PAYMENT_SOURCE_GRABPAY
                    })),
                    f(d, a.HeQ.MOMO_WALLET, (function() {
                        return c.Z.Messages.PAYMENT_SOURCE_MOMO_WALLET
                    })), f(d, a.HeQ.VENMO, (function() {
                        return c.Z.Messages.PAYMENT_SOURCE_VENMO
                    })), f(d, a.HeQ.KAKAOPAY, (function() {
                        return c.Z.Messages.PAYMENT_SOURCE_KAKAOPAY
                    })), f(d, a.HeQ.GOPAY_WALLET, (function() {
                        return c.Z.Messages.PAYMENT_SOURCE_GOPAY_WALLET
                    })), f(d, a.HeQ.BANCONTACT, (function() {
                        return c.Z.Messages.PAYMENT_SOURCE_BANCONTACT
                    })), f(d, a.HeQ.EPS, (function() {
                        return c.Z.Messages.PAYMENT_SOURCE_EPS
                    })), f(d, a.HeQ.IDEAL, (function() {
                        return c.Z.Messages.PAYMENT_SOURCE_IDEAL
                    })), f(d, a.HeQ.CASH_APP, (function() {
                        return c.Z.Messages.PAYMENT_SOURCE_CASH_APP_PAY
                    })), d),
                b = [a.HeQ.EPS, a.HeQ.BANCONTACT, a.HeQ.IDEAL, a.HeQ.SOFORT, a.HeQ.GIROPAY, a.HeQ.SEPA_DEBIT, a.HeQ.PAYSAFE_CARD],
                E = function(e, t, n, r) {
                    if (null == e) return "";
                    var i = (0, o.q9)(e);
                    return t === s.pK.EUR ? n ? c.Z.Messages.LOCALIZED_PRICING_NOTICE_GENERALIZED_PAYMENT_METHODS_PROMO.format({
                        country: i
                    }) : c.Z.Messages.LOCALIZED_PRICING_NOTICE_NO_LOWERED_PRICE.format({
                        currencyISOCode: t.toUpperCase()
                    }) : r ? c.Z.Messages.NOTICE_NITRO_PRICE_CHANGED.format({
                        countryName: i
                    }) : c.Z.Messages.LOCALIZED_PRICING_NOTICE.format({
                        country: i
                    })
                },
                S = function(e) {
                    var t = e.localizedPricingPromo,
                        n = e.subscription,
                        r = e.forceSingleLine,
                        l = void 0 !== r && r,
                        f = e.userLocale,
                        d = t.countryCode,
                        E = t.amount,
                        S = t.currency,
                        g = t.paymentSourceTypes,
                        m = 0 !== g.length,
                        v = _(d),
                        I = (0, u.T4)(E, S, {
                            style: "currency",
                            currency: S,
                            currencyDisplay: "symbol",
                            localeOverride: v
                        }),
                        P = c.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY.format({
                            helpCenterLink: i.Z.getArticleURL(a.BhN.LOCALIZED_PRICING),
                            currencyISOCode: S.toUpperCase(),
                            localizedPriceWithCurrencySymbol: I
                        });
                    h.has(S) && (P = c.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_EXISTING_CURRENCY.format({
                        helpCenterLink: i.Z.getArticleURL(a.BhN.LOCALIZED_PRICING),
                        localizedPriceWithCurrencySymbol: I
                    }));
                    y.has(S) && (P = c.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY_WITH_AMBIGUOUS_SYMBOL.format({
                        helpCenterLink: i.Z.getArticleURL(a.BhN.LOCALIZED_PRICING),
                        currencyISOCode: S.toUpperCase(),
                        localizedPriceWithCurrencySymbol: I
                    }));
                    null == n || n.hasPremiumNitroMonthly || (P = c.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_WITHOUT_PRICE.format({
                        helpCenterLink: i.Z.getArticleURL(a.BhN.LOCALIZED_PRICING),
                        currencyISOCode: S.toUpperCase()
                    }));
                    S === s.pK.EUR && (P = l ? c.Z.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE_SINGLE_STRING.format({
                        country: (0, o.q9)(d),
                        currencyISOCode: S.toUpperCase(),
                        helpCenterLink: i.Z.getArticleURL(a.BhN.LOCALIZED_PRICING)
                    }) : c.Z.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE.format({
                        currencyISOCode: S.toUpperCase(),
                        helpCenterLink: i.Z.getArticleURL(a.BhN.LOCALIZED_PRICING)
                    }));
                    if (m) {
                        var T = b.filter((function(e) {
                                return g.includes(e)
                            })),
                            A = g.filter((function(e) {
                                return !b.includes(e)
                            })),
                            R = p(T).concat(p(A)).slice(0, 2).map((function(e) {
                                var t, n;
                                return null !== (n = null === (t = O[e]) || void 0 === t ? void 0 : t.call(O)) && void 0 !== n ? n : c.Z.Messages.PAYMENT_SOURCE_UNKNOWN
                            }));
                        g.length >= 3 && R.push(c.Z.Messages.LOCALIZED_PRICING_MORE_NEW_WAYS_TO_PAY);
                        var N = new Intl.ListFormat(f, {
                            style: "short",
                            type: "conjunction"
                        });
                        P = c.Z.Messages.LOCALIZED_PRICING_PAYMENT_METHODS_PROMO.format({
                            helpCenterLink: i.Z.getArticleURL(a.BhN.LOCALIZED_PRICING),
                            paymentMethods: N.format(R)
                        })
                    }
                    return {
                        localizedPricingBannerHeader: c.Z.Messages.LOCALIZED_PRICING_BANNER_HEADER.format({
                            country: (0, o.q9)(d)
                        }),
                        localizedPricingBannerBody: P,
                        localizedPricingBannerLinkOnly: c.Z.Messages.LOCALIZED_PRICING_BANNER_LINK_ONLY.format({
                            helpCenterLink: i.Z.getArticleURL(a.BhN.LOCALIZED_PRICING)
                        }),
                        localizedPricingBannerSubNotif: m ? void 0 : c.Z.Messages.LOCALIZED_PRICING_BANNER_SUB_NOTIF
                    }
                },
                _ = function(e) {
                    var t = r.Z.find((function(t) {
                        return t.alpha2 === e
                    }));
                    return null == t ? void 0 : t.localeForICU
                }
        },
        69427: (e, t, n) => {
            "use strict";
            n.d(t, {
                nL: () => r,
                Cj: () => o,
                TD: () => i
            });
            var r, o;
            ! function(e) {
                e[e.DEFAULT = 0] = "DEFAULT";
                e[e.WINTER = 1] = "WINTER"
            }(r || (r = {}));
            ! function(e) {
                e[e.SNOWGLOBE = 1] = "SNOWGLOBE";
                e[e.BOX = 2] = "BOX";
                e[e.CUP = 3] = "CUP";
                e[e.STANDARD_BOX = 4] = "STANDARD_BOX";
                e[e.CAKE = 5] = "CAKE";
                e[e.CHEST = 6] = "CHEST";
                e[e.COFFEE = 7] = "COFFEE"
            }(o || (o = {}));
            var i = Object.freeze({
                IS_BLOCKED_IOS: 32,
                IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS: 64,
                SUPPRESS_NOTIFICATION: 128
            })
        },
        165666: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n(667294),
                o = n(202351),
                i = n(744564),
                u = n(673679),
                a = n(664625),
                s = n(615796),
                c = n(711531);

            function l() {
                var e = (0, o.e7)([c.Z], (function() {
                        return c.Z.getDefaultBillingCountryCode()
                    })),
                    t = (0, o.e7)([s.Z], (function() {
                        return s.Z.ipCountryCode
                    })),
                    n = (0, o.e7)([a.default], (function() {
                        return a.default.isAuthenticated()
                    }));
                r.useEffect((function() {
                    i.Z.wait((function() {
                        !n || s.Z.isPaymentSourceFetching || c.Z.hasFetchedPaymentSources || u.tZ()
                    }))
                }), [n]);
                r.useEffect((function() {
                    n && !s.Z.ipCountryCodeLoaded && u.GE()
                }), [t, n]);
                return {
                    defaultBillingCountryCode: e,
                    ipCountryCode: t
                }
            }
        },
        239620: (e, t, n) => {
            "use strict";
            n.d(t, {
                mv: () => i,
                xJ: () => u
            });
            var r, o = n(120415),
                i = null;

            function u() {
                return (0, o.Dt)(), null
            }! function(e) {
                e.REMINDER = "reminder";
                e.TOP_MESSAGE_PUSH = "top_messages_push";
                e.TRENDING_CONTENT_PUSH = "trending_content_push"
            }(r || (r = {}))
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
        232806: (e, t, n) => {
            "use strict";
            n.d(t, {
                xV: () => i,
                dp: () => u,
                X7: () => a,
                E1: () => s,
                f7: () => c,
                HE: () => l,
                SJ: () => f
            });

            function r(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function o(e, t) {
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
            var i, u;
            ! function(e) {
                e[e.BACKGROUND = 0] = "BACKGROUND"
            }(i || (i = {}));
            ! function(e) {
                e[e.OPTION_1 = 0] = "OPTION_1";
                e[e.OPTION_2 = 1] = "OPTION_2";
                e[e.OPTION_3 = 2] = "OPTION_3";
                e[e.OPTION_4 = 3] = "OPTION_4";
                e[e.OPTION_7 = 7] = "OPTION_7";
                e[e.OPTION_8 = 8] = "OPTION_8";
                e[e.OPTION_9 = 9] = "OPTION_9";
                e[e.OPTION_10 = 10] = "OPTION_10"
            }(u || (u = {}));
            var a = [u.OPTION_7, u.OPTION_8, u.OPTION_9, u.OPTION_10],
                s = [u.OPTION_7, u.OPTION_8, u.OPTION_9, u.OPTION_10, u.OPTION_1, u.OPTION_2, u.OPTION_3, u.OPTION_4].reduce((function(e, t, n) {
                    return o(function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                o = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))));
                            o.forEach((function(t) {
                                r(e, t, n[t])
                            }))
                        }
                        return e
                    }({}, e), r({}, t, n))
                }), {}),
                c = "blur",
                l = {
                    width: 1280,
                    height: 720
                },
                f = 10485760
        },
        205294: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(169376);

            function o(e) {
                o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return o(e)
            }

            function i(e, t) {
                return !t || "object" !== a(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function u(e, t) {
                u = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return u(e, t)
            }
            var a = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function s(e) {
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
                    var n, r = o(e);
                    if (t) {
                        var u = o(this).constructor;
                        n = Reflect.construct(r, arguments, u)
                    } else n = r.apply(this, arguments);
                    return i(this, n)
                }
            }
            const c = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && u(e, t)
                }(n, e);
                var t = s(n);

                function n(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var r;
                    (r = t.call(this)).id = e.id;
                    r.subscriptionId = e.subscriptionId;
                    r.premiumGuildSubscription = e.premiumGuildSubscription;
                    r.canceled = e.canceled;
                    r.cooldownEndsAt = e.cooldownEndsAt;
                    r.subscription = e.subscription;
                    return r
                }
                var r = n.prototype;
                r.isOnCooldown = function() {
                    return null != this.cooldownEndsAt && new Date(this.cooldownEndsAt).getTime() >= Date.now()
                };
                r.isAvailable = function() {
                    return null == this.premiumGuildSubscription && !this.isOnCooldown()
                };
                n.createFromServer = function(e, t) {
                    return new n({
                        id: e.id,
                        subscriptionId: e.subscription_id,
                        premiumGuildSubscription: null != e.premium_guild_subscription ? {
                            id: e.premium_guild_subscription.id,
                            guildId: e.premium_guild_subscription.guild_id
                        } : null,
                        canceled: e.canceled,
                        cooldownEndsAt: e.cooldown_ends_at,
                        subscription: t
                    })
                };
                return n
            }(r.Z)
        },
        50433: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => O
            });
            var r = n(202351),
                o = n(744564);

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return a(e)
            }

            function s(e, t) {
                return !t || "object" !== f(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function c(e, t) {
                c = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return c(e, t)
            }

            function l(e) {
                return function(e) {
                    if (Array.isArray(e)) return i(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return i(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var f = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function p(e) {
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
                    return s(this, n)
                }
            }
            var d = [];

            function y() {
                d = []
            }
            var h = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && c(e, t)
                }(n, e);
                var t = p(n);

                function n() {
                    u(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.hasLayers = function() {
                    return d.length > 0
                };
                r.getLayers = function() {
                    return d
                };
                return n
            }(r.ZP.Store);
            h.displayName = "LayerStore";
            const O = new h(o.Z, {
                LAYER_PUSH: function(e) {
                    var t = e.component;
                    if (d.indexOf(t) >= 0) return !1;
                    d = l(d).concat([t])
                },
                LAYER_POP: function() {
                    if (0 === d.length) return !1;
                    d = d.slice(0, -1)
                },
                LAYER_POP_ALL: y,
                LOGOUT: y,
                NOTIFICATION_CLICK: y
            })
        },
        491260: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => F
            });
            var r = n(110251),
                o = n.n(r),
                i = n(496486),
                u = n.n(i),
                a = n(202351),
                s = n(744564),
                c = n(83797),
                l = n(664625),
                f = n(473903),
                p = n(2590);

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function y(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function h(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function O(e) {
                O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return O(e)
            }

            function b(e, t) {
                return !t || "object" !== g(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function E(e, t) {
                E = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return E(e, t)
            }

            function S(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || m(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function _(e) {
                return function(e) {
                    if (Array.isArray(e)) return d(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || m(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var g = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function m(e, t) {
                if (e) {
                    if ("string" == typeof e) return d(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(e, t) : void 0
                }
            }

            function v(e) {
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
                    var n, r = O(e);
                    if (t) {
                        var o = O(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return b(this, n)
                }
            }
            var I = Object.freeze([]),
                P = {},
                T = {},
                A = {},
                R = {},
                N = {};

            function C(e, t) {
                var n = P[e];
                return null != n ? n[t] : null
            }
            var w = function(e) {
                switch (e.type) {
                    case p.IIU.CUSTOM_STATUS:
                        return 4;
                    case p.IIU.COMPETING:
                        return 3;
                    case p.IIU.STREAMING:
                        return 2;
                    case p.IIU.PLAYING:
                        return 1;
                    default:
                        return 0
                }
            };
            var L = function(e) {
                return (0, c.Z)(e) ? 1 : 0
            };

            function j(e, t) {
                return function(e, t) {
                    return w(t) - w(e)
                }(e, t) || function(e, t) {
                    return L(t) - L(e)
                }(e, t) || function(e, t) {
                    var n, r;
                    return (null !== (n = t.created_at) && void 0 !== n ? n : 0) - (null !== (r = e.created_at) && void 0 !== r ? r : 0)
                }(e, t)
            }

            function M(e) {
                delete T[e];
                delete A[e];
                delete R[e];
                if (null != P[e]) {
                    var t = S(u().sortBy(P[e], (function(e) {
                            return -e.timestamp
                        })), 1),
                        n = t[0];
                    if (n.status !== p.Skl.OFFLINE) {
                        T[e] = n.status;
                        A[e] = n.activities;
                        null != n.clientStatus && (R[e] = n.clientStatus)
                    } else u().every(P[e], (function(e) {
                        return e.status === p.Skl.OFFLINE
                    })) && delete P[e]
                }
            }

            function Z(e) {
                var t = P[e];
                if (null != t) {
                    var n = u().maxBy(Object.values(t), (function(e) {
                        return e.timestamp
                    }));
                    if (n.status !== p.Skl.OFFLINE) {
                        T[e] = n.status;
                        A[e] = n.activities;
                        null != n.clientStatus && (R[e] = n.clientStatus)
                    }
                }
            }

            function U(e) {
                var t = e.guildId,
                    n = e.userId,
                    r = e.status,
                    i = e.clientStatus,
                    u = e.activities;
                if (n === l.default.getId()) return !1;
                var a = P[n];
                if (null == a) {
                    if (r === p.Skl.OFFLINE) return !1;
                    a = P[n] = {}
                }
                if (r === p.Skl.OFFLINE) a[t] = {
                    status: r,
                    clientStatus: i,
                    activities: I,
                    timestamp: Date.now()
                };
                else {
                    var s = u.length > 1 ? _(u).sort(j) : u,
                        c = a[t];
                    u = null != c && o()(c.activities, s) ? c.activities : s;
                    a[t] = {
                        status: r,
                        clientStatus: i,
                        activities: u,
                        timestamp: Date.now()
                    }
                }
                delete N[n];
                M(n);
                return !0
            }

            function D(e) {
                var t = e.guildId,
                    n = e.userId,
                    r = e.status,
                    o = e.clientStatus,
                    i = e.activities,
                    u = e.timestamp;
                if (n !== l.default.getId()) {
                    var a = P[n];
                    if (null == a) {
                        if (r === p.Skl.OFFLINE) return;
                        a = P[n] = {}
                    }
                    if (r === p.Skl.OFFLINE) a[t] = {
                        status: r,
                        clientStatus: o,
                        activities: I,
                        timestamp: Date.now()
                    };
                    else {
                        var s = i.length > 1 ? _(i).sort(j) : i;
                        a[t] = {
                            status: r,
                            clientStatus: o,
                            activities: s,
                            timestamp: u
                        }
                    }
                }
            }

            function x(e, t) {
                if (t === l.default.getId()) return !1;
                var n = P[t];
                if (null == n || null == n[e]) return !1;
                delete n[e];
                0 === Object.keys(n).length && delete P[t];
                M(t)
            }

            function B(e) {
                var t = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var o, i = Object.keys(P)[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                        x(e, o.value)
                    }
                } catch (e) {
                    n = !0;
                    r = e
                } finally {
                    try {
                        t || null == i.return || i.return()
                    } finally {
                        if (n) throw r
                    }
                }
            }
            var k = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && E(e, t)
                }(n, e);
                var t = v(n);

                function n() {
                    y(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(l.default)
                };
                r.setCurrentUserOnConnectionOpen = function(e, t) {
                    T[l.default.getId()] = e;
                    A[l.default.getId()] = t
                };
                r.getStatus = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p.Skl.OFFLINE,
                        r = f.default.getUser(e);
                    null != r && r.hasFlag(p.xW$.BOT_HTTP_INTERACTIONS) && (n = p.Skl.UNKNOWN);
                    if (null == r ? void 0 : r.isClyde()) return p.Skl.ONLINE;
                    if (null == t) {
                        var o;
                        return null !== (o = T[e]) && void 0 !== o ? o : n
                    }
                    var i, u = C(e, t);
                    return null !== (i = null == u ? void 0 : u.status) && void 0 !== i ? i : n
                };
                r.getActivities = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == t) {
                        var n;
                        return null !== (n = A[e]) && void 0 !== n ? n : I
                    }
                    var r = C(e, t);
                    return null == r || null == r.activities ? I : r.activities
                };
                r.getPrimaryActivity = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = this.getActivities(e, t);
                    return n[0]
                };
                r.getAllApplicationActivities = function(e) {
                    var t = [],
                        n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var i, u = Object.keys(A)[Symbol.iterator](); !(n = (i = u.next()).done); n = !0) {
                            var a = i.value,
                                s = A[a],
                                c = !0,
                                l = !1,
                                f = void 0;
                            try {
                                for (var p, d = s[Symbol.iterator](); !(c = (p = d.next()).done); c = !0) {
                                    var y = p.value;
                                    y.application_id === e && t.push({
                                        userId: a,
                                        activity: y
                                    })
                                }
                            } catch (e) {
                                l = !0;
                                f = e
                            } finally {
                                try {
                                    c || null == d.return || d.return()
                                } finally {
                                    if (l) throw f
                                }
                            }
                        }
                    } catch (e) {
                        r = !0;
                        o = e
                    } finally {
                        try {
                            n || null == u.return || u.return()
                        } finally {
                            if (r) throw o
                        }
                    }
                    return t
                };
                r.getApplicationActivity = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return this.findActivity(e, (function(e) {
                        return e.application_id === t
                    }), n)
                };
                r.findActivity = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return this.getActivities(e, n).find(t)
                };
                r.getActivityMetadata = function(e) {
                    return N[e]
                };
                r.getUserIds = function() {
                    return Object.keys(A)
                };
                r.isMobileOnline = function(e) {
                    var t = R[e];
                    return null != t && t[p.X5t.MOBILE] === p.Skl.ONLINE && t[p.X5t.DESKTOP] !== p.Skl.ONLINE
                };
                r.getState = function() {
                    return {
                        presencesForGuilds: P,
                        statuses: T,
                        activities: A,
                        activityMetadata: N,
                        clientStatuses: R
                    }
                };
                return n
            }(a.ZP.Store);
            k.displayName = "PresenceStore";
            const F = new k(s.Z, {
                CONNECTION_OPEN: function() {
                    return !0
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
                    var t = e.guilds,
                        n = e.presences,
                        r = l.default.getId();
                    P = {};
                    N = {};
                    T = h({}, r, T[r]);
                    A = h({}, r, A[r]);
                    R = h({}, r, {});
                    var o = new Set,
                        i = Date.now();
                    t.forEach((function(e) {
                        e.presences.forEach((function(t) {
                            var n = t.user,
                                r = t.status,
                                u = t.clientStatus,
                                a = t.activities;
                            D({
                                guildId: e.id,
                                userId: n.id,
                                status: r,
                                clientStatus: u,
                                activities: a,
                                timestamp: i
                            });
                            o.add(n.id)
                        }))
                    }));
                    n.forEach((function(e) {
                        var t = e.user,
                            n = e.status,
                            r = e.clientStatus,
                            u = e.activities;
                        if (null != t) {
                            D({
                                guildId: p.ME,
                                userId: t.id,
                                status: n,
                                clientStatus: r,
                                activities: u,
                                timestamp: i
                            });
                            o.add(t.id)
                        }
                    }));
                    o.delete(r);
                    o.forEach(Z)
                },
                OVERLAY_INITIALIZE: function(e) {
                    var t = e.presences;
                    P = t.presencesForGuilds;
                    T = t.statuses;
                    A = t.activities;
                    N = t.activityMetadata
                },
                GUILD_CREATE: function(e) {
                    var t = e.guild;
                    t.presences.forEach((function(e) {
                        var n = e.user,
                            r = e.status,
                            o = e.clientStatus,
                            i = e.activities;
                        U({
                            guildId: t.id,
                            userId: n.id,
                            status: r,
                            clientStatus: o,
                            activities: i
                        })
                    }))
                },
                GUILD_DELETE: function(e) {
                    B(e.guild.id)
                },
                GUILD_MEMBER_REMOVE: function(e) {
                    return x(e.guildId, e.user.id)
                },
                PRESENCE_UPDATES: function(e) {
                    return e.updates.map((function(e) {
                        var t = e.guildId,
                            n = e.user,
                            r = e.status,
                            o = e.clientStatus,
                            i = e.activities;
                        return U({
                            guildId: null != t ? t : p.ME,
                            userId: n.id,
                            status: r,
                            clientStatus: o,
                            activities: i
                        })
                    })).some((function(e) {
                        return e
                    }))
                },
                PRESENCES_REPLACE: function(e) {
                    var t = e.presences;
                    B(p.ME);
                    t.forEach((function(e) {
                        var t = e.user,
                            n = e.status,
                            r = e.clientStatus,
                            o = e.activities;
                        null != t && U({
                            guildId: p.ME,
                            userId: t.id,
                            status: n,
                            clientStatus: r,
                            activities: o
                        })
                    }))
                },
                ACTIVITY_METADATA_UPDATE: function(e) {
                    var t = e.userId,
                        n = e.metadata;
                    N[t] = n;
                    return !1
                },
                THREAD_MEMBER_LIST_UPDATE: function(e) {
                    var t = e.guildId;
                    e.members.forEach((function(e) {
                        null != e.presence && U({
                            guildId: t,
                            userId: e.user_id,
                            status: e.presence.status,
                            clientStatus: e.presence.clientStatus,
                            activities: e.presence.activities
                        })
                    }))
                },
                THREAD_MEMBERS_UPDATE: function(e) {
                    var t = e.guildId,
                        n = e.addedMembers;
                    null == n || n.forEach((function(e) {
                        null != e.presence && U({
                            guildId: t,
                            userId: e.userId,
                            status: e.presence.status,
                            clientStatus: e.presence.clientStatus,
                            activities: e.presence.activities
                        })
                    }))
                },
                SELF_PRESENCE_STORE_UPDATE: function(e) {
                    var t = l.default.getId();
                    if (T[t] === e.status && A[t] === e.activities) return !1;
                    T[t] = e.status;
                    A[t] = e.activities;
                    delete N[t]
                }
            })
        },
        239734: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => S
            });
            var r = n(202351),
                o = n(744564),
                i = n(840922);

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

            function s(e) {
                s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return s(e)
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
                    var n, r = s(e);
                    if (t) {
                        var o = s(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return l(this, n)
                }
            }
            var y = !1,
                h = Object.freeze({
                    userAffinities: [],
                    affinityUserIds: new Set,
                    lastFetched: 0
                }),
                O = c({}, h);

            function b() {
                O.affinityUserIds = new Set(O.userAffinities.map((function(e) {
                    return e.user_id
                })).filter((function(e) {
                    return !i.Z.isBlocked(e)
                })))
            }
            var E = function(e) {
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
                    this.waitFor(i.Z);
                    if (null != e) {
                        O.userAffinities = e.userAffinities;
                        O.affinityUserIds = new Set(e.affinityUserIds);
                        O.lastFetched = e.lastFetched
                    }
                    this.syncWith([i.Z], b)
                };
                r.needsRefresh = function() {
                    return Date.now() - O.lastFetched > 864e5
                };
                r.getFetching = function() {
                    return y
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
                return n
            }(r.ZP.PersistedStore);
            E.displayName = "UserAffinitiesStore";
            E.persistKey = "UserAffinitiesStore";
            E.migrations = [function(e) {
                return null
            }];
            const S = new E(o.Z, {
                LOAD_USER_AFFINITIES_SUCCESS: function(e) {
                    var t, n = e.affinities;
                    O.userAffinities = null !== (t = n.user_affinities) && void 0 !== t ? t : [];
                    O.lastFetched = Date.now();
                    b();
                    y = !1
                },
                LOAD_USER_AFFINITIES: function() {
                    y = !0
                },
                LOAD_USER_AFFINITIES_FAILURE: function() {
                    y = !1
                },
                LOGOUT: function() {
                    O = c({}, h)
                }
            })
        },
        223219: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => x
            });
            var r = n(496486),
                o = n.n(r),
                i = n(202351),
                u = n(744564),
                a = n(473903),
                s = n(2590);

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
                return !t || "object" !== O(t) && "function" != typeof t ? function(e) {
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
            var O = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function b(e) {
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
            var E = s.QZA.CLOSED,
                S = null,
                _ = null,
                g = {},
                m = {},
                v = {},
                I = null,
                P = null,
                T = !1,
                A = !1,
                R = null,
                N = null,
                C = null,
                w = [],
                L = null,
                j = null;

            function M(e) {
                var t, n, r, o, i, u, c = a.default.getCurrentUser();
                if (null == c) return Z();
                _ = null !== (t = e.section) && void 0 !== t ? t : _;
                L = null !== (n = e.section) && void 0 !== n ? n : _;
                null != e.subsection && null != _ && (g[_] = e.subsection);
                null != e.scrollPosition && null != _ && (m[_] = e.scrollPosition);
                A = !!e.openWithoutBackstack;
                E = s.QZA.OPEN;
                v = {};
                I = f({}, s.oAB.ACCOUNT, {
                    userId: c.id,
                    username: c.username,
                    discriminator: c.discriminator,
                    email: c.email,
                    avatar: c.avatar,
                    password: "",
                    newPassword: null,
                    claimed: c.isClaimed()
                });
                P = d({}, I);
                N = null !== (r = e.onClose) && void 0 !== r ? r : null;
                C = null !== (o = e.analyticsLocation) && void 0 !== o ? o : null;
                w = null !== (i = e.analyticsLocations) && void 0 !== i ? i : [];
                j = null !== (u = e.impressionSource) && void 0 !== u ? u : null
            }

            function Z() {
                E = s.QZA.CLOSED;
                T = !1;
                I = null;
                L = null;
                P = null;
                S = null;
                _ = null;
                g = {};
                m = {};
                N = null;
                C = null;
                w = [];
                j = null
            }

            function U() {
                E = s.QZA.OPEN;
                v = {}
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
                var t = b(n);

                function n() {
                    c(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(a.default)
                };
                r.hasChanges = function() {
                    return null != P && null != I && (!(!this.isOpen() && R !== s.cII.USER_SETTINGS) && !o().isEqual(P, I))
                };
                r.isOpen = function() {
                    return T
                };
                r.getPreviousSection = function() {
                    return S
                };
                r.getSection = function() {
                    return _
                };
                r.getSubsection = function() {
                    return null != _ ? g[_] : null
                };
                r.getScrollPosition = function() {
                    return null != _ ? m[_] : null
                };
                r.shouldOpenWithoutBackstack = function() {
                    return A
                };
                r.getProps = function() {
                    return {
                        submitting: E === s.QZA.SUBMITTING,
                        section: _,
                        subsection: null != _ ? g[_] : null,
                        scrollPosition: null != _ ? m[_] : null,
                        settings: P,
                        errors: v,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: A,
                        analyticsLocation: C,
                        analyticsLocations: w,
                        initialSection: L,
                        impressionSource: j
                    }
                };
                ! function(e, t, n) {
                    t && l(e.prototype, t);
                    n && l(e, n)
                }(n, [{
                    key: "onClose",
                    get: function() {
                        return N
                    }
                }]);
                return n
            }(i.ZP.Store);
            D.displayName = "UserSettingsModalStore";
            const x = new D(u.Z, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    T = !0;
                    M(e)
                },
                USER_SETTINGS_MODAL_INIT: M,
                USER_SETTINGS_MODAL_CLOSE: Z,
                LOGOUT: Z,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    E = s.QZA.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    if (E !== s.QZA.SUBMITTING) return !1;
                    E = s.QZA.OPEN;
                    _ = s.oAB.ACCOUNT;
                    var t;
                    v = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    S = _;
                    _ = e.section;
                    C = null;
                    var t;
                    w = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [];
                    null != e.subsection && (g[_] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    var t = e.forSection;
                    null != t ? delete g[t] : null != _ && delete g[_]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
                    var t = e.forSection;
                    null != t ? delete m[t] : null != _ && delete m[_]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
                    var t = e.settings;
                    null == P && (P = {});
                    var n = P[s.oAB.ACCOUNT];
                    P[s.oAB.ACCOUNT] = d({}, n, t)
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: U,
                USER_SETTINGS_MODAL_RESET: function() {
                    var e = a.default.getCurrentUser();
                    U();
                    if (null != e) {
                        I = f({}, s.oAB.ACCOUNT, {
                            userId: e.id,
                            username: e.username,
                            discriminator: e.discriminator,
                            email: e.email,
                            avatar: e.avatar,
                            password: "",
                            newPassword: null,
                            claimed: e.isClaimed()
                        });
                        P = d({}, I)
                    }
                },
                DRAWER_SELECT_TAB: function(e) {
                    R = e.tab;
                    return null == _ && R === s.cII.USER_SETTINGS && M({
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
                Z: () => b
            });
            var r = n(202351),
                o = n(744564);

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function u(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
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

            function s(e) {
                s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return s(e)
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
                    var n, r = s(e);
                    if (t) {
                        var o = s(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return l(this, n)
                }
            }
            var y, h = {
                hasAcceptedStoreTerms: !1,
                hasAcceptedEulaIds: []
            };
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
                ! function(e, t, n) {
                    t && u(e.prototype, t);
                    n && u(e, n)
                }(n, [{
                    key: "hasAcceptedStoreTerms",
                    get: function() {
                        return y.hasAcceptedStoreTerms
                    }
                }]);
                return n
            }(r.ZP.PersistedStore);
            O.displayName = "ApplicationStoreUserSettingsStore";
            O.persistKey = "ApplicationStoreUserSettingsStore";
            O.migrations = [function(e) {
                return null == e.hasAcceptedEulaIds ? c(function(e) {
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
                }({}, e), {
                    hasAcceptedEulaIds: []
                }) : e
            }];
            const b = new O(o.Z, {
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
        669426: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => S
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                u = n.n(i),
                a = n(304548),
                s = n(107364),
                c = n(718831),
                l = n(70821),
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
                return !t || "object" !== b(t) && "function" != typeof t ? function(e) {
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
            var b = function(e) {
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
            const S = function(e) {
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
                var t = E(n);

                function n() {
                    p(this, n);
                    var e;
                    (e = t.apply(this, arguments)).renderBreadcrumb = function(t, n) {
                        var o, i = e.props,
                            s = i.activeId,
                            l = i.onBreadcrumbClick,
                            p = i.breadcrumbs,
                            y = i.renderCustomBreadcrumb,
                            h = i.separatorClassName,
                            O = t.id === s,
                            b = n === p.length - 1,
                            E = null != y ? y(t, O) : (0, r.jsx)("span", {
                                className: u()(f().breadcrumb, (o = {}, d(o, f().activeBreadcrumb, O), d(o, f().interactiveBreadcrumb, null != l), o)),
                                children: t.label
                            });
                        return (0,
                            r.jsxs)("div", {
                            className: u()(f().breadcrumbWrapper, d({}, f().breadcrumbFinalWrapper, b)),
                            children: [null != l ? (0, r.jsx)(a.Clickable, {
                                tag: "span",
                                onClick: function() {
                                    return e.handleClick(t)
                                },
                                className: f().breadcrumbClickWrapper,
                                children: E
                            }) : E, b ? null : (0, r.jsx)(c.Z, {
                                className: u()(f().breadcrumbArrow, h),
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
                    return (0, r.jsx)(s.Z, {
                        justify: s.Z.Justify.START,
                        className: u()(f().breadcrumbs, n),
                        children: o
                    })
                };
                return n
            }(o.PureComponent)
        },
        459940: (e, t, n) => {
            "use strict";
            n.d(t, {
                u: () => _,
                Z: () => m
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                u = n.n(i),
                a = n(304548),
                s = n(990554),
                c = n(107364),
                l = n(473708),
                f = n(716523),
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

            function O(e, t) {
                return !t || "object" !== E(t) && "function" != typeof t ? function(e) {
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
            var E = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function S(e) {
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
                    return O(this, n)
                }
            }
            var _ = {
                    DEFAULT: "default",
                    SUCCESS: "success",
                    ERROR: "error"
                },
                g = function(e) {
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
                    var t = S(n);

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
                            a = null === (t = this.context) || void 0 === t ? void 0 : t.titleId;
                        return (0, r.jsx)("input", {
                            className: u()((0, s.l)(p(), "input", i), y({}, p().inputHidden, e)),
                            ref: this.inputRef,
                            type: "text",
                            value: o,
                            onClick: this.handleInputClick,
                            readOnly: !0,
                            "aria-labelledby": a
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
                            case _.SUCCESS:
                                e = a.ButtonColors.GREEN;
                                break;
                            case _.ERROR:
                                e = a.ButtonColors.RED;
                                break;
                            default:
                                e = this.props.buttonColor
                        }
                        return (0, r.jsx)(a.FocusRing, {
                            focusTarget: this.inputRef,
                            ringTarget: this.containerRef,
                            children: (0, r.jsx)("div", {
                                className: u()((0, s.l)(p(), "copyInput", i), d),
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
                                        children: (0, r.jsx)(a.Button, {
                                            className: p().button,
                                            onClick: this.handleButtonClick,
                                            size: a.ButtonSizes.MIN,
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
            g.contextType = a.FormContext;
            g.defaultProps = {
                supportsCopy: !0,
                buttonColor: a.ButtonColors.PRIMARY,
                buttonLook: a.ButtonLooks.FILLED,
                mode: _.DEFAULT
            };
            g.Modes = _;
            g.ButtonColors = a.ButtonColors;
            g.ButtonLooks = a.ButtonLooks;
            const m = g
        },
        750203: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => N
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                u = n.n(i),
                a = n(269116);

            function s(e, t) {
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
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return s(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var l = n(124251),
                f = n(168075),
                p = n(795308),
                d = n(633878);

            function y(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function h(e, t) {
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

            function O(e, t) {
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

            function b(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function E(e, t) {
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

            function S(e, t) {
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
            const _ = (0, f.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    u = e.color,
                    a = void 0 === u ? "currentColor" : u,
                    s = e.foreground,
                    c = S(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", E(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            b(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, d.Z)(c)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 40 40",
                    children: (0, r.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, r.jsx)("path", {
                            className: s,
                            fill: a,
                            fillOpacity: ".8",
                            d: "M21.226 30v-4.154h-3.755V30h3.755zm-.512-8.62c3.67-1.337 5.718-2.959 5.718-6.145 0-3.272-2.36-5.235-6.088-5.235-2.589 0-4.637.825-6.344 2.048l.484 3.3c1.621-1.251 3.47-2.162 5.49-2.162 1.707 0 2.845.854 2.845 2.305 0 1.593-1.08 2.475-3.812 3.442l-.882.342.342 4.523 2.076-.455.171-1.963z"
                        }), (0, r.jsx)("rect", {
                            className: s,
                            width: "38",
                            height: "38",
                            x: "1",
                            y: "1",
                            stroke: a,
                            strokeOpacity: ".4",
                            strokeWidth: "2",
                            rx: "5"
                        }), (0, r.jsx)("circle", {
                            className: s,
                            cx: "7",
                            cy: "7",
                            r: "2",
                            fill: a,
                            fillOpacity: ".4"
                        }), (0, r.jsx)("circle", {
                            className: s,
                            cx: "7",
                            cy: "33",
                            r: "2",
                            fill: a,
                            fillOpacity: ".4"
                        }), (0, r.jsx)("circle", {
                            className: s,
                            cx: "33",
                            cy: "7",
                            r: "2",
                            fill: a,
                            fillOpacity: ".4"
                        }), (0, r.jsx)("circle", {
                            className: s,
                            cx: "33",
                            cy: "33",
                            r: "2",
                            fill: a,
                            fillOpacity: ".4"
                        })]
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    u = e.color,
                    a = void 0 === u ? p.Z.colors.INTERACTIVE_NORMAL : u,
                    s = e.colorClass,
                    c = void 0 === s ? "" : s,
                    l = O(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", h(function(e) {
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
                }({}, (0, d.Z)(l)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: i,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm6.813 7c-.548 0-.997.263-1.238.615a1 1 0 0 1-1.65-1.13C9.548 7.576 10.623 7 11.812 7c1.822 0 3.438 1.381 3.438 3.25 0 1.454-.977 2.612-2.27 3.055l.003.01a1 1 0 0 1-1.966.37l-.187-1a1 1 0 0 1 .982-1.185c.871 0 1.438-.633 1.438-1.25S12.683 9 11.812 9ZM13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm7-10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM18.5 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM7 18.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM5.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
                        clipRule: "evenodd",
                        className: c
                    })
                }))
            }));
            var g = n(203600),
                m = n(605254),
                v = n.n(m);

            function I(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function P(e, t) {
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

            function T(e, t) {
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
                XSMALL: v().xsmall,
                SMALL: v().small,
                MEDIUM: v().medium,
                LARGE: v().large
            };
            var R = function(e) {
                var t, i = e.game,
                    s = e.guild,
                    f = e.skuId,
                    p = e.pid,
                    d = e.className,
                    y = e.guildClassName,
                    h = e.size,
                    O = void 0 === h ? A.MEDIUM : h,
                    b = T(e, ["game", "guild", "skuId", "pid", "className", "guildClassName", "size"]);
                null != f && (t = function(e) {
                    if (null == e) return null;
                    switch (e) {
                        case g.Si.GUILD:
                            return n(460122);
                        case g.Si.TIER_0:
                            return n(873994);
                        case g.Si.TIER_1:
                            return n(413369);
                        case g.Si.TIER_2:
                        case g.Si.LEGACY:
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
                }(O)));
                t = function(e, t) {
                    var n = c(o.useState(), 2),
                        r = n[0],
                        i = n[1];
                    o.useEffect((function() {
                        null != e && null == t ? (0, a.Z)().then((function(t) {
                            null != t && t.identifyGame(e, (function(e, t) {
                                0 === e && null != t.icon && "" !== t.icon && null != t.name && "" !== t.name && i("data:image/png;base64,".concat(t.icon))
                            }))
                        })) : i(void 0)
                    }), [e, t]);
                    return null != t ? t : r
                }(p, t);
                if (null == t && null != s) {
                    var E = function(e) {
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
                    }(O);
                    return (0, r.jsx)(l.Z, {
                        className: u()(v().gameIcon, y, d),
                        guild: s,
                        size: E
                    })
                }
                return null == t ? (0, r.jsx)(_, {
                    className: u()(v().gameIcon, O, d)
                }) : (0, r.jsx)("div", P(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            I(e, t, n[t])
                        }))
                    }
                    return e
                }({}, b), {
                    className: u()(v().gameIcon, O, d),
                    style: {
                        backgroundImage: "url('".concat(t, "')")
                    }
                }))
            };
            R.Sizes = A;
            const N = R
        },
        709189: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => R,
                C: () => C
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                u = n.n(i),
                a = n(853158),
                s = n(304548),
                c = n(662478),
                l = n(107364),
                f = n(998933),
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

            function O(e) {
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

            function S(e, t) {
                return !t || "object" !== v(t) && "function" != typeof t ? function(e) {
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
            var g, m, v = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function I(e) {
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
                    return S(this, n)
                }
            }! function(e) {
                e.DEFAULT = "default";
                e.SMALL = "small"
            }(g || (g = {}));
            var P, T = (y(m = {}, g.DEFAULT, p().shineDefault), y(m, g.SMALL, p().shineSmall), m),
                A = (y(P = {}, g.DEFAULT, p().shineInnerDefault), y(P, g.SMALL, p().shineInnerSmall), P),
                R = function(e) {
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
                    var t = I(n);

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
                        return (0, r.jsx)(a.Z.div, b(O({}, i), {
                            className: u()(p().shineContainer, t, y({}, p().shinePaused, o)),
                            children: (0, r.jsx)(l.Z, {
                                align: l.Z.Align.CENTER,
                                justify: l.Z.Justify.CENTER,
                                className: T[n],
                                children: (0, r.jsx)("div", {
                                    className: A[n]
                                })
                            })
                        }))
                    };
                    return n
                }(o.PureComponent);
            R.defaultProps = {
                shineSize: g.DEFAULT
            };
            var N = function(e) {
                var t = e.children,
                    n = e.className,
                    i = e.disabled,
                    a = e.submitting,
                    l = e.pauseAnimation,
                    f = e.shineSize,
                    d = void 0 === f ? g.DEFAULT : f,
                    y = e.shinePaused,
                    h = e.buttonShineClassName,
                    S = e.onlyShineOnHover,
                    _ = E(e, ["children", "className", "disabled", "submitting", "pauseAnimation", "shineSize", "shinePaused", "buttonShineClassName", "onlyShineOnHover"]),
                    m = o.createRef(),
                    v = (0, c.Z)(m),
                    I = !i && !a && !0 !== l && (!S || v);
                return (0, r.jsxs)(s.Button, b(O({
                    buttonRef: m
                }, _), {
                    className: u()(p().shinyButton, n),
                    disabled: i,
                    submitting: a,
                    children: [t, I ? (0, r.jsx)(R, {
                        shinePaused: y,
                        className: u()(p().buttonShine, S ? p().onlyShineOnHover : void 0, h),
                        shineSize: d
                    }) : null]
                }))
            };
            N.ShineSizes = g;
            const C = N
        },
        443812: (e, t, n) => {
            "use strict";
            n.d(t, {
                hQ: () => u,
                Dt: () => a,
                FG: () => s
            });
            var r = n(873955),
                o = n.n(r),
                i = n(989824),
                u = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return o()(e)
                },
                a = function() {
                    return (0, i.Z)((function() {
                        return u()
                    }))
                },
                s = function(e) {
                    return (0, e.children)(a())
                }
        },
        718831: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => _
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                u = n(713068),
                a = n(388054),
                s = n(319497),
                c = n(67183),
                l = n(304548),
                f = n(633878),
                p = n(794308),
                d = n.n(p);

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

            function b(e, t) {
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
            var E = {
                    UP: d().directionUp,
                    RIGHT: d().directionRight,
                    DOWN: d().directionDown,
                    LEFT: d().directionLeft
                },
                S = function(e) {
                    var t = e.direction,
                        n = void 0 === t ? E.DOWN : t,
                        o = e.width,
                        p = void 0 === o ? 24 : o,
                        S = e.height,
                        _ = void 0 === S ? 24 : S,
                        g = e.color,
                        m = void 0 === g ? "currentColor" : g,
                        v = e.transition,
                        I = void 0 === v ? d().transition : v,
                        P = e.className,
                        T = e.foreground,
                        A = e.expanded,
                        R = b(e, ["direction", "width", "height", "color", "transition", "className", "foreground", "expanded"]),
                        N = (0, l.useRedesignIconContext)().enabled,
                        C = n;
                    !0 === A ? C = E.DOWN : !1 === A && (C = E.RIGHT);
                    if (N) {
                        var w, L = (w = {}, y(w, E.UP, c.u),
                            y(w, E.DOWN, u.C), y(w, E.LEFT, a.V), y(w, E.RIGHT, s.F), w)[C];
                        return (0, r.jsx)(L, O(h({}, R), {
                            className: P,
                            width: p,
                            height: _,
                            color: m,
                            colorClass: T
                        }))
                    }
                    return (0, r.jsx)("svg", O(h({
                        className: i()(P, I, C),
                        width: p,
                        height: _,
                        viewBox: "0 0 24 24"
                    }, (0, f.Z)(R)), {
                        children: (0, r.jsx)("path", {
                            className: T,
                            fill: "none",
                            stroke: m,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M7 10L12 15 17 10",
                            "aria-hidden": !0
                        })
                    }))
                };
            S.Directions = E;
            const _ = S
        },
        822511: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => d
            });
            var r = n(785893),
                o = (n(667294), n(168075)),
                i = n(795308),
                u = n(633878);

            function a(e, t, n) {
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

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
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
            const d = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 16 : t,
                    o = e.height,
                    i = void 0 === o ? 16 : o,
                    a = e.color,
                    s = void 0 === a ? "currentColor" : a,
                    c = e.foreground,
                    d = p(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", f(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            l(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, u.Z)(d)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 18 20",
                    children: (0, r.jsx)("path", {
                        className: c,
                        fill: s,
                        d: "M15,15H3V13H15Zm0-4H3V9H15Zm0-4H3V5H15ZM0,20l1.5-1.5L3,20l1.5-1.5L6,20l1.5-1.5L9,20l1.5-1.5L12,20l1.5-1.5L15,20l1.5-1.5L18,20V0L16.5,1.5,15,0,13.5,1.5,12,0,10.5,1.5,9,0,7.5,1.5,6,0,4.5,1.5,3,0,1.5,1.5,0,0Z"
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    l = void 0 === o ? 24 : o,
                    f = e.color,
                    p = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    d = e.colorClass,
                    y = void 0 === d ? "" : d,
                    h = c(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", s(function(e) {
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
                }({}, (0, u.Z)(h)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0,
                        r.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M21 21.934V2.067a1 1 0 0 0-1.268-.964l-2.51.698a3 3 0 0 1-1.454.038l-3.117-.693a3 3 0 0 0-1.302 0l-3.117.693A3 3 0 0 1 6.778 1.8l-2.51-.698A1 1 0 0 0 3 2.066v19.868a1 1 0 0 0 1.268.964l2.51-.697a3 3 0 0 1 1.454-.038l3.117.692c.429.096.873.096 1.302 0l3.117-.692a3 3 0 0 1 1.454.038l2.51.697A1 1 0 0 0 21 21.935ZM7 8a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Zm-1 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm8-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1Z",
                        clipRule: "evenodd",
                        className: y
                    })
                }))
            }))
        },
        856236: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
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

            function u(e, t) {
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

            function a(e, t) {
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

            function s(e) {
                var t = e.width,
                    n = void 0 === t ? 14 : t,
                    s = e.height,
                    c = void 0 === s ? 14 : s,
                    l = e.color,
                    f = void 0 === l ? "currentColor" : l,
                    p = e.foreground,
                    d = a(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", u(function(e) {
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
                NG: () => O,
                mA: () => b,
                IG: () => E,
                lB: () => S,
                G2: () => _,
                fW: () => g
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                u = (n(304548), n(87931)),
                a = (n(473708), n(800624)),
                s = n.n(a);

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
                ROUND: s().baseShapeRound,
                ROUND_LEFT: s().baseShapeRoundLeft,
                ROUND_RIGHT: s().baseShapeRoundRight,
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

            function O(e) {
                return e < 1e3 ? "".concat(e) : "".concat(Math.min(Math.floor(e / 1e3), 9), "k+")
            }
            var b = function(e) {
                    var t = e.count,
                        n = e.color,
                        o = void 0 === n ? u.Z.STATUS_DANGER : n,
                        a = e.disableColor,
                        c = void 0 !== a && a,
                        b = e.shape,
                        E = void 0 === b ? d.ROUND : b,
                        S = e.className,
                        _ = e.style,
                        g = p(e, ["count", "color", "disableColor", "shape", "className", "style"]);
                    return (0, r.jsx)("div", f(l({
                        className: i()(S, s().numberBadge, E),
                        style: l({
                            backgroundColor: c ? void 0 : o,
                            width: h(t),
                            paddingRight: y(t)
                        }, _)
                    }, g), {
                        children: O(t)
                    }))
                },
                E = function(e) {
                    var t = e.text,
                        n = e.className,
                        o = e.color,
                        a = void 0 === o ? u.Z.STATUS_DANGER : o,
                        c = e.shape,
                        y = void 0 === c ? d.ROUND : c,
                        h = e.disableColor,
                        O = void 0 !== h && h,
                        b = e.style,
                        E = p(e, ["text", "className", "color", "shape", "disableColor", "style"]);
                    return (0, r.jsx)("div", f(l({
                        className: i()(n, s().textBadge, y),
                        style: l({
                            backgroundColor: O ? void 0 : a
                        }, b)
                    }, E), {
                        children: t
                    }))
                },
                S = function(e) {
                    var t = e.text,
                        n = e.className,
                        o = p(e, ["text", "className"]);
                    return (0, r.jsx)(E, l({
                        className: i()(s().premiumBadge, n),
                        text: t
                    }, o))
                },
                _ = function(e) {
                    var t = e.icon,
                        n = e.className,
                        o = e.color,
                        a = void 0 === o ? u.Z.STATUS_DANGER : o,
                        c = e.shape,
                        f = void 0 === c ? d.ROUND : c,
                        p = e.disableColor,
                        y = void 0 !== p && p,
                        h = e.style;
                    return (0, r.jsx)("div", {
                        className: i()(n, s().iconBadge, f),
                        style: l({
                            backgroundColor: y ? void 0 : a
                        }, h),
                        children: (0, r.jsx)(t, {
                            className: s().icon
                        })
                    })
                },
                g = function(e) {
                    var t = e.className,
                        n = e.color,
                        o = void 0 === n ? u.Z.INTERACTIVE_ACTIVE : n,
                        a = e.shape,
                        c = void 0 === a ? d.ROUND : a,
                        f = e.disableColor,
                        y = void 0 !== f && f,
                        h = e.style,
                        O = p(e, ["className", "color", "shape", "disableColor", "style"]);
                    return (0,
                        r.jsx)("div", l({
                        className: i()(t, s().circleBadge, c),
                        style: l({
                            backgroundColor: y ? void 0 : o
                        }, h)
                    }, O))
                }
        },
        691797: (e, t, n) => {
            "use strict";
            n.d(t, {
                wS: () => u,
                JG: () => a
            });
            var r = n(482507),
                o = n(120415),
                i = n(310126),
                u = function() {
                    if (o.FB) return null != i.ZP.copy;
                    try {
                        return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                    } catch (e) {
                        return !1
                    }
                }();

            function a(e) {
                if (!u) return !1;
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
                u = n(473708);

            function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function s(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
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
            var c = /^\d+$/,
                l = /^(.+?@.+?\..+?|.+?#\d{4})$/,
                f = /^[a-zA-Z0-9_\\.]+$/;

            function p(e) {
                if (f.test(e)) return null;
                if (e.includes("#") && l.test(e)) return null;
                ! function(e) {
                    var t = s(e.split("#"), 2),
                        n = t[0],
                        u = t[1];
                    r.default.track(i.rMx.FRIEND_REQUEST_FAILED, {
                        reason: "Invalid Username",
                        query: e,
                        discrim_len: (null != u ? u : "").length,
                        username_len: n.length,
                        is_email_like: o.Z.isEmail(e),
                        is_invite_like: o.Z.isInvite(e),
                        is_num_only: c.test(e)
                    })
                }(e);
                return u.Z.Messages.POMELO_ADD_FRIEND_ERROR
            }

            function d(e, t) {
                switch (e) {
                    case i.evJ.RELATIONSHIP_INCOMING_DISABLED:
                        return u.Z.Messages.ADD_FRIEND_ERROR_INVALID_DISCORD_TAG.format({
                            discordTag: t
                        });
                    case i.evJ.TOO_MANY_FRIENDS:
                        return u.Z.Messages.ADD_FRIEND_ERROR_TOO_MANY_FRIENDS;
                    case i.evJ.RELATIONSHIP_ALREADY_FRIENDS:
                        return u.Z.Messages.ADD_FRIEND_ERROR_ALREADY_FRIENDS;
                    case i.evJ.USER_QUARANTINED:
                    case i.evJ.USER_FRIEND_REQUEST_LIMITED_ACCESS:
                        return u.Z.Messages.LIMITED_ACCESS_INFO_MODAL_HEADING;
                    case i.evJ.TOO_MANY_BLOCKED_USERS:
                        return u.Z.Messages.BLOCK_USER_ERROR_TOO_MANY_BLOCKED_USERS;
                    case i.evJ.RELATIONSHIP_INCOMING_BLOCKED:
                    case i.evJ.RELATIONSHIP_INVALID_SELF:
                    case i.evJ.RELATIONSHIP_INVALUD_USER_BOT:
                    case i.evJ.RELATIONSHIP_INVALID_DISCORD_TAG:
                    default:
                        return u.Z.Messages.POMELO_ADD_FRIEND_ERROR
                }
            }
        },
        488110: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => O
            });
            var r = n(473903),
                o = n(496486),
                i = function(e) {
                    return "function" == typeof e ? e() : e
                };
            n.n(o)().curry((function(e, t, n) {
                return i(t) ? e(n) : n({})
            }));

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
                    u = e.hooks,
                    c = (void 0 === u ? {} : u).onEarlyClose,
                    d = function() {
                        null == c || c()
                    },
                    y = function(e) {
                        f(E);
                        n(e)
                    },
                    O = function(e) {
                        f(E);
                        r(e)
                    },
                    b = function(e) {
                        var t = e.res;
                        p(E, S, d, s(a({}, i), {
                            error: t.body.message
                        }))
                    };
                if (null != l) var E = l(S, d, i);
                else null == c || c();

                function S(e) {
                    p(E, S, d, s(a({}, i), {
                        isLoading: !0
                    }));
                    return h({
                        promiseFn: t,
                        resolve: y,
                        reject: O,
                        code: e,
                        mfaCodeHandler: b,
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
                    u = void 0 === i ? y : i,
                    s = e.isModalOpen,
                    l = void 0 !== s && s,
                    f = c(e, ["promiseFn", "resolve", "reject", "code", "mfaCodeHandler", "isModalOpen"]);
                return t(null != o ? {
                    code: o
                } : {}).then(n, (function(e) {
                    if (function(e, t) {
                            return e.body && 60008 === e.body.code || t && 429 === e.status
                        }(e, l)) return u(a({
                        promiseFn: t,
                        resolve: n,
                        reject: r,
                        res: e
                    }, f));
                    r(e)
                }))
            }

            function O(e, t) {
                var n, o, u = null != t ? t : {},
                    s = u.checkEnabled,
                    l = void 0 === s ? null !== (o = null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== o && o : s,
                    f = c(u, ["checkEnabled"]);
                return new Promise((function(t, n) {
                    (i(l) ? y : h)(a({
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
                RD: () => z,
                WA: () => F,
                f5: () => B,
                Gb: () => j,
                Rs: () => H,
                _2: () => V,
                gL: () => Z,
                fG: () => D
            });
            var r = n(306472),
                o = n(737264),
                i = n(496486),
                u = n.n(i),
                a = n(809784),
                s = n(296602),
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

            function O(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        s = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(s) : Promise.resolve(s).then(r, o)
            }

            function b(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            O(i, r, o, u, a, "next", e)
                        }

                        function a(e) {
                            O(i, r, o, u, a, "throw", e)
                        }
                        u(void 0)
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

            function S(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
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
            var _ = function(e, t) {
                    var n, r, o, i, u = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function a(i) {
                        return function(a) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; u;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    (r = 0, o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            u.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            u.label++;
                                            r = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = u.ops.pop();
                                            u.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                u = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                u.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && u.label < o[1]) {
                                                u.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && u.label < o[2]) {
                                                u.label = o[2];
                                                u.ops.push(i);
                                                break
                                            }
                                            o[2] && u.ops.pop();
                                            u.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, u)
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
                            }([i, a])
                        }
                    }
                },
                g = new s.Z("Spellchecker"),
                m = null === r.Z || void 0 === r.Z ? void 0 : r.Z.spellCheck;

            function v(e) {
                var t;
                e = null !== (t = y[e]) && void 0 !== t ? t : e;
                var n = (0, o.Q)(e.replace(/[_-]/g, "-"));
                if (null != n && null != n.langtag.language && null != n.langtag.region) {
                    var r = n.langtag,
                        i = r.language,
                        u = r.region;
                    return "".concat(i.language.toLowerCase(), "-").concat(u.toUpperCase())
                }
                g.error("".concat(e, " is not a valid locale."))
            }
            var I = function() {
                    function e(t) {
                        var n = this;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        this._enabled = !0;
                        this.misspelledWord = "";
                        this.corrections = [];
                        var r = S(c.default.locale.split("-"), 2),
                            o = r[0],
                            i = r[1];
                        this.regionPreference = i;
                        var u = this.getAvailableLanguages(t);
                        this.languageDetector = new d(o, (function(e) {
                            var r = "".concat(e, "-").concat(n.regionPreference);
                            if (-1 !== t.indexOf(r)) n.setLocale(r);
                            else {
                                var i, a = null !== (i = u[e]) && void 0 !== i ? i : y[o];
                                null != a && n.setLocale(a)
                            }
                        }));
                        m.on("spellcheck-result", (function(e, t) {
                            n.misspelledWord = null != e ? e : "";
                            n.corrections = null != t ? t : []
                        }))
                    }
                    var t = e.prototype;
                    t.setLearnedWords = function(e) {
                        m.setLearnedWords(e)
                    };
                    t.setLocale = function(e) {
                        var t;
                        null === (t = m.setLocale(e)) || void 0 === t || t.then((function(t) {
                            g.info("Switching to ".concat(e), t ? "(available)" : "(unavailable)")
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
                            var n, r = S(e.split("-"), 1)[0];
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
                        m.replaceMisspelling(e)
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
                P = u().debounce((function(e, t) {
                    var n = function(e) {
                        if (null == e) return null;
                        if ((0, a.k)(e, HTMLInputElement) || (0, a.k)(e, HTMLTextAreaElement)) return e.value;
                        if ((0, a.k)(e) && e.hasAttribute("contenteditable")) return e.textContent
                    }(t);
                    null != n && e.detectLanguage(n)
                }), 250);

            function T(e) {
                null != document.body && document.body.addEventListener("beforeinput", (function(t) {
                    return P(e, t.target)
                }), !0)
            }

            function A() {
                return (A = b((function() {
                    var e, t, n, r;
                    return _(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, m.getAvailableDictionaries()];
                            case 1:
                                t = null !== (e = o.sent()) && void 0 !== e ? e : [];
                                n = t.map(v).filter(l.lm);
                                T(r = new I(n));
                                return [2, r]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var R = n(120415);

            function N(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        s = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(s) : Promise.resolve(s).then(r, o)
            }

            function C(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            N(i, r, o, u, a, "next", e)
                        }

                        function a(e) {
                            N(i, r, o, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            var w = function(e, t) {
                var n, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            u.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && u.label < o[1]) {
                                            u.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && u.label < o[2]) {
                                            u.label = o[2];
                                            u.ops.push(i);
                                            break
                                        }
                                        o[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                i = t.call(e, u)
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
                        }([i, a])
                    }
                }
            };

            function L() {
                return null != (null === r.Z || void 0 === r.Z ? void 0 : r.Z.spellCheck)
            }

            function j() {
                return (0, R.nI)() && L()
            }
            var M = j() ? function() {
                return A.apply(this, arguments)
            }() : null;

            function Z(e) {
                return U.apply(this, arguments)
            }

            function U() {
                return (U = C((function(e) {
                    var t;
                    return w(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, M];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.enabled = e;
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function D(e) {
                return x.apply(this, arguments)
            }

            function x() {
                return (x = C((function(e) {
                    var t;
                    return w(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, M];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.setLearnedWords(e);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function B(e) {
                return k.apply(this, arguments)
            }

            function k() {
                k = C((function(e) {
                    var t, n, r = arguments;
                    return w(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                t = r.length > 1 && void 0 !== r[1] && r[1];
                                return [4, M];
                            case 1:
                                return null == (n = o.sent()) ? [2, !1] : [2, n.isMisspelled(e, t)]
                        }
                    }))
                }));
                return k.apply(this, arguments)
            }

            function F(e) {
                return G.apply(this, arguments)
            }

            function G() {
                G = C((function(e) {
                    var t, n, r, o = arguments;
                    return w(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                t = o.length > 1 && void 0 !== o[1] && o[1], n = o.length > 2 && void 0 !== o[2] ? o[2] : 5;
                                return [4, M];
                            case 1:
                                return null == (r = i.sent()) ? [2, []] : [2, r.getCorrectionsForMisspelling(e, t).slice(0, n)]
                        }
                    }))
                }));
                return G.apply(this, arguments)
            }

            function H(e) {
                return Y.apply(this, arguments)
            }

            function Y() {
                return (Y = C((function(e) {
                    var t;
                    return w(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, M];
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
                return (W = C((function(e) {
                    var t;
                    return w(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, M];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.setAppLocale(e);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function z(e) {
                if (!L()) return function() {};
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
                var u = o.reduce((function(e, t) {
                        return e + (0, r.De)(t)
                    }), ""),
                    a = "".concat(t).concat(u),
                    s = e[a];
                if (null != s) return s;
                0
            }
        },
        391438: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(281110),
                o = n(652591);

            function i(e, t, n) {
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
                        i(e, t, n[t])
                    }))
                }
                return e
            }

            function a(e, t) {
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

            function s(e, t, n) {
                var r = t.trackedActionData,
                    i = a(t, ["trackedActionData"]),
                    s = {
                        url: i.url,
                        request_method: n
                    };
                return new Promise((function(t, n) {
                    e(i).then((function(e) {
                        var n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(e));
                        (0, o.trackNetworkAction)(r.event, u({
                            status_code: e.status
                        }, s, n));
                        t(e)
                    })).catch((function(e) {
                        var t, i, a = r.properties;
                        "function" == typeof r.properties && (a = r.properties(e));
                        (0, o.trackNetworkAction)(r.event, u({
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (i = e.body) || void 0 === i ? void 0 : i.message
                        }, s, a));
                        n(e)
                    }))
                }))
            }
            const c = {
                get: function(e) {
                    return s(r.ZP.get, e, "get")
                },
                post: function(e) {
                    return s(r.ZP.post, e, "post")
                },
                put: function(e) {
                    return s(r.ZP.put, e, "put")
                },
                patch: function(e) {
                    return s(r.ZP.patch, e, "patch")
                },
                delete: function(e) {
                    return s(r.ZP.delete, e, "del")
                }
            }
        },
        680918: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                showModal: () => s,
                updateModalProps: () => c
            });
            var r = n(785893),
                o = (n(667294), n(264817)),
                i = n(919244);

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var a = function(e, t, n) {
                return function(o) {
                    return (0, r.jsx)(i.Z, function(e) {
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
                    }({
                        handleSubmit: e,
                        handleEarlyClose: t
                    }, n, o))
                }
            };

            function s(e, t, n) {
                return (0, o.h7)(a(e, t, n), {
                    onCloseCallback: t
                })
            }

            function c(e, t, n, r) {
                return (0, o.o)(e, a(t, n, r))
            }
        }
    }
]);