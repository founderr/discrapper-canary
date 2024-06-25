t.d(n, {
  FZ: function() {
    return D
  },
  Hl: function() {
    return B
  },
  NJ: function() {
    return x
  },
  R8: function() {
    return G
  },
  Sq: function() {
    return M
  },
  Wg: function() {
    return j
  },
  Zn: function() {
    return L
  },
  c2: function() {
    return b
  },
  eE: function() {
    return U
  },
  iE: function() {
    return y
  },
  iK: function() {
    return P
  },
  lv: function() {
    return O
  },
  nR: function() {
    return Z
  },
  q0: function() {
    return l.a
  },
  x0: function() {
    return h
  },
  xb: function() {
    return w
  },
  yd: function() {
    return R
  }
}), t(47120), t(653041);
var i = t(371917),
  r = t(421520),
  l = t.n(r),
  o = t(563751),
  u = t.n(o),
  s = t(608382),
  a = t.n(s),
  c = t(722661),
  d = t.n(c),
  _ = t(225389),
  f = t.n(_),
  E = t(71716),
  I = t.n(E),
  g = t(869045),
  S = t.n(g),
  p = t(110599),
  m = t.n(p),
  C = t(801539),
  T = t.n(C),
  N = t(887868),
  A = t.n(N);

function v(e, n, t, r) {
  let l = r.getCurrentContent(),
    o = null;
  null != e && (o = (l = l.createEntity(...e)).getLastCreatedEntityKey());
  let u = l.getFirstBlock(),
    s = new i.SelectionState({
      anchorKey: u.getKey(),
      anchorOffset: n,
      focusKey: u.getKey(),
      focusOffset: t
    });
  return l = i.Modifier.applyEntity(l, s, o), i.EditorState.set(r, {
    currentContent: l
  })
}

function h(e, n, t, r) {
  let l, o;
  let s = n.getCurrentContent(),
    a = s.getFirstBlock(),
    c = a.getText();
  "number" == typeof t ? (t > c.length && (t = c.length), null != r && r > c.length && (r = c.length), l = new i.SelectionState({
    anchorKey: a.getKey(),
    anchorOffset: t,
    focusKey: a.getKey(),
    focusOffset: null != r && 0 !== r ? r : t
  })) : l = n.getSelection();
  let d = n.getCurrentInlineStyle(),
    _ = u()(s, l);
  return l.isCollapsed() ? (s = i.Modifier.insertText(s, l, e, d, _), o = "insert-characters") : (s = i.Modifier.replaceText(s, l, e, d, _), o = "replace-characters"), i.EditorState.push(n, s, o)
}

function R(e, n) {
  switch (e) {
    case "delete":
      return T()(n);
    case "delete-word":
      return f()(n);
    case "backspace":
      return m()(n);
    case "backspace-word":
      return d()(n);
    case "backspace-to-start-of-line":
      return a()(n);
    default:
      return n
  }
}

function L(e, n) {
  switch (e) {
    case "transpose-characters":
      return A()(n);
    case "move-selection-to-start-of-block":
      return S()(n);
    case "move-selection-to-end-of-block":
      return I()(n);
    default:
      return n
  }
}

function M(e) {
  return e.getCurrentContent().getFirstBlock().getText()
}

function O(e, n) {
  let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    i = n.getCurrentContent(),
    r = i.getFirstBlock(),
    l = r.getText(),
    o = [];
  return r.findEntityRanges(e => null !== e.getEntity(), (e, n) => {
    let t = i.getEntity(r.getEntityAt(e)).getType(),
      u = l.substring(e, n);
    o.push({
      processed: !1,
      type: t,
      start: e,
      end: n,
      text: u
    })
  }), e.forEach(e => {
    let i = !1;
    if (o.forEach(t => {
        let {
          type: r,
          start: l,
          end: o
        } = e, u = e.getFullMatch();
        if (!t.processed) t.type === r && t.start === l && t.text === u ? (t.processed = !0, i = !0) : (l >= t.start && l < t.end || o > t.start && o <= t.end) && (t.processed = !0, n = v(null, t.start, t.end, n))
      }), i) return;
    let r = t[e.type];
    n = v([e.type, null != r && r.mutable ? "MUTABLE" : "IMMUTABLE", {
      token: e
    }], e.start, e.end, n)
  }), o.forEach(e => {
    !e.processed && (n = v(null, e.start, e.end, n))
  }), n
}

function Z(e) {
  return i.EditorState.createEmpty(new i.CompositeDecorator(e))
}

function D(e) {
  let n = i.EditorState.push(e, i.ContentState.createFromText("")),
    t = e.getSelection();
  return null != t && t.hasFocus && (n = i.EditorState.moveFocusToEnd(n)), n
}

function b(e, n) {
  let t = M(n);
  return h(e, n, 0, t.length)
}

function P(e, n) {
  let t = n.getSelection();
  return t = (t = t.set("focusOffset", e)).set("anchorOffset", e), i.EditorState.forceSelection(n, t)
}

function x(e) {
  return P(e.getCurrentContent().getFirstBlock().getText().length, e)
}

function U(e) {
  return P(0, e)
}

function G(e) {
  let n = e.getSelection();
  return n = (n = n.set("focusOffset", 0)).set("isBackward", !0), i.EditorState.forceSelection(e, n)
}

function j(e) {
  let n = M(e),
    t = e.getSelection();
  return t = (t = t.set("focusOffset", n.length)).set("isBackward", !1), i.EditorState.forceSelection(e, t)
}

function B(e) {
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 512,
    t = M(e);
  if (t.length > n) {
    let r = e.getSelection();
    e = h("", e, n, t.length), r.getAnchorOffset() > n && (r = r.set("anchorOffset", n)), r.getFocusOffset() > n && (r = r.set("focusOffset", n)), e = i.EditorState.forceSelection(e, r)
  }
  return e
}

function y(e) {
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
  let i = t.getClientRects()[0],
    r = e.getClientRects()[0];
  if (null == i || null == r) return;
  let l = i.left - r.left + e.scrollLeft;
  l < e.scrollLeft ? e.scrollLeft = l - 10 : l > e.scrollLeft + e.offsetWidth && (e.scrollLeft = l - e.offsetWidth + 3)
}

function w(e) {
  return 0 === M(e).length
}