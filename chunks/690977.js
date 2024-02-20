"use strict";
n.r(t), n.d(t, {
  useFocusJumpSection: function() {
    return c
  },
  FocusJumpSection: function() {
    return d
  },
  useFocusJumpSectionManager: function() {
    return h
  }
}), n("37983");
var i = n("884691"),
  r = n("71185"),
  s = n("791776"),
  a = n("894282");
let o = "data-jump-section",
  l = "global",
  u = i.createContext(l);

function c() {
  let e = i.useContext(u);
  return i.useMemo(() => ({
    [o]: e
  }), [e])
}

function d(e) {
  let t = c();
  return e.children(t)
}
async function p(e) {
  var t, n, i, u;
  if (e.key !== a.FOCUS_SECTION_JUMP_KEY) return;
  let c = (0, s.eventOwnerDocument)(e);
  if (null == c) return;
  let d = null,
    p = null,
    h = e.target;
  for (; null != h;) {
    if (h.hasAttribute(o)) {
      d = h.getAttribute(o), p = h;
      break
    }
    h = h.parentElement
  }
  let f = (0, r.createFocusManager)({
    getFocusableElements: () => Array.from(c.querySelectorAll("[".concat(o, '="').concat(null != d ? d : l, '"]'))),
    getActiveElement: () => c.activeElement
  });
  if ((null === (t = (0, s.eventOwnerDocument)(e)) || void 0 === t ? void 0 : t.activeElement) == null || null == p) {
    null === (n = f.getFirstFocusableElement()) || void 0 === n || n.focus();
    return
  }
  e.getModifierState("Shift") ? null === (i = await f.getPreviousFocusableElement({
    wrap: !0,
    from: p
  })) || void 0 === i || i.focus() : null === (u = await f.getNextFocusableElement({
    wrap: !0,
    from: p
  })) || void 0 === u || u.focus()
}

function h(e) {
  i.useEffect(() => {
    if (e) return window.addEventListener("keydown", p), () => {
      window.removeEventListener("keydown", p)
    }
  }, [e])
}