n.d(t, {
    Z: function () {
        return E;
    }
});
var r = n(200651),
    i = n(442837),
    a = n(481060),
    s = n(403404),
    o = n(906732),
    l = n(26033),
    u = n(592125),
    c = n(944486),
    d = n(701488),
    _ = n(689938);
function E(e) {
    let { display: t, entry: n, onAction: E } = e,
        { analyticsLocations: f } = (0, o.ZP)(),
        h = (0, i.e7)([u.Z, c.Z], () => u.Z.getChannel(c.Z.getChannelId()));
    return 'live' !== t && (0, l.Mq)(n)
        ? (0, r.jsx)(a.MenuItem, {
              id: 'view-activity',
              label: _.Z.Messages.CONTENT_INVENTORY_VIEW_ACTIVITY,
              action: () => {
                  var e;
                  null == E || E({ action: 'PRESS_VIEW_ACTIVITY_MENU_ITEM' }),
                      (0, s.Z)({
                          channel: h,
                          guildId: null !== (e = null == h ? void 0 : h.getGuildId()) && void 0 !== e ? e : void 0,
                          analyticsLocations: f,
                          locationObject: {},
                          openInPopout: !1,
                          initialSelectedApplicationId: n.extra.application_id,
                          initialSlide: d.ag.DETAIL_PAGE
                      });
              }
          })
        : null;
}
