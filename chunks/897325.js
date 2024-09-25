n.d(t, {
    E: function () {
        return l;
    },
    _: function () {
        return s;
    }
});
var r = n(627341);
var i = n(278074),
    a = n(263568),
    o = n(228131);
function s(e, t) {
    let n = (0, i.EQ)(t)
        .with(a.C.IMAGE_ONLY_ANSWERS, () => o.normalStylesImageOnlyAnswers)
        .otherwise(() => o.normalStylesDefault);
    return {
        styles: {
            loserSelected: n,
            normal: n,
            notVoted: n,
            selected: n,
            voted: o.votedStyles,
            victorSelected: o.victorStyles,
            victorNotSelected: o.victorStyles,
            normalVote: n
        }
    };
}
function l(e, t) {
    return e.getAvatarURL(t, 20, !1);
}
