n.d(t, {
    EQ: function () {
        return g;
    },
    IG: function () {
        return v;
    },
    aC: function () {
        return o;
    },
    kf: function () {
        return E;
    },
    m$: function () {
        return l;
    }
});
var r,
    i,
    a,
    s,
    o,
    l,
    u,
    c,
    d = n(230711),
    f = n(197062),
    _ = n(727866),
    h = n(63063),
    p = n(981631),
    m = n(388032);
((r = o || (o = {}))[(r.EMPTY_STATE = 0)] = 'EMPTY_STATE'), (r[(r.ADMINISTRATOR = 1)] = 'ADMINISTRATOR'), (r[(r.ROLE = 2)] = 'ROLE'), (r[(r.OWNER = 3)] = 'OWNER'), (r[(r.MEMBER = 4)] = 'MEMBER'), (r[(r.USER = 5)] = 'USER'), (r[(r.GUILD = 6)] = 'GUILD'), ((i = l || (l = {}))[(i.ROLES = 0)] = 'ROLES'), (i[(i.MEMBERS = 1)] = 'MEMBERS'), (i[(i.USERS = 2)] = 'USERS'), (i[(i.GUILDS = 3)] = 'GUILDS');
let g = 20,
    E = 'channelPermissionSettingsAdvancedModeOn';
