"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
}), n("222007"), n("834022");
var i = n("37983"),
  r = n("884691"),
  u = n("414456"),
  a = n.n(u),
  l = n("446674"),
  s = n("819855"),
  o = n("77078"),
  c = n("272030"),
  d = n("851387"),
  E = n("841098"),
  f = n("376556"),
  _ = n("716241"),
  S = n("766274"),
  T = n("271938"),
  I = n("26989"),
  N = n("305961"),
  p = n("476765"),
  h = n("486952"),
  A = n("811305"),
  C = n("599110"),
  v = n("701909"),
  m = n("339023"),
  R = n("602658"),
  P = n("49111"),
  g = n("782340"),
  D = n("431480"),
  U = n("856614"),
  L = function(e) {
    let {
      guildId: t,
      transitionState: u,
      onClose: L
    } = e, O = (0, l.useStateFromStores)([N.default], () => N.default.getGuild(t), [t]), y = (0, l.useStateFromStores)([T.default], () => T.default.getId()), G = (0, l.useStateFromStores)([I.default], () => I.default.getMember(t, y)), [M, b] = r.useState([]), F = (0, E.default)(), w = (0, p.useUID)();
    if (r.useEffect(() => {
        0 !== M.length && C.default.track(P.AnalyticEvents.PASSPORT_ENTRY_VIEWED, {
          role_ids: M.map(e => {
            let {
              role_id: t
            } = e;
            return t
          }),
          ...(0, _.collectGuildAnalyticsMetadata)(t)
        })
      }, [t, M]), r.useEffect(() => {
        d.default.getGuildRoleConnectionsConfigurations(t).then(e => b(e))
      }, [t]), null == O || null == G) return null;
    let x = Object.values(O.roles).filter(e => {
      var t;
      return (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null
    });
    return (0, i.jsxs)(o.ModalRoot, {
      transitionState: u,
      "aria-labelledby": w,
      className: D.modal,
      children: [(0, i.jsxs)(o.ModalHeader, {
        separator: !1,
        children: [(0, i.jsx)(m.default, {
          className: D.headerIcon,
          size: 24
        }), (0, i.jsx)(o.Heading, {
          variant: "text-md/medium",
          color: "header-primary",
          children: g.default.Messages.CONNECTIONS_ROLES_CHANNEL_NAME
        }), (0, i.jsx)(o.ModalCloseButton, {
          className: D.modalCloseButton,
          onClick: L
        })]
      }), (0, i.jsxs)(o.ModalContent, {
        className: D.container,
        children: [(0, i.jsx)(o.Heading, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: g.default.Messages.CONNECTIONS_ROLES_CHANNEL_CALL_TO_ACTION_LEARN_MORE.format({
            helpdeskArticleUrl: v.default.getArticleURL(P.HelpdeskArticles.CONNECTION_DETAILS)
          })
        }), (0, i.jsx)("div", {
          className: D.verifiedRoles,
          children: x.map(e => {
            let u = G.roles.includes(e.id),
              l = function(e) {
                let n = M.find(t => {
                  let {
                    role_id: n
                  } = t;
                  return n === e
                });
                if (null == n) return [];
                let r = {};
                for (let e of n.rules.flat()) {
                  let l;
                  if (null != e.application_id) {
                    var u;
                    let r = null === (u = n.applications) || void 0 === u ? void 0 : u[e.application_id];
                    l = (null == r ? void 0 : r.bot) != null ? (0, i.jsx)("img", {
                      src: new(0, S.default)(r.bot).getAvatarURL(t, 24),
                      alt: "",
                      className: a(D.botAvatar, U.avatar)
                    }) : null
                  } else {
                    let t = f.default.get(e.connection_type);
                    l = (0, i.jsx)("img", {
                      src: (0, s.isThemeLight)(F) ? t.icon.lightSVG : t.icon.darkSVG,
                      alt: "",
                      className: U.avatar
                    })
                  }
                  null != l && (r["".concat(e.connection_type, ":").concat(e.application_id)] = l)
                }
                return Object.values(r)
              }(e.id);
            return (0, i.jsxs)(o.Clickable, {
              className: a(D.verifiedRole, u ? D.verifiedRoleHasRole : null),
              onClick: u ? void 0 : () => {
                var r, u;
                return r = e, u = t, void(0, o.openModalLazy)(async () => {
                  let {
                    default: e
                  } = await n.el("572579").then(n.bind(n, "572579"));
                  return t => (0, i.jsx)(e, {
                    role: r,
                    guildId: u,
                    ...t
                  })
                })
              },
              onContextMenu: u ? t => {
                var r, u, a;
                return r = O.id, u = e.id, a = t, void(0, c.openContextMenuLazy)(a, async () => {
                  let {
                    default: e
                  } = await n.el("232006").then(n.bind(n, "232006"));
                  return t => (0, i.jsx)(e, {
                    ...t,
                    roleId: u,
                    onLeaveRole: () => d.default.unassignGuildRoleConnection(r, u)
                  })
                })
              } : void 0,
              children: [u ? (0, i.jsx)("div", {
                className: D.roleCheckmark,
                children: (0, i.jsx)(h.default, {})
              }) : null, (0, i.jsx)(R.default, {
                guildId: t,
                role: e,
                size: 24
              }), (0, i.jsxs)("div", {
                className: D.verifiedRoleNameDescriptionContainer,
                children: [(0, i.jsx)(o.Text, {
                  variant: "text-md/medium",
                  color: "header-primary",
                  className: D.verifiedRoleName,
                  children: e.name
                }), void 0 !== e.description ? (0, i.jsx)(o.Text, {
                  variant: "text-xs/normal",
                  color: "header-secondary",
                  className: D.verifiedRoleDescription,
                  children: e.description
                }) : null]
              }), (0, i.jsx)(A.default, {
                showUserPopout: !1,
                guildId: t,
                users: l.map(() => null),
                renderUser: (e, t, n) => (0, i.jsx)(r.Fragment, {
                  children: l[n]
                }, n),
                max: 3
              })]
            }, e.id)
          })
        })]
      })]
    })
  }