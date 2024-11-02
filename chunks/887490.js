n.d(t, {
    C0: function () {
        return h;
    },
    Ew: function () {
        return g;
    },
    Jz: function () {
        return p;
    },
    LC: function () {
        return _;
    },
    M8: function () {
        return m;
    },
    aj: function () {
        return d;
    },
    bN: function () {
        return c;
    },
    lP: function () {
        return S;
    },
    q: function () {
        return f;
    }
}),
    n(47120);
var r = n(512722),
    i = n.n(r),
    a = n(327432),
    s = n(270445),
    o = n(339227),
    l = n(42530);
n(789952);
let u = !1;
{
    let e = s.F3.findDocumentOrShadowRoot;
    (s.F3.findDocumentOrShadowRoot = (t) => {
        var n, r;
        return null !== (r = null === (n = t.windowContext) || void 0 === n ? void 0 : n.renderWindow.document) && void 0 !== r ? r : e(t);
    }),
        (u = !0);
}
let c = {
        ...a.ML,
        ...s.F3,
        richValue: (e) => e.children,
        blocks: (e) => c.richValue(e).map((e, t) => [e, [t]]),
        isBlock: (e, t) => f.isElement(t) && a.ML.isBlock(e, t),
        isInline: (e, t) => f.isElement(t) && a.ML.isInline(e, t),
        isVoid: (e, t) => f.isElement(t) && a.ML.isVoid(e, t),
        isEditorEmpty(e) {
            let t = c.richValue(e);
            return !(t.length > 1) && (0 === t.length || ('line' === t[0].type && f.isEmpty(t[0])));
        },
        getFirstText(e) {
            let t = c.node(e, l.u9);
            return _.isText(t[0]) ? t[0] : null;
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
            return null == t ? null : c.node(e, t.path);
        },
        getParentBlock(e, t) {
            var n;
            return null !==
                (n = c.above(e, {
                    at: t,
                    match: (t) => f.isElement(t) && c.isBlock(e, t),
                    mode: 'lowest'
                })) && void 0 !== n
                ? n
                : null;
        },
        getParentElement(e, t) {
            var n;
            return null !==
                (n = c.above(e, {
                    at: t,
                    match: (e) => f.isElement(e),
                    mode: 'lowest'
                })) && void 0 !== n
                ? n
                : null;
        },
        getParentInline(e, t) {
            var n;
            return null !==
                (n = c.above(e, {
                    at: t,
                    match: (t) => c.isInline(e, t),
                    mode: 'lowest'
                })) && void 0 !== n
                ? n
                : null;
        },
        getParentVoid(e, t) {
            var n;
            return null !==
                (n = c.above(e, {
                    at: t,
                    match: (t) => c.isVoid(e, t),
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
                    i = c.after(e, n, { unit: 'offset' }),
                    a = c.before(e, r, { unit: 'offset' });
                if (null == i || null == a || !p.equals(i, a)) return null;
                t = i;
            } else t = e.selection.anchor;
            return null == t ? null : c.getParentVoid(e, t);
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
                i = c.nodes(e, {
                    at: t,
                    mode: 'lowest',
                    match: (e) => _.isText(e)
                }),
                a = '';
            for (let [e, t] of i) {
                let i = h.equals(t, n.path) ? n.offset : 0,
                    s = h.equals(t, r.path) ? r.offset : 0;
                a += e.text.substring(i, s);
            }
            return a;
        },
        withoutNormalizing(e, t) {
            let n = c.isNormalizing(e);
            c.setNormalizing(e, !1);
            try {
                t();
            } finally {
                c.setNormalizing(e, n);
            }
            !1 !== n && c.normalize(e);
        },
        areStylesDisabled(e) {
            var t;
            if (!e.previewMarkdown) return !0;
            let n = c.richValue(e),
                r = n[0],
                i = (null == r ? void 0 : r.type) === 'line' ? r.children[0] : null;
            if (null == i || !_.isText(i)) return !1;
            let a = e.chatInputType,
                s = i.text;
            return 1 === n.length && 1 === r.children.length && ((!0 === a.sedReplace && s.startsWith('s/')) || ((null === (t = a.autocomplete) || void 0 === t ? void 0 : t.reactions) === !0 && s.startsWith('+')));
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
                let n = c.range(e, t),
                    [r] = c.node(e, t);
                if (f.isElement(r)) {
                    let r = c.before(e, t),
                        i = c.after(e, t);
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
    d = {
        ...a.NB,
        isType: (e, t) => a.W_.isElement(e) && e.type === t,
        isInTypes: (e, t) => a.W_.isElement(e) && t.has(e.type)
    },
    f = {
        ...a.W_,
        updateElement(e, t) {
            let n = c.node(e, t[1]);
            return i()(!c.isEditor(t[0]), 'Element is the root node'), i()(null != n, 'Failed to find element'), i()(f.isElement(n[0]), 'Node at this path is no longer an element'), i()(n[0].type === t[0].type, 'Node at this path is a different type'), n;
        },
        markdown(e, t, n) {
            var r;
            let i = 'line' === e.type && (null === (r = e.codeBlockState) || void 0 === r ? void 0 : r.wasInCodeBlock) === !0,
                a = e.children.map((e) => (_.isText(e) ? e.text : '?')),
                s = a.join('');
            return {
                entries: o.Q(s, null != t ? t : null, i, n),
                serializedChildren: a
            };
        },
        isEmpty(e) {
            if (e.children.length > 1) return !1;
            if (0 === e.children.length) return !0;
            let t = e.children[0];
            return _.isText(t) && 0 === t.text.length;
        }
    },
    _ = { ...a.xv },
    h = {
        ...a.y$,
        isFirstEditorBlock: (e) => h.equals(e, l.YD),
        isFirstEditorText: (e) => h.equals(e, l.u9),
        isFirstChild: (e, t) => h.equals(t, h.child(e, 0)),
        child: (e, t) => [...e, t]
    },
    p = {
        ...a.E9,
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
                offset: _.isText(r) ? r.text.length : 0
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
        ...a.e6,
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
                    offset: _.isText(r) ? r.text.length : 0
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
    g = {
        equals: (e, t) => (null == e && null == t) || (null != e && null != t && m.equals(e, t)),
        isValid(e, t) {
            if (null == t) return !1;
            let { anchor: n, focus: r } = t;
            if (!c.hasPath(e, n.path) || !c.hasPath(e, r.path)) return !1;
            let [i] = c.node(e, n.path),
                [a] = c.node(e, r.path);
            return _.isText(i) && _.isText(a) && n.offset <= i.text.length && r.offset <= a.text.length;
        }
    },
    E = (e, t) => {
        let n = (t.top + t.bottom) / 2;
        return e.top <= n && e.bottom >= n;
    },
    v = (e, t, n) => {
        let r = c.toDOMRange(e, t).getBoundingClientRect(),
            i = c.toDOMRange(e, n).getBoundingClientRect();
        return E(r, i) && E(i, r);
    },
    I = (e, t, n, r) => {
        let i = {
                anchor: t,
                focus: t
            },
            a = 0,
            s = n.length,
            o = Math.floor((a + s) / 2);
        for (; o !== a; )
            if (
                (v(
                    e,
                    {
                        anchor: n[o],
                        focus: n[o]
                    },
                    i
                )
                    ? r
                        ? (s = o)
                        : (a = o)
                    : r
                      ? (a = o)
                      : (s = o),
                (o = Math.floor((a + s) / 2)),
                !r && o === n.length - 2 && s === n.length - 1)
            ) {
                let t = n[n.length - 1];
                v(
                    e,
                    {
                        anchor: t,
                        focus: t
                    },
                    i
                ) && (o = s);
            }
        return n[o];
    },
    S = {
        getLineStart(e, t, n) {
            let r;
            let i = c.getParentElement(e, t);
            if (null == i) return null;
            let a = c.previous(e, {
                at: t,
                match: (t) => c.isInline(e, t) && !c.isVoid(e, t) && t !== i[0]
            });
            null != a && (r = c.after(e, a[1])), null == r && (r = c.start(e, i[1]));
            let s = {
                    anchor: r,
                    focus: t
                },
                o = Array.from(c.positions(e, { at: s })),
                l = I(e, t, o, !0);
            if (n && p.equals(t, l) && !p.isAtEnd(t, i)) {
                let n = c.after(e, t);
                if (null == n) return l;
                l = I(e, n, o, !0);
            }
            return l;
        },
        getLineEnd(e, t, n) {
            let r;
            let i = c.getParentElement(e, t);
            if (null == i) return null;
            let a = c.next(e, {
                at: t,
                match: (t) => c.isInline(e, t) && !c.isVoid(e, t) && t !== i[0]
            });
            null != a && (r = c.before(e, a[1])), null == r && (r = c.end(e, i[1]));
            let s = {
                    anchor: t,
                    focus: r
                },
                o = Array.from(c.positions(e, { at: s })),
                l = I(e, t, o, !1);
            if (n && p.equals(t, l) && !p.isAtEnd(t, i)) {
                let n = c.after(e, t);
                if (null == n) return l;
                l = I(e, n, o, !1);
            }
            return l;
        },
        getLineActionRange(e, t) {
            let n = m.toPoint(e.selection);
            if (null == n) return null;
            if (t) {
                let t = S.getLineStart(e, n, !1);
                return null == t
                    ? null
                    : {
                          anchor: t,
                          focus: n
                      };
            }
            {
                let t = S.getLineEnd(e, n, !0);
                return null == t
                    ? null
                    : {
                          anchor: n,
                          focus: t
                      };
            }
        }
    };
