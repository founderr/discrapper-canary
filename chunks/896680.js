"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  i = n("442837"),
  u = n("481060"),
  r = n("239091"),
  d = n("154285"),
  s = n("369994"),
  o = n("666657"),
  c = n("533244"),
  I = n("487419"),
  A = n("965638"),
  E = n("430824"),
  _ = n("981631"),
  T = n("689938");

function f(e, t) {
  let f = t === _.AppContext.POPOUT,
    R = (0, i.useStateFromStores)([E.default], () => E.default.getGuild(e), [e]),
    [M, S] = l.useState(!1),
    {
      showAlertMode: N
    } = (0, d.useGuildAlertModeEnabled)(e),
    D = (0, i.useStateFromStores)([I.default], () => null != R ? I.default.getGuildIncident(R.id) : null),
    L = (null == R ? void 0 : R.hasFeature(_.GuildFeatures.INVITES_DISABLED)) || N && (null == D ? void 0 : D.invitesDisabledUntil) != null && new Date(D.invitesDisabledUntil) > new Date,
    [C, p] = l.useState(L),
    h = async t => {
      if (!M && null != R) {
        S(!0);
        try {
          if (p(t), N) {
            if (t) {
              let t = {
                source: o.GuildIncidentActionSources.MESSAGE,
                alertType: (0, c.getIncidentAlertType)(D)
              };
              (0, u.openModalLazy)(async () => {
                let {
                  default: l
                } = await Promise.all([n.e("99387"), n.e("61536")]).then(n.bind(n, "664452"));
                return n => (0, a.jsx)(l, {
                  ...n,
                  guildId: e,
                  analyticsData: t
                })
              })
            } else await (0, s.setGuildIncidentActions)(R.id, !1, !1)
          } else await (0, A.setInvitesDisabled)(R, t)
        } catch (e) {
          p(!t)
        } finally {
          S(!1), (0, r.closeContextMenu)()
        }
      }
    };
  return f ? null : (0, a.jsx)(u.MenuCheckboxItem, {
    id: "pause-invites",
    label: T.default.Messages.DISABLE_INVITES,
    action: () => {
      h(!C)
    },
    checked: C
  })
}