"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(481060),
  l = n(68405),
  u = n(985375),
  _ = n(585483),
  c = n(981631),
  d = n(689938),
  E = n(480710);
t.Z = r.memo(function(e) {
  let {
    width: t,
    height: n,
    src: s,
    url: I,
    format: T,
    className: h
  } = e, [S, f] = r.useState(!1), N = (0, u.hb)((0, l.iy)(I)), A = N ? d.Z.Messages.GIF_TOOLTIP_REMOVE_FROM_FAVORITES : d.Z.Messages.GIF_TOOLTIP_ADD_TO_FAVORITES, m = N ? a.StarIcon : a.StarOutlineIcon;
  r.useEffect(() => {
    if (!S) return;
    let e = setTimeout(() => {
      f(!1)
    }, 500);
    return () => clearTimeout(e)
  }, [S]);
  let O = e => {
    e.preventDefault(), e.stopPropagation(), f(!0), N ? (0, l.PF)(I) : ((0, l.uL)({
      url: I,
      src: s,
      width: t,
      height: n,
      format: T
    }), _.S.dispatch(c.CkL.FAVORITE_GIF))
  };
  return (0, i.jsx)(a.Tooltip, {
    text: A,
    children: e => (0, i.jsx)(a.Clickable, {
      ...e,
      className: o()(h, E.size, E.gifFavoriteButton, {
        [E.selected]: N,
        [E.showPulse]: S
      }),
      onMouseDown: e => e.preventDefault(),
      onClick: O,
      onDoubleClick: e => e.preventDefault(),
      children: (0, i.jsx)(m, {
        color: "currentColor",
        className: E.icon
      })
    })
  })
})