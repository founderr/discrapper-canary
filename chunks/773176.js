n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(954955),
  o = n.n(r),
  c = n(442837),
  u = n(704215),
  d = n(481060),
  h = n(596454),
  p = n(607070),
  m = n(110630),
  _ = n(377171),
  f = n(706140),
  E = n(543241),
  g = n(689789),
  C = n(346610),
  I = n(868643),
  x = n(223606),
  T = n(188597),
  N = n(41776),
  v = n(222677),
  S = n(995774),
  Z = n(931651),
  A = n(280845),
  M = n(768943),
  b = n(121254),
  R = n(742989),
  j = n(665906),
  L = n(695346),
  P = n(314897),
  O = n(323873),
  y = n(271383),
  D = n(430824),
  k = n(607744),
  U = n(496675),
  w = n(594174),
  B = n(448239),
  H = n(404975),
  G = n(626135),
  V = n(572004),
  F = n(970257),
  W = n(418476),
  z = n(151007),
  Y = n(432376),
  K = n(917990),
  q = n(996861),
  X = n(603490),
  Q = n(225138),
  J = n(717680),
  $ = n(981631),
  ee = n(921944),
  et = n(689938),
  en = n(838764),
  ei = n(21620);

function ea(e) {
  e.stopPropagation();
}

function es(e) {
  let {
message: t,
channel: n,
canReport: i,
onClose: a,
updatePosition: s
  } = e;
  return (0, Q.useMessageMenu)({
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
onHeightUpdate: s,
onClose: a,
navId: 'message-actions',
ariaLabel: et.Z.Messages.MESSAGE_UTILITIES_A11Y_LABEL
  });
}
let el = a.memo(function(e) {
  let {
channel: t,
message: n,
buttonClassName: a
  } = e, s = (0, E.wC)(t.guild_id), r = (0, E.q5)(t.guild_id), {
canSplitFrecencyList: o
  } = (0, g.S)({
location: 'ReactionSuggestions',
autoTrackExposure: !0
  }), c = o ? r.slice(0, 3) : s.slice(0, 3), u = n.reactions.filter(e => e.me);
  return (0, i.jsx)(i.Fragment, {
children: c.map(e => {
  var s;
  let r = u.find(t => (0, S.ir)(t.emoji, e)),
    o = null != r ? et.Z.Messages.MESSAGE_HOVER_BAR_REACTION_SUGGESTION_REMOVE : et.Z.Messages.MESSAGE_HOVER_BAR_REACTION_SUGGESTION_ADD,
    c = null != r ? et.Z.Messages.MESSAGE_HOVER_BAR_REACTION_SUGGESTION_REMOVE_ALLY.format({
      emojiName: e.name
    }) : et.Z.Messages.MESSAGE_HOVER_BAR_REACTION_SUGGESTION_ADD_ALLY.format({
      emojiName: e.name
    }),
    p = () => null != r ? function(e, t, n) {
      let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = w.default.getCurrentUser();
      null != e && (0, v.WO)(t.id, n.id, (0, S.g1)(e), null == a ? void 0 : a.id, void 0, {
        burst: i
      });
    }(e, t, n, !1) : eu(e, t, n, !1);
  return (0, i.jsx)('div', {
    children: (0, i.jsx)(d.Tooltip, {
      hideOnClick: !0,
      position: 'top',
      'aria-label': !1,
      text: (0, i.jsxs)(i.Fragment, {
        children: [
          (0, i.jsx)(d.Text, {
            variant: 'text-sm/medium',
            color: 'header-primary',
            className: en.emojiTooltipText,
            children: ':'.concat(e.name, ':')
          }),
          (0, i.jsx)(d.Text, {
            variant: 'text-xs/normal',
            color: 'header-secondary',
            className: en.emojiTooltipText,
            children: o
          })
        ]
      }),
      children: t => {
        let {
          ...n
        } = t;
        return (0, i.jsx)(H.zx, {
          className: l()(a, ei.reactionSuggestion),
          onClick: p,
          'aria-label': c,
          children: (0, i.jsx)(h.Z, {
            className: en.icon,
            emojiId: e.id,
            emojiName: null == e.id ? e.surrogates : e.name,
            animated: e.animated,
            size: 'reaction',
            alt: '',
            ...n
          })
        });
      }
    })
  }, ''.concat(null !== (s = e.id) && void 0 !== s ? s : 0, ':').concat(e.name));
})
  });
});

