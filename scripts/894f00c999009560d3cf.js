(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["87935"], {
        305861: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ShieldUserIcon: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                o = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...i
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, o.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M3.47 5.18c.27-.4.64-.74 1.1-.96l6.09-3.05a3 3 0 0 1 2.68 0l6.1 3.05A2.83 2.83 0 0 1 21 6.75v3.5a14.17 14.17 0 0 1-8.42 12.5c-.37.16-.79.16-1.16 0A14.18 14.18 0 0 1 3 9.77V6.75c0-.57.17-1.11.47-1.57Zm2.95 10.3A12.18 12.18 0 0 0 12 20.82a12.18 12.18 0 0 0 5.58-5.32A9.49 9.49 0 0 0 12.47 14h-.94c-1.88 0-3.63.55-5.11 1.49ZM12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        533806: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UserIcon: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                o = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...i
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, o.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM11.53 11A9.53 9.53 0 0 0 2 20.53c0 .81.66 1.47 1.47 1.47h.22c.24 0 .44-.17.5-.4.29-1.12.84-2.17 1.32-2.91.14-.21.43-.1.4.15l-.26 2.61c-.02.3.2.55.5.55h11.7a.5.5 0 0 0 .5-.55l-.27-2.6c-.02-.26.27-.37.41-.16.48.74 1.03 1.8 1.32 2.9.06.24.26.41.5.41h.22c.81 0 1.47-.66 1.47-1.47A9.53 9.53 0 0 0 12.47 11h-.94Z",
                        className: r
                    })
                })
            }
        },
        795228: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("884691"),
                a = n("446674"),
                o = n("895026"),
                u = n("36402");
            let r = {};

            function i(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = (0, a.useStateFromStores)([u.default], () => u.default.getRoleMemberCount(e));
                return l.useEffect(() => {
                    if (null == e) return;
                    let n = r[e],
                        l = null != n && t > 0 && Date.now() - n < t;
                    !l && (r[e] = Date.now(), o.fetchMemberCounts(e))
                }, [e, t]), n
            }
        },
        470055: function(e, t, n) {
            "use strict";
            let l, a, o, u, r;
            n.r(t), n.d(t, {
                InteractionModalState: function() {
                    return s
                },
                default: function() {
                    return v
                }
            });
            var i, s, c = n("627445"),
                d = n.n(c),
                f = n("446674"),
                I = n("913144"),
                p = n("819689"),
                h = n("798609"),
                C = n("274800");
            (i = s || (s = {}))[i.IN_FLIGHT = 0] = "IN_FLIGHT", i[i.ERRORED = 1] = "ERRORED", i[i.SUCCEEDED = 2] = "SUCCEEDED";
            class m extends f.default.Store {
                getModalState(e) {
                    return e !== l ? null : a
                }
            }
            m.displayName = "InteractionModalStore";
            var v = new m(I.default, {
                LOGOUT: function() {
                    return l = null, a = null, o = null, u = null, r = null, !0
                },
                INTERACTION_MODAL_CREATE: function(e) {
                    let {
                        nonce: t
                    } = e;
                    return t === r && (p.default.deleteMessage(u, o, !0), o = null, u = null, r = null), !1
                },
                INTERACTION_IFRAME_MODAL_CREATE: function(e) {
                    let {
                        nonce: t
                    } = e;
                    return t === r && (p.default.deleteMessage(u, o, !0), o = null, u = null, r = null), !1
                },
                INTERACTION_QUEUE: function(e) {
                    let {
                        messageId: t,
                        nonce: n,
                        data: i
                    } = e;
                    switch (i.interactionType) {
                        case h.InteractionTypes.APPLICATION_COMMAND:
                            return o = t, u = i.channelId, r = n, !1;
                        case h.InteractionTypes.MODAL_SUBMIT:
                            return d(null == l || 1 === a || 2 === a, "cannot submit multiple modals at once"), l = n, a = 0, setTimeout(() => {
                                l === n && 0 === a && (0, C.setFailed)(n)
                            }, 1e4), !0;
                        default:
                            return !1
                    }
                },
                INTERACTION_SUCCESS: function(e) {
                    let {
                        nonce: t
                    } = e;
                    return null != t && t === l && (a = 2, !0)
                },
                INTERACTION_FAILURE: function(e) {
                    let {
                        nonce: t
                    } = e;
                    return null != t && t === l && (a = 1, !0)
                }
            })
        },
        732523: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useModalState: function() {
                    return _
                },
                useIframeModalState: function() {
                    return A
                }
            }), n("222007"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660");
            var l = n("884691"),
                a = n("627445"),
                o = n.n(a),
                u = n("446674"),
                r = n("872717"),
                i = n("913144"),
                s = n("798609"),
                c = n("763898"),
                d = n("711562"),
                f = n("274800"),
                I = n("271938"),
                p = n("42203"),
                h = n("26989"),
                C = n("162771"),
                m = n("315102"),
                v = n("299039"),
                M = n("812684"),
                T = n("470055"),
                R = n("524094"),
                E = n("49111"),
                N = n("782340");
            let S = e => {
                let t = !0;
                return e.forEach(e => {
                    !e() && (t = !1)
                }), t
            };

            function g(e) {
                return l.useMemo(() => {
                    let t = C.default.getGuildId(),
                        n = null != t && null != e.bot ? h.default.getMember(t, e.bot.id) : void 0,
                        l = m.default.getApplicationIconURL({
                            id: e.id,
                            icon: e.icon,
                            botIconFirst: !0,
                            bot: null != n ? e.bot : void 0
                        }),
                        a = null != n && null != e.bot ? e.bot.username : e.name,
                        o = (0, d.default)(e.id);
                    return {
                        applicationIconURL: l,
                        applicationName: a,
                        applicationBaseUrl: o
                    }
                }, [e.id, e.icon, e.name, e.bot])
            }

            function _(e, t) {
                var n;
                let {
                    application: a,
                    customId: d,
                    components: h,
                    channelId: C
                } = e, m = null === (n = p.default.getChannel(C)) || void 0 === n ? void 0 : n.guild_id, R = (0, c.default)(), [_, A] = l.useState(null), [O, y] = l.useState(null), w = (0, u.useStateFromStores)([T.default], () => T.default.getModalState(O), [O]), j = l.useMemo(() => (0, M.createComponents)(h, a.id, m), [h, a.id, m]), b = l.useRef(new Set), L = l.useCallback(() => {
                    A(null), y(null), S(b.current) && y(function(e, t) {
                        let n = v.default.fromTimestamp(Date.now()),
                            l = e.channelId,
                            a = p.default.getChannel(l);
                        o(null != a, "expected channel");
                        let u = x(e.customId, e.components, []);
                        (0, f.addQueued)(n, {
                            data: {
                                interactionType: s.InteractionTypes.MODAL_SUBMIT
                            }
                        });
                        let i = () => {
                            (null == t || !t.aborted) && r.default.post({
                                url: E.Endpoints.INTERACTIONS,
                                body: {
                                    type: s.InteractionTypes.MODAL_SUBMIT,
                                    application_id: e.application.id,
                                    channel_id: a.id,
                                    guild_id: a.guild_id,
                                    data: {
                                        id: e.id,
                                        custom_id: e.customId,
                                        components: u
                                    },
                                    session_id: I.default.getSessionId(),
                                    nonce: n
                                },
                                signal: t
                            }).catch(e => {
                                429 === e.status ? setTimeout(i, 1e3 * e.body.retry_after) : (0, f.setFailed)(n)
                            })
                        };
                        return i(), n
                    }(e, R))
                }, [R, e]);
                l.useEffect(() => {
                    w === T.InteractionModalState.SUCCEEDED && (i.default.dispatch({
                        type: "CLEAR_INTERACTION_MODAL_STATE",
                        id: d
                    }), t()), w === T.InteractionModalState.ERRORED && A(N.default.Messages.INTERACTION_FORM_SUBMISSION_FAILED)
                }, [O, w, t, d]);
                let {
                    applicationIconURL: D,
                    applicationName: U
                } = g(a);
                return {
                    components: j,
                    applicationIconURL: D,
                    applicationName: U,
                    submissionState: w,
                    error: _,
                    validators: b.current,
                    onSubmit: L
                }
            }

            function A(e) {
                let {
                    application: t,
                    customId: n
                } = e, {
                    applicationIconURL: l,
                    applicationName: a,
                    applicationBaseUrl: u
                } = g(t), r = p.default.getChannel(e.channelId);
                o(null != r, "channel should not be null");
                let i = "".concat(e.channelId, ":").concat(t.id, ":").concat(n),
                    s = {
                        instance_id: i,
                        custom_id: n,
                        channel_id: e.channelId
                    };
                null != r.guild_id && "" !== r.guild_id && (s.guild_id = r.guild_id);
                let c = new URL(null != u ? u : "");
                c.pathname = e.iframePath;
                let d = c.toString();
                return {
                    applicationIconURL: l,
                    applicationName: a,
                    applicationBaseUrl: u,
                    queryParams: s,
                    iframeUrl: d
                }
            }
            let x = (e, t, n) => t.map((t, l) => {
                let a = [...n, l];
                switch (t.type) {
                    case s.ComponentType.ACTION_ROW:
                        var u;
                        return {
                            type: t.type, components: x(e, null !== (u = t.components) && void 0 !== u ? u : [], a)
                        };
                    case s.ComponentType.INPUT_TEXT: {
                        let n = R.default.getInteractionComponentState(e, a);
                        return {
                            type: t.type,
                            custom_id: t.custom_id,
                            value: (null == n ? void 0 : n.type) === t.type ? n.value : null
                        }
                    }
                    case s.ComponentType.STRING_SELECT: {
                        let n = R.default.getInteractionComponentState(e, a);
                        return {
                            type: t.type,
                            custom_id: t.custom_id,
                            values: (null == n ? void 0 : n.type) === t.type ? n.values : null
                        }
                    }
                    default:
                        o(!1, "unreachable")
                }
            })
        },
        394816: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                },
                openInteractionModal: function() {
                    return p
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                o = n("555158"),
                u = n("258078"),
                r = n("307311"),
                i = n("470055"),
                s = n("732523"),
                c = n("383247"),
                d = n("782340"),
                f = n("907926");

            function I(e) {
                let {
                    customId: t,
                    title: n,
                    onClose: I,
                    transitionState: p
                } = e, {
                    components: h,
                    applicationIconURL: C,
                    applicationName: m,
                    submissionState: v,
                    error: M,
                    validators: T,
                    onSubmit: R
                } = (0, s.useModalState)(e, I);
                return (0, l.jsx)("form", {
                    onSubmit: e => {
                        e.preventDefault(), R()
                    },
                    children: (0, l.jsxs)(a.ModalRoot, {
                        transitionState: p,
                        children: [(0, l.jsxs)(a.ModalHeader, {
                            separator: !1,
                            children: [(0, l.jsx)(a.Avatar, {
                                src: C,
                                size: a.AvatarSizes.SIZE_24,
                                "aria-label": m,
                                className: f.applicationIcon
                            }), (0, l.jsx)(u.default, {
                                color: u.default.Colors.HEADER_PRIMARY,
                                size: u.default.Sizes.SIZE_24,
                                children: n
                            }), (0, l.jsx)(a.ModalCloseButton, {
                                onClick: I,
                                className: f.closeButton
                            })]
                        }), (0, l.jsxs)(a.ModalContent, {
                            children: [null != M && "" !== M ? (0, l.jsx)(o.default, {
                                messageType: o.HelpMessageTypes.ERROR,
                                className: f.submissionWarning,
                                children: M
                            }) : null, (0, l.jsx)(o.default, {
                                messageType: o.HelpMessageTypes.WARNING,
                                className: f.submissionWarning,
                                children: d.default.Messages.INTERACTION_FORM_SUBMISSION_APPLICATION.format({
                                    applicationName: m
                                })
                            }), (0, l.jsx)(a.FormSection, {
                                children: (0, l.jsx)(r.ComponentStateContextProvider, {
                                    modal: {
                                        customId: t
                                    },
                                    validators: T,
                                    children: (0, c.renderComponents)(h)
                                })
                            })]
                        }), (0, l.jsxs)(a.ModalFooter, {
                            children: [(0, l.jsx)(a.Button, {
                                type: "submit",
                                color: a.Button.Colors.BRAND,
                                size: a.Button.Sizes.MEDIUM,
                                submitting: v === i.InteractionModalState.IN_FLIGHT,
                                children: d.default.Messages.SUBMIT
                            }), (0, l.jsx)(a.Button, {
                                look: a.Button.Looks.LINK,
                                color: a.Button.Colors.PRIMARY,
                                onClick: I,
                                children: d.default.Messages.CANCEL
                            })]
                        })]
                    })
                })
            }

            function p(e) {
                (0, a.openModal)(t => (0, l.jsx)(I, {
                    ...t,
                    ...e
                }))
            }
        },
        555158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HelpMessageTypes: function() {
                    return a
                },
                default: function() {
                    return p
                }
            });
            var l, a, o = n("37983");
            n("884691");
            var u = n("414456"),
                r = n.n(u),
                i = n("77078"),
                s = n("36694"),
                c = n("381546"),
                d = n("68238"),
                f = n("423487"),
                I = n("557296");
            (l = a || (a = {}))[l.WARNING = 0] = "WARNING", l[l.INFO = 1] = "INFO", l[l.ERROR = 2] = "ERROR", l[l.POSITIVE = 3] = "POSITIVE";
            var p = function(e) {
                let {
                    children: t,
                    messageType: n,
                    className: l,
                    textColor: a = "text-normal",
                    textVariant: u = "text-sm/medium"
                } = e, p = function(e) {
                    switch (e) {
                        case 0:
                            return f.default;
                        case 1:
                            return d.default;
                        case 2:
                            return c.default;
                        case 3:
                            return s.default
                    }
                }(n), h = function(e) {
                    switch (e) {
                        case 0:
                            return I.warning;
                        case 1:
                            return I.info;
                        case 2:
                            return I.error;
                        case 3:
                            return I.positive
                    }
                }(n);
                return (0, o.jsxs)("div", {
                    className: r(I.container, h, l),
                    children: [(0, o.jsx)("div", {
                        className: I.iconDiv,
                        children: (0, o.jsx)(p, {
                            className: I.icon
                        })
                    }), (0, o.jsx)(i.Text, {
                        className: I.text,
                        color: a,
                        variant: u,
                        children: t
                    })]
                })
            }
        },
        346955: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                o = n("509317"),
                u = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: o,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, u.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fill: a,
                            className: o,
                            d: "M20 7H12L10.553 5.106C10.214 4.428 9.521 4 8.764 4H3C2.447 4 2 4.447 2 5V19C2 20.104 2.895 21 4 21H20C21.104 21 22 20.104 22 19V9C22 7.896 21.104 7 20 7Z"
                        })
                    })
                }, o.FolderIcon, void 0, {
                    size: 24
                })
        },
        781896: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                o = n("533806"),
                u = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: o,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, u.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: o,
                            d: "M16.002 8.00598C16.002 10.211 14.208 12.006 12.002 12.006C9.79695 12.006 8.00195 10.211 8.00195 8.00598C8.00195 5.80098 9.79595 4.00598 12.002 4.00598C14.208 4.00598 16.002 5.80098 16.002 8.00598ZM4.00195 19.006C4.00195 15.473 7.29195 13.006 12.002 13.006C16.713 13.006 20.002 15.473 20.002 19.006V20.006H4.00195V19.006Z",
                            fill: a
                        })
                    })
                }, o.UserIcon, void 0, {
                    size: 24
                })
        },
        682344: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                o = n("305861"),
                u = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 20,
                        height: n = 23,
                        color: a = "currentColor",
                        foreground: o,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, u.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 20 23",
                        children: (0, l.jsx)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: (0, l.jsx)("path", {
                                className: o,
                                fill: a,
                                d: "M19.487 5.126L10.487 0.126C10.184 -0.042 9.81798 -0.042 9.51498 0.126L0.514977 5.126C0.197977 5.302 0.000976562 5.636 0.000976562 5.999C0.000976562 6.693 0.114977 22.999 10.001 22.999C19.887 22.999 20.001 6.693 20.001 5.999C20.001 5.636 19.804 5.302 19.487 5.126ZM10.001 5.999C11.382 5.999 12.501 7.118 12.501 8.499C12.501 9.88 11.382 10.999 10.001 10.999C8.61998 10.999 7.50098 9.88 7.50098 8.499C7.50098 7.118 8.61998 5.999 10.001 5.999ZM6.25098 16C6.25098 13.699 7.69998 12.25 10.001 12.25C12.302 12.25 13.751 13.699 13.751 16H6.25098Z"
                            })
                        })
                    })
                }, o.ShieldUserIcon, void 0, {
                    size: 23
                })
        }
    }
]);