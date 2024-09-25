n.d(t, {
    Q: function () {
        return c;
    }
});
var r = n(571269);
var i = n(298267);
var a = n(47120);
var o = n(327432),
    s = n(91313),
    l = n(887490),
    u = n(42530);
let c = {
    ...o.YR,
    resetSelectionToStart(e) {
        o.YR.select(e, l.bN.start(e, []));
    },
    resetSelectionToEnd(e) {
        o.YR.select(e, l.bN.end(e, []));
    },
    delete(e, t) {
        let { at: n, distance: r, unit: i, reverse: a = !1, select: s = !1, bounds: u, voids: c } = t;
        if (null == n) {
            if (null == e.selection) return;
            n = e.selection;
        }
        let [d, _] = l.M8.isRange(n) ? l.M8.edges(n) : l.bN.edges(e, n);
        if (null != r || null != i) {
            var E, f, h;
            if (a) {
                let t =
                    null !==
                        (E = l.bN.before(e, d, {
                            distance: r,
                            unit: i
                        })) && void 0 !== E
                        ? E
                        : l.bN.start(e, []);
                if ('character' === i && (null != r ? r : 1) === 1 && l.C0.equals(d.path, _.path)) {
                    let n = l.bN.leaf(e, d.path),
                        i = null != n ? n[0].text : '';
                    i.length > 0 &&
                        null != i[i.length - 1].match(/[\u0E00-\u0E7F]/) &&
                        (t =
                            null !==
                                (f = l.bN.before(e, d, {
                                    distance: r,
                                    unit: 'offset'
                                })) && void 0 !== f
                                ? f
                                : l.bN.start(e, []));
                }
                d = t;
            } else
                _ =
                    null !==
                        (h = l.bN.after(e, _, {
                            distance: r,
                            unit: i
                        })) && void 0 !== h
                        ? h
                        : l.bN.end(e, []);
        }
        if (null != u) {
            let [e, t] = l.M8.edges(u);
            l.Jz.isBefore(d, e) && (d = e), l.Jz.isAfter(_, t) && (_ = t);
        }
        !l.Jz.equals(d, _) &&
            (o.YR.delete(e, {
                at: {
                    anchor: d,
                    focus: _
                },
                hanging: !0,
                voids: c
            }),
            s && l.bN.hasPath(e, d.path) && o.YR.select(e, d));
    },
    textToText(e, t, n) {
        var r;
        let i = l.bN.getSelectionOverlap(e, n),
            [a, s] = l.M8.edges(n),
            u = null !== (r = l.bN.before(e, a)) && void 0 !== r ? r : l.bN.start(e, []),
            c = l.bN.after(e, s);
        l.M8.isExpanded(n) &&
            o.YR.delete(e, {
                at: n,
                voids: !0
            }),
            o.YR.insertText(e, t, { at: u }),
            (u = null != u ? u : l.bN.start(e, [])),
            (c = null != c ? c : l.bN.end(e, [])),
            _(e, i, u, c, c);
    },
    textToVoid(e, t, n) {
        let r = l.bN.getSelectionOverlap(e, n),
            i = l.M8.start(n),
            a = l.C0.next(i.path),
            s = {
                path: l.C0.next(a),
                offset: 0
            };
        o.YR.delete(e, {
            at: n,
            voids: !0
        }),
            0 === i.offset && o.YR.insertNodes(e, [{ text: '' }], { at: i.path }),
            o.YR.insertNodes(e, [t], { at: i }),
            (!l.bN.hasPath(e, s.path) || !l.LC.isText(l.bN.node(e, s.path)[0])) && o.YR.insertNodes(e, [{ text: '' }], { at: s.path }),
            _(e, r, i, s, s);
    },
    textToInline(e, t, n) {
        let r = l.bN.getSelectionOverlap(e, n),
            i = t.children[t.children.length - 1],
            a = l.M8.start(n),
            s = l.C0.next(a.path),
            u = {
                path: l.C0.child(s, t.children.length - 1),
                offset: l.LC.isText(i) ? i.text.length : 0
            };
        o.YR.delete(e, {
            at: n,
            voids: !0
        }),
            0 === a.offset && o.YR.insertNodes(e, [{ text: '' }], { at: a.path }),
            o.YR.insertNodes(e, [t], { at: a }),
            _(e, r, a, u, u);
    },
    voidToText(e, t, n) {
        var r;
        let i = l.bN.getSelectionOverlap(e, n),
            a = null !== (r = l.bN.before(e, n)) && void 0 !== r ? r : l.bN.start(e, []),
            s = {
                path: a.path,
                offset: a.offset + t.length
            };
        o.YR.delete(e, {
            at: n,
            voids: !0
        }),
            o.YR.insertText(e, t, { at: a }),
            _(e, i, a, a, s);
    },
    removeInline(e, t) {
        var n;
        let r = l.bN.getSelectionOverlap(e, t),
            i = null !== (n = l.bN.before(e, t)) && void 0 !== n ? n : l.bN.start(e, []);
        o.YR.delete(e, {
            at: t,
            voids: !0
        }),
            _(e, r, i, i, i);
    },
    removeInlineChildren(e, t) {
        let [n, r] = t,
            i = l.bN.getSelectionOverlap(e, r),
            a = {
                path: l.C0.child(r, 0),
                offset: 0
            };
        l.bN.withoutNormalizing(e, () => {
            for (let t = n.children.length - 1; t >= 0; t--)
                o.YR.removeNodes(e, {
                    at: l.C0.child(r, t),
                    voids: !0
                });
        }),
            _(e, i, null, a, null);
    },
    selectCommandOption(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            r = s.cr(e);
        if (null != r)
            for (let i = 0; i < r[0].children.length; i++) {
                let a = r[0].children[i];
                if (l.aj.isType(a, 'applicationCommandOption') && a.optionName === t) {
                    n ? o.YR.select(e, [0, i]) : o.YR.select(e, l.bN.end(e, [0, i]));
                    return;
                }
            }
    },
    selectPreviousCommandOption(e) {
        if (null == s.cr(e)) return;
        let t = null != e.selection ? e.selection.focus.path : l.bN.end(e, u.YD).path,
            n = s.HZ(e),
            r = l.bN.previous(e, {
                at: t,
                match: (e) => e !== (null == n ? void 0 : n[0]) && l.aj.isType(e, 'applicationCommandOption')
            });
        null != r ? o.YR.select(e, r[1]) : l.C0.isAfter(t, u.u9) && o.YR.select(e, l.bN.end(e, u.u9));
    },
    selectNextCommandOption(e) {
        if (null == s.cr(e)) return;
        let t = null != e.selection ? e.selection.focus.path : l.bN.start(e, u.YD).path,
            n = s.HZ(e),
            r = l.bN.next(e, {
                at: t,
                match: (e) => e !== (null == n ? void 0 : n[0]) && l.aj.isType(e, 'applicationCommandOption')
            });
        null != r ? o.YR.select(e, r[1]) : c.resetSelectionToEnd(e);
    },
    insertCommandOption(e, t) {
        c.resetSelectionToEnd(e),
            c.insertNodes(e, [
                {
                    type: 'applicationCommandOption',
                    optionName: t.name,
                    optionDisplayName: t.displayName,
                    optionType: t.type,
                    children: [{ text: '' }]
                }
            ]);
    },
    keyboardMove(e, t) {
        let { reverse: n = !1, unit: r = 'character', edge: i } = null != t ? t : {},
            a = e.selection;
        if (null == a) return;
        if (void 0 === i && l.M8.isExpanded(a)) {
            o.YR.collapse(e, { edge: n ? 'start' : 'end' });
            return;
        }
        let s = l.bN.leaf(e, a.anchor.path);
        if (null == s) return;
        let u = n ? l.bN.before : l.bN.after,
            c = a.focus;
        for (; null != c; ) {
            let t = r;
            n || a.focus.offset !== s[0].text.length ? n && 0 === a.focus.offset && (t = 'offset') : (t = 'offset');
            let i = u(e, c, { unit: t });
            if (null == i || l.Jz.equals(c, i)) {
                c = void 0;
                break;
            }
            if (((c = i), null == l.bN.getParentVoid(e, c))) break;
        }
        null != c &&
            ('focus' === i
                ? o.YR.setSelection(e, { focus: c })
                : o.YR.setSelection(e, {
                      focus: c,
                      anchor: c
                  }));
    }
};
function d(e, t, n, r, i) {
    switch (t) {
        case 'start':
            return n;
        case 'inside':
            return r;
        case 'end':
            return i;
    }
    return e;
}
function _(e, t, n, r, i) {
    var a, o;
    if (null == t.anchor && null == t.focus) return;
    let s = d(null === (a = e.selection) || void 0 === a ? void 0 : a.anchor, t.anchor, n, r, i),
        l = d(null === (o = e.selection) || void 0 === o ? void 0 : o.focus, t.focus, n, r, i);
    if (null == s || null == l) return;
    let u = {
        anchor: s,
        focus: l
    };
    c.select(e, u);
}
