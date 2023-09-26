(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [18969, 58635, 88110, 96043, 71402], {
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
        497206: (e, t, n) => {
            e.exports = n.p + "5fe15d1753b3a2c9050dc9750d255163.svg"
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

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function s(e) {
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
                    var c, f, p = 0,
                        d = 0;
                    if ("pageX" in e) {
                        p = e.pageX;
                        d = e.pageY
                    }
                    if (0 === p && 0 === d) {
                        var y, h = null === (y = e.target) || void 0 === y ? void 0 : y.getBoundingClientRect(),
                            b = null != h ? h : {},
                            O = b.left,
                            E = void 0 === O ? 0 : O,
                            S = b.top,
                            g = void 0 === S ? 0 : S,
                            _ = b.width,
                            v = void 0 === _ ? 0 : _,
                            m = b.height;
                        p = E + v / 2;
                        d = g + (void 0 === m ? 0 : m) / 2
                    }
                    var I = {
                        render: t,
                        renderLazy: r,
                        target: null !== (c = e.target) && void 0 !== c ? c : e.currentTarget,
                        rect: new DOMRect(p, d, 0, 0),
                        config: s({
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
                        c = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function c(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            a(i, r, o, u, c, "next", e)
                        }

                        function c(e) {
                            a(i, r, o, u, c, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            var s = function(e, t) {
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
                                            value: i[1],
                                                done: !1
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
                return (p = c((function(e) {
                    var t, n, i, a, c, l;
                    return s(this, (function(s) {
                        switch (s.label) {
                            case 0:
                                t = e.withSku, n = void 0 !== t && t, i = e.withApplication, a = void 0 !== i && i, c = e.entitlementType;
                                o.Z.dispatch({
                                    type: "ENTITLEMENTS_FETCH_FOR_USER_START"
                                });
                                s.label = 1;
                            case 1:
                                s.trys.push([1, 3, , 4]);
                                return [4, r.ZP.get({
                                    url: u.ANM.ENTITLEMENTS_FOR_USER,
                                    query: {
                                        with_sku: n,
                                        with_application: a,
                                        entitlement_type: c
                                    }
                                })];
                            case 2:
                                l = s.sent();
                                o.Z.dispatch({
                                    type: "ENTITLEMENTS_FETCH_FOR_USER_SUCCESS",
                                    entitlements: l.body
                                });
                                return [3, 4];
                            case 3:
                                s.sent();
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
                return (y = c((function() {
                    var e;
                    return s(this, (function(t) {
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
                fw: () => c
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

            function c() {
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
                Z: () => m
            });
            var r = n(281110),
                o = n(575945),
                i = n(744564),
                u = n(852626);
            var a = n(3930),
                c = n(625183),
                s = n(473903),
                l = n(908478),
                f = n(749565),
                p = n(105783),
                d = n(971402),
                y = n(2590),
                h = n(473708);

            function b(e, t) {
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
                    if ("string" == typeof e) return b(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return b(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function g(e) {
                (0, d.Zy)();
                p.Z.show(e)
            }

            function _(e, t) {
                var n = e.status,
                    r = e.body,
                    o = r && r.code;
                switch (n) {
                    case 429:
                        g({
                            title: h.Z.Messages.FRIEND_REQUEST_RATE_LIMITED_HEADER,
                            body: h.Z.Messages.FRIEND_REQUEST_RATE_LIMITED_BODY,
                            confirmText: h.Z.Messages.FRIEND_REQUEST_RATE_LIMITED_BUTTON
                        });
                        break;
                    case 403:
                        if (o === y.evJ.EMAIL_VERIFICATION_REQUIRED) {
                            g({
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
                            if ((0, c.b)(n, o)) break;
                            var i = null != t ? (0, l.N)(o || 0, t) : h.Z.Messages.POMELO_ADD_FRIEND_ERROR;
                            g({
                                title: h.Z.Messages.FRIEND_REQUEST_FAILED_HEADER,
                                body: i,
                                confirmText: h.Z.Messages.OKAY
                            })
                        }
                }
                throw e
            }
            var v = {
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
                        _(t, e)
                    }))
                },
                addRelationship: function(e, t) {
                    var n = e.userId,
                        o = e.context,
                        i = e.type,
                        u = e.friendToken,
                        a = e.fromFriendSuggestion,
                        c = e.captchaPayload,
                        l = s.default.getUser(n);
                    return r.ZP.put({
                        url: y.ANM.USER_RELATIONSHIP(n),
                        body: E({
                            type: i,
                            friend_token: u,
                            from_friend_suggestion: a
                        }, c),
                        context: o,
                        oldFormErrors: !0
                    }).then((function() {
                        null == t || t()
                    })).catch((function(e) {
                        _(e, f.ZP.getUserTag(l))
                    }))
                },
                acceptFriendRequest: function(e) {
                    return v.addRelationship(e, (function() {
                        o.uv.announce(h.Z.Messages.A11Y_ANNOUNCEMENT_FRIEND_ACCEPT_REQUEST)
                    }))
                },
                cancelFriendRequest: function(e, t) {
                    return v.removeRelationship(e, t, (function() {
                        o.uv.announce(h.Z.Messages.A11Y_ANNOUNCEMENT_FRIEND_CANCEL_REQUEST)
                    }))
                },
                removeFriend: function(e, t) {
                    v.removeRelationship(e, t, (function() {
                        o.uv.announce(h.Z.Messages.A11Y_ANNOUNCEMENT_FRIEND_REMOVED)
                    }))
                },
                unblockUser: function(e, t) {
                    v.removeRelationship(e, t, (function() {
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
            const m = v
        },
        810978: (e, t, n) => {
            "use strict";
            n.d(t, {
                GZ: () => y,
                Gn: () => b,
                Y2: () => O,
                mE: () => E
            });
            var r = n(281110),
                o = n(744564),
                i = n(973889),
                u = n(615796),
                a = n(264628),
                c = n(673679),
                s = n(2590),
                l = n(203600);

            function f(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        c = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(r, o)
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
                    var p, y, h, b;
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
                                    url: s.ANM.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(e),
                                    oldFormErrors: !0
                                };
                                y = {};
                                null != t && (y.country_code = t);
                                null != n && (y.payment_source_id = n);
                                null != l && (y.include_unpublished = l);
                                null != f && (y.revenue_surface = f);
                                p.query = y;
                                return u.Z.ipCountryCodeLoaded ? [3, 3] : [4, (0, c.GE)()];
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
                                b = d.sent();
                                o.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                                    skuId: e
                                });
                                (0, a.q2)(b);
                                throw new i.Z(b);
                            case 6:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function b(e, t) {
                return Promise.all(e.filter((function(e) {
                    return e !== l.Si.NONE
                })).map((function(e) {
                    return y(e, t)
                })))
            }

            function O(e, t, n) {
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
        734691: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => O
            });
            var r = n(281110),
                o = n(630631),
                i = n(744564),
                u = n(223219),
                a = n(652591),
                c = n(775173),
                s = n(488110),
                l = n(735885),
                f = n(2590),
                p = n(239620),
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
                    (0, l.jN)(f.S9g.USER_SETTINGS)
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
                    var e = u.Z.onClose;
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
                    var u = e.username,
                        l = e.email,
                        y = e.emailToken,
                        O = e.password,
                        E = e.avatar,
                        S = e.newPassword,
                        g = e.discriminator,
                        _ = t.close;
                    return (0, s.Z)((function(e) {
                        var t = b(h({
                                username: u,
                                email: l,
                                email_token: y,
                                password: O,
                                avatar: E,
                                new_password: S
                            }, e), {
                                discriminator: null != g && "" !== g ? g : void 0
                            }),
                            n = o.Z.get(f.JkL),
                            i = (0, p.xJ)();
                        if (null != i && null != n) {
                            t.push_provider = i;
                            t.push_token = n
                        }
                        var a = o.Z.get(f.scU);
                        if (null != p.mv && null != a) {
                            t.push_voip_provider = p.mv;
                            t.push_voip_token = a
                        }
                        return r.ZP.patch({
                            url: f.ANM.ME,
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
                        a.default.track(f.rMx.USER_AVATAR_UPDATED, {
                            animated: (0, c.xR)(t.avatar)
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
                        null != S && i.Z.dispatch({
                            type: "USER_PASSWORD_UPDATE",
                            user: t,
                            newPassword: S
                        });
                        null != O && null != S && i.Z.dispatch({
                            type: "PASSWORD_UPDATED",
                            userId: t.id
                        });
                        _ ? n.close() : n.submitComplete();
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
                Z: () => p
            });
            var r = n(785893),
                o = (n(667294), n(820610)),
                i = n(694329),
                u = n(249052),
                a = n(2590),
                c = n(203600),
                s = n(473708),
                l = n(501235),
                f = n.n(l);
            const p = function(e) {
                var t, n, l, p = e.subscriptionPlan,
                    d = e.isGift,
                    y = e.isEmbeddedIAP,
                    h = e.renewalInvoice,
                    b = e.paymentSourceType,
                    O = e.hide,
                    E = e.purchaseType,
                    S = e.productLine;
                if (O) return null;
                if (null != h) {
                    var g = i.ZP.getIntervalForInvoice(h);
                    t = g.intervalType;
                    n = g.intervalCount;
                    l = (0, u.og)((0, u.T4)(h.total, h.currency), t, n)
                } else if (null != p) {
                    t = p.interval;
                    n = p.intervalCount
                }
                var _ = (0, o.K)({
                        purchaseType: E || a.GZQ.SUBSCRIPTION,
                        plan: p,
                        premiumSubscription: null,
                        isGift: !!d,
                        planGroup: [],
                        isPrepaidPaymentSource: !1
                    }),
                    v = "",
                    m = "";
                if (y)
                    if (null != l && null != (null == h ? void 0 : h.subscriptionPeriodEnd)) v = s.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_RATE_AND_RENEWAL.format({
                        rate: l,
                        renewalDate: h.subscriptionPeriodEnd
                    });
                    else switch (t) {
                        case c.rV.MONTH:
                            v = 1 === n ? s.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_MONTHLY : s.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_MULTI_MONTH.format({
                                intervalCount: n
                            });
                            break;
                        case c.rV.YEAR:
                            v = s.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_YEARLY;
                            break;
                        case void 0:
                            m = s.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
                                primaryText: _,
                                paidURL: a.EYA.PAID_TERMS
                            });
                            v = s.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE.format({});
                            break;
                        default:
                            throw new Error("Unexpected interval: ".concat(t))
                    } else if (E === a.GZQ.ONE_TIME) {
                        m = s.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
                            primaryText: _,
                            paidURL: a.EYA.PAID_TERMS
                        });
                        if (S === a.POd.COLLECTIBLES) v = s.Z.Messages.COLLECTIBLES_PURCHASE_DISCLAIMER_PAYMENT;
                        else v = s.Z.Messages.ONE_TIME_PURCHASE_FINE_PRINT
                    } else {
                        d && (m = s.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
                            primaryText: _,
                            paidURL: a.EYA.PAID_TERMS
                        }));
                        switch (t) {
                            case c.rV.MONTH:
                                v = d ? s.Z.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY : s.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY;
                                v = d ? s.Z.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY : 1 === n ? s.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY : s.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MULTI_MONTH.format({
                                    intervalCount: n
                                });
                                break;
                            case c.rV.YEAR:
                                v = d ? s.Z.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_YEARLY : s.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_YEARLY;
                                break;
                            case void 0:
                                v = "";
                                break;
                            default:
                                throw new Error("Unexpected interval: ".concat(t))
                        }
                    } return (0, r.jsxs)(r.Fragment, {
                    children: ["" !== m && (0, r.jsxs)("div", {
                        children: [(0, r.jsx)("div", {
                            children: m
                        }), (0, r.jsx)("div", {
                            className: f().divider
                        })]
                    }), "" !== v && (0, r.jsx)("div", {
                        children: v
                    }), b === a.HeQ.PAYSAFE_CARD && (0, r.jsx)("div", {
                        className: f().paymentSourceNoticeCopy,
                        children: s.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_PAYSAFECARD
                    }), b === a.HeQ.SOFORT && (0, r.jsxs)("div", {
                        className: f().paymentSourceNoticeCopy,
                        children: [s.Z.Messages.SOFORT_MANDATE_AGREEMENT, " "]
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
                c = n(349480),
                s = n.n(c);

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
                    className: i()(s().button, o, (t = {}, l(t, s().open, n), l(t, s().withHighlight, a), t)),
                    children: [a && (0, r.jsx)("defs", {
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
                c = n(513328),
                s = n(882723),
                l = n(735885),
                f = n(560923),
                p = n(758635),
                d = n(734691),
                y = n(657539),
                h = n(467345),
                b = n(543976),
                O = n(840922),
                E = n(793461),
                S = n(239734),
                g = n(473903),
                _ = n(459940),
                v = n(107364),
                m = n(750203),
                I = n(691797),
                P = n(644144),
                T = n(694329),
                R = n(749565),
                A = n(2590),
                N = n(203600),
                C = n(473708),
                w = n(5759),
                j = n.n(w);

            function L(e, t) {
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
                return !t || "object" !== G(t) && "function" != typeof t ? function(e) {
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

            function k(e, t) {
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
                }(e, t) || F(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function B(e) {
                return function(e) {
                    if (Array.isArray(e)) return L(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || F(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var G = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function F(e, t) {
                if (e) {
                    if ("string" == typeof e) return L(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? L(e, t) : void 0
                }
            }

            function Y(e) {
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
                        t && x(e, t)
                    }(n, e);
                    var t = Y(n);

                    function n() {
                        M(this, n);
                        var e;
                        (e = t.apply(this, arguments)).state = {
                            copyMode: _.Z.Modes.DEFAULT
                        };
                        e._copyModeTimeout = new c.V7;
                        e.handleGiftCodeCopy = function(t, n) {
                            var r = e.props.sku;
                            null != r && (0, P.dM)(new b.Z({
                                code: n,
                                maxUses: 1
                            }), r);
                            try {
                                (0, I.JG)(t);
                                e.setState({
                                    copyMode: _.Z.Modes.SUCCESS
                                })
                            } catch (t) {
                                e.setState({
                                    copyMode: _.Z.Modes.ERROR
                                })
                            }
                            e._copyModeTimeout.start(1500, (function() {
                                e.setState({
                                    copyMode: _.Z.Modes.DEFAULT
                                })
                            }))
                        };
                        e.handleInventoryClick = function() {
                            d.Z.open(A.oAB.INVENTORY);
                            e.props.onClose()
                        };
                        e.renderGiftCodeSection = function() {
                            var t = e.props,
                                n = t.obscureGiftCode,
                                o = t.giftCode;
                            if (null == o) return null;
                            var i, u = e.state.copyMode;
                            switch (u) {
                                case _.Z.Modes.SUCCESS:
                                    i = C.Z.Messages.BILLING_GIFT_COPIED;
                                    break;
                                case _.Z.Modes.ERROR:
                                    i = C.Z.Messages.FAILED;
                                    break;
                                default:
                                    i = C.Z.Messages.COPY
                            }
                            return (0, r.jsx)(v.Z, {
                                direction: v.Z.Direction.VERTICAL,
                                children: (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)(s.FormTitle, {
                                        children: C.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_PRIVATE_LINK
                                    }), null != o && (0, r.jsx)(_.Z, {
                                        hideMessage: n ? C.Z.Messages.GIFT_INVENTORY_HIDDEN : null,
                                        value: (0, P.Nz)(o),
                                        mode: u,
                                        text: i,
                                        onCopy: function(t) {
                                            return e.handleGiftCodeCopy(t, o)
                                        },
                                        supportsCopy: I.wS,
                                        className: j().copyInput,
                                        buttonColor: _.Z.ButtonColors.LINK,
                                        buttonLook: _.Z.ButtonLooks.LINK
                                    }), (0, r.jsx)("div", {
                                        className: j().subtext,
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
                                    className: j().blurb,
                                    children: e.headerBlurb
                                }), null == i && (0, r.jsx)(V, {
                                    giftCode: n,
                                    onClose: o
                                }), (0, r.jsx)("div", {
                                    className: j().divider
                                }), e.renderGiftCodeSection()]
                            })
                        };
                        e.renderConfirmSentGift = function() {
                            var t = e.props.giftRecipient;
                            return (0,
                                r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(y.Z, {
                                    user: t,
                                    className: j().giftRecipient,
                                    size: s.AvatarSizes.SIZE_80
                                }), (0, r.jsx)(s.Heading, {
                                    className: j().giftRecipientName,
                                    variant: "heading-md/semibold",
                                    children: R.ZP.getName(t)
                                }), (0, r.jsxs)("div", {
                                    className: j().giftRecipientTag,
                                    children: [" ", R.ZP.getUserTag(t)]
                                }), (0, r.jsx)("div", {
                                    className: j().giftSentMessage,
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
                            c = n.giftMessageError,
                            l = n.isSendingMessage;
                        e = (0, P.a8)(a) ? "" : u && null == c ? C.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_AND_MESSAGE_CONFIRMATION_TITLE : null != c ? C.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_FAILED : C.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_CONFIRMATION_TITLE;
                        t = l ? (0, r.jsx)(s.Spinner, {
                            type: s.SpinnerTypes.PULSING_ELLIPSIS
                        }) : (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(s.Heading, {
                                variant: "heading-lg/semibold",
                                className: null != i ? j().headerCustomGifting : j().header,
                                children: e
                            }), u && null != a && null == c || (0, P.a8)(a) ? this.renderConfirmSentGift() : this.renderRequestSendGift()]
                        });
                        return (0, r.jsxs)(v.Z, {
                            direction: v.Z.Direction.VERTICAL,
                            align: v.Z.Align.CENTER,
                            children: [null != o ? (0, r.jsx)(m.Z, {
                                game: o,
                                className: j().icon,
                                size: m.Z.Sizes.LARGE,
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
                    var i = k(o.useState(), 2),
                        c = i[0],
                        d = i[1],
                        b = k(o.useState(!1), 2),
                        E = b[0],
                        _ = b[1],
                        v = k(o.useState(!1), 2),
                        m = v[0],
                        I = v[1],
                        P = (0, a.cj)([S.Z], (function() {
                            return {
                                userAffinities: S.Z.getUserAffinitiesUserIds(),
                                isLoading: S.Z.getFetching()
                            }
                        })),
                        T = P.userAffinities,
                        A = P.isLoading,
                        N = Array.from(T.values()),
                        w = (0, a.e7)([O.Z], (function() {
                            return O.Z.getFriendIDs()
                        })),
                        L = u().difference(w, N),
                        M = B(N).concat(B(L)),
                        Z = (0, a.e7)([g.default], (function() {
                            return g.default.filter((function(e) {
                                return M.includes(e.id) && !e.bot
                            }))
                        }), [M]);
                    if (null == Z || 0 === Z.length) return null;
                    var U = u().sortBy(Z, (function(e) {
                        return M.indexOf(e.id)
                    }));
                    return (0, r.jsxs)("div", {
                        className: j().giftRecipientSection,
                        children: [(0, r.jsx)(s.FormTitle, {
                            children: C.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SECTION_LABEL
                        }), (0, r.jsxs)("div", {
                            className: j().giftRecipient,
                            children: [(0, r.jsx)(s.SearchableSelect, {
                                placeholder: C.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SELECT_PLACEHOLDER,
                                wrapperClassName: j().giftRecipientInputWrapper,
                                className: E ? j().giftRecipientInputError : void 0,
                                renderOptionPrefix: function(e) {
                                    return null == (null == e ? void 0 : e.value) ? null : (0, r.jsx)(y.Z, {
                                        user: e.value,
                                        size: s.AvatarSizes.SIZE_20
                                    })
                                },
                                renderLeading: function() {
                                    return A ? (0, r.jsx)(s.Spinner, {
                                        type: s.SpinnerTypes.PULSING_ELLIPSIS
                                    }) : null
                                },
                                value: c,
                                onChange: function(e) {
                                    d(e);
                                    _(!1)
                                },
                                options: U.map((function(e) {
                                    return {
                                        value: e,
                                        label: "".concat(R.ZP.getUserTag(e))
                                    }
                                }))
                            }), (0, r.jsx)(s.Button, {
                                disabled: null == c,
                                submitting: m,
                                className: j().sendToRecipientButton,
                                onClick: function() {
                                    I(!0);
                                    (0, h.Y)(c, t).then((function() {
                                        n();
                                        (0, l.Ou)()
                                    })).catch((function() {
                                        _(!0);
                                        I(!1)
                                    }))
                                },
                                children: C.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_SEND_NOW_BUTTON
                            })]
                        }), (0, r.jsx)("div", {
                            className: E ? j().subtextError : j().subtext,
                            children: E ? C.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_ERROR_SENDING_LINK : C.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SUBTEXT
                        })]
                    })
                };
            const W = a.ZP.connectStores([E.Z], (function() {
                return {
                    obscureGiftCode: E.Z.enabled
                }
            }))(H)
        },
        359891: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => wt
            });
            var r = n(785893),
                o = n(667294),
                i = n(468811),
                u = n.n(i),
                a = n(202351),
                c = n(882723),
                s = n(744564),
                l = n(695166),
                f = n(315804),
                p = n(152042),
                d = n(673679),
                y = n(933599),
                h = n(856281),
                b = n(458823),
                O = n(711531),
                E = n(939065),
                S = n(886664),
                g = n(872589),
                _ = n(793461),
                v = n(615796),
                m = n(20405),
                I = n(107364),
                P = n(120415),
                T = n(421281),
                R = n(799105),
                A = n(842257),
                N = n(773262),
                C = n(520983),
                w = n(387652),
                j = n(886433),
                L = n(608452),
                M = n(473708),
                Z = function(e) {
                    var t = e.submitting,
                        n = e.braintreeNonce,
                        o = e.braintreeEmail,
                        i = e.onPaypalContinue,
                        u = e.onReopenPaypal,
                        a = e.renderBackButton,
                        s = 0 !== o.length && null != n;
                    return (0, r.jsxs)(c.ModalFooter, {
                        justify: I.Z.Justify.BETWEEN,
                        direction: I.Z.Direction.HORIZONTAL,
                        children: [a(), (0, r.jsx)(c.Button, {
                            submitting: t,
                            color: s ? c.Button.Colors.BRAND : c.Button.Colors.PRIMARY,
                            onClick: s ? i : u,
                            children: s ? M.Z.Messages.NEXT : M.Z.Messages.PAYMENT_SOURCE_CONNECT_TO_PAYPAL
                        })]
                    })
                },
                U = n(19120),
                D = n(700812),
                x = n(536713),
                k = n(709189),
                B = n(822511),
                G = n(856236),
                F = n(249052),
                Y = n(992911),
                H = n.n(Y);

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
            var z = function(e) {
                    var t = e.legalNotice,
                        n = e.paymentSources,
                        i = e.price,
                        u = e.hidePersonalInformation,
                        a = e.paymentSourceId,
                        s = e.isGiftable,
                        l = e.isGift,
                        f = e.needsToBeGift,
                        p = e.onPaymentSourceChange,
                        d = e.onPaymentSourceAdd,
                        y = e.onPurchaseTermsChange,
                        h = e.onToggleIsGift,
                        b = [],
                        O = null != a ? n[a] : null;
                    null != O && O.invalid && b.push((0, r.jsx)(U.Z, {
                        icon: G.Z,
                        color: U.Z.Colors.ERROR,
                        iconSize: U.Z.Sizes.NONE,
                        iconClassName: H().invalidIcon,
                        children: M.Z.Messages.BILLING_PAYMENT_SOURCE_INVALID
                    }, "source_invalid"));
                    null != i && (i.taxInclusive ? b.push((0, r.jsx)(U.Z, {
                        icon: B.Z,
                        color: U.Z.Colors.PRIMARY,
                        iconSize: U.Z.Sizes.LARGE,
                        children: M.Z.Messages.BILLING_SALES_TAX_INCLUDED
                    }, "tax_included")) : i.tax > 0 && b.push((0, r.jsx)(U.Z, {
                        icon: B.Z,
                        color: U.Z.Colors.PRIMARY,
                        iconSize: U.Z.Sizes.LARGE,
                        children: M.Z.Messages.BILLING_SALES_TAX_ADDED.format({
                            tax: (0, F.T4)(i.tax, i.currency)
                        })
                    }, "tax_added")));
                    return (0, r.jsxs)(o.Fragment, {
                        children: [(0, r.jsx)(c.FormTitle, {
                            className: H().formTitle,
                            children: M.Z.Messages.BILLING_PAY_FOR_IT_WITH
                        }), (0, r.jsx)(D.Z, {
                            paymentSources: Object.values(n),
                            selectedPaymentSourceId: a,
                            hidePersonalInformation: u,
                            onChange: p,
                            onPaymentSourceAdd: d
                        }), b, s && (0, r.jsx)(c.Checkbox, {
                            disabled: f,
                            className: H().giftToggle,
                            type: c.Checkbox.Types.INVERTED,
                            value: l,
                            onChange: h,
                            children: (0, r.jsx)("div", {
                                className: H().checkboxLabel,
                                children: M.Z.Messages.BILLING_IS_GIFT_PURCHASE
                            })
                        }), (0, r.jsx)(x.Z, {
                            onChange: y,
                            forceShow: !0,
                            className: H().purchaseTerms,
                            finePrint: t
                        })]
                    })
                },
                K = function(e) {
                    var t = e.canSubmit,
                        n = e.submitButtonText,
                        o = e.useShinySubmitButton,
                        i = e.isPurchasing,
                        u = e.hasAcceptedTerms,
                        a = e.paymentSource,
                        s = e.onPurchase,
                        l = e.tooltipText,
                        f = e.needsToBeGift,
                        p = e.isGift,
                        d = null != a && !a.invalid,
                        y = u && !(f && !p) && d && t,
                        h = {
                            submitting: i,
                            color: c.Button.Colors.GREEN,
                            disabled: !y,
                            onClick: s
                        };
                    return (0, r.jsx)(c.ModalFooter, {
                        children: (0, r.jsxs)("div", {
                            className: H().buyButtonTooltipWrapper,
                            children: [h.disabled && null != l ? (0, r.jsx)(c.Tooltip, {
                                text: l,
                                children: function(e) {
                                    return (0, r.jsx)("div", W({
                                        "aria-hidden": !0,
                                        className: H().buyButtonTooltipTarget
                                    }, e))
                                }
                            }) : null, o ? (0,
                                r.jsx)(k.C, Q(W({}, h), {
                                children: n
                            })) : (0, r.jsx)(c.Button, Q(W({
                                type: "submit"
                            }, h), {
                                children: n
                            }))]
                        })
                    })
                },
                q = function(e) {
                    var t = e.submitting,
                        n = e.braintreeNonce,
                        o = e.venmoUsername,
                        i = e.onVenmoContinue,
                        u = e.onReopenVenmo,
                        a = e.renderBackButton,
                        s = 0 !== o.length && null != n;
                    return (0, r.jsxs)(c.ModalFooter, {
                        justify: I.Z.Justify.BETWEEN,
                        direction: I.Z.Direction.HORIZONTAL,
                        children: [a(), (0, r.jsx)(c.Button, {
                            submitting: t,
                            color: s ? c.Button.Colors.BRAND : c.Button.Colors.PRIMARY,
                            onClick: s ? i : u,
                            children: s ? M.Z.Messages.NEXT : M.Z.Messages.PAYMENT_SOURCE_CONNECT_TO_VENMO
                        })]
                    })
                },
                J = n(2590),
                X = n(910368),
                $ = n.n(X);

            function ee(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function te(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        c = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function ne(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            te(i, r, o, u, a, "next", e)
                        }

                        function a(e) {
                            te(i, r, o, u, a, "throw", e)
                        }
                        u(void 0)
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

            function ue(e) {
                ue = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return ue(e)
            }

            function ae(e) {
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

            function ce(e, t) {
                return !t || "object" !== le(t) && "function" != typeof t ? ee(e) : t
            }

            function se(e, t) {
                se = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return se(e, t)
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
                    var n, r = ue(e);
                    if (t) {
                        var o = ue(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return ce(this, n)
                }
            }
            var pe = function(e, t) {
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
                de = [E.Rg.PAYMENT_TYPE, E.Rg.CREDIT_CARD_INFORMATION, E.Rg.REVIEW],
                ye = [E.Rg.PAYMENT_TYPE, E.Rg.CREDIT_CARD_INFORMATION, E.Rg.REVIEW],
                he = [E.Rg.PAYMENT_TYPE, E.Rg.CREDIT_CARD_INFORMATION, E.Rg.ADDRESS, E.Rg.REVIEW],
                be = [E.Rg.PAYMENT_TYPE, E.Rg.PAYPAL, E.Rg.PAYPAL_ADDRESS, E.Rg.REVIEW],
                Oe = [E.Rg.PAYMENT_TYPE, E.Rg.PAYMENT_REQUEST_INFO, E.Rg.REVIEW],
                Ee = [E.Rg.PAYMENT_TYPE, E.Rg.ADDRESS, E.Rg.REVIEW],
                Se = [E.Rg.PAYMENT_TYPE, E.Rg.ADDRESS, E.Rg.REVIEW],
                ge = [E.Rg.PAYMENT_TYPE, E.Rg.VENMO, E.Rg.VENMO_ADDRESS, E.Rg.REVIEW],
                _e = (0, T.Mg)($().innerPadding),
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
                        t && se(e, t)
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
                            g.i0()
                        };
                        e.handleReopenVenmo = function() {
                            g.og()
                        };
                        e.handleCardInfoChange = function(e, t) {
                            s.Z.wait((function() {
                                return y.sn(e, t)
                            }))
                        };
                        e.handleBillingAddressChange = function(e, t) {
                            s.Z.wait((function() {
                                return y.Ow(e, t)
                            }))
                        };
                        var i = ee(e);
                        e.handleCreditCardAdd = ne((function() {
                            var e, t, n, r, o;
                            return pe(this, (function(u) {
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
                        var u, a = ee(e);
                        e.handleStripePaymentRequestAdd = (u = ne((function(e) {
                            var t;
                            return pe(this, (function(n) {
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
                                u = t.onBack,
                                a = (0, E.Yp)(n, o),
                                s = (0,
                                    E.NW)(a, i) ? M.Z.Messages.BACK : M.Z.Messages.CANCEL;
                            return (0, r.jsx)(c.Button, {
                                look: c.Button.Looks.LINK,
                                className: H().backButton,
                                color: H().backButtonColor,
                                size: H().backButtonSize,
                                onClick: u,
                                children: s
                            })
                        };
                        e.stepRenderer = ae((ie(f = {}, E.Rg.PAYMENT_TYPE, {
                            renderBody: function() {
                                var t = e.props,
                                    n = t.hidePersonalInformation,
                                    i = t.onChoosePaymentType,
                                    u = t.isGiftable,
                                    a = t.needsToBeGift,
                                    s = t.isGift;
                                return n ? (0, r.jsx)(c.FormErrorBlock, {
                                    className: H().errorBlock,
                                    children: M.Z.Messages.BILLING_ERROR_ADD_PAYMENT_SOURCE_STREAMER_MODE
                                }) : (0, r.jsxs)(o.Fragment, {
                                    children: [(0, r.jsx)(A.Z, {
                                        className: H().choosePaymentSourceType,
                                        onChooseType: i,
                                        allowStripeRequestPayments: !P.FB,
                                        onStripePaymentMethodReceived: e.handleStripePaymentRequestAdd
                                    }), u && (0, r.jsx)(c.Checkbox, {
                                        disabled: a,
                                        className: H().giftToggle,
                                        type: c.Checkbox.Types.INVERTED,
                                        value: s,
                                        onChange: e.handleToggleIsGift,
                                        children: (0, r.jsx)("div", {
                                            className: H().checkboxLabel,
                                            children: M.Z.Messages.BILLING_IS_GIFT_PURCHASE
                                        })
                                    })]
                                })
                            },
                            renderFooter: function() {
                                return (0,
                                    r.jsx)(c.ModalFooter, {
                                    direction: I.Z.Direction.HORIZONTAL,
                                    children: e.renderBackButton()
                                })
                            }
                        }), ie(f, E.Rg.PAYMENT_REQUEST_INFO, {
                            renderBody: function() {
                                return (0, r.jsx)(L.k, {
                                    className: H().formItem,
                                    stripePaymentMethod: e.props.stripePaymentMethod,
                                    submitting: e.props.submitting
                                })
                            },
                            renderFooter: function() {
                                return (0, r.jsx)(c.ModalFooter, {
                                    direction: I.Z.Direction.HORIZONTAL,
                                    children: e.renderBackButton()
                                })
                            }
                        }), ie(f, E.Rg.PAYPAL, {
                            renderBody: function() {
                                return (0, r.jsx)(N.Z, {
                                    className: H().formItem
                                })
                            },
                            renderFooter: function() {
                                var t = e.props,
                                    n = t.submitting,
                                    o = t.braintreeNonce,
                                    i = t.braintreeEmail,
                                    u = t.onPaypalContinue,
                                    a = t.paypalClient;
                                return (0, r.jsx)(Z, {
                                    submitting: n || null == a,
                                    braintreeNonce: o,
                                    braintreeEmail: i,
                                    onPaypalContinue: u,
                                    onReopenPaypal: e.handleReopenPaypal,
                                    renderBackButton: e.renderBackButton
                                })
                            }
                        }), ie(f, E.Rg.VENMO, {
                            renderBody: function() {
                                return (0, r.jsx)(C.Z, {
                                    className: H().formItem
                                })
                            },
                            renderFooter: function() {
                                var t = e.props,
                                    n = t.submitting,
                                    o = t.braintreeNonce,
                                    i = t.venmoUsername,
                                    u = t.onVenmoContinue,
                                    a = t.venmoClient;
                                return (0, r.jsx)(q, {
                                    submitting: n || null == a,
                                    braintreeNonce: o,
                                    venmoUsername: i,
                                    onVenmoContinue: u,
                                    onReopenVenmo: e.handleReopenVenmo,
                                    renderBackButton: e.renderBackButton
                                })
                            }
                        }), ie(f, E.Rg.CREDIT_CARD_INFORMATION, {
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
                                    c = ee(e),
                                    s = function() {
                                        var e = ne((function(e) {
                                            var t;
                                            return pe(this, (function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        c.setState({
                                                            confirmingCard: !0
                                                        });
                                                        n.label = 1;
                                                    case 1:
                                                        n.trys.push([1, 3, 4, 5]);
                                                        return [4, d.qv(u, e)];
                                                    case 2:
                                                        t = n.sent();
                                                        c.setState({
                                                            token: t
                                                        });
                                                        y.fw();
                                                        o();
                                                        return [3, 5];
                                                    case 3:
                                                        n.sent();
                                                        return [3, 5];
                                                    case 4:
                                                        c.setState({
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
                                                return s(o)
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
                                return (0, r.jsx)(w.P, {
                                    billingAddressInfo: n,
                                    billingError: o,
                                    onBillingAddressChange: e.handleBillingAddressChange,
                                    paymentSourceType: J.HeQ.PAYPAL
                                })
                            },
                            renderFooter: function() {
                                var t = e.props,
                                    n = t.isBillingAddressInfoValid,
                                    o = t.submitting;
                                return (0, r.jsx)(w.B, {
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
                                return (0, r.jsx)(w.P, {
                                    billingAddressInfo: n,
                                    billingError: o,
                                    onBillingAddressChange: e.handleBillingAddressChange,
                                    paymentSourceType: J.HeQ.VENMO
                                })
                            },
                            renderFooter: function() {
                                var t = e.props,
                                    n = t.isBillingAddressInfoValid,
                                    o = t.submitting;
                                return (0, r.jsx)(w.B, {
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
                                return (0, r.jsx)(w.P, {
                                    billingAddressInfo: n,
                                    billingError: o,
                                    onBillingAddressChange: e.handleBillingAddressChange,
                                    paymentSourceType: i === Ee ? J.HeQ.GIROPAY : J.HeQ.CARD
                                })
                            },
                            renderFooter: function() {
                                var t = e.props,
                                    n = t.isBillingAddressInfoValid,
                                    o = t.submitting;
                                return (0, r.jsx)(w.B, {
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
                                    u = t.hidePersonalInformation,
                                    a = t.paymentSourceId,
                                    c = t.onReviewPaymentSourceChange,
                                    s = t.onReviewPaymentSourceAdd,
                                    l = t.isGiftable,
                                    f = t.isGift,
                                    p = t.needsToBeGift;
                                return (0, r.jsx)(z, {
                                    legalNotice: n,
                                    paymentSources: o,
                                    price: i,
                                    hidePersonalInformation: u,
                                    paymentSourceId: a,
                                    onPaymentSourceChange: c,
                                    onPaymentSourceAdd: s,
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
                                    c = t.onPurchase,
                                    s = t.needsToBeGift,
                                    l = t.isGift,
                                    f = t.paymentSources;
                                return (0, r.jsx)(K, {
                                    canSubmit: n,
                                    submitButtonText: o,
                                    useShinySubmitButton: i,
                                    isPurchasing: u,
                                    hasAcceptedTerms: e.state.hasAcceptedNeccessaryTerms,
                                    paymentSource: null != a ? f[a] : null,
                                    onPurchase: c,
                                    tooltipText: e.disabledTooltip,
                                    needsToBeGift: s,
                                    isGift: l
                                })
                            }
                        }), ie(f, E.Rg.CONFIRM, {
                            renderBody: J.VqG,
                            renderFooter: J.VqG
                        }), ie(f, E.Rg.AWAITING_AUTHENTICATION, {
                            renderBody: function() {
                                return (0, r.jsx)(c.FormTitle, {
                                    className: H().formTitle,
                                    children: M.Z.Messages.PAYMENT_WAITING_FOR_AUTHENTICATION
                                })
                            },
                            renderFooter: J.VqG
                        }), f), e.props.extraRenderers);
                        return e
                    }
                    var i = n.prototype;
                    i.componentDidMount = function() {
                        var e = this;
                        return ne((function() {
                            var t, n, r, o, i, u;
                            return pe(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        g.eI();
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
                        g.gy();
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
                            s = a.renderBody();
                        return (0, r.jsx)(S.Elements, {
                            options: J.OBo,
                            stripe: this.state.stripe,
                            children: (0, r.jsx)(c.ModalRoot, {
                                size: t,
                                className: i,
                                "aria-label": M.Z.Messages.SKU_PAYMENT_STEPS_LABEL,
                                transitionState: u,
                                children: (0, r.jsx)(c.Scroller, {
                                    children: (0, r.jsxs)("form", {
                                        className: H().form,
                                        onSubmit: this.preventDefault,
                                        children: [this.renderHeader(), n !== E.Rg.CONFIRM ? (0, r.jsx)("div", {
                                            className: H().divider
                                        }) : null, null != s && (0, r.jsx)(c.ModalContent, {
                                            className: H().modalContent,
                                            children: (0, r.jsx)("div", {
                                                className: H().content,
                                                children: (0, r.jsx)(c.Sequencer, {
                                                    step: n,
                                                    steps: o,
                                                    sideMargin: _e,
                                                    children: s
                                                })
                                            })
                                        }), a.renderFooter()]
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
                            return this.state.hasAcceptedNeccessaryTerms ? t && !n ? r ? M.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_ONLY : M.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_ONLY_UNGIFTABLE : null : M.Z.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP
                        }
                    }]);
                    return n
                }(o.PureComponent);
            ve.defaultProps = {
                canSubmit: !0,
                useShinySubmitButton: !1,
                size: c.ModalSize.SMALL,
                billingError: null,
                extraRenderers: {},
                className: H().modal
            };
            const me = a.ZP.connectStores([O.Z, h.Z, v.Z, _.Z, m.Z], (function() {
                return {
                    submitting: v.Z.isBusy,
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
                    paypalClient: m.Z.getPayPalClient(),
                    venmoClient: m.Z.getVenmoClient(),
                    hidePersonalInformation: _.Z.hidePersonalInformation
                }
            }))(ve);

            function Ie(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Pe(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function Te(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        c = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function Re(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            Te(i, r, o, u, a, "next", e)
                        }

                        function a(e) {
                            Te(i, r, o, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function Ae(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function Ne(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Ce(e) {
                Ce = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Ce(e)
            }

            function we(e, t) {
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
                return !t || "object" !== Ue(t) && "function" != typeof t ? Pe(e) : t
            }

            function Le(e, t) {
                Le = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Le(e, t)
            }

            function Me(e, t) {
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
                }(e, t) || De(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ze(e) {
                return function(e) {
                    if (Array.isArray(e)) return Ie(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || De(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Ue = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function De(e, t) {
                if (e) {
                    if ("string" == typeof e) return Ie(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ie(e, t) : void 0
                }
            }

            function xe(e) {
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
                    var n, r = Ce(e);
                    if (t) {
                        var o = Ce(this).constructor;
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
                Be = [E.Rg.REVIEW, E.Rg.CONFIRM],
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
                        t && Le(e, t)
                    }(n, e);
                    var t = xe(n);

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
                                u = o.steps,
                                a = r.stepsToRender,
                                c = (0, E.Yp)(i, a);
                            if (c > 0) {
                                var s = a[c - 1],
                                    l = s === E.Rg.PAYMENT_TYPE;
                                l && y.fw();
                                r.setState({
                                    step: s,
                                    steps: l ? ye : u
                                })
                            } else if ((0, E.NW)(c, t)) {
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
                                case J.HeQ.PAYPAL:
                                    r.setState({
                                        step: E.Rg.PAYPAL,
                                        steps: be
                                    });
                                    break;
                                case J.HeQ.CARD:
                                    r.setState({
                                        step: E.Rg.CREDIT_CARD_INFORMATION,
                                        steps: he
                                    });
                                    break;
                                case J.HeQ.PAYMENT_REQUEST:
                                    r.setState({
                                        step: E.Rg.PAYMENT_REQUEST_INFO,
                                        steps: Oe
                                    });
                                    break;
                                case J.HeQ.GIROPAY:
                                    r.setState({
                                        step: E.Rg.ADDRESS,
                                        steps: Ee
                                    });
                                    break;
                                case J.HeQ.PAYSAFE_CARD:
                                    r.setState({
                                        step: E.Rg.ADDRESS,
                                        steps: Se
                                    });
                                    break;
                                case J.HeQ.VENMO:
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
                        var o = Pe(r);
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
                                            steps: Be,
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
                            c = Object.values(u).length > 0,
                            s = a;
                        null == s && (s = c ? E.Rg.REVIEW : E.Rg.PAYMENT_TYPE);
                        r.state = {
                            paymentSourceId: i,
                            steps: c ? de : ye,
                            step: s,
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
                            u = n.submitButtonText,
                            a = n.useShinySubmitButton,
                            c = n.legalNotice,
                            s = n.renderHeader,
                            l = n.onPaymentSourceChange,
                            f = n.price,
                            p = n.onClearError,
                            d = n.size,
                            y = n.renderConfirmationBody,
                            h = n.renderConfirmationFooter,
                            b = n.className,
                            O = n.isGift,
                            S = n.isGiftable,
                            g = n.needsToBeGift,
                            _ = n.onIsGiftUpdate,
                            v = n.transitionState,
                            m = (Ne(e = {}, E.Rg.CONFIRM, {
                                renderBody: y,
                                renderFooter: h
                            }), Ne(e, E.Rg.SELECT_PLAN, {
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
                            R = this.stepsToRender;
                        return (0, r.jsx)(me, {
                            transitionState: v,
                            className: b,
                            isPurchasing: o,
                            canSubmit: i,
                            submitButtonText: u,
                            useShinySubmitButton: a,
                            legalNotice: c,
                            renderHeader: s,
                            onPaymentSourceChange: l,
                            price: f,
                            onClearError: p,
                            size: d,
                            extraRenderers: m,
                            step: P,
                            steps: R,
                            paymentSourceId: T,
                            isGiftable: S,
                            isGift: O,
                            needsToBeGift: g,
                            onIsGiftUpdate: _,
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
                        t && Ae(e.prototype, t);
                        n && Ae(e, n)
                    }(n, [{
                        key: "stepsToRender",
                        get: function() {
                            var e = this.props.prependSteps,
                                t = this.state.steps;
                            return null != e ? Ze(e).concat(Ze(t)) : t
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
                renderConfirmationBody: J.VqG,
                renderConfirmationFooter: J.VqG,
                renderSelectPlanBody: J.VqG,
                renderSelectPlanFooter: J.VqG
            };
            const Fe = o.forwardRef((function(e, t) {
                var n = Me((0, a.Wu)([O.Z], (function() {
                        return [O.Z.paymentSources, O.Z.defaultPaymentSourceId]
                    })), 2),
                    o = n[0],
                    i = n[1],
                    u = (0, a.e7)([h.Z], (function() {
                        return h.Z.error
                    })),
                    c = Me((0, a.Wu)([b.Z], (function() {
                        return [b.Z.error, b.Z.isAwaitingAuthentication]
                    })), 2),
                    s = c[0],
                    l = c[1];
                return (0, r.jsx)(Ge, we(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            Ne(e, t, n[t])
                        }))
                    }
                    return e
                }({}, e), {
                    ref: t,
                    billingError: null != s ? s : u,
                    paymentSources: o,
                    defaultPaymentSourceId: i,
                    isAwaitingAuthentication: l
                }))
            }));
            var Ye = n(446483),
                He = n(560213),
                Ve = n(94340),
                We = n(959207),
                Qe = n(473903),
                ze = n(151367),
                Ke = n(908434),
                qe = n(746974),
                Je = n(325213),
                Xe = n(669426),
                $e = n(750203),
                et = n(652591),
                tt = n(661123),
                nt = n(557931),
                rt = n(534681),
                ot = n(934869),
                it = n(910740),
                ut = n(320641),
                at = n(6369),
                ct = n.n(at);

            function st(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function lt(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function ft(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        c = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function pt(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            ft(i, r, o, u, a, "next", e)
                        }

                        function a(e) {
                            ft(i, r, o, u, a, "throw", e)
                        }
                        u(void 0)
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

            function bt(e) {
                bt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return bt(e)
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
                t && vt(e, t)
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

            function St(e, t) {
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

            function _t(e, t) {
                return !t || "object" !== It(t) && "function" != typeof t ? lt(e) : t
            }

            function vt(e, t) {
                vt = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return vt(e, t)
            }

            function mt(e, t) {
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
                    if ("string" == typeof e) return st(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return st(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var It = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Pt(e) {
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
                    return _t(this, n)
                }
            }
            var Tt, Rt = function(e, t) {
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
            }(Tt || (Tt = {}));
            var At = function(e) {
                    Ot(n, e);
                    var t = Pt(n);

                    function n() {
                        dt(this, n);
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
                        var i, a = lt(e);
                        e.handlePurchase = (i = pt((function(e) {
                            var t, n, r, o, i, u, c;
                            return Rt(this, (function(s) {
                                switch (s.label) {
                                    case 0:
                                        t = a.props, n = t.applicationId, r = t.sku;
                                        o = a.getPrice();
                                        i = null != o ? o.amount : 0;
                                        u = null != o ? o.currency : J.pKx.USD;
                                        if (null == r) throw new Error("SKU is null during purchase");
                                        if (Ke.Z.isPurchasingSKU) return [2];
                                        s.label = 1;
                                    case 1:
                                        s.trys.push([1, 3, , 4]);
                                        et.default.track(J.rMx.PAYMENT_FLOW_COMPLETED, St(Et({}, a.getBaseAnalyticsData()), {
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
                                        s.sent();
                                        (0, l.Bv)();
                                        return [3, 4];
                                    case 3:
                                        c = s.sent();
                                        et.default.track(J.rMx.PAYMENT_FLOW_FAILED, St(Et({}, a.getBaseAnalyticsData()), {
                                            payment_gateway: e.type === J.HeQ.CARD ? J.gg$.STRIPE : J.gg$.BRAINTREE,
                                            payment_source_id: e.id,
                                            duration_ms: Date.now() - a._flowStartTime,
                                            payment_error_code: c.code
                                        }));
                                        throw c;
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
                            et.default.track(J.rMx.PAYMENT_FLOW_STEP, St(Et({}, e.getBaseAnalyticsData()), {
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
                                children: (0, r.jsxs)(I.Z, {
                                    direction: I.Z.Direction.VERTICAL,
                                    children: [(0, r.jsx)(c.ModalCloseButton, {
                                        onClick: function() {
                                            return e.handleClose()
                                        },
                                        className: ct().confirmCloseButton
                                    }), null != u ? (0, r.jsx)(ot.Z, {
                                        giftCode: u,
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
                        return null == n ? null : n[null != r ? r : Ke.c]
                    };
                    i.componentDidMount = function() {
                        var e = this,
                            t = this.props,
                            n = t.sku,
                            r = t.skuId,
                            o = t.applicationId;
                        null == n ? f.jU(o, r).catch((function(t) {
                            return e.handleClose(t.message)
                        })) : et.default.track(J.rMx.PAYMENT_FLOW_STARTED, this.getBaseAnalyticsData())
                    };
                    i.componentDidUpdate = function(e, t) {
                        null == e.sku && null != this.props.sku && et.default.track(J.rMx.PAYMENT_FLOW_STARTED, this.getBaseAnalyticsData());
                        this.checkPriceChange(this.getSkuPrice(e, t), this.getSkuPrice())
                    };
                    i.checkPriceChange = function(e, t) {
                        var n = this.props,
                            r = n.sku,
                            o = n.onClose;
                        null != e && null != t && e.discount_percent_off !== t.discount_percent_off && s.Z.wait((function() {
                            if (null == r) throw new Error("Unexpected null SKU");
                            o(J.G5l)
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
                        return St(Et({}, (0, Ve.Z)(t)), {
                            load_id: this._loadId,
                            payment_type: J.Zuq[J.GZQ.ONE_TIME],
                            is_gift: this.isGift,
                            client_event_source: r === J.IlC.OVERLAY ? J.IlC.OVERLAY : null,
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
                        var a = (0, rt.hX)((0, P.Xf)()),
                            c = [];
                        null != a && t.supportedOperatingSystems.includes(a) || i || c.push((0, r.jsx)(U.Z, {
                            icon: G.Z,
                            iconSize: U.Z.Sizes.SMALL,
                            color: U.Z.Colors.WARNING,
                            className: ct().errorBlock,
                            children: M.Z.Messages.APPLICATION_STORE_PURCHASE_GAME_CURRENT_OS_UNSUPPORTED
                        }, Tt.UNSUPPORTED_OS));
                        n && c.push((0, r.jsx)(U.Z, {
                            icon: G.Z,
                            iconSize: U.Z.Sizes.SMALL,
                            color: U.Z.Colors.WARNING,
                            className: ct().errorBlock,
                            children: M.Z.Messages.APPLICATION_STORE_PURCHASE_TEST_MODE
                        }, Tt.TEST_MODE));
                        !0 === u && this.isGiftable && c.push((0, r.jsx)(U.Z, {
                            icon: G.Z,
                            iconSize: U.Z.Sizes.SMALL,
                            color: U.Z.Colors.PRIMARY,
                            className: ct().errorBlock,
                            children: M.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_ONLY
                        }, Tt.GIFT_ONLY));
                        t.isPreorder() && c.push((0, r.jsx)(U.Z, {
                            icon: G.Z,
                            iconSize: U.Z.Sizes.SMALL,
                            color: U.Z.Colors.PRIMARY,
                            className: ct().errorBlock,
                            children: M.Z.Messages.APPLICATION_STORE_PURCHASE_WARNING_PREORDER.format({
                                date: (0, nt.en)(t)
                            })
                        }, Tt.PREORDER));
                        return (0, r.jsx)(o.Fragment, {
                            children: c
                        })
                    };
                    i.renderGenericError = function(e, t) {
                        return null == e && null == t ? null : (0, r.jsx)(c.FormErrorBlock, {
                            className: ct().errorBlock,
                            children: null != e ? e.message : null != t ? t.message : null
                        })
                    };
                    i.renderDefaultHeader = function(e, t, n) {
                        var o = this,
                            i = this.props,
                            u = i.isIAP,
                            a = i.application,
                            s = i.sku,
                            l = i.purchaseError;
                        if (null == s || null == a) return null;
                        var f = this.getPrice();
                        return (0, r.jsxs)(c.ModalHeader, {
                            direction: I.Z.Direction.VERTICAL,
                            align: I.Z.Align.START,
                            separator: !1,
                            children: [(0, r.jsx)(Ye.Z, {
                                application: a,
                                splashSize: 880
                            }), (0, r.jsxs)(I.Z, {
                                align: I.Z.Align.CENTER,
                                className: ct().headerHeader,
                                children: [(0, r.jsx)(c.FormTitle, {
                                    tag: c.FormTitleTags.H4,
                                    children: (0, ut.Y)(u, s.type)
                                }), (0, r.jsx)(c.ModalCloseButton, {
                                    onClick: function() {
                                        return o.handleClose()
                                    }
                                })]
                            }), (0, r.jsxs)(I.Z, {
                                align: I.Z.Align.CENTER,
                                className: ct().headerContent,
                                children: [(0, r.jsxs)(I.Z, {
                                    align: I.Z.Align.CENTER,
                                    children: [(0, r.jsx)($e.Z, {
                                        game: a
                                    }), (0, r.jsx)("div", {
                                        className: ct().applicationName,
                                        children: s.name
                                    })]
                                }), (0, r.jsx)("div", {
                                    className: ct().price,
                                    children: null != f ? (0, F.T4)(f.amount, f.currency) : (0, r.jsx)(c.Spinner, {
                                        type: c.Spinner.Type.PULSING_ELLIPSIS,
                                        className: ct().priceSpinner
                                    })
                                })]
                            }), this.renderPurchaseWarning(), this.renderGenericError(l, n), t.length > 1 ? (0, r.jsx)(Xe.Z, {
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
                            s = t.isUserEntitledToSku,
                            l = t.forceConfirmationStepOnMount,
                            d = t.transitionState;
                        return null == n || o ? (0, r.jsx)(c.Spinner, {}) : (0, r.jsx)(Fe, {
                            ref: this._paymentModalRef,
                            transitionState: d,
                            canSubmit: null != this.getSkuPrice(),
                            needsToBeGift: n.type === J.epS.DURABLE_PRIMARY && !0 === s,
                            isGiftable: this.isGiftable,
                            legalNotice: u ? (0, r.jsx)(p.Z, {
                                isEmbeddedIAP: u
                            }) : null,
                            isPurchasing: i,
                            purchaseError: a,
                            price: this.getPrice(),
                            size: c.ModalSize.SMALL,
                            onPurchase: this.handlePurchase,
                            onIsGiftUpdate: f.x9,
                            onPaymentSourceChange: this.handlePaymentSourceChange,
                            onClose: function() {
                                return e.handleClose()
                            },
                            onClearError: f.pB,
                            renderHeader: this.renderHeader,
                            renderConfirmationBody: this.renderConfirmation,
                            submitButtonText: this.isGift ? M.Z.Messages.APPLICATION_STORE_BUY_GIFT : M.Z.Messages.APPLICATION_STORE_BUY,
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
                Nt = o.forwardRef((function(e, t) {
                    var n, o, i = e.applicationId,
                        u = e.skuId,
                        c = gt(e, ["applicationId", "skuId"]),
                        s = (0, a.e7)([We.Z], (function() {
                            return We.Z.getGame(i)
                        })),
                        l = (0, tt.yE)(null !== (n = null == s ? void 0 : s.flags) && void 0 !== n ? n : 0, J.udG.EMBEDDED) && (0, tt.yE)(null !== (o = null == s ? void 0 : s.flags) && void 0 !== o ? o : 0, J.udG.EMBEDDED_IAP),
                        f = mt((0, a.Wu)([Ke.Z], (function() {
                            return [Ke.Z.getPricesForSku(u), Ke.Z.isPurchasingSKU, Ke.Z.error, Ke.Z.analyticsLocation, Ke.Z.promotionId, Ke.Z.giftCode, Ke.Z.isGift, Ke.Z.isIAP, Ke.Z.forceConfirmationStepOnMount]
                        })), 9),
                        p = f[0],
                        d = f[1],
                        y = f[2],
                        h = f[3],
                        O = f[4],
                        E = f[5],
                        S = f[6],
                        g = f[7],
                        _ = f[8],
                        v = mt((0, a.Wu)([qe.Z], (function() {
                            return [qe.Z.get(u), qe.Z.isFetching(u)]
                        })), 2),
                        m = v[0],
                        I = v[1],
                        P = (0, a.e7)([He.Z, Je.Z], (function() {
                            return Je.Z.inTestModeForApplication(i) || He.Z.inDevModeForApplication(i)
                        }), [i]),
                        T = (0, a.e7)([ze.Z, Qe.default], (function() {
                            return ze.Z.isEntitledToSku(Qe.default.getCurrentUser(), u, i)
                        })),
                        R = (0, a.e7)([b.Z], (function() {
                            return b.Z.error
                        }));
                    return (0,
                        r.jsx)(At, St(Et({}, c), {
                        application: s,
                        applicationId: i,
                        skuId: u,
                        prices: p,
                        isPurchasing: d,
                        purchaseError: null != R ? R : y,
                        analyticsLocation: h,
                        promotionId: O,
                        isIAP: g,
                        giftCode: E,
                        isGift: S,
                        forceConfirmationStepOnMount: _,
                        sku: m,
                        isFetchingSKU: I,
                        isInTestMode: P,
                        isUserEntitledToSku: T,
                        isEmbeddedIAP: l,
                        ref: t
                    }))
                })),
                Ct = function(e) {
                    Ot(n, e);
                    var t = Pt(n);

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
                        return (0, r.jsx)(Nt, St(Et({}, this.props), {
                            ref: this._skuPaymentModalRef,
                            onClose: function() {
                                return e.handleClose()
                            }
                        }))
                    };
                    return n
                }(o.PureComponent);
            const wt = Ct
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
                a = n(882723),
                c = n(473708),
                s = n(949095),
                l = n.n(s);

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
                var t = b(n);

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
                        return null !== (t = e.props.label) && void 0 !== t ? t : e.props.disallowBackupCodes ? c.Z.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : c.Z.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    };
                    e.getSupportedCodeTypes = function() {
                        return e.props.disallowBackupCodes ? c.Z.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : c.Z.Messages.TWO_FA_AUTH_CODE
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
                        s = t.children,
                        f = t.error,
                        p = t.isLoading,
                        d = t.maxLength,
                        y = t.transitionState,
                        h = t.helpMessage,
                        b = t.retryPrompt,
                        O = t.retrySuccessMessage,
                        E = this.state,
                        S = E.code,
                        g = E.errorMessage,
                        _ = E.retrySuccess,
                        v = o.Children.count(s) > 0 ? (0, r.jsx)(a.Card, {
                            type: a.Card.Types.WARNING,
                            className: l().card,
                            children: (0,
                                r.jsx)(a.Text, {
                                variant: "text-md/normal",
                                children: s
                            })
                        }) : null,
                        m = null != b ? (0, r.jsxs)(a.Text, {
                            className: u()(l().submitText, l().spacing),
                            variant: "text-sm/normal",
                            children: [(0, r.jsx)("br", {}), (0, r.jsx)(a.Clickable, {
                                className: u()(l().spacing, l().link),
                                onClick: this.handleRetry,
                                children: (0, r.jsx)(a.Anchor, {
                                    children: b
                                })
                            })]
                        }) : null,
                        I = _ ? (0, r.jsx)(a.Card, {
                            type: a.Card.Types.SUCCESS,
                            className: l().card,
                            children: (0, r.jsx)(a.Text, {
                                variant: "text-md/normal",
                                children: O
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
                                }) : null, v, I, (0, r.jsxs)(a.FormItem, {
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
                                        children: null != f ? f : g
                                    }) : null, m]
                                })]
                            }), (0, r.jsxs)(a.ModalFooter, {
                                children: [(0, r.jsx)(a.Button, {
                                    type: "submit",
                                    disabled: p || 0 === S.length,
                                    children: null != i ? i : c.Z.Messages.CONFIRM
                                }), (0, r.jsx)(a.Button, {
                                    onClick: this.handleCancel,
                                    disabled: p,
                                    look: a.Button.Looks.LINK,
                                    color: a.Button.Colors.PRIMARY,
                                    children: c.Z.Messages.CANCEL
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

            function u(e) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return u(e)
            }

            function a(e, t) {
                return !t || "object" !== s(t) && "function" != typeof t ? function(e) {
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
            var s = function(e) {
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
                    t && c(e, t)
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
                        c = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function i(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var u = e.apply(t, n);

                        function a(e) {
                            o(u, r, i, a, c, "next", e)
                        }

                        function c(e) {
                            o(u, r, i, a, c, "throw", e)
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
                return c.apply(this, arguments)
            }

            function c() {
                return (c = i((function(e, t) {
                    var o, i, a, c;
                    return u(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                0;
                                return [4, Promise.all([n.e(40532), n.e(39685), n.e(47007), n.e(6543), n.e(29342), n.e(84832), n.e(27499), n.e(79913), n.e(64466), n.e(92465), n.e(45353), n.e(10675), n.e(73727), n.e(52555), n.e(61953), n.e(84441), n.e(67367), n.e(33227), n.e(4230), n.e(24501), n.e(46458)]).then(n.bind(n, 624501))];
                            case 1:
                                o = u.sent(), i = o.default;
                                if (null != (a = i(e, {
                                        skipExtensionCheck: t,
                                        analyticsLocations: []
                                    }))) a(null);
                                else if (r.FB) window.open(e);
                                else {
                                    (c = document.createElement("a")).href = e;
                                    c.target = "_blank";
                                    c.rel = "noreferrer noopener";
                                    c.click()
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
                hH: () => A,
                AB: () => j,
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
                c = n(61209),
                s = n(5544),
                l = n(27851),
                f = n(21372),
                p = n(567403),
                d = n(52467),
                y = n(682776),
                h = n(491260),
                b = n(563367),
                O = n(715107),
                E = n(464187),
                S = n(407561),
                g = n(652591),
                _ = n(563135),
                v = n(671723);
            var m = n(2590),
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

            function R(e) {
                var t = 0;
                for (var n in e) t += 1;
                return t
            }

            function A(e) {
                if (null == e) return null;
                var t = p.Z.getGuild(e);
                if (null == t) return null;
                var n, r = a.default.getId(),
                    o = f.ZP.getMember(e, r),
                    i = s.ZP.getChannels(e),
                    u = i[s.sH].length,
                    c = i[s.Zb].length,
                    d = S.Z.getVoiceStates(e);
                return {
                    guild_id: t.id,
                    guild_size_total: l.Z.getMemberCount(e),
                    guild_num_channels: u + c,
                    guild_num_text_channels: u,
                    guild_num_voice_channels: c,
                    guild_num_roles: R(t.roles),
                    guild_member_num_roles: null != o ? o.roles.length : 0,
                    guild_member_perms: String(null !== (n = y.Z.getGuildPermissions(t)) && void 0 !== n ? n : _.ZP.NONE),
                    guild_is_vip: t.hasFeature(m.oNc.VIP_REGIONS),
                    is_member: null != o,
                    num_voice_channels_active: R(d)
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
                var t = c.Z.getChannel(e);
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
                        return null != t && i.Z.has(t.deny, m.Plq.VIEW_CHANNEL)
                    };
                    n = u.Ec.has(e.type) && null != e.parent_id ? o(c.Z.getChannel(e.parent_id)) : o(e)
                }
                return {
                    channel_id: e.id,
                    channel_type: e.type,
                    channel_size_total: e.isPrivate() ? e.recipients.length : 0,
                    channel_member_perms: String(null != r && null !== (t = y.Z.getChannelPermissions(e)) && void 0 !== t ? t : _.ZP.NONE),
                    channel_hidden: n
                }
            }

            function j(e) {
                if (null == e) return null;
                var t = c.Z.getChannel(e);
                if (null == t) return null;
                var n, r = d.Z.isVideoEnabled(),
                    o = b.Z.getMediaSessionId();
                return T({
                    channel_id: t.id,
                    channel_type: t.type,
                    guild_id: t.getGuildId(),
                    media_session_id: o
                }, Z(t.getGuildId(), t.id, r), {
                    game_name: null != (n = v.ZP.getCurrentGameForAnalytics()) ? n.name : null,
                    game_id: null != n ? n.id : null
                })
            }

            function L(e, t) {
                return null == e ? null != t ? t : null : e.isPrivate() ? null : null !== (r = null !== (n = e.getGuildId()) && void 0 !== n ? n : t) && void 0 !== r ? r : null;
                var n, r
            }

            function M(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!g.default.isThrottled(e)) {
                    var r = !("location" in t) || t.location !== m.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
                        o = "guild_id" in t ? t.guild_id : r ? E.Z.getGuildId() : null,
                        i = "channel_id" in t ? t.channel_id : r ? O.Z.getChannelId(o) : null,
                        u = c.Z.getChannel(i),
                        a = L(u, o),
                        s = T({}, t, A(a), null != o && null != i && (0, I.AB)(i) ? N(0, i) : w(u));
                    g.default.track(e, s, {
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
                        return e.type === m.IIU.CUSTOM_STATUS
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
                Z: () => g
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

            function c(e) {
                c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return c(e)
            }

            function s(e) {
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
                    var n, r = c(e);
                    if (t) {
                        var o = c(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return f(this, n)
                }
            }
            var h = {},
                b = {},
                O = [];

            function E(e) {
                var t = e.entitlements,
                    n = !1,
                    r = !0,
                    o = !1,
                    u = void 0;
                try {
                    for (var a, c = t[Symbol.iterator](); !(r = (a = c.next()).done); r = !0) {
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
                        r || null == c.return || c.return()
                    } finally {
                        if (o) throw u
                    }
                }
                n && (h = s({}, h));
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
                    return null == e ? O : b[e]
                };
                r.getApplication = function(e) {
                    return h[e]
                };
                return n
            }(r.ZP.Store);
            S.displayName = "ApplicationStore";
            const g = new S(o.Z, {
                APPLICATION_FETCH_SUCCESS: function(e) {
                    var t = e.application;
                    h = l(s({}, h), a({}, t.id, i.Z.createFromServer(t)))
                },
                APPLICATIONS_FETCH_SUCCESS: function(e) {
                    var t = e.applications,
                        n = s({}, h),
                        r = !0,
                        o = !1,
                        u = void 0;
                    try {
                        for (var a, c = t[Symbol.iterator](); !(r = (a = c.next()).done); r = !0) {
                            var l = a.value;
                            n[l.id] = i.Z.createFromServer(l)
                        }
                    } catch (e) {
                        o = !0;
                        u = e
                    } finally {
                        try {
                            r || null == c.return || c.return()
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
                        for (var c, l = t[Symbol.iterator](); !(i = (c = l.next()).done); i = !0) {
                            var f = c.value.application;
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
                        h = s({}, h);
                        b[n] = o;
                        var p = {};
                        for (var d in b) p[d] = b[d];
                        b = p
                    }
                    return r
                },
                CONNECTION_OPEN: function() {
                    h = {};
                    b = {}
                }
            })
        },
        269116: (e, t, n) => {
            "use strict";
            n.d(t, {
                I: () => b,
                Z: () => O
            });
            var r = n(496486),
                o = n.n(r),
                i = n(306472),
                u = n(296602),
                a = n(120415),
                c = n(310126);

            function s(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        c = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function l(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            s(i, r, o, u, a, "next", e)
                        }

                        function a(e) {
                            s(i, r, o, u, a, "throw", e)
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

            function b(e, t) {
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
                                return [4, c.ZP.ensureModule("discord_game_utils")];
                            case 2:
                                r.sent();
                                return [4, c.ZP.requireModule("discord_game_utils")];
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
        387099: (e, t, n) => {
            "use strict";
            n.d(t, {
                Q: () => a,
                Z: () => c
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
            const c = i
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
                        c = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function c(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            a(i, r, o, u, c, "next", e)
                        }

                        function c(e) {
                            a(i, r, o, u, c, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function s(e, t, n) {
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
                        s(e, t, n[t])
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
                    },
                    "function" == typeof Symbol && (i[Symbol.iterator] = function() {
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
                (0, o.ZD)(c((function() {
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
                (0, o.ZD)(c((function() {
                    var t, o;
                    return f(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(84441), n.e(88110), n.e(92291)]).then(n.bind(n, 854104))];
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
                WC: () => b,
                z8: () => O,
                km: () => S,
                k0: () => g,
                af: () => _
            });
            var r, o, i, u, a = n(2590),
                c = n(203600),
                s = n(473708);

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
                    quality: c.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_30,
                    quality: c.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_15,
                    quality: c.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_5,
                    preset: i.PRESET_DOCUMENTS
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: o.FPS_60,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: c.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: o.FPS_30,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: c.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: o.FPS_15,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: c.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: o.FPS_60,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: c.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: o.FPS_30,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: c.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: o.FPS_15,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: c.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: o.FPS_60,
                    guildPremiumTier: a.Eu4.TIER_1,
                    quality: c.ys.MID_STREAMING_QUALITY
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
                    quality: c.ys.MID_STREAMING_QUALITY
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
            var b = [h(r.RESOLUTION_720), h(r.RESOLUTION_1080), h(r.RESOLUTION_1440), h(r.RESOLUTION_SOURCE, (function() {
                    return s.Z.Messages.SCREENSHARE_SOURCE
                }))],
                O = [h(r.RESOLUTION_720), h(r.RESOLUTION_1080), h(r.RESOLUTION_1440)],
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
                    return s.Z.Messages.SCREENSHARE_SOURCE
                }))],
                g = [h(o.FPS_15), h(o.FPS_30), h(o.FPS_60)],
                _ = [h(o.FPS_15, (function() {
                    return s.Z.Messages.STREAM_FPS_OPTION.format({
                        value: o.FPS_15
                    })
                })), h(o.FPS_30, (function() {
                    return s.Z.Messages.STREAM_FPS_OPTION.format({
                        value: o.FPS_30
                    })
                })), h(o.FPS_60, (function() {
                    return s.Z.Messages.STREAM_FPS_OPTION.format({
                        value: o.FPS_60
                    })
                }))]
        },
        327930: (e, t, n) => {
            "use strict";
            n.d(t, {
                Jv: () => h,
                M0: () => b,
                Qj: () => O,
                Ao: () => E,
                YO: () => S,
                VO: () => g
            });
            var r = n(61209),
                o = n(567403),
                i = n(682776),
                u = n(968696),
                a = n(2590),
                c = n(897196),
                s = Array.from(c.Vg).map((function(e) {
                    return u.Z.escape(e)
                })).join("|"),
                l = new RegExp("^/channels/(\\d+|".concat(a.ME, ")(?:/)?(\\d+|").concat(s, ")?")),
                f = new RegExp("^/channels/(\\d+|".concat(a.ME, ")(?:/)(\\d+|").concat(s, ")(?:/)(\\d+)")),
                p = new RegExp("^/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)"),
                d = new RegExp("^/guild-stages/(\\d+)(?:/)?(\\d+)?"),
                y = new RegExp("^/events/(\\d+)(?:/)(\\d+)?"),
                h = new RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+|".concat(a.ME, ")(?:/(\\d+|[a-zA-Z-]+))?(?:/(\\d+|[a-zA-Z-]+))?")),
                b = new RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)");

            function O(e) {
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

            function g(e) {
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
                        c = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function u(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var u = e.apply(t, n);

                        function a(e) {
                            i(u, r, o, a, c, "next", e)
                        }

                        function c(e) {
                            i(u, r, o, a, c, "throw", e)
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
            var s = function(e, t) {
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
                    return s(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, n.e(72591).then(n.bind(n, 672591))];
                            case 1:
                                t = i.sent(), o = t.default;
                                return [2, function(t) {
                                    return (0, r.jsx)(o, c(function(e) {
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
                Wo: () => b,
                Gv: () => E,
                vB: () => S
            });
            var r = n(268335),
                o = n(335186),
                i = n(348592),
                u = n(249052),
                a = n(2590),
                c = n(520453),
                s = n(473708);

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
            var d, y = new Set([c.pK.ARS, c.pK.CLP, c.pK.COP]),
                h = new Set([c.pK.USD, c.pK.JPY]),
                b = (f(d = {}, a.HeQ.CARD, (function() {
                        return s.Z.Messages.PAYMENT_SOURCE_CREDIT_CARD_CARD_ONLY
                    })), f(d, a.HeQ.PAYPAL, (function() {
                        return s.Z.Messages.PAYMENT_SOURCE_PAYPAL
                    })), f(d, a.HeQ.SOFORT, (function() {
                        return s.Z.Messages.PAYMENT_SOURCE_SOFORT
                    })), f(d, a.HeQ.GIROPAY, (function() {
                        return s.Z.Messages.PAYMENT_SOURCE_GIROPAY
                    })), f(d, a.HeQ.PRZELEWY24, (function() {
                        return s.Z.Messages.PAYMENT_SOURCE_PRZELEWY24
                    })), f(d, a.HeQ.PAYSAFE_CARD, (function() {
                        return s.Z.Messages.PAYMENT_SOURCE_PAYSAFE_CARD
                    })), f(d, a.HeQ.GCASH, (function() {
                        return s.Z.Messages.PAYMENT_SOURCE_GCASH
                    })), f(d, a.HeQ.GRABPAY_MY, (function() {
                        return s.Z.Messages.PAYMENT_SOURCE_GRABPAY
                    })),
                    f(d, a.HeQ.MOMO_WALLET, (function() {
                        return s.Z.Messages.PAYMENT_SOURCE_MOMO_WALLET
                    })), f(d, a.HeQ.VENMO, (function() {
                        return s.Z.Messages.PAYMENT_SOURCE_VENMO
                    })), f(d, a.HeQ.KAKAOPAY, (function() {
                        return s.Z.Messages.PAYMENT_SOURCE_KAKAOPAY
                    })), f(d, a.HeQ.GOPAY_WALLET, (function() {
                        return s.Z.Messages.PAYMENT_SOURCE_GOPAY_WALLET
                    })), f(d, a.HeQ.BANCONTACT, (function() {
                        return s.Z.Messages.PAYMENT_SOURCE_BANCONTACT
                    })), f(d, a.HeQ.EPS, (function() {
                        return s.Z.Messages.PAYMENT_SOURCE_EPS
                    })), f(d, a.HeQ.IDEAL, (function() {
                        return s.Z.Messages.PAYMENT_SOURCE_IDEAL
                    })), d),
                O = [a.HeQ.EPS, a.HeQ.BANCONTACT, a.HeQ.IDEAL, a.HeQ.SOFORT, a.HeQ.GIROPAY, a.HeQ.SEPA_DEBIT, a.HeQ.PAYSAFE_CARD],
                E = function(e, t, n, r) {
                    if (null == e) return "";
                    var i = (0, o.q9)(e);
                    return t === c.pK.EUR ? n ? s.Z.Messages.LOCALIZED_PRICING_NOTICE_GENERALIZED_PAYMENT_METHODS_PROMO.format({
                        country: i
                    }) : s.Z.Messages.LOCALIZED_PRICING_NOTICE_NO_LOWERED_PRICE.format({
                        currencyISOCode: t.toUpperCase()
                    }) : r ? s.Z.Messages.NOTICE_NITRO_PRICE_CHANGED.format({
                        countryName: i
                    }) : s.Z.Messages.LOCALIZED_PRICING_NOTICE.format({
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
                        _ = t.paymentSourceTypes,
                        v = 0 !== _.length,
                        m = g(d),
                        I = (0, u.T4)(E, S, {
                            style: "currency",
                            currency: S,
                            currencyDisplay: "symbol",
                            localeOverride: m
                        }),
                        P = s.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY.format({
                            helpCenterLink: i.Z.getArticleURL(a.BhN.LOCALIZED_PRICING),
                            currencyISOCode: S.toUpperCase(),
                            localizedPriceWithCurrencySymbol: I
                        });
                    h.has(S) && (P = s.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_EXISTING_CURRENCY.format({
                        helpCenterLink: i.Z.getArticleURL(a.BhN.LOCALIZED_PRICING),
                        localizedPriceWithCurrencySymbol: I
                    }));
                    y.has(S) && (P = s.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY_WITH_AMBIGUOUS_SYMBOL.format({
                        helpCenterLink: i.Z.getArticleURL(a.BhN.LOCALIZED_PRICING),
                        currencyISOCode: S.toUpperCase(),
                        localizedPriceWithCurrencySymbol: I
                    }));
                    null == n || n.hasPremiumNitroMonthly || (P = s.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_WITHOUT_PRICE.format({
                        helpCenterLink: i.Z.getArticleURL(a.BhN.LOCALIZED_PRICING),
                        currencyISOCode: S.toUpperCase()
                    }));
                    S === c.pK.EUR && (P = l ? s.Z.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE_SINGLE_STRING.format({
                        country: (0, o.q9)(d),
                        currencyISOCode: S.toUpperCase(),
                        helpCenterLink: i.Z.getArticleURL(a.BhN.LOCALIZED_PRICING)
                    }) : s.Z.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE.format({
                        currencyISOCode: S.toUpperCase(),
                        helpCenterLink: i.Z.getArticleURL(a.BhN.LOCALIZED_PRICING)
                    }));
                    if (v) {
                        var T = O.filter((function(e) {
                                return _.includes(e)
                            })),
                            R = _.filter((function(e) {
                                return !O.includes(e)
                            })),
                            A = p(T).concat(p(R)).slice(0, 2).map((function(e) {
                                var t, n;
                                return null !== (n = null === (t = b[e]) || void 0 === t ? void 0 : t.call(b)) && void 0 !== n ? n : s.Z.Messages.PAYMENT_SOURCE_UNKNOWN
                            }));
                        _.length >= 3 && A.push(s.Z.Messages.LOCALIZED_PRICING_MORE_NEW_WAYS_TO_PAY);
                        var N = new Intl.ListFormat(f, {
                            style: "short",
                            type: "conjunction"
                        });
                        P = s.Z.Messages.LOCALIZED_PRICING_PAYMENT_METHODS_PROMO.format({
                            helpCenterLink: i.Z.getArticleURL(a.BhN.LOCALIZED_PRICING),
                            paymentMethods: N.format(A)
                        })
                    }
                    return {
                        localizedPricingBannerHeader: s.Z.Messages.LOCALIZED_PRICING_BANNER_HEADER.format({
                            country: (0, o.q9)(d)
                        }),
                        localizedPricingBannerBody: P,
                        localizedPricingBannerLinkOnly: s.Z.Messages.LOCALIZED_PRICING_BANNER_LINK_ONLY.format({
                            helpCenterLink: i.Z.getArticleURL(a.BhN.LOCALIZED_PRICING)
                        }),
                        localizedPricingBannerSubNotif: v ? void 0 : s.Z.Messages.LOCALIZED_PRICING_BANNER_SUB_NOTIF
                    }
                },
                g = function(e) {
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
                IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS: 64
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
                c = n(615796),
                s = n(711531);

            function l() {
                var e = (0, o.e7)([s.Z], (function() {
                        return s.Z.getDefaultBillingCountryCode()
                    })),
                    t = (0, o.e7)([c.Z], (function() {
                        return c.Z.ipCountryCode
                    })),
                    n = (0, o.e7)([a.default], (function() {
                        return a.default.isAuthenticated()
                    }));
                r.useEffect((function() {
                    i.Z.wait((function() {
                        !n || c.Z.isPaymentSourceFetching || s.Z.hasFetchedPaymentSources || u.tZ()
                    }))
                }), [n]);
                r.useEffect((function() {
                    n && !c.Z.ipCountryCodeLoaded && u.GE()
                }), [t, n]);
                return {
                    defaultBillingCountryCode: e,
                    ipCountryCode: t
                }
            }
        },
        820610: (e, t, n) => {
            "use strict";
            n.d(t, {
                K: () => g,
                Z: () => v
            });
            var r = n(785893),
                o = (n(667294), n(441143)),
                i = n.n(o),
                u = n(882723),
                a = n(782786),
                c = n(709189),
                s = n(694329),
                l = n(530562),
                f = n(520453),
                p = n(473708),
                d = n(641352),
                y = n.n(d),
                h = n(497206),
                b = n.n(h);

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

            function g(e) {
                var t = e.purchaseType,
                    n = e.plan,
                    r = e.premiumSubscription,
                    o = e.isGift,
                    u = e.planGroup,
                    a = e.isPrepaidPaymentSource;
                if (t === f.GZ.ONE_TIME) return p.Z.Messages.GUILD_PRODUCT_PURCHASE_MODAL_CTA;
                i()(null != n, "Subscription plan must be selected to render SubscriptionReviewButton");
                return o ? p.Z.Messages.PAYMENT_MODAL_BUTTON_PREMIUM_GIFT : (0, s.PV)(n.id) ? a ? p.Z.Messages.BILLING_SELECT_PLAN : null != r ? (0, l.R4)(r, n.id, u) ? p.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE : p.Z.Messages.BILLING_SWITCH_PLAN_CHANGE : (0, s.W_)(null, n) : p.Z.Messages.BILLING_SUBSCRIBE_TO_PLAN
            }

            function _(e, t) {
                if (null != e.current) {
                    e.current.scrollIntoView({
                        behavior: "smooth"
                    });
                    t()
                }
            }

            function v(e) {
                var t = e.legalTermsNodeRef,
                    n = e.invoiceError,
                    o = e.planError,
                    i = e.disablePurchase,
                    s = e.flashLegalTerms,
                    l = e.isSubmitting,
                    f = e.premiumSubscription,
                    d = e.isGift,
                    h = e.planGroup,
                    O = e.isPrepaid,
                    v = e.isTrial,
                    m = e.makePurchase,
                    I = e.needsPaymentSource,
                    P = (0, a.usePaymentContext)(),
                    T = P.selectedPlan,
                    R = P.hasAcceptedTerms,
                    A = g({
                        purchaseType: P.purchaseType,
                        plan: T,
                        premiumSubscription: f,
                        isGift: d,
                        planGroup: h,
                        isPrepaidPaymentSource: O
                    });
                return null != n || null != o || i ? (0, r.jsx)(u.Button, {
                    color: u.Button.Colors.GREEN,
                    disabled: !0,
                    children: A
                }) : I ? (0, r.jsx)(u.Tooltip, {
                    text: p.Z.Messages.BILLING_SELECT_PAYMENT_SOURCE_TOOLTIP,
                    children: function(e) {
                        return (0, r.jsx)(u.Button, S(E({}, e), {
                            color: u.Button.Colors.GREEN,
                            type: "submit",
                            "data-testid": "submitButton",
                            disabled: !0,
                            children: A
                        }))
                    }
                }) : v ? (0, r.jsxs)(c.C, {
                    innerClassName: y().innerButton,
                    "data-testid": R ? "purchase" : "submitButton",
                    onClick: R ? m : function() {
                        return _(t, s)
                    },
                    color: u.Button.Colors.GREEN,
                    submitting: l,
                    children: [(0, r.jsx)("img", {
                        alt: "",
                        className: y().nitroIcon,
                        src: b()
                    }), A]
                }) : R ? (0, r.jsx)(u.Button, {
                    "data-testid": "purchase",
                    onClick: m,
                    color: u.Button.Colors.GREEN,
                    submitting: l,
                    children: A
                }) : (0, r.jsx)(u.Tooltip, {
                    text: p.Z.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP,
                    children: function(e) {
                        return (0, r.jsx)(u.Button, S(E({}, e), {
                            color: u.Button.Colors.GREEN,
                            type: "submit",
                            onClick: function() {
                                return _(t, s)
                            },
                            "data-testid": "submitButton",
                            children: A
                        }))
                    }
                })
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
                E1: () => c,
                f7: () => s,
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
                c = [u.OPTION_7, u.OPTION_8, u.OPTION_9, u.OPTION_10, u.OPTION_1, u.OPTION_2, u.OPTION_3, u.OPTION_4].reduce((function(e, t, n) {
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
                s = "blur",
                l = {
                    width: 1280,
                    height: 720
                },
                f = 10485760
        },
        205294: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
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

            function c(e) {
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
            const s = function(e) {
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
                var t = c(n);

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
                Z: () => b
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

            function c(e, t) {
                return !t || "object" !== f(t) && "function" != typeof t ? function(e) {
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
                    return c(this, n)
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
                    t && s(e, t)
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
            const b = new h(o.Z, {
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
                Z: () => G
            });
            var r = n(110251),
                o = n.n(r),
                i = n(496486),
                u = n.n(i),
                a = n(202351),
                c = n(744564),
                s = n(83797),
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

            function b(e) {
                b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return b(e)
            }

            function O(e, t) {
                return !t || "object" !== _(t) && "function" != typeof t ? function(e) {
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
                }(e, t) || v(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function g(e) {
                return function(e) {
                    if (Array.isArray(e)) return d(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || v(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var _ = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function v(e, t) {
                if (e) {
                    if ("string" == typeof e) return d(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(e, t) : void 0
                }
            }

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
                    var n, r = b(e);
                    if (t) {
                        var o = b(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return O(this, n)
                }
            }
            var I = Object.freeze([]),
                P = {},
                T = {},
                R = {},
                A = {},
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
            var j = function(e) {
                return (0, s.Z)(e) ? 1 : 0
            };

            function L(e, t) {
                return function(e, t) {
                    return w(t) - w(e)
                }(e, t) || function(e, t) {
                    return j(t) - j(e)
                }(e, t) || function(e, t) {
                    var n, r;
                    return (null !== (n = t.created_at) && void 0 !== n ? n : 0) - (null !== (r = e.created_at) && void 0 !== r ? r : 0)
                }(e, t)
            }

            function M(e) {
                delete T[e];
                delete R[e];
                delete A[e];
                if (null != P[e]) {
                    var t = S(u().sortBy(P[e], (function(e) {
                            return -e.timestamp
                        })), 1),
                        n = t[0];
                    if (n.status !== p.Skl.OFFLINE) {
                        T[e] = n.status;
                        R[e] = n.activities;
                        null != n.clientStatus && (A[e] = n.clientStatus)
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
                        R[e] = n.activities;
                        null != n.clientStatus && (A[e] = n.clientStatus)
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
                    var c = u.length > 1 ? g(u).sort(L) : u,
                        s = a[t];
                    u = null != s && o()(s.activities, c) ? s.activities : c;
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
                        var c = i.length > 1 ? g(i).sort(L) : i;
                        a[t] = {
                            status: r,
                            clientStatus: o,
                            activities: c,
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

            function k(e) {
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
            var B = function(e) {
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
                var t = m(n);

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
                    R[l.default.getId()] = t
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
                        return null !== (n = R[e]) && void 0 !== n ? n : I
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
                        for (var i, u = Object.keys(R)[Symbol.iterator](); !(n = (i = u.next()).done); n = !0) {
                            var a = i.value,
                                c = R[a],
                                s = !0,
                                l = !1,
                                f = void 0;
                            try {
                                for (var p, d = c[Symbol.iterator](); !(s = (p = d.next()).done); s = !0) {
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
                                    s || null == d.return || d.return()
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
                    return Object.keys(R)
                };
                r.isMobileOnline = function(e) {
                    var t = A[e];
                    return null != t && t[p.X5t.MOBILE] === p.Skl.ONLINE && t[p.X5t.DESKTOP] !== p.Skl.ONLINE
                };
                r.getState = function() {
                    return {
                        presencesForGuilds: P,
                        statuses: T,
                        activities: R,
                        activityMetadata: N,
                        clientStatuses: A
                    }
                };
                return n
            }(a.ZP.Store);
            B.displayName = "PresenceStore";
            const G = new B(c.Z, {
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
                    R = h({}, r, R[r]);
                    A = h({}, r, {});
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
                    R = t.activities;
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
                    k(e.guild.id)
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
                    k(p.ME);
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
                    if (T[t] === e.status && R[t] === e.activities) return !1;
                    T[t] = e.status;
                    R[t] = e.activities;
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

            function c(e) {
                c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return c(e)
            }

            function s(e) {
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
                    var n, r = c(e);
                    if (t) {
                        var o = c(this).constructor;
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
                b = s({}, h);

            function O() {
                b.affinityUserIds = new Set(b.userAffinities.map((function(e) {
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
                        b.userAffinities = e.userAffinities;
                        b.affinityUserIds = new Set(e.affinityUserIds);
                        b.lastFetched = e.lastFetched
                    }
                    this.syncWith([i.Z], O)
                };
                r.needsRefresh = function() {
                    return Date.now() - b.lastFetched > 864e5
                };
                r.getFetching = function() {
                    return y
                };
                r.getState = function() {
                    return b
                };
                r.getUserAffinities = function() {
                    return b.userAffinities
                };
                r.getUserAffinitiesUserIds = function() {
                    return b.affinityUserIds
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
                    b.userAffinities = null !== (t = n.user_affinities) && void 0 !== t ? t : [];
                    b.lastFetched = Date.now();
                    O();
                    y = !1
                },
                LOAD_USER_AFFINITIES: function() {
                    y = !0
                },
                LOAD_USER_AFFINITIES_FAILURE: function() {
                    y = !1
                },
                LOGOUT: function() {
                    b = s({}, h)
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
                c = n(2590);

            function s(e, t) {
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
                return !t || "object" !== b(t) && "function" != typeof t ? function(e) {
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
            var b = function(e) {
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
            var E = c.QZA.CLOSED,
                S = null,
                g = null,
                _ = {},
                v = {},
                m = {},
                I = null,
                P = null,
                T = !1,
                R = !1,
                A = null,
                N = null,
                C = null,
                w = [],
                j = null,
                L = null;

            function M(e) {
                var t, n, r, o, i, u, s = a.default.getCurrentUser();
                if (null == s) return Z();
                g = null !== (t = e.section) && void 0 !== t ? t : g;
                j = null !== (n = e.section) && void 0 !== n ? n : g;
                null != e.subsection && null != g && (_[g] = e.subsection);
                null != e.scrollPosition && null != g && (v[g] = e.scrollPosition);
                R = !!e.openWithoutBackstack;
                E = c.QZA.OPEN;
                m = {};
                I = f({}, c.oAB.ACCOUNT, {
                    userId: s.id,
                    username: s.username,
                    discriminator: s.discriminator,
                    email: s.email,
                    avatar: s.avatar,
                    password: "",
                    newPassword: null,
                    claimed: s.isClaimed()
                });
                P = d({}, I);
                N = null !== (r = e.onClose) && void 0 !== r ? r : null;
                C = null !== (o = e.analyticsLocation) && void 0 !== o ? o : null;
                w = null !== (i = e.analyticsLocations) && void 0 !== i ? i : [];
                L = null !== (u = e.impressionSource) && void 0 !== u ? u : null
            }

            function Z() {
                E = c.QZA.CLOSED;
                T = !1;
                I = null;
                j = null;
                P = null;
                S = null;
                g = null;
                _ = {};
                v = {};
                N = null;
                C = null;
                w = [];
                L = null
            }

            function U() {
                E = c.QZA.OPEN;
                m = {}
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
                    s(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(a.default)
                };
                r.hasChanges = function() {
                    return null != P && null != I && (!(!this.isOpen() && A !== c.cII.USER_SETTINGS) && !o().isEqual(P, I))
                };
                r.isOpen = function() {
                    return T
                };
                r.getPreviousSection = function() {
                    return S
                };
                r.getSection = function() {
                    return g
                };
                r.getSubsection = function() {
                    return null != g ? _[g] : null
                };
                r.getScrollPosition = function() {
                    return null != g ? v[g] : null
                };
                r.shouldOpenWithoutBackstack = function() {
                    return R
                };
                r.getProps = function() {
                    return {
                        submitting: E === c.QZA.SUBMITTING,
                        section: g,
                        subsection: null != g ? _[g] : null,
                        scrollPosition: null != g ? v[g] : null,
                        settings: P,
                        errors: m,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: R,
                        analyticsLocation: C,
                        analyticsLocations: w,
                        initialSection: j,
                        impressionSource: L
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
                    E = c.QZA.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    if (E !== c.QZA.SUBMITTING) return !1;
                    E = c.QZA.OPEN;
                    g = c.oAB.ACCOUNT;
                    var t;
                    m = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    S = g;
                    g = e.section;
                    C = null;
                    var t;
                    w = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [];
                    null != e.subsection && (_[g] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    var t = e.forSection;
                    null != t ? delete _[t] : null != g && delete _[g]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
                    var t = e.forSection;
                    null != t ? delete v[t] : null != g && delete v[g]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
                    var t = e.settings;
                    null == P && (P = {});
                    var n = P[c.oAB.ACCOUNT];
                    P[c.oAB.ACCOUNT] = d({}, n, t)
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: U,
                USER_SETTINGS_MODAL_RESET: function() {
                    var e = a.default.getCurrentUser();
                    U();
                    if (null != e) {
                        I = f({}, c.oAB.ACCOUNT, {
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
                    A = e.tab;
                    return null == g && A === c.cII.USER_SETTINGS && M({
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

            function c(e) {
                c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return c(e)
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
            var y, h = {
                hasAcceptedStoreTerms: !1,
                hasAcceptedEulaIds: []
            };
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
            b.displayName = "ApplicationStoreUserSettingsStore";
            b.persistKey = "ApplicationStoreUserSettingsStore";
            b.migrations = [function(e) {
                return null == e.hasAcceptedEulaIds ? s(function(e) {
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
            const O = new b(o.Z, {
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
                a = n(882723),
                c = n(107364),
                s = n(718831),
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
                return !t || "object" !== O(t) && "function" != typeof t ? function(e) {
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
                    t && b(e, t)
                }(n, e);
                var t = E(n);

                function n() {
                    p(this, n);
                    var e;
                    (e = t.apply(this, arguments)).renderBreadcrumb = function(t, n) {
                        var o, i = e.props,
                            c = i.activeId,
                            l = i.onBreadcrumbClick,
                            p = i.breadcrumbs,
                            y = i.renderCustomBreadcrumb,
                            h = i.separatorClassName,
                            b = t.id === c,
                            O = n === p.length - 1,
                            E = null != y ? y(t, b) : (0, r.jsx)("span", {
                                className: u()(f().breadcrumb, (o = {}, d(o, f().activeBreadcrumb, b), d(o, f().interactiveBreadcrumb, null != l), o)),
                                children: t.label
                            });
                        return (0, r.jsxs)("div", {
                            className: u()(f().breadcrumbWrapper, d({}, f().breadcrumbFinalWrapper, O)),
                            children: [null != l ? (0, r.jsx)(a.Clickable, {
                                tag: "span",
                                onClick: function() {
                                    return e.handleClick(t)
                                },
                                className: f().breadcrumbClickWrapper,
                                children: E
                            }) : E, O ? null : (0, r.jsx)(s.Z, {
                                className: u()(f().breadcrumbArrow, h),
                                direction: s.Z.Directions.RIGHT
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
                    return (0, r.jsx)(c.Z, {
                        justify: c.Z.Justify.START,
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
                u: () => g,
                Z: () => v
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                u = n.n(i),
                a = n(882723),
                c = n(990554),
                s = n(107364),
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

            function b(e, t) {
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
                    return b(this, n)
                }
            }
            var g = {
                    DEFAULT: "default",
                    SUCCESS: "success",
                    ERROR: "error"
                },
                _ = function(e) {
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
                            className: u()((0, c.l)(p(), "input", i), y({}, p().inputHidden, e)),
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
                            case g.SUCCESS:
                                e = a.ButtonColors.GREEN;
                                break;
                            case g.ERROR:
                                e = a.ButtonColors.RED;
                                break;
                            default:
                                e = this.props.buttonColor
                        }
                        return (0, r.jsx)(a.FocusRing, {
                            focusTarget: this.inputRef,
                            ringTarget: this.containerRef,
                            children: (0, r.jsx)("div", {
                                className: u()((0, c.l)(p(), "copyInput", i), d),
                                ref: this.containerRef,
                                children: (0, r.jsxs)(s.Z, {
                                    className: p().layout,
                                    children: [(0, r.jsxs)(s.Z, {
                                        className: p().inputWrapper,
                                        children: [this.renderInput(h), h ? (0, r.jsx)("div", {
                                            className: p().hiddenMessage,
                                            children: f
                                        }) : null]
                                    }), (0, r.jsx)(s.Z, {
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
            _.contextType = a.FormContext;
            _.defaultProps = {
                supportsCopy: !0,
                buttonColor: a.ButtonColors.PRIMARY,
                buttonLook: a.ButtonLooks.FILLED,
                mode: g.DEFAULT
            };
            _.Modes = g;
            _.ButtonColors = a.ButtonColors;
            _.ButtonLooks = a.ButtonLooks;
            const v = _
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

            function c(e, t) {
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
                    if ("string" == typeof e) return c(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var l = n(124251),
                f = n(450520),
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

            function O(e, t, n) {
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
            const g = (0, f.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    u = e.color,
                    a = void 0 === u ? "currentColor" : u,
                    c = e.foreground,
                    s = S(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", E(function(e) {
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
                }({}, (0, d.Z)(s)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 40 40",
                    children: (0, r.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, r.jsx)("path", {
                            className: c,
                            fill: a,
                            fillOpacity: ".8",
                            d: "M21.226 30v-4.154h-3.755V30h3.755zm-.512-8.62c3.67-1.337 5.718-2.959 5.718-6.145 0-3.272-2.36-5.235-6.088-5.235-2.589 0-4.637.825-6.344 2.048l.484 3.3c1.621-1.251 3.47-2.162 5.49-2.162 1.707 0 2.845.854 2.845 2.305 0 1.593-1.08 2.475-3.812 3.442l-.882.342.342 4.523 2.076-.455.171-1.963z"
                        }), (0, r.jsx)("rect", {
                            className: c,
                            width: "38",
                            height: "38",
                            x: "1",
                            y: "1",
                            stroke: a,
                            strokeOpacity: ".4",
                            strokeWidth: "2",
                            rx: "5"
                        }), (0, r.jsx)("circle", {
                            className: c,
                            cx: "7",
                            cy: "7",
                            r: "2",
                            fill: a,
                            fillOpacity: ".4"
                        }), (0, r.jsx)("circle", {
                            className: c,
                            cx: "7",
                            cy: "33",
                            r: "2",
                            fill: a,
                            fillOpacity: ".4"
                        }), (0, r.jsx)("circle", {
                            className: c,
                            cx: "33",
                            cy: "7",
                            r: "2",
                            fill: a,
                            fillOpacity: ".4"
                        }), (0, r.jsx)("circle", {
                            className: c,
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
                    c = e.colorClass,
                    s = void 0 === c ? "" : c,
                    l = b(e, ["width", "height", "color", "colorClass"]);
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
                        className: s
                    })
                }))
            }));
            var _ = n(203600),
                v = n(605254),
                m = n.n(v);

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
            var R = {
                XSMALL: m().xsmall,
                SMALL: m().small,
                MEDIUM: m().medium,
                LARGE: m().large
            };
            var A = function(e) {
                var t, i = e.game,
                    c = e.guild,
                    f = e.skuId,
                    p = e.pid,
                    d = e.className,
                    y = e.guildClassName,
                    h = e.size,
                    b = void 0 === h ? R.MEDIUM : h,
                    O = T(e, ["game", "guild", "skuId", "pid", "className", "guildClassName", "size"]);
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
                        case R.XSMALL:
                            return 24;
                        case R.SMALL:
                            return 30;
                        case R.MEDIUM:
                            return 40;
                        case R.LARGE:
                            return 60;
                        default:
                            return 80
                    }
                }(b)));
                t = function(e, t) {
                    var n = s(o.useState(), 2),
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
                if (null == t && null != c) {
                    var E = function(e) {
                        switch (e) {
                            case R.XSMALL:
                                return l.Z.Sizes.SMALLER;
                            case R.SMALL:
                                return l.Z.Sizes.SMALL;
                            case R.LARGE:
                                return l.Z.Sizes.LARGE;
                            default:
                                return l.Z.Sizes.MEDIUM
                        }
                    }(b);
                    return (0, r.jsx)(l.Z, {
                        className: u()(m().gameIcon, y, d),
                        guild: c,
                        size: E
                    })
                }
                return null == t ? (0, r.jsx)(g, {
                    className: u()(m().gameIcon, b, d)
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
                }({}, O), {
                    className: u()(m().gameIcon, b, d),
                    style: {
                        backgroundImage: "url('".concat(t, "')")
                    }
                }))
            };
            A.Sizes = R;
            const N = A
        },
        709189: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => A,
                C: () => C
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                u = n.n(i),
                a = n(853158),
                c = n(882723),
                s = n(662478),
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

            function b(e) {
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

            function S(e, t) {
                return !t || "object" !== m(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function g(e, t) {
                g = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return g(e, t)
            }
            var _, v, m = function(e) {
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
            }(_ || (_ = {}));
            var P, T = (y(v = {}, _.DEFAULT, p().shineDefault), y(v, _.SMALL, p().shineSmall), v),
                R = (y(P = {}, _.DEFAULT, p().shineInnerDefault), y(P, _.SMALL, p().shineInnerSmall), P),
                A = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && g(e, t)
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
                        return (0, r.jsx)(a.Z.div, O(b({}, i), {
                            className: u()(p().shineContainer, t, y({}, p().shinePaused, o)),
                            children: (0, r.jsx)(l.Z, {
                                align: l.Z.Align.CENTER,
                                justify: l.Z.Justify.CENTER,
                                className: T[n],
                                children: (0, r.jsx)("div", {
                                    className: R[n]
                                })
                            })
                        }))
                    };
                    return n
                }(o.PureComponent);
            A.defaultProps = {
                shineSize: _.DEFAULT
            };
            var N = function(e) {
                var t = e.children,
                    n = e.className,
                    i = e.disabled,
                    a = e.submitting,
                    l = e.pauseAnimation,
                    f = e.shineSize,
                    d = void 0 === f ? _.DEFAULT : f,
                    y = e.shinePaused,
                    h = e.buttonShineClassName,
                    S = e.onlyShineOnHover,
                    g = E(e, ["children", "className", "disabled", "submitting", "pauseAnimation", "shineSize", "shinePaused", "buttonShineClassName", "onlyShineOnHover"]),
                    v = o.createRef(),
                    m = (0, s.Z)(v),
                    I = !i && !a && !0 !== l && (!S || m);
                return (0, r.jsxs)(c.Button, O(b({
                    buttonRef: v
                }, g), {
                    className: u()(p().shinyButton, n),
                    disabled: i,
                    submitting: a,
                    children: [t, I ? (0, r.jsx)(A, {
                        shinePaused: y,
                        className: u()(p().buttonShine, S ? p().onlyShineOnHover : void 0, h),
                        shineSize: d
                    }) : null]
                }))
            };
            N.ShineSizes = _;
            const C = N
        },
        443812: (e, t, n) => {
            "use strict";
            n.d(t, {
                hQ: () => u,
                Dt: () => a,
                FG: () => c
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
                c = function(e) {
                    return (0, e.children)(a())
                }
        },
        718831: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => g
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                u = n(713068),
                a = n(388054),
                c = n(319497),
                s = n(67183),
                l = n(882723),
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
                        g = void 0 === S ? 24 : S,
                        _ = e.color,
                        v = void 0 === _ ? "currentColor" : _,
                        m = e.transition,
                        I = void 0 === m ? d().transition : m,
                        P = e.className,
                        T = e.foreground,
                        R = e.expanded,
                        A = O(e, ["direction", "width", "height", "color", "transition", "className", "foreground", "expanded"]),
                        N = (0, l.useRedesignIconContext)().enabled,
                        C = n;
                    !0 === R ? C = E.DOWN : !1 === R && (C = E.RIGHT);
                    if (N) {
                        var w, j = (w = {}, y(w, E.UP, s.u),
                            y(w, E.DOWN, u.C), y(w, E.LEFT, a.V), y(w, E.RIGHT, c.F), w)[C];
                        return (0, r.jsx)(j, b(h({}, A), {
                            width: p,
                            height: g,
                            color: v,
                            colorClass: T
                        }))
                    }
                    return (0, r.jsx)("svg", b(h({
                        className: i()(P, I, C),
                        width: p,
                        height: g,
                        viewBox: "0 0 24 24"
                    }, (0, f.Z)(A)), {
                        children: (0, r.jsx)("path", {
                            className: T,
                            fill: "none",
                            stroke: v,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M7 10L12 15 17 10",
                            "aria-hidden": !0
                        })
                    }))
                };
            S.Directions = E;
            const g = S
        },
        822511: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => d
            });
            var r = n(785893),
                o = (n(667294), n(450520)),
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

            function s(e, t) {
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
                    c = void 0 === a ? "currentColor" : a,
                    s = e.foreground,
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
                        className: s,
                        fill: c,
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
                    h = s(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", c(function(e) {
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
                        d: "M21 21.934V2.066a1 1 0 0 0-1.268-.964l-2.51.697a3 3 0 0 1-1.454.038l-3.117-.692a3 3 0 0 0-1.302 0l-3.117.692A3 3 0 0 1 6.778 1.8l-2.51-.697A1 1 0 0 0 3 2.066v19.868a1 1 0 0 0 1.268.964l2.51-.697a3 3 0 0 1 1.454-.038l3.117.692c.429.096.873.096 1.302 0l3.117-.692a3 3 0 0 1 1.454.038l2.51.697A1 1 0 0 0 21 21.934ZM7 8a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Zm-1 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm8-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1Z",
                        clipRule: "evenodd",
                        className: y
                    })
                }))
            }))
        },
        856236: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
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

            function c(e) {
                var t = e.width,
                    n = void 0 === t ? 14 : t,
                    c = e.height,
                    s = void 0 === c ? 14 : c,
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
                    height: s,
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
                NG: () => b,
                mA: () => O,
                IG: () => E,
                lB: () => S,
                G2: () => g,
                fW: () => _
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                u = (n(882723), n(87931)),
                a = (n(473708), n(800624)),
                c = n.n(a);

            function s(e, t, n) {
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
                        s(e, t, n[t])
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
                ROUND: c().baseShapeRound,
                ROUND_LEFT: c().baseShapeRoundLeft,
                ROUND_RIGHT: c().baseShapeRoundRight,
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

            function b(e) {
                return e < 1e3 ? "".concat(e) : "".concat(Math.min(Math.floor(e / 1e3), 9), "k+")
            }
            var O = function(e) {
                    var t = e.count,
                        n = e.color,
                        o = void 0 === n ? u.Z.STATUS_DANGER : n,
                        a = e.disableColor,
                        s = void 0 !== a && a,
                        O = e.shape,
                        E = void 0 === O ? d.ROUND : O,
                        S = e.className,
                        g = e.style,
                        _ = p(e, ["count", "color", "disableColor", "shape", "className", "style"]);
                    return (0, r.jsx)("div", f(l({
                        className: i()(S, c().numberBadge, E),
                        style: l({
                            backgroundColor: s ? void 0 : o,
                            width: h(t),
                            paddingRight: y(t)
                        }, g)
                    }, _), {
                        children: b(t)
                    }))
                },
                E = function(e) {
                    var t = e.text,
                        n = e.className,
                        o = e.color,
                        a = void 0 === o ? u.Z.STATUS_DANGER : o,
                        s = e.shape,
                        y = void 0 === s ? d.ROUND : s,
                        h = e.disableColor,
                        b = void 0 !== h && h,
                        O = e.style,
                        E = p(e, ["text", "className", "color", "shape", "disableColor", "style"]);
                    return (0, r.jsx)("div", f(l({
                        className: i()(n, c().textBadge, y),
                        style: l({
                            backgroundColor: b ? void 0 : a
                        }, O)
                    }, E), {
                        children: t
                    }))
                },
                S = function(e) {
                    var t = e.text,
                        n = e.className,
                        o = p(e, ["text", "className"]);
                    return (0, r.jsx)(E, l({
                        className: i()(c().premiumBadge, n),
                        text: t
                    }, o))
                },
                g = function(e) {
                    var t = e.icon,
                        n = e.className,
                        o = e.color,
                        a = void 0 === o ? u.Z.STATUS_DANGER : o,
                        s = e.shape,
                        f = void 0 === s ? d.ROUND : s,
                        p = e.disableColor,
                        y = void 0 !== p && p,
                        h = e.style;
                    return (0, r.jsx)("div", {
                        className: i()(n, c().iconBadge, f),
                        style: l({
                            backgroundColor: y ? void 0 : a
                        }, h),
                        children: (0, r.jsx)(t, {
                            className: c().icon
                        })
                    })
                },
                _ = function(e) {
                    var t = e.className,
                        n = e.color,
                        o = void 0 === n ? u.Z.INTERACTIVE_ACTIVE : n,
                        a = e.shape,
                        s = void 0 === a ? d.ROUND : a,
                        f = e.disableColor,
                        y = void 0 !== f && f,
                        h = e.style,
                        b = p(e, ["className", "color", "shape", "disableColor", "style"]);
                    return (0,
                        r.jsx)("div", l({
                        className: i()(t, c().circleBadge, s),
                        style: l({
                            backgroundColor: y ? void 0 : o
                        }, h)
                    }, b))
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
                    if ("string" == typeof e) return a(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var s = /^\d+$/,
                l = /^(.+?@.+?\..+?|.+?#\d{4})$/,
                f = /^[a-zA-Z0-9_\\.]+$/;

            function p(e) {
                if (f.test(e)) return null;
                if (e.includes("#") && l.test(e)) return null;
                ! function(e) {
                    var t = c(e.split("#"), 2),
                        n = t[0],
                        u = t[1];
                    r.default.track(i.rMx.FRIEND_REQUEST_FAILED, {
                        reason: "Invalid Username",
                        query: e,
                        discrim_len: (null != u ? u : "").length,
                        username_len: n.length,
                        is_email_like: o.Z.isEmail(e),
                        is_invite_like: o.Z.isInvite(e),
                        is_num_only: s.test(e)
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
                Z: () => b
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

            function s(e, t) {
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
                    s = (void 0 === u ? {} : u).onEarlyClose,
                    d = function() {
                        null == s || s()
                    },
                    y = function(e) {
                        f(E);
                        n(e)
                    },
                    b = function(e) {
                        f(E);
                        r(e)
                    },
                    O = function(e) {
                        var t = e.res;
                        p(E, S, d, c(a({}, i), {
                            error: t.body.message
                        }))
                    };
                if (null != l) var E = l(S, d, i);
                else null == s || s();

                function S(e) {
                    p(E, S, d, c(a({}, i), {
                        isLoading: !0
                    }));
                    return h({
                        promiseFn: t,
                        resolve: y,
                        reject: b,
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
                    u = void 0 === i ? y : i,
                    c = e.isModalOpen,
                    l = void 0 !== c && c,
                    f = s(e, ["promiseFn", "resolve", "reject", "code", "mfaCodeHandler", "isModalOpen"]);
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

            function b(e, t) {
                var n, o, u = null != t ? t : {},
                    c = u.checkEnabled,
                    l = void 0 === c ? null !== (o = null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== o && o : c,
                    f = s(u, ["checkEnabled"]);
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
                RD: () => Q,
                WA: () => G,
                f5: () => k,
                Gb: () => L,
                Rs: () => Y,
                _2: () => V,
                gL: () => Z,
                fG: () => D
            });
            var r = n(306472),
                o = n(737264),
                i = n(496486),
                u = n.n(i),
                a = n(809784),
                c = n(296602),
                s = n(384411),
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

            function b(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        c = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function O(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            b(i, r, o, u, a, "next", e)
                        }

                        function a(e) {
                            b(i, r, o, u, a, "throw", e)
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
            var g = function(e, t) {
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
                _ = new c.Z("Spellchecker"),
                v = null === r.Z || void 0 === r.Z ? void 0 : r.Z.spellCheck;

            function m(e) {
                var t;
                e = null !== (t = y[e]) && void 0 !== t ? t : e;
                var n = (0, o.Q)(e.replace(/[_-]/g, "-"));
                if (null != n && null != n.langtag.language && null != n.langtag.region) {
                    var r = n.langtag,
                        i = r.language,
                        u = r.region;
                    return "".concat(i.language.toLowerCase(), "-").concat(u.toUpperCase())
                }
                _.error("".concat(e, " is not a valid locale."))
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
                        var r = S(s.default.locale.split("-"), 2),
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
                        v.on("spellcheck-result", (function(e, t) {
                            n.misspelledWord = null != e ? e : "";
                            n.corrections = null != t ? t : []
                        }))
                    }
                    var t = e.prototype;
                    t.setLearnedWords = function(e) {
                        v.setLearnedWords(e)
                    };
                    t.setLocale = function(e) {
                        var t;
                        null === (t = v.setLocale(e)) || void 0 === t || t.then((function(t) {
                            _.info("Switching to ".concat(e), t ? "(available)" : "(unavailable)")
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
                        v.replaceMisspelling(e)
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

            function R() {
                return (R = O((function() {
                    var e, t, n, r;
                    return g(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, v.getAvailableDictionaries()];
                            case 1:
                                t = null !== (e = o.sent()) && void 0 !== e ? e : [];
                                n = t.map(m).filter(l.lm);
                                T(r = new I(n));
                                return [2, r]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var A = n(120415);

            function N(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        c = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(r, o)
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

            function j() {
                return null != (null === r.Z || void 0 === r.Z ? void 0 : r.Z.spellCheck)
            }

            function L() {
                return (0, A.nI)() && j()
            }
            var M = L() ? function() {
                return R.apply(this, arguments)
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

            function k(e) {
                return B.apply(this, arguments)
            }

            function B() {
                B = C((function(e) {
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
                return B.apply(this, arguments)
            }

            function G(e) {
                return F.apply(this, arguments)
            }

            function F() {
                F = C((function(e) {
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
                return F.apply(this, arguments)
            }

            function Y(e) {
                return H.apply(this, arguments)
            }

            function H() {
                return (H = C((function(e) {
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

            function Q(e) {
                if (!j()) return function() {};
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
                    c = e[a];
                if (null != c) return c;
                0
            }
        },
        391438: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
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

            function c(e, t, n) {
                var r = t.trackedActionData,
                    i = a(t, ["trackedActionData"]),
                    c = {
                        url: i.url,
                        request_method: n
                    };
                return new Promise((function(t, n) {
                    e(i).then((function(e) {
                        var n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(e));
                        (0, o.trackNetworkAction)(r.event, u({
                            status_code: e.status
                        }, c, n));
                        t(e)
                    })).catch((function(e) {
                        var t, i, a = r.properties;
                        "function" == typeof r.properties && (a = r.properties(e));
                        (0, o.trackNetworkAction)(r.event, u({
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (i = e.body) || void 0 === i ? void 0 : i.message
                        }, c, a));
                        n(e)
                    }))
                }))
            }
            const s = {
                get: function(e) {
                    return c(r.ZP.get, e, "get")
                },
                post: function(e) {
                    return c(r.ZP.post, e, "post")
                },
                put: function(e) {
                    return c(r.ZP.put, e, "put")
                },
                patch: function(e) {
                    return c(r.ZP.patch, e, "patch")
                },
                delete: function(e) {
                    return c(r.ZP.delete, e, "del")
                }
            }
        },
        680918: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                showModal: () => c,
                updateModalProps: () => s
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

            function c(e, t, n) {
                return (0, o.h7)(a(e, t, n), {
                    onCloseCallback: t
                })
            }

            function s(e, t, n, r) {
                return (0, o.o)(e, a(t, n, r))
            }
        }
    }
]);