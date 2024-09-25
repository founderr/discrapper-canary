n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(47120);
var i = n(571269);
var a = n(298267);
var o = n(327432),
    s = n(436660),
    l = n(887490);
function u(e) {
    let { apply: t, deleteBackward: n, deleteForward: r, deleteFragment: i, insertText: a } = e;
    return (
        (e.apply = (n) => {
            var r;
            if ('set_selection' === n.type && (null === (r = e.composition) || void 0 === r ? void 0 : r.startedInsideInline) && l.M8.isRange(n.properties) && l.M8.isRange(n.newProperties) && l.M8.isCollapsed(n.newProperties)) {
                let t = l.bN.getParentInline(e, n.properties),
                    r = l.bN.getParentInline(e, n.newProperties);
                if (null != t && (null == r || !l.C0.equals(t[1], r[1]))) return;
            }
            t(n);
        }),
        (e.insertText = (t) => {
            if (null != e.selection && null != l.bN.getCurrentInline(e)) {
                s.Q.insertText(e, t);
                return;
            }
            a(t);
        }),
        (e.deleteBackward = (t) => {
            !c(e, t, !0) && n(t);
        }),
        (e.deleteForward = (t) => {
            !c(e, t, !1) && r(t);
        }),
        (e.deleteFragment = (t) => {
            if (null != e.selection && l.M8.isExpanded(e.selection)) {
                var n, r, a, o;
                let u = e.selection.anchor,
                    c = e.selection.focus,
                    d = l.bN.getParentInline(e, u),
                    _ = l.bN.getParentInline(e, c);
                if (null != d && null != _ && l.C0.equals(d[1], _[1])) {
                    i(t);
                    return;
                }
                let E = l.M8.isForward(e.selection);
                if (null != d) {
                    let [, t] = d,
                        [i, a] = l.bN.edges(e, t);
                    E && l.Jz.equals(u, i) ? (u = null !== (n = l.bN.before(e, i)) && void 0 !== n ? n : l.bN.start(e, [])) : !E && l.Jz.equals(u, a) && (u = null !== (r = l.bN.after(e, a)) && void 0 !== r ? r : l.bN.end(e, []));
                }
                if (null != _) {
                    let [, t] = _,
                        [n, r] = l.bN.edges(e, t);
                    !E && l.Jz.equals(c, n) ? (c = null !== (a = l.bN.before(e, n)) && void 0 !== a ? a : l.bN.start(e, [])) : E && l.Jz.equals(c, r) && (c = null !== (o = l.bN.after(e, r)) && void 0 !== o ? o : l.bN.end(e, []));
                }
                s.Q.delete(e, {
                    at: {
                        anchor: u,
                        focus: c
                    },
                    reverse: 'backward' === t,
                    select: !0
                });
                return;
            }
            i(t);
        }),
        (o.ML.positions = _),
        e
    );
}
function c(e, t, n) {
    let r = l.bN.getCurrentInline(e),
        i = l.bN.getCurrentBlock(e),
        a = l.M8.toPoint(e.selection);
    if (null == a || null == i || 'block' === t) return !0;
    if ('line' === t && null == r) return !1;
    let o = r;
    if (null == o) {
        let t = (n ? l.bN.before : l.bN.after)(e, a);
        null != t && null != (o = l.bN.getParentInline(e, t)) && (a = t);
    }
    if (null != o) {
        let [r, i] = o;
        if (l.bN.isEmpty(e, r) || l.bN.isVoid(e, r)) s.Q.removeInline(e, i);
        else {
            let [r, o] = l.bN.edges(e, i);
            s.Q.delete(e, {
                at: a,
                unit: t,
                reverse: n,
                select: !0,
                bounds: {
                    anchor: r,
                    focus: o
                }
            });
        }
        return !0;
    }
    let u = !1;
    if (null != i) {
        let [, t] = i,
            [r, o] = l.bN.edges(e, t);
        u = (n && l.Jz.equals(a, r)) || (!n && l.Jz.equals(a, o));
    }
    if ('word' === t && !u) {
        let r = l.bN.getCurrentText(e);
        if (null != r) {
            let [, i] = r,
                [o, u] = l.bN.edges(e, i);
            return (
                s.Q.delete(e, {
                    at: a,
                    unit: t,
                    reverse: n,
                    select: !0,
                    bounds: {
                        anchor: o,
                        focus: u
                    }
                }),
                !0
            );
        }
    }
    return (
        s.Q.delete(e, {
            at: a,
            unit: t,
            reverse: n,
            select: !0
        }),
        !0
    );
}
let d = o.ML.positions;
function* _(e) {
    var t, n, r, i, a, o, s, u;
    let c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { at: _ = e.selection, unit: E = 'offset', reverse: f = !1, voids: h = !1 } = null != c ? c : {};
    if ('word' !== E) {
        for (let t of d(e, {
            ...c,
            voids: h || 'block' === E
        }))
            yield t;
        return;
    }
    if (null == _) return;
    let p = l.bN.range(e, _),
        [m, I] = l.M8.edges(p),
        T = l.bN.richValue(e),
        g = f ? -1 : 1,
        S = null !== (r = null === (t = m.path) || void 0 === t ? void 0 : t[0]) && void 0 !== r ? r : 0,
        A = null !== (i = null === (n = I.path) || void 0 === n ? void 0 : n[0]) && void 0 !== i ? i : T.length - 1,
        v = f ? A : S,
        N = f ? S : A,
        O = v;
    for (;;) {
        let t = T[O],
            n = null !== (s = O === S ? (null === (a = m.path) || void 0 === a ? void 0 : a[1]) : null) && void 0 !== s ? s : 0,
            r = null !== (u = O === A ? (null === (o = I.path) || void 0 === o ? void 0 : o[1]) : null) && void 0 !== u ? u : t.children.length - 1,
            i = f ? r : n,
            _ = f ? n : r,
            E = i;
        for (;;) {
            let n, r;
            let i = t.children[E],
                a = [O, E];
            if (((n = l.C0.equals(a, m.path) || l.C0.isAncestor(a, m.path) ? (!f && l.bN.isEnd(e, m, a) ? null : m) : l.bN.start(e, a)), (r = l.C0.equals(a, I.path) || l.C0.isAncestor(a, I.path) ? (f && l.bN.isStart(e, I, a) ? null : I) : l.bN.end(e, a)), null != n && null != r)) {
                if (l.LC.isText(i) && 0 === i.text.length) {
                    let e = {
                        path: a,
                        offset: 0
                    };
                    yield e, yield e;
                } else if (l.bN.isInline(e, i) && l.LC.isText(i.children[0]) && 0 === i.children[0].text.length) {
                    let e = {
                        path: l.C0.child(a, 0),
                        offset: 0
                    };
                    yield e, yield e;
                } else {
                    let t = {
                        anchor: n,
                        focus: r
                    };
                    for (let n of d(e, {
                        ...c,
                        at: t
                    }))
                        yield n;
                }
            }
            if (E === _) break;
            E += g;
        }
        if (O === N) break;
        O += g;
    }
}
