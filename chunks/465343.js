n.d(t, {
    K: function () {
        return E;
    },
    i: function () {
        return g;
    }
}),
    n(47120);
var r = n(933557),
    i = n(797610),
    a = n(339085),
    s = n(633302),
    o = n(601070),
    l = n(592125),
    u = n(984933),
    c = n(271383),
    d = n(430824),
    f = n(594174),
    _ = n(483360),
    p = n(709054),
    h = n(752305),
    m = n(377668);
function g(e, t, n, f) {
    let { allowUsers: h = !0, allowRoles: g = !0 } = null != f ? f : {};
    switch (e[0]) {
        case '@':
            return (function (e, t, n, r, a) {
                let [s, o] = e.slice(1).split('#', 2),
                    u = null != t ? d.Z.getGuild(t) : null,
                    f = (0, i.M9)(u);
                if (a && null == o && null != u) {
                    for (let e of Object.values(d.Z.getRoles(u.id)))
                        if (s === e.name)
                            return {
                                type: 'roleMention',
                                roleId: e.id,
                                children: [{ text: '' }]
                            };
                }
                if (r) {
                    let e = null != n ? l.Z.getChannel(n) : null;
                    if (null != e) {
                        if (e.isPrivate()) {
                            for (let t of e.recipients)
                                if (v(s, o, t))
                                    return {
                                        type: 'userMention',
                                        userId: t,
                                        children: [{ text: '' }]
                                    };
                        } else {
                            for (let { userId: e } of c.ZP.getMembers(t))
                                if (v(s, o, e))
                                    return {
                                        type: 'userMention',
                                        userId: e,
                                        children: [{ text: '' }]
                                    };
                            if (f && v(s, o, m.fL))
                                return {
                                    type: 'userMention',
                                    userId: m.fL,
                                    children: [{ text: '' }]
                                };
                        }
                    }
                }
                return null;
            })(e, t, n, h, g);
        case ':':
            return (function (e, t) {
                let n = s.ZP.EMOJI_NAME_RE.exec(e);
                if (null == n) return null;
                let r = n[1],
                    i = a.ZP.getDisambiguatedEmojiContext(t).getCustomEmoji();
                if (null != i && r in i) {
                    let e = i[r];
                    return {
                        type: 'customEmoji',
                        emoji: {
                            emojiId: e.id,
                            name: 'require_colons' in e && e.require_colons ? ':'.concat(e.name, ':') : e.name,
                            animated: !0 === e.animated,
                            jumboable: !1
                        },
                        children: [{ text: '' }]
                    };
                }
                return null;
            })(e, t);
        case '#':
            return (function (e, t) {
                let n;
                if (null == t) return null;
                n = e.length > 3 && '"' === e[1] && '"' === e[e.length - 1] ? (0, r.mA)(e.slice(2, e.length - 1)) : e.slice(1);
                let i = u.ZP.getTextChannelNameDisambiguations(t);
                for (let e of p.default.keys(i))
                    if (i[e].name === n)
                        return {
                            type: 'channelMention',
                            channelId: e,
                            children: [{ text: '' }]
                        };
                for (let e of _.k1) {
                    if (e !== u.sH) {
                        for (let { channel: r } of u.ZP.getChannels(t)[e])
                            if (r.name === n)
                                return {
                                    type: 'channelMention',
                                    channelId: r.id,
                                    children: [{ text: '' }]
                                };
                    }
                }
                let a = o.Z.getActiveJoinedThreadsForGuild(t);
                for (let e of p.default.keys(a))
                    for (let t of p.default.keys(a[e])) {
                        let { channel: r } = a[e][t];
                        if (r.name === n)
                            return {
                                type: 'channelMention',
                                channelId: r.id,
                                children: [{ text: '' }]
                            };
                    }
                return null;
            })(e, t);
    }
    return null;
}
function E(e, t, n, r) {
    let i = g(e, t, n, r);
    return null == i ? null : (0, h.VI)(i);
}
function v(e, t, n) {
    let r = f.default.getUser(n);
    return null != r && ((n === m.fL && 'clyde' === e.toLowerCase()) || (r.username === e && r.discriminator === (null != t ? t : '0')));
}
