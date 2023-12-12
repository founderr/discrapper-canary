(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["27660"], {
        277064: function(e, t, n) {
            "use strict";
            e.exports = n.p + "b7cfbc1104ec3593f753.gif"
        },
        748301: function(e, t, n) {
            "use strict";
            e.exports = n.p + "45266c5a3e03cba8884e.svg"
        },
        257809: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d83432a67613c4ff249f.png"
        },
        54338: function(e, t, n) {
            "use strict";
            e.exports = n.p + "98233dd23a0dd0a0c2ec.svg"
        },
        783480: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            }), n("222007"), n("702976");
            var i = n("77078"),
                a = n("913144"),
                s = n("295426"),
                l = n("819689"),
                o = n("81594"),
                r = n("336522"),
                u = n("448993"),
                c = n("979911"),
                d = n("282928"),
                f = n("966724"),
                m = n("681736"),
                h = n("600798"),
                p = n("692038"),
                T = n("815297"),
                E = n("168730"),
                R = n("562228"),
                _ = n("529805"),
                g = n("685841"),
                S = n("804888"),
                A = n("474643"),
                I = n("585722"),
                C = n("568734"),
                O = n("305515"),
                N = n("49111"),
                v = n("782340");
            async function M(e) {
                var t, n, i;
                let d, {
                        channelId: f,
                        uploads: M,
                        draftType: y,
                        parsedMessage: j,
                        options: U = {},
                        raiseEndpointErrors: P = !1
                    } = e,
                    b = new m.default(N.Endpoints.MESSAGES(f)),
                    x = new O.Future,
                    L = {
                        content: "",
                        nonce: "",
                        channel_id: f,
                        type: N.MessageTypes.DEFAULT,
                        sticker_ids: null == U ? void 0 : U.stickerIds,
                        poll: null == U ? void 0 : U.poll
                    };
                null != j && (L.content = null == j ? void 0 : j.content);
                let D = g.default.getPendingReply(f);
                null != D && (L.type = N.MessageTypes.REPLY, L.message_reference = U.messageReference, L.allowed_mentions = U.allowedMentions, (0, _.deletePendingReply)(f));
                let [B, F] = (0, S.default)(L.content);
                B && (L.content = F, L.flags = (0, C.addFlag)(null !== (t = L.flags) && void 0 !== t ? t : 0, N.MessageFlags.SUPPRESS_NOTIFICATIONS));
                let w = null !== (n = U.nonce) && void 0 !== n ? n : (0, T.createNonce)(),
                    k = (0, T.default)({
                        channelId: f,
                        content: L.content,
                        tts: null !== (i = null == j ? void 0 : j.tts) && void 0 !== i && i,
                        type: L.type,
                        messageReference: L.message_reference,
                        flags: L.flags,
                        nonce: w,
                        poll: (0, R.createPollServerDataFromCreateRequest)(U.poll)
                    });
                return (L.nonce = w, b.on("start", e => {
                    d = (0, p.createMessageRecord)({
                        ...k,
                        id: e.id
                    }), a.default.dispatch({
                        type: "UPLOAD_START",
                        channelId: f,
                        file: e,
                        message: d,
                        uploader: b
                    })
                }), b.on("progress", e => {
                    a.default.dispatch({
                        type: "UPLOAD_PROGRESS",
                        channelId: f,
                        file: e
                    })
                })), b.on("error", (e, t, n, i) => {
                    if (a.default.dispatch({
                            type: "UPLOAD_FAIL",
                            channelId: f,
                            file: e,
                            messageRecord: d
                        }), (0, E.logMessageSendFailure)({
                            fileItems: e.items,
                            failureCode: t,
                            errorMessage: null == i ? void 0 : i.msg
                        }), t === N.AbortCodes.EXPLICIT_CONTENT) {
                        l.default.sendClydeError(f, t);
                        return
                    }
                    if (t === N.AbortCodes.AUTOMOD_MESSAGE_BLOCKED) {
                        let e = {
                                code: t,
                                message: null == n ? void 0 : n.message
                            },
                            i = null == d ? null : {
                                type: c.MessageDataType.SEND,
                                message: {
                                    ...d,
                                    channelId: f
                                }
                            };
                        (0, r.openUploadError)({
                            title: v.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                            help: (0, h.getAutomodErrorMessage)(i, e)
                        });
                        return
                    }
                    t !== N.AbortCodes.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS && (P ? x.reject(new u.APIError({
                        status: t,
                        body: null != n ? n : {}
                    }, t)) : (0, r.openUploadError)({
                        title: v.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                        help: v.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_RETRY_HELP
                    }), "" !== L.content && "" === A.default.getDraft(f, y) && s.default.saveDraft(f, L.content, y), 0 === I.default.getUploadCount(f, y) && o.default.setUploads({
                        channelId: f,
                        uploads: M,
                        draftType: y
                    }))
                }), b.on("complete", e => {
                    a.default.dispatch({
                        type: "UPLOAD_COMPLETE",
                        channelId: f,
                        file: e,
                        aborted: b._aborted
                    })
                }), await b.uploadFiles(M, L), x.resolve(), x.promise
            }
            var y = {
                instantBatchUpload: function(e) {
                    let {
                        channelId: t,
                        files: n,
                        draftType: i,
                        isThumbnail: a = !1,
                        filesMetadata: s = []
                    } = e, l = Array.from(n).map((e, n) => {
                        let i = null != s ? s[n] : {};
                        return new d.CloudUpload({
                            file: e,
                            platform: f.UploadPlatform.WEB,
                            isThumbnail: a,
                            ...i
                        }, t)
                    });
                    M({
                        channelId: t,
                        uploads: l,
                        draftType: i
                    })
                },
                upload: function e(t) {
                    let {
                        channelId: n,
                        file: o,
                        draftType: u,
                        message: c,
                        hasSpoiler: d,
                        filename: f
                    } = t, h = {
                        content: "",
                        tts: !1,
                        hasSpoiler: d,
                        filename: f
                    };
                    if (null != c) {
                        h.content = c.content, h.tts = c.tts, h.channel_id = c.channel_id;
                        let e = g.default.getPendingReply(n);
                        if (null != e) {
                            let t = l.default.getSendMessageOptionsForReply(e);
                            h.type = N.MessageTypes.REPLY, h.message_reference = t.messageReference, h.allowed_mentions = t.allowedMentions, (0, _.deletePendingReply)(n)
                        }
                    }
                    let p = new m.default(N.Endpoints.MESSAGES(n));
                    p.on("start", e => {
                        a.default.dispatch({
                            type: "UPLOAD_START",
                            channelId: n,
                            file: e,
                            uploader: p
                        })
                    }), p.on("progress", e => {
                        a.default.dispatch({
                            type: "UPLOAD_PROGRESS",
                            channelId: n,
                            file: e
                        })
                    }), p.on("error", (t, d) => {
                        if (a.default.dispatch({
                                type: "UPLOAD_FAIL",
                                channelId: n,
                                file: t
                            }), (0, E.logMessageSendFailure)({
                                fileItems: t.items,
                                failureCode: d
                            }), d === N.AbortCodes.EXPLICIT_CONTENT) {
                            l.default.sendClydeError(n, d);
                            return
                        }(0, r.openUploadError)({
                            title: v.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                            help: v.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_HELP.format({
                                onClick: () => {
                                    (0, i.closeModal)(r.UPLOAD_ERROR_MODAL_KEY), e({
                                        channelId: n,
                                        file: o,
                                        draftType: u,
                                        message: c
                                    })
                                }
                            })
                        }), "" !== h.content && "" === A.default.getDraft(n, u) && s.default.saveDraft(n, h.content, u)
                    }), p.on("complete", e => {
                        a.default.dispatch({
                            type: "UPLOAD_COMPLETE",
                            channelId: n,
                            file: e
                        })
                    }), p.upload(o, h)
                },
                uploadFiles: M,
                cancel(e) {
                    if (a.default.dispatch({
                            type: "UPLOAD_CANCEL_REQUEST",
                            file: e
                        }), null != e.draftContent && null != e.channelId) {
                        let t = A.default.getDraft(e.channelId, A.DraftType.ChannelMessage);
                        "" === t && a.default.dispatch({
                            type: "DRAFT_SAVE",
                            channelId: e.channelId,
                            draft: e.draftContent,
                            draftType: A.DraftType.ChannelMessage
                        })
                    }
                }
            }
        },
        57155: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return ee
                }
            }), n("222007"), n("424973"), n("860677"), n("70102");
            var i = n("37983"),
                a = n("884691"),
                s = n("414456"),
                l = n.n(s),
                o = n("627445"),
                r = n.n(o),
                u = n("917351"),
                c = n.n(u),
                d = n("509043"),
                f = n("446674"),
                m = n("819855"),
                h = n("77078"),
                p = n("430568"),
                T = n("145079"),
                E = n("87657"),
                R = n("206230"),
                _ = n("867805"),
                g = n("584375"),
                S = n("430475"),
                A = n("390236"),
                I = n("185014"),
                C = n("875978"),
                O = n("512306"),
                N = n("941723"),
                v = n("166257"),
                M = n("432173"),
                y = n("300322"),
                j = n("161778"),
                U = n("42203"),
                P = n("26989"),
                b = n("486996"),
                x = n("377253"),
                L = n("957255"),
                D = n("27618"),
                B = n("697218"),
                F = n("145131"),
                w = n("945330"),
                k = n("315102"),
                V = n("402671"),
                G = n("387111"),
                H = n("441823"),
                K = n("49111"),
                z = n("782340"),
                W = n("324673"),
                Y = n("926622");

            function J(e) {
                return null == e.id ? _.default.convertSurrogateToName(e.name) : ":".concat(e.name, ":")
            }
            let X = e => {
                let {
                    emoji: t,
                    channelId: n,
                    messageId: s
                } = e, [o, r] = a.useState(!0), [u, c] = a.useState([]), d = a.useMemo(() => {
                    if (null == u || u.length < 1) return;
                    let e = (0, N.buildEffect)(t, u[0], n, {
                        emojiSize: O.BurstReactionSize.LARGE,
                        messageId: s
                    });
                    return (0, i.jsx)(O.default, {
                        className: W.effect,
                        effect: e,
                        emojiSize: O.BurstReactionSize.LARGE,
                        onComplete: () => r(!1)
                    })
                }, [u, t, n, s]);
                return a.useEffect(() => {
                    let e = !1;
                    return r(!0), !async function() {
                        let n = await (0, V.getEmojiColors)(t);
                        Array.isArray(n) && n.length > 0 && !e && c(n)
                    }(), () => {
                        e = !0
                    }
                }, [t]), (0, i.jsxs)("div", {
                    className: W.burstEmojiSection,
                    children: [d, (0, i.jsx)(p.default, {
                        className: l(W.burstEmoji, {
                            [W.hideEmoji]: o
                        }),
                        emojiId: t.id,
                        emojiName: t.name,
                        animated: t.animated,
                        size: "reaction"
                    }), (0, i.jsx)(h.Text, {
                        variant: "text-md/medium",
                        children: J(t)
                    })]
                })
            };
            class q extends a.PureComponent {
                render() {
                    let {
                        emoji: e,
                        count: t,
                        isSelected: n,
                        setSelected: a,
                        reactionType: s,
                        colors: o
                    } = this.props, r = J(e), u = function(e, t, n, a) {
                        let s = null == e.id ? V.default.getURL(e.name) : k.default.getEmojiURL({
                            id: e.id,
                            animated: e.animated,
                            size: 24
                        });
                        return null != s && "" !== s ? (0, i.jsx)("img", {
                            className: n,
                            src: s,
                            alt: e.name
                        }) : (0, i.jsx)("span", {
                            className: a,
                            children: e.name
                        })
                    }(e, 24, W.emoji, l(W.emoji, W.emojiText)), c = s === C.ReactionTypes.BURST, f = c ? z.default.Messages.BURST_REACTION_REACTORS_A11Y : z.default.Messages.REACTION_REACTORS_A11Y, m = f.format({
                        name: r,
                        n: t
                    }), p = {}, T = {};
                    if (c) {
                        let {
                            backgroundColor: e = "",
                            opacity: t = 1,
                            accentColor: i = ""
                        } = null != o ? o : {};
                        if (T.color = i, n) {
                            var E;
                            p.background = null !== (E = (0, d.hex2rgb)(e, t)) && void 0 !== E ? E : ""
                        }
                    }
                    return (0, i.jsx)(h.Tooltip, {
                        position: "left",
                        text: r,
                        children: o => {
                            let {
                                onMouseEnter: r,
                                onMouseLeave: c
                            } = o;
                            return (0, i.jsxs)(h.Clickable, {
                                className: l({
                                    [W.reactionDefault]: !n,
                                    [W.reactionSelected]: n
                                }),
                                "aria-label": m,
                                onClick: () => a({
                                    emoji: e,
                                    reactionType: s
                                }),
                                onMouseEnter: r,
                                onMouseLeave: c,
                                style: p,
                                children: [u, (0, i.jsx)(h.Text, {
                                    variant: "text-sm/bold",
                                    style: T,
                                    children: t
                                })]
                            })
                        }
                    })
                }
            }

            function Z(e) {
                let {
                    emoji: t,
                    user: n,
                    message: a,
                    channel: s,
                    guildId: l,
                    reactionType: o,
                    onRemoveReactor: u
                } = e, c = B.default.getCurrentUser(), d = (0, f.useStateFromStores)([B.default], () => B.default.getUser(n.id), [n]);
                r(null != c, "Reactor: currentUser cannot be undefined");
                let m = (0, y.useIsActiveChannelOrUnarchivableThread)(s),
                    p = (0, f.useStateFromStores)([L.default], () => L.default.can(K.Permissions.MANAGE_MESSAGES, s) && m),
                    R = p || c.id === n.id,
                    _ = (0, f.useStateFromStores)([P.default, U.default, D.default], () => G.default.getName(l, s.id, n));
                return (0, i.jsxs)(F.default, {
                    className: W.reactorDefault,
                    onContextMenu: e => (0, H.openUserContextMenu)(e, n, s),
                    align: F.default.Align.CENTER,
                    children: [(0, i.jsx)(F.default.Child, {
                        wrap: !0,
                        grow: 0,
                        shrink: 0,
                        className: Y.marginReset,
                        children: (0, i.jsx)(E.default, {
                            user: null != d ? d : n,
                            size: h.AvatarSizes.SIZE_24
                        })
                    }), (0, i.jsx)(F.default.Child, {
                        children: (0, i.jsxs)(h.Text, {
                            tag: "strong",
                            variant: "text-md/normal",
                            className: W.name,
                            children: [null != _ && "" !== _ && (0, i.jsx)("span", {
                                className: n.isPomelo() ? "" : W.nickname,
                                children: _
                            }), (0, i.jsx)(T.default, {
                                user: n,
                                className: null != _ && "" !== _ ? W.tagFaded : null,
                                usernameClass: W.username,
                                discriminatorClass: W.discriminator,
                                forceUsername: !0
                            })]
                        })
                    }), R && (0, i.jsx)(h.Clickable, {
                        onClick: function() {
                            v.removeReactionWithConfirmation({
                                emoji: t,
                                userId: n.id,
                                channelId: s.id,
                                messageId: a.id,
                                reactionType: o,
                                isMe: (null == c ? void 0 : c.id) === n.id
                            }), null == u || u()
                        },
                        children: (0, i.jsx)(w.default, {
                            width: 16,
                            height: 16,
                            className: W.remove
                        })
                    })]
                })
            }
            class Q extends a.PureComponent {
                componentDidMount() {
                    this.loadMore()
                }
                componentDidUpdate(e) {
                    (!c.isEqual(this.props.reaction, e.reaction) || this.props.reactionType !== e.reactionType) && this.setState({
                        lastId: null,
                        loadingMore: !1
                    }, () => this.loadMore())
                }
                loadMore() {
                    let {
                        message: e,
                        reaction: t,
                        reactionType: n
                    } = this.props, {
                        lastId: i
                    } = this.state;
                    this.setState({
                        loadingMore: !0
                    }), v.getReactors({
                        channelId: e.getChannelId(),
                        messageId: e.id,
                        emoji: t.emoji,
                        limit: K.DEFAULT_NUM_REACTION_USERS,
                        after: i,
                        type: n
                    }).then(e => {
                        var t;
                        return this.setState({
                            loadingMore: !1,
                            lastId: null === (t = e[e.length - 1]) || void 0 === t ? void 0 : t.id
                        })
                    })
                }
                renderSection() {
                    return null
                }
                render() {
                    let {
                        hasMore: e,
                        reactors: t,
                        reaction: n,
                        message: a,
                        reactionType: s
                    } = this.props, l = [];
                    return 0 === t.length && this.state.loadingMore ? l.push(length) : (l.push(t.length), e && l.push(1)), (0, i.jsxs)("div", {
                        className: W.reactorsContainer,
                        children: [s === C.ReactionTypes.BURST && (0, i.jsx)(X, {
                            emoji: n.emoji,
                            channelId: a.getChannelId(),
                            messageId: a.id
                        }), (0, i.jsx)(h.List, {
                            className: W.reactors,
                            fade: !0,
                            ref: this.scrollerRef,
                            sections: l,
                            sectionHeight: 0,
                            rowHeight: this.getRowHeight,
                            renderRow: this.renderRow,
                            renderSection: this.renderSection,
                            onScroll: e ? this.handleScroll : void 0
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.scrollerRef = a.createRef(), this.state = {
                        lastId: null,
                        loadingMore: !1
                    }, this.handleScroll = () => {
                        let {
                            current: e
                        } = this.scrollerRef;
                        if (null == e) return;
                        let t = e.getScrollerState();
                        t.scrollTop + t.offsetHeight >= t.scrollHeight - 44 && this.props.hasMore && !this.state.loadingMore && this.loadMore()
                    }, this.getRowHeight = (e, t) => {
                        let {
                            reactors: n
                        } = this.props;
                        if (1 === e) return 0 === t ? 44 : 0;
                        if (0 === e) {
                            if (0 === t && 0 === n.length) return 440;
                            if (null != this.props.reactors[t]) return 44
                        }
                        return 0
                    }, this.renderRow = e => {
                        let {
                            section: t,
                            row: n
                        } = e, {
                            message: a,
                            guildId: s,
                            channel: l,
                            reaction: o,
                            reactors: r,
                            reactionType: u
                        } = this.props, c = r[n];
                        if (1 === t) return 0 === n ? (0, i.jsx)(h.Spinner, {
                            className: W.spinnerMore
                        }, "hasMore") : null;
                        return 0 === r.length && this.state.loadingMore ? (0, i.jsx)(h.Spinner, {
                            className: W.spinner
                        }, "loadingMore") : null != c && (0, i.jsx)(Z, {
                            message: a,
                            emoji: o.emoji,
                            guildId: s,
                            channel: l,
                            user: c,
                            reaction: o,
                            reactionType: u
                        }, c.id)
                    }
                }
            }
            let $ = f.default.connectStores([b.default], e => {
                let {
                    message: t,
                    reaction: n,
                    reactionType: i
                } = e, a = b.default.getReactions(t.getChannelId(), t.id, n.emoji, K.DEFAULT_NUM_REACTION_USERS, i);
                if (null == a) return {
                    reactors: [],
                    hasMore: !1
                };
                let s = Object.values(a),
                    l = i === C.ReactionTypes.BURST ? n.burst_count : n.count,
                    o = l > s.length;
                return {
                    reactors: s,
                    hasMore: o
                }
            })(Q);

            function ee(e) {
                var t;
                let {
                    message: n,
                    selectedReaction: s,
                    onClose: l,
                    transitionState: o
                } = e, r = (0, f.useStateFromStores)([U.default], () => U.default.getChannel(n.getChannelId())), u = null == r ? void 0 : r.getGuildId(), c = (0, f.useStateFromStores)([x.default, S.default, I.default], () => {
                    var e, t, i;
                    let a = null !== (i = null !== (t = x.default.getMessage(n.getChannelId(), n.id)) && void 0 !== t ? t : null === (e = S.default.getMessage(n.id)) || void 0 === e ? void 0 : e.firstMessage) && void 0 !== i ? i : null != u ? I.default.getCachedMessage(u, n.getChannelId(), n.id) : void 0;
                    return null != a ? a.reactions : []
                }, [n, u]);
                let d = (t = c, a.useMemo(() => {
                        let e = [];
                        return t.forEach(t => {
                            t.burst_count > 0 && e.push({
                                ...t,
                                count: 0
                            }), t.count > 0 && e.push({
                                ...t,
                                burst_count: 0
                            })
                        }), e.sort((e, t) => {
                            let n = e.burst_count > 0 ? e.burst_count : e.count,
                                i = t.burst_count > 0 ? t.burst_count : t.count;
                            return i - n
                        }), e
                    }, [t])),
                    p = d[0],
                    T = null != p ? {
                        emoji: p.emoji,
                        reactionType: p.burst_count > 0 ? C.ReactionTypes.BURST : C.ReactionTypes.NORMAL
                    } : null,
                    [E, _] = function(e, t, n) {
                        let [i, s] = a.useState(null != e ? e : t);
                        return a.useEffect(() => {
                            if (null != i) {
                                let e = n.find(e => {
                                    let t = e.burst_count > 0 ? C.ReactionTypes.BURST : C.ReactionTypes.NORMAL;
                                    return e.emoji === i.emoji && t === i.reactionType
                                });
                                null == e && s(t)
                            }
                        }, [i, s, n, t]), [i, s]
                    }(s, T, c),
                    O = a.useMemo(() => {
                        var e;
                        return null == E ? null : null !== (e = c.find(e => (0, M.emojiEquals)(e.emoji, E.emoji))) && void 0 !== e ? e : null
                    }, [c, E]),
                    N = (0, f.useStateFromStores)([R.default], () => R.default.saturation),
                    v = (0, f.useStateFromStores)([j.default], () => (0, m.isThemeDark)(j.default.theme));
                if (a.useEffect(() => {
                        (0 === c.length || null == E && null == O) && setImmediate(l)
                    }, [l, c.length, O, E]), null == E || null == O) return (0, i.jsx)(h.Spinner, {});
                if (null == r) throw Error("MessageReactions.render: Message does not have a channelId");
                return (0, i.jsx)(A.default.Provider, {
                    value: null != u ? u : void 0,
                    children: (0, i.jsxs)(h.ModalRoot, {
                        "aria-label": z.default.Messages.REACTIONS,
                        transitionState: o,
                        size: h.ModalSize.DYNAMIC,
                        className: W.container,
                        children: [(0, i.jsx)(h.Scroller, {
                            className: W.scroller,
                            fade: !0,
                            children: d.map(e => {
                                var t;
                                let n = e.burst_count > 0;
                                return (0, i.jsx)(q, {
                                    isSelected: et(E, e, n ? C.ReactionTypes.BURST : C.ReactionTypes.NORMAL),
                                    setSelected: _,
                                    reactionType: n ? C.ReactionTypes.BURST : C.ReactionTypes.NORMAL,
                                    emoji: e.emoji,
                                    count: n ? e.burst_count : e.count,
                                    colors: null != e.burst_colors ? (0, g.buildEmojiColorPalette)(e.burst_colors, N, v) : void 0
                                }, "".concat(n ? "burst-" : "normal-").concat(null !== (t = e.emoji.id) && void 0 !== t ? t : "", ":").concat(e.emoji.name))
                            })
                        }), (0, i.jsx)($, {
                            message: n,
                            reaction: O,
                            guildId: u,
                            channel: r,
                            reactionType: E.reactionType
                        })]
                    })
                })
            }
            let et = (e, t, n) => c.isEqual(e.emoji, t.emoji) && e.reactionType === n
        },
        281862: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PinIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...r
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, s.default)(r),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M19.38 11.38a3 3 0 0 0 4.24 0l.03-.03a.5.5 0 0 0 0-.7L13.35.35a.5.5 0 0 0-.7 0l-.03.03a3 3 0 0 0 0 4.24L13 5l-2.92 2.92-3.65-.34a2 2 0 0 0-1.6.58l-.62.63a1 1 0 0 0 0 1.42l9.58 9.58a1 1 0 0 0 1.42 0l.63-.63a2 2 0 0 0 .58-1.6l-.34-3.64L19 11l.38.38ZM9.07 17.07a.5.5 0 0 1-.08.77l-5.15 3.43a.5.5 0 0 1-.63-.06l-.42-.42a.5.5 0 0 1-.06-.63L6.16 15a.5.5 0 0 1 .77-.08l2.14 2.14Z",
                        className: o
                    })
                })
            }
        },
        681736: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("424973");
            var i, a = n("872717"),
                s = n("448993"),
                l = n("981112"),
                o = n("966724"),
                r = n("980134"),
                u = n("782340");
            i = class extends l.default {
                async uploadFiles(e, t) {
                    let {
                        addFilesTo: n
                    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    super.upload({
                        name: u.default.Messages.ATTACHMENT_PROCESSING
                    }, t, e);
                    let i = new AbortController;
                    try {
                        if (this.files = e, this._aborted) return;
                        if (this._handleStart(() => i.abort()), !await this.compressAndCheckFileSize()) return;
                        this.setUploadingTextForUI(), await (0, l.stageAttachmentFiles)(this.files, !0, this._recomputeProgress.bind(this))
                    } catch (e) {
                        this._handleException(e)
                    }
                    try {
                        return await this._createMessage(i.signal, t, n)
                    } catch (e) {
                        if (this._raiseEndpointErrors) throw e;
                        this._handleException(e)
                    }
                }
                async _createMessage(e, t, n) {
                    let i;
                    let l = [];
                    this.files.forEach((e, t) => {
                        let n = (0, r.getAttachmentPayload)(e, t);
                        e.item.platform === o.UploadPlatform.WEB && l.push({
                            ...n
                        })
                    }), i = null != n && null != t ? this._addAttachmentsToPayload(t, n, l) : {
                        ...t,
                        attachments: l
                    };
                    let u = {
                            url: this._url,
                            body: i,
                            signal: e
                        },
                        c = "POST" === this._method ? a.default.post : a.default.patch;
                    try {
                        let e = await c(u);
                        return this._handleComplete(e.body), e.body
                    } catch (e) {
                        var d;
                        if (this._raiseEndpointErrors) throw new s.APIError(e);
                        this._handleError({
                            code: null == e ? void 0 : null === (d = e.body) || void 0 === d ? void 0 : d.code,
                            body: null == e ? void 0 : e.body
                        })
                    }
                }
                constructor(e, t = "POST", n) {
                    super(e, t, n)
                }
            }
        },
        58533: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
            var i = n("37983"),
                a = n("884691"),
                s = n("516555"),
                l = n("907002"),
                o = n("458960"),
                r = n("430568"),
                u = n("526887"),
                c = n("590527"),
                d = n("983782"),
                f = n("315102"),
                m = n("402671"),
                h = n("172858"),
                p = n("612683");
            let T = [];

            function E(e) {
                let {
                    messageId: t,
                    emoji: n,
                    startPosition: E,
                    targetPosition: R
                } = e, [_, g] = a.useState(0), [S, A] = a.useState(0), [I, C] = a.useState(null), {
                    confettiCanvas: O
                } = a.useContext(u.ConfettiCannonContext), N = (0, s.useConfettiCannon)(O, I), v = a.useMemo(() => {
                    let e = null == n.id ? m.default.getURL(n.name) : f.default.getEmojiURL({
                        id: n.id,
                        animated: !1,
                        size: 22
                    });
                    return [{
                        src: e,
                        colorize: !1
                    }]
                }, [n.name, n.id]), M = R.x - R.width / 2 * .5, y = R.y - R.height / 2 * .5, j = (0, l.useSpring)({
                    from: {
                        y: E.y
                    },
                    to: {
                        y: y
                    },
                    config: {
                        duration: 450,
                        easing: o.default.Easing.in(o.default.Easing.exp)
                    },
                    onChange: e => {
                        let {
                            y: t
                        } = e;
                        A(t)
                    }
                }), U = (0, l.useSpring)({
                    from: {
                        x: E.x,
                        scale: 1,
                        opacity: 1
                    },
                    to: {
                        x: M,
                        scale: .5,
                        opacity: .4
                    },
                    config: {
                        duration: 450,
                        easing: o.default.Easing.in(o.default.Easing.ease)
                    },
                    onRest: () => {
                        (0, c.clearReactionPickerAnimation)(t, n.name, n.id)
                    },
                    onChange: e => {
                        let {
                            x: t
                        } = e;
                        g(t)
                    }
                });
                return a.useEffect(() => {
                    _ > 0 && S > 0 && N.createConfetti({
                        ...h.COMMON_CONFETTI_BASE_CONFIG,
                        position: {
                            type: "static",
                            value: {
                                x: _,
                                y: S
                            }
                        }
                    })
                }, [N, _, S]), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(s.SpriteCanvas, {
                        ref: C,
                        sprites: v,
                        colors: T,
                        spriteWidth: h.COMMON_CONFETTI_MAX_SPRITE_SIZE,
                        spriteHeight: h.COMMON_CONFETTI_MAX_SPRITE_SIZE
                    }), (0, i.jsx)(d.default, {
                        children: (0, i.jsx)(l.animated.div, {
                            style: {
                                ...j
                            },
                            className: p.emojiContainer,
                            children: (0, i.jsx)(l.animated.div, {
                                style: {
                                    ...U,
                                    opacity: U.opacity
                                },
                                children: (0, i.jsx)(r.default, {
                                    className: p.emoji,
                                    emojiId: n.id,
                                    emojiName: n.name,
                                    animated: n.animated,
                                    size: "jumbo"
                                })
                            })
                        })
                    })]
                })
            }
        },
        102873: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useEmojiColorPalette: function() {
                    return r
                }
            });
            var i = n("446674"),
                a = n("819855"),
                s = n("206230"),
                l = n("161778"),
                o = n("584375");
            let r = e => {
                let t = (0, i.useStateFromStores)([s.default], () => s.default.saturation),
                    n = (0, i.useStateFromStores)([l.default], () => (0, a.isThemeDark)(l.default.theme));
                return (0, o.buildEmojiColorPalette)(e, t, n)
            }
        },
        13066: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LurkerModeUpsellPopoutTypes: function() {
                    return i
                },
                default: function() {
                    return T
                }
            }), n("222007");
            var i, a, s = n("37983"),
                l = n("884691"),
                o = n("446674"),
                r = n("77078"),
                u = n("851387"),
                c = n("476765"),
                d = n("449008"),
                f = n("267567"),
                m = n("49111"),
                h = n("782340"),
                p = n("404637");
            (a = i || (i = {}))[a.CHAT = 0] = "CHAT", a[a.REACTIONS = 1] = "REACTIONS";
            var T = e => {
                let {
                    type: t,
                    guild: i,
                    closePopout: a,
                    ctaRef: T
                } = e, E = (0, c.useUID)(), [R, _] = l.useState(!1), g = (0, o.useStateFromStores)([f.default], () => f.default.isLurking(i.id), [i.id]);
                l.useEffect(() => {
                    R && !g && a()
                }, [R, g, a]);
                let S = null,
                    A = h.default.Messages.LURKER_MODE_POPOUT_UPSELL_BODY;
                switch (t) {
                    case 0:
                        S = h.default.Messages.LURKER_MODE_POPOUT_CHAT_HEADER;
                        break;
                    case 1:
                        S = h.default.Messages.LURKER_MODE_POPOUT_REACTIONS_HEADER;
                        break;
                    default:
                        return (0, d.assertNever)(t)
                }
                if (null == S) return null;
                let I = async () => {
                    _(!0);
                    try {
                        await u.default.joinGuild(i.id, {
                            source: m.JoinGuildSources.CHAT_INPUT_BLOCKER
                        }), a()
                    } catch {
                        _(!1)
                    }
                };
                return (0, s.jsxs)(r.Dialog, {
                    className: p.container,
                    "aria-labelledby": E,
                    children: [(0, s.jsx)("img", {
                        alt: "",
                        className: p.image,
                        src: n("748301")
                    }), (0, s.jsxs)("div", {
                        className: p.content,
                        children: [(0, s.jsx)(r.Heading, {
                            variant: "heading-md/semibold",
                            id: E,
                            children: S
                        }), (0, s.jsx)(r.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: A
                        }), (0, s.jsxs)("div", {
                            className: p.buttonContainer,
                            children: [(0, s.jsx)(r.Button, {
                                buttonRef: T,
                                onClick: I,
                                submitting: R,
                                children: h.default.Messages.LURKER_MODE_POPOUT_JOIN
                            }), (0, s.jsx)(r.Button, {
                                onClick: a,
                                look: r.Button.Looks.BLANK,
                                className: p.cancel,
                                children: h.default.Messages.LURKER_MODE_POPOUT_CANCEL
                            })]
                        })]
                    })]
                })
            }
        },
        15935: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BurstReactionEffectSource: function() {
                    return i
                },
                default: function() {
                    return m
                }
            }), n("222007");
            var i, a, s = n("446674"),
                l = n("913144");
            (a = i || (i = {})).HOVER = "HOVER", a.EXTERNAL = "EXTERNAL", a.RANDOM = "RANDOM";
            let o = {},
                r = {},
                u = {},
                c = (e, t) => {
                    let n = null != t.id ? t.id : t.name;
                    return "".concat(e, ":").concat(n)
                },
                d = (e, t) => {
                    var n;
                    let i;
                    switch (e) {
                        case "HOVER":
                            i = "HOVER";
                            break;
                        case "RANDOM":
                            i = "RANDOM";
                            break;
                        default:
                            i = "EXTERNAL"
                    }
                    let a = Object.entries(null !== (n = r[t]) && void 0 !== n ? n : {}),
                        s = a.filter(e => {
                            let [, t] = e;
                            return t === i
                        }),
                        l = Object.fromEntries(s);
                    if (Object.keys(l).length >= 5 && "EXTERNAL" === e) {
                        for (let e in l)
                            if (null == u[t] || null == u[t][e]) {
                                delete r[t][e], delete l[e];
                                break
                            }
                    }
                    return Object.keys(l).length
                };
            class f extends s.default.Store {
                getReactionPickerAnimation(e, t, n) {
                    return o["".concat(e, ":").concat(t, ":").concat(null != n ? n : "")]
                }
                getEffectForEmojiId(e, t, n) {
                    var i;
                    let a = c(t, n);
                    return null === (i = r[e]) || void 0 === i ? void 0 : i[a]
                }
            }
            f.displayName = "BurstReactionEffectsStore";
            var m = new f(l.default, {
                BURST_REACTION_EFFECT_CLEAR: e => {
                    var t;
                    let {
                        channelId: n,
                        messageId: i,
                        emoji: a
                    } = e, s = c(i, a);
                    null === (t = r[n]) || void 0 === t || delete t[s]
                },
                BURST_REACTION_EFFECT_PLAY: e => {
                    var t, n, i;
                    let {
                        channelId: a,
                        messageId: s,
                        emoji: l,
                        key: o
                    } = e, f = c(s, l);
                    if (d(o, a) >= 5) return;
                    let m = null !== (t = r[a]) && void 0 !== t ? t : {},
                        h = null !== (n = u[a]) && void 0 !== n ? n : {},
                        p = h[f],
                        T = m[f];
                    if ("HOVER" !== o || null == T) {
                        "HOVER" === T && "EXTERNAL" === o && null != p && ("function" == typeof p.destroy && p.destroy(), null === (i = u[a]) || void 0 === i || delete i[f], T = void 0);
                        null == T && (null != r[a] ? r[a][f] = o : r[a] = {
                            [f]: o
                        })
                    }
                },
                BURST_REACTION_ANIMATION_ADD: e => {
                    let {
                        channelId: t,
                        messageId: n,
                        emoji: i,
                        animation: a
                    } = e, s = c(n, i);
                    null == u[t] && (u[t] = {}), u[t][s] = a
                },
                BURST_REACTION_PICKER_ANIMATION_ADD: e => {
                    let {
                        messageId: t,
                        emojiName: n,
                        emojiId: i,
                        startPosition: a
                    } = e;
                    o["".concat(t, ":").concat(n, ":").concat(null != i ? i : "")] = a
                },
                BURST_REACTION_PICKER_ANIMATION_CLEAR: e => {
                    let {
                        messageId: t,
                        emojiName: n,
                        emojiId: i
                    } = e;
                    delete o["".concat(t, ":").concat(n, ":").concat(null != i ? i : "")]
                }
            })
        },
        103475: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BurstAnalyticTypes: function() {
                    return i
                },
                replaceAnimationColors: function() {
                    return l
                },
                getBurstAnimationHash: function() {
                    return o
                }
            }), n("781738");
            var i, a = n("917351"),
                s = n("284679");
            (i || (i = {})).OUT_OF_BURSTS = "out of burst reactions modal";
            let l = (e, t) => {
                    let n = (0, s.getComplimentaryPaletteForColor)([t.r, t.g, t.b], 2);
                    return e = (e = e.replace(/(\[1,0,0,)/g, "[".concat(n[0][0] / 255, ",").concat(n[0][1] / 255, ",").concat(n[0][2] / 255, ","))).replace(/\[0,0,1,/g, "[".concat(n[1][0] / 255, ",").concat(n[1][1] / 255, ",").concat(n[1][2] / 255, ","))
                },
                o = (0, a.memoize)(e => {
                    let t = 0;
                    for (let n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n);
                    return Math.abs(t)
                })
        },
        569512: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getBurstAnimation: function() {
                    return s
                }
            });
            var i = n("103475");
            let a = [{
                    load: () => n.el("448779").then(n.t.bind(n, "448779", 19))
                }, {
                    load: () => n.el("734436").then(n.t.bind(n, "734436", 19))
                }, {
                    load: () => n.el("494925").then(n.t.bind(n, "494925", 19))
                }, {
                    load: () => n.el("199777").then(n.t.bind(n, "199777", 19))
                }, {
                    load: () => n.el("942466").then(n.t.bind(n, "942466", 19))
                }, {
                    load: () => n.el("56957").then(n.t.bind(n, "56957", 19))
                }, {
                    load: () => n.el("547173").then(n.t.bind(n, "547173", 19))
                }, {
                    load: () => n.el("485996").then(n.t.bind(n, "485996", 19))
                }, {
                    load: () => n.el("871996").then(n.t.bind(n, "871996", 19))
                }, {
                    load: () => n.el("584037").then(n.t.bind(n, "584037", 19))
                }, {
                    load: () => n.el("320512").then(n.t.bind(n, "320512", 19))
                }, {
                    load: () => n.el("925536").then(n.t.bind(n, "925536", 19))
                }, {
                    load: () => n.el("522373").then(n.t.bind(n, "522373", 19))
                }, {
                    load: () => n.el("837366").then(n.t.bind(n, "837366", 19))
                }, {
                    load: () => n.el("42949").then(n.t.bind(n, "42949", 19))
                }, {
                    load: () => n.el("294705").then(n.t.bind(n, "294705", 19))
                }, {
                    load: () => n.el("454599").then(n.t.bind(n, "454599", 19))
                }, {
                    load: () => n.el("814738").then(n.t.bind(n, "814738", 19))
                }],
                s = async function(e, t, n) {
                    arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    let s = (0, i.getBurstAnimationHash)("".concat(e).concat(t).concat(n)),
                        l = a[s % a.length];
                    return await l.load()
                }
        },
        583022: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = e => {
                let {
                    channel: t,
                    canChat: n,
                    renderReactions: i,
                    canAddNewReactions: a,
                    isLurking: s,
                    isGuest: l,
                    communicationDisabled: o,
                    isActiveChannelOrUnarchivableThread: r
                } = e, u = t.isPrivate(), c = t.isSystemDM(), d = (n || u) && r;
                return {
                    disableReactionReads: !i,
                    disableReactionCreates: s || l || !d || !((!0 === a || u) && !c && r),
                    disableReactionUpdates: s || l || !d || !0 === o
                }
            }
        },
        255135: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                },
                openOutOfBurstsModal: function() {
                    return h
                }
            });
            var i = n("37983"),
                a = n("884691"),
                s = n("77078"),
                l = n("432173"),
                o = n("599110"),
                r = n("103475"),
                u = n("49111"),
                c = n("782340"),
                d = n("936102");
            let f = n("257809");

            function m(e) {
                let {
                    onClose: t,
                    transitionState: n
                } = e;
                a.useEffect(() => {
                    o.default.track(u.AnalyticEvents.OPEN_MODAL, {
                        type: r.BurstAnalyticTypes.OUT_OF_BURSTS
                    })
                }, []);
                let m = (0, l.useNextReplenishmentMessage)();
                return (0, i.jsxs)(s.ModalRoot, {
                    className: d.root,
                    "aria-label": c.default.Messages.SUPER_REACTION_OUT_OF_BURSTS,
                    transitionState: n,
                    children: [(0, i.jsx)("img", {
                        className: d.art,
                        alt: "",
                        src: f
                    }), (0, i.jsxs)(s.ModalContent, {
                        className: d.content,
                        children: [(0, i.jsx)(s.Heading, {
                            className: d.header,
                            variant: "heading-xl/semibold",
                            children: c.default.Messages.SUPER_REACTION_OUT_OF_BURSTS
                        }), (0, i.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: m
                        }), (0, i.jsx)(s.Button, {
                            className: d.button,
                            onClick: t,
                            size: s.Button.Sizes.SMALL,
                            color: s.Button.Colors.BRAND,
                            children: c.default.Messages.TUTORIAL_CLOSE
                        })]
                    })]
                })
            }

            function h() {
                (0, s.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("255135").then(n.bind(n, "255135"));
                    return t => (0, i.jsx)(e, {
                        ...t
                    })
                })
            }
        },
        331011: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getReactionTooltipText: function() {
                    return f
                }
            });
            var i = n("917351"),
                a = n.n(i),
                s = n("432173"),
                l = n("42203"),
                o = n("486996"),
                r = n("27618"),
                u = n("387111"),
                c = n("875978"),
                d = n("782340");

            function f(e, t) {
                var n;
                let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.ReactionTypes.NORMAL,
                    f = arguments.length > 3 ? arguments[3] : void 0,
                    m = o.default.getReactions(e.getChannelId(), e.id, t, 3, i),
                    h = l.default.getChannel(e.getChannelId()),
                    p = null == h || h.isPrivate() ? null : h.getGuildId(),
                    T = e.getReaction(t),
                    E = i === c.ReactionTypes.BURST,
                    R = a(m).reject(e => r.default.isBlocked(e.id)).take(3).map(e => u.default.getName(p, null == h ? void 0 : h.id, e)).value();
                if (0 === R.length) return "";
                let _ = {
                        standard: {
                            reactionTooltip1NInteractive: d.default.Messages.REACTION_TOOLTIP_1_N_INTERACTIVE,
                            reactionTooltip1N: d.default.Messages.REACTION_TOOLTIP_1_N,
                            reactionTooltip1: d.default.Messages.REACTION_TOOLTIP_1,
                            reactionTooltip2NInteractive: d.default.Messages.REACTION_TOOLTIP_2_N_INTERACTIVE,
                            reactionTooltip2N: d.default.Messages.REACTION_TOOLTIP_2_N,
                            reactionTooltip2: d.default.Messages.REACTION_TOOLTIP_2,
                            reactionTooltip3NInteractive: d.default.Messages.REACTION_TOOLTIP_3_N_INTERACTIVE,
                            reactionTooltip3N: d.default.Messages.REACTION_TOOLTIP_3_N,
                            reactionTooltip3: d.default.Messages.REACTION_TOOLTIP_3,
                            reactionTooltipNInteractive: d.default.Messages.REACTION_TOOLTIP_N_INTERACTIVE,
                            reactionTooltipN: d.default.Messages.REACTION_TOOLTIP_N
                        },
                        burst: {
                            reactionTooltip1NInteractive: d.default.Messages.BURST_REACTION_TOOLTIP_1_N_INTERACTIVE,
                            reactionTooltip1N: d.default.Messages.BURST_REACTION_TOOLTIP_1_N,
                            reactionTooltip1: d.default.Messages.BURST_REACTION_TOOLTIP_1,
                            reactionTooltip2NInteractive: d.default.Messages.BURST_REACTION_TOOLTIP_2_N_INTERACTIVE,
                            reactionTooltip2N: d.default.Messages.BURST_REACTION_TOOLTIP_2_N,
                            reactionTooltip2: d.default.Messages.BURST_REACTION_TOOLTIP_2,
                            reactionTooltip3NInteractive: d.default.Messages.BURST_REACTION_TOOLTIP_3_N_INTERACTIVE,
                            reactionTooltip3N: d.default.Messages.BURST_REACTION_TOOLTIP_3_N,
                            reactionTooltip3: d.default.Messages.BURST_REACTION_TOOLTIP_3,
                            reactionTooltipNInteractive: d.default.Messages.BURST_REACTION_TOOLTIP_N_INTERACTIVE,
                            reactionTooltipN: d.default.Messages.BURST_REACTION_TOOLTIP_N
                        }
                    },
                    g = E ? _.burst : _.standard,
                    S = null !== (n = E ? null == T ? void 0 : T.burst_count : null == T ? void 0 : T.count) && void 0 !== n ? n : 0,
                    A = Math.max(0, S - R.length),
                    I = (0, s.getReactionEmojiName)(t);
                if (1 === R.length) return A > 0 ? null != f ? g.reactionTooltip1NInteractive.format({
                    a: R[0],
                    n: A,
                    emojiName: I,
                    onClick: f
                }) : g.reactionTooltip1N.format({
                    a: R[0],
                    n: A,
                    emojiName: I
                }) : g.reactionTooltip1.format({
                    a: R[0],
                    emojiName: I
                });
                if (2 === R.length) return A > 0 ? null != f ? g.reactionTooltip2NInteractive.format({
                    a: R[0],
                    b: R[1],
                    n: A,
                    emojiName: I,
                    onClick: f
                }) : g.reactionTooltip2N.format({
                    a: R[0],
                    b: R[1],
                    n: A,
                    emojiName: I
                }) : g.reactionTooltip2.format({
                    a: R[0],
                    b: R[1],
                    emojiName: I
                });
                if (3 === R.length) return A > 0 ? null != f ? g.reactionTooltip3NInteractive.format({
                    a: R[0],
                    b: R[1],
                    c: R[2],
                    n: A,
                    emojiName: I,
                    onClick: f
                }) : g.reactionTooltip3N.format({
                    a: R[0],
                    b: R[1],
                    c: R[2],
                    n: A,
                    emojiName: I
                }) : g.reactionTooltip3.format({
                    a: R[0],
                    b: R[1],
                    c: R[2],
                    emojiName: I
                });
                else return null != f ? g.reactionTooltipNInteractive.format({
                    n: A,
                    emojiName: I,
                    onClick: f
                }) : g.reactionTooltipN.format({
                    n: A,
                    emojiName: I
                })
            }
        },
        350134: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                REACTION_MIN_WIDTH_DIGITS: function() {
                    return ef
                },
                showReactionsModal: function() {
                    return em
                },
                isMeReaction: function() {
                    return eh
                },
                Reaction: function() {
                    return eT
                }
            }), n("222007");
            var i = n("37983"),
                a = n("884691"),
                s = n("414456"),
                l = n.n(s),
                o = n("748820"),
                r = n("458960"),
                u = n("509043"),
                c = n("446674"),
                d = n("151426"),
                f = n("862337"),
                m = n("130969"),
                h = n("77078"),
                p = n("430568"),
                T = n("57155"),
                E = n("206230"),
                R = n("716241"),
                _ = n("10641"),
                g = n("58533"),
                S = n("385976"),
                A = n("858619"),
                I = n("102873"),
                C = n("865453"),
                O = n("233322"),
                N = n("252931"),
                v = n("529932"),
                M = n("446066"),
                y = n("13066"),
                j = n("785621"),
                U = n("638971"),
                P = n("635956"),
                b = n("85589"),
                x = n("166257"),
                L = n("432173"),
                D = n("845579"),
                B = n("42203"),
                F = n("305961"),
                w = n("486996"),
                k = n("162771"),
                V = n("697218"),
                G = n("471671"),
                H = n("738107"),
                K = n("791106"),
                z = n("256170"),
                W = n("216422"),
                Y = n("599110"),
                J = n("719923"),
                X = n("590527"),
                q = n("15935"),
                Z = n("692171"),
                Q = n("875978"),
                $ = n("412745"),
                ee = n("255135"),
                et = n("459698"),
                en = n("933629"),
                ei = n("331011"),
                ea = n("81924"),
                es = n("49111"),
                el = n("646718"),
                eo = n("782340"),
                er = n("154403"),
                eu = n("550244"),
                ec = n("314934"),
                ed = n("219468");
            let ef = 9;

            function em(e, t, n) {
                (0, h.openModal)(e => (0, i.jsx)(T.default, {
                    ...e,
                    message: t,
                    selectedReaction: n
                }))
            }

            function eh(e, t, n) {
                return n === Q.ReactionTypes.BURST && t || n === Q.ReactionTypes.NORMAL && e
            }
            class ep extends a.PureComponent {
                componentWillAppear(e) {
                    this.animateIn(e)
                }
                componentWillEnter(e) {
                    this.animateIn(e)
                }
                componentWillUnmount() {
                    this.hideTooltip()
                }
                animateIn(e) {
                    let {
                        autoUnfurlReactionTooltip: t
                    } = this.props;
                    G.default.isFocused() ? (this.scale.setValue(0), this.opacity.setValue(0), r.default.parallel([r.default.timing(this.scale, {
                        toValue: 1,
                        duration: t ? 200 : 300,
                        easing: r.default.Easing.inOut(r.default.Easing.back())
                    }), r.default.timing(this.opacity, {
                        toValue: 1,
                        duration: t ? 200 : 300
                    })]).start(e)) : (this.scale.setValue(1), this.opacity.setValue(1), e())
                }
                render() {
                    let e, t;
                    let {
                        count: n,
                        burst_count: a,
                        colors: s,
                        isBurstReaction: o,
                        hideCount: c,
                        emoji: d,
                        readOnly: f,
                        isLurking: m,
                        isGuest: T,
                        isPendingMember: E,
                        className: R,
                        useChatFontScaling: _,
                        message: S,
                        hideEmoji: A,
                        shouldShowFreeUserSentCoachmark: I,
                        onRenderFreeUserSentPopout: C,
                        animationStartPosition: O
                    } = this.props, {
                        shouldShowTooltip: N,
                        tooltipTextAria: v,
                        reactionRef: M,
                        tooltipPositionKey: y
                    } = this.state, U = _ ? ec : eu, P = {
                        transform: [{
                            scale: this.scale
                        }],
                        opacity: this.opacity
                    }, b = o ? a : n;
                    if (o && null != s) {
                        var x;
                        let {
                            accentColor: n,
                            backgroundColor: i,
                            opacity: a
                        } = s, l = null !== (x = (0, u.hex2rgb)(null != i ? i : "", a)) && void 0 !== x ? x : "";
                        this.isMe() && (P.borderColor = i), P.background = l, e = n, t = n
                    }
                    let D = null == M ? void 0 : M.getBoundingClientRect(),
                        B = null != O && null != D,
                        F = null == O;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(h.Popout, {
                            shouldShow: N,
                            "aria-label": null != v && v,
                            renderPopout: this.renderTooltip,
                            nudgeAlignIntoViewport: !0,
                            position: "top",
                            align: "center",
                            positionKey: y,
                            children: () => (0, i.jsx)("div", {
                                onMouseEnter: this.handleEnter,
                                onMouseLeave: this.handleLeave,
                                ref: this.handleSetReactionRef,
                                children: (0, i.jsx)(r.default.div, {
                                    className: l(U.reaction, R, {
                                        [U.reactionMe]: this.isMe(),
                                        [U.reactionReadOnly]: f && !m && !E && !T,
                                        [U.shakeReaction]: A && null == O
                                    }),
                                    style: P,
                                    children: (0, i.jsx)(h.Popout, {
                                        renderPopout: this.renderLurkerModeUpsellPopout,
                                        position: "top",
                                        children: n => (0, i.jsxs)(h.Clickable, {
                                            ...n,
                                            className: U.reactionInner,
                                            onClick: this.handleClick,
                                            "aria-disabled": f,
                                            "aria-label": (0, L.getAccessibleEmojiDisplayName)(this.isMe(), b, d, o),
                                            "aria-pressed": this.isMe(),
                                            children: [(0, i.jsx)("div", {
                                                className: l({
                                                    [U.burstGlow]: o
                                                }),
                                                style: {
                                                    boxShadow: "0 0 16px ".concat(t)
                                                }
                                            }), (0, i.jsxs)("div", {
                                                children: [o ? (0, i.jsxs)(i.Fragment, {
                                                    children: [B && (0, i.jsx)(g.default, {
                                                        messageId: S.id,
                                                        emoji: d,
                                                        startPosition: O,
                                                        targetPosition: D
                                                    }), F && (0, i.jsx)(ea.default, {
                                                        count: a,
                                                        emoji: d,
                                                        channelId: S.getChannelId(),
                                                        messageId: S.id,
                                                        useChatFontScaling: _,
                                                        color: t
                                                    })]
                                                }) : null, (0, i.jsx)(p.default, {
                                                    className: l({
                                                        [U.hideEmoji]: A
                                                    }),
                                                    emojiId: d.id,
                                                    emojiName: d.name,
                                                    size: "reaction",
                                                    animated: d.animated
                                                })]
                                            }), c ? null : (0, i.jsx)(H.default, {
                                                className: U.reactionCount,
                                                value: b,
                                                color: e,
                                                digitWidth: ef
                                            }), (0, i.jsx)(j.default, {
                                                count: b,
                                                reactionRef: M
                                            })]
                                        })
                                    })
                                })
                            })
                        }), o && I && null != C && (0, i.jsx)(h.Popout, {
                            renderPopout: C,
                            shouldShow: !0,
                            closeOnScroll: !0,
                            onRequestClose: this.handleDismissCoachmark,
                            children: e => (0, i.jsx)("div", {
                                className: U.hidden,
                                ...e
                            })
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.isReactionEventActive = !1, this.isKeyboardNavigation = !1, this.scale = new r.default.Value(1), this.opacity = new r.default.Value(1), this.timeout = new f.Timeout, this.hideTimeout = new f.Timeout, this.ctaRef = a.createRef(), this.type = Q.ReactionTypes.NORMAL, this.colors = {
                        backgroundColor: void 0,
                        borderColor: void 0,
                        textColor: void 0
                    }, this.state = {
                        shouldShowTooltip: !1,
                        tooltipText: null,
                        tooltipTextAria: null,
                        reactionRef: null,
                        tooltipPositionKey: void 0
                    }, this.hasShownTooltip = !1, this.nonce = (0, o.v4)(), this.userCanBurstReact = () => this.props.userHasPremium, this.handleClick = e => {
                        e.stopPropagation();
                        let {
                            message: t,
                            emoji: n,
                            readOnly: i,
                            isBurstReaction: a,
                            isPendingMember: s,
                            isLurking: l,
                            isGuest: o,
                            isForumToolbar: r,
                            userHasPremium: u,
                            hasDismissedRemoveModal: c,
                            shouldShowFreeUserSentCoachmark: f
                        } = this.props, m = B.default.getChannel(t.getChannelId());
                        if (l || o) {
                            var h, p;
                            null === (p = this.ctaRef) || void 0 === p || null === (h = p.current) || void 0 === h || h.focus();
                            return
                        }
                        let T = t.getChannelId(),
                            E = r ? x.ReactionLocations.FORUM_TOOLBAR : x.ReactionLocations.MESSAGE;
                        if (a && !i && this.isMe()) c ? (0, x.removeReaction)(T, t.id, n, void 0, E, {
                            burst: a
                        }) : (0, x.removeReactionWithConfirmation)({
                            emoji: n,
                            channelId: T,
                            messageId: t.id,
                            reactionType: a ? Q.ReactionTypes.BURST : Q.ReactionTypes.NORMAL,
                            location: E,
                            isMe: this.isMe()
                        });
                        else if (!a || this.userCanBurstReact() || u) {
                            if (a && !this.userCanBurstReact()) {
                                (0, ee.openOutOfBurstsModal)();
                                return
                            } else s ? this.handleShowVerificationGate() : !i && (this.isMe() ? (0, x.removeReaction)(T, t.id, n, void 0, E) : (0, x.addReaction)(T, t.id, n, E, {
                                burst: a
                            }))
                        } else {
                            (0, b.openBurstReactionsUpsellModal)({
                                analytics: {
                                    type: el.PremiumUpsellTypes.BURST_REACTION_UPSELL,
                                    page: (null == m ? void 0 : m.getGuildId()) != null ? es.AnalyticsPages.GUILD_CHANNEL : es.AnalyticsPages.DM_CHANNEL,
                                    section: null != m ? (0, L.getBurstAnalyticsSection)(m) : void 0,
                                    object: es.AnalyticsObjects.EMOJI_REACTION_UPSELL
                                }
                            });
                            return
                        }
                        a && this.isMe() && f && ((0, X.toggleFreeUserSentPopout)(null), (0, _.markDismissibleContentAsDismissed)(d.DismissibleContent.SUPER_REACTIONS_FREE_USER_FIRST_SENT))
                    }, this.handleEnter = e => {
                        let {
                            emoji: t,
                            message: n,
                            type: i,
                            reduceMotion: a,
                            animateEmoji: s,
                            autoUnfurlReactionTooltip: l
                        } = this.props, o = i === Q.ReactionTypes.BURST;
                        o && !this.isReactionEventActive && !a && s && (0, x.playBurstReaction)({
                            channelId: n.getChannelId(),
                            messageId: n.id,
                            emoji: t,
                            key: q.BurstReactionEffectSource.HOVER
                        }), this.isReactionEventActive = !0, this.isKeyboardNavigation = "focus" === e.type, this.timeout.start(o ? 750 : l ? 200 : 500, this.showTooltip, !1)
                    }, this.handleEnterTooltip = () => {
                        this.isReactionEventActive = !0, this.handleShowTooltip()
                    }, this.handleShowTooltip = () => {
                        this.hideTimeout.stop(), this.isReactionEventActive && (this.updateTooltipText(), w.default.addChangeListener(this.updateTooltipText))
                    }, this.showTooltip = () => {
                        this.handleShowTooltip(), this.isReactionEventActive && this.trackReactionTooltipViewed(), this.hasShownTooltip = !0
                    }, this.handleLeave = () => {
                        this.isReactionEventActive = !1, this.isKeyboardNavigation = !1, this.timeout.stop(), w.default.removeChangeListener(this.updateTooltipText), this.hideTimeout.start(200, this.hideTooltip, !1)
                    }, this.hideTooltip = () => {
                        this.setState({
                            shouldShowTooltip: !1
                        }), this.hasShownTooltip && Y.default.track(es.AnalyticEvents.CLOSE_POPOUT, {
                            nonce: this.nonce
                        })
                    }, this.isMe = () => {
                        let {
                            me: e,
                            me_burst: t,
                            type: n
                        } = this.props;
                        return eh(e, t, n)
                    }, this.updateTooltipText = () => {
                        let {
                            message: e,
                            emoji: t,
                            type: n
                        } = this.props, i = (0, ei.getReactionTooltipText)(e, t, n), a = this.isKeyboardNavigation ? i : (0, ei.getReactionTooltipText)(e, t, n, es.NOOP);
                        this.setState({
                            tooltipText: a,
                            tooltipTextAria: i,
                            shouldShowTooltip: null != a && "" !== a
                        })
                    }, this.renderLurkerModeUpsellPopout = e => {
                        let {
                            closePopout: t
                        } = e, {
                            message: n,
                            isLurking: a
                        } = this.props, s = B.default.getChannel(n.getChannelId()), l = F.default.getGuild(null == s ? void 0 : s.getGuildId());
                        return a && null != l ? (0, i.jsx)(y.default, {
                            ctaRef: this.ctaRef,
                            type: y.LurkerModeUpsellPopoutTypes.REACTIONS,
                            guild: l,
                            closePopout: t
                        }) : (0, i.jsx)(i.Fragment, {})
                    }, this.renderEmojiDetails = () => {
                        let e = this.props.emoji;
                        return null != e.id && (0, i.jsx)(eR, {
                            emojiId: e.id,
                            refreshPositionKey: this.refreshTooltipPositionKey,
                            onClose: this.handleLeave,
                            nonce: this.nonce
                        })
                    }, this.renderTooltip = () => {
                        let {
                            emoji: e,
                            message: t,
                            type: n,
                            me_burst: a,
                            isBurstReaction: s = !1
                        } = this.props, {
                            tooltipText: o
                        } = this.state, r = n => {
                            let i = B.default.getChannel(t.getChannelId());
                            if (null == i) return;
                            this.handleLeave();
                            let a = s ? Q.ReactionTypes.BURST : Q.ReactionTypes.NORMAL;
                            em(i, t, {
                                emoji: e,
                                reactionType: a
                            })
                        }, u = "string" == typeof o, c = u ? "" === o.trim() : null == o, d = () => c || null == o ? null : (0, i.jsx)(h.Text, {
                            variant: "text-sm/normal",
                            className: ed.reactionTooltipText,
                            "aria-label": o,
                            children: o
                        });
                        if (n === Q.ReactionTypes.BURST) {
                            let t = V.default.getCurrentUser(),
                                n = (0, L.useTooltipReplenishmentMessage)();
                            return (0, i.jsxs)(m.Dialog, {
                                className: ed.reactionTooltip,
                                onMouseEnter: this.handleEnterTooltip,
                                onMouseLeave: this.handleLeave,
                                children: [(0, i.jsxs)(h.Clickable, {
                                    className: ed.burstReactionTooltipInner,
                                    onClick: r,
                                    children: [(0, i.jsxs)("div", {
                                        className: l(ed.burstReactionTooltipMessage, ed.burstReactionTooltipSpacer),
                                        children: [(0, i.jsx)(p.default, {
                                            className: ed.reactionTooltipEmoji,
                                            emojiId: e.id,
                                            emojiName: e.name,
                                            animated: e.animated,
                                            size: this.props.emojiSize
                                        }), d()]
                                    }), (0, i.jsxs)("div", {
                                        className: ed.burstReactionTooltipPrompt,
                                        children: [(0, J.isPremium)(t) && (0, i.jsx)(W.default, {
                                            className: ed.burstReactionTooltipNitroIcon,
                                            color: K.GradientCssUrls.PREMIUM_TIER_2
                                        }), this.userCanBurstReact() ? (0, i.jsx)(h.Text, {
                                            variant: "text-sm/normal",
                                            className: ed.reactionTooltipText,
                                            "aria-label": "super reaction tooltip cta",
                                            children: a ? eo.default.Messages.SUPER_REACTION_TOOLTIP_CTA_REACTED : eo.default.Messages.SUPER_REACTION_TOOLTIP_CTA
                                        }) : (0, i.jsx)(i.Fragment, {
                                            children: (0, J.isPremium)(t) ? (0, i.jsx)(h.Text, {
                                                variant: "text-sm/normal",
                                                "aria-label": "super reaction tooltip replenishment message",
                                                children: n
                                            }) : (0, i.jsx)(i.Fragment, {
                                                children: !this.isKeyboardNavigation && (0, i.jsxs)("div", {
                                                    children: [(0, i.jsx)(h.Text, {
                                                        variant: "text-sm/normal",
                                                        "aria-label": "super reaction tooltip upsell",
                                                        children: eo.default.Messages.SUPER_REACTION_TOOLTIP_UPSELL
                                                    }), (0, i.jsx)(P.default, {
                                                        subscriptionTier: el.PremiumSubscriptionSKUs.TIER_2,
                                                        buttonText: eo.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
                                                        className: ed.burstReactionTooltipUpsellCta,
                                                        onClick: e => e.stopPropagation()
                                                    })]
                                                })
                                            })
                                        })]
                                    })]
                                }), this.renderEmojiDetails()]
                            })
                        }
                        return (0, i.jsxs)(m.Dialog, {
                            className: ed.reactionTooltip,
                            onMouseEnter: this.handleEnterTooltip,
                            onMouseLeave: this.handleLeave,
                            children: [(0, i.jsx)(h.Clickable, {
                                onClick: r,
                                children: (0, i.jsxs)("div", {
                                    className: ed.reactionTooltipInner,
                                    children: [(0, i.jsx)(p.default, {
                                        className: ed.reactionTooltipEmoji,
                                        emojiId: e.id,
                                        emojiName: e.name,
                                        animated: e.animated,
                                        size: this.props.emojiSize
                                    }), d()]
                                })
                            }), this.renderEmojiDetails()]
                        })
                    }, this.refreshTooltipPositionKey = () => {
                        this.setState({
                            tooltipPositionKey: String(Date.now())
                        })
                    }, this.handleShowVerificationGate = () => {
                        let {
                            message: e,
                            isPendingMember: t
                        } = this.props;
                        if (!t) return null;
                        let n = B.default.getChannel(e.getChannelId()),
                            i = F.default.getGuild(null == n ? void 0 : n.getGuildId());
                        null != i && (0, O.openMemberVerificationModal)(i.id)
                    }, this.handleSetReactionRef = e => {
                        this.setState({
                            reactionRef: e
                        })
                    }, this.handleDismissCoachmark = () => {
                        (0, X.toggleFreeUserSentPopout)(null), (0, _.markDismissibleContentAsDismissed)(d.DismissibleContent.SUPER_REACTIONS_FREE_USER_FIRST_SENT)
                    }, this.trackReactionTooltipViewed = () => {
                        let {
                            emoji: e,
                            message: t,
                            type: n
                        } = this.props, i = V.default.getCurrentUser(), a = B.default.getChannel(t.getChannelId()), s = n === Q.ReactionTypes.BURST, l = (0, J.isPremium)(i), o = s ? el.PremiumUpsellTypes.EMOJI_IN_BURST_REACTION_HOVER : el.PremiumUpsellTypes.EMOJI_IN_REACTION_HOVER;
                        s && !this.userCanBurstReact() && !l && (o = el.PremiumUpsellTypes.EMOJI_IN_BURST_REACTION_HOVER_UPSELL), R.default.trackWithMetadata(es.AnalyticEvents.EXPRESSION_TOOLTIP_VIEWED, {
                            type: o,
                            expression_id: e.id,
                            expression_name: e.name,
                            is_animated: e.animated,
                            is_custom: null != e.id,
                            nonce: this.nonce
                        }), s && null != a && !l && !this.userCanBurstReact() && Y.default.track(es.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                            type: el.PremiumUpsellTypes.BURST_REACTION_UPSELL,
                            location: {
                                page: (null == a ? void 0 : a.getGuildId()) != null ? es.AnalyticsPages.GUILD_CHANNEL : es.AnalyticsPages.DM_CHANNEL,
                                section: (0, L.getBurstAnalyticsSection)(a),
                                object: es.AnalyticsObjects.EMOJI_REACTION_TOOLTIP_UPSELL
                            }
                        })
                    }
                }
            }
            ep.defaultProps = {
                emojiSize: "jumbo"
            };
            let eT = a.memo(e => {
                    let {
                        type: t,
                        burst_colors: n,
                        message: a,
                        emoji: s
                    } = e, l = t === Q.ReactionTypes.BURST, {
                        autoUnfurlReactionTooltip: o
                    } = (0, N.useInventoryGuildPacksUserExperiment)({
                        autoTrackExposure: !1
                    }), r = (0, I.useEmojiColorPalette)(l && null != n ? n : []), u = (0, c.useStateFromStores)([q.default], () => void 0 !== q.default.getEffectForEmojiId(a.getChannelId(), a.id, s)), f = (0, c.useStateFromStores)([E.default], () => E.default.useReducedMotion), m = D.AnimateEmoji.useSetting(), h = (0, _.isDismissibleContentDismissed)(d.DismissibleContent.BURST_REACTIONS_REMOVE_MODAL), [p, T] = (0, c.useStateFromStoresArray)([Z.default], () => [Z.default.remainingBurstCurrency, Z.default.emojiReactionToTargetForCoachmark]), R = V.default.getCurrentUser(), g = (0, J.isPremium)(R), S = (0, _.isDismissibleContentDismissed)(d.DismissibleContent.SUPER_REACTIONS_FREE_USER_FIRST_SENT), A = !(0, J.isNewUser)(R) && p > 0 && !S && null != T && s.id === T.id && s.name === T.name;
                    A && g && ((0, X.toggleFreeUserSentPopout)(null), (0, _.markDismissibleContentAsDismissed)(d.DismissibleContent.SUPER_REACTIONS_FREE_USER_FIRST_SENT));
                    let C = (0, c.useStateFromStores)([q.default], () => q.default.getReactionPickerAnimation(a.id, s.name, s.id)),
                        O = l && (u || null != C);
                    return (0, i.jsx)(ep, {
                        ...e,
                        colors: r,
                        isBurstReaction: l,
                        hideEmoji: O,
                        remainingBurstCurrency: p,
                        userHasPremium: g,
                        reduceMotion: f,
                        animateEmoji: m,
                        hasDismissedRemoveModal: h,
                        shouldShowFreeUserSentCoachmark: A,
                        onRenderFreeUserSentPopout: () => (0, i.jsx)(U.default, {}),
                        animationStartPosition: C,
                        autoUnfurlReactionTooltip: o
                    })
                }),
                eE = e => {
                    var t;
                    let {
                        emojiId: n,
                        expressionSourceGuild: a,
                        hasJoinedExpressionSourceGuild: s,
                        onClose: l,
                        packCollectionData: o,
                        popoutData: r,
                        currentGuildId: u,
                        nonce: c
                    } = e;
                    (0, C.useTrackOpenPopout)({
                        emojiId: n,
                        currentGuildId: u,
                        popoutData: r,
                        emojiSourceGuildId: null == a ? void 0 : a.id,
                        nonce: c
                    });
                    let d = null !== (t = null == a ? void 0 : a.isDiscoverable()) && void 0 !== t && t,
                        f = o.collectEnabled,
                        m = null !== a && (d || f);
                    return (0, i.jsx)(i.Fragment, {
                        children: m ? null == a ? null : (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("div", {
                                className: er.reactionEmojiDetailsUnfurlGuildDetails,
                                children: (0, i.jsx)(et.GuildDetails, {
                                    expressionSourceGuild: a,
                                    hasJoinedExpressionSourceGuild: s,
                                    isDisplayingJoinGuildButtonInPopout: r.type === $.EmojiPopoutType.JOIN_GUILD
                                })
                            }), (0, i.jsx)(et.EmojiPopoutList, {
                                emojiId: n,
                                expressionSourceGuild: a,
                                hasJoinedEmojiSourceGuild: s,
                                onClose: l,
                                popoutData: r,
                                packCollectionData: o,
                                isDisplayingButtonInTopSection: !1,
                                nonce: c
                            })]
                        }) : (0, i.jsx)(h.Text, {
                            variant: "text-sm/normal",
                            "aria-label": r.type,
                            children: r.emojiDescription
                        })
                    })
                },
                eR = e => {
                    var t;
                    let {
                        emojiId: n,
                        refreshPositionKey: s,
                        onClose: o,
                        nonce: r
                    } = e, {
                        joinedEmojiSourceGuild: u
                    } = (0, c.useStateFromStoresObject)([S.default, F.default], () => {
                        let e = S.default.getCustomEmojiById(n);
                        return {
                            joinedEmojiSourceGuild: (null == e ? void 0 : e.type) === A.EmojiTypes.GUILD ? F.default.getGuild(null == e ? void 0 : e.guildId) : void 0
                        }
                    }), [d, f] = a.useState(void 0), [m, p] = a.useState(!1), [T, E] = a.useState(!1), [R, _] = a.useState(!1), g = null != u, I = (0, v.usePackCollectionData)({
                        expressionSourceGuild: d
                    }), C = I.autoUnfurlReactionTooltip, O = null !== (t = null == d ? void 0 : d.isDiscoverable()) && void 0 !== t && t, N = k.default.getGuildId(), y = null != N && (N === (null == d ? void 0 : d.id) || N === (null == u ? void 0 : u.id)), j = (0, $.getEmojiPopoutData)({
                        isPremium: I.isPremium,
                        hasJoinedEmojiSourceGuild: g,
                        isDiscoverable: O,
                        packCollectionData: I,
                        emojiComesFromCurrentGuild: y,
                        isUnusableRoleSubscriptionEmoji: !1,
                        userIsRoleSubscriber: !1,
                        isRoleSubscriptionEmoji: !1,
                        shouldHideRoleSubscriptionCTA: !1
                    });
                    a.useEffect(() => {
                        let e = !m,
                            t = !C || R;
                        if (e && t) return;
                        let i = async () => {
                            s(), E(!0);
                            let e = await M.default.getGuildFromEmojiId(n);
                            f(e), E(!1), _(!0), s()
                        };
                        i()
                    }, [n, C, m, R, s]);
                    let U = !I.viewAndUseEnabled || g;
                    if (U) return null;
                    let P = () => {
                            p(!m)
                        },
                        b = () => {
                            let e = eo.default.Messages.INVENTORY_EMOJI_DETAILS_V2;
                            return (0, i.jsxs)(h.Clickable, {
                                onClick: P,
                                className: er.reactionEmojiDetailsClickable,
                                children: [(0, i.jsx)(h.Text, {
                                    variant: "text-sm/normal",
                                    color: "none",
                                    "aria-label": e,
                                    children: e
                                }), (0, i.jsx)(z.default, {
                                    width: 16,
                                    height: 16,
                                    className: l(er.reactionEmojiDetailsArrow, {
                                        [er.reactionEmojiDetailsArrowCollapsed]: !m
                                    })
                                })]
                            })
                        },
                        x = m && void 0 !== d,
                        L = () => (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("div", {
                                className: er.reactionEmojiDetailsDivider
                            }), null != j.emojiDescription && j.type !== $.EmojiPopoutType.UNAVAILABLE && (0, i.jsx)(h.Text, {
                                variant: "text-sm/normal",
                                "aria-label": j.type,
                                children: j.emojiDescription
                            })]
                        });
                    return C ? (0, i.jsxs)("div", {
                        children: [R ? L() : null, T ? (0, i.jsx)(en.PopoutLoadingAnimation, {
                            className: er.emojiDetailsLoader
                        }) : R && (0, i.jsx)(eE, {
                            emojiId: n,
                            expressionSourceGuild: d,
                            hasJoinedExpressionSourceGuild: g,
                            onClose: o,
                            popoutData: j,
                            packCollectionData: I,
                            currentGuildId: N,
                            nonce: r
                        })]
                    }) : (0, i.jsxs)("div", {
                        children: [x ? L() : b(), T ? (0, i.jsx)(en.PopoutLoadingAnimation, {
                            className: er.emojiDetailsLoader
                        }) : x && (0, i.jsx)(eE, {
                            emojiId: n,
                            expressionSourceGuild: d,
                            hasJoinedExpressionSourceGuild: g,
                            onClose: o,
                            popoutData: j,
                            packCollectionData: I,
                            currentGuildId: N,
                            nonce: r
                        })]
                    })
                }
        },
        512306: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BurstReactionSize: function() {
                    return a
                },
                default: function() {
                    return E
                }
            });
            var i, a, s = n("37983"),
                l = n("884691"),
                o = n("414456"),
                r = n.n(o),
                u = n("245749"),
                c = n.n(u),
                d = n("913144"),
                f = n("15935"),
                m = n("569512"),
                h = n("941723"),
                p = n("256346");
            (i = a || (a = {}))[i.NORMAL = 16] = "NORMAL", i[i.LARGE = 32] = "LARGE";
            let T = async e => {
                var t;
                let {
                    effect: n
                } = e, i = await (0, m.getBurstAnimation)(n.channelId, null !== (t = n.messageId) && void 0 !== t ? t : "", n.emoji.name), a = await (0, h.getResizedAnimation)("".concat(n.channelId, ":").concat(n.messageId, ":").concat(n.emoji.name), n.url, i, n.color);
                return a.assets[0].p = n.url, a
            };

            function E(e) {
                let {
                    className: t,
                    effect: n,
                    onComplete: i,
                    emojiSize: a = 16
                } = e, o = l.useRef(null), u = a * h.ANIMATION_TO_EMOJI_RATIO, m = (u + a) / 2;
                return l.useEffect(() => {
                    let e;
                    if (null != n) return !async function() {
                        if (null != o.current) {
                            let t = await T({
                                effect: n
                            });
                            (e = c.loadAnimation({
                                container: o.current,
                                renderer: "svg",
                                loop: !1,
                                autoplay: !0,
                                animationData: t
                            })).addEventListener("complete", () => {
                                null == i || i(), e.destroy()
                            }), null != n.channelId && null != n.messageId && null != n.emoji && n.key === f.BurstReactionEffectSource.HOVER && d.default.dispatch({
                                type: "BURST_REACTION_ANIMATION_ADD",
                                channelId: n.channelId,
                                messageId: n.messageId,
                                emoji: n.emoji,
                                animation: e
                            })
                        }
                    }(), () => {
                        null != e && e.destroy()
                    }
                }, [i, n, a]), (0, s.jsx)("div", {
                    className: p.effectsWrapper,
                    children: (0, s.jsx)("div", {
                        className: r(p.effect, t),
                        style: {
                            transform: "translateY(".concat(m, "px)"),
                            height: u,
                            width: u
                        },
                        ref: o
                    })
                })
            }
        },
        81924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            }), n("222007");
            var i = n("37983"),
                a = n("884691"),
                s = n("446674"),
                l = n("913144"),
                o = n("206230"),
                r = n("166257"),
                u = n("845579"),
                c = n("15935"),
                d = n("103475"),
                f = n("512306"),
                m = n("941723"),
                h = n("981937"),
                p = n("205591"),
                T = a.memo(function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        emoji: T,
                        useChatFontScaling: E,
                        color: R,
                        count: _
                    } = e, g = (0, s.useStateFromStores)([c.default], () => c.default.getEffectForEmojiId(t, n, T)), S = E ? p : h, A = a.useMemo(() => (0, m.buildEffect)(T, R, t, {
                        key: g,
                        messageId: n
                    }), [R, g, T, t, n]), [I, C] = a.useState(!1), O = (0, s.useStateFromStores)([o.default], () => o.default.useReducedMotion), N = u.AnimateEmoji.useSetting(), v = a.useCallback(() => {
                        l.default.dispatch({
                            type: "BURST_REACTION_EFFECT_CLEAR",
                            channelId: t,
                            messageId: n,
                            emoji: T
                        })
                    }, [T, t, n]);
                    return (a.useEffect(() => {
                        let e = () => {
                            if (I) return;
                            let e = (0, d.getBurstAnimationHash)("".concat(Date.now()).concat(t).concat(n).concat(T.name)),
                                i = e % 10;
                            (i += _ > 4 ? 4 : _ - 1) > 7 && (C(!0), (0, r.playBurstReaction)({
                                channelId: t,
                                messageId: n,
                                emoji: T,
                                key: c.BurstReactionEffectSource.RANDOM
                            }))
                        };
                        if (I || O && !N || !N) return;
                        e();
                        let i = setInterval(e, 5e3);
                        return () => {
                            clearInterval(i)
                        }
                    }, [N, t, _, T, T.name, I, n, O]), null == g) ? null : (0, i.jsx)(f.default, {
                        className: S.effect,
                        effect: A,
                        onComplete: v
                    })
                })
        },
        941723: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ANIMATION_TO_EMOJI_RATIO: function() {
                    return u
                },
                getResizedAnimation: function() {
                    return c
                },
                buildEffect: function() {
                    return d
                }
            }), n("781738");
            var i = n("917351"),
                a = n("748820"),
                s = n("407063"),
                l = n("397485"),
                o = n("284679"),
                r = n("103475");
            let u = 7.5,
                c = (0, i.memoize)((e, t, n, i) => new Promise(e => {
                    let a = new Image;
                    a.src = t, a.crossOrigin = "Anonymous", a.onload = () => {
                        let t = 32 * (0, s.getDevicePixelRatio)(),
                            l = JSON.stringify(n);
                        if (null != i && (l = (0, r.replaceAnimationColors)(l, (0, o.hexToRgb)(i))), a.width === t && a.height === t || 0 === a.width && 0 === a.height) e(JSON.parse(l));
                        else {
                            let t = 128 / a.width * a.height;
                            e(JSON.parse(l = (l = l.replace(/"w":128,"h":128/, '"w":128,"h":'.concat(t))).replace(/"a":{"a":0,"k":\[64,64/, '"a":{"a":0,"k":[64,'.concat(t / 2))))
                        }
                    }
                }));

            function d(e, t, n, i) {
                let {
                    emojiSize: s,
                    key: o,
                    messageId: r
                } = null != i ? i : {}, u = (0, l.getEffectUrl)(e, null != s ? 2 * s : void 0);
                return {
                    channelId: n,
                    messageId: r,
                    emoji: e,
                    animationId: (0, a.v4)(),
                    url: u,
                    key: o,
                    color: t
                }
            }
        },
        232259: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useUsernameHook: function() {
                    return c
                }
            });
            var i = n("37983"),
                a = n("884691"),
                s = n("77078"),
                l = n("506885"),
                o = n("981601"),
                r = n("42203"),
                u = n("441823");

            function c(e, t, n) {
                var c, d;
                let f = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    m = arguments.length > 4 ? arguments[4] : void 0;
                let h = (c = e, d = t, a.useCallback(e => {
                    let t = r.default.getChannel(d);
                    null != t && null != c && (0, u.openUserContextMenu)(e, c, t)
                }, [c, d]));
                return a.useCallback(r => (u, c) => {
                    let d = (e, t) => (0, a.createElement)(s.NameWithRoleAnchor, {
                            ...null != e ? e : {},
                            key: t,
                            onContextMenu: h,
                            name: u,
                            color: null == r ? void 0 : r.colorString,
                            roleName: null == r ? void 0 : r.colorRoleName,
                            "aria-label": m
                        }),
                        p = e => t => {
                            f && t.stopPropagation(), e(t)
                        };
                    return null != e ? (0, i.jsx)(s.Popout, {
                        position: "right",
                        preload: () => (0, l.default)(e.id, e.getAvatarURL(n, 80), {
                            guildId: n,
                            channelId: t
                        }),
                        renderPopout: a => (0, i.jsx)(o.default, {
                            ...a,
                            userId: e.id,
                            guildId: n,
                            channelId: t
                        }),
                        children: e => {
                            let {
                                onClick: t,
                                ...n
                            } = e;
                            return d({
                                onClick: p(t),
                                ...n
                            })
                        }
                    }, c) : d(void 0, c)
                }, [e, t, n, h, f, m])
            }
        },
        785621: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var i = n("37983"),
                a = n("884691"),
                s = n("917351"),
                l = n("65597"),
                o = n("880731"),
                r = n("232268"),
                u = n("759432"),
                c = n("798592"),
                d = n("39141");

            function f(e) {
                let {
                    reactionRef: t,
                    count: n
                } = e, i = a.useRef(n), r = (0, l.default)([o.default], () => o.default.getState()), d = (0, c.default)(), f = (0, u.default)(t);
                return a.useEffect(() => {
                    if (n > i.current && null != f) {
                        let e = (0, s.clamp)(n, r.confettiCount / 2, 2 * r.confettiCount);
                        d.fire(f.x, f.y, {
                            count: e
                        })
                    }
                    i.current = n
                }, [n, f, d, r.confettiCount]), null
            }

            function m(e) {
                return (0, i.jsx)(r.default, {
                    confettiLocation: d.ConfettiLocation.REACTION,
                    children: (0, i.jsx)(f, {
                        ...e
                    })
                })
            }
        },
        638971: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                l = n("151426"),
                o = n("77078"),
                r = n("685665"),
                u = n("10641"),
                c = n("590527"),
                d = n("649844"),
                f = n("626301"),
                m = n("646718"),
                h = n("49111"),
                p = n("782340"),
                T = n("825746"),
                E = n("54338"),
                R = () => {
                    let {
                        analyticsLocations: e
                    } = (0, r.default)();
                    return (0, i.jsx)(o.Dialog, {
                        children: (0, i.jsxs)("div", {
                            className: T.burstReactionTooltipCoachmark,
                            children: [(0, i.jsx)("img", {
                                src: E,
                                alt: ""
                            }), (0, i.jsx)(o.Text, {
                                variant: "text-md/bold",
                                children: p.default.Messages.SUPER_REACTIONS_CONGRATS_HEADER
                            }), (0, i.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                children: p.default.Messages.SUPER_REACTIONS_CONGRATS_DESCRIPTION.format({
                                    onClick: () => {
                                        (0, f.navigateToPremiumMarketingPage)(), (0, c.toggleFreeUserSentPopout)(null), (0, u.markDismissibleContentAsDismissed)(l.DismissibleContent.SUPER_REACTIONS_FREE_USER_FIRST_SENT)
                                    }
                                })
                            }), (0, i.jsxs)("span", {
                                className: T.burstReactionTooltipCoachmarkButtons,
                                children: [(0, i.jsx)(o.Button, {
                                    className: s(T.burstReactionTooltipCoachmarkButton, T.burstReactionTooltipCoachmarkDismiss),
                                    color: o.Button.Colors.CUSTOM,
                                    look: o.Button.Looks.BLANK,
                                    onClick: () => {
                                        (0, c.toggleFreeUserSentPopout)(null), (0, u.markDismissibleContentAsDismissed)(l.DismissibleContent.SUPER_REACTIONS_FREE_USER_FIRST_SENT)
                                    },
                                    children: p.default.Messages.DISMISS
                                }), (0, i.jsx)(o.Button, {
                                    autoFocus: !0,
                                    className: s(T.burstReactionTooltipCoachmarkButton, T.burstReactionTooltipCoachmarkCTA),
                                    color: o.Button.Colors.CUSTOM,
                                    look: o.Button.Looks.FILLED,
                                    onClick: () => {
                                        let t = {
                                            page: h.AnalyticsPages.PREMIUM_UPSELL_BURST_REACTIONS
                                        };
                                        (0, d.default)({
                                            initialPlanId: null,
                                            subscriptionTier: m.PremiumSubscriptionSKUs.TIER_2,
                                            analyticsObject: t,
                                            analyticsLocations: e
                                        }), (0, c.toggleFreeUserSentPopout)(null), (0, u.markDismissibleContentAsDismissed)(l.DismissibleContent.SUPER_REACTIONS_FREE_USER_FIRST_SENT)
                                    },
                                    children: p.default.Messages.PREMIUM_UPSELL_GET_NITRO
                                })]
                            })]
                        })
                    })
                }
        },
        85589: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                },
                openBurstReactionsUpsellModal: function() {
                    return p
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("77078"),
                s = n("79112"),
                l = n("154889"),
                o = n("917247"),
                r = n("789946"),
                u = n("646718"),
                c = n("49111"),
                d = n("782340"),
                f = n("61791"),
                m = n("277064");

            function h(e) {
                var t, n;
                let {
                    onClose: a,
                    analyticsSource: h,
                    ...p
                } = e, T = d.default.Messages.SUPER_REACTIONS_UPSELL_UNLIMITED_BODY.format({
                    onClick: () => {
                        s.default.open(c.UserSettingsSections.PREMIUM), a()
                    }
                }), E = (0, o.usePremiumTrialOffer)(), R = (0, l.usePremiumDiscountOffer)();
                return (0, i.jsx)(r.default, {
                    artURL: m,
                    artContainerClassName: f.artContainer,
                    modalClassName: f.modalContainer,
                    bodyClassName: f.bodyContainer,
                    type: u.PremiumUpsellTypes.BURST_REACTION_UPSELL,
                    title: d.default.Messages.SUPER_REACTIONS_UPSELL_TITLE,
                    body: T,
                    glowUp: T,
                    analyticsSource: h,
                    analyticsLocation: {
                        page: c.AnalyticsPages.PREMIUM_UPSELL_BURST_REACTIONS,
                        object: c.AnalyticsObjects.BUTTON_CTA
                    },
                    onClose: a,
                    subscribeButtonText: null != E || null != R ? void 0 : d.default.Messages.PREMIUM_SETTINGS_GET,
                    subscriptionTier: null !== (n = null == E ? void 0 : null === (t = E.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== n ? n : u.PremiumSubscriptionSKUs.TIER_2,
                    backButtonText: d.default.Messages.NO_THANKS,
                    ...p
                })
            }

            function p(e) {
                let {
                    analytics: t
                } = e;
                (0, a.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("85589").then(n.bind(n, "85589"));
                    return n => (0, i.jsx)(e, {
                        analyticsSource: t,
                        ...n
                    })
                })
            }
        },
        166257: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ReactionLocations: function() {
                    return a
                },
                getReactors: function() {
                    return I
                },
                addReaction: function() {
                    return C
                },
                playBurstReaction: function() {
                    return O
                },
                removeAllReactions: function() {
                    return N
                },
                removeEmojiReactions: function() {
                    return v
                },
                removeReaction: function() {
                    return M
                },
                removeReactionWithConfirmation: function() {
                    return j
                },
                clearGuildBurstPreview: function() {
                    return U
                }
            });
            var i, a, s = n("872717"),
                l = n("819855"),
                o = n("913144"),
                r = n("404118"),
                u = n("590527"),
                c = n("692171"),
                d = n("875978"),
                f = n("263024"),
                m = n("271938"),
                h = n("377253"),
                p = n("659500"),
                T = n("402671"),
                E = n("61069"),
                R = n("49111"),
                _ = n("782340");

            function g(e, t, n) {
                let {
                    status: i,
                    body: a
                } = e;
                if (429 === i) return setTimeout(t, 1e3 * e.body.retry_after), !1;
                if (403 === i) switch (a && a.code) {
                    case R.AbortCodes.TOO_MANY_REACTIONS:
                        r.default.show({
                            title: _.default.Messages.TOO_MANY_REACTIONS_ALERT_HEADER,
                            body: _.default.Messages.TOO_MANY_REACTIONS_ALERT_BODY,
                            confirmText: _.default.Messages.OKAY
                        });
                        break;
                    case R.AbortCodes.REACTION_BLOCKED:
                        p.ComponentDispatch.dispatch(R.ComponentActions.SHAKE_APP, {
                            duration: 200,
                            intensity: 2
                        })
                } else if (!n.isRetry) return t(), !1;
                return !0
            }

            function S(e, t, n, i, a) {
                var s, l, r;
                o.default.dispatch({
                    type: e,
                    channelId: t,
                    messageId: n,
                    userId: null !== (s = null == a ? void 0 : a.userId) && void 0 !== s ? s : m.default.getId(),
                    emoji: i,
                    optimistic: !0,
                    burst: null !== (l = null == a ? void 0 : a.burst) && void 0 !== l && l,
                    colors: null !== (r = null == a ? void 0 : a.colors) && void 0 !== r ? r : []
                })
            }

            function A(e) {
                let {
                    channelId: t,
                    messageId: n,
                    emoji: i,
                    userId: a,
                    useTypeEndpoint: s = !1,
                    type: l = d.ReactionTypes.NORMAL
                } = e, o = null != i.id ? "".concat(i.name, ":").concat(i.id) : i.name;
                return null == a ? R.Endpoints.REACTIONS(t, n, o) : s ? R.Endpoints.REACTION_WITH_TYPE(t, n, o, a, l) : R.Endpoints.REACTION(t, n, o, a)
            }
            async function I(e) {
                let {
                    channelId: t,
                    messageId: n,
                    emoji: i,
                    limit: a,
                    after: l,
                    type: r
                } = e, u = await s.default.get({
                    url: A({
                        channelId: t,
                        messageId: n,
                        emoji: i
                    }),
                    query: {
                        limit: a,
                        after: l,
                        type: r
                    },
                    oldFormErrors: !0
                });
                return o.default.dispatch({
                    type: "MESSAGE_REACTION_ADD_USERS",
                    channelId: t,
                    messageId: n,
                    users: u.body,
                    emoji: i,
                    reactionType: r
                }), u.body
            }
            async function C(e, t, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "Message",
                    a = arguments.length > 4 ? arguments[4] : void 0,
                    o = null != a && !!a.burst,
                    m = null != a && !!a.isRetry;
                if (!m && function(e, t, n, i) {
                        let a = h.default.getMessage(e, t);
                        return null != a && a.userHasReactedWithEmoji(n, i)
                    }(e, t, n, o)) {
                    r.default.show({
                        title: _.default.Messages.EMOJI_PICKER_DOUBLE_REACTION_SUPER_ERROR_TITLE,
                        body: _.default.Messages.EMOJI_PICKER_DOUBLE_REACTION_SUPER_ERROR_BODY,
                        confirmText: _.default.Messages.GOT_IT
                    });
                    return
                }
                let p = await y(n, o);
                S("MESSAGE_REACTION_ADD", e, t, n, {
                    burst: o,
                    colors: p
                }), await f.default.unarchiveThreadIfNecessary(e), s.default.put({
                    url: A({
                        channelId: e,
                        messageId: t,
                        emoji: n,
                        userId: "@me"
                    }),
                    query: {
                        location: i,
                        type: o ? d.ReactionTypes.BURST : d.ReactionTypes.NORMAL
                    },
                    oldFormErrors: !0
                }).then(() => {
                    let i = c.default.remainingBurstCurrency;
                    o ? (l.AccessibilityAnnouncer.announce(_.default.Messages.BURST_REACTION_ADD_UNLIMITED_SUCCESS_A11Y.format({
                        name: n.name
                    })), E.default.triggerFullscreenAnimation({
                        channelId: e,
                        messageId: t,
                        emoji: {
                            ...n,
                            animated: !1
                        }
                    }), i > 0 && (0, u.toggleFreeUserSentPopout)({
                        animated: !1,
                        ...n
                    })) : l.AccessibilityAnnouncer.announce(_.default.Messages.REACTION_ADD_SUCCESS_A11Y.format({
                        name: n.name
                    }))
                }).catch(a => {
                    g(a, () => C(e, t, n, i, {
                        burst: o,
                        isRetry: !0
                    }), {
                        isRetry: m
                    }) && (S("MESSAGE_REACTION_REMOVE", e, t, n, {
                        burst: o
                    }), o ? l.AccessibilityAnnouncer.announce(_.default.Messages.BURST_REACTION_ADD_UNLIMITED_ERROR_A11Y.format({
                        name: n.name
                    })) : l.AccessibilityAnnouncer.announce(_.default.Messages.REACTION_ADD_ERROR_A11Y.format({
                        name: n.name
                    })))
                })
            }

            function O(e) {
                let {
                    channelId: t,
                    messageId: n,
                    emoji: i,
                    key: a
                } = e;
                o.default.dispatch({
                    type: "BURST_REACTION_EFFECT_PLAY",
                    channelId: t,
                    messageId: n,
                    emoji: i,
                    key: a
                })
            }
            async function N(e, t, n) {
                let i = null != n && !!n.isRetry;
                await f.default.unarchiveThreadIfNecessary(e), s.default.delete({
                    url: R.Endpoints.REMOVE_REACTIONS(e, t),
                    oldFormErrors: !0
                }).catch(n => {
                    g(n, () => N(e, t, {
                        isRetry: !0
                    }), {
                        isRetry: i
                    })
                })
            }
            async function v(e, t, n, i) {
                let a = null != i && !!i.isRetry;
                await f.default.unarchiveThreadIfNecessary(e);
                let l = null === n.id ? n.name : "".concat(n.name, ":").concat(n.id);
                s.default.delete({
                    url: R.Endpoints.REMOVE_EMOJI_REACTIONS(e, t, l),
                    oldFormErrors: !0
                }).catch(i => {
                    g(i, () => v(e, t, n, {
                        isRetry: !0
                    }), {
                        isRetry: a
                    })
                })
            }
            async function M(e, t, n, i) {
                let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "Message",
                    o = arguments.length > 5 ? arguments[5] : void 0,
                    r = null != o && !!o.burst,
                    u = null != o && !!o.isRetry;
                S("MESSAGE_REACTION_REMOVE", e, t, n, {
                    userId: i,
                    burst: r
                }), await f.default.unarchiveThreadIfNecessary(e), s.default.delete({
                    url: A({
                        channelId: e,
                        messageId: t,
                        emoji: n,
                        userId: null != i ? i : "@me",
                        type: r ? d.ReactionTypes.BURST : d.ReactionTypes.NORMAL,
                        useTypeEndpoint: !0
                    }),
                    query: {
                        location: a,
                        burst: r
                    },
                    oldFormErrors: !0
                }).then(() => {
                    (null == o ? void 0 : o.burst) ? l.AccessibilityAnnouncer.announce(_.default.Messages.BURST_REACTION_REMOVE_SUCCESS_A11Y.format({
                        name: n.name
                    })): l.AccessibilityAnnouncer.announce(_.default.Messages.REACTION_REMOVE_SUCCESS_A11Y.format({
                        name: n.name
                    }))
                }).catch(async s => {
                    if (g(s, () => M(e, t, n, i, a, {
                            burst: r,
                            isRetry: !0
                        }), {
                            isRetry: u
                        })) {
                        let a = await y(n, r);
                        S("MESSAGE_REACTION_ADD", e, t, n, {
                            userId: i,
                            burst: r,
                            colors: a
                        }), (null == o ? void 0 : o.burst) ? l.AccessibilityAnnouncer.announce(_.default.Messages.BURST_REACTION_REMOVE_ERROR_A11Y.format({
                            name: n.name
                        })) : l.AccessibilityAnnouncer.announce(_.default.Messages.REACTION_REMOVE_ERROR_A11Y.format({
                            name: n.name
                        }))
                    }
                })
            }
            async function y(e, t) {
                let n = [];
                if (t) try {
                    n = await (0, T.getEmojiColors)(e)
                } catch {}
                return n
            }(i = a || (a = {})).MESSAGE = "Message", i.FORUM_TOOLBAR = "Forum Toolbar", i.MOBILE_MEDIA_VIEWER = "Mobile Media Viewer";

            function j(e) {
                let {
                    channelId: t,
                    messageId: n,
                    emoji: i,
                    reactionType: a,
                    userId: s,
                    location: l
                } = e, o = a === d.ReactionTypes.BURST;
                M(t, n, i, s, l, {
                    burst: o
                })
            }

            function U(e) {
                o.default.dispatch({
                    type: "BURST_GUILD_PREVIEW_CLEAR",
                    guildId: e
                })
            }
        },
        486996: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var i = n("446674"),
                a = n("913144"),
                s = n("267567"),
                l = n("875978"),
                o = n("166257"),
                r = n("766274"),
                u = n("42203"),
                c = n("697218");
            let d = {};
            class f {
                static ensure(e, t, n) {
                    var i, a;
                    let s = "".concat(e, ":").concat(t.name, ":").concat(null !== (i = t.id) && void 0 !== i ? i : "", ":").concat(n);
                    return d[s] = null !== (a = d[s]) && void 0 !== a ? a : new f
                }
                constructor() {
                    this.fetched = !1, this.users = {}
                }
            }

            function m(e) {
                let {
                    type: t,
                    messageId: n,
                    userId: i,
                    emoji: a,
                    burst: s,
                    reactionType: o
                } = e, r = null != o ? o : s ? l.ReactionTypes.BURST : l.ReactionTypes.NORMAL, u = f.ensure(n, a, r);
                if ("MESSAGE_REACTION_ADD" === t) {
                    let e = c.default.getUser(i);
                    null != e && (u.users[i] = e)
                } else delete u.users[i]
            }
            class h extends i.default.Store {
                getReactions(e, t, n, i, a) {
                    let l = f.ensure(t, n, a);
                    if (!l.fetched) {
                        let r = u.default.getChannel(e),
                            c = null != r ? r.getGuildId() : null;
                        if (null != c && s.default.isLurking(c)) return;
                        o.getReactors({
                            channelId: e,
                            messageId: t,
                            emoji: n,
                            limit: i,
                            type: a
                        }), l.fetched = !0
                    }
                    return l.users
                }
            }
            h.displayName = "MessageReactionsStore";
            var p = new h(a.default, {
                CONNECTION_OPEN: function() {
                    d = {}
                },
                MESSAGE_REACTION_ADD: m,
                MESSAGE_REACTION_REMOVE: m,
                MESSAGE_REACTION_ADD_USERS: function(e) {
                    let {
                        messageId: t,
                        users: n,
                        emoji: i,
                        reactionType: a
                    } = e, s = f.ensure(t, i, a);
                    n.forEach(e => s.users[e.id] = new r.default(e))
                }
            })
        },
        738107: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMinCounterWidth: function() {
                    return h
                },
                default: function() {
                    return l
                }
            });
            var i, a, s, l, o = n("37983"),
                r = n("884691"),
                u = n("917351"),
                c = n.n(u),
                d = n("458960"),
                f = n("471671");

            function m(e, t) {
                return {
                    toValue: e,
                    duration: null != t ? t : 300,
                    easing: d.default.Easing.inOut(d.default.Easing.back())
                }
            }

            function h(e, t, n) {
                if (null != t) {
                    let i = Math.ceil(Math.log10(e + 1));
                    return null != n && n > 0 ? Math.min(i, n) * t : i * t
                }
            }(i = s || (s = {}))[i.ABOVE = 0] = "ABOVE", i[i.VISIBLE = 1] = "VISIBLE", i[i.BELOW = 2] = "BELOW", (a = class extends r.PureComponent {
                static getDerivedStateFromProps(e, t) {
                    let {
                        prevValue: n,
                        currValue: i,
                        nextValue: a
                    } = t;
                    return null == n && i !== e.value ? {
                        prevValue: f.default.isFocused() ? i : null,
                        currValue: e.value
                    } : null != a && a !== e.value ? {
                        nextValue: e.value
                    } : null
                }
                componentDidUpdate(e, t) {
                    let {
                        prevValue: n,
                        currValue: i
                    } = this.state;
                    n !== t.prevValue && null != n && this.animateBetween(n, i)
                }
                animateBetween(e, t) {
                    let n;
                    let {
                        forcePosition: i,
                        animationSpeed: a
                    } = this.props;
                    this.prevAnimate.setValue(1), null != i ? 0 === i ? (this.currAnimate.setValue(0), n = 2) : 2 === i && (this.currAnimate.setValue(2), n = 0) : e > t ? (this.currAnimate.setValue(0), n = 2) : (this.currAnimate.setValue(2), n = 0), d.default.parallel([d.default.timing(this.prevAnimate, m(n, a)), d.default.timing(this.currAnimate, m(1, a))]).start(this.animateNext)
                }
                getAnimatedStyle(e) {
                    let {
                        animationColor: t
                    } = this.props;
                    return {
                        transform: [{
                            translateY: e.interpolate({
                                inputRange: [0, 1, 2],
                                outputRange: ["-100%", "0%", "100%"]
                            })
                        }],
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        ...null != t && {
                            color: t
                        }
                    }
                }
                getMinWidth(e) {
                    let {
                        digitWidth: t,
                        padStartLength: n
                    } = this.props;
                    return h(e, t, n)
                }
                padValue(e) {
                    let {
                        padStartLength: t
                    } = this.props;
                    return null != t ? String(e).padStart(t, "0") : e
                }
                render() {
                    let {
                        prevValue: e,
                        currValue: t
                    } = this.state, {
                        color: n,
                        formatString: i
                    } = this.props, a = c.omit(this.props, ["value", "digitWidth", "padStartLength", "forcePosition"]);
                    if (null == e) return (0, o.jsx)("div", {
                        ...a,
                        style: {
                            color: n,
                            minWidth: this.getMinWidth(t)
                        },
                        children: null != i ? i(this.padValue(t)) : this.padValue(t)
                    });
                    let s = Math.max(e, t);
                    return (0, o.jsxs)("div", {
                        ...a,
                        style: {
                            color: n,
                            position: "relative",
                            overflow: "hidden"
                        },
                        children: [(0, o.jsx)("div", {
                            style: {
                                visibility: "hidden",
                                minWidth: this.getMinWidth(s)
                            },
                            children: this.padValue(s)
                        }), (0, o.jsx)(d.default.div, {
                            style: {
                                color: n,
                                ...this.getAnimatedStyle(this.prevAnimate)
                            },
                            children: null != i ? i(this.padValue(e)) : this.padValue(e)
                        }), (0, o.jsx)(d.default.div, {
                            style: {
                                color: n,
                                ...this.getAnimatedStyle(this.currAnimate)
                            },
                            children: null != i ? i(this.padValue(t)) : this.padValue(t)
                        })]
                    })
                }
                constructor(e) {
                    super(e), this.animateNext = () => {
                        let {
                            currValue: e,
                            nextValue: t
                        } = this.state;
                        null != t ? this.setState({
                            prevValue: f.default.isFocused() ? e : null,
                            currValue: t,
                            nextValue: null
                        }) : this.setState({
                            prevValue: null
                        })
                    }, this.state = {
                        prevValue: null,
                        currValue: e.value,
                        nextValue: null
                    }, this.prevAnimate = new d.default.Value(0), this.currAnimate = new d.default.Value(1)
                }
            }).Positions = s, l = a
        },
        305515: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Future: function() {
                    return i
                }
            });
            class i {
                constructor() {
                    this.promise = new Promise((e, t) => {
                        this.resolve = e, this.reject = t
                    })
                }
            }
        }
    }
]);