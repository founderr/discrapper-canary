n.d(t, {
  L: function() {
return er;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(954955),
  o = n.n(l),
  c = n(442837),
  u = n(704215),
  d = n(481060),
  _ = n(596454),
  E = n(607070),
  I = n(110630),
  m = n(377171),
  T = n(706140),
  h = n(543241),
  N = n(689789),
  f = n(346610),
  C = n(868643),
  p = n(223606),
  g = n(188597),
  S = n(41776),
  A = n(222677),
  M = n(995774),
  R = n(931651),
  O = n(280845),
  x = n(768943),
  v = n(121254),
  Z = n(742989),
  L = n(665906),
  P = n(695346),
  D = n(314897),
  b = n(323873),
  j = n(271383),
  U = n(430824),
  y = n(607744),
  B = n(496675),
  k = n(448239),
  G = n(404975),
  F = n(626135),
  w = n(572004),
  V = n(970257),
  H = n(418476),
  Y = n(151007),
  W = n(432376),
  K = n(917990),
  z = n(996861),
  Q = n(603490),
  q = n(225138),
  X = n(717680),
  J = n(981631),
  $ = n(921944),
  ee = n(689938),
  et = n(838764),
  en = n(21620);

function ei(e) {
  e.stopPropagation();
}

function ea(e) {
  let {
message: t,
channel: n,
canReport: i,
onClose: a,
updatePosition: s
  } = e;
  return (0, q.useMessageMenu)({
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
ariaLabel: ee.Z.Messages.MESSAGE_UTILITIES_A11Y_LABEL
  });
}
let es = a.memo(function(e) {
  let {
channel: t,
message: n,
buttonClassName: a
  } = e, s = (0, h.wC)(t.guild_id), l = (0, h.q5)(t.guild_id), {
canSplitFrecencyList: o
  } = (0, N.S)({
location: 'ReactionSuggestions',
autoTrackExposure: !0
  }), c = o ? l.slice(0, 3) : s.slice(0, 3), u = n.reactions.filter(e => e.me);
  return (0, i.jsx)(i.Fragment, {
children: c.map(e => {
  var s;
  let l = u.find(t => (0, M.ir)(t.emoji, e)),
    o = null != l ? ee.Z.Messages.MESSAGE_HOVER_BAR_REACTION_SUGGESTION_REMOVE : ee.Z.Messages.MESSAGE_HOVER_BAR_REACTION_SUGGESTION_ADD,
    c = null != l ? ee.Z.Messages.MESSAGE_HOVER_BAR_REACTION_SUGGESTION_REMOVE_ALLY.format({
      emojiName: e.name
    }) : ee.Z.Messages.MESSAGE_HOVER_BAR_REACTION_SUGGESTION_ADD_ALLY.format({
      emojiName: e.name
    }),
    E = () => ec({
      type: null != l ? 'remove' : 'add',
      emoji: e,
      channel: t,
      message: n,
      location: A.TW.MESSAGE_HOVER_BAR
    });
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
            className: et.emojiTooltipText,
            children: ':'.concat(e.name, ':')
          }),
          (0, i.jsx)(d.Text, {
            variant: 'text-xs/normal',
            color: 'header-secondary',
            className: et.emojiTooltipText,
            children: o
          })
        ]
      }),
      children: t => {
        let {
          ...n
        } = t;
        return (0, i.jsx)(G.zx, {
          className: r()(a, en.reactionSuggestion),
          onClick: E,
          'aria-label': c,
          children: (0, i.jsx)(_.Z, {
            className: et.icon,
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
icon: r,
iconProps: l,
channel: o,
message: c,
onClick: u,
onTooltipShow: _,
onTooltipHide: E,
key: I,
disabled: T,
dangerous: h,
separator: N,
sparkle: f,
showNewBadge: C,
buttonClassName: p,
...g
  } = e;
  return (0, i.jsx)(d.Tooltip, {
text: null != a ? a : t,
color: null != s ? s : d.TooltipColors.PRIMARY,
'aria-label': t,
onTooltipShow: _,
onTooltipHide: E,
hideOnClick: !0,
tooltipClassName: et.tooltip,
children: e => {
  let {
    onMouseEnter: a,
    onMouseLeave: s,
    onClick: _
  } = e;
  return (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsxs)(G.zx, {
        className: p,
        onMouseEnter: a,
        onMouseLeave: s,
        onClick: e => {
          null == _ || _(), u(o, c, e);
        },
        'aria-label': null != n ? n : t,
        disabled: T,
        dangerous: h,
        ...g,
        children: [
          (0, i.jsx)(r, {
            className: et.icon,
            color: 'currentColor',
            ...l
          }),
          f && (0, i.jsx)(d.LottieSparkle, {}),
          C && (0, i.jsx)(d.TextBadge, {
            text: ee.Z.Messages.NEW,
            color: m.Z.BG_BRAND,
            className: et.newBadge
          })
        ]
      }),
      N && (0, i.jsx)(G.Z0, {})
    ]
  });
}
  }, I);
}

function el(e) {
  let {
channel: t,
message: n,
canCopy: s,
canPin: r,
canDelete: l,
canReport: o,
canEdit: _,
canPublish: m,
canReact: h,
canConfigureJoin: N,
canReply: p,
canStartThread: g,
canViewThread: A,
canForward: M,
isExpanded: R,
showMoreUtilities: b,
showEmojiPicker: G,
showMessageRemindersActions: q,
isMessageReminder: en,
showMessageBookmarksActions: ei,
isMessageBookmark: el,
setPopout: eo,
hasDeveloperMode: ec,
isGuildInviteReminder: ed,
isFocused: e_
  } = function(e) {
let {
  channel: t,
  message: n,
  showEmojiPicker: i,
  showEmojiBurstPicker: a,
  showMoreUtilities: s,
  setPopout: r,
  isFocused: l
} = e, {
  author: o
} = n, u = (0, c.e7)([U.Z], () => U.Z.getGuild(t.guild_id), [t.guild_id]), d = (0, c.e7)([D.default], () => D.default.getId()), _ = (0, L.$R)(t), m = (0, L.Gu)(t), T = P.nc.useSetting(), h = P.Sb.useSetting(), N = (0, c.e7)([y.Z], () => null == t.guild_id || y.Z.canChatInGuild(t.guild_id), [t]), {
  canManageMessages: p,
  canAddNewReactions: g
} = (0, c.cj)([B.Z], () => ({
  canAddNewReactions: N && B.Z.can(J.Plq.ADD_REACTIONS, t),
  canManageMessages: B.Z.can(J.Plq.MANAGE_MESSAGES, t)
}), [
  t,
  N
]), A = (0, O.U)(t, n), M = (0, L.NE)(t, n), R = (0, L.Ek)(n), b = (0, c.e7)([S.Z], () => null != t.guild_id && S.Z.isLurking(t.guild_id), [t]), k = (0, c.e7)([j.ZP], () => null != t.guild_id && j.ZP.isCurrentUserGuest(t.guild_id), [t]), G = o.id === d, F = (p || n.canDeleteOwnMessage(d)) && _ && !J.V$x.UNDELETABLE.has(n.type);
n.type === J.uaV.AUTO_MODERATION_ACTION && (F = F && p);
let K = (0, V.a4)(n),
  z = (0, Y.Z)(n, t, p),
  Q = !t.isSystemDM() && (0, H.Z)(n, d) && _ && !m,
  {
    disableReactionCreates: q
  } = (0, W.Z)({
    channel: t,
    canChat: N,
    renderReactions: T,
    canAddNewReactions: g,
    isLurking: b,
    isGuest: k,
    isActiveChannelOrUnarchivableThread: _
  }),
  $ = t.type === J.d4z.GUILD_ANNOUNCEMENT && null != u && u.hasFeature(J.oNc.NEWS) && (G || p) && (0, I.Z)(n),
  ee = t.getGuildId(),
  et = null != ee && (n.type === J.uaV.USER_JOIN || n.type === J.uaV.GUILD_INVITE_REMINDER) && B.Z.canWithPartialContext(J.Plq.MANAGE_GUILD, {
    guildId: ee
  }),
  {
    canForwardMessages: en
  } = f.w.useExperiment({
    location: 'useMessageUtilitiesProps'
  }, {
    autoTrackExposure: !1
  }),
  ei = (0, C.a)(n),
  {
    showReminders: ea
  } = Z.Z.useExperiment({
    location: 'message_utilities'
  }, {
    autoTrackExposure: !1
  }),
  {
    enabled: es
  } = v.Z.useExperiment({
    location: 'message_utilities'
  }, {
    autoTrackExposure: !1
  }),
  [er, el] = (0, c.Wu)([x.Z], () => [
    x.Z.isMessageReminder(n.id),
    x.Z.isMessageBookmarked(n.id)
  ]),
  eo = (0, X.Z)(),
  ec = (0, c.e7)([E.Z], () => E.Z.keyboardModeEnabled);
return {
  channel: t,
  message: n,
  canPin: z,
  canEdit: Q,
  canDelete: F,
  canReport: K,
  canReply: A,
  canStartThread: M,
  canViewThread: R,
  canForward: en && ei,
  canCopy: w.wS,
  hasDeveloperMode: h,
  canReact: !q && T,
  canPublish: $,
  canConfigureJoin: et,
  isExpanded: eo && !ec && !i && !a && !s,
  showEmojiPicker: i,
  showEmojiBurstPicker: a,
  showMoreUtilities: s,
  showMessageRemindersActions: ea,
  isMessageReminder: er,
  showMessageBookmarksActions: es,
  isMessageBookmark: el,
  setPopout: r,
  isFocused: l,
  isGuildInviteReminder: n.type === J.uaV.GUILD_INVITE_REMINDER
};
  }(e), eE = a.useCallback(() => {
!b && F.default.track(J.rMx.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
  message_id: n.id,
  channel: n.channel_id
}), eo({
  moreUtilities: !b
});
  }, [
b,
eo,
n
  ]), eI = a.useCallback(() => {
eo({
  emojiPicker: !G
});
  }, [
G,
eo
  ]), em = (0, L.$R)(t), eT = n.hasFlag(J.iLy.CROSSPOSTED), [eh, eN] = (0, T.c)(M ? [u.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE] : []), ef = eh === u.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE, [eC, ep] = a.useState(!1), eg = a.useCallback(() => {
ep(!0);
  }, []), eS = a.useCallback(() => {
ep(!1);
  }, []), eA = a.useCallback((e, t) => {
eN($.L.TAKE_ACTION), (0, z.ts)(e, t);
  }, [eN]), {
canShowReactionsOnMessageHover: eM
  } = K.Z.useExperiment({
location: 'ExpandingButtons'
  }, {
autoTrackExposure: !0
  }), eR = {
channel: t,
message: n,
buttonClassName: eM ? et.hoverBarButton : void 0
  };
  return (0, i.jsxs)(i.Fragment, {
children: [
  R ? (0, i.jsxs)(i.Fragment, {
    children: [
      s && ec ? er({
        key: 'copy-id',
        label: ee.Z.Messages.COPY_ID_MESSAGE,
        icon: d.IdIcon,
        onClick: z.F4,
        ...eR
      }) : null,
      s && !ed ? er({
        key: 'copy-link',
        label: ee.Z.Messages.COPY_LINK,
        icon: d.LinkIcon,
        onClick: z.fB,
        ...eR
      }) : null,
      N ? er({
        key: 'configure',
        label: ee.Z.Messages.CONFIGURE,
        icon: d.CircleQuestionIcon,
        onClick: z.zW,
        ...eR
      }) : null,
      q ? er({
        key: 'mark-reminder',
        label: en ? ee.Z.Messages.MESSAGE_REMINDERS_MARK_AS_DONE : ee.Z.Messages.MESSAGE_REMINDERS_MARK_AS_TODO,
        icon: en ? (0, d.makeIconCompat)(k.Z) : d.ListBulletsIcon,
        onClick: en ? z.l9 : z.W1,
        ...eR
      }) : null,
      em ? er({
        key: 'mark-unread',
        label: ee.Z.Messages.MARK_UNREAD,
        icon: d.ChatMarkUnreadIcon,
        onClick: z.B8,
        ...eR
      }) : null,
      ei ? er({
        key: 'bookmark',
        label: el ? ee.Z.Messages.MESSAGE_BOOKMARKS_REMOVE_BOOKMARK : ee.Z.Messages.MESSAGE_BOOKMARKS_BOOKMARK,
        icon: d.InboxIcon,
        onClick: el ? z.eM : z.dF,
        ...eR
      }) : null,
      r ? er({
        key: 'pin',
        label: n.pinned ? ee.Z.Messages.UNPIN_MESSAGE : ee.Z.Messages.PIN_MESSAGE,
        icon: d.PinIcon,
        onClick: z.rY,
        ...eR
      }) : null,
      g && M ? er({
        key: 'thread',
        label: ee.Z.Messages.CREATE_THREAD,
        icon: d.ThreadIcon,
        onClick: z.gK,
        ...eR
      }) : null,
      p && _ ? er({
        key: 'reply-self',
        label: ee.Z.Messages.MESSAGE_ACTION_REPLY,
        icon: d.ArrowAngleLeftUpIcon,
        onClick: z.HH,
        ...eR
      }) : null
    ]
  }) : null,
  h && !ed ? (0, i.jsxs)(i.Fragment, {
    children: [
      eM && !R ? (0, i.jsx)(es, {
        ...eR
      }) : null,
      (0, i.jsx)(Q.Z, {
        togglePopout: eI,
        renderEmojiPicker: eu,
        shouldShow: G,
        isFocused: e_,
        iconClassName: eM ? et.icon : void 0,
        ...eR
      })
    ]
  }) : null,
  p && !_ ? er({
    key: 'reply-other',
    label: ee.Z.Messages.MESSAGE_ACTION_REPLY,
    icon: d.ArrowAngleLeftUpIcon,
    onClick: z.HH,
    ...eR
  }) : null,
  _ ? er({
    key: 'edit',
    label: ee.Z.Messages.EDIT,
    icon: d.PencilIcon,
    onClick: z.Hd,
    ...eR
  }) : null,
  M ? er({
    key: 'forward',
    label: ee.Z.Messages.MESSAGE_ACTION_FORWARD,
    icon: d.ChatArrowRightIcon,
    onClick: eA,
    onTooltipShow: eg,
    onTooltipHide: eS,
    showNewBadge: !eC && ef,
    ...eR
  }) : null,
  g && !M ? er({
    key: 'thread',
    label: ee.Z.Messages.CREATE_THREAD,
    icon: d.ThreadIcon,
    onClick: z.gK,
    ...eR
  }) : null,
  !g && A ? er({
    key: 'view-thread',
    label: ee.Z.Messages.VIEW_THREAD,
    icon: d.ThreadIcon,
    onClick: z.qe,
    ...eR
  }) : null,
  m ? er({
    key: 'publish',
    label: eT ? ee.Z.Messages.NEWS_CHANNEL_PUBLISHED : ee.Z.Messages.NEWS_CHANNEL_PUBLISH,
    icon: d.AnnouncementsIcon,
    onClick: z.Xl,
    disabled: eT,
    ...eR
  }) : null,
  l && (ed || R) ? er({
    key: 'delete',
    label: ee.Z.Messages.DELETE,
    icon: d.TrashIcon,
    onClick: z.$Z,
    dangerous: !0,
    separator: !R,
    ...eR
  }) : null,
  R && l ? null : (0, i.jsx)(d.Popout, {
    renderPopout: e => {
      let {
        updatePosition: a,
        closePopout: s
      } = e;
      return (0, i.jsx)(ea, {
        channel: t,
        message: n,
        canReport: o,
        onClose: s,
        updatePosition: a
      });
    },
    shouldShow: b,
    onRequestClose: eE,
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
        label: ee.Z.Messages.MORE,
        icon: d.MoreHorizontalIcon,
        selected: a,
        onClick: eE,
        ...eR,
        ...i
      });
    }
  })
]
  });
}

