"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
  }
}), n("222007"), n("834022");
var i = n("37983"),
  r = n("884691"),
  l = n("414456"),
  o = n.n(l),
  s = n("446674"),
  u = n("819855"),
  a = n("77078"),
  c = n("272030"),
  d = n("851387"),
  f = n("841098"),
  E = n("376556"),
  _ = n("716241"),
  p = n("766274"),
  I = n("271938"),
  S = n("26989"),
  h = n("305961"),
  T = n("476765"),
  N = n("486952"),
  C = n("811305"),
  v = n("599110"),
  g = n("701909"),
  m = n("339023"),
  A = n("602658"),
  U = n("49111"),
  R = n("782340"),
  L = n("80014"),
  P = n("494101"),
  D = function(e) {
    let {
      guildId: t,
      transitionState: l,
      onClose: D
    } = e, y = (0, s.useStateFromStores)([h.default], () => h.default.getGuild(t), [t]), O = (0, s.useStateFromStores)([I.default], () => I.default.getId()), b = (0, s.useStateFromStores)([S.default], () => S.default.getMember(t, O)), [M, w] = r.useState([]), G = (0, f.default)(), x = (0, T.useUID)();
    if (r.useEffect(() => {
        0 !== M.length && v.default.track(U.AnalyticEvents.PASSPORT_ENTRY_VIEWED, {
          role_ids: M.map(e => {
            let {
              role_id: t
            } = e;
            return t
          }),
          ...(0, _.collectGuildAnalyticsMetadata)(t)
        })
      }, [t, M]), r.useEffect(() => {
        d.default.getGuildRoleConnectionsConfigurations(t).then(e => w(e))
      }, [t]), null == y || null == b) return null;
    let F = Object.values(y.roles).filter(e => {
      var t;
      return (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null
    });
    return (0, i.jsxs)(a.ModalRoot, {
      transitionState: l,
      "aria-labelledby": x,
      className: L.modal,
      children: [(0, i.jsxs)(a.ModalHeader, {
        separator: !1,
        children: [(0, i.jsx)(m.default, {
          className: L.headerIcon,
          size: 24
        }), (0, i.jsx)(a.Heading, {
          variant: "text-md/medium",
          color: "header-primary",
          children: R.default.Messages.CONNECTIONS_ROLES_CHANNEL_NAME
        }), (0, i.jsx)(a.ModalCloseButton, {
          className: L.modalCloseButton,
          onClick: D
        })]
      }), (0, i.jsxs)(a.ModalContent, {
        className: L.container,
        children: [(0, i.jsx)(a.Heading, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: R.default.Messages.CONNECTIONS_ROLES_CHANNEL_CALL_TO_ACTION_LEARN_MORE.format({
            helpdeskArticleUrl: g.default.getArticleURL(U.HelpdeskArticles.CONNECTION_DETAILS)
          })
        }), (0, i.jsx)("div", {
          className: L.verifiedRoles,
          children: F.map(e => {
            let l = b.roles.includes(e.id),
              s = function(e) {
                let n = M.find(t => {
                  let {
                    role_id: n
                  } = t;
                  return n === e
                });
                if (null == n) return [];
                let r = {};
                for (let e of n.rules.flat()) {
                  let s;
                  if (null != e.application_id) {
                    var l;
                    let r = null === (l = n.applications) || void 0 === l ? void 0 : l[e.application_id];
                    s = (null == r ? void 0 : r.bot) != null ? (0, i.jsx)("img", {
                      src: new(0, p.default)(r.bot).getAvatarURL(t, 24),
                      alt: "",
                      className: o(L.botAvatar, P.avatar)
                    }) : null
                  } else {
                    let t = E.default.get(e.connection_type);
                    s = (0, i.jsx)("img", {
                      src: (0, u.isThemeLight)(G) ? t.icon.lightSVG : t.icon.darkSVG,
                      alt: "",
                      className: P.avatar
                    })
                  }
                  null != s && (r["".concat(e.connection_type, ":").concat(e.application_id)] = s)
                }
                return Object.values(r)
              }(e.id);
            return (0, i.jsxs)(a.Clickable, {
              className: o(L.verifiedRole, l ? L.verifiedRoleHasRole : null),
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
                var r, l, o;
                return r = y.id, l = e.id, o = t, void(0, c.openContextMenuLazy)(o, async () => {
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
                className: L.roleCheckmark,
                children: (0, i.jsx)(N.default, {})
              }) : null, (0, i.jsx)(A.default, {
                guildId: t,
                role: e,
                size: 24
              }), (0, i.jsxs)("div", {
                className: L.verifiedRoleNameDescriptionContainer,
                children: [(0, i.jsx)(a.Text, {
                  variant: "text-md/medium",
                  color: "header-primary",
                  className: L.verifiedRoleName,
                  children: e.name
                }), void 0 !== e.description ? (0, i.jsx)(a.Text, {
                  variant: "text-xs/normal",
                  color: "header-secondary",
                  className: L.verifiedRoleDescription,
                  children: e.description
                }) : null]
              }), (0, i.jsx)(C.default, {
                showUserPopout: !1,
                guildId: t,
                users: s.map(() => null),
                renderUser: (e, t, n) => (0, i.jsx)(r.Fragment, {
                  children: s[n]
                }, n),
                max: 3
              })]
            }, e.id)
          })
        })]
      })]
    })
  }