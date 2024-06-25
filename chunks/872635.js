"use strict";
n.d(t, {
  I: function() {
    return S
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(519953),
  l = n(481060),
  u = n(40851),
  _ = n(153850),
  c = n(5967),
  d = n(53529),
  E = n(50659),
  I = n(436660),
  T = n(887490),
  h = n(447525),
  f = n(632946);

function S(e) {
  var t;
  let {
    editorRef: n,
    options: r,
    iconClassName: s,
    dividerClassName: a
  } = e, u = null === (t = n.current) || void 0 === t ? void 0 : t.getSlateEditor();
  return null == u ? null : (0, i.jsxs)("div", {
    className: f.buttons,
    children: [(0, i.jsx)(A, {
      slateEditor: u,
      markdownSyntax: "bold",
      children: (0, i.jsx)(l.BoldIcon, {
        size: "md",
        color: "currentColor",
        className: o()(f.icon, s)
      })
    }), (0, i.jsx)(A, {
      slateEditor: u,
      markdownSyntax: "italics",
      children: (0, i.jsx)(l.ItalicIcon, {
        size: "md",
        color: "currentColor",
        className: o()(f.icon, s)
      })
    }), (0, i.jsx)(A, {
      slateEditor: u,
      markdownSyntax: "strikethrough",
      children: (0, i.jsx)(l.StrikethroughIcon, {
        size: "md",
        color: "currentColor",
        className: o()(f.icon, s)
      })
    }), (0, i.jsx)("div", {
      className: o()(f.divider, a)
    }), !(null == r ? void 0 : r.disableBlockQuotes) && (0, i.jsx)(N, {
      slateEditor: u,
      blockType: "blockQuote",
      children: (0, i.jsx)(l.QuoteIcon, {
        size: "md",
        color: "currentColor",
        className: o()(f.icon, s)
      })
    }), (0, i.jsx)(A, {
      slateEditor: u,
      markdownSyntax: "inlineCode",
      children: (0, i.jsx)(l.AngleBracketsIcon, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
        className: o()(f.icon, s)
      })
    }), (0, i.jsx)(A, {
      slateEditor: u,
      markdownSyntax: "spoiler",
      children: (0, i.jsx)(l.EyeIcon, {
        size: "md",
        color: "currentColor",
        className: o()(f.icon, s)
      })
    })]
  })
}

function A(e) {
  let {
    slateEditor: t,
    markdownSyntax: n,
    children: r
  } = e, s = !1;
  if ((null == t ? void 0 : t.selection) != null) {
    let [e, i] = T.M8.edges(t.selection);
    s = null != (0, E.U4)(t, e, i).before[n]
  }
  return (0, i.jsx)("button", {
    "aria-pressed": s,
    className: f.button,
    onClick: () => {
      null != t && d.T.withSingleEntry(t, () => (0, E.py)(t, n))
    },
    children: r
  })
}

function N(e) {
  let {
    blockType: t,
    slateEditor: n,
    children: r
  } = e, s = null != n ? T.bN.getCurrentBlock(n) : null, o = null != s && T.aj.isType(s[0], t);
  return (0, i.jsx)("button", {
    "aria-pressed": o,
    className: f.button,
    onClick: () => {
      null != n && d.T.withSingleEntry(n, () => (0, E.hm)(n, t))
    },
    children: r
  })
}

function m(e) {
  var t;
  let {
    slateEditor: n
  } = e, [i, s] = null !== (t = T.bN.getSelectedVoid(n)) && void 0 !== t ? t : [null, null], o = r.useCallback(e => {
    if ((null == n ? void 0 : n.selection) == null || null == s) return;
    let t = n.selection;
    d.T.withSingleEntry(n, () => {
      I.Q.voidToText(n, e, s), I.Q.select(n, t)
    })
  }, [n, s]);
  return null == i ? null : (0, h.Z)(i, {
    replace: o
  })
}
t.Z = r.forwardRef(function(e, t) {
  var n;
  let {
    editorRef: s,
    containerRef: o,
    options: l
  } = e, d = r.useRef(null), [E, I] = r.useState(!1), h = r.useRef(), A = r.useContext(u.ZP), N = r.useCallback(() => {
    I(!1), clearTimeout(h.current)
  }, []), O = r.useCallback(e => {
    var t;
    let n = A.renderWindow;
    !(e.target instanceof n.Node && (null === (t = d.current) || void 0 === t ? void 0 : t.contains(e.target))) && N()
  }, [A, N]), p = r.useCallback(e => {
    let t = A.renderWindow;
    if (e.target instanceof t.Element) {
      if (0 !== e.button) N();
      else {
        var n;
        let i = e.target instanceof t.Node && (null === (n = d.current) || void 0 === n ? void 0 : n.contains(e.target));
        clearTimeout(h.current), h.current = setTimeout(() => {
          var t;
          let n = null === (t = (0, c.uB)(e)) || void 0 === t ? void 0 : t.activeElement,
            r = o.current;
          I(i || null != n && null != r && r.contains(n))
        }, 100)
      }
    } else N()
  }, [A, o, N]);
  r.useImperativeHandle(t, () => ({
    hide: N
  }), [N]), r.useEffect(() => {
    let e = A.renderWindow;
    return e.document.addEventListener("keydown", N), e.document.addEventListener("mousedown", O), e.document.addEventListener("mouseup", p), e.addEventListener("focus", N), e.addEventListener("blur", N), () => {
      e.document.removeEventListener("keydown", N), e.document.removeEventListener("mousedown", O), e.document.removeEventListener("mouseup", p), e.removeEventListener("focus", N), e.removeEventListener("blur", N), clearTimeout(h.current)
    }
  }, [A, N, O, p]);
  let {
    x: R,
    y: g
  } = r.useMemo(() => {
    var e, t, n, i;
    let r = null === (e = s.current) || void 0 === e ? void 0 : e.getSlateEditor();
    if ((null == r ? void 0 : r.selection) == null || T.M8.isCollapsed(r.selection) || !E) return {
      x: null,
      y: null
    };
    let l = a.F3.findDocumentOrShadowRoot(r),
      u = l.getSelection();
    if (null == u || null == u.focusNode || null == u.anchorNode || u.isCollapsed) return {
      x: null,
      y: null
    };
    let _ = l.createRange();
    _.setStart(u.focusNode, u.focusOffset), _.setEnd(u.focusNode, u.focusOffset);
    let c = _.getBoundingClientRect(),
      d = l.createRange();
    d.setStart(u.anchorNode, u.anchorOffset), d.setEnd(u.anchorNode, u.anchorOffset);
    let I = d.getBoundingClientRect(),
      h = l.createRange();
    h.setStart(u.anchorNode, u.anchorOffset), h.setEnd(u.focusNode, u.focusOffset);
    let f = h.getBoundingClientRect(),
      S = c.x === I.x,
      A = S ? f.x : Math.min(c.x, I.x),
      N = S ? f.x + f.width : Math.max(c.x, I.x),
      m = null !== (i = null === (n = o.current) || void 0 === n ? void 0 : null === (t = n.getBoundingClientRect()) || void 0 === t ? void 0 : t.y) && void 0 !== i ? i : 0;
    return {
      x: A + (N - A) / 2,
      y: Math.max(m, Math.min(I.y, c.y))
    }
  }, [o, E, s]), [C, v] = r.useState(0), [L, D] = r.useState(0);
  if (r.useLayoutEffect(() => {
      if (null == R || null == g || null == d.current) return;
      let e = d.current.getBoundingClientRect();
      D(e.width / 2), v(e.height + 12)
    }, [R, g]), null == R || null == g) return null;
  let M = null === (n = s.current) || void 0 === n ? void 0 : n.getSlateEditor();
  return null == M ? null : (0, i.jsx)(_.ZP, {
    children: (0, i.jsxs)("div", {
      id: "slate-toolbar",
      ref: d,
      className: f.toolbar,
      style: {
        top: g - C,
        left: R - L
      },
      onMouseDown: e => {
        e.stopPropagation()
      },
      onMouseUp: e => {
        e.stopPropagation()
      },
      children: [(0, i.jsx)(m, {
        slateEditor: M
      }), (0, i.jsx)(S, {
        editorRef: s,
        options: l
      })]
    })
  })
})