"use strict";
l.r(t), l.d(t, {
  default: function() {
    return v
  }
}), l("222007");
var n = l("37983"),
  a = l("884691"),
  s = l("414456"),
  i = l.n(s),
  r = l("446674"),
  o = l("77078"),
  u = l("851387"),
  d = l("216049"),
  c = l("915639"),
  f = l("102985"),
  m = l("461380"),
  p = l("713135"),
  h = l("824140"),
  T = l("401642"),
  E = l("777003"),
  S = l("590456"),
  _ = l("49111"),
  g = l("782340"),
  A = l("843482"),
  I = l("814076");

function v(e) {
  var t, l;
  let s, v, {
      userId: N,
      channelId: C,
      guild: y,
      theme: M,
      onClose: x,
      className: O
    } = e,
    R = (0, d.default)(y, N, C),
    [L, P] = a.useState(new Set),
    j = (0, r.useStateFromStores)([p.default], () => p.default.getUserProfile(N)),
    b = null !== (t = null == j ? void 0 : j.connectedAccounts) && void 0 !== t ? t : [],
    D = null !== (l = null == j ? void 0 : j.applicationRoleConnections) && void 0 !== l ? l : [],
    U = (0, r.useStateFromStores)([f.default], () => f.default.hidePersonalInformation),
    w = (0, r.useStateFromStores)([c.default], () => c.default.locale);
  if (a.useEffect(() => {
      (null == y ? void 0 : y.id) != null && (null == R ? void 0 : R.id) != null && u.default.fetchGuildRoleConnectionsEligibility(y.id, R.id).then(e => {
        let t = new Set;
        for (let l of e)
          for (let {
              connection_type: e
            }
            of l) t.add(e);
        P(t)
      })
    }, [null == y ? void 0 : y.id, null == R ? void 0 : R.id]), U || null == R) return null;
  let F = Array.from(L).map(e => {
    let t = b.find(t => t.type === e);
    return null == t ? null : (0, n.jsx)(h.ConnectedUserAccount, {
      connectedAccount: t,
      theme: M,
      locale: w,
      userId: N
    }, "".concat(t.type, ":").concat(t.id))
  }).filter(e => null != e);
  return (F.length > 0 && (s = (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(o.Heading, {
      variant: "eyebrow",
      className: I.title,
      children: g.default.Messages.CONNECTIONS
    }), (0, n.jsxs)("div", {
      className: i(A.connectionsContainer, O),
      children: [F, (0, n.jsxs)(o.Clickable, {
        onClick: function() {
          (0, T.openUserProfileModal)({
            userId: N,
            guildId: null == y ? void 0 : y.id,
            channelId: C,
            section: S.UserProfileSections.USER_INFO_CONNECTIONS,
            analyticsLocation: {
              section: _.AnalyticsSections.PROFILE_POPOUT
            }
          }), null == x || x()
        },
        className: A.connections,
        children: [(0, n.jsx)(o.Text, {
          variant: "text-md/semibold",
          color: "interactive-active",
          className: A.connectionsText,
          children: g.default.Messages.CONNECTIONS_ROLE_POPOUT_VIEW_ALL
        }), (0, n.jsx)(m.default, {
          direction: m.default.Directions.RIGHT,
          className: A.connectionsCaret
        })]
      })]
    })]
  })), D.length > 0 && (v = (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(o.Heading, {
      variant: "eyebrow",
      className: I.title,
      children: g.default.Messages.APPS
    }), (0, n.jsx)("div", {
      className: i(A.connectionsContainer, O),
      children: D.map(e => (0, n.jsx)(h.ConnectedApplicationUserRoleAccount, {
        applicationRoleConnection: e,
        locale: w
      }, e.application.id))
    })]
  })), null == s && null == v) ? null : (0, n.jsxs)(E.default, {
    children: [v, s]
  })
}