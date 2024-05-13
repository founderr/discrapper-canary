"use strict";
n.r(t), n.d(t, {
  applyTokensAsEntities: function() {
    return N
  },
  clearContent: function() {
    return A
  },
  createEmptyEditorState: function() {
    return T
  },
  deleteContent: function() {
    return k
  },
  getDefaultKeyBinding: function() {
    return o()
  },
  getFirstTextBlock: function() {
    return I
  },
  isEmpty: function() {
    return D
  },
  miscCommand: function() {
    return w
  },
  replaceAllContent: function() {
    return L
  },
  scrollCursorIntoView: function() {
    return z
  },
  setCollapsedEndSelection: function() {
    return R
  },
  setCollapsedSelection: function() {
    return F
  },
  setCollapsedStartSelection: function() {
    return B
  },
  setToEndSelection: function() {
    return O
  },
  setToStartSelection: function() {
    return H
  },
  truncateContent: function() {
    return _
  },
  updateContent: function() {
    return E
  }
}), n("47120"), n("653041");
var r = n("371917"),
  l = n("421520"),
  o = n.n(l),
  a = n("563751"),
  i = n.n(a),
  s = n("608382"),
  u = n.n(s),
  c = n("722661"),
  d = n.n(c),
  f = n("225389"),
  h = n.n(f),
  p = n("71716"),
  g = n.n(p),
  m = n("869045"),
  x = n.n(m),
  C = n("110599"),
  b = n.n(C),
  M = n("801539"),
  v = n.n(M),
  y = n("887868"),
  S = n.n(y);

function j(e, t, n, l) {
  let o = l.getCurrentContent(),
    a = null;
  null != e && (a = (o = o.createEntity(...e)).getLastCreatedEntityKey());
  let i = o.getFirstBlock(),
    s = new r.SelectionState({
      anchorKey: i.getKey(),
      anchorOffset: t,
      focusKey: i.getKey(),
      focusOffset: n
    });
  return o = r.Modifier.applyEntity(o, s, a), r.EditorState.set(l, {
    currentContent: o
  })
}

function E(e, t, n, l) {
  let o, a;
  let s = t.getCurrentContent(),
    u = s.getFirstBlock(),
    c = u.getText();
  "number" == typeof n ? (n > c.length && (n = c.length), null != l && l > c.length && (l = c.length), o = new r.SelectionState({
    anchorKey: u.getKey(),
    anchorOffset: n,
    focusKey: u.getKey(),
    focusOffset: null != l && 0 !== l ? l : n
  })) : o = t.getSelection();
  let d = t.getCurrentInlineStyle(),
    f = i()(s, o);
  return o.isCollapsed() ? (s = r.Modifier.insertText(s, o, e, d, f), a = "insert-characters") : (s = r.Modifier.replaceText(s, o, e, d, f), a = "replace-characters"), r.EditorState.push(t, s, a)
}

function k(e, t) {
  switch (e) {
    case "delete":
      return v()(t);
    case "delete-word":
      return h()(t);
    case "backspace":
      return b()(t);
    case "backspace-word":
      return d()(t);
    case "backspace-to-start-of-line":
      return u()(t);
    default:
      return t
  }
}

function w(e, t) {
  switch (e) {
    case "transpose-characters":
      return S()(t);
    case "move-selection-to-start-of-block":
      return x()(t);
    case "move-selection-to-end-of-block":
      return g()(t);
    default:
      return t
  }
}

function I(e) {
  return e.getCurrentContent().getFirstBlock().getText()
}

function N(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    r = t.getCurrentContent(),
    l = r.getFirstBlock(),
    o = l.getText(),
    a = [];
  return l.findEntityRanges(e => null !== e.getEntity(), (e, t) => {
    let n = r.getEntity(l.getEntityAt(e)).getType(),
      i = o.substring(e, t);
    a.push({
      processed: !1,
      type: n,
      start: e,
      end: t,
      text: i
    })
  }), e.forEach(e => {
    let r = !1;
    if (a.forEach(n => {
        let {
          type: l,
          start: o,
          end: a
        } = e, i = e.getFullMatch();
        !n.processed && (n.type === l && n.start === o && n.text === i ? (n.processed = !0, r = !0) : (o >= n.start && o < n.end || a > n.start && a <= n.end) && (n.processed = !0, t = j(null, n.start, n.end, t)))
      }), r) return;
    let l = n[e.type];
    t = j([e.type, null != l && l.mutable ? "MUTABLE" : "IMMUTABLE", {
      token: e
    }], e.start, e.end, t)
  }), a.forEach(e => {
    !e.processed && (t = j(null, e.start, e.end, t))
  }), t
}

function T(e) {
  return r.EditorState.createEmpty(new r.CompositeDecorator(e))
}

function A(e) {
  let t = r.EditorState.push(e, r.ContentState.createFromText("")),
    n = e.getSelection();
  return null != n && n.hasFocus && (t = r.EditorState.moveFocusToEnd(t)), t
}

function L(e, t) {
  let n = I(t);
  return E(e, t, 0, n.length)
}

function F(e, t) {
  let n = t.getSelection();
  return n = (n = n.set("focusOffset", e)).set("anchorOffset", e), r.EditorState.forceSelection(t, n)
}

function R(e) {
  return F(e.getCurrentContent().getFirstBlock().getText().length, e)
}

function B(e) {
  return F(0, e)
}

function H(e) {
  let t = e.getSelection();
  return t = (t = t.set("focusOffset", 0)).set("isBackward", !0), r.EditorState.forceSelection(e, t)
}

function O(e) {
  let t = I(e),
    n = e.getSelection();
  return n = (n = n.set("focusOffset", t.length)).set("isBackward", !1), r.EditorState.forceSelection(e, n)
}

function _(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 512,
    n = I(e);
  if (n.length > t) {
    let l = e.getSelection();
    e = E("", e, t, n.length), l.getAnchorOffset() > t && (l = l.set("anchorOffset", t)), l.getFocusOffset() > t && (l = l.set("focusOffset", t)), e = r.EditorState.forceSelection(e, l)
  }
  return e
}

function z(e) {
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

function D(e) {
  return 0 === I(e).length
}