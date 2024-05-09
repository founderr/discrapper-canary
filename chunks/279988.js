"use strict";
n.r(t), n("47120");
var a = n("735250");
n("470079");
var r = n("120356"),
  s = n.n(r),
  i = n("692547"),
  l = n("481060"),
  o = n("259580"),
  c = n("196345"),
  d = n("137158"),
  u = n("689938"),
  f = n("17359");
t.default = function(e) {
  let {
    channelId: t,
    formField: n,
    index: r,
    isDragEnabled: m,
    isDropHovered: h,
    onDrop: p,
    onEdit: E,
    onRemove: T,
    canRemove: C,
    title: x,
    actionsLocation: _
  } = e, g = n.values, I = g.slice(0, 1), N = g.length - I.length;
  return (0, a.jsxs)(d.default, {
    field: n,
    index: r,
    isDragEnabled: m,
    isDropHovered: h,
    onDrop: p,
    onEdit: E,
    onRemove: T,
    title: x,
    canRemove: C,
    actionsLocation: _,
    children: [(0, a.jsx)(c.TermsFieldBody, {
      className: s()(f.fieldBackground, {
        [f.withFooter]: 0 !== N
      }),
      terms: I,
      channelId: t
    }), 0 !== N && (0, a.jsxs)(l.Clickable, {
      className: s()(f.fieldFooterContainer, f.clickable),
      onClick: E,
      children: [(0, a.jsx)(l.FormText, {
        className: f.clickable,
        children: u.default.Messages.MEMBER_VERIFICATION_OTHER_RULES.format({
          count: N
        })
      }), (0, a.jsx)(o.default, {
        className: f.termsFieldCaretIcon,
        height: 14,
        width: 14,
        color: i.default.unsafe_rawColors.WHITE_500.css
      })]
    }), (0, a.jsx)(c.TermsFieldCheckbox, {
      disabled: !0,
      checked: !1
    })]
  })
}