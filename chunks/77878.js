var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(981631),
    o = n(368043);
let s = {
        EVERYONE: '1',
        EVERYONE_TEN_PLUS: '2',
        TEEN: '3',
        MATURE: '4',
        ADULT: '5',
        RATING_PENDING: '6'
    },
    c = {
        THREE: '1',
        SEVEN: '2',
        TWELVE: '3',
        SIXTEEN: '4',
        EIGHTEEN: '5'
    },
    d = {
        [a.aIt.ESRB]: {
            [s.EVERYONE]: o.esrbEveryone,
            [s.EVERYONE_TEN_PLUS]: o.esrbEveryoneTenPlus,
            [s.TEEN]: o.esrbTeen,
            [s.MATURE]: o.esrbMature,
            [s.ADULT]: o.esrbAdult,
            [s.RATING_PENDING]: o.esrbRatingPending
        },
        [a.aIt.PEGI]: {
            [c.THREE]: o.pegiThree,
            [c.SEVEN]: o.pegiSeven,
            [c.TWELVE]: o.pegiTwelve,
            [c.SIXTEEN]: o.pegiSixteen,
            [c.EIGHTEEN]: o.pegiEighteen
        }
    };
t.Z = (e) => {
    let { agency: t, rating: n, className: r } = e,
        a = d[t][n];
    return null == a ? null : (0, i.jsx)('div', { className: l()(o.contentRating, a, r) });
};
