n.d(t, {
  s: function() {
return c;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(481060),
  l = n(693546),
  r = n(246364),
  o = n(689938);

function c(e, t) {
  let [c, d] = a.useState(!1), u = () => {
(0, s.showToast)((0, s.createToast)(o.Z.Messages.ERROR_GENERIC_TITLE, s.ToastType.FAILURE));
  }, h = async () => {
if (!c && null != e && null != t) {
  d(!0);
  try {
    await l.Z.updateGuildJoinRequest(e, t, r.wB.APPROVED);
  } catch {
    u();
  } finally {
    d(!1);
  }
}
  };
  return {
approveRequest: h,
rejectRequest: () => {
  null != e && null != t && (0, s.openModalLazy)(async () => {
    let {
      default: a
    } = await n.e('56496').then(n.bind(n, 113886));
    return n => (0, i.jsx)(a, {
      modalProps: n,
      guildId: e,
      userId: t,
      onError: u
    });
  });
},
submitting: c
  };
}