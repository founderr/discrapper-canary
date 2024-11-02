n.d(t, {
    f: function () {
        return h;
    }
});
var r = n(200651);
n(192379);
var i = n(512722),
    a = n.n(i),
    s = n(442837),
    o = n(100527),
    l = n(906732),
    u = n(84615),
    c = n(430824),
    d = n(594174),
    f = n(443002);
let _ = (e) => {
    let { guildId: t, close: n, location: i } = e,
        u = (0, s.e7)([d.default], () => d.default.getCurrentUser());
    a()(null != u, 'PremiumGuildPerksModalConnected: currentUser cannot be undefined');
    let _ = (0, s.e7)([c.Z], () => c.Z.getGuild(t), [t]),
        { analyticsLocations: h } = (0, l.ZP)(o.Z.BOOSTED_GUILD_PERKS_MODAL);
    return null == _
        ? null
        : (0, r.jsx)(l.Gt, {
              value: h,
              children: (0, r.jsx)(f.Z, {
                  analyticsLocation: i,
                  onClose: n,
                  guild: _
              })
          });
};
function h(e) {
    let { guildId: t, location: n } = e;
    (0, u.q4)(
        (e) => {
            let { closeLayer: i } = e;
            return (0, r.jsx)(_, {
                close: i,
                guildId: t,
                location: n
            });
        },
        { layerKey: 'BoostedGuildPerksModalConnected' }
    );
}
