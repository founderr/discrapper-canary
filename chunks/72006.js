"use strict";
n.r(t), n.d(t, {
  applyTokensAsEntities: function() {
    return x
  },
  clearContent: function() {
    return A
  },
  createEmptyEditorState: function() {
    return L
  },
  deleteContent: function() {
    return v
  },
  getDefaultKeyBinding: function() {
    return l()
  },
  getFirstTextBlock: function() {
    return b
  },
  isEmpty: function() {
    return B
  },
  miscCommand: function() {
    return O
  },
  replaceAllContent: function() {
    return P
  },
  scrollCursorIntoView: function() {
    return U
  },
  setCollapsedEndSelection: function() {
    return w
  },
  setCollapsedSelection: function() {
    return D
  },
  setCollapsedStartSelection: function() {
    return j
  },
  setToEndSelection: function() {
    return y
  },
  setToStartSelection: function() {
    return G
  },
  truncateContent: function() {
    return F
  },
  updateContent: function() {
    return N
  }
}), n("47120"), n("653041");
var r = n("371917"),
  i = n("421520"),
  l = n.n(i),
  s = n("563751"),
  o = n.n(s),
  u = n("608382"),
  a = n.n(u),
  c = n("722661"),
  d = n.n(c),
  f = n("225389"),
  S = n.n(f),
  g = n("71716"),
  h = n.n(g),
  E = n("869045"),
  _ = n.n(E),
  p = n("110599"),
  C = n.n(p),
  m = n("801539"),
  I = n.n(m),
  T = n("887868"),
  R = n.n(T);

function M(e, t, n, i) {
  let l = i.getCurrentContent(),
    s = null;
  null != e && (s = (l = l.createEntity(...e)).getLastCreatedEntityKey());
  let o = l.getFirstBlock(),
    u = new r.SelectionState({
      anchorKey: o.getKey(),
      anchorOffset: t,
      focusKey: o.getKey(),
      focusOffset: n
    });
  return l = r.Modifier.applyEntity(l, u, s), r.EditorState.set(i, {
    currentContent: l
  })
}

function N(e, t, n, i) {
  let l, s;
  let u = t.getCurrentContent(),
    a = u.getFirstBlock(),
    c = a.getText();
  "number" == typeof n ? (n > c.length && (n = c.length), null != i && i > c.length && (i = c.length), l = new r.SelectionState({
    anchorKey: a.getKey(),
    anchorOffset: n,
    focusKey: a.getKey(),
    focusOffset: null != i && 0 !== i ? i : n
  })) : l = t.getSelection();
  let d = t.getCurrentInlineStyle(),
    f = o()(u, l);
  return l.isCollapsed() ? (u = r.Modifier.insertText(u, l, e, d, f), s = "insert-characters") : (u = r.Modifier.replaceText(u, l, e, d, f), s = "replace-characters"), r.EditorState.push(t, u, s)
}

function v(e, t) {
  switch (e) {
    case "delete":
      return I()(t);
    case "delete-word":
      return S()(t);
    case "backspace":
      return C()(t);
    case "backspace-word":
      return d()(t);
    case "backspace-to-start-of-line":
      return a()(t);
    default:
      return t
  }
}

function O(e, t) {
  switch (e) {
    case "transpose-characters":
      return R()(t);
    case "move-selection-to-start-of-block":
      return _()(t);
    case "move-selection-to-end-of-block":
      return h()(t);
    default:
      return t
  }
}

function b(e) {
  return e.getCurrentContent().getFirstBlock().getText()
}

function x(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    r = t.getCurrentContent(),
    i = r.getFirstBlock(),
    l = i.getText(),
    s = [];
  return i.findEntityRanges(e => null !== e.getEntity(), (e, t) => {
    let n = r.getEntity(i.getEntityAt(e)).getType(),
      o = l.substring(e, t);
    s.push({
      processed: !1,
      type: n,
      start: e,
      end: t,
      text: o
    })
  }), e.forEach(e => {
    let r = !1;
    if (s.forEach(n => {
        let {
          type: i,
          start: l,
          end: s
        } = e, o = e.getFullMatch();
        !n.processed && (n.type === i && n.start === l && n.text === o ? (n.processed = !0, r = !0) : (l >= n.start && l < n.end || s > n.start && s <= n.end) && (n.processed = !0, t = M(null, n.start, n.end, t)))
      }), r) return;
    let i = n[e.type];
    t = M([e.type, null != i && i.mutable ? "MUTABLE" : "IMMUTABLE", {
      token: e
    }], e.start, e.end, t)
  }), s.forEach(e => {
    !e.processed && (t = M(null, e.start, e.end, t))
  }), t
}

function L(e) {
  return r.EditorState.createEmpty(new r.CompositeDecorator(e))
}

function A(e) {
  let t = r.EditorState.push(e, r.ContentState.createFromText("")),
    n = e.getSelection();
  return null != n && n.hasFocus && (t = r.EditorState.moveFocusToEnd(t)), t
}

function P(e, t) {
  let n = b(t);
  return N(e, t, 0, n.length)
}

function D(e, t) {
  let n = t.getSelection();
  return n = (n = n.set("focusOffset", e)).set("anchorOffset", e), r.EditorState.forceSelection(t, n)
}

function w(e) {
  return D(e.getCurrentContent().getFirstBlock().getText().length, e)
}

function j(e) {
  return D(0, e)
}

function G(e) {
  let t = e.getSelection();
  return t = (t = t.set("focusOffset", 0)).set("isBackward", !0), r.EditorState.forceSelection(e, t)
}

function y(e) {
  let t = b(e),
    n = e.getSelection();
  return n = (n = n.set("focusOffset", t.length)).set("isBackward", !1), r.EditorState.forceSelection(e, n)
}

function F(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 512,
    n = b(e);
  if (n.length > t) {
    let i = e.getSelection();
    e = N("", e, t, n.length), i.getAnchorOffset() > t && (i = i.set("anchorOffset", t)), i.getFocusOffset() > t && (i = i.set("focusOffset", t)), e = r.EditorState.forceSelection(e, i)
  }
  return e
}

function U(e) {
  let t = window.getSelection();
  if (null == t || "Caret" !== t.type || null == e) return;
  let n = t.getRangeAt(0);
  if (! function(e, t) {
      for (; null != e;) {
        if (e === t) return !0;
        e = e.parentNode
      }
      return !1
    }(n.commonAncestorContainer, e)) return;
  let r = n.getClientRects()[0],
    i = e.getClientRects()[0];
  if (null == r || null == i) return;
  let l = r.left - i.left + e.scrollLeft;
  l < e.scrollLeft ? e.scrollLeft = l - 10 : l > e.scrollLeft + e.offsetWidth && (e.scrollLeft = l - e.offsetWidth + 3)
}

function B(e) {
  return 0 === b(e).length
}