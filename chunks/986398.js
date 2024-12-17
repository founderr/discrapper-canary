r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(200651),
    a = r(81063),
    s = r(388032);
function o(e) {
    let { leaderboard: n, className: r } = e,
        o = (0, a.getAssetImage)(n.settings.application_id, n.settings.winner_asset_id);
    return null == o
        ? null
        : (0, i.jsx)('img', {
              className: r,
              src: o,
              alt: s.intl.string(s.t.QyRmzc)
          });
}
