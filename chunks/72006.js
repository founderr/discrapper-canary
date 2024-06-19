t.d(n, {
  FZ: function() {
    return Z
  },
  Hl: function() {
    return y
  },
  NJ: function() {
    return D
  },
  R8: function() {
    return j
  },
  Sq: function() {
    return A
  },
  Wg: function() {
    return G
  },
  Zn: function() {
    return v
  },
  c2: function() {
    return x
  },
  eE: function() {
    return U
  },
  iE: function() {
    return w
  },
  iK: function() {
    return L
  },
  lv: function() {
    return b
  },
  nR: function() {
    return P
  },
  q0: function() {
    return l.a
  },
  x0: function() {
    return O
  },
  xb: function() {
    return B
  },
  yd: function() {
    return M
  }
}), t(47120), t(653041);
var r = t(371917),
  i = t(421520),
  l = t.n(i),
  o = t(563751),
  u = t.n(o),
  s = t(608382),
  a = t.n(s),
  c = t(722661),
  d = t.n(c),
  f = t(225389),
  E = t.n(f),
  _ = t(71716),
  I = t.n(_),
  S = t(869045),
  g = t.n(S),
  p = t(110599),
  T = t.n(p),
  h = t(801539),
  C = t.n(h),
  m = t(887868),
  N = t.n(m);

function R(e, n, t, i) {
  let l = i.getCurrentContent(),
    o = null;
  null != e && (o = (l = l.createEntity(...e)).getLastCreatedEntityKey());
  let u = l.getFirstBlock(),
    s = new r.SelectionState({
      anchorKey: u.getKey(),
      anchorOffset: n,
      focusKey: u.getKey(),
      focusOffset: t
    });
  return l = r.Modifier.applyEntity(l, s, o), r.EditorState.set(i, {
    currentContent: l
  })
}

function O(e, n, t, i) {
  let l, o;
  let s = n.getCurrentContent(),
    a = s.getFirstBlock(),
    c = a.getText();
  "number" == typeof t ? (t > c.length && (t = c.length), null != i && i > c.length && (i = c.length), l = new r.SelectionState({
    anchorKey: a.getKey(),
    anchorOffset: t,
    focusKey: a.getKey(),
    focusOffset: null != i && 0 !== i ? i : t
  })) : l = n.getSelection();
  let d = n.getCurrentInlineStyle(),
    f = u()(s, l);
  return l.isCollapsed() ? (s = r.Modifier.insertText(s, l, e, d, f), o = "insert-characters") : (s = r.Modifier.replaceText(s, l, e, d, f), o = "replace-characters"), r.EditorState.push(n, s, o)
}

function M(e, n) {
  switch (e) {
    case "delete":
      return C()(n);
    case "delete-word":
      return E()(n);
    case "backspace":
      return T()(n);
    case "backspace-word":
      return d()(n);
    case "backspace-to-start-of-line":
      return a()(n);
    default:
      return n
  }
}

function v(e, n) {
  switch (e) {
    case "transpose-characters":
      return N()(n);
    case "move-selection-to-start-of-block":
      return g()(n);
    case "move-selection-to-end-of-block":
      return I()(n);
    default:
      return n
  }
}

function A(e) {
  return e.getCurrentContent().getFirstBlock().getText()
}

function b(e, n) {
  let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    r = n.getCurrentContent(),
    i = r.getFirstBlock(),
    l = i.getText(),
    o = [];
  return i.findEntityRanges(e => null !== e.getEntity(), (e, n) => {
    let t = r.getEntity(i.getEntityAt(e)).getType(),
      u = l.substring(e, n);
    o.push({
      processed: !1,
      type: t,
      start: e,
      end: n,
      text: u
    })
  }), e.forEach(e => {
    let r = !1;
    if (o.forEach(t => {
        let {
          type: i,
          start: l,
          end: o
        } = e, u = e.getFullMatch();
        if (!t.processed) t.type === i && t.start === l && t.text === u ? (t.processed = !0, r = !0) : (l >= t.start && l < t.end || o > t.start && o <= t.end) && (t.processed = !0, n = R(null, t.start, t.end, n))
      }), r) return;
    let i = t[e.type];
    n = R([e.type, null != i && i.mutable ? "MUTABLE" : "IMMUTABLE", {
      token: e
    }], e.start, e.end, n)
  }), o.forEach(e => {
    !e.processed && (n = R(null, e.start, e.end, n))
  }), n
}

function P(e) {
  return r.EditorState.createEmpty(new r.CompositeDecorator(e))
}

function Z(e) {
  let n = r.EditorState.push(e, r.ContentState.createFromText("")),
    t = e.getSelection();
  return null != t && t.hasFocus && (n = r.EditorState.moveFocusToEnd(n)), n
}

function x(e, n) {
  let t = A(n);
  return O(e, n, 0, t.length)
}

function L(e, n) {
  let t = n.getSelection();
  return t = (t = t.set("focusOffset", e)).set("anchorOffset", e), r.EditorState.forceSelection(n, t)
}

function D(e) {
  return L(e.getCurrentContent().getFirstBlock().getText().length, e)
}

function U(e) {
  return L(0, e)
}

function j(e) {
  let n = e.getSelection();
  return n = (n = n.set("focusOffset", 0)).set("isBackward", !0), r.EditorState.forceSelection(e, n)
}

function G(e) {
  let n = A(e),
    t = e.getSelection();
  return t = (t = t.set("focusOffset", n.length)).set("isBackward", !1), r.EditorState.forceSelection(e, t)
}

function y(e) {
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 512,
    t = A(e);
  if (t.length > n) {
    let i = e.getSelection();
    e = O("", e, n, t.length), i.getAnchorOffset() > n && (i = i.set("anchorOffset", n)), i.getFocusOffset() > n && (i = i.set("focusOffset", n)), e = r.EditorState.forceSelection(e, i)
  }
  return e
}

function w(e) {
  let n = window.getSelection();
  if (null == n || "Caret" !== n.type || null == e) return;
  let t = n.getRangeAt(0);
  if (! function(e, n) {
      for (; null != e;) {
        if (e === n) return !0;
        e = e.parentNode
      }
      return !1
    }(t.commonAncestorContainer, e)) return;
  let r = t.getClientRects()[0],
    i = e.getClientRects()[0];
  if (null == r || null == i) return;
  let l = r.left - i.left + e.scrollLeft;
  l < e.scrollLeft ? e.scrollLeft = l - 10 : l > e.scrollLeft + e.offsetWidth && (e.scrollLeft = l - e.offsetWidth + 3)
}

function B(e) {
  return 0 === A(e).length
}