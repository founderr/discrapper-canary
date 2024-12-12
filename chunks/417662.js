r.d(n, {
    E: function () {
        return p;
    },
    Z: function () {
        return m;
    }
});
var i = r(47120);
var a = r(653603),
    s = r.n(a),
    o = r(512722),
    l = r.n(o),
    u = r(53529),
    c = r(50659),
    d = r(436660),
    f = r(887490),
    _ = r(981631);
let h = '  ';
function p(e, n) {
    let { cmd: r = !1, ctrl: i = !1, alt: a = !1, shift: s = !1 } = n;
    return (null == r || e.metaKey === r) && (null == i || e.ctrlKey === i) && (null == a || e.altKey === a) && (null == s || e.shiftKey === s);
}
function m(e) {
    return (
        (e.onKeyDown = (n) => {
            var r, i, a, o;
            let m = e.isMac;
            switch (n.which) {
                case _.yXg.B:
                    if (
                        !f.bN.isEditorEmpty(e) &&
                        p(n, {
                            ctrl: !m,
                            cmd: m
                        })
                    )
                        return (0, c.py)(e, 'bold'), !0;
                    break;
                case _.yXg.I:
                    if (
                        !f.bN.isEditorEmpty(e) &&
                        p(n, {
                            ctrl: !m,
                            cmd: m
                        })
                    )
                        return (0, c.py)(e, 'italics'), !0;
                    break;
                case _.yXg.U:
                    if (
                        !f.bN.isEditorEmpty(e) &&
                        p(n, {
                            ctrl: !m,
                            cmd: m
                        })
                    )
                        return (0, c.py)(e, 'underline'), !0;
                    break;
                case _.yXg.S:
                    if (
                        !f.bN.isEditorEmpty(e) &&
                        p(n, {
                            ctrl: !m,
                            cmd: m,
                            shift: !0
                        })
                    )
                        return (0, c.py)(e, 'strikethrough'), !0;
                    break;
                case _.yXg.TAB:
                    if (null != e.selection && p(n, { shift: null })) {
                        let [i, a] = f.M8.edges(e.selection),
                            s = f.bN.blocks(e).slice(i.path[0], a.path[0] + 1),
                            o = !0;
                        for (let [e] of s)
                            if ('line' !== e.type || !(null === (r = e.codeBlockState) || void 0 === r ? void 0 : r.isInCodeBlock)) {
                                o = !1;
                                break;
                            }
                        if (o) {
                            if (!n.shiftKey && f.M8.isCollapsed(e.selection)) return d.Q.insertText(e, h), !0;
                            let r = !n.shiftKey;
                            return (
                                u.T.withSingleEntry(e, () => {
                                    var n, i, a, o;
                                    let l = null !== (a = null === (n = e.selection) || void 0 === n ? void 0 : n.anchor) && void 0 !== a ? a : f.bN.start(e, []),
                                        u = null !== (o = null === (i = e.selection) || void 0 === i ? void 0 : i.focus) && void 0 !== o ? o : f.bN.end(e, []);
                                    for (let [n, i] of s) {
                                        let a = n.children[0];
                                        if (!f.LC.isText(n.children[0])) continue;
                                        let s = f.C0.child(i, 0),
                                            o = {
                                                path: s,
                                                offset: 0
                                            };
                                        if (r)
                                            d.Q.insertText(e, h, { at: o }),
                                                f.C0.equals(l.path, s) &&
                                                    0 !== l.offset &&
                                                    (l = {
                                                        path: s,
                                                        offset: l.offset + h.length
                                                    }),
                                                f.C0.equals(u.path, s) &&
                                                    0 !== u.offset &&
                                                    (u = {
                                                        path: s,
                                                        offset: u.offset + h.length
                                                    });
                                        else if (a.text.startsWith(h)) {
                                            let n = {
                                                path: f.C0.child(i, 0),
                                                offset: h.length
                                            };
                                            d.Q.delete(e, {
                                                at: {
                                                    anchor: o,
                                                    focus: n
                                                }
                                            }),
                                                f.C0.equals(l.path, s) &&
                                                    (l = {
                                                        path: s,
                                                        offset: Math.max(0, l.offset - h.length)
                                                    }),
                                                f.C0.equals(u.path, s) &&
                                                    (u = {
                                                        path: s,
                                                        offset: Math.max(0, u.offset - h.length)
                                                    });
                                        }
                                    }
                                    d.Q.select(e, {
                                        anchor: l,
                                        focus: u
                                    });
                                }),
                                !0
                            );
                        }
                    }
                    break;
                case _.yXg.ARROW_LEFT:
                case _.yXg.ARROW_RIGHT: {
                    let r, l;
                    if (p(n, { shift: null })) r = 'character';
                    else if (
                        p(n, {
                            ctrl: !m,
                            alt: m,
                            shift: null
                        })
                    )
                        r = 'word';
                    else if (
                        m &&
                        p(n, {
                            cmd: !0,
                            shift: null
                        })
                    )
                        return !1;
                    else return !1;
                    n.shiftKey && (l = 'focus');
                    let u = e.children[null !== (o = null === (a = e.selection) || void 0 === a ? void 0 : null === (i = a.focus) || void 0 === i ? void 0 : i.path[0]) && void 0 !== o ? o : 0],
                        c = 'rtl' === s()(f.aj.string(u)),
                        h = (n.which === _.yXg.ARROW_LEFT) == !c;
                    return (
                        d.Q.keyboardMove(e, {
                            reverse: h,
                            unit: r,
                            edge: l
                        }),
                        !0
                    );
                }
                case _.yXg.A:
                    if (m && p(n, { ctrl: !0 })) {
                        let n = f.bN.getCurrentBlock(e);
                        if (null != n) {
                            let [, r] = n,
                                i = {
                                    path: f.C0.child(r, 0),
                                    offset: 0
                                };
                            return (
                                d.Q.select(e, {
                                    anchor: i,
                                    focus: i
                                }),
                                !0
                            );
                        }
                    }
                    break;
                case _.yXg.E:
                    if (m && p(n, { ctrl: !0 })) {
                        let n = f.bN.getCurrentBlock(e);
                        if (null != n) {
                            let [r, i] = n,
                                a = f.C0.child(i, r.children.length - 1),
                                [s] = f.bN.node(e, a),
                                o = {
                                    path: a,
                                    offset: s.text.length
                                };
                            return (
                                d.Q.select(e, {
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
                    let g = n.which === _.yXg.BACKSPACE;
                    if (
                        ((!m &&
                            n.which !== _.yXg.K &&
                            p(n, {
                                ctrl: !0,
                                shift: !0
                            })) ||
                            (m && n.which !== _.yXg.K && p(n, { cmd: !0 })) ||
                            (m && n.which === _.yXg.K && p(n, { ctrl: !0 }))) &&
                        null != e.selection
                    ) {
                        let [n, r] = f.M8.edges(e.selection),
                            [i, a] = f.bN.node(e, [g ? n.path[0] : r.path[0]]);
                        if ((l()(f.q.isElement(i) && f.bN.isBlock(e, i), 'Top-most node of selection is not a block'), (g && !f.Jz.isAtStart(n, [i, a])) || (!g && !f.Jz.isAtEnd(r, [i, a])))) return g ? e.deleteBackward('line') : e.deleteForward('line'), !0;
                    }
            }
            return !1;
        }),
        e
    );
}
