var n = t(735250);
t(470079);
var r = t(120356),
  i = t.n(r),
  a = t(981631),
  l = t(195872);
let o = {
    EVERYONE: "1",
    EVERYONE_TEN_PLUS: "2",
    TEEN: "3",
    MATURE: "4",
    ADULT: "5",
    RATING_PENDING: "6"
  },
  c = {
    THREE: "1",
    SEVEN: "2",
    TWELVE: "3",
    SIXTEEN: "4",
    EIGHTEEN: "5"
  },
  u = {
    [a.aIt.ESRB]: {
      [o.EVERYONE]: l.esrbEveryone,
      [o.EVERYONE_TEN_PLUS]: l.esrbEveryoneTenPlus,
      [o.TEEN]: l.esrbTeen,
      [o.MATURE]: l.esrbMature,
      [o.ADULT]: l.esrbAdult,
      [o.RATING_PENDING]: l.esrbRatingPending
    },
    [a.aIt.PEGI]: {
      [c.THREE]: l.pegiThree,
      [c.SEVEN]: l.pegiSeven,
      [c.TWELVE]: l.pegiTwelve,
      [c.SIXTEEN]: l.pegiSixteen,
      [c.EIGHTEEN]: l.pegiEighteen
    }
  };
s.Z = e => {
  let {
    agency: s,
    rating: t,
    className: r
  } = e, a = u[s][t];
  return null == a ? null : (0, n.jsx)("div", {
    className: i()(l.contentRating, a, r)
  })
}