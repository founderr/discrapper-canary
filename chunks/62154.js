i.d(n, {
  Z: function() {
    return c
  }
});
var l = i(735250);
i(470079);
var s = i(543595),
  t = i(100849),
  o = i(487922),
  a = i(620648),
  r = i(944546),
  d = i(470900),
  u = i(228168);

function c(e) {
  let {
    displayProfile: n,
    user: i,
    selectedSection: c,
    autoFocusNote: I,
    onClose: E
  } = e;
  switch (c) {
    case u.oh.ACTIVITY:
      return (0, l.jsx)(t.Z, {
        user: i,
        type: s.Y.PROFILE_V2,
        onClose: E
      });
    case u.oh.MUTUAL_GUILDS:
      return (0, l.jsx)(d.Z, {
        user: i,
        onClose: E
      });
    case u.oh.MUTUAL_FRIENDS:
      return (0, l.jsx)(r.Z, {
        user: i,
        onClose: E
      });
    case u.oh.BOT_DATA_ACCESS:
      return (0, l.jsx)(o.Z, {
        user: i
      });
    case u.oh.USER_INFO_CONNECTIONS:
    case u.oh.USER_INFO:
    default:
      return (0, l.jsx)(a.Z, {
        displayProfile: n,
        autoFocusNote: I,
        user: i,
        scrollToConnections: c === u.oh.USER_INFO_CONNECTIONS
      })
  }
}