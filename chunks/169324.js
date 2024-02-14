"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
}), s("222007");
var a = s("37983");
s("884691");
var l = s("414456"),
  n = s.n(l),
  i = s("669491"),
  r = s("77078"),
  o = s("461380"),
  d = s("772970"),
  u = s("933351"),
  c = s("782340"),
  E = s("935090"),
  _ = function(e) {
    let {
      channelId: t,
      formField: s,
      index: l,
      isDragEnabled: _,
      isDropHovered: I,
      onDrop: T,
      onEdit: f,
      onRemove: S,
      title: m
    } = e, N = s.values, g = N.slice(0, 1), h = N.length - g.length;
    return (0, a.jsxs)(u.default, {
      field: s,
      index: l,
      isDragEnabled: _,
      isDropHovered: I,
      onDrop: T,
      onEdit: f,
      onRemove: S,
      title: m,
      children: [(0, a.jsx)(d.TermsFieldBody, {
        className: n(E.fieldBackground, {
          [E.withFooter]: 0 !== h
        }),
        terms: g,
        channelId: t
      }), 0 !== h && (0, a.jsxs)(r.Clickable, {
        className: n(E.fieldFooterContainer, E.clickable),
        onClick: f,
        children: [(0, a.jsx)(r.FormText, {
          className: E.clickable,
          children: c.default.Messages.MEMBER_VERIFICATION_OTHER_RULES.format({
            count: h
          })
        }), (0, a.jsx)(o.default, {
          className: E.termsFieldCaretIcon,
          height: 14,
          width: 14,
          color: i.default.unsafe_rawColors.WHITE_500.css
        })]
      }), (0, a.jsx)(d.TermsFieldCheckbox, {
        disabled: !0,
        checked: !1
      })]
    })
  }