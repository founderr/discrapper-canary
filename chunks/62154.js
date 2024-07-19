s.d(n, {
  Z: function() {
return u;
  }
});
var i = s(735250);
s(470079);
var l = s(387903),
  o = s(100849),
  t = s(487922),
  r = s(620648),
  a = s(944546),
  d = s(470900),
  c = s(228168);

function u(e) {
  let {
displayProfile: n,
user: s,
selectedSection: u,
autoFocusNote: I,
onClose: _
  } = e;
  switch (u) {
case c.oh.ACTIVITY:
  return (0, i.jsx)(o.Z, {
    user: s,
    type: l.Y.PROFILE_V2,
    onClose: _
  });
case c.oh.MUTUAL_GUILDS:
  return (0, i.jsx)(d.Z, {
    user: s,
    onClose: _
  });
case c.oh.MUTUAL_FRIENDS:
  return (0, i.jsx)(a.Z, {
    user: s,
    onClose: _
  });
case c.oh.BOT_DATA_ACCESS:
  return (0, i.jsx)(t.Z, {
    user: s
  });
case c.oh.USER_INFO_CONNECTIONS:
case c.oh.USER_INFO:
default:
  return (0, i.jsx)(r.Z, {
    displayProfile: n,
    autoFocusNote: I,
    user: s,
    scrollToConnections: u === c.oh.USER_INFO_CONNECTIONS
  });
  }
}