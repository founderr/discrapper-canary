t.d(n, {
  Z: function() {
    return N
  }
}), t(47120);
var l = t(735250),
  a = t(470079),
  i = t(442837),
  r = t(481060),
  u = t(239091),
  o = t(154285),
  s = t(369994),
  d = t(666657),
  c = t(533244),
  I = t(487419),
  _ = t(965638),
  E = t(430824),
  A = t(981631),
  T = t(689938);

function N(e, n) {
  let N = n === A.IlC.POPOUT,
    M = (0, i.e7)([E.Z], () => E.Z.getGuild(e), [e]),
    [f, S] = a.useState(!1),
    {
      showAlertMode: D
    } = (0, o.sw)(e),
    R = (0, i.e7)([I.Z], () => null != M ? I.Z.getGuildIncident(M.id) : null),
    L = (null == M ? void 0 : M.hasFeature(A.oNc.INVITES_DISABLED)) || D && (null == R ? void 0 : R.invitesDisabledUntil) != null && new Date(R.invitesDisabledUntil) > new Date,
    [C, h] = a.useState(L),
    O = async n => {
      if (!f && null != M) {
        S(!0);
        try {
          if (h(n), D) {
            if (n) {
              let n = {
                source: d.Zu.MESSAGE,
                alertType: (0, c.T1)(R)
              };
              (0, r.openModalLazy)(async () => {
                let {
                  default: a
                } = await Promise.all([t.e("99387"), t.e("61536")]).then(t.bind(t, 664452));
                return t => (0, l.jsx)(a, {
                  ...t,
                  guildId: e,
                  analyticsData: n
                })
              })
            } else await (0, s.n)(M.id, !1, !1)
          } else await (0, _.AG)(M, n)
        } catch (e) {
          h(!n)
        } finally {
          S(!1), (0, u.Zy)()
        }
      }
    };
  return N ? null : (0, l.jsx)(r.MenuCheckboxItem, {
    id: "pause-invites",
    label: T.Z.Messages.DISABLE_INVITES,
    action: () => {
      O(!C)
    },
    checked: C
  })
}