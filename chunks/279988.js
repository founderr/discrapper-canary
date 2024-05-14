"use strict";
a.r(t), a("47120");
var n = a("735250");
a("470079");
var r = a("120356"),
  i = a.n(r),
  s = a("692547"),
  l = a("481060"),
  o = a("259580"),
  c = a("196345"),
  d = a("137158"),
  u = a("689938"),
  f = a("17359");
t.default = function(e) {
  let {
    channelId: t,
    formField: a,
    index: r,
    isDragEnabled: m,
    isDropHovered: h,
    onDrop: E,
    onEdit: T,
    onRemove: p,
    canRemove: C,
    title: _,
    actionsLocation: x
  } = e, g = a.values, I = g.slice(0, 1), v = g.length - I.length;
  return (0, n.jsxs)(d.default, {
    field: a,
    index: r,
    isDragEnabled: m,
    isDropHovered: h,
    onDrop: E,
    onEdit: T,
    onRemove: p,
    title: _,
    canRemove: C,
    actionsLocation: x,
    children: [(0, n.jsx)(c.TermsFieldBody, {
      className: i()(f.fieldBackground, {
        [f.withFooter]: 0 !== v
      }),
      terms: I,
      channelId: t
    }), 0 !== v && (0, n.jsxs)(l.Clickable, {
      className: i()(f.fieldFooterContainer, f.clickable),
      onClick: T,
      children: [(0, n.jsx)(l.FormText, {
        className: f.clickable,
        children: u.default.Messages.MEMBER_VERIFICATION_OTHER_RULES.format({
          count: v
        })
      }), (0, n.jsx)(o.default, {
        className: f.termsFieldCaretIcon,
        height: 14,
        width: 14,
        color: s.default.unsafe_rawColors.WHITE_500.css
      })]
    }), (0, n.jsx)(c.TermsFieldCheckbox, {
      disabled: !0,
      checked: !1
    })]
  })
}