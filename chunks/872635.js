n.d(t, {
    I: function () {
        return E;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(270445),
    l = n(481060),
    u = n(40851),
    c = n(314910),
    d = n(5967),
    f = n(53529),
    _ = n(50659),
    h = n(436660),
    p = n(887490),
    m = n(447525),
    g = n(220869);
function E(e) {
    var t;
    let { editorRef: n, options: i, iconClassName: a, dividerClassName: o } = e,
        u = null === (t = n.current) || void 0 === t ? void 0 : t.getSlateEditor();
    return null == u
        ? null
        : (0, r.jsxs)('div', {
              className: g.buttons,
              children: [
                  (0, r.jsx)(v, {
                      slateEditor: u,
                      markdownSyntax: 'bold',
                      children: (0, r.jsx)(l.BoldIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: s()(g.icon, a)
                      })
                  }),
                  (0, r.jsx)(v, {
                      slateEditor: u,
                      markdownSyntax: 'italics',
                      children: (0, r.jsx)(l.ItalicIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: s()(g.icon, a)
                      })
                  }),
                  (0, r.jsx)(v, {
                      slateEditor: u,
                      markdownSyntax: 'strikethrough',
                      children: (0, r.jsx)(l.StrikethroughIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: s()(g.icon, a)
                      })
                  }),
                  (0, r.jsx)('div', { className: s()(g.divider, o) }),
                  !(null == i ? void 0 : i.disableBlockQuotes) &&
                      (0, r.jsx)(I, {
                          slateEditor: u,
                          blockType: 'blockQuote',
                          children: (0, r.jsx)(l.QuoteIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: s()(g.icon, a)
                          })
                      }),
                  (0, r.jsx)(v, {
                      slateEditor: u,
                      markdownSyntax: 'inlineCode',
                      children: (0, r.jsx)(l.AngleBracketsIcon, {
                          size: 'custom',
                          width: 20,
                          height: 20,
                          color: 'currentColor',
                          className: s()(g.icon, a)
                      })
                  }),
                  (0, r.jsx)(v, {
                      slateEditor: u,
                      markdownSyntax: 'spoiler',
                      children: (0, r.jsx)(l.EyeIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: s()(g.icon, a)
                      })
                  })
              ]
          });
}
function v(e) {
    let { slateEditor: t, markdownSyntax: n, children: i } = e,
        a = !1;
    if ((null == t ? void 0 : t.selection) != null) {
        let [e, r] = p.M8.edges(t.selection);
        a = null != (0, _.U4)(t, e, r).before[n];
    }
    return (0, r.jsx)('button', {
        'aria-pressed': a,
        className: g.button,
        onClick: () => {
            null != t && f.T.withSingleEntry(t, () => (0, _.py)(t, n));
        },
        children: i
    });
}
function I(e) {
    let { blockType: t, slateEditor: n, children: i } = e,
        a = null != n ? p.bN.getCurrentBlock(n) : null,
        s = null != a && p.aj.isType(a[0], t);
    return (0, r.jsx)('button', {
        'aria-pressed': s,
        className: g.button,
        onClick: () => {
            null != n && f.T.withSingleEntry(n, () => (0, _.hm)(n, t));
        },
        children: i
    });
}
function S(e) {
    var t;
    let { slateEditor: n } = e,
        [r, a] = null !== (t = p.bN.getSelectedVoid(n)) && void 0 !== t ? t : [null, null],
        s = i.useCallback(
            (e) => {
                if ((null == n ? void 0 : n.selection) == null || null == a) return;
                let t = n.selection;
                f.T.withSingleEntry(n, () => {
                    h.Q.voidToText(n, e, a), h.Q.select(n, t);
                });
            },
            [n, a]
        );
    return null == r ? null : (0, m.Z)(r, { replace: s });
}
t.Z = i.forwardRef(function (e, t) {
    var n;
    let { editorRef: a, containerRef: s, options: l } = e,
        f = i.useRef(null),
        [_, h] = i.useState(!1),
        m = i.useRef(),
        v = i.useContext(u.ZP),
        I = i.useCallback(() => {
            h(!1), clearTimeout(m.current);
        }, []),
        b = i.useCallback(
            (e) => {
                var t;
                let n = v.renderWindow;
                !(e.target instanceof n.Node && (null === (t = f.current) || void 0 === t ? void 0 : t.contains(e.target))) && I();
            },
            [v, I]
        ),
        T = i.useCallback(
            (e) => {
                let t = v.renderWindow;
                if (e.target instanceof t.Element) {
                    if (0 !== e.button) I();
                    else {
                        var n;
                        let r = e.target instanceof t.Node && (null === (n = f.current) || void 0 === n ? void 0 : n.contains(e.target));
                        clearTimeout(m.current),
                            (m.current = setTimeout(() => {
                                var t;
                                let n = null === (t = (0, d.uB)(e)) || void 0 === t ? void 0 : t.activeElement,
                                    i = s.current;
                                h(r || (null != n && null != i && i.contains(n)));
                            }, 100));
                    }
                } else I();
            },
            [v, s, I]
        );
    i.useImperativeHandle(t, () => ({ hide: I }), [I]),
        i.useEffect(() => {
            let e = v.renderWindow;
            return (
                e.document.addEventListener('keydown', I),
                e.document.addEventListener('mousedown', b),
                e.document.addEventListener('mouseup', T),
                e.addEventListener('focus', I),
                e.addEventListener('blur', I),
                () => {
                    e.document.removeEventListener('keydown', I), e.document.removeEventListener('mousedown', b), e.document.removeEventListener('mouseup', T), e.removeEventListener('focus', I), e.removeEventListener('blur', I), clearTimeout(m.current);
                }
            );
        }, [v, I, b, T]);
    let { x: y, y: A } = i.useMemo(() => {
            var e, t, n, r;
            let i = null === (e = a.current) || void 0 === e ? void 0 : e.getSlateEditor();
            if ((null == i ? void 0 : i.selection) == null || p.M8.isCollapsed(i.selection) || !_)
                return {
                    x: null,
                    y: null
                };
            let l = o.F3.findDocumentOrShadowRoot(i),
                u = l.getSelection();
            if (null == u || null == u.focusNode || null == u.anchorNode || u.isCollapsed)
                return {
                    x: null,
                    y: null
                };
            let c = l.createRange();
            c.setStart(u.focusNode, u.focusOffset), c.setEnd(u.focusNode, u.focusOffset);
            let d = c.getBoundingClientRect(),
                f = l.createRange();
            f.setStart(u.anchorNode, u.anchorOffset), f.setEnd(u.anchorNode, u.anchorOffset);
            let h = f.getBoundingClientRect(),
                m = l.createRange();
            m.setStart(u.anchorNode, u.anchorOffset), m.setEnd(u.focusNode, u.focusOffset);
            let g = m.getBoundingClientRect(),
                E = d.x === h.x,
                v = E ? g.x : Math.min(d.x, h.x),
                I = E ? g.x + g.width : Math.max(d.x, h.x),
                S = null !== (r = null === (n = s.current) || void 0 === n ? void 0 : null === (t = n.getBoundingClientRect()) || void 0 === t ? void 0 : t.y) && void 0 !== r ? r : 0;
            return {
                x: v + (I - v) / 2,
                y: Math.max(S, Math.min(h.y, d.y))
            };
        }, [s, _, a]),
        [N, C] = i.useState(0),
        [R, O] = i.useState(0);
    if (
        (i.useLayoutEffect(() => {
            if (null == y || null == A || null == f.current) return;
            let e = f.current.getBoundingClientRect();
            O(e.width / 2), C(e.height + 12);
        }, [y, A]),
        null == y || null == A)
    )
        return null;
    let D = null === (n = a.current) || void 0 === n ? void 0 : n.getSlateEditor();
    return null == D
        ? null
        : (0, r.jsx)(c.ZP, {
              children: (0, r.jsxs)('div', {
                  id: 'slate-toolbar',
                  ref: f,
                  className: g.toolbar,
                  style: {
                      top: A - N,
                      left: y - R
                  },
                  onMouseDown: (e) => {
                      e.stopPropagation();
                  },
                  onMouseUp: (e) => {
                      e.stopPropagation();
                  },
                  children: [
                      (0, r.jsx)(S, { slateEditor: D }),
                      (0, r.jsx)(E, {
                          editorRef: a,
                          options: l
                      })
                  ]
              })
          });
});
