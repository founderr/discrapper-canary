n.d(t, {
    sg: function () {
        return g;
    },
    sk: function () {
        return p;
    }
}),
    n(47120),
    n(653041),
    n(757143);
var r = n(512722),
    i = n.n(r),
    a = n(933557),
    s = n(660199),
    o = n(763296),
    l = n(592125),
    u = n(430824),
    c = n(699516),
    d = n(914010),
    f = n(594174),
    _ = n(51144),
    h = n(887490);
function p(e, t) {
    let { mode: n, ignoreTrailingEmptyNodes: r, preventEmojiSurrogates: i } = null != t ? t : {},
        [a, s] = (null == t ? void 0 : t.range) != null ? h.M8.edges(t.range) : [void 0, void 0];
    return m(e, {
        mode: n,
        start: a,
        end: s,
        ignoreTrailingEmptyNodes: r,
        preventEmojiSurrogates: i
    });
}
function m(e, t) {
    var n, r;
    let { mode: i, start: a, end: s, separator: o, ignoreEmptyNodes: l, ignoreTrailingEmptyNodes: u, preventEmojiSurrogates: c } = null != t ? t : {},
        d = e.length > 0 && !h.LC.isText(e[0]);
    null == o && (o = d ? '\n' : '');
    let f = null !== (n = null == a ? void 0 : a.path[0]) && void 0 !== n ? n : 0,
        _ = null !== (r = null == s ? void 0 : s.path[0]) && void 0 !== r ? r : e.length - 1;
    if (u)
        for (let t = _; t >= f; t--) {
            let n = e[t];
            if (h.LC.isText(n)) {
                if (n.text.length > 0) {
                    _ = t;
                    break;
                }
            } else if (!h.q.isEmpty(n)) {
                _ = t;
                break;
            }
            if (t === f) return '';
        }
    let p = f > 0 && h.aj.isType(e[f - 1], 'blockQuote'),
        m = h.aj.isType(e[f], 'blockQuote'),
        E = h.aj.isType(e[_], 'blockQuote'),
        v = [];
    for (let t = f; t <= _; t++) {
        let n = e[t];
        if (l && h.LC.isText(n) && 0 === n.text.length) continue;
        let r =
                null != a && t === f
                    ? {
                          path: a.path.slice(1),
                          offset: a.offset
                      }
                    : void 0,
            o =
                null != s && t === _
                    ? {
                          path: s.path.slice(1),
                          offset: s.offset
                      }
                    : void 0,
            u = g(n, {
                mode: i,
                start: r,
                end: o,
                allowBlockQuotePrefix: null == a || null == s || (!p && (!m || E)),
                preventEmojiSurrogates: c
            });
        (!l || u.length > 0) && v.push(u);
    }
    return v.join(o);
}
function g(e, t) {
    let { mode: n, start: r, allowBlockQuotePrefix: p = !1, preventEmojiSurrogates: g = !1 } = null != t ? t : {};
    if (h.LC.isText(e))
        return (function (e, t) {
            var n, r;
            let { start: a, end: s } = null != t ? t : {};
            return i()(null == a || 0 === a.path.length, 'Invalid start provided to serializeText'), i()(null == s || 0 === s.path.length, 'Invalid end provided to serializeText'), e.substring(null !== (n = null == a ? void 0 : a.offset) && void 0 !== n ? n : 0, null !== (r = null == s ? void 0 : s.offset) && void 0 !== r ? r : e.length);
        })(e.text, t);
    switch (e.type) {
        case 'line':
        case 'testInline':
            return m(e.children, t);
        case 'testInlineVoid':
            return '';
        case 'blockQuote': {
            let n = m(e.children, t),
                i = null != r && 1 === r.path.length && 0 === r.path[0] && 0 === r.offset;
            if (p && (null == r || i)) return '> '.concat(n);
            return n;
        }
        case 'emoji': {
            let t = e.emoji;
            if (!g && null != t.surrogate) return t.surrogate;
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
            let r = l.Z.getChannel(e.channelId);
            if (null == r) return t;
            return (0, a.F6)(r, f.default, c.Z, !0, !0);
        }
        case 'soundboard': {
            let t = '<sound:'.concat(e.guildId, ':').concat(e.soundId, '>');
            if ('raw' === n) return t;
            let r = o.Z.getSoundById(e.soundId);
            if (null == r) return t;
            return r.name;
        }
        case 'staticRouteLink':
            return null != e.itemId ? '<id:'.concat(e.id, ':').concat(e.itemId, '>') : '<id:'.concat(e.id, '>');
        case 'roleMention': {
            let t = '<@&'.concat(e.roleId, '>');
            if ('raw' === n) return t;
            let r = d.Z.getGuildId(),
                i = null != r ? u.Z.getRole(r, e.roleId) : void 0;
            if (null == i) return t;
            return '@'.concat(i.name);
        }
        case 'userMention': {
            let t = '<@'.concat(e.userId, '>');
            if ('raw' === n) return t;
            let r = f.default.getUser(e.userId);
            if (null == r) return t;
            return '@'.concat(_.ZP.getUserTag(r, { decoration: 'never' }));
        }
        case 'commandMention':
            return '</'.concat(e.commandName, ':').concat(e.commandId, '>');
        case 'timestamp':
            return (0, s.He)(e.parsed.timestamp, e.parsed.format);
        case 'applicationCommand':
            return m(e.children, {
                ...t,
                separator: ' ',
                ignoreEmptyNodes: !0
            });
        case 'applicationCommandOption': {
            let n = m(e.children, t);
            if (null == r) return ''.concat(e.optionDisplayName, ':').concat(n);
            return n;
        }
    }
}
