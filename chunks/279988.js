"use strict";
n.r(t), n("47120");
var i = n("735250");
n("470079");
var r = n("803997"),
  a = n.n(r),
  s = n("692547"),
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
    canRemove: T,
    title: h
  } = e, g = n.values, C = g.slice(0, 1), v = g.length - C.length;
  return (0, i.jsxs)(c.default, {
    field: n,
    index: r,
    isDragEnabled: p,
    isDropHovered: m,
    onDrop: E,
    onEdit: I,
    onRemove: _,
    title: h,
    canRemove: T,
    children: [(0, i.jsx)(u.TermsFieldBody, {
      className: a()(f.fieldBackground, {
        [f.withFooter]: 0 !== v
      }),
      terms: C,
      channelId: t
    }), 0 !== v && (0, i.jsxs)(l.Clickable, {
      className: a()(f.fieldFooterContainer, f.clickable),
      onClick: I,
      children: [(0, i.jsx)(l.FormText, {
        className: f.clickable,
        children: d.default.Messages.MEMBER_VERIFICATION_OTHER_RULES.format({
          count: v
        })
      }), (0, i.jsx)(o.default, {
        className: f.termsFieldCaretIcon,
        height: 14,
        width: 14,
        color: s.default.unsafe_rawColors.WHITE_500.css
      })]
    }), (0, i.jsx)(u.TermsFieldCheckbox, {
      disabled: !0,
      checked: !1
    })]
  })
}