function eo(e) {
  let {
channel: t,
message: n
  } = e, a = (0, c.e7)([p.Z], () => null != p.Z.getMessage(n.id), [n.id]), s = null == n.interaction || null != n.interactionData && (0, g.$s)(n.interactionData);
  return (0, i.jsxs)(i.Fragment, {
children: [
  !a && s && er({
    key: 'retry',
    label: ee.Z.Messages.RETRY,
    icon: d.RetryIcon,
    channel: t,
    message: n,
    onClick: z.mG
  }),
  er({
    key: 'delete-usent',
    label: ee.Z.Messages.DELETE,
    icon: d.TrashIcon,
    channel: t,
    message: n,
    onClick: z.$Z
  })
]
  });
}

function ec(e) {
  let {
type: t,
emoji: n,
channel: i,
message: a,
location: s,
isBurst: r = !1
  } = e;
  if (null == n)
return;
  let l = (0, M.g1)(n);
  'add' === t ? (0, A.rU)(i.id, a.id, l, s, {
burst: r
  }) : (0, A.WO)({
channelId: i.id,
messageId: a.id,
emoji: l,
location: s,
options: {
  burst: r
}
  });
}

function eu(e, t, n) {
  let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
s = {
  openPopoutType: 'message_reaction_emoji_picker',
  ...a && {
    openPopoutType: 'message_super_reaction_emoji_picker',
    page: null != e.getGuildId() ? J.ZY5.GUILD_CHANNEL : J.ZY5.DM_CHANNEL,
    section: (0, M.s4)(e),
    object: J.qAy.EMOJI_REACTION_PICKER_POPOUT
  }
};
  return (0, i.jsx)(R.$, {
channel: e,
closePopout: n,
onSelectEmoji: (i, a, s) => {
  ec({
    type: 'add',
    emoji: i,
    channel: e,
    message: t,
    location: A.TW.MESSAGE_REACTION_PICKER,
    isBurst: s
  }), a && (s ? o()(n, 150)() : n());
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
  } = e, s = (0, c.e7)([b.Z], () => b.Z.isEditing(t.id, n.id), [
t.id,
n.id
  ]), {
canShowReactionsOnMessageHover: l
  } = K.Z.useExperiment({
location: 'MessageUtilities'
  }, {
autoTrackExposure: !0
  }), o = function(e) {
let {
  channel: t,
  message: n
} = e;
return n.state === J.yb.SEND_FAILED ? (0, i.jsx)(eo, {
  channel: t,
  message: n
}) : null;
  }(e), u = function(e) {
let {
  message: t
} = e;
return t.state !== J.yb.SEND_FAILED ? (0, i.jsx)(el, {
  ...e
}) : null;
  }(e);
  return s || null == o && null == u ? null : (0, i.jsx)('div', {
className: r()(e.className, {
  [et.container]: !0,
  [et.isHeader]: a
}),
onClick: ei,
onContextMenu: ei,
role: 'group',
'aria-label': ee.Z.Messages.MESSAGE_UTILITIES_A11Y_LABEL,
children: (0, i.jsxs)(G.ZP, {
  className: r()(e.innerClassName, et.inner, {
    [et.innerReactionHoverBar]: l
  }),
  children: [
    o,
    u
  ]
})
  });
});