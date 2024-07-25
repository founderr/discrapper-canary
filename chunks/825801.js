n.d(t, {
  Z: function() {
return A;
  }
}), n(47120);
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(442837),
  o = n(481060),
  l = n(607070),
  u = n(907040),
  c = n(314897),
  d = n(404975),
  _ = n(823379),
  E = n(5192),
  f = n(785717),
  h = n(505737),
  p = n(485216),
  m = n(228168),
  I = n(185923),
  T = n(689938),
  g = n(328849);
let S = e => {
  let {
emoji: t,
username: n,
sourceType: r,
sourceDetails: i
  } = e, a = ':'.concat(t.name, ':');
  switch (r) {
case m.N9.ACTIVITY:
  let s = T.Z.Messages.USER_PROFILE_REACTED_TO_ACTIVITY.format({
    username: n
  });
  return '> -# *'.concat(s, '*\n').concat(a);
case m.N9.AVATAR:
  let o = T.Z.Messages.USER_PROFILE_REACTED_TO_AVATAR.format({
    username: n
  });
  return '> -# *'.concat(o, '*\n').concat(a);
case m.N9.STATUS:
  let l = T.Z.Messages.USER_PROFILE_REACTED_TO_STATUS.format({
    username: n
  });
  return null != i ? '> -# *'.concat(l, '*').concat('\n > '.concat(i), '\n').concat(a) : '> -# *'.concat(l, '*\n').concat(a);
default:
  (0, _.vE)(r);
  }
};

function A(e) {
  let {
user: t,
channel: n,
sourceType: i,
sourceDetails: _,
isVisible: m,
isExpandable: A,
onReply: N
  } = e, {
trackUserProfileAction: v
  } = (0, f.KZ)(), O = (0, s.e7)([c.default], () => c.default.getId() === t.id), R = (0, h.Z)(t.id), [C, y] = (0, s.Wu)([l.Z], () => [
l.Z.useReducedMotion,
l.Z.keyboardModeEnabled
  ]);
  if (t.bot || O || !R)
return null;
  let D = !A || C || y ? 0 : 300,
L = async e => {
  if (null == e)
    return;
  v({
    action: 'PRESS_REACT'
  });
  let r = S({
    emoji: e,
    username: E.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, t),
    sourceType: i,
    sourceDetails: _
  });
  await (0, p.Z)({
    userId: t.id,
    content: r,
    location: 'UserProfileReactReplyBar'
  });
};
  return (0, r.jsxs)(d.ZP, {
className: a()(g.popover, {
  [g.visible]: m,
  [g.expandable]: A
}),
children: [
  (0, r.jsx)(o.TooltipContainer, {
    text: T.Z.Messages.USER_PROFILE_SEND_REACTION,
    shouldShow: m,
    delay: D,
    'aria-label': !1,
    children: (0, r.jsx)(o.Popout, {
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, r.jsx)(u.Z, {
          guildId: null == n ? void 0 : n.guild_id,
          closePopout: t,
          onSelectEmoji: (e, n) => {
            L(e), n && t();
          },
          pickerIntention: I.Hz.PROFILE,
          channel: n
        });
      },
      position: 'left',
      animation: o.Popout.Animation.NONE,
      align: 'top',
      children: e => (0, r.jsx)(d.zx, {
        ...e,
        className: a()(g.button, g.left),
        'aria-label': T.Z.Messages.USER_PROFILE_SEND_REACTION,
        children: (0, r.jsx)(o.ReactionIcon, {
          size: 'xs',
          className: g.icon
        })
      })
    })
  }),
  (0, r.jsx)(o.TooltipContainer, {
    text: T.Z.Messages.USER_PROFILE_REPLY,
    shouldShow: m,
    delay: D,
    'aria-label': !1,
    children: (0, r.jsx)(d.zx, {
      onClick: () => null == N ? void 0 : N(!0),
      className: a()(g.button, g.right),
      'aria-label': T.Z.Messages.USER_PROFILE_REPLY,
      children: (0, r.jsx)(o.ArrowAngleLeftUpIcon, {
        size: 'xs',
        className: g.icon
      })
    })
  })
]
  });
}