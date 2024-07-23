n.d(t, {
  Z: function() {
return g;
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
  c = n(404975),
  d = n(823379),
  _ = n(5192),
  E = n(785717),
  f = n(485216),
  h = n(228168),
  p = n(185923),
  m = n(689938),
  I = n(951768);
let T = e => {
  let {
emoji: t,
username: n,
sourceType: r,
sourceDetails: i
  } = e, a = ':'.concat(t.name, ':');
  switch (r) {
case h.N9.ACTIVITY:
  let s = m.Z.Messages.USER_PROFILE_REACTED_TO_ACTIVITY.format({
    username: n
  });
  return '> -# *'.concat(s, '*\n').concat(a);
case h.N9.AVATAR:
  let o = m.Z.Messages.USER_PROFILE_REACTED_TO_AVATAR.format({
    username: n
  });
  return '> -# *'.concat(o, '*\n').concat(a);
case h.N9.STATUS:
  let l = m.Z.Messages.USER_PROFILE_REACTED_TO_STATUS.format({
    username: n
  });
  return null != i ? '> -# *'.concat(l, '*').concat('\n > '.concat(i), '\n').concat(a) : '> -# *'.concat(l, '*\n').concat(a);
default:
  (0, d.vE)(r);
  }
};

function g(e) {
  let {
user: t,
channel: n,
sourceType: i,
sourceDetails: d,
isVisible: h,
isExpandable: g
  } = e, {
trackUserProfileAction: S
  } = (0, E.KZ)(), [A, N] = (0, s.Wu)([l.Z], () => [
l.Z.useReducedMotion,
l.Z.keyboardModeEnabled
  ]), v = !g || A || N ? 0 : 300, O = async e => {
if (null == e)
  return;
S({
  action: 'PRESS_REACT'
});
let r = T({
  emoji: e,
  username: _.ZP.getName(null, null == n ? void 0 : n.id, t),
  sourceType: i,
  sourceDetails: d
});
await (0, f.Z)({
  userId: t.id,
  content: r,
  location: 'UserProfileReactReplyBar'
});
  };
  return (0, r.jsxs)(c.ZP, {
className: a()(I.popover, {
  [I.visible]: h,
  [I.expandable]: g
}),
children: [
  (0, r.jsx)(o.TooltipContainer, {
    text: m.Z.Messages.USER_PROFILE_SEND_REACTION,
    shouldShow: h,
    delay: v,
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
            O(e), n && t();
          },
          pickerIntention: p.Hz.PROFILE,
          channel: n
        });
      },
      position: 'left',
      animation: o.Popout.Animation.NONE,
      align: 'top',
      children: e => (0, r.jsx)(c.zx, {
        ...e,
        className: a()(I.button, I.left),
        'aria-label': m.Z.Messages.USER_PROFILE_SEND_REACTION,
        children: (0, r.jsx)(o.ReactionIcon, {
          size: 'xs',
          className: I.icon
        })
      })
    })
  }),
  (0, r.jsx)(o.TooltipContainer, {
    text: m.Z.Messages.USER_PROFILE_REPLY,
    shouldShow: h,
    delay: v,
    'aria-label': !1,
    children: (0, r.jsx)(c.zx, {
      className: a()(I.button, I.right),
      'aria-label': m.Z.Messages.USER_PROFILE_REPLY,
      onClick: () => {
        S({
          action: 'PRESS_REPLY'
        });
      },
      children: (0, r.jsx)(o.ArrowAngleLeftUpIcon, {
        size: 'xs',
        className: I.icon
      })
    })
  })
]
  });
}