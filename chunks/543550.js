n.d(t, {
    $: function () {
        return T;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(143927),
    o = n(597312),
    c = n(410030),
    d = n(963202),
    u = n(353093),
    _ = n(207796),
    E = n(497189),
    h = n(490610),
    m = n(981631),
    I = n(689938),
    g = n(145745);
let p = (e, t) => {
    switch (e) {
        case _.hz.NONE:
            return t === m.BRd.DARK ? g.genericUpsellBackgroundImageDark : g.genericUpsellBackgroundImageLight;
        case _.hz.GENSHIN:
            return t === m.BRd.DARK ? g.genshinUpsellBackgroundImageDark : g.genshinUpsellBackgroundImageLight;
        case _.hz.VALORANT:
            return t === m.BRd.DARK ? g.valorantUpsellBackgroundImageDark : g.valorantUpsellBackgroundImageLight;
    }
};
function T() {
    let e = (0, _.GN)((e) => e.game, l.Z),
        { guilds: t } = (0, d.C3)({
            location: 'ClanDiscoveryAdminContainer',
            includeConverted: !0
        }),
        n = a.useMemo(() => t.filter((e) => !(0, u.EJ)(e)), [t]),
        s = (0, c.ZP)(),
        m = a.useMemo(() => p(e, s), [e, s]);
    return 0 === t.length
        ? null
        : (0, i.jsx)('div', {
              className: g.container,
              children: (0, i.jsxs)(o.u2, {
                  className: g.upsellScroller,
                  fade: !0,
                  children: [
                      (0, i.jsxs)('div', {
                          className: r()(m, g.adminUpsell),
                          children: [
                              e !== _.hz.NONE && (0, i.jsx)('div', { className: g.backgroundImageBlur }),
                              (0, i.jsx)('div', {
                                  className: g.backgroundImageContent,
                                  children: (0, i.jsx)(E.Z, {
                                      eligibleGuilds: n,
                                      eligibleGuildsIncludingConverted: t
                                  })
                              })
                          ]
                      }),
                      (0, i.jsx)(h.Z, {
                          title: I.Z.Messages.CLAN_DISCOVERY_INSPIRATION_TITLE,
                          className: e === _.hz.NONE ? g.genericPreviewList : void 0
                      })
                  ]
              })
          });
}
