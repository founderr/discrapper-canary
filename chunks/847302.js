r.d(n, {
    Gg: function () {
        return S;
    },
    KH: function () {
        return T;
    },
    ZP: function () {
        return I;
    }
});
var i = r(47120);
var a = r(653041);
var s = r(512722),
    o = r.n(s),
    l = r(911969),
    u = r(998698),
    c = r(465343),
    d = r(53529),
    f = r(341702),
    _ = r(925994),
    h = r(436660),
    p = r(887490);
let m = /(@[^@#]+(?:#0|#\d{4}))|(@[^\s\t@#:]+)(?=[\s\t@:])|(:[a-zA-Z0-9_~]+:)|(#"(?:\ |\\\\|\\"|(?!")\w)+")|(#[^\s\t@#:]+(?=[\s\t@#:]))/g,
    g = new Set(['emoji', 'customEmoji', 'textMention', 'userMention', 'roleMention', 'channelMention', 'staticRouteLink', 'soundboard', 'timestamp']),
    E = new Set(['line', 'blockQuote']),
    v = new Set(['applicationCommandOption']);
function I(e, n, r) {
    let { isInline: i, isVoid: a, onChange: s } = e;
    (e.isVoid = (e) => !!g.has(e.type) || a(e)), (e.isInline = (e) => !!g.has(e.type) || i(e));
    let o = null,
        l = !0;
    return (
        (e.onChange = () => {
            let i = p.bN.richValue(e);
            (i !== o || e.previewMarkdown !== l) &&
                (d.T.withMergedEntry(e, () => {
                    p.bN.withoutNormalizing(e, () => T(e, n, r));
                }),
                (o = i),
                (l = e.previewMarkdown)),
                s();
        }),
        e
    );
}
function T(e, n, r) {
    let i = p.bN.areStylesDisabled(e);
    for (let a of p.bN.blocks(e))
        if (E.has(a[0].type)) i ? y(e, a, !0, null) : b(e, a, n, r);
        else {
            let [s, o] = a;
            for (let a = s.children.length - 1; a >= 0; a--) {
                let l = s.children[a];
                if (v.has(l.type)) {
                    let s = [l, p.C0.child(o, a)];
                    i ? y(e, s, !0, null) : b(e, s, n, r);
                }
            }
        }
}
function b(e, n, r, i) {
    var a;
    let s = 'line' === n[0].type && (null === (a = n[0].codeBlockState) || void 0 === a ? void 0 : a.isInCodeBlock) === !0,
        o = p.q.markdown(n[0], r);
    y(e, n, s, o) && ((n = p.q.updateElement(e, n)), (o = p.q.markdown(n[0], r))), !s && (S(e, n, i, o) && ((n = p.q.updateElement(e, n)), (o = p.q.markdown(n[0], r))), A(e, n, r, i, o));
}
function y(e, n, r, i) {
    let [a, s] = n,
        o = !1;
    for (let n = a.children.length - 1; n >= 0; n--) {
        let l = a.children[n],
            u = n < a.children.length - 1 ? a.children[n + 1] : null;
        if (p.LC.isText(l) && !r) {
            if (null == u || !e.isVoid(u)) continue;
            let r = !1,
                i = 0;
            for (;;) {
                let e = l.text.indexOf('\\', i);
                if (-1 === e) break;
                if (e === l.text.length - 1) {
                    r = !0;
                    break;
                }
                i = e + 2;
            }
            if (r) {
                let r = p.C0.child(s, n + 1);
                h.Q.voidToText(
                    e,
                    (0, _.sg)(u, {
                        mode: 'plain',
                        preventEmojiSurrogates: !0
                    }),
                    r
                ),
                    (o = !0);
            }
        } else if (e.isVoid(l)) {
            let a = p.C0.child(s, n),
                u = {
                    path: p.C0.child(a, 0),
                    offset: 0
                };
            (r || (null != i && C(e, s, u, i))) &&
                (h.Q.voidToText(
                    e,
                    (0, _.sg)(l, {
                        mode: 'plain',
                        preventEmojiSurrogates: !0
                    }),
                    a
                ),
                (o = !0));
        }
    }
    return o;
}
function S(e, n, r, i) {
    let a = n[1],
        s = !1,
        o = [...i.entries].reverse();
    for (let l = 0; l < o.length; l++) {
        let u;
        let c = o[l],
            d = o[l + 1];
        if (null != d && d.text.endsWith('\\') && c.start === d.start + d.text.length) continue;
        switch (c.attributes[0]) {
            case 'emoji':
                u = {
                    type: 'emoji',
                    emoji: {
                        name: c.data.name,
                        src: c.data.src,
                        surrogate: c.data.surrogate,
                        jumboable: !0 === c.data.jumboable
                    },
                    children: [{ text: '' }]
                };
                break;
            case 'customEmoji':
                u = {
                    type: 'customEmoji',
                    emoji: {
                        emojiId: c.data.emojiId,
                        name: c.data.name,
                        animated: c.data.animated,
                        jumboable: !0 === c.data.jumboable
                    },
                    children: [{ text: '' }]
                };
                break;
            case 'textMention':
                u = {
                    type: 'textMention',
                    name: c.data.text,
                    children: [{ text: '' }]
                };
                break;
            case 'mention':
                u = {
                    type: 'userMention',
                    userId: c.data.id,
                    children: [{ text: '' }]
                };
                break;
            case 'roleMention':
                u = {
                    type: 'roleMention',
                    roleId: c.data.id,
                    children: [{ text: '' }]
                };
                break;
            case 'channelMention':
                u = {
                    type: 'channelMention',
                    channelId: c.data.id,
                    children: [{ text: '' }]
                };
                break;
            case 'staticRouteLink':
                u = {
                    type: 'staticRouteLink',
                    id: c.data.id,
                    itemId: c.data.itemId,
                    children: [{ text: '' }]
                };
                break;
            case 'soundboard':
                u = {
                    type: 'soundboard',
                    guildId: c.data.guildId,
                    soundId: c.data.soundId,
                    children: [{ text: '' }]
                };
                break;
            case 'timestamp':
                u = {
                    type: 'timestamp',
                    parsed: c.data,
                    children: [{ text: '' }]
                };
                break;
            default:
                continue;
        }
        if (!R(r, n[0], u)) continue;
        let _ = (0, f.t)(e, a, i.serializedChildren, c.start),
            p = (0, f.t)(e, a, i.serializedChildren, c.start + c.text.length);
        h.Q.textToVoid(e, u, {
            anchor: _,
            focus: p
        }),
            (s = !0);
    }
    return s;
}
function A(e, n, r, i, a) {
    let [s, o] = n,
        l = !1;
    for (let u = s.children.length - 1; u >= 0; u--) {
        let d;
        let f = s.children[u];
        if (!p.LC.isText(f)) continue;
        let _ = p.C0.child(o, u),
            h = [];
        for (m.lastIndex = 0; null != (d = m.exec(f.text)); ) {
            if (0 !== d.index && null == f.text.charAt(d.index - 1).match(/(\t|\s)/)) {
                m.lastIndex = d.index + 1;
                continue;
            }
            if (
                C(
                    e,
                    o,
                    {
                        path: _,
                        offset: d.index
                    },
                    a
                )
            )
                continue;
            let s = (0, c.i)(d[0], r, i);
            null != s && R(i, n[0], s)
                ? h.push({
                      index: d.index,
                      length: d[0].length,
                      node: s
                  })
                : (m.lastIndex = d.index + 1);
        }
        for (let n of h.reverse()) N(e, [f, p.C0.child(o, u)], n.index, n.length, n.node), (l = !0);
    }
    return l;
}
function N(e, n, r, i, a) {
    let [s, l] = n,
        u = {
            path: l,
            offset: r
        },
        c = {
            path: l,
            offset: r + i
        };
    o()(u.offset >= 0 && u.offset <= s.text.length, 'Failed to find valid start position for raw mention replace'),
        o()(c.offset >= 0 && c.offset <= s.text.length, 'Failed to find valid end position for raw mention replace'),
        h.Q.textToVoid(e, a, {
            anchor: u,
            focus: c
        });
}
function C(e, n, r, i) {
    let a = 0;
    for (let [i, s] of p.bN.nodes(e, {
        at: {
            anchor: p.bN.start(e, n),
            focus: r
        },
        mode: 'lowest'
    }))
        p.LC.isText(i) ? (p.C0.equals(s, r.path) ? (a += r.offset) : (a += i.text.length)) : (a += 1);
    for (let e of i.entries) {
        if (!e.attributes.includes('codeBlockText') && !e.attributes.includes('inlineCode')) continue;
        let n = e.start,
            r = e.start + e.text.length;
        if (n <= a && r >= a) return !0;
    }
    return !1;
}
function R(e, n, r) {
    if ('applicationCommandOption' !== n.type) return !0;
    switch (n.optionType) {
        case l.jw.CHANNEL:
            return 'channelMention' === r.type;
        case l.jw.ROLE:
            return 'roleMention' === r.type || ('textMention' === r.type && '@everyone' === r.name);
        case l.jw.USER:
            return 'userMention' === r.type;
        case l.jw.MENTIONABLE:
            return 'roleMention' === r.type || 'userMention' === r.type || ('textMention' === r.type && '@everyone' === r.name);
        case l.jw.STRING: {
            let r = null != e ? u.Z.getOption(e, n.optionName) : null;
            return (null == r ? void 0 : r.choices) == null && (null == r ? void 0 : r.autocomplete) !== !0;
        }
        default:
            return !1;
    }
}
