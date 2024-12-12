r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    s = r(784712),
    o = r(531578),
    l = r(388032);
function u(e, n, r) {
    let { rating: i, problem: o, feedback: u } = r;
    (0, s.Z)({
        problem: o,
        summary: e,
        feedback: u,
        guildId: n.guild_id,
        channelId: n.id,
        location: 'Summary divider',
        rating: i
    }),
        (0, a.showToast)((0, a.createToast)(l.intl.string(l.t['d9+vQ0']), a.ToastType.SUCCESS));
}
function c(e) {
    let { summary: n, channel: s, rating: l } = e;
    null != n &&
        (l === o.aZ.BAD
            ? (0, a.openModalLazy)(async () => {
                  let { default: e } = await r.e('62104').then(r.bind(r, 580584));
                  return (r) =>
                      (0, i.jsx)(e, {
                          ...r,
                          onSubmit: (e) => u(n, s, e),
                          startRating: l
                      });
              })
            : u(n, s, {
                  rating: l,
                  problem: null,
                  feedback: '',
                  dontShowAgain: !1
              }));
}
