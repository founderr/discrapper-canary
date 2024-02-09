"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("222007"), n("834022");
var i = n("37983"),
  r = n("884691"),
  l = n("414456"),
  s = n.n(l),
  a = n("446674"),
  o = n("819855"),
  u = n("77078"),
  c = n("272030"),
  d = n("851387"),
  f = n("841098"),
  p = n("376556"),
  h = n("716241"),
  C = n("766274"),
  v = n("271938"),
  E = n("26989"),
  _ = n("305961"),
  S = n("476765"),
  I = n("486952"),
  m = n("811305"),
  g = n("599110"),
  y = n("701909"),
  A = n("339023"),
  N = n("602658"),
  T = n("49111"),
  L = n("782340"),
  R = n("80014"),
  P = n("494101"),
  x = function(e) {
    let {
      guildId: t,
      transitionState: l,
      onClose: x
    } = e, b = (0, a.useStateFromStores)([_.default], () => _.default.getGuild(t), [t]), w = (0, a.useStateFromStores)([v.default], () => v.default.getId()), O = (0, a.useStateFromStores)([E.default], () => E.default.getMember(t, w)), [U, M] = r.useState([]), D = (0, f.default)(), k = (0, S.useUID)();
    if (r.useEffect(() => {
        0 !== U.length && g.default.track(T.AnalyticEvents.PASSPORT_ENTRY_VIEWED, {
          role_ids: U.map(e => {
            let {
              role_id: t
            } = e;
            return t
          }),
          ...(0, h.collectGuildAnalyticsMetadata)(t)
        })
      }, [t, U]), r.useEffect(() => {
        d.default.getGuildRoleConnectionsConfigurations(t).then(e => M(e))
      }, [t]), null == b || null == O) return null;
    let j = Object.values(b.roles).filter(e => {
      var t;
      return (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null
    });
    return (0, i.jsxs)(u.ModalRoot, {
      transitionState: l,
      "aria-labelledby": k,
      className: R.modal,
      children: [(0, i.jsxs)(u.ModalHeader, {
        separator: !1,
        children: [(0, i.jsx)(A.default, {
          className: R.headerIcon,
          size: 24
        }), (0, i.jsx)(u.Heading, {
          variant: "text-md/medium",
          color: "header-primary",
          children: L.default.Messages.CONNECTIONS_ROLES_CHANNEL_NAME
        }), (0, i.jsx)(u.ModalCloseButton, {
          className: R.modalCloseButton,
          onClick: x
        })]
      }), (0, i.jsxs)(u.ModalContent, {
        className: R.container,
        children: [(0, i.jsx)(u.Heading, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: L.default.Messages.CONNECTIONS_ROLES_CHANNEL_CALL_TO_ACTION_LEARN_MORE.format({
            helpdeskArticleUrl: y.default.getArticleURL(T.HelpdeskArticles.CONNECTION_DETAILS)
          })
        }), (0, i.jsx)("div", {
          className: R.verifiedRoles,
          children: j.map(e => {
            let l = O.roles.includes(e.id),
              a = function(e) {
                let n = U.find(t => {
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
                    var l;
                    let r = null === (l = n.applications) || void 0 === l ? void 0 : l[e.application_id];
                    a = (null == r ? void 0 : r.bot) != null ? (0, i.jsx)("img", {
                      src: new(0, C.default)(r.bot).getAvatarURL(t, 24),
                      alt: "",
                      className: s(R.botAvatar, P.avatar)
                    }) : null
                  } else {
                    let t = p.default.get(e.connection_type);
                    a = (0, i.jsx)("img", {
                      src: (0, o.isThemeLight)(D) ? t.icon.lightSVG : t.icon.darkSVG,
                      alt: "",
                      className: P.avatar
                    })
                  }
                  null != a && (r["".concat(e.connection_type, ":").concat(e.application_id)] = a)
                }
                return Object.values(r)
              }(e.id);
            return (0, i.jsxs)(u.Clickable, {
              className: s(R.verifiedRole, l ? R.verifiedRoleHasRole : null),
              onClick: l ? void 0 : () => {
                var r, l;
                return r = e, l = t, void(0, u.openModalLazy)(async () => {
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
                return r = b.id, l = e.id, s = t, void(0, c.openContextMenuLazy)(s, async () => {
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
                className: R.roleCheckmark,
                children: (0, i.jsx)(I.default, {})
              }) : null, (0, i.jsx)(N.default, {
                guildId: t,
                role: e,
                size: 24
              }), (0, i.jsxs)("div", {
                className: R.verifiedRoleNameDescriptionContainer,
                children: [(0, i.jsx)(u.Text, {
                  variant: "text-md/medium",
                  color: "header-primary",
                  className: R.verifiedRoleName,
                  children: e.name
                }), void 0 !== e.description ? (0, i.jsx)(u.Text, {
                  variant: "text-xs/normal",
                  color: "header-secondary",
                  className: R.verifiedRoleDescription,
                  children: e.description
                }) : null]
              }), (0, i.jsx)(m.default, {
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