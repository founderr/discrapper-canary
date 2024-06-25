"use strict";
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(780384),
  a = n(481060),
  l = n(410030),
  u = n(726542),
  _ = n(122021),
  c = n(231757),
  d = n(626135),
  E = n(981631),
  I = n(165350);
t.Z = e => {
  let {
    disabled: t = !1,
    type: n,
    className: r,
    innerClassName: T,
    onConnect: h
  } = e, f = (0, l.ZP)(), S = u.Z.get((0, _.rR)(n));
  return (0, i.jsx)(a.Tooltip, {
    text: S.name,
    children: e => {
      let {
        onMouseEnter: l,
        onMouseLeave: _
      } = e;
      return (0, i.jsx)("div", {
        className: s()(I.wrapper, r),
        children: (0, i.jsx)(a.FocusRing, {
          children: (0, i.jsx)("button", {
            onMouseEnter: l,
            onMouseLeave: _,
            className: s()(I.inner, T),
            type: "button",
            disabled: t,
            style: {
              backgroundImage: "url('".concat((0, o.wj)(f) ? S.icon.darkSVG : S.icon.lightSVG, "')")
            },
            onClick: null != h ? h : () => (function(e) {
              let t = u.Z.get(e);
              (0, c.Z)({
                platformType: t.type,
                location: "Friends List"
              }), d.default.track(E.rMx.ACCOUNT_LINK_STEP, {
                previous_step: "desktop connections",
                current_step: "desktop oauth",
                platform_type: t.type
              })
            })(n),
            "aria-label": S.name
          })
        })
      })
    }
  })
}