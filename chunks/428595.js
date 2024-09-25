var r = n(757143);
var i = n(653041);
var a = n(47120);
var o = n(392711),
    s = n.n(o),
    l = n(302454),
    u = n.n(l),
    c = n(797610),
    d = n(633302),
    _ = n(763296),
    E = n(592125),
    f = n(430824),
    h = n(594174),
    p = n(5192),
    m = n(51144),
    I = n(298552),
    T = n(444758),
    g = n(723454),
    S = n(772096),
    A = n(800927),
    v = n(945884),
    N = n(594199),
    O = n(97734),
    R = n(303694),
    C = n(660199),
    y = n(364458),
    b = n(981631),
    L = n(689079),
    D = n(377668),
    M = n(689938);
let P = /^( *>>> +([\s\S]*))|^( *>(?!>>) +[^\n]*(\n *>(?!>>) +[^\n]*)*\n?)/,
    U = /^$|\n *$/,
    w = /^ *>>> ?/,
    x = /^ *> ?/gm;
function G(e) {
    let t = (0, S.yw)(e[1]);
    if (null == t)
        return {
            type: 'text',
            content: e[1]
        };
    let { displayTarget: n, target: r } = t;
    return {
        type: 'link',
        content: [
            {
                type: 'text',
                content: n
            }
        ],
        target: r,
        title: void 0
    };
}
let k = (e) => {
        let t = E.Z.getChannel(e);
        return null == t ? void 0 : t.getGuildId();
    },
    B = (e) => (null != e.guildId ? f.Z.getGuild(e.guildId) : null != e.channelId ? f.Z.getGuild(k(e.channelId)) : null),
    F = {
        newline: u().defaultRules.newline,
        paragraph: u().defaultRules.paragraph,
        escape: {
            ...u().defaultRules.escape,
            match: (e, t, n) => (!1 === t.allowEscape ? null : u().defaultRules.escape.match(e, t, n))
        },
        blockQuote: {
            ...u().defaultRules.blockQuote,
            requiredFirstCharacters: [' ', '>'],
            match(e, t) {
                let { prevCapture: n, inQuote: r, nested: i } = t;
                if (r || i) return null;
                if (null == n) return P.exec(e);
                let a = n[0];
                return U.test(a) ? P.exec(e) : null;
            },
            parse(e, t, n) {
                let r = e[0],
                    i = !!w.exec(r),
                    a = i ? w : x,
                    o = r.replace(a, ''),
                    s = n.inQuote || !1,
                    l = n.inline || !1;
                (n.inQuote = !0), !i && (n.inline = !0);
                let u = t(o, n);
                return (
                    (n.inQuote = s),
                    (n.inline = l),
                    0 === u.length &&
                        u.push({
                            type: 'text',
                            content: ' '
                        }),
                    {
                        content: u,
                        type: 'blockQuote'
                    }
                );
            }
        },
        link: S.ZP,
        autolink: {
            ...u().defaultRules.autolink,
            parse: G
        },
        url: {
            ...u().defaultRules.url,
            requiredFirstCharacters: ['h', 's'],
            match(e, t) {
                if (!t.inline) return null;
                let n = /^((?:https?|steam):\/\/[^\s<]+[^<.,:;"'\]\s])/.exec(e);
                if (null != n) {
                    let e = 0,
                        t = n[0];
                    for (let n = t.length - 1; n >= 0 && ')' === t[n]; n--) {
                        let n = t.indexOf('(', e);
                        if (-1 === n) {
                            t = t.slice(0, t.length - 1);
                            break;
                        }
                        e = n + 1;
                    }
                    n[0] = n[1] = t;
                }
                return n;
            },
            parse: G
        },
        strong: u().defaultRules.strong,
        em: u().defaultRules.em,
        u: u().defaultRules.u,
        br: u().defaultRules.br,
        text: N.ZP,
        inlineCode: {
            ...u().defaultRules.inlineCode,
            parse(e, t, n) {
                let r = u().defaultRules.inlineCode.parse(e, t, n);
                return !0 === n.parseInlineCodeChildContent
                    ? {
                          ...r,
                          validationChildContent: t(r.content, n)
                      }
                    : r;
            }
        },
        emoticon: {
            order: N.ZP.order,
            requiredFirstCharacters: ['\xAF'],
            match: (e) => /^(¯\\_\(ツ\)_\/¯)/.exec(e),
            parse: (e) => ({
                type: 'text',
                content: e[1]
            })
        },
        codeBlock: {
            order: u().defaultRules.codeBlock.order,
            requiredFirstCharacters: ['`'],
            match: (e) => /^```(?:([a-z0-9_+\-.#]+?)\n)?\n*([^\n][^]*?)\n*```/i.exec(e),
            parse(e, t, n) {
                var r, i;
                return {
                    lang: null !== (r = e[1]) && void 0 !== r ? r : '',
                    content: null !== (i = e[2]) && void 0 !== i ? i : '',
                    inQuote: n.inQuote || n.formatInline || !1
                };
            }
        },
        roleMention: {
            order: N.ZP.order,
            requiredFirstCharacters: ['<'],
            match: (e) => /^<@&(\d+)>/.exec(e),
            parse(e, t, n) {
                let [r, i] = e;
                if (n.returnMentionIds)
                    return {
                        type: 'roleMention',
                        id: i
                    };
                let a = B(n),
                    o = null != a ? f.Z.getRole(a.id, i) : null;
                return null == o
                    ? {
                          type: 'text',
                          content: '@'.concat(M.Z.Messages.UNKNOWN_ROLE_PLACEHOLDER)
                      }
                    : {
                          type: 'mention',
                          channelId: n.channelId,
                          guildId: null != a ? a.id : null,
                          roleId: i,
                          roleColor: o.color,
                          roleName: '@'.concat(o.name),
                          color: o.color,
                          colorString: o.colorString,
                          content: [
                              {
                                  type: 'text',
                                  content: '@'.concat(o.name)
                              }
                          ]
                      };
            }
        },
        mention: {
            order: N.ZP.order,
            requiredFirstCharacters: ['<', '@'],
            match(e, t) {
                let n = /^<@!?(\d+)>|^(@(?:everyone|here|Clyde))/.exec(e);
                return null != n && ('@Clyde' !== n[0] || (0, c.gJ)(B(t), E.Z.getChannel(t.channelId))) ? n : null;
            },
            parse(e, t, n) {
                let r, i;
                if (n.returnMentionIds)
                    return null == e[1]
                        ? {
                              type: 'mention',
                              text: e[0]
                          }
                        : {
                              type: 'mention',
                              id: e[1]
                          };
                let a = h.default.getUser(e[1]),
                    o = E.Z.getChannel(n.channelId);
                if (null != a && ((i = a.id), (r = a.toString()), null != o)) {
                    var s;
                    r = null !== (s = p.ZP.getNickname(o.getGuildId(), n.channelId, a)) && void 0 !== s ? s : m.ZP.getName(a);
                }
                null == a && '@Clyde' === e[0] && (0, c.gJ)(B(n), o) && (i = D.fL);
                let l = e[1],
                    u = null != l && b.Xyh.test(l.trim()),
                    d = u && n.unknownUserMentionPlaceholder ? '@'.concat(M.Z.Messages.UNKNOWN_USER_MENTION_PLACEHOLDER) : e[0];
                return {
                    userId: i,
                    channelId: n.channelId,
                    viewingChannelId: n.viewingChannelId,
                    guildId: null == o ? void 0 : o.getGuildId(),
                    parsedUserId: u ? l : null,
                    roleName: e[2],
                    content: [
                        {
                            type: 'text',
                            content: null != r ? '@'.concat(r) : d
                        }
                    ]
                };
            }
        },
        channelMention: T.Z.channelMention,
        channelOrMessageUrl: T.Z.channelOrMessageUrl,
        mediaPostLink: T.Z.mediaPostLink,
        attachmentLink: I.Z.attachmentLink,
        commandMention: {
            order: u().defaultRules.text.order,
            requiredFirstCharacters: ['<'],
            match: (e) => /^<\/((?:[-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})(?: [-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})?(?: [-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})?):(\d+)>/u.exec(e),
            parse(e, t, n) {
                if (n.returnMentionIds)
                    return {
                        type: 'commandMention',
                        id: e[2]
                    };
                let [, ...r] = e[1].split(' '),
                    i = ''.concat(e[2]).concat([...r].map((e) => ''.concat(L.oQ).concat(e)).join(''));
                return {
                    channelId: n.channelId,
                    commandId: e[2],
                    commandName: e[1],
                    commandKey: i,
                    content: [
                        {
                            type: 'text',
                            content: ''.concat(e[1])
                        }
                    ]
                };
            }
        },
        emoji: {
            order: N.ZP.order,
            requiredFirstCharacters: [':'],
            match(e) {
                let t = d.ZP.EMOJI_NAME_RE.exec(e);
                return null != t && '' !== d.ZP.convertNameToSurrogate(t[1]) ? t : null;
            },
            parse(e) {
                let t = d.ZP.convertNameToSurrogate(e[1]);
                return {
                    type: 'text',
                    content: null == t || '' === t ? ':'.concat(e[1], ':') : t
                };
            }
        },
        soundboard: {
            order: N.ZP.order,
            requiredFirstCharacters: ['<'],
            match: (e) => /^<sound:(\d+)>/.exec(e),
            parse(e, t, n) {
                var r;
                let i = e[1],
                    a = _.Z.getSoundById(i),
                    o = null !== (r = null == a ? void 0 : a.name) && void 0 !== r ? r : i;
                return {
                    type: 'soundboard',
                    id: i,
                    soundId: i,
                    channelId: n.channelId,
                    content: o
                };
            }
        },
        customEmoji: {
            order: N.ZP.order,
            requiredFirstCharacters: ['<'],
            match: (e) => /^<a?:(\w+):(\d+)>/.exec(e),
            parse: (e) => ({
                type: 'text',
                content: ':'.concat(e[1], ':')
            })
        },
        timestamp: {
            order: N.ZP.order - 1,
            requiredFirstCharacters: ['<'],
            match: (e) => C.Ay.exec(e),
            parse(e) {
                let [t, n, r] = e,
                    i = (0, C.ZB)(n, r);
                return null == i
                    ? {
                          type: 'text',
                          content: t
                      }
                    : i;
            }
        },
        s: {
            order: u().defaultRules.u.order,
            requiredFirstCharacters: ['~'],
            match: u().inlineRegex(/^~~([\s\S]+?)~~(?!_)/),
            parse: u().defaultRules.u.parse
        },
        spoiler: {
            order: N.ZP.order,
            requiredFirstCharacters: ['|'],
            match: (e) => b.$92.exec(e),
            parse: (e, t, n) => ({
                content: t(e[1], n),
                channelId: n.channelId
            })
        },
        staticRouteLink: {
            order: N.ZP.order,
            requiredFirstCharacters: ['<'],
            match: (e) => b.PEY.exec(e),
            parse(e, t, n) {
                var r;
                let [, i, a] = e,
                    o = (0, R.l)(i),
                    s = (0, R.W)(i, a, null === (r = B(n)) || void 0 === r ? void 0 : r.id);
                function l(e) {
                    return null == e
                        ? null
                        : [
                              {
                                  type: 'text',
                                  content: e
                              }
                          ];
                }
                return {
                    content: l(o + (null != s ? ' \u203A '.concat(s) : '')),
                    mainContent: l(o),
                    itemContent: l(s),
                    itemId: a,
                    id: i,
                    guildId: k(n.channelId),
                    channelId: i
                };
            }
        },
        heading: g.Z,
        list: A.Z,
        subtext: v.Z
    },
    Z = (0, y.Z)([F, O.Z]),
    V = s().omit(Z, ['inlineCode', 'codeBlock', 'br', 'blockQuote', 'subtext']),
    H = s().omit(Z, ['inlineCode', 'codeBlock', 'br', 'blockQuote', 'autolink', 'url', 'attachmentLink', 'mention', 'roleMention', 'channelMention', 'channelOrMessageUrl', 'mediaPostLink', 'subtext']),
    Y = s().omit(Z, ['codeBlock', 'br', 'mention', 'channel', 'roleMention', 'attachmentLink', 'subtext']),
    j = s().omit(
        (0, y.Z)([
            Z,
            {
                inlineCode: {
                    match(e, t, n) {
                        let r = Z.codeBlock.match(e, t, n);
                        if (null != r) return r;
                        let i = Z.inlineCode.match(e, t, n);
                        if (null != i) return i;
                    }
                }
            }
        ]),
        ['blockQuote', 'codeBlock', 'br']
    ),
    W = s().omit(Z, ['codeBlock', 'br', 'blockQuote']),
    K = s().omit(Z, ['codeBlock', 'br', 'attachmentLink', 'mention', 'roleMention', 'channel', 'paragraph', 'newline', 'subtext']),
    z = s().omit(Z, ['codeBlock', 'blockQuote', 'br']),
    q = s().omit(Z, ['codeBlock', 'br', 'inlineCode']);
function Q(e, t) {
    return 0 === e.length || 0 === t || '' === e.charAt(t - 1).trim();
}
let X = 10,
    $ = (0, y.Z)([
        {
            highlightWord: {
                order: -1,
                match(e, t) {
                    if ((null != t.parseDepth && t.parseDepth > X) || null == t.highlightWord || 0 === t.highlightWord.length) return null;
                    let n = e.indexOf(t.highlightWord);
                    if (-1 === n) return null;
                    let r = !Q(e, n);
                    if (r)
                        do (n = e.indexOf(t.highlightWord, n + 1)), (r = !Q(e, n));
                        while (r && -1 !== n);
                    if (-1 === n) return null;
                    let i = e.substring(0, n),
                        a = e.substring(n + t.highlightWord.length);
                    return [e, t.highlightWord, i, a];
                },
                parse(e, t, n) {
                    var r;
                    let i = null !== (r = n.parseDepth) && void 0 !== r ? r : 0,
                        a = {
                            ...n,
                            parseDepth: i + 1
                        },
                        o = t(e[2], a),
                        s = t(e[3], a);
                    return [
                        ...o,
                        {
                            type: 'highlight',
                            content: e[1]
                        },
                        ...s
                    ];
                }
            }
        },
        s().omit(Z, ['url'])
    ]);
t.Z = {
    RULES: Z,
    CHANNEL_TOPIC_RULES: V,
    VOICE_CHANNEL_STATUS_RULES: H,
    EMBED_TITLE_RULES: Y,
    INLINE_REPLY_RULES: j,
    GUILD_VERIFICATION_FORM_RULES: W,
    GUILD_EVENT_RULES: z,
    PROFILE_BIO_RULES: K,
    AUTO_MODERATION_SYSTEM_MESSAGE_RULES: $,
    NATIVE_SEARCH_RESULT_LINK_RULES: q
};
