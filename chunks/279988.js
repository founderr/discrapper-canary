"use strict";
i.r(t), i("47120");
var n = i("735250");
i("470079");
var r = i("120356"),
  s = i.n(r),
  a = i("692547"),
  l = i("481060"),
  o = i("259580"),
  c = i("196345"),
  u = i("137158"),
  d = i("689938"),
  f = i("482249");
t.default = function(e) {
  let {
    channelId: t,
    formField: i,
    index: r,
    isDragEnabled: p,
    isDropHovered: C,
    onDrop: m,
    onEdit: h,
    onRemove: _,
    canRemove: E,
    title: I,
    actionsLocation: T
  } = e, x = i.values, g = x.slice(0, 1), v = x.length - g.length;
  return (0, n.jsxs)(u.default, {
    field: i,
    index: r,
    isDragEnabled: p,
    isDropHovered: C,
    onDrop: m,
    onEdit: h,
    onRemove: _,
    title: I,
    canRemove: E,
    actionsLocation: T,
    children: [(0, n.jsx)(c.TermsFieldBody, {
      className: s()(f.fieldBackground, {
        [f.withFooter]: 0 !== v
      }),
      terms: g,
      channelId: t
    }), 0 !== v && (0, n.jsxs)(l.Clickable, {
      className: s()(f.fieldFooterContainer, f.clickable),
      onClick: h,
      children: [(0, n.jsx)(l.FormText, {
        className: f.clickable,
        children: d.default.Messages.MEMBER_VERIFICATION_OTHER_RULES.format({
          count: v
        })
      }), (0, n.jsx)(o.default, {
        className: f.termsFieldCaretIcon,
        height: 14,
        width: 14,
        color: a.default.unsafe_rawColors.WHITE_500.css
      })]
    }), (0, n.jsx)(c.TermsFieldCheckbox, {
      disabled: !0,
      checked: !1
    })]
  })
}