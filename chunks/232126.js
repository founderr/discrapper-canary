var s = n(735250);
n(470079);
var i = n(120356),
  l = n.n(i),
  a = n(981631),
  r = n(195872);
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
      [o.EVERYONE]: r.esrbEveryone,
      [o.EVERYONE_TEN_PLUS]: r.esrbEveryoneTenPlus,
      [o.TEEN]: r.esrbTeen,
      [o.MATURE]: r.esrbMature,
      [o.ADULT]: r.esrbAdult,
      [o.RATING_PENDING]: r.esrbRatingPending
    },
    [a.aIt.PEGI]: {
      [c.THREE]: r.pegiThree,
      [c.SEVEN]: r.pegiSeven,
      [c.TWELVE]: r.pegiTwelve,
      [c.SIXTEEN]: r.pegiSixteen,
      [c.EIGHTEEN]: r.pegiEighteen
    }
  };
t.Z = e => {
  let {
    agency: t,
    rating: n,
    className: i
  } = e, a = u[t][n];
  return null == a ? null : (0, s.jsx)("div", {
    className: l()(r.contentRating, a, i)
  })
}