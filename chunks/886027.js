r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(47120);
var a = r(53529),
    s = r(436660),
    o = r(887490),
    l = r(515270);
let u = new Set(['line', 'blockQuote']);
function c(e) {
    let { deleteBackward: n, deleteFragment: r, insertBreak: i, onChange: l } = e;
    (e.deleteBackward = (r) => {
        let i = o.bN.getCurrentBlock(e);
        if ((null == i ? void 0 : i[0].type) === 'blockQuote') {
            let n = o.M8.toPoint(e.selection);
            if (null != n && o.C0.isFirstChild(i[1], n.path) && 0 === n.offset) {
                s.Q.setNodes(e, { type: 'line' }, { at: i[1] });
                return;
            }
        }
        n(r);
    }),
        (e.deleteFragment = (n) => {
            if (null != e.selection) {
                let [i, l] = o.M8.edges(e.selection),
                    u = [i.path[0]],
                    c = o.bN.node(e, u),
                    d = [l.path[0]],
                    f = o.C0.equals(u, d) ? null : o.bN.node(e, d);
                a.T.withSingleEntry(e, () => {
                    (null == c ? void 0 : c[0].type) === 'blockQuote' && o.Jz.isAtStart(i, c) && s.Q.setNodes(e, { type: 'line' }, { at: u }), (null == f ? void 0 : f[0].type) === 'blockQuote' && o.Jz.isAtEnd(l, f) && s.Q.setNodes(e, { type: 'line' }, { at: d }), r(n);
                });
                return;
            }
            r(n);
        }),
        (e.insertBreak = () => {
            let n = o.bN.getCurrentBlock(e);
            if ((null == n ? void 0 : n[0].type) === 'blockQuote') {
                let r = o.M8.toPoint(e.selection);
                if (null == r) return;
                !f(e, n, r) &&
                    s.Q.splitNodes(e, {
                        at: r,
                        always: !0
                    });
                return;
            }
            i();
        });
    let u = null,
        c = !0;
    return (
        (e.onChange = () => {
            let n = o.bN.richValue(e);
            (n !== u || e.previewMarkdown !== c) &&
                (a.T.withMergedEntry(e, () => {
                    o.bN.withoutNormalizing(e, () => d(e));
                }),
                (u = n),
                (c = e.previewMarkdown)),
                l();
        }),
        e
    );
}
function d(e) {
    let n = !1;
    for (let a of o.bN.blocks(e)) {
        let [c, d] = a;
        if (!u.has(c.type)) continue;
        let f = {
            path: o.C0.child(d, 0),
            offset: 0
        };
        if ((0, l.iF)(e, f)) {
            'blockQuote' === c.type && (s.Q.setNodes(e, { type: 'line' }, { at: d }), s.Q.insertText(e, '> ', { at: f }));
            continue;
        }
        if ('blockQuote' === c.type || o.bN.areStylesDisabled(e)) continue;
        let _ = c.children[0];
        if (!o.LC.isText(_)) continue;
        let h = _.text.match(/^\s*>>> /),
            p = _.text.match(/^\s*> /);
        if ((null != p || null != h || n) && (s.Q.setNodes(e, { type: 'blockQuote' }, { at: d }), !n)) {
            var r, i;
            let a = null !== (i = null !== (r = null == p ? void 0 : p[0].length) && void 0 !== r ? r : null == h ? void 0 : h[0].length) && void 0 !== i ? i : 0,
                l = o.C0.child(d, 0);
            s.Q.delete(e, {
                at: {
                    anchor: {
                        path: l,
                        offset: 0
                    },
                    focus: {
                        path: l,
                        offset: a
                    }
                }
            }),
                (n = null != h);
        }
    }
}
function f(e, n, r) {
    if (!o.bN.isEmpty(e, n[0])) return !1;
    let i = o.bN.previous(e, { at: n[1] });
    return !!(null != i && o.aj.isType(i[0], 'blockQuote') && o.bN.isEmpty(e, i[0]) && o.Jz.isAtStart(r, n)) && (s.Q.setNodes(e, { type: 'line' }, { at: n[1] }), s.Q.removeNodes(e, { at: i[1] }), !0);
}
