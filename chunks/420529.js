t.d(n, {
    Z: function () {
        return Z;
    }
});
var l = t(735250);
t(470079);
var i = t(399606),
    u = t(481060),
    r = t(231757),
    a = t(397639),
    d = t(19780),
    o = t(979651),
    s = t(951206),
    c = t(446226),
    E = t(937393),
    _ = t(721351),
    f = t(981631),
    N = t(689938);
function Z(e) {
    let n = (0, i.e7)([d.Z], () => d.Z.getChannelId() === e.id),
        Z = (0, c.Z)(),
        I = (null == Z ? void 0 : Z.channelId) === e.id,
        C = (0, a.V)(e) && !e.isPrivate(),
        T = (0, a.Z)(e),
        h = (!(0, i.e7)([o.Z], () => o.Z.isInChannel(e.id)) && T) || C,
        g = (0, E.Z)();
    if (!I && 0 === g.length) return null;
    let A = (n) => {
        if (!n.twoWayLink || n.revoked) {
            (0, r.Z)({
                platformType: n.type,
                location: 'Console Transfer Item'
            });
            return;
        }
        n.type === f.ABu.XBOX
            ? (0, u.openModalLazy)(async () => {
                  let { default: n } = await Promise.all([t.e('78776'), t.e('522')]).then(t.bind(t, 200623));
                  return (t) =>
                      (0, l.jsx)(n, {
                          ...t,
                          channel: e
                      });
              })
            : (n.type === f.ABu.PLAYSTATION || n.type === f.ABu.PLAYSTATION_STAGING) &&
              (0, u.openModalLazy)(async () => {
                  let { default: i } = await t.e('638').then(t.bind(t, 543974));
                  return (t) =>
                      (0, l.jsx)(i, {
                          ...t,
                          platform: n.type,
                          channel: e
                      });
              });
    };
    return (0, l.jsx)(l.Fragment, {
        children: I
            ? (0, l.jsx)(u.MenuItem, {
                  label: N.Z.Messages.TRANSFER_VOICE_TO_DEVICE,
                  id: 'handoff',
                  action: () => {
                      (0, s.F)(Z);
                  },
                  icon: (0, _.Z)(void 0),
                  disabled: h
              })
            : g.map((e) =>
                  (0, l.jsx)(
                      u.MenuItem,
                      {
                          id: 'transfer-'.concat(e.type, '-').concat(e.id),
                          label: (function (e, n) {
                              if (e === f.ABu.XBOX) return n ? N.Z.Messages.TRANSFER_VOICE_TO_XBOX : N.Z.Messages.JOIN_ON_XBOX;
                              if (e === f.ABu.PLAYSTATION) return n ? N.Z.Messages.CONSOLE_PLAYSTATION_TRANSFER_VOICE : N.Z.Messages.CONSOLE_PLAYSTATION_JOIN_VOICE;
                              if (e === f.ABu.PLAYSTATION_STAGING) return n ? N.Z.Messages.CONSOLE_PLAYSTATION_STAGING_TRANSFER_VOICE : N.Z.Messages.CONSOLE_PLAYSTATION_STAGING_JOIN_VOICE;
                          })(e.type, n),
                          action: () => A(e),
                          icon: (0, _.Z)(e.type),
                          disabled: h
                      },
                      e.id
                  )
              )
    });
}
