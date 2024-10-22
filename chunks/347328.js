n.d(t, {
    Z: function () {
        return f;
    }
});
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    s = n(230711),
    o = n(726542),
    l = n(394821),
    u = n(740605),
    c = n(180335),
    d = n(553795),
    _ = n(981631),
    E = n(689938);
function f(e) {
    let { activity: t, entry: n, display: f, onAction: h, onClose: p } = e,
        I = (0, i.e7)([d.Z], () => null != d.Z.getAccount(null, _.ABu.CRUNCHYROLL));
    if (!(0, l.Z)(t) && !(0, c.gr)(n)) return null;
    if (!I)
        return (0, r.jsx)(a.MenuItem, {
            id: 'connect-crunchyroll',
            label: E.Z.Messages.USER_ACTIVITY_CONNECT_PLATFORM.format({ platform: o.Z.get(_.ABu.CRUNCHYROLL).name }),
            action: () => {
                null == h || h({ action: 'PRESS_CONNECT_CRUNCHYROLL_MENU_ITEM' }), s.Z.open(_.oAB.CONNECTIONS), null == p || p();
            }
        });
    if ('live' === f || !(0, c.gr)(n)) return null;
    let m = n.extra.url;
    return null == m || '' === m
        ? null
        : (0, r.jsx)(a.MenuItem, {
              id: 'watch-on-crunchyroll',
              label: E.Z.Messages.WATCH_ON_CRUNCHYROLL,
              action: () => {
                  null == h || h({ action: 'PRESS_WATCH_ON_CRUNCHYROLL_MENU_ITEM' }), (0, u.Y)(m);
              }
          });
}
