n.d(t, {
    C0: function () {
        return h;
    },
    Ew: function () {
        return I;
    },
    Jz: function () {
        return p;
    },
    LC: function () {
        return f;
    },
    M8: function () {
        return m;
    },
    aj: function () {
        return _;
    },
    bN: function () {
        return d;
    },
    lP: function () {
        return A;
    },
    q: function () {
        return E;
    }
});
var r = n(47120);
var i = n(512722),
    a = n.n(i),
    o = n(327432),
    s = n(519953),
    l = n(339227),
    u = n(42530);
n(789952);
let c = !1;
{
    let e = s.F3.findDocumentOrShadowRoot;
    (s.F3.findDocumentOrShadowRoot = (t) => {
        var n, r;
        return null !== (r = null === (n = t.windowContext) || void 0 === n ? void 0 : n.renderWindow.document) && void 0 !== r ? r : e(t);
    }),
        (c = !0);
}
let d = {
        ...o.ML,
        ...s.F3,
        richValue: (e) => e.children,
        blocks: (e) => d.richValue(e).map((e, t) => [e, [t]]),
        isBlock: (e, t) => E.isElement(t) && o.ML.isBlock(e, t),
        isInline: (e, t) => E.isElement(t) && o.ML.isInline(e, t),
        isVoid: (e, t) => E.isElement(t) && o.ML.isVoid(e, t),
        isEditorEmpty(e) {
            let t = d.richValue(e);
            return !(t.length > 1) && (0 === t.length || ('line' === t[0].type && E.isEmpty(t[0])));
        },
        getFirstText(e) {
            let t = d.node(e, u.u9);
            return f.isText(t[0]) ? t[0] : null;
        },
        getCurrentBlock(e) {
            return null == e.selection ? null : this.getParentBlock(e, e.selection);
        },
        getCurrentElement(e) {
            return null == e.selection ? null : this.getParentElement(e, e.selection);
        },
        getCurrentInline(e) {
            return null == e.selection ? null : this.getParentInline(e, e.selection);
        },
        getCurrentVoid(e) {
            return null == e.selection ? null : this.getParentVoid(e, e.selection);
        },
        getCurrentText(e) {
            let t = null != e.selection ? m.toPoint(e.selection) : null;
            return null == t ? null : d.node(e, t.path);
        },
        getParentBlock(e, t) {
            var n;
            return null !==
                (n = d.above(e, {
                    at: t,
                    match: (t) => E.isElement(t) && d.isBlock(e, t),
                    mode: 'lowest'
                })) && void 0 !== n
                ? n
                : null;
        },
        getParentElement(e, t) {
            var n;
            return null !==
                (n = d.above(e, {
                    at: t,
                    match: (e) => E.isElement(e),
                    mode: 'lowest'
                })) && void 0 !== n
                ? n
                : null;
        },
        getParentInline(e, t) {
            var n;
            return null !==
                (n = d.above(e, {
                    at: t,
                    match: (t) => d.isInline(e, t),
                    mode: 'lowest'
                })) && void 0 !== n
                ? n
                : null;
        },
        getParentVoid(e, t) {
            var n;
            return null !==
                (n = d.above(e, {
                    at: t,
                    match: (t) => d.isVoid(e, t),
                    mode: 'lowest'
                })) && void 0 !== n
                ? n
                : null;
        },
        getSelectedVoid(e) {
            let t;
            if (null == e.selection) return null;
            if (m.isExpanded(e.selection)) {
                let [n, r] = m.edges(e.selection),
                    i = d.after(e, n, { unit: 'offset' }),
                    a = d.before(e, r, { unit: 'offset' });
                if (null == i || null == a || !p.equals(i, a)) return null;
                t = i;
            } else t = e.selection.anchor;
            return null == t ? null : d.getParentVoid(e, t);
        },
        getSelectedText(e, t) {
            let n = null;
            if (t) {
                let t = s.F3.findDocumentOrShadowRoot(e).getSelection();
                if (null != t && t.rangeCount > 0) {
                    let r = t.getRangeAt(0);
                    null != r &&
                        (n = s.F3.toSlateRange(e, r, {
                            exactMatch: !0,
                            suppressThrow: !0
                        }));
                }
            } else n = e.selection;
            return null == n ? '' : this.getTextFromRange(e, n);
        },
        getTextFromRange(e, t) {
            let [n, r] = m.edges(t),
                i = d.nodes(e, {
                    at: t,
                    mode: 'lowest',
                    match: (e) => f.isText(e)
                }),
                a = '';
            for (let [e, t] of i) {
                let i = h.equals(t, n.path) ? n.offset : 0,
                    o = h.equals(t, r.path) ? r.offset : 0;
                a += e.text.substring(i, o);
            }
            return a;
        },
        withoutNormalizing(e, t) {
            let n = d.isNormalizing(e);
            d.setNormalizing(e, !1);
            try {
                t();
            } finally {
                d.setNormalizing(e, n);
            }
            !1 !== n && d.normalize(e);
        },
        areStylesDisabled(e) {
            var t;
            if (!e.previewMarkdown) return !0;
            let n = d.richValue(e),
                r = n[0],
                i = (null == r ? void 0 : r.type) === 'line' ? r.children[0] : null;
            if (null == i || !f.isText(i)) return !1;
            let a = e.chatInputType,
                o = i.text;
            return 1 === n.length && 1 === r.children.length && ((!0 === a.sedReplace && o.startsWith('s/')) || ((null === (t = a.autocomplete) || void 0 === t ? void 0 : t.reactions) === !0 && o.startsWith('+')));
        },
        focus(e) {
            !s.F3.isFocused(e) && (s.F3.focus(e), s.F3.deselect(e));
        },
        getSelectionOverlap(e, t) {
            if (null == e.selection)
                return {
                    anchor: null,
                    focus: null
                };
            if (h.isPath(t)) {
                let n = d.range(e, t),
                    [r] = d.node(e, t);
                if (E.isElement(r)) {
                    let r = d.before(e, t),
                        i = d.after(e, t);
                    t = {
                        anchor: null != r ? r : n.anchor,
                        focus: null != i ? i : n.focus
                    };
                } else t = n;
            }
            let [n, r] = m.edges(t),
                i = null,
                a = null;
            return (
                p.equals(e.selection.anchor, n) ? (i = 'start') : p.equals(e.selection.anchor, r) ? (i = 'end') : m.includes(t, e.selection.anchor) && (i = 'inside'),
                p.equals(e.selection.focus, n) ? (a = 'start') : p.equals(e.selection.focus, r) ? (a = 'end') : m.includes(t, e.selection.focus) && (a = 'inside'),
                {
                    anchor: i,
                    focus: a
                }
            );
        }
    },
    _ = {
        ...o.NB,
        isType: (e, t) => o.W_.isElement(e) && e.type === t,
        isInTypes: (e, t) => o.W_.isElement(e) && t.has(e.type)
    },
    E = {
        ...o.W_,
        updateElement(e, t) {
            let n = d.node(e, t[1]);
            return a()(!d.isEditor(t[0]), 'Element is the root node'), a()(null != n, 'Failed to find element'), a()(E.isElement(n[0]), 'Node at this path is no longer an element'), a()(n[0].type === t[0].type, 'Node at this path is a different type'), n;
        },
        markdown(e, t, n) {
            var r;
            let i = 'line' === e.type && (null === (r = e.codeBlockState) || void 0 === r ? void 0 : r.wasInCodeBlock) === !0,
                a = e.children.map((e) => (f.isText(e) ? e.text : '?')),
                o = a.join('');
            return {
                entries: l.Q(o, null != t ? t : null, i, n),
                serializedChildren: a
            };
        },
        isEmpty(e) {
            if (e.children.length > 1) return !1;
            if (0 === e.children.length) return !0;
            let t = e.children[0];
            return f.isText(t) && 0 === t.text.length;
        }
    },
    f = { ...o.xv },
    h = {
        ...o.y$,
        isFirstEditorBlock: (e) => h.equals(e, u.YD),
        isFirstEditorText: (e) => h.equals(e, u.u9),
        isFirstChild: (e, t) => h.equals(t, h.child(e, 0)),
        child: (e, t) => [...e, t]
    },
    p = {
        ...o.E9,
        start(e) {
            let [, t] = e;
            return {
                path: h.child(t, 0),
                offset: 0
            };
        },
        end(e) {
            let [t, n] = e,
                r = t.children[t.children.length - 1];
            return {
                path: h.child(n, t.children.length - 1),
                offset: f.isText(r) ? r.text.length : 0
            };
        },
        isAtStart(e, t) {
            return p.equals(e, this.start(t));
        },
        isAtEnd(e, t) {
            return p.equals(e, this.end(t));
        },
        clamp(e, t) {
            let [n, r] = m.edges(t);
            return p.isBefore(e, n) && (e = n), p.isAfter(e, r) && (e = r), e;
        }
    },
    m = {
        ...o.e6,
        toPoint: (e) => (null == e || m.isExpanded(e) ? null : e.anchor),
        children(e) {
            let [t, n] = e,
                r = t.children[t.children.length - 1];
            return {
                anchor: {
                    path: h.child(n, 0),
                    offset: 0
                },
                focus: {
                    path: h.child(n, t.children.length - 1),
                    offset: f.isText(r) ? r.text.length : 0
                }
            };
        },
        clamp(e, t) {
            let [n, r] = m.edges(e),
                [i, a] = m.edges(t);
            return (p.isBefore(n, i) && (n = i), p.isAfter(r, a) && (r = a), m.isForward(e))
                ? {
                      anchor: n,
                      focus: r
                  }
                : {
                      anchor: r,
                      focus: n
                  };
        }
    },
    I = {
        equals: (e, t) => (null == e && null == t) || (null != e && null != t && m.equals(e, t)),
        isValid(e, t) {
            if (null == t) return !1;
            let { anchor: n, focus: r } = t;
            if (!d.hasPath(e, n.path) || !d.hasPath(e, r.path)) return !1;
            let [i] = d.node(e, n.path),
                [a] = d.node(e, r.path);
            return f.isText(i) && f.isText(a) && n.offset <= i.text.length && r.offset <= a.text.length;
        }
    },
    T = (e, t) => {
        let n = (t.top + t.bottom) / 2;
        return e.top <= n && e.bottom >= n;
    },
    g = (e, t, n) => {
        let r = d.toDOMRange(e, t).getBoundingClientRect(),
            i = d.toDOMRange(e, n).getBoundingClientRect();
        return T(r, i) && T(i, r);
    },
    S = (e, t, n, r) => {
        let i = {
                anchor: t,
                focus: t
            },
            a = 0,
            o = n.length,
            s = Math.floor((a + o) / 2);
        for (; s !== a; )
            if (
                (g(
                    e,
                    {
                        anchor: n[s],
                        focus: n[s]
                    },
                    i
                )
                    ? r
                        ? (o = s)
                        : (a = s)
                    : r
                      ? (a = s)
                      : (o = s),
                (s = Math.floor((a + o) / 2)),
                !r && s === n.length - 2 && o === n.length - 1)
            ) {
                let t = n[n.length - 1];
                g(
                    e,
                    {
                        anchor: t,
                        focus: t
                    },
                    i
                ) && (s = o);
            }
        return n[s];
    },
    A = {
        getLineStart(e, t, n) {
            let r;
            let i = d.getParentElement(e, t);
            if (null == i) return null;
            let a = d.previous(e, {
                at: t,
                match: (t) => d.isInline(e, t) && !d.isVoid(e, t) && t !== i[0]
            });
            null != a && (r = d.after(e, a[1])), null == r && (r = d.start(e, i[1]));
            let o = {
                    anchor: r,
                    focus: t
                },
                s = Array.from(d.positions(e, { at: o })),
                l = S(e, t, s, !0);
            if (n && p.equals(t, l) && !p.isAtEnd(t, i)) {
                let n = d.after(e, t);
                if (null == n) return l;
                l = S(e, n, s, !0);
            }
            return l;
        },
        getLineEnd(e, t, n) {
            let r;
            let i = d.getParentElement(e, t);
            if (null == i) return null;
            let a = d.next(e, {
                at: t,
                match: (t) => d.isInline(e, t) && !d.isVoid(e, t) && t !== i[0]
            });
            null != a && (r = d.before(e, a[1])), null == r && (r = d.end(e, i[1]));
            let o = {
                    anchor: t,
                    focus: r
                },
                s = Array.from(d.positions(e, { at: o })),
                l = S(e, t, s, !1);
            if (n && p.equals(t, l) && !p.isAtEnd(t, i)) {
                let n = d.after(e, t);
                if (null == n) return l;
                l = S(e, n, s, !1);
            }
            return l;
        },
        getLineActionRange(e, t) {
            let n = m.toPoint(e.selection);
            if (null == n) return null;
            if (t) {
                let t = A.getLineStart(e, n, !1);
                return null == t
                    ? null
                    : {
                          anchor: t,
                          focus: n
                      };
            }
            {
                let t = A.getLineEnd(e, n, !0);
                return null == t
                    ? null
                    : {
                          anchor: n,
                          focus: t
                      };
            }
        }
    };
