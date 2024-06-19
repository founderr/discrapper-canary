n.d(t, {
  Z: function() {
    return d
  }
});
var l = n(735250),
  i = n(470079),
  s = n(704215),
  r = n(481060),
  a = n(566840),
  o = n(434479),
  u = n(527379),
  c = n(689938);

function d(e) {
  let {
    guild: t,
    selected: n
  } = e, d = i.useCallback(() => {
    (0, u._X)(t.id)
  }, [t.id]), h = (0, a.XL)(t.id, s.z.MEMBERS_LAUNCH_UPSELL);
  return (0, l.jsx)("div", {
    ref: h,
    children: (0, l.jsx)(o.m, {
      id: "members-".concat(t.id),
      renderIcon: e => (0, l.jsx)(r.GroupIcon, {
        size: "md",
        color: "currentColor",
        className: e
      }),
      text: c.Z.Messages.MEMBER_SAFETY_CHANNEL_TITLE,
      selected: n,
      onClick: d
    })
  })
}