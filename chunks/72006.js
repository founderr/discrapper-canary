t.d(n, {
  FZ: function() {
    return Z
  },
  Hl: function() {
    return B
  },
  NJ: function() {
    return P
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
    return b
  },
  c2: function() {
    return D
  },
  eE: function() {
    return U
  },
  iE: function() {
    return y
  },
  iK: function() {
    return x
  },
  lv: function() {
    return L
  },
  nR: function() {
    return O
  },
  q0: function() {
    return o.a
  },
  x0: function() {
    return A
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
  o = t.n(r),
  l = t(563751),
  u = t.n(l),
  s = t(608382),
  a = t.n(s),
  c = t(722661),
  d = t.n(c),
  _ = t(225389),
  f = t.n(_),
  E = t(71716),
  I = t.n(E),
  g = t(869045),
  p = t.n(g),
  m = t(110599),
  S = t.n(m),
  C = t(801539),
  T = t.n(C),
  N = t(887868),
  h = t.n(N);

function v(e, n, t, r) {
  let o = r.getCurrentContent(),
    l = null;
  null != e && (l = (o = o.createEntity(...e)).getLastCreatedEntityKey());
  let u = o.getFirstBlock(),
    s = new i.SelectionState({
      anchorKey: u.getKey(),
      anchorOffset: n,
      focusKey: u.getKey(),
      focusOffset: t
    });
  return o = i.Modifier.applyEntity(o, s, l), i.EditorState.set(r, {
    currentContent: o
  })
}

function A(e, n, t, r) {
  let o, l;
  let s = n.getCurrentContent(),
    a = s.getFirstBlock(),
    c = a.getText();
  "number" == typeof t ? (t > c.length && (t = c.length), null != r && r > c.length && (r = c.length), o = new i.SelectionState({
    anchorKey: a.getKey(),
    anchorOffset: t,
    focusKey: a.getKey(),
    focusOffset: null != r && 0 !== r ? r : t
  })) : o = n.getSelection();
  let d = n.getCurrentInlineStyle(),
    _ = u()(s, o);
  return o.isCollapsed() ? (s = i.Modifier.insertText(s, o, e, d, _), l = "insert-characters") : (s = i.Modifier.replaceText(s, o, e, d, _), l = "replace-characters"), i.EditorState.push(n, s, l)
}

function R(e, n) {
  switch (e) {
    case "delete":
      return T()(n);
    case "delete-word":
      return f()(n);
    case "backspace":
      return S()(n);
    case "backspace-word":
      return d()(n);
    case "backspace-to-start-of-line":
      return a()(n);
    default:
      return n
  }
}

function b(e, n) {
  switch (e) {
    case "transpose-characters":
      return h()(n);
    case "move-selection-to-start-of-block":
      return p()(n);
    case "move-selection-to-end-of-block":
      return I()(n);
    default:
      return n
  }
}

function M(e) {
  return e.getCurrentContent().getFirstBlock().getText()
}

function L(e, n) {
  let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    i = n.getCurrentContent(),
    r = i.getFirstBlock(),
    o = r.getText(),
    l = [];
  return r.findEntityRanges(e => null !== e.getEntity(), (e, n) => {
    let t = i.getEntity(r.getEntityAt(e)).getType(),
      u = o.substring(e, n);
    l.push({
      processed: !1,
      type: t,
      start: e,
      end: n,
      text: u
    })
  }), e.forEach(e => {
    let i = !1;
    if (l.forEach(t => {
        let {
          type: r,
          start: o,
          end: l
        } = e, u = e.getFullMatch();
        if (!t.processed) t.type === r && t.start === o && t.text === u ? (t.processed = !0, i = !0) : (o >= t.start && o < t.end || l > t.start && l <= t.end) && (t.processed = !0, n = v(null, t.start, t.end, n))
      }), i) return;
    let r = t[e.type];
    n = v([e.type, null != r && r.mutable ? "MUTABLE" : "IMMUTABLE", {
      token: e
    }], e.start, e.end, n)
  }), l.forEach(e => {
    !e.processed && (n = v(null, e.start, e.end, n))
  }), n
}

function O(e) {
  return i.EditorState.createEmpty(new i.CompositeDecorator(e))
}

function Z(e) {
  let n = i.EditorState.push(e, i.ContentState.createFromText("")),
    t = e.getSelection();
  return null != t && t.hasFocus && (n = i.EditorState.moveFocusToEnd(n)), n
}

function D(e, n) {
  let t = M(n);
  return A(e, n, 0, t.length)
}

function x(e, n) {
  let t = n.getSelection();
  return t = (t = t.set("focusOffset", e)).set("anchorOffset", e), i.EditorState.forceSelection(n, t)
}

function P(e) {
  return x(e.getCurrentContent().getFirstBlock().getText().length, e)
}

function U(e) {
  return x(0, e)
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
    e = A("", e, n, t.length), r.getAnchorOffset() > n && (r = r.set("anchorOffset", n)), r.getFocusOffset() > n && (r = r.set("focusOffset", n)), e = i.EditorState.forceSelection(e, r)
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
  let o = i.left - r.left + e.scrollLeft;
  o < e.scrollLeft ? e.scrollLeft = o - 10 : o > e.scrollLeft + e.offsetWidth && (e.scrollLeft = o - e.offsetWidth + 3)
}

function w(e) {
  return 0 === M(e).length
}