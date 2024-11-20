n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    s = n(898531),
    o = n(314897),
    l = n(131951),
    u = n(388032),
    c = n(738269);
function d(e) {
    let t = (0, a.useModalContext)(),
        d = (0, i.e7)([l.Z], () => l.Z.isVideoEnabled()),
        f = (0, i.e7)([o.default], () => o.default.getId() === e),
        _ = (0, s.Z)();
    return (!d || _) && f
        ? (0, r.jsx)(a.MenuItem, {
              id: 'change-video-background',
              label: (0, r.jsx)('div', {
                  className: c.item,
                  children: d ? u.intl.string(u.t.mZKxHR) : u.intl.string(u.t.vkV939)
              }),
              action: function () {
                  (0, a.openModalLazy)(
                      async () => {
                          let { default: e } = await Promise.all([n.e('8821'), n.e('62010')]).then(n.bind(n, 601572));
                          return (t) =>
                              (0, r.jsx)(e, {
                                  ...t,
                                  videoEnabled: d
                              });
                      },
                      {
                          modalKey: 'camera-preview',
                          contextKey: t
                      }
                  );
              }
          })
        : null;
}
