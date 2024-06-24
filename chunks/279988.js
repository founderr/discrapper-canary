t(47120);
var a = t(735250);
t(470079);
var r = t(120356),
  s = t.n(r),
  i = t(692547),
  l = t(481060),
  o = t(259580),
  c = t(196345),
  d = t(137158),
  u = t(689938),
  m = t(237261);
n.Z = function(e) {
  let {
    channelId: n,
    formField: t,
    index: r,
    isDragEnabled: h,
    isDropHovered: C,
    onDrop: x,
    onEdit: f,
    onRemove: E,
    canRemove: T,
    title: _,
    actionsLocation: I
  } = e, g = t.values, p = g.slice(0, 1), N = g.length - p.length;
  return (0, a.jsxs)(d.Z, {
    field: t,
    index: r,
    isDragEnabled: h,
    isDropHovered: C,
    onDrop: x,
    onEdit: f,
    onRemove: E,
    title: _,
    canRemove: T,
    actionsLocation: I,
    children: [(0, a.jsx)(c.EK, {
      className: s()(m.fieldBackground, {
        [m.withFooter]: 0 !== N
      }),
      terms: p,
      channelId: n
    }), 0 !== N && (0, a.jsxs)(l.Clickable, {
      className: s()(m.fieldFooterContainer, m.clickable),
      onClick: f,
      children: [(0, a.jsx)(l.FormText, {
        className: m.clickable,
        children: u.Z.Messages.MEMBER_VERIFICATION_OTHER_RULES.format({
          count: N
        })
      }), (0, a.jsx)(o.Z, {
        className: m.termsFieldCaretIcon,
        height: 14,
        width: 14,
        color: i.Z.unsafe_rawColors.WHITE_500.css
      })]
    }), (0, a.jsx)(c.G0, {
      disabled: !0,
      checked: !1
    })]
  })
}