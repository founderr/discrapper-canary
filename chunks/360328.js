n.d(t, {
  s: function() {
    return c
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(481060),
  a = n(693546),
  r = n(246364),
  o = n(689938);

function c(e, t) {
  let [c, u] = i.useState(!1), d = () => {
    (0, s.showToast)((0, s.createToast)(o.Z.Messages.ERROR_GENERIC_TITLE, s.ToastType.FAILURE))
  }, h = async () => {
    if (!c && null != e && null != t) {
      u(!0);
      try {
        await a.Z.updateGuildJoinRequest(e, t, r.wB.APPROVED)
      } catch {
        d()
      } finally {
        u(!1)
      }
    }
  };
  return {
    approveRequest: h,
    rejectRequest: () => {
      null != e && null != t && (0, s.openModalLazy)(async () => {
        let {
          default: i
        } = await n.e("56496").then(n.bind(n, 113886));
        return n => (0, l.jsx)(i, {
          modalProps: n,
          guildId: e,
          userId: t,
          onError: d
        })
      })
    },
    submitting: c
  }
}