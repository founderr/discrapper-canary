n.d(t, {
    W: function () {
        return o;
    }
});
var i = n(200651),
    l = n(442837),
    r = n(481060),
    a = n(9156),
    s = n(388032);
let o = (e) => {
    let { className: t, channel: o, user: c } = e,
        u = (0, l.e7)([a.ZP], () => a.ZP.isChannelMuted(null, o.id));
    return c.bot
        ? (0, i.jsx)(r.Button, {
              className: t,
              size: r.ButtonSizes.SMALL,
              color: u ? r.Button.Colors.PRIMARY : r.Button.Colors.RED,
              onClick: function () {
                  (0, r.openModalLazy)(async () => {
                      let { default: e } = await n.e('83545').then(n.bind(n, 53149));
                      return (t) =>
                          (0, i.jsx)(e, {
                              channelId: o.id,
                              ...t
                          });
                  });
              },
              children: u ? s.intl.string(s.t.YqAjX1) : s.intl.string(s.t['w4m94+'])
          })
        : null;
};
