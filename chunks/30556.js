i.d(n, {
  Z: function() {
    return d
  }
});
var l = i(735250);
i(470079);
var s = i(481060),
  t = i(493683),
  o = i(785717),
  a = i(993409),
  r = i(689938);

function d(e) {
  let {
    user: n,
    onClose: i
  } = e, {
    trackUserProfileAction: d
  } = (0, o.KZ)();
  return (0, l.jsx)(a.Z, {
    variant: "text",
    icon: s.ChatIcon,
    text: r.Z.Messages.USER_PROFILE_MESSAGE,
    onClick: () => {
      d({
        action: "SEND_MESSAGE"
      }), t.Z.openPrivateChannel(n.id), null == i || i()
    }
  })
}