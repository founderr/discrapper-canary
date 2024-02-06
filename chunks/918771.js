"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
  }
}), n("222007"), n("834022");
var i = n("37983"),
  r = n("884691"),
  l = n("414456"),
  s = n.n(l),
  u = n("446674"),
  o = n("819855"),
  a = n("77078"),
  c = n("272030"),
  d = n("851387"),
  f = n("841098"),
  E = n("376556"),
  _ = n("716241"),
  I = n("766274"),
  S = n("271938"),
  h = n("26989"),
  p = n("305961"),
  T = n("476765"),
  N = n("486952"),
  C = n("811305"),
  v = n("599110"),
  m = n("701909"),
  g = n("339023"),
  A = n("602658"),
  R = n("49111"),
  L = n("782340"),
  U = n("80014"),
  P = n("494101"),
  D = function(e) {
    let {
      guildId: t,
      transitionState: l,
      onClose: D
    } = e, y = (0, u.useStateFromStores)([p.default], () => p.default.getGuild(t), [t]), O = (0, u.useStateFromStores)([S.default], () => S.default.getId()), M = (0, u.useStateFromStores)([h.default], () => h.default.getMember(t, O)), [G, b] = r.useState([]), x = (0, f.default)(), w = (0, T.useUID)();
    if (r.useEffect(() => {
        0 !== G.length && v.default.track(R.AnalyticEvents.PASSPORT_ENTRY_VIEWED, {
          role_ids: G.map(e => {
            let {
              role_id: t
            } = e;
            return t
          }),
          ...(0, _.collectGuildAnalyticsMetadata)(t)
        })
      }, [t, G]), r.useEffect(() => {
        d.default.getGuildRoleConnectionsConfigurations(t).then(e => b(e))
      }, [t]), null == y || null == M) return null;
    let F = Object.values(y.roles).filter(e => {
      var t;
      return (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null
    });
    return (0, i.jsxs)(a.ModalRoot, {
      transitionState: l,
      "aria-labelledby": w,
      className: U.modal,
      children: [(0, i.jsxs)(a.ModalHeader, {
        separator: !1,
        children: [(0, i.jsx)(g.default, {
          className: U.headerIcon,
          size: 24
        }), (0, i.jsx)(a.Heading, {
          variant: "text-md/medium",
          color: "header-primary",
          children: L.default.Messages.CONNECTIONS_ROLES_CHANNEL_NAME
        }), (0, i.jsx)(a.ModalCloseButton, {
          className: U.modalCloseButton,
          onClick: D
        })]
      }), (0, i.jsxs)(a.ModalContent, {
        className: U.container,
        children: [(0, i.jsx)(a.Heading, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: L.default.Messages.CONNECTIONS_ROLES_CHANNEL_CALL_TO_ACTION_LEARN_MORE.format({
            helpdeskArticleUrl: m.default.getArticleURL(R.HelpdeskArticles.CONNECTION_DETAILS)
          })
        }), (0, i.jsx)("div", {
          className: U.verifiedRoles,
          children: F.map(e => {
            let l = M.roles.includes(e.id),
              u = function(e) {
                let n = G.find(t => {
                  let {
                    role_id: n
                  } = t;
                  return n === e
                });
                if (null == n) return [];
                let r = {};
                for (let e of n.rules.flat()) {
                  let u;
                  if (null != e.application_id) {
                    var l;
                    let r = null === (l = n.applications) || void 0 === l ? void 0 : l[e.application_id];
                    u = (null == r ? void 0 : r.bot) != null ? (0, i.jsx)("img", {
                      src: new(0, I.default)(r.bot).getAvatarURL(t, 24),
                      alt: "",
                      className: s(U.botAvatar, P.avatar)
                    }) : null
                  } else {
                    let t = E.default.get(e.connection_type);
                    u = (0, i.jsx)("img", {
                      src: (0, o.isThemeLight)(x) ? t.icon.lightSVG : t.icon.darkSVG,
                      alt: "",
                      className: P.avatar
                    })
                  }
                  null != u && (r["".concat(e.connection_type, ":").concat(e.application_id)] = u)
                }
                return Object.values(r)
              }(e.id);
            return (0, i.jsxs)(a.Clickable, {
              className: s(U.verifiedRole, l ? U.verifiedRoleHasRole : null),
              onClick: l ? void 0 : () => {
                var r, l;
                return r = e, l = t, void(0, a.openModalLazy)(async () => {
                  let {
                    default: e
                  } = await n.el("572579").then(n.bind(n, "572579"));
                  return t => (0, i.jsx)(e, {
                    role: r,
                    guildId: l,
                    ...t
                  })
                })
              },
              onContextMenu: l ? t => {
                var r, l, s;
                return r = y.id, l = e.id, s = t, void(0, c.openContextMenuLazy)(s, async () => {
                  let {
                    default: e
                  } = await n.el("232006").then(n.bind(n, "232006"));
                  return t => (0, i.jsx)(e, {
                    ...t,
                    roleId: l,
                    onLeaveRole: () => d.default.unassignGuildRoleConnection(r, l)
                  })
                })
              } : void 0,
              children: [l ? (0, i.jsx)("div", {
                className: U.roleCheckmark,
                children: (0, i.jsx)(N.default, {})
              }) : null, (0, i.jsx)(A.default, {
                guildId: t,
                role: e,
                size: 24
              }), (0, i.jsxs)("div", {
                className: U.verifiedRoleNameDescriptionContainer,
                children: [(0, i.jsx)(a.Text, {
                  variant: "text-md/medium",
                  color: "header-primary",
                  className: U.verifiedRoleName,
                  children: e.name
                }), void 0 !== e.description ? (0, i.jsx)(a.Text, {
                  variant: "text-xs/normal",
                  color: "header-secondary",
                  className: U.verifiedRoleDescription,
                  children: e.description
                }) : null]
              }), (0, i.jsx)(C.default, {
                showUserPopout: !1,
                guildId: t,
                users: u.map(() => null),
                renderUser: (e, t, n) => (0, i.jsx)(r.Fragment, {
                  children: u[n]
                }, n),
                max: 3
              })]
            }, e.id)
          })
        })]
      })]
    })
  }