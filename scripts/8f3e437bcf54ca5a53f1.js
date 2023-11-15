(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["13062"], {
        478272: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                i = n("974889"),
                r = n("954016"),
                o = n("49111");

            function u(e) {
                let {
                    channel: t,
                    guildId: u,
                    locationObject: d,
                    openInPopout: s,
                    initialSelectedApplicationId: c,
                    initialSlide: f = r.ActivityShelfSlides.DIRECTORY,
                    enableSelectedTextChannelInvite: p = !1,
                    analyticsLocations: h
                } = e;
                s && (0, i.default)(o.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
                let m = s ? l.POPOUT_MODAL_CONTEXT : l.DEFAULT_MODAL_CONTEXT;
                return (0, l.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("605455").then(n.bind(n, "605455"));
                    return n => (0, a.jsx)(e, {
                        ...n,
                        channel: t,
                        guildId: u,
                        locationObject: d,
                        initialSlide: f,
                        initialSelectedApplicationId: c,
                        enableSelectedTextChannelInvite: p,
                        analyticsLocations: h
                    })
                }, {
                    modalKey: r.ACTIVITY_SHELF_WEB_MODAL_KEY,
                    contextKey: m
                })
            }
        },
        149022: function(e, t, n) {
            "use strict";

            function a() {
                return {
                    textValue: "",
                    richValue: [{
                        type: "line",
                        children: [{
                            text: ""
                        }]
                    }]
                }
            }

            function l(e) {
                return {
                    textValue: e,
                    richValue: r(e)
                }
            }
            n.r(t), n.d(t, {
                createEmptyState: function() {
                    return a
                },
                createState: function() {
                    return l
                },
                toRichValue: function() {
                    return r
                },
                voidToOptionValue: function() {
                    return o
                }
            }), n("70102");
            let i = Object.freeze([Object.freeze({
                type: "line",
                children: Object.freeze([Object.freeze({
                    text: ""
                })])
            })]);

            function r(e) {
                return "" !== e ? e.split("\n").map(e => ({
                    type: "line",
                    children: [{
                        text: e
                    }]
                })) : i
            }

            function o(e) {
                switch (e.type) {
                    case "userMention":
                        return {
                            type: "userMention", userId: e.userId
                        };
                    case "channelMention":
                        return {
                            type: "channelMention", channelId: e.channelId
                        };
                    case "staticRouteLink":
                        return {
                            type: "staticRouteLink", channelId: e.channelId
                        };
                    case "soundboard":
                        return {
                            type: "soundboard", soundId: e.soundId
                        };
                    case "roleMention":
                        return {
                            type: "roleMention", roleId: e.roleId
                        };
                    case "textMention":
                        return {
                            type: "textMention", text: e.name
                        };
                    case "emoji":
                        return {
                            type: "emoji", name: e.emoji.name, surrogate: e.emoji.surrogate
                        };
                    case "customEmoji":
                        return {
                            type: "customEmoji", emojiId: e.emoji.emojiId, name: e.emoji.name, animated: e.emoji.animated
                        };
                    case "testInlineVoid":
                        throw Error("Unable to convert test types")
                }
                return null
            }
        },
        914271: function(e, t, n) {
            "use strict";
            async function a(e, t, n) {}
            async function l(e, t, n) {}
            async function i(e) {}
            async function r(e) {
                let {
                    channel: t,
                    items: n,
                    token: a,
                    poll: l,
                    nonce: i,
                    maxSizeCallback: r
                } = e
            }
            n.r(t), n.d(t, {
                handlePollGifAttachmentAdd: function() {
                    return a
                },
                removePollUploadAttachment: function() {
                    return l
                },
                removeAllPollUploadAttachments: function() {
                    return i
                },
                sendPollMessageWithAttachments: function() {
                    return r
                }
            })
        },
        847511: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
            var a = n("627445"),
                l = n.n(a),
                i = n("418009"),
                r = n("404118"),
                o = n("819689"),
                u = n("815297"),
                d = n("271938"),
                s = n("474643"),
                c = n("377253"),
                f = n("585722"),
                p = n("914271"),
                h = n("690714"),
                m = n("641126"),
                _ = n("782340"),
                E = {
                    handlePollAnswerTapped: function(e) {
                        var t;
                        let {
                            channelId: n,
                            messageId: a,
                            answerId: i
                        } = e, r = c.default.getMessage(n, a);
                        l(null != r, "Tapped on a non-existent poll message");
                        let o = null === (t = r.poll) || void 0 === t ? void 0 : t.allow_multiselect;
                        (0, m.updatePollState)(n, a, e => {
                            if (null == e) return {
                                channelId: n,
                                selectedAnswerIds: new Set([i]),
                                submitting: !1
                            };
                            let t = {
                                    ...e
                                },
                                a = new Set(t.selectedAnswerIds);
                            if (t.selectedAnswerIds = a, a.has(i)) a.delete(i);
                            else {
                                if (!o)
                                    for (let e of a) a.delete(e);
                                a.add(i)
                            }
                            return t
                        })
                    },
                    handlePollSubmitVote: async function e(e) {
                        let {
                            channelId: t,
                            messageId: n
                        } = e, a = (0, m.getPollState)(t, n);
                        l(null != a, "Must not be able to vote without existing state!"), (0, m.updatePollState)(t, n, e => (l(null != e, "Must not be able to vote without existing state!"), {
                            ...e,
                            submitting: !0
                        }));
                        try {
                            let e = [...a.selectedAnswerIds.values()];
                            await h.submitPollVote({
                                channelId: t,
                                messageId: n,
                                answerIds: e
                            }), (0, m.updatePollState)(t, n, () => void 0)
                        } catch (e) {
                            var i, o, u;
                            r.default.show({
                                title: _.default.Messages.GENERIC_ERROR_TITLE,
                                body: null !== (u = null !== (o = null === (i = e.getAnyErrorMessage) || void 0 === i ? void 0 : i.call(e)) && void 0 !== o ? o : e.message) && void 0 !== u ? u : _.default.Messages.GENERIC_ERROR_BODY
                            }), (0, m.updatePollState)(t, n, e => {
                                if (null != e) return {
                                    ...e,
                                    submitting: !1
                                }
                            })
                        }
                    },
                    createPoll: async function e(e) {
                        let {
                            channel: t,
                            question: n,
                            answers: a,
                            allowMultiSelect: l,
                            layout: r,
                            onClose: c
                        } = e, h = f.default.getUploads(t.id, s.DraftType.Poll), m = a.map(e => {
                            var t;
                            let n = null == h ? void 0 : h.findIndex(t => t.id === e.uploadId),
                                a = {
                                    attachment_ids: -1 !== n ? ["".concat(n)] : []
                                };
                            r !== i.PollLayoutTypes.IMAGE_ONLY_ANSWERS && (a.text = e.text);
                            let l = null === (t = e.image) || void 0 === t ? void 0 : t.emoji;
                            return null != l && (null != l.id ? a.emoji = {
                                id: l.id,
                                name: ""
                            } : null != l.optionallyDiverseSequence && (a.emoji = {
                                name: l.optionallyDiverseSequence
                            })), {
                                poll_media: a
                            }
                        }), _ = {
                            question: {
                                text: n,
                                attachment_ids: []
                            },
                            answers: m,
                            allow_multiselect: l,
                            layout_type: r
                        };
                        try {
                            if (null != h && h.length > 0) {
                                var E;
                                let e = null !== (E = d.default.getToken()) && void 0 !== E ? E : "";
                                await p.sendPollMessageWithAttachments({
                                    channel: t,
                                    items: h,
                                    token: e,
                                    poll: _,
                                    nonce: (0, u.createNonce)(),
                                    maxSizeCallback: () => {}
                                })
                            } else await o.default.sendPollMessage(t.id, _)
                        } catch (e) {} finally {
                            null == c || c()
                        }
                    }
                }
        },
        83995: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PollsExperiment: function() {
                    return l
                },
                PollsUserExperiment: function() {
                    return i
                }
            });
            var a = n("862205");
            let l = (0, a.createExperiment)({
                    kind: "guild",
                    id: "2023-09_guild_polls",
                    label: "Polls",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enables creation of polls within a guild",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                i = (0, a.createExperiment)({
                    kind: "user",
                    id: "2023-10_poll_users",
                    label: "Polls User Experiment",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enables poll messages",
                        config: {
                            enabled: !0
                        }
                    }]
                })
        },
        690714: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                submitPollVote: function() {
                    return r
                }
            });
            var a = n("872717"),
                l = n("448993"),
                i = n("49111");
            async function r(e) {
                let {
                    channelId: t,
                    messageId: n,
                    answerIds: r
                } = e;
                try {
                    await a.default.put({
                        url: i.Endpoints.POLL_ANSWERS(t, n),
                        body: {
                            answer_ids: r
                        }
                    })
                } catch (e) {
                    throw new l.APIError(e)
                }
            }
        },
        641126: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useChannelPollInteractions: function() {
                    return o
                },
                updatePollState: function() {
                    return u
                },
                getPollState: function() {
                    return d
                }
            });
            var a = n("308503"),
                l = n("233736");
            let i = {},
                r = (0, a.default)(e => ({
                    polls: {},
                    updatePollState(t, n, a) {
                        e(e => {
                            var l;
                            return {
                                polls: {
                                    ...e.polls,
                                    [t]: {
                                        ...e.polls[t],
                                        [n]: a(null === (l = e.polls[t]) || void 0 === l ? void 0 : l[n])
                                    }
                                }
                            }
                        })
                    }
                }));

            function o(e) {
                return r(t => {
                    var n;
                    return null !== (n = t.polls[e]) && void 0 !== n ? n : i
                }, l.default)
            }

            function u(e, t, n) {
                r.getState().updatePollState(e, t, n)
            }

            function d(e, t) {
                var n;
                return null === (n = r.getState().polls[e]) || void 0 === n ? void 0 : n[t]
            }
        },
        166960: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("862205");
            let l = (0, a.createExperiment)({
                kind: "user",
                id: "2023-05_referral_trials_birthday_moment",
                label: "Referral Trials Birthday Moment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Users will see the birthday moment referral trial UX",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var i = l
        },
        1607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("862205");
            let l = (0, a.createExperiment)({
                kind: "user",
                id: "2023-02_referral_trials",
                label: "Referral Trials",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Nitro users can send a Nitro trial offer to another user.",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var i = l
        },
        967241: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openThreadSidebarForViewing: function() {
                    return g
                },
                openThreadSidebarForCreating: function() {
                    return A
                },
                closeThreadSidebar: function() {
                    return S
                },
                closeAndClearThreadSidebar: function() {
                    return b
                }
            });
            var a = n("627445"),
                l = n.n(a),
                i = n("917351"),
                r = n.n(i),
                o = n("913144"),
                u = n("295426"),
                d = n("244201"),
                s = n("716241"),
                c = n("565298"),
                f = n("393414"),
                p = n("144491"),
                h = n("845579"),
                m = n("474643"),
                _ = n("18494"),
                E = n("800762"),
                y = n("659500"),
                C = n("648564"),
                T = n("49111"),
                v = n("724210");

            function g(e, t, n) {
                d.MainWindowDispatch.dispatch(T.ComponentActions.POPOUT_CLOSE);
                let a = !r.isEmpty(E.default.getVoiceStatesForChannel(e.id));
                if (t || !h.UseThreadSidebar.getSetting() || __OVERLAY__ || a) {
                    o.default.dispatch({
                        type: "SIDEBAR_CLOSE",
                        baseChannelId: e.parent_id
                    }), null != n ? (0, p.transitionToThread)(e, n) : (0, p.transitionToChannel)(e.id);
                    return
                }
                l(null != e.parent_id, "all threads must have parents");
                let i = _.default.getChannelId();
                e.parent_id !== i && !(0, v.isGuildHomeChannel)(i) && (0, p.transitionToChannel)(e.parent_id), (0, f.transitionTo)(T.Routes.CHANNEL_THREAD_VIEW((0, c.getGuildIdForGenericRedirect)(e), (0, v.isGuildHomeChannel)(i) ? v.StaticChannelRoute.GUILD_HOME : e.parent_id, e.id), void 0, e.isForumPost() ? C.OpenThreadAnalyticsLocations.FORUM : void 0), setTimeout(() => {
                    y.ComponentDispatch.dispatch(T.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                        channelId: e.id
                    })
                }, 0)
            }

            function A(e, t, n) {
                l(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"), l(!__OVERLAY__, "Cannot create threads in the overlay."), (0, s.trackWithMetadata)(T.AnalyticEvents.THREAD_CREATION_STARTED, {
                    location: n,
                    channel_id: e.id,
                    guild_id: e.guild_id
                }), d.MainWindowDispatch.dispatch(T.ComponentActions.POPOUT_CLOSE), _.default.getChannelId() !== e.id && (0, p.transitionToChannel)(e.id);
                let a = m.default.getDraft(e.id, m.DraftType.FirstThreadMessage);
                if ("" === a) {
                    let t = m.default.getDraft(e.id, m.DraftType.ChannelMessage);
                    u.default.saveDraft(e.id, "", m.DraftType.ChannelMessage), u.default.saveDraft(e.id, t, m.DraftType.FirstThreadMessage)
                }
                setTimeout(() => {
                    o.default.dispatch({
                        type: "SIDEBAR_CREATE_THREAD",
                        parentChannelId: e.id,
                        parentMessageId: null == t ? void 0 : t.id,
                        location: n
                    })
                }, 0)
            }

            function S(e, t) {
                (0, f.transitionTo)(T.Routes.CHANNEL(e, (0, v.isGuildHomeChannel)(t) ? v.StaticChannelRoute.GUILD_HOME : t)), o.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: t
                })
            }

            function b(e) {
                o.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: e
                }), o.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: m.DraftType.FirstThreadMessage
                }), o.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: m.DraftType.ThreadSettings
                })
            }
        },
        346955: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("469563"),
                i = n("509317"),
                r = n("75196"),
                o = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: i,
                        ...o
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, r.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, a.jsx)("path", {
                            fill: l,
                            className: i,
                            d: "M20 7H12L10.553 5.106C10.214 4.428 9.521 4 8.764 4H3C2.447 4 2 4.447 2 5V19C2 20.104 2.895 21 4 21H20C21.104 21 22 20.104 22 19V9C22 7.896 21.104 7 20 7Z"
                        })
                    })
                }, i.FolderIcon)
        },
        659186: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChatLayerContainer: function() {
                    return o
                },
                ChatLayerProvider: function() {
                    return u
                },
                default: function() {
                    return d
                }
            });
            var a = n("228256");
            let {
                Layer: l,
                LayerContainer: i,
                LayerProvider: r
            } = (0, a.createLayer)("Chat"), o = i, u = r;
            var d = l
        },
        418009: function(e, t, n) {
            "use strict";
            var a, l;
            n.r(t), n.d(t, {
                PollLayoutTypes: function() {
                    return a
                }
            }), (l = a || (a = {}))[l.UNKNOWN = 0] = "UNKNOWN", l[l.DEFAULT = 1] = "DEFAULT", l[l.IMAGE_ONLY_ANSWERS = 2] = "IMAGE_ONLY_ANSWERS"
        }
    }
]);