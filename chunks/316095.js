"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  a = n("414456"),
  s = n.n(a),
  r = n("446674"),
  o = n("77078"),
  u = n("851387"),
  d = n("216049"),
  c = n("915639"),
  f = n("102985"),
  p = n("461380"),
  m = n("713135"),
  h = n("824140"),
  E = n("401642"),
  S = n("777003"),
  g = n("590456"),
  C = n("49111"),
  T = n("782340"),
  v = n("843482"),
  I = n("814076");

function _(e) {
  var t, n;
  let a, _, {
      userId: y,
      channelId: A,
      guild: N,
      theme: x,
      onClose: O,
      className: R
    } = e,
    M = (0, d.default)(N, y, A),
    [L, P] = i.useState(new Set),
    b = (0, r.useStateFromStores)([m.default], () => m.default.getUserProfile(y)),
    j = null !== (t = null == b ? void 0 : b.connectedAccounts) && void 0 !== t ? t : [],
    U = null !== (n = null == b ? void 0 : b.applicationRoleConnections) && void 0 !== n ? n : [],
    D = (0, r.useStateFromStores)([f.default], () => f.default.hidePersonalInformation),
    k = (0, r.useStateFromStores)([c.default], () => c.default.locale);
  if (i.useEffect(() => {
      (null == N ? void 0 : N.id) != null && (null == M ? void 0 : M.id) != null && u.default.fetchGuildRoleConnectionsEligibility(N.id, M.id).then(e => {
        let t = new Set;
        for (let n of e)
          for (let {
              connection_type: e
            }
            of n) t.add(e);
        P(t)
      })
    }, [null == N ? void 0 : N.id, null == M ? void 0 : M.id]), D || null == M) return null;
  let w = Array.from(L).map(e => {
    let t = j.find(t => t.type === e);
    return null == t ? null : (0, l.jsx)(h.ConnectedUserAccount, {
      connectedAccount: t,
      theme: x,
      locale: k,
      userId: y
    }, "".concat(t.type, ":").concat(t.id))
  }).filter(e => null != e);
  return (w.length > 0 && (a = (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(o.Heading, {
      variant: "eyebrow",
      className: I.title,
      children: T.default.Messages.CONNECTIONS
    }), (0, l.jsxs)("div", {
      className: s(v.connectionsContainer, R),
      children: [w, (0, l.jsxs)(o.Clickable, {
        onClick: function() {
          (0, E.openUserProfileModal)({
            userId: y,
            guildId: null == N ? void 0 : N.id,
            channelId: A,
            section: g.UserProfileSections.USER_INFO_CONNECTIONS,
            analyticsLocation: {
              section: C.AnalyticsSections.PROFILE_POPOUT
            }
          }), null == O || O()
        },
        className: v.connections,
        children: [(0, l.jsx)(o.Text, {
          variant: "text-md/semibold",
          color: "interactive-active",
          className: v.connectionsText,
          children: T.default.Messages.CONNECTIONS_ROLE_POPOUT_VIEW_ALL
        }), (0, l.jsx)(p.default, {
          direction: p.default.Directions.RIGHT,
          className: v.connectionsCaret
        })]
      })]
    })]
  })), U.length > 0 && (_ = (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(o.Heading, {
      variant: "eyebrow",
      className: I.title,
      children: T.default.Messages.APPS
    }), (0, l.jsx)("div", {
      className: s(v.connectionsContainer, R),
      children: U.map(e => (0, l.jsx)(h.ConnectedApplicationUserRoleAccount, {
        applicationRoleConnection: e,
        locale: k
      }, e.application.id))
    })]
  })), null == a && null == _) ? null : (0, l.jsxs)(S.default, {
    children: [_, a]
  })
}