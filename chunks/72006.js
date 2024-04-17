"use strict";
n.r(t), n.d(t, {
  applyTokensAsEntities: function() {
    return N
  },
  clearContent: function() {
    return w
  },
  createEmptyEditorState: function() {
    return I
  },
  deleteContent: function() {
    return k
  },
  getDefaultKeyBinding: function() {
    return a()
  },
  getFirstTextBlock: function() {
    return T
  },
  isEmpty: function() {
    return P
  },
  miscCommand: function() {
    return A
  },
  replaceAllContent: function() {
    return F
  },
  scrollCursorIntoView: function() {
    return O
  },
  setCollapsedEndSelection: function() {
    return R
  },
  setCollapsedSelection: function() {
    return L
  },
  setCollapsedStartSelection: function() {
    return _
  },
  setToEndSelection: function() {
    return z
  },
  setToStartSelection: function() {
    return B
  },
  truncateContent: function() {
    return H
  },
  updateContent: function() {
    return E
  }
}), n("47120"), n("653041");
var l = n("16464"),
  r = n("713512"),
  a = n.n(r),
  i = n("294006"),
  o = n.n(i),
  s = n("601310"),
  u = n.n(s),
  c = n("597605"),
  d = n.n(c),
  f = n("83550"),
  m = n.n(f),
  h = n("65492"),
  x = n.n(h),
  g = n("405141"),
  p = n.n(g),
  C = n("960973"),
  b = n.n(C),
  v = n("93874"),
  M = n.n(v),
  j = n("295985"),
  y = n.n(j);

function S(e, t, n, r) {
  let a = r.getCurrentContent(),
    i = null;
  null != e && (i = (a = a.createEntity(...e)).getLastCreatedEntityKey());
  let o = a.getFirstBlock(),
    s = new l.SelectionState({
      anchorKey: o.getKey(),
      anchorOffset: t,
      focusKey: o.getKey(),
      focusOffset: n
    });
  return a = l.Modifier.applyEntity(a, s, i), l.EditorState.set(r, {
    currentContent: a
  })
}

function E(e, t, n, r) {
  let a, i;
  let s = t.getCurrentContent(),
    u = s.getFirstBlock(),
    c = u.getText();
  "number" == typeof n ? (n > c.length && (n = c.length), null != r && r > c.length && (r = c.length), a = new l.SelectionState({
    anchorKey: u.getKey(),
    anchorOffset: n,
    focusKey: u.getKey(),
    focusOffset: null != r && 0 !== r ? r : n
  })) : a = t.getSelection();
  let d = t.getCurrentInlineStyle(),
    f = o()(s, a);
  return a.isCollapsed() ? (s = l.Modifier.insertText(s, a, e, d, f), i = "insert-characters") : (s = l.Modifier.replaceText(s, a, e, d, f), i = "replace-characters"), l.EditorState.push(t, s, i)
}

function k(e, t) {
  switch (e) {
    case "delete":
      return M()(t);
    case "delete-word":
      return m()(t);
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

function A(e, t) {
  switch (e) {
    case "transpose-characters":
      return y()(t);
    case "move-selection-to-start-of-block":
      return p()(t);
    case "move-selection-to-end-of-block":
      return x()(t);
    default:
      return t
  }
}

function T(e) {
  return e.getCurrentContent().getFirstBlock().getText()
}

function N(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    l = t.getCurrentContent(),
    r = l.getFirstBlock(),
    a = r.getText(),
    i = [];
  return r.findEntityRanges(e => null !== e.getEntity(), (e, t) => {
    let n = l.getEntity(r.getEntityAt(e)).getType(),
      o = a.substring(e, t);
    i.push({
      processed: !1,
      type: n,
      start: e,
      end: t,
      text: o
    })
  }), e.forEach(e => {
    let l = !1;
    if (i.forEach(n => {
        let {
          type: r,
          start: a,
          end: i
        } = e, o = e.getFullMatch();
        !n.processed && (n.type === r && n.start === a && n.text === o ? (n.processed = !0, l = !0) : (a >= n.start && a < n.end || i > n.start && i <= n.end) && (n.processed = !0, t = S(null, n.start, n.end, t)))
      }), l) return;
    let r = n[e.type];
    t = S([e.type, null != r && r.mutable ? "MUTABLE" : "IMMUTABLE", {
      token: e
    }], e.start, e.end, t)
  }), i.forEach(e => {
    !e.processed && (t = S(null, e.start, e.end, t))
  }), t
}

function I(e) {
  return l.EditorState.createEmpty(new l.CompositeDecorator(e))
}

function w(e) {
  let t = l.EditorState.push(e, l.ContentState.createFromText("")),
    n = e.getSelection();
  return null != n && n.hasFocus && (t = l.EditorState.moveFocusToEnd(t)), t
}

function F(e, t) {
  let n = T(t);
  return E(e, t, 0, n.length)
}

function L(e, t) {
  let n = t.getSelection();
  return n = (n = n.set("focusOffset", e)).set("anchorOffset", e), l.EditorState.forceSelection(t, n)
}

function R(e) {
  return L(e.getCurrentContent().getFirstBlock().getText().length, e)
}

function _(e) {
  return L(0, e)
}

function B(e) {
  let t = e.getSelection();
  return t = (t = t.set("focusOffset", 0)).set("isBackward", !0), l.EditorState.forceSelection(e, t)
}

function z(e) {
  let t = T(e),
    n = e.getSelection();
  return n = (n = n.set("focusOffset", t.length)).set("isBackward", !1), l.EditorState.forceSelection(e, n)
}

function H(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 512,
    n = T(e);
  if (n.length > t) {
    let r = e.getSelection();
    e = E("", e, t, n.length), r.getAnchorOffset() > t && (r = r.set("anchorOffset", t)), r.getFocusOffset() > t && (r = r.set("focusOffset", t)), e = l.EditorState.forceSelection(e, r)
  }
  return e
}

function O(e) {
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
  let l = n.getClientRects()[0],
    r = e.getClientRects()[0];
  if (null == l || null == r) return;
  let a = l.left - r.left + e.scrollLeft;
  a < e.scrollLeft ? e.scrollLeft = a - 10 : a > e.scrollLeft + e.offsetWidth && (e.scrollLeft = a - e.offsetWidth + 3)
}

function P(e) {
  return 0 === T(e).length
}