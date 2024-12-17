var i = r(200651);
r(192379);
var a = r(433517),
    s = r(481060),
    o = r(920133),
    l = r(338096);
n.Z = {
    openDmSettingsUpsellModal(e) {
        let n = a.K.get(l.G),
            u = Date.now();
        null == n || u - n > l.k
            ? (a.K.set(l.G, u),
              (0, s.openModalLazy)(async () => {
                  let { default: n } = await r.e('35489').then(r.bind(r, 582712));
                  return (r) =>
                      (0, i.jsx)(n, {
                          ...r,
                          guildId: e
                      });
              }))
            : (0, o.L)(o.Q.SUPPRESSED_BY_COOLDOWN, e);
    }
};
