n.d(t, {
    FW: function () {
        return c;
    },
    fZ: function () {
        return f;
    },
    py: function () {
        return _;
    }
}),
    n(47120),
    n(411104);
var r = n(911969),
    i = n(581364),
    a = n(752305),
    s = n(130402),
    o = n(365704),
    l = n(590921),
    u = n(185923);
function c(e) {
    var t;
    let { activeCommandOption: n, canMentionUsers: s = !0, canMentionRoles: o = !0, canMentionChannels: u = !0, canMentionEveryone: c, canMentionClyde: d = !1, useNewSlashCommands: f, canOnlyUseTextCommands: _, canSendStickers: p, hideMentionDescription: h, hidePersonalInformation: m, type: g, emojiIntention: E, editorRef: v, onSendMessage: I, onSendSticker: T, setValue: b } = e,
        S = {
            mentions: {
                channel: l.nS.DENY,
                global: l.VV.DENY,
                role: l.Fw.DENY,
                user: l.h3.DENY,
                clyde: l.cz.DENY
            },
            commands: l.L8.DISABLED,
            allowStickers: !0 === p,
            forNonStringCommandOption: null != n && n.type !== r.jw.STRING,
            hideMentionDescription: !0 === h,
            hidePersonalInformation: !0 === m,
            chatInputType: g,
            emojiIntention: E,
            sendMessage: I,
            sendSticker: T,
            insertText: (e, t) => {
                var n;
                null === (n = v.current) || void 0 === n || n.insertAutocomplete(e, null != t ? t : e);
            },
            replaceText: (e, t) => {
                b(e, null != t ? t : (0, a.JM)(e));
            },
            getCommandOptionValues: () => {
                var e;
                return null === (e = v.current) || void 0 === e ? void 0 : e.getCommandOptionValues();
            }
        };
    if (null != n) {
        let e = (0, i.$z)(n);
        e.canMentionChannels && (S.mentions.channel = l.nS.ALLOW_SELECTABLE), e.canMentionEveryone && (S.mentions.global = e.canMentionHere ? l.VV.ALLOW_EVERYONE_OR_HERE : l.VV.ALLOW_EVERYONE), e.canMentionRoles && (S.mentions.role = e.canMentionNonMentionableRoles ? l.Fw.ALLOW_ALL : l.Fw.ALLOW_MENTIONABLE), e.canMentionUsers && (S.mentions.user = e.canMentionAnyGuildUser ? l.h3.ALLOW_GUILD : l.h3.ALLOW_CHANNEL), (S.hideMentionDescription = !0);
    } else u && (S.mentions.channel = l.nS.ALLOW_SELECTABLE), o && (S.mentions.role = l.Fw.ALLOW_MENTIONABLE), s && (S.mentions.user = l.h3.ALLOW_CHANNEL), c && (S.mentions.global = l.VV.ALLOW_EVERYONE_OR_HERE), d && (S.mentions.clyde = l.cz.ALLOW);
    return (null === (t = g.commands) || void 0 === t ? void 0 : t.enabled) && (f ? (S.commands = _ ? l.L8.NEW_TEXT_ONLY : l.L8.NEW) : (S.commands = l.L8.OLD_BUILT_INS)), null != n && null != n.channelTypes && (S.allowedChannelTypes = n.channelTypes), S;
}
function d(e) {
    let { type: t, channel: n, guild: r, query: i, isAtStart: a, options: s } = e,
        l = o.W[t];
    if (null != l.sentinel) {
        if (!i.startsWith(l.sentinel)) return !1;
        i = i.substring(l.sentinel.length);
    }
    return !!(null == l.matches || l.matches(n, r, i, a, s)) || !1;
}
function f(e) {
    let { channel: t, guild: n, options: r, currentWord: i, currentWordIsAtStart: a, textValue: c, optionText: f } = e,
        _ = null;
    for (let e of o.R) {
        var p, h, m, g, E, v;
        let I = o.W[e];
        if (e === l.eq.GIFS || e === l.eq.CHOICES) {
            if (r.commands === l.L8.OLD_BUILT_INS) {
                if (
                    d({
                        type: e,
                        channel: t,
                        guild: n,
                        query: c,
                        isAtStart: !1,
                        options: r
                    })
                ) {
                    _ = {
                        type: e,
                        typeInfo: I,
                        query: c
                    };
                    break;
                }
            } else if (
                d({
                    type: e,
                    channel: t,
                    guild: n,
                    query: f,
                    isAtStart: !1,
                    options: r
                })
            )
                return {
                    type: e,
                    typeInfo: I,
                    query: f
                };
        } else if (e === l.eq.STICKERS) {
            if (
                d({
                    type: e,
                    channel: t,
                    guild: n,
                    query: f,
                    isAtStart: !1,
                    options: r
                })
            )
                return {
                    type: e,
                    typeInfo: I,
                    query: f
                };
        } else if (e === l.eq.COMMANDS && r.commands !== l.L8.OLD_BUILT_INS) {
            if (
                d({
                    type: e,
                    channel: t,
                    guild: n,
                    query: c,
                    isAtStart: !0,
                    options: r
                })
            ) {
                _ = {
                    type: e,
                    typeInfo: I,
                    query: c.substring(null !== (h = null === (p = I.sentinel) || void 0 === p ? void 0 : p.length) && void 0 !== h ? h : 0)
                };
                break;
            }
        } else if (e === l.eq.LEGACY_COMMANDS) {
            if (
                d({
                    type: e,
                    channel: t,
                    guild: n,
                    query: c,
                    isAtStart: a,
                    options: r
                })
            ) {
                _ = {
                    type: e,
                    typeInfo: I,
                    query: c
                };
                break;
            }
        } else if (e === l.eq.EMOJIS_AND_STICKERS) {
            if (
                (null != i && i.length > 0 && (0, s.x)(u.qR.AutocompleteTyped),
                null != i &&
                    d({
                        type: e,
                        channel: t,
                        guild: n,
                        query: i,
                        isAtStart: a,
                        options: r
                    }))
            ) {
                _ = {
                    type: e,
                    typeInfo: I,
                    query: i.substring(null !== (g = null === (m = I.sentinel) || void 0 === m ? void 0 : m.length) && void 0 !== g ? g : 0)
                };
                break;
            }
        } else if (
            null != i &&
            d({
                type: e,
                channel: t,
                guild: n,
                query: i,
                isAtStart: a,
                options: r
            })
        ) {
            _ = {
                type: e,
                typeInfo: I,
                query: i.substring(null !== (v = null === (E = I.sentinel) || void 0 === E ? void 0 : E.length) && void 0 !== v ? v : 0)
            };
            break;
        }
    }
    return null == _ ? null : ((_.query = _.query.toLocaleLowerCase()), _);
}
function _(e, t) {
    let n;
    if (null == t || null == e) return null;
    if (null != e.choices || e.autocomplete) n = l.eq.CHOICES;
    else
        switch (e.type) {
            case r.jw.BOOLEAN:
                n = l.eq.CHOICES;
                break;
            case r.jw.CHANNEL:
                n = l.eq.CHANNELS;
                break;
            case r.jw.ROLE:
            case r.jw.USER:
            case r.jw.MENTIONABLE:
                n = l.eq.MENTIONS;
                break;
            default:
                return null;
        }
    let i = o.W[n];
    return {
        type: n,
        typeInfo: i,
        query: t
    };
}
