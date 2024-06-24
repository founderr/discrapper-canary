n.d(t, {
  Z: function() {
    return y
  }
});
var l = n(735250),
  i = n(470079),
  s = n(442837),
  a = n(481060),
  r = n(570140),
  o = n(933557),
  c = n(605436),
  u = n(736052),
  d = n(878857),
  h = n(621853),
  m = n(484459),
  p = n(131704),
  E = n(984933),
  g = n(496675),
  f = n(594174),
  C = n(51144),
  _ = n(7782),
  I = n(967128),
  x = n(320781),
  T = n(269203),
  N = n(753898),
  Z = n(734386),
  S = n(184279),
  v = n(438306),
  A = n(544142),
  M = n(128557),
  R = n(981631),
  j = n(176505),
  L = n(689938),
  O = n(331651);

function P(e) {
  let {
    canManageRoles: t,
    channel: n
  } = e, i = t && (0, c.Yk)(n), a = (0, s.e7)([E.ZP], () => null != n.guild_id && n === E.ZP.getDefaultChannel(n.guild_id), [n]);
  if ((0, u.Z)(n.id)) return null;
  if (n.isForumPost()) return (0, l.jsx)(x.Z, {
    channel: n
  });
  if (p.Ec.has(n.type)) return (0, l.jsx)(A.Z, {
    channel: n
  });
  else if (a) return (0, l.jsx)(M.Z, {
    channel: n
  });
  else if (i) return (0, l.jsx)(Z.Z, {
    channel: n
  });
  return (0, l.jsx)(v.Z, {
    channel: n
  })
}

function y(e) {
  var t;
  let {
    channel: n,
    showingBanner: c
  } = e, u = (0, o.ZP)(n), {
    type: p
  } = n, E = (0, s.e7)([f.default], () => n.isPrivate() ? f.default.getUser(n.getRecipientId()) : null), x = C.ZP.useUserTag(E), {
    canManageRoles: Z,
    canReadMessageHistory: v
  } = (0, s.cj)([g.Z], () => ({
    canManageRoles: g.Z.can(R.Plq.MANAGE_ROLES, n),
    canReadMessageHistory: g.Z.can(R.Plq.READ_MESSAGE_HISTORY, n)
  })), A = (0, s.e7)([h.Z], () => p === R.d4z.DM ? h.Z.getMutualGuilds(n.getRecipientId()) : null, [n, p]), {
    systemDMRedesignEnabled: M
  } = d.Z.useExperiment({
    location: "bf1a4f_1"
  }, {
    autoTrackExposure: null !== (t = n.isSystemDM()) && void 0 !== t && t
  });
  if (i.useEffect(() => {
      p === R.d4z.DM && null == A && null != E && r.Z.wait(() => (0, m.Z)(n.getRecipientId(), E.getAvatarURL(null, 80), {
        withMutualGuilds: !0
      }))
    }, [A, p, n, E]), n.isSystemDM()) return M ? (0, l.jsx)(S.Z, {
    channel: n
  }) : (0, l.jsx)(N.Z, {
    channel: n,
    children: L.Z.Messages.SYSTEM_DM_EMPTY_MESSAGE
  });
  if (p === R.d4z.DM) return (0, l.jsxs)(N.Z, {
    channel: n,
    user: E,
    children: [null != E && (0, l.jsx)(a.Heading, {
      variant: "heading-xl/medium",
      className: O.marginBottom20,
      children: x
    }), L.Z.Messages.BEGINNING_DM.format({
      username: u
    }), (0, l.jsx)(_.Z, {
      userId: n.getRecipientId(),
      channel: n,
      showingBanner: c
    })]
  });
  if (n.isMultiUserDM()) return n.isManaged() ? (0, l.jsxs)(I.ZP, {
    channelId: n.id,
    children: [(0, l.jsx)(I.Ot, {
      children: L.Z.Messages.BEGINNING_CHANNEL_WELCOME.format({
        channelName: u
      })
    }), (0, l.jsx)(I.jz, {
      children: L.Z.Messages.BEGINNING_GROUP_DM_MANAGED
    })]
  }) : n.hasFlag(j.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL) ? (0, l.jsx)(T.Z, {
    channel: n
  }) : (0, l.jsx)(N.Z, {
    channel: n,
    children: L.Z.Messages.BEGINNING_GROUP_DM.format({
      name: u
    })
  });
  return v ? (0, l.jsx)(P, {
    channel: n,
    canManageRoles: Z
  }) : (0, l.jsx)(I.ZP, {
    channelId: n.id,
    children: (0, l.jsx)(I.jz, {
      children: L.Z.Messages.BEGINNING_CHANNEL_NO_HISTORY.format({
        channelName: u
      })
    })
  })
}