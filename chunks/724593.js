"use strict";
n.d(t, {
  Z: function() {
    return d
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(481060),
  a = n(785717),
  l = n(702557),
  u = n(993409),
  _ = n(689938),
  c = n(66073);

function d(e) {
  let {
    user: t,
    isHovering: n,
    onOpenProfile: r
  } = e, {
    trackUserProfileAction: d
  } = (0, a.KZ)(), {
    note: E
  } = (0, l.Z)(t.id), I = () => {
    d({
      action: "PRESS_ADD_NOTE"
    }), null == r || r()
  };
  return null == E || "" === E ? (0, i.jsx)(u.Z, {
    variant: "icon",
    text: _.Z.Messages.ADD_NOTE,
    "aria-label": _.Z.Messages.ADD_NOTE,
    icon: o.PaperPlusIcon,
    onClick: I,
    color: c.color,
    look: o.Button.Looks.BLANK,
    className: s()(c.button, {
      [c.visible]: n
    })
  }) : (0, i.jsx)(u.Z, {
    variant: "icon",
    text: E,
    "aria-label": E,
    icon: o.PaperIcon,
    onClick: I,
    color: c.color,
    look: o.Button.Looks.BLANK,
    className: s()(c.button, {
      [c.visible]: n
    }),
    tooltipClassName: c.tooltip
  })
}