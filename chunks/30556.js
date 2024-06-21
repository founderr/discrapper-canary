s.d(i, {
  Z: function() {
    return d
  }
});
var n = s(735250);
s(470079);
var l = s(481060),
  t = s(493683),
  o = s(785717),
  r = s(993409),
  a = s(689938);

function d(e) {
  let {
    user: i,
    onClose: s
  } = e, {
    trackUserProfileAction: d
  } = (0, o.KZ)();
  return (0, n.jsx)(r.Z, {
    variant: "text",
    icon: l.ChatIcon,
    text: a.Z.Messages.USER_PROFILE_MESSAGE,
    onClick: () => {
      d({
        action: "SEND_MESSAGE"
      }), t.Z.openPrivateChannel(i.id), null == s || s()
    }
  })
}