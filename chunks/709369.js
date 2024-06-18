"use strict";
n.d(t, {
  Z: function() {
    return E
  }
});
var i = n(735250);
n(470079);
var r = n(442837),
  s = n(481060),
  o = n(40851),
  a = n(776031),
  l = n(199902),
  u = n(358085),
  _ = n(134598),
  c = n(981631),
  d = n(689938);

function E(e) {
  let {
    onClose: t
  } = e, n = (0, o.bp)(), E = (0, r.e7)([l.Z], () => l.Z.getCurrentUserActiveStream()), I = (0, a.Z)(E, n);
  return (0, i.jsxs)(s.Menu, {
    onSelect: c.VqG,
    navId: "manage-broadcast",
    onClose: t,
    "aria-label": d.Z.Messages.SETTINGS,
    children: [u.isPlatformEmbedded && null != E ? (0, i.jsx)(s.MenuItem, {
      id: "stream-settings",
      label: d.Z.Messages.SCREENSHARE_STREAM_QUALITY,
      children: I
    }) : null, (0, i.jsx)(s.MenuItem, {
      id: "broadcast-settings",
      label: d.Z.Messages.BROADCAST_SETTINGS,
      icon: s.SettingsIcon,
      action: () => (0, _.X)()
    })]
  })
}