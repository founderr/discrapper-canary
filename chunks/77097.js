"use strict";
n.d(t, {
  Z: function() {
    return g
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(442837),
  l = n(481060),
  u = n(749210),
  _ = n(906732),
  c = n(977392),
  d = n(706454),
  E = n(246946),
  I = n(259580),
  T = n(785717),
  h = n(621853),
  f = n(335191),
  S = n(171368),
  A = n(659101),
  N = n(228168),
  m = n(981631),
  O = n(689938),
  p = n(19320),
  R = n(546136);

function g(e) {
  var t, n;
  let s, g, {
      userId: C,
      channelId: v,
      guild: L,
      theme: D,
      onClose: M,
      className: P
    } = e,
    {
      analyticsLocations: y
    } = (0, _.ZP)(),
    {
      messageId: U,
      roleId: b
    } = (0, T.KZ)(),
    G = (0, c.Z)(L, C, v),
    [w, x] = r.useState(new Set),
    B = (0, a.e7)([h.Z], () => h.Z.getUserProfile(C)),
    k = null !== (t = null == B ? void 0 : B.connectedAccounts) && void 0 !== t ? t : [],
    V = null !== (n = null == B ? void 0 : B.applicationRoleConnections) && void 0 !== n ? n : [],
    Z = (0, a.e7)([E.Z], () => E.Z.hidePersonalInformation),
    H = (0, a.e7)([d.default], () => d.default.locale);
  if (r.useEffect(() => {
      if ((null == L ? void 0 : L.id) != null && (null == G ? void 0 : G.id) != null) u.Z.fetchGuildRoleConnectionsEligibility(L.id, G.id).then(e => {
        let t = new Set;
        for (let n of e)
          for (let {
              connection_type: e
            }
            of n) t.add(e);
        x(t)
      })
    }, [null == L ? void 0 : L.id, null == G ? void 0 : G.id]), Z || null == G) return null;
  let F = Array.from(w).map(e => {
    let t = k.find(t => t.type === e);
    return null == t ? null : (0, i.jsx)(f.E3, {
      connectedAccount: t,
      theme: D,
      locale: H,
      userId: C
    }, "".concat(t.type, ":").concat(t.id))
  }).filter(e => null != e);
  return (F.length > 0 && (s = (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(l.Heading, {
      variant: "eyebrow",
      className: R.title,
      children: O.Z.Messages.CONNECTIONS
    }), (0, i.jsxs)("div", {
      className: o()(p.connectionsContainer, P),
      children: [F, (0, i.jsxs)(l.Clickable, {
        onClick: function() {
          (0, S.openUserProfileModal)({
            userId: C,
            channelId: v,
            guildId: null == L ? void 0 : L.id,
            messageId: U,
            roleId: b,
            section: N.oh.USER_INFO_CONNECTIONS,
            sourceAnalyticsLocations: y,
            analyticsLocation: {
              section: m.jXE.PROFILE_POPOUT
            }
          }), null == M || M()
        },
        className: p.connections,
        children: [(0, i.jsx)(l.Text, {
          variant: "text-md/semibold",
          color: "interactive-active",
          className: p.connectionsText,
          children: O.Z.Messages.CONNECTIONS_ROLE_POPOUT_VIEW_ALL
        }), (0, i.jsx)(I.Z, {
          direction: I.Z.Directions.RIGHT,
          className: p.connectionsCaret
        })]
      })]
    })]
  })), V.length > 0 && (g = (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(l.Heading, {
      variant: "eyebrow",
      className: R.title,
      children: O.Z.Messages.APPS
    }), (0, i.jsx)("div", {
      className: o()(p.connectionsContainer, P),
      children: V.map(e => (0, i.jsx)(f.tH, {
        applicationRoleConnection: e,
        locale: H
      }, e.application.id))
    })]
  })), null == s && null == g) ? null : (0, i.jsxs)(A.Z, {
    children: [g, s]
  })
}