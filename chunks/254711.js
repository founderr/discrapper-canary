n.d(t, {
    Kh: function () {
        return G;
    },
    Tm: function () {
        return P;
    }
});
var r = n(47120);
var i = n(411104);
var a = n(512722),
    o = n.n(a),
    s = n(913527),
    l = n.n(s),
    u = n(106351),
    c = n(969812),
    d = n(493683),
    _ = n(749210),
    E = n(904245),
    f = n(911969),
    h = n(386696),
    p = n(957730),
    m = n(968437),
    I = n(928477),
    T = n(665906),
    g = n(695346),
    S = n(592125),
    A = n(496675),
    v = n(594174),
    N = n(70956),
    O = n(51144),
    R = n(895924),
    C = n(689079),
    y = n(981631),
    b = n(590433),
    L = n(689938);
let D = n(227419).Z,
    M = (e, t) => {
        var n;
        return null === (n = e.find((e) => e.name === t)) || void 0 === n ? void 0 : n.value;
    },
    P = {
        [C.bi.BUILT_IN]: {
            id: C.bi.BUILT_IN,
            type: R.Qi.BUILT_IN,
            get name() {
                return L.Z.Messages.COMMAND_SECTION_BUILT_IN_NAME;
            }
        },
        [C.bi.FRECENCY]: {
            id: C.bi.FRECENCY,
            type: R.Qi.BUILT_IN,
            get name() {
                return L.Z.Messages.FREQUENTLY_USED;
            }
        }
    },
    U = [
        ...D,
        {
            id: '-1',
            untranslatedName: 'shrug',
            displayName: 'shrug',
            type: f.yU.CHAT,
            inputType: R.iw.BUILT_IN_TEXT,
            applicationId: C.bi.BUILT_IN,
            get untranslatedDescription() {
                return L.Z.Messages.COMMAND_SHRUG_DESCRIPTION;
            },
            get displayDescription() {
                return L.Z.Messages.COMMAND_SHRUG_DESCRIPTION;
            },
            options: [
                {
                    name: 'message',
                    displayName: 'message',
                    type: f.jw.STRING,
                    get description() {
                        return L.Z.Messages.COMMAND_SHRUG_MESSAGE_DESCRIPTION;
                    },
                    get displayDescription() {
                        return L.Z.Messages.COMMAND_SHRUG_MESSAGE_DESCRIPTION;
                    }
                }
            ],
            execute: (e) => {
                var t;
                let n = null !== (t = M(e, 'message')) && void 0 !== t ? t : '';
                return { content: ''.concat(n, ' \xAF\\_(ツ)_/\xAF').trim() };
            }
        },
        {
            id: '-2',
            untranslatedName: 'tableflip',
            displayName: 'tableflip',
            type: f.yU.CHAT,
            inputType: R.iw.BUILT_IN_TEXT,
            applicationId: C.bi.BUILT_IN,
            get untranslatedDescription() {
                return L.Z.Messages.COMMAND_TABLEFLIP_DESCRIPTION;
            },
            get displayDescription() {
                return L.Z.Messages.COMMAND_TABLEFLIP_DESCRIPTION;
            },
            options: [
                {
                    name: 'message',
                    displayName: 'message',
                    type: f.jw.STRING,
                    get description() {
                        return L.Z.Messages.COMMAND_TABLEFLIP_MESSAGE_DESCRIPTION;
                    },
                    get displayDescription() {
                        return L.Z.Messages.COMMAND_TABLEFLIP_MESSAGE_DESCRIPTION;
                    }
                }
            ],
            execute: (e) => {
                var t;
                let n = null !== (t = M(e, 'message')) && void 0 !== t ? t : '';
                return { content: ''.concat(n, ' (\u256F\xB0\u25A1\xB0)\u256F\uFE35 \u253B\u2501\u253B').trim() };
            }
        },
        {
            id: '-3',
            untranslatedName: 'unflip',
            displayName: 'unflip',
            type: f.yU.CHAT,
            inputType: R.iw.BUILT_IN_TEXT,
            applicationId: C.bi.BUILT_IN,
            get untranslatedDescription() {
                return L.Z.Messages.COMMAND_TABLEUNFLIP_DESCRIPTION;
            },
            get displayDescription() {
                return L.Z.Messages.COMMAND_TABLEUNFLIP_DESCRIPTION;
            },
            options: [
                {
                    name: 'message',
                    displayName: 'message',
                    type: f.jw.STRING,
                    get description() {
                        return L.Z.Messages.COMMAND_TABLEUNFLIP_MESSAGE_DESCRIPTION;
                    },
                    get displayDescription() {
                        return L.Z.Messages.COMMAND_TABLEUNFLIP_MESSAGE_DESCRIPTION;
                    }
                }
            ],
            execute: (e) => {
                var t;
                let n = null !== (t = M(e, 'message')) && void 0 !== t ? t : '';
                return { content: ''.concat(n, ' \u252C\u2500\u252Cノ( º _ ºノ)').trim() };
            }
        },
        {
            id: '-4',
            untranslatedName: 'tts',
            displayName: 'tts',
            type: f.yU.CHAT,
            inputType: R.iw.BUILT_IN_TEXT,
            applicationId: C.bi.BUILT_IN,
            get untranslatedDescription() {
                return L.Z.Messages.COMMAND_TTS_DESCRIPTION;
            },
            get displayDescription() {
                return L.Z.Messages.COMMAND_TTS_DESCRIPTION;
            },
            options: [
                {
                    name: 'message',
                    displayName: 'message',
                    type: f.jw.STRING,
                    get description() {
                        return L.Z.Messages.COMMAND_TTS_MESSAGE_DESCRIPTION;
                    },
                    get displayDescription() {
                        return L.Z.Messages.COMMAND_TTS_MESSAGE_DESCRIPTION;
                    },
                    required: !0
                }
            ],
            predicate: (e) => {
                let { channel: t } = e;
                return !t.isPrivate() && g.OW.getSetting() && A.Z.can(y.Plq.SEND_TTS_MESSAGES, t);
            },
            execute: (e) => {
                var t;
                return {
                    content: null !== (t = M(e, 'message')) && void 0 !== t ? t : '',
                    tts: !0
                };
            }
        },
        {
            id: '-5',
            untranslatedName: 'me',
            displayName: 'me',
            type: f.yU.CHAT,
            inputType: R.iw.BUILT_IN_TEXT,
            applicationId: C.bi.BUILT_IN,
            get untranslatedDescription() {
                return L.Z.Messages.COMMAND_ME_DESCRIPTION;
            },
            get displayDescription() {
                return L.Z.Messages.COMMAND_ME_DESCRIPTION;
            },
            options: [
                {
                    name: 'message',
                    displayName: 'message',
                    type: f.jw.STRING,
                    get description() {
                        return L.Z.Messages.COMMAND_ME_MESSAGE_DESCRIPTION;
                    },
                    get displayDescription() {
                        return L.Z.Messages.COMMAND_ME_MESSAGE_DESCRIPTION;
                    },
                    required: !0
                }
            ],
            execute: (e) => {
                var t;
                let n = null !== (t = M(e, 'message')) && void 0 !== t ? t : '';
                return { content: '_'.concat(n, '_') };
            }
        },
        {
            id: '-6',
            untranslatedName: 'spoiler',
            displayName: 'spoiler',
            type: f.yU.CHAT,
            inputType: R.iw.BUILT_IN_TEXT,
            applicationId: C.bi.BUILT_IN,
            get untranslatedDescription() {
                return L.Z.Messages.COMMAND_SPOILER_DESCRIPTION;
            },
            get displayDescription() {
                return L.Z.Messages.COMMAND_SPOILER_DESCRIPTION;
            },
            options: [
                {
                    name: 'message',
                    displayName: 'message',
                    type: f.jw.STRING,
                    get description() {
                        return L.Z.Messages.COMMAND_SPOILER_MESSAGE_DESCRIPTION;
                    },
                    get displayDescription() {
                        return L.Z.Messages.COMMAND_SPOILER_MESSAGE_DESCRIPTION;
                    },
                    required: !0
                }
            ],
            execute: (e) => {
                var t;
                let n = null !== (t = M(e, 'message')) && void 0 !== t ? t : '';
                return { content: (0, y.XmY)(n).trim() };
            }
        },
        {
            id: '-7',
            untranslatedName: 'nick',
            displayName: 'nick',
            type: f.yU.CHAT,
            inputType: R.iw.BUILT_IN,
            applicationId: C.bi.BUILT_IN,
            get untranslatedDescription() {
                return L.Z.Messages.COMMAND_NICK_DESCRIPTION;
            },
            get displayDescription() {
                return L.Z.Messages.COMMAND_NICK_DESCRIPTION;
            },
            options: [
                {
                    name: 'new_nick',
                    displayName: 'new_nick',
                    type: f.jw.STRING,
                    get description() {
                        return L.Z.Messages.COMMAND_NICK_NEWNICK_DESCRIPTION;
                    },
                    get displayDescription() {
                        return L.Z.Messages.COMMAND_NICK_NEWNICK_DESCRIPTION;
                    }
                }
            ],
            predicate: (e) => {
                let { channel: t } = e;
                return !t.isPrivate() && (A.Z.can(y.Plq.CHANGE_NICKNAME, t) || A.Z.can(y.Plq.MANAGE_NICKNAMES, t));
            },
            execute: (e, t) => {
                var n;
                let { guild: r, channel: i } = t;
                if (null == r) return;
                let a = null !== (n = M(e, 'new_nick')) && void 0 !== n ? n : '';
                c.Z.changeNickname(r.id, i.id, y.ME, a || '');
            }
        },
        {
            id: '-10',
            untranslatedName: 'thread',
            displayName: 'thread',
            type: f.yU.CHAT,
            inputType: R.iw.BUILT_IN,
            applicationId: C.bi.BUILT_IN,
            get untranslatedDescription() {
                return L.Z.Messages.COMMAND_THREAD_DESCRIPTION;
            },
            get displayDescription() {
                return L.Z.Messages.COMMAND_THREAD_DESCRIPTION;
            },
            options: [
                {
                    name: 'name',
                    displayName: 'name',
                    type: f.jw.STRING,
                    get description() {
                        return L.Z.Messages.COMMAND_THREAD_NAME_DESCRIPTION;
                    },
                    get displayDescription() {
                        return L.Z.Messages.COMMAND_THREAD_NAME_DESCRIPTION;
                    },
                    required: !0
                },
                {
                    name: 'message',
                    displayName: 'message',
                    type: f.jw.STRING,
                    get description() {
                        return L.Z.Messages.COMMAND_THREAD_MESSAGE_DESCRIPTION;
                    },
                    get displayDescription() {
                        return L.Z.Messages.COMMAND_THREAD_MESSAGE_DESCRIPTION;
                    },
                    required: !0
                }
            ],
            predicate: (e) => {
                let { channel: t } = e;
                return (0, T.ki)(t);
            },
            execute: async (e, t) => {
                var n, r;
                let { channel: i } = t,
                    a = null !== (n = M(e, 'name')) && void 0 !== n ? n : '',
                    o = null !== (r = M(e, 'message')) && void 0 !== r ? r : '',
                    s = await (0, I.gK)(i, a, u.d.PUBLIC_THREAD, (0, m.WD)(i, null), 'Slash Command');
                E.Z.sendMessage(s.id, p.ZP.parse(s, o));
            }
        },
        {
            id: '-11',
            untranslatedName: 'kick',
            displayName: 'kick',
            type: f.yU.CHAT,
            inputType: R.iw.BUILT_IN,
            applicationId: C.bi.BUILT_IN,
            get untranslatedDescription() {
                return L.Z.Messages.COMMAND_KICK_DESCRIPTION;
            },
            get displayDescription() {
                return L.Z.Messages.COMMAND_KICK_DESCRIPTION;
            },
            options: [
                {
                    name: 'user',
                    displayName: 'user',
                    type: f.jw.USER,
                    get description() {
                        return L.Z.Messages.COMMAND_KICK_USER_DESCRIPTION;
                    },
                    get displayDescription() {
                        return L.Z.Messages.COMMAND_KICK_USER_DESCRIPTION;
                    },
                    required: !0
                },
                {
                    name: 'reason',
                    displayName: 'reason',
                    type: f.jw.STRING,
                    get description() {
                        return L.Z.Messages.COMMAND_KICK_REASON_DESCRIPTION;
                    },
                    get displayDescription() {
                        return L.Z.Messages.COMMAND_KICK_REASON_DESCRIPTION;
                    },
                    required: !1
                }
            ],
            predicate: (e) => {
                let { guild: t } = e;
                return A.Z.can(y.Plq.KICK_MEMBERS, t);
            },
            execute: (e, t) => {
                var n;
                let { guild: r, channel: i } = t;
                if (null == r) return;
                let a = null !== (n = M(e, 'user')) && void 0 !== n ? n : '';
                if (!A.Z.canManageUser(y.Plq.KICK_MEMBERS, a, r)) {
                    E.Z.sendBotMessage(i.id, L.Z.Messages.COMMAND_KICK_UNABLE);
                    return;
                }
                (async () => {
                    var t;
                    let n = v.default.getUser(a);
                    if (null == n) throw Error();
                    await _.Z.kickUser(r.id, a, null !== (t = M(e, 'reason')) && void 0 !== t ? t : ''), E.Z.sendBotMessage(i.id, L.Z.Messages.COMMAND_KICK_CONFIRMATION.format({ user: O.ZP.getUserTag(n) }));
                })().catch(() => {
                    E.Z.sendBotMessage(i.id, L.Z.Messages.COMMAND_KICK_ERROR);
                });
            }
        },
        {
            id: '-12',
            untranslatedName: 'ban',
            displayName: 'ban',
            type: f.yU.CHAT,
            inputType: R.iw.BUILT_IN,
            applicationId: C.bi.BUILT_IN,
            get untranslatedDescription() {
                return L.Z.Messages.COMMAND_BAN_DESCRIPTION;
            },
            get displayDescription() {
                return L.Z.Messages.COMMAND_BAN_DESCRIPTION;
            },
            options: [
                {
                    name: 'user',
                    displayName: 'user',
                    type: f.jw.USER,
                    get description() {
                        return L.Z.Messages.COMMAND_BAN_USER_DESCRIPTION;
                    },
                    get displayDescription() {
                        return L.Z.Messages.COMMAND_BAN_USER_DESCRIPTION;
                    },
                    required: !0
                },
                {
                    name: 'delete_messages',
                    displayName: 'delete_messages',
                    type: f.jw.INTEGER,
                    get description() {
                        return L.Z.Messages.COMMAND_BAN_DELETE_MESSAGES_DESCRIPTION;
                    },
                    get displayDescription() {
                        return L.Z.Messages.COMMAND_BAN_DELETE_MESSAGES_DESCRIPTION;
                    },
                    required: !0,
                    get choices() {
                        return [
                            {
                                name: L.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_NONE,
                                displayName: L.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_NONE,
                                value: 0
                            },
                            {
                                name: L.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_1HR,
                                displayName: L.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_1HR,
                                value: N.Z.Seconds.HOUR
                            },
                            {
                                name: L.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_6HR,
                                displayName: L.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_6HR,
                                value: 6 * N.Z.Seconds.HOUR
                            },
                            {
                                name: L.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_12HR,
                                displayName: L.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_12HR,
                                value: 12 * N.Z.Seconds.HOUR
                            },
                            {
                                name: L.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_24HR,
                                displayName: L.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_24HR,
                                value: N.Z.Seconds.DAY
                            },
                            {
                                name: L.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_3D,
                                displayName: L.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_3D,
                                value: 3 * N.Z.Seconds.DAY
                            },
                            {
                                name: L.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_7D,
                                displayName: L.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_7D,
                                value: 7 * N.Z.Seconds.DAY
                            }
                        ];
                    }
                },
                {
                    name: 'reason',
                    displayName: 'reason',
                    type: f.jw.STRING,
                    get description() {
                        return L.Z.Messages.COMMAND_BAN_REASON_DESCRIPTION;
                    },
                    get displayDescription() {
                        return L.Z.Messages.COMMAND_BAN_REASON_DESCRIPTION;
                    },
                    required: !1
                }
            ],
            predicate: (e) => {
                let { guild: t } = e;
                return A.Z.can(y.Plq.BAN_MEMBERS, t);
            },
            execute: (e, t) => {
                var n;
                let { guild: r, channel: i } = t;
                if (null == r) return;
                let a = null !== (n = M(e, 'user')) && void 0 !== n ? n : '';
                if (!A.Z.canManageUser(y.Plq.BAN_MEMBERS, a, r)) {
                    E.Z.sendBotMessage(i.id, L.Z.Messages.COMMAND_BAN_UNABLE);
                    return;
                }
                (async () => {
                    var t, n;
                    if ('' === a) throw Error();
                    let o = null !== (t = M(e, 'delete_messages')) && void 0 !== t ? t : 0,
                        s = null !== (n = M(e, 'reason')) && void 0 !== n ? n : '',
                        l = v.default.getUser(a);
                    await _.Z.banUser(r.id, a, o, s), E.Z.sendBotMessage(i.id, L.Z.Messages.COMMAND_BAN_CONFIRMATION.format({ user: null != l ? O.ZP.getUserTag(l) : a }));
                })().catch(() => {
                    E.Z.sendBotMessage(i.id, L.Z.Messages.COMMAND_BAN_ERROR);
                });
            }
        },
        {
            id: '-13',
            untranslatedName: 'timeout',
            displayName: 'timeout',
            type: f.yU.CHAT,
            inputType: R.iw.BUILT_IN,
            applicationId: C.bi.BUILT_IN,
            get untranslatedDescription() {
                return L.Z.Messages.COMMAND_TIMEOUT_DESCRIPTION;
            },
            get displayDescription() {
                return L.Z.Messages.COMMAND_TIMEOUT_DESCRIPTION;
            },
            options: [
                {
                    name: 'user',
                    displayName: 'user',
                    type: f.jw.USER,
                    get description() {
                        return L.Z.Messages.COMMAND_TIMEOUT_USER_DESCRIPTION;
                    },
                    get displayDescription() {
                        return L.Z.Messages.COMMAND_TIMEOUT_USER_DESCRIPTION;
                    },
                    required: !0
                },
                {
                    name: 'duration',
                    displayName: 'duration',
                    type: f.jw.STRING,
                    get description() {
                        return L.Z.Messages.COMMAND_TIMEOUT_DURATION_DESCRIPTION;
                    },
                    get displayDescription() {
                        return L.Z.Messages.COMMAND_TIMEOUT_DURATION_DESCRIPTION;
                    },
                    required: !0,
                    get choices() {
                        return (0, b.tr)().map((e) => ({
                            ...e,
                            name: e.label,
                            displayName: e.label
                        }));
                    }
                },
                {
                    name: 'reason',
                    displayName: 'reason',
                    type: f.jw.STRING,
                    get description() {
                        return L.Z.Messages.COMMAND_TIMEOUT_REASON_DESCRIPTION;
                    },
                    get displayDescription() {
                        return L.Z.Messages.COMMAND_TIMEOUT_REASON_DESCRIPTION;
                    },
                    required: !1
                }
            ],
            predicate: (e) => {
                let { guild: t } = e;
                return A.Z.can(y.Plq.MODERATE_MEMBERS, t);
            },
            execute: (e, t) => {
                let { guild: n, channel: r } = t;
                if (null == n) return;
                let i = M(e, 'user');
                if (!(0, h.F)(n.id, i)) {
                    E.Z.sendBotMessage(r.id, L.Z.Messages.COMMAND_TIMEOUT_UNABLE);
                    return;
                }
                (async () => {
                    var t, a;
                    let o = null !== (t = M(e, 'duration')) && void 0 !== t ? t : '',
                        s = null !== (a = M(e, 'reason')) && void 0 !== a ? a : '',
                        u = v.default.getUser(i);
                    if (null == u) throw Error();
                    await _.Z.setCommunicationDisabledUntil({
                        guildId: n.id,
                        userId: i,
                        communicationDisabledUntilTimestamp: l()().add(o, 's').toISOString(),
                        duration: o,
                        reason: s
                    }),
                        E.Z.sendBotMessage(
                            r.id,
                            L.Z.Messages.COMMAND_TIMEOUT_CONFIRMATION.format({
                                user: O.ZP.getUserTag(u),
                                duration: o
                            })
                        );
                })().catch(() => {
                    E.Z.sendBotMessage(r.id, L.Z.Messages.COMMAND_TIMEOUT_ERROR);
                });
            }
        },
        {
            id: '-14',
            untranslatedName: 'msg',
            displayName: 'msg',
            type: f.yU.CHAT,
            inputType: R.iw.BUILT_IN,
            applicationId: C.bi.BUILT_IN,
            get untranslatedDescription() {
                return L.Z.Messages.COMMAND_MSG_DESCRIPTION;
            },
            get displayDescription() {
                return L.Z.Messages.COMMAND_MSG_DESCRIPTION;
            },
            options: [
                {
                    name: 'user',
                    displayName: 'user',
                    type: f.jw.USER,
                    get description() {
                        return L.Z.Messages.COMMAND_MSG_USER_DESCRIPTION;
                    },
                    get displayDescription() {
                        return L.Z.Messages.COMMAND_MSG_USER_DESCRIPTION;
                    },
                    required: !0
                },
                {
                    name: 'message',
                    displayName: 'message',
                    type: f.jw.STRING,
                    get description() {
                        return L.Z.Messages.COMMAND_MSG_MESSAGE_DESCRIPTION;
                    },
                    get displayDescription() {
                        return L.Z.Messages.COMMAND_MSG_MESSAGE_DESCRIPTION;
                    },
                    required: !0,
                    get maxLength() {
                        var w;
                        return (null === (w = v.default.getCurrentUser()) || void 0 === w ? void 0 : w.premiumType) ? y.en1 : y.J6R;
                    }
                }
            ],
            execute: (e, t) => {
                var n;
                let { channel: r } = t,
                    i = M(e, 'user'),
                    a = null !== (n = M(e, 'message')) && void 0 !== n ? n : '';
                (async () => {
                    await d.Z.openPrivateChannel(i).then((e) => {
                        let t = S.Z.getChannel(e);
                        o()(null != t, 'Newly created PrivateChannel is null'), E.Z.sendMessage(t.id, p.ZP.parse(t, a));
                    });
                })().catch(() => {
                    E.Z.sendBotMessage(r.id, L.Z.Messages.COMMAND_MSG_ERROR);
                });
            }
        }
    ],
    x = U.filter((e) => ['gif', 'tenor', 'tts', 'me', 'tableflip', 'unflip', 'shrug', 'spoiler', 'nick'].includes(e.untranslatedName)),
    G = (e, t, n) => {
        let r = t ? U : x;
        return (r = r.filter((t) => e.includes(t.type) && (!n || t.inputType === R.iw.BUILT_IN_TEXT || t.inputType === R.iw.BUILT_IN_INTEGRATION)));
    };
