"use strict";
a.r(t), a("47120");
var n = a("735250");
a("470079");
var i = a("120356"),
  r = a.n(i),
  s = a("692547"),
  l = a("481060"),
  o = a("259580"),
  c = a("196345"),
  d = a("137158"),
  u = a("689938"),
  f = a("915580");
t.default = function(e) {
  let {
    channelId: t,
    formField: a,
    index: i,
    isDragEnabled: m,
    isDropHovered: h,
    onDrop: E,
    onEdit: T,
    onRemove: p,
    canRemove: _,
    title: C,
    actionsLocation: g
  } = e, x = a.values, I = x.slice(0, 1), v = x.length - I.length;
  return (0, n.jsxs)(d.default, {
    field: a,
    index: i,
    isDragEnabled: m,
    isDropHovered: h,
    onDrop: E,
    onEdit: T,
    onRemove: p,
    title: C,
    canRemove: _,
    actionsLocation: g,
    children: [(0, n.jsx)(c.TermsFieldBody, {
      className: r()(f.fieldBackground, {
        [f.withFooter]: 0 !== v
      }),
      terms: I,
      channelId: t
    }), 0 !== v && (0, n.jsxs)(l.Clickable, {
      className: r()(f.fieldFooterContainer, f.clickable),
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