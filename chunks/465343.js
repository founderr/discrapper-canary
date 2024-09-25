n.d(t, {
    K: function () {
        return T;
    },
    i: function () {
        return I;
    }
});
var r = n(47120);
var i = n(933557),
    a = n(797610),
    o = n(339085),
    s = n(633302),
    l = n(601070),
    u = n(592125),
    c = n(984933),
    d = n(271383),
    _ = n(430824),
    E = n(594174),
    f = n(483360),
    h = n(709054),
    p = n(752305),
    m = n(377668);
function I(e, t, n, r) {
    let { allowUsers: i = !0, allowRoles: a = !0 } = null != r ? r : {};
    switch (e[0]) {
        case '@':
            return g(e, t, n, i, a);
        case ':':
            return v(e, t);
        case '#':
            return A(e, t);
    }
    return null;
}
function T(e, t, n, r) {
    let i = I(e, t, n, r);
    return null == i ? null : (0, p.VI)(i);
}
function g(e, t, n, r, i) {
    let [o, s] = e.slice(1).split('#', 2),
        l = null != t ? _.Z.getGuild(t) : null,
        c = (0, a.M9)(l);
    if (i && null == s && null != l) {
        for (let e of Object.values(_.Z.getRoles(l.id)))
            if (o === e.name)
                return {
                    type: 'roleMention',
                    roleId: e.id,
                    children: [{ text: '' }]
                };
    }
    if (r) {
        let e = null != n ? u.Z.getChannel(n) : null;
        if (null != e) {
            if (e.isPrivate()) {
                for (let t of e.recipients)
                    if (S(o, s, t))
                        return {
                            type: 'userMention',
                            userId: t,
                            children: [{ text: '' }]
                        };
            } else {
                for (let { userId: e } of d.ZP.getMembers(t))
                    if (S(o, s, e))
                        return {
                            type: 'userMention',
                            userId: e,
                            children: [{ text: '' }]
                        };
                if (c && S(o, s, m.fL))
                    return {
                        type: 'userMention',
                        userId: m.fL,
                        children: [{ text: '' }]
                    };
            }
        }
    }
    return null;
}
function S(e, t, n) {
    let r = E.default.getUser(n);
    return null != r && ((n === m.fL && 'clyde' === e.toLowerCase()) || (r.username === e && r.discriminator === (null != t ? t : '0')));
}
function A(e, t) {
    let n;
    if (null == t) return null;
    n = e.length > 3 && '"' === e[1] && '"' === e[e.length - 1] ? (0, i.mA)(e.slice(2, e.length - 1)) : e.slice(1);
    let r = c.ZP.getTextChannelNameDisambiguations(t);
    for (let e of h.default.keys(r))
        if (r[e].name === n)
            return {
                type: 'channelMention',
                channelId: e,
                children: [{ text: '' }]
            };
    for (let e of f.k1) {
        if (e !== c.sH) {
            for (let { channel: r } of c.ZP.getChannels(t)[e])
                if (r.name === n)
                    return {
                        type: 'channelMention',
                        channelId: r.id,
                        children: [{ text: '' }]
                    };
        }
    }
    let a = l.Z.getActiveJoinedThreadsForGuild(t);
    for (let e of h.default.keys(a))
        for (let t of h.default.keys(a[e])) {
            let { channel: r } = a[e][t];
            if (r.name === n)
                return {
                    type: 'channelMention',
                    channelId: r.id,
                    children: [{ text: '' }]
                };
        }
    return null;
}
function v(e, t) {
    let n = s.ZP.EMOJI_NAME_RE.exec(e);
    if (null == n) return null;
    let r = n[1],
        i = o.ZP.getDisambiguatedEmojiContext(t).getCustomEmoji();
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
}