function er(e) {
  let {
label: t,
ariaLabel: n,
tooltipText: a,
tooltipColor: s,
icon: l,
iconProps: r,
channel: o,
message: c,
onClick: u,
onTooltipShow: h,
onTooltipHide: p,
key: m,
disabled: f,
dangerous: E,
separator: g,
sparkle: C,
showNewBadge: I,
buttonClassName: x,
...T
  } = e;
  return (0, i.jsx)(d.Tooltip, {
text: null != a ? a : t,
color: null != s ? s : d.TooltipColors.PRIMARY,
'aria-label': t,
onTooltipShow: h,
onTooltipHide: p,
hideOnClick: !0,
tooltipClassName: en.tooltip,
children: e => {
  let {
    onMouseEnter: a,
    onMouseLeave: s,
    onClick: h
  } = e;
  return (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsxs)(H.zx, {
        className: x,
        onMouseEnter: a,
        onMouseLeave: s,
        onClick: e => {
          null == h || h(), u(o, c, e);
        },
        'aria-label': null != n ? n : t,
        disabled: f,
        dangerous: E,
        ...T,
        children: [
          (0, i.jsx)(l, {
            className: en.icon,
            color: 'currentColor',
            ...r
          }),
          C && (0, i.jsx)(d.LottieSparkle, {}),
          I && (0, i.jsx)(d.TextBadge, {
            text: et.Z.Messages.NEW,
            color: _.Z.BG_BRAND,
            className: en.newBadge
          })
        ]
      }),
      g && (0, i.jsx)(H.Z0, {})
    ]
  });
}
  }, m);
}

