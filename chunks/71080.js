r.d(n, {
    EQ: function () {
        return h;
    },
    IG: function () {
        return m;
    },
    aC: function () {
        return i;
    },
    kf: function () {
        return p;
    },
    m$: function () {
        return a;
    }
});
var i,
    a,
    s,
    o,
    l = r(230711),
    u = r(197062),
    c = r(727866),
    d = r(63063),
    f = r(981631),
    _ = r(388032);
!(function (e) {
    (e[(e.EMPTY_STATE = 0)] = 'EMPTY_STATE'), (e[(e.ADMINISTRATOR = 1)] = 'ADMINISTRATOR'), (e[(e.ROLE = 2)] = 'ROLE'), (e[(e.OWNER = 3)] = 'OWNER'), (e[(e.MEMBER = 4)] = 'MEMBER'), (e[(e.USER = 5)] = 'USER'), (e[(e.GUILD = 6)] = 'GUILD');
})(i || (i = {})),
    !(function (e) {
        (e[(e.ROLES = 0)] = 'ROLES'), (e[(e.MEMBERS = 1)] = 'MEMBERS'), (e[(e.USERS = 2)] = 'USERS'), (e[(e.GUILDS = 3)] = 'GUILDS');
    })(a || (a = {}));
let h = 20,
    p = 'channelPermissionSettingsAdvancedModeOn';
