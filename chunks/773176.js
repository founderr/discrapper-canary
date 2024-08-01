n.d(t, {
  L: function() {
return el;
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
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
  k = n(594174),
  G = n(448239),
  F = n(404975),
  w = n(626135),
  V = n(572004),
  H = n(970257),
  Y = n(418476),
  W = n(151007),
  K = n(432376),
  z = n(917990),
  q = n(996861),
  Q = n(603490),
  X = n(225138),
  J = n(717680),
  $ = n(981631),
  ee = n(921944),
  et = n(689938),
  en = n(838764),
  ei = n(21620);

function es(e) {
  e.stopPropagation();
}

function ea(e) {
  let {
message: t,
channel: n,
canReport: i,
onClose: s,
updatePosition: a
  } = e;
  return (0, X.useMessageMenu)({
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
onHeightUpdate: a,
onClose: s,
navId: 'message-actions',
ariaLabel: et.Z.Messages.MESSAGE_UTILITIES_A11Y_LABEL
  });
}
let er = s.memo(function(e) {
  let {
channel: t,
message: n,
buttonClassName: s
  } = e, a = (0, h.wC)(t.guild_id), l = (0, h.q5)(t.guild_id), {
canSplitFrecencyList: o
  } = (0, N.S)({
location: 'ReactionSuggestions',
autoTrackExposure: !0
  }), c = o ? l.slice(0, 3) : a.slice(0, 3), u = n.reactions.filter(e => e.me);
  return (0, i.jsx)(i.Fragment, {
children: c.map(e => {
  var a;
  let l = u.find(t => (0, M.ir)(t.emoji, e)),
    o = null != l ? et.Z.Messages.MESSAGE_HOVER_BAR_REACTION_SUGGESTION_REMOVE : et.Z.Messages.MESSAGE_HOVER_BAR_REACTION_SUGGESTION_ADD,
    c = null != l ? et.Z.Messages.MESSAGE_HOVER_BAR_REACTION_SUGGESTION_REMOVE_ALLY.format({
      emojiName: e.name
    }) : et.Z.Messages.MESSAGE_HOVER_BAR_REACTION_SUGGESTION_ADD_ALLY.format({
      emojiName: e.name
    }),
    E = () => null != l ? function(e, t, n) {
      let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = k.default.getCurrentUser();
      null != e && (0, A.WO)(t.id, n.id, (0, M.g1)(e), null == s ? void 0 : s.id, void 0, {
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
        return (0, i.jsx)(F.zx, {
          className: r()(s, ei.reactionSuggestion),
          onClick: E,
          'aria-label': c,
          children: (0, i.jsx)(_.Z, {
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
  }, ''.concat(null !== (a = e.id) && void 0 !== a ? a : 0, ':').concat(e.name));
})
  });
});

function el(e) {
  let {
label: t,
ariaLabel: n,
tooltipText: s,
tooltipColor: a,
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
text: null != s ? s : t,
color: null != a ? a : d.TooltipColors.PRIMARY,
'aria-label': t,
onTooltipShow: _,
onTooltipHide: E,
hideOnClick: !0,
tooltipClassName: en.tooltip,
children: e => {
  let {
    onMouseEnter: s,
    onMouseLeave: a,
    onClick: _
  } = e;
  return (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsxs)(F.zx, {
        className: p,
        onMouseEnter: s,
        onMouseLeave: a,
        onClick: e => {
          null == _ || _(), u(o, c, e);
        },
        'aria-label': null != n ? n : t,
        disabled: T,
        dangerous: h,
        ...g,
        children: [
          (0, i.jsx)(r, {
            className: en.icon,
            color: 'currentColor',
            ...l
          }),
          f && (0, i.jsx)(d.LottieSparkle, {}),
          C && (0, i.jsx)(d.TextBadge, {
            text: et.Z.Messages.NEW,
            color: m.Z.BG_BRAND,
            className: en.newBadge
          })
        ]
      }),
      N && (0, i.jsx)(F.Z0, {})
    ]
  });
}
  }, I);
}

function eo(e) {
  let {
channel: t,
message: n,
canCopy: a,
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
showEmojiPicker: k,
showMessageRemindersActions: F,
isMessageReminder: X,
showMessageBookmarksActions: ei,
isMessageBookmark: es,
setPopout: eo,
hasDeveloperMode: ec,
isGuildInviteReminder: eu,
isFocused: e_
  } = function(e) {
let {
  channel: t,
  message: n,
  showEmojiPicker: i,
  showEmojiBurstPicker: s,
  showMoreUtilities: a,
  setPopout: r,
  isFocused: l
} = e, {
  author: o
} = n, u = (0, c.e7)([U.Z], () => U.Z.getGuild(t.guild_id), [t.guild_id]), d = (0, c.e7)([D.default], () => D.default.getId()), _ = (0, L.$R)(t), m = (0, L.Gu)(t), T = P.nc.useSetting(), h = P.Sb.useSetting(), N = (0, c.e7)([y.Z], () => null == t.guild_id || y.Z.canChatInGuild(t.guild_id), [t]), {
  canManageMessages: p,
  canAddNewReactions: g
} = (0, c.cj)([B.Z], () => ({
  canAddNewReactions: N && B.Z.can($.Plq.ADD_REACTIONS, t),
  canManageMessages: B.Z.can($.Plq.MANAGE_MESSAGES, t)
}), [
  t,
  N
]), A = (0, O.U)(t, n), M = (0, L.NE)(t, n), R = (0, L.Ek)(n), b = (0, c.e7)([S.Z], () => null != t.guild_id && S.Z.isLurking(t.guild_id), [t]), k = (0, c.e7)([j.ZP], () => null != t.guild_id && j.ZP.isCurrentUserGuest(t.guild_id), [t]), G = o.id === d, F = (p || n.canDeleteOwnMessage(d)) && _ && !$.V$x.UNDELETABLE.has(n.type);
n.type === $.uaV.AUTO_MODERATION_ACTION && (F = F && p);
let w = (0, H.a4)(n),
  z = (0, W.Z)(n, t, p),
  q = !t.isSystemDM() && (0, Y.Z)(n, d) && _ && !m,
  {
    disableReactionCreates: Q
  } = (0, K.Z)({
    channel: t,
    canChat: N,
    renderReactions: T,
    canAddNewReactions: g,
    isLurking: b,
    isGuest: k,
    isActiveChannelOrUnarchivableThread: _
  }),
  X = t.type === $.d4z.GUILD_ANNOUNCEMENT && null != u && u.hasFeature($.oNc.NEWS) && (G || p) && (0, I.Z)(n),
  ee = t.getGuildId(),
  et = null != ee && (n.type === $.uaV.USER_JOIN || n.type === $.uaV.GUILD_INVITE_REMINDER) && B.Z.canWithPartialContext($.Plq.MANAGE_GUILD, {
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
    showReminders: es
  } = Z.Z.useExperiment({
    location: 'message_utilities'
  }, {
    autoTrackExposure: !1
  }),
  {
    enabled: ea
  } = v.Z.useExperiment({
    location: 'message_utilities'
  }, {
    autoTrackExposure: !1
  }),
  [er, el] = (0, c.Wu)([x.Z], () => [
    x.Z.isMessageReminder(n.id),
    x.Z.isMessageBookmarked(n.id)
  ]),
  eo = (0, J.Z)(),
  ec = (0, c.e7)([E.Z], () => E.Z.keyboardModeEnabled);
return {
  channel: t,
  message: n,
  canPin: z,
  canEdit: q,
  canDelete: F,
  canReport: w,
  canReply: A,
  canStartThread: M,
  canViewThread: R,
  canForward: en && ei,
  canCopy: V.wS,
  hasDeveloperMode: h,
  canReact: !Q && T,
  canPublish: X,
  canConfigureJoin: et,
  isExpanded: eo && !ec && !i && !s && !a,
  showEmojiPicker: i,
  showEmojiBurstPicker: s,
  showMoreUtilities: a,
  showMessageRemindersActions: es,
  isMessageReminder: er,
  showMessageBookmarksActions: ea,
  isMessageBookmark: el,
  setPopout: r,
  isFocused: l,
  isGuildInviteReminder: n.type === $.uaV.GUILD_INVITE_REMINDER
};
  }(e), eE = s.useCallback(() => {
!b && w.default.track($.rMx.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
  message_id: n.id,
  channel: n.channel_id
}), eo({
  moreUtilities: !b
});
  }, [
b,
eo,
n
  ]), eI = s.useCallback(() => {
eo({
  emojiPicker: !k
});
  }, [
k,
eo
  ]), em = (0, L.$R)(t), eT = n.hasFlag($.iLy.CROSSPOSTED), [eh, eN] = (0, T.c)(M ? [u.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE] : []), ef = eh === u.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE, [eC, ep] = s.useState(!1), eg = s.useCallback(() => {
ep(!0);
  }, []), eS = s.useCallback(() => {
ep(!1);
  }, []), eA = s.useCallback((e, t) => {
eN(ee.L.TAKE_ACTION), (0, q.ts)(e, t);
  }, [eN]), {
canShowReactionsOnMessageHover: eM
  } = z.Z.useExperiment({
location: 'ExpandingButtons'
  }, {
autoTrackExposure: !0
  }), eR = {
channel: t,
message: n,
buttonClassName: eM ? en.hoverBarButton : void 0
  };
  return (0, i.jsxs)(i.Fragment, {
children: [
  R ? (0, i.jsxs)(i.Fragment, {
    children: [
      a && ec ? el({
        key: 'copy-id',
        label: et.Z.Messages.COPY_ID_MESSAGE,
        icon: d.IdIcon,
        onClick: q.F4,
        ...eR
      }) : null,
      a && !eu ? el({
        key: 'copy-link',
        label: et.Z.Messages.COPY_LINK,
        icon: d.LinkIcon,
        onClick: q.fB,
        ...eR
      }) : null,
      N ? el({
        key: 'configure',
        label: et.Z.Messages.CONFIGURE,
        icon: d.CircleQuestionIcon,
        onClick: q.zW,
        ...eR
      }) : null,
      F ? el({
        key: 'mark-reminder',
        label: X ? et.Z.Messages.MESSAGE_REMINDERS_MARK_AS_DONE : et.Z.Messages.MESSAGE_REMINDERS_MARK_AS_TODO,
        icon: X ? (0, d.makeIconCompat)(G.Z) : d.ListBulletsIcon,
        onClick: X ? q.l9 : q.W1,
        ...eR
      }) : null,
      em ? el({
        key: 'mark-unread',
        label: et.Z.Messages.MARK_UNREAD,
        icon: d.ChatMarkUnreadIcon,
        onClick: q.B8,
        ...eR
      }) : null,
      ei ? el({
        key: 'bookmark',
        label: es ? et.Z.Messages.MESSAGE_BOOKMARKS_REMOVE_BOOKMARK : et.Z.Messages.MESSAGE_BOOKMARKS_BOOKMARK,
        icon: d.InboxIcon,
        onClick: es ? q.eM : q.dF,
        ...eR
      }) : null,
      r ? el({
        key: 'pin',
        label: n.pinned ? et.Z.Messages.UNPIN_MESSAGE : et.Z.Messages.PIN_MESSAGE,
        icon: d.PinIcon,
        onClick: q.rY,
        ...eR
      }) : null,
      g && M ? el({
        key: 'thread',
        label: et.Z.Messages.CREATE_THREAD,
        icon: d.ThreadIcon,
        onClick: q.gK,
        ...eR
      }) : null,
      p && _ ? el({
        key: 'reply-self',
        label: et.Z.Messages.MESSAGE_ACTION_REPLY,
        icon: d.ArrowAngleLeftUpIcon,
        onClick: q.HH,
        ...eR
      }) : null
    ]
  }) : null,
  h && !eu ? (0, i.jsxs)(i.Fragment, {
    children: [
      eM && !R ? (0, i.jsx)(er, {
        ...eR
      }) : null,
      (0, i.jsx)(Q.Z, {
        togglePopout: eI,
        renderEmojiPicker: ed,
        shouldShow: k,
        isFocused: e_,
        iconClassName: eM ? en.icon : void 0,
        ...eR
      })
    ]
  }) : null,
  p && !_ ? el({
    key: 'reply-other',
    label: et.Z.Messages.MESSAGE_ACTION_REPLY,
    icon: d.ArrowAngleLeftUpIcon,
    onClick: q.HH,
    ...eR
  }) : null,
  _ ? el({
    key: 'edit',
    label: et.Z.Messages.EDIT,
    icon: d.PencilIcon,
    onClick: q.Hd,
    ...eR
  }) : null,
  M ? el({
    key: 'forward',
    label: et.Z.Messages.MESSAGE_ACTION_FORWARD,
    icon: d.ChatArrowRightIcon,
    onClick: eA,
    onTooltipShow: eg,
    onTooltipHide: eS,
    showNewBadge: !eC && ef,
    ...eR
  }) : null,
  g && !M ? el({
    key: 'thread',
    label: et.Z.Messages.CREATE_THREAD,
    icon: d.ThreadIcon,
    onClick: q.gK,
    ...eR
  }) : null,
  !g && A ? el({
    key: 'view-thread',
    label: et.Z.Messages.VIEW_THREAD,
    icon: d.ThreadIcon,
    onClick: q.qe,
    ...eR
  }) : null,
  m ? el({
    key: 'publish',
    label: eT ? et.Z.Messages.NEWS_CHANNEL_PUBLISHED : et.Z.Messages.NEWS_CHANNEL_PUBLISH,
    icon: d.AnnouncementsIcon,
    onClick: q.Xl,
    disabled: eT,
    ...eR
  }) : null,
  l && (eu || R) ? el({
    key: 'delete',
    label: et.Z.Messages.DELETE,
    icon: d.TrashIcon,
    onClick: q.$Z,
    dangerous: !0,
    separator: !R,
    ...eR
  }) : null,
  R && l ? null : (0, i.jsx)(d.Popout, {
    renderPopout: e => {
      let {
        updatePosition: s,
        closePopout: a
      } = e;
      return (0, i.jsx)(ea, {
        channel: t,
        message: n,
        canReport: o,
        onClose: a,
        updatePosition: s
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
        isShown: s
      } = t;
      return el({
        key: 'more',
        label: et.Z.Messages.MORE,
        icon: d.MoreHorizontalIcon,
        selected: s,
        onClick: eE,
        ...eR,
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
  } = e, s = (0, c.e7)([p.Z], () => null != p.Z.getMessage(n.id), [n.id]), a = null == n.interaction || null != n.interactionData && (0, g.$s)(n.interactionData);
  return (0, i.jsxs)(i.Fragment, {
children: [
  !s && a && el({
    key: 'retry',
    label: et.Z.Messages.RETRY,
    icon: d.RetryIcon,
    channel: t,
    message: n,
    onClick: q.mG
  }),
  el({
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
  null != e && (0, A.rU)(t.id, n.id, (0, M.g1)(e), void 0, {
burst: i
  });
}

function ed(e, t, n) {
  let s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
a = {
  openPopoutType: 'message_reaction_emoji_picker',
  ...s && {
    openPopoutType: 'message_super_reaction_emoji_picker',
    page: null != e.getGuildId() ? $.ZY5.GUILD_CHANNEL : $.ZY5.DM_CHANNEL,
    section: (0, M.s4)(e),
    object: $.qAy.EMOJI_REACTION_PICKER_POPOUT
  }
};
  return (0, i.jsx)(R.$, {
channel: e,
closePopout: n,
onSelectEmoji: (i, s, a) => {
  eu(i, e, t, a), s && (a ? o()(n, 150)() : n());
},
analyticsOverride: a,
messageId: t.id
  });
}
t.Z = s.memo(function(e) {
  let {
channel: t,
message: n,
isHeader: s
  } = e, a = (0, c.e7)([b.Z], () => b.Z.isEditing(t.id, n.id), [
t.id,
n.id
  ]), {
canShowReactionsOnMessageHover: l
  } = z.Z.useExperiment({
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
  return a || null == o && null == u ? null : (0, i.jsx)('div', {
className: r()(e.className, {
  [en.container]: !0,
  [en.isHeader]: s
}),
onClick: es,
onContextMenu: es,
role: 'group',
'aria-label': et.Z.Messages.MESSAGE_UTILITIES_A11Y_LABEL,
children: (0, i.jsxs)(F.ZP, {
  className: r()(e.innerClassName, en.inner, {
    [en.innerReactionHoverBar]: l
  }),
  children: [
    o,
    u
  ]
})
  });
});