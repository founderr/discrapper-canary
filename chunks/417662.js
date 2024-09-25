n.d(t, {
    E: function () {
        return f;
    },
    Z: function () {
        return h;
    }
});
var r = n(47120);
var i = n(653603),
    a = n.n(i),
    o = n(512722),
    s = n.n(o),
    l = n(53529),
    u = n(50659),
    c = n(436660),
    d = n(887490),
    _ = n(981631);
let E = '  ';
function f(e, t) {
    let { cmd: n = !1, ctrl: r = !1, alt: i = !1, shift: a = !1 } = t;
    return (null == n || e.metaKey === n) && (null == r || e.ctrlKey === r) && (null == i || e.altKey === i) && (null == a || e.shiftKey === a);
}
function h(e) {
    return (
        (e.onKeyDown = (t) => {
            var n, r, i, o;
            let h = e.isMac;
            switch (t.which) {
                case _.yXg.B:
                    if (
                        !d.bN.isEditorEmpty(e) &&
                        f(t, {
                            ctrl: !h,
                            cmd: h
                        })
                    )
                        return (0, u.py)(e, 'bold'), !0;
                    break;
                case _.yXg.I:
                    if (
                        !d.bN.isEditorEmpty(e) &&
                        f(t, {
                            ctrl: !h,
                            cmd: h
                        })
                    )
                        return (0, u.py)(e, 'italics'), !0;
                    break;
                case _.yXg.U:
                    if (
                        !d.bN.isEditorEmpty(e) &&
                        f(t, {
                            ctrl: !h,
                            cmd: h
                        })
                    )
                        return (0, u.py)(e, 'underline'), !0;
                    break;
                case _.yXg.S:
                    if (
                        !d.bN.isEditorEmpty(e) &&
                        f(t, {
                            ctrl: !h,
                            cmd: h,
                            shift: !0
                        })
                    )
                        return (0, u.py)(e, 'strikethrough'), !0;
                    break;
                case _.yXg.TAB:
                    if (null != e.selection && f(t, { shift: null })) {
                        let [r, i] = d.M8.edges(e.selection),
                            a = d.bN.blocks(e).slice(r.path[0], i.path[0] + 1),
                            o = !0;
                        for (let [e] of a)
                            if ('line' !== e.type || !(null === (n = e.codeBlockState) || void 0 === n ? void 0 : n.isInCodeBlock)) {
                                o = !1;
                                break;
                            }
                        if (o) {
                            if (!t.shiftKey && d.M8.isCollapsed(e.selection)) return c.Q.insertText(e, E), !0;
                            let n = !t.shiftKey;
                            return (
                                l.T.withSingleEntry(e, () => {
                                    var t, r, i, o;
                                    let s = null !== (i = null === (t = e.selection) || void 0 === t ? void 0 : t.anchor) && void 0 !== i ? i : d.bN.start(e, []),
                                        l = null !== (o = null === (r = e.selection) || void 0 === r ? void 0 : r.focus) && void 0 !== o ? o : d.bN.end(e, []);
                                    for (let [t, r] of a) {
                                        let i = t.children[0];
                                        if (!d.LC.isText(t.children[0])) continue;
                                        let a = d.C0.child(r, 0),
                                            o = {
                                                path: a,
                                                offset: 0
                                            };
                                        if (n)
                                            c.Q.insertText(e, E, { at: o }),
                                                d.C0.equals(s.path, a) &&
                                                    0 !== s.offset &&
                                                    (s = {
                                                        path: a,
                                                        offset: s.offset + E.length
                                                    }),
                                                d.C0.equals(l.path, a) &&
                                                    0 !== l.offset &&
                                                    (l = {
                                                        path: a,
                                                        offset: l.offset + E.length
                                                    });
                                        else if (i.text.startsWith(E)) {
                                            let t = {
                                                path: d.C0.child(r, 0),
                                                offset: E.length
                                            };
                                            c.Q.delete(e, {
                                                at: {
                                                    anchor: o,
                                                    focus: t
                                                }
                                            }),
                                                d.C0.equals(s.path, a) &&
                                                    (s = {
                                                        path: a,
                                                        offset: Math.max(0, s.offset - E.length)
                                                    }),
                                                d.C0.equals(l.path, a) &&
                                                    (l = {
                                                        path: a,
                                                        offset: Math.max(0, l.offset - E.length)
                                                    });
                                        }
                                    }
                                    c.Q.select(e, {
                                        anchor: s,
                                        focus: l
                                    });
                                }),
                                !0
                            );
                        }
                    }
                    break;
                case _.yXg.ARROW_LEFT:
                case _.yXg.ARROW_RIGHT: {
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
                    let l = e.children[null !== (o = null === (i = e.selection) || void 0 === i ? void 0 : null === (r = i.focus) || void 0 === r ? void 0 : r.path[0]) && void 0 !== o ? o : 0],
                        u = 'rtl' === a()(d.aj.string(l)),
                        E = (t.which === _.yXg.ARROW_LEFT) == !u;
                    return (
                        c.Q.keyboardMove(e, {
                            reverse: E,
                            unit: n,
                            edge: s
                        }),
                        !0
                    );
                }
                case _.yXg.A:
                    if (h && f(t, { ctrl: !0 })) {
                        let t = d.bN.getCurrentBlock(e);
                        if (null != t) {
                            let [, n] = t,
                                r = {
                                    path: d.C0.child(n, 0),
                                    offset: 0
                                };
                            return (
                                c.Q.select(e, {
                                    anchor: r,
                                    focus: r
                                }),
                                !0
                            );
                        }
                    }
                    break;
                case _.yXg.E:
                    if (h && f(t, { ctrl: !0 })) {
                        let t = d.bN.getCurrentBlock(e);
                        if (null != t) {
                            let [n, r] = t,
                                i = d.C0.child(r, n.children.length - 1),
                                [a] = d.bN.node(e, i),
                                o = {
                                    path: i,
                                    offset: a.text.length
                                };
                            return (
                                c.Q.select(e, {
                                    anchor: o,
                                    focus: o
                                }),
                                !0
                            );
                        }
                    }
                    break;
                case _.yXg.BACKSPACE:
                case _.yXg.DELETE:
                case _.yXg.K:
                    let p = t.which === _.yXg.BACKSPACE;
                    if (
                        ((!h &&
                            t.which !== _.yXg.K &&
                            f(t, {
                                ctrl: !0,
                                shift: !0
                            })) ||
                            (h && t.which !== _.yXg.K && f(t, { cmd: !0 })) ||
                            (h && t.which === _.yXg.K && f(t, { ctrl: !0 }))) &&
                        null != e.selection
                    ) {
                        let [t, n] = d.M8.edges(e.selection),
                            [r, i] = d.bN.node(e, [p ? t.path[0] : n.path[0]]);
                        if ((s()(d.q.isElement(r) && d.bN.isBlock(e, r), 'Top-most node of selection is not a block'), (p && !d.Jz.isAtStart(t, [r, i])) || (!p && !d.Jz.isAtEnd(n, [r, i])))) return p ? e.deleteBackward('line') : e.deleteForward('line'), !0;
                    }
            }
            return !1;
        }),
        e
    );
}