function m(e, n, r, i) {
    let a = e.type;
    return {
        [f.Plq.VIEW_CHANNEL.toString()]: {
            title: a === f.d4z.GUILD_CATEGORY ? _.intl.string(_.t.uV83ys) : _.intl.string(_.t['W/A4Qk']),
            description: (() => {
                if (n)
                    switch (a) {
                        case f.d4z.GUILD_CATEGORY:
                            return _.t['o/vBzs'];
                        case f.d4z.GUILD_VOICE:
                        case f.d4z.GUILD_STAGE_VOICE:
                            return _.t.ejL1Wl;
                        default:
                            return _.t['3jG0Bg'];
                    }
                return a === f.d4z.GUILD_CATEGORY ? _.t.SzosGh : _.t.M2iEy8;
            })(),
            flag: f.Plq.VIEW_CHANNEL
        },
        [f.Plq.MANAGE_CHANNELS.toString()]: {
            title: a === f.d4z.GUILD_CATEGORY ? _.intl.string(_.t['9qLtWl']) : _.intl.string(_.t.nAw15O),
            description: (() => {
                switch (a) {
                    case f.d4z.GUILD_CATEGORY:
                        return _.t.KJ2JnJ;
                    case f.d4z.GUILD_VOICE:
                        return _.t['+gl2nZ'];
                    case f.d4z.GUILD_STAGE_VOICE:
                        return _.t['SDX66+'];
                    default:
                        return _.t.ydL28v;
                }
            })(),
            flag: f.Plq.MANAGE_CHANNELS
        },
        [f.Plq.MANAGE_ROLES.toString()]: {
            title: _.intl.string(_.t.ICb6am),
            description: (() => {
                switch (a) {
                    case f.d4z.GUILD_CATEGORY:
                        return _.t.TyyCMD;
                    case f.d4z.GUILD_STAGE_VOICE:
                        return _.t.hcw4m5;
                    default:
                        return _.t.hOMXOj;
                }
            })(),
            flag: f.Plq.MANAGE_ROLES
        },
        [f.Plq.MANAGE_WEBHOOKS.toString()]: {
            title: _.intl.string(_.t['/ADKmJ']),
            description: a === f.d4z.GUILD_CATEGORY ? _.t['K5+ZZ2'] : _.t.CYBZr6,
            flag: f.Plq.MANAGE_WEBHOOKS
        },
        [f.Plq.CREATE_INSTANT_INVITE.toString()]: {
            title: _.intl.string(_.t.zJrgTE),
            description: (() => {
                switch (a) {
                    case f.d4z.GUILD_CATEGORY:
                        return _.t['3YFAAQ'];
                    case f.d4z.GUILD_VOICE:
                    case f.d4z.GUILD_STAGE_VOICE:
                        return _.t.lUCs1t;
                    default:
                        return _.t.q4g2aG;
                }
            })(),
            flag: f.Plq.CREATE_INSTANT_INVITE
        },
        [f.Plq.SEND_MESSAGES.toString()]: {
            title: f.TPd.GUILD_THREADS_ONLY.has(a) ? _.intl.string(_.t.nJwAHR) : r && a === f.d4z.GUILD_CATEGORY ? _.intl.string(_.t.S1VOwc) : _.intl.string(_.t.T32rkJ),
            description: (() => {
                switch (a) {
                    case f.d4z.GUILD_CATEGORY:
                        return r ? _.t.IjeLur : _.t.qLnFpa;
                    case f.d4z.GUILD_FORUM:
                        return (null == i ? void 0 : i.createPostsDisabled) && !e.isMediaChannel() ? u.Z.getForumChannelPermissionText() : _.t.LG9VAg;
                    case f.d4z.GUILD_MEDIA:
                        return _.t.LG9VAg;
                    case f.d4z.GUILD_ANNOUNCEMENT:
                        return _.intl.format(_.t.WFwfSE, { articleURL: d.Z.getArticleURL(f.BhN.ANNOUNCEMENT_CHANNELS) });
                    case f.d4z.GUILD_VOICE:
                        return c.Z.getTextInVoiceSendMessageChannelPermissionText(null == i ? void 0 : i.sendMessagesDisabled);
                    default:
                        return _.t.WQ6zpa;
                }
            })(),
            flag: f.Plq.SEND_MESSAGES
        },
        [f.Plq.EMBED_LINKS.toString()]: {
            title: _.intl.string(_.t['969dEB']),
            description: a === f.d4z.GUILD_CATEGORY ? _.t['7zlUa2'] : _.t.XFFhAw,
            flag: f.Plq.EMBED_LINKS
        },
        [f.Plq.ATTACH_FILES.toString()]: {
            title: _.intl.string(_.t['3AS4UF']),
            description: a === f.d4z.GUILD_CATEGORY ? _.t.XREf9v : _.t.WK9r7O,
            flag: f.Plq.ATTACH_FILES
        },
        [f.Plq.ADD_REACTIONS.toString()]: {
            title: _.intl.string(_.t.yEoJAg),
            description: (() => {
                switch (a) {
                    case f.d4z.GUILD_CATEGORY:
                        return _.t.pZT2Zm;
                    case f.d4z.GUILD_VOICE:
                        return _.t.xSSbIi;
                    default:
                        return _.t.PVjR1d;
                }
            })(),
            flag: f.Plq.ADD_REACTIONS
        },
        [f.Plq.USE_EXTERNAL_EMOJIS.toString()]: {
            title: _.intl.string(_.t['+bxf3N']),
            description: a === f.d4z.GUILD_CATEGORY ? _.t.mWAbKy : _.t.Qc5vOj,
            flag: f.Plq.USE_EXTERNAL_EMOJIS
        },
        [f.Plq.USE_EXTERNAL_STICKERS.toString()]: {
            title: _.intl.string(_.t.ERNhYW),
            description: a === f.d4z.GUILD_CATEGORY ? _.t['39whJy'] : _.t.VF4fZW,
            flag: f.Plq.USE_EXTERNAL_STICKERS
        },
        [f.Plq.MENTION_EVERYONE.toString()]: {
            title: a === f.d4z.GUILD_STAGE_VOICE ? _.intl.string(_.t.VDUAHB) : _.intl.string(_.t.Y78KGB),
            description: a === f.d4z.GUILD_CATEGORY ? _.t['HOhg/P'] : a === f.d4z.GUILD_STAGE_VOICE ? _.t.rZn1oK : _.t['6IUSdn'],
            flag: f.Plq.MENTION_EVERYONE
        },
        [f.Plq.MANAGE_MESSAGES.toString()]: {
            title: _.intl.string(_.t['6lU9xM']),
            description: (() => {
                switch (a) {
                    case f.d4z.GUILD_CATEGORY:
                        return _.t['5R9nYm'];
                    case f.d4z.GUILD_ANNOUNCEMENT:
                        return _.intl.format(_.t.XRxOo6, { articleURL: d.Z.getArticleURL(f.BhN.ANNOUNCEMENT_CHANNELS) });
                    default:
                        return _.t['SeA+Gx'];
                }
            })(),
            flag: f.Plq.MANAGE_MESSAGES
        },
        [f.Plq.READ_MESSAGE_HISTORY.toString()]: {
            title: f.TPd.GUILD_THREADS_ONLY.has(a) ? _.intl.string(_.t['0RQwtr']) : _.intl.string(_.t.l9ufaW),
            description: (() => {
                switch (a) {
                    case f.d4z.GUILD_CATEGORY:
                        return _.t['cJRv/v'];
                    case f.d4z.GUILD_VOICE:
                        return c.Z.getTextInVoiceReadMessageHistoryChannelPermissionText(null == i ? void 0 : i.readMessageHistoryDisabled);
                    case f.d4z.GUILD_FORUM:
                    case f.d4z.GUILD_MEDIA:
                        return _.t.RqCc7u;
                    default:
                        return _.t.cuMfHx;
                }
            })(),
            flag: f.Plq.READ_MESSAGE_HISTORY
        },
        [f.Plq.SEND_TTS_MESSAGES.toString()]: {
            title: _.intl.string(_.t.mMbwh4),
            description: a === f.d4z.GUILD_CATEGORY ? _.t.b7pc9f : _.t.CpakGx,
            flag: f.Plq.SEND_TTS_MESSAGES
        },
        [f.Plq.USE_APPLICATION_COMMANDS.toString()]: {
            title: _.intl.string(_.t.nkoPOj),
            description: a === f.d4z.GUILD_CATEGORY ? _.t['D+qW0N'] : _.t.ReG3gI,
            flag: f.Plq.USE_APPLICATION_COMMANDS
        },
        [f.Plq.SEND_VOICE_MESSAGES.toString()]: {
            title: _.intl.string(_.t.WlWSBQ),
            description: a === f.d4z.GUILD_CATEGORY ? _.t.gavGfn : _.t.BhEo9f,
            flag: f.Plq.SEND_VOICE_MESSAGES
        },
        [f.Plq.SEND_POLLS.toString()]: {
            title: _.intl.string(_.t.UMQ7W1),
            description: a === f.d4z.GUILD_CATEGORY ? _.t['18Ya7O'] : _.t.ckKKIC,
            flag: f.Plq.SEND_POLLS
        },
        [f.Plq.USE_CLYDE_AI.toString()]: {
            title: _.intl.string(_.t['8eeEZm']),
            description: a === f.d4z.GUILD_CATEGORY ? _.t.Tx5TjI : _.t.d664Fx,
            flag: f.Plq.USE_CLYDE_AI
        },
        [f.Plq.CONNECT.toString()]: {
            title: _.intl.string(_.t.S0W8Z2),
            description: (() => {
                if (n)
                    switch (a) {
                        case f.d4z.GUILD_CATEGORY:
                            return _.t.XcrieH;
                        case f.d4z.GUILD_STAGE_VOICE:
                            return _.t.SOFNhI;
                        case f.d4z.GUILD_TEXT:
                        case f.d4z.GUILD_FORUM:
                        case f.d4z.GUILD_MEDIA:
                            return _.t.LsS8xc;
                        default:
                            return _.t.j4AyOz;
                    }
                switch (a) {
                    case f.d4z.GUILD_CATEGORY:
                        return _.t.stA0Hh;
                    case f.d4z.GUILD_STAGE_VOICE:
                        return _.t['G9+QiY'];
                    case f.d4z.GUILD_TEXT:
                    case f.d4z.GUILD_FORUM:
                    case f.d4z.GUILD_MEDIA:
                        return _.t['QU/Rw8'];
                    default:
                        return _.t.HvG8ub;
                }
            })(),
            flag: f.Plq.CONNECT
        },
        [f.Plq.SPEAK.toString()]: {
            title: _.intl.string(_.t['8w1tIS']),
            description: (() => {
                switch (a) {
                    case f.d4z.GUILD_CATEGORY:
                        return _.t.iXhS6e;
                    case f.d4z.GUILD_STAGE_VOICE:
                        return _.t['a8n74+'];
                    case f.d4z.GUILD_TEXT:
                    case f.d4z.GUILD_FORUM:
                    case f.d4z.GUILD_MEDIA:
                        return _.t['+VXsJC'];
                    default:
                        return _.t['568E6e'];
                }
            })(),
            flag: f.Plq.SPEAK
        },
        [f.Plq.STREAM.toString()]: {
            title: _.intl.string(_.t.FlNoSU),
            description: (() => {
                switch (a) {
                    case f.d4z.GUILD_CATEGORY:
                        return _.t['ryG0/P'];
                    case f.d4z.GUILD_TEXT:
                    case f.d4z.GUILD_FORUM:
                    case f.d4z.GUILD_MEDIA:
                        return _.t.AuEQEB;
                    case f.d4z.GUILD_STAGE_VOICE:
                        return _.t.swJcNz;
                    default:
                        return _.t.RY8rIS;
                }
            })(),
            flag: f.Plq.STREAM
        },
        [f.Plq.USE_EMBEDDED_ACTIVITIES.toString()]: {
            title: _.intl.string(_.t.rLSGen),
            description: (() => {
                switch (a) {
                    case f.d4z.GUILD_CATEGORY:
                        return _.t.maNzCA;
                    case f.d4z.GUILD_FORUM:
                    case f.d4z.GUILD_MEDIA:
                        return _.t.RyEwlZ;
                    default:
                        return _.t.qinvMT;
                }
            })(),
            flag: f.Plq.USE_EMBEDDED_ACTIVITIES
        },
        [f.Plq.USE_EXTERNAL_APPS.toString()]: {
            title: _.intl.string(_.t['3TzAk5']),
            description: (() => {
                switch (a) {
                    case f.d4z.GUILD_CATEGORY:
                        return _.t.bgIY3N;
                    case f.d4z.GUILD_FORUM:
                    case f.d4z.GUILD_MEDIA:
                        return _.t.qPUPio;
                    default:
                        return _.t.czqMLi;
                }
            })(),
            flag: f.Plq.USE_EXTERNAL_APPS
        },
        [f.Plq.USE_SOUNDBOARD.toString()]: {
            title: _.intl.string(_.t.Bco7ND),
            description: (() => {
                switch (a) {
                    case f.d4z.GUILD_CATEGORY:
                        return _.intl.format(_.t['0kBp//'], { helpCenterArticle: d.Z.getArticleURL(f.BhN.SOUNDBOARD) });
                    case f.d4z.GUILD_TEXT:
                    case f.d4z.GUILD_FORUM:
                    case f.d4z.GUILD_MEDIA:
                        return _.intl.format(_.t['6eYqU1'], { helpCenterArticle: d.Z.getArticleURL(f.BhN.SOUNDBOARD) });
                    default:
                        return _.intl.format(_.t.GEi6Ym, { helpCenterArticle: d.Z.getArticleURL(f.BhN.SOUNDBOARD) });
                }
            })(),
            flag: f.Plq.USE_SOUNDBOARD
        },
        [f.Plq.USE_EXTERNAL_SOUNDS.toString()]: {
            title: _.intl.string(_.t.pwaVJy),
            description: _.t.qDpPtb,
            flag: f.Plq.USE_EXTERNAL_SOUNDS
        },
        [f.Plq.USE_VAD.toString()]: {
            title: _.intl.string(_.t['08zAV1']),
            description: (() => {
                switch (a) {
                    case f.d4z.GUILD_CATEGORY:
                        return _.t.fUYPl5;
                    case f.d4z.GUILD_STAGE_VOICE:
                        return _.t.BJKqsb;
                    case f.d4z.GUILD_TEXT:
                    case f.d4z.GUILD_FORUM:
                    case f.d4z.GUILD_MEDIA:
                        return _.t['3GJwsb'];
                    default:
                        return _.t.s2eihY;
                }
            })(),
            flag: f.Plq.USE_VAD
        },
        [f.Plq.PRIORITY_SPEAKER.toString()]: {
            title: _.intl.string(_.t.BVK71t),
            description: (() => {
                let e = {
                    keybind: _.intl.string(_.t.DkSwJy),
                    onClick: () => {
                        l.Z.open(f.oAB.KEYBINDS);
                    }
                };
                switch (a) {
                    case f.d4z.GUILD_CATEGORY:
                        return _.intl.format(_.t['8nIfDA'], e);
                    case f.d4z.GUILD_TEXT:
                    case f.d4z.GUILD_FORUM:
                    case f.d4z.GUILD_MEDIA:
                        return _.intl.format(_.t['0t6uSk'], e);
                    default:
                        return _.intl.format(_.t.UvB2KC, e);
                }
            })(),
            flag: f.Plq.PRIORITY_SPEAKER
        },
        [f.Plq.MUTE_MEMBERS.toString()]: {
            title: _.intl.string(_.t['8EI309']),
            description: (() => {
                switch (a) {
                    case f.d4z.GUILD_CATEGORY:
                        return _.t.bcuobG;
                    case f.d4z.GUILD_STAGE_VOICE:
                        return _.t.EbvdHx;
                    case f.d4z.GUILD_TEXT:
                    case f.d4z.GUILD_FORUM:
                    case f.d4z.GUILD_MEDIA:
                        return _.t.KYDG2N;
                    default:
                        return _.t.LW5C9P;
                }
            })(),
            flag: f.Plq.MUTE_MEMBERS
        },
        [f.Plq.DEAFEN_MEMBERS.toString()]: {
            title: _.intl.string(_.t['9L47Fh']),
            description: (() => {
                switch (a) {
                    case f.d4z.GUILD_CATEGORY:
                        return _.t.amZ5vr;
                    case f.d4z.GUILD_TEXT:
                    case f.d4z.GUILD_FORUM:
                    case f.d4z.GUILD_MEDIA:
                        return _.t['d+i1nZ'];
                    default:
                        return _.t.UAdIxs;
                }
            })(),
            flag: f.Plq.DEAFEN_MEMBERS
        },
        [f.Plq.MOVE_MEMBERS.toString()]: {
            title: _.intl.string(_.t.YtjJPT),
            description: (() => {
                switch (a) {
                    case f.d4z.GUILD_CATEGORY:
                        return _.t.XmoyRE;
                    case f.d4z.GUILD_STAGE_VOICE:
                        return _.t.bizKz8;
                    case f.d4z.GUILD_TEXT:
                    case f.d4z.GUILD_FORUM:
                    case f.d4z.GUILD_MEDIA:
                        return _.t.cbdQy8;
                    default:
                        return _.t.nSD1am;
                }
            })(),
            flag: f.Plq.MOVE_MEMBERS
        },
        [f.Plq.REQUEST_TO_SPEAK.toString()]: {
            title: _.intl.string(_.t['5kicT0']),
            description: a === f.d4z.GUILD_CATEGORY ? _.t.T1lMSk : _.t.uzlYFB,
            flag: f.Plq.REQUEST_TO_SPEAK
        },
        [f.Plq.MANAGE_THREADS.toString()]: {
            title: f.TPd.GUILD_THREADS_ONLY.has(a) ? _.intl.string(_.t.ossiZG) : r && a === f.d4z.GUILD_CATEGORY ? _.intl.string(_.t.QKe7Q0) : _.intl.string(_.t.kEqgr6),
            description: (() => {
                switch (a) {
                    case f.d4z.GUILD_CATEGORY:
                        return r ? _.t.S31soa : _.t.YDIQ8P;
                    case f.d4z.GUILD_FORUM:
                    case f.d4z.GUILD_MEDIA:
                        return _.t['XLi/jI'];
                    default:
                        return _.t.yvan0t;
                }
            })(),
            flag: f.Plq.MANAGE_THREADS
        },
        [f.Plq.CREATE_PUBLIC_THREADS.toString()]: {
            title: _.intl.string(_.t['25rKnZ']),
            description: a === f.d4z.GUILD_CATEGORY ? _.t['+M1yLi'] : _.t['5SDtGB'],
            flag: f.Plq.CREATE_PUBLIC_THREADS
        },
        [f.Plq.CREATE_PRIVATE_THREADS.toString()]: {
            title: _.intl.string(_.t.QwbTSU),
            description: a === f.d4z.GUILD_CATEGORY ? _.t['hBS/zs'] : _.t.Chg2zc,
            flag: f.Plq.CREATE_PRIVATE_THREADS
        },
        [f.Plq.SEND_MESSAGES_IN_THREADS.toString()]: {
            title: f.TPd.GUILD_THREADS_ONLY.has(a) ? _.intl.string(_.t.fqhqWl) : r && a === f.d4z.GUILD_CATEGORY ? _.intl.string(_.t['5QlVGx']) : _.intl.string(_.t.fTE74u),
            description: (() => {
                switch (a) {
                    case f.d4z.GUILD_CATEGORY:
                        return r ? _.t.DlIVcH : _.t.VvrChI;
                    case f.d4z.GUILD_FORUM:
                    case f.d4z.GUILD_MEDIA:
                        return _.t.XTnrPD;
                    default:
                        return _.t.xHO6MT;
                }
            })(),
            flag: f.Plq.SEND_MESSAGES_IN_THREADS
        },
        [f.Plq.MANAGE_EVENTS.toString()]: {
            title: _.intl.string(_.t.HIgA5e),
            description: a === f.d4z.GUILD_CATEGORY ? _.t.CP2sz8 : _.t['4pO/TU'],
            flag: f.Plq.MANAGE_EVENTS
        },
        [f.Plq.CREATE_EVENTS.toString()]: {
            title: _.intl.string(_.t.qyjZub),
            description: a === f.d4z.GUILD_CATEGORY ? _.t.XpibmJ : _.t.sPoBLS,
            flag: f.Plq.CREATE_EVENTS
        },
        [f.Plq.SET_VOICE_CHANNEL_STATUS.toString()]: {
            title: _.intl.string(_.t.VBwkUV),
            description: _.t.C6BzX1,
            flag: f.Plq.SET_VOICE_CHANNEL_STATUS
        }
    };
}
!(function (e) {
    (e.SETTINGS_PAGE = 'settings-page'), (e.MEMBERS_LIST = 'members-list'), (e.EMPTY_STATE = 'empty-state'), (e.CREATE_CHANNEL = 'create-channel');
})(s || (s = {})),
    !(function (e) {
        (e.BASIC = 'basic'), (e.ADVANCED = 'advanced');
    })(o || (o = {}));
