n(47120);
var i = n(735250),
  a = n(470079),
  l = n(120356),
  s = n.n(l),
  r = n(954955),
  o = n.n(r),
  c = n(442837),
  d = n(704215),
  u = n(481060),
  h = n(607070),
  p = n(110630),
  m = n(377171),
  _ = n(706140),
  f = n(346610),
  E = n(868643),
  C = n(223606),
  g = n(188597),
  I = n(41776),
  x = n(222677),
  T = n(995774),
  N = n(931651),
  v = n(280845),
  S = n(768943),
  Z = n(121254),
  A = n(742989),
  M = n(665906),
  b = n(695346),
  R = n(314897),
  j = n(323873),
  L = n(271383),
  P = n(430824),
  O = n(607744),
  y = n(496675),
  D = n(448239),
  k = n(404975),
  U = n(626135),
  w = n(572004),
  B = n(970257),
  H = n(418476),
  G = n(151007),
  V = n(432376),
  F = n(996861),
  W = n(603490),
  z = n(225138),
  Y = n(717680),
  K = n(981631),
  q = n(921944),
  X = n(689938),
  Q = n(838764);

function J(e) {
  e.stopPropagation();
}

function $(e) {
  let {
message: t,
channel: n,
canReport: i,
onClose: a,
updatePosition: l
  } = e;
  return (0, z.useMessageMenu)({
message: t,
channel: n,
textSelection: '',
favoriteableType: null,
favoriteableId: null,
favoriteableName: null,
itemHref: void 0,
itemSrc: void 0,
itemSafeSrc: void 0,
itemTextContent: void 0,
canReport: i,
onHeightUpdate: l,
onClose: a,
navId: 'message-actions',
ariaLabel: X.Z.Messages.MESSAGE_UTILITIES_A11Y_LABEL
  });
}

function ee(e) {
  let {
label: t,
ariaLabel: n,
tooltipText: a,
tooltipColor: l,
icon: s,
iconProps: r,
channel: o,
message: c,
onClick: d,
onTooltipShow: h,
onTooltipHide: p,
key: _,
disabled: f,
dangerous: E,
separator: C,
sparkle: g,
showNewBadge: I,
...x
  } = e;
  return (0, i.jsx)(u.Tooltip, {
text: null != a ? a : t,
color: null != l ? l : u.TooltipColors.PRIMARY,
'aria-label': t,
onTooltipShow: h,
onTooltipHide: p,
hideOnClick: !0,
tooltipClassName: Q.tooltip,
children: e => {
  let {
    onMouseEnter: a,
    onMouseLeave: l,
    onClick: h
  } = e;
  return (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsxs)(k.zx, {
        onMouseEnter: a,
        onMouseLeave: l,
        onClick: e => {
          null == h || h(), d(o, c, e);
        },
        'aria-label': null != n ? n : t,
        disabled: f,
        dangerous: E,
        ...x,
        children: [
          (0, i.jsx)(s, {
            className: Q.icon,
            color: 'currentColor',
            ...r
          }),
          g && (0, i.jsx)(u.LottieSparkle, {}),
          I && (0, i.jsx)(u.TextBadge, {
            text: X.Z.Messages.NEW,
            color: m.Z.BG_BRAND,
            className: Q.newBadge
          })
        ]
      }),
      C && (0, i.jsx)(k.Z0, {})
    ]
  });
}
  }, _);
}

