"use strict";
a.r(t), a("47120");
var n = a("735250");
a("470079");
var r = a("120356"),
  i = a.n(r),
  s = a("692547"),
  l = a("481060"),
  o = a("259580"),
  d = a("196345"),
  c = a("137158"),
  u = a("689938"),
  f = a("17359");
t.default = function(e) {
  let {
    channelId: t,
    formField: a,
    index: r,
    isDragEnabled: m,
    isDropHovered: E,
    onDrop: h,
    onEdit: T,
    onRemove: _,
    canRemove: C,
    title: x,
    actionsLocation: p
  } = e, I = a.values, g = I.slice(0, 1), N = I.length - g.length;
  return (0, n.jsxs)(c.default, {
    field: a,
    index: r,
    isDragEnabled: m,
    isDropHovered: E,
    onDrop: h,
    onEdit: T,
    onRemove: _,
    title: x,
    canRemove: C,
    actionsLocation: p,
    children: [(0, n.jsx)(d.TermsFieldBody, {
      className: i()(f.fieldBackground, {
        [f.withFooter]: 0 !== N
      }),
      terms: g,
      channelId: t
    }), 0 !== N && (0, n.jsxs)(l.Clickable, {
      className: i()(f.fieldFooterContainer, f.clickable),
      onClick: T,
      children: [(0, n.jsx)(l.FormText, {
        className: f.clickable,
        children: u.default.Messages.MEMBER_VERIFICATION_OTHER_RULES.format({
          count: N
        })
      }), (0, n.jsx)(o.default, {
        className: f.termsFieldCaretIcon,
        height: 14,
        width: 14,
        color: s.default.unsafe_rawColors.WHITE_500.css
      })]
    }), (0, n.jsx)(d.TermsFieldCheckbox, {
      disabled: !0,
      checked: !1
    })]
  })
}