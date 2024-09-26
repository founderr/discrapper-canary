var r = n(47120);
var i = n(724458);
var a = n(653041);
var o = n(390547);
var s = n(392711),
    l = n.n(s),
    u = n(302454),
    c = n.n(u),
    d = n(933557),
    _ = n(339085),
    E = n(633302),
    f = n(428595),
    h = n(594199),
    p = n(467798),
    m = n(601070),
    I = n(695346),
    T = n(592125),
    g = n(984933),
    S = n(271383),
    A = n(430824),
    v = n(496675),
    N = n(699516),
    O = n(246946),
    R = n(594174),
    C = n(483360),
    y = n(176354),
    L = n(51144),
    b = n(981631),
    D = n(185923),
    M = n(689938);
function P(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
    if (t[0] !== e) return null;
    let i = t.substr(e.length);
    return n
        .sortBy((e) => {
            let { text: t } = e;
            return -t.length;
        })
        .filter((e) => {
            let { text: n } = e;
            return 1 === t.toLowerCase().indexOf(n.toLowerCase());
        })
        .sortBy((e) => {
            let { text: t } = e;
            return t === i ? 0 : 1;
        })
        .map((t) => {
            let { id: n, text: i } = t;
            return [e + i, n, r];
        })
        .first();
}
function U(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
    if (t[0] !== e) return null;
    if ('"' !== t[1]) return P(e, t, n, r);
    let i = 2;
    for (; i < t.length; i++) {
        if ('\\' === t[i]) {
            i++;
            continue;
        }
        if ('"' === t[i]) break;
    }
    let a = t.substring(0, i + 1),
        o = (0, d.mA)(t.substring(2, i));
    return n
        .sortBy((e) => {
            let { text: t } = e;
            return -t.length;
        })
        .filter((e) => {
            let { text: t } = e;
            return o === t;
        })
        .map((e) => {
            let { id: t } = e;
            return [a, t, r];
        })
        .first();
}
function w(e) {
    return {
        order: e.order,
        match: e.match,
        parse: (t) => ({
            type: e.type,
            content: t[0]
        })
    };
}
function x(e) {
    return {
        match: c().anyScopeRegex(e),
        parse: (e) => ({
            type: 'text',
            content: e[0]
        })
    };
}
let G = f.Z.RULES,
    k = h.ZP,
    B = /^<@!?(\d+)>/,
    F = /^<@&(\d+)>/,
    Z = /^<#(\d+)>/,
    V = /^<a?:(\w+):(\d+)>/,
    H = /^<sound:(\d+)>/,
    Y = /(@everyone|@here|@Clyde)\b/,
    j = {
        link: w(c().defaultRules.link),
        autolink: w(c().defaultRules.autolink),
        url: w(c().defaultRules.url),
        inlineCode: w(G.inlineCode),
        codeBlock: w(G.codeBlock),
        rawUserMention: x(B),
        rawRoleMention: x(F),
        rawChannelMention: x(Z),
        rawEmoji: x(V),
        mention: {
            match(e, t, n) {
                let r = n.split(' ').pop() + e;
                if (/^[^ ]+@[^ ]+\.[^ .]+/.test(r)) return null;
                let i = P('@', e, t.users, 'mention');
                if (i || (i = P('@', e, t.mentionableRoles, 'roleMention'))) return i;
                if (
                    !(i = P(
                        '@',
                        e,
                        t.users.map((e) => ({
                            ...e,
                            text: e.text.split('#')[0]
                        })),
                        'mention'
                    ))
                )
                    return null;
                let a = Y.exec(e);
                if (null != a && i[0].length <= a[0].length) return null;
                if ('' === n) {
                    let t = p.v.exec(e);
                    if (null != t && i[0].length <= t[0].length) return null;
                }
                return i;
            },
            parse(e) {
                let [, t, n] = e,
                    r = '@';
                return (
                    'roleMention' === n && (r += '&'),
                    {
                        type: n,
                        content: '<'.concat(r).concat(t, '>')
                    }
                );
            }
        },
        channel: {
            match: (e, t) => U('#', e, t.channels),
            parse: (e) => ({
                type: 'text',
                content: '<#'.concat(e[1], '>')
            })
        },
        emoticon: {
            match(e, t, n) {
                if (!I.ev.getSetting() || (0 !== n.length && !/\s$/.test(n))) return null;
                let r = E.ZP.EMOJI_SHORTCUT_RE.exec(e);
                return null == r || (r[0].length !== e.length && ' ' !== e[r[0].length] && '\n' !== e[r[0].length]) ? null : r;
            },
            parse: (e) => ({
                type: 'emoticon',
                content: E.ZP.convertShortcutToName(e[1]),
                isShortcut: !0
            })
        },
        emoji: {
            order: G.emoji.order,
            match: (e) => E.ZP.EMOJI_NAME_RE.exec(e),
            parse(e, t, n) {
                let [r, i] = e,
                    { customEmoji: a } = n,
                    o = Object.prototype.hasOwnProperty.call(a, i) ? a[i] : null;
                if (null != o) {
                    var s;
                    return {
                        type: 'customEmoticon',
                        content: '<'
                            .concat(!0 === o.animated ? 'a' : '', ':')
                            .concat(null !== (s = o.originalName) && void 0 !== s ? s : o.name, ':')
                            .concat(o.id, '>'),
                        emoji: o
                    };
                }
                return {
                    type: 'text',
                    content: r
                };
            }
        },
        customEmoticons: {
            match(e, t) {
                var n, r;
                return null !== (r = null === (n = t.customEmoticonsRegex) || void 0 === n ? void 0 : n.exec(e)) && void 0 !== r ? r : null;
            },
            parse(e, t, n) {
                let [r, i] = e,
                    { emojiContext: a } = n,
                    o = a.getEmoticonByName(i);
                return null != o
                    ? {
                          type: 'customEmoticon',
                          content: '<'
                              .concat(!0 === o.animated ? 'a' : '', ':')
                              .concat(o.name, ':')
                              .concat(o.id, '>'),
                          emoji: o
                      }
                    : {
                          type: 'text',
                          content: r
                      };
            }
        },
        text: {
            ...k,
            match: (e, t) => ('string' == typeof t.textExclusions && '' !== t.textExclusions ? (0, h.T9)(t.textExclusions).exec(e) : null != k.match ? k.match(e, t, '') : null)
        }
    },
    W = {
        inlineCode: w(G.inlineCode),
        codeBlock: w(G.codeBlock),
        mention: {
            match: c().anyScopeRegex(B),
            parse(e, t, n) {
                let { isNotification: r } = n,
                    i = R.default.getUser(e[1]);
                if (null == i) return { content: e[0] };
                let a = L.ZP.getUserTag(i, { identifiable: r && O.Z.enabled ? 'never' : 'always' });
                if (!r) return { content: '@'.concat(a) };
                {
                    let e = L.ZP.getGlobalName(i);
                    return { content: null != e ? '@'.concat(e) : '@'.concat(a) };
                }
            }
        },
        roleMention: {
            match: c().anyScopeRegex(F),
            parse(e, t, n) {
                let { guild: r } = n;
                if (null != r) {
                    let t = A.Z.getRoles(r.id)[e[1]];
                    if (null != t) return { content: '@'.concat(t.name) };
                }
                return { content: e[0] };
            }
        },
        channel: {
            match: c().anyScopeRegex(Z),
            parse(e) {
                let t = T.Z.getChannel(e[1]);
                return { content: null == t ? e[0] : (0, d.F6)(t, R.default, N.Z, !0, !0) };
            }
        },
        emoji: {
            match: c().anyScopeRegex(V),
            parse(e, t, n) {
                let [r, i, a] = e,
                    { guild: o } = n,
                    s = _.ZP.getDisambiguatedEmojiContext(o ? o.id : null).getById(a),
                    l = null != s ? s.name : i;
                return { content: ':'.concat(l, ':') };
            }
        },
        soundboard: {
            match: c().anyScopeRegex(H),
            parse(e) {
                let [t, n] = e;
                return { content: '<sound:'.concat(n, '>') };
            }
        },
        spoiler: {
            match: c().anyScopeRegex(b.$92),
            parse: () => ({ content: '<'.concat(M.Z.Messages.SPOILER.toLowerCase(), '>') })
        },
        staticRouteLink: {
            match: c().anyScopeRegex(b.PEY),
            parse: (e) => ({ content: '<id:'.concat(e[1], '>') })
        },
        timestamp: {
            ...G.timestamp,
            parse() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return { content: G.timestamp.parse(...t).formatted };
            }
        },
        text: { ...k }
    };
