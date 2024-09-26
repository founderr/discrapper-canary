n.d(t, {
    $: function () {
        return S;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(143927),
    o = n(349361),
    c = n(410030),
    d = n(963202),
    u = n(353093),
    _ = n(481685),
    h = n(207796),
    E = n(497189),
    m = n(490610),
    I = n(981631),
    g = n(689938),
    p = n(422114);
let T = (e, t) => {
    switch (e) {
        case h.hz.NONE:
            return;
        case h.hz.GENSHIN:
            return t === I.BRd.DARK ? p.genshinUpsellBackgroundImageDark : p.genshinUpsellBackgroundImageLight;
        case h.hz.VALORANT:
            return t === I.BRd.DARK ? p.valorantUpsellBackgroundImageDark : p.valorantUpsellBackgroundImageLight;
    }
};
function S(e) {
    let { onScroll: t } = e,
        n = (0, h.GN)((e) => e.game, l.Z),
        { guilds: s } = (0, d.C3)({
            location: 'ClanDiscoveryAdminContainer',
            includeConverted: !0
        }),
        I = a.useMemo(() => s.filter((e) => !(0, u.EJ)(e)), [s]),
        S = (0, c.ZP)(),
        f = a.useMemo(() => T(n, S), [n, S]);
    return 0 === s.length
        ? null
        : (0, i.jsx)('div', {
              className: p.container,
              children: (0, i.jsxs)(o.xV, {
                  className: p.upsellScroller,
                  fade: !0,
                  onScroll: t,
                  children: [
                      (0, i.jsxs)('div', {
                          className: r()(f, p.adminUpsell),
                          children: [
                              n !== h.hz.NONE && (0, i.jsx)('div', { className: p.backgroundImageBlur }),
                              (0, i.jsx)(_.Z, {}),
                              (0, i.jsx)('div', {
                                  className: p.backgroundImageContent,
                                  children: (0, i.jsx)(E.Z, {
                                      eligibleGuilds: I,
                                      eligibleGuildsIncludingConverted: s
                                  })
                              })
                          ]
                      }),
                      (0, i.jsx)(m.Z, {
                          title: g.Z.Messages.CLAN_DISCOVERY_INSPIRATION_TITLE,
                          className: n === h.hz.NONE ? p.genericPreviewList : void 0
                      })
                  ]
              })
          });
}
