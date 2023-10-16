"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [73597], {
        959898: (e, t, n) => {
            n.d(t, {
                i: () => c
            });
            var r = n(785893),
                o = (n(667294), n(795308)),
                i = n(633878);

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

            function l(e, t) {
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
            var c = function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    c = e.height,
                    s = void 0 === c ? 24 : c,
                    f = e.color,
                    d = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    O = void 0 === p ? "" : p,
                    b = l(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", a(function(e) {
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
                }({}, (0, i.Z)(b)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M15.293 15.293a1 1 0 0 1 1.414 0L19 17.586l2.293-2.293a1 1 0 0 1 1.414 1.414L20.414 19l2.293 2.293a1 1 0 0 1-1.414 1.414L19 20.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L17.586 19l-2.293-2.293a1 1 0 0 1 0-1.414Zm3.353-.89-.525-.524a3 3 0 1 0-4.242 4.242l.525.525a.5.5 0 0 1 0 .707l-.525.526c-.46.46-.74 1.032-.838 1.628-.042.25-.231.464-.485.478-.184.01-.37.015-.556.015H2.2c-.859 0-1.318-1.01-.753-1.657l2.066-2.369a.517.517 0 0 0 .041-.617A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 .187-.005.372-.015.556-.014.254-.227.443-.478.485a2.985 2.985 0 0 0-1.628.838l-.525.525a.5.5 0 0 1-.708 0Z",
                        clipRule: "evenodd",
                        className: O
                    })
                }))
            }
        },
        552480: (e, t, n) => {
            n.d(t, {
                t: () => u
            });
            var r = n(113609),
                o = n(632685),
                i = n(749106),
                u = (0, r.Xz)({
                    id: o.Z.IN_APP_REPORTING,
                    title: "2020-29 Exp: Report TOS violating messages in-app via new modal",
                    description: ["An experiment that tests if in-app reporting is useful for Trust & Safety", "Control: No changes", "Treatment 1: Add menu options to report message"],
                    buckets: [i.NZ.CONTROL, i.NZ.TREATMENT_1]
                })
        },
        632685: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            var r;
            ! function(e) {
                e.IN_APP_REPORTING = "2020-01_in_app_reporting";
                e.LOCAL_MESSAGE_CACHING_EXPERIMENT = "2020-08_ios_persist_local_messages"
            }(r || (r = {}));
            const o = r
        },
        131461: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var r = n(667294),
                o = n(202351),
                i = n(22176),
                u = n(113609),
                a = n(264076),
                l = n(749106);

            function c(e) {
                var t = e.id,
                    n = (0, o.e7)([a.Z], (function() {
                        return a.Z.getUserExperimentDescriptor(t)
                    }), [t]);
                (0, r.useEffect)((function() {
                    null != n && (0, u.W9)(t, n)
                }), [t, n]);
                if (null != n) {
                    Date.now() < 0 && i.Z.addBreadcrumb({
                        category: "experiments",
                        message: "Experiment Configuration",
                        data: {
                            id: t,
                            kind: "user",
                            bucket: n.bucket
                        }
                    });
                    return n.bucket
                }
                return l.NZ.NOT_ELIGIBLE
            }
        },
        569865: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => w
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                u = n.n(i),
                a = n(304548),
                l = n(494889),
                c = n(443812),
                s = n(786170),
                f = n(279008),
                d = n(392354),
                p = n(347365),
                O = n(985774);

            function b(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function y(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function g(e, t) {
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
            var E = function(e, t) {
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

            function v(e) {
                var t, n, r = null != e ? e : {},
                    i = r.onError,
                    u = r.onSuccess,
                    a = g(o.useState(!1), 2),
                    l = a[0],
                    c = a[1],
                    s = l,
                    f = o.useCallback((n = (t = function(e, t, n, r) {
                        var o, a;
                        return E(this, (function(l) {
                            switch (l.label) {
                                case 0:
                                    if (s) return [2];
                                    c(!0);
                                    l.label = 1;
                                case 1:
                                    l.trys.push([1, 3, 4, 5]);
                                    return [4, (0, O.U)(e, t, n, r)];
                                case 2:
                                    l.sent();
                                    null == u || u();
                                    return [3, 5];
                                case 3:
                                    o = l.sent();
                                    a = new p.Hx(o);
                                    null == i || i(a);
                                    return [3, 5];
                                case 4:
                                    c(!1);
                                    return [7];
                                case 5:
                                    return [2]
                            }
                        }))
                    }, function() {
                        var e = this,
                            n = arguments;
                        return new Promise((function(r, o) {
                            var i = t.apply(e, n);

                            function u(e) {
                                y(i, r, o, u, a, "next", e)
                            }

                            function a(e) {
                                y(i, r, o, u, a, "throw", e)
                            }
                            u(void 0)
                        }))
                    }), function(e, t, r, o) {
                        return n.apply(this, arguments)
                    }), [s, i, u]);
                return {
                    reportFalsePositive: f,
                    isReportFalsePositiveLoading: l
                }
            }
            var h = n(318715),
                m = n(352980),
                _ = n(493254),
                S = n(473708),
                M = n(124060),
                j = n.n(M),
                A = function(e) {
                    var t = e.attachment,
                        n = t.url,
                        o = t.description,
                        i = _.XH.test(t.filename);
                    return (0, r.jsx)("div", {
                        className: j().mediaContainer,
                        children: i ? (0, r.jsx)(s.Z, {
                            className: u()(j().video, j().media),
                            controls: !0,
                            src: n
                        }) : (0, r.jsx)("img", {
                            className: u()(j().image, j().media),
                            src: n,
                            alt: o
                        })
                    })
                };

            function w(e) {
                var t, n = e.channelId,
                    i = e.messageId,
                    u = e.attachmentId,
                    s = e.transitionState,
                    p = e.onClose,
                    O = (0, c.Dt)(),
                    b = (0, f.yh)(),
                    y = function(e, t, n) {
                        var r, o = (0, h.ZP)([m.Z], (function() {
                                return m.Z.getMessage(e, t)
                            })),
                            i = (0, f.yh)();
                        if (void 0 === o) return [];
                        var u, a = void 0 !== n ? function(e) {
                            return e.id === n
                        } : function(e) {
                            return (0, d.KP)({
                                type: d.lJ.Attachment,
                                media: e
                            }, i)
                        };
                        return null !== (u = null == o || null === (r = o.attachments) || void 0 === r ? void 0 : r.filter(a)) && void 0 !== u ? u : []
                    }(n, i, u),
                    g = v({
                        onSuccess: o.useCallback((function() {
                            l.Z.pop();
                            (0, a.showToast)((0, a.createToast)(S.Z.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_SUCCESS, a.ToastType.CUSTOM));
                            p()
                        }), [p]),
                        onError: function() {
                            (0, a.showToast)((0, a.createToast)(S.Z.Messages.ERROR_GENERIC_TITLE, a.ToastType.FAILURE))
                        }
                    }),
                    E = g.reportFalsePositive,
                    _ = g.isReportFalsePositiveLoading,
                    M = function() {
                        p()
                    },
                    w = b && (null !== (t = null == y ? void 0 : y.length) && void 0 !== t ? t : 0) > 0;
                o.useEffect((function() {
                    w && (0, d.aP)({
                        action: d.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
                        channelId: n,
                        messageId: i
                    })
                }), [n, i, w]);
                w || M();
                return (0, r.jsxs)(a.ModalRoot, {
                    transitionState: s,
                    "aria-labelledby": O,
                    size: a.ModalSize.SMALL,
                    children: [(0, r.jsxs)(a.ModalContent, {
                        children: [(0, r.jsx)(a.ModalCloseButton, {
                            onClick: M,
                            className: j().closeButton
                        }), (0, r.jsx)(a.Heading, {
                            id: O,
                            variant: "heading-lg/semibold",
                            color: "header-primary",
                            className: j().header,
                            children: S.Z.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_MODAL_HEADER
                        }), (0, r.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: j().subheader,
                            children: S.Z.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_MODAL_DESCRIPTION
                        }), 1 === y.length ? (0, r.jsx)(A, {
                            attachment: y[0]
                        }) : null]
                    }), (0, r.jsxs)(a.ModalFooter, {
                        children: [(0, r.jsx)(a.Button, {
                            className: j().button,
                            disabled: _,
                            submitting: _,
                            size: a.Button.Sizes.MEDIUM,
                            color: a.Button.Colors.BRAND,
                            onClick: function() {
                                return E(n, i, y.map((function(e) {
                                    return e.id
                                })), [])
                            },
                            children: S.Z.Messages.CONFIRM
                        }), (0, r.jsx)(a.Button, {
                            className: j().button,
                            disabled: _,
                            color: a.Button.Colors.TRANSPARENT,
                            size: a.Button.Sizes.MEDIUM,
                            onClick: M,
                            children: S.Z.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        503213: (e, t, n) => {
            n.d(t, {
                qR: () => i,
                U5: () => u
            });
            var r = n(292327);

            function o(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function i(e) {
                var t = u();
                return Array.from(e.defaultActionTypes).map((function(e) {
                    return t[e]
                }))
            }

            function u() {
                var e;
                return o(e = {}, r.jj.BLOCK_MESSAGE, {
                    type: r.jj.BLOCK_MESSAGE,
                    metadata: {
                        customMessage: void 0
                    }
                }), o(e, r.jj.FLAG_TO_CHANNEL, {
                    type: r.jj.FLAG_TO_CHANNEL,
                    metadata: {
                        channelId: void 0
                    }
                }), o(e, r.jj.USER_COMMUNICATION_DISABLED, {
                    type: r.jj.USER_COMMUNICATION_DISABLED,
                    metadata: {
                        durationSeconds: 60
                    }
                }), o(e, r.jj.QUARANTINE_USER, {
                    type: r.jj.QUARANTINE_USER,
                    metadata: {}
                }), e
            }
        },
        926649: (e, t, n) => {
            n.d(t, {
                DO: () => d,
                vo: () => p,
                Fn: () => O,
                nC: () => b,
                o8: () => y,
                Jq: () => g,
                ep: () => E,
                km: () => v,
                QO: () => h,
                Vb: () => m,
                YN: () => _,
                ZF: () => S,
                Ar: () => M
            });
            var r = n(248046),
                o = n(664625),
                i = n(503213),
                u = n(201891),
                a = n(691385),
                l = n(320042),
                c = n(292327),
                s = n(473708),
                f = function(e, t) {
                    return "".concat(e, "-").concat(t, "-new-rule")
                },
                d = function(e) {
                    return (null == e ? void 0 : e.triggerType) === c.fX.KEYWORD
                },
                p = function(e) {
                    return (null == e ? void 0 : e.triggerType) === c.fX.ML_SPAM
                },
                O = function(e) {
                    return (null == e ? void 0 : e.triggerType) === c.fX.DEFAULT_KEYWORD_LIST
                },
                b = function(e) {
                    return (null == e ? void 0 : e.triggerType) === c.fX.MENTION_SPAM
                },
                y = function(e) {
                    return (null == e ? void 0 : e.triggerType) === c.fX.SERVER_POLICY
                },
                g = function(e) {
                    return (null == e ? void 0 : e.triggerType) === c.fX.USER_PROFILE
                };

            function E(e, t) {
                var n = l.I6[t],
                    r = (0, l.jp)(t, e),
                    u = {
                        id: f(e, t),
                        name: n.getDefaultRuleName(),
                        guildId: e,
                        eventType: n.eventType,
                        triggerType: t,
                        triggerMetadata: r,
                        enabled: !0,
                        creatorId: o.default.getId(),
                        actions: (0, i.qR)(n),
                        position: 0,
                        exemptChannels: new Set,
                        exemptRoles: new Set
                    };
                if (m(u)) throw new Error(s.Z.Messages.GUILD_AUTOMOD_NEW_RULE_ERROR);
                var c = (0, a.mY)(e, t);
                c > 0 && (u.name += " ".concat(c + 1));
                return u
            }

            function v(e, t) {
                if (e.length > t) throw new Error(s.Z.Messages.GUILD_AUTOMOD_KEYWORD_ERROR_TOO_MANY_KEYWORDS.format({
                    limit: t
                }));
                e.forEach((function(e) {
                    if (e.length > c.hu || e.length < c.Vk) throw new u.V6(s.Z.Messages.GUILD_AUTOMOD_KEYWORD_ERROR_INVALID_KEYWORD_LENGTH.format({
                        keyword: e,
                        max: c.hu,
                        min: c.Vk
                    }))
                }))
            }

            function h(e) {
                if (d(e)) {
                    var t, n, r = null !== (t = e.triggerMetadata.keywordFilter) && void 0 !== t ? t : [],
                        o = null !== (n = e.triggerMetadata.regexPatterns) && void 0 !== n ? n : [];
                    if (0 === r.length && 0 === o.length) throw new Error(s.Z.Messages.GUILD_AUTOMOD_KEYWORD_ERROR_NO_KEYWORDS_OR_REGEX);
                    v(r, c.RH);
                    ! function(e) {
                        if (e.length > c.VW) throw new Error(s.Z.Messages.GUILD_AUTOMOD_KEYWORD_ERROR_TOO_MANY_REGEX.format({
                            limit: c.VW
                        }));
                        e.forEach((function(e) {
                            if (e.length > c.aj || e.length < c.uE) throw new u.uS(s.Z.Messages.GUILD_AUTOMOD_REGEX_ERROR_INVALID_REGEX_LENGTH.format({
                                regex: e,
                                max: c.aj,
                                min: c.uE
                            }))
                        }))
                    }(o)
                }
                if (0 === e.actions.length) throw new Error(s.Z.Messages.GUILD_AUTOMOD_ERROR_NO_ACTIONS)
            }

            function m(e) {
                var t;
                return (0, r.BH)(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "INVALID_SNOWFLAKE")
            }

            function _(e) {
                return e === c.q4.MESSAGE_SEND ? s.Z.Messages.GUILD_AUTOMOD_EVENT_TYPE_MESSAGE_SEND : s.Z.Messages.GUILD_AUTOMOD_UNKNOWN
            }

            function S(e) {
                switch (e) {
                    case c.jj.BLOCK_MESSAGE:
                        return s.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_NAME;
                    case c.jj.FLAG_TO_CHANNEL:
                        return s.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_NAME;
                    default:
                        return s.Z.Messages.GUILD_AUTOMOD_UNKNOWN
                }
            }

            function M(e) {
                switch (e) {
                    case c.fX.KEYWORD:
                        return s.Z.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_NAME;
                    case c.fX.ML_SPAM:
                        return s.Z.Messages.GUILD_AUTOMOD_ML_SPAM_FILTER_NAME;
                    case c.fX.DEFAULT_KEYWORD_LIST:
                        return s.Z.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_FILTER_NAME;
                    default:
                        return s.Z.Messages.GUILD_AUTOMOD_UNKNOWN
                }
            }
        },
        691385: (e, t, n) => {
            n.d(t, {
                mY: () => _,
                I2: () => S,
                RD: () => M,
                pH: () => j
            });
            var r = n(667294),
                o = n(38736),
                i = n(503528),
                u = n(347365),
                a = n(11414),
                l = n(502589),
                c = n(292327);

            function s(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function f(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function d(e) {
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

            function p(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function O(e) {
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

            function y(e, t) {
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
                }(e, t) || E(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function g(e) {
                return function(e) {
                    if (Array.isArray(e)) return s(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || E(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function E(e, t) {
                if (e) {
                    if ("string" == typeof e) return s(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(e, t) : void 0
                }
            }
            var v = function(e, t) {
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
                h = {};
            var m = (0, o.Z)((function(e, t) {
                    return {
                        rules: {},
                        fetching: !1,
                        error: null,
                        updateRule: function(n) {
                            var r, o, i = n.guildId,
                                u = n.id,
                                a = n.triggerType,
                                c = t().rules,
                                s = null !== (r = c[i]) && void 0 !== r ? r : {},
                                f = null !== (o = s[a]) && void 0 !== o ? o : [],
                                d = f.some((function(e) {
                                    return e.id === u
                                })),
                                y = f.filter((function(e) {
                                    return !(0, l.U)(e.id) || e.triggerType !== a
                                })),
                                E = d ? y.map((function(e) {
                                    return e.id === u ? n : e
                                })) : g(y).concat([n]);
                            e({
                                rules: b(O({}, c), p({}, i, b(O({}, s), p({}, a, E)))),
                                error: null
                            })
                        },
                        removeRule: function(n, r) {
                            var o = t().rules,
                                i = o[r],
                                u = Object.keys(i).reduce((function(e, t) {
                                    var r, o = Number(t),
                                        u = null !== (r = i[o]) && void 0 !== r ? r : [];
                                    e[o] = u.filter((function(e) {
                                        return e.id !== n
                                    }));
                                    return e
                                }), i);
                            e({
                                rules: b(O({}, o), p({}, r, u)),
                                error: null
                            })
                        },
                        syncRules: (n = d((function(n) {
                            var r, o, i, l, s;
                            return v(this, (function(f) {
                                switch (f.label) {
                                    case 0:
                                        if (! function(e) {
                                                var t;
                                                return Date.now() - (null !== (t = h[e]) && void 0 !== t ? t : 0) > 2e4
                                            }(n)) return [2];
                                        h[n] = Date.now();
                                        f.label = 1;
                                    case 1:
                                        f.trys.push([1, 3, , 4]);
                                        return [4, (0, a.$Y)(n)];
                                    case 2:
                                        r = f.sent();
                                        o = function(e) {
                                            var t, n = (p(t = {}, c.fX.KEYWORD, []), p(t, c.fX.ML_SPAM, []), p(t, c.fX.DEFAULT_KEYWORD_LIST, []), p(t, c.fX.MENTION_SPAM, []), p(t, c.fX.USER_PROFILE, []), p(t, c.fX.SERVER_POLICY, []), t);
                                            e.forEach((function(e) {
                                                var t, r = e.triggerType;
                                                null === (t = n[r]) || void 0 === t || t.push(e)
                                            }));
                                            return n
                                        }(r);
                                        i = t().rules;
                                        e({
                                            rules: b(O({}, i), p({}, n, o)),
                                            error: null
                                        });
                                        return [3, 4];
                                    case 3:
                                        l = f.sent();
                                        s = new u.Hx(l);
                                        e({
                                            error: s
                                        });
                                        return [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        })), function(e) {
                            return n.apply(this, arguments)
                        })
                    };
                    var n
                })),
                _ = function(e, t) {
                    var n, r;
                    return (null !== (r = null === (n = m.getState().rules[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== r ? r : []).length
                };

            function S(e) {
                var t = y(r.useState(!1), 2),
                    n = t[0],
                    o = t[1],
                    u = y(m((function(e) {
                        return [e.syncRules, e.fetching]
                    }), i.Z), 2),
                    a = u[0],
                    l = u[1];
                return [n, r.useCallback(d((function() {
                    return v(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                if (l || null == e) return [2];
                                t.label = 1;
                            case 1:
                                t.trys.push([1, , 3, 4]);
                                o(!0);
                                return [4, a(e)];
                            case 2:
                                t.sent();
                                return [3, 4];
                            case 3:
                                o(!1);
                                return [7];
                            case 4:
                                return [2]
                        }
                    }))
                })), [e, l, a])]
            }

            function M(e) {
                var t = y(S(e), 2),
                    n = t[0],
                    o = t[1];
                r.useEffect((function() {
                    d((function() {
                        return v(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, o()];
                                case 1:
                                    e.sent();
                                    return [2]
                            }
                        }))
                    }))()
                }), [e, o]);
                return [n, o]
            }

            function j(e) {
                return m((function(t) {
                    var n;
                    return {
                        rulesByTriggerType: null !== (n = t.rules[null != e ? e : ""]) && void 0 !== n ? n : {},
                        updateRule: t.updateRule,
                        removeRule: t.removeRule
                    }
                }))
            }
        },
        320042: (e, t, n) => {
            n.d(t, {
                vT: () => r,
                I6: () => p,
                vh: () => f,
                r5: () => b,
                V9: () => y,
                yU: () => g,
                Z6: () => E,
                jp: () => v
            });
            var r, o, i = n(667294),
                u = n(489684),
                a = n(830001),
                l = n(292327),
                c = n(473708);

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }! function(e) {
                e.NEW = "new";
                e.RECOMMENDED = "recommended";
                e.BETA = "beta";
                e.ALPHA = "alpha"
            }(r || (r = {}));
            var f, d, p = (s(o = {}, l.fX.SPAM_LINK, {
                getDefaultRuleName: function() {
                    return c.Z.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_NAME
                },
                type: l.fX.SPAM_LINK,
                eventType: l.q4.MESSAGE_SEND,
                perGuildMaxCount: 0,
                availableActionTypes: new Set,
                flags: new Set,
                defaultActionTypes: new Set
            }), s(o, l.fX.KEYWORD, {
                getDefaultRuleName: function() {
                    return c.Z.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_NAME
                },
                type: l.fX.KEYWORD,
                eventType: l.q4.MESSAGE_SEND,
                perGuildMaxCount: 6,
                availableActionTypes: new Set([l.jj.BLOCK_MESSAGE, l.jj.FLAG_TO_CHANNEL, l.jj.USER_COMMUNICATION_DISABLED]),
                flags: new Set,
                defaultActionTypes: new Set([l.jj.BLOCK_MESSAGE])
            }), s(o, l.fX.ML_SPAM, {
                getDefaultRuleName: function() {
                    return c.Z.Messages.GUILD_AUTOMOD_ML_SPAM_FILTER_NAME
                },
                type: l.fX.ML_SPAM,
                eventType: l.q4.MESSAGE_SEND,
                perGuildMaxCount: 1,
                availableActionTypes: new Set([l.jj.BLOCK_MESSAGE, l.jj.FLAG_TO_CHANNEL]),
                flags: new Set([]),
                defaultActionTypes: new Set([l.jj.BLOCK_MESSAGE])
            }), s(o, l.fX.DEFAULT_KEYWORD_LIST, {
                getDefaultRuleName: function() {
                    return c.Z.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_FILTER_NAME
                },
                type: l.fX.DEFAULT_KEYWORD_LIST,
                eventType: l.q4.MESSAGE_SEND,
                perGuildMaxCount: 1,
                availableActionTypes: new Set([l.jj.BLOCK_MESSAGE, l.jj.FLAG_TO_CHANNEL]),
                flags: new Set([]),
                defaultActionTypes: new Set([l.jj.BLOCK_MESSAGE])
            }), s(o, l.fX.MENTION_SPAM, {
                getDefaultRuleName: function() {
                    return c.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_NAME
                },
                type: l.fX.MENTION_SPAM,
                eventType: l.q4.MESSAGE_SEND,
                perGuildMaxCount: 1,
                availableActionTypes: new Set([l.jj.BLOCK_MESSAGE, l.jj.FLAG_TO_CHANNEL, l.jj.USER_COMMUNICATION_DISABLED]),
                flags: new Set([]),
                defaultActionTypes: new Set([l.jj.BLOCK_MESSAGE])
            }), s(o, l.fX.USER_PROFILE, {
                getDefaultRuleName: function() {
                    return c.Z.Messages.GUILD_AUTOMOD_USER_PROFILE_FILTER_NAME
                },
                type: l.fX.USER_PROFILE,
                eventType: l.q4.GUILD_MEMBER_JOIN_OR_UPDATE,
                perGuildMaxCount: 1,
                availableActionTypes: new Set([l.jj.QUARANTINE_USER, l.jj.FLAG_TO_CHANNEL]),
                flags: new Set([r.BETA]),
                defaultActionTypes: new Set([l.jj.QUARANTINE_USER])
            }), s(o, l.fX.SERVER_POLICY, {
                getDefaultRuleName: function() {
                    return c.Z.Messages.GUILD_AUTOMOD_SERVER_POLICY_FILTER_NAME
                },
                type: l.fX.SERVER_POLICY,
                eventType: l.q4.MESSAGE_SEND,
                perGuildMaxCount: 1,
                availableActionTypes: new Set([l.jj.FLAG_TO_CHANNEL]),
                flags: new Set([r.ALPHA]),
                defaultActionTypes: new Set
            }), o);
            ! function(e) {
                e.MEMBERS = "members";
                e.CONTENT = "content"
            }(f || (f = {}));
            var O = (s(d = {}, f.MEMBERS, [p[l.fX.USER_PROFILE]]), s(d, f.CONTENT, [p[l.fX.SERVER_POLICY], p[l.fX.MENTION_SPAM], p[l.fX.ML_SPAM], p[l.fX.DEFAULT_KEYWORD_LIST], p[l.fX.KEYWORD]]), d),
                b = function(e, t) {
                    return p[e].flags.has(t)
                };

            function y(e) {
                return Array.from(p[e].availableActionTypes)
            }

            function g(e, t) {
                var n = e.id,
                    r = e.eventType,
                    o = e.triggerType,
                    i = e.actions,
                    u = p[o];
                if (t.filter((function(e) {
                        return n !== e.id && e.triggerType === o
                    })).length > u.perGuildMaxCount) throw new Error("You have exceeded the maximum number of rules of type ".concat(o));
                if (i.some((function(e) {
                        return !u.availableActionTypes.has(e.type)
                    }))) throw new Error("You have provided an action that is not available for this trigger type");
                if (r !== u.eventType) throw new Error("You have provided an event type that is not available for this trigger type")
            }

            function E(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = (0, a.oA)(e, t),
                    r = (0, u.mZ)(e);
                return i.useMemo((function() {
                    var e, t = (s(e = {}, f.MEMBERS, []), s(e, f.CONTENT, []), e);
                    return Object.keys(O).reduce((function(e, t) {
                        var o = O[t].filter((function(e) {
                            return !(e.type === l.fX.SERVER_POLICY && !r) && (!(e.type === l.fX.USER_PROFILE && !n) && e.perGuildMaxCount > 0)
                        })).map((function(e) {
                            return e.type
                        }));
                        e[t] = o;
                        return e
                    }), t)
                }), [n, r])
            }

            function v(e, t) {
                var n = (0, u.H7)(t);
                switch (e) {
                    case l.fX.DEFAULT_KEYWORD_LIST:
                        return {
                            allowList: [], presets: []
                        };
                    case l.fX.USER_PROFILE:
                    case l.fX.KEYWORD:
                        return {
                            keywordFilter: [], regexPatterns: [], allowList: []
                        };
                    case l.fX.MENTION_SPAM:
                        return {
                            mentionTotalLimit: l.Ic, mentionRaidProtectionEnabled: n
                        };
                    case l.fX.ML_SPAM:
                    case l.fX.SERVER_POLICY:
                    default:
                        return
                }
            }
        },
        727974: (e, t, n) => {
            n.d(t, {
                Ac: () => u,
                Ze: () => a,
                cb: () => l,
                se: () => c,
                kU: () => s
            });
            var r = /[\t\n,]/g,
                o = /\s{2,}/g,
                i = /[*"']/g;

            function u(e) {
                return e.split(r).map((function(e) {
                    return e.replace(o, " ").trim()
                })).filter((function(e) {
                    return e.length > 0
                }))
            }

            function a(e) {
                var t = new Set(e);
                return Array.from(t)
            }

            function l(e) {
                return e.sort((function(e, t) {
                    var n = e.replaceAll(i, ""),
                        r = t.replaceAll(i, "");
                    return n.localeCompare(r)
                }))
            }

            function c(e) {
                return e.join(", ")
            }

            function s(e) {
                return e.includes("\n") || e.includes(",")
            }
        },
        830001: (e, t, n) => {
            n.d(t, {
                ze: () => f,
                Nb: () => d,
                pr: () => p,
                LK: () => O,
                oA: () => b,
                sG: () => y
            });
            var r = n(202351),
                o = n(567403),
                i = n(682776),
                u = n(489684),
                a = n(2590);

            function l(e, t) {
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
                    if ("string" == typeof e) return l(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var s = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.Z, i.Z],
                    n = c(t, 2),
                    r = n[0],
                    l = n[1],
                    s = r.getGuild(e);
                if (null == s) return !1;
                var f = s.hasFeature(a.oNc.COMMUNITY) || (0, u.n7)(e);
                return f && l.can(a.Plq.MANAGE_GUILD, s)
            };

            function f(e) {
                return null != e && s(e)
            }

            function d(e) {
                return s(e)
            }

            function p(e) {
                return (0, r.e7)([o.Z, i.Z], (function() {
                    return s(e, [o.Z, i.Z])
                }), [e])
            }

            function O(e) {
                var t, n = (0, r.e7)([i.Z], (function() {
                    return i.Z.can(a.Plq.MANAGE_GUILD, e)
                }), [e]);
                return (0, u.Ac)(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "", !1) && n
            }

            function b(e) {
                var t, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = (0, r.e7)([o.Z], (function() {
                        var n;
                        return null !== (t = null === (n = o.Z.getGuild(e)) || void 0 === n ? void 0 : n.hasFeature(a.oNc.AUTOMOD_TRIGGER_USER_PROFILE)) && void 0 !== t && t
                    }), [e]),
                    l = (0, u.fh)(e, n);
                return l || i
            }

            function y(e) {
                var t, n, r = b(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "", !0),
                    o = p(null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : "");
                return r && o
            }
        },
        502589: (e, t, n) => {
            n.d(t, {
                U: () => o
            });
            var r = new Set(["1030554520465440818"]);

            function o(e) {
                return null != e && r.has(e)
            }
        },
        355248: (e, t, n) => {
            n.d(t, {
                w: () => M,
                V: () => j
            });
            var r = n(496486),
                o = n.n(r),
                i = n(38736),
                u = n(347365),
                a = n(72580),
                l = n(201891),
                c = n(926649),
                s = n(320042),
                f = n(11414),
                d = n(727974),
                p = n(502589),
                O = n(2590),
                b = n(473708);

            function y(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function g(e, t, n) {
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
                        g(e, t, n[t])
                    }))
                }
                return e
            }

            function v(e, t) {
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
            var h = function(e, t) {
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
                                        if (!(o = u.trys,
                                                o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
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

            function m(e) {
                if (e.code === O.evJ.INVALID_FORM_BODY) {
                    var t, n;
                    if (null != (null === (t = e.errors) || void 0 === t || null === (n = t.trigger_metadata) || void 0 === n ? void 0 : n.regex_patterns)) return b.Z.Messages.GUILD_AUTOMOD_REGEX_GENERIC_SAVE_ERROR
                }
                return e.getAnyErrorMessage()
            }
            var _ = Object.freeze({
                    editingRule: null,
                    hasChanges: !1,
                    isLoading: !1,
                    errorMessage: null
                }),
                S = (0, i.Z)((function(e, t) {
                    return {
                        editingRule: null,
                        hasChanges: !1,
                        setEditingRule: function(n) {
                            var r = t().editingRule,
                                i = null != n && null != r && n.id === r.id,
                                u = o().cloneDeep(n);
                            null != u && (u = v(E({}, u), {
                                actions: u.actions.filter(a.lm)
                            }));
                            e({
                                editingRule: u,
                                hasChanges: i,
                                errorMessage: null
                            })
                        },
                        createNewEditingRule: function(t, n, r) {
                            var o = E({}, (0, c.ep)(t, n), null != r ? r : {});
                            e({
                                editingRule: o,
                                hasChanges: !1
                            });
                            return o
                        },
                        isLoading: !1,
                        errorMessage: null,
                        cancelEditingRule: function() {
                            e(E({}, _))
                        },
                        saveRule: (r = (n = function(t, n) {
                            var r, o, i, a, O, y;
                            return h(this, (function(g) {
                                switch (g.label) {
                                    case 0:
                                        if (null == t) {
                                            e(E({}, _));
                                            return [2, null]
                                        }
                                        try {
                                            if ((0, c.DO)(t)) {
                                                t.triggerMetadata.keywordFilter = (0, d.cb)((0, d.Ze)(null !== (r = t.triggerMetadata.keywordFilter) && void 0 !== r ? r : []));
                                                t.triggerMetadata.allowList = (0, d.cb)((0, d.Ze)(null !== (o = t.triggerMetadata.allowList) && void 0 !== o ? o : []))
                                            }(0, c.Fn)(t) && (t.triggerMetadata.allowList = (0, d.cb)((0, d.Ze)(null !== (i = t.triggerMetadata.allowList) && void 0 !== i ? i : [])));
                                            (0, s.yU)(t, n);
                                            (0, c.QO)(t)
                                        } catch (t) {
                                            t instanceof l.V6 ? e({
                                                errorMessage: b.Z.Messages.GUILD_AUTOMOD_KEYWORD_GENERIC_SAVE_ERROR,
                                                isLoading: !1
                                            }) : t instanceof l.uS ? e({
                                                errorMessage: b.Z.Messages.GUILD_AUTOMOD_REGEX_GENERIC_SAVE_ERROR,
                                                isLoading: !1
                                            }) : e({
                                                errorMessage: t.message,
                                                isLoading: !1
                                            });
                                            return [2, null]
                                        }
                                        g.label = 1;
                                    case 1:
                                        g.trys.push([1, 6, , 7]);
                                        e({
                                            isLoading: !0
                                        });
                                        a = null;
                                        return !(0, c.Vb)(t) || (0, p.U)(t.id) ? [3, 3] : [4, (0, f.Je)(t)];
                                    case 2:
                                        a = g.sent();
                                        return [3, 5];
                                    case 3:
                                        return [4, (0, f.JK)(t)];
                                    case 4:
                                        a = g.sent();
                                        g.label = 5;
                                    case 5:
                                        e(E({}, _));
                                        return [2, a];
                                    case 6:
                                        O = g.sent();
                                        y = new u.Hx(O);
                                        e({
                                            isLoading: !1,
                                            errorMessage: m(y)
                                        });
                                        return [3, 7];
                                    case 7:
                                        return [2, null]
                                }
                            }))
                        }, function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(r, o) {
                                var i = n.apply(e, t);

                                function u(e) {
                                    y(i, r, o, u, a, "next", e)
                                }

                                function a(e) {
                                    y(i, r, o, u, a, "throw", e)
                                }
                                u(void 0)
                            }))
                        }), function(e, t) {
                            return r.apply(this, arguments)
                        }),
                        saveEditingRule: function(e) {
                            var n = t(),
                                r = n.editingRule;
                            return (0, n.saveRule)(r, e)
                        }
                    };
                    var n, r
                }));

            function M() {
                return S((function(e) {
                    return {
                        hasChanges: e.hasChanges,
                        editingRule: e.editingRule,
                        isLoading: e.isLoading,
                        errorMessage: e.errorMessage,
                        saveRule: e.saveRule,
                        saveEditingRule: e.saveEditingRule,
                        cancelEditingRule: e.cancelEditingRule
                    }
                }))
            }

            function j() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = S((function(e) {
                        return {
                            hasChanges: e.hasChanges,
                            editingRule: e.editingRule,
                            setEditingRule: e.setEditingRule,
                            createNewEditingRule: e.createNewEditingRule
                        }
                    }));
                null != e && t.setEditingRule(e);
                return t
            }
        },
        628177: (e, t, n) => {
            n.d(t, {
                c: () => A
            });
            var r = n(773011),
                o = n(61209),
                i = n(840922),
                u = n(473903),
                a = n(436622),
                l = n(785893),
                c = (n(667294), n(168075)),
                s = n(959898),
                f = n(633878);

            function d(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function p(e, t) {
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
            const b = (0, c.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    r = e.height,
                    o = void 0 === r ? 24 : r,
                    i = e.color,
                    u = void 0 === i ? "currentColor" : i,
                    a = O(e, ["width", "height", "color"]);
                return (0, l.jsxs)("svg", p(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            d(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, f.Z)(a)), {
                    width: n,
                    height: o,
                    fill: "None",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        d: "M4.25947 16.5917C3.14082 14.7059 2.74905 12.4766 3.15775 10.3224C3.56644 8.16824 4.74748 6.23734 6.47909 4.89231C8.2107 3.54728 10.3738 2.88064 12.5621 3.01758C14.7504 3.15452 16.8135 4.08562 18.3639 5.63603C19.9144 7.18644 20.8455 9.24952 20.9824 11.4379C21.1194 13.6262 20.4527 15.7893 19.1077 17.5209C17.7627 19.2525 15.8318 20.4335 13.6776 20.8422C11.5234 21.2509 9.29412 20.8592 7.40833 19.7405L7.40835 19.7405L4.29862 20.6289C4.16996 20.6657 4.03381 20.6674 3.90428 20.6338C3.77475 20.6003 3.65655 20.5327 3.56194 20.4381C3.46732 20.3434 3.39973 20.2252 3.36616 20.0957C3.3326 19.9662 3.33429 19.83 3.37105 19.7014L4.25954 16.5916L4.25947 16.5917Z",
                        stroke: u,
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }), (0, l.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M8.30605 8.30602C7.89802 8.71404 7.89802 9.37558 8.30605 9.78361L10.5224 12L8.30606 14.2164C7.89803 14.6244 7.89803 15.2859 8.30606 15.694C8.71409 16.102 9.37563 16.102 9.78365 15.694L12 13.4776L14.2164 15.694C14.6244 16.102 15.286 16.102 15.694 15.694C16.102 15.2859 16.102 14.6244 15.694 14.2164L13.4776 12L15.694 9.78361C16.102 9.37558 16.102 8.71404 15.694 8.30602C15.286 7.89799 14.6244 7.89799 14.2164 8.30602L12 10.5224L9.78364 8.30602C9.37562 7.89799 8.71408 7.89799 8.30605 8.30602Z",
                        fill: u
                    })]
                }))
            }), s.i);
            var y = n(64875),
                g = n(559968),
                E = n(292327),
                v = n(515222),
                h = n(473708),
                m = function(e) {
                    return e !== E.jj.QUARANTINE_USER
                },
                _ = function(e) {
                    switch (e) {
                        case E.jj.BLOCK_MESSAGE:
                            return h.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_NAME;
                        case E.jj.FLAG_TO_CHANNEL:
                            return h.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_NAME;
                        case E.jj.USER_COMMUNICATION_DISABLED:
                            return h.Z.Messages.GUILD_AUTOMOD_ACTIONS_DISABLE_GUILD_COMMUNICATION_FOR_USER;
                        case E.jj.QUARANTINE_USER:
                            return h.Z.Messages.GUILD_AUTOMOD_ACTIONS_QUARANTINE_USER
                    }
                },
                S = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E.fX.KEYWORD;
                    switch (e) {
                        case E.jj.BLOCK_MESSAGE:
                            switch (t) {
                                case E.fX.MENTION_SPAM:
                                    return h.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION_MENTION_SPAM;
                                case E.fX.ML_SPAM:
                                    return h.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION_ML_SPAM;
                                default:
                                    return h.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION
                            }
                        case E.jj.FLAG_TO_CHANNEL:
                            return h.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_DESCRIPTION;
                        case E.jj.USER_COMMUNICATION_DISABLED:
                            return h.Z.Messages.GUILD_AUTOMOD_ACTIONS_DISABLE_GUILD_COMMUNICATION_FOR_USER_DESCRIPTION;
                        case E.jj.QUARANTINE_USER:
                            return h.Z.Messages.GUILD_AUTOMOD_ACTIONS_QUARANTINE_USER_DESCRIPTION
                    }
                },
                M = function(e, t) {
                    switch (e) {
                        case E.jj.QUARANTINE_USER:
                        case E.jj.BLOCK_MESSAGE:
                            return null;
                        case E.jj.FLAG_TO_CHANNEL:
                            var n, a = null == t || null === (n = t.metadata) || void 0 === n ? void 0 : n.channelId;
                            if (null == a) return null;
                            var l = o.Z.getChannel(a);
                            if (null == l) return null;
                            var c = (0, r.F6)(l, u.default, i.Z);
                            return h.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_DISPLAY_HELPER.format({
                                channelName: c
                            });
                        case E.jj.USER_COMMUNICATION_DISABLED:
                            var s, f, d = null !== (f = null == t || null === (s = t.metadata) || void 0 === s ? void 0 : s.durationSeconds) && void 0 !== f ? f : 0,
                                p = (0, v.L9)(d);
                            return null == p ? null : h.Z.Messages.GUILD_AUTOMOD_ACTIONS_USER_DISABLE_COMMUNICATION_DISPLAY_HELPER.format({
                                duration: p
                            })
                    }
                },
                j = function(e) {
                    switch (e) {
                        case E.jj.BLOCK_MESSAGE:
                            return g.Z;
                        case E.jj.FLAG_TO_CHANNEL:
                            return a.Z;
                        case E.jj.USER_COMMUNICATION_DISABLED:
                            return y.Z;
                        case E.jj.QUARANTINE_USER:
                            return b
                    }
                };

            function A(e, t, n) {
                return function(e) {
                    switch (e) {
                        case E.jj.BLOCK_MESSAGE:
                        case E.jj.FLAG_TO_CHANNEL:
                        case E.jj.USER_COMMUNICATION_DISABLED:
                        case E.jj.QUARANTINE_USER:
                            return !0;
                        default:
                            return !1
                    }
                }(e) ? {
                    headerText: null !== (r = _(e)) && void 0 !== r ? r : "",
                    descriptionText: null !== (o = S(e, n)) && void 0 !== o ? o : "",
                    helperText: null !== (i = M(e, t)) && void 0 !== i ? i : null,
                    icon: null !== (u = j(e)) && void 0 !== u ? u : g.Z,
                    isEditable: m(e)
                } : null;
                var r, o, i, u
            }
        },
        539530: (e, t, n) => {
            n.d(t, {
                gK: () => d,
                XN: () => p,
                af: () => O
            });
            var r = n(785893),
                o = (n(667294), n(304548));

            function i(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function u(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var u = e.apply(t, n);

                        function a(e) {
                            i(u, r, o, a, l, "next", e)
                        }

                        function l(e) {
                            i(u, r, o, a, l, "throw", e)
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

            function l(e) {
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

            function f(e) {
                return new Promise((function(t) {
                    (0, o.openModalLazy)((function() {
                        return e((function() {
                            t(!0)
                        }), (function(e) {
                            t(!1);
                            return e()
                        }))
                    }))
                }))
            }
            var d = function(e) {
                    return f((t = u((function(t, o) {
                        var i, u;
                        return s(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, n.e(27134).then(n.bind(n, 927134))];
                                case 1:
                                    i = a.sent(), u = i.default;
                                    return [2, function(n) {
                                        return (0, r.jsx)(u, c(l({}, n), {
                                            ruleName: e,
                                            onConfirm: t,
                                            onClose: function() {
                                                return o(n.onClose)
                                            },
                                            onCancel: function() {
                                                return o(n.onClose)
                                            }
                                        }))
                                    }]
                            }
                        }))
                    })), function(e, n) {
                        return t.apply(this, arguments)
                    }));
                    var t
                },
                p = function(e, t) {
                    return f((o = u((function(o, i) {
                        var u, a;
                        return s(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    return [4, n.e(93953).then(n.bind(n, 393953))];
                                case 1:
                                    u = s.sent(), a = u.default;
                                    return [2, function(n) {
                                        return (0, r.jsx)(a, c(l({}, n), {
                                            ruleName: e,
                                            keyword: t,
                                            onConfirm: o,
                                            onClose: function() {
                                                return i(n.onClose)
                                            },
                                            onCancel: function() {
                                                return i(n.onClose)
                                            }
                                        }))
                                    }]
                            }
                        }))
                    })), function(e, t) {
                        return o.apply(this, arguments)
                    }));
                    var o
                },
                O = function(e) {
                    return function(t) {
                        return f((o = u((function(o, i) {
                            var u, a, f;
                            return s(this, (function(s) {
                                switch (s.label) {
                                    case 0:
                                        return [4, n.e(45313).then(n.bind(n, 445313))];
                                    case 1:
                                        u = s.sent(), a = u.default;
                                        f = function() {
                                            t();
                                            o()
                                        };
                                        return [2, function(t) {
                                            return (0, r.jsx)(a, c(l({
                                                ruleName: e
                                            }, t), {
                                                onConfirm: f,
                                                onClose: function() {
                                                    return i(t.onClose)
                                                },
                                                onCancel: function() {
                                                    return i(t.onClose)
                                                }
                                            }))
                                        }]
                                }
                            }))
                        })), function(e, t) {
                            return o.apply(this, arguments)
                        }));
                        var o
                    }
                }
        },
        530607: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var r = n(202351),
                o = n(744564);

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

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

            function l(e, t) {
                l = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return l(e, t)
            }
            var c = function(e) {
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
                    var n, r = u(e);
                    if (t) {
                        var o = u(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return a(this, n)
                }
            }
            var f = {};
            var d = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && l(e, t)
                }(n, e);
                var t = s(n);

                function n() {
                    i(this, n);
                    return t.apply(this, arguments)
                }
                n.prototype.getOptions = function(e) {
                    return f[e]
                };
                return n
            }(r.ZP.Store);
            d.displayName = "SendMessageOptionsStore";
            const p = new d(o.Z, {
                MESSAGE_CREATE: function(e) {
                    var t = e.message,
                        n = e.sendMessageOptions;
                    null != n && (f[t.id] = n);
                    null != t.nonce && t.nonce in f && delete f[t.nonce]
                }
            })
        },
        618738: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var r = n(225386),
                o = n(791707),
                i = n(2590);

            function u(e, t, n) {
                return !t.isSystemDM() && !(0, o.Z)(e) && (n || t.isPrivate()) && (0, r.RG)(t) && t.type !== i.d4z.GUILD_VOICE && t.type !== i.d4z.GUILD_STAGE_VOICE
            }
        },
        92517: (e, t, n) => {
            n.d(t, {
                Z: () => a
            });
            var r = n(720419),
                o = n(698847);

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

            function a(e, t, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                r.Z.deleteMessage(e.id, t.id, !0);
                if (t.isCommandType()) null != t.interactionData && null != i.applicationId && (0, o.d)(t, e, i.applicationId);
                else {
                    var a = t.content,
                        l = t.tts,
                        c = t.flags,
                        s = t.nonce;
                    r.Z.sendMessage(e.id, {
                        content: a,
                        tts: l,
                        invalidEmojis: [],
                        validNonShortcutEmojis: []
                    }, void 0, u({
                        nonce: s,
                        flags: c
                    }, i))
                }
            }
        },
        272112: (e, t, n) => {
            n.d(t, {
                zW: () => I,
                F4: () => P,
                fB: () => T,
                $Z: () => R,
                Hd: () => N,
                B8: () => D,
                rY: () => C,
                Xl: () => L,
                mG: () => Z,
                op: () => U,
                HH: () => x,
                gK: () => G,
                qe: () => k,
                W1: () => F,
                l9: () => K
            });
            var r = n(785893),
                o = (n(667294), n(304548)),
                i = n(933818),
                u = n(720419),
                a = n(913928),
                l = n(148815),
                c = n(703790),
                s = (n(354368),
                    n(931893)),
                f = n(28862),
                d = n(367406),
                p = n(664625),
                O = n(61209),
                b = n(652591),
                y = n(176758),
                g = n(691797),
                E = n(930948),
                v = n(530607),
                h = n(847839),
                m = n(92517),
                _ = n(2590);

            function S(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function M(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            S(i, r, o, u, a, "next", e)
                        }

                        function a(e) {
                            S(i, r, o, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function j(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function A(e, t) {
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

            function I(e) {
                var t = e.getGuildId();
                null != t && c.Z.open(t, _.pNK.OVERVIEW)
            }

            function P(e, t, n) {
                (0, g.JG)(n.shiftKey ? "".concat(t.channel_id, "-").concat(t.id) : t.id)
            }

            function T(e, t) {
                b.default.track(_.rMx.MESSAGE_LINK_COPIED, {
                    message_id: t.id,
                    channel: t.channel_id
                });
                (0, g.JG)((0, y.wR)(e.guild_id, e.id, t.id))
            }

            function R(e, t, n) {
                t.state === _.yb.SEND_FAILED || n.shiftKey ? u.Z.deleteMessage(e.id, t.id, t.state === _.yb.SEND_FAILED) : a.Z.confirmDelete(e, t)
            }

            function N(e, t) {
                u.Z.startEditMessage(e.id, t.id, t.content)
            }

            function D(e, t) {
                (0, h.Z)(e.id, t.id)
            }

            function C(e, t, n) {
                !1 !== t.pinned ? n.shiftKey ? i.Z.unpinMessage(e, t.id) : a.Z.confirmUnpin(e, t) : n.shiftKey ? i.Z.pinMessage(e, t.id) : a.Z.confirmPin(e, t)
            }

            function L(e, t) {
                (0, l.Z)(e.id, t.id)
            }

            function Z(e, t) {
                (0, m.Z)(e, t, void 0, v.Z.getOptions(t.id))
            }

            function U(e, t) {
                (0, o.openModalLazy)(M((function() {
                    var e, o;
                    return w(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, Promise.resolve().then(n.bind(n, 275865))];
                            case 1:
                                e = i.sent(), o = e.default;
                                return [2, function(e) {
                                    return (0, r.jsx)(o, A(function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                                            }))));
                                            r.forEach((function(t) {
                                                j(e, t, n[t])
                                            }))
                                        }
                                        return e
                                    }({}, e), {
                                        message: t
                                    }))
                                }]
                        }
                    }))
                })))
            }

            function x(e, t, n) {
                var r = e.isPrivate(),
                    o = t.author.id === p.default.getId();
                (0, f.fE)({
                    channel: e,
                    message: t,
                    shouldMention: !n.shiftKey && !o,
                    showMentionToggle: !r && !o
                });
                E.S.dispatchToLastSubscribed(_.CkL.TEXTAREA_FOCUS)
            }

            function G(e, t) {
                (0, d.R6)(e, t, "Message")
            }

            function k(e, t) {
                var n = O.Z.getChannel(t.id);
                null != n && (0, d.ok)(n)
            }

            function F(e, t) {
                (0, s.BW)(t)
            }

            function K(e, t) {
                (0, s.Kp)(t.id)
            }
        },
        573597: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => ht,
                useMessageMenu: () => mt
            });
            var r = n(785893),
                o = n(667294),
                i = n(809784),
                u = n(304548),
                a = n(971402),
                l = n(516217),
                c = n(73904),
                s = n(552480),
                f = n(112897),
                d = n(131461),
                p = n(446419),
                O = n(893516),
                b = n(480657),
                y = n(269083),
                g = n(699050),
                E = n(841150),
                v = n(691385),
                h = n(320042),
                m = n(830001),
                _ = n(355248),
                S = n(628177),
                M = n(539530),
                j = n(703790),
                A = n(2590),
                w = n(292327),
                I = n(473708),
                P = n(653116),
                T = n.n(P);

            function R(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function N(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function D(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function C(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        D(e, t, n[t])
                    }))
                }
                return e
            }

            function L(e, t) {
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

            function Z(e, t) {
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
                }(e, t) || x(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function U(e) {
                return function(e) {
                    if (Array.isArray(e)) return R(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || x(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function x(e, t) {
                if (e) {
                    if ("string" == typeof e) return R(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? R(e, t) : void 0
                }
            }
            var G = function(e, t) {
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
                },
                k = w.fX.KEYWORD;

            function F(e, t) {
                var n = h.I6[k].perGuildMaxCount,
                    i = (0,
                        _.w)(),
                    l = i.isLoading,
                    c = i.saveRule,
                    s = (0, _.V)().createNewEditingRule,
                    f = Z(o.useState(!1), 2),
                    d = f[0],
                    p = f[1],
                    O = Z((0, v.I2)(t), 2),
                    b = O[0],
                    y = O[1],
                    g = (0, v.pH)(t),
                    E = g.rulesByTriggerType,
                    w = g.updateRule,
                    P = o.useMemo((function() {
                        var e;
                        return null !== (e = E[k]) && void 0 !== e ? e : []
                    }), [E]),
                    R = 0 === P.length,
                    D = n > P.length && !R;
                if (!o.useMemo((function() {
                        return (0, m.ze)(t)
                    }), [t]) || null == e || 0 === e.length || null == t) return null;
                var x, F, K = e.split(" ").length,
                    B = function() {
                        if (null != t) {
                            (0, a.Zy)();
                            j.Z.open(t, A.pNK.GUILD_AUTOMOD);
                            setTimeout((function() {
                                s(t, k, {
                                    triggerMetadata: {
                                        keywordFilter: [e],
                                        regexPatterns: [],
                                        allowList: []
                                    }
                                })
                            }), 400)
                        }
                    },
                    H = (F = (x = function(t) {
                        var n, r, o;
                        return G(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    (0, a.Zy)();
                                    return [4, (0, M.XN)(t.name, e)];
                                case 1:
                                    if (!i.sent()) return [2];
                                    o = L(C({}, t), {
                                        triggerMetadata: L(C({}, t.triggerMetadata), {
                                            keywordFilter: U(null !== (r = null === (n = t.triggerMetadata) || void 0 === n ? void 0 : n.keywordFilter) && void 0 !== r ? r : []).concat([e])
                                        })
                                    });
                                    return [4, c(o, P)];
                                case 2:
                                    i.sent();
                                    w(o);
                                    return [2]
                            }
                        }))
                    }, function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(n, r) {
                            var o = x.apply(e, t);

                            function i(e) {
                                N(o, n, r, i, u, "next", e)
                            }

                            function u(e) {
                                N(o, n, r, i, u, "throw", e)
                            }
                            i(void 0)
                        }))
                    }), function(e) {
                        return F.apply(this, arguments)
                    }),
                    X = (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)(u.MenuItem, {
                            id: "automod-rules-loading",
                            label: I.Z.Messages.LOADING
                        })
                    });
                b || (X = (0, r.jsxs)(r.Fragment, {
                    children: [R && (0, r.jsx)(u.MenuItem, {
                        id: "add-first-rule",
                        label: I.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_CREATE,
                        action: B,
                        disabled: l
                    }), P.map((function(e) {
                        var t = (0, h.V9)(k).reduce((function(t, n) {
                            var r = e.actions.find((function(e) {
                                var t = e.type;
                                return n === t
                            }));
                            if (null == r) return t;
                            var o = (0, S.c)(n, r);
                            return t += ", ".concat(null == o ? void 0 : o.headerText)
                        }), "");
                        return (0, r.jsx)(u.MenuRadioItem, {
                            id: e.id,
                            label: e.name,
                            subtext: (0, r.jsx)(u.Text, {
                                color: "text-muted",
                                className: T().actionTextHeader,
                                variant: "text-xs/normal",
                                children: t.slice(2)
                            }),
                            group: "automod-rule-selection",
                            checked: !1,
                            disabled: l,
                            action: function() {
                                return H(e)
                            }
                        }, e.id)
                    })), D && (0,
                        r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(u.MenuSeparator, {}), (0, r.jsx)(u.MenuItem, {
                            id: "add-another-rule",
                            label: I.Z.Messages.GUILD_AUTOMOD_ADD_NEW_RULE,
                            action: B,
                            disabled: l
                        })]
                    })]
                }));
                return (0, r.jsx)(u.MenuItem, {
                    id: "guild-automod-add-selection",
                    label: I.Z.Messages.GUILD_AUTOMOD_ADD_SELECTION.format({
                        keywordCount: K
                    }),
                    onFocus: function() {
                        if (!d) {
                            p(!0);
                            y()
                        }
                    },
                    children: X
                })
            }
            var K = n(274903),
                B = n(294184),
                H = n.n(B),
                X = n(202351),
                V = n(22990),
                Y = n(897436),
                W = n(38602),
                q = n(163082),
                z = n(330768),
                J = n(225386),
                $ = n(968449),
                Q = n(682776),
                ee = n(473903),
                te = n(856450),
                ne = n(838970),
                re = n(609998),
                oe = n(406493),
                ie = n(775173),
                ue = n(930948),
                ae = n(38004),
                le = n(636795),
                ce = n(97011),
                se = n(833589),
                fe = n(254807),
                de = n(213424),
                pe = n(203600),
                Oe = n(956916),
                be = n.n(Oe);

            function ye(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function ge(e, t) {
                var n, i, a, l, c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E.O.NORMAL,
                    s = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                    f = o.useContext(u.AccessibilityPreferencesContext).reducedMotion,
                    d = (0, J.$R)(t),
                    p = (0, X.e7)([Q.Z], (function() {
                        return (t.isPrivate() || Q.Z.can(A.Plq.ADD_REACTIONS, t)) && d
                    }), [t, d]),
                    O = (0, V.MZ)(t.getGuildId()),
                    b = (0, X.e7)([se.Z], (function() {
                        return se.Z.remainingBurstCurrency
                    })),
                    y = (0, Y.Xx)({
                        autoTrackExposure: !1
                    }),
                    g = y.viewAndUseEnabled,
                    v = c === E.O.BURST,
                    h = v && b < 1,
                    m = ee.default.getCurrentUser(),
                    _ = (0, le.I5)(m);
                if (!$.nc.getSetting() || !p || e.type === A.uaV.GUILD_INVITE_REMINDER) return null;
                var S = O.filter((function(e) {
                    return !ae.ZP.isEmojiFilteredOrLocked({
                        emoji: e,
                        channel: t,
                        intention: de.Hz.REACTION,
                        canViewAndUsePackEmoji: g
                    })
                })).slice(0, 12).map((function(o, c) {
                    return (0, r.jsx)(u.MenuItem, {
                        color: v ? "premium-gradient" : "default",
                        id: null !== (a = null !== (i = null !== (n = o.id) && void 0 !== n ? n : o.optionallyDiverseSequence) && void 0 !== i ? i : o.name) && void 0 !== a ? a : ":".concat(o.name, ":"),
                        label: null == o.id ? o.name : ":".concat(o.name, ":"),
                        disabled: h,
                        imageUrl: function(e) {
                            var t = e.isFocused;
                            return null != o.id ? ie.ZP.getEmojiURL({
                                id: o.id,
                                animated: o.animated && (!f.enabled || t),
                                size: 18
                            }) : ae.ZP.getURL(null !== (l = o.optionallyDiverseSequence) && void 0 !== l ? l : "")
                        },
                        action: function() {
                            (0, q.rU)(t.id, e.id, (0, z.g1)(o), void 0, {
                                burst: v
                            })
                        },
                        dontCloseOnActionIfHoldingShiftKey: !0
                    }, c)
                }));
                return (0, r.jsx)(u.MenuItem, {
                    id: "add-reaction-".concat(c),
                    icon: v && !_ ? oe.Z : void 0,
                    label: v ? _ || b > 0 ? I.Z.Messages.ADD_BURST_REACTION : I.Z.Messages.GET_SUPER_REACTIONS : I.Z.Messages.ADD_REACTION,
                    action: function() {
                        if (h) {
                            if (_) {
                                (0, fe.openOutOfBurstsModal)();
                                return
                            }(0, W.openBurstReactionsUpsellModal)({
                                analytics: {
                                    type: pe.cd.BURST_REACTION_UPSELL,
                                    page: null != t.getGuildId() ? A.ZY5.GUILD_CHANNEL : A.ZY5.DM_CHANNEL,
                                    section: (0, z.s4)(t),
                                    object: A.qAy.REACTION_RIGHT_CLICK_MENU_UPSELL
                                }
                            })
                        } else if (!v || s) {
                            (0, ce.r5)(v);
                            ue.S.dispatchKeyed(A.LPv.TOGGLE_REACTION_POPOUT, e.id, {
                                emojiPicker: !v,
                                emojiBurstPicker: v
                            })
                        } else {
                            (0, ce.r5)(!0);
                            ue.S.dispatchKeyed(A.LPv.TOGGLE_REACTION_POPOUT, e.id, {
                                emojiPicker: !0,
                                emojiBurstPicker: !1
                            })
                        }
                    },
                    color: v ? "premium-gradient" : "default",
                    subMenuClassName: H()(ye({}, be().isBurstReactionPicker, v)),
                    children: v && b < 1 ? null : (0, r.jsxs)(r.Fragment, {
                        children: [v ? (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(u.MenuItem, {
                                id: "add-burst-reaction-count",
                                navigable: !1,
                                render: function() {
                                    return (0, r.jsxs)("div", {
                                        className: be().burstCount,
                                        children: [(0, r.jsx)(ne.Z, {
                                            width: 16,
                                            height: 16,
                                            className: be().burstIcon
                                        }), (0, r.jsx)(u.Heading, {
                                            variant: "heading-sm/bold",
                                            color: "text-normal",
                                            children: I.Z.Messages.SUPER_REACTIONS_LEFT_WITH_PLURAL.format({
                                                count: b
                                            })
                                        })]
                                    })
                                }
                            }), (0, r.jsx)(u.MenuSeparator, {})]
                        }) : null, S, (0, r.jsx)(u.MenuSeparator, {}), (0, r.jsx)(u.MenuItem, {
                            color: v ? "premium-gradient" : "default",
                            id: "other-reactions",
                            label: I.Z.Messages.VIEW_MORE,
                            icon: v ? re.Z : te.Z,
                            disabled: h,
                            action: function() {
                                if (!v || s) {
                                    (0, ce.r5)(v);
                                    ue.S.dispatchKeyed(A.LPv.TOGGLE_REACTION_POPOUT, e.id, {
                                        emojiPicker: !v,
                                        emojiBurstPicker: v
                                    })
                                } else {
                                    (0, ce.r5)(!0);
                                    ue.S.dispatchKeyed(A.LPv.TOGGLE_REACTION_POPOUT, e.id, {
                                        emojiPicker: !0,
                                        emojiBurstPicker: !1
                                    })
                                }
                            }
                        })]
                    })
                })
            }
            var Ee = n(9506),
                ve = n(272112);
            var he = n(979498),
                me = n(157225),
                _e = n(691797);
            var Se = n(443),
                Me = n(720419),
                je = n(664625),
                Ae = n(472034),
                we = n(635012);
            var Ie = n(734777),
                Pe = n(880994),
                Te = n(75197),
                Re = n(399693),
                Ne = n.n(Re);

            function De(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Ce(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        De(e, t, n[t])
                    }))
                }
                return e
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
            var Ze = ["slight_smile", "frowning", "smile", "stuck_out_tongue", "wink"];

            function Ue(e) {
                var t, n = e.emoji,
                    o = e.isFocused,
                    i = n.animated,
                    a = n.src,
                    l = n.surrogates;
                null == a && null != n.id ? a = ie.ZP.getEmojiURL({
                    id: n.id,
                    animated: !!i,
                    size: 20
                }) : null == a && (a = ae.ZP.getURL(l));
                return (0, r.jsx)(u.Tooltip, {
                    text: n.allNamesString,
                    hideOnClick: !0,
                    spacing: 16,
                    forceOpen: o,
                    children: function(e) {
                        return (0, r.jsx)("div", Le(Ce({
                            "aria-label": I.Z.Messages.ADD_REACTION_NAMED.format({
                                emojiName: n.name
                            }),
                            className: H()(Ne().button, De({}, Ne().focused, o))
                        }, e), {
                            children: null == a || "" === a.trim() ? (0, r.jsx)("span", Le(Ce({
                                className: H()("emoji", "emoji-text", Ne().icon)
                            }, e), {
                                children: l
                            })) : (0, r.jsx)("img", {
                                className: Ne().icon,
                                src: a,
                                alt: ""
                            })
                        }))
                    }
                }, null !== (t = n.id) && void 0 !== t ? t : n.name)
            }

            function xe(e, t) {
                var n = (0,
                        V.MZ)(t.guild_id),
                    o = (0, Y.Xx)({
                        autoTrackExposure: !1
                    }).viewAndUseEnabled,
                    i = n.filter((function(e) {
                        var n;
                        return !(e.useSpriteSheet && Ze.indexOf(null !== (n = e.uniqueName) && void 0 !== n ? n : "") >= 0) && !ae.ZP.isEmojiPremiumLocked({
                            emoji: e,
                            channel: t,
                            intention: de.Hz.REACTION,
                            canViewAndUsePackEmoji: o
                        })
                    }));
                i.length > 4 && (i.length = 4);
                var a, l = $.nc.useSetting(),
                    c = (0, J.$R)(t),
                    s = (0, X.e7)([Q.Z], (function() {
                        return l && c && (t.isPrivate() || Q.Z.can(A.Plq.ADD_REACTIONS, t))
                    }), [t, c, l]);
                return s && i.length > 0 ? (0, r.jsx)(u.MenuGroup, {
                    className: Ne().wrapper,
                    children: i.map((function(n, o) {
                        return (0, r.jsx)(u.MenuItem, {
                            id: "quickreact-".concat(null !== (a = n.id) && void 0 !== a ? a : o),
                            render: function(e) {
                                var t = e.isFocused;
                                return (0, r.jsx)(Ue, {
                                    emoji: n,
                                    isFocused: t
                                })
                            },
                            action: function() {
                                return function(n) {
                                    (0, q.rU)(t.id, e.id, (0, z.g1)(n), void 0)
                                }(n)
                            },
                            dontCloseOnActionIfHoldingShiftKey: !0
                        }, o)
                    }))
                }) : null
            }
            var Ge = n(264542);

            function ke(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function Fe(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            ke(i, r, o, u, a, "next", e)
                        }

                        function a(e) {
                            ke(i, r, o, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function Ke(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Be(e, t) {
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
            var He = function(e, t) {
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

            function Xe(e) {
                return null == e.reactions || 0 === e.reactions.length ? null : (0, r.jsx)(u.MenuItem, {
                    id: "reactions",
                    label: I.Z.Messages.VIEW_REACTIONS,
                    icon: Ge.Z,
                    action: function() {
                        return (0, u.openModalLazy)(Fe((function() {
                            var t, o;
                            return He(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, Promise.resolve().then(n.bind(n, 275865))];
                                    case 1:
                                        t = i.sent(), o = t.default;
                                        return [2, function(t) {
                                            return (0, r.jsx)(o, Be(function(e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var n = null != arguments[t] ? arguments[t] : {},
                                                        r = Object.keys(n);
                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                    }))));
                                                    r.forEach((function(t) {
                                                        Ke(e, t, n[t])
                                                    }))
                                                }
                                                return e
                                            }({}, t), {
                                                message: e
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }
                })
            }
            var Ve = n(502575),
                Ye = n(105783);

            function We(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function qe(e) {
                return function(e) {
                    if (Array.isArray(e)) return We(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return We(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return We(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ze(e, t) {
                var n, i, a, l = o.useContext(u.AccessibilityPreferencesContext).reducedMotion,
                    c = (0, J.$R)(t),
                    s = (0, X.e7)([Q.Z], (function() {
                        return Q.Z.can(A.Plq.MANAGE_MESSAGES, t) && c
                    }), [t, c]),
                    f = e.reactions.reduce((function(e, t) {
                        return null != e.find((function(e) {
                            return null != e.id && e.id === t.emoji.id || e.name === t.emoji.name
                        })) ? e : qe(e).concat([t.emoji])
                    }), []);
                return s && null != e.reactions && 0 !== e.reactions.length ? (0, r.jsx)(u.MenuItem, {
                    id: "remove-emoji-reactions",
                    label: I.Z.Messages.REMOVE_EMOJI_REACTIONS,
                    color: "danger",
                    children: f.map((function(o) {
                        return (0, r.jsx)(u.MenuItem, {
                            id: "remove-emoji-reactions-".concat(null !== (n = o.name) && void 0 !== n ? n : o.id),
                            label: null == o.id ? o.name : ":".concat(o.name, ":"),
                            action: function(n) {
                                return function(n, r) {
                                    n.shiftKey ? (0, q.$E)(t.id, e.id, r) : Ye.Z.show({
                                        title: I.Z.Messages.REMOVE_EMOJI_REACTIONS_CONFIRM_TITLE,
                                        body: I.Z.Messages.REMOVE_EMOJI_REACTIONS_CONFIRM_BODY,
                                        confirmText: I.Z.Messages.YES_TEXT,
                                        cancelText: I.Z.Messages.NO_TEXT,
                                        onConfirm: function() {
                                            (0, q.$E)(t.id, e.id, r)
                                        }
                                    })
                                }(n, o)
                            },
                            imageUrl: function(e) {
                                var t = e.isFocused;
                                return null != o.id ? ie.ZP.getEmojiURL({
                                    id: o.id,
                                    animated: o.animated && (!l.enabled || t),
                                    size: 18
                                }) : ae.ZP.getURL(null !== (i = o.name) && void 0 !== i ? i : "")
                            },
                            dontCloseOnActionIfHoldingShiftKey: !0
                        }, null !== (a = o.name) && void 0 !== a ? a : o.id)
                    }))
                }) : null
            }
            var Je = n(209752),
                $e = n(538101);
            var Qe = n(354368),
                et = n(528334),
                tt = n(254082);
            var nt = n(530607),
                rt = n(92517);
            var ot = n(307648),
                it = n(813216),
                ut = n(633878);

            function at(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function lt(e, t) {
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

            function ct(e, t) {
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

            function st(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    u = e.color,
                    a = void 0 === u ? "currentColor" : u,
                    l = e.foreground,
                    c = ct(e, ["width", "height", "color", "foreground"]);
                return (0,
                    r.jsx)("svg", lt(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            at(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, ut.Z)(c)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: l,
                        fill: a,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M2.99805 4.8C2.99805 3.8055 3.80445 3 4.79805 3H19.198C20.1925 3 20.998 3.8055 20.998 4.8V15.6C20.998 16.5936 20.1925 17.4 19.198 17.4H11.098L7.49805 21V17.4H4.79805C3.80445 17.4 2.99805 16.5936 2.99805 15.6V4.8ZM11.5737 5.16264C11.7336 5.00375 11.9739 4.95652 12.183 5.04208C12.3921 5.12708 12.5279 5.33098 12.5279 5.55487V14.444C12.5279 14.669 12.3921 14.8718 12.183 14.9579C11.9739 15.0435 11.7336 14.9963 11.5737 14.8374L9.1739 12.2217H7.4969C7.18945 12.2217 6.9379 11.9717 6.9379 11.6662V8.33273C6.9379 8.02772 7.18945 7.77716 7.4969 7.77716H9.1739L11.5737 5.16264ZM13.6459 7.22159V6.11044C15.8037 6.11044 17.5589 7.85549 17.5589 9.99944C17.5589 12.1445 15.8037 13.8884 13.6459 13.8884V12.7773C15.1871 12.7773 16.4409 11.5312 16.4409 9.99944C16.4409 8.46829 15.1871 7.22159 13.6459 7.22159ZM15.3229 9.99944C15.3229 9.08108 14.5705 8.33273 13.6459 8.33273V9.44387C13.9539 9.44387 14.2049 9.69332 14.2049 9.99944C14.2049 10.3056 13.9539 10.555 13.6459 10.555V11.6662C14.5705 11.6662 15.3229 10.9189 15.3229 9.99944Z"
                    })
                }))
            }
            var ft = n(890592);
            var dt = n(392354),
                pt = n(725060);

            function Ot(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function bt(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            Ot(i, r, o, u, a, "next", e)
                        }

                        function a(e) {
                            Ot(i, r, o, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function yt(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var gt = function(e, t) {
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

            function Et(e, t) {
                if (null == t || !(0, dt.KP)({
                        type: dt.lJ.Attachment,
                        media: t
                    }, (0, dt.HH)(e))) return null;
                return (0, r.jsx)(u.MenuItem, {
                    id: "report-image-false-positive",
                    label: I.Z.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE,
                    action: function() {
                        (0, u.openModalLazy)(bt((function() {
                            var o, i;
                            return gt(this, (function(u) {
                                switch (u.label) {
                                    case 0:
                                        return [4, n(569865)];
                                    case 1:
                                        o = u.sent(), i = o.default;
                                        return [2, function(n) {
                                            return (0, r.jsx)(i, function(e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var n = null != arguments[t] ? arguments[t] : {},
                                                        r = Object.keys(n);
                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                    }))));
                                                    r.forEach((function(t) {
                                                        yt(e, t, n[t])
                                                    }))
                                                }
                                                return e
                                            }({
                                                channelId: e.channel_id,
                                                messageId: e.id,
                                                attachmentId: t.id
                                            }, n))
                                        }]
                                }
                            }))
                        })))
                    },
                    icon: pt.Z
                }, "report-image-false-positive")
            }
            var vt = n(749106);

            function ht(e) {
                var t, n, r, o, u, l, c = e.channel,
                    f = e.message,
                    p = e.target,
                    O = e.attachment,
                    b = e.shouldHideMediaOptions,
                    y = e.onSelect,
                    g = e.onHeightUpdate,
                    E = (0, d.Z)(s.t),
                    v = p,
                    h = p.getAttribute("data-type"),
                    m = p.getAttribute("data-id"),
                    _ = p.getAttribute("data-name");
                if (null != O) r = n = o = O.url;
                else
                    for (;
                        (0, i.k)(v);) {
                        (0, i.k)(v, HTMLImageElement) && null != v.src && (r = v.src);
                        if ((0, i.k)(v, HTMLAnchorElement) && null != v.href) {
                            n = v.href;
                            u = v.textContent;
                            if (null == r && "img" === v.getAttribute("data-role")) {
                                r = n;
                                v.hasAttribute("data-safe-src") && "" !== v.getAttribute("data-safe-src") && (o = v.getAttribute("data-safe-src"))
                            }
                        }
                        v = v.parentNode
                    }
                return mt({
                    message: f,
                    channel: c,
                    attachment: O,
                    textSelection: null !== (l = null === (t = document.getSelection()) || void 0 === t ? void 0 : t.toString()) && void 0 !== l ? l : "",
                    favoriteableType: h,
                    favoriteableId: m,
                    favoriteableName: _,
                    itemHref: n,
                    itemSrc: r,
                    itemSafeSrc: o,
                    itemTextContent: u,
                    canReport: E === vt.NZ.TREATMENT_1,
                    onHeightUpdate: g,
                    onSelect: y,
                    onClose: a.Zy,
                    navId: "message",
                    ariaLabel: I.Z.Messages.MESSAGE_ACTIONS_MENU_LABEL,
                    shouldHideMediaOptions: b
                })
            }

            function mt(e) {
                var t = e.message,
                    n = e.channel,
                    o = e.attachment,
                    i = e.textSelection,
                    a = e.favoriteableType,
                    s = e.favoriteableId,
                    d = e.favoriteableName,
                    v = e.itemHref,
                    h = e.itemSrc,
                    m = e.itemSafeSrc,
                    _ = e.itemTextContent,
                    S = e.canReport,
                    M = e.onHeightUpdate,
                    j = e.onSelect,
                    w = e.onClose,
                    P = e.navId,
                    T = e.ariaLabel,
                    R = e.shouldHideMediaOptions,
                    N = void 0 !== R && R,
                    D = (0, l.Qd)(n.getGuildId()),
                    C = D.enabled,
                    L = D.hasTwoButtonEntryPoint,
                    Z = (0, p.Z)(i),
                    U = (0,
                        y.Z)(i),
                    x = xe(t, n),
                    G = ge(t, n),
                    k = ge(t, n, E.O.BURST, L),
                    B = function(e, t) {
                        var n = (0, X.e7)([je.default], (function() {
                                return je.default.getId()
                            })),
                            o = (0, J.$R)(t),
                            i = (0, J.Gu)(t);
                        return (0, we.Z)(e, n) && o && !i ? (0, r.jsx)(u.MenuItem, {
                            id: "edit",
                            label: I.Z.Messages.EDIT_MESSAGE,
                            action: function() {
                                return Me.Z.startEditMessage(t.id, e.id, e.content)
                            },
                            icon: Ae.Z
                        }) : null
                    }(t, n),
                    H = (0, Te.Z)(t, n),
                    V = (0, Ie.Z)({
                        type: a,
                        id: s,
                        name: d
                    }),
                    Y = function(e, t) {
                        return e.state !== A.yb.SEND_FAILED ? null : (0, r.jsx)(u.MenuItem, {
                            id: "resend",
                            label: I.Z.Messages.RESEND_MESSAGE,
                            action: function() {
                                return (0, rt.Z)(t, e, void 0, nt.Z.getOptions(e.id))
                            }
                        })
                    }(t, n),
                    W = (0, Pe.Z)(t, n),
                    z = Xe(t),
                    $ = function(e, t) {
                        var n = t.getGuildId();
                        return null == n || e.type !== A.uaV.USER_JOIN && e.type !== A.uaV.GUILD_INVITE_REMINDER || !Q.Z.canWithPartialContext(A.Plq.MANAGE_GUILD, {
                            guildId: n
                        }) ? null : (0, r.jsx)(u.MenuItem, {
                            id: "configure",
                            label: I.Z.Messages.CONFIGURE,
                            icon: Ee.Z,
                            action: function() {
                                return (0, ve.zW)(t)
                            }
                        })
                    }(t, n),
                    ee = (0, he.Z)(t, n),
                    te = function(e, t) {
                        var n = (0, J.$R)(t);
                        return (0,
                            X.e7)([Q.Z], (function() {
                            return Q.Z.can(A.Plq.MANAGE_MESSAGES, t) && n
                        }), [t, n]) && null != e.reactions && 0 !== e.reactions.length ? (0, r.jsx)(u.MenuItem, {
                            id: "remove-reactions",
                            label: I.Z.Messages.REMOVE_ALL_REACTIONS,
                            action: function(n) {
                                n.shiftKey ? (0, q.wX)(t.id, e.id) : Ye.Z.show({
                                    title: I.Z.Messages.REMOVE_ALL_REACTIONS_CONFIRM_TITLE,
                                    body: I.Z.Messages.REMOVE_ALL_REACTIONS_CONFIRM_BODY,
                                    confirmText: I.Z.Messages.YES_TEXT,
                                    cancelText: I.Z.Messages.NO_TEXT,
                                    onConfirm: function() {
                                        (0, q.wX)(t.id, e.id)
                                    }
                                })
                            },
                            color: "danger"
                        }) : null
                    }(t, n),
                    ne = ze(t, n),
                    re = (0, Se.Z)(t, n),
                    oe = function(e) {
                        return (0, tt.a4)(e) ? (0, r.jsx)(u.MenuItem, {
                            id: "report",
                            label: I.Z.Messages.REPORT_MESSAGE_MENU_OPTION,
                            action: function() {
                                return (0, Qe.ak)(e)
                            },
                            icon: et.Z,
                            color: "danger"
                        }) : null
                    }(t),
                    ie = function(e, t) {
                        var n = (0, X.e7)([it.Z], (function() {
                            return it.Z.isSpeakingMessage(t.id, e.id)
                        }), [t, e]);
                        return "" === e.content ? null : (0, r.jsx)(u.MenuItem, {
                            id: "tts",
                            label: n ? I.Z.Messages.STOP_SPEAKING_MESSAGE : I.Z.Messages.SPEAK_MESSAGE,
                            icon: st,
                            action: function() {
                                return n ? (0,
                                    ot.NB)() : (0, ot.LA)(t, e)
                            }
                        })
                    }(t, n),
                    ue = (0, b.Z)(null != v ? v : h, _, t, {
                        shouldHideMediaOptions: N
                    }),
                    ae = (0, O.Z)(m, t, {
                        shouldHideMediaOptions: N
                    }),
                    le = Et(t, o),
                    ce = (0, f.Z)({
                        id: t.id,
                        label: I.Z.Messages.COPY_ID_MESSAGE,
                        shiftId: "".concat(t.channel_id, "-").concat(t.id)
                    }),
                    se = function(e, t) {
                        return (0, Je.U)(t, e) ? (0, r.jsx)(u.MenuItem, {
                            id: "reply",
                            label: I.Z.Messages.MESSAGE_ACTION_REPLY,
                            icon: $e.Z,
                            action: function(n) {
                                (0, ve.HH)(t, e, n)
                            }
                        }) : null
                    }(t, n),
                    fe = function(e, t) {
                        return (0, J.NE)(t, e) ? (0, r.jsx)(u.MenuItem, {
                            id: "thread",
                            label: I.Z.Messages.CREATE_THREAD,
                            icon: ft.Z,
                            action: function() {
                                (0, ve.gK)(t, e)
                            }
                        }) : null
                    }(t, n),
                    de = (0, K.Z)(t, n, {
                        hoist: !0
                    }),
                    pe = F(i, n.getGuildId()),
                    Oe = (0, Ve.Z)(t),
                    be = function(e) {
                        return _e.wS ? (0, r.jsx)(u.MenuItem, {
                            id: "copy-text",
                            label: I.Z.Messages.COPY_TEXT,
                            icon: me.Z,
                            action: function() {
                                (0, _e.JG)(e.content)
                            }
                        }) : null
                    }(t),
                    ye = (0, g.Z)({
                        commandType: c.yU.MESSAGE,
                        commandTargetId: t.id,
                        channel: n,
                        guildId: void 0,
                        location: "MessageMenu",
                        onShow: M
                    });
                return (0, r.jsxs)(u.Menu, {
                    navId: P,
                    onClose: w,
                    "aria-label": T,
                    onSelect: j,
                    children: [(0,
                        r.jsx)(u.MenuGroup, {
                        children: Z
                    }), (0, r.jsx)(u.MenuGroup, {
                        children: U
                    }), (0, r.jsxs)(u.MenuGroup, {
                        children: ["" === i ? x : null, G, C && k, z, B, H, V, se, fe, be, ye, Y, W, Oe, $, ee, ie, de, ne, te, re, S && oe]
                    }), null != pe && (0, r.jsx)(u.MenuGroup, {
                        children: pe
                    }), (0, r.jsxs)(u.MenuGroup, {
                        children: [ae, le]
                    }), (0, r.jsx)(u.MenuGroup, {
                        children: ue
                    }), (0, r.jsx)(u.MenuGroup, {
                        children: ce
                    })]
                })
            }
        },
        274903: (e, t, n) => {
            n.d(t, {
                Z: () => _
            });
            var r = n(785893),
                o = (n(667294), n(349289)),
                i = n(202351),
                u = n(304548),
                a = n(721376),
                l = n(123398),
                c = n(910149),
                s = n(940060),
                f = n(773411),
                d = n(682776),
                p = n(2590),
                O = s.Z.combine(p.Plq.VIEW_CHANNEL, p.Plq.MANAGE_MESSAGES, p.Plq.READ_MESSAGE_HISTORY);
            var b = n(473708);

            function y(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function g(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            y(i, r, o, u, a, "next", e)
                        }

                        function a(e) {
                            y(i, r, o, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function E(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        E(e, t, n[t])
                    }))
                }
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
            var m = function(e, t) {
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

            function _(e, t, s) {
                var y = t.getGuildId(),
                    E = (0, i.e7)([l.ZP], (function() {
                        return null !== y && l.ZP.getIsItemFeatured({
                            guildId: y,
                            entity: e,
                            entityType: o.w.MESSAGE
                        })
                    }), [e, y]),
                    _ = (0, a.Z)(t, s);
                if (e.isFirstMessageInForumPost(t)) return _;
                var S = function(e, t) {
                    var n = e.getGuildId();
                    return !!(null !== n && (0, f.YM)(n) && p.TPd.GUILD_FEED_FEATURABLE_MESSAGES.has(e.type) && (0, c.fx)(e) && (0, c.XY)(t) && d.Z.can(O, e))
                }(t, e);
                return S ? E ? (0, r.jsx)(u.MenuItem, {
                    id: "guild-feed-unfeature",
                    label: b.Z.Messages.GUILD_FEED_UNFEATURE_MESSAGE,
                    action: function() {
                        return null == y ? null : (0, u.openModalLazy)(g((function() {
                            var t;
                            return m(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, Promise.all([n.e(40532), n.e(46738), n.e(85293)]).then(n.bind(n, 846738))];
                                    case 1:
                                        t = i.sent().UnfeatureItemConfirmationModal;
                                        return [2, function(n) {
                                            return (0, r.jsx)(t, h(v({}, n), {
                                                featureableItem: {
                                                    guildId: y,
                                                    entity: e,
                                                    entityType: o.w.MESSAGE
                                                },
                                                header: b.Z.Messages.GUILD_FEED_UNFEATURED_MESSAGE_MODAL_HEADER,
                                                body: b.Z.Messages.GUILD_FEED_UNFEATURED_MESSAGE_MODAL_BODY
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }
                }) : (0, r.jsx)(u.MenuItem, {
                    id: "guild-feed-feature",
                    label: b.Z.Messages.GUILD_FEED_FEATURE_MESSAGE,
                    children: (0, c.DE)().map((function(o) {
                        var i = o.value,
                            a = o.timePeriod;
                        return (0, r.jsx)(u.MenuItem, {
                            id: "".concat(i),
                            label: (0, c.Vm)(a),
                            action: function() {
                                return null == y ? null : (0, u.openModalLazy)(g((function() {
                                    var o;
                                    return m(this, (function(u) {
                                        switch (u.label) {
                                            case 0:
                                                return [4, Promise.all([n.e(40532), n.e(46738), n.e(85293)]).then(n.bind(n, 846738))];
                                            case 1:
                                                o = u.sent().FeatureMessageConfirmationModal;
                                                return [2, function(n) {
                                                    return (0, r.jsx)(o, h(v({}, n), {
                                                        message: e,
                                                        channel: t,
                                                        guildId: y,
                                                        expiresSeconds: i,
                                                        timePeriod: a,
                                                        options: s
                                                    }))
                                                }]
                                        }
                                    }))
                                })))
                            }
                        }, i)
                    }))
                }) : null
            }
        },
        734777: (e, t, n) => {
            n.d(t, {
                Z: () => M
            });
            var r = n(785893),
                o = n(667294),
                i = n(202351),
                u = n(304548),
                a = n(91500),
                l = n(579581),
                c = n(22990),
                s = n(245353),
                f = n(135855),
                d = n(879913),
                p = n(840598),
                O = n(798826),
                b = n(217544),
                y = n(78551),
                g = n(513586),
                E = n(2590),
                v = n(473708);

            function h(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        h(e, t, n[t])
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

            function S(e) {
                return f.ZP.getByName(e.replace(/(^:|:$)/g, ""))
            }

            function M(e) {
                var t = e.type,
                    n = e.id,
                    h = e.name,
                    M = e.isInExpressionPicker,
                    j = void 0 !== M && M,
                    A = (0, l.O)().location,
                    w = o.useMemo((function() {
                        return _(m({}, A), {
                            section: j ? E.jXE.EXPRESSION_PICKER : E.jXE.CONTEXT_MENU
                        })
                    }), [A, j]),
                    I = (0, b.Go)(),
                    P = (0, i.e7)([y.Z], (function() {
                        return t === d.S.STICKER && null != n ? y.Z.getStickerById(n) : null
                    })),
                    T = null != P && I.includes(P.id),
                    R = (0, i.e7)([s.Z], (function() {
                        if (t === d.S.EMOJI) {
                            if (null != n) return s.Z.getDisambiguatedEmojiContext().getById(n);
                            if (null != h) {
                                var e;
                                return null !== (e = S(h)) && void 0 !== e ? e : S(f.ZP.convertSurrogateToName(h))
                            }
                        }
                    })),
                    N = (0, c.C1)(null, R);
                return null != P && t === d.S.STICKER ? (0, g.J8)(P) && !(0, g.V9)(P) ? null : T ? (0, r.jsx)(u.MenuItem, {
                    id: "unfavorite",
                    action: function() {
                        return (0, p.hW)(P.id)
                    },
                    label: v.Z.Messages.UNFAVORITE_ITEM
                }) : (0, r.jsx)(u.MenuItem, {
                    id: "favorite",
                    action: function() {
                        (0, O.cQ)({
                            sticker: P,
                            location: _(m({}, w), {
                                object: E.qAy.STICKER
                            })
                        });
                        (0, p.SA)(null == P ? void 0 : P.id)
                    },
                    label: v.Z.Messages.FAVORITE_ITEM
                }) : null != R && t === d.S.EMOJI ? N ? (0, r.jsx)(u.MenuItem, {
                    id: "unfavorite",
                    action: function() {
                        return (0, a.Xe)(R)
                    },
                    label: v.Z.Messages.UNFAVORITE_ITEM
                }) : (0, r.jsx)(u.MenuItem, {
                    id: "favorite",
                    action: function() {
                        (0, c.J1)({
                            emoji: R,
                            location: _(m({}, w), {
                                object: E.qAy.EMOJI
                            })
                        });
                        (0, a.$K)(R)
                    },
                    label: v.Z.Messages.FAVORITE_ITEM
                }) : void 0
            }
        },
        75197: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var r = n(785893),
                o = (n(667294), n(202351)),
                i = n(304548),
                u = n(933818),
                a = n(913928),
                l = n(682776),
                c = n(659773),
                s = n(618738),
                f = n(2590),
                d = n(473708);

            function p(e, t) {
                var n = (0, o.e7)([l.Z], (function() {
                    return l.Z.can(f.Plq.MANAGE_MESSAGES, t)
                }), [t]);
                return e.state === f.yb.SEND_FAILED ? null : (0, s.Z)(e, t, n) ? !1 === e.pinned ? (0, r.jsx)(i.MenuItem, {
                    id: "pin",
                    action: function(n) {
                        n.shiftKey ? u.Z.pinMessage(t, e.id) : a.Z.confirmPin(t, e)
                    },
                    label: d.Z.Messages.PIN_MESSAGE,
                    icon: c.Z
                }) : (0, r.jsx)(i.MenuItem, {
                    id: "unpin",
                    action: function(n) {
                        n.shiftKey ? u.Z.unpinMessage(t, e.id) : a.Z.confirmUnpin(t, e)
                    },
                    label: d.Z.Messages.UNPIN_MESSAGE,
                    icon: c.Z
                }) : null
            }
        },
        502575: (e, t, n) => {
            n.d(t, {
                Z: () => O,
                W: () => b
            });
            var r = n(785893),
                o = (n(667294), n(730381)),
                i = n.n(o),
                u = n(202351),
                a = n(304548),
                l = n(931893),
                c = n(229633),
                s = n(489981),
                f = n(343318),
                d = n(431089),
                p = n(473708);

            function O(e) {
                var t = c.Z.useExperiment({
                        location: "a65531_1"
                    }, {
                        autoTrackExposure: !1
                    }).showReminders,
                    n = (0, u.e7)([s.Z], (function() {
                        return null != s.Z.getMessageReminders().find((function(t) {
                            return t.messageId === e.id
                        }))
                    })),
                    o = b(e, (function(t) {
                        return (0, l.BW)(e, i()().add(t, "millisecond").toDate())
                    }));
                return t ? (0, r.jsx)(a.MenuItem, {
                    id: "mark-todo",
                    label: n ? p.Z.Messages.MESSAGE_REMINDERS_MARK_AS_DONE : p.Z.Messages.MESSAGE_REMINDERS_MARK_AS_TODO,
                    icon: n ? d.Z : void 0,
                    action: function() {
                        return n ? (0, l.Kp)(e.id) : (0, l.BW)(e)
                    },
                    children: n ? null : o
                }) : null
            }

            function b(e, t) {
                return f.BS.map((function(e) {
                    var n = e.duration,
                        o = e.getLabel;
                    return (0, r.jsx)(a.MenuItem, {
                        id: "mark-todo-".concat(n),
                        label: o(),
                        action: function() {
                            return t(n)
                        }
                    }, n)
                }))
            }
        },
        893516: (e, t, n) => {
            n.d(t, {
                Z: () => P
            });
            var r = n(785893),
                o = (n(667294), n(304548)),
                i = n(105783),
                u = n(440922),
                a = n(356845),
                l = n(652591),
                c = n(120415),
                s = n(22176),
                f = n(310126),
                d = n(220461),
                p = n(2590),
                O = n(473708);

            function b(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function y(e) {
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

            function g(e, t, n) {
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
                        g(e, t, n[t])
                    }))
                }
                return e
            }
            var v = function(e, t) {
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
                h = "https://media.discordapp.net",
                m = /^.*\.discordapp\.net$/,
                _ = "https://cdn.discordapp.com",
                S = "".concat(h, "/stickers"),
                M = new Set(["jpg", "jpeg", "png", "webp", "gif", "tiff", "bmp"]),
                j = new Set(["jpg", "jpeg", "png"]),
                A = function(e) {
                    var t;
                    return null === (t = new URL(e).pathname.split(".").pop()) || void 0 === t ? void 0 : t.toLowerCase()
                };

            function w(e) {
                var t = A(e);
                return null != t && j.has(t)
            }

            function I(e, t) {
                i.Z.show({
                    title: O.Z.Messages.ERROR,
                    body: e
                });
                s.Z.captureException(t)
            }

            function P(e, t, n) {
                var i, s, b;
                if ((0, a.Z)(null == t ? void 0 : t.getChannelId()) || !0 === (null == n ? void 0 : n.shouldHideMediaOptions)) return null;
                if (!c.FB || null == e || !(i = e, s = new URL(i), b = A(i), (m.test(s.hostname) || s.origin === _) && !i.startsWith(S) && !(0, u.zt)(i) && null != b && M.has(b))) return null;
                var g, j = function(e) {
                        var t = new URL(e);
                        if (t.origin === _) return e;
                        if (t.origin === h) return _ + t.pathname;
                        t.searchParams.delete("width");
                        t.searchParams.delete("height");
                        t.searchParams.set("quality", "lossless");
                        return t.toString()
                    }(e),
                    P = (g = y((function() {
                        var e;
                        return v(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    t.trys.push([0, 2, , 3]);
                                    return [4, f.ZP.saveImage(j)];
                                case 1:
                                    t.sent();
                                    l.default.track(p.rMx.CONTEXT_MENU_IMAGE_SAVED, E({}, (0, d.v)()));
                                    return [3, 3];
                                case 2:
                                    e = t.sent();
                                    l.default.track(p.rMx.CONTEXT_MENU_IMAGE_SAVE_FAILED, E({}, (0, d.v)()));
                                    I(O.Z.Messages.ERROR_SAVING_IMAGE, e);
                                    return [3, 3];
                                case 3:
                                    return [2]
                            }
                        }))
                    })), function() {
                        return g.apply(this, arguments)
                    }),
                    T = function() {
                        var e = y((function() {
                            var e;
                            return v(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        t.trys.push([0, 2, , 3]);
                                        return [4, f.ZP.copyImage(j)];
                                    case 1:
                                        t.sent();
                                        l.default.track(p.rMx.CONTEXT_MENU_IMAGE_COPIED, E({}, (0, d.v)()));
                                        return [3, 3];
                                    case 2:
                                        e = t.sent();
                                        I(O.Z.Messages.ERROR_COPYING_IMAGE, e);
                                        l.default.track(p.rMx.CONTEXT_MENU_IMAGE_COPY_FAILED, E({}, (0, d.v)()));
                                        return [3, 3];
                                    case 3:
                                        return [2]
                                }
                            }))
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                return [f.ZP.canCopyImage() && w(e) ? (0, r.jsx)(o.MenuItem, {
                    id: "copy-image",
                    label: O.Z.Messages.COPY_IMAGE_MENU_ITEM,
                    action: T
                }, "copy-image") : null, (0, r.jsx)(o.MenuItem, {
                    id: "save-image",
                    label: O.Z.Messages.SAVE_IMAGE_MENU_ITEM,
                    action: P
                }, "save-image")]
            }
        },
        209752: (e, t, n) => {
            n.d(t, {
                o: () => g,
                U: () => y
            });
            var r = n(141780),
                o = n(202351),
                i = n(872017);
            const u = (0, n(260561).B)({
                kind: "guild",
                id: "2023-07_allow_welcome_message_replies",
                label: "Allow replies to welcome messages",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var a = n(791707),
                l = n(225386),
                c = n(682776),
                s = n(2590),
                f = n(520453);

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function p(e, t) {
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
                    if ("string" == typeof e) return d(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function O(e, t, n) {
                var o;
                o = e.isPrivate() ? !e.isSystemDM() : n.can(f.Pl.SEND_MESSAGES, e) && n.can(f.Pl.READ_MESSAGE_HISTORY, e);
                var i = !(0, a.Z)(t),
                    l = r.V.REPLYABLE.has(t.type),
                    c = u.getCurrentConfig({
                        guildId: e.guild_id,
                        location: "51c7ba_1"
                    }, {
                        autoTrackExposure: t.type === r.u.USER_JOIN
                    }).enabled;
                return o && (c ? l : i)
            }

            function b(e, t, n, r, o) {
                var i = t.hasFlag(s.iLy.EPHEMERAL),
                    u = t.state === s.yb.SENT,
                    a = !e.isArchivedThread() || o;
                return n && u && !i && !r && a
            }

            function y(e, t) {
                var n, r = (0, l.tc)(e),
                    u = p((0, i.AB)(null !== (n = null == e ? void 0 : e.getGuildId()) && void 0 !== n ? n : void 0), 2)[1],
                    a = (0, o.e7)([c.Z], (function() {
                        return null != e && null != t && O(e, t, c.Z)
                    }));
                return null != e && null != t && b(e, t, a, u, r)
            }

            function g(e, t) {
                var n, r = (0, l.kn)(e),
                    o = O(e, t, c.Z),
                    u = p((0, i.s5)(null !== (n = e.getGuildId()) && void 0 !== n ? n : void 0), 2);
                return b(e, t, o, u[1], r)
            }
        },
        307648: (e, t, n) => {
            n.d(t, {
                cP: () => o,
                LA: () => i,
                Bo: () => u,
                NB: () => a,
                Ct: () => l
            });
            var r = n(744564);

            function o(e, t, n, o, i) {
                r.Z.dispatch({
                    type: "SPEAK_TEXT",
                    text: e,
                    interrupt: t,
                    maxLength: n,
                    onStart: o,
                    onEnd: i
                })
            }

            function i(e, t) {
                r.Z.dispatch({
                    type: "SPEAK_MESSAGE",
                    channel: e,
                    message: t
                })
            }

            function u(e, t) {
                r.Z.dispatch({
                    type: "SPEAKING_MESSAGE",
                    channelId: e,
                    messageId: t
                })
            }

            function a() {
                r.Z.dispatch({
                    type: "STOP_SPEAKING"
                })
            }

            function l(e) {
                r.Z.dispatch({
                    type: "SET_TTS_SPEECH_RATE",
                    speechRate: e
                })
            }
        },
        813216: (e, t, n) => {
            n.d(t, {
                Z: () => E
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

            function l(e) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return l(e)
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
                    var n, r = l(e);
                    if (t) {
                        var o = l(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return f(this, n)
                }
            }
            var b = {
                    speechRate: 1,
                    currentMessage: null
                },
                y = b;
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
                    t && d(e, t)
                }(n, e);
                var t = O(n);

                function n() {
                    i(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    y = c({}, b, null != e ? e : null)
                };
                r.isSpeakingMessage = function(e, t) {
                    var n = y.currentMessage;
                    return null !== n && n.channelId === e && n.messageId === t
                };
                r.getUserAgnosticState = function() {
                    return y
                };
                ! function(e, t, n) {
                    t && u(e.prototype, t);
                    n && u(e, n)
                }(n, [{
                    key: "currentMessage",
                    get: function() {
                        return y.currentMessage
                    }
                }, {
                    key: "speechRate",
                    get: function() {
                        return y.speechRate
                    }
                }]);
                return n
            }(r.ZP.DeviceSettingsStore);
            g.displayName = "TTSStore";
            g.persistKey = "TTSStore";
            g.migrations = [];
            const E = new g(o.Z, __OVERLAY__ ? {} : {
                SPEAKING_MESSAGE: function(e) {
                    var t = e.messageId,
                        n = e.channelId;
                    y = s(c({}, y), {
                        currentMessage: {
                            messageId: t,
                            channelId: n
                        }
                    })
                },
                STOP_SPEAKING: function() {
                    y = s(c({}, y), {
                        currentMessage: null
                    })
                },
                SET_TTS_SPEECH_RATE: function(e) {
                    y = s(c({}, y), {
                        speechRate: e.speechRate
                    })
                }
            })
        },
        264542: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                o = (n(667294), n(168075)),
                i = n(646461),
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
            const s = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    d = e.foreground,
                    p = c(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", l(function(e) {
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
                }({}, (0, u.Z)(p)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: f,
                        className: d,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.522 17.523 22 12 22C6.477 22 2 17.522 2 12ZM6.375 12.8713C7.41054 12.8713 8.25 12.0318 8.25 10.9963C8.25 9.96073 7.41053 9.12128 6.375 9.12128C5.33947 9.12128 4.5 9.96073 4.5 10.9963C4.5 12.0318 5.33946 12.8713 6.375 12.8713ZM19.5 10.9963C19.5 12.0318 18.6605 12.8713 17.625 12.8713C16.5895 12.8713 15.75 12.0318 15.75 10.9963C15.75 9.96073 16.5895 9.12128 17.625 9.12128C18.6605 9.12128 19.5 9.96073 19.5 10.9963ZM10.4867 14.825C10.3576 14.3236 9.8465 14.0217 9.34508 14.1508C8.84365 14.2798 8.54179 14.791 8.67085 15.2924C9.0524 16.7748 10.397 17.8712 12 17.8712C13.603 17.8712 14.9476 16.7748 15.3291 15.2924C15.4582 14.791 15.1563 14.2798 14.6549 14.1508C14.1535 14.0217 13.6424 14.3236 13.5133 14.825C13.3398 15.4991 12.7268 15.9962 12 15.9962C11.2732 15.9962 10.6602 15.4991 10.4867 14.825Z"
                    })
                }))
            }), i.O)
        },
        538101: (e, t, n) => {
            n.d(t, {
                Z: () => s
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
            const s = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    u = e.color,
                    a = void 0 === u ? "currentColor" : u,
                    l = e.className,
                    c = e.foreground;
                return (0, r.jsx)("svg", {
                    className: l,
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        d: "M10 8.26667V4L3 11.4667L10 18.9333V14.56C15 14.56 18.5 16.2667 21 20C20 14.6667 17 9.33333 10 8.26667Z",
                        className: c,
                        fill: a
                    })
                })
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    s = void 0 === o ? 24 : o,
                    f = e.color,
                    d = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    O = void 0 === p ? "" : p,
                    b = c(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", l(function(e) {
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
                }({}, (0, u.Z)(b)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M2.293 7.293a1 1 0 0 0 0 1.414l5 5a1 1 0 0 0 1.414-1.414L5.414 9H11a7 7 0 0 1 7 7v4a1 1 0 1 0 2 0v-4a9 9 0 0 0-9-9H5.414l3.293-3.293a1 1 0 0 0-1.414-1.414l-5 5Z",
                        clipRule: "evenodd",
                        className: O
                    })
                }))
            }))
        }
    }
]);