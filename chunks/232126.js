"use strict";
s.r(t);
var n = s("735250");
s("470079");
var a = s("120356"),
  r = s.n(a),
  l = s("981631"),
  i = s("55050");
let u = {
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
  o = {
    [l.ContentRatingAgencies.ESRB]: {
      [u.ESRB.EVERYONE]: i.esrbEveryone,
      [u.ESRB.EVERYONE_TEN_PLUS]: i.esrbEveryoneTenPlus,
      [u.ESRB.TEEN]: i.esrbTeen,
      [u.ESRB.MATURE]: i.esrbMature,
      [u.ESRB.ADULT]: i.esrbAdult,
      [u.ESRB.RATING_PENDING]: i.esrbRatingPending
    },
    [l.ContentRatingAgencies.PEGI]: {
      [u.PEGI.THREE]: i.pegiThree,
      [u.PEGI.SEVEN]: i.pegiSeven,
      [u.PEGI.TWELVE]: i.pegiTwelve,
      [u.PEGI.SIXTEEN]: i.pegiSixteen,
      [u.PEGI.EIGHTEEN]: i.pegiEighteen
    }
  };
t.default = e => {
  let {
    agency: t,
    rating: s,
    className: a
  } = e, l = o[t][s];
  return null == l ? null : (0, n.jsx)("div", {
    className: r()(i.contentRating, l, a)
  })
}