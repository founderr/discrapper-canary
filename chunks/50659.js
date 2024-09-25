n.d(t, {
    U4: function () {
        return d;
    },
    hm: function () {
        return m;
    },
    py: function () {
        return p;
    }
});
var r = n(47120);
var i = n(512722),
    a = n.n(i),
    o = n(53529),
    s = n(436660),
    l = n(887490);
let u = new Set(['*', '_', '~', '`', '|']),
    c = {
        bold: '**',
        italics: '*',
        underline: '__',
        strikethrough: '~~',
        inlineCode: '`',
        spoiler: '||'
    };
function d(e, t, n) {
    if (null == e.selection)
        return {
            before: {},
            after: {}
        };
    let r = _(e, t),
        i = _(e, n);
    for (let e in r) !(e in i) && delete r[e];
    for (let e in i) !(e in r) && delete i[e];
    return {
        before: r,
        after: i
    };
}
function _(e, t) {
    let [n] = l.bN.node(e, t.path);
    if (!l.LC.isText(n)) return {};
    let r = n.text,
        i = t.offset;
    for (let e = i - 1; e >= 0; e--)
        if (u.has(r.charAt(e))) i--;
        else break;
    let a = t.offset;
    for (let e = a; e < r.length; e++)
        if (u.has(r.charAt(e))) a++;
        else break;
    let o = r.substring(i, a),
        s = {};
    return (
        f({
            result: s,
            text: o,
            startIndex: i,
            syntax: '***',
            type1: 'italics',
            type2: 'bold'
        }),
        f({
            result: s,
            text: o,
            startIndex: i,
            syntax: '___',
            type1: 'italics',
            type2: 'underline'
        }),
        E(s, o, i, '**', 'bold'),
        E(s, o, i, '*', 'italics'),
        E(s, o, i, '_', 'italics'),
        E(s, o, i, '__', 'underline'),
        E(s, o, i, '`', 'inlineCode'),
        E(s, o, i, '~~', 'strikethrough'),
        E(s, o, i, '||', 'spoiler'),
        s
    );
}
function E(e, t, n, r, i) {
    let a = h(t, r);
    a >= 0 &&
        (e[i] = {
            chars: r,
            location: n + a
        });
}
function f(e) {
    let { result: t, text: n, startIndex: r, syntax: i, type1: a, type2: o } = e,
        s = h(n, i);
    s >= 0 &&
        ((t[a] = {
            chars: i.substring(0, 1),
            location: s + r
        }),
        (t[o] = {
            chars: i.substring(1),
            location: s + r + 1
        }));
}
function h(e, t) {
    let n = e.indexOf(t);
    if (n >= 0) {
        let r = t.charAt(0);
        if ((n > 0 && e.charAt(n - 1) === r) || (n < e.length - 1 && e.charAt(n + t.length) === r)) return -1;
    }
    return n;
}
function p(e, t) {
    o.T.withSingleEntry(e, () => {
        l.bN.withoutNormalizing(e, () => {
            a()(null != e.selection, 'Editor has no selection');
            let [n, r] = l.M8.edges(e.selection),
                i = d(e, n, r),
                o = i.before[t],
                u = i.after[t],
                _ = l.bN.node(e, n.path),
                E = l.bN.node(e, r.path);
            if (null == _ || null == E || !l.LC.isText(_[0]) || !l.LC.isText(E[0])) return;
            let f = l.C0.equals(_[1], E[1]);
            if (null != o && null != u) {
                let t = {
                        path: n.path,
                        offset: o.location
                    },
                    i = {
                        path: r.path,
                        offset: u.location
                    };
                s.Q.delete(e, {
                    at: i,
                    distance: u.chars.length
                }),
                    s.Q.delete(e, {
                        at: t,
                        distance: o.chars.length
                    });
                let a = n.offset,
                    c = r.offset;
                !l.Jz.isBefore(n, t) && (a -= o.chars.length),
                    f && !l.Jz.isBefore(r, t) && (c -= o.chars.length),
                    l.Jz.isAfter(r, i) && (c -= u.chars.length),
                    s.Q.select(e, {
                        anchor: {
                            path: n.path,
                            offset: Math.max(0, a)
                        },
                        focus: {
                            path: r.path,
                            offset: Math.max(0, c)
                        }
                    });
            } else {
                let i = c[t];
                s.Q.insertText(e, i, { at: r }), s.Q.insertText(e, i, { at: n });
                let a = _[0].text.length + i.length,
                    o = E[0].text.length + (f ? 2 * i.length : i.length);
                s.Q.select(e, {
                    anchor: {
                        path: n.path,
                        offset: Math.min(a, n.offset + i.length)
                    },
                    focus: {
                        path: r.path,
                        offset: Math.min(o, r.offset + (f ? i.length : 0))
                    }
                });
            }
        });
    }),
        l.bN.focus(e);
}
function m(e, t) {
    let n = e.selection;
    if (null == n) return;
    let r = !0;
    for (let [i, a] of l.bN.blocks(e)) ('line' === i.type || i.type === t) && l.M8.includes(n, a) && (r = r && i.type === t);
    l.bN.withoutNormalizing(e, () => {
        for (let [i, a] of l.bN.blocks(e)) l.M8.includes(n, a) && (r || 'line' !== i.type ? r && i.type === t && s.Q.setNodes(e, { type: 'line' }, { at: a }) : s.Q.setNodes(e, { type: t }, { at: a }));
    }),
        l.bN.focus(e);
}
