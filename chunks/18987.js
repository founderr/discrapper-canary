"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var a = s("37983");
s("884691");
var n = s("414456"),
  r = s.n(n),
  i = s("49111"),
  l = s("462172");
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
    [i.ContentRatingAgencies.ESRB]: {
      [u.ESRB.EVERYONE]: l.esrbEveryone,
      [u.ESRB.EVERYONE_TEN_PLUS]: l.esrbEveryoneTenPlus,
      [u.ESRB.TEEN]: l.esrbTeen,
      [u.ESRB.MATURE]: l.esrbMature,
      [u.ESRB.ADULT]: l.esrbAdult,
      [u.ESRB.RATING_PENDING]: l.esrbRatingPending
    },
    [i.ContentRatingAgencies.PEGI]: {
      [u.PEGI.THREE]: l.pegiThree,
      [u.PEGI.SEVEN]: l.pegiSeven,
      [u.PEGI.TWELVE]: l.pegiTwelve,
      [u.PEGI.SIXTEEN]: l.pegiSixteen,
      [u.PEGI.EIGHTEEN]: l.pegiEighteen
    }
  };
var d = e => {
  let {
    agency: t,
    rating: s,
    className: n
  } = e, i = o[t][s];
  return null == i ? null : (0, a.jsx)("div", {
    className: r(l.contentRating, i, n)
  })
}