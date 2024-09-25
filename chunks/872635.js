n.d(t, {
    I: function () {
        return T;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(519953),
    u = n(481060),
    c = n(40851),
    d = n(314910),
    _ = n(5967),
    E = n(53529),
    f = n(50659),
    h = n(436660),
    p = n(887490),
    m = n(447525),
    I = n(3066);
function T(e) {
    var t;
    let { editorRef: n, options: r, iconClassName: a, dividerClassName: o } = e,
        l = null === (t = n.current) || void 0 === t ? void 0 : t.getSlateEditor();
    return null == l
        ? null
        : (0, i.jsxs)('div', {
              className: I.buttons,
              children: [
                  (0, i.jsx)(g, {
                      slateEditor: l,
                      markdownSyntax: 'bold',
                      children: (0, i.jsx)(u.BoldIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: s()(I.icon, a)
                      })
                  }),
                  (0, i.jsx)(g, {
                      slateEditor: l,
                      markdownSyntax: 'italics',
                      children: (0, i.jsx)(u.ItalicIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: s()(I.icon, a)
                      })
                  }),
                  (0, i.jsx)(g, {
                      slateEditor: l,
                      markdownSyntax: 'strikethrough',
                      children: (0, i.jsx)(u.StrikethroughIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: s()(I.icon, a)
                      })
                  }),
                  (0, i.jsx)('div', { className: s()(I.divider, o) }),
                  !(null == r ? void 0 : r.disableBlockQuotes) &&
                      (0, i.jsx)(S, {
                          slateEditor: l,
                          blockType: 'blockQuote',
                          children: (0, i.jsx)(u.QuoteIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: s()(I.icon, a)
                          })
                      }),
                  (0, i.jsx)(g, {
                      slateEditor: l,
                      markdownSyntax: 'inlineCode',
                      children: (0, i.jsx)(u.AngleBracketsIcon, {
                          size: 'custom',
                          width: 20,
                          height: 20,
                          color: 'currentColor',
                          className: s()(I.icon, a)
                      })
                  }),
                  (0, i.jsx)(g, {
                      slateEditor: l,
                      markdownSyntax: 'spoiler',
                      children: (0, i.jsx)(u.EyeIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: s()(I.icon, a)
                      })
                  })
              ]
          });
}
function g(e) {
    let { slateEditor: t, markdownSyntax: n, children: r } = e,
        a = () => {
            null != t && E.T.withSingleEntry(t, () => (0, f.py)(t, n));
        },
        o = !1;
    if ((null == t ? void 0 : t.selection) != null) {
        let [e, r] = p.M8.edges(t.selection);
        o = null != (0, f.U4)(t, e, r).before[n];
    }
    return (0, i.jsx)('button', {
        'aria-pressed': o,
        className: I.button,
        onClick: a,
        children: r
    });
}
function S(e) {
    let { blockType: t, slateEditor: n, children: r } = e,
        a = () => {
            null != n && E.T.withSingleEntry(n, () => (0, f.hm)(n, t));
        },
        o = null != n ? p.bN.getCurrentBlock(n) : null,
        s = null != o && p.aj.isType(o[0], t);
    return (0, i.jsx)('button', {
        'aria-pressed': s,
        className: I.button,
        onClick: a,
        children: r
    });
}
function A(e) {
    var t;
    let { slateEditor: n } = e,
        [r, i] = null !== (t = p.bN.getSelectedVoid(n)) && void 0 !== t ? t : [null, null],
        o = a.useCallback(
            (e) => {
                if ((null == n ? void 0 : n.selection) == null || null == i) return;
                let t = n.selection;
                E.T.withSingleEntry(n, () => {
                    h.Q.voidToText(n, e, i), h.Q.select(n, t);
                });
            },
            [n, i]
        );
    return null == r ? null : (0, m.Z)(r, { replace: o });
}
t.Z = a.forwardRef(function (e, t) {
    var n;
    let { editorRef: r, containerRef: o, options: s } = e,
        u = a.useRef(null),
        [E, f] = a.useState(!1),
        h = a.useRef(),
        m = a.useContext(c.ZP),
        g = a.useCallback(() => {
            f(!1), clearTimeout(h.current);
        }, []),
        S = a.useCallback(
            (e) => {
                var t;
                let n = m.renderWindow;
                !(e.target instanceof n.Node && (null === (t = u.current) || void 0 === t ? void 0 : t.contains(e.target))) && g();
            },
            [m, g]
        ),
        v = a.useCallback(
            (e) => {
                let t = m.renderWindow;
                if (e.target instanceof t.Element) {
                    if (0 !== e.button) g();
                    else {
                        var n;
                        let r = e.target instanceof t.Node && (null === (n = u.current) || void 0 === n ? void 0 : n.contains(e.target));
                        clearTimeout(h.current),
                            (h.current = setTimeout(() => {
                                var t;
                                let n = null === (t = (0, _.uB)(e)) || void 0 === t ? void 0 : t.activeElement,
                                    i = o.current;
                                f(r || (null != n && null != i && i.contains(n)));
                            }, 100));
                    }
                } else g();
            },
            [m, o, g]
        );
    a.useImperativeHandle(t, () => ({ hide: g }), [g]),
        a.useEffect(() => {
            let e = m.renderWindow;
            return (
                e.document.addEventListener('keydown', g),
                e.document.addEventListener('mousedown', S),
                e.document.addEventListener('mouseup', v),
                e.addEventListener('focus', g),
                e.addEventListener('blur', g),
                () => {
                    e.document.removeEventListener('keydown', g), e.document.removeEventListener('mousedown', S), e.document.removeEventListener('mouseup', v), e.removeEventListener('focus', g), e.removeEventListener('blur', g), clearTimeout(h.current);
                }
            );
        }, [m, g, S, v]);
    let { x: N, y: O } = a.useMemo(() => {
            var e, t, n, i;
            let a = null === (e = r.current) || void 0 === e ? void 0 : e.getSlateEditor();
            if ((null == a ? void 0 : a.selection) == null || p.M8.isCollapsed(a.selection) || !E)
                return {
                    x: null,
                    y: null
                };
            let s = l.F3.findDocumentOrShadowRoot(a),
                u = s.getSelection();
            if (null == u || null == u.focusNode || null == u.anchorNode || u.isCollapsed)
                return {
                    x: null,
                    y: null
                };
            let c = s.createRange();
            c.setStart(u.focusNode, u.focusOffset), c.setEnd(u.focusNode, u.focusOffset);
            let d = c.getBoundingClientRect(),
                _ = s.createRange();
            _.setStart(u.anchorNode, u.anchorOffset), _.setEnd(u.anchorNode, u.anchorOffset);
            let f = _.getBoundingClientRect(),
                h = s.createRange();
            h.setStart(u.anchorNode, u.anchorOffset), h.setEnd(u.focusNode, u.focusOffset);
            let m = h.getBoundingClientRect(),
                I = d.x === f.x,
                T = I ? m.x : Math.min(d.x, f.x),
                g = I ? m.x + m.width : Math.max(d.x, f.x),
                S = null !== (i = null === (n = o.current) || void 0 === n ? void 0 : null === (t = n.getBoundingClientRect()) || void 0 === t ? void 0 : t.y) && void 0 !== i ? i : 0,
                A = T + (g - T) / 2;
            return {
                x: A,
                y: Math.max(S, Math.min(f.y, d.y))
            };
        }, [o, E, r]),
        [R, C] = a.useState(0),
        [y, b] = a.useState(0);
    if (
        (a.useLayoutEffect(() => {
            if (null == N || null == O || null == u.current) return;
            let e = u.current.getBoundingClientRect();
            b(e.width / 2), C(e.height + 12);
        }, [N, O]),
        null == N || null == O)
    )
        return null;
    let L = null === (n = r.current) || void 0 === n ? void 0 : n.getSlateEditor();
    return null == L
        ? null
        : (0, i.jsx)(d.ZP, {
              children: (0, i.jsxs)('div', {
                  id: 'slate-toolbar',
                  ref: u,
                  className: I.toolbar,
                  style: {
                      top: O - R,
                      left: N - y
                  },
                  onMouseDown: (e) => {
                      e.stopPropagation();
                  },
                  onMouseUp: (e) => {
                      e.stopPropagation();
                  },
                  children: [
                      (0, i.jsx)(A, { slateEditor: L }),
                      (0, i.jsx)(T, {
                          editorRef: r,
                          options: s
                      })
                  ]
              })
          });
});
