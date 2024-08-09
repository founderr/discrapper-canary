n.d(s, {
  Z: function() {
return u;
  }
});
var i = n(735250);
n(470079);
var l = n(387903),
  o = n(100849),
  t = n(487922),
  r = n(620648),
  a = n(944546),
  d = n(470900),
  c = n(228168);

function u(e) {
  let {
displayProfile: s,
user: n,
selectedSection: u,
autoFocusNote: I,
onClose: _
  } = e;
  switch (u) {
case c.oh.ACTIVITY:
  return (0, i.jsx)(o.Z, {
    user: n,
    type: l.Y.PROFILE_V2,
    onClose: _
  });
case c.oh.MUTUAL_GUILDS:
  return (0, i.jsx)(d.Z, {
    user: n,
    onClose: _
  });
case c.oh.MUTUAL_FRIENDS:
  return (0, i.jsx)(a.Z, {
    user: n,
    onClose: _
  });
case c.oh.BOT_DATA_ACCESS:
  return (0, i.jsx)(t.Z, {
    user: n
  });
case c.oh.USER_INFO_CONNECTIONS:
case c.oh.USER_INFO:
default:
  return (0, i.jsx)(r.Z, {
    displayProfile: s,
    autoFocusNote: I,
    user: n,
    scrollToConnections: u === c.oh.USER_INFO_CONNECTIONS
  });
  }
}