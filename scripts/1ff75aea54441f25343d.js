(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["86681"], {
        828986: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return c
                }
            });
            var a = t("872717"),
                n = t("913144"),
                l = t("263024"),
                i = t("508229"),
                d = t("404118"),
                r = t("49111"),
                u = t("782340");
            let o = {
                async pinMessage(e, s) {
                    let {
                        id: t,
                        name: n
                    } = e;
                    await l.default.unarchiveThreadIfNecessary(e.id), a.default.put({
                        url: r.Endpoints.PIN(t, s),
                        oldFormErrors: !0
                    }).catch(() => {
                        let s;
                        s = e.isPrivate() ? u.default.Messages.PIN_MESSAGE_TOO_MANY_BODY_PRIVATE_CHANNEL.format({
                            maxPins: r.MAX_PINS_PER_CHANNEL
                        }) : u.default.Messages.PIN_MESSAGE_TOO_MANY_BODY.format({
                            maxPins: r.MAX_PINS_PER_CHANNEL,
                            channelName: n
                        }), d.default.show({
                            title: u.default.Messages.PIN_MESSAGE_TOO_MANY_TITLE,
                            body: s,
                            confirmText: u.default.Messages.OKAY
                        })
                    })
                },
                async unpinMessage(e, s) {
                    await l.default.unarchiveThreadIfNecessary(e.id), a.default.delete({
                        url: r.Endpoints.PIN(e.id, s),
                        oldFormErrors: !0
                    }).catch(() => d.default.show({
                        title: u.default.Messages.UNPIN_MESSAGE_FAILED_TITLE,
                        body: u.default.Messages.UNPIN_MESSAGE_FAILED_BODY,
                        confirmText: u.default.Messages.TRY_AGAIN,
                        cancelText: u.default.Messages.CANCEL,
                        onConfirm: o.unpinMessage.bind(o, e, s)
                    }))
                },
                ackPins(e) {
                    n.default.dispatch({
                        type: "CHANNEL_PINS_ACK",
                        channelId: e
                    })
                },
                fetchPins(e) {
                    let s = i.default.getPinnedMessages(e);
                    (null == s || !s.loaded && !s.loading) && (n.default.dispatch({
                        type: "LOAD_PINNED_MESSAGES",
                        channelId: e
                    }), a.default.get({
                        url: r.Endpoints.PINS(e),
                        retries: 2,
                        oldFormErrors: !0
                    }).then(s => {
                        n.default.dispatch({
                            type: "LOAD_PINNED_MESSAGES_SUCCESS",
                            messages: s.body,
                            channelId: e
                        })
                    }, () => {
                        n.default.dispatch({
                            type: "LOAD_PINNED_MESSAGES_FAILURE",
                            channelId: e
                        })
                    }))
                }
            };
            var c = o
        },
        249561: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return A
                }
            }), t("702976"), t("222007");
            var a = t("37983"),
                n = t("884691"),
                l = t("414456"),
                i = t.n(l),
                d = t("77078"),
                r = t("828986"),
                u = t("819689"),
                o = t("679653"),
                c = t("390236"),
                f = t("377114"),
                E = t("699473"),
                g = t("27618"),
                m = t("697218"),
                _ = t("822332"),
                N = t("568734"),
                M = t("870190"),
                h = t("49111"),
                S = t("782340"),
                T = t("834476");
            class p extends n.PureComponent {
                render() {
                    let e, s;
                    let {
                        report: t
                    } = this.state, {
                        channel: n,
                        message: l,
                        showContextMenuHint: i,
                        ...r
                    } = this.props, u = n.type === h.ChannelTypes.GUILD_ANNOUNCEMENT && (0, N.hasFlag)(l.flags, h.MessageFlags.CROSSPOSTED);
                    return i && (e = (0, a.jsx)(_.default, {
                        className: T.spacingTop,
                        children: S.default.Messages.DELETE_MESSAGE_CONTEXT_MENU_HINT.format()
                    })), (0, M.canDeleteAndReportMessage)(l) && (s = (0, a.jsx)(d.FormSwitch, {
                        value: t,
                        onChange: this.handleToggleReport,
                        hideBorder: !0,
                        className: T.spacingTop,
                        children: S.default.Messages.DELETE_MESSAGE_REPORT
                    })), (0, a.jsx)(c.default.Provider, {
                        value: n.guild_id,
                        children: (0, a.jsxs)(d.ConfirmModal, {
                            header: u ? S.default.Messages.MODIFY_FOLLOWED_NEWS_HEADER : S.default.Messages.DELETE_MESSAGE_TITLE,
                            confirmText: S.default.Messages.DELETE,
                            cancelText: S.default.Messages.CANCEL,
                            onConfirm: this.handleDelete,
                            ...r,
                            children: [(0, a.jsx)(d.Text, {
                                variant: "text-md/normal",
                                className: T.spacing,
                                children: u ? S.default.Messages.DELETE_FOLLOWED_NEWS_BODY : S.default.Messages.DELETE_MESSAGE_BODY
                            }), (0, a.jsx)("div", {
                                className: T.message,
                                children: (0, a.jsx)(E.default, {
                                    channel: n,
                                    message: l,
                                    disableInteraction: !0
                                })
                            }), s, e]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        report: !1
                    }, this.handleDelete = () => {
                        let {
                            report: e
                        } = this.state, {
                            channel: s,
                            message: t
                        } = this.props;
                        e ? (0, f.showReportModalForMessage)(t, () => u.default.deleteMessage(s.id, t.id)) : u.default.deleteMessage(s.id, t.id)
                    }, this.handleToggleReport = e => {
                        this.setState({
                            report: e
                        })
                    }
                }
            }
            var A = {
                confirmPin: function(e, s) {
                    (0, d.openModal)(t => {
                        let n;
                        let l = (0, o.computeChannelName)(e, m.default, g.default);
                        return n = e.isPrivate() ? S.default.Messages.PIN_MESSAGE_BODY_PRIVATE_CHANNEL : S.default.Messages.PIN_MESSAGE_BODY.format({
                            channelName: l
                        }), (0, a.jsx)(c.default.Provider, {
                            value: e.guild_id,
                            children: (0, a.jsxs)(d.ConfirmModal, {
                                header: S.default.Messages.PIN_MESSAGE_TITLE,
                                confirmText: S.default.Messages.PIN_CONFIRM,
                                cancelText: S.default.Messages.CANCEL,
                                confirmButtonColor: d.Button.Colors.BRAND,
                                onConfirm: () => r.default.pinMessage(e, s.id),
                                ...t,
                                children: [(0, a.jsx)(d.Text, {
                                    variant: "text-md/normal",
                                    className: T.spacing,
                                    children: n
                                }), (0, a.jsx)("div", {
                                    className: T.message,
                                    children: (0, a.jsx)(E.default, {
                                        channel: e,
                                        message: s,
                                        animateAvatar: !1,
                                        disableInteraction: !0
                                    })
                                })]
                            })
                        })
                    })
                },
                confirmUnpin: function(e, s) {
                    (0, d.openModal)(t => (0, a.jsx)(c.default.Provider, {
                        value: e.guild_id,
                        children: (0, a.jsxs)(d.ConfirmModal, {
                            header: S.default.Messages.UNPIN_MESSAGE_TITLE,
                            confirmText: S.default.Messages.UNPIN_CONFIRM,
                            cancelText: S.default.Messages.CANCEL,
                            onConfirm: () => r.default.unpinMessage(e, s.id),
                            ...t,
                            children: [(0, a.jsx)(d.Text, {
                                variant: "text-md/normal",
                                className: T.spacing,
                                children: S.default.Messages.UNPIN_MESSAGE_BODY
                            }), (0, a.jsx)("div", {
                                className: i(T.message, T.spacing),
                                children: (0, a.jsx)(E.default, {
                                    channel: e,
                                    message: s,
                                    disableInteraction: !0
                                })
                            }), (0, a.jsx)(_.default, {
                                children: S.default.Messages.UNPIN_MESSAGE_CONTEXT_MENU_HINT.format()
                            })]
                        })
                    }))
                },
                confirmDelete: function(e, s) {
                    let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    (0, d.openModal)(n => (0, a.jsx)(p, {
                        channel: e,
                        message: s,
                        showContextMenuHint: t,
                        ...n
                    }))
                },
                confirmEdit: function(e, s, t) {
                    (0, d.openModal)(n => (0, a.jsx)(d.ConfirmModal, {
                        header: S.default.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
                        confirmText: S.default.Messages.CONFIRM,
                        cancelText: S.default.Messages.CANCEL,
                        confirmButtonColor: d.Button.Colors.BRAND,
                        onConfirm: () => u.default.editMessage(e, s, {
                            content: t
                        }),
                        ...n,
                        children: (0, a.jsx)(d.Text, {
                            variant: "text-md/normal",
                            className: T.spacing,
                            children: S.default.Messages.EDIT_FOLLOWED_NEWS_BODY
                        })
                    }))
                }
            }
        },
        508229: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return T
                }
            }), t("843762");
            var a = t("917351"),
                n = t.n(a),
                l = t("446674"),
                i = t("913144"),
                d = t("692038"),
                r = t("915639"),
                u = t("42203"),
                o = t("26989"),
                c = t("305961"),
                f = t("377253"),
                E = t("27618"),
                g = t("697218");
            let m = {};

            function _(e) {
                let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    n = u.default.getChannel(e),
                    l = null != n ? n.getGuildId() : null;
                return {
                    id: e,
                    messages: s.map(e => (0, d.createMessageRecord)(e)),
                    guildId: l,
                    loaded: t,
                    loading: a
                }
            }

            function N(e) {
                let {
                    channel: s
                } = e;
                delete m[s.id]
            }

            function M() {
                n.forEach(m, e => {
                    n.forEach(e.messages, e => {
                        e.timestamp.locale(r.default.locale)
                    })
                })
            }

            function h() {
                n.forEach(m, e => {
                    e.messages = e.messages.map(e => e.set("blocked", E.default.isBlocked(e.author.id)))
                })
            }
            class S extends l.default.Store {
                initialize() {
                    this.waitFor(u.default, c.default, o.default, f.default, g.default, r.default)
                }
                getPinnedMessages(e) {
                    var s;
                    return null !== (s = m[e]) && void 0 !== s ? s : void 0
                }
                loaded(e) {
                    return null != m[e] && m[e].loaded
                }
            }
            S.displayName = "ChannelPinsStore";
            var T = new S(i.default, {
                CONNECTION_OPEN: function() {
                    m = {}
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: s
                    } = e;
                    m = n(m).filter(e => e.guildId !== s.id).keyBy("id").value()
                },
                MESSAGE_UPDATE: function(e) {
                    let s = e.message.id,
                        t = e.message.channel_id;
                    if (null == t) return !1;
                    let a = m[t];
                    if (null == a && !e.message.pinned) return !1;
                    if (null == e.message.author) {
                        if (null != a) {
                            let l = n.findIndex(a.messages, e => e.id === s);
                            if (l >= 0) {
                                let s = a.messages[l],
                                    n = (0, d.updateMessageRecord)(s, e.message);
                                if (n !== s) {
                                    let e = a.messages.slice();
                                    e[l] = n, m[t].messages = e
                                }
                            }
                        }
                        return
                    }
                    if (e.message.pinned) {
                        if (null == a) {
                            a = _(t, [e.message], !1), m[t] = a;
                            return
                        }
                        a.messages = a.messages.slice();
                        let l = n.findIndex(a.messages, e => e.id === s); - 1 === l ? a.messages.unshift((0, d.createMessageRecord)(e.message)) : a.messages[l] = (0, d.updateMessageRecord)(a.messages[l], e.message), m[t] = a
                    } else {
                        if (null == a) return;
                        let e = n.findIndex(a.messages, e => e.id === s);
                        if (-1 === e) return;
                        a.messages = a.messages.slice(), a.messages.splice(e, 1), m[t] = a
                    }
                },
                MESSAGE_DELETE: function(e) {
                    let {
                        id: s,
                        channelId: t
                    } = e, a = m[t];
                    if (null == a) return !1;
                    let l = n.remove(a.messages, e => e.id === s);
                    if (0 === l.length) return !1;
                    a.messages = a.messages.slice(), m[t] = a
                },
                MESSAGE_DELETE_BULK: function(e) {
                    let {
                        ids: s,
                        channelId: t
                    } = e, a = m[t];
                    null != a && (a.messages = a.messages.filter(e => -1 === s.indexOf(e.id)))
                },
                LOAD_PINNED_MESSAGES: function(e) {
                    let {
                        channelId: s
                    } = e;
                    m[s] = _(s, [], !1, !0)
                },
                LOAD_PINNED_MESSAGES_SUCCESS: function(e) {
                    let {
                        channelId: s,
                        messages: t
                    } = e;
                    m[s] = _(s, t, !0)
                },
                LOAD_PINNED_MESSAGES_FAILURE: function(e) {
                    let {
                        channelId: s
                    } = e;
                    delete m[s]
                },
                USER_SETTINGS_PROTO_UPDATE: M,
                I18N_LOAD_SUCCESS: M,
                CHANNEL_DELETE: N,
                THREAD_DELETE: N,
                RELATIONSHIP_ADD: h,
                RELATIONSHIP_REMOVE: h,
                MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function(e) {
                    let {
                        messageId: s,
                        channelId: t
                    } = e, a = m[t];
                    if (null == a) return;
                    let l = n.findIndex(a.messages, e => e.id === s);
                    if (-1 === l) return;
                    let i = a.messages[l],
                        d = i.attachments.map(e => (null == e.content_scan_version && (e.content_scan_version = -1), e)),
                        r = i.embeds.map(e => (null == e.contentScanVersion && (e.contentScanVersion = -1), e));
                    i = (i = i.set("attachments", d)).set("embeds", r), a.messages = a.messages.slice(), a.messages[l] = i, m[t] = a
                }
            })
        },
        822332: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return f
                }
            });
            var a = t("37983"),
                n = t("884691"),
                l = t("414456"),
                i = t.n(l),
                d = t("77078"),
                r = t("782340"),
                u = t("440318");
            let o = {
                BLOCK: u.block,
                INLINE: u.inline
            };
            class c extends n.PureComponent {
                render() {
                    let {
                        children: e,
                        className: s,
                        textClassName: t,
                        type: n = o.BLOCK,
                        style: l
                    } = this.props;
                    return (0, a.jsxs)("div", {
                        className: i(s, n),
                        style: l,
                        children: [(0, a.jsxs)(d.Text, {
                            variant: "text-sm/bold",
                            tag: "div",
                            color: "text-positive",
                            className: u.pro,
                            children: [r.default.Messages.FORM_LABEL_ROLES_PRO_TIP, ":"]
                        }), (0, a.jsx)(d.Text, {
                            className: i(u.tip, t),
                            variant: "text-sm/normal",
                            children: e
                        })]
                    })
                }
            }
            c.Types = o;
            var f = c
        },
        870190: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                canReportMessage: function() {
                    return r
                },
                canDeleteAndReportMessage: function() {
                    return u
                }
            });
            var a = t("42203"),
                n = t("525065"),
                l = t("957255"),
                i = t("697218"),
                d = t("49111");

            function r(e) {
                return null != e && function(e) {
                    if (null == e) return !1;
                    let s = e.id,
                        t = i.default.getCurrentUser();
                    return null != t && t.id !== s && !0 !== e.system && !0
                }(e.author)
            }

            function u(e) {
                return null != e && r(e) && function(e) {
                    let s = a.default.getChannel(e);
                    if (null == s) return !1;
                    if (s.type === d.ChannelTypes.DM || s.type === d.ChannelTypes.GROUP_DM) return !0;
                    if (l.default.canWithPartialContext(d.Permissions.MANAGE_MESSAGES, {
                            channelId: e
                        })) {
                        let e = n.default.getMemberCount(s.getGuildId());
                        return null != e && e >= 50
                    }
                    return !1
                }(e.getChannelId())
            }
        }
    }
]);