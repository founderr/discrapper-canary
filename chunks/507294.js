a.r(l), a(47120), a(536091);
var i = a(735250),
  n = a(470079),
  r = a(120356),
  t = a.n(r),
  o = a(442837),
  s = a(780384),
  d = a(481060),
  c = a(239091),
  u = a(749210),
  m = a(410030),
  v = a(726542),
  f = a(367907),
  h = a(598077),
  p = a(314897),
  N = a(271383),
  x = a(430824),
  j = a(153124),
  C = a(602623),
  g = a(626135),
  _ = a(63063),
  R = a(134433),
  Z = a(225104),
  E = a(981631),
  O = a(689938),
  b = a(801118),
  k = a(171553);
l.default = function(e) {
  let {
    guildId: l,
    transitionState: r,
    onClose: I
  } = e, S = (0, o.e7)([x.Z], () => x.Z.getRoles(l)), A = (0, o.e7)([p.default], () => p.default.getId()), L = (0, o.e7)([N.ZP], () => N.ZP.getMember(l, A)), [M, y] = n.useState([]), T = (0, m.ZP)(), H = (0, j.Dt)();
  if (n.useEffect(() => {
      if (0 !== M.length) g.default.track(E.rMx.PASSPORT_ENTRY_VIEWED, {
        role_ids: M.map(e => {
          let {
            role_id: l
          } = e;
          return l
        }),
        ...(0, f.hH)(l)
      })
    }, [l, M]), n.useEffect(() => {
      u.Z.getGuildRoleConnectionsConfigurations(l).then(e => y(e))
    }, [l]), null == L) return null;
  let P = Object.values(S).filter(e => {
    var l;
    return (null === (l = e.tags) || void 0 === l ? void 0 : l.guild_connections) === null
  });
  return (0, i.jsxs)(d.ModalRoot, {
    transitionState: r,
    "aria-labelledby": H,
    className: b.modal,
    children: [(0, i.jsxs)(d.ModalHeader, {
      separator: !1,
      children: [(0, i.jsx)(R.Z, {
        className: b.headerIcon,
        size: 24
      }), (0, i.jsx)(d.Heading, {
        variant: "text-md/medium",
        color: "header-primary",
        children: O.Z.Messages.CONNECTIONS_ROLES_CHANNEL_NAME
      }), (0, i.jsx)(d.ModalCloseButton, {
        className: b.modalCloseButton,
        onClick: I
      })]
    }), (0, i.jsxs)(d.ModalContent, {
      className: b.container,
      children: [(0, i.jsx)(d.Heading, {
        variant: "heading-md/semibold",
        color: "header-primary",
        children: O.Z.Messages.CONNECTIONS_ROLES_CHANNEL_CALL_TO_ACTION_LEARN_MORE.format({
          helpdeskArticleUrl: _.Z.getArticleURL(E.BhN.CONNECTION_DETAILS)
        })
      }), (0, i.jsx)("div", {
        className: b.verifiedRoles,
        children: P.map(e => {
          let r = L.roles.includes(e.id),
            o = function(e) {
              let a = M.find(l => {
                let {
                  role_id: a
                } = l;
                return a === e
              });
              if (null == a) return [];
              let n = {};
              for (let e of a.rules.flat()) {
                let o;
                if (null != e.application_id) {
                  var r;
                  let n = null === (r = a.applications) || void 0 === r ? void 0 : r[e.application_id];
                  o = (null == n ? void 0 : n.bot) != null ? (0, i.jsx)("img", {
                    src: new h.Z(n.bot).getAvatarURL(l, 24),
                    alt: "",
                    className: t()(b.botAvatar, k.avatar)
                  }) : null
                } else {
                  let l = v.Z.get(e.connection_type);
                  o = (0, i.jsx)("img", {
                    src: (0, s.ap)(T) ? l.icon.lightSVG : l.icon.darkSVG,
                    alt: "",
                    className: k.avatar
                  })
                }
                if (null != o) n["".concat(e.connection_type, ":").concat(e.application_id)] = o
              }
              return Object.values(n)
            }(e.id);
          return (0, i.jsxs)(d.Clickable, {
            className: t()(b.verifiedRole, r ? b.verifiedRoleHasRole : null),
            onClick: r ? void 0 : () => {
              var n, r;
              return n = e, r = l, void(0, d.openModalLazy)(async () => {
                let {
                  default: e
                } = await Promise.all([a.e("99387"), a.e("38413")]).then(a.bind(a, 107807));
                return l => (0, i.jsx)(e, {
                  role: n,
                  guildId: r,
                  ...l
                })
              })
            },
            onContextMenu: r ? n => {
              var r, t, o;
              return r = l, t = e.id, o = n, void(0, c.jW)(o, async () => {
                let {
                  default: e
                } = await a.e("60079").then(a.bind(a, 850902));
                return l => (0, i.jsx)(e, {
                  ...l,
                  roleId: t,
                  onLeaveRole: () => u.Z.unassignGuildRoleConnection(r, t)
                })
              })
            } : void 0,
            children: [r ? (0, i.jsx)("div", {
              className: b.roleCheckmark,
              children: (0, i.jsx)(d.CheckmarkSmallIcon, {
                size: "xs",
                color: "currentColor"
              })
            }) : null, (0, i.jsx)(Z.Z, {
              guildId: l,
              role: e,
              size: 24
            }), (0, i.jsxs)("div", {
              className: b.verifiedRoleNameDescriptionContainer,
              children: [(0, i.jsx)(d.Text, {
                variant: "text-md/medium",
                color: "header-primary",
                className: b.verifiedRoleName,
                children: e.name
              }), void 0 !== e.description ? (0, i.jsx)(d.Text, {
                variant: "text-xs/normal",
                color: "header-secondary",
                className: b.verifiedRoleDescription,
                children: e.description
              }) : null]
            }), (0, i.jsx)(C.Z, {
              showUserPopout: !1,
              guildId: l,
              users: o.map(() => null),
              renderUser: (e, l, a) => (0, i.jsx)(n.Fragment, {
                children: o[a]
              }, a),
              max: 3
            })]
          }, e.id)
        })
      })]
    })]
  })
}