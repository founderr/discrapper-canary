"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  o = n("414456"),
  a = n.n(o),
  r = n("587974"),
  s = n("315102"),
  u = n("524768"),
  c = n("616674"),
  d = n("363577");

function p(e) {
  let {
    section: t,
    isSelected: n,
    width: o,
    height: p,
    className: m,
    selectable: f = !1,
    onFocus: h,
    onBlur: g,
    onMouseOver: _,
    onMouseLeave: C,
    ...v
  } = e, [A, E] = i.useState(!1), I = i.useCallback(() => {
    E(!0), null == h || h()
  }, [h]), T = i.useCallback(() => {
    E(!1), null == g || g()
  }, [g]), y = i.useCallback(() => {
    E(!0), null == _ || _()
  }, [_]), M = i.useCallback(() => {
    E(!1), null == C || C()
  }, [C]), O = i.useMemo(() => {
    if (t.type === u.ApplicationCommandSectionType.APPLICATION) {
      var e;
      return s.default.getApplicationIconURL({
        id: t.id,
        icon: t.icon,
        bot: null === (e = t.application) || void 0 === e ? void 0 : e.bot,
        botIconFirst: !0,
        size: o
      })
    }
    return d
  }, [t, o]);
  return (0, l.jsx)("div", {
    ...v,
    className: a(c.wrapper, m, {
      [c.selectable]: f,
      [c.selected]: f && n
    }),
    onFocus: I,
    onBlur: T,
    onMouseOver: y,
    onMouseLeave: M,
    children: (0, l.jsx)(r.default, {
      className: c.mask,
      mask: f && (n || A) ? r.MaskIDs.SQUIRCLE : r.MaskIDs.AVATAR_DEFAULT,
      width: o,
      height: p,
      children: (0, l.jsx)("img", {
        alt: "",
        className: c.icon,
        style: {
          width: o,
          height: p
        },
        src: O
      })
    })
  })
}