n.d(t, {
  Z: function() {
    return P
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(392711),
  o = n.n(r),
  c = n(149765),
  u = n(866442),
  d = n(442837),
  h = n(481060),
  m = n(787014),
  p = n(911969),
  E = n(933557),
  g = n(605436),
  f = n(185413),
  C = n(434404),
  _ = n(454585),
  I = n(430824),
  x = n(496675),
  T = n(594174),
  N = n(183156),
  Z = n(52736),
  S = n(700785),
  v = n(51144),
  A = n(396769),
  M = n(967128),
  R = n(318374),
  j = n(981631),
  L = n(689938),
  O = n(147673);

function P(e) {
  let {
    channel: t
  } = e, [n, s] = i.useState(!1), r = (0, E.ZP)(t, !0), P = t.guild_id, y = (0, d.e7)([I.Z], () => null != P ? I.Z.getRoles(P) : void 0), b = (0, d.e7)([T.default, I.Z], () => {
    var e;
    return T.default.getUser(null === (e = I.Z.getGuild(P)) || void 0 === e ? void 0 : e.ownerId)
  }), D = i.useMemo(() => null != P ? o()(y).sortBy(e => -e.position).filter(e => !(0, g.pM)(P, e.id)).value() : [], [P, y]), U = i.useMemo(() => o()(D).filter(e => {
    if (null == P) return !1;
    let n = S.I0({
      forceRoles: {
        [e.id]: e
      },
      context: t
    });
    return c.e$(n, j.Plq.ADMINISTRATOR) || c.e$(n, j.Plq.VIEW_CHANNEL)
  }).value(), [t, P, D]), k = (0, d.Wu)([T.default], () => {
    let e = {};
    for (let n of (null != b && (e[b.id] = b), Object.values(t.permissionOverwrites))) {
      if (n.type !== p.BN.MEMBER || null != e[n.id]) continue;
      let t = T.default.getUser(n.id);
      null != t && (e[t.id] = t)
    }
    return o()(e).filter(e => {
      var n;
      let l = S.BT({
          permission: j.Plq.ADMINISTRATOR,
          user: e,
          context: t
        }),
        i = null !== (n = t.permissionOverwrites[e.id]) && void 0 !== n ? n : S.Hn,
        s = c.e$(i.allow, j.Plq.VIEW_CHANNEL);
      return l || s
    }).value()
  }, [t, b]), w = x.Z.can(j.Plq.MANAGE_CHANNELS, t) || x.Z.can(j.Plq.MANAGE_ROLES, t);

  function H() {
    m.ZP.open(t.id)
  }
  let B = i.useCallback(() => s(!1), []);
  return (0, l.jsxs)(M.ZP, {
    channelId: t.id,
    children: [(0, l.jsx)(M.Kq, {
      locked: !0,
      channelType: t.type
    }), (0, l.jsx)(M.Ot, {
      children: L.Z.Messages.BEGINNING_CHANNEL_WELCOME.format({
        channelName: r
      })
    }), (0, l.jsx)(M.jz, {
      children: L.Z.Messages.BEGINNING_ROLE_REQUIRED_CHANNEL_DESCRIPTION.format({
        channelName: r,
        topicHook: () => _.Z.parseTopic(t.topic, !0, {
          channelId: t.id
        })
      })
    }), w ? (0, l.jsxs)("div", {
      className: O.channelSettingButtons,
      children: [(0, l.jsx)(A.Z, {
        label: L.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE,
        onClick: () => s(!0),
        icon: (0, l.jsx)(h.GroupIcon, {
          size: "xs",
          color: "currentColor"
        })
      }), (0, l.jsx)(A.Z, {
        label: L.Z.Messages.EDIT_CHANNEL,
        onClick: H,
        icon: (0, l.jsx)(h.PencilIcon, {
          size: "xs",
          color: "currentColor"
        })
      })]
    }) : null, (0, l.jsxs)("div", {
      className: O.members,
      children: [function() {
        if (1 !== k.length || U.length > 0) return (0, l.jsx)(R.Z, {
          guildId: t.guild_id,
          className: O.avatars,
          maxUsers: 5,
          users: k
        });
        let e = k[0],
          n = v.ZP.getName(e);
        return (0, l.jsxs)("div", {
          className: O.avatars,
          children: [(0, l.jsx)(h.Avatar, {
            src: e.getAvatarURL(t.guild_id, 24),
            "aria-label": n,
            size: h.AvatarSizes.SIZE_24
          }), (0, l.jsx)(h.Text, {
            tag: "span",
            className: O.singleUserName,
            variant: "text-md/normal",
            children: n
          }), "\xa0", (0, l.jsx)(h.Text, {
            tag: "span",
            variant: "text-md/normal",
            color: "text-muted",
            children: L.Z.Messages.ROLE_REQUIRED_SINGLE_USER_MESSAGE
          })]
        })
      }(), U.map((e, n) => {
        var i, s;
        let r = null !== (s = e.colorString) && void 0 !== s ? s : (0, u.Rf)(j.p6O),
          o = (null === (i = e.tags) || void 0 === i ? void 0 : i.guild_connections) !== void 0;
        return w ? (0, l.jsx)(N.Z, {
          className: a()(O.role, {
            [O.last]: n === U.length - 1
          }),
          roleName: e.name,
          roleColor: r,
          disabled: !w,
          verified: o,
          onClick: () => {
            C.Z.open(t.guild_id, j.pNK.MEMBERS), C.Z.selectRole(e.id)
          }
        }, e.id) : (0, l.jsx)(Z.Z, {
          className: a()(O.role, {
            [O.last]: n === U.length - 1
          }),
          roleName: e.name,
          roleColor: r,
          verified: o
        }, e.id)
      })]
    }), n ? (0, l.jsx)(h.Modal, {
      renderModal: e => (0, l.jsx)(f.default, {
        ...e,
        onClose: () => (B(), e.onClose()),
        channelId: t.id
      }),
      onCloseRequest: () => s(!1)
    }) : null]
  })
}