n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(47120);
var i = n(53529),
    a = n(436660),
    o = n(887490),
    s = n(515270);
let l = new Set(['line', 'blockQuote']);
function u(e) {
    let { deleteBackward: t, deleteFragment: n, insertBreak: r, onChange: s } = e;
    (e.deleteBackward = (n) => {
        let r = o.bN.getCurrentBlock(e);
        if ((null == r ? void 0 : r[0].type) === 'blockQuote') {
            let t = o.M8.toPoint(e.selection);
            if (null != t && o.C0.isFirstChild(r[1], t.path) && 0 === t.offset) {
                a.Q.setNodes(e, { type: 'line' }, { at: r[1] });
                return;
            }
        }
        t(n);
    }),
        (e.deleteFragment = (t) => {
            if (null != e.selection) {
                let [r, s] = o.M8.edges(e.selection),
                    l = [r.path[0]],
                    u = o.bN.node(e, l),
                    c = [s.path[0]],
                    d = o.C0.equals(l, c) ? null : o.bN.node(e, c);
                i.T.withSingleEntry(e, () => {
                    (null == u ? void 0 : u[0].type) === 'blockQuote' && o.Jz.isAtStart(r, u) && a.Q.setNodes(e, { type: 'line' }, { at: l }), (null == d ? void 0 : d[0].type) === 'blockQuote' && o.Jz.isAtEnd(s, d) && a.Q.setNodes(e, { type: 'line' }, { at: c }), n(t);
                });
                return;
            }
            n(t);
        }),
        (e.insertBreak = () => {
            let t = o.bN.getCurrentBlock(e);
            if ((null == t ? void 0 : t[0].type) === 'blockQuote') {
                let n = o.M8.toPoint(e.selection);
                if (null == n) return;
                !d(e, t, n) &&
                    a.Q.splitNodes(e, {
                        at: n,
                        always: !0
                    });
                return;
            }
            r();
        });
    let l = null,
        u = !0;
    return (
        (e.onChange = () => {
            let t = o.bN.richValue(e);
            (t !== l || e.previewMarkdown !== u) &&
                (i.T.withMergedEntry(e, () => {
                    o.bN.withoutNormalizing(e, () => c(e));
                }),
                (l = t),
                (u = e.previewMarkdown)),
                s();
        }),
        e
    );
}
function c(e) {
    let t = !1;
    for (let i of o.bN.blocks(e)) {
        let [u, c] = i;
        if (!l.has(u.type)) continue;
        let d = {
            path: o.C0.child(c, 0),
            offset: 0
        };
        if ((0, s.iF)(e, d)) {
            'blockQuote' === u.type && (a.Q.setNodes(e, { type: 'line' }, { at: c }), a.Q.insertText(e, '> ', { at: d }));
            continue;
        }
        if ('blockQuote' === u.type || o.bN.areStylesDisabled(e)) continue;
        let _ = u.children[0];
        if (!o.LC.isText(_)) continue;
        let E = _.text.match(/^\s*>>> /),
            f = _.text.match(/^\s*> /);
        if ((null != f || null != E || t) && (a.Q.setNodes(e, { type: 'blockQuote' }, { at: c }), !t)) {
            var n, r;
            let i = null !== (r = null !== (n = null == f ? void 0 : f[0].length) && void 0 !== n ? n : null == E ? void 0 : E[0].length) && void 0 !== r ? r : 0,
                s = o.C0.child(c, 0);
            a.Q.delete(e, {
                at: {
                    anchor: {
                        path: s,
                        offset: 0
                    },
                    focus: {
                        path: s,
                        offset: i
                    }
                }
            }),
                (t = null != E);
        }
    }
}
function d(e, t, n) {
    if (!o.bN.isEmpty(e, t[0])) return !1;
    let r = o.bN.previous(e, { at: t[1] });
    return !!(null != r && o.aj.isType(r[0], 'blockQuote') && o.bN.isEmpty(e, r[0]) && o.Jz.isAtStart(n, t)) && (a.Q.setNodes(e, { type: 'line' }, { at: t[1] }), a.Q.removeNodes(e, { at: r[1] }), !0);
}
