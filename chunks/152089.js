n.d(t, {
    FW: function () {
        return _;
    },
    fZ: function () {
        return f;
    },
    py: function () {
        return h;
    }
});
var r = n(47120);
var i = n(411104);
var a = n(911969),
    o = n(581364),
    s = n(752305),
    l = n(130402),
    u = n(365704),
    c = n(590921),
    d = n(185923);
function _(e) {
    var t;
    let { activeCommandOption: n, canMentionUsers: r = !0, canMentionRoles: i = !0, canMentionChannels: l = !0, canMentionEveryone: u, canMentionClyde: d = !1, useNewSlashCommands: _, canOnlyUseTextCommands: E, canSendStickers: f, hideMentionDescription: h, hidePersonalInformation: p, type: m, emojiIntention: I, editorRef: T, onSendMessage: g, onSendSticker: S, setValue: A } = e,
        v = {
            mentions: {
                channel: c.nS.DENY,
                global: c.VV.DENY,
                role: c.Fw.DENY,
                user: c.h3.DENY,
                clyde: c.cz.DENY
            },
            commands: c.L8.DISABLED,
            allowStickers: !0 === f,
            forNonStringCommandOption: null != n && n.type !== a.jw.STRING,
            hideMentionDescription: !0 === h,
            hidePersonalInformation: !0 === p,
            chatInputType: m,
            emojiIntention: I,
            sendMessage: g,
            sendSticker: S,
            insertText: (e, t) => {
                var n;
                null === (n = T.current) || void 0 === n || n.insertAutocomplete(e, null != t ? t : e);
            },
            replaceText: (e, t) => {
                A(e, null != t ? t : (0, s.JM)(e));
            },
            getCommandOptionValues: () => {
                var e;
                return null === (e = T.current) || void 0 === e ? void 0 : e.getCommandOptionValues();
            }
        };
    if (null != n) {
        let e = (0, o.$z)(n);
        e.canMentionChannels && (v.mentions.channel = c.nS.ALLOW_SELECTABLE), e.canMentionEveryone && (v.mentions.global = e.canMentionHere ? c.VV.ALLOW_EVERYONE_OR_HERE : c.VV.ALLOW_EVERYONE), e.canMentionRoles && (v.mentions.role = e.canMentionNonMentionableRoles ? c.Fw.ALLOW_ALL : c.Fw.ALLOW_MENTIONABLE), e.canMentionUsers && (v.mentions.user = e.canMentionAnyGuildUser ? c.h3.ALLOW_GUILD : c.h3.ALLOW_CHANNEL), (v.hideMentionDescription = !0);
    } else l && (v.mentions.channel = c.nS.ALLOW_SELECTABLE), i && (v.mentions.role = c.Fw.ALLOW_MENTIONABLE), r && (v.mentions.user = c.h3.ALLOW_CHANNEL), u && (v.mentions.global = c.VV.ALLOW_EVERYONE_OR_HERE), d && (v.mentions.clyde = c.cz.ALLOW);
    return (null === (t = m.commands) || void 0 === t ? void 0 : t.enabled) && (_ ? (v.commands = E ? c.L8.NEW_TEXT_ONLY : c.L8.NEW) : (v.commands = c.L8.OLD_BUILT_INS)), null != n && null != n.channelTypes && (v.allowedChannelTypes = n.channelTypes), v;
}
function E(e) {
    let { type: t, channel: n, guild: r, query: i, isAtStart: a, options: o } = e,
        s = u.W[t];
    if (null != s.sentinel) {
        if (!i.startsWith(s.sentinel)) return !1;
        i = i.substring(s.sentinel.length);
    }
    return !!(null == s.matches || s.matches(n, r, i, a, o)) || !1;
}
function f(e) {
    let { channel: t, guild: n, options: r, currentWord: i, currentWordIsAtStart: a, textValue: o, optionText: s } = e,
        _ = null;
    for (let e of u.R) {
        var f, h, p, m, I, T;
        let g = u.W[e];
        if (e === c.eq.GIFS || e === c.eq.CHOICES) {
            if (r.commands === c.L8.OLD_BUILT_INS) {
                if (
                    E({
                        type: e,
                        channel: t,
                        guild: n,
                        query: o,
                        isAtStart: !1,
                        options: r
                    })
                ) {
                    _ = {
                        type: e,
                        typeInfo: g,
                        query: o
                    };
                    break;
                }
            } else if (
                E({
                    type: e,
                    channel: t,
                    guild: n,
                    query: s,
                    isAtStart: !1,
                    options: r
                })
            )
                return {
                    type: e,
                    typeInfo: g,
                    query: s
                };
        } else if (e === c.eq.STICKERS) {
            if (
                E({
                    type: e,
                    channel: t,
                    guild: n,
                    query: s,
                    isAtStart: !1,
                    options: r
                })
            )
                return {
                    type: e,
                    typeInfo: g,
                    query: s
                };
        } else if (e === c.eq.COMMANDS && r.commands !== c.L8.OLD_BUILT_INS) {
            if (
                E({
                    type: e,
                    channel: t,
                    guild: n,
                    query: o,
                    isAtStart: !0,
                    options: r
                })
            ) {
                _ = {
                    type: e,
                    typeInfo: g,
                    query: o.substring(null !== (h = null === (f = g.sentinel) || void 0 === f ? void 0 : f.length) && void 0 !== h ? h : 0)
                };
                break;
            }
        } else if (e === c.eq.LEGACY_COMMANDS) {
            if (
                E({
                    type: e,
                    channel: t,
                    guild: n,
                    query: o,
                    isAtStart: a,
                    options: r
                })
            ) {
                _ = {
                    type: e,
                    typeInfo: g,
                    query: o
                };
                break;
            }
        } else if (e === c.eq.EMOJIS_AND_STICKERS) {
            if (
                (null != i && i.length > 0 && (0, l.x)(d.qR.AutocompleteTyped),
                null != i &&
                    E({
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
                    typeInfo: g,
                    query: i.substring(null !== (m = null === (p = g.sentinel) || void 0 === p ? void 0 : p.length) && void 0 !== m ? m : 0)
                };
                break;
            }
        } else if (
            null != i &&
            E({
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
                typeInfo: g,
                query: i.substring(null !== (T = null === (I = g.sentinel) || void 0 === I ? void 0 : I.length) && void 0 !== T ? T : 0)
            };
            break;
        }
    }
    return null == _ ? null : ((_.query = _.query.toLocaleLowerCase()), _);
}
function h(e, t) {
    let n;
    if (null == t || null == e) return null;
    if (null != e.choices || e.autocomplete) n = c.eq.CHOICES;
    else
        switch (e.type) {
            case a.jw.BOOLEAN:
                n = c.eq.CHOICES;
                break;
            case a.jw.CHANNEL:
                n = c.eq.CHANNELS;
                break;
            case a.jw.ROLE:
            case a.jw.USER:
            case a.jw.MENTIONABLE:
                n = c.eq.MENTIONS;
                break;
            default:
                return null;
        }
    let r = u.W[n];
    return {
        type: n,
        typeInfo: r,
        query: t
    };
}
