"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [87816], {
        563726: (e, t, n) => {
            n.d(t, {
                Z: () => _
            });
            var r = n(281110),
                i = n(744564),
                o = n(269823),
                s = n(959207),
                u = n(644144),
                c = n(875700),
                a = n(2590),
                l = n(203600);

            function f(e, t, n, r, i, o, s) {
                try {
                    var u = e[o](s),
                        c = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(c) : Promise.resolve(c).then(r, i)
            }

            function d(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function s(e) {
                            f(o, r, i, s, u, "next", e)
                        }

                        function u(e) {
                            f(o, r, i, s, u, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function p(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var E = function(e, t) {
                var n, r, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function u(o) {
                    return function(u) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        s.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        s.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop();
                                        s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = s.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2];
                                            s.ops.push(o);
                                            break
                                        }
                                        i[2] && s.ops.pop();
                                        s.trys.pop();
                                        continue
                                }
                                o = t.call(e, s)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, u])
                    }
                }
            };

            function h() {
                h = d((function(e) {
                    var t, n, r, o, a = arguments;
                    return E(this, (function(f) {
                        switch (f.label) {
                            case 0:
                                t = a.length > 1 && void 0 !== a[1] && a[1], n = a.length > 2 && void 0 !== a[2] && a[2];
                                i.Z.dispatch({
                                    type: "GIFT_CODE_RESOLVE",
                                    code: e
                                });
                                f.label = 1;
                            case 1:
                                f.trys.push([1, 7, , 8]);
                                return [4, (0, u.bT)(e, t, n)];
                            case 2:
                                if (null == (r = f.sent()).application_id || r.application_id === l.RQ) return [3, 6];
                                if (null != s.Z.getGame(r.application_id)) return [3, 6];
                                f.label = 3;
                            case 3:
                                f.trys.push([3, 5, , 6]);
                                return [4, c.Z.fetchApplication(r.application_id)];
                            case 4:
                                f.sent();
                                return [3, 6];
                            case 5:
                                f.sent();
                                return [3, 6];
                            case 6:
                                i.Z.dispatch({
                                    type: "GIFT_CODE_RESOLVE_SUCCESS",
                                    giftCode: r
                                });
                                return [2, {
                                    giftCode: r
                                }];
                            case 7:
                                o = f.sent();
                                i.Z.dispatch({
                                    type: "GIFT_CODE_RESOLVE_FAILURE",
                                    code: e,
                                    error: o
                                });
                                throw o;
                            case 8:
                                return [2]
                        }
                    }))
                }));
                return h.apply(this, arguments)
            }
            const _ = function(e) {
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
            }({
                resolveGiftCode: function(e) {
                    return h.apply(this, arguments)
                },
                fetchUserGiftCodesForSKU: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    return d((function() {
                        var n;
                        return E(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    i.Z.dispatch({
                                        type: "GIFT_CODES_FETCH",
                                        skuId: e,
                                        subscriptionPlanId: t
                                    });
                                    o.label = 1;
                                case 1:
                                    o.trys.push([1, 3, , 4]);
                                    return [4, r.ZP.get({
                                        url: a.ANM.USER_GIFT_CODES,
                                        query: {
                                            sku_id: e,
                                            subscription_plan_id: t
                                        },
                                        oldFormErrors: !0
                                    })];
                                case 2:
                                    n = o.sent();
                                    i.Z.dispatch({
                                        type: "GIFT_CODES_FETCH_SUCCESS",
                                        giftCodes: n.body,
                                        skuId: e,
                                        subscriptionPlanId: t
                                    });
                                    return [3, 4];
                                case 3:
                                    o.sent();
                                    i.Z.dispatch({
                                        type: "GIFT_CODES_FETCH_FAILURE",
                                        skuId: e,
                                        subscriptionPlanId: t
                                    });
                                    return [3, 4];
                                case 4:
                                    return [2]
                            }
                        }))
                    }))()
                },
                createGiftCode: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return d((function() {
                        var o;
                        return E(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    i.Z.dispatch({
                                        type: "GIFT_CODE_CREATE_START",
                                        skuId: e,
                                        subscriptionPlanId: t
                                    });
                                    s.label = 1;
                                case 1:
                                    s.trys.push([1, 3, , 4]);
                                    return [4, r.ZP.post({
                                        url: a.ANM.USER_GIFT_CODE_CREATE,
                                        body: {
                                            sku_id: e,
                                            subscription_plan_id: t,
                                            gift_style: n
                                        },
                                        oldFormErrors: !0
                                    })];
                                case 2:
                                    o = s.sent();
                                    i.Z.dispatch({
                                        type: "GIFT_CODE_CREATE_SUCCESS",
                                        giftCode: o.body
                                    });
                                    return [2, o.body];
                                case 3:
                                    s.sent();
                                    i.Z.dispatch({
                                        type: "GIFT_CODE_CREATE_FAILURE",
                                        skuId: e,
                                        subscriptionPlanId: t
                                    });
                                    return [3, 4];
                                case 4:
                                    return [2]
                            }
                        }))
                    }))()
                },
                revokeGiftCode: function(e) {
                    return d((function() {
                        return E(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    i.Z.dispatch({
                                        type: "GIFT_CODE_REVOKE",
                                        code: e
                                    });
                                    t.label = 1;
                                case 1:
                                    t.trys.push([1, 3, , 4]);
                                    return [4, r.ZP.delete({
                                        url: a.ANM.USER_GIFT_CODE_REVOKE(e),
                                        oldFormErrors: !0
                                    })];
                                case 2:
                                    t.sent();
                                    i.Z.dispatch({
                                        type: "GIFT_CODE_REVOKE_SUCCESS",
                                        code: e
                                    });
                                    return [3, 4];
                                case 3:
                                    t.sent();
                                    i.Z.dispatch({
                                        type: "GIFT_CODE_REVOKE_FAILURE",
                                        code: e
                                    });
                                    return [3, 4];
                                case 4:
                                    return [2]
                            }
                        }))
                    }))()
                },
                openNativeGiftCodeModal: function(e) {
                    o.Z.openNativeAppModal(e, a.Etm.GIFT_CODE_BROWSER)
                }
            }, n(18727).Z)
        },
        18727: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var r = n(281110),
                i = n(744564),
                o = n(347365),
                s = n(264628),
                u = n(2590);

            function c(e, t, n, r, i, o, s) {
                try {
                    var u = e[o](s),
                        c = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(c) : Promise.resolve(c).then(r, i)
            }

            function a(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function s(e) {
                            c(o, r, i, s, u, "next", e)
                        }

                        function u(e) {
                            c(o, r, i, s, u, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }
            var l = function(e, t) {
                    var n, r, i, o, s = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function u(o) {
                        return function(u) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    (r = 0, i) && (o = [2 & o[0], i.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            s.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            s.label++;
                                            r = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = s.ops.pop();
                                            s.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = s.trys,
                                                    i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                s.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && s.label < i[1]) {
                                                s.label = i[1];
                                                i = o;
                                                break
                                            }
                                            if (i && s.label < i[2]) {
                                                s.label = i[2];
                                                s.ops.push(o);
                                                break
                                            }
                                            i[2] && s.ops.pop();
                                            s.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, s)
                                } catch (e) {
                                    o = [6, e];
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, u])
                        }
                    }
                },
                f = Object.freeze({});

            function d() {
                d = a((function(e) {
                    var t, n, c, a, d, p, E, h, _, b, v, y = arguments;
                    return l(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                t = y.length > 1 && void 0 !== y[1] ? y[1] : f;
                                n = t.channelId, c = void 0 === n ? null : n, a = t.paymentSource, d = void 0 === a ? null : a;
                                i.Z.dispatch({
                                    type: "GIFT_CODE_REDEEM",
                                    code: e
                                });
                                l.label = 1;
                            case 1:
                                l.trys.push([1, 4, , 5]);
                                E = r.ZP.post;
                                h = {
                                    url: u.ANM.GIFT_CODE_REDEEM(e)
                                };
                                _ = {
                                    channel_id: c,
                                    payment_source_id: null == d ? void 0 : d.id
                                };
                                return [4, (0, s.cn)(d)];
                            case 2:
                                return [4, E.apply(r.ZP, [(h.body = (_.gateway_checkout_context = l.sent(), _), h.oldFormErrors = !0, h)])];
                            case 3:
                                p = l.sent();
                                i.Z.dispatch({
                                    type: "GIFT_CODE_REDEEM_SUCCESS",
                                    code: e,
                                    entitlement: p.body
                                });
                                return [2, {
                                    code: e,
                                    entitlement: p
                                }];
                            case 4:
                                b = l.sent();
                                v = new o.HF(b);
                                i.Z.dispatch({
                                    type: "GIFT_CODE_REDEEM_FAILURE",
                                    code: e,
                                    error: v
                                });
                                throw v;
                            case 5:
                                return [2]
                        }
                    }))
                }));
                return d.apply(this, arguments)
            }
            const p = {
                redeemGiftCode: function(e) {
                    return d.apply(this, arguments)
                }
            }
        },
        607739: (e, t, n) => {
            n.d(t, {
                Z: () => C,
                y: () => g
            });
            var r = n(785893),
                i = n(667294),
                o = n(294184),
                s = n.n(o),
                u = n(70418),
                c = n(848285),
                a = n(722406),
                l = n(124251),
                f = n(23727),
                d = n(961241),
                p = n(565571),
                E = n(802467),
                h = n(98265),
                _ = n(211482),
                b = n(473708),
                v = n(952081),
                y = n.n(v);

            function S(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var m = function(e) {
                    var t, n = e.speaker,
                        i = e.guildId,
                        o = e.isEmbed,
                        s = new a.Z(n.user);
                    return (0, r.jsxs)("div", {
                        className: y().speaker,
                        children: [(0, r.jsx)(u.Avatar, {
                            src: s.getAvatarURL(i, o ? 16 : 24),
                            size: o ? u.AvatarSizes.SIZE_16 : u.AvatarSizes.SIZE_24,
                            "aria-label": "".concat(n.nick, "-avatar"),
                            className: o ? null : y().avatar
                        }), (0,
                            r.jsx)(h.Z, {
                            size: o ? h.Z.Sizes.SIZE_12 : h.Z.Sizes.SIZE_14,
                            color: h.Z.Colors.HEADER_SECONDARY,
                            className: y().username,
                            children: null !== (t = n.nick) && void 0 !== t ? t : s.username
                        })]
                    })
                },
                g = function(e) {
                    var t = e.guild,
                        n = e.onlineCount;
                    if (null == t) return null;
                    var i = new c.Z(t),
                        o = i.name,
                        s = i.description;
                    return (0, r.jsxs)("div", {
                        children: [(0, r.jsx)(E.Z, {
                            muted: !0,
                            uppercase: !0,
                            className: y().alignStart,
                            children: b.Z.Messages.STAGE_INVITE_GUILD_HEADER
                        }), (0, r.jsxs)("div", {
                            className: y().guild,
                            children: [(0, r.jsx)(_.ZP, {
                                mask: _.ZP.Masks.SQUIRCLE,
                                width: 40,
                                height: 40,
                                children: (0, r.jsx)(l.Z, {
                                    guild: i,
                                    size: l.Z.Sizes.MEDIUM,
                                    active: !0
                                })
                            }), (0, r.jsxs)("div", {
                                className: y().guildInfo,
                                children: [(0, r.jsx)(u.Heading, {
                                    variant: "heading-sm/semibold",
                                    children: o
                                }), (0, r.jsxs)("div", {
                                    className: y().speaker,
                                    children: [(0, r.jsx)("div", {
                                        className: y().dot
                                    }), null != n && n > 0 ? (0, r.jsx)(u.Text, {
                                        variant: "text-sm/normal",
                                        children: b.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                            membersOnline: n
                                        })
                                    }) : null]
                                })]
                            })]
                        }), null != s && "" !== s && (0, r.jsx)(u.Text, {
                            color: "header-secondary",
                            className: y().alignStart,
                            variant: "text-sm/normal",
                            children: s
                        })]
                    })
                };
            const C = function(e) {
                var t = e.stageInstance,
                    n = e.guild,
                    o = e.isCard,
                    a = void 0 !== o && o,
                    v = e.isEmbed,
                    g = void 0 !== v && v,
                    C = e.onClick,
                    O = i.useMemo((function() {
                        return null == n ? null : n instanceof c.Z ? n : new c.Z(n)
                    }), [n]);
                if (null == t || null == O) return null;
                var I, T = t.topic,
                    x = t.speaker_count,
                    A = t.participant_count,
                    R = null !== (I = t.members) && void 0 !== I ? I : [],
                    D = g ? R.slice(0, 3) : R,
                    w = x - D.length;
                g && (w += R.length - D.length);
                return (0, r.jsxs)("div", {
                    children: [(0, r.jsxs)("div", {
                        className: y().flex,
                        children: [(0, r.jsxs)("div", {
                            className: y().flex,
                            children: [(0, r.jsx)(p.Z, {
                                height: 24,
                                width: 24,
                                className: y().live
                            }), (0, r.jsx)(u.Heading, {
                                variant: "eyebrow",
                                className: s()(y().label, y().live),
                                children: b.Z.Messages.STAGE_CHANNEL_LIVE_NOW
                            })]
                        }), (0, r.jsxs)("div", {
                            className: y().background,
                            children: [(0, r.jsx)(f.Z, {
                                height: 16,
                                width: 16,
                                className: y().listeners
                            }), (0, r.jsx)(u.Heading, {
                                className: s()(y().label, y().listeners),
                                variant: "heading-sm/semibold",
                                children: A
                            })]
                        })]
                    }), g && (0, r.jsxs)("div", {
                        className: s()(y().guild, S({}, y().embed, g)),
                        children: [(0, r.jsx)(_.ZP, {
                            mask: _.ZP.Masks.SQUIRCLE,
                            width: 20,
                            height: 20,
                            children: (0, r.jsx)(l.Z, {
                                guild: O,
                                size: l.Z.Sizes.MINI,
                                active: !0
                            })
                        }), (0, r.jsx)(u.Text, {
                            color: "header-secondary",
                            className: y().label,
                            variant: "text-sm/normal",
                            children: O.name
                        })]
                    }), (0, r.jsx)(E.Z, {
                        size: a || g ? E.Z.Sizes.SIZE_16 : E.Z.Sizes.SIZE_20,
                        className: s()(y().header, S({}, y().embed, g)),
                        children: T
                    }), (0, r.jsxs)("div", {
                        className: s()(y().members, S({}, y().embed, g)),
                        children: [D.length > 0 && (0, r.jsxs)("div", {
                            className: y().speakers,
                            children: [D.map((function(e) {
                                return (0, r.jsx)(m, {
                                    speaker: e,
                                    guildId: O.id,
                                    isEmbed: g
                                }, e.user.id)
                            })), w > 0 ? (0, r.jsxs)("div", {
                                className: y().speaker,
                                children: [(0, r.jsx)("div", {
                                    className: s()(y().icon, S({}, y().embed, g)),
                                    children: (0, r.jsx)(d.Z, {
                                        height: g ? 12 : 14,
                                        className: y().listeners
                                    })
                                }), (0, r.jsxs)(h.Z, {
                                    size: g ? h.Z.Sizes.SIZE_12 : h.Z.Sizes.SIZE_14,
                                    color: h.Z.Colors.HEADER_SECONDARY,
                                    children: ["+", b.Z.Messages.STAGE_INVITE_SPEAKER_COUNT.format({
                                        count: w
                                    })]
                                })]
                            }) : null]
                        }), g && (0, r.jsx)(u.Button, {
                            color: u.Button.Colors.GREEN,
                            onClick: C,
                            className: y().joinButton,
                            children: b.Z.Messages.STAGE_CHANNEL_JOIN_BUTTON
                        })]
                    })]
                })
            }
        },
        543976: (e, t, n) => {
            n.d(t, {
                Z: () => _
            });
            var r = n(730381),
                i = n.n(r),
                o = n(169376),
                s = n(661123),
                u = n(800336),
                c = n(203600);

            function a(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function l(e) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return l(e)
            }

            function f(e, t) {
                return !t || "object" !== p(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function d(e, t) {
                d = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return d(e, t)
            }
            var p = function(e) {
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
                    var n, r = l(e);
                    if (t) {
                        var i = l(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return f(this, n)
                }
            }
            var h = Object.freeze({
                    PAYMENT_SOURCE_REQUIRED: 1,
                    EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED: 2,
                    NOT_SELF_REDEEMABLE: 4
                }),
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
                        t && d(e, t)
                    }(n, e);
                    var t = E(n);

                    function n(e) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, n);
                        var r;
                        (r = t.call(this)).userId = e.userId;
                        r.code = e.code;
                        r.skuId = e.skuId;
                        r.uses = e.uses;
                        r.maxUses = e.maxUses;
                        r.expiresAt = e.expiresAt;
                        r.redeemed = e.redeemed;
                        r.storeListingId = e.storeListingId;
                        r.subscriptionPlanId = e.subscriptionPlanId;
                        r.subscriptionPlan = e.subscriptionPlan;
                        r.revoked = e.revoked;
                        r.entitlementBranches = e.entitlementBranches;
                        r.flags = e.flags;
                        r.subscriptionTrial = e.subscriptionTrial;
                        r.promotion = e.promotion;
                        r.giftStyle = e.giftStyle;
                        return r
                    }
                    var r = n.prototype;
                    r.isExpired = function() {
                        var e = this.expiresAt;
                        return null != e && i()().isAfter(e)
                    };
                    r.toString = function() {
                        return this.code
                    };
                    n.createFromServer = function(e) {
                        return new n({
                            userId: null != e.user ? e.user.id : null,
                            code: e.code,
                            skuId: e.sku_id,
                            uses: e.uses,
                            maxUses: e.max_uses,
                            storeListingId: null != e.store_listing ? e.store_listing.id : null,
                            expiresAt: null != e.expires_at ? i()(e.expires_at) : null,
                            redeemed: e.redeemed,
                            subscriptionPlanId: null != e.subscription_plan ? e.subscription_plan.id : e.subscription_plan_id,
                            subscriptionPlan: null != e.subscription_plan ? u.ZP.createFromServer(e.subscription_plan) : null,
                            revoked: !1,
                            entitlementBranches: null != e.entitlement_branches ? e.entitlement_branches : null,
                            flags: null != e.flags ? e.flags : 0,
                            giftStyle: e.gift_style,
                            subscriptionTrial: null != e.subscription_trial ? {
                                id: e.subscription_trial.id,
                                interval: e.subscription_trial.interval,
                                intervalCount: e.subscription_trial.interval_count,
                                skuId: e.subscription_trial.sku_id
                            } : null,
                            promotion: null != e.promotion ? {
                                id: e.promotion.id,
                                startDate: e.promotion.start_date,
                                endDate: e.promotion.end_date,
                                inboundHeaderText: e.promotion.inbound_header_text,
                                inboundBodyText: e.promotion.inbound_body_text,
                                inboundHelpCenterLink: e.promotion.inbound_help_center_link
                            } : null
                        })
                    };
                    ! function(e, t, n) {
                        t && a(e.prototype, t);
                        n && a(e, n)
                    }(n, [{
                        key: "hasMultipleCopies",
                        get: function() {
                            return this.maxUses > 1
                        }
                    }, {
                        key: "isClaimed",
                        get: function() {
                            return this.uses >= this.maxUses
                        }
                    }, {
                        key: "remainingUses",
                        get: function() {
                            return this.maxUses - this.uses
                        }
                    }, {
                        key: "isSubscription",
                        get: function() {
                            return null != this.subscriptionPlanId
                        }
                    }, {
                        key: "premiumSubscriptionType",
                        get: function() {
                            return this.isSubscription && c.y7[this.skuId] || null
                        }
                    }, {
                        key: "isSelfRedeemable",
                        get: function() {
                            return !(0, s.yE)(this.flags, h.NOT_SELF_REDEEMABLE)
                        }
                    }, {
                        key: "isExistingPremiumSubscriptionDisallowed",
                        get: function() {
                            return (0, s.yE)(this.flags, h.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED)
                        }
                    }, {
                        key: "analyticsData",
                        get: function() {
                            return {
                                gift_code: this.code,
                                gift_code_max_uses: this.maxUses
                            }
                        }
                    }]);
                    return n
                }(o.Z)
        },
        70321: (e, t, n) => {
            n.d(t, {
                Z: () => M
            });
            var r = n(496486),
                i = n.n(r),
                o = n(730381),
                s = n.n(o),
                u = n(202351),
                c = n(513328),
                a = n(744564),
                l = n(563726),
                f = n(659436),
                d = n(543976),
                p = n(644144),
                E = n(2590);

            function h(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function _(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function b(e) {
                b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return b(e)
            }

            function v(e, t) {
                return !t || "object" !== m(t) && "function" != typeof t ? function(e) {
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

            function S(e) {
                return function(e) {
                    if (Array.isArray(e)) return h(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return h(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var m = function(e) {
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
                    var n, r = b(e);
                    if (t) {
                        var i = b(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return v(this, n)
                }
            }
            var C = {},
                O = {},
                I = [],
                T = [],
                x = [],
                A = new Set,
                R = {},
                D = {},
                w = new Set;

            function j(e) {
                var t = d.Z.createFromServer(e),
                    n = t.code;
                if (null != O[n]) O[n] = O[n].merge(t);
                else {
                    O[n] = t;
                    if (null != t.expiresAt) {
                        var r = new c.V7;
                        C[n] = r;
                        Z(n)
                    }
                }
            }

            function Z(e) {
                var t = O[e];
                if (null != t && null != t.expiresAt) {
                    var n = t.expiresAt.valueOf() - s()().valueOf();
                    if (n <= 0) {
                        delete O[e];
                        delete C[e];
                        L.emitChange()
                    } else {
                        var r = C[e];
                        if (null == r) return;
                        r.start(Math.min(2147483647, n), (function() {
                            return Z(e)
                        }))
                    }
                }
            }

            function N(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (t && !w.has(e.channel_id)) return !1;
                var n = (0, p.Fp)(e) ? (0,
                    p.Q_)(null != (null == e ? void 0 : e.embeds) ? null == e ? void 0 : e.embeds[0].url : void 0) : (0, p.Q_)(e.content);
                if (0 === n.length) return !1;
                n.forEach((function(e) {
                    if (!I.includes(e) && !x.includes(e)) {
                        P({
                            code: e
                        });
                        a.Z.wait((function() {
                            return l.Z.resolveGiftCode(e, !1, !0).catch(E.VqG)
                        }))
                    }
                }));
                return !1
            }

            function P(e) {
                var t = e.code;
                I.includes(t) || (I = S(I).concat([t]))
            }

            function k(e) {
                return N(e.message, !0)
            }

            function F(e) {
                var t = e.channelId,
                    n = e.messages;
                w.add(t);
                n.forEach((function(e) {
                    return N(e, !0)
                }))
            }

            function U(e) {
                var t = e.firstMessages;
                if (null == t) return !1;
                null == t || t.forEach((function(e) {
                    return N(e)
                }))
            }
            var G = function(e) {
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
                var t = g(n);

                function n() {
                    _(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.get = function(e) {
                    var t = O[e];
                    return null == t || t.isExpired() ? null : t
                };
                r.getError = function(e) {
                    return null != e ? D[e] : null
                };
                r.getForGifterSKUAndPlan = function(e, t, n) {
                    return i().values(O).filter((function(r) {
                        return r.userId === e && r.skuId === t && (null == n || r.subscriptionPlanId === n) && !r.isExpired()
                    }))
                };
                r.getIsResolving = function(e) {
                    return I.includes(e)
                };
                r.getIsResolved = function(e) {
                    return x.includes(e)
                };
                r.getIsAccepting = function(e) {
                    return T.includes(e)
                };
                r.getUserGiftCodesFetchingForSKUAndPlan = function(e, t) {
                    return A.has((0, p.Bg)(e, t))
                };
                r.getUserGiftCodesLoadedAtForSKUAndPlan = function(e, t) {
                    return R[(0, p.Bg)(e, t)]
                };
                r.getResolvingCodes = function() {
                    return I
                };
                r.getResolvedCodes = function() {
                    return x
                };
                r.getAcceptingCodes = function() {
                    return T
                };
                return n
            }(u.ZP.Store);
            G.displayName = "GiftCodeStore";
            var L = new G(a.Z, {
                CONNECTION_OPEN: function() {
                    w.clear();
                    return !1
                },
                CHANNEL_SELECT: function(e) {
                    var t = e.channelId;
                    null != t && w.add(t);
                    return !1
                },
                GIFT_CODE_RESOLVE: P,
                GIFT_CODE_RESOLVE_SUCCESS: function(e) {
                    var t = e.giftCode;
                    I = I.filter((function(e) {
                        return e !== t.code
                    }));
                    x.includes(t.code) || (x = S(x).concat([t.code]));
                    return j(t)
                },
                GIFT_CODE_RESOLVE_FAILURE: function(e) {
                    var t = e.code;
                    I = I.filter((function(e) {
                        return e !== t
                    }));
                    x.includes(t) || (x = S(x).concat([t]))
                },
                GIFT_CODE_REDEEM: function(e) {
                    var t = e.code;
                    T.includes(t) || (T = S(T).concat([t]))
                },
                GIFT_CODE_REDEEM_SUCCESS: function(e) {
                    var t = e.code;
                    T = T.filter((function(e) {
                        return e !== t
                    }));
                    var n = O[t];
                    null != n && (O[t] = n.merge({
                        redeemed: !0,
                        uses: n.uses + 1
                    }))
                },
                GIFT_CODE_REDEEM_FAILURE: function(e) {
                    var t = e.code,
                        n = e.error;
                    T = T.filter((function(e) {
                        return e !== t
                    }));
                    var r = O[t];
                    D[t] = n;
                    if (null != r) switch (n.code) {
                        case E.evJ.UNKNOWN_GIFT_CODE:
                            O[t] = r.set("revoked", !0);
                            break;
                        case E.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED:
                            O[t] = r.set("uses", r.maxUses)
                    }
                },
                GIFT_CODE_REVOKE_SUCCESS: function(e) {
                    var t = e.code;
                    delete O[t];
                    var n = C[t];
                    if (null != n) {
                        n.stop();
                        delete C[t]
                    }
                    x.includes(t) || (x = S(x).concat([t]))
                },
                GIFT_CODE_CREATE_SUCCESS: function(e) {
                    j(e.giftCode)
                },
                GIFT_CODES_FETCH: function(e) {
                    var t = e.skuId,
                        n = e.subscriptionPlanId;
                    A.add((0, p.Bg)(t, n))
                },
                GIFT_CODES_FETCH_SUCCESS: function(e) {
                    var t = e.giftCodes,
                        n = e.skuId,
                        r = e.subscriptionPlanId;
                    t.forEach(j);
                    var i = (0, p.Bg)(n, r);
                    R[i] = Date.now();
                    A.delete(i)
                },
                GIFT_CODES_FETCH_FAILURE: function(e) {
                    var t = e.skuId,
                        n = e.subscriptionPlanId;
                    A.delete((0, p.Bg)(t, n))
                },
                MESSAGE_CREATE: k,
                MESSAGE_UPDATE: k,
                LOCAL_MESSAGES_LOADED: F,
                LOAD_MESSAGES_SUCCESS: F,
                LOAD_MESSAGES_AROUND_SUCCESS: F,
                LOAD_RECENT_MENTIONS_SUCCESS: function(e) {
                    e.messages.forEach((function(e) {
                        return N(e)
                    }))
                },
                LOAD_PINNED_MESSAGES_SUCCESS: function(e) {
                    e.messages.forEach((function(e) {
                        return N(e)
                    }))
                },
                SEARCH_FINISH: function(e) {
                    e.messages.forEach((function(e) {
                        e.forEach((function(e) {
                            return N(e)
                        }))
                    }))
                },
                GIFT_CODE_UPDATE: function(e) {
                    var t = e.uses,
                        n = e.code,
                        r = O[n];
                    null != r && (O[n] = r.set("uses", Math.max(r.uses, t)))
                },
                GUILD_FEED_FETCH_SUCCESS: function(e) {
                    var t = e.data;
                    (0, f._)(t).forEach((function(e) {
                        return N(e)
                    }))
                },
                LOAD_THREADS_SUCCESS: U,
                LOAD_ARCHIVED_THREADS_SUCCESS: U,
                LOAD_FORUM_POSTS: function(e) {
                    var t = e.threads;
                    Object.values(t).map((function(e) {
                        var t = e.first_message;
                        return null != t && N(t)
                    }))
                }
            });
            const M = L
        },
        961241: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var r = n(785893),
                i = (n(667294), n(168075)),
                o = n(238823),
                s = n(633878);

            function u(e, t, n) {
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

            function a(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }
            const l = (0, i.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    i = e.height,
                    o = void 0 === i ? 24 : i,
                    l = e.color,
                    f = void 0 === l ? "currentColor" : l,
                    d = e.foreground,
                    p = a(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsxs)("svg", c(function(e) {
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
                }({}, (0, s.Z)(p)), {
                    width: n,
                    height: o,
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V21H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1ZM12 4C11.2 4 11 4.66667 11 5V11C11 11.3333 11.2 12 12 12C12.8 12 13 11.3333 13 11V5C13 4.66667 12.8 4 12 4Z",
                        className: d,
                        fill: f
                    }), (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V22H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1Z",
                        className: d,
                        fill: f
                    })]
                }))
            }), o.S)
        }
    }
]);