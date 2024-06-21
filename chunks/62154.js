s.d(i, {
  Z: function() {
    return u
  }
});
var n = s(735250);
s(470079);
var l = s(543595),
  t = s(100849),
  o = s(487922),
  r = s(620648),
  a = s(944546),
  d = s(470900),
  c = s(228168);

function u(e) {
  let {
    displayProfile: i,
    user: s,
    selectedSection: u,
    autoFocusNote: I,
    onClose: E
  } = e;
  switch (u) {
    case c.oh.ACTIVITY:
      return (0, n.jsx)(t.Z, {
        user: s,
        type: l.Y.PROFILE_V2,
        onClose: E
      });
    case c.oh.MUTUAL_GUILDS:
      return (0, n.jsx)(d.Z, {
        user: s,
        onClose: E
      });
    case c.oh.MUTUAL_FRIENDS:
      return (0, n.jsx)(a.Z, {
        user: s,
        onClose: E
      });
    case c.oh.BOT_DATA_ACCESS:
      return (0, n.jsx)(o.Z, {
        user: s
      });
    case c.oh.USER_INFO_CONNECTIONS:
    case c.oh.USER_INFO:
    default:
      return (0, n.jsx)(r.Z, {
        displayProfile: i,
        autoFocusNote: I,
        user: s,
        scrollToConnections: u === c.oh.USER_INFO_CONNECTIONS
      })
  }
}