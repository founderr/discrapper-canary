"use strict";
s.r(t), s("47120");
var a = s("735250");
s("470079");
var n = s("120356"),
  i = s.n(n),
  E = s("692547"),
  l = s("481060"),
  _ = s("259580"),
  r = s("196345"),
  u = s("137158"),
  o = s("689938"),
  T = s("915580");
t.default = function(e) {
  let {
    channelId: t,
    formField: s,
    index: n,
    isDragEnabled: d,
    isDropHovered: A,
    onDrop: I,
    onEdit: L,
    onRemove: c,
    canRemove: N,
    title: S,
    actionsLocation: g
  } = e, D = s.values, C = D.slice(0, 1), f = D.length - C.length;
  return (0, a.jsxs)(u.default, {
    field: s,
    index: n,
    isDragEnabled: d,
    isDropHovered: A,
    onDrop: I,
    onEdit: L,
    onRemove: c,
    title: S,
    canRemove: N,
    actionsLocation: g,
    children: [(0, a.jsx)(r.TermsFieldBody, {
      className: i()(T.fieldBackground, {
        [T.withFooter]: 0 !== f
      }),
      terms: C,
      channelId: t
    }), 0 !== f && (0, a.jsxs)(l.Clickable, {
      className: i()(T.fieldFooterContainer, T.clickable),
      onClick: L,
      children: [(0, a.jsx)(l.FormText, {
        className: T.clickable,
        children: o.default.Messages.MEMBER_VERIFICATION_OTHER_RULES.format({
          count: f
        })
      }), (0, a.jsx)(_.default, {
        className: T.termsFieldCaretIcon,
        height: 14,
        width: 14,
        color: E.default.unsafe_rawColors.WHITE_500.css
      })]
    }), (0, a.jsx)(r.TermsFieldCheckbox, {
      disabled: !0,
      checked: !1
    })]
  })
}