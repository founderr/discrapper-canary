a.d(s, {
  Z: function() {
    return d
  }
}), a(47120);
var n = a(735250),
  t = a(470079),
  l = a(442837),
  r = a(481060),
  i = a(287734),
  o = a(592125),
  c = a(693546),
  I = a(689938);

function d(e) {
  let {
    joinRequest: s
  } = e, [a, d] = t.useState(!1), u = (0, l.e7)([o.Z], () => o.Z.getChannel(s.interviewChannelId)), E = t.useCallback(() => {
    (0, r.showToast)((0, r.createToast)(I.Z.Messages.ERROR_GENERIC_TITLE, r.ToastType.FAILURE))
  }, []), T = t.useCallback(async () => {
    if (null != u) {
      i.default.selectPrivateChannel(u.id);
      return
    }
    if (!a) {
      d(!0);
      try {
        await c.Z.createOrEnterJoinRequestInterview(s.joinRequestId)
      } catch {
        E()
      } finally {
        d(!1)
      }
    }
  }, [u, s.joinRequestId, E, a]);
  return (0, n.jsx)(r.Button, {
    color: r.Button.Colors.BRAND,
    submitting: a,
    onClick: T,
    children: I.Z.Messages.CLAN_DM_APPLICANT
  })
}