(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["13062"], {
        478272: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("974889"),
                r = n("954016"),
                o = n("49111");

            function d(e) {
                let {
                    channel: t,
                    guildId: d,
                    locationObject: u,
                    openInPopout: s,
                    initialSelectedApplicationId: c,
                    initialSlide: f = r.ActivityShelfSlides.DIRECTORY,
                    enableSelectedTextChannelInvite: p = !1,
                    analyticsLocations: h
                } = e;
                s && (0, l.default)(o.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
                let m = s ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT;
                return (0, i.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("605455").then(n.bind(n, "605455"));
                    return n => (0, a.jsx)(e, {
                        ...n,
                        channel: t,
                        guildId: d,
                        locationObject: u,
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

            function i(e) {
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
                    return i
                },
                toRichValue: function() {
                    return r
                },
                voidToOptionValue: function() {
                    return o
                }
            }), n("70102");
            let l = Object.freeze([Object.freeze({
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
                })) : l
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
            async function i(e, t, n) {}
            async function l(e) {}
            async function r(e) {
                let {
                    channel: t,
                    items: n,
                    token: a,
                    poll: i,
                    nonce: l,
                    maxSizeCallback: r
                } = e
            }
            n.r(t), n.d(t, {
                handlePollGifAttachmentAdd: function() {
                    return a
                },
                removePollUploadAttachment: function() {
                    return i
                },
                removeAllPollUploadAttachments: function() {
                    return l
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
                i = n.n(a),
                l = n("418009"),
                r = n("404118"),
                o = n("819689"),
                d = n("815297"),
                u = n("271938"),
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
                            answerId: l
                        } = e, r = c.default.getMessage(n, a);
                        i(null != r, "Tapped on a non-existent poll message");
                        let o = null === (t = r.poll) || void 0 === t ? void 0 : t.allow_multiselect;
                        (0, m.updatePollState)(n, a, e => {
                            if (null == e) return {
                                channelId: n,
                                selectedAnswerIds: new Set([l]),
                                submitting: !1,
                                editing: !1
                            };
                            let t = {
                                    ...e
                                },
                                a = new Set(t.selectedAnswerIds);
                            if (t.selectedAnswerIds = a, a.has(l)) a.delete(l);
                            else {
                                if (!o)
                                    for (let e of a) a.delete(e);
                                a.add(l)
                            }
                            return t
                        })
                    },
                    handlePollSubmitVote: async function e(e) {
                        let {
                            channelId: t,
                            messageId: n
                        } = e, a = (0, m.getPollState)(t, n);
                        i(null != a, "Must not be able to vote without existing state!"), (0, m.updatePollState)(t, n, e => (i(null != e, "Must not be able to vote without existing state!"), {
                            ...e,
                            submitting: !0,
                            editing: !1
                        }));
                        try {
                            let e = [...a.selectedAnswerIds.values()];
                            await h.submitPollVote({
                                channelId: t,
                                messageId: n,
                                answerIds: e
                            }), (0, m.updatePollState)(t, n, () => void 0)
                        } catch (e) {
                            var l, o, d;
                            r.default.show({
                                title: _.default.Messages.GENERIC_ERROR_TITLE,
                                body: null !== (d = null !== (o = null === (l = e.getAnyErrorMessage) || void 0 === l ? void 0 : l.call(e)) && void 0 !== o ? o : e.message) && void 0 !== d ? d : _.default.Messages.GENERIC_ERROR_BODY
                            }), (0, m.updatePollState)(t, n, e => {
                                if (null != e) return {
                                    ...e,
                                    submitting: !1,
                                    editing: !1
                                }
                            })
                        }
                    },
                    handleUpdateVoteEditingState: function(e) {
                        let {
                            channelId: t,
                            messageId: n,
                            isEditing: a
                        } = e, l = c.default.getMessage(t, n);
                        i(null != l, "Tapped on a non-existent poll message"), (0, m.updatePollState)(t, n, () => ({
                            channelId: t,
                            selectedAnswerIds: new Set,
                            submitting: !1,
                            editing: a
                        }))
                    },
                    createPoll: async function e(e) {
                        let {
                            channel: t,
                            question: n,
                            answers: a,
                            allowMultiSelect: i,
                            layout: r,
                            onClose: c
                        } = e, h = f.default.getUploads(t.id, s.DraftType.Poll), m = a.map(e => {
                            var t;
                            let n = null == h ? void 0 : h.findIndex(t => t.id === e.uploadId),
                                a = {
                                    attachment_ids: -1 !== n ? ["".concat(n)] : []
                                };
                            r !== l.PollLayoutTypes.IMAGE_ONLY_ANSWERS && (a.text = e.text);
                            let i = null === (t = e.image) || void 0 === t ? void 0 : t.emoji;
                            return null != i && (null != i.id ? a.emoji = {
                                id: i.id,
                                name: ""
                            } : null != i.optionallyDiverseSequence && (a.emoji = {
                                name: i.optionallyDiverseSequence
                            })), {
                                poll_media: a
                            }
                        }), _ = {
                            question: {
                                text: n,
                                attachment_ids: []
                            },
                            answers: m,
                            allow_multiselect: i,
                            layout_type: r
                        };
                        try {
                            if (null != h && h.length > 0) {
                                var E;
                                let e = null !== (E = u.default.getToken()) && void 0 !== E ? E : "";
                                await p.sendPollMessageWithAttachments({
                                    channel: t,
                                    items: h,
                                    token: e,
                                    poll: _,
                                    nonce: (0, d.createNonce)(),
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
                    return i
                },
                PollsUserExperiment: function() {
                    return l
                }
            });
            var a = n("862205");
            let i = (0, a.createExperiment)({
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
                l = (0, a.createExperiment)({
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
                i = n("448993"),
                l = n("49111");
            async function r(e) {
                let {
                    channelId: t,
                    messageId: n,
                    answerIds: r
                } = e;
                try {
                    await a.default.put({
                        url: l.Endpoints.POLL_ANSWERS(t, n),
                        body: {
                            answer_ids: r
                        }
                    })
                } catch (e) {
                    throw new i.APIError(e)
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
                    return d
                },
                getPollState: function() {
                    return u
                }
            });
            var a = n("308503"),
                i = n("233736");
            let l = {},
                r = (0, a.default)(e => ({
                    polls: {},
                    updatePollState(t, n, a) {
                        e(e => {
                            var i;
                            return {
                                polls: {
                                    ...e.polls,
                                    [t]: {
                                        ...e.polls[t],
                                        [n]: a(null === (i = e.polls[t]) || void 0 === i ? void 0 : i[n])
                                    }
                                }
                            }
                        })
                    }
                }));

            function o(e) {
                return r(t => {
                    var n;
                    return null !== (n = t.polls[e]) && void 0 !== n ? n : l
                }, i.default)
            }

            function d(e, t, n) {
                r.getState().updatePollState(e, t, n)
            }

            function u(e, t) {
                var n;
                return null === (n = r.getState().polls[e]) || void 0 === n ? void 0 : n[t]
            }
        },
        166960: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("862205");
            let i = (0, a.createExperiment)({
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
            var l = i
        },
        1607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("862205");
            let i = (0, a.createExperiment)({
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
            var l = i
        },
        967241: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openThreadSidebarForViewing: function() {
                    return v
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
                i = n.n(a),
                l = n("917351"),
                r = n.n(l),
                o = n("913144"),
                d = n("295426"),
                u = n("244201"),
                s = n("716241"),
                c = n("565298"),
                f = n("393414"),
                p = n("144491"),
                h = n("845579"),
                m = n("474643"),
                _ = n("18494"),
                E = n("800762"),
                g = n("659500"),
                y = n("648564"),
                T = n("49111"),
                C = n("724210");

            function v(e, t, n) {
                u.MainWindowDispatch.dispatch(T.ComponentActions.POPOUT_CLOSE);
                let a = !r.isEmpty(E.default.getVoiceStatesForChannel(e.id));
                if (t || !h.UseThreadSidebar.getSetting() || __OVERLAY__ || a) {
                    o.default.dispatch({
                        type: "SIDEBAR_CLOSE",
                        baseChannelId: e.parent_id
                    }), null != n ? (0, p.transitionToThread)(e, n) : (0, p.transitionToChannel)(e.id);
                    return
                }
                i(null != e.parent_id, "all threads must have parents");
                let l = _.default.getChannelId();
                e.parent_id !== l && !(0, C.isGuildHomeChannel)(l) && (0, p.transitionToChannel)(e.parent_id), (0, f.transitionTo)(T.Routes.CHANNEL_THREAD_VIEW((0, c.getGuildIdForGenericRedirect)(e), (0, C.isGuildHomeChannel)(l) ? C.StaticChannelRoute.GUILD_HOME : e.parent_id, e.id), void 0, e.isForumPost() ? y.OpenThreadAnalyticsLocations.FORUM : void 0), setTimeout(() => {
                    g.ComponentDispatch.dispatch(T.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                        channelId: e.id
                    })
                }, 0)
            }

            function A(e, t, n) {
                i(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"), i(!__OVERLAY__, "Cannot create threads in the overlay."), (0, s.trackWithMetadata)(T.AnalyticEvents.THREAD_CREATION_STARTED, {
                    location: n,
                    channel_id: e.id,
                    guild_id: e.guild_id
                }), u.MainWindowDispatch.dispatch(T.ComponentActions.POPOUT_CLOSE), _.default.getChannelId() !== e.id && (0, p.transitionToChannel)(e.id);
                let a = m.default.getDraft(e.id, m.DraftType.FirstThreadMessage);
                if ("" === a) {
                    let t = m.default.getDraft(e.id, m.DraftType.ChannelMessage);
                    d.default.saveDraft(e.id, "", m.DraftType.ChannelMessage), d.default.saveDraft(e.id, t, m.DraftType.FirstThreadMessage)
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
                (0, f.transitionTo)(T.Routes.CHANNEL(e, (0, C.isGuildHomeChannel)(t) ? C.StaticChannelRoute.GUILD_HOME : t)), o.default.dispatch({
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
            var i = n("469563"),
                l = n("509317"),
                r = n("75196"),
                o = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: l,
                        ...o
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, r.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, a.jsx)("path", {
                            fill: i,
                            className: l,
                            d: "M20 7H12L10.553 5.106C10.214 4.428 9.521 4 8.764 4H3C2.447 4 2 4.447 2 5V19C2 20.104 2.895 21 4 21H20C21.104 21 22 20.104 22 19V9C22 7.896 21.104 7 20 7Z"
                        })
                    })
                }, l.FolderIcon, void 0, {
                    size: 24
                })
        },
        659186: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChatLayerContainer: function() {
                    return o
                },
                ChatLayerProvider: function() {
                    return d
                },
                default: function() {
                    return u
                }
            });
            var a = n("228256");
            let {
                Layer: i,
                LayerContainer: l,
                LayerProvider: r
            } = (0, a.createLayer)("Chat"), o = l, d = r;
            var u = i
        },
        418009: function(e, t, n) {
            "use strict";
            var a, i;
            n.r(t), n.d(t, {
                PollLayoutTypes: function() {
                    return a
                }
            }), (i = a || (a = {}))[i.UNKNOWN = 0] = "UNKNOWN", i[i.DEFAULT = 1] = "DEFAULT", i[i.IMAGE_ONLY_ANSWERS = 2] = "IMAGE_ONLY_ANSWERS"
        }
    }
]);