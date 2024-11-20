n.d(t, {
    Z: function () {
        return s;
    }
}),
    n(47120),
    n(571269),
    n(298267);
var r = n(327432),
    i = n(436660),
    a = n(887490);
function s(e) {
    let { apply: t, deleteBackward: n, deleteForward: s, deleteFragment: l, insertText: c } = e;
    return (
        (e.apply = (n) => {
            var r;
            if ('set_selection' === n.type && (null === (r = e.composition) || void 0 === r ? void 0 : r.startedInsideInline) && a.M8.isRange(n.properties) && a.M8.isRange(n.newProperties) && a.M8.isCollapsed(n.newProperties)) {
                let t = a.bN.getParentInline(e, n.properties),
                    r = a.bN.getParentInline(e, n.newProperties);
                if (null != t && (null == r || !a.C0.equals(t[1], r[1]))) return;
            }
            t(n);
        }),
        (e.insertText = (t) => {
            if (null != e.selection && null != a.bN.getCurrentInline(e)) {
                i.Q.insertText(e, t);
                return;
            }
            c(t);
        }),
        (e.deleteBackward = (t) => {
            !o(e, t, !0) && n(t);
        }),
        (e.deleteForward = (t) => {
            !o(e, t, !1) && s(t);
        }),
        (e.deleteFragment = (t) => {
            if (null != e.selection && a.M8.isExpanded(e.selection)) {
                var n, r, s, o;
                let u = e.selection.anchor,
                    c = e.selection.focus,
                    d = a.bN.getParentInline(e, u),
                    f = a.bN.getParentInline(e, c);
                if (null != d && null != f && a.C0.equals(d[1], f[1])) {
                    l(t);
                    return;
                }
                let _ = a.M8.isForward(e.selection);
                if (null != d) {
                    let [, t] = d,
                        [i, s] = a.bN.edges(e, t);
                    _ && a.Jz.equals(u, i) ? (u = null !== (n = a.bN.before(e, i)) && void 0 !== n ? n : a.bN.start(e, [])) : !_ && a.Jz.equals(u, s) && (u = null !== (r = a.bN.after(e, s)) && void 0 !== r ? r : a.bN.end(e, []));
                }
                if (null != f) {
                    let [, t] = f,
                        [n, r] = a.bN.edges(e, t);
                    !_ && a.Jz.equals(c, n) ? (c = null !== (s = a.bN.before(e, n)) && void 0 !== s ? s : a.bN.start(e, [])) : _ && a.Jz.equals(c, r) && (c = null !== (o = a.bN.after(e, r)) && void 0 !== o ? o : a.bN.end(e, []));
                }
                i.Q.delete(e, {
                    at: {
                        anchor: u,
                        focus: c
                    },
                    reverse: 'backward' === t,
                    select: !0
                });
                return;
            }
            l(t);
        }),
        (r.ML.positions = u),
        e
    );
}
function o(e, t, n) {
    let r = a.bN.getCurrentInline(e),
        s = a.bN.getCurrentBlock(e),
        o = a.M8.toPoint(e.selection);
    if (null == o || null == s || 'block' === t) return !0;
    if ('line' === t && null == r) return !1;
    let l = r;
    if (null == l) {
        let t = (n ? a.bN.before : a.bN.after)(e, o);
        null != t && null != (l = a.bN.getParentInline(e, t)) && (o = t);
    }
    if (null != l) {
        let [r, s] = l;
        if (a.bN.isEmpty(e, r) || a.bN.isVoid(e, r)) i.Q.removeInline(e, s);
        else {
            let [r, l] = a.bN.edges(e, s);
            i.Q.delete(e, {
                at: o,
                unit: t,
                reverse: n,
                select: !0,
                bounds: {
                    anchor: r,
                    focus: l
                }
            });
        }
        return !0;
    }
    let u = !1;
    if (null != s) {
        let [, t] = s,
            [r, i] = a.bN.edges(e, t);
        u = (n && a.Jz.equals(o, r)) || (!n && a.Jz.equals(o, i));
    }
    if ('word' === t && !u) {
        let r = a.bN.getCurrentText(e);
        if (null != r) {
            let [, s] = r,
                [l, u] = a.bN.edges(e, s);
            return (
                i.Q.delete(e, {
                    at: o,
                    unit: t,
                    reverse: n,
                    select: !0,
                    bounds: {
                        anchor: l,
                        focus: u
                    }
                }),
                !0
            );
        }
    }
    return (
        i.Q.delete(e, {
            at: o,
            unit: t,
            reverse: n,
            select: !0
        }),
        !0
    );
}
let l = r.ML.positions;
function* u(e) {
    var t, n, r, i, s, o, u, c;
    let d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { at: f = e.selection, unit: _ = 'offset', reverse: p = !1, voids: h = !1 } = null != d ? d : {};
    if ('word' !== _) {
        for (let t of l(e, {
            ...d,
            voids: h || 'block' === _
        }))
            yield t;
        return;
    }
    if (null == f) return;
    let m = a.bN.range(e, f),
        [g, E] = a.M8.edges(m),
        v = a.bN.richValue(e),
        I = p ? -1 : 1,
        b = null !== (r = null === (t = g.path) || void 0 === t ? void 0 : t[0]) && void 0 !== r ? r : 0,
        T = null !== (i = null === (n = E.path) || void 0 === n ? void 0 : n[0]) && void 0 !== i ? i : v.length - 1,
        S = p ? b : T,
        y = p ? T : b;
    for (;;) {
        let t = v[y],
            n = null !== (u = y === b ? (null === (s = g.path) || void 0 === s ? void 0 : s[1]) : null) && void 0 !== u ? u : 0,
            r = null !== (c = y === T ? (null === (o = E.path) || void 0 === o ? void 0 : o[1]) : null) && void 0 !== c ? c : t.children.length - 1,
            i = p ? r : n,
            f = p ? n : r,
            _ = i;
        for (;;) {
            let n, r;
            let i = t.children[_],
                s = [y, _];
            if (((n = a.C0.equals(s, g.path) || a.C0.isAncestor(s, g.path) ? (!p && a.bN.isEnd(e, g, s) ? null : g) : a.bN.start(e, s)), (r = a.C0.equals(s, E.path) || a.C0.isAncestor(s, E.path) ? (p && a.bN.isStart(e, E, s) ? null : E) : a.bN.end(e, s)), null != n && null != r)) {
                if (a.LC.isText(i) && 0 === i.text.length) {
                    let e = {
                        path: s,
                        offset: 0
                    };
                    yield e, yield e;
                } else if (a.bN.isInline(e, i) && a.LC.isText(i.children[0]) && 0 === i.children[0].text.length) {
                    let e = {
                        path: a.C0.child(s, 0),
                        offset: 0
                    };
                    yield e, yield e;
                } else {
                    let t = {
                        anchor: n,
                        focus: r
                    };
                    for (let n of l(e, {
                        ...d,
                        at: t
                    }))
                        yield n;
                }
            }
            if (_ === f) break;
            _ += I;
        }
        if (y === S) break;
        y += I;
    }
}