function et(e) {
  let {
channel: t,
message: n,
canCopy: l,
canPin: s,
canDelete: r,
canReport: o,
canEdit: m,
canPublish: C,
canReact: g,
canConfigureJoin: x,
canReply: T,
canStartThread: N,
canViewThread: j,
canForward: k,
isExpanded: z,
showMoreUtilities: Q,
showEmojiPicker: J,
showMessageRemindersActions: et,
isMessageReminder: en,
showMessageBookmarksActions: ea,
isMessageBookmark: el,
setPopout: es,
hasDeveloperMode: er,
isGuildInviteReminder: eo,
isFocused: ec
  } = function(e) {
let {
  channel: t,
  message: n,
  showEmojiPicker: i,
  showEmojiBurstPicker: a,
  showMoreUtilities: l,
  setPopout: s,
  isFocused: r
} = e, {
  author: o
} = n, d = (0, c.e7)([P.Z], () => P.Z.getGuild(t.guild_id), [t.guild_id]), u = (0, c.e7)([R.default], () => R.default.getId()), m = (0, M.$R)(t), _ = (0, M.Gu)(t), C = b.nc.useSetting(), g = b.Sb.useSetting(), x = (0, c.e7)([O.Z], () => null == t.guild_id || O.Z.canChatInGuild(t.guild_id), [t]), {
  canManageMessages: T,
  canAddNewReactions: N
} = (0, c.cj)([y.Z], () => ({
  canAddNewReactions: x && y.Z.can(K.Plq.ADD_REACTIONS, t),
  canManageMessages: y.Z.can(K.Plq.MANAGE_MESSAGES, t)
}), [
  t,
  x
]), j = (0, v.U)(t, n), D = (0, M.NE)(t, n), k = (0, M.Ek)(n), U = (0, c.e7)([I.Z], () => null != t.guild_id && I.Z.isLurking(t.guild_id), [t]), F = (0, c.e7)([L.ZP], () => null != t.guild_id && L.ZP.isCurrentUserGuest(t.guild_id), [t]), W = o.id === u, z = (T || n.canDeleteOwnMessage(u)) && m && !K.V$x.UNDELETABLE.has(n.type);
n.type === K.uaV.AUTO_MODERATION_ACTION && (z = z && T);
let q = (0, B.a4)(n),
  X = (0, G.Z)(n, t, T),
  Q = !t.isSystemDM() && (0, H.Z)(n, u) && m && !_,
  {
    disableReactionCreates: J
  } = (0, V.Z)({
    channel: t,
    canChat: x,
    renderReactions: C,
    canAddNewReactions: N,
    isLurking: U,
    isGuest: F,
    isActiveChannelOrUnarchivableThread: m
  }),
  $ = t.type === K.d4z.GUILD_ANNOUNCEMENT && null != d && d.hasFeature(K.oNc.NEWS) && (W || T) && (0, p.Z)(n),
  ee = t.getGuildId(),
  et = null != ee && (n.type === K.uaV.USER_JOIN || n.type === K.uaV.GUILD_INVITE_REMINDER) && y.Z.canWithPartialContext(K.Plq.MANAGE_GUILD, {
    guildId: ee
  }),
  {
    canForwardMessages: en
  } = f.w.useExperiment({
    location: 'useMessageUtilitiesProps'
  }, {
    autoTrackExposure: !1
  }),
  ei = (0, E.a)(n),
  {
    showReminders: ea
  } = A.Z.useExperiment({
    location: 'message_utilities'
  }, {
    autoTrackExposure: !1
  }),
  {
    enabled: el
  } = Z.Z.useExperiment({
    location: 'message_utilities'
  }, {
    autoTrackExposure: !1
  }),
  [es, er] = (0, c.Wu)([S.Z], () => [
    S.Z.isMessageReminder(n.id),
    S.Z.isMessageBookmarked(n.id)
  ]),
  eo = (0, Y.Z)(),
  ec = (0, c.e7)([h.Z], () => h.Z.keyboardModeEnabled);
return {
  channel: t,
  message: n,
  canPin: X,
  canEdit: Q,
  canDelete: z,
  canReport: q,
  canReply: j,
  canStartThread: D,
  canViewThread: k,
  canForward: en && ei,
  canCopy: w.wS,
  hasDeveloperMode: g,
  canReact: !J && C,
  canPublish: $,
  canConfigureJoin: et,
  isExpanded: eo && !ec && !i && !a && !l,
  showEmojiPicker: i,
  showEmojiBurstPicker: a,
  showMoreUtilities: l,
  showMessageRemindersActions: ea,
  isMessageReminder: es,
  showMessageBookmarksActions: el,
  isMessageBookmark: er,
  setPopout: s,
  isFocused: r,
  isGuildInviteReminder: n.type === K.uaV.GUILD_INVITE_REMINDER
};
  }(e), ed = a.useCallback(() => {
!Q && U.default.track(K.rMx.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
  message_id: n.id,
  channel: n.channel_id
}), es({
  moreUtilities: !Q
});
  }, [
Q,
es,
n
  ]), eu = a.useCallback(() => {
es({
  emojiPicker: !J
});
  }, [
J,
es
  ]), eh = (0, M.$R)(t), ep = n.hasFlag(K.iLy.CROSSPOSTED), [em, e_] = (0, _.c)(k ? [d.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE] : []), ef = em === d.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE, [eE, eC] = a.useState(!1), eg = a.useCallback(() => {
eC(!0);
  }, []), eI = a.useCallback(() => {
eC(!1);
  }, []), ex = a.useCallback((e, t) => {
e_(q.L.TAKE_ACTION), (0, F.ts)(e, t);
  }, [e_]);
  return (0, i.jsxs)(i.Fragment, {
children: [
  z ? (0, i.jsxs)(i.Fragment, {
    children: [
      l && er ? ee({
        key: 'copy-id',
        channel: t,
        message: n,
        label: X.Z.Messages.COPY_ID_MESSAGE,
        icon: u.IdIcon,
        onClick: F.F4
      }) : null,
      l && !eo ? ee({
        key: 'copy-link',
        channel: t,
        message: n,
        label: X.Z.Messages.COPY_LINK,
        icon: u.LinkIcon,
        onClick: F.fB
      }) : null,
      x ? ee({
        key: 'configure',
        channel: t,
        message: n,
        label: X.Z.Messages.CONFIGURE,
        icon: u.CircleQuestionIcon,
        onClick: F.zW
      }) : null,
      et ? ee({
        key: 'mark-reminder',
        channel: t,
        message: n,
        label: en ? X.Z.Messages.MESSAGE_REMINDERS_MARK_AS_DONE : X.Z.Messages.MESSAGE_REMINDERS_MARK_AS_TODO,
        icon: en ? (0, u.makeIconCompat)(D.Z) : u.ListBulletsIcon,
        onClick: en ? F.l9 : F.W1
      }) : null,
      eh ? ee({
        key: 'mark-unread',
        channel: t,
        message: n,
        label: X.Z.Messages.MARK_UNREAD,
        icon: u.ChatMarkUnreadIcon,
        onClick: F.B8
      }) : null,
      ea ? ee({
        key: 'bookmark',
        channel: t,
        message: n,
        label: el ? X.Z.Messages.MESSAGE_BOOKMARKS_REMOVE_BOOKMARK : X.Z.Messages.MESSAGE_BOOKMARKS_BOOKMARK,
        icon: u.InboxIcon,
        onClick: el ? F.eM : F.dF
      }) : null,
      s ? ee({
        key: 'pin',
        channel: t,
        message: n,
        label: n.pinned ? X.Z.Messages.UNPIN_MESSAGE : X.Z.Messages.PIN_MESSAGE,
        icon: u.PinIcon,
        onClick: F.rY
      }) : null,
      N && k ? ee({
        key: 'thread',
        channel: t,
        message: n,
        label: X.Z.Messages.CREATE_THREAD,
        icon: u.ThreadIcon,
        onClick: F.gK
      }) : null,
      T && m ? ee({
        key: 'reply-self',
        channel: t,
        message: n,
        label: X.Z.Messages.MESSAGE_ACTION_REPLY,
        icon: u.ArrowAngleLeftUpIcon,
        onClick: F.HH
      }) : null
    ]
  }) : null,
  g && !eo ? (0, i.jsx)(W.Z, {
    channel: t,
    message: n,
    togglePopout: eu,
    renderEmojiPicker: ei,
    shouldShow: J,
    isFocused: ec
  }) : null,
  T && !m ? ee({
    key: 'reply-other',
    channel: t,
    message: n,
    label: X.Z.Messages.MESSAGE_ACTION_REPLY,
    icon: u.ArrowAngleLeftUpIcon,
    onClick: F.HH
  }) : null,
  m ? ee({
    key: 'edit',
    channel: t,
    message: n,
    label: X.Z.Messages.EDIT,
    icon: u.PencilIcon,
    onClick: F.Hd
  }) : null,
  k ? ee({
    key: 'forward',
    channel: t,
    message: n,
    label: X.Z.Messages.MESSAGE_ACTION_FORWARD,
    icon: u.ChatArrowRightIcon,
    onClick: ex,
    onTooltipShow: eg,
    onTooltipHide: eI,
    showNewBadge: !eE && ef
  }) : null,
  N && !k ? ee({
    key: 'thread',
    channel: t,
    message: n,
    label: X.Z.Messages.CREATE_THREAD,
    icon: u.ThreadIcon,
    onClick: F.gK
  }) : null,
  !N && j ? ee({
    key: 'view-thread',
    channel: t,
    message: n,
    label: X.Z.Messages.VIEW_THREAD,
    icon: u.ThreadIcon,
    onClick: F.qe
  }) : null,
  C ? ee({
    key: 'publish',
    channel: t,
    message: n,
    label: ep ? X.Z.Messages.NEWS_CHANNEL_PUBLISHED : X.Z.Messages.NEWS_CHANNEL_PUBLISH,
    icon: u.AnnouncementsIcon,
    onClick: F.Xl,
    disabled: ep
  }) : null,
  r && (eo || z) ? ee({
    key: 'delete',
    channel: t,
    message: n,
    label: X.Z.Messages.DELETE,
    icon: u.TrashIcon,
    onClick: F.$Z,
    dangerous: !0,
    separator: !z
  }) : null,
  z && r ? null : (0, i.jsx)(u.Popout, {
    renderPopout: e => {
      let {
        updatePosition: a,
        closePopout: l
      } = e;
      return (0, i.jsx)($, {
        channel: t,
        message: n,
        canReport: o,
        onClose: l,
        updatePosition: a
      });
    },
    shouldShow: Q,
    onRequestClose: ed,
    position: 'left',
    align: 'top',
    animation: u.Popout.Animation.NONE,
    children: (e, i) => {
      let {
        onClick: a,
        ...l
      } = e, {
        isShown: s
      } = i;
      return ee({
        key: 'more',
        label: X.Z.Messages.MORE,
        icon: u.MoreHorizontalIcon,
        channel: t,
        message: n,
        selected: s,
        onClick: ed,
        ...l
      });
    }
  })
]
  });
}