function v(e, t, n, r) {
    let i = e.type;
    return {
        [p.Plq.VIEW_CHANNEL.toString()]: {
            title: i === p.d4z.GUILD_CATEGORY ? m.intl.string(m.t.uV83ys) : m.intl.string(m.t['W/A4Qk']),
            description: (() => {
                if (t)
                    switch (i) {
                        case p.d4z.GUILD_CATEGORY:
                            return m.t['o/vBzs'];
                        case p.d4z.GUILD_VOICE:
                        case p.d4z.GUILD_STAGE_VOICE:
                            return m.t.ejL1Wl;
                        default:
                            return m.t['3jG0Bg'];
                    }
                return i === p.d4z.GUILD_CATEGORY ? m.t.SzosGh : m.t.M2iEy8;
            })(),
            flag: p.Plq.VIEW_CHANNEL
        },
        [p.Plq.MANAGE_CHANNELS.toString()]: {
            title: i === p.d4z.GUILD_CATEGORY ? m.intl.string(m.t['9qLtWl']) : m.intl.string(m.t.nAw15O),
            description: (() => {
                switch (i) {
                    case p.d4z.GUILD_CATEGORY:
                        return m.t.KJ2JnJ;
                    case p.d4z.GUILD_VOICE:
                        return m.t['+gl2nZ'];
                    case p.d4z.GUILD_STAGE_VOICE:
                        return m.t['SDX66+'];
                    default:
                        return m.t.ydL28v;
                }
            })(),
            flag: p.Plq.MANAGE_CHANNELS
        },
        [p.Plq.MANAGE_ROLES.toString()]: {
            title: m.intl.string(m.t.ICb6am),
            description: (() => {
                switch (i) {
                    case p.d4z.GUILD_CATEGORY:
                        return m.t.TyyCMD;
                    case p.d4z.GUILD_STAGE_VOICE:
                        return m.t.hcw4m5;
                    default:
                        return m.t.hOMXOj;
                }
            })(),
            flag: p.Plq.MANAGE_ROLES
        },
        [p.Plq.MANAGE_WEBHOOKS.toString()]: {
            title: m.intl.string(m.t['/ADKmJ']),
            description: i === p.d4z.GUILD_CATEGORY ? m.t['K5+ZZ2'] : m.t.CYBZr6,
            flag: p.Plq.MANAGE_WEBHOOKS
        },
        [p.Plq.CREATE_INSTANT_INVITE.toString()]: {
            title: m.intl.string(m.t.zJrgTE),
            description: (() => {
                switch (i) {
                    case p.d4z.GUILD_CATEGORY:
                        return m.t['3YFAAQ'];
                    case p.d4z.GUILD_VOICE:
                    case p.d4z.GUILD_STAGE_VOICE:
                        return m.t.lUCs1t;
                    default:
                        return m.t.q4g2aG;
                }
            })(),
            flag: p.Plq.CREATE_INSTANT_INVITE
        },
        [p.Plq.SEND_MESSAGES.toString()]: {
            title: p.TPd.GUILD_THREADS_ONLY.has(i) ? m.intl.string(m.t.nJwAHR) : n && i === p.d4z.GUILD_CATEGORY ? m.intl.string(m.t.S1VOwc) : m.intl.string(m.t.T32rkJ),
            description: (() => {
                switch (i) {
                    case p.d4z.GUILD_CATEGORY:
                        return n ? m.t.IjeLur : m.t.qLnFpa;
                    case p.d4z.GUILD_FORUM:
                        return (null == r ? void 0 : r.createPostsDisabled) && !e.isMediaChannel() ? f.Z.getForumChannelPermissionText() : m.t.LG9VAg;
                    case p.d4z.GUILD_MEDIA:
                        return m.t.LG9VAg;
                    case p.d4z.GUILD_ANNOUNCEMENT:
                        return m.intl.format(m.t.WFwfSE, { articleURL: h.Z.getArticleURL(p.BhN.ANNOUNCEMENT_CHANNELS) });
                    case p.d4z.GUILD_VOICE:
                        return _.Z.getTextInVoiceSendMessageChannelPermissionText(null == r ? void 0 : r.sendMessagesDisabled);
                    default:
                        return m.t.WQ6zpa;
                }
            })(),
            flag: p.Plq.SEND_MESSAGES
        },
        [p.Plq.EMBED_LINKS.toString()]: {
            title: m.intl.string(m.t['969dEB']),
            description: i === p.d4z.GUILD_CATEGORY ? m.t['7zlUa2'] : m.t.XFFhAw,
            flag: p.Plq.EMBED_LINKS
        },
        [p.Plq.ATTACH_FILES.toString()]: {
            title: m.intl.string(m.t['3AS4UF']),
            description: i === p.d4z.GUILD_CATEGORY ? m.t.XREf9v : m.t.WK9r7O,
            flag: p.Plq.ATTACH_FILES
        },
        [p.Plq.ADD_REACTIONS.toString()]: {
            title: m.intl.string(m.t.yEoJAg),
            description: (() => {
                switch (i) {
                    case p.d4z.GUILD_CATEGORY:
                        return m.t.pZT2Zm;
                    case p.d4z.GUILD_VOICE:
                        return m.t.xSSbIi;
                    default:
                        return m.t.PVjR1d;
                }
            })(),
            flag: p.Plq.ADD_REACTIONS
        },
        [p.Plq.USE_EXTERNAL_EMOJIS.toString()]: {
            title: m.intl.string(m.t['+bxf3N']),
            description: i === p.d4z.GUILD_CATEGORY ? m.t.mWAbKy : m.t.Qc5vOj,
            flag: p.Plq.USE_EXTERNAL_EMOJIS
        },
        [p.Plq.USE_EXTERNAL_STICKERS.toString()]: {
            title: m.intl.string(m.t.ERNhYW),
            description: i === p.d4z.GUILD_CATEGORY ? m.t['39whJy'] : m.t.VF4fZW,
            flag: p.Plq.USE_EXTERNAL_STICKERS
        },
        [p.Plq.MENTION_EVERYONE.toString()]: {
            title: i === p.d4z.GUILD_STAGE_VOICE ? m.intl.string(m.t.VDUAHB) : m.intl.string(m.t.Y78KGB),
            description: i === p.d4z.GUILD_CATEGORY ? m.t['HOhg/P'] : i === p.d4z.GUILD_STAGE_VOICE ? m.t.rZn1oK : m.t['6IUSdn'],
            flag: p.Plq.MENTION_EVERYONE
        },
        [p.Plq.MANAGE_MESSAGES.toString()]: {
            title: m.intl.string(m.t['6lU9xM']),
            description: (() => {
                switch (i) {
                    case p.d4z.GUILD_CATEGORY:
                        return m.t['5R9nYm'];
                    case p.d4z.GUILD_ANNOUNCEMENT:
                        return m.intl.format(m.t.XRxOo6, { articleURL: h.Z.getArticleURL(p.BhN.ANNOUNCEMENT_CHANNELS) });
                    default:
                        return m.t['SeA+Gx'];
                }
            })(),
            flag: p.Plq.MANAGE_MESSAGES
        },
        [p.Plq.READ_MESSAGE_HISTORY.toString()]: {
            title: p.TPd.GUILD_THREADS_ONLY.has(i) ? m.intl.string(m.t['0RQwtr']) : m.intl.string(m.t.l9ufaW),
            description: (() => {
                switch (i) {
                    case p.d4z.GUILD_CATEGORY:
                        return m.t['cJRv/v'];
                    case p.d4z.GUILD_VOICE:
                        return _.Z.getTextInVoiceReadMessageHistoryChannelPermissionText(null == r ? void 0 : r.readMessageHistoryDisabled);
                    case p.d4z.GUILD_FORUM:
                    case p.d4z.GUILD_MEDIA:
                        return m.t.RqCc7u;
                    default:
                        return m.t.cuMfHx;
                }
            })(),
            flag: p.Plq.READ_MESSAGE_HISTORY
        },
        [p.Plq.SEND_TTS_MESSAGES.toString()]: {
            title: m.intl.string(m.t.mMbwh4),
            description: i === p.d4z.GUILD_CATEGORY ? m.t.b7pc9f : m.t.CpakGx,
            flag: p.Plq.SEND_TTS_MESSAGES
        },
        [p.Plq.USE_APPLICATION_COMMANDS.toString()]: {
            title: m.intl.string(m.t.nkoPOj),
            description: i === p.d4z.GUILD_CATEGORY ? m.t['D+qW0N'] : m.t.ReG3gI,
            flag: p.Plq.USE_APPLICATION_COMMANDS
        },
        [p.Plq.SEND_VOICE_MESSAGES.toString()]: {
            title: m.intl.string(m.t.WlWSBQ),
            description: i === p.d4z.GUILD_CATEGORY ? m.t.gavGfn : m.t.BhEo9f,
            flag: p.Plq.SEND_VOICE_MESSAGES
        },
        [p.Plq.SEND_POLLS.toString()]: {
            title: m.intl.string(m.t.UMQ7W1),
            description: i === p.d4z.GUILD_CATEGORY ? m.t['18Ya7O'] : m.t.ckKKIC,
            flag: p.Plq.SEND_POLLS
        },
        [p.Plq.USE_CLYDE_AI.toString()]: {
            title: m.intl.string(m.t['8eeEZm']),
            description: i === p.d4z.GUILD_CATEGORY ? m.t.Tx5TjI : m.t.d664Fx,
            flag: p.Plq.USE_CLYDE_AI
        },
        [p.Plq.CONNECT.toString()]: {
            title: m.intl.string(m.t.S0W8Z2),
            description: (() => {
                if (t)
                    switch (i) {
                        case p.d4z.GUILD_CATEGORY:
                            return m.t.XcrieH;
                        case p.d4z.GUILD_STAGE_VOICE:
                            return m.t.SOFNhI;
                        case p.d4z.GUILD_TEXT:
                        case p.d4z.GUILD_FORUM:
                        case p.d4z.GUILD_MEDIA:
                            return m.t.LsS8xc;
                        default:
                            return m.t.j4AyOz;
                    }
                switch (i) {
                    case p.d4z.GUILD_CATEGORY:
                        return m.t.stA0Hh;
                    case p.d4z.GUILD_STAGE_VOICE:
                        return m.t['G9+QiY'];
                    case p.d4z.GUILD_TEXT:
                    case p.d4z.GUILD_FORUM:
                    case p.d4z.GUILD_MEDIA:
                        return m.t['QU/Rw8'];
                    default:
                        return m.t.HvG8ub;
                }
            })(),
            flag: p.Plq.CONNECT
        },
        [p.Plq.SPEAK.toString()]: {
            title: m.intl.string(m.t['8w1tIS']),
            description: (() => {
                switch (i) {
                    case p.d4z.GUILD_CATEGORY:
                        return m.t.iXhS6e;
                    case p.d4z.GUILD_STAGE_VOICE:
                        return m.t['a8n74+'];
                    case p.d4z.GUILD_TEXT:
                    case p.d4z.GUILD_FORUM:
                    case p.d4z.GUILD_MEDIA:
                        return m.t['+VXsJC'];
                    default:
                        return m.t['568E6e'];
                }
            })(),
            flag: p.Plq.SPEAK
        },
        [p.Plq.STREAM.toString()]: {
            title: m.intl.string(m.t.FlNoSU),
            description: (() => {
                switch (i) {
                    case p.d4z.GUILD_CATEGORY:
                        return m.t['ryG0/P'];
                    case p.d4z.GUILD_TEXT:
                    case p.d4z.GUILD_FORUM:
                    case p.d4z.GUILD_MEDIA:
                        return m.t.AuEQEB;
                    case p.d4z.GUILD_STAGE_VOICE:
                        return m.t.swJcNz;
                    default:
                        return m.t.RY8rIS;
                }
            })(),
            flag: p.Plq.STREAM
        },
        [p.Plq.USE_EMBEDDED_ACTIVITIES.toString()]: {
            title: m.intl.string(m.t.rLSGen),
            description: (() => {
                switch (i) {
                    case p.d4z.GUILD_CATEGORY:
                        return m.t.maNzCA;
                    case p.d4z.GUILD_FORUM:
                    case p.d4z.GUILD_MEDIA:
                        return m.t.RyEwlZ;
                    default:
                        return m.t.qinvMT;
                }
            })(),
            flag: p.Plq.USE_EMBEDDED_ACTIVITIES
        },
        [p.Plq.USE_EXTERNAL_APPS.toString()]: {
            title: m.intl.string(m.t['3TzAk5']),
            description: (() => {
                switch (i) {
                    case p.d4z.GUILD_CATEGORY:
                        return m.t.bgIY3N;
                    case p.d4z.GUILD_FORUM:
                    case p.d4z.GUILD_MEDIA:
                        return m.t.qPUPio;
                    default:
                        return m.t.czqMLi;
                }
            })(),
            flag: p.Plq.USE_EXTERNAL_APPS
        },
        [p.Plq.USE_SOUNDBOARD.toString()]: {
            title: m.intl.string(m.t.Bco7ND),
            description: (() => {
                switch (i) {
                    case p.d4z.GUILD_CATEGORY:
                        return m.intl.format(m.t['0kBp//'], { helpCenterArticle: h.Z.getArticleURL(p.BhN.SOUNDBOARD) });
                    case p.d4z.GUILD_TEXT:
                    case p.d4z.GUILD_FORUM:
                    case p.d4z.GUILD_MEDIA:
                        return m.intl.format(m.t['6eYqU1'], { helpCenterArticle: h.Z.getArticleURL(p.BhN.SOUNDBOARD) });
                    default:
                        return m.intl.format(m.t.GEi6Ym, { helpCenterArticle: h.Z.getArticleURL(p.BhN.SOUNDBOARD) });
                }
            })(),
            flag: p.Plq.USE_SOUNDBOARD
        },
        [p.Plq.USE_EXTERNAL_SOUNDS.toString()]: {
            title: m.intl.string(m.t.pwaVJy),
            description: m.t.qDpPtb,
            flag: p.Plq.USE_EXTERNAL_SOUNDS
        },
        [p.Plq.USE_VAD.toString()]: {
            title: m.intl.string(m.t['08zAV1']),
            description: (() => {
                switch (i) {
                    case p.d4z.GUILD_CATEGORY:
                        return m.t.fUYPl5;
                    case p.d4z.GUILD_STAGE_VOICE:
                        return m.t.BJKqsb;
                    case p.d4z.GUILD_TEXT:
                    case p.d4z.GUILD_FORUM:
                    case p.d4z.GUILD_MEDIA:
                        return m.t['3GJwsb'];
                    default:
                        return m.t.s2eihY;
                }
            })(),
            flag: p.Plq.USE_VAD
        },
        [p.Plq.PRIORITY_SPEAKER.toString()]: {
            title: m.intl.string(m.t.BVK71t),
            description: (() => {
                let e = {
                    keybind: m.intl.string(m.t.DkSwJy),
                    onClick: () => {
                        d.Z.open(p.oAB.KEYBINDS);
                    }
                };
                switch (i) {
                    case p.d4z.GUILD_CATEGORY:
                        return m.intl.format(m.t['8nIfDA'], e);
                    case p.d4z.GUILD_TEXT:
                    case p.d4z.GUILD_FORUM:
                    case p.d4z.GUILD_MEDIA:
                        return m.intl.format(m.t['0t6uSk'], e);
                    default:
                        return m.intl.format(m.t.UvB2KC, e);
                }
            })(),
            flag: p.Plq.PRIORITY_SPEAKER
        },
        [p.Plq.MUTE_MEMBERS.toString()]: {
            title: m.intl.string(m.t['8EI309']),
            description: (() => {
                switch (i) {
                    case p.d4z.GUILD_CATEGORY:
                        return m.t.bcuobG;
                    case p.d4z.GUILD_STAGE_VOICE:
                        return m.t.EbvdHx;
                    case p.d4z.GUILD_TEXT:
                    case p.d4z.GUILD_FORUM:
                    case p.d4z.GUILD_MEDIA:
                        return m.t.KYDG2N;
                    default:
                        return m.t.LW5C9P;
                }
            })(),
            flag: p.Plq.MUTE_MEMBERS
        },
        [p.Plq.DEAFEN_MEMBERS.toString()]: {
            title: m.intl.string(m.t['9L47Fh']),
            description: (() => {
                switch (i) {
                    case p.d4z.GUILD_CATEGORY:
                        return m.t.amZ5vr;
                    case p.d4z.GUILD_TEXT:
                    case p.d4z.GUILD_FORUM:
                    case p.d4z.GUILD_MEDIA:
                        return m.t['d+i1nZ'];
                    default:
                        return m.t.UAdIxs;
                }
            })(),
            flag: p.Plq.DEAFEN_MEMBERS
        },
        [p.Plq.MOVE_MEMBERS.toString()]: {
            title: m.intl.string(m.t.YtjJPT),
            description: (() => {
                switch (i) {
                    case p.d4z.GUILD_CATEGORY:
                        return m.t.XmoyRE;
                    case p.d4z.GUILD_STAGE_VOICE:
                        return m.t.bizKz8;
                    case p.d4z.GUILD_TEXT:
                    case p.d4z.GUILD_FORUM:
                    case p.d4z.GUILD_MEDIA:
                        return m.t.cbdQy8;
                    default:
                        return m.t.nSD1am;
                }
            })(),
            flag: p.Plq.MOVE_MEMBERS
        },
        [p.Plq.REQUEST_TO_SPEAK.toString()]: {
            title: m.intl.string(m.t['5kicT0']),
            description: i === p.d4z.GUILD_CATEGORY ? m.t.T1lMSk : m.t.uzlYFB,
            flag: p.Plq.REQUEST_TO_SPEAK
        },
        [p.Plq.MANAGE_THREADS.toString()]: {
            title: p.TPd.GUILD_THREADS_ONLY.has(i) ? m.intl.string(m.t.ossiZG) : n && i === p.d4z.GUILD_CATEGORY ? m.intl.string(m.t.QKe7Q0) : m.intl.string(m.t.kEqgr6),
            description: (() => {
                switch (i) {
                    case p.d4z.GUILD_CATEGORY:
                        return n ? m.t.S31soa : m.t.YDIQ8P;
                    case p.d4z.GUILD_FORUM:
                    case p.d4z.GUILD_MEDIA:
                        return m.t['XLi/jI'];
                    default:
                        return m.t.yvan0t;
                }
            })(),
            flag: p.Plq.MANAGE_THREADS
        },
        [p.Plq.CREATE_PUBLIC_THREADS.toString()]: {
            title: m.intl.string(m.t['25rKnZ']),
            description: i === p.d4z.GUILD_CATEGORY ? m.t['+M1yLi'] : m.t['5SDtGB'],
            flag: p.Plq.CREATE_PUBLIC_THREADS
        },
        [p.Plq.CREATE_PRIVATE_THREADS.toString()]: {
            title: m.intl.string(m.t.QwbTSU),
            description: i === p.d4z.GUILD_CATEGORY ? m.t['hBS/zs'] : m.t.Chg2zc,
            flag: p.Plq.CREATE_PRIVATE_THREADS
        },
        [p.Plq.SEND_MESSAGES_IN_THREADS.toString()]: {
            title: p.TPd.GUILD_THREADS_ONLY.has(i) ? m.intl.string(m.t.fqhqWl) : n && i === p.d4z.GUILD_CATEGORY ? m.intl.string(m.t['5QlVGx']) : m.intl.string(m.t.fTE74u),
            description: (() => {
                switch (i) {
                    case p.d4z.GUILD_CATEGORY:
                        return n ? m.t.DlIVcH : m.t.VvrChI;
                    case p.d4z.GUILD_FORUM:
                    case p.d4z.GUILD_MEDIA:
                        return m.t.XTnrPD;
                    default:
                        return m.t.xHO6MT;
                }
            })(),
            flag: p.Plq.SEND_MESSAGES_IN_THREADS
        },
        [p.Plq.MANAGE_EVENTS.toString()]: {
            title: m.intl.string(m.t.HIgA5e),
            description: i === p.d4z.GUILD_CATEGORY ? m.t.CP2sz8 : m.t['4pO/TU'],
            flag: p.Plq.MANAGE_EVENTS
        },
        [p.Plq.CREATE_EVENTS.toString()]: {
            title: m.intl.string(m.t.qyjZub),
            description: i === p.d4z.GUILD_CATEGORY ? m.t.XpibmJ : m.t.sPoBLS,
            flag: p.Plq.CREATE_EVENTS
        },
        [p.Plq.SET_VOICE_CHANNEL_STATUS.toString()]: {
            title: m.intl.string(m.t.VBwkUV),
            description: m.t.C6BzX1,
            flag: p.Plq.SET_VOICE_CHANNEL_STATUS
        }
    };
}
((a = u || (u = {})).SETTINGS_PAGE = 'settings-page'), (a.MEMBERS_LIST = 'members-list'), (a.EMPTY_STATE = 'empty-state'), (a.CREATE_CHANNEL = 'create-channel'), ((s = c || (c = {})).BASIC = 'basic'), (s.ADVANCED = 'advanced');
