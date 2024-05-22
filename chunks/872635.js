"use strict";
n.r(t), n.d(t, {
  ToolbarButtons: function() {
    return O
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("519953"),
  l = n("40851"),
  u = n("489465"),
  d = n("15322"),
  _ = n("672108"),
  c = n("979232"),
  E = n("149111"),
  I = n("61753"),
  T = n("153850"),
  f = n("5967"),
  S = n("53529"),
  h = n("50659"),
  A = n("436660"),
  m = n("887490"),
  N = n("447525"),
  p = n("364610");

function O(e) {
  var t;
  let {
    editorRef: n,
    options: r,
    iconClassName: s,
    dividerClassName: o
  } = e, l = null === (t = n.current) || void 0 === t ? void 0 : t.getSlateEditor();
  return null == l ? null : (0, i.jsxs)("div", {
    className: p.buttons,
    children: [(0, i.jsx)(C, {
      slateEditor: l,
      markdownSyntax: "bold",
      children: (0, i.jsx)(d.default, {
        className: a()(p.icon, s)
      })
    }), (0, i.jsx)(C, {
      slateEditor: l,
      markdownSyntax: "italics",
      children: (0, i.jsx)(c.default, {
        className: a()(p.icon, s)
      })
    }), (0, i.jsx)(C, {
      slateEditor: l,
      markdownSyntax: "strikethrough",
      children: (0, i.jsx)(I.default, {
        className: a()(p.icon, s)
      })
    }), (0, i.jsx)("div", {
      className: a()(p.divider, o)
    }), !(null == r ? void 0 : r.disableBlockQuotes) && (0, i.jsx)(R, {
      slateEditor: l,
      blockType: "blockQuote",
      children: (0, i.jsx)(u.default, {
        className: a()(p.icon, s)
      })
    }), (0, i.jsx)(C, {
      slateEditor: l,
      markdownSyntax: "inlineCode",
      children: (0, i.jsx)(_.default, {
        className: a()(p.icon, s)
      })
    }), (0, i.jsx)(C, {
      slateEditor: l,
      markdownSyntax: "spoiler",
      children: (0, i.jsx)(E.default, {
        className: a()(p.icon, s)
      })
    })]
  })
}

function C(e) {
  let {
    slateEditor: t,
    markdownSyntax: n,
    children: r
  } = e, s = !1;
  if ((null == t ? void 0 : t.selection) != null) {
    let [e, i] = m.RangeUtils.edges(t.selection);
    s = null != (0, h.parseSelectedSyntax)(t, e, i).before[n]
  }
  return (0, i.jsx)("button", {
    "aria-pressed": s,
    className: p.button,
    onClick: () => {
      null != t && S.HistoryUtils.withSingleEntry(t, () => (0, h.toggleMarkdownStyle)(t, n))
    },
    children: r
  })
}

function R(e) {
  let {
    blockType: t,
    slateEditor: n,
    children: r
  } = e, s = null != n ? m.EditorUtils.getCurrentBlock(n) : null, a = null != s && m.NodeUtils.isType(s[0], t);
  return (0, i.jsx)("button", {
    "aria-pressed": a,
    className: p.button,
    onClick: () => {
      null != n && S.HistoryUtils.withSingleEntry(n, () => (0, h.toggleBlockStyle)(n, t))
    },
    children: r
  })
}

function g(e) {
  var t;
  let {
    slateEditor: n
  } = e, [i, s] = null !== (t = m.EditorUtils.getSelectedVoid(n)) && void 0 !== t ? t : [null, null], a = r.useCallback(e => {
    if ((null == n ? void 0 : n.selection) == null || null == s) return;
    let t = n.selection;
    S.HistoryUtils.withSingleEntry(n, () => {
      A.SlateTransforms.voidToText(n, e, s), A.SlateTransforms.select(n, t)
    })
  }, [n, s]);
  return null == i ? null : (0, N.default)(i, {
    replace: a
  })
}
t.default = r.forwardRef(function(e, t) {
  var n;
  let {
    editorRef: s,
    containerRef: a,
    options: u
  } = e, d = r.useRef(null), [_, c] = r.useState(!1), E = r.useRef(), I = r.useContext(l.default), S = r.useCallback(() => {
    c(!1), clearTimeout(E.current)
  }, []), h = r.useCallback(e => {
    var t;
    let n = I.renderWindow;
    !(e.target instanceof n.Node && (null === (t = d.current) || void 0 === t ? void 0 : t.contains(e.target))) && S()
  }, [I, S]), A = r.useCallback(e => {
    let t = I.renderWindow;
    if (e.target instanceof t.Element) {
      if (0 !== e.button) S();
      else {
        var n;
        let i = e.target instanceof t.Node && (null === (n = d.current) || void 0 === n ? void 0 : n.contains(e.target));
        clearTimeout(E.current), E.current = setTimeout(() => {
          var t;
          let n = null === (t = (0, f.eventOwnerDocument)(e)) || void 0 === t ? void 0 : t.activeElement,
            r = a.current;
          c(i || null != n && null != r && r.contains(n))
        }, 100)
      }
    } else S()
  }, [I, a, S]);
  r.useImperativeHandle(t, () => ({
    hide: S
  }), [S]), r.useEffect(() => {
    let e = I.renderWindow;
    return e.document.addEventListener("keydown", S), e.document.addEventListener("mousedown", h), e.document.addEventListener("mouseup", A), e.addEventListener("focus", S), e.addEventListener("blur", S), () => {
      e.document.removeEventListener("keydown", S), e.document.removeEventListener("mousedown", h), e.document.removeEventListener("mouseup", A), e.removeEventListener("focus", S), e.removeEventListener("blur", S), clearTimeout(E.current)
    }
  }, [I, S, h, A]);
  let {
    x: N,
    y: C
  } = r.useMemo(() => {
    var e, t, n, i;
    let r = null === (e = s.current) || void 0 === e ? void 0 : e.getSlateEditor();
    if ((null == r ? void 0 : r.selection) == null || m.RangeUtils.isCollapsed(r.selection) || !_) return {
      x: null,
      y: null
    };
    let l = o.ReactEditor.findDocumentOrShadowRoot(r),
      u = l.getSelection();
    if (null == u || null == u.focusNode || null == u.anchorNode || u.isCollapsed) return {
      x: null,
      y: null
    };
    let d = l.createRange();
    d.setStart(u.focusNode, u.focusOffset), d.setEnd(u.focusNode, u.focusOffset);
    let c = d.getBoundingClientRect(),
      E = l.createRange();
    E.setStart(u.anchorNode, u.anchorOffset), E.setEnd(u.anchorNode, u.anchorOffset);
    let I = E.getBoundingClientRect(),
      T = l.createRange();
    T.setStart(u.anchorNode, u.anchorOffset), T.setEnd(u.focusNode, u.focusOffset);
    let f = T.getBoundingClientRect(),
      S = c.x === I.x,
      h = S ? f.x : Math.min(c.x, I.x),
      A = S ? f.x + f.width : Math.max(c.x, I.x),
      N = null !== (i = null === (n = a.current) || void 0 === n ? void 0 : null === (t = n.getBoundingClientRect()) || void 0 === t ? void 0 : t.y) && void 0 !== i ? i : 0;
    return {
      x: h + (A - h) / 2,
      y: Math.max(N, Math.min(I.y, c.y))
    }
  }, [a, _, s]), [R, L] = r.useState(0), [v, D] = r.useState(0);
  if (r.useLayoutEffect(() => {
      if (null == N || null == C || null == d.current) return;
      let e = d.current.getBoundingClientRect();
      D(e.width / 2), L(e.height + 12)
    }, [N, C]), null == N || null == C) return null;
  let M = null === (n = s.current) || void 0 === n ? void 0 : n.getSlateEditor();
  return null == M ? null : (0, i.jsx)(T.default, {
    children: (0, i.jsxs)("div", {
      id: "slate-toolbar",
      ref: d,
      className: p.toolbar,
      style: {
        top: C - R,
        left: N - v
      },
      onMouseDown: e => {
        e.stopPropagation()
      },
      onMouseUp: e => {
        e.stopPropagation()
      },
      children: [(0, i.jsx)(g, {
        slateEditor: M
      }), (0, i.jsx)(O, {
        editorRef: s,
        options: u
      })]
    })
  })
})