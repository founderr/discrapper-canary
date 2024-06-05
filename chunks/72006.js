"use strict";
n.r(t), n.d(t, {
  applyTokensAsEntities: function() {
    return H
  },
  clearContent: function() {
    return F
  },
  createEmptyEditorState: function() {
    return T
  },
  deleteContent: function() {
    return M
  },
  getDefaultKeyBinding: function() {
    return o()
  },
  getFirstTextBlock: function() {
    return N
  },
  isEmpty: function() {
    return Z
  },
  miscCommand: function() {
    return w
  },
  replaceAllContent: function() {
    return A
  },
  scrollCursorIntoView: function() {
    return K
  },
  setCollapsedEndSelection: function() {
    return O
  },
  setCollapsedSelection: function() {
    return B
  },
  setCollapsedStartSelection: function() {
    return R
  },
  setToEndSelection: function() {
    return L
  },
  setToStartSelection: function() {
    return I
  },
  truncateContent: function() {
    return V
  },
  updateContent: function() {
    return j
  }
}), n("47120"), n("653041");
var r = n("371917"),
  l = n("421520"),
  o = n.n(l),
  i = n("563751"),
  a = n.n(i),
  c = n("608382"),
  s = n.n(c),
  u = n("722661"),
  d = n.n(u),
  f = n("225389"),
  h = n.n(f),
  g = n("71716"),
  p = n.n(g),
  C = n("869045"),
  m = n.n(C),
  x = n("110599"),
  b = n.n(x),
  v = n("801539"),
  E = n.n(v),
  S = n("887868"),
  y = n.n(S);

function k(e, t, n, l) {
  let o = l.getCurrentContent(),
    i = null;
  null != e && (i = (o = o.createEntity(...e)).getLastCreatedEntityKey());
  let a = o.getFirstBlock(),
    c = new r.SelectionState({
      anchorKey: a.getKey(),
      anchorOffset: t,
      focusKey: a.getKey(),
      focusOffset: n
    });
  return o = r.Modifier.applyEntity(o, c, i), r.EditorState.set(l, {
    currentContent: o
  })
}

function j(e, t, n, l) {
  let o, i;
  let c = t.getCurrentContent(),
    s = c.getFirstBlock(),
    u = s.getText();
  "number" == typeof n ? (n > u.length && (n = u.length), null != l && l > u.length && (l = u.length), o = new r.SelectionState({
    anchorKey: s.getKey(),
    anchorOffset: n,
    focusKey: s.getKey(),
    focusOffset: null != l && 0 !== l ? l : n
  })) : o = t.getSelection();
  let d = t.getCurrentInlineStyle(),
    f = a()(c, o);
  return o.isCollapsed() ? (c = r.Modifier.insertText(c, o, e, d, f), i = "insert-characters") : (c = r.Modifier.replaceText(c, o, e, d, f), i = "replace-characters"), r.EditorState.push(t, c, i)
}

function M(e, t) {
  switch (e) {
    case "delete":
      return E()(t);
    case "delete-word":
      return h()(t);
    case "backspace":
      return b()(t);
    case "backspace-word":
      return d()(t);
    case "backspace-to-start-of-line":
      return s()(t);
    default:
      return t
  }
}

function w(e, t) {
  switch (e) {
    case "transpose-characters":
      return y()(t);
    case "move-selection-to-start-of-block":
      return m()(t);
    case "move-selection-to-end-of-block":
      return p()(t);
    default:
      return t
  }
}

function N(e) {
  return e.getCurrentContent().getFirstBlock().getText()
}

function H(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    r = t.getCurrentContent(),
    l = r.getFirstBlock(),
    o = l.getText(),
    i = [];
  return l.findEntityRanges(e => null !== e.getEntity(), (e, t) => {
    let n = r.getEntity(l.getEntityAt(e)).getType(),
      a = o.substring(e, t);
    i.push({
      processed: !1,
      type: n,
      start: e,
      end: t,
      text: a
    })
  }), e.forEach(e => {
    let r = !1;
    if (i.forEach(n => {
        let {
          type: l,
          start: o,
          end: i
        } = e, a = e.getFullMatch();
        !n.processed && (n.type === l && n.start === o && n.text === a ? (n.processed = !0, r = !0) : (o >= n.start && o < n.end || i > n.start && i <= n.end) && (n.processed = !0, t = k(null, n.start, n.end, t)))
      }), r) return;
    let l = n[e.type];
    t = k([e.type, null != l && l.mutable ? "MUTABLE" : "IMMUTABLE", {
      token: e
    }], e.start, e.end, t)
  }), i.forEach(e => {
    !e.processed && (t = k(null, e.start, e.end, t))
  }), t
}

function T(e) {
  return r.EditorState.createEmpty(new r.CompositeDecorator(e))
}

function F(e) {
  let t = r.EditorState.push(e, r.ContentState.createFromText("")),
    n = e.getSelection();
  return null != n && n.hasFocus && (t = r.EditorState.moveFocusToEnd(t)), t
}

function A(e, t) {
  let n = N(t);
  return j(e, t, 0, n.length)
}

function B(e, t) {
  let n = t.getSelection();
  return n = (n = n.set("focusOffset", e)).set("anchorOffset", e), r.EditorState.forceSelection(t, n)
}

function O(e) {
  return B(e.getCurrentContent().getFirstBlock().getText().length, e)
}

function R(e) {
  return B(0, e)
}

function I(e) {
  let t = e.getSelection();
  return t = (t = t.set("focusOffset", 0)).set("isBackward", !0), r.EditorState.forceSelection(e, t)
}

function L(e) {
  let t = N(e),
    n = e.getSelection();
  return n = (n = n.set("focusOffset", t.length)).set("isBackward", !1), r.EditorState.forceSelection(e, n)
}

function V(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 512,
    n = N(e);
  if (n.length > t) {
    let l = e.getSelection();
    e = j("", e, t, n.length), l.getAnchorOffset() > t && (l = l.set("anchorOffset", t)), l.getFocusOffset() > t && (l = l.set("focusOffset", t)), e = r.EditorState.forceSelection(e, l)
  }
  return e
}

function K(e) {
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
    l = e.getClientRects()[0];
  if (null == r || null == l) return;
  let o = r.left - l.left + e.scrollLeft;
  o < e.scrollLeft ? e.scrollLeft = o - 10 : o > e.scrollLeft + e.offsetWidth && (e.scrollLeft = o - e.offsetWidth + 3)
}

function Z(e) {
  return 0 === N(e).length
}