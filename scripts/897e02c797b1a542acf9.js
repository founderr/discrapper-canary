(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["80685"], {
        111633: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                var t, n;
                return (e = String(e).toLowerCase()).length < 3 ? e : (121 === e.charCodeAt(0) && (t = !0, e = "Y" + e.substr(1)), x.test(e) ? e = e.substr(0, e.length - 2) : A.test(e) && (e = e.substr(0, e.length - 1)), (n = p.exec(e)) ? u.test(n[1]) && (e = e.substr(0, e.length - 1)) : (n = h.exec(e)) && c.test(n[1]) && (e = n[1], M.test(e) ? e += "e" : T.test(e) ? e = e.substr(0, e.length - 1) : f.test(e) && (e += "e")), (n = g.exec(e)) && c.test(n[1]) && (e = n[1] + "i"), (n = S.exec(e)) && u.test(n[1]) && (e = n[1] + l[n[2]]), (n = R.exec(e)) && u.test(n[1]) && (e = n[1] + i[n[2]]), (n = v.exec(e)) ? d.test(n[1]) && (e = n[1]) : (n = E.exec(e)) && d.test(n[1]) && (e = n[1]), (n = _.exec(e)) && (d.test(n[1]) || o.test(n[1]) && !f.test(n[1])) && (e = n[1]), m.test(e) && d.test(e) && (e = e.substr(0, e.length - 1)), t && (e = "y" + e.substr(1)), e)
            };
            var l = {
                    ational: "ate",
                    tional: "tion",
                    enci: "ence",
                    anci: "ance",
                    izer: "ize",
                    bli: "ble",
                    alli: "al",
                    entli: "ent",
                    eli: "e",
                    ousli: "ous",
                    ization: "ize",
                    ation: "ate",
                    ator: "ate",
                    alism: "al",
                    iveness: "ive",
                    fulness: "ful",
                    ousness: "ous",
                    aliti: "al",
                    iviti: "ive",
                    biliti: "ble",
                    logi: "log"
                },
                i = {
                    icate: "ic",
                    ative: "",
                    alize: "al",
                    iciti: "ic",
                    ical: "ic",
                    ful: "",
                    ness: ""
                },
                a = "[aeiouy]",
                s = "([^aeiou][^aeiouy]*)",
                r = "(" + a + "[aeiou]*)",
                u = RegExp("^" + s + "?" + r + s),
                o = RegExp("^" + s + "?" + r + s + r + "?$"),
                d = RegExp("^" + s + "?(" + r + s + "){2,}"),
                c = RegExp("^" + s + "?" + a),
                f = RegExp("^" + s + a + "[^aeiouwxy]$"),
                m = /ll$/,
                _ = /^(.+?)e$/,
                g = /^(.+?)y$/,
                E = /^(.+?(s|t))(ion)$/,
                h = /^(.+?)(ed|ing)$/,
                M = /(at|bl|iz)$/,
                p = /^(.+?)eed$/,
                A = /^.+?[^s]s$/,
                x = /^.+?(ss|i)es$/,
                T = /([^aeiouylsz])\1$/,
                S = RegExp("^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$"),
                R = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
                v = RegExp("^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$")
        },
        949041: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("70102");
            var l = n("884691");

            function i() {
                let e = (0, l.createContext)(void 0);
                return {
                    Provider: t => {
                        let {
                            initialStore: n,
                            createStore: i,
                            children: a
                        } = t, s = (0, l.useRef)();
                        return !s.current && (n && (console.warn("Provider initialStore is deprecated and will be removed in the next version."), !i && (i = () => n)), s.current = i()), (0, l.createElement)(e.Provider, {
                            value: s.current
                        }, a)
                    },
                    useStore: function(t) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.is,
                            i = (0, l.useContext)(e);
                        if (!i) throw Error("Seems like you have not used zustand provider as an ancestor.");
                        return i(t, n)
                    },
                    useStoreApi: () => {
                        let t = (0, l.useContext)(e);
                        if (!t) throw Error("Seems like you have not used zustand provider as an ancestor.");
                        return (0, l.useMemo)(() => ({
                            getState: t.getState,
                            setState: t.setState,
                            subscribe: t.subscribe,
                            destroy: t.destroy
                        }), [t])
                    }
                }
            }
        },
        87657: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983"),
                i = n("884691"),
                a = n("77078"),
                s = n("390236"),
                r = i.memo(function(e) {
                    var t, n, r, u;
                    let {
                        user: o,
                        size: d = a.AvatarSizes.SIZE_32,
                        animate: c = !1,
                        "aria-hidden": f = !1,
                        ...m
                    } = e, _ = i.useContext(s.default);
                    return (0, l.jsx)(a.Avatar, {
                        src: (t = o, n = (0, a.getAvatarSize)(d), r = c, u = _, t.getAvatarURL(u, n, r)),
                        size: d,
                        "aria-label": f ? void 0 : o.username,
                        "aria-hidden": f,
                        ...m
                    })
                })
        },
        612278: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useFirstForumPostMessage: function() {
                    return p
                },
                useMostRecentForumMessage: function() {
                    return A
                },
                preloadForumThreads: function() {
                    return T
                }
            }), n("222007");
            var l = n("917351"),
                i = n.n(l),
                a = n("446674"),
                s = n("872717"),
                r = n("913144"),
                u = n("42203"),
                o = n("670902"),
                d = n("349778"),
                c = n("430475"),
                f = n("324261"),
                m = n("49111");
            class _ {
                get(e) {
                    return !this._set.hasOwnProperty(e) && (this._set[e] = this._defaultValueFunc()), this._set[e]
                }
                delete(e) {
                    delete this._set[e]
                }
                hasNext() {
                    return !i.isEmpty(this._set)
                }
                next() {
                    return Object.keys(this._set)[0]
                }
                constructor(e) {
                    this._set = {}, this._defaultValueFunc = e
                }
            }
            let g = new class e {
                    request(e, t) {
                        this.requested.get(e).add(t)
                    }
                    hasRequested(e, t) {
                        return this.requested.get(e).has(t)
                    }
                    finishRequesting(e, t) {
                        let n = this.requested.get(e);
                        t.forEach(e => n.delete(e)), g.compact(e)
                    }
                    getRequested(e) {
                        return this.requested.get(e)
                    }
                    getNextBatch(e, t) {
                        return Array.from(this.requested.get(e)).slice(0, t)
                    }
                    hasNext() {
                        return this.requested.hasNext()
                    }
                    next() {
                        return this.requested.next()
                    }
                    compact(e) {
                        0 === this.requested.get(e).size && this.requested.delete(e)
                    }
                    constructor() {
                        this.requested = new _(() => new Set)
                    }
                },
                E = null;

            function h(e, t) {
                let n = (0, d.isForumActivityExperimentEnabled)(e);
                if (n) {
                    let {
                        loaded: e,
                        message: n
                    } = f.default.getMessageState(t);
                    return !e && null == n
                }
                return !1
            }

            function M(e, t) {
                return !e && null == t
            }

            function p(e) {
                var t, n;
                let {
                    loaded: l,
                    firstMessage: i
                } = (0, a.useStateFromStoresObject)([c.default], () => c.default.getMessage(e.id)), s = (0, a.useStateFromStores)([u.default], () => u.default.getChannel(e.parent_id));
                if (null != s && (t = l, n = i, !t && null == n)) S(s, e.id);
                return {
                    loaded: l,
                    firstMessage: i
                }
            }

            function A(e, t) {
                let {
                    loaded: n,
                    message: l
                } = (0, a.useStateFromStoresObject)([f.default], () => f.default.getMessageState(t.id));
                return null != e && h(t.guild_id, t.id) && S(e, t.id), {
                    loaded: n,
                    mostRecentMessage: l
                }
            }

            function x(e, t) {
                let n = !1;
                t.forEach(t => {
                    var l, i;
                    let {
                        loaded: a,
                        firstMessage: s
                    } = c.default.getMessage(t);
                    if (l = a, i = s, !l && null == i || h(e.guild_id, t)) g.request(e.id, t), n = !0
                }), n && null == E && (E = setTimeout(R, 0))
            }

            function T(e) {
                x(e, (0, o.computeThreadIdsSnapshot)(e.id).slice(0, 10))
            }

            function S(e, t) {
                if (g.hasRequested(e.id, t)) return;
                let n = (0, o.computeThreadIdsSnapshot)(e.id),
                    l = n.findIndex(e => e === t),
                    i = n.slice(l, l + 5).filter(t => !g.hasRequested(e.id, t));
                x(e, i)
            }
            async function R() {
                try {
                    for (; g.hasNext();) await v(g.next())
                } finally {
                    E = null
                }
            }
            async function v(e) {
                let t = g.getNextBatch(e, 10);
                try {
                    var n;
                    if (0 === t.length) return;
                    let l = null === (n = u.default.getChannel(e)) || void 0 === n ? void 0 : n.guild_id;
                    if (null == l) return;
                    let {
                        body: {
                            threads: i
                        }
                    } = await s.default.post({
                        url: m.Endpoints.FORUM_POSTS(e),
                        body: {
                            thread_ids: t
                        }
                    });
                    r.default.dispatch({
                        type: "LOAD_FORUM_POSTS",
                        guildId: l,
                        threads: i
                    })
                } catch (e) {} finally {
                    g.finishRequesting(e, t)
                }
            }
        },
        324261: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var l = n("446674"),
                i = n("913144"),
                a = n("692038"),
                s = n("42203"),
                r = n("697218"),
                u = n("449008"),
                o = n("299039");
            let d = {};

            function c(e) {
                var t;
                let n = s.default.getChannel(null == e ? void 0 : e.channel_id);
                if (null == n || !n.isForumPost()) return !1;
                let l = d[n.id];
                return o.default.compare(null == e ? void 0 : e.id, null == l ? void 0 : null === (t = l.message) || void 0 === t ? void 0 : t.id) > -1
            }

            function f(e, t) {
                let n = null == t ? null : (0, a.createMessageRecord)(t);
                return d[e] = {
                    loaded: !0,
                    message: n
                }, !0
            }

            function m(e) {
                return d[e]
            }

            function _(e) {
                var t;
                return null === (t = d[e]) || void 0 === t ? void 0 : t.message
            }

            function g(e) {
                let {
                    threads: t,
                    mostRecentMessages: n
                } = e;
                t.forEach(e => f(e.id, null)), null == n || n.filter(u.isNotNullish).forEach(e => {
                    f(e.channel_id, e)
                })
            }
            class E extends l.default.Store {
                initialize() {
                    this.waitFor(s.default, r.default)
                }
                getMessageState(e) {
                    return !(e in d) && (d[e] = {
                        loaded: !1,
                        message: null
                    }), d[e]
                }
            }
            E.displayName = "ForumPostRecentMessageStore";
            var h = new E(i.default, {
                CONNECTION_OPEN: function() {
                    d = {}
                },
                MESSAGE_CREATE: function(e) {
                    if (e.isPushNotification || !c(e.message)) return !1;
                    e.message.channel_id === e.message.id ? f(e.message.channel_id, null) : f(e.message.channel_id, e.message)
                },
                MESSAGE_UPDATE: function(e) {
                    if (!c(e.message) || e.message.channel_id === e.message.id) return !1;
                    ! function(e, t) {
                        let n = function(e) {
                                return d[e]
                            }(e),
                            l = _(e);
                        null != n && null != l && (d[e] = {
                            ...n,
                            message: (0, a.updateMessageRecord)(l, t)
                        })
                    }(e.message.channel_id, e.message)
                },
                MESSAGE_DELETE: function(e) {
                    return function(e, t) {
                        let n = _(e);
                        return (null == n ? void 0 : n.id) === t && (delete d[e], !0)
                    }(e.channelId, e.id)
                },
                LOAD_FORUM_POSTS: function(e) {
                    let {
                        threads: t
                    } = e;
                    for (let e in t) f(e, t[e].most_recent_message)
                },
                LOAD_ARCHIVED_THREADS_SUCCESS: g,
                LOAD_THREADS_SUCCESS: g
            })
        },
        67994: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                a = n("446674"),
                s = n("77078"),
                r = n("404118"),
                u = n("81594"),
                o = n("681736"),
                d = n("694187"),
                c = n("42203"),
                f = n("474643"),
                m = n("305961"),
                _ = n("377253"),
                g = n("476765"),
                E = n("254490"),
                h = n("412861"),
                M = n("834021"),
                p = n("867965"),
                A = n("152637"),
                x = n("578198"),
                T = n("49111"),
                S = n("843455"),
                R = n("782340"),
                v = n("79588");

            function L(e) {
                var t;
                let {
                    threadId: n,
                    attachments: L,
                    sendMessage: C,
                    transitionState: O,
                    onClose: I
                } = e, b = (0, g.useUID)(), U = (0, a.useStateFromStores)([c.default], () => c.default.getChannel(n), [n]), y = (0, a.useStateFromStores)([m.default], () => m.default.getGuild(null == U ? void 0 : U.getGuildId()), [U]), D = (0, a.useStateFromStores)([c.default], () => c.default.getChannel(null == U ? void 0 : U.parent_id), [U]), F = null === (t = L[0]) || void 0 === t ? void 0 : t.item, [N, P] = i.useState(null);
                i.useEffect(() => {
                    null != F && (0, d.processImage)(F.file, (e, t) => P(e), S.NOOP)
                }, [F]);
                let j = null != F && null != N ? {
                        src: N,
                        width: A.MAX_THUMBNAIL_WIDTH,
                        height: A.MAX_THUMBNAIL_HEIGHT,
                        spoiler: L[0].spoiler,
                        alt: L[0].description
                    } : null,
                    [z, G] = i.useState(!1),
                    w = i.useCallback(() => {
                        (0, p.trackForumAddMediaToOriginalPostClicked)({
                            added: !1
                        }), C(), I()
                    }, [C, I]),
                    B = i.useCallback(() => {
                        null != U && null != y && ((0, p.trackForumAddMediaToOriginalPostClicked)({
                            added: !0
                        }), ! function(e) {
                            let {
                                thread: t,
                                attachments: n,
                                setIsUploading: l,
                                guild: i,
                                onClose: a
                            } = e, s = new o.default(T.Endpoints.MESSAGE(t.id, t.id), "PATCH");
                            s.on("start", () => {
                                l(!0)
                            }), s.on("progress", e => {
                                let r = (0, E.maxFileSize)(i.id);
                                e.currentSize > r && (s.cancel(), l(!1), a(), (0, h.showUploadFileSizeExceededError)(t, (0, M.getWebUploadFiles)(n)))
                            }), s.on("error", (e, t) => {
                                l(!1), t === T.AbortCodes.EXPLICIT_CONTENT && (a(), r.default.show({
                                    title: R.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                                    body: R.default.Messages.BOT_GUILD_EXPLICIT_CONTENT.format({
                                        name: i.toString()
                                    })
                                }))
                            }), s.on("complete", () => {
                                l(!1), a(), u.default.clearAll(t.id, f.DraftType.ChannelMessage)
                            });
                            let d = _.default.getMessages(t.id).get(t.id),
                                c = null != d ? d.attachments : [];
                            s.uploadFiles(n, {
                                attachments: [...c]
                            }, {
                                addFilesTo: "attachments"
                            })
                        }({
                            thread: U,
                            attachments: L,
                            setIsUploading: G,
                            guild: y,
                            onClose: I
                        }))
                    }, [U, L, G, y, I]);
                return null == D ? null : (0, l.jsxs)(s.ModalRoot, {
                    transitionState: O,
                    size: s.ModalSize.SMALL,
                    className: v.modalRoot,
                    "aria-labelledby": b,
                    children: [(0, l.jsxs)(s.ModalContent, {
                        className: v.modal,
                        children: [(0, l.jsx)(s.Heading, {
                            variant: "heading-md/semibold",
                            className: v.header,
                            id: b,
                            children: R.default.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_TITLE
                        }), (0, l.jsx)(s.Text, {
                            variant: "text-md/normal",
                            className: v.body,
                            children: R.default.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_DESCRIPTION
                        }), (0, l.jsx)("div", {
                            className: v.forumPost,
                            children: (0, l.jsx)(x.ForumPostComposerStoreProvider, {
                                createStore: () => (0, x.createForumPostComposerStore)(D),
                                children: (0, l.jsx)(A.default, {
                                    threadId: n,
                                    goToThread: S.NOOP,
                                    overrideMedia: j
                                })
                            })
                        })]
                    }), (0, l.jsxs)(s.ModalFooter, {
                        className: v.modalFooter,
                        children: [(0, l.jsx)(s.Button, {
                            look: s.Button.Looks.BLANK,
                            className: v.cancelButton,
                            disabled: z,
                            onClick: I,
                            children: R.default.Messages.CANCEL
                        }), (0, l.jsx)(s.Button, {
                            color: s.Button.Colors.PRIMARY,
                            className: v.dontAddButton,
                            disabled: z,
                            onClick: w,
                            children: R.default.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_DONT_ADD
                        }), (0, l.jsx)(s.Button, {
                            color: s.Button.Colors.BRAND,
                            className: v.button,
                            submitting: z,
                            onClick: B,
                            autoFocus: !0,
                            children: R.default.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_ADD
                        })]
                    })]
                })
            }
        },
        90625: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                IncreasedActivityForumTagPill: function() {
                    return M
                },
                IncreasedActivityForumTagOverflow: function() {
                    return p
                },
                default: function() {
                    return A
                },
                ForumTagOverflow: function() {
                    return x
                }
            }), n("222007");
            var l, i, a = n("37983"),
                s = n("884691"),
                r = n("414456"),
                u = n.n(r),
                o = n("974667"),
                d = n("446674"),
                c = n("77078"),
                f = n("430568"),
                m = n("206230"),
                _ = n("385976"),
                g = n("945330"),
                E = n("782340"),
                h = n("951779");

            function M(e) {
                let {
                    tag: t,
                    size: n = 1,
                    disabled: l,
                    className: i,
                    onClick: r,
                    onRemove: M,
                    selected: p,
                    ariaLabel: A
                } = e, {
                    name: x,
                    emojiId: T,
                    emojiName: S
                } = t, R = null != M, [v, L] = s.useState(!1), C = (0, d.useStateFromStores)([_.default], () => null != T ? _.default.getUsableCustomEmojiById(T) : null), O = R || null != r, I = (!R || !v) && (null != T || null != S), b = 0 === n, U = s.useRef(null), y = (0, d.useStateFromStores)([m.default], () => m.default.keyboardModeEnabled), D = (0, a.jsxs)(a.Fragment, {
                    children: [I ? (0, a.jsx)(f.default, {
                        className: u(h.emoji, {
                            [h.small]: b
                        }),
                        emojiId: T,
                        emojiName: S,
                        animated: !!(null == C ? void 0 : C.animated),
                        size: "reaction",
                        alt: ""
                    }) : null, v && R && (0, a.jsx)("div", {
                        className: h.closeCircle,
                        children: (0, a.jsx)(g.default, {
                            className: h.close
                        })
                    }), (0, a.jsx)(c.Text, {
                        className: h.increasedActivityText,
                        variant: "text-xs/medium",
                        lineClamp: 1,
                        children: x
                    })]
                }), F = {
                    key: t.id,
                    className: u(h.pill, h.increasedActivityPill, {
                        [h.disabled]: l,
                        [h.clickable]: O,
                        [h.increasedActivitySmall]: b,
                        [h.selected]: p
                    }, i),
                    onClick: e => {
                        null == r || r(e), null == M || M(t), !y && null != U.current && U.current.blur()
                    },
                    onMouseEnter: () => R && L(!0),
                    onMouseLeave: () => R && L(!1)
                }, N = (0, o.useListItem)("forum-tag-".concat(t.id));
                return O ? (0, a.jsx)(c.Clickable, {
                    ...N,
                    innerRef: U,
                    focusProps: {
                        ringTarget: U
                    },
                    "aria-label": null != A ? A : E.default.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
                        tagName: x
                    }),
                    role: "button",
                    "aria-pressed": p,
                    ...F,
                    children: D
                }) : (0, a.jsx)("div", {
                    "aria-label": null != A ? A : E.default.Messages.FORUM_TAG_A11Y_TAG_BY.format({
                        tagName: x
                    }),
                    ...F,
                    children: D
                })
            }

            function p(e) {
                let {
                    tags: t,
                    count: n,
                    size: l = 1
                } = e, i = 0 === l;
                return (0, a.jsx)(c.Tooltip, {
                    "aria-label": E.default.Messages.FORUM_TAGS,
                    text: (0, a.jsx)(a.Fragment, {
                        children: t.map(e => (0, a.jsx)(A, {
                            tag: e,
                            className: h.tooltipPill,
                            size: A.Sizes.SMALL
                        }, e.id))
                    }),
                    children: e => (0, a.jsx)("div", {
                        ...e,
                        className: u(h.pill, h.increasedActivityPill, {
                            [h.increasedActivitySmall]: i
                        }),
                        children: (0, a.jsxs)(c.Text, {
                            className: h.increasedActivityText,
                            variant: i ? "text-xs/medium" : "text-sm/medium",
                            children: ["+", n]
                        })
                    })
                })
            }

            function A(e) {
                let {
                    tag: t,
                    size: n = 1,
                    disabled: l,
                    className: i,
                    onClick: r,
                    onRemove: M,
                    selected: p,
                    ariaLabel: A
                } = e, {
                    name: x,
                    emojiId: T,
                    emojiName: S
                } = t, R = null != M, [v, L] = s.useState(!1), C = (0, d.useStateFromStores)([_.default], () => null != T ? _.default.getUsableCustomEmojiById(T) : null), O = R || null != r, I = (!R || !v) && (null != T || null != S), b = 0 === n, U = s.useRef(null), y = (0, d.useStateFromStores)([m.default], () => m.default.keyboardModeEnabled), D = (0, a.jsxs)(a.Fragment, {
                    children: [I ? (0, a.jsx)(f.default, {
                        className: u(h.emoji, {
                            [h.small]: b
                        }),
                        emojiId: T,
                        emojiName: S,
                        animated: !!(null == C ? void 0 : C.animated),
                        size: "reaction"
                    }) : null, v && R && (0, a.jsx)("div", {
                        className: h.closeCircle,
                        children: (0, a.jsx)(g.default, {
                            className: h.close
                        })
                    }), (0, a.jsx)(c.Text, {
                        variant: b ? "text-xs/semibold" : "text-sm/semibold",
                        lineClamp: 1,
                        children: x
                    })]
                }), F = {
                    key: t.id,
                    className: u(h.pill, {
                        [h.disabled]: l,
                        [h.clickable]: O,
                        [h.small]: b,
                        [h.selected]: p
                    }, i),
                    onClick: e => {
                        null == r || r(e), null == M || M(t), !y && null != U.current && U.current.blur()
                    },
                    onMouseEnter: () => R && L(!0),
                    onMouseLeave: () => R && L(!1)
                }, N = (0, o.useListItem)("forum-tag-".concat(t.id));
                return O ? (0, a.jsx)(c.Clickable, {
                    ...N,
                    innerRef: U,
                    focusProps: {
                        ringTarget: U
                    },
                    "aria-label": null != A ? A : E.default.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
                        tagName: x
                    }),
                    role: "button",
                    "aria-pressed": p,
                    ...F,
                    children: D
                }) : (0, a.jsx)("div", {
                    ...F,
                    children: D
                })
            }

            function x(e) {
                let {
                    tags: t,
                    count: n,
                    size: l = 1
                } = e, i = 0 === l;
                return (0, a.jsx)(c.Tooltip, {
                    "aria-label": E.default.Messages.FORUM_TAGS,
                    text: (0, a.jsx)(a.Fragment, {
                        children: t.map(e => (0, a.jsx)(A, {
                            tag: e,
                            className: h.tooltipPill,
                            size: A.Sizes.SMALL
                        }, e.id))
                    }),
                    children: e => (0, a.jsx)("div", {
                        ...e,
                        className: u(h.pill, {
                            [h.small]: i
                        }),
                        children: (0, a.jsxs)(c.Text, {
                            variant: i ? "text-xs/semibold" : "text-sm/semibold",
                            children: ["+", n]
                        })
                    })
                })
            }(i = l || (l = {}))[i.SMALL = 0] = "SMALL", i[i.MEDIUM = 1] = "MEDIUM", A.Sizes = l
        },
        406043: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useCurrentUserCommunicationDisabled: function() {
                    return r
                },
                default: function() {
                    return d
                },
                userCommunicationDisabled: function() {
                    return c
                }
            });
            var l = n("446674"),
                i = n("26989"),
                a = n("697218"),
                s = n("509");

            function r(e) {
                let t = (0, l.useStateFromStores)([a.default], () => a.default.getCurrentUser());
                return d(null == t ? void 0 : t.id, e)
            }

            function u(e, t, n) {
                return null != t && null != e ? n.getMember(t, e) : null
            }

            function o(e) {
                var t;
                return [null !== (t = null == e ? void 0 : e.communicationDisabledUntil) && void 0 !== t ? t : null, (0, s.isMemberCommunicationDisabled)(e)]
            }

            function d(e, t) {
                let n = (0, l.useStateFromStores)([i.default], () => u(e, t, i.default), [t, e]);
                return o(n)
            }

            function c(e, t) {
                let n = u(e, t, i.default);
                return o(n)
            }
        },
        895026: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchMemberCounts: function() {
                    return c
                },
                requestMembersForRole: function() {
                    return m
                }
            });
            var l = n("693566"),
                i = n.n(l),
                a = n("872717"),
                s = n("913144"),
                r = n("851387"),
                u = n("36402"),
                o = n("49111");
            async function d(e) {
                try {
                    s.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
                        guildId: e
                    });
                    let t = await a.default.get({
                            url: o.Endpoints.GUILD_ROLE_MEMBER_COUNTS(e)
                        }),
                        n = t.body;
                    s.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
                        guildId: e,
                        roleMemberCount: n
                    })
                } catch (t) {
                    s.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE",
                        guildId: e
                    })
                }
            }
            async function c(e) {
                u.default.shouldFetch(e) && await d(e)
            }
            let f = new i({
                maxAge: 1e4
            });

            function m(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    l = "".concat(e, "-").concat(t);
                if (!n || null == f.get(l)) {
                    var i, s;
                    return f.set(l, !0), i = e, s = t, a.default.get({
                        url: o.Endpoints.GUILD_ROLE_MEMBER_IDS(i, s)
                    }).then(e => (r.default.requestMembersById(i, e.body, !1), e.body.length))
                }
                return Promise.resolve(null)
            }
        },
        36402: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("446674"),
                i = n("913144");
            let a = {},
                s = {};
            class r extends l.default.Store {
                getRoleMemberCount(e) {
                    return null != e ? a[e] : null
                }
                shouldFetch(e) {
                    if (null == e) return !1;
                    let t = s[e];
                    return null == t || Date.now() - t > 12e4
                }
            }
            r.displayName = "GuildRoleMemberCountStore";
            var u = new r(i.default, {
                GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        roleMemberCount: n
                    } = e;
                    a[t] = n, s[t] = Date.now()
                },
                GUILD_ROLE_MEMBER_COUNT_UPDATE: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        count: l
                    } = e, i = a[t];
                    if (null == i) return !1;
                    i[n] = l
                },
                GUILD_ROLE_MEMBER_BULK_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        added: l
                    } = e, i = a[t];
                    if (null == i || null == i[n]) return !1;
                    let s = Object.keys(l).length;
                    i[n] += s
                },
                GUILD_ROLE_MEMBER_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, l = a[t];
                    if (null == l || null == l[n]) return !1;
                    l[n] = l[n] + 1
                },
                GUILD_ROLE_MEMBER_REMOVE: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, l = a[t];
                    if (null == l || null == l[n]) return !1;
                    l[n] = Math.max(l[n] - 1, 0)
                },
                GUILD_ROLE_CREATE: function(e) {
                    let {
                        guildId: t,
                        role: n
                    } = e;
                    null == a[t] && (a[t] = {}), a[t][n.id] = 0
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    delete a[t.id], delete s[t.id]
                }
            })
        },
        441823: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openUserContextMenu: function() {
                    return a
                },
                openModerateUserContextMenu: function() {
                    return s
                },
                openModerateRoleContextMenu: function() {
                    return r
                },
                openModerationRaidContextMenu: function() {
                    return u
                }
            }), n("70102");
            var l = n("37983");
            n("884691");
            var i = n("272030");

            function a(e, t, a) {
                a.isGroupDM() ? (0, i.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("166452").then(n.bind(n, "166452"));
                    return n => (0, l.jsx)(e, {
                        ...n,
                        user: t,
                        channel: a
                    })
                }) : a.isDM() ? (0, i.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("130074").then(n.bind(n, "130074"));
                    return n => (0, l.jsx)(e, {
                        ...n,
                        user: t,
                        channel: a,
                        showMute: !1,
                        targetIsUser: !0
                    })
                }) : null != a.guild_id ? (0, i.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("834247").then(n.bind(n, "834247"));
                    return n => (0, l.jsx)(e, {
                        ...n,
                        user: t,
                        channel: a,
                        guildId: a.guild_id
                    })
                }) : (0, i.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("406784").then(n.bind(n, "406784"));
                    return n => (0, l.jsx)(e, {
                        ...n,
                        user: t
                    })
                })
            }

            function s(e, t) {
                let {
                    user: a,
                    channel: s,
                    moderationAlertId: r,
                    guildId: u,
                    analyticsLocations: o,
                    onCloseContextMenu: d
                } = t;
                if ((null == s ? void 0 : s.isGroupDM()) || (null == s ? void 0 : s.isDM())) throw Error("Cannot moderate user in DM or group DM");
                let c = null != u ? u : null == s ? void 0 : s.getGuildId();
                null != c && (0, i.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("467940").then(n.bind(n, "467940"));
                    return t => (0, l.jsx)(e, {
                        ...t,
                        user: a,
                        channelId: null == s ? void 0 : s.id,
                        guildId: c,
                        moderationAlertId: r,
                        analyticsLocations: o,
                        onCloseContextMenu: d
                    })
                })
            }

            function r(e, t) {
                let {
                    user: a,
                    guildId: s,
                    analyticsLocations: r,
                    onCloseContextMenu: u
                } = t;
                (0, i.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("522651").then(n.bind(n, "522651"));
                    return t => (0, l.jsx)(e, {
                        ...t,
                        user: a,
                        guildId: s,
                        analyticsLocations: r,
                        onCloseContextMenu: u
                    })
                })
            }

            function u(e, t, a) {
                null != a && (0, i.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("701587").then(n.bind(n, "701587"));
                    return t => (0, l.jsx)(e, {
                        ...t,
                        guildId: a
                    })
                })
            }
        },
        412861: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showUploadFileSizeExceededError: function() {
                    return A
                },
                promptToUpload: function() {
                    return x
                }
            }), n("424973"), n("222007"), n("70102");
            var l = n("255397"),
                i = n("81594"),
                a = n("783480"),
                s = n("336522"),
                r = n("966724"),
                u = n("716241"),
                o = n("191145"),
                d = n("585722"),
                c = n("697218"),
                f = n("599110"),
                m = n("254490"),
                _ = n("719923"),
                g = n("834021"),
                E = n("49111"),
                h = n("894488"),
                M = n("646718"),
                p = n("782340");

            function A(e, t) {
                let n = c.default.getCurrentUser(),
                    l = e.getGuildId(),
                    i = m.maxFileSize(l),
                    a = [],
                    r = 0,
                    o = 0,
                    d = 0,
                    f = [];
                for (let e of t) d += 1, r += e.size, a.push(e.size), e.size > o && (o = e.size), null != e.type ? f.push(e.type) : f.push("unknown");
                if (o > i) {
                    (0, u.trackWithMetadata)(E.AnalyticEvents.FILE_SIZE_LIMIT_EXCEEDED, {
                        channel_id: e.id,
                        guild_id: l,
                        user_individual_file_size_limit: i,
                        pre_compression_file_sizes: a,
                        pre_compression_aggregate_file_size: r,
                        num_attachments: d,
                        error_type: h.FileUploadErrorTypes.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
                        attachment_mimetypes: f
                    }), (0, s.openUploadError)({
                        title: p.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                        help: (0, g.getErrorHelp)(n, l),
                        showPremiumUpsell: !(0, _.isPremiumExactly)(n, M.PremiumTypes.TIER_2),
                        fileSize: o
                    });
                    return
                }(0, s.openUploadError)({
                    title: p.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                    help: p.default.Messages.UPLOAD_AREA_REQUEST_LIMIT_HELP.format({
                        maxSize: m.sizeString(m.getMaxRequestSize())
                    })
                })
            }

            function x(e, t, n) {
                let {
                    filesMetadata: u,
                    requireConfirm: c = !0,
                    showLargeMessageDialog: m = !1,
                    isThumbnail: _ = !1
                } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                if (e.length < 1) return;
                if (null != u && u.length !== e.length) throw Error("Unexpected mismatch between files and file metadata");
                let h = t.getGuildId();
                if ((0, g.filesExceedUploadLimits)(e, h)) {
                    A(t, e);
                    return
                }
                if (d.default.getUploadCount(t.id, n) + e.length > E.MAX_UPLOAD_COUNT) {
                    (0, s.openUploadError)({
                        title: p.default.Messages.ATTACHMENT_TOO_MANY_ERROR_TITLE,
                        help: p.default.Messages.ATTACHMENT_TOO_MANY_ERROR_MESSAGE.format({
                            limit: E.MAX_UPLOAD_COUNT
                        })
                    }), f.default.track(E.AnalyticEvents.UPLOAD_FILE_LIMIT_ERROR, {
                        existing_count: d.default.getUploadCount(t.id, n),
                        new_count: e.length
                    });
                    return
                }
                if ((t.type === E.ChannelTypes.GUILD_VOICE || t.type === E.ChannelTypes.GUILD_STAGE_VOICE) && !o.default.getChatOpen(t.id) && l.default.updateChatOpen(t.id, !0), c) {
                    let l = Array.from(e).map((e, t) => ({
                        file: e,
                        platform: r.UploadPlatform.WEB,
                        isThumbnail: _,
                        ...null == u ? void 0 : u[t]
                    }));
                    i.default.addFiles({
                        files: l,
                        channelId: t.id,
                        showLargeMessageDialog: m,
                        draftType: n
                    })
                } else a.default.instantBatchUpload({
                    channelId: t.id,
                    files: e,
                    draftType: n,
                    isThumbnail: _,
                    filesMetadata: u
                })
            }
        },
        834021: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getErrorHelp: function() {
                    return u
                },
                filesExceedUploadLimits: function() {
                    return o
                },
                getWebUploadFiles: function() {
                    return d
                }
            }), n("808653"), n("424973");
            var l = n("966724"),
                i = n("254490"),
                a = n("719923"),
                s = n("646718"),
                r = n("782340");

            function u(e, t) {
                let n = i.sizeString(i.maxFileSize(t));
                return a.default.isPremium(e, s.PremiumTypes.TIER_2) ? r.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                    maxSize: n
                }) : a.default.isPremium(e, s.PremiumTypes.TIER_1) ? r.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP_PREMIUM_TIER_1.format({
                    maxSize: n
                }) : r.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                    maxSize: n
                })
            }

            function o(e, t) {
                return i.anyFileTooLarge(e, t) || i.uploadSumTooLarge(e)
            }

            function d(e) {
                return e.reduce((e, t) => (t.item.platform === l.UploadPlatform.WEB && e.push(t.item.file), e), [])
            }
        }
    }
]);