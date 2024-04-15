"use strict";
s.r(t);
var a = s("735250");
s("470079");
var i = s("120356"),
  r = s.n(i),
  l = s("981631"),
  n = s("535146");
let o = {
    ESRB: {
      EVERYONE: "1",
      EVERYONE_TEN_PLUS: "2",
      TEEN: "3",
      MATURE: "4",
      ADULT: "5",
      RATING_PENDING: "6"
    },
    PEGI: {
      THREE: "1",
      SEVEN: "2",
      TWELVE: "3",
      SIXTEEN: "4",
      EIGHTEEN: "5"
    }
  },
  u = {
    [l.ContentRatingAgencies.ESRB]: {
      [o.ESRB.EVERYONE]: n.esrbEveryone,
      [o.ESRB.EVERYONE_TEN_PLUS]: n.esrbEveryoneTenPlus,
      [o.ESRB.TEEN]: n.esrbTeen,
      [o.ESRB.MATURE]: n.esrbMature,
      [o.ESRB.ADULT]: n.esrbAdult,
      [o.ESRB.RATING_PENDING]: n.esrbRatingPending
    },
    [l.ContentRatingAgencies.PEGI]: {
      [o.PEGI.THREE]: n.pegiThree,
      [o.PEGI.SEVEN]: n.pegiSeven,
      [o.PEGI.TWELVE]: n.pegiTwelve,
      [o.PEGI.SIXTEEN]: n.pegiSixteen,
      [o.PEGI.EIGHTEEN]: n.pegiEighteen
    }
  };
t.default = e => {
  let {
    agency: t,
    rating: s,
    className: i
  } = e, l = u[t][s];
  return null == l ? null : (0, a.jsx)("div", {
    className: r()(n.contentRating, l, i)
  })
}