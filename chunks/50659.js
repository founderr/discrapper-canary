r.d(n, {
    U4: function () {
        return f;
    },
    hm: function () {
        return E;
    },
    py: function () {
        return g;
    }
});
var i = r(47120);
var a = r(512722),
    s = r.n(a),
    o = r(53529),
    l = r(436660),
    u = r(887490);
let c = new Set(['*', '_', '~', '`', '|']),
    d = {
        bold: '**',
        italics: '*',
        underline: '__',
        strikethrough: '~~',
        inlineCode: '`',
        spoiler: '||'
    };
function f(e, n, r) {
    if (null == e.selection)
        return {
            before: {},
            after: {}
        };
    let i = _(e, n),
        a = _(e, r);
    for (let e in i) !(e in a) && delete i[e];
    for (let e in a) !(e in i) && delete a[e];
    return {
        before: i,
        after: a
    };
}
function _(e, n) {
    let [r] = u.bN.node(e, n.path);
    if (!u.LC.isText(r)) return {};
    let i = r.text,
        a = n.offset;
    for (let e = a - 1; e >= 0; e--)
        if (c.has(i.charAt(e))) a--;
        else break;
    let s = n.offset;
    for (let e = s; e < i.length; e++)
        if (c.has(i.charAt(e))) s++;
        else break;
    let o = i.substring(a, s),
        l = {};
    return (
        p({
            result: l,
            text: o,
            startIndex: a,
            syntax: '***',
            type1: 'italics',
            type2: 'bold'
        }),
        p({
            result: l,
            text: o,
            startIndex: a,
            syntax: '___',
            type1: 'italics',
            type2: 'underline'
        }),
        h(l, o, a, '**', 'bold'),
        h(l, o, a, '*', 'italics'),
        h(l, o, a, '_', 'italics'),
        h(l, o, a, '__', 'underline'),
        h(l, o, a, '`', 'inlineCode'),
        h(l, o, a, '~~', 'strikethrough'),
        h(l, o, a, '||', 'spoiler'),
        l
    );
}
function h(e, n, r, i, a) {
    let s = m(n, i);
    s >= 0 &&
        (e[a] = {
            chars: i,
            location: r + s
        });
}
function p(e) {
    let { result: n, text: r, startIndex: i, syntax: a, type1: s, type2: o } = e,
        l = m(r, a);
    l >= 0 &&
        ((n[s] = {
            chars: a.substring(0, 1),
            location: l + i
        }),
        (n[o] = {
            chars: a.substring(1),
            location: l + i + 1
        }));
}
function m(e, n) {
    let r = e.indexOf(n);
    if (r >= 0) {
        let i = n.charAt(0);
        if ((r > 0 && e.charAt(r - 1) === i) || (r < e.length - 1 && e.charAt(r + n.length) === i)) return -1;
    }
    return r;
}
function g(e, n) {
    o.T.withSingleEntry(e, () => {
        u.bN.withoutNormalizing(e, () => {
            s()(null != e.selection, 'Editor has no selection');
            let [r, i] = u.M8.edges(e.selection),
                a = f(e, r, i),
                o = a.before[n],
                c = a.after[n],
                _ = u.bN.node(e, r.path),
                h = u.bN.node(e, i.path);
            if (null == _ || null == h || !u.LC.isText(_[0]) || !u.LC.isText(h[0])) return;
            let p = u.C0.equals(_[1], h[1]);
            if (null != o && null != c) {
                let n = {
                        path: r.path,
                        offset: o.location
                    },
                    a = {
                        path: i.path,
                        offset: c.location
                    };
                l.Q.delete(e, {
                    at: a,
                    distance: c.chars.length
                }),
                    l.Q.delete(e, {
                        at: n,
                        distance: o.chars.length
                    });
                let s = r.offset,
                    d = i.offset;
                !u.Jz.isBefore(r, n) && (s -= o.chars.length),
                    p && !u.Jz.isBefore(i, n) && (d -= o.chars.length),
                    u.Jz.isAfter(i, a) && (d -= c.chars.length),
                    l.Q.select(e, {
                        anchor: {
                            path: r.path,
                            offset: Math.max(0, s)
                        },
                        focus: {
                            path: i.path,
                            offset: Math.max(0, d)
                        }
                    });
            } else {
                let a = d[n];
                l.Q.insertText(e, a, { at: i }), l.Q.insertText(e, a, { at: r });
                let s = _[0].text.length + a.length,
                    o = h[0].text.length + (p ? 2 * a.length : a.length);
                l.Q.select(e, {
                    anchor: {
                        path: r.path,
                        offset: Math.min(s, r.offset + a.length)
                    },
                    focus: {
                        path: i.path,
                        offset: Math.min(o, i.offset + (p ? a.length : 0))
                    }
                });
            }
        });
    }),
        u.bN.focus(e);
}
function E(e, n) {
    let r = e.selection;
    if (null == r) return;
    let i = !0;
    for (let [a, s] of u.bN.blocks(e)) ('line' === a.type || a.type === n) && u.M8.includes(r, s) && (i = i && a.type === n);
    u.bN.withoutNormalizing(e, () => {
        for (let [a, s] of u.bN.blocks(e)) u.M8.includes(r, s) && (i || 'line' !== a.type ? i && a.type === n && l.Q.setNodes(e, { type: 'line' }, { at: s }) : l.Q.setNodes(e, { type: n }, { at: s }));
    }),
        u.bN.focus(e);
}
