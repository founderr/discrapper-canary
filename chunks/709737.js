n.d(t, {
    D: function () {
        return o;
    }
});
var l = n(735250);
n(470079);
var a = n(99815),
    i = n(657707),
    r = n(297781),
    s = n(689938);
function o(e) {
    let { value: t, statisticId: n } = e,
        o = (function (e) {
            if (e === a.E.LOL_TOTAL_KILLS) return s.Z.Messages.MEMBER_LIST_CONTENT_FEED_LEADERBOARD_KILLS;
        })(n);
    return null == o
        ? null
        : (0, l.jsx)(r.ej, {
              Icon: i.hAD,
              text: o.format({ value: t })
          });
}
