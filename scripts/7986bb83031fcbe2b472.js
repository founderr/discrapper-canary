(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["54727"], {
        352674: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("913144"),
                u = {
                    startTyping(e) {
                        a.default.dispatch({
                            type: "TYPING_START_LOCAL",
                            channelId: e
                        })
                    },
                    stopTyping(e) {
                        a.default.dispatch({
                            type: "TYPING_STOP_LOCAL",
                            channelId: e
                        })
                    }
                }
        },
        837707: function(e, t, n) {
            "use strict";

            function a(e) {
                if (null != e) {
                    if ("activitySessionId" in e) return e.activitySessionId;
                    if ("instanceId" in e) return e.instanceId;
                    if ("activity_id" in e) return e.activity_id
                }
            }
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            })
        },
        242757: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canViewInviteModal: function() {
                    return u
                }
            });
            var a = n("49111");

            function u(e, t, n, u) {
                let r = null != n ? n : t,
                    i = null != r && e.can(a.Permissions.CREATE_INSTANT_INVITE, r);
                return i || null != t && null != t.vanityURLCode || (null == u ? void 0 : u.invite_code) != null
            }
        },
        292687: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a.default
                }
            });
            var a = n("870346")
        },
        812809: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("845579"),
                u = n("42887"),
                r = n("829536");

            function i(e) {
                let t = function() {
                        var e;
                        let t = a.SoundboardSettings.getSetting();
                        return (0, r.amplitudeToPerceptual)(null !== (e = null == t ? void 0 : t.volume) && void 0 !== e ? e : 100) / 100
                    }(),
                    n = Math.min(u.default.getOutputVolume() / 100, 1);
                return Math.min(e * t * n, 1)
            }
        },
        166452: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return G
                }
            });
            var a = n("37983");
            n("884691");
            var u = n("77078"),
                r = n("272030"),
                i = n("838446"),
                l = n("158534"),
                s = n("846883"),
                d = n("812204"),
                o = n("243288"),
                c = n("321135"),
                f = n("873254"),
                m = n("861370"),
                v = n("726750"),
                h = n("170990"),
                p = n("304582"),
                M = n("72057"),
                g = n("489836"),
                x = n("406703"),
                S = n("343856"),
                _ = n("502533"),
                j = n("314838"),
                I = n("383161"),
                N = n("421602"),
                T = n("432487"),
                C = n("151200"),
                E = n("692986"),
                O = n("806179"),
                R = n("816106"),
                A = n("623879"),
                P = n("49111"),
                U = n("782340"),
                G = (0, l.default)((0, i.default)(function(e) {
                    var t;
                    let {
                        user: n,
                        channel: i,
                        context: l,
                        showChatItems: d = !0,
                        showMediaItems: P = !1,
                        showChannelCallItems: G = !1,
                        showModalItems: y = !0,
                        onSelect: b
                    } = e, w = (0, O.default)(n.id, null), L = (0, I.default)(n, null, l), F = (0, C.default)(n.id, i.id), k = (0, N.default)(n.id, l), D = (0, x.default)(n, l), z = (0, M.default)({
                        user: n,
                        context: l
                    }), W = (0, p.default)(n), B = (0, R.default)(n.id), H = (0, T.default)(n.id, i.id), V = (0, E.default)(n.id), Y = (0, _.default)(n.id, i.id), X = (0, j.default)(n), Z = (0, s.default)(null, n), q = (0, h.default)(n), J = (0, g.default)(n), K = (0, m.default)({
                        id: n.id,
                        label: U.default.Messages.COPY_ID_USER
                    }), Q = (0, A.default)(n.id), $ = (0, c.default)(n.id), ee = (0, o.default)(i.id), et = (0, v.default)(n), en = (0, f.default)(n.id), ea = (0, S.default)(n, i), eu = n.isNonUserBot(), er = i.isManaged(), ei = null === (t = i.recipients) || void 0 === t ? void 0 : t.includes(n.id);
                    return (0, a.jsxs)(u.Menu, {
                        navId: "user-context",
                        onClose: r.closeContextMenu,
                        "aria-label": U.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: b,
                        children: [!eu && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(u.MenuGroup, {
                                children: et
                            }), (0, a.jsxs)(u.MenuGroup, {
                                children: [y && w, d && L, k, D, !er && F, y && z, y && W, Q]
                            }), P && (0, a.jsx)(u.MenuGroup, {
                                children: B
                            }), ei && (0, a.jsxs)(u.MenuGroup, {
                                children: [!er && H, ea]
                            }), (0, a.jsx)(u.MenuGroup, {
                                children: y && Z
                            }), (0, a.jsxs)(u.MenuGroup, {
                                children: [P && V, P && Y, y && X, q, y && J, P && en]
                            }), G && (0, a.jsxs)(u.MenuGroup, {
                                children: [ee, $]
                            })]
                        }), (0, a.jsx)(u.MenuGroup, {
                            children: K
                        })]
                    })
                }, {
                    object: P.AnalyticsObjects.CONTEXT_MENU
                }), [d.default.CONTEXT_MENU, d.default.GROUP_DM_USER_MENU])
        },
        343856: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var a = n("37983");
            n("884691");
            var u = n("446674"),
                r = n("669491"),
                i = n("77078"),
                l = n("450911"),
                s = n("145079"),
                d = n("87657"),
                o = n("697218"),
                c = n("782340"),
                f = n("839938");

            function m(e) {
                let {
                    color: t,
                    className: n
                } = e;
                return (0, a.jsx)("svg", {
                    className: n,
                    height: "16",
                    width: "80",
                    viewBox: "0 0 80 16",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, a.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        opacity: ".6",
                        children: [(0, a.jsx)("path", {
                            d: "m0 0h80v16h-80z"
                        }), (0, a.jsxs)("g", {
                            stroke: t,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            children: [(0, a.jsx)("path", {
                                d: "m71 1h4v4.16"
                            }), (0, a.jsx)("path", {
                                d: "m2 1h4v4.16",
                                transform: "matrix(-1 0 0 1 8 0)"
                            }), (0, a.jsx)("path", {
                                d: "m51 1h4m6 0h4m-24 0h4m-14 0h4m-14 0h4m-23 11v-2m9-9h4"
                            }), (0, a.jsx)("path", {
                                d: "m72.13 10.474 2.869 3.12 2.631-3.12"
                            })]
                        })]
                    })
                })
            }

            function v(e, t) {
                let n = (0, u.useStateFromStores)([o.default], () => o.default.getCurrentUser());
                return null == n || t.ownerId !== n.id || e.id === n.id || (null == t ? void 0 : t.isBroadcastChannel()) ? null : (0, a.jsx)(i.MenuItem, {
                    id: "make-dm-owner",
                    color: "danger",
                    label: c.default.Messages.CHANGE_DM_OWNER,
                    action: () => {
                        var u;
                        return u = n, void(0, i.openModal)(n => (0, a.jsxs)(i.ConfirmModal, {
                            bodyClassName: f.confirmModal,
                            header: c.default.Messages.TRANSFER_GROUP_OWNERSHIP,
                            confirmText: c.default.Messages.CONFIRM,
                            cancelText: c.default.Messages.CANCEL,
                            onConfirm: () => l.default.setDMOwner(t.id, e.id),
                            ...n,
                            children: [(0, a.jsx)(m, {
                                color: r.default.unsafe_rawColors.PRIMARY_300.css
                            }), (0, a.jsxs)("div", {
                                className: f.fromToWrapper,
                                children: [(0, a.jsx)("div", {
                                    className: f.from,
                                    children: (0, a.jsx)(d.default, {
                                        user: u,
                                        size: i.AvatarSizes.SIZE_80
                                    })
                                }), (0, a.jsx)("div", {
                                    className: f.to,
                                    children: (0, a.jsx)(d.default, {
                                        user: e,
                                        size: i.AvatarSizes.SIZE_80
                                    })
                                })]
                            }), (0, a.jsx)(i.Text, {
                                variant: "text-md/normal",
                                children: c.default.Messages.CONFIRM_CHANGE_DM_OWNER.format({
                                    usernameHook: (t, n) => (0, a.jsx)(s.default, {
                                        usernameIcon: (0, a.jsx)(i.Avatar, {
                                            className: f.avatarIcon,
                                            src: e.getAvatarURL(void 0, 16),
                                            size: i.AvatarSizes.SIZE_16,
                                            "aria-hidden": !0
                                        }),
                                        className: f.discordTag,
                                        usernameClass: f.username,
                                        discriminatorClass: f.discriminator,
                                        user: e
                                    }, n)
                                })
                            })]
                        }))
                    }
                })
            }
        },
        383161: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                mentionUser: function() {
                    return v
                },
                default: function() {
                    return h
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var u = n("446674"),
                r = n("77078"),
                i = n("352674"),
                l = n("42203"),
                s = n("957255"),
                d = n("18494"),
                o = n("659500"),
                c = n("158998"),
                f = n("49111"),
                m = n("782340");

            function v(e, t) {
                let {
                    id: n
                } = e, a = "@".concat(c.default.getUserTag(e, {
                    decoration: "never"
                }));
                o.ComponentDispatch.dispatchToLastSubscribed(f.ComponentActions.INSERT_TEXT, {
                    plainText: a,
                    rawText: "<@".concat(n, ">")
                }), null != t && i.default.startTyping(t)
            }

            function h(e, t, n) {
                let [i, o] = (0, u.useStateFromStoresArray)([d.default, l.default, s.default], () => {
                    let e = d.default.getChannelId(t),
                        n = l.default.getChannel(e),
                        a = null != n && (n.isMultiUserDM() || s.default.can(f.Permissions.SEND_MESSAGES, n));
                    return [e, a]
                }, [t]), c = n === f.AppContext.POPOUT;
                return !o || c ? null : (0, a.jsx)(r.MenuItem, {
                    id: "mention",
                    label: m.default.Messages.MENTION,
                    action: function() {
                        v(e, i)
                    }
                })
            }
        },
        421602: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var u = n("77078"),
                r = n("450911"),
                i = n("54239"),
                l = n("271938"),
                s = n("49111"),
                d = n("782340");

            function o(e, t) {
                let n = l.default.getId(),
                    o = t === s.AppContext.POPOUT;
                return n === e || o ? null : (0, a.jsx)(u.MenuItem, {
                    id: "message-user",
                    label: d.default.Messages.USER_POPOUT_MESSAGE,
                    action: () => {
                        r.default.openPrivateChannel(e), (0, i.popLayer)()
                    }
                })
            }
        },
        432487: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var u = n("446674"),
                r = n("77078"),
                i = n("450911"),
                l = n("42203"),
                s = n("697218"),
                d = n("782340");

            function o(e, t) {
                let n = (0, u.useStateFromStores)([s.default], () => s.default.getCurrentUser(), []),
                    o = (0, u.useStateFromStores)([l.default], () => l.default.getChannel(t), [t]);
                return null == o || o.isOwner(e) || null == n || !o.isOwner(n.id) ? null : (0, a.jsx)(r.MenuItem, {
                    id: "remove",
                    label: d.default.Messages.REMOVE_FROM_GROUP,
                    action: () => i.default.removeRecipient(t, e),
                    color: "danger"
                })
            }
        },
        151200: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var u = n("446674"),
                r = n("77078"),
                i = n("561288"),
                l = n("191145"),
                s = n("271938"),
                d = n("99795"),
                o = n("782340");

            function c(e, t) {
                let n = (0, u.useStateFromStores)([s.default], () => s.default.getId() === e, [e]),
                    [c, f] = (0, u.useStateFromStoresArray)([l.default], () => [l.default.getParticipants(t), l.default.getParticipant(t, e)], [t, e]);
                return n || 0 === c.length ? null : null == f ? (0, a.jsx)(r.MenuItem, {
                    id: "ring",
                    label: o.default.Messages.RING,
                    action: () => i.default.ring(t, [e])
                }) : f.type === d.ParticipantTypes.USER && f.ringing ? (0, a.jsx)(r.MenuItem, {
                    id: "stop-ringing",
                    label: o.default.Messages.STOP_RINGING,
                    action: () => i.default.stopRinging(t, [e])
                }) : null
            }
        }
    }
]);