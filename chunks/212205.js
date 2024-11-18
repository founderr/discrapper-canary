t.d(e, {
    Z: function () {
        return s;
    }
});
var i = t(200651);
t(192379);
var r = t(442837),
    l = t(481060),
    u = t(914010),
    a = t(362658),
    o = t(981631),
    d = t(388032);
function s(n) {
    let e = (0, r.e7)([u.Z], () => u.Z.getGuildId()),
        s = n.type === o.d4z.GUILD_CATEGORY,
        { isFavoritesPerk: c } = (0, a.z)('useChannelFavoriteSetNickname');
    return __OVERLAY__ || e !== o.I_8
        ? null
        : (0, i.jsx)(l.MenuItem, {
              id: 'set-channel-nickname',
              label: c && s ? d.intl.string(d.t.xXYKiI) : d.intl.string(d.t.dilOFx),
              action: function () {
                  (0, l.openModalLazy)(async () => {
                      let { default: e } = await t.e('46161').then(t.bind(t, 238716));
                      return (t) =>
                          (0, i.jsx)(e, {
                              ...t,
                              channelId: n.id,
                              heading: c && s ? d.intl.string(d.t.xXYKiI) : d.intl.string(d.t.dilOFx),
                              formTitle: c && s ? d.intl.string(d.t.OCAkGB) : d.intl.string(d.t['621LJC']),
                              allowReset: !(c && s)
                          });
                  });
              }
          });
}
