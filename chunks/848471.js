"use strict";
n.r(t), n.d(t, {
  ToolbarButtons: function() {
    return y
  },
  default: function() {
    return A
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  a = n("414456"),
  s = n.n(a),
  r = n("371621"),
  o = n("77078"),
  u = n("244201"),
  d = n("520089"),
  c = n("769215"),
  f = n("204591"),
  p = n("685020"),
  m = n("265363"),
  h = n("140567"),
  E = n("983782"),
  S = n("791776"),
  g = n("83800"),
  C = n("916429"),
  T = n("939563"),
  v = n("385887"),
  I = n("395364"),
  _ = n("223797");

function y(e) {
  var t;
  let {
    editorRef: n,
    options: i,
    iconClassName: a,
    dividerClassName: r
  } = e, o = null === (t = n.current) || void 0 === t ? void 0 : t.getSlateEditor();
  return null == o ? null : (0, l.jsxs)("div", {
    className: _.buttons,
    children: [(0, l.jsx)(N, {
      slateEditor: o,
      markdownSyntax: "bold",
      children: (0, l.jsx)(c.default, {
        className: s(_.icon, a)
      })
    }), (0, l.jsx)(N, {
      slateEditor: o,
      markdownSyntax: "italics",
      children: (0, l.jsx)(p.default, {
        className: s(_.icon, a)
      })
    }), (0, l.jsx)(N, {
      slateEditor: o,
      markdownSyntax: "strikethrough",
      children: (0, l.jsx)(h.default, {
        className: s(_.icon, a)
      })
    }), (0, l.jsx)("div", {
      className: s(_.divider, r)
    }), !(null == i ? void 0 : i.disableBlockQuotes) && (0, l.jsx)(x, {
      slateEditor: o,
      blockType: "blockQuote",
      children: (0, l.jsx)(d.default, {
        className: s(_.icon, a)
      })
    }), (0, l.jsx)(N, {
      slateEditor: o,
      markdownSyntax: "inlineCode",
      children: (0, l.jsx)(f.default, {
        className: s(_.icon, a)
      })
    }), (0, l.jsx)(N, {
      slateEditor: o,
      markdownSyntax: "spoiler",
      children: (0, l.jsx)(m.default, {
        className: s(_.icon, a)
      })
    })]
  })
}
var A = i.forwardRef(function(e, t) {
  var n;
  let {
    editorRef: a,
    containerRef: s,
    options: o
  } = e, d = i.useRef(null), [c, f] = i.useState(!1), p = i.useRef(), m = i.useContext(u.default), h = i.useCallback(() => {
    f(!1), clearTimeout(p.current)
  }, []), g = i.useCallback(e => {
    var t;
    let n = m.renderWindow,
      l = e.target instanceof n.Node && (null === (t = d.current) || void 0 === t ? void 0 : t.contains(e.target));
    !l && h()
  }, [m, h]), C = i.useCallback(e => {
    let t = m.renderWindow;
    if (e.target instanceof t.Element) {
      if (0 !== e.button) h();
      else {
        var n;
        let l = e.target instanceof t.Node && (null === (n = d.current) || void 0 === n ? void 0 : n.contains(e.target));
        clearTimeout(p.current), p.current = setTimeout(() => {
          var t;
          let n = null === (t = (0, S.eventOwnerDocument)(e)) || void 0 === t ? void 0 : t.activeElement,
            i = s.current;
          f(l || null != n && null != i && i.contains(n))
        }, 100)
      }
    } else h()
  }, [m, s, h]);
  i.useImperativeHandle(t, () => ({
    hide: h
  }), [h]), i.useEffect(() => {
    let e = m.renderWindow;
    return e.document.addEventListener("keydown", h), e.document.addEventListener("mousedown", g), e.document.addEventListener("mouseup", C), e.addEventListener("focus", h), e.addEventListener("blur", h), () => {
      e.document.removeEventListener("keydown", h), e.document.removeEventListener("mousedown", g), e.document.removeEventListener("mouseup", C), e.removeEventListener("focus", h), e.removeEventListener("blur", h), clearTimeout(p.current)
    }
  }, [m, h, g, C]);
  let {
    x: T,
    y: I
  } = i.useMemo(() => {
    var e, t, n, l;
    let i = null === (e = a.current) || void 0 === e ? void 0 : e.getSlateEditor();
    if ((null == i ? void 0 : i.selection) == null || v.RangeUtils.isCollapsed(i.selection) || !c) return {
      x: null,
      y: null
    };
    let o = r.ReactEditor.findDocumentOrShadowRoot(i),
      u = o.getSelection();
    if (null == u || null == u.focusNode || null == u.anchorNode || u.isCollapsed) return {
      x: null,
      y: null
    };
    let d = o.createRange();
    d.setStart(u.focusNode, u.focusOffset), d.setEnd(u.focusNode, u.focusOffset);
    let f = d.getBoundingClientRect(),
      p = o.createRange();
    p.setStart(u.anchorNode, u.anchorOffset), p.setEnd(u.anchorNode, u.anchorOffset);
    let m = p.getBoundingClientRect(),
      h = o.createRange();
    h.setStart(u.anchorNode, u.anchorOffset), h.setEnd(u.focusNode, u.focusOffset);
    let E = h.getBoundingClientRect(),
      S = f.x === m.x,
      g = S ? E.x : Math.min(f.x, m.x),
      C = S ? E.x + E.width : Math.max(f.x, m.x),
      T = null !== (l = null === (n = s.current) || void 0 === n ? void 0 : null === (t = n.getBoundingClientRect()) || void 0 === t ? void 0 : t.y) && void 0 !== l ? l : 0,
      I = Math.max(T, Math.min(m.y, f.y));
    return {
      x: g + (C - g) / 2,
      y: I
    }
  }, [s, c, a]), [A, N] = i.useState(0), [x, R] = i.useState(0);
  if (i.useLayoutEffect(() => {
      if (null == T || null == I || null == d.current) return;
      let e = d.current.getBoundingClientRect();
      R(e.width / 2), N(e.height + 12)
    }, [T, I]), null == T || null == I) return null;
  let M = null === (n = a.current) || void 0 === n ? void 0 : n.getSlateEditor();
  return null == M ? null : (0, l.jsx)(E.default, {
    children: (0, l.jsxs)("div", {
      id: "slate-toolbar",
      ref: d,
      className: _.toolbar,
      style: {
        top: I - A,
        left: T - x
      },
      onMouseDown: e => {
        e.stopPropagation()
      },
      onMouseUp: e => {
        e.stopPropagation()
      },
      children: [(0, l.jsx)(O, {
        slateEditor: M
      }), (0, l.jsx)(y, {
        editorRef: a,
        options: o
      })]
    })
  })
});

function N(e) {
  let {
    slateEditor: t,
    markdownSyntax: n,
    children: i
  } = e, a = !1;
  if ((null == t ? void 0 : t.selection) != null) {
    let [e, l] = v.RangeUtils.edges(t.selection);
    a = null != (0, C.parseSelectedSyntax)(t, e, l).before[n]
  }
  return (0, l.jsx)(o.Button, {
    className: _.button,
    innerClassName: _.buttonInner,
    color: a ? _.active : _.inactive,
    hover: _.hover,
    look: o.Button.Looks.FILLED,
    size: o.Button.Sizes.NONE,
    onClick: () => {
      null != t && g.HistoryUtils.withSingleEntry(t, () => (0, C.toggleMarkdownStyle)(t, n))
    },
    children: i
  })
}

function x(e) {
  let {
    blockType: t,
    slateEditor: n,
    children: i
  } = e, a = null != n ? v.EditorUtils.getCurrentBlock(n) : null, s = null != a && v.NodeUtils.isType(a[0], t);
  return (0, l.jsx)(o.Button, {
    className: _.button,
    innerClassName: _.buttonInner,
    color: s ? _.active : _.inactive,
    hover: _.hover,
    look: o.Button.Looks.FILLED,
    size: o.Button.Sizes.NONE,
    onClick: () => {
      null != n && g.HistoryUtils.withSingleEntry(n, () => (0, C.toggleBlockStyle)(n, t))
    },
    children: i
  })
}

function O(e) {
  var t;
  let {
    slateEditor: n
  } = e, [l, a] = null !== (t = v.EditorUtils.getSelectedVoid(n)) && void 0 !== t ? t : [null, null], s = i.useCallback(e => {
    if ((null == n ? void 0 : n.selection) == null || null == a) return;
    let t = n.selection;
    g.HistoryUtils.withSingleEntry(n, () => {
      T.SlateTransforms.voidToText(n, e, a), T.SlateTransforms.select(n, t)
    })
  }, [n, a]);
  return null == l ? null : (0, I.default)(l, {
    replace: s
  })
}