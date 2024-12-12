r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(47120);
var a = r(571269);
var s = r(298267);
var o = r(327432),
    l = r(436660),
    u = r(887490);
function c(e) {
    let { apply: n, deleteBackward: r, deleteForward: i, deleteFragment: a, insertText: s } = e;
    return (
        (e.apply = (r) => {
            var i;
            if ('set_selection' === r.type && (null === (i = e.composition) || void 0 === i ? void 0 : i.startedInsideInline) && u.M8.isRange(r.properties) && u.M8.isRange(r.newProperties) && u.M8.isCollapsed(r.newProperties)) {
                let n = u.bN.getParentInline(e, r.properties),
                    i = u.bN.getParentInline(e, r.newProperties);
                if (null != n && (null == i || !u.C0.equals(n[1], i[1]))) return;
            }
            n(r);
        }),
        (e.insertText = (n) => {
            if (null != e.selection && null != u.bN.getCurrentInline(e)) {
                l.Q.insertText(e, n);
                return;
            }
            s(n);
        }),
        (e.deleteBackward = (n) => {
            !d(e, n, !0) && r(n);
        }),
        (e.deleteForward = (n) => {
            !d(e, n, !1) && i(n);
        }),
        (e.deleteFragment = (n) => {
            if (null != e.selection && u.M8.isExpanded(e.selection)) {
                var r, i, s, o;
                let c = e.selection.anchor,
                    d = e.selection.focus,
                    f = u.bN.getParentInline(e, c),
                    _ = u.bN.getParentInline(e, d);
                if (null != f && null != _ && u.C0.equals(f[1], _[1])) {
                    a(n);
                    return;
                }
                let h = u.M8.isForward(e.selection);
                if (null != f) {
                    let [, n] = f,
                        [a, s] = u.bN.edges(e, n);
                    h && u.Jz.equals(c, a) ? (c = null !== (r = u.bN.before(e, a)) && void 0 !== r ? r : u.bN.start(e, [])) : !h && u.Jz.equals(c, s) && (c = null !== (i = u.bN.after(e, s)) && void 0 !== i ? i : u.bN.end(e, []));
                }
                if (null != _) {
                    let [, n] = _,
                        [r, i] = u.bN.edges(e, n);
                    !h && u.Jz.equals(d, r) ? (d = null !== (s = u.bN.before(e, r)) && void 0 !== s ? s : u.bN.start(e, [])) : h && u.Jz.equals(d, i) && (d = null !== (o = u.bN.after(e, i)) && void 0 !== o ? o : u.bN.end(e, []));
                }
                l.Q.delete(e, {
                    at: {
                        anchor: c,
                        focus: d
                    },
                    reverse: 'backward' === n,
                    select: !0
                });
                return;
            }
            a(n);
        }),
        (o.ML.positions = _),
        e
    );
}
function d(e, n, r) {
    let i = u.bN.getCurrentInline(e),
        a = u.bN.getCurrentBlock(e),
        s = u.M8.toPoint(e.selection);
    if (null == s || null == a || 'block' === n) return !0;
    if ('line' === n && null == i) return !1;
    let o = i;
    if (null == o) {
        let n = (r ? u.bN.before : u.bN.after)(e, s);
        null != n && null != (o = u.bN.getParentInline(e, n)) && (s = n);
    }
    if (null != o) {
        let [i, a] = o;
        if (u.bN.isEmpty(e, i) || u.bN.isVoid(e, i)) l.Q.removeInline(e, a);
        else {
            let [i, o] = u.bN.edges(e, a);
            l.Q.delete(e, {
                at: s,
                unit: n,
                reverse: r,
                select: !0,
                bounds: {
                    anchor: i,
                    focus: o
                }
            });
        }
        return !0;
    }
    let c = !1;
    if (null != a) {
        let [, n] = a,
            [i, o] = u.bN.edges(e, n);
        c = (r && u.Jz.equals(s, i)) || (!r && u.Jz.equals(s, o));
    }
    if ('word' === n && !c) {
        let i = u.bN.getCurrentText(e);
        if (null != i) {
            let [, a] = i,
                [o, c] = u.bN.edges(e, a);
            return (
                l.Q.delete(e, {
                    at: s,
                    unit: n,
                    reverse: r,
                    select: !0,
                    bounds: {
                        anchor: o,
                        focus: c
                    }
                }),
                !0
            );
        }
    }
    return (
        l.Q.delete(e, {
            at: s,
            unit: n,
            reverse: r,
            select: !0
        }),
        !0
    );
}
let f = o.ML.positions;
function* _(e) {
    var n, r, i, a, s, o, l, c;
    let d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { at: _ = e.selection, unit: h = 'offset', reverse: p = !1, voids: m = !1 } = null != d ? d : {};
    if ('word' !== h) {
        for (let n of f(e, {
            ...d,
            voids: m || 'block' === h
        }))
            yield n;
        return;
    }
    if (null == _) return;
    let g = u.bN.range(e, _),
        [E, v] = u.M8.edges(g),
        I = u.bN.richValue(e),
        T = p ? -1 : 1,
        b = null !== (i = null === (n = E.path) || void 0 === n ? void 0 : n[0]) && void 0 !== i ? i : 0,
        y = null !== (a = null === (r = v.path) || void 0 === r ? void 0 : r[0]) && void 0 !== a ? a : I.length - 1,
        S = p ? y : b,
        A = p ? b : y,
        N = S;
    for (;;) {
        let n = I[N],
            r = null !== (l = N === b ? (null === (s = E.path) || void 0 === s ? void 0 : s[1]) : null) && void 0 !== l ? l : 0,
            i = null !== (c = N === y ? (null === (o = v.path) || void 0 === o ? void 0 : o[1]) : null) && void 0 !== c ? c : n.children.length - 1,
            a = p ? i : r,
            _ = p ? r : i,
            h = a;
        for (;;) {
            let r, i;
            let a = n.children[h],
                s = [N, h];
            if (((r = u.C0.equals(s, E.path) || u.C0.isAncestor(s, E.path) ? (!p && u.bN.isEnd(e, E, s) ? null : E) : u.bN.start(e, s)), (i = u.C0.equals(s, v.path) || u.C0.isAncestor(s, v.path) ? (p && u.bN.isStart(e, v, s) ? null : v) : u.bN.end(e, s)), null != r && null != i)) {
                if (u.LC.isText(a) && 0 === a.text.length) {
                    let e = {
                        path: s,
                        offset: 0
                    };
                    yield e, yield e;
                } else if (u.bN.isInline(e, a) && u.LC.isText(a.children[0]) && 0 === a.children[0].text.length) {
                    let e = {
                        path: u.C0.child(s, 0),
                        offset: 0
                    };
                    yield e, yield e;
                } else {
                    let n = {
                        anchor: r,
                        focus: i
                    };
                    for (let r of f(e, {
                        ...d,
                        at: n
                    }))
                        yield r;
                }
            }
            if (h === _) break;
            h += T;
        }
        if (N === A) break;
        N += T;
    }
}
