n.d(t, {
    Kh: function () {
        return w;
    },
    Tm: function () {
        return b;
    }
}),
    n(47120),
    n(411104);
var r = n(512722),
    i = n.n(r),
    a = n(913527),
    s = n.n(a),
    o = n(106351),
    l = n(969812),
    u = n(493683),
    c = n(749210),
    d = n(904245),
    _ = n(911969),
    E = n(386696),
    f = n(957730),
    h = n(968437),
    p = n(928477),
    I = n(665906),
    m = n(695346),
    T = n(592125),
    S = n(496675),
    g = n(594174),
    A = n(70956),
    N = n(51144),
    O = n(895924),
    R = n(689079),
    v = n(981631),
    C = n(590433),
    L = n(689938);
let D = n(227419).Z,
    y = (e, t) => {
        var n;
        return null === (n = e.find((e) => e.name === t)) || void 0 === n ? void 0 : n.value;
    },
    b = {
        [R.bi.BUILT_IN]: {
            id: R.bi.BUILT_IN,
            type: O.Qi.BUILT_IN,
            get name() {
                return L.Z.Messages.COMMAND_SECTION_BUILT_IN_NAME;
            }
        },
        [R.bi.FRECENCY]: {
            id: R.bi.FRECENCY,
            type: O.Qi.BUILT_IN,
            get name() {
                return L.Z.Messages.FREQUENTLY_USED;
            }
        }
    },
    M = [
        ...D,
        {
            id: '-1',
            untranslatedName: 'shrug',
            displayName: 'shrug',
            type: _.yU.CHAT,
            inputType: O.iw.BUILT_IN_TEXT,
            applicationId: R.bi.BUILT_IN,
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
                    type: _.jw.STRING,
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
                let n = null !== (t = y(e, 'message')) && void 0 !== t ? t : '';
                return { content: ''.concat(n, ' \xAF\\_(ツ)_/\xAF').trim() };
            }
        },
        {
            id: '-2',
            untranslatedName: 'tableflip',
            displayName: 'tableflip',
            type: _.yU.CHAT,
            inputType: O.iw.BUILT_IN_TEXT,
            applicationId: R.bi.BUILT_IN,
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
                    type: _.jw.STRING,
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
                let n = null !== (t = y(e, 'message')) && void 0 !== t ? t : '';
                return { content: ''.concat(n, ' (\u256F\xB0\u25A1\xB0)\u256F\uFE35 \u253B\u2501\u253B').trim() };
            }
        },
        {
            id: '-3',
            untranslatedName: 'unflip',
            displayName: 'unflip',
            type: _.yU.CHAT,
            inputType: O.iw.BUILT_IN_TEXT,
            applicationId: R.bi.BUILT_IN,
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
                    type: _.jw.STRING,
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
                let n = null !== (t = y(e, 'message')) && void 0 !== t ? t : '';
                return { content: ''.concat(n, ' \u252C\u2500\u252Cノ( º _ ºノ)').trim() };
            }
        },
        {
            id: '-4',
            untranslatedName: 'tts',
            displayName: 'tts',
            type: _.yU.CHAT,
            inputType: O.iw.BUILT_IN_TEXT,
            applicationId: R.bi.BUILT_IN,
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
                    type: _.jw.STRING,
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
                return !t.isPrivate() && m.OW.getSetting() && S.Z.can(v.Plq.SEND_TTS_MESSAGES, t);
            },
            execute: (e) => {
                var t;
                return {
                    content: null !== (t = y(e, 'message')) && void 0 !== t ? t : '',
                    tts: !0
                };
            }
        },
        {
            id: '-5',
            untranslatedName: 'me',
            displayName: 'me',
            type: _.yU.CHAT,
            inputType: O.iw.BUILT_IN_TEXT,
            applicationId: R.bi.BUILT_IN,
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
                    type: _.jw.STRING,
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
                let n = null !== (t = y(e, 'message')) && void 0 !== t ? t : '';
                return { content: '_'.concat(n, '_') };
            }
        },
        {
            id: '-6',
            untranslatedName: 'spoiler',
            displayName: 'spoiler',
            type: _.yU.CHAT,
            inputType: O.iw.BUILT_IN_TEXT,
            applicationId: R.bi.BUILT_IN,
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
                    type: _.jw.STRING,
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
                let n = null !== (t = y(e, 'message')) && void 0 !== t ? t : '';
                return { content: (0, v.XmY)(n).trim() };
            }
        },
        {
            id: '-7',
            untranslatedName: 'nick',
            displayName: 'nick',
            type: _.yU.CHAT,
            inputType: O.iw.BUILT_IN,
            applicationId: R.bi.BUILT_IN,
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
                    type: _.jw.STRING,
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
                return !t.isPrivate() && (S.Z.can(v.Plq.CHANGE_NICKNAME, t) || S.Z.can(v.Plq.MANAGE_NICKNAMES, t));
            },
            execute: (e, t) => {
                var n;
                let { guild: r, channel: i } = t;
                if (null == r) return;
                let a = null !== (n = y(e, 'new_nick')) && void 0 !== n ? n : '';
                l.Z.changeNickname(r.id, i.id, v.ME, a || '');
            }
        },
        {
            id: '-10',
            untranslatedName: 'thread',
            displayName: 'thread',
            type: _.yU.CHAT,
            inputType: O.iw.BUILT_IN,
            applicationId: R.bi.BUILT_IN,
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
                    type: _.jw.STRING,
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
                    type: _.jw.STRING,
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
                return (0, I.ki)(t);
            },
            execute: async (e, t) => {
                var n, r;
                let { channel: i } = t,
                    a = null !== (n = y(e, 'name')) && void 0 !== n ? n : '',
                    s = null !== (r = y(e, 'message')) && void 0 !== r ? r : '',
                    l = await (0, p.gK)(i, a, o.d.PUBLIC_THREAD, (0, h.WD)(i, null), 'Slash Command');
                d.Z.sendMessage(l.id, f.ZP.parse(l, s));
            }
        },
        {
            id: '-11',
            untranslatedName: 'kick',
            displayName: 'kick',
            type: _.yU.CHAT,
            inputType: O.iw.BUILT_IN,
            applicationId: R.bi.BUILT_IN,
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
                    type: _.jw.USER,
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
                    type: _.jw.STRING,
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
                return S.Z.can(v.Plq.KICK_MEMBERS, t);
            },
            execute: (e, t) => {
                var n;
                let { guild: r, channel: i } = t;
                if (null == r) return;
                let a = null !== (n = y(e, 'user')) && void 0 !== n ? n : '';
                if (!S.Z.canManageUser(v.Plq.KICK_MEMBERS, a, r)) {
                    d.Z.sendBotMessage(i.id, L.Z.Messages.COMMAND_KICK_UNABLE);
                    return;
                }
                (async () => {
                    var t;
                    let n = g.default.getUser(a);
                    if (null == n) throw Error();
                    await c.Z.kickUser(r.id, a, null !== (t = y(e, 'reason')) && void 0 !== t ? t : ''), d.Z.sendBotMessage(i.id, L.Z.Messages.COMMAND_KICK_CONFIRMATION.format({ user: N.ZP.getUserTag(n) }));
                })().catch(() => {
                    d.Z.sendBotMessage(i.id, L.Z.Messages.COMMAND_KICK_ERROR);
                });
            }
        },
        {
            id: '-12',
            untranslatedName: 'ban',
            displayName: 'ban',
            type: _.yU.CHAT,
            inputType: O.iw.BUILT_IN,
            applicationId: R.bi.BUILT_IN,
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
                    type: _.jw.USER,
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
                    type: _.jw.INTEGER,
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
                                value: A.Z.Seconds.HOUR
                            },
                            {
                                name: L.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_6HR,
                                displayName: L.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_6HR,
                                value: 6 * A.Z.Seconds.HOUR
                            },
                            {
                                name: L.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_12HR,
                                displayName: L.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_12HR,
                                value: 12 * A.Z.Seconds.HOUR
                            },
                            {
                                name: L.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_24HR,
                                displayName: L.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_24HR,
                                value: A.Z.Seconds.DAY
                            },
                            {
                                name: L.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_3D,
                                displayName: L.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_3D,
                                value: 3 * A.Z.Seconds.DAY
                            },
                            {
                                name: L.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_7D,
                                displayName: L.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_7D,
                                value: 7 * A.Z.Seconds.DAY
                            }
                        ];
                    }
                },
                {
                    name: 'reason',
                    displayName: 'reason',
                    type: _.jw.STRING,
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
                return S.Z.can(v.Plq.BAN_MEMBERS, t);
            },
            execute: (e, t) => {
                var n;
                let { guild: r, channel: i } = t;
                if (null == r) return;
                let a = null !== (n = y(e, 'user')) && void 0 !== n ? n : '';
                if (!S.Z.canManageUser(v.Plq.BAN_MEMBERS, a, r)) {
                    d.Z.sendBotMessage(i.id, L.Z.Messages.COMMAND_BAN_UNABLE);
                    return;
                }
                (async () => {
                    var t, n;
                    if ('' === a) throw Error();
                    let s = null !== (t = y(e, 'delete_messages')) && void 0 !== t ? t : 0,
                        o = null !== (n = y(e, 'reason')) && void 0 !== n ? n : '',
                        l = g.default.getUser(a);
                    await c.Z.banUser(r.id, a, s, o), d.Z.sendBotMessage(i.id, L.Z.Messages.COMMAND_BAN_CONFIRMATION.format({ user: null != l ? N.ZP.getUserTag(l) : a }));
                })().catch(() => {
                    d.Z.sendBotMessage(i.id, L.Z.Messages.COMMAND_BAN_ERROR);
                });
            }
        },
        {
            id: '-13',
            untranslatedName: 'timeout',
            displayName: 'timeout',
            type: _.yU.CHAT,
            inputType: O.iw.BUILT_IN,
            applicationId: R.bi.BUILT_IN,
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
                    type: _.jw.USER,
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
                    type: _.jw.STRING,
                    get description() {
                        return L.Z.Messages.COMMAND_TIMEOUT_DURATION_DESCRIPTION;
                    },
                    get displayDescription() {
                        return L.Z.Messages.COMMAND_TIMEOUT_DURATION_DESCRIPTION;
                    },
                    required: !0,
                    get choices() {
                        return (0, C.tr)().map((e) => ({
                            ...e,
                            name: e.label,
                            displayName: e.label
                        }));
                    }
                },
                {
                    name: 'reason',
                    displayName: 'reason',
                    type: _.jw.STRING,
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
                return S.Z.can(v.Plq.MODERATE_MEMBERS, t);
            },
            execute: (e, t) => {
                let { guild: n, channel: r } = t;
                if (null == n) return;
                let i = y(e, 'user');
                if (!(0, E.F)(n.id, i)) {
                    d.Z.sendBotMessage(r.id, L.Z.Messages.COMMAND_TIMEOUT_UNABLE);
                    return;
                }
                (async () => {
                    var t, a;
                    let o = null !== (t = y(e, 'duration')) && void 0 !== t ? t : '',
                        l = null !== (a = y(e, 'reason')) && void 0 !== a ? a : '',
                        u = g.default.getUser(i);
                    if (null == u) throw Error();
                    await c.Z.setCommunicationDisabledUntil({
                        guildId: n.id,
                        userId: i,
                        communicationDisabledUntilTimestamp: s()().add(o, 's').toISOString(),
                        duration: o,
                        reason: l
                    }),
                        d.Z.sendBotMessage(
                            r.id,
                            L.Z.Messages.COMMAND_TIMEOUT_CONFIRMATION.format({
                                user: N.ZP.getUserTag(u),
                                duration: o
                            })
                        );
                })().catch(() => {
                    d.Z.sendBotMessage(r.id, L.Z.Messages.COMMAND_TIMEOUT_ERROR);
                });
            }
        },
        {
            id: '-14',
            untranslatedName: 'msg',
            displayName: 'msg',
            type: _.yU.CHAT,
            inputType: O.iw.BUILT_IN,
            applicationId: R.bi.BUILT_IN,
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
                    type: _.jw.USER,
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
                    type: _.jw.STRING,
                    get description() {
                        return L.Z.Messages.COMMAND_MSG_MESSAGE_DESCRIPTION;
                    },
                    get displayDescription() {
                        return L.Z.Messages.COMMAND_MSG_MESSAGE_DESCRIPTION;
                    },
                    required: !0,
                    get maxLength() {
                        var P;
                        return (null === (P = g.default.getCurrentUser()) || void 0 === P ? void 0 : P.premiumType) ? v.en1 : v.J6R;
                    }
                }
            ],
            execute: (e, t) => {
                var n;
                let { channel: r } = t,
                    a = y(e, 'user'),
                    s = null !== (n = y(e, 'message')) && void 0 !== n ? n : '';
                (async () => {
                    await u.Z.openPrivateChannel(a).then((e) => {
                        let t = T.Z.getChannel(e);
                        i()(null != t, 'Newly created PrivateChannel is null'), d.Z.sendMessage(t.id, f.ZP.parse(t, s));
                    });
                })().catch(() => {
                    d.Z.sendBotMessage(r.id, L.Z.Messages.COMMAND_MSG_ERROR);
                });
            }
        }
    ],
    U = M.filter((e) => ['gif', 'tenor', 'tts', 'me', 'tableflip', 'unflip', 'shrug', 'spoiler', 'nick'].includes(e.untranslatedName)),
    w = (e, t, n) => {
        let r = t ? M : U;
        return (r = r.filter((t) => e.includes(t.type) && (!n || t.inputType === O.iw.BUILT_IN_TEXT || t.inputType === O.iw.BUILT_IN_INTEGRATION)));
    };
