n.d(t, {
  Z: function() {
return N;
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
  m = n(485216),
  I = n(228168),
  T = n(185923),
  g = n(689938),
  S = n(328849);
let A = e => {
  let {
emoji: t,
username: n,
sourceType: r,
sourceDetails: i
  } = e, a = ':'.concat(t.name, ':');
  switch (r) {
case I.N9.ACTIVITY:
  let s = g.Z.Messages.USER_PROFILE_REACTED_TO_ACTIVITY.format({
    username: n
  });
  return '> -# *'.concat(s, '*\n').concat(a);
case I.N9.AVATAR:
  let o = g.Z.Messages.USER_PROFILE_REACTED_TO_AVATAR.format({
    username: n
  });
  return '> -# *'.concat(o, '*\n').concat(a);
case I.N9.STATUS:
  let l = g.Z.Messages.USER_PROFILE_REACTED_TO_STATUS.format({
    username: n
  });
  return null != i ? '> -# *'.concat(l, '*').concat('\n > '.concat(i), '\n').concat(a) : '> -# *'.concat(l, '*\n').concat(a);
default:
  (0, E.vE)(r);
  }
};

function N(e) {
  let {
user: t,
channel: n,
sourceType: i,
sourceDetails: E,
isVisible: N,
isExpandable: v,
onReply: O
  } = e, {
trackUserProfileAction: R
  } = (0, h.KZ)(), C = (0, s.e7)([d.default], () => d.default.getId() === t.id), y = (0, p.Z)(t.id), [D, L] = (0, s.Wu)([l.Z], () => [
l.Z.useReducedMotion,
l.Z.keyboardModeEnabled
  ]);
  if (t.bot || C || !y)
return null;
  let b = !v || D || L ? 0 : 300,
M = async e => {
  var n;
  if (null == e)
    return;
  R({
    action: 'PRESS_REACT'
  });
  let r = A({
    emoji: e,
    username: null !== (n = _.Z.getNickname(t.id)) && void 0 !== n ? n : f.ZP.getName(t),
    sourceType: i,
    sourceDetails: E
  });
  await (0, m.Z)({
    userId: t.id,
    content: r,
    location: 'UserProfileReactReplyBar',
    openChannel: !1
  });
};
  return (0, r.jsxs)(u.ZP, {
className: a()(S.popover, {
  [S.visible]: N,
  [S.expandable]: v,
  [S.statusPopover]: i === I.N9.STATUS,
  [S.avatarPopover]: i === I.N9.AVATAR
}),
children: [
  (0, r.jsx)(o.TooltipContainer, {
    text: g.Z.Messages.USER_PROFILE_SEND_REACTION,
    shouldShow: N,
    delay: b,
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
            M(e), n && t();
          },
          pickerIntention: T.Hz.PROFILE,
          channel: n
        });
      },
      position: 'left',
      animation: o.Popout.Animation.NONE,
      align: 'top',
      children: e => (0, r.jsx)(u.zx, {
        ...e,
        className: a()(S.button, S.left),
        'aria-label': g.Z.Messages.USER_PROFILE_SEND_REACTION,
        children: (0, r.jsx)(o.ReactionIcon, {
          size: 'xs',
          className: S.icon
        })
      })
    })
  }),
  (0, r.jsx)(o.TooltipContainer, {
    text: g.Z.Messages.USER_PROFILE_REPLY,
    shouldShow: N,
    delay: b,
    'aria-label': !1,
    children: (0, r.jsx)(u.zx, {
      onClick: () => null == O ? void 0 : O(i, E),
      className: a()(S.button, S.right),
      'aria-label': g.Z.Messages.USER_PROFILE_REPLY,
      children: (0, r.jsx)(o.ArrowAngleLeftUpIcon, {
        size: 'xs',
        className: S.icon
      })
    })
  })
]
  });
}