[j, W].forEach((e) => {
    Object.keys(e).forEach((t, n) => {
        e[t].order = n;
    });
});
let K = c().parserFor(j),
    z = /(?:<a?:\w+:(\d+)>)|:(?:([^\s:]+?)(?:::skin-tone-\d)?:)/g;
function q(e, t, n) {
    if (null != n) {
        if (('customEmoticon' === t.type && n(t.emoji, !1), 'emoticon' === t.type || 'text' === t.type)) {
            let r;
            let i = E.ZP.translateSurrogatesToInlineEmoji(t.content);
            for (; null !== (r = z.exec(i)); ) {
                let i;
                null != r[1] && '' !== r[1] ? e.emojiContext && (i = e.emojiContext.getById(r[1])) : (i = E.ZP.getByName(r[2])), i && n(i, t.isShortcut || !1);
            }
        }
    }
}
function Q(e, t, n, r) {
    let i = '';
    return (
        e.forEach((e) => {
            if ((q(t, e, r), 'string' == typeof e.content))
                switch (e.type) {
                    case 'codeBlock':
                    case 'inlineCode':
                    case 'mention':
                    case 'roleMention':
                    case 'channel':
                    case 'emoji':
                        i += e.content;
                        break;
                    default:
                        i += n(e.content);
                }
            else e.content.constructor === Array ? (i += Q(e.content, t, n, r)) : console.warn('Unknown message item type: ', e);
        }),
        i
    );
}
function X(e, t, n) {
    return Q(K(e, t), t, E.ZP.translateInlineEmojiToSurrogates, n);
}
function $(e) {
    let t;
    let n = null == e ? void 0 : e.getGuildId(),
        r = null != n ? A.Z.getGuild(n) : null,
        i = v.Z.can(b.Plq.MENTION_EVERYONE, e);
    t = (null == e ? void 0 : e.isPrivate())
        ? e.recipients.map((e) => ({
              userId: e,
              nick: null
          }))
        : null != n
          ? S.ZP.getMembers(n).map((e) => {
                let { userId: t, nick: n } = e;
                return {
                    userId: t,
                    nick: n
                };
            })
          : [];
    let a = l()(
            t.reduce((e, t) => {
                let { userId: n } = t,
                    r = R.default.getUser(n);
                return null == r
                    ? e
                    : (e.push({
                          id: n,
                          text: r.tag
                      }),
                      e);
            }, [])
        ),
        o = l()(null != r ? A.Z.getRoles(r.id) : {})
            .values()
            .filter((e) => {
                let { mentionable: t } = e;
                return i || t;
            })
            .map((e) => {
                let { id: t, name: n } = e;
                return {
                    id: t,
                    text: n
                };
            }),
        s = l()(g.ZP.getTextChannelNameDisambiguations(n)).map((e) => {
            let { id: t, name: n } = e;
            return {
                id: t,
                text: n
            };
        }),
        u =
            null != n
                ? l()(C.k1)
                      .filter((e) => e !== g.sH)
                      .flatMap((e) =>
                          g.ZP.getChannels(n)[e].map((e) => ({
                              id: e.channel.id,
                              text: e.channel.name
                          }))
                      )
                      .value()
                : [],
        c = m.Z.computeAllActiveJoinedThreads(n).map((e) => ({
            id: e.id,
            text: e.name
        })),
        d = _.ZP.getDisambiguatedEmojiContext(n),
        E = d.getEscapedCustomEmoticonNames(),
        f = d.getCustomEmoji(),
        h = d.getCustomEmoticonRegex();
    return {
        inline: !0,
        mentionableRoles: o,
        guild: r,
        users: a,
        channels: s.concat(u).concat(c),
        emojiContext: d,
        customEmoticonsRegex: h,
        customEmoji: f,
        textExclusions: E,
        disableErrorGuards: !0
    };
}
function J(e) {
    return e;
}
t.ZP = {
    parse(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
            r = null != n ? n : $(e),
            i = {
                content: t,
                tts: !1,
                invalidEmojis: [],
                validNonShortcutEmojis: []
            };
        return (
            (i.content = X(i.content, r, (t, n) => {
                y.ZP.isEmojiPremiumLocked({
                    emoji: t,
                    channel: e,
                    intention: D.Hz.CHAT
                })
                    ? i.invalidEmojis.push(t)
                    : !n && i.validNonShortcutEmojis.push(t);
            })),
            i
        );
    },
    parsePreprocessor: (e, t) => K(t, $(e)),
    unparse(e, t, n) {
        let r = T.Z.getChannel(t),
            i = null != r ? r.getGuildId() : null,
            a = null != i ? A.Z.getGuild(i) : null,
            o = n ? W : l().omit(W, ['spoiler', 'timestamp']),
            s = n ? J : E.ZP.translateSurrogatesToInlineEmoji,
            u = c().parserFor(o),
            d = {
                inline: !0,
                guild: a,
                isNotification: n
            };
        return Q(u(e, d), d, s);
    }
};
