n.d(t, {
    E: function () {
        return f;
    },
    Z: function () {
        return _;
    }
}),
    n(47120);
var r = n(653603),
    i = n.n(r),
    a = n(512722),
    s = n.n(a),
    o = n(53529),
    l = n(50659),
    u = n(436660),
    c = n(887490),
    d = n(981631);
function f(e, t) {
    let { cmd: n = !1, ctrl: r = !1, alt: i = !1, shift: a = !1 } = t;
    return (null == n || e.metaKey === n) && (null == r || e.ctrlKey === r) && (null == i || e.altKey === i) && (null == a || e.shiftKey === a);
}
function _(e) {
    return (
        (e.onKeyDown = (t) => {
            var n, r, a, _;
            let h = e.isMac;
            switch (t.which) {
                case d.yXg.B:
                    if (
                        !c.bN.isEditorEmpty(e) &&
                        f(t, {
                            ctrl: !h,
                            cmd: h
                        })
                    )
                        return (0, l.py)(e, 'bold'), !0;
                    break;
                case d.yXg.I:
                    if (
                        !c.bN.isEditorEmpty(e) &&
                        f(t, {
                            ctrl: !h,
                            cmd: h
                        })
                    )
                        return (0, l.py)(e, 'italics'), !0;
                    break;
                case d.yXg.U:
                    if (
                        !c.bN.isEditorEmpty(e) &&
                        f(t, {
                            ctrl: !h,
                            cmd: h
                        })
                    )
                        return (0, l.py)(e, 'underline'), !0;
                    break;
                case d.yXg.S:
                    if (
                        !c.bN.isEditorEmpty(e) &&
                        f(t, {
                            ctrl: !h,
                            cmd: h,
                            shift: !0
                        })
                    )
                        return (0, l.py)(e, 'strikethrough'), !0;
                    break;
                case d.yXg.TAB:
                    if (null != e.selection && f(t, { shift: null })) {
                        let [r, i] = c.M8.edges(e.selection),
                            a = c.bN.blocks(e).slice(r.path[0], i.path[0] + 1),
                            s = !0;
                        for (let [e] of a)
                            if ('line' !== e.type || !(null === (n = e.codeBlockState) || void 0 === n ? void 0 : n.isInCodeBlock)) {
                                s = !1;
                                break;
                            }
                        if (s) {
                            if (!t.shiftKey && c.M8.isCollapsed(e.selection)) return u.Q.insertText(e, '  '), !0;
                            let n = !t.shiftKey;
                            return (
                                o.T.withSingleEntry(e, () => {
                                    var t, r, i, s;
                                    let o = null !== (i = null === (t = e.selection) || void 0 === t ? void 0 : t.anchor) && void 0 !== i ? i : c.bN.start(e, []),
                                        l = null !== (s = null === (r = e.selection) || void 0 === r ? void 0 : r.focus) && void 0 !== s ? s : c.bN.end(e, []);
                                    for (let [t, r] of a) {
                                        let i = t.children[0];
                                        if (!c.LC.isText(t.children[0])) continue;
                                        let a = c.C0.child(r, 0),
                                            s = {
                                                path: a,
                                                offset: 0
                                            };
                                        if (n)
                                            u.Q.insertText(e, '  ', { at: s }),
                                                c.C0.equals(o.path, a) &&
                                                    0 !== o.offset &&
                                                    (o = {
                                                        path: a,
                                                        offset: o.offset + 2
                                                    }),
                                                c.C0.equals(l.path, a) &&
                                                    0 !== l.offset &&
                                                    (l = {
                                                        path: a,
                                                        offset: l.offset + 2
                                                    });
                                        else if (i.text.startsWith('  ')) {
                                            let t = {
                                                path: c.C0.child(r, 0),
                                                offset: 2
                                            };
                                            u.Q.delete(e, {
                                                at: {
                                                    anchor: s,
                                                    focus: t
                                                }
                                            }),
                                                c.C0.equals(o.path, a) &&
                                                    (o = {
                                                        path: a,
                                                        offset: Math.max(0, o.offset - 2)
                                                    }),
                                                c.C0.equals(l.path, a) &&
                                                    (l = {
                                                        path: a,
                                                        offset: Math.max(0, l.offset - 2)
                                                    });
                                        }
                                    }
                                    u.Q.select(e, {
                                        anchor: o,
                                        focus: l
                                    });
                                }),
                                !0
                            );
                        }
                    }
                    break;
                case d.yXg.ARROW_LEFT:
                case d.yXg.ARROW_RIGHT: {
                    let n, s;
                    if (f(t, { shift: null })) n = 'character';
                    else if (
                        f(t, {
                            ctrl: !h,
                            alt: h,
                            shift: null
                        })
                    )
                        n = 'word';
                    else if (
                        h &&
                        f(t, {
                            cmd: !0,
                            shift: null
                        })
                    )
                        return !1;
                    else return !1;
                    t.shiftKey && (s = 'focus');
                    let o = e.children[null !== (_ = null === (a = e.selection) || void 0 === a ? void 0 : null === (r = a.focus) || void 0 === r ? void 0 : r.path[0]) && void 0 !== _ ? _ : 0],
                        l = 'rtl' === i()(c.aj.string(o)),
                        p = (t.which === d.yXg.ARROW_LEFT) == !l;
                    return (
                        u.Q.keyboardMove(e, {
                            reverse: p,
                            unit: n,
                            edge: s
                        }),
                        !0
                    );
                }
                case d.yXg.A:
                    if (h && f(t, { ctrl: !0 })) {
                        let t = c.bN.getCurrentBlock(e);
                        if (null != t) {
                            let [, n] = t,
                                r = {
                                    path: c.C0.child(n, 0),
                                    offset: 0
                                };
                            return (
                                u.Q.select(e, {
                                    anchor: r,
                                    focus: r
                                }),
                                !0
                            );
                        }
                    }
                    break;
                case d.yXg.E:
                    if (h && f(t, { ctrl: !0 })) {
                        let t = c.bN.getCurrentBlock(e);
                        if (null != t) {
                            let [n, r] = t,
                                i = c.C0.child(r, n.children.length - 1),
                                [a] = c.bN.node(e, i),
                                s = {
                                    path: i,
                                    offset: a.text.length
                                };
                            return (
                                u.Q.select(e, {
                                    anchor: s,
                                    focus: s
                                }),
                                !0
                            );
                        }
                    }
                    break;
                case d.yXg.BACKSPACE:
                case d.yXg.DELETE:
                case d.yXg.K:
                    let p = t.which === d.yXg.BACKSPACE;
                    if (
                        ((!h &&
                            t.which !== d.yXg.K &&
                            f(t, {
                                ctrl: !0,
                                shift: !0
                            })) ||
                            (h && t.which !== d.yXg.K && f(t, { cmd: !0 })) ||
                            (h && t.which === d.yXg.K && f(t, { ctrl: !0 }))) &&
                        null != e.selection
                    ) {
                        let [t, n] = c.M8.edges(e.selection),
                            [r, i] = c.bN.node(e, [p ? t.path[0] : n.path[0]]);
                        if ((s()(c.q.isElement(r) && c.bN.isBlock(e, r), 'Top-most node of selection is not a block'), (p && !c.Jz.isAtStart(t, [r, i])) || (!p && !c.Jz.isAtEnd(n, [r, i])))) return p ? e.deleteBackward('line') : e.deleteForward('line'), !0;
                    }
            }
            return !1;
        }),
        e
    );
}