function eo(e) {
  let {
channel: t,
message: n,
canCopy: s,
canPin: l,
canDelete: r,
canReport: o,
canEdit: h,
canPublish: _,
canReact: E,
canConfigureJoin: g,
canReply: x,
canStartThread: T,
canViewThread: v,
canForward: S,
isExpanded: Z,
showMoreUtilities: O,
showEmojiPicker: w,
showMessageRemindersActions: H,
isMessageReminder: Q,
showMessageBookmarksActions: ei,
isMessageBookmark: ea,
setPopout: eo,
hasDeveloperMode: ec,
isGuildInviteReminder: eu,
isFocused: eh
  } = function(e) {
let {
  channel: t,
  message: n,
  showEmojiPicker: i,
  showEmojiBurstPicker: a,
  showMoreUtilities: s,
  setPopout: l,
  isFocused: r
} = e, {
  author: o
} = n, u = (0, c.e7)([D.Z], () => D.Z.getGuild(t.guild_id), [t.guild_id]), d = (0, c.e7)([P.default], () => P.default.getId()), h = (0, j.$R)(t), _ = (0, j.Gu)(t), f = L.nc.useSetting(), E = L.Sb.useSetting(), g = (0, c.e7)([k.Z], () => null == t.guild_id || k.Z.canChatInGuild(t.guild_id), [t]), {
  canManageMessages: x,
  canAddNewReactions: T
} = (0, c.cj)([U.Z], () => ({
  canAddNewReactions: g && U.Z.can($.Plq.ADD_REACTIONS, t),
  canManageMessages: U.Z.can($.Plq.MANAGE_MESSAGES, t)
}), [
  t,
  g
]), v = (0, A.U)(t, n), S = (0, j.NE)(t, n), Z = (0, j.Ek)(n), O = (0, c.e7)([N.Z], () => null != t.guild_id && N.Z.isLurking(t.guild_id), [t]), w = (0, c.e7)([y.ZP], () => null != t.guild_id && y.ZP.isCurrentUserGuest(t.guild_id), [t]), B = o.id === d, H = (x || n.canDeleteOwnMessage(d)) && h && !$.V$x.UNDELETABLE.has(n.type);
n.type === $.uaV.AUTO_MODERATION_ACTION && (H = H && x);
let G = (0, F.a4)(n),
  K = (0, z.Z)(n, t, x),
  q = !t.isSystemDM() && (0, W.Z)(n, d) && h && !_,
  {
    disableReactionCreates: X
  } = (0, Y.Z)({
    channel: t,
    canChat: g,
    renderReactions: f,
    canAddNewReactions: T,
    isLurking: O,
    isGuest: w,
    isActiveChannelOrUnarchivableThread: h
  }),
  Q = t.type === $.d4z.GUILD_ANNOUNCEMENT && null != u && u.hasFeature($.oNc.NEWS) && (B || x) && (0, m.Z)(n),
  ee = t.getGuildId(),
  et = null != ee && (n.type === $.uaV.USER_JOIN || n.type === $.uaV.GUILD_INVITE_REMINDER) && U.Z.canWithPartialContext($.Plq.MANAGE_GUILD, {
    guildId: ee
  }),
  {
    canForwardMessages: en
  } = C.w.useExperiment({
    location: 'useMessageUtilitiesProps'
  }, {
    autoTrackExposure: !1
  }),
  ei = (0, I.a)(n),
  {
    showReminders: ea
  } = R.Z.useExperiment({
    location: 'message_utilities'
  }, {
    autoTrackExposure: !1
  }),
  {
    enabled: es
  } = b.Z.useExperiment({
    location: 'message_utilities'
  }, {
    autoTrackExposure: !1
  }),
  [el, er] = (0, c.Wu)([M.Z], () => [
    M.Z.isMessageReminder(n.id),
    M.Z.isMessageBookmarked(n.id)
  ]),
  eo = (0, J.Z)(),
  ec = (0, c.e7)([p.Z], () => p.Z.keyboardModeEnabled);
return {
  channel: t,
  message: n,
  canPin: K,
  canEdit: q,
  canDelete: H,
  canReport: G,
  canReply: v,
  canStartThread: S,
  canViewThread: Z,
  canForward: en && ei,
  canCopy: V.wS,
  hasDeveloperMode: E,
  canReact: !X && f,
  canPublish: Q,
  canConfigureJoin: et,
  isExpanded: eo && !ec && !i && !a && !s,
  showEmojiPicker: i,
  showEmojiBurstPicker: a,
  showMoreUtilities: s,
  showMessageRemindersActions: ea,
  isMessageReminder: el,
  showMessageBookmarksActions: es,
  isMessageBookmark: er,
  setPopout: l,
  isFocused: r,
  isGuildInviteReminder: n.type === $.uaV.GUILD_INVITE_REMINDER
};
  }(e), ep = a.useCallback(() => {
!O && G.default.track($.rMx.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
  message_id: n.id,
  channel: n.channel_id
}), eo({
  moreUtilities: !O
});
  }, [
O,
eo,
n
  ]), em = a.useCallback(() => {
eo({
  emojiPicker: !w
});
  }, [
w,
eo
  ]), e_ = (0, j.$R)(t), ef = n.hasFlag($.iLy.CROSSPOSTED), [eE, eg] = (0, f.c)(S ? [u.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE] : []), eC = eE === u.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE, [eI, ex] = a.useState(!1), eT = a.useCallback(() => {
ex(!0);
  }, []), eN = a.useCallback(() => {
ex(!1);
  }, []), ev = a.useCallback((e, t) => {
eg(ee.L.TAKE_ACTION), (0, q.ts)(e, t);
  }, [eg]), {
canShowReactionsOnMessageHover: eS
  } = K.Z.useExperiment({
location: 'ExpandingButtons'
  }, {
autoTrackExposure: !0
  }), eZ = {
channel: t,
message: n,
buttonClassName: eS ? en.hoverBarButton : void 0
  };
  return (0, i.jsxs)(i.Fragment, {
children: [
  Z ? (0, i.jsxs)(i.Fragment, {
    children: [
      s && ec ? er({
        key: 'copy-id',
        label: et.Z.Messages.COPY_ID_MESSAGE,
        icon: d.IdIcon,
        onClick: q.F4,
        ...eZ
      }) : null,
      s && !eu ? er({
        key: 'copy-link',
        label: et.Z.Messages.COPY_LINK,
        icon: d.LinkIcon,
        onClick: q.fB,
        ...eZ
      }) : null,
      g ? er({
        key: 'configure',
        label: et.Z.Messages.CONFIGURE,
        icon: d.CircleQuestionIcon,
        onClick: q.zW,
        ...eZ
      }) : null,
      H ? er({
        key: 'mark-reminder',
        label: Q ? et.Z.Messages.MESSAGE_REMINDERS_MARK_AS_DONE : et.Z.Messages.MESSAGE_REMINDERS_MARK_AS_TODO,
        icon: Q ? (0, d.makeIconCompat)(B.Z) : d.ListBulletsIcon,
        onClick: Q ? q.l9 : q.W1,
        ...eZ
      }) : null,
      e_ ? er({
        key: 'mark-unread',
        label: et.Z.Messages.MARK_UNREAD,
        icon: d.ChatMarkUnreadIcon,
        onClick: q.B8,
        ...eZ
      }) : null,
      ei ? er({
        key: 'bookmark',
        label: ea ? et.Z.Messages.MESSAGE_BOOKMARKS_REMOVE_BOOKMARK : et.Z.Messages.MESSAGE_BOOKMARKS_BOOKMARK,
        icon: d.InboxIcon,
        onClick: ea ? q.eM : q.dF,
        ...eZ
      }) : null,
      l ? er({
        key: 'pin',
        label: n.pinned ? et.Z.Messages.UNPIN_MESSAGE : et.Z.Messages.PIN_MESSAGE,
        icon: d.PinIcon,
        onClick: q.rY,
        ...eZ
      }) : null,
      T && S ? er({
        key: 'thread',
        label: et.Z.Messages.CREATE_THREAD,
        icon: d.ThreadIcon,
        onClick: q.gK,
        ...eZ
      }) : null,
      x && h ? er({
        key: 'reply-self',
        label: et.Z.Messages.MESSAGE_ACTION_REPLY,
        icon: d.ArrowAngleLeftUpIcon,
        onClick: q.HH,
        ...eZ
      }) : null
    ]
  }) : null,
  E && !eu ? (0, i.jsxs)(i.Fragment, {
    children: [
      eS && !Z ? (0, i.jsx)(el, {
        ...eZ
      }) : null,
      (0, i.jsx)(X.Z, {
        togglePopout: em,
        renderEmojiPicker: ed,
        shouldShow: w,
        isFocused: eh,
        iconClassName: eS ? en.icon : void 0,
        ...eZ
      })
    ]
  }) : null,
  x && !h ? er({
    key: 'reply-other',
    label: et.Z.Messages.MESSAGE_ACTION_REPLY,
    icon: d.ArrowAngleLeftUpIcon,
    onClick: q.HH,
    ...eZ
  }) : null,
  h ? er({
    key: 'edit',
    label: et.Z.Messages.EDIT,
    icon: d.PencilIcon,
    onClick: q.Hd,
    ...eZ
  }) : null,
  S ? er({
    key: 'forward',
    label: et.Z.Messages.MESSAGE_ACTION_FORWARD,
    icon: d.ChatArrowRightIcon,
    onClick: ev,
    onTooltipShow: eT,
    onTooltipHide: eN,
    showNewBadge: !eI && eC,
    ...eZ
  }) : null,
  T && !S ? er({
    key: 'thread',
    label: et.Z.Messages.CREATE_THREAD,
    icon: d.ThreadIcon,
    onClick: q.gK,
    ...eZ
  }) : null,
  !T && v ? er({
    key: 'view-thread',
    label: et.Z.Messages.VIEW_THREAD,
    icon: d.ThreadIcon,
    onClick: q.qe,
    ...eZ
  }) : null,
  _ ? er({
    key: 'publish',
    label: ef ? et.Z.Messages.NEWS_CHANNEL_PUBLISHED : et.Z.Messages.NEWS_CHANNEL_PUBLISH,
    icon: d.AnnouncementsIcon,
    onClick: q.Xl,
    disabled: ef,
    ...eZ
  }) : null,
  r && (eu || Z) ? er({
    key: 'delete',
    label: et.Z.Messages.DELETE,
    icon: d.TrashIcon,
    onClick: q.$Z,
    dangerous: !0,
    separator: !Z,
    ...eZ
  }) : null,
  Z && r ? null : (0, i.jsx)(d.Popout, {
    renderPopout: e => {
      let {
        updatePosition: a,
        closePopout: s
      } = e;
      return (0, i.jsx)(es, {
        channel: t,
        message: n,
        canReport: o,
        onClose: s,
        updatePosition: a
      });
    },
    shouldShow: O,
    onRequestClose: ep,
    position: 'left',
    align: 'top',
    animation: d.Popout.Animation.NONE,
    children: (e, t) => {
      let {
        onClick: n,
        ...i
      } = e, {
        isShown: a
      } = t;
      return er({
        key: 'more',
        label: et.Z.Messages.MORE,
        icon: d.MoreHorizontalIcon,
        selected: a,
        onClick: ep,
        ...eZ,
        ...i
      });
    }
  })
]
  });
}

