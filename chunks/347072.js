"use strict";
n.d(t, {
  Z: function() {
    return c
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(481060),
  a = n(889161),
  l = n(343747),
  u = n(689938),
  _ = n(507337);

function c(e) {
  let {
    guild: t,
    focused: n,
    ...r
  } = e, {
    canCreateExpressions: c
  } = (0, a.XJ)(t);
  return (0, i.jsx)(o.Tooltip, {
    text: u.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_BUTTON_DISABLED,
    shouldShow: !c,
    children: e => (0, i.jsx)("li", {
      className: _.soundButtonWrapper,
      ...e,
      children: (0, i.jsxs)(o.ClickableContainer, {
        ...r,
        "aria-label": u.Z.Messages.SOUNDBOARD_UPLOAD_SOUND_FOR_GUILD.format({
          guildName: t.name
        }),
        className: s()(_.soundAddButton, {
          [_.focused]: n,
          [_.disabled]: !c
        }),
        onClick: () => (0, l.Z)(t.id),
        children: [(0, i.jsx)(o.PlusSmallIcon, {
          size: "md",
          color: "currentColor",
          className: _.soundAddIcon
        }), (0, i.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: c ? "header-primary" : "text-muted",
          children: u.Z.Messages.SOUNDBOARD_SOUND_ADD_SOUND
        })]
      })
    })
  })
}