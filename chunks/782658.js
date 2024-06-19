n.d(t, {
  Z: function() {
    return M
  }
});
var s = n(735250),
  i = n(470079),
  l = n(442837),
  a = n(447543),
  r = n(410575),
  o = n(906732),
  c = n(924301),
  u = n(11868),
  d = n(413605),
  E = n(451603),
  _ = n(885714),
  I = n(314897),
  T = n(430824),
  N = n(701190),
  m = n(610699),
  h = n(313876),
  C = n(778333),
  S = n(949981),
  A = n(680668),
  p = n(143708),
  g = n(358595),
  f = n(563917),
  O = n(135845),
  R = n(981631);

function M(e) {
  let {
    code: t,
    author: n,
    getAcceptInviteContext: M
  } = e, {
    invite: x,
    inviteError: v
  } = (0, l.cj)([N.Z], () => ({
    invite: N.Z.getInvite(t),
    inviteError: N.Z.getInviteError(t)
  }), [t]);
  i.useEffect(() => {
    null == x && a.Z.resolveInvite(t)
  }, [t]);
  let L = null != x ? x : {
      state: R.r2o.RESOLVING,
      code: ""
    },
    {
      analyticsLocations: Z
    } = (0, o.ZP)(),
    P = (0, l.e7)([T.Z], () => (null == x ? void 0 : x.guild) != null ? T.Z.getGuild(x.guild.id) : null, [x]),
    D = (0, l.e7)([I.default], () => I.default.getId()),
    j = (0, l.e7)([c.ZP], () => {
      var e;
      return c.ZP.getGuildScheduledEvent(null === (e = L.guild_scheduled_event) || void 0 === e ? void 0 : e.id)
    }, [L]),
    U = () => {
      null != L.channel && a.Z.transitionToInviteSync(L)
    },
    b = () => {
      (0, E.yU)() ? (0, _.Z)({
        analyticsSource: {
          page: R.ZY5.INVITE_EMBED
        },
        analyticsLocation: {
          page: R.ZY5.INVITE_EMBED,
          section: R.jXE.GUILD_CAP_UPSELL_MODAL
        },
        analyticsLocations: Z
      }) : a.Z.acceptInviteAndTransitionToInviteChannel({
        inviteKey: t,
        context: M("Invite Button Embed")
      })
    },
    y = (0, s.jsx)(A.Z, {
      onTransitionToInviteChannel: U,
      onAcceptInstantInvite: b,
      currentUserId: D,
      guild: P,
      invite: L,
      author: n
    });
  switch (L.state) {
    case R.r2o.RESOLVING:
      y = (0, s.jsx)(g.Z, {});
      break;
    case R.r2o.EXPIRED:
    case R.r2o.BANNED:
      y = (0, s.jsx)(p.Z, {
        banned: L.state === R.r2o.BANNED,
        author: n
      });
      break;
    case R.r2o.ERROR:
      y = (0, s.jsx)(h.Z, {
        author: n,
        inviteError: v
      });
      break;
    default:
      switch ((0, d.VR)(L)) {
        case d.wx.GROUP_DM:
          y = (0, s.jsx)(S.Z, {
            onTransitionToInviteChannel: U,
            onAcceptInstantInvite: b,
            currentUserId: D,
            invite: L,
            author: n
          });
          break;
        case d.wx.FRIEND:
          y = (0, s.jsx)(C.Z, {
            invite: L,
            author: n,
            getAcceptInviteContext: M
          });
          break;
        default:
          if ((0, d.TY)(L)) {
            y = (0, s.jsx)(O.Z, {
              onTransitionToInviteChannel: U,
              onAcceptInstantInvite: b,
              currentUserId: D,
              guild: P,
              invite: L
            });
            break
          }
          if ((0, d.Tx)(L)) {
            y = (0, s.jsx)(u.ZP, {
              guildScheduledEvent: j,
              guild: L.guild,
              channel: L.channel,
              isMember: null != P,
              onAcceptInstantInvite: b,
              onTransitionToInviteChannel: U
            });
            break
          }
          if ((0, d.$P)(L)) {
            y = (0, s.jsx)(f.Z, {
              stageInstance: L.stage_instance,
              guild: L.guild,
              isMember: null != P,
              onTransitionToInviteChannel: U,
              onAcceptInstantInvite: b
            });
            break
          }(0, d.P1)(L) && (y = (0, s.jsx)(m.Z, {
            invite: L,
            getAcceptInviteContext: M
          }))
      }
  }
  return (0, s.jsx)(r.Z, {
    section: R.jXE.INVITE_LINK,
    children: y
  })
}