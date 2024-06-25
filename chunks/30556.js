i.d(n, {
  Z: function() {
    return d
  }
});
var t = i(735250);
i(470079);
var s = i(481060),
  o = i(493683),
  l = i(785717),
  a = i(993409),
  r = i(689938);

function d(e) {
  let {
    user: n,
    onClose: i
  } = e, {
    trackUserProfileAction: d
  } = (0, l.KZ)();
  return (0, t.jsx)(a.Z, {
    variant: "text",
    icon: s.ChatIcon,
    text: r.Z.Messages.USER_PROFILE_MESSAGE,
    onClick: () => {
      d({
        action: "SEND_MESSAGE"
      }), o.Z.openPrivateChannel(n.id), null == i || i()
    }
  })
}