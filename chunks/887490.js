r.d(n, {
    C0: function () {
        return m;
    },
    Ew: function () {
        return v;
    },
    Jz: function () {
        return g;
    },
    LC: function () {
        return p;
    },
    M8: function () {
        return E;
    },
    aj: function () {
        return _;
    },
    bN: function () {
        return f;
    },
    lP: function () {
        return y;
    },
    q: function () {
        return h;
    }
});
var i = r(47120);
var a = r(512722),
    s = r.n(a),
    o = r(327432),
    l = r(270445),
    u = r(339227),
    c = r(42530);
r(789952);
let d = !1;
{
    let e = l.F3.findDocumentOrShadowRoot;
    (l.F3.findDocumentOrShadowRoot = (n) => {
        var r, i;
        return null !== (i = null === (r = n.windowContext) || void 0 === r ? void 0 : r.renderWindow.document) && void 0 !== i ? i : e(n);
    }),
        (d = !0);
}
let f = {
        ...o.ML,
        ...l.F3,
        richValue: (e) => e.children,
        blocks: (e) => f.richValue(e).map((e, n) => [e, [n]]),
        isBlock: (e, n) => h.isElement(n) && o.ML.isBlock(e, n),
        isInline: (e, n) => h.isElement(n) && o.ML.isInline(e, n),
        isVoid: (e, n) => h.isElement(n) && o.ML.isVoid(e, n),
        isEditorEmpty(e) {
            let n = f.richValue(e);
            return !(n.length > 1) && (0 === n.length || ('line' === n[0].type && h.isEmpty(n[0])));
        },
        getFirstText(e) {
            let n = f.node(e, c.u9);
            return p.isText(n[0]) ? n[0] : null;
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
            let n = null != e.selection ? E.toPoint(e.selection) : null;
            return null == n ? null : f.node(e, n.path);
        },
        getParentBlock(e, n) {
            var r;
            return null !==
                (r = f.above(e, {
                    at: n,
                    match: (n) => h.isElement(n) && f.isBlock(e, n),
                    mode: 'lowest'
                })) && void 0 !== r
                ? r
                : null;
        },
        getParentElement(e, n) {
            var r;
            return null !==
                (r = f.above(e, {
                    at: n,
                    match: (e) => h.isElement(e),
                    mode: 'lowest'
                })) && void 0 !== r
                ? r
                : null;
        },
        getParentInline(e, n) {
            var r;
            return null !==
                (r = f.above(e, {
                    at: n,
                    match: (n) => f.isInline(e, n),
                    mode: 'lowest'
                })) && void 0 !== r
                ? r
                : null;
        },
        getParentVoid(e, n) {
            var r;
            return null !==
                (r = f.above(e, {
                    at: n,
                    match: (n) => f.isVoid(e, n),
                    mode: 'lowest'
                })) && void 0 !== r
                ? r
                : null;
        },
        getSelectedVoid(e) {
            let n;
            if (null == e.selection) return null;
            if (E.isExpanded(e.selection)) {
                let [r, i] = E.edges(e.selection),
                    a = f.after(e, r, { unit: 'offset' }),
                    s = f.before(e, i, { unit: 'offset' });
                if (null == a || null == s || !g.equals(a, s)) return null;
                n = a;
            } else n = e.selection.anchor;
            return null == n ? null : f.getParentVoid(e, n);
        },
        getSelectedText(e, n) {
            let r = null;
            if (n) {
                let n = l.F3.findDocumentOrShadowRoot(e).getSelection();
                if (null != n && n.rangeCount > 0) {
                    let i = n.getRangeAt(0);
                    null != i &&
                        (r = l.F3.toSlateRange(e, i, {
                            exactMatch: !0,
                            suppressThrow: !0
                        }));
                }
            } else r = e.selection;
            return null == r ? '' : this.getTextFromRange(e, r);
        },
        getTextFromRange(e, n) {
            let [r, i] = E.edges(n),
                a = f.nodes(e, {
                    at: n,
                    mode: 'lowest',
                    match: (e) => p.isText(e)
                }),
                s = '';
            for (let [e, n] of a) {
                let a = m.equals(n, r.path) ? r.offset : 0,
                    o = m.equals(n, i.path) ? i.offset : 0;
                s += e.text.substring(a, o);
            }
            return s;
        },
        withoutNormalizing(e, n) {
            let r = f.isNormalizing(e);
            f.setNormalizing(e, !1);
            try {
                n();
            } finally {
                f.setNormalizing(e, r);
            }
            !1 !== r && f.normalize(e);
        },
        areStylesDisabled(e) {
            var n;
            if (!e.previewMarkdown) return !0;
            let r = f.richValue(e),
                i = r[0],
                a = (null == i ? void 0 : i.type) === 'line' ? i.children[0] : null;
            if (null == a || !p.isText(a)) return !1;
            let s = e.chatInputType,
                o = a.text;
            return 1 === r.length && 1 === i.children.length && ((!0 === s.sedReplace && o.startsWith('s/')) || ((null === (n = s.autocomplete) || void 0 === n ? void 0 : n.reactions) === !0 && o.startsWith('+')));
        },
        focus(e) {
            !l.F3.isFocused(e) && (l.F3.focus(e), l.F3.deselect(e));
        },
        getSelectionOverlap(e, n) {
            if (null == e.selection)
                return {
                    anchor: null,
                    focus: null
                };
            if (m.isPath(n)) {
                let r = f.range(e, n),
                    [i] = f.node(e, n);
                if (h.isElement(i)) {
                    let i = f.before(e, n),
                        a = f.after(e, n);
                    n = {
                        anchor: null != i ? i : r.anchor,
                        focus: null != a ? a : r.focus
                    };
                } else n = r;
            }
            let [r, i] = E.edges(n),
                a = null,
                s = null;
            return (
                g.equals(e.selection.anchor, r) ? (a = 'start') : g.equals(e.selection.anchor, i) ? (a = 'end') : E.includes(n, e.selection.anchor) && (a = 'inside'),
                g.equals(e.selection.focus, r) ? (s = 'start') : g.equals(e.selection.focus, i) ? (s = 'end') : E.includes(n, e.selection.focus) && (s = 'inside'),
                {
                    anchor: a,
                    focus: s
                }
            );
        }
    },
    _ = {
        ...o.NB,
        isType: (e, n) => o.W_.isElement(e) && e.type === n,
        isInTypes: (e, n) => o.W_.isElement(e) && n.has(e.type)
    },
    h = {
        ...o.W_,
        updateElement(e, n) {
            let r = f.node(e, n[1]);
            return s()(!f.isEditor(n[0]), 'Element is the root node'), s()(null != r, 'Failed to find element'), s()(h.isElement(r[0]), 'Node at this path is no longer an element'), s()(r[0].type === n[0].type, 'Node at this path is a different type'), r;
        },
        markdown(e, n, r) {
            var i;
            let a = 'line' === e.type && (null === (i = e.codeBlockState) || void 0 === i ? void 0 : i.wasInCodeBlock) === !0,
                s = e.children.map((e) => (p.isText(e) ? e.text : '?')),
                o = s.join('');
            return {
                entries: u.Q(o, null != n ? n : null, a, r),
                serializedChildren: s
            };
        },
        isEmpty(e) {
            if (e.children.length > 1) return !1;
            if (0 === e.children.length) return !0;
            let n = e.children[0];
            return p.isText(n) && 0 === n.text.length;
        }
    },
    p = { ...o.xv },
    m = {
        ...o.y$,
        isFirstEditorBlock: (e) => m.equals(e, c.YD),
        isFirstEditorText: (e) => m.equals(e, c.u9),
        isFirstChild: (e, n) => m.equals(n, m.child(e, 0)),
        child: (e, n) => [...e, n]
    },
    g = {
        ...o.E9,
        start(e) {
            let [, n] = e;
            return {
                path: m.child(n, 0),
                offset: 0
            };
        },
        end(e) {
            let [n, r] = e,
                i = n.children[n.children.length - 1];
            return {
                path: m.child(r, n.children.length - 1),
                offset: p.isText(i) ? i.text.length : 0
            };
        },
        isAtStart(e, n) {
            return g.equals(e, this.start(n));
        },
        isAtEnd(e, n) {
            return g.equals(e, this.end(n));
        },
        clamp(e, n) {
            let [r, i] = E.edges(n);
            return g.isBefore(e, r) && (e = r), g.isAfter(e, i) && (e = i), e;
        }
    },
    E = {
        ...o.e6,
        toPoint: (e) => (null == e || E.isExpanded(e) ? null : e.anchor),
        children(e) {
            let [n, r] = e,
                i = n.children[n.children.length - 1];
            return {
                anchor: {
                    path: m.child(r, 0),
                    offset: 0
                },
                focus: {
                    path: m.child(r, n.children.length - 1),
                    offset: p.isText(i) ? i.text.length : 0
                }
            };
        },
        clamp(e, n) {
            let [r, i] = E.edges(e),
                [a, s] = E.edges(n);
            return (g.isBefore(r, a) && (r = a), g.isAfter(i, s) && (i = s), E.isForward(e))
                ? {
                      anchor: r,
                      focus: i
                  }
                : {
                      anchor: i,
                      focus: r
                  };
        }
    },
    v = {
        equals: (e, n) => (null == e && null == n) || (null != e && null != n && E.equals(e, n)),
        isValid(e, n) {
            if (null == n) return !1;
            let { anchor: r, focus: i } = n;
            if (!f.hasPath(e, r.path) || !f.hasPath(e, i.path)) return !1;
            let [a] = f.node(e, r.path),
                [s] = f.node(e, i.path);
            return p.isText(a) && p.isText(s) && r.offset <= a.text.length && i.offset <= s.text.length;
        }
    },
    I = (e, n) => {
        let r = (n.top + n.bottom) / 2;
        return e.top <= r && e.bottom >= r;
    },
    T = (e, n, r) => {
        let i = f.toDOMRange(e, n).getBoundingClientRect(),
            a = f.toDOMRange(e, r).getBoundingClientRect();
        return I(i, a) && I(a, i);
    },
    b = (e, n, r, i) => {
        let a = {
                anchor: n,
                focus: n
            },
            s = 0,
            o = r.length,
            l = Math.floor((s + o) / 2);
        for (; l !== s; )
            if (
                (T(
                    e,
                    {
                        anchor: r[l],
                        focus: r[l]
                    },
                    a
                )
                    ? i
                        ? (o = l)
                        : (s = l)
                    : i
                      ? (s = l)
                      : (o = l),
                (l = Math.floor((s + o) / 2)),
                !i && l === r.length - 2 && o === r.length - 1)
            ) {
                let n = r[r.length - 1];
                T(
                    e,
                    {
                        anchor: n,
                        focus: n
                    },
                    a
                ) && (l = o);
            }
        return r[l];
    },
    y = {
        getLineStart(e, n, r) {
            let i;
            let a = f.getParentElement(e, n);
            if (null == a) return null;
            let s = f.previous(e, {
                at: n,
                match: (n) => f.isInline(e, n) && !f.isVoid(e, n) && n !== a[0]
            });
            null != s && (i = f.after(e, s[1])), null == i && (i = f.start(e, a[1]));
            let o = {
                    anchor: i,
                    focus: n
                },
                l = Array.from(f.positions(e, { at: o })),
                u = b(e, n, l, !0);
            if (r && g.equals(n, u) && !g.isAtEnd(n, a)) {
                let r = f.after(e, n);
                if (null == r) return u;
                u = b(e, r, l, !0);
            }
            return u;
        },
        getLineEnd(e, n, r) {
            let i;
            let a = f.getParentElement(e, n);
            if (null == a) return null;
            let s = f.next(e, {
                at: n,
                match: (n) => f.isInline(e, n) && !f.isVoid(e, n) && n !== a[0]
            });
            null != s && (i = f.before(e, s[1])), null == i && (i = f.end(e, a[1]));
            let o = {
                    anchor: n,
                    focus: i
                },
                l = Array.from(f.positions(e, { at: o })),
                u = b(e, n, l, !1);
            if (r && g.equals(n, u) && !g.isAtEnd(n, a)) {
                let r = f.after(e, n);
                if (null == r) return u;
                u = b(e, r, l, !1);
            }
            return u;
        },
        getLineActionRange(e, n) {
            let r = E.toPoint(e.selection);
            if (null == r) return null;
            if (n) {
                let n = y.getLineStart(e, r, !1);
                return null == n
                    ? null
                    : {
                          anchor: n,
                          focus: r
                      };
            }
            {
                let n = y.getLineEnd(e, r, !0);
                return null == n
                    ? null
                    : {
                          anchor: r,
                          focus: n
                      };
            }
        }
    };