function ec(e) {
  let {
channel: t,
message: n
  } = e, a = (0, c.e7)([x.Z], () => null != x.Z.getMessage(n.id), [n.id]), s = null == n.interaction || null != n.interactionData && (0, T.$s)(n.interactionData);
  return (0, i.jsxs)(i.Fragment, {
children: [
  !a && s && er({
    key: 'retry',
    label: et.Z.Messages.RETRY,
    icon: d.RetryIcon,
    channel: t,
    message: n,
    onClick: q.mG
  }),
  er({
    key: 'delete-usent',
    label: et.Z.Messages.DELETE,
    icon: d.TrashIcon,
    channel: t,
    message: n,
    onClick: q.$Z
  })
]
  });
}

function eu(e, t, n) {
  let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  null != e && (0, v.rU)(t.id, n.id, (0, S.g1)(e), void 0, {
burst: i
  });
}

function ed(e, t, n) {
  let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
s = {
  openPopoutType: 'message_reaction_emoji_picker',
  ...a && {
    openPopoutType: 'message_super_reaction_emoji_picker',
    page: null != e.getGuildId() ? $.ZY5.GUILD_CHANNEL : $.ZY5.DM_CHANNEL,
    section: (0, S.s4)(e),
    object: $.qAy.EMOJI_REACTION_PICKER_POPOUT
  }
};
  return (0, i.jsx)(Z.$, {
channel: e,
closePopout: n,
onSelectEmoji: (i, a, s) => {
  eu(i, e, t, s), a && (s ? o()(n, 150)() : n());
},
analyticsOverride: s,
messageId: t.id
  });
}
t.Z = a.memo(function(e) {
  let {
channel: t,
message: n,
isHeader: a
  } = e, s = (0, c.e7)([O.Z], () => O.Z.isEditing(t.id, n.id), [
t.id,
n.id
  ]), {
canShowReactionsOnMessageHover: r
  } = K.Z.useExperiment({
location: 'MessageUtilities'
  }, {
autoTrackExposure: !0
  }), o = function(e) {
let {
  channel: t,
  message: n
} = e;
return n.state === $.yb.SEND_FAILED ? (0, i.jsx)(ec, {
  channel: t,
  message: n
}) : null;
  }(e), u = function(e) {
let {
  message: t
} = e;
return t.state !== $.yb.SEND_FAILED ? (0, i.jsx)(eo, {
  ...e
}) : null;
  }(e);
  return s || null == o && null == u ? null : (0, i.jsx)('div', {
className: l()(e.className, {
  [en.container]: !0,
  [en.isHeader]: a
}),
onClick: ea,
onContextMenu: ea,
role: 'group',
'aria-label': et.Z.Messages.MESSAGE_UTILITIES_A11Y_LABEL,
children: (0, i.jsxs)(H.ZP, {
  className: l()(e.innerClassName, en.inner, {
    [en.innerReactionHoverBar]: r
  }),
  children: [
    o,
    u
  ]
})
  });
});