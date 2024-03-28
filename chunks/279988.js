"use strict";
i.r(t), i("47120");
var a = i("735250");
i("470079");
var l = i("803997"),
  n = i.n(l),
  s = i("692547"),
  r = i("481060"),
  o = i("259580"),
  d = i("196345"),
  c = i("137158"),
  u = i("689938"),
  f = i("482249");
t.default = function(e) {
  let {
    channelId: t,
    formField: i,
    index: l,
    isDragEnabled: E,
    isDropHovered: I,
    onDrop: T,
    onEdit: m,
    onRemove: _,
    title: x
  } = e, h = i.values, p = h.slice(0, 1), M = h.length - p.length;
  return (0, a.jsxs)(c.default, {
    field: i,
    index: l,
    isDragEnabled: E,
    isDropHovered: I,
    onDrop: T,
    onEdit: m,
    onRemove: _,
    title: x,
    children: [(0, a.jsx)(d.TermsFieldBody, {
      className: n()(f.fieldBackground, {
        [f.withFooter]: 0 !== M
      }),
      terms: p,
      channelId: t
    }), 0 !== M && (0, a.jsxs)(r.Clickable, {
      className: n()(f.fieldFooterContainer, f.clickable),
      onClick: m,
      children: [(0, a.jsx)(r.FormText, {
        className: f.clickable,
        children: u.default.Messages.MEMBER_VERIFICATION_OTHER_RULES.format({
          count: M
        })
      }), (0, a.jsx)(o.default, {
        className: f.termsFieldCaretIcon,
        height: 14,
        width: 14,
        color: s.default.unsafe_rawColors.WHITE_500.css
      })]
    }), (0, a.jsx)(d.TermsFieldCheckbox, {
      disabled: !0,
      checked: !1
    })]
  })
}