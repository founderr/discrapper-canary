n.d(t, {
  Z: function() {
return O;
  }
}), n(47120);
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(442837),
  o = n(481060),
  l = n(607070),
  u = n(951394),
  c = n(907040),
  d = n(314897),
  _ = n(699516),
  E = n(823379),
  f = n(51144),
  h = n(785717),
  p = n(505737),
  m = n(285050),
  I = n(448520),
  T = n(485216),
  g = n(228168),
  S = n(185923),
  A = n(689938),
  N = n(328849);
let v = e => {
  let {
emoji: t,
username: n,
sourceType: r,
sourceDetails: i
  } = e, a = ':'.concat(t.name, ':');
  switch (r) {
case g.N9.ACTIVITY:
  let s = A.Z.Messages.USER_PROFILE_REACTED_TO_ACTIVITY.format({
    username: n
  });
  return '> -# *'.concat(s, '*\n').concat(a);
case g.N9.AVATAR:
  let o = A.Z.Messages.USER_PROFILE_REACTED_TO_AVATAR.format({
    username: n
  });
  return '> -# *'.concat(o, '*\n').concat(a);
case g.N9.STATUS:
  let l = A.Z.Messages.USER_PROFILE_REACTED_TO_STATUS.format({
    username: n
  });
  return null != i ? '> -# *'.concat(l, '*').concat('\n > '.concat(i), '\n').concat(a) : '> -# *'.concat(l, '*\n').concat(a);
default:
  (0, E.vE)(r);
  }
};

function O(e) {
  let {
user: t,
channel: n,
sourceType: i,
sourceDetails: E,
isVisible: O,
isExpandable: R,
onReply: C
  } = e, {
trackUserProfileAction: y
  } = (0, h.KZ)(), {
notifyReactSent: D
  } = (0, m.e)(), {
sendReact: L,
pressReact: b,
pressReply: M
  } = (0, I.D)(i), P = (0, s.e7)([d.default], () => d.default.getId() === t.id), U = (0, p.Z)(t.id), [w, x] = (0, s.Wu)([l.Z], () => [
l.Z.useReducedMotion,
l.Z.keyboardModeEnabled
  ]);
  if (t.bot || P || !U)
return null;
  let G = !R || w || x ? 0 : 300,
k = async e => {
  var n;
  if (null == e)
    return;
  y({
    action: L
  });
  let r = v({
    emoji: e,
    username: null !== (n = _.Z.getNickname(t.id)) && void 0 !== n ? n : f.ZP.getName(t),
    sourceType: i,
    sourceDetails: E
  });
  await (0, T.Z)({
    userId: t.id,
    content: r,
    location: 'UserProfileReactReplyBar',
    openChannel: !1,
    whenReady: !1
  }), D();
};
  return (0, r.jsxs)(u.ZP, {
className: a()(N.popover, {
  [N.visible]: O,
  [N.expandable]: R,
  [N.statusPopover]: i === g.N9.STATUS,
  [N.avatarPopover]: i === g.N9.AVATAR
}),
children: [
  (0, r.jsx)(o.TooltipContainer, {
    text: A.Z.Messages.USER_PROFILE_SEND_REACTION,
    shouldShow: O,
    delay: G,
    'aria-label': !1,
    children: (0, r.jsx)(o.Popout, {
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, r.jsx)(c.Z, {
          guildId: null == n ? void 0 : n.guild_id,
          closePopout: t,
          onSelectEmoji: (e, n) => {
            k(e), n && t();
          },
          pickerIntention: S.Hz.PROFILE,
          channel: n
        });
      },
      position: 'left',
      animation: o.Popout.Animation.NONE,
      align: 'top',
      children: e => (0, r.jsx)(u.zx, {
        ...e,
        onClick: t => {
          y({
            action: b
          }), e.onClick(t);
        },
        className: a()(N.button, N.left),
        'aria-label': A.Z.Messages.USER_PROFILE_SEND_REACTION,
        children: (0, r.jsx)(o.ReactionIcon, {
          size: 'xs',
          className: N.icon
        })
      })
    })
  }),
  (0, r.jsx)(o.TooltipContainer, {
    text: A.Z.Messages.USER_PROFILE_REPLY,
    shouldShow: O,
    delay: G,
    'aria-label': !1,
    children: (0, r.jsx)(u.zx, {
      onClick: () => {
        y({
          action: M
        }), null == C || C(i, E);
      },
      className: a()(N.button, N.right),
      'aria-label': A.Z.Messages.USER_PROFILE_REPLY,
      children: (0, r.jsx)(o.ArrowAngleLeftUpIcon, {
        size: 'xs',
        className: N.icon
      })
    })
  })
]
  });
}