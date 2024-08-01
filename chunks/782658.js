n.d(t, {
  Z: function() {
return O;
  }
});
var i = n(735250),
  s = n(470079),
  a = n(442837),
  r = n(447543),
  l = n(410575),
  o = n(906732),
  c = n(924301),
  u = n(11868),
  d = n(413605),
  _ = n(451603),
  E = n(885714),
  I = n(314897),
  m = n(430824),
  T = n(701190),
  h = n(610699),
  N = n(313876),
  f = n(778333),
  C = n(949981),
  p = n(680668),
  g = n(143708),
  S = n(358595),
  A = n(563917),
  M = n(135845),
  R = n(981631);

function O(e) {
  let {
code: t,
author: n,
getAcceptInviteContext: O
  } = e, {
invite: x,
inviteError: v
  } = (0, a.cj)([T.Z], () => ({
invite: T.Z.getInvite(t),
inviteError: T.Z.getInviteError(t)
  }), [t]);
  s.useEffect(() => {
null == x && r.Z.resolveInvite(t);
  }, [t]);
  let Z = null != x ? x : {
  state: R.r2o.RESOLVING,
  code: ''
},
{
  analyticsLocations: L
} = (0, o.ZP)(),
P = (0, a.e7)([m.Z], () => (null == x ? void 0 : x.guild) != null ? m.Z.getGuild(x.guild.id) : null, [x]),
D = (0, a.e7)([I.default], () => I.default.getId()),
b = (0, a.e7)([c.ZP], () => {
  var e;
  return c.ZP.getGuildScheduledEvent(null === (e = Z.guild_scheduled_event) || void 0 === e ? void 0 : e.id);
}, [Z]),
j = () => {
  null != Z.channel && r.Z.transitionToInviteSync(Z);
},
U = () => {
  (0, _.yU)() ? (0, E.Z)({
    analyticsSource: {
      page: R.ZY5.INVITE_EMBED
    },
    analyticsLocation: {
      page: R.ZY5.INVITE_EMBED,
      section: R.jXE.GUILD_CAP_UPSELL_MODAL
    },
    analyticsLocations: L
  }) : r.Z.acceptInviteAndTransitionToInviteChannel({
    inviteKey: t,
    context: O('Invite Button Embed')
  });
},
y = (0, i.jsx)(p.Z, {
  onTransitionToInviteChannel: j,
  onAcceptInstantInvite: U,
  currentUserId: D,
  guild: P,
  invite: Z,
  author: n
});
  switch (Z.state) {
case R.r2o.RESOLVING:
  y = (0, i.jsx)(S.Z, {});
  break;
case R.r2o.EXPIRED:
case R.r2o.BANNED:
  y = (0, i.jsx)(g.Z, {
    banned: Z.state === R.r2o.BANNED,
    author: n
  });
  break;
case R.r2o.ERROR:
  y = (0, i.jsx)(N.Z, {
    author: n,
    inviteError: v
  });
  break;
default:
  switch ((0, d.VR)(Z)) {
    case d.wx.GROUP_DM:
      y = (0, i.jsx)(C.Z, {
        onTransitionToInviteChannel: j,
        onAcceptInstantInvite: U,
        currentUserId: D,
        invite: Z,
        author: n
      });
      break;
    case d.wx.FRIEND:
      y = (0, i.jsx)(f.Z, {
        invite: Z,
        author: n,
        getAcceptInviteContext: O
      });
      break;
    default:
      if ((0, d.TY)(Z)) {
        y = (0, i.jsx)(M.Z, {
          onTransitionToInviteChannel: j,
          onAcceptInstantInvite: U,
          currentUserId: D,
          guild: P,
          invite: Z
        });
        break;
      }
      if ((0, d.Tx)(Z)) {
        y = (0, i.jsx)(u.ZP, {
          guildScheduledEvent: b,
          guild: Z.guild,
          channel: Z.channel,
          isMember: null != P,
          onAcceptInstantInvite: U,
          onTransitionToInviteChannel: j
        });
        break;
      }
      if ((0, d.$P)(Z)) {
        y = (0, i.jsx)(A.Z, {
          stageInstance: Z.stage_instance,
          guild: Z.guild,
          isMember: null != P,
          onTransitionToInviteChannel: j,
          onAcceptInstantInvite: U
        });
        break;
      }
      (0, d.P1)(Z) && (y = (0, i.jsx)(h.Z, {
        invite: Z,
        getAcceptInviteContext: O
      }));
  }
  }
  return (0, i.jsx)(l.Z, {
section: R.jXE.INVITE_LINK,
children: y
  });
}