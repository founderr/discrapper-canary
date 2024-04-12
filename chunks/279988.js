"use strict";
n.r(t), n("47120");
var i = n("735250");
n("470079");
var r = n("803997"),
  s = n.n(r),
  a = n("692547"),
  l = n("481060"),
  o = n("259580"),
  u = n("196345"),
  c = n("137158"),
  d = n("689938"),
  f = n("482249");
t.default = function(e) {
  let {
    channelId: t,
    formField: n,
    index: r,
    isDragEnabled: p,
    isDropHovered: m,
    onDrop: E,
    onEdit: I,
    onRemove: _,
    canRemove: h,
    title: T
  } = e, g = n.values, C = g.slice(0, 1), x = g.length - C.length;
  return (0, i.jsxs)(c.default, {
    field: n,
    index: r,
    isDragEnabled: p,
    isDropHovered: m,
    onDrop: E,
    onEdit: I,
    onRemove: _,
    title: T,
    canRemove: h,
    children: [(0, i.jsx)(u.TermsFieldBody, {
      className: s()(f.fieldBackground, {
        [f.withFooter]: 0 !== x
      }),
      terms: C,
      channelId: t
    }), 0 !== x && (0, i.jsxs)(l.Clickable, {
      className: s()(f.fieldFooterContainer, f.clickable),
      onClick: I,
      children: [(0, i.jsx)(l.FormText, {
        className: f.clickable,
        children: d.default.Messages.MEMBER_VERIFICATION_OTHER_RULES.format({
          count: x
        })
      }), (0, i.jsx)(o.default, {
        className: f.termsFieldCaretIcon,
        height: 14,
        width: 14,
        color: a.default.unsafe_rawColors.WHITE_500.css
      })]
    }), (0, i.jsx)(u.TermsFieldCheckbox, {
      disabled: !0,
      checked: !1
    })]
  })
}