r.d(n, {
    sg: function () {
        return T;
    },
    sk: function () {
        return v;
    }
});
var i = r(47120);
var a = r(653041);
var s = r(757143);
var o = r(512722),
    l = r.n(o),
    u = r(933557),
    c = r(660199),
    d = r(763296),
    f = r(592125),
    _ = r(430824),
    h = r(699516),
    p = r(914010),
    m = r(594174),
    g = r(51144),
    E = r(887490);
function v(e, n) {
    let { mode: r, ignoreTrailingEmptyNodes: i, preventEmojiSurrogates: a } = null != n ? n : {},
        [s, o] = (null == n ? void 0 : n.range) != null ? E.M8.edges(n.range) : [void 0, void 0];
    return I(e, {
        mode: r,
        start: s,
        end: o,
        ignoreTrailingEmptyNodes: i,
        preventEmojiSurrogates: a
    });
}
function I(e, n) {
    var r, i;
    let { mode: a, start: s, end: o, separator: l, ignoreEmptyNodes: u, ignoreTrailingEmptyNodes: c, preventEmojiSurrogates: d } = null != n ? n : {},
        f = e.length > 0 && !E.LC.isText(e[0]);
    null == l && (l = f ? '\n' : '');
    let _ = null !== (r = null == s ? void 0 : s.path[0]) && void 0 !== r ? r : 0,
        h = null !== (i = null == o ? void 0 : o.path[0]) && void 0 !== i ? i : e.length - 1;
    if (c)
        for (let n = h; n >= _; n--) {
            let r = e[n];
            if (E.LC.isText(r)) {
                if (r.text.length > 0) {
                    h = n;
                    break;
                }
            } else if (!E.q.isEmpty(r)) {
                h = n;
                break;
            }
            if (n === _) return '';
        }
    let p = _ > 0 && E.aj.isType(e[_ - 1], 'blockQuote'),
        m = E.aj.isType(e[_], 'blockQuote'),
        g = E.aj.isType(e[h], 'blockQuote'),
        v = [];
    for (let n = _; n <= h; n++) {
        let r = e[n];
        if (u && E.LC.isText(r) && 0 === r.text.length) continue;
        let i =
                null != s && n === _
                    ? {
                          path: s.path.slice(1),
                          offset: s.offset
                      }
                    : void 0,
            l =
                null != o && n === h
                    ? {
                          path: o.path.slice(1),
                          offset: o.offset
                      }
                    : void 0,
            c = T(r, {
                mode: a,
                start: i,
                end: l,
                allowBlockQuotePrefix: null == s || null == o || (!p && (!m || g)),
                preventEmojiSurrogates: d
            });
        (!u || c.length > 0) && v.push(c);
    }
    return v.join(l);
}
function T(e, n) {
    let { mode: r, start: i, allowBlockQuotePrefix: a = !1, preventEmojiSurrogates: s = !1 } = null != n ? n : {};
    if (E.LC.isText(e)) return b(e.text, n);
    switch (e.type) {
        case 'line':
        case 'testInline':
            return I(e.children, n);
        case 'testInlineVoid':
            return '';
        case 'blockQuote': {
            let r = I(e.children, n),
                s = null != i && 1 === i.path.length && 0 === i.path[0] && 0 === i.offset;
            if (a && (null == i || s)) return '> '.concat(r);
            return r;
        }
        case 'emoji': {
            let n = e.emoji;
            if (!s && null != n.surrogate) return n.surrogate;
            return n.name;
        }
        case 'customEmoji': {
            let n = e.emoji;
            if ('raw' === r) {
                let e = n.animated ? 'a' : '',
                    r = n.name.replace(/:/g, '').split('~')[0];
                return '<'.concat(e, ':').concat(r, ':').concat(n.emojiId, '>');
            }
            return n.name;
        }
        case 'textMention':
            return e.name;
        case 'channelMention': {
            let n = '<#'.concat(e.channelId, '>');
            if ('raw' === r) return n;
            let i = f.Z.getChannel(e.channelId);
            if (null == i) return n;
            return (0, u.F6)(i, m.default, h.Z, !0, !0);
        }
        case 'soundboard': {
            let n = '<sound:'.concat(e.guildId, ':').concat(e.soundId, '>');
            if ('raw' === r) return n;
            let i = d.Z.getSoundById(e.soundId);
            if (null == i) return n;
            return i.name;
        }
        case 'staticRouteLink':
            return null != e.itemId ? '<id:'.concat(e.id, ':').concat(e.itemId, '>') : '<id:'.concat(e.id, '>');
        case 'roleMention': {
            let n = '<@&'.concat(e.roleId, '>');
            if ('raw' === r) return n;
            let i = p.Z.getGuildId(),
                a = null != i ? _.Z.getRole(i, e.roleId) : void 0;
            if (null == a) return n;
            return '@'.concat(a.name);
        }
        case 'userMention': {
            let n = '<@'.concat(e.userId, '>');
            if ('raw' === r) return n;
            let i = m.default.getUser(e.userId);
            if (null == i) return n;
            return '@'.concat(g.ZP.getUserTag(i, { decoration: 'never' }));
        }
        case 'commandMention':
            return '</'.concat(e.commandName, ':').concat(e.commandId, '>');
        case 'timestamp':
            return (0, c.He)(e.parsed.timestamp, e.parsed.format);
        case 'applicationCommand':
            return I(e.children, {
                ...n,
                separator: ' ',
                ignoreEmptyNodes: !0
            });
        case 'applicationCommandOption': {
            let r = I(e.children, n);
            if (null == i) return ''.concat(e.optionDisplayName, ':').concat(r);
            return r;
        }
    }
}
function b(e, n) {
    var r, i;
    let { start: a, end: s } = null != n ? n : {};
    return l()(null == a || 0 === a.path.length, 'Invalid start provided to serializeText'), l()(null == s || 0 === s.path.length, 'Invalid end provided to serializeText'), e.substring(null !== (r = null == a ? void 0 : a.offset) && void 0 !== r ? r : 0, null !== (i = null == s ? void 0 : s.offset) && void 0 !== i ? i : e.length);
}
