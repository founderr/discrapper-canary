(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["39771"], {
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
        535348: function(e, t, n) {
            "use strict";
            var a, u;
            n.r(t), n.d(t, {
                SelfStreamAndVideoAlertType: function() {
                    return a
                }
            }), (u = a || (a = {}))[u.STREAM = 0] = "STREAM", u[u.VIDEO = 1] = "VIDEO"
        },
        301603: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("446674"),
                u = n("629109"),
                r = n("271938"),
                d = n("42887"),
                s = n("49111"),
                l = n("353927");

            function i(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.MediaEngineContextTypes.DEFAULT,
                    n = (0, a.useStateFromStores)([r.default], () => r.default.getId()),
                    i = (0, a.useStateFromStores)([d.default], () => d.default.supports(l.Features.DISABLE_VIDEO) && d.default.isVideoEnabled()),
                    o = (0, a.useStateFromStores)([d.default], () => d.default.isLocalVideoDisabled(n, t), [n, t]),
                    f = null == e || e === n;
                return [f && (i || o), o, e => {
                    let a = e ? s.VideoToggleState.DISABLED : s.VideoToggleState.MANUAL_ENABLED;
                    u.default.setDisableLocalVideo(n, a, t)
                }]
            }
        },
        632616: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("37983");
            n("884691");
            var u = n("452804"),
                r = n("135230"),
                d = n("535348"),
                s = n("782340");

            function l(e) {
                let {
                    type: t,
                    onConfirm: n,
                    ...l
                } = e, i = t === d.SelfStreamAndVideoAlertType.STREAM ? s.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : s.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER, o = t === d.SelfStreamAndVideoAlertType.STREAM ? s.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : s.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
                return (0, a.jsx)(r.default, {
                    confirmText: s.default.Messages.CONFIRM,
                    secondaryConfirmText: s.default.Messages.DONT_ASK_AGAIN,
                    title: i,
                    cancelText: s.default.Messages.CANCEL,
                    onConfirm: n,
                    onConfirmSecondary: () => {
                        u.default.updatedUnsyncedSettings({
                            disableHideSelfStreamAndVideoConfirmationAlert: !0
                        }), n()
                    },
                    body: o,
                    ...l
                })
            }
        },
        243288: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var u = n("446674"),
                r = n("77078"),
                d = n("255397"),
                s = n("191145"),
                l = n("782340");

            function i(e) {
                let t = (0, u.useStateFromStores)([s.default], () => s.default.getVoiceParticipantsHidden(e));
                return (0, a.jsx)(r.MenuCheckboxItem, {
                    id: "no-video-hide",
                    label: l.default.Messages.STREAM_SHOW_NON_VIDEO,
                    checked: !t,
                    action: () => d.default.toggleVoiceParticipantsHidden(e, !t)
                })
            }
        },
        321135: function(e, t, n) {
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
                d = n("168973"),
                s = n("301603"),
                l = n("632616"),
                i = n("535348"),
                o = n("353927"),
                f = n("782340");

            function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.MediaEngineContextTypes.DEFAULT,
                    [n, c, m] = (0, s.default)(e, t),
                    S = (0, u.useStateFromStores)([d.default], () => d.default.disableHideSelfStreamAndVideoConfirmationAlert);
                return n ? (0, a.jsx)(r.MenuCheckboxItem, {
                    id: "self-video-hide",
                    label: f.default.Messages.SHOW_SELF_VIDEO,
                    checked: !c,
                    action: () => {
                        if (S || c) return m(!c);
                        (0, r.openModal)(e => (0, a.jsx)(l.default, {
                            ...e,
                            type: i.SelfStreamAndVideoAlertType.VIDEO,
                            onConfirm: () => m(!c)
                        }))
                    }
                }) : null
            }
        },
        873254: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var u = n("446674"),
                r = n("77078"),
                d = n("648911"),
                s = n("271938"),
                l = n("42887"),
                i = n("782340"),
                o = n("431024");

            function f(e) {
                let t = (0, r.useModalContext)(),
                    f = (0, u.useStateFromStores)([l.default], () => l.default.isVideoEnabled()),
                    c = (0, u.useStateFromStores)([s.default], () => s.default.getId() === e),
                    m = (0, d.default)();
                return (!f || m) && c ? (0, a.jsx)(r.MenuItem, {
                    id: "change-video-background",
                    label: (0, a.jsx)("div", {
                        className: o.item,
                        children: f ? i.default.Messages.CAMERA_CHANGE_VIDEO_BACKGROUND_MENU_ITEM : i.default.Messages.CAMERA_PREVIEW_MENU_ITEM
                    }),
                    action: function() {
                        (0, r.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("381736").then(n.bind(n, "381736"));
                            return t => (0, a.jsx)(e, {
                                ...t,
                                videoEnabled: f
                            })
                        }, {
                            modalKey: "camera-preview",
                            contextKey: t
                        })
                    }
                }) : null
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
                    return d
                }
            });
            var a = n("845579"),
                u = n("42887"),
                r = n("829536");

            function d(e) {
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
                    return b
                }
            });
            var a = n("37983");
            n("884691");
            var u = n("77078"),
                r = n("272030"),
                d = n("838446"),
                s = n("158534"),
                l = n("846883"),
                i = n("812204"),
                o = n("243288"),
                f = n("321135"),
                c = n("873254"),
                m = n("861370"),
                S = n("726750"),
                M = n("170990"),
                E = n("304582"),
                g = n("72057"),
                p = n("489836"),
                v = n("406703"),
                _ = n("343856"),
                h = n("502533"),
                I = n("314838"),
                A = n("383161"),
                x = n("421602"),
                T = n("432487"),
                C = n("151200"),
                O = n("692986"),
                N = n("806179"),
                R = n("816106"),
                j = n("623879"),
                D = n("49111"),
                F = n("782340"),
                b = (0, s.default)((0, d.default)(function(e) {
                    var t;
                    let {
                        user: n,
                        channel: d,
                        context: s,
                        showChatItems: i = !0,
                        showMediaItems: D = !1,
                        showChannelCallItems: b = !1,
                        showModalItems: y = !0,
                        onSelect: U
                    } = e, L = (0, N.default)(n.id, null), V = (0, A.default)(n, null, s), P = (0, C.default)(n.id, d.id), G = (0, x.default)(n.id, s), w = (0, v.default)(n, s), H = (0, g.default)({
                        user: n,
                        context: s
                    }), k = (0, E.default)(n), B = (0, R.default)(n.id), z = (0, T.default)(n.id, d.id), W = (0, O.default)(n.id), Y = (0, h.default)(n.id, d.id), K = (0, I.default)(n), X = (0, l.default)(null, n), Z = (0, M.default)(n), q = (0, p.default)(n), J = (0, m.default)({
                        id: n.id,
                        label: F.default.Messages.COPY_ID_USER
                    }), Q = (0, j.default)(n.id), $ = (0, f.default)(n.id), ee = (0, o.default)(d.id), et = (0, S.default)(n), en = (0, c.default)(n.id), ea = (0, _.default)(n, d), eu = n.isNonUserBot(), er = d.isManaged(), ed = null === (t = d.recipients) || void 0 === t ? void 0 : t.includes(n.id);
                    return (0, a.jsxs)(u.Menu, {
                        navId: "user-context",
                        onClose: r.closeContextMenu,
                        "aria-label": F.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: U,
                        children: [!eu && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(u.MenuGroup, {
                                children: et
                            }), (0, a.jsxs)(u.MenuGroup, {
                                children: [y && L, i && V, G, w, !er && P, y && H, y && k, Q]
                            }), D && (0, a.jsx)(u.MenuGroup, {
                                children: B
                            }), ed && (0, a.jsxs)(u.MenuGroup, {
                                children: [!er && z, ea]
                            }), (0, a.jsx)(u.MenuGroup, {
                                children: y && X
                            }), (0, a.jsxs)(u.MenuGroup, {
                                children: [D && W, D && Y, y && K, Z, y && q, D && en]
                            }), b && (0, a.jsxs)(u.MenuGroup, {
                                children: [ee, $]
                            })]
                        }), (0, a.jsx)(u.MenuGroup, {
                            children: J
                        })]
                    })
                }, {
                    object: D.AnalyticsObjects.CONTEXT_MENU
                }), [i.default.CONTEXT_MENU, i.default.GROUP_DM_USER_MENU])
        },
        343856: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var a = n("37983");
            n("884691");
            var u = n("446674"),
                r = n("669491"),
                d = n("77078"),
                s = n("450911"),
                l = n("145079"),
                i = n("87657"),
                o = n("697218"),
                f = n("782340"),
                c = n("839938");

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

            function S(e, t) {
                let n = (0, u.useStateFromStores)([o.default], () => o.default.getCurrentUser());
                return null == n || t.ownerId !== n.id || e.id === n.id || (null == t ? void 0 : t.isBroadcastChannel()) ? null : (0, a.jsx)(d.MenuItem, {
                    id: "make-dm-owner",
                    color: "danger",
                    label: f.default.Messages.CHANGE_DM_OWNER,
                    action: () => {
                        var u;
                        return u = n, void(0, d.openModal)(n => (0, a.jsxs)(d.ConfirmModal, {
                            bodyClassName: c.confirmModal,
                            header: f.default.Messages.TRANSFER_GROUP_OWNERSHIP,
                            confirmText: f.default.Messages.CONFIRM,
                            cancelText: f.default.Messages.CANCEL,
                            onConfirm: () => s.default.setDMOwner(t.id, e.id),
                            ...n,
                            children: [(0, a.jsx)(m, {
                                color: r.default.unsafe_rawColors.PRIMARY_300.css
                            }), (0, a.jsxs)("div", {
                                className: c.fromToWrapper,
                                children: [(0, a.jsx)("div", {
                                    className: c.from,
                                    children: (0, a.jsx)(i.default, {
                                        user: u,
                                        size: d.AvatarSizes.SIZE_80
                                    })
                                }), (0, a.jsx)("div", {
                                    className: c.to,
                                    children: (0, a.jsx)(i.default, {
                                        user: e,
                                        size: d.AvatarSizes.SIZE_80
                                    })
                                })]
                            }), (0, a.jsx)(d.Text, {
                                variant: "text-md/normal",
                                children: f.default.Messages.CONFIRM_CHANGE_DM_OWNER.format({
                                    usernameHook: (t, n) => (0, a.jsx)(l.default, {
                                        usernameIcon: (0, a.jsx)(d.Avatar, {
                                            className: c.avatarIcon,
                                            src: e.getAvatarURL(void 0, 16),
                                            size: d.AvatarSizes.SIZE_16,
                                            "aria-hidden": !0
                                        }),
                                        className: c.discordTag,
                                        usernameClass: c.username,
                                        discriminatorClass: c.discriminator,
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
                    return S
                },
                default: function() {
                    return M
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var u = n("446674"),
                r = n("77078"),
                d = n("352674"),
                s = n("42203"),
                l = n("957255"),
                i = n("18494"),
                o = n("659500"),
                f = n("158998"),
                c = n("49111"),
                m = n("782340");

            function S(e, t) {
                let {
                    id: n
                } = e, a = "@".concat(f.default.getUserTag(e, {
                    decoration: "never"
                }));
                o.ComponentDispatch.dispatchToLastSubscribed(c.ComponentActions.INSERT_TEXT, {
                    plainText: a,
                    rawText: "<@".concat(n, ">")
                }), null != t && d.default.startTyping(t)
            }

            function M(e, t, n) {
                let [d, o] = (0, u.useStateFromStoresArray)([i.default, s.default, l.default], () => {
                    let e = i.default.getChannelId(t),
                        n = s.default.getChannel(e),
                        a = null != n && (n.isMultiUserDM() || l.default.can(c.Permissions.SEND_MESSAGES, n));
                    return [e, a]
                }, [t]), f = n === c.AppContext.POPOUT;
                return !o || f ? null : (0, a.jsx)(r.MenuItem, {
                    id: "mention",
                    label: m.default.Messages.MENTION,
                    action: function() {
                        S(e, d)
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
                d = n("54239"),
                s = n("271938"),
                l = n("49111"),
                i = n("782340");

            function o(e, t) {
                let n = s.default.getId(),
                    o = t === l.AppContext.POPOUT;
                return n === e || o ? null : (0, a.jsx)(u.MenuItem, {
                    id: "message-user",
                    label: i.default.Messages.USER_POPOUT_MESSAGE,
                    action: () => {
                        r.default.openPrivateChannel(e), (0, d.popLayer)()
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
                d = n("450911"),
                s = n("42203"),
                l = n("697218"),
                i = n("782340");

            function o(e, t) {
                let n = (0, u.useStateFromStores)([l.default], () => l.default.getCurrentUser(), []),
                    o = (0, u.useStateFromStores)([s.default], () => s.default.getChannel(t), [t]);
                return null == o || o.isOwner(e) || null == n || !o.isOwner(n.id) ? null : (0, a.jsx)(r.MenuItem, {
                    id: "remove",
                    label: i.default.Messages.REMOVE_FROM_GROUP,
                    action: () => d.default.removeRecipient(t, e),
                    color: "danger"
                })
            }
        },
        151200: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var u = n("446674"),
                r = n("77078"),
                d = n("561288"),
                s = n("191145"),
                l = n("271938"),
                i = n("99795"),
                o = n("782340");

            function f(e, t) {
                let n = (0, u.useStateFromStores)([l.default], () => l.default.getId() === e, [e]),
                    [f, c] = (0, u.useStateFromStoresArray)([s.default], () => [s.default.getParticipants(t), s.default.getParticipant(t, e)], [t, e]);
                return n || 0 === f.length ? null : null == c ? (0, a.jsx)(r.MenuItem, {
                    id: "ring",
                    label: o.default.Messages.RING,
                    action: () => d.default.ring(t, [e])
                }) : c.type === i.ParticipantTypes.USER && c.ringing ? (0, a.jsx)(r.MenuItem, {
                    id: "stop-ringing",
                    label: o.default.Messages.STOP_RINGING,
                    action: () => d.default.stopRinging(t, [e])
                }) : null
            }
        },
        648911: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("446674"),
                u = n("42887"),
                r = n("512244");

            function d() {
                return (0, a.useStateFromStores)([u.default], () => (0, r.default)(u.default))
            }
        }
    }
]);