n.d(t, {
    L6: function () {
        return w;
    },
    ZP: function () {
        return A;
    },
    iF: function () {
        return U;
    }
});
var r = n(47120);
var i = n(411104);
var a = n(653041);
var o = n(757143);
var s = n(920478),
    l = n(31775),
    u = n.n(l),
    c = n(70956),
    d = n(364964),
    _ = n(53529),
    E = n(925994),
    f = n(436660),
    h = n(887490),
    p = n(42530);
let m = new Set(['line']),
    I = s.Z.listLanguages(),
    T = {};
for (let e of I) {
    e = e.toLowerCase();
    let t = s.Z.getLanguage(e);
    if (null == t) continue;
    let n = t.aliases;
    if (((T[e] = e), null != n)) for (let t of n) T[t.toLowerCase()] = e;
}
let g = /^[a-z0-9_+\-.#]+$/,
    S = /^[a-z0-9_+\-.#]+$/i;
for (let e in T) if (null == e.match(g)) throw Error('Language name does not match regex: '.concat(e));
function A(e) {
    let { onChange: t } = e,
        n = null;
    return (
        (e.onChange = () => {
            h.bN.richValue(e) !== n &&
                (_.T.withMergedEntry(e, () => {
                    h.bN.withoutNormalizing(e, () => v(e));
                }),
                (n = h.bN.richValue(e))),
                t();
        }),
        e
    );
}
function v(e) {
    let t = O(e);
    C(e, t);
}
let N = /(?:<span class="([^"]*)">)|(?:<\/span>)/g;
function O(e) {
    let t = [],
        n = null;
    for (let r of h.bN.blocks(e)) {
        let i = null != n && (n.isInCodeBlock || n.opensCodeBlock),
            a = null != n && (n.isStyledCodeBlockLine || n.opensCodeBlockOnOwnLine);
        (n = R(e, r, i, a, null != n && (n.opensCodeBlock || !n.closesCodeBlock) ? n.lang : null)), t.push(n);
    }
    return L(t), t;
}
function R(e, t, n, r, i) {
    var a;
    let o = P(t),
        s = o[0],
        l = o[o.length - 1],
        u = null;
    if (null != l) {
        let [t] = h.bN.node(e, l.path);
        u = t.text.substring(l.offset + 3);
    }
    let c = n && null != s,
        d = n && 0 === o.length,
        _ = r && 0 === o.length,
        E = (c ? o.slice(1) : o).length % 2 == 1,
        f = E && (null == u || '' === u || null != u.match(S)),
        p = f && null != u && null !== (a = T[u.toLowerCase()]) && void 0 !== a ? a : null;
    return {
        blockEntry: t,
        wasInCodeBlock: n,
        isInCodeBlock: d,
        isStyledCodeBlockLine: _,
        lang: E || c ? p : i,
        hljsTypes: null,
        closesCodeBlock: c,
        opensCodeBlock: E,
        opensCodeBlockOnOwnLine: f
    };
}
function C(e, t) {
    for (let n of t) {
        let [t, r] = n.blockEntry,
            i = y(n);
        (null == t ? void 0 : t.codeBlockState) != i && f.Q.setNodes(e, { codeBlockState: i }, { at: r });
    }
}
function y(e) {
    return e.isStyledCodeBlockLine || e.wasInCodeBlock
        ? {
              lang: e.lang,
              wasInCodeBlock: e.wasInCodeBlock,
              isInCodeBlock: e.isInCodeBlock,
              isStyledCodeBlockLine: e.isStyledCodeBlockLine,
              hljsTypes: e.hljsTypes
          }
        : null;
}
function L(e) {
    let t = [],
        n = !1;
    for (let r of e) {
        let i = r === e[e.length - 1];
        if ((r.closesCodeBlock || i) && (n && i && !r.closesCodeBlock && t.push(r), (n = !1), t.length > 0)) {
            let e = t.map((e) => (0, E.sg)(e.blockEntry[0])).join('\n'),
                n = t[0].lang;
            if (null != n && null != s.Z.getLanguage(n)) {
                let r = M(e, n);
                if (null != r && r.length === t.length) {
                    let e = [];
                    for (let n = 0; n < t.length; n++) {
                        let i;
                        let a = r[n]
                                .replace(/&amp;/g, '&')
                                .replace(/&lt;/g, '<')
                                .replace(/&gt;/g, '>')
                                .replace(/&quot;/g, '"')
                                .replace(/&#x27;/g, "'"),
                            o = [],
                            s = 0,
                            l = 0;
                        for (; null != (i = N.exec(a)); ) {
                            let t = i.index + i[0].length,
                                n = i.index - l;
                            i.index > l &&
                                (e.length > 0 &&
                                    o.push({
                                        types: [...e],
                                        start: s,
                                        end: s + n
                                    }),
                                (s += n)),
                                '</span>' === i[0] ? e.pop() : e.push(i[1]),
                                (l = t);
                        }
                        if (e.length > 0) {
                            let t = a.length - l;
                            o.push({
                                types: [...e],
                                start: s,
                                end: s + t
                            });
                        }
                        t[n].hljsTypes = o;
                    }
                } else for (let e = 0; e < t.length; e++) t[e].hljsTypes = null;
            }
            t = [];
        }
        n && t.push(r), r.opensCodeBlock && (n = !0);
    }
}
let b = {
        max: 1 / 0,
        maxAge: 1 * c.Z.Millis.MINUTE,
        updateAgeOnGet: !0
    },
    D = new (u())(b);
function M(e, t) {
    let n = ''.concat(e, '-').concat(t),
        r = D.get(n);
    if (null != r) return r;
    let i = d.default.highlight(t, e, !1);
    if (null == i || i.illegal) return null;
    let a = i.value.split('\n');
    return D.set(n, a), a;
}
function P(e) {
    let t;
    let [n, r] = e;
    if (!m.has(n.type)) return [];
    let i = [],
        a = /\\|```/g;
    for (let e = 0; e < n.children.length; e++) {
        let o = n.children[e];
        if (h.LC.isText(o))
            for (a.lastIndex = 0; null != (t = a.exec(o.text)); ) {
                if ('\\' === t[0]) {
                    a.lastIndex += 1;
                    continue;
                }
                i.push({
                    path: h.C0.child(r, e),
                    offset: t.index
                });
            }
    }
    return i;
}
function U(e, t) {
    let n = 0;
    for (let i of h.bN.nodes(e, {
        at: {
            anchor: {
                path: p.u9,
                offset: 0
            },
            focus: t
        },
        mode: 'lowest',
        match: (e) => h.LC.isText(e)
    })) {
        var r;
        let e = i[0].text;
        h.C0.equals(i[1], t.path) && (e = e.substring(0, t.offset));
        let a = e.match(/```/g);
        n += null !== (r = null == a ? void 0 : a.length) && void 0 !== r ? r : 0;
    }
    return n % 2 != 0;
}
function w(e) {
    if (null == e.selection) return !1;
    let t = h.M8.start(e.selection);
    return U(e, t);
}
