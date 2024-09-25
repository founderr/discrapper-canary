n.d(t, {
    Gg: function () {
        return v;
    },
    KH: function () {
        return g;
    },
    ZP: function () {
        return T;
    }
});
var r = n(47120);
var i = n(653041);
var a = n(512722),
    o = n.n(a),
    s = n(911969),
    l = n(998698),
    u = n(465343),
    c = n(53529),
    d = n(341702),
    _ = n(925994),
    E = n(436660),
    f = n(887490);
let h = /(@[^@#]+(?:#0|#\d{4}))|(@[^\s\t@#:]+)(?=[\s\t@:])|(:[a-zA-Z0-9_~]+:)|(#"(?:\ |\\\\|\\"|(?!")\w)+")|(#[^\s\t@#:]+(?=[\s\t@#:]))/g,
    p = new Set(['emoji', 'customEmoji', 'textMention', 'userMention', 'roleMention', 'channelMention', 'staticRouteLink', 'soundboard', 'timestamp']),
    m = new Set(['line', 'blockQuote']),
    I = new Set(['applicationCommandOption']);
function T(e, t, n) {
    let { isInline: r, isVoid: i, onChange: a } = e;
    (e.isVoid = (e) => !!p.has(e.type) || i(e)), (e.isInline = (e) => !!p.has(e.type) || r(e));
    let o = null,
        s = !0;
    return (
        (e.onChange = () => {
            let r = f.bN.richValue(e);
            (r !== o || e.previewMarkdown !== s) &&
                (c.T.withMergedEntry(e, () => {
                    f.bN.withoutNormalizing(e, () => g(e, t, n));
                }),
                (o = r),
                (s = e.previewMarkdown)),
                a();
        }),
        e
    );
}
function g(e, t, n) {
    let r = f.bN.areStylesDisabled(e);
    for (let i of f.bN.blocks(e))
        if (m.has(i[0].type)) r ? A(e, i, !0, null) : S(e, i, t, n);
        else {
            let [a, o] = i;
            for (let i = a.children.length - 1; i >= 0; i--) {
                let s = a.children[i];
                if (I.has(s.type)) {
                    let a = [s, f.C0.child(o, i)];
                    r ? A(e, a, !0, null) : S(e, a, t, n);
                }
            }
        }
}
function S(e, t, n, r) {
    var i;
    let a = 'line' === t[0].type && (null === (i = t[0].codeBlockState) || void 0 === i ? void 0 : i.isInCodeBlock) === !0,
        o = f.q.markdown(t[0], n);
    A(e, t, a, o) && ((t = f.q.updateElement(e, t)), (o = f.q.markdown(t[0], n))), !a && (v(e, t, r, o) && ((t = f.q.updateElement(e, t)), (o = f.q.markdown(t[0], n))), N(e, t, n, r, o));
}
function A(e, t, n, r) {
    let [i, a] = t,
        o = !1;
    for (let t = i.children.length - 1; t >= 0; t--) {
        let s = i.children[t],
            l = t < i.children.length - 1 ? i.children[t + 1] : null;
        if (f.LC.isText(s) && !n) {
            if (null == l || !e.isVoid(l)) continue;
            let n = !1,
                r = 0;
            for (;;) {
                let e = s.text.indexOf('\\', r);
                if (-1 === e) break;
                if (e === s.text.length - 1) {
                    n = !0;
                    break;
                }
                r = e + 2;
            }
            if (n) {
                let n = f.C0.child(a, t + 1);
                E.Q.voidToText(
                    e,
                    (0, _.sg)(l, {
                        mode: 'plain',
                        preventEmojiSurrogates: !0
                    }),
                    n
                ),
                    (o = !0);
            }
        } else if (e.isVoid(s)) {
            let i = f.C0.child(a, t),
                l = {
                    path: f.C0.child(i, 0),
                    offset: 0
                };
            (n || (null != r && R(e, a, l, r))) &&
                (E.Q.voidToText(
                    e,
                    (0, _.sg)(s, {
                        mode: 'plain',
                        preventEmojiSurrogates: !0
                    }),
                    i
                ),
                (o = !0));
        }
    }
    return o;
}
function v(e, t, n, r) {
    let i = t[1],
        a = !1,
        o = [...r.entries].reverse();
    for (let s = 0; s < o.length; s++) {
        let l;
        let u = o[s],
            c = o[s + 1];
        if (null != c && c.text.endsWith('\\') && u.start === c.start + c.text.length) continue;
        switch (u.attributes[0]) {
            case 'emoji':
                l = {
                    type: 'emoji',
                    emoji: {
                        name: u.data.name,
                        src: u.data.src,
                        surrogate: u.data.surrogate,
                        jumboable: !0 === u.data.jumboable
                    },
                    children: [{ text: '' }]
                };
                break;
            case 'customEmoji':
                l = {
                    type: 'customEmoji',
                    emoji: {
                        emojiId: u.data.emojiId,
                        name: u.data.name,
                        animated: u.data.animated,
                        jumboable: !0 === u.data.jumboable
                    },
                    children: [{ text: '' }]
                };
                break;
            case 'textMention':
                l = {
                    type: 'textMention',
                    name: u.data.text,
                    children: [{ text: '' }]
                };
                break;
            case 'mention':
                l = {
                    type: 'userMention',
                    userId: u.data.id,
                    children: [{ text: '' }]
                };
                break;
            case 'roleMention':
                l = {
                    type: 'roleMention',
                    roleId: u.data.id,
                    children: [{ text: '' }]
                };
                break;
            case 'channelMention':
                l = {
                    type: 'channelMention',
                    channelId: u.data.id,
                    children: [{ text: '' }]
                };
                break;
            case 'staticRouteLink':
                l = {
                    type: 'staticRouteLink',
                    id: u.data.id,
                    itemId: u.data.itemId,
                    children: [{ text: '' }]
                };
                break;
            case 'soundboard':
                l = {
                    type: 'soundboard',
                    soundId: u.data.id,
                    children: [{ text: '' }]
                };
                break;
            case 'timestamp':
                l = {
                    type: 'timestamp',
                    parsed: u.data,
                    children: [{ text: '' }]
                };
                break;
            default:
                continue;
        }
        if (!C(n, t[0], l)) continue;
        let _ = (0, d.t)(e, i, r.serializedChildren, u.start),
            f = (0, d.t)(e, i, r.serializedChildren, u.start + u.text.length);
        E.Q.textToVoid(e, l, {
            anchor: _,
            focus: f
        }),
            (a = !0);
    }
    return a;
}
function N(e, t, n, r, i) {
    let [a, o] = t,
        s = !1;
    for (let l = a.children.length - 1; l >= 0; l--) {
        let c;
        let d = a.children[l];
        if (!f.LC.isText(d)) continue;
        let _ = f.C0.child(o, l),
            E = [];
        for (h.lastIndex = 0; null != (c = h.exec(d.text)); ) {
            if (0 !== c.index && null == d.text.charAt(c.index - 1).match(/(\t|\s)/)) {
                h.lastIndex = c.index + 1;
                continue;
            }
            if (
                R(
                    e,
                    o,
                    {
                        path: _,
                        offset: c.index
                    },
                    i
                )
            )
                continue;
            let a = (0, u.i)(c[0], n, r);
            null != a && C(r, t[0], a)
                ? E.push({
                      index: c.index,
                      length: c[0].length,
                      node: a
                  })
                : (h.lastIndex = c.index + 1);
        }
        for (let t of E.reverse()) O(e, [d, f.C0.child(o, l)], t.index, t.length, t.node), (s = !0);
    }
    return s;
}
function O(e, t, n, r, i) {
    let [a, s] = t,
        l = {
            path: s,
            offset: n
        },
        u = {
            path: s,
            offset: n + r
        };
    o()(l.offset >= 0 && l.offset <= a.text.length, 'Failed to find valid start position for raw mention replace'),
        o()(u.offset >= 0 && u.offset <= a.text.length, 'Failed to find valid end position for raw mention replace'),
        E.Q.textToVoid(e, i, {
            anchor: l,
            focus: u
        });
}
function R(e, t, n, r) {
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
function C(e, t, n) {
    if ('applicationCommandOption' !== t.type) return !0;
    switch (t.optionType) {
        case s.jw.CHANNEL:
            return 'channelMention' === n.type;
        case s.jw.ROLE:
            return 'roleMention' === n.type || ('textMention' === n.type && '@everyone' === n.name);
        case s.jw.USER:
            return 'userMention' === n.type;
        case s.jw.MENTIONABLE:
            return 'roleMention' === n.type || 'userMention' === n.type || ('textMention' === n.type && '@everyone' === n.name);
        case s.jw.STRING: {
            let n = null != e ? l.Z.getOption(e, t.optionName) : null;
            return (null == n ? void 0 : n.choices) == null && (null == n ? void 0 : n.autocomplete) !== !0;
        }
        default:
            return !1;
    }
}
