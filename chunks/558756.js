n.d(t, {
    W: function () {
        return o;
    }
});
var i = n(735250),
    s = n(442837),
    a = n(481060),
    l = n(9156),
    r = n(689938);
let o = (e) => {
    let { className: t, channel: o, user: c } = e,
        u = (0, s.e7)([l.ZP], () => l.ZP.isChannelMuted(null, o.id));
    return c.bot
        ? (0, i.jsx)(a.Button, {
              className: t,
              size: a.ButtonSizes.SMALL,
              color: u ? a.Button.Colors.PRIMARY : a.Button.Colors.RED,
              onClick: function () {
                  (0, a.openModalLazy)(async () => {
                      let { default: e } = await n.e('83545').then(n.bind(n, 53149));
                      return (t) =>
                          (0, i.jsx)(e, {
                              channelId: o.id,
                              ...t
                          });
                  });
              },
              children: u ? r.Z.Messages.UNMUTE : r.Z.Messages.MUTE
          })
        : null;
};
