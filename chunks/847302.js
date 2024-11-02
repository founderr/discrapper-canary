n.d(t, {
    Gg: function () {
        return S;
    },
    KH: function () {
        return E;
    },
    ZP: function () {
        return g;
    }
}),
    n(47120),
    n(653041);
var r = n(512722),
    i = n.n(r),
    a = n(911969),
    s = n(998698),
    o = n(465343),
    l = n(53529),
    u = n(341702),
    c = n(925994),
    d = n(436660),
    f = n(887490);
let _ = /(@[^@#]+(?:#0|#\d{4}))|(@[^\s\t@#:]+)(?=[\s\t@:])|(:[a-zA-Z0-9_~]+:)|(#"(?:\ |\\\\|\\"|(?!")\w)+")|(#[^\s\t@#:]+(?=[\s\t@#:]))/g,
    h = new Set(['emoji', 'customEmoji', 'textMention', 'userMention', 'roleMention', 'channelMention', 'staticRouteLink', 'soundboard', 'timestamp']),
    p = new Set(['line', 'blockQuote']),
    m = new Set(['applicationCommandOption']);
function g(e, t, n) {
    let { isInline: r, isVoid: i, onChange: a } = e;
    (e.isVoid = (e) => !!h.has(e.type) || i(e)), (e.isInline = (e) => !!h.has(e.type) || r(e));
    let s = null,
        o = !0;
    return (
        (e.onChange = () => {
            let r = f.bN.richValue(e);
            (r !== s || e.previewMarkdown !== o) &&
                (l.T.withMergedEntry(e, () => {
                    f.bN.withoutNormalizing(e, () => E(e, t, n));
                }),
                (s = r),
                (o = e.previewMarkdown)),
                a();
        }),
        e
    );
}
function E(e, t, n) {
    let r = f.bN.areStylesDisabled(e);
    for (let i of f.bN.blocks(e))
        if (p.has(i[0].type)) r ? I(e, i, !0, null) : v(e, i, t, n);
        else {
            let [a, s] = i;
            for (let i = a.children.length - 1; i >= 0; i--) {
                let o = a.children[i];
                if (m.has(o.type)) {
                    let a = [o, f.C0.child(s, i)];
                    r ? I(e, a, !0, null) : v(e, a, t, n);
                }
            }
        }
}
function v(e, t, n, r) {
    var a;
    let s = 'line' === t[0].type && (null === (a = t[0].codeBlockState) || void 0 === a ? void 0 : a.isInCodeBlock) === !0,
        l = f.q.markdown(t[0], n);
    I(e, t, s, l) && ((t = f.q.updateElement(e, t)), (l = f.q.markdown(t[0], n))),
        !s &&
            (S(e, t, r, l) && ((t = f.q.updateElement(e, t)), (l = f.q.markdown(t[0], n))),
            (function (e, t, n, r, a) {
                let [s, l] = t,
                    u = !1;
                for (let c = s.children.length - 1; c >= 0; c--) {
                    let h;
                    let p = s.children[c];
                    if (!f.LC.isText(p)) continue;
                    let m = f.C0.child(l, c),
                        g = [];
                    for (_.lastIndex = 0; null != (h = _.exec(p.text)); ) {
                        if (0 !== h.index && null == p.text.charAt(h.index - 1).match(/(\t|\s)/)) {
                            _.lastIndex = h.index + 1;
                            continue;
                        }
                        if (
                            T(
                                e,
                                l,
                                {
                                    path: m,
                                    offset: h.index
                                },
                                a
                            )
                        )
                            continue;
                        let i = (0, o.i)(h[0], n, r);
                        null != i && b(r, t[0], i)
                            ? g.push({
                                  index: h.index,
                                  length: h[0].length,
                                  node: i
                              })
                            : (_.lastIndex = h.index + 1);
                    }
                    for (let t of g.reverse())
                        (function (e, t, n, r, a) {
                            let [s, o] = t,
                                l = {
                                    path: o,
                                    offset: n
                                },
                                u = {
                                    path: o,
                                    offset: n + r
                                };
                            i()(l.offset >= 0 && l.offset <= s.text.length, 'Failed to find valid start position for raw mention replace'),
                                i()(u.offset >= 0 && u.offset <= s.text.length, 'Failed to find valid end position for raw mention replace'),
                                d.Q.textToVoid(e, a, {
                                    anchor: l,
                                    focus: u
                                });
                        })(e, [p, f.C0.child(l, c)], t.index, t.length, t.node),
                            (u = !0);
                }
            })(e, t, n, r, l));
}
function I(e, t, n, r) {
    let [i, a] = t,
        s = !1;
    for (let t = i.children.length - 1; t >= 0; t--) {
        let o = i.children[t],
            l = t < i.children.length - 1 ? i.children[t + 1] : null;
        if (f.LC.isText(o) && !n) {
            if (null == l || !e.isVoid(l)) continue;
            let n = !1,
                r = 0;
            for (;;) {
                let e = o.text.indexOf('\\', r);
                if (-1 === e) break;
                if (e === o.text.length - 1) {
                    n = !0;
                    break;
                }
                r = e + 2;
            }
            if (n) {
                let n = f.C0.child(a, t + 1);
                d.Q.voidToText(
                    e,
                    (0, c.sg)(l, {
                        mode: 'plain',
                        preventEmojiSurrogates: !0
                    }),
                    n
                ),
                    (s = !0);
            }
        } else if (e.isVoid(o)) {
            let i = f.C0.child(a, t),
                l = {
                    path: f.C0.child(i, 0),
                    offset: 0
                };
            (n || (null != r && T(e, a, l, r))) &&
                (d.Q.voidToText(
                    e,
                    (0, c.sg)(o, {
                        mode: 'plain',
                        preventEmojiSurrogates: !0
                    }),
                    i
                ),
                (s = !0));
        }
    }
    return s;
}
function S(e, t, n, r) {
    let i = t[1],
        a = !1,
        s = [...r.entries].reverse();
    for (let o = 0; o < s.length; o++) {
        let l;
        let c = s[o],
            f = s[o + 1];
        if (null != f && f.text.endsWith('\\') && c.start === f.start + f.text.length) continue;
        switch (c.attributes[0]) {
            case 'emoji':
                l = {
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
                l = {
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
                l = {
                    type: 'textMention',
                    name: c.data.text,
                    children: [{ text: '' }]
                };
                break;
            case 'mention':
                l = {
                    type: 'userMention',
                    userId: c.data.id,
                    children: [{ text: '' }]
                };
                break;
            case 'roleMention':
                l = {
                    type: 'roleMention',
                    roleId: c.data.id,
                    children: [{ text: '' }]
                };
                break;
            case 'channelMention':
                l = {
                    type: 'channelMention',
                    channelId: c.data.id,
                    children: [{ text: '' }]
                };
                break;
            case 'staticRouteLink':
                l = {
                    type: 'staticRouteLink',
                    id: c.data.id,
                    itemId: c.data.itemId,
                    children: [{ text: '' }]
                };
                break;
            case 'soundboard':
                l = {
                    type: 'soundboard',
                    soundId: c.data.id,
                    children: [{ text: '' }]
                };
                break;
            case 'timestamp':
                l = {
                    type: 'timestamp',
                    parsed: c.data,
                    children: [{ text: '' }]
                };
                break;
            default:
                continue;
        }
        if (!b(n, t[0], l)) continue;
        let _ = (0, u.t)(e, i, r.serializedChildren, c.start),
            h = (0, u.t)(e, i, r.serializedChildren, c.start + c.text.length);
        d.Q.textToVoid(e, l, {
            anchor: _,
            focus: h
        }),
            (a = !0);
    }
    return a;
}
function T(e, t, n, r) {
    let i = 0;
    for (let [r, a] of f.bN.nodes(e, {
        at: {
            anchor: f.bN.start(e, t),
            focus: n
        },
        mode: 'lowest'
    }))
        f.LC.isText(r) ? (f.C0.equals(a, n.path) ? (i += n.offset) : (i += r.text.length)) : (i += 1);
    for (let e of r.entries) {
        if (!e.attributes.includes('codeBlockText') && !e.attributes.includes('inlineCode')) continue;
        let t = e.start,
            n = e.start + e.text.length;
        if (t <= i && n >= i) return !0;
    }
    return !1;
}
function b(e, t, n) {
    if ('applicationCommandOption' !== t.type) return !0;
    switch (t.optionType) {
        case a.jw.CHANNEL:
            return 'channelMention' === n.type;
        case a.jw.ROLE:
            return 'roleMention' === n.type || ('textMention' === n.type && '@everyone' === n.name);
        case a.jw.USER:
            return 'userMention' === n.type;
        case a.jw.MENTIONABLE:
            return 'roleMention' === n.type || 'userMention' === n.type || ('textMention' === n.type && '@everyone' === n.name);
        case a.jw.STRING: {
            let n = null != e ? s.Z.getOption(e, t.optionName) : null;
            return (null == n ? void 0 : n.choices) == null && (null == n ? void 0 : n.autocomplete) !== !0;
        }
        default:
            return !1;
    }
}
