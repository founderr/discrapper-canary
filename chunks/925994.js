n.d(t, {
    sg: function () {
        return g;
    },
    sk: function () {
        return I;
    }
});
var r = n(47120);
var i = n(653041);
var a = n(757143);
var o = n(512722),
    s = n.n(o),
    l = n(933557),
    u = n(660199),
    c = n(763296),
    d = n(592125),
    _ = n(430824),
    E = n(699516),
    f = n(914010),
    h = n(594174),
    p = n(51144),
    m = n(887490);
function I(e, t) {
    let { mode: n, ignoreTrailingEmptyNodes: r, preventEmojiSurrogates: i } = null != t ? t : {},
        [a, o] = (null == t ? void 0 : t.range) != null ? m.M8.edges(t.range) : [void 0, void 0];
    return T(e, {
        mode: n,
        start: a,
        end: o,
        ignoreTrailingEmptyNodes: r,
        preventEmojiSurrogates: i
    });
}
function T(e, t) {
    var n, r;
    let { mode: i, start: a, end: o, separator: s, ignoreEmptyNodes: l, ignoreTrailingEmptyNodes: u, preventEmojiSurrogates: c } = null != t ? t : {},
        d = e.length > 0 && !m.LC.isText(e[0]);
    null == s && (s = d ? '\n' : '');
    let _ = null !== (n = null == a ? void 0 : a.path[0]) && void 0 !== n ? n : 0,
        E = null !== (r = null == o ? void 0 : o.path[0]) && void 0 !== r ? r : e.length - 1;
    if (u)
        for (let t = E; t >= _; t--) {
            let n = e[t];
            if (m.LC.isText(n)) {
                if (n.text.length > 0) {
                    E = t;
                    break;
                }
            } else if (!m.q.isEmpty(n)) {
                E = t;
                break;
            }
            if (t === _) return '';
        }
    let f = _ > 0 && m.aj.isType(e[_ - 1], 'blockQuote'),
        h = m.aj.isType(e[_], 'blockQuote'),
        p = m.aj.isType(e[E], 'blockQuote'),
        I = [];
    for (let t = _; t <= E; t++) {
        let n = e[t];
        if (l && m.LC.isText(n) && 0 === n.text.length) continue;
        let r =
                null != a && t === _
                    ? {
                          path: a.path.slice(1),
                          offset: a.offset
                      }
                    : void 0,
            s =
                null != o && t === E
                    ? {
                          path: o.path.slice(1),
                          offset: o.offset
                      }
                    : void 0,
            u = g(n, {
                mode: i,
                start: r,
                end: s,
                allowBlockQuotePrefix: null == a || null == o || (!f && (!h || p)),
                preventEmojiSurrogates: c
            });
        (!l || u.length > 0) && I.push(u);
    }
    return I.join(s);
}
function g(e, t) {
    let { mode: n, start: r, allowBlockQuotePrefix: i = !1, preventEmojiSurrogates: a = !1 } = null != t ? t : {};
    if (m.LC.isText(e)) return S(e.text, t);
    switch (e.type) {
        case 'line':
        case 'testInline':
            return T(e.children, t);
        case 'testInlineVoid':
            return '';
        case 'blockQuote': {
            let n = T(e.children, t),
                a = null != r && 1 === r.path.length && 0 === r.path[0] && 0 === r.offset;
            if (i && (null == r || a)) return '> '.concat(n);
            return n;
        }
        case 'emoji': {
            let t = e.emoji;
            if (!a && null != t.surrogate) return t.surrogate;
            return t.name;
        }
        case 'customEmoji': {
            let t = e.emoji;
            if ('raw' === n) {
                let e = t.animated ? 'a' : '',
                    n = t.name.replace(/:/g, '').split('~')[0];
                return '<'.concat(e, ':').concat(n, ':').concat(t.emojiId, '>');
            }
            return t.name;
        }
        case 'textMention':
            return e.name;
        case 'channelMention': {
            let t = '<#'.concat(e.channelId, '>');
            if ('raw' === n) return t;
            let r = d.Z.getChannel(e.channelId);
            if (null == r) return t;
            return (0, l.F6)(r, h.default, E.Z, !0, !0);
        }
        case 'soundboard': {
            let t = '<sound:'.concat(e.soundId, '>');
            if ('raw' === n) return t;
            let r = c.Z.getSoundById(e.soundId);
            if (null == r) return t;
            return r.name;
        }
        case 'staticRouteLink':
            return null != e.itemId ? '<id:'.concat(e.id, ':').concat(e.itemId, '>') : '<id:'.concat(e.id, '>');
        case 'roleMention': {
            let t = '<@&'.concat(e.roleId, '>');
            if ('raw' === n) return t;
            let r = f.Z.getGuildId(),
                i = null != r ? _.Z.getRole(r, e.roleId) : void 0;
            if (null == i) return t;
            return '@'.concat(i.name);
        }
        case 'userMention': {
            let t = '<@'.concat(e.userId, '>');
            if ('raw' === n) return t;
            let r = h.default.getUser(e.userId);
            if (null == r) return t;
            return '@'.concat(p.ZP.getUserTag(r, { decoration: 'never' }));
        }
        case 'commandMention':
            return '</'.concat(e.commandName, ':').concat(e.commandId, '>');
        case 'timestamp':
            return (0, u.He)(e.parsed.timestamp, e.parsed.format);
        case 'applicationCommand':
            return T(e.children, {
                ...t,
                separator: ' ',
                ignoreEmptyNodes: !0
            });
        case 'applicationCommandOption': {
            let n = T(e.children, t);
            if (null == r) return ''.concat(e.optionDisplayName, ':').concat(n);
            return n;
        }
    }
}
function S(e, t) {
    var n, r;
    let { start: i, end: a } = null != t ? t : {};
    return s()(null == i || 0 === i.path.length, 'Invalid start provided to serializeText'), s()(null == a || 0 === a.path.length, 'Invalid end provided to serializeText'), e.substring(null !== (n = null == i ? void 0 : i.offset) && void 0 !== n ? n : 0, null !== (r = null == a ? void 0 : a.offset) && void 0 !== r ? r : e.length);
}