function en(e) {
  let {
channel: t,
message: n
  } = e, a = (0, c.e7)([C.Z], () => null != C.Z.getMessage(n.id), [n.id]), l = null == n.interaction || null != n.interactionData && (0, g.$s)(n.interactionData);
  return (0, i.jsxs)(i.Fragment, {
children: [
  !a && l && ee({
    key: 'retry',
    label: X.Z.Messages.RETRY,
    icon: u.RetryIcon,
    channel: t,
    message: n,
    onClick: F.mG
  }),
  ee({
    key: 'delete-usent',
    label: X.Z.Messages.DELETE,
    icon: u.TrashIcon,
    channel: t,
    message: n,
    onClick: F.$Z
  })
]
  });
}

function ei(e, t, n) {
  let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
l = {
  openPopoutType: 'message_reaction_emoji_picker',
  ...a && {
    openPopoutType: 'message_super_reaction_emoji_picker',
    page: null != e.getGuildId() ? K.ZY5.GUILD_CHANNEL : K.ZY5.DM_CHANNEL,
    section: (0, T.s4)(e),
    object: K.qAy.EMOJI_REACTION_PICKER_POPOUT
  }
};
  return (0, i.jsx)(N.$, {
channel: e,
closePopout: n,
onSelectEmoji: (i, a, l) => {
  ! function(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    null != e && (0, x.rU)(t.id, n.id, (0, T.g1)(e), void 0, {
      burst: i
    });
  }(i, e, t, l), a && (l ? o()(n, 150)() : n());
},
analyticsOverride: l,
messageId: t.id
  });
}
t.Z = a.memo(function(e) {
  let {
channel: t,
message: n,
isHeader: a
  } = e, l = (0, c.e7)([j.Z], () => j.Z.isEditing(t.id, n.id), [
t.id,
n.id
  ]), r = function(e) {
let {
  channel: t,
  message: n
} = e;
return n.state === K.yb.SEND_FAILED ? (0, i.jsx)(en, {
  channel: t,
  message: n
}) : null;
  }(e), o = function(e) {
let {
  message: t
} = e;
return t.state !== K.yb.SEND_FAILED ? (0, i.jsx)(et, {
  ...e
}) : null;
  }(e);
  return l || null == r && null == o ? null : (0, i.jsx)('div', {
className: s()(e.className, {
  [Q.container]: !0,
  [Q.isHeader]: a
}),
onClick: J,
onContextMenu: J,
role: 'group',
'aria-label': X.Z.Messages.MESSAGE_UTILITIES_A11Y_LABEL,
children: (0, i.jsxs)(k.ZP, {
  className: s()(e.innerClassName, Q.inner),
  children: [
    r,
    o
  ]
})
  });
});