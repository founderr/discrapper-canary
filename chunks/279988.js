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
  f = n("915580");
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
    title: _,
    actionsLocation: g
  } = e, x = n.values, I = x.slice(0, 1), N = x.length - I.length;
  return (0, a.jsxs)(d.default, {
    field: n,
    index: r,
    isDragEnabled: m,
    isDropHovered: h,
    onDrop: p,
    onEdit: E,
    onRemove: T,
    title: _,
    canRemove: C,
    actionsLocation: g,
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