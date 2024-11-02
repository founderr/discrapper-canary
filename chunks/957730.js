n(47120), n(724458), n(653041), n(390547);
var r = n(392711),
    i = n.n(r),
    a = n(302454),
    s = n.n(a),
    o = n(933557),
    l = n(339085),
    u = n(633302),
    c = n(428595),
    d = n(594199),
    f = n(467798),
    _ = n(601070),
    h = n(695346),
    p = n(592125),
    m = n(984933),
    g = n(271383),
    E = n(430824),
    v = n(496675),
    I = n(699516),
    S = n(246946),
    T = n(594174),
    b = n(483360),
    y = n(176354),
    A = n(51144),
    N = n(981631),
    C = n(185923),
    R = n(388032);
function O(e, t, n) {
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
function D(e) {
    return {
        order: e.order,
        match: e.match,
        parse: (t) => ({
            type: e.type,
            content: t[0]
        })
    };
}
function L(e) {
    return {
        match: s().anyScopeRegex(e),
        parse: (e) => ({
            type: 'text',
            content: e[0]
        })
    };
}
let x = c.Z.RULES,
    w = d.ZP,
    M = /^<@!?(\d+)>/,
    P = /^<@&(\d+)>/,
    k = /^<#(\d+)>/,
    U = /^<a?:(\w+):(\d+)>/,
    G = /(@everyone|@here|@Clyde)\b/,
    B = {
        link: D(s().defaultRules.link),
        autolink: D(s().defaultRules.autolink),
        url: D(s().defaultRules.url),
        inlineCode: D(x.inlineCode),
        codeBlock: D(x.codeBlock),
        rawUserMention: L(M),
        rawRoleMention: L(P),
        rawChannelMention: L(k),
        rawEmoji: L(U),
        mention: {
            match(e, t, n) {
                let r = n.split(' ').pop() + e;
                if (/^[^ ]+@[^ ]+\.[^ .]+/.test(r)) return null;
                let i = O('@', e, t.users, 'mention');
                if (i || (i = O('@', e, t.mentionableRoles, 'roleMention'))) return i;
                if (
                    !(i = O(
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
                let a = G.exec(e);
                if (null != a && i[0].length <= a[0].length) return null;
                if ('' === n) {
                    let t = f.v.exec(e);
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
            match: (e, t) =>
                (function (e, t, n) {
                    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                    if (t[0] !== e) return null;
                    if ('"' !== t[1]) return O(e, t, n, r);
                    let i = 2;
                    for (; i < t.length; i++) {
                        if ('\\' === t[i]) {
                            i++;
                            continue;
                        }
                        if ('"' === t[i]) break;
                    }
                    let a = t.substring(0, i + 1),
                        s = (0, o.mA)(t.substring(2, i));
                    return n
                        .sortBy((e) => {
                            let { text: t } = e;
                            return -t.length;
                        })
                        .filter((e) => {
                            let { text: t } = e;
                            return s === t;
                        })
                        .map((e) => {
                            let { id: t } = e;
                            return [a, t, r];
                        })
                        .first();
                })('#', e, t.channels),
            parse: (e) => ({
                type: 'text',
                content: '<#'.concat(e[1], '>')
            })
        },
        emoticon: {
            match(e, t, n) {
                if (!h.ev.getSetting() || (0 !== n.length && !/\s$/.test(n))) return null;
                let r = u.ZP.EMOJI_SHORTCUT_RE.exec(e);
                return null == r || (r[0].length !== e.length && ' ' !== e[r[0].length] && '\n' !== e[r[0].length]) ? null : r;
            },
            parse: (e) => ({
                type: 'emoticon',
                content: u.ZP.convertShortcutToName(e[1]),
                isShortcut: !0
            })
        },
        emoji: {
            order: x.emoji.order,
            match: (e) => u.ZP.EMOJI_NAME_RE.exec(e),
            parse(e, t, n) {
                let [r, i] = e,
                    { customEmoji: a } = n,
                    s = Object.prototype.hasOwnProperty.call(a, i) ? a[i] : null;
                if (null != s) {
                    var o;
                    return {
                        type: 'customEmoticon',
                        content: '<'
                            .concat(!0 === s.animated ? 'a' : '', ':')
                            .concat(null !== (o = s.originalName) && void 0 !== o ? o : s.name, ':')
                            .concat(s.id, '>'),
                        emoji: s
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
                    s = a.getEmoticonByName(i);
                return null != s
                    ? {
                          type: 'customEmoticon',
                          content: '<'
                              .concat(!0 === s.animated ? 'a' : '', ':')
                              .concat(s.name, ':')
                              .concat(s.id, '>'),
                          emoji: s
                      }
                    : {
                          type: 'text',
                          content: r
                      };
            }
        },
        text: {
            ...w,
            match: (e, t) => ('string' == typeof t.textExclusions && '' !== t.textExclusions ? (0, d.T9)(t.textExclusions).exec(e) : null != w.match ? w.match(e, t, '') : null)
        }
    },
    Z = {
        inlineCode: D(x.inlineCode),
        codeBlock: D(x.codeBlock),
        mention: {
            match: s().anyScopeRegex(M),
            parse(e, t, n) {
                let { isNotification: r } = n,
                    i = T.default.getUser(e[1]);
                if (null == i) return { content: e[0] };
                let a = A.ZP.getUserTag(i, { identifiable: r && S.Z.enabled ? 'never' : 'always' });
                if (!r) return { content: '@'.concat(a) };
                {
                    let e = A.ZP.getGlobalName(i);
                    return { content: null != e ? '@'.concat(e) : '@'.concat(a) };
                }
            }
        },
        roleMention: {
            match: s().anyScopeRegex(P),
            parse(e, t, n) {
                let { guild: r } = n;
                if (null != r) {
                    let t = E.Z.getRoles(r.id)[e[1]];
                    if (null != t) return { content: '@'.concat(t.name) };
                }
                return { content: e[0] };
            }
        },
        channel: {
            match: s().anyScopeRegex(k),
            parse(e) {
                let t = p.Z.getChannel(e[1]);
                return { content: null == t ? e[0] : (0, o.F6)(t, T.default, I.Z, !0, !0) };
            }
        },
        emoji: {
            match: s().anyScopeRegex(U),
            parse(e, t, n) {
                let [r, i, a] = e,
                    { guild: s } = n,
                    o = l.ZP.getDisambiguatedEmojiContext(s ? s.id : null).getById(a),
                    u = null != o ? o.name : i;
                return { content: ':'.concat(u, ':') };
            }
        },
        soundboard: {
            match: s().anyScopeRegex(/^<sound:(\d+)>/),
            parse(e) {
                let [t, n] = e;
                return { content: '<sound:'.concat(n, '>') };
            }
        },
        spoiler: {
            match: s().anyScopeRegex(N.$92),
            parse: () => ({ content: '<'.concat(R.intl.string(R.t['F+x38P']).toLowerCase(), '>') })
        },
        staticRouteLink: {
            match: s().anyScopeRegex(N.PEY),
            parse: (e) => ({ content: '<id:'.concat(e[1], '>') })
        },
        timestamp: {
            ...x.timestamp,
            parse() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return { content: x.timestamp.parse(...t).formatted };
            }
        },
        text: { ...w }
    };
[B, Z].forEach((e) => {
    Object.keys(e).forEach((t, n) => {
        e[t].order = n;
    });
});
let F = s().parserFor(B),
    V = /(?:<a?:\w+:(\d+)>)|:(?:([^\s:]+?)(?:::skin-tone-\d)?:)/g;
function j(e, t, n, r) {
    let i = '';
    return (
        e.forEach((e) => {
            if (
                (!(function (e, t, n) {
                    if (null != n) {
                        if (('customEmoticon' === t.type && n(t.emoji, !1), 'emoticon' === t.type || 'text' === t.type)) {
                            let r;
                            let i = u.ZP.translateSurrogatesToInlineEmoji(t.content);
                            for (; null !== (r = V.exec(i)); ) {
                                let i;
                                null != r[1] && '' !== r[1] ? e.emojiContext && (i = e.emojiContext.getById(r[1])) : (i = u.ZP.getByName(r[2])), i && n(i, t.isShortcut || !1);
                            }
                        }
                    }
                })(t, e, r),
                'string' == typeof e.content)
            )
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
            else e.content.constructor === Array ? (i += j(e.content, t, n, r)) : console.warn('Unknown message item type: ', e);
        }),
        i
    );
}
function H(e) {
    let t;
    let n = null == e ? void 0 : e.getGuildId(),
        r = null != n ? E.Z.getGuild(n) : null,
        a = v.Z.can(N.Plq.MENTION_EVERYONE, e);
    t = (null == e ? void 0 : e.isPrivate())
        ? e.recipients.map((e) => ({
              userId: e,
              nick: null
          }))
        : null != n
          ? g.ZP.getMembers(n).map((e) => {
                let { userId: t, nick: n } = e;
                return {
                    userId: t,
                    nick: n
                };
            })
          : [];
    let s = i()(
            t.reduce((e, t) => {
                let { userId: n } = t,
                    r = T.default.getUser(n);
                return null == r
                    ? e
                    : (e.push({
                          id: n,
                          text: r.tag
                      }),
                      e);
            }, [])
        ),
        o = i()(null != r ? E.Z.getRoles(r.id) : {})
            .values()
            .filter((e) => {
                let { mentionable: t } = e;
                return a || t;
            })
            .map((e) => {
                let { id: t, name: n } = e;
                return {
                    id: t,
                    text: n
                };
            }),
        u = i()(m.ZP.getTextChannelNameDisambiguations(n)).map((e) => {
            let { id: t, name: n } = e;
            return {
                id: t,
                text: n
            };
        }),
        c =
            null != n
                ? i()(b.k1)
                      .filter((e) => e !== m.sH)
                      .flatMap((e) =>
                          m.ZP.getChannels(n)[e].map((e) => ({
                              id: e.channel.id,
                              text: e.channel.name
                          }))
                      )
                      .value()
                : [],
        d = _.Z.computeAllActiveJoinedThreads(n).map((e) => ({
            id: e.id,
            text: e.name
        })),
        f = l.ZP.getDisambiguatedEmojiContext(n),
        h = f.getEscapedCustomEmoticonNames(),
        p = f.getCustomEmoji(),
        I = f.getCustomEmoticonRegex();
    return {
        inline: !0,
        mentionableRoles: o,
        guild: r,
        users: s,
        channels: u.concat(c).concat(d),
        emojiContext: f,
        customEmoticonsRegex: I,
        customEmoji: p,
        textExclusions: h,
        disableErrorGuards: !0
    };
}
function Y(e) {
    return e;
}
t.ZP = {
    parse(e, t) {
        var n, r, i;
        let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
            s = null != a ? a : H(e),
            o = {
                content: t,
                tts: !1,
                invalidEmojis: [],
                validNonShortcutEmojis: []
            };
        return (
            (o.content =
                ((n = o.content),
                (r = s),
                (i = (t, n) => {
                    y.ZP.isEmojiPremiumLocked({
                        emoji: t,
                        channel: e,
                        intention: C.Hz.CHAT
                    })
                        ? o.invalidEmojis.push(t)
                        : !n && o.validNonShortcutEmojis.push(t);
                }),
                j(F(n, r), r, u.ZP.translateInlineEmojiToSurrogates, i))),
            o
        );
    },
    parsePreprocessor: (e, t) => F(t, H(e)),
    unparse(e, t, n) {
        let r = p.Z.getChannel(t),
            a = null != r ? r.getGuildId() : null,
            o = null != a ? E.Z.getGuild(a) : null,
            l = n ? Z : i().omit(Z, ['spoiler', 'timestamp']),
            c = n ? Y : u.ZP.translateSurrogatesToInlineEmoji,
            d = s().parserFor(l),
            f = {
                inline: !0,
                guild: o,
                isNotification: n
            };
        return j(d(e, f), f, c);
    }
};
