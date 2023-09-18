"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [77579], {
        156824: (e, n, t) => {
            t.d(n, {
                Z: () => u
            });
            var r = t(281110),
                i = t(716239),
                o = t(2590),
                a = t(473708);
            const u = {
                changeNickname: function(e, n, t, u) {
                    return r.ZP.patch({
                        url: o.ANM.GUILD_MEMBER_NICK(e, t),
                        body: {
                            nick: u
                        },
                        oldFormErrors: !0
                    }).then((function(e) {
                        u = e.body.nick;
                        i.Z.sendBotMessage(n, null != u && "" !== u ? a.Z.Messages.COMMAND_NICK_SUCCESS.plainFormat({
                            nick: u
                        }) : a.Z.Messages.COMMAND_NICK_RESET)
                    }), (function(e) {
                        403 === e.status ? i.Z.sendBotMessage(n, a.Z.Messages.COMMAND_NICK_FAILURE_PERMISSION.plainFormat()) : i.Z.sendBotMessage(n, a.Z.Messages.COMMAND_NICK_FAILURE)
                    }))
                }
            }
        },
        567867: (e, n, t) => {
            t.d(n, {
                Z: () => i
            });
            var r = t(744564);
            const i = {
                popFirstFile: function(e) {
                    r.Z.dispatch({
                        type: "UPLOAD_ATTACHMENT_POP_FILE",
                        channelId: e
                    })
                },
                addFiles: function(e) {
                    var n = e.files,
                        t = e.channelId,
                        i = e.showLargeMessageDialog,
                        o = e.draftType;
                    r.Z.dispatch({
                        type: "UPLOAD_ATTACHMENT_ADD_FILES",
                        channelId: t,
                        files: n,
                        showLargeMessageDialog: i,
                        draftType: o
                    })
                },
                addFile: function(e) {
                    var n = e.file,
                        t = e.channelId,
                        i = e.showLargeMessageDialog,
                        o = e.draftType;
                    r.Z.dispatch({
                        type: "UPLOAD_ATTACHMENT_ADD_FILES",
                        channelId: t,
                        files: [n],
                        showLargeMessageDialog: i,
                        draftType: o
                    })
                },
                remove: function(e, n, t) {
                    r.Z.dispatch({
                        type: "UPLOAD_ATTACHMENT_REMOVE_FILE",
                        channelId: e,
                        id: n,
                        draftType: t
                    })
                },
                removeFiles: function(e, n, t) {
                    r.Z.dispatch({
                        type: "UPLOAD_ATTACHMENT_REMOVE_FILES",
                        channelId: e,
                        attachmentIds: n,
                        draftType: t
                    })
                },
                clearAll: function(e, n) {
                    r.Z.dispatch({
                        type: "UPLOAD_ATTACHMENT_CLEAR_ALL_FILES",
                        channelId: e,
                        draftType: n
                    })
                },
                update: function(e, n, t, i) {
                    var o = i.description,
                        a = i.filename,
                        u = i.spoiler,
                        l = i.thumbnail;
                    r.Z.dispatch({
                        type: "UPLOAD_ATTACHMENT_UPDATE_FILE",
                        channelId: e,
                        id: n,
                        filename: a,
                        description: o,
                        thumbnail: l,
                        spoiler: u,
                        draftType: t
                    })
                },
                setUploads: function(e) {
                    var n = e.uploads,
                        t = e.channelId,
                        i = e.draftType,
                        o = e.resetState;
                    r.Z.dispatch({
                        type: "UPLOAD_ATTACHMENT_SET_UPLOADS",
                        channelId: t,
                        uploads: o ? n.map((function(e) {
                            return e.resetState()
                        })) : n,
                        draftType: i
                    })
                },
                setFile: function(e) {
                    var n = e.file,
                        t = e.channelId,
                        i = e.id,
                        o = e.draftType;
                    r.Z.dispatch({
                        type: "UPLOAD_ATTACHMENT_SET_FILE",
                        channelId: t,
                        id: i,
                        file: n,
                        draftType: o
                    })
                }
            }
        },
        924326: (e, n, t) => {
            t.d(n, {
                Z: () => i
            });
            var r = t(667294);

            function i() {
                var e = r.useRef(null);
                null === e.current && (e.current = new AbortController);
                r.useEffect((function() {
                    return function() {
                        var n;
                        null === (n = e.current) || void 0 === n || n.abort()
                    }
                }), []);
                return e.current.signal
            }
        },
        169898: (e, n, t) => {
            t.d(n, {
                Tm: () => F,
                Kh: () => x
            });
            var r = t(441143),
                i = t.n(r),
                o = t(730381),
                a = t.n(o),
                u = t(210595),
                l = t(156824),
                s = t(761953),
                c = t(327499),
                d = t(716239),
                p = t(73904),
                f = t(777302),
                y = t(30027),
                m = t(596217),
                _ = t(161283),
                E = t(225386),
                h = t(968449),
                g = t(61209),
                T = t(682776),
                I = t(473903),
                v = t(749565),
                O = t(272200),
                N = t(127624),
                A = t(2590),
                S = t(515222),
                M = t(473708);

            function C(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function b(e, n, t, r, i, o, a) {
                try {
                    var u = e[o](a),
                        l = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(l) : Promise.resolve(l).then(r, i)
            }

            function D(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

                        function a(e) {
                            b(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            b(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function P(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function R(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }
            var w, Z, L, U = function(e, n) {
                    var t, r, i, o, a = {
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
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    (r = 0, i) && (o = [2 & o[0], i.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            a.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            a.label++;
                                            r = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop();
                                            a.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < i[1]) {
                                                a.label = i[1];
                                                i = o;
                                                break
                                            }
                                            if (i && a.label < i[2]) {
                                                a.label = i[2];
                                                a.ops.push(o);
                                                break
                                            }
                                            i[2] && a.ops.pop();
                                            a.trys.pop();
                                            continue
                                    }
                                    o = n.call(e, a)
                                } catch (e) {
                                    o = [6, e];
                                    r = 0
                                } finally {
                                    t = i = 0
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
                j = t(418973).Z,
                H = function(e, n) {
                    var t;
                    return null === (t = e.find((function(e) {
                        return e.name === n
                    }))) || void 0 === t ? void 0 : t.value
                },
                F = (P(w = {}, N.bi.BUILT_IN, {
                    id: N.bi.BUILT_IN,
                    type: O.Qi.BUILT_IN,
                    get name() {
                        return M.Z.Messages.COMMAND_SECTION_BUILT_IN_NAME
                    }
                }), P(w, N.bi.FRECENCY, {
                    id: N.bi.FRECENCY,
                    type: O.Qi.BUILT_IN,
                    get name() {
                        return M.Z.Messages.FREQUENTLY_USED
                    }
                }), w),
                G = (L = j, function(e) {
                    if (Array.isArray(e)) return C(e)
                }(L) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(L) || function(e, n) {
                    if (e) {
                        if ("string" == typeof e) return C(e, n);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === t && e.constructor && (t = e.constructor.name);
                        return "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? C(e, n) : void 0
                    }
                }(L) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()).concat([{
                    id: "-1",
                    name: "shrug",
                    displayName: "shrug",
                    type: p.yU.CHAT,
                    inputType: O.iw.BUILT_IN_TEXT,
                    applicationId: N.bi.BUILT_IN,
                    get description() {
                        return M.Z.Messages.COMMAND_SHRUG_DESCRIPTION
                    },
                    get displayDescription() {
                        return M.Z.Messages.COMMAND_SHRUG_DESCRIPTION
                    },
                    options: [{
                        name: "message",
                        displayName: "message",
                        type: p.jw.STRING,
                        get description() {
                            return M.Z.Messages.COMMAND_SHRUG_MESSAGE_DESCRIPTION
                        },
                        get displayDescription() {
                            return M.Z.Messages.COMMAND_SHRUG_MESSAGE_DESCRIPTION
                        }
                    }],
                    execute: function(e) {
                        var n, t = null !== (n = H(e, "message")) && void 0 !== n ? n : "";
                        return {
                            content: "".concat(t, " ¯\\_(ツ)_/¯").trim()
                        }
                    }
                }, {
                    id: "-2",
                    name: "tableflip",
                    displayName: "tableflip",
                    type: p.yU.CHAT,
                    inputType: O.iw.BUILT_IN_TEXT,
                    applicationId: N.bi.BUILT_IN,
                    get description() {
                        return M.Z.Messages.COMMAND_TABLEFLIP_DESCRIPTION
                    },
                    get displayDescription() {
                        return M.Z.Messages.COMMAND_TABLEFLIP_DESCRIPTION
                    },
                    options: [{
                        name: "message",
                        displayName: "message",
                        type: p.jw.STRING,
                        get description() {
                            return M.Z.Messages.COMMAND_TABLEFLIP_MESSAGE_DESCRIPTION
                        },
                        get displayDescription() {
                            return M.Z.Messages.COMMAND_TABLEFLIP_MESSAGE_DESCRIPTION
                        }
                    }],
                    execute: function(e) {
                        var n, t = null !== (n = H(e, "message")) && void 0 !== n ? n : "";
                        return {
                            content: "".concat(t, " (╯°□°)╯︵ ┻━┻").trim()
                        }
                    }
                }, {
                    id: "-3",
                    name: "unflip",
                    displayName: "unflip",
                    type: p.yU.CHAT,
                    inputType: O.iw.BUILT_IN_TEXT,
                    applicationId: N.bi.BUILT_IN,
                    get description() {
                        return M.Z.Messages.COMMAND_TABLEUNFLIP_DESCRIPTION
                    },
                    get displayDescription() {
                        return M.Z.Messages.COMMAND_TABLEUNFLIP_DESCRIPTION
                    },
                    options: [{
                        name: "message",
                        displayName: "message",
                        type: p.jw.STRING,
                        get description() {
                            return M.Z.Messages.COMMAND_TABLEUNFLIP_MESSAGE_DESCRIPTION
                        },
                        get displayDescription() {
                            return M.Z.Messages.COMMAND_TABLEUNFLIP_MESSAGE_DESCRIPTION
                        }
                    }],
                    execute: function(e) {
                        var n, t = null !== (n = H(e, "message")) && void 0 !== n ? n : "";
                        return {
                            content: "".concat(t, " ┬─┬ノ( º _ ºノ)").trim()
                        }
                    }
                }, {
                    id: "-4",
                    name: "tts",
                    displayName: "tts",
                    type: p.yU.CHAT,
                    inputType: O.iw.BUILT_IN_TEXT,
                    applicationId: N.bi.BUILT_IN,
                    get description() {
                        return M.Z.Messages.COMMAND_TTS_DESCRIPTION
                    },
                    get displayDescription() {
                        return M.Z.Messages.COMMAND_TTS_DESCRIPTION
                    },
                    options: [{
                        name: "message",
                        displayName: "message",
                        type: p.jw.STRING,
                        get description() {
                            return M.Z.Messages.COMMAND_TTS_MESSAGE_DESCRIPTION
                        },
                        get displayDescription() {
                            return M.Z.Messages.COMMAND_TTS_MESSAGE_DESCRIPTION
                        },
                        required: !0
                    }],
                    predicate: function(e) {
                        var n = e.channel;
                        return !n.isPrivate() && h.OW.getSetting() && T.Z.can(A.Plq.SEND_TTS_MESSAGES, n)
                    },
                    execute: function(e) {
                        var n;
                        return {
                            content: null !== (n = H(e, "message")) && void 0 !== n ? n : "",
                            tts: !0
                        }
                    }
                }, {
                    id: "-5",
                    name: "me",
                    displayName: "me",
                    type: p.yU.CHAT,
                    inputType: O.iw.BUILT_IN_TEXT,
                    applicationId: N.bi.BUILT_IN,
                    get description() {
                        return M.Z.Messages.COMMAND_ME_DESCRIPTION
                    },
                    get displayDescription() {
                        return M.Z.Messages.COMMAND_ME_DESCRIPTION
                    },
                    options: [{
                        name: "message",
                        displayName: "message",
                        type: p.jw.STRING,
                        get description() {
                            return M.Z.Messages.COMMAND_ME_MESSAGE_DESCRIPTION
                        },
                        get displayDescription() {
                            return M.Z.Messages.COMMAND_ME_MESSAGE_DESCRIPTION
                        },
                        required: !0
                    }],
                    execute: function(e) {
                        var n, t = null !== (n = H(e, "message")) && void 0 !== n ? n : "";
                        return {
                            content: "_".concat(t, "_")
                        }
                    }
                }, {
                    id: "-6",
                    name: "spoiler",
                    displayName: "spoiler",
                    type: p.yU.CHAT,
                    inputType: O.iw.BUILT_IN_TEXT,
                    applicationId: N.bi.BUILT_IN,
                    get description() {
                        return M.Z.Messages.COMMAND_SPOILER_DESCRIPTION
                    },
                    get displayDescription() {
                        return M.Z.Messages.COMMAND_SPOILER_DESCRIPTION
                    },
                    options: [{
                        name: "message",
                        displayName: "message",
                        type: p.jw.STRING,
                        get description() {
                            return M.Z.Messages.COMMAND_SPOILER_MESSAGE_DESCRIPTION
                        },
                        get displayDescription() {
                            return M.Z.Messages.COMMAND_SPOILER_MESSAGE_DESCRIPTION
                        },
                        required: !0
                    }],
                    execute: function(e) {
                        var n, t = null !== (n = H(e, "message")) && void 0 !== n ? n : "";
                        return {
                            content: (0, A.XmY)(t).trim()
                        }
                    }
                }, {
                    id: "-7",
                    name: "nick",
                    displayName: "nick",
                    type: p.yU.CHAT,
                    inputType: O.iw.BUILT_IN,
                    applicationId: N.bi.BUILT_IN,
                    get description() {
                        return M.Z.Messages.COMMAND_NICK_DESCRIPTION
                    },
                    get displayDescription() {
                        return M.Z.Messages.COMMAND_NICK_DESCRIPTION
                    },
                    options: [{
                        name: "new_nick",
                        displayName: "new_nick",
                        type: p.jw.STRING,
                        get description() {
                            return M.Z.Messages.COMMAND_NICK_NEWNICK_DESCRIPTION
                        },
                        get displayDescription() {
                            return M.Z.Messages.COMMAND_NICK_NEWNICK_DESCRIPTION
                        }
                    }],
                    predicate: function(e) {
                        var n = e.channel;
                        return !n.isPrivate() && (T.Z.can(A.Plq.CHANGE_NICKNAME, n) || T.Z.can(A.Plq.MANAGE_NICKNAMES, n))
                    },
                    execute: function(e, n) {
                        var t = n.guild,
                            r = n.channel;
                        if (null != t) {
                            var i, o = null !== (i = H(e, "new_nick")) && void 0 !== i ? i : "";
                            l.Z.changeNickname(t.id, r.id, A.ME, o || "")
                        }
                    }
                }, {
                    id: "-10",
                    name: "thread",
                    displayName: "thread",
                    type: p.yU.CHAT,
                    inputType: O.iw.BUILT_IN,
                    applicationId: N.bi.BUILT_IN,
                    get description() {
                        return M.Z.Messages.COMMAND_THREAD_DESCRIPTION
                    },
                    get displayDescription() {
                        return M.Z.Messages.COMMAND_THREAD_DESCRIPTION
                    },
                    options: [{
                        name: "name",
                        displayName: "name",
                        type: p.jw.STRING,
                        get description() {
                            return M.Z.Messages.COMMAND_THREAD_NAME_DESCRIPTION
                        },
                        get displayDescription() {
                            return M.Z.Messages.COMMAND_THREAD_NAME_DESCRIPTION
                        },
                        required: !0
                    }, {
                        name: "message",
                        displayName: "message",
                        type: p.jw.STRING,
                        get description() {
                            return M.Z.Messages.COMMAND_THREAD_MESSAGE_DESCRIPTION
                        },
                        get displayDescription() {
                            return M.Z.Messages.COMMAND_THREAD_MESSAGE_DESCRIPTION
                        },
                        required: !0
                    }],
                    predicate: function(e) {
                        var n = e.channel;
                        return (0, E.ki)(n)
                    },
                    execute: (Z = D((function(e, n) {
                        var t, r, i, o, a, l;
                        return U(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    t = n.channel;
                                    i = null !== (r = H(e, "name")) && void 0 !== r ? r : "";
                                    a = null !== (o = H(e, "message")) && void 0 !== o ? o : "";
                                    return [4, (0, _.gK)(t, i, u.d.PUBLIC_THREAD, (0, m.WD)(t, null), "Slash Command")];
                                case 1:
                                    l = s.sent();
                                    d.Z.sendMessage(l.id, y.ZP.parse(l, a));
                                    return [2]
                            }
                        }))
                    })), function(e, n) {
                        return Z.apply(this, arguments)
                    })
                }, {
                    id: "-11",
                    name: "kick",
                    displayName: "kick",
                    type: p.yU.CHAT,
                    inputType: O.iw.BUILT_IN,
                    applicationId: N.bi.BUILT_IN,
                    get description() {
                        return M.Z.Messages.COMMAND_KICK_DESCRIPTION
                    },
                    get displayDescription() {
                        return M.Z.Messages.COMMAND_KICK_DESCRIPTION
                    },
                    options: [{
                        name: "user",
                        displayName: "user",
                        type: p.jw.USER,
                        get description() {
                            return M.Z.Messages.COMMAND_KICK_USER_DESCRIPTION
                        },
                        get displayDescription() {
                            return M.Z.Messages.COMMAND_KICK_USER_DESCRIPTION
                        },
                        required: !0
                    }, {
                        name: "reason",
                        displayName: "reason",
                        type: p.jw.STRING,
                        get description() {
                            return M.Z.Messages.COMMAND_KICK_REASON_DESCRIPTION
                        },
                        get displayDescription() {
                            return M.Z.Messages.COMMAND_KICK_REASON_DESCRIPTION
                        },
                        required: !1
                    }],
                    predicate: function(e) {
                        var n = e.guild;
                        return T.Z.can(A.Plq.KICK_MEMBERS, n)
                    },
                    execute: function(e, n) {
                        var t = n.guild,
                            r = n.channel;
                        if (null != t) {
                            var i, o = null !== (i = H(e, "user")) && void 0 !== i ? i : "";
                            if (T.Z.canManageUser(A.Plq.KICK_MEMBERS, o, t)) {
                                var a = function() {
                                    var n = D((function() {
                                        var n, i;
                                        return U(this, (function(a) {
                                            switch (a.label) {
                                                case 0:
                                                    if (null == (n = I.default.getUser(o))) throw new Error;
                                                    return [4, c.Z.kickUser(t.id, o, null !== (i = H(e, "reason")) && void 0 !== i ? i : "")];
                                                case 1:
                                                    a.sent();
                                                    d.Z.sendBotMessage(r.id, M.Z.Messages.COMMAND_KICK_CONFIRMATION.format({
                                                        user: v.ZP.getUserTag(n)
                                                    }));
                                                    return [2]
                                            }
                                        }))
                                    }));
                                    return function() {
                                        return n.apply(this, arguments)
                                    }
                                }();
                                a().catch((function() {
                                    d.Z.sendBotMessage(r.id, M.Z.Messages.COMMAND_KICK_ERROR)
                                }))
                            } else d.Z.sendBotMessage(r.id, M.Z.Messages.COMMAND_KICK_UNABLE)
                        }
                    }
                }, {
                    id: "-12",
                    name: "ban",
                    displayName: "ban",
                    type: p.yU.CHAT,
                    inputType: O.iw.BUILT_IN,
                    applicationId: N.bi.BUILT_IN,
                    get description() {
                        return M.Z.Messages.COMMAND_BAN_DESCRIPTION
                    },
                    get displayDescription() {
                        return M.Z.Messages.COMMAND_BAN_DESCRIPTION
                    },
                    options: [{
                        name: "user",
                        displayName: "user",
                        type: p.jw.USER,
                        get description() {
                            return M.Z.Messages.COMMAND_BAN_USER_DESCRIPTION
                        },
                        get displayDescription() {
                            return M.Z.Messages.COMMAND_BAN_USER_DESCRIPTION
                        },
                        required: !0
                    }, {
                        name: "delete_messages",
                        displayName: "delete_messages",
                        type: p.jw.INTEGER,
                        get description() {
                            return M.Z.Messages.COMMAND_BAN_DELETE_MESSAGES_DESCRIPTION
                        },
                        get displayDescription() {
                            return M.Z.Messages.COMMAND_BAN_DELETE_MESSAGES_DESCRIPTION
                        },
                        required: !0,
                        get choices() {
                            return [{
                                name: M.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_NONE,
                                displayName: M.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_NONE,
                                value: 0
                            }, {
                                name: M.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_1HR,
                                displayName: M.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_1HR,
                                value: A.UF9.HOUR
                            }, {
                                name: M.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_6HR,
                                displayName: M.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_6HR,
                                value: 6 * A.UF9.HOUR
                            }, {
                                name: M.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_12HR,
                                displayName: M.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_12HR,
                                value: 12 * A.UF9.HOUR
                            }, {
                                name: M.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_24HR,
                                displayName: M.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_24HR,
                                value: A.UF9.DAY
                            }, {
                                name: M.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_3D,
                                displayName: M.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_3D,
                                value: 3 * A.UF9.DAY
                            }, {
                                name: M.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_7D,
                                displayName: M.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_7D,
                                value: 7 * A.UF9.DAY
                            }]
                        }
                    }, {
                        name: "reason",
                        displayName: "reason",
                        type: p.jw.STRING,
                        get description() {
                            return M.Z.Messages.COMMAND_BAN_REASON_DESCRIPTION
                        },
                        get displayDescription() {
                            return M.Z.Messages.COMMAND_BAN_REASON_DESCRIPTION
                        },
                        required: !1
                    }],
                    predicate: function(e) {
                        var n = e.guild;
                        return T.Z.can(A.Plq.BAN_MEMBERS, n)
                    },
                    execute: function(e, n) {
                        var t = n.guild,
                            r = n.channel;
                        if (null != t) {
                            var i, o = null !== (i = H(e, "user")) && void 0 !== i ? i : "";
                            if (T.Z.canManageUser(A.Plq.BAN_MEMBERS, o, t)) {
                                var a = function() {
                                    var n = D((function() {
                                        var n, i, a, u, l;
                                        return U(this, (function(s) {
                                            switch (s.label) {
                                                case 0:
                                                    if ("" === o) throw new Error;
                                                    i = null !== (n = H(e, "delete_messages")) && void 0 !== n ? n : 0;
                                                    u = null !== (a = H(e, "reason")) && void 0 !== a ? a : "";
                                                    l = I.default.getUser(o);
                                                    return [4, c.Z.banUser(t.id, o, i, u)];
                                                case 1:
                                                    s.sent();
                                                    d.Z.sendBotMessage(r.id, M.Z.Messages.COMMAND_BAN_CONFIRMATION.format({
                                                        user: null != l ? v.ZP.getUserTag(l) : o
                                                    }));
                                                    return [2]
                                            }
                                        }))
                                    }));
                                    return function() {
                                        return n.apply(this, arguments)
                                    }
                                }();
                                a().catch((function() {
                                    d.Z.sendBotMessage(r.id, M.Z.Messages.COMMAND_BAN_ERROR)
                                }))
                            } else d.Z.sendBotMessage(r.id, M.Z.Messages.COMMAND_BAN_UNABLE)
                        }
                    }
                }, {
                    id: "-13",
                    name: "timeout",
                    displayName: "timeout",
                    type: p.yU.CHAT,
                    inputType: O.iw.BUILT_IN,
                    applicationId: N.bi.BUILT_IN,
                    get description() {
                        return M.Z.Messages.COMMAND_TIMEOUT_DESCRIPTION
                    },
                    get displayDescription() {
                        return M.Z.Messages.COMMAND_TIMEOUT_DESCRIPTION
                    },
                    options: [{
                        name: "user",
                        displayName: "user",
                        type: p.jw.USER,
                        get description() {
                            return M.Z.Messages.COMMAND_TIMEOUT_USER_DESCRIPTION
                        },
                        get displayDescription() {
                            return M.Z.Messages.COMMAND_TIMEOUT_USER_DESCRIPTION
                        },
                        required: !0
                    }, {
                        name: "duration",
                        displayName: "duration",
                        type: p.jw.STRING,
                        get description() {
                            return M.Z.Messages.COMMAND_TIMEOUT_DURATION_DESCRIPTION
                        },
                        get displayDescription() {
                            return M.Z.Messages.COMMAND_TIMEOUT_DURATION_DESCRIPTION
                        },
                        required: !0,
                        get choices() {
                            return (0, S.tr)().map((function(e) {
                                return R(function(e) {
                                    for (var n = 1; n < arguments.length; n++) {
                                        var t = null != arguments[n] ? arguments[n] : {},
                                            r = Object.keys(t);
                                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                                        }))));
                                        r.forEach((function(n) {
                                            P(e, n, t[n])
                                        }))
                                    }
                                    return e
                                }({}, e), {
                                    name: e.label,
                                    displayName: e.label
                                })
                            }))
                        }
                    }, {
                        name: "reason",
                        displayName: "reason",
                        type: p.jw.STRING,
                        get description() {
                            return M.Z.Messages.COMMAND_TIMEOUT_REASON_DESCRIPTION
                        },
                        get displayDescription() {
                            return M.Z.Messages.COMMAND_TIMEOUT_REASON_DESCRIPTION
                        },
                        required: !1
                    }],
                    predicate: function(e) {
                        var n = e.guild;
                        return T.Z.can(A.Plq.MODERATE_MEMBERS, n)
                    },
                    execute: function(e, n) {
                        var t = n.guild,
                            r = n.channel;
                        if (null != t) {
                            var i = H(e, "user");
                            if ((0, f.F)(t.id, i)) {
                                var o = function() {
                                    var n = D((function() {
                                        var n, o, u, l, s;
                                        return U(this, (function(p) {
                                            switch (p.label) {
                                                case 0:
                                                    o = null !== (n = H(e, "duration")) && void 0 !== n ? n : "";
                                                    l = null !== (u = H(e, "reason")) && void 0 !== u ? u : "";
                                                    if (null == (s = I.default.getUser(i))) throw new Error;
                                                    return [4, c.Z.setCommunicationDisabledUntil({
                                                        guildId: t.id,
                                                        userId: i,
                                                        communicationDisabledUntilTimestamp: a()().add(o, "s").toISOString(),
                                                        duration: o,
                                                        reason: l
                                                    })];
                                                case 1:
                                                    p.sent();
                                                    d.Z.sendBotMessage(r.id, M.Z.Messages.COMMAND_TIMEOUT_CONFIRMATION.format({
                                                        user: v.ZP.getUserTag(s),
                                                        duration: o
                                                    }));
                                                    return [2]
                                            }
                                        }))
                                    }));
                                    return function() {
                                        return n.apply(this, arguments)
                                    }
                                }();
                                o().catch((function() {
                                    d.Z.sendBotMessage(r.id, M.Z.Messages.COMMAND_TIMEOUT_ERROR)
                                }))
                            } else d.Z.sendBotMessage(r.id, M.Z.Messages.COMMAND_TIMEOUT_UNABLE)
                        }
                    }
                }, {
                    id: "-14",
                    name: "msg",
                    displayName: "msg",
                    type: p.yU.CHAT,
                    inputType: O.iw.BUILT_IN,
                    applicationId: N.bi.BUILT_IN,
                    get description() {
                        return M.Z.Messages.COMMAND_MSG_DESCRIPTION
                    },
                    get displayDescription() {
                        return M.Z.Messages.COMMAND_MSG_DESCRIPTION
                    },
                    options: [{
                        name: "user",
                        displayName: "user",
                        type: p.jw.USER,
                        get description() {
                            return M.Z.Messages.COMMAND_MSG_USER_DESCRIPTION
                        },
                        get displayDescription() {
                            return M.Z.Messages.COMMAND_MSG_USER_DESCRIPTION
                        },
                        required: !0
                    }, {
                        name: "message",
                        displayName: "message",
                        type: p.jw.STRING,
                        get description() {
                            return M.Z.Messages.COMMAND_MSG_MESSAGE_DESCRIPTION
                        },
                        get displayDescription() {
                            return M.Z.Messages.COMMAND_MSG_MESSAGE_DESCRIPTION
                        },
                        required: !0
                    }],
                    execute: function(e, n) {
                        var t, r = n.channel,
                            o = H(e, "user"),
                            a = null !== (t = H(e, "message")) && void 0 !== t ? t : "",
                            u = function() {
                                var e = D((function() {
                                    return U(this, (function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return [4, s.Z.openPrivateChannel(o).then((function(e) {
                                                    var n = g.Z.getChannel(e);
                                                    i()(null != n, "Newly created PrivateChannel is null");
                                                    d.Z.sendMessage(n.id, y.ZP.parse(n, a))
                                                }))];
                                            case 1:
                                                e.sent();
                                                return [2]
                                        }
                                    }))
                                }));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }();
                        u().catch((function() {
                            d.Z.sendBotMessage(r.id, M.Z.Messages.COMMAND_MSG_ERROR)
                        }))
                    }
                }]),
                B = G.filter((function(e) {
                    return ["giphy", "tenor", "tts", "me", "tableflip", "unflip", "shrug", "spoiler", "nick"].includes(e.name)
                })),
                x = function(e, n, t) {
                    var r = n ? G : B;
                    return r = r.filter((function(n) {
                        return n.type === e && (!t || n.inputType === O.iw.BUILT_IN_TEXT || n.inputType === O.iw.BUILT_IN_INTEGRATION)
                    }))
                }
        },
        931184: (e, n, t) => {
            t.d(n, {
                R: () => u,
                e: () => l
            });
            var r = t(667294),
                i = t(202351),
                o = t(917019),
                a = t(485501);

            function u(e) {
                r.useEffect((function() {
                    o.DZ.loadIfNecessary()
                }), []);
                var n = (0, i.e7)([a.ZP], (function() {
                    return a.ZP.getTopCommandsWithoutLoadingLatest()
                }));
                return r.useMemo((function() {
                    return (0, a.LU)(n, e)
                }), [n, e])
            }

            function l(e) {
                r.useEffect((function() {
                    o.DZ.loadIfNecessary()
                }), []);
                var n = (0, i.e7)([a.ZP], (function() {
                    return a.ZP.getTopCommandsWithoutLoadingLatest()
                }));
                return r.useMemo((function() {
                    var t = (0, a.LU)(n, e);
                    return (0, a.JV)(t)
                }), [n, e])
            }
        },
        485501: (e, n, t) => {
            t.d(n, {
                JV: () => N,
                LU: () => A,
                ZP: () => b
            });
            var r = t(496486),
                i = t.n(r),
                o = t(202351),
                a = t(744564),
                u = t(73904),
                l = t(747864),
                s = t(473419),
                c = t(127624),
                d = t(131559);

            function p(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function f(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function y(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function m(e) {
                m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return m(e)
            }

            function _(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function E(e, n) {
                return !n || "object" !== T(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function h(e, n) {
                h = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return h(e, n)
            }

            function g(e) {
                return function(e) {
                    if (Array.isArray(e)) return p(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return p(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return p(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var T = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function I(e) {
                var n = function() {
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
                    var t, r = m(e);
                    if (n) {
                        var i = m(this).constructor;
                        t = Reflect.construct(r, arguments, i)
                    } else t = r.apply(this, arguments);
                    return E(this, t)
                }
            }
            var v = {
                    pendingUsages: []
                },
                O = new l.Z({
                    computeBonus: function() {
                        return 1
                    },
                    computeWeight: function(e) {
                        return e <= 3 ? 100 : e <= 15 ? 70 : e <= 30 ? 50 : e <= 45 ? 30 : e <= 80 ? 10 : 0
                    },
                    lookupKey: function(e) {
                        return e
                    },
                    afterCompute: function() {},
                    numFrequentlyItems: 500
                });

            function N(e) {
                var n = new Set,
                    t = !0,
                    r = !1,
                    i = void 0;
                try {
                    for (var o, a = e[Symbol.iterator](); !(t = (o = a.next()).done); t = !0) {
                        var u = o.value.split(c.oQ)[0];
                        Number(u) > 0 && n.add(u);
                        if (n.size >= c.sZ) break
                    }
                } catch (e) {
                    r = !0;
                    i = e
                } finally {
                    try {
                        t || null == a.return || a.return()
                    } finally {
                        if (r) throw i
                    }
                }
                return g(n)
            }

            function A(e, n) {
                return e.filter((function(e) {
                    return !e.includes(":") || null != n.guild && n.guild.id === e.split(":")[1]
                })).map((function(e) {
                    return e.split(":")[0]
                }))
            }

            function S(e, n) {
                return Number(n.id) < 0 ? n.id : null != e.guild && null != n.guildId ? "".concat(n.id, ":").concat(e.guild.id) : n.id
            }

            function M() {
                var e, n, t = null !== (n = null === (e = s.Z.frecencyWithoutFetchingLatest.applicationCommandFrecency) || void 0 === e ? void 0 : e.applicationCommands) && void 0 !== n ? n : {};
                O.overwriteHistory(i().mapValues(t, (function(e) {
                    return _(function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = null != arguments[n] ? arguments[n] : {},
                                r = Object.keys(t);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                            }))));
                            r.forEach((function(n) {
                                y(e, n, t[n])
                            }))
                        }
                        return e
                    }({}, e), {
                        recentUses: e.recentUses.map(Number).filter((function(e) {
                            return e > 0
                        }))
                    })
                })), v.pendingUsages)
            }
            var C = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && h(e, n)
                }(t, e);
                var n = I(t);

                function t() {
                    f(this, t);
                    return n.apply(this, arguments)
                }
                var r = t.prototype;
                r.initialize = function(e) {
                    null != e && (v = e);
                    this.syncWith([s.Z], M)
                };
                r.getState = function() {
                    return v
                };
                r.hasPendingUsage = function() {
                    return v.pendingUsages.length > 0
                };
                r.getCommandFrecencyWithoutLoadingLatest = function() {
                    return O
                };
                r.getScoreWithoutLoadingLatest = function(e, n) {
                    var t;
                    return null !== (t = O.getScore(S(e, n))) && void 0 !== t ? t : 0
                };
                r.getTopCommandsWithoutLoadingLatest = function() {
                    return O.frequently
                };
                r.__getLocalVars = function() {
                    return {
                        state: v,
                        commandFrecency: O
                    }
                };
                return t
            }(o.ZP.PersistedStore);
            C.displayName = "ApplicationCommandFrecencyStore";
            C.persistKey = "ApplicationCommandFrecencyV2";
            const b = new C(a.Z, {
                APPLICATION_COMMAND_USED: function(e) {
                    var n = e.command,
                        t = e.context;
                    if (n.type !== u.yU.CHAT) return !1;
                    var r = S(t, n);
                    v.pendingUsages.push({
                        key: r,
                        timestamp: Date.now()
                    });
                    O.track(r);
                    O.compute()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    var n = e.settings.type,
                        t = e.wasSaved;
                    if (n !== d.yP.FRECENCY_AND_FAVORITES_SETTINGS || !t) return !1;
                    v.pendingUsages = []
                }
            })
        },
        977579: (e, n, t) => {
            t.d(n, {
                yC: () => Y,
                ZP: () => ae,
                nM: () => le,
                JK: () => se,
                wm: () => ce,
                v1: () => me
            });
            var r = t(667294),
                i = t(23279),
                o = t.n(i),
                a = t(5387),
                u = t.n(a),
                l = t(202351),
                s = t(281110),
                c = t(744564),
                d = t(73904),
                p = t(924326),
                f = t(861426),
                y = t(916675),
                m = t(948832),
                _ = t(798808),
                E = t(917019),
                h = t(473419),
                g = t(61209),
                T = t(5544),
                I = t(567403),
                v = t(682776),
                O = t(715107),
                N = t(652591),
                A = t(169898),
                S = t(931184),
                M = t(485501),
                C = t(272200),
                b = t(248046),
                D = t(127624),
                P = t(2590);

            function R(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function w(e, n, t, r, i, o, a) {
                try {
                    var u = e[o](a),
                        l = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(l) : Promise.resolve(l).then(r, i)
            }

            function Z(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

                        function a(e) {
                            w(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            w(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function L(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function U(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function j(e) {
                j = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return j(e)
            }

            function H(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        U(e, n, t[n])
                    }))
                }
                return e
            }

            function F(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function G(e, n) {
                return !n || "object" !== k(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function B(e, n) {
                B = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return B(e, n)
            }

            function x(e) {
                return function(e) {
                    if (Array.isArray(e)) return R(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return R(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return R(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var k = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function q(e) {
                var n = function() {
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
                    var t, r = j(e);
                    if (n) {
                        var i = j(this).constructor;
                        t = Reflect.construct(r, arguments, i)
                    } else t = r.apply(this, arguments);
                    return G(this, t)
                }
            }
            var K = function(e, n) {
                var t, r, i, o, a = {
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
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2];
                                            a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                o = n.call(e, a)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                t = i = 0
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

            function Y(e, n, t) {
                var r;
                if ((null == t ? void 0 : t.abortable) && (null == t ? void 0 : t.signal.aborted)) return Promise.resolve(null);
                var i, o = {
                    type: n.type,
                    role_ids: null === (r = n.roleIds) || void 0 === r ? void 0 : r.join(",")
                };
                if ("applicationId" in n && null != n.applicationId) {
                    o.application_id = n.applicationId;
                    i = "application"
                } else if ("query" in n) {
                    o.query = n.query;
                    o.limit = n.limit;
                    o.cursor = n.cursor;
                    i = "query"
                } else if ("cursor" in n) {
                    o.limit = n.limit;
                    o.cursor = n.cursor;
                    null != n.commandIds && n.commandIds.length > 0 && (o.command_ids = n.commandIds.join(","));
                    i = "discovery"
                } else i = "unknown";
                "includeApplications" in n && (o.include_applications = n.includeApplications);
                "checkPermissions" in n && (o.check_permissions = n.checkPermissions);
                var a, u = (a = Z((function(r) {
                    var i;
                    return K(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, new Promise((function(e) {
                                    setTimeout(e, r)
                                }))];
                            case 1:
                                o.sent();
                                return [2, Y(e, F(H({}, n), {
                                    retries: (null !== (i = n.retries) && void 0 !== i ? i : 0) + 1
                                }), t)]
                        }
                    }))
                })), function(e) {
                    return a.apply(this, arguments)
                });
                null != n.retries && 0 !== n.retries || (n.start = performance.now());
                var l = function(e) {
                    if (null != n.start) {
                        var r, a, u, l = performance.now() - n.start;
                        N.default.track(P.rMx.APPLICATION_COMMAND_PERFORMANCE, {
                            duration_ms: l,
                            aborted: null !== (r = null == t ? void 0 : t.signal.aborted) && void 0 !== r && r,
                            error: e,
                            kind: i,
                            command_type: n.type,
                            include_applications: null !== (a = o.include_applications) && void 0 !== a && a,
                            retries: null !== (u = n.retries) && void 0 !== u ? u : 0
                        })
                    }
                };
                return s.ZP.get({
                    url: P.ANM.APPLICATION_COMMANDS_SEARCH(e),
                    query: o,
                    signal: (null == t ? void 0 : t.abortable) ? t.signal : void 0
                }).then((function(e) {
                    var n, t, r;
                    if (202 === e.status) return u(5e3);
                    l(!1);
                    return {
                        applicationCommands: e.body.application_commands,
                        applications: e.body.applications,
                        nextCursor: null === (n = e.body.cursor) || void 0 === n ? void 0 : n.next,
                        prevCursor: null === (t = e.body.cursor) || void 0 === t ? void 0 : t.previous,
                        repaired: null === (r = e.body.cursor) || void 0 === r ? void 0 : r.repaired
                    }
                }), (function(e) {
                    if ((null == t ? void 0 : t.abortable) && (null == t ? void 0 : t.signal.aborted)) {
                        l(!0);
                        return null
                    }
                    if (429 === e.status) return u(1e3 * e.body.retry_after);
                    l(!0);
                    return null
                }))
            }
            var V = function(e, n, t) {
                var r = e.channel,
                    i = e.guild;
                return null != r ? (0, A.Kh)(n, !0, t).filter((function(e) {
                    return null == e.predicate || e.predicate({
                        channel: r,
                        guild: i
                    })
                })) : []
            };

            function z(e, n) {
                if (0 === n.length) return e;
                var t = x(e),
                    r = (0, b.nG)(n).filter((function(e) {
                        var n = t.findIndex((function(n) {
                            return n.id === e.id
                        }));
                        if (n >= 0) {
                            t[n] = e;
                            return !1
                        }
                        return !0
                    }));
                return x(t).concat(x(r))
            }

            function W(e) {
                return e.map((function(e) {
                    var n, t;
                    return {
                        type: C.Qi.APPLICATION,
                        id: e.id,
                        name: null !== (t = null == e || null === (n = e.bot) || void 0 === n ? void 0 : n.username) && void 0 !== t ? t : e.name,
                        icon: e.icon,
                        application: e
                    }
                })).concat(A.Tm[D.bi.BUILT_IN])
            }
            var Q = function(e, n) {
                    return {
                        type: n,
                        inputType: C.iw.PLACEHOLDER,
                        id: "placeholder-".concat(e),
                        name: "",
                        displayName: "",
                        description: "",
                        displayDescription: "",
                        applicationId: ""
                    }
                },
                X = [A.Tm[D.bi.BUILT_IN]],
                $ = function(e) {
                    ! function(e, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(n && n.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        n && B(e, n)
                    }(t, e);
                    var n = q(t);

                    function t() {
                        L(this, t);
                        var e;
                        (e = n.apply(this, arguments)).channelStates = new(u())({
                            max: 5
                        });
                        e.componentIsOpen = !1;
                        e.shouldResetAll = !1;
                        e.shouldResetGuild = null;
                        e.shouldResetDMs = !1;
                        return e
                    }
                    var r = t.prototype;
                    r.initialize = function() {
                        var e = this;
                        this.waitFor(h.Z);
                        this.syncWith([v.Z], (function() {
                            e.shouldResetAll = !0
                        }));
                        this.syncWith([h.Z], te)
                    };
                    r.getChannelState = function(e, n) {
                        var t;
                        return null === (t = oe.channelStates.get(e)) || void 0 === t ? void 0 : t[n]
                    };
                    r.getOrInsertChannelState = function(e, n) {
                        var t = oe.channelStates,
                            r = t.has(e);
                        N.default.track(P.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
                            miss: !r,
                            size: t.length
                        });
                        if (!r) {
                            var i, o = function() {
                                    return {
                                        discoveryInitialized: !1,
                                        topCursor: null,
                                        scrollDownCursor: null,
                                        applicationSections: null,
                                        applicationCommands: null,
                                        filteredSectionId: null,
                                        pendingQueries: new Map,
                                        queries: new Map,
                                        queriedApplicationId: null,
                                        sawFrecencySection: !1
                                    }
                                },
                                a = (U(i = {}, d.yU.CHAT, o()), U(i, d.yU.MESSAGE, o()), U(i, d.yU.USER, o()), i);
                            t.set(e, a)
                        }
                        return t.get(e)[n]
                    };
                    r.getApplicationSections = function(e, n) {
                        var t, r;
                        return null !== (r = null === (t = this.getChannelState(e, n)) || void 0 === t ? void 0 : t.applicationSections) && void 0 !== r ? r : X
                    };
                    r.getQueryCommands = function(e, n, t) {
                        var r, i, o, a = this.getChannelState(e, n);
                        return null !== (o = null === (r = null == a ? void 0 : a.queries.get(t)) || void 0 === r ? void 0 : r.commands) && void 0 !== o ? o : null === (i = null == a ? void 0 : a.pendingQueries.get(t)) || void 0 === i ? void 0 : i.commands
                    };
                    r.hasQueryResults = function(e, n, t) {
                        var r, i;
                        return null !== (i = null === (r = this.getChannelState(e, n)) || void 0 === r ? void 0 : r.queries.has(t)) && void 0 !== i && i
                    };
                    r.__getLocalVars = function() {
                        return {
                            getValidBuiltInCommands: V,
                            getPlaceholderCommand: Q,
                            DEFAULT_SECTIONS: X,
                            store: oe,
                            getViewingAsRoleIds: ue,
                            doQuery: fe,
                            scrollDownQuery: ye
                        }
                    };
                    return t
                }(l.ZP.Store);
            $.displayName = "ApplicationCommandSearchStore";

            function J(e) {
                var n, t = e.guildId,
                    r = O.Z.getChannelId();
                if (null != r && (null === (n = g.Z.getChannel(r)) || void 0 === n ? void 0 : n.guild_id) !== t) return ee(t);
                if (oe.componentIsOpen) {
                    oe.shouldResetGuild = t;
                    return !1
                }
                return ee(t)
            }

            function ee(e) {
                var n = T.ZP.getChannels(e),
                    t = n[T.sH].concat(n[T.Zb]),
                    r = oe.channelStates.length,
                    i = !0,
                    o = !1,
                    a = void 0;
                try {
                    for (var u, l = t[Symbol.iterator](); !(i = (u = l.next()).done); i = !0) {
                        var s = u.value;
                        oe.channelStates.del(s.channel.id)
                    }
                } catch (e) {
                    o = !0;
                    a = e
                } finally {
                    try {
                        i || null == l.return || l.return()
                    } finally {
                        if (o) throw a
                    }
                }
                return oe.channelStates.length !== r
            }

            function ne() {
                var e = oe.channelStates.length;
                oe.channelStates.keys().forEach((function(e) {
                    var n;
                    (null === (n = g.Z.getChannel(e)) || void 0 === n ? void 0 : n.isPrivate()) && oe.channelStates.del(e)
                }));
                return oe.channelStates.length !== e
            }

            function te() {
                var e, n, t, r = null !== (t = null === (e = h.Z.settings.textAndImages) || void 0 === e || null === (n = e.viewNsfwCommands) || void 0 === n ? void 0 : n.value) && void 0 !== t && t;
                if (r !== oe.viewNsfwCommands) {
                    oe.viewNsfwCommands = r;
                    if (oe.componentIsOpen) {
                        oe.shouldResetDMs = !0;
                        return !1
                    }
                    return ne()
                }
                return !1
            }

            function re(e) {
                if (!oe.channelStates.has(e)) return !1;
                oe.channelStates.del(e);
                return !0
            }

            function ie() {
                oe.shouldResetAll = !1;
                oe.shouldResetGuild = null;
                oe.shouldResetDMs = !1;
                oe.componentIsOpen = !1;
                oe.channelStates.reset()
            }
            var oe = new $(c.Z, {
                LOGOUT: ie,
                CONNECTION_OPEN: ie,
                APPLICATION_COMMAND_SEARCH_STORE_UPDATE: function(e) {
                    var n = e.channelId,
                        t = e.commandType,
                        r = e.state,
                        i = oe.channelStates.get(n);
                    if (null != i) {
                        var o = i[t],
                            a = H({}, o, r);
                        i[t] = a;
                        null == o.applicationCommands && null != a.applicationCommands && a.pendingQueries.forEach((function(e, n) {
                            de({
                                context: e.context,
                                commandType: e.commandType,
                                query: n,
                                limit: e.limit,
                                canOnlyUseTextCommands: !1
                            })
                        }))
                    }
                },
                APPLICATION_COMMAND_SEARCH_STORE_QUERY: function(e) {
                    var n = e.context,
                        t = e.commandType,
                        r = e.query,
                        i = e.limit,
                        o = e.applicationId,
                        a = null != _.Z.getPendingReply(n.channel.id);
                    de({
                        context: n,
                        commandType: t,
                        query: r,
                        limit: i,
                        canOnlyUseTextCommands: a,
                        applicationId: o
                    }) || a || fe({
                        context: n,
                        commandType: t,
                        query: r,
                        limit: i,
                        applicationId: o
                    })
                },
                CHANNEL_UPDATES: function(e) {
                    var n = e.channels,
                        t = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, a = n[Symbol.iterator](); !(t = (o = a.next()).done); t = !0) {
                            var u = o.value;
                            if (null != u.guild_id && J({
                                    guildId: u.guild_id
                                })) return !0
                        }
                    } catch (e) {
                        r = !0;
                        i = e
                    } finally {
                        try {
                            t || null == a.return || a.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return !1
                },
                GUILD_APPLICATION_COMMAND_INDEX_UPDATE: J,
                IMPERSONATE_UPDATE: J,
                IMPERSONATE_STOP: J,
                APPLICATION_COMMAND_SEARCH_STORE_UI_UPDATE: function(e) {
                    var n = e.isOpen;
                    oe.componentIsOpen = n;
                    if (!oe.shouldResetAll) {
                        var t = !1;
                        if (null != oe.shouldResetGuild) {
                            t = ee(oe.shouldResetGuild);
                            oe.shouldResetGuild = null
                        }
                        if (oe.shouldResetDMs) {
                            t = ne() || t;
                            oe.shouldResetDMs = !1
                        }
                        return t
                    }
                    ie()
                },
                PRIVATE_CHANNEL_INTEGRATION_CREATE: function(e) {
                    return re(e.integration.channel_id)
                },
                PRIVATE_CHANNEL_INTEGRATION_UPDATE: function(e) {
                    return re(e.integration.channel_id)
                },
                PRIVATE_CHANNEL_INTEGRATION_DELETE: function(e) {
                    return re(e.channelId)
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS: function(e) {
                    return re(e.channelId)
                }
            });
            const ae = oe;
            var ue = function(e) {
                if (null != e) {
                    var n = f.Z.getViewingRoles(e);
                    if (null != n) {
                        var t = Object.keys(n);
                        0 === t.length && t.push(e);
                        return t
                    }
                }
            };

            function le() {
                r.useEffect((function() {
                    c.Z.dispatch({
                        type: "APPLICATION_COMMAND_SEARCH_STORE_UI_UPDATE",
                        isOpen: !0
                    });
                    return function() {
                        c.Z.dispatch({
                            type: "APPLICATION_COMMAND_SEARCH_STORE_UI_UPDATE",
                            isOpen: !1
                        })
                    }
                }), [])
            }

            function se(e, n, t, i) {
                var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
                    a = o.canOnlyUseTextCommands,
                    u = o.canUseFrecency,
                    s = (0, l.e7)([oe], (function() {
                        return oe.getOrInsertChannelState(e.id, n)
                    }), [e.id, n]),
                    d = s.discoveryInitialized,
                    f = s.topCursor,
                    _ = s.scrollDownCursor,
                    E = s.applicationSections,
                    h = s.applicationCommands,
                    g = s.filteredSectionId,
                    T = s.sawFrecencySection,
                    O = r.useCallback((function(t) {
                        c.Z.dispatch({
                            type: "APPLICATION_COMMAND_SEARCH_STORE_UPDATE",
                            channelId: e.id,
                            commandType: n,
                            state: t
                        })
                    }), [e.id, n]);
                (0, y.j)({
                    channelId: e.id
                });
                var N = r.useRef(!1),
                    C = (0, p.Z)(),
                    P = r.useCallback((function(t, r) {
                        var i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                        if (!N.current) {
                            N.current = !0;
                            var o = ue(e.guild_id);
                            Y(e.id, H({
                                type: n,
                                roleIds: o
                            }, t), {
                                abortable: i,
                                signal: C
                            }).then((function(e) {
                                N.current = !1;
                                r(e)
                            }))
                        }
                    }), [e.id, e.guild_id, n, C]),
                    R = r.useMemo((function() {
                        return {
                            channel: e,
                            guild: null != e.guild_id ? I.Z.getGuild(e.guild_id) : null
                        }
                    }), [e]),
                    w = (0, S.R)(R),
                    Z = (0, S.e)(R),
                    L = (0, l.e7)([v.Z, m.Z], (function() {
                        return (0, b.oK)(v.Z, m.Z, null != a && a, e)
                    }), [a, e]);
                r.useEffect((function() {
                    if (!d) {
                        O({
                            discoveryInitialized: !0
                        });
                        if (L && !(null != h && h.length > 0)) {
                            var n = d ? void 0 : Z,
                                t = e.isPrivate() ? {} : {
                                    limit: i,
                                    commandIds: n,
                                    cursor: null != f ? f : void 0
                                };
                            P(F(H({}, t), {
                                includeApplications: null == E
                            }), (function(e) {
                                if (null != e) {
                                    var n = {
                                        applicationCommands: z([], e.applicationCommands),
                                        topCursor: e.prevCursor,
                                        scrollDownCursor: e.nextCursor
                                    };
                                    if (null != e.applications) {
                                        var t;
                                        n.applicationSections = W(null !== (t = e.applications) && void 0 !== t ? t : [])
                                    }
                                    O(n)
                                }
                            }), !1)
                        }
                    }
                }), [h, e, i, L, E, d, f, P, Z, O]);
                var U = r.useCallback((function() {
                        null != _ && P({
                            limit: i,
                            cursor: _
                        }, (function(e) {
                            if (null != e) {
                                var n = !1 === e.repaired ? z([], e.applicationCommands) : z(null != h ? h : [], e.applicationCommands);
                                O({
                                    applicationCommands: n,
                                    scrollDownCursor: e.nextCursor
                                })
                            }
                        }))
                    }), [i, P, _, h, O]),
                    j = r.useCallback((function(n) {
                        if (!N.current && n !== g)
                            if (null != n) {
                                n in A.Tm || e.isPrivate() || P({
                                    applicationId: n
                                }, (function(e) {
                                    null != e && O({
                                        applicationCommands: z([], e.applicationCommands)
                                    })
                                }));
                                O({
                                    filteredSectionId: n,
                                    scrollDownCursor: null
                                })
                            } else e.isPrivate() ? O({
                                filteredSectionId: null,
                                discoveryInitialized: !0
                            }) : O({
                                filteredSectionId: null,
                                applicationCommands: null,
                                discoveryInitialized: !1
                            })
                    }), [e, P, O, g]);
                le();
                r.useEffect((function() {
                    return function() {
                        var t;
                        null != (null === (t = oe.channelStates.get(e.id)) || void 0 === t ? void 0 : t[n].filteredSectionId) && j(null)
                    }
                }), []);
                var G = r.useMemo((function() {
                        return V(R, n, a)
                    }), [R, n, a]),
                    B = r.useMemo((function() {
                        return u ? (L && null != h ? h : []).concat(G).filter((function(e) {
                            return w.includes(e.id)
                        })).sort((function(e, n) {
                            var t = M.ZP.getScoreWithoutLoadingLatest(R, e);
                            return M.ZP.getScoreWithoutLoadingLatest(R, n) - t
                        })).slice(0, D.hz) : []
                    }), [u, w, L, h, G, R]);
                r.useEffect((function() {
                    !T && B.length > 0 && O({
                        sawFrecencySection: !0
                    })
                }), [O, B, T]);
                var k = r.useMemo((function() {
                        var e, n = [];
                        (B.length > 0 || T) && (n = n.concat(A.Tm[D.bi.FRECENCY]));
                        L && null != E && (n = n.concat(E));
                        (null === (e = n[n.length - 1]) || void 0 === e ? void 0 : e.id) !== D.bi.BUILT_IN && (n = n.concat(A.Tm[D.bi.BUILT_IN]));
                        return n
                    }), [L, E, B, T]),
                    q = L && (!d || N.current || null != _),
                    K = r.useMemo((function() {
                        if (!q) return [];
                        for (var e = [], r = 0; r < t; r++) e.push(Q(r, n));
                        return e
                    }), [q, t, n]),
                    X = r.useMemo((function() {
                        var e = [],
                            n = [];
                        k.forEach((function(t) {
                            if (null == g || t.id === g) {
                                var r;
                                if ((r = t.id === D.bi.BUILT_IN ? q ? [] : x(G) : t.id === D.bi.FRECENCY ? x(B) : (null != h ? h : []).filter((function(e) {
                                        return e.applicationId === t.id
                                    }))).length > 0 || t.id === g) {
                                    e.push(t);
                                    n.push({
                                        section: t,
                                        data: r
                                    })
                                }
                            }
                        }));
                        if (n.length > 0 && K.length > 0) {
                            var t;
                            (t = n[n.length - 1].data).push.apply(t, x(K))
                        }
                        return {
                            activeSections: e,
                            commandsByActiveSection: n
                        }
                    }), [k, B, h, G, K, q, g]),
                    $ = X.activeSections,
                    J = X.commandsByActiveSection,
                    ee = r.useMemo((function() {
                        var e = [];
                        e = e.concat(B);
                        L && null != h && (e = e.concat(h));
                        return e = e.concat(G)
                    }), [L, B, h, G]);
                return {
                    filterSection: j,
                    scrollDown: U,
                    loading: N,
                    filteredSectionId: g,
                    hasMoreAfter: q,
                    commands: ee,
                    sectionDescriptors: k,
                    activeSections: $,
                    commandsByActiveSection: J,
                    placeholders: K
                }
            }

            function ce(e, n, t, r) {
                var i = t.name,
                    o = t.displayName;
                if (i.startsWith(e)) return 6;
                if (o.startsWith(e)) return 6;
                if (i.startsWith(n[0])) {
                    if (i.split(" ").slice(1).join(" ").startsWith(n.slice(1).join(" "))) return 5
                }
                if (o.startsWith(n[0])) {
                    if (o.split(" ").slice(1).join(" ").startsWith(n.slice(1).join(" "))) return 5
                }
                if (i.includes(e)) return 4;
                if (null == o ? void 0 : o.includes(e)) return 4;
                var a, u = !1,
                    l = !0,
                    s = !1,
                    c = void 0;
                try {
                    for (var d, p = (null !== (a = t.options) && void 0 !== a ? a : [])[Symbol.iterator](); !(l = (d = p.next()).done); l = !0) {
                        var f = d.value,
                            y = f.name,
                            m = f.serverLocalizedName;
                        if (y.startsWith(e)) return 3;
                        if ("".concat(i, " ").concat(y).startsWith(e)) return 3;
                        if (null != o && "".concat(o, " ").concat(y).startsWith(e)) return 2;
                        if (null != m) {
                            if (m.startsWith(e)) return 3;
                            if ("".concat(i, " ").concat(m).startsWith(e)) return 3;
                            if (null != o && "".concat(o, " ").concat(m).startsWith(e)) return 3
                        }(y.includes(e) || (null == m ? void 0 : m.includes(e))) && (u = !0)
                    }
                } catch (e) {
                    s = !0;
                    c = e
                } finally {
                    try {
                        l || null == p.return || p.return()
                    } finally {
                        if (s) throw c
                    }
                }
                return u ? 2 : (null == r ? void 0 : r.name.toLocaleLowerCase().startsWith(e)) ? 1 : 0
            }

            function de(e) {
                var n, t = e.context,
                    r = e.commandType,
                    i = e.query,
                    o = e.limit,
                    a = e.canOnlyUseTextCommands,
                    u = e.applicationCommands,
                    l = e.scrollDownCursor,
                    s = e.applications,
                    c = e.applicationId,
                    d = void 0 === c ? null : c,
                    p = oe.getOrInsertChannelState(t.channel.id, r);
                if (p.queriedApplicationId !== d) {
                    p.queries.clear();
                    p.pendingQueries.clear();
                    p.queriedApplicationId = d
                } else if (p.queries.has(i)) return !0;
                null != s && (p.applicationSections = W(s));
                if (a) n = [];
                else {
                    var f;
                    n = t.channel.isPrivate() ? null !== (f = p.applicationCommands) && void 0 !== f ? f : [] : z([], null != u ? u : [])
                }
                var y = V(t, r, a),
                    _ = (0,
                        b.oK)(v.Z, m.Z, a, t.channel) && (t.channel.isPrivate() ? null == p.applicationCommands : null == u),
                    h = [],
                    g = !1;
                if (_)
                    for (var T = i.length - 1; T > 0; T -= 1) {
                        var I = i.slice(0, T),
                            O = p.queries.get(I);
                        if (null != O) {
                            g = O.done;
                            O.commands.forEach((function(e) {
                                null == n.find((function(n) {
                                    return n.id === e.id
                                })) && null == y.find((function(n) {
                                    return n.id === e.id
                                })) && h.push(e)
                            }));
                            break
                        }
                    }
                g && (_ = !1);
                var N = [],
                    A = i.split(" ");
                x(n).concat(x(h), x(y)).forEach((function(e) {
                    var n, t = null === (n = p.applicationSections) || void 0 === n ? void 0 : n.find((function(n) {
                            return n.id === e.applicationId
                        })),
                        r = ce(i, A, e, t);
                    r > 0 && N.push(F(H({}, e), {
                        score: r
                    }))
                }));
                E.DZ.loadIfNecessary();
                N.sort((function(e, n) {
                    if (e.score !== n.score) return n.score - e.score;
                    var r = M.ZP.getScoreWithoutLoadingLatest(t, e),
                        i = M.ZP.getScoreWithoutLoadingLatest(t, n);
                    return r !== i ? i - r : e.displayName.localeCompare(n.displayName)
                }));
                if (_ || null != l)
                    for (var S = 0; S < 4; S += 1) N.push(F(H({}, Q(S, r)), {
                        score: 0
                    }));
                if (_) {
                    p.pendingQueries.set(i, {
                        context: t,
                        commandType: r,
                        limit: o,
                        commands: N
                    });
                    p.queries.delete(i)
                } else {
                    p.pendingQueries.delete(i);
                    p.queries.set(i, {
                        commands: N,
                        done: g || null == l,
                        scrollDownCursor: l
                    })
                }
                return g
            }
            var pe, fe = o()((function(e) {
                    var n, t = e.context,
                        r = e.commandType,
                        i = e.query,
                        o = e.limit,
                        a = e.applicationId;
                    if ((0, b.oK)(v.Z, m.Z, !1, t.channel)) {
                        var u = oe.getOrInsertChannelState(t.channel.id, r);
                        t.channel.isPrivate() ? u.discoveryInitialized || null != u.applicationCommands || Y(t.channel.id, {
                            type: r,
                            includeApplications: null == u.applicationSections
                        }).then((function(e) {
                            if (null != e) {
                                var n, i = {
                                    applicationCommands: z([], null !== (n = e.applicationCommands) && void 0 !== n ? n : [])
                                };
                                null != e.applications && (i.applicationSections = W(e.applications));
                                c.Z.dispatch({
                                    type: "APPLICATION_COMMAND_SEARCH_STORE_UPDATE",
                                    channelId: t.channel.id,
                                    commandType: r,
                                    state: i
                                })
                            }
                        })) : null == (null === (n = u.queries.get(i)) || void 0 === n ? void 0 : n.scrollDownCursor) && Y(t.channel.id, {
                            type: r,
                            roleIds: ue(t.channel.guild_id),
                            query: i,
                            limit: o,
                            applicationId: a,
                            includeApplications: !u.discoveryInitialized && null == u.applicationSections
                        }).then((function(e) {
                            if (null != e && oe.channelStates.has(t.channel.id)) {
                                de({
                                    context: t,
                                    commandType: r,
                                    query: i,
                                    limit: o,
                                    canOnlyUseTextCommands: !1,
                                    applicationCommands: e.applicationCommands,
                                    scrollDownCursor: e.nextCursor,
                                    applications: e.applications,
                                    applicationId: a
                                });
                                oe.emitChange()
                            }
                        }))
                    }
                }), 250, {
                    leading: !0,
                    trailing: !0,
                    maxWait: 750
                }),
                ye = (pe = Z((function(e, n) {
                    var t, r, i, o, a, u, l;
                    return K(this, (function(s) {
                        switch (s.label) {
                            case 0:
                                t = e.context, r = e.commandType, i = e.query, o = e.limit;
                                if (!(0, b.oK)(v.Z, m.Z, !1, t.channel)) return [2];
                                u = oe.getOrInsertChannelState(t.channel.id, r);
                                return t.channel.isPrivate() || null == (l = null === (a = u.queries.get(i)) || void 0 === a ? void 0 : a.scrollDownCursor) ? [2] : [4, Y(t.channel.id, {
                                    type: r,
                                    roleIds: ue(t.channel.guild_id),
                                    query: i,
                                    limit: o,
                                    cursor: l,
                                    includeApplications: !u.discoveryInitialized && null == u.applicationSections
                                }, {
                                    abortable: !0,
                                    signal: n
                                }).then((function(e) {
                                    var n;
                                    if (null != e && oe.channelStates.has(t.channel.id)) {
                                        var o, a = null !== (o = null === (n = u.queries.get(i)) || void 0 === n ? void 0 : n.commands.filter((function(e) {
                                                return e.inputType !== C.iw.PLACEHOLDER
                                            }))) && void 0 !== o ? o : [],
                                            l = z([], e.applicationCommands),
                                            s = [],
                                            c = i.split(" ");
                                        l.forEach((function(e) {
                                            var n;
                                            if (null == a.find((function(n) {
                                                    return n.id === e.id
                                                }))) {
                                                var t = null === (n = u.applicationSections) || void 0 === n ? void 0 : n.find((function(n) {
                                                        return n.id === e.applicationId
                                                    })),
                                                    r = ce(i, c, e, t);
                                                r > 0 && s.push(F(H({}, e), {
                                                    score: r
                                                }))
                                            }
                                        }));
                                        E.DZ.loadIfNecessary();
                                        s.sort((function(e, n) {
                                            if (e.score !== n.score) return n.score - e.score;
                                            var r = M.ZP.getScoreWithoutLoadingLatest(t, e),
                                                i = M.ZP.getScoreWithoutLoadingLatest(t, n);
                                            return r !== i ? i - r : e.displayName.localeCompare(n.displayName)
                                        }));
                                        var d = e.nextCursor;
                                        if (null != d)
                                            for (var p = 0; p < 4; p += 1) s.push(F(H({}, Q(p, r)), {
                                                score: 0
                                            }));
                                        u.queries.set(i, {
                                            commands: e.repaired ? s : x(a).concat(x(s)),
                                            done: !0,
                                            scrollDownCursor: d
                                        });
                                        oe.emitChange()
                                    }
                                }))];
                            case 1:
                                s.sent();
                                return [2]
                        }
                    }))
                })), function(e, n) {
                    return pe.apply(this, arguments)
                });

            function me(e, n, t, i) {
                le();
                var o = (0, p.Z)(),
                    a = (0, l.cj)([oe], (function() {
                        var r, i, o, a = oe.getOrInsertChannelState(e.id, n),
                            u = a.queries,
                            l = a.pendingQueries;
                        return {
                            applicationSections: a.applicationSections,
                            commands: null !== (o = null === (r = u.get(t)) || void 0 === r ? void 0 : r.commands) && void 0 !== o ? o : null === (i = l.get(t)) || void 0 === i ? void 0 : i.commands
                        }
                    }), [e.id, n, t]),
                    u = a.commands,
                    s = a.applicationSections;
                r.useEffect((function() {
                    c.Z.dispatch({
                        type: "APPLICATION_COMMAND_SEARCH_STORE_QUERY",
                        context: {
                            channel: e,
                            guild: null != e.guild_id ? I.Z.getGuild(e.guild_id) : null
                        },
                        query: t,
                        limit: i,
                        commandType: n
                    })
                }), [e, n, t, i]);
                var d = r.useRef(!1),
                    f = r.useCallback((function() {
                        if (!d.current) {
                            d.current = !0;
                            ye({
                                commandType: n,
                                context: {
                                    channel: e
                                },
                                query: t,
                                limit: i
                            }, o).finally((function() {
                                d.current = !1
                            }))
                        }
                    }), [n, e, t, o, i]);
                return {
                    commands: u,
                    sections: null != s ? s : X,
                    scrollDown: f
                }
            }
        },
        248046: (e, n, t) => {
            t.d(n, {
                Z8: () => A,
                nG: () => C,
                BH: () => b,
                Dd: () => D,
                $z: () => P,
                bD: () => R,
                nT: () => w,
                oK: () => Z,
                BO: () => L,
                Ft: () => U,
                D7: () => H
            });
            var r = t(224736),
                i = t.n(r),
                o = t(441143),
                a = t.n(o),
                u = t(496486),
                l = t.n(u),
                s = t(940060),
                c = t(73904),
                d = t(734394),
                p = t(948832),
                f = t(382060),
                y = t(284610),
                m = t(682776),
                _ = t(272200),
                E = t(127624),
                h = t(2590),
                g = t(520453);

            function T(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function I(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function v(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        I(e, n, t[n])
                    }))
                }
                return e
            }

            function O(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function N(e) {
                return function(e) {
                    if (Array.isArray(e)) return T(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return T(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return T(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function A(e) {
                var n, t = e.rootCommand,
                    r = e.command,
                    i = e.applicationId,
                    o = e.subCommandPath,
                    a = e.useKeyedPermissions;
                if (null != t.permissions && t.permissions.length > 0)
                    if (a) n = (0, d.tk)(t.permissions);
                    else {
                        n = {};
                        t.permissions.forEach((function(e) {
                            n[e.id] = e
                        }))
                    } var u, l, p, f = (null != o ? o : []).map((function(e) {
                        return e.name
                    })),
                    y = (null != o ? o : []).map((function(e) {
                        return e.displayName
                    }));
                return {
                    version: t.version,
                    guildId: t.guild_id,
                    id: [t.id].concat(N(f)).join(E.oQ),
                    name: [t.name].concat(N(f)).join(" "),
                    serverLocalizedName: r.name_localized,
                    applicationId: i,
                    type: null !== (u = t.type) && void 0 !== u ? u : c.yU.CHAT,
                    inputType: _.iw.BOT,
                    description: r.description,
                    options: S(r.options),
                    rootCommand: t,
                    subCommandPath: o,
                    defaultMemberPermissions: null == t.default_member_permissions ? void 0 : s.Z.deserialize(t.default_member_permissions),
                    dmPermission: t.dm_permission,
                    permissions: n,
                    displayName: [null !== (l = t.name_localized) && void 0 !== l ? l : t.name].concat(N(y)).join(" "),
                    displayDescription: null !== (p = r.description_localized) && void 0 !== p ? p : r.description,
                    nsfw: t.nsfw,
                    contexts: t.contexts,
                    integration_types: t.integration_types
                }
            }

            function S(e) {
                return null == e ? void 0 : e.map((function(e) {
                    var n, t, r, i = O(v({}, e), {
                        choices: (r = e.choices, null == r ? void 0 : r.map((function(e) {
                            var n;
                            return O(v({}, e), {
                                displayName: null !== (n = e.name_localized) && void 0 !== n ? n : e.name
                            })
                        }))),
                        options: S(e.options),
                        serverLocalizedName: e.name_localized,
                        displayName: null !== (n = e.name_localized) && void 0 !== n ? n : e.name,
                        displayDescription: null !== (t = e.description_localized) && void 0 !== t ? t : e.description
                    });
                    return e.type === c.jw.CHANNEL && "channel_types" in e ? O(v({}, i), {
                        channelTypes: e.channel_types
                    }) : e.type !== c.jw.NUMBER && e.type !== c.jw.INTEGER || !("min_value" in e) && !("max_value" in e) ? e.type === c.jw.STRING && ("min_length" in e || "max_length" in e) ? O(v({}, i), {
                        minLength: e.min_length,
                        maxLength: e.max_length
                    }) : i : O(v({}, i), {
                        minValue: e.min_value,
                        maxValue: e.max_value
                    })
                }))
            }

            function M(e) {
                var n = e.rootCommand,
                    t = e.command,
                    r = e.applicationId,
                    i = e.subCommandPath,
                    o = e.useKeyedPermissions;
                if (t.hasOwnProperty("id")) {
                    if (null == t.options || 0 === t.options.length) return [A({
                        rootCommand: n,
                        command: t,
                        applicationId: r,
                        subCommandPath: i,
                        useKeyedPermissions: o
                    })]
                } else if (t.type !== c.jw.SUB_COMMAND && t.type !== c.jw.SUB_COMMAND_GROUP && (null == t.options || 0 === t.options.length)) return [A({
                    rootCommand: n,
                    command: t,
                    applicationId: r,
                    subCommandPath: i,
                    useKeyedPermissions: o
                })];
                var a = [];
                if (null == t.options) return a;
                for (var u = t.options.filter((function(e) {
                        return e.type === c.jw.SUB_COMMAND_GROUP
                    })), l = 0; l < u.length; l++) {
                    var s, d;
                    (s = a).push.apply(s, N(M({
                        rootCommand: n,
                        command: u[l],
                        applicationId: r,
                        subCommandPath: (null != i ? i : []).concat([{
                            name: u[l].name,
                            type: c.jw.SUB_COMMAND_GROUP,
                            displayName: null !== (d = u[l].name_localized) && void 0 !== d ? d : u[l].name
                        }]),
                        useKeyedPermissions: o
                    })))
                }
                for (var p = t.options.filter((function(e) {
                        return e.type === c.jw.SUB_COMMAND
                    })), f = 0; f < p.length; f++) {
                    var y;
                    a.push(A({
                        rootCommand: n,
                        command: p[f],
                        applicationId: r,
                        subCommandPath: (null != i ? i : []).concat([{
                            name: p[f].name,
                            type: c.jw.SUB_COMMAND,
                            displayName: null !== (y = p[f].name_localized) && void 0 !== y ? y : p[f].name
                        }]),
                        useKeyedPermissions: o
                    }))
                }
                0 === u.length && 0 === p.length && a.push(A({
                    rootCommand: n,
                    command: t,
                    applicationId: r,
                    subCommandPath: i,
                    useKeyedPermissions: o
                }));
                return a
            }

            function C(e, n) {
                return l().flatMap(e, (function(e) {
                    a()(null != e.id, "Missing command id");
                    return M({
                        rootCommand: e,
                        command: e,
                        applicationId: e.application_id,
                        subCommandPath: void 0,
                        useKeyedPermissions: n
                    })
                }))
            }

            function b(e) {
                return h.Xyh.test(e.trim())
            }

            function D(e, n, t, r) {
                var i = [];
                l()(e).forEach((function(e) {
                    n.test(e.displayName) && (null == e.predicate || e.predicate(t)) && i.push(e)
                }));
                return i.slice(0, r)
            }

            function P(e) {
                var n = e.type === c.jw.STRING,
                    t = e.type === c.jw.CHANNEL,
                    r = e.type === c.jw.USER || e.type === c.jw.MENTIONABLE,
                    i = e.type === c.jw.ROLE || e.type === c.jw.MENTIONABLE;
                return {
                    canMentionEveryone: n || i,
                    canMentionHere: n,
                    canMentionChannels: n || t,
                    canMentionUsers: n || r,
                    canMentionRoles: n || i,
                    canMentionAnyGuildUser: r,
                    canMentionNonMentionableRoles: i
                }
            }

            function R(e) {
                return i()(e).subtract(1).toString()
            }

            function w(e, n, t, r) {
                return !!Z(m.Z, p.Z, !1, e) && (e.isPrivate() && t > 0 || (null !== (i = null == r ? void 0 : r[n]) && void 0 !== i ? i : 0) > 0);
                var i
            }
            var Z = function(e, n, t, r) {
                    return !t && (r.isMultiUserDM() ? n.getIntegrations(r.id).length > 0 : r.isDM() ? !r.isSystemDM() && (null != r.rawRecipients.find((function(e) {
                        return e.bot
                    })) || n.getIntegrations(r.id).length > 0) : !r.isArchivedLockedThread() && (!!(0, f.Em)(r.type) && e.can(s.Z.combine(g.Pl.USE_APPLICATION_COMMANDS, g.Pl.SEND_MESSAGES), r)))
                },
                L = s.Z.deserialize(0);

            function U(e) {
                var n = e.PermissionStore,
                    t = e.guild,
                    r = e.selfMember,
                    i = e.applicationLevelPermissions,
                    o = e.commandLevelPermissions,
                    a = e.defaultMemberPermissions;
                if (t.ownerId === r.userId || n.can(g.Pl.ADMINISTRATOR, t)) return !0;
                var u = t.id;
                if (null != o) {
                    var l = j(r, u, o);
                    if ("boolean" == typeof l) return l
                }
                var c = j(r, u, i);
                return !("boolean" == typeof c && !c) && (null == a || !s.Z.equals(a, L) && n.can(a, t))
            }

            function j(e, n, t) {
                var r = t[(0, d.rE)(e.userId, _.Kw.USER)];
                if (null != r) return r.permission;
                var i = !1,
                    o = !0,
                    a = !1,
                    u = void 0;
                try {
                    for (var l, s = e.roles[Symbol.iterator](); !(o = (l = s.next()).done); o = !0) {
                        var c = l.value,
                            p = t[(0, d.rE)(c, _.Kw.ROLE)];
                        if (null != p) {
                            i = !0;
                            if (p.permission) return !0
                        }
                    }
                } catch (e) {
                    a = !0;
                    u = e
                } finally {
                    try {
                        o || null == s.return || s.return()
                    } finally {
                        if (a) throw u
                    }
                }
                if (i) return !1;
                var f = t[(0, d.rE)(n, _.Kw.ROLE)];
                return null != f ? f.permission : null
            }

            function H(e) {
                switch (e) {
                    case _.bB.CHAT:
                        return y.d.ChannelMessage;
                    case _.bB.APPLICATION_LAUNCHER:
                        return y.d.ApplicationLauncherCommand
                }
            }
        },
        418973: (e, n, t) => {
            t.d(n, {
                Z: () => S
            });
            var r = t(785893),
                i = (t(667294), t(496486)),
                o = t.n(i),
                a = t(882723),
                u = t(761953),
                l = t(716239),
                s = t(73904),
                c = t(773011),
                d = t(840922),
                p = t(473903),
                f = t(272200),
                y = t(127624),
                m = t(2590),
                _ = t(473708);

            function E(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function h(e, n, t, r, i, o, a) {
                try {
                    var u = e[o](a),
                        l = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(l) : Promise.resolve(l).then(r, i)
            }

            function g(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

                        function a(e) {
                            h(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            h(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function T(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function I(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }
            var v = function(e, n) {
                var t, r, i, o, a = {
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
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0,
                                    i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2];
                                            a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                o = n.call(e, a)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                t = i = 0
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

            function O(e) {
                switch (e) {
                    case m.nkL.GIPHY.title:
                    case m.nkL.TENOR.title:
                        return _.Z.Messages.COMMAND_GIPHY_DESCRIPTION;
                    default:
                        return ""
                }
            }
            var N, A = (N = o()(m.nkL).values().map((function(e) {
                return {
                    id: e.commandId,
                    name: e.command,
                    displayName: e.command,
                    type: s.yU.CHAT,
                    inputType: f.iw.BUILT_IN_INTEGRATION,
                    applicationId: y.bi.BUILT_IN,
                    get description() {
                        return O(e.title)
                    },
                    get displayDescription() {
                        return O(e.title)
                    },
                    options: e.type === m.q9n.GIF ? [{
                        name: "query",
                        displayName: "query",
                        type: s.jw.STRING,
                        get description() {
                            return _.Z.Messages.COMMAND_GIPHY_QUERY_DESCRIPTION
                        },
                        get displayDescription() {
                            return _.Z.Messages.COMMAND_GIPHY_QUERY_DESCRIPTION
                        },
                        required: !0
                    }] : [],
                    integrationType: e.type,
                    integrationTitle: e.title
                }
            })).value(), function(e) {
                if (Array.isArray(e)) return E(e)
            }(N) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(N) || function(e, n) {
                if (e) {
                    if ("string" == typeof e) return E(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    return "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? E(e, n) : void 0
                }
            }(N) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()).concat([{
                id: "-15",
                name: "leave",
                displayName: "leave",
                type: s.yU.CHAT,
                inputType: f.iw.BUILT_IN,
                applicationId: y.bi.BUILT_IN,
                get description() {
                    return _.Z.Messages.LEAVE_GROUP_DM
                },
                get displayDescription() {
                    return _.Z.Messages.LEAVE_GROUP_DM
                },
                options: [{
                    name: "silent",
                    displayName: "silent",
                    type: s.jw.BOOLEAN,
                    get description() {
                        return _.Z.Messages.LEAVE_GROUP_DM_SILENTLY_COMMAND_OPTION
                    },
                    get displayDescription() {
                        return _.Z.Messages.LEAVE_GROUP_DM_SILENTLY
                    },
                    required: !1
                }],
                predicate: function(e) {
                    return e.channel.isGroupDM()
                },
                execute: function(e, n) {
                    var t, i, o = n.channel,
                        s = (0, c.F6)(o, p.default, d.Z),
                        f = _.Z.Messages.LEAVE_GROUP_DM_TITLE.format({
                            name: s
                        }),
                        y = _.Z.Messages.LEAVE_GROUP_DM_BODY.format({
                            name: s
                        }),
                        m = null !== (i = null === (t = e.find((function(e) {
                            return "silent" === e.name
                        }))) || void 0 === t ? void 0 : t.value) && void 0 !== i && i;
                    if (o.isManaged()) {
                        f = _.Z.Messages.LEAVE_GROUP_DM_MANAGED_TITLE.format({
                            name: s
                        });
                        y = _.Z.Messages.LEAVE_GROUP_DM_MANAGED_BODY.format({
                            name: s
                        })
                    }(0, a.openModal)((function(e) {
                        return (0, r.jsx)(a.ConfirmModal, I(function(e) {
                            for (var n = 1; n < arguments.length; n++) {
                                var t = null != arguments[n] ? arguments[n] : {},
                                    r = Object.keys(t);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                                }))));
                                r.forEach((function(n) {
                                    T(e, n, t[n])
                                }))
                            }
                            return e
                        }({
                            header: f,
                            confirmText: _.Z.Messages.LEAVE_GROUP_DM,
                            cancelText: _.Z.Messages.CANCEL,
                            onConfirm: E
                        }, e), {
                            children: (0, r.jsx)(a.Text, {
                                variant: "text-md/normal",
                                children: y
                            })
                        }))
                    }));

                    function E() {
                        return h.apply(this, arguments)
                    }

                    function h() {
                        return (h = g((function() {
                            return v(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        e.trys.push([0, 2, , 3]);
                                        return [4, u.Z.closePrivateChannel(o.id, void 0, m)];
                                    case 1:
                                        e.sent();
                                        return [3, 3];
                                    case 2:
                                        e.sent();
                                        l.Z.sendBotMessage(o.id, _.Z.Messages.LEAVE_GROUP_DM_ERROR);
                                        return [3, 3];
                                    case 3:
                                        return [2]
                                }
                            }))
                        }))).apply(this, arguments)
                    }
                }
            }]);
            const S = A
        },
        866893: (e, n, t) => {
            t.d(n, {
                U: () => k,
                Z: () => Y
            });
            var r = t(496486),
                i = t.n(r),
                o = t(920883),
                a = t(842227),
                u = t(202351),
                l = t(744564),
                s = t(536945),
                c = t(591684),
                d = t(664625),
                p = t(61209),
                f = t(179913),
                y = t(715107),
                m = t(72580),
                _ = t(474167);

            function E(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function h(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function g(e) {
                g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return g(e)
            }

            function T(e, n) {
                return !n || "object" !== O(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function I(e, n) {
                I = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return I(e, n)
            }

            function v(e) {
                return function(e) {
                    if (Array.isArray(e)) return E(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return E(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return E(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var O = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function N(e) {
                var n = function() {
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
                    var t, r = g(e);
                    if (n) {
                        var i = g(this).constructor;
                        t = Reflect.construct(r, arguments, i)
                    } else t = r.apply(this, arguments);
                    return T(this, t)
                }
            }
            var A, S = [],
                M = null,
                C = null,
                b = new Set,
                D = o.z.LATEST_ACTIVITY,
                P = 0,
                R = [],
                w = !1,
                Z = [],
                L = i().chain(S),
                U = i().chain(S),
                j = new Set,
                H = new Set;

            function F(e) {
                var n;
                return null !== (n = f.ZP.lastMessageId(e)) && void 0 !== n ? n : e
            }

            function G(e) {
                return function(n, t) {
                    return (0, _.yv)(n) ? -1 : (0, _.yv)(t) ? 1 : e === o.z.LATEST_ACTIVITY ? a.default.compare(F(t), F(n)) : a.default.compare(t, n)
                }
            }

            function B() {
                R = [];
                A = null;
                C = null;
                b = new Set;
                D = o.z.LATEST_ACTIVITY;
                P = 0;
                Z = [];
                L = i().chain(S);
                U = i().chain(S);
                H.clear();
                j.clear()
            }

            function x() {
                var e, n = y.Z.getChannelId();
                if (null == n || !(null === (e = p.Z.getChannel(n)) || void 0 === e ? void 0 : e.isForumLikeChannel())) {
                    B();
                    return !1
                }
                q({
                    refreshThreadIds: !0
                })
            }

            function k(e) {
                var n = p.Z.getChannel(e);
                return null == n ? [] : Object.values(s.Z.getThreadsForParent(n.guild_id, n.id)).map((function(e) {
                    return e.id
                })).sort(G(D))
            }

            function q(e) {
                var n = p.Z.getChannel(C);
                if (null != n) {
                    if (null == e ? void 0 : e.refreshThreadIds) {
                        Z = Object.values(s.Z.getThreadsForParent(n.guild_id, n.id)).map((function(e) {
                            return e.id
                        }));
                        P = 0;
                        w = !0
                    }
                    if (0 !== j.size) {
                        Z = Z.filter((function(e) {
                            return !j.has(e)
                        }));
                        j.clear()
                    }
                    if (0 !== H.size) {
                        Z = Array.from(new Set(v(Z).concat(v(H))));
                        H.clear()
                    }
                    if ((null == e ? void 0 : e.refreshThreadIds) || (null == e ? void 0 : e.sortThreadIds)) {
                        U = i().chain(Z).sort(G(o.z.LATEST_ACTIVITY));
                        L = i().chain(Z).sort(G(o.z.CREATION_DATE))
                    }
                    var t, r = (D === o.z.LATEST_ACTIVITY ? U : L).value(),
                        a = (R = 0 === b.size ? r : r.filter((t = b, function(e) {
                            var n, r = null === (n = p.Z.getChannel(e)) || void 0 === n ? void 0 : n.appliedTags;
                            return null != r && 0 !== r.length && r.some((function(e) {
                                return t.has(e)
                            }))
                        }))).find((function(e) {
                            return function(e) {
                                var n = c.Z.getCount(e);
                                return null === n || 0 === n
                            }(e)
                        }));
                    A = null == a ? null : a
                }
            }
            var K = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && I(e, n)
                }(t, e);
                var n = N(t);

                function t() {
                    h(this, t);
                    return n.apply(this, arguments)
                }
                var r = t.prototype;
                r.initialize = function() {
                    this.waitFor(p.Z, s.Z, y.Z, f.ZP)
                };
                r.getNewThreadCount = function() {
                    return P
                };
                r.getCanAckThreads = function() {
                    return w
                };
                r.getThreadIds = function(e, n, t) {
                    var r = e !== C,
                        i = !(0, m.OL)(t, b),
                        o = n !== D;
                    C = e;
                    b = t;
                    D = n;
                    r ? q({
                        refreshThreadIds: !0
                    }) : o ? q({
                        sortThreadIds: !0
                    }) : i && q();
                    return R
                };
                r.getCurrentThreadIds = function() {
                    return R
                };
                r.getAndDeleteMostRecentUserCreatedThreadId = function() {
                    var e = M;
                    M = null;
                    return e
                };
                r.getFirstNoReplyThreadId = function() {
                    return A
                };
                r.__getLocalVars = function() {
                    return {
                        NO_THREAD_IDS: S,
                        mostRecentUserCreatedThreadId: M,
                        currentChannelId: C,
                        currentTagFilter: b,
                        currentSortOrder: D,
                        newThreadCount: P,
                        threadIds: R,
                        firstNoReplyThreadId: A,
                        canAckThreads: w,
                        _all: Z,
                        _lazySortedCreation: L,
                        _lazySortedActivity: U,
                        _deleted: j,
                        _pinned: H
                    }
                };
                return t
            }(u.ZP.Store);
            K.displayName = "ForumActivePostStore";
            const Y = new K(l.Z, {
                CONNECTION_OPEN: x,
                OVERLAY_INITIALIZE: x,
                GUILD_CREATE: x,
                CHANNEL_SELECT: x,
                CHANNEL_DELETE: function(e) {
                    var n = e.channel;
                    if (null == n.parent_id || n.parent_id !== C) return !1;
                    B()
                },
                THREAD_LIST_SYNC: function(e) {
                    var n, t = e.guildId;
                    if (null == C) return !1;
                    if (t !== (null === (n = p.Z.getChannel(C)) || void 0 === n ? void 0 : n.guild_id)) return !1;
                    q({
                        refreshThreadIds: !0
                    })
                },
                THREAD_CREATE: function(e) {
                    var n = e.channel,
                        t = e.isNewlyCreated;
                    if (null == n.parent_id || n.parent_id !== C) return !1;
                    if (!t) return !1;
                    n.ownerId !== d.default.getId() ? P++ : M = n.id
                },
                THREAD_UPDATE: function(e) {
                    var n = e.channel;
                    if (null == n.parent_id || n.parent_id !== C) return !1;
                    var t = (0, _.yv)(n.id),
                        r = H.has(n.id);
                    if (t && !r) {
                        H.add(n.id);
                        q({
                            sortThreadIds: !0
                        })
                    } else {
                        if (t || !r) return !1;
                        H.delete(n.id);
                        q({
                            sortThreadIds: !0
                        })
                    }
                },
                THREAD_DELETE: function(e) {
                    var n = e.channel;
                    if (null == n.parent_id || n.parent_id !== C) return !1;
                    j.add(n.id);
                    q({
                        sortThreadIds: !0
                    })
                },
                RESORT_THREADS: function(e) {
                    var n = e.channelId;
                    if (null == n || n !== C) return !1;
                    q({
                        refreshThreadIds: !0
                    })
                },
                CHANNEL_ACK: function(e) {
                    var n = e.channelId;
                    if (null == n || n !== C) return !1;
                    w = !1
                }
            })
        },
        777302: (e, n, t) => {
            t.d(n, {
                F: () => d,
                Z: () => p
            });
            var r = t(202351),
                i = t(567403),
                o = t(682776),
                a = t(473903),
                u = t(563135),
                l = t(2590);

            function s(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function c(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, o = [],
                            a = !0,
                            u = !1;
                        try {
                            for (t = t.call(e); !(a = (r = t.next()).done); a = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            u = !0;
                            i = e
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return s(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return s(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function d(e, n) {
                var t = c(arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [a.default, i.Z, o.Z], 3),
                    r = t[0],
                    s = t[1],
                    d = t[2],
                    p = s.getGuild(e),
                    f = r.getUser(n);
                if (null == p || null == f) return !1;
                if (f.isNonUserBot()) return !1;
                var y = p.isOwner(f) || u.ZP.can({
                    permission: l.Plq.ADMINISTRATOR,
                    user: f,
                    context: p
                });
                return !y && d.canManageUser(l.Plq.MODERATE_MEMBERS, f, p)
            }

            function p(e, n) {
                return (0, r.e7)([a.default, i.Z, o.Z], (function() {
                    return d(e, n, [a.default, i.Z, o.Z])
                }), [e, n])
            }
        },
        734394: (e, n, t) => {
            t.d(n, {
                gw: () => i,
                rE: () => o,
                tk: () => a
            });
            var r = t(73904);
            t(272200);

            function i(e, n) {
                return e === r.yU.CHAT ? "/" + n : n
            }

            function o(e, n) {
                return "".concat(e, ":").concat(n)
            }

            function a(e) {
                return Object.fromEntries(e.map((function(e) {
                    return [o(e.id, e.type), e]
                })))
            }
        },
        564333: (e, n, t) => {
            t.d(n, {
                Rh: () => l,
                Yz: () => s,
                GB: () => c
            });
            t(608575);
            var r = t(575494),
                i = t(281110),
                o = t(744564),
                a = (t(585622), t(948832)),
                u = t(2590);
            t(520453), t(473708);

            function l() {
                if (a.Z.getApplicationsShelfFetchState() === a.M.NOT_FETCHED) {
                    o.Z.dispatch({
                        type: "APPLICATIONS_SHELF_FETCH_START"
                    });
                    i.ZP.get(u.ANM.APPLICATIONS_SHELF).then((function(e) {
                        return o.Z.dispatch({
                            type: "APPLICATIONS_SHELF_FETCH_SUCCESS",
                            applications: e.body.applications
                        })
                    })).catch((function(e) {
                        return o.Z.dispatch({
                            type: "APPLICATIONS_SHELF_FETCH_FAIL"
                        })
                    }))
                }
            }

            function s(e) {
                var n = new r.Z(1e3, 5e3);
                o.Z.dispatch({
                    type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START",
                    channelId: e
                });
                i.ZP.get({
                    url: u.ANM.CHANNEL_INTEGRATIONS(e),
                    backoff: n,
                    retries: 10
                }).then((function(n) {
                    o.Z.dispatch({
                        type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS",
                        channelId: e,
                        integrations: n.body
                    })
                })).catch((function() {
                    o.Z.dispatch({
                        type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL",
                        channelId: e
                    })
                }))
            }

            function c(e, n) {
                return i.ZP.delete(u.ANM.CHANNEL_INTEGRATION(e, n)).then((function(e) {
                    var n;
                    if (null === (n = e.body) || void 0 === n ? void 0 : n.message) throw new Error(e.body.message)
                }))
            }
        },
        916675: (e, n, t) => {
            t.d(n, {
                j: () => p
            });
            var r = t(667294),
                i = t(202351),
                o = t(318715),
                a = t(61209);
            const u = (0, t(260561).B)({
                kind: "user",
                id: "2023-03_apps_in_gdms",
                label: "Apps in GDMs",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show apps in gdm",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function l(e) {
                return null != e && (!!e.isMultiUserDM() || !!e.isDM() && (!e.isSystemDM() && null == e.rawRecipients.find((function(e) {
                    return e.bot
                }))))
            }
            var s = t(339432),
                c = t(564333),
                d = t(948832);

            function p(e) {
                var n = e.channelId,
                    t = ((0, s.SO)(), function(e) {
                        var n = (0, o.ZP)([a.Z], (function() {
                            return a.Z.getChannel(e)
                        }));
                        return u.useExperiment({
                            location: "baec9c_1"
                        }).enabled && l(n)
                    }(n)),
                    p = t,
                    f = (0, i.cj)([d.Z], (function() {
                        return {
                            installedIntegrations: d.Z.getIntegrations(n),
                            applicationsShelf: d.Z.getApplicationsShelf(),
                            integrationsFetchState: d.Z.getIntegrationsFetchState(n),
                            applicationsShelfFetchState: d.Z.getApplicationsShelfFetchState()
                        }
                    })),
                    y = f.installedIntegrations,
                    m = f.applicationsShelf,
                    _ = f.integrationsFetchState,
                    E = f.applicationsShelfFetchState;
                r.useEffect((function() {
                    if (p) {
                        _ !== d.M.NOT_FETCHED && _ !== d.M.FETCH_FAILED || (0, c.Yz)(n);
                        E !== d.M.NOT_FETCHED && E !== d.M.FETCH_FAILED || (0, c.Rh)()
                    }
                }), [p, n, _, E]);
                var h = new Set(y.map((function(e) {
                    return e.application.id
                })));
                return {
                    installedIntegrations: y,
                    availableApplications: m.filter((function(e) {
                        return !h.has(e.id)
                    })),
                    applicationsShelf: m,
                    fetched: _ !== d.M.NOT_FETCHED && _ !== d.M.FETCHING && E !== d.M.NOT_FETCHED && E !== d.M.FETCHING,
                    appsInGDMEnabled: p
                }
            }
        },
        948832: (e, n, t) => {
            t.d(n, {
                M: () => f,
                Z: () => N
            });
            var r = t(202351),
                i = t(744564),
                o = t(451936),
                a = t(223397);

            function u(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function l(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e) {
                s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return s(e)
            }

            function c(e, n) {
                return !n || "object" !== y(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function d(e, n) {
                d = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return d(e, n)
            }

            function p(e) {
                return function(e) {
                    if (Array.isArray(e)) return u(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return u(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return u(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var f, y = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function m(e) {
                var n = function() {
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
                    var t, r = s(e);
                    if (n) {
                        var i = s(this).constructor;
                        t = Reflect.construct(r, arguments, i)
                    } else t = r.apply(this, arguments);
                    return c(this, t)
                }
            }! function(e) {
                e[e.NOT_FETCHED = 0] = "NOT_FETCHED";
                e[e.FETCHING = 1] = "FETCHING";
                e[e.FETCHED = 2] = "FETCHED";
                e[e.FETCH_FAILED = 3] = "FETCH_FAILED"
            }(f || (f = {}));
            var _ = new Map,
                E = new Map,
                h = [],
                g = f.NOT_FETCHED,
                T = [],
                I = function(e) {
                    ! function(e, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(n && n.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        n && d(e, n)
                    }(t, e);
                    var n = m(t);

                    function t() {
                        l(this, t);
                        return n.apply(this, arguments)
                    }
                    var r = t.prototype;
                    r.getIntegrations = function(e) {
                        var n;
                        return null !== (n = _.get(e)) && void 0 !== n ? n : T
                    };
                    r.getIntegration = function(e, n) {
                        var t;
                        return null === (t = _.get(e)) || void 0 === t ? void 0 : t.find((function(e) {
                            return e.application.id === n
                        }))
                    };
                    r.getAllIntegrations = function() {
                        return _
                    };
                    r.getIntegrationsFetchState = function(e) {
                        var n;
                        return null !== (n = E.get(e)) && void 0 !== n ? n : f.NOT_FETCHED
                    };
                    r.getApplicationsShelfFetchState = function() {
                        return g
                    };
                    r.getApplicationsShelf = function() {
                        return h
                    };
                    r.__getLocalVars = function() {
                        return {
                            integrationsByChannel: _,
                            integrationsByChannelFetchState: E,
                            applicationsShelf: h,
                            applicationsShelfFetchState: g,
                            EMPTY: T,
                            store: O
                        }
                    };
                    return t
                }(r.ZP.Store);
            I.displayName = "PrivateChannelIntegrationStore";

            function v(e) {
                return e.sort((function(e, n) {
                    return e.application.name.localeCompare(n.application.name)
                }))
            }
            var O = new I(i.Z, {
                LOGOUT: function() {
                    _.clear()
                },
                CONNECTION_OPEN: function() {
                    _.clear();
                    E.clear()
                },
                CHANNEL_SELECT: function(e) {
                    var n = e.channelId;
                    if (null == n || E.get(n) !== f.FETCH_FAILED) return !1;
                    E.set(n, f.NOT_FETCHED)
                },
                APPLICATIONS_SHELF_FETCH_START: function() {
                    g = f.FETCHING
                },
                APPLICATIONS_SHELF_FETCH_SUCCESS: function(e) {
                    var n = e.applications;
                    h = n.map(o.Z.createFromServer).sort((function(e, n) {
                        return e.name.localeCompare(n.name)
                    }));
                    g = f.FETCHED
                },
                APPLICATIONS_SHELF_FETCH_FAIL: function() {
                    g = f.FETCH_FAILED
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START: function(e) {
                    var n = e.channelId;
                    _.set(n, null);
                    E.set(n, f.FETCHING)
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS: function(e) {
                    var n = e.channelId,
                        t = e.integrations;
                    _.set(n, v(t.map(a.F)));
                    E.set(n, f.FETCHED)
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL: function(e) {
                    var n = e.channelId;
                    E.set(n, f.FETCH_FAILED)
                },
                PRIVATE_CHANNEL_INTEGRATION_CREATE: function(e) {
                    var n = e.integration,
                        t = _.get(n.channel_id);
                    if (null == t) return !1;
                    _.set(n.channel_id, v(p(t).concat([(0, a.F)(n)])))
                },
                PRIVATE_CHANNEL_INTEGRATION_UPDATE: function(e) {
                    var n = e.integration,
                        t = _.get(n.channel_id);
                    if (null == t) return !1;
                    var r = (0, a.F)(n),
                        i = t.findIndex((function(e) {
                            return e.application.id === r.application.id
                        })),
                        o = p(t); - 1 === i ? o.push(r) : o[i] = r;
                    _.set(r.channel_id, v(o))
                },
                PRIVATE_CHANNEL_INTEGRATION_DELETE: function(e) {
                    var n = e.channelId,
                        t = e.applicationId,
                        r = _.get(n);
                    if (null == r) return !1;
                    _.set(n, r.filter((function(e) {
                        return e.application.id !== t
                    })))
                },
                CHANNEL_DELETE: function(e) {
                    var n = e.channel;
                    return _.delete(n.id)
                }
            });
            const N = O
        },
        798808: (e, n, t) => {
            t.d(n, {
                Z: () => I
            });
            var r = t(202351),
                i = t(744564),
                o = t(352980);

            function a(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function u(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function l(e) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return l(e)
            }

            function s(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        u(e, n, t[n])
                    }))
                }
                return e
            }

            function c(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function d(e, n) {
                return !n || "object" !== f(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function p(e, n) {
                p = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return p(e, n)
            }
            var f = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function y(e) {
                var n = function() {
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
                    var t, r = l(e);
                    if (n) {
                        var i = l(this).constructor;
                        t = Reflect.construct(r, arguments, i)
                    } else t = r.apply(this, arguments);
                    return d(this, t)
                }
            }
            var m = {},
                _ = {};

            function E(e) {
                if (null == e) return !1;
                var n = _[e];
                if (null == n) return !1;
                var t = o.Z.getMessage(e, n.messageId);
                if (null == t) return !1;
                m[e] = {
                    channel: n.channel,
                    message: t,
                    shouldMention: n.shouldMention,
                    showMentionToggle: n.showMentionToggle
                };
                delete _[e]
            }

            function h() {
                m = {};
                _ = {}
            }
            var g = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && p(e, n)
                }(t, e);
                var n = y(t);

                function t() {
                    a(this, t);
                    return n.apply(this, arguments)
                }
                var r = t.prototype;
                r.initialize = function() {
                    this.waitFor(o.Z)
                };
                r.getPendingReply = function(e) {
                    return m[e]
                };
                r.__getLocalVars = function() {
                    return {
                        pendingReplies: m,
                        shallowPendingReplies: _,
                        instance: T
                    }
                };
                return t
            }(r.ZP.Store);
            g.displayName = "PendingReplyStore";
            var T = new g(i.Z, {
                CREATE_PENDING_REPLY: function(e) {
                    var n = e.channel,
                        t = e.message,
                        r = e.shouldMention,
                        i = void 0 === r || r,
                        o = e.showMentionToggle,
                        a = void 0 === o || o;
                    m[n.id] = {
                        channel: n,
                        message: t,
                        shouldMention: i,
                        showMentionToggle: a
                    }
                },
                CREATE_SHALLOW_PENDING_REPLY: function(e) {
                    var n = e.channel,
                        t = e.messageId,
                        r = e.shouldMention,
                        i = void 0 === r || r,
                        o = e.showMentionToggle,
                        a = void 0 === o || o;
                    _[n.id] = {
                        channel: n,
                        messageId: t,
                        shouldMention: i,
                        showMentionToggle: a
                    }
                },
                SET_PENDING_REPLY_SHOULD_MENTION: function(e) {
                    var n = e.channelId,
                        t = e.shouldMention;
                    n in m && (m[n] = c(s({}, m[n]), {
                        shouldMention: t
                    }));
                    n in _ && (_[n] = c(s({}, _[n]), {
                        shouldMention: t
                    }))
                },
                DELETE_PENDING_REPLY: function(e) {
                    var n = e.channelId;
                    delete m[n];
                    delete _[n]
                },
                CONNECTION_OPEN: h,
                LOGOUT: h,
                MESSAGE_DELETE: function(e) {
                    var n, t, r, i = e.id,
                        o = e.channelId;
                    if ((null === (n = m[o]) || void 0 === n || null === (t = n.message) || void 0 === t ? void 0 : t.id) === i) delete m[o];
                    else {
                        if ((null === (r = _[o]) || void 0 === r ? void 0 : r.messageId) !== i) return !1;
                        delete _[o]
                    }
                },
                CHANNEL_SELECT: function(e) {
                    E(e.channelId)
                },
                LOAD_MESSAGES_SUCCESS: function(e) {
                    E(e.channelId)
                }
            });
            const I = T
        },
        596217: (e, n, t) => {
            t.d(n, {
                nt: () => u,
                WD: () => l
            });
            var r = t(288306),
                i = t.n(r),
                o = (t(730381), t(379364)),
                a = t(473708);

            function u() {
                return [{
                    label: a.Z.Messages.AUTO_ARCHIVE_DURATION_1_HOUR,
                    value: 60
                }, {
                    label: a.Z.Messages.AUTO_ARCHIVE_DURATION_24_HOURS,
                    value: 1440
                }, {
                    label: a.Z.Messages.AUTO_ARCHIVE_DURATION_3_DAYS,
                    value: 4320
                }, {
                    label: a.Z.Messages.AUTO_ARCHIVE_DURATION_1_WEEK,
                    value: 10080
                }]
            }
            i()((function() {
                return u().map((function(e) {
                    return e.value
                }))
            }));

            function l(e, n) {
                var t;
                return null !== (t = null != n ? n : null == e ? void 0 : e.defaultAutoArchiveDuration) && void 0 !== t ? t : o.AX
            }
        },
        161283: (e, n, t) => {
            t.d(n, {
                Jw: () => b,
                vH: () => P,
                oD: () => R,
                Od: () => w,
                JA: () => Z,
                gK: () => L,
                Wj: () => U
            });
            var r = t(667294),
                i = t(281110),
                o = t(744564),
                a = t(105783),
                u = t(943469),
                l = t(716239),
                s = t(567867),
                c = t(866893),
                d = t(854602),
                p = t(30027),
                f = t(331055),
                y = t(61209),
                m = t(284610),
                _ = t(352980),
                E = t(539273),
                h = t(661123),
                g = t(596217),
                T = t(225386),
                I = t(323483),
                v = t(379364),
                O = t(2590),
                N = t(473708);

            function A(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function S(e, n, t, r, i, o, a) {
                try {
                    var u = e[o](a),
                        l = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(l) : Promise.resolve(l).then(r, i)
            }

            function M(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

                        function a(e) {
                            S(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            S(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function C(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, o = [],
                            a = !0,
                            u = !1;
                        try {
                            for (t = t.call(e); !(a = (r = t.next()).done); a = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            u = !0;
                            i = e
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return A(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return A(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var b, D = function(e, n) {
                var t, r, i, o, a = {
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
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys,
                                                i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2];
                                            a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                o = n.call(e, a)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                t = i = 0
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
            ! function(e) {
                e[e.Disabled = 1] = "Disabled";
                e[e.Enabled = 2] = "Enabled";
                e[e.PrivateOnly = 3] = "PrivateOnly"
            }(b || (b = {}));

            function P(e) {
                var n = (0, T.NE)(e);
                return (0, T.Xu)(e) ? n ? b.Enabled : b.PrivateOnly : b.Disabled
            }

            function R(e, n) {
                return n === b.PrivateOnly || null !== (t = e.isPrivate) && void 0 !== t && t;
                var t
            }

            function w(e, n) {
                var t, r, i, o = null == n ? null : _.Z.getMessage(e.id, n),
                    a = null !== (i = null == o || null === (t = o.embeds) || void 0 === t || null === (r = t[0]) || void 0 === r ? void 0 : r.rawTitle) && void 0 !== i ? i : "";
                if ("" !== a) return a.length > 40 ? a.substring(0, 40) + "..." : a;
                for (var u, l = p.ZP.unparse(null !== (u = null == o ? void 0 : o.content) && void 0 !== u ? u : "", e.id, !0), s = (0,
                        I.Z)(l.split("\n")[0], !0).split(/(?:\s|[!@#$%^&*()_\-+={}[\]:";'<>?,./])+/), c = s[0], d = 1; d < s.length; d++) {
                    var f = c + " " + s[d];
                    if (f.length > 40) break;
                    c = f
                }
                c.length > 40 && (c = c.substring(0, 40) + "...");
                return c
            }

            function Z(e) {
                var n, t = e.parentChannel,
                    o = e.parentMessageId,
                    a = e.threadSettings,
                    c = e.privateThreadMode,
                    d = e.location,
                    f = e.onThreadCreated,
                    _ = e.useDefaultThreadName,
                    E = e.uploadHandler;
                return r.useCallback((n = M((function(e, n, r) {
                    var h, T, I, v, A, S, M, C;
                    return D(this, (function(b) {
                        switch (b.label) {
                            case 0:
                                h = null == o || !1;
                                T = R(a, c);
                                if ("" === (v = null !== (I = a.name) && void 0 !== I ? I : "") && _) {
                                    A = w(t, o);
                                    v = "" !== A ? A : N.Z.Messages.THREAD
                                }
                                S = (0, g.WD)(t);
                                M = y.Z.getChannel(o);
                                return [4, j(t, (function() {
                                    var e = null != o ? O.ANM.CHANNEL_MESSAGE_THREADS(t.id, o) : O.ANM.CHANNEL_THREADS(t.id);
                                    return i.ZP.post({
                                        url: e,
                                        body: {
                                            name: v,
                                            type: T ? O.d4z.PRIVATE_THREAD : t.type === O.d4z.GUILD_ANNOUNCEMENT ? O.d4z.ANNOUNCEMENT_THREAD : O.d4z.PUBLIC_THREAD,
                                            auto_archive_duration: S,
                                            location: d
                                        }
                                    })
                                }))];
                            case 1:
                                if ((C = b.sent()) !== M) {
                                    u.Z.clearDraft(t.id, m.d.ThreadSettings);
                                    u.Z.clearDraft(t.id, m.d.FirstThreadMessage);
                                    null == f || f(C);
                                    (h || e.length > 0 || null != n && n.length > 0 || null != r && r.length > 0) && function(e, n, t, r, i) {
                                        if (!(null != i && null != r && r.length > 0)) return null != t && t.length > 0 ? l.Z.sendStickers(e.id, t, n) : l.Z.sendMessage(e.id, p.ZP.parse(e, n));
                                        i(e, r, n, t)
                                    }(C, e, n, r, E)
                                }
                                s.Z.clearAll(t.id, m.d.FirstThreadMessage);
                                return [2]
                        }
                    }))
                })), function(e, t, r) {
                    return n.apply(this, arguments)
                }), [t, o, a, f, c, d, _, E])
            }

            function L(e, n, t, r, o) {
                return j(e, (function() {
                    return i.ZP.post({
                        url: O.ANM.CHANNEL_THREADS(e.id),
                        body: {
                            name: n,
                            type: t,
                            auto_archive_duration: r,
                            location: o
                        }
                    })
                }))
            }

            function U(e) {
                var n, t = e.parentChannel,
                    o = e.name,
                    a = e.appliedTags,
                    l = e.onThreadCreated,
                    c = e.upload;
                return r.useCallback((n = M((function(e, n, r) {
                    var p, y, _, E, T, I, v, N;
                    return D(this, (function(A) {
                        switch (A.label) {
                            case 0:
                                p = 0;
                                y = C((0, f.ZP)(e), 2), _ = y[0], E = y[1];
                                if (_) {
                                    e = E;
                                    p = (0, h.pj)(p, O.iLy.SUPPRESS_NOTIFICATIONS)
                                }
                                T = (0, g.WD)(t, null);
                                I = O.ANM.CHANNEL_THREADS(t.id) + "?use_nested_fields=true";
                                v = {
                                    name: o,
                                    auto_archive_duration: T,
                                    applied_tags: a,
                                    message: {
                                        content: e,
                                        sticker_ids: n,
                                        flags: 0 !== p ? p : void 0
                                    }
                                };
                                return [4, j(t, (function() {
                                    return null != r && r.length > 0 ? c(I, v, r) : i.ZP.post({
                                        url: I,
                                        body: v
                                    })
                                }))];
                            case 1:
                                N = A.sent();
                                u.Z.clearDraft(t.id, m.d.ThreadSettings);
                                u.Z.clearDraft(t.id, m.d.FirstThreadMessage);
                                s.Z.clearAll(t.id, m.d.FirstThreadMessage);
                                (0, d.Je)({
                                    guildId: t.guild_id,
                                    channelId: t.id,
                                    postId: N.id
                                });
                                null == l || l(N);
                                return [2, N]
                        }
                    }))
                })), function(e, t, r) {
                    return n.apply(this, arguments)
                }), [t, o, l, a, c])
            }

            function j(e, n) {
                return H.apply(this, arguments)
            }

            function H() {
                return (H = M((function(e, n) {
                    var t, r, i, u, l, s, d, p, f, m;
                    return D(this, (function(_) {
                        switch (_.label) {
                            case 0:
                                r = e.isForumLikeChannel();
                                _.label = 1;
                            case 1:
                                _.trys.push([1, 3, , 4]);
                                return [4, n()];
                            case 2:
                                if (null == (t = _.sent()).body) a.Z.show({
                                    title: N.Z.Messages.ERROR,
                                    body: N.Z.Messages.ERROR_OCCURRED_TRY_AGAIN
                                });
                                else {
                                    o.Z.dispatch({
                                        type: "SLOWMODE_RESET_COOLDOWN",
                                        slowmodeType: E.S.CreateThread,
                                        channelId: e.id
                                    });
                                    o.Z.dispatch({
                                        type: "THREAD_CREATE_LOCAL",
                                        channelId: t.body.id
                                    })
                                }
                                return [3, 4];
                            case 3:
                                i = _.sent();
                                if ((null === (u = i.body) || void 0 === u ? void 0 : u.code) === O.evJ.TOO_MANY_THREADS) a.Z.show({
                                    title: r ? N.Z.Messages.CANNOT_CREATE_FORUM_POST : N.Z.Messages.CANNOT_CREATE_THREAD,
                                    body: r ? N.Z.Messages.TOO_MANY_FORUM_POSTS_MESSAGE : N.Z.Messages.TOO_MANY_THREADS_MESSAGE
                                });
                                else if ((null === (l = i.body) || void 0 === l ? void 0 : l.code) === O.evJ.TOO_MANY_ANNOUNCEMENT_THREADS) a.Z.show({
                                    title: N.Z.Messages.CANNOT_CREATE_THREAD,
                                    body: N.Z.Messages.TOO_MANY_ANNOUNCEMENT_THREADS_MESSAGE
                                });
                                else if ((null === (s = i.body) || void 0 === s ? void 0 : s.code) === O.evJ.SLOWMODE_RATE_LIMITED)(m = null !== (f = i.body.retry_after) && void 0 !== f ? f : 0) > 0 && o.Z.dispatch({
                                    type: "SLOWMODE_SET_COOLDOWN",
                                    channelId: e.id,
                                    slowmodeType: E.S.CreateThread,
                                    cooldownMs: 1e3 * m
                                });
                                else if (429 === i.status) a.Z.show({
                                    title: r ? N.Z.Messages.CANNOT_CREATE_FORUM_POST : N.Z.Messages.CANNOT_CREATE_THREAD,
                                    body: N.Z.Messages.RATE_LIMITED
                                });
                                else {
                                    if (v.fZ.has(null === (d = i.body) || void 0 === d ? void 0 : d.code)) throw i;
                                    if (v.RN.has(null === (p = i.body) || void 0 === p ? void 0 : p.code)) return [2, new Promise((function(e, n) {
                                        null == i.body && n();
                                        c.Z.addConditionalChangeListener((function() {
                                            var t = c.Z.getAndDeleteMostRecentUserCreatedThreadId();
                                            if (null != t) {
                                                var r = y.Z.getChannel(t);
                                                o.Z.wait((function() {
                                                    null == r ? n() : e(r)
                                                }));
                                                return !1
                                            }
                                        }))
                                    }))];
                                    a.Z.show({
                                        title: N.Z.Messages.ERROR,
                                        body: N.Z.Messages.ERROR_OCCURRED_TRY_AGAIN
                                    })
                                }
                                return [3, 4];
                            case 4:
                                return [2, new Promise((function(e, n) {
                                    null == t.body && n();
                                    y.Z.addConditionalChangeListener((function() {
                                        var n = y.Z.getChannel(t.body.id);
                                        if (null != n) {
                                            o.Z.wait((function() {
                                                e(n)
                                            }));
                                            return !1
                                        }
                                    }))
                                }))]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        323483: (e, n, t) => {
            t.d(n, {
                Z: () => r
            });

            function r(e, n) {
                n && (e = e.trim());
                return e
            }
        }
    }
]);