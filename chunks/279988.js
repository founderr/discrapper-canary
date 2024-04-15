"use strict";
i.r(t), i("47120");
var n = i("735250");
i("470079");
var r = i("120356"),
  s = i.n(r),
  a = i("692547"),
  l = i("481060"),
  o = i("259580"),
  u = i("196345"),
  c = i("137158"),
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
    title: I
  } = e, T = i.values, x = T.slice(0, 1), g = T.length - x.length;
  return (0, n.jsxs)(c.default, {
    field: i,
    index: r,
    isDragEnabled: p,
    isDropHovered: C,
    onDrop: m,
    onEdit: h,
    onRemove: _,
    title: I,
    canRemove: E,
    children: [(0, n.jsx)(u.TermsFieldBody, {
      className: s()(f.fieldBackground, {
        [f.withFooter]: 0 !== g
      }),
      terms: x,
      channelId: t
    }), 0 !== g && (0, n.jsxs)(l.Clickable, {
      className: s()(f.fieldFooterContainer, f.clickable),
      onClick: h,
      children: [(0, n.jsx)(l.FormText, {
        className: f.clickable,
        children: d.default.Messages.MEMBER_VERIFICATION_OTHER_RULES.format({
          count: g
        })
      }), (0, n.jsx)(o.default, {
        className: f.termsFieldCaretIcon,
        height: 14,
        width: 14,
        color: a.default.unsafe_rawColors.WHITE_500.css
      })]
    }), (0, n.jsx)(u.TermsFieldCheckbox, {
      disabled: !0,
      checked: !1
    })]
  })
}