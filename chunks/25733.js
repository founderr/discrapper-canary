var i = r(200651);
r(192379);
var a = r(433517),
    s = r(481060),
    o = r(704587),
    l = r(920133),
    u = r(338096);
n.Z = {
    openDmSettingsUpsellModal(e) {
        if (!(0, o.G)({ location: 'DmSettingsUpsellManager' })) return;
        let n = a.K.get(u.G),
            c = Date.now();
        null == n || c - n > u.k
            ? (a.K.set(u.G, c),
              (0, s.openModalLazy)(async () => {
                  let { default: n } = await r.e('35489').then(r.bind(r, 582712));
                  return (r) =>
                      (0, i.jsx)(n, {
                          ...r,
                          guildId: e
                      });
              }))
            : (0, l.L)(l.Q.SUPPRESSED_BY_COOLDOWN, e);
    }
};
