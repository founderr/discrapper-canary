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
  E = n(23838);
t.Z = r.memo(function(e) {
  let {
    width: t,
    height: n,
    src: s,
    url: I,
    format: T,
    className: h
  } = e, [f, S] = r.useState(!1), A = (0, u.hb)((0, l.iy)(I)), N = A ? d.Z.Messages.GIF_TOOLTIP_REMOVE_FROM_FAVORITES : d.Z.Messages.GIF_TOOLTIP_ADD_TO_FAVORITES, m = A ? a.StarIcon : a.StarOutlineIcon;
  r.useEffect(() => {
    if (!f) return;
    let e = setTimeout(() => {
      S(!1)
    }, 500);
    return () => clearTimeout(e)
  }, [f]);
  let O = e => {
    e.preventDefault(), e.stopPropagation(), S(!0), A ? (0, l.PF)(I) : ((0, l.uL)({
      url: I,
      src: s,
      width: t,
      height: n,
      format: T
    }), _.S.dispatch(c.CkL.FAVORITE_GIF))
  };
  return (0, i.jsx)(a.Tooltip, {
    text: N,
    children: e => (0, i.jsx)(a.Clickable, {
      ...e,
      className: o()(h, E.size, E.gifFavoriteButton, {
        [E.selected]: A,
        [E.showPulse]: f
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