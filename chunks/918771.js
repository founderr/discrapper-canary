"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
}), n("222007"), n("834022");
var i = n("37983"),
  r = n("884691"),
  s = n("414456"),
  l = n.n(s),
  a = n("446674"),
  o = n("819855"),
  u = n("77078"),
  c = n("272030"),
  d = n("851387"),
  f = n("841098"),
  E = n("376556"),
  h = n("716241"),
  p = n("766274"),
  S = n("271938"),
  _ = n("26989"),
  C = n("305961"),
  v = n("476765"),
  m = n("486952"),
  A = n("811305"),
  N = n("599110"),
  I = n("701909"),
  T = n("339023"),
  g = n("602658"),
  R = n("49111"),
  P = n("782340"),
  L = n("431480"),
  y = n("856614"),
  O = function(e) {
    let {
      guildId: t,
      transitionState: s,
      onClose: O
    } = e, b = (0, a.useStateFromStores)([C.default], () => C.default.getGuild(t), [t]), M = (0, a.useStateFromStores)([S.default], () => S.default.getId()), x = (0, a.useStateFromStores)([_.default], () => _.default.getMember(t, M)), [D, U] = r.useState([]), w = (0, f.default)(), F = (0, v.useUID)();
    if (r.useEffect(() => {
        0 !== D.length && N.default.track(R.AnalyticEvents.PASSPORT_ENTRY_VIEWED, {
          role_ids: D.map(e => {
            let {
              role_id: t
            } = e;
            return t
          }),
          ...(0, h.collectGuildAnalyticsMetadata)(t)
        })
      }, [t, D]), r.useEffect(() => {
        d.default.getGuildRoleConnectionsConfigurations(t).then(e => U(e))
      }, [t]), null == b || null == x) return null;
    let V = Object.values(b.roles).filter(e => {
      var t;
      return (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null
    });
    return (0, i.jsxs)(u.ModalRoot, {
      transitionState: s,
      "aria-labelledby": F,
      className: L.modal,
      children: [(0, i.jsxs)(u.ModalHeader, {
        separator: !1,
        children: [(0, i.jsx)(T.default, {
          className: L.headerIcon,
          size: 24
        }), (0, i.jsx)(u.Heading, {
          variant: "text-md/medium",
          color: "header-primary",
          children: P.default.Messages.CONNECTIONS_ROLES_CHANNEL_NAME
        }), (0, i.jsx)(u.ModalCloseButton, {
          className: L.modalCloseButton,
          onClick: O
        })]
      }), (0, i.jsxs)(u.ModalContent, {
        className: L.container,
        children: [(0, i.jsx)(u.Heading, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: P.default.Messages.CONNECTIONS_ROLES_CHANNEL_CALL_TO_ACTION_LEARN_MORE.format({
            helpdeskArticleUrl: I.default.getArticleURL(R.HelpdeskArticles.CONNECTION_DETAILS)
          })
        }), (0, i.jsx)("div", {
          className: L.verifiedRoles,
          children: V.map(e => {
            let s = x.roles.includes(e.id),
              a = function(e) {
                let n = D.find(t => {
                  let {
                    role_id: n
                  } = t;
                  return n === e
                });
                if (null == n) return [];
                let r = {};
                for (let e of n.rules.flat()) {
                  let a;
                  if (null != e.application_id) {
                    var s;
                    let r = null === (s = n.applications) || void 0 === s ? void 0 : s[e.application_id];
                    a = (null == r ? void 0 : r.bot) != null ? (0, i.jsx)("img", {
                      src: new(0, p.default)(r.bot).getAvatarURL(t, 24),
                      alt: "",
                      className: l(L.botAvatar, y.avatar)
                    }) : null
                  } else {
                    let t = E.default.get(e.connection_type);
                    a = (0, i.jsx)("img", {
                      src: (0, o.isThemeLight)(w) ? t.icon.lightSVG : t.icon.darkSVG,
                      alt: "",
                      className: y.avatar
                    })
                  }
                  null != a && (r["".concat(e.connection_type, ":").concat(e.application_id)] = a)
                }
                return Object.values(r)
              }(e.id);
            return (0, i.jsxs)(u.Clickable, {
              className: l(L.verifiedRole, s ? L.verifiedRoleHasRole : null),
              onClick: s ? void 0 : () => {
                var r, s;
                return r = e, s = t, void(0, u.openModalLazy)(async () => {
                  let {
                    default: e
                  } = await n.el("572579").then(n.bind(n, "572579"));
                  return t => (0, i.jsx)(e, {
                    role: r,
                    guildId: s,
                    ...t
                  })
                })
              },
              onContextMenu: s ? t => {
                var r, s, l;
                return r = b.id, s = e.id, l = t, void(0, c.openContextMenuLazy)(l, async () => {
                  let {
                    default: e
                  } = await n.el("232006").then(n.bind(n, "232006"));
                  return t => (0, i.jsx)(e, {
                    ...t,
                    roleId: s,
                    onLeaveRole: () => d.default.unassignGuildRoleConnection(r, s)
                  })
                })
              } : void 0,
              children: [s ? (0, i.jsx)("div", {
                className: L.roleCheckmark,
                children: (0, i.jsx)(m.default, {})
              }) : null, (0, i.jsx)(g.default, {
                guildId: t,
                role: e,
                size: 24
              }), (0, i.jsxs)("div", {
                className: L.verifiedRoleNameDescriptionContainer,
                children: [(0, i.jsx)(u.Text, {
                  variant: "text-md/medium",
                  color: "header-primary",
                  className: L.verifiedRoleName,
                  children: e.name
                }), void 0 !== e.description ? (0, i.jsx)(u.Text, {
                  variant: "text-xs/normal",
                  color: "header-secondary",
                  className: L.verifiedRoleDescription,
                  children: e.description
                }) : null]
              }), (0, i.jsx)(A.default, {
                showUserPopout: !1,
                guildId: t,
                users: a.map(() => null),
                renderUser: (e, t, n) => (0, i.jsx)(r.Fragment, {
                  children: a[n]
                }, n),
                max: 3
              })]
            }, e.id)
          })
        })]
      })]
    })
  }