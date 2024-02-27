"use strict";
n.r(t), n.d(t, {
  default: function() {
    return ed
  }
});
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("483366"),
  o = n.n(r),
  u = n("446674"),
  d = n("77078"),
  c = n("206230"),
  f = n("619259"),
  h = n("752598"),
  C = n("267567"),
  p = n("979268"),
  m = n("520899"),
  E = n("166257"),
  g = n("432173"),
  S = n("219013"),
  _ = n("625149"),
  T = n("300322"),
  A = n("845579"),
  M = n("271938"),
  I = n("836417"),
  N = n("26989"),
  v = n("305961"),
  L = n("88093"),
  R = n("957255"),
  x = n("886074"),
  y = n("36562"),
  O = n("662255"),
  D = n("85175"),
  P = n("83900"),
  j = n("993477"),
  b = n("733160"),
  F = n("100300"),
  H = n("433487"),
  U = n("987772"),
  k = n("566998"),
  B = n("516358"),
  w = n("550515"),
  G = n("959097"),
  V = n("228220"),
  W = n("149279"),
  z = n("599110"),
  Z = n("306160"),
  Y = n("870190"),
  K = n("61400"),
  q = n("327054"),
  X = n("583022"),
  J = n("363396"),
  Q = n("891405"),
  $ = n("261649"),
  ee = n("739034"),
  et = n("49111"),
  en = n("782340"),
  es = n("398226");

function ea(e) {
  e.stopPropagation()
}

function el(e) {
  let {
    message: t,
    channel: n,
    canReport: s,
    onClose: a,
    updatePosition: l
  } = e;
  return (0, $.useMessageMenu)({
    message: t,
    channel: n,
    textSelection: "",
    favoriteableType: null,
    favoriteableId: null,
    favoriteableName: null,
    itemHref: void 0,
    itemSrc: void 0,
    itemSafeSrc: void 0,
    itemTextContent: void 0,
    canReport: s,
    onHeightUpdate: l,
    onClose: a,
    navId: "message-actions",
    ariaLabel: en.default.Messages.MESSAGE_UTILITIES_A11Y_LABEL
  })
}

function ei(e) {
  let {
    label: t,
    ariaLabel: n,
    tooltipText: a,
    tooltipColor: l,
    icon: i,
    iconProps: r,
    channel: o,
    message: u,
    onClick: c,
    key: f,
    disabled: h,
    dangerous: C,
    separator: p,
    sparkle: m,
    ...E
  } = e;
  return (0, s.jsx)(d.Tooltip, {
    text: null != a ? a : t,
    color: null != l ? l : d.TooltipColors.PRIMARY,
    "aria-label": t,
    hideOnClick: !0,
    tooltipClassName: es.tooltip,
    children: e => {
      let {
        onMouseEnter: a,
        onMouseLeave: l,
        onClick: d
      } = e;
      return (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsxs)(W.Button, {
          onMouseEnter: a,
          onMouseLeave: l,
          onClick: e => {
            null == d || d(), c(o, u, e)
          },
          "aria-label": null != n ? n : t,
          disabled: h,
          dangerous: C,
          ...E,
          children: [(0, s.jsx)(i, {
            className: es.icon,
            ...r
          }), m && (0, s.jsx)(x.default, {})]
        }), p && (0, s.jsx)(W.Separator, {})]
      })
    }
  }, f)
}

function er(e) {
  let {
    channel: t,
    message: n,
    canCopy: l,
    canPin: i,
    canDelete: r,
    canReport: o,
    canEdit: f,
    canPublish: h,
    canReact: E,
    canConfigureJoin: g,
    canReply: S,
    canStartThread: I,
    canViewThread: x,
    isExpanded: w,
    showMoreUtilities: W,
    showEmojiPicker: $,
    showMessageRemindersActions: es,
    isMessageReminder: ea,
    setPopout: er,
    hasDeveloperMode: eo,
    isGuildInviteReminder: ed,
    isFocused: ec
  } = function(e) {
    var t;
    let {
      channel: n,
      message: s,
      showEmojiPicker: a,
      showEmojiBurstPicker: l,
      showMoreUtilities: i,
      setPopout: r,
      isFocused: o
    } = e, {
      author: d
    } = s, f = (0, u.useStateFromStores)([v.default], () => v.default.getGuild(n.guild_id), [n.guild_id]), h = (0, u.useStateFromStores)([M.default], () => M.default.getId()), E = (0, T.useIsActiveChannelOrUnarchivableThread)(n), g = (0, T.useIsNonModInLockedThread)(n), S = A.RenderReactions.useSetting(), I = A.DeveloperMode.useSetting(), x = (0, u.useStateFromStores)([L.default], () => null == n.guild_id || L.default.canChatInGuild(n.guild_id), [n]), {
      canManageMessages: y,
      canAddNewReactions: O
    } = (0, u.useStateFromStoresObject)([R.default], () => ({
      canAddNewReactions: x && R.default.can(et.Permissions.ADD_REACTIONS, n),
      canManageMessages: R.default.can(et.Permissions.MANAGE_MESSAGES, n)
    }), [n, x]), D = (0, _.useCanReplyToMessage)(n, s), P = (0, T.useCanStartPublicThread)(n, s), j = (0, T.useCanViewThreadForMessage)(s), b = (0, u.useStateFromStores)([C.default], () => null != n.guild_id && C.default.isLurking(n.guild_id), [n]), F = (0, u.useStateFromStores)([N.default], () => null != n.guild_id && N.default.isCurrentUserGuest(n.guild_id), [n]), H = d.id === h, U = (null === (t = s.interactionMetadata) || void 0 === t ? void 0 : t.user_id) === h, k = (y || H || U) && E && !et.MessageTypesSets.UNDELETABLE.has(s.type);
    s.type === et.MessageTypes.AUTO_MODERATION_ACTION && (k = k && y);
    let B = (0, Y.canReportMessage)(s),
      w = (0, q.default)(s, n, y),
      G = !n.isSystemDM() && (0, K.default)(s, h) && E && !g,
      {
        disableReactionCreates: V
      } = (0, X.default)({
        channel: n,
        canChat: x,
        renderReactions: S,
        canAddNewReactions: O,
        isLurking: b,
        isGuest: F,
        isActiveChannelOrUnarchivableThread: E
      }),
      W = n.type === et.ChannelTypes.GUILD_ANNOUNCEMENT && null != f && f.hasFeature(et.GuildFeatures.NEWS) && (H || y) && s.type === et.MessageTypes.DEFAULT,
      z = n.getGuildId(),
      J = null != z && (s.type === et.MessageTypes.USER_JOIN || s.type === et.MessageTypes.GUILD_INVITE_REMINDER) && R.default.canWithPartialContext(et.Permissions.MANAGE_GUILD, {
        guildId: z
      }),
      {
        showReminders: Q
      } = p.default.useExperiment({
        location: "9bfedc_1"
      }, {
        autoTrackExposure: !1
      }),
      $ = (0, u.useStateFromStores)([m.default], () => null != m.default.getMessageReminders().find(e => e.messageId === s.id)),
      en = (0, ee.default)(),
      es = (0, u.useStateFromStores)([c.default], () => c.default.keyboardModeEnabled);
    return {
      channel: n,
      message: s,
      canPin: w,
      canEdit: G,
      canDelete: k,
      canReport: B,
      canReply: D,
      canStartThread: P,
      canViewThread: j,
      canCopy: Z.SUPPORTS_COPY,
      hasDeveloperMode: I,
      canReact: !V && S,
      canPublish: W,
      canConfigureJoin: J,
      isExpanded: en && !es && !a && !l && !i,
      showEmojiPicker: a,
      showEmojiBurstPicker: l,
      showMoreUtilities: i,
      showMessageRemindersActions: Q,
      isMessageReminder: $,
      setPopout: r,
      isFocused: o,
      isGuildInviteReminder: s.type === et.MessageTypes.GUILD_INVITE_REMINDER
    }
  }(e), ef = a.useCallback(() => {
    !W && z.default.track(et.AnalyticEvents.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
      message_id: n.id,
      channel: n.channel_id
    }), er({
      moreUtilities: !W
    })
  }, [W, er, n]), eh = a.useCallback(() => {
    er({
      emojiPicker: !$
    })
  }, [$, er]), eC = (0, T.useIsActiveChannelOrUnarchivableThread)(t), ep = n.hasFlag(et.MessageFlags.CROSSPOSTED);
  return (0, s.jsxs)(s.Fragment, {
    children: [w ? (0, s.jsxs)(s.Fragment, {
      children: [l && eo ? ei({
        key: "copy-id",
        channel: t,
        message: n,
        label: en.default.Messages.COPY_ID_MESSAGE,
        icon: O.default,
        onClick: J.copyId
      }) : null, l && !ed ? ei({
        key: "copy-link",
        channel: t,
        message: n,
        label: en.default.Messages.COPY_LINK,
        icon: P.default,
        onClick: J.copyLink
      }) : null, g ? ei({
        key: "configure",
        channel: t,
        message: n,
        label: en.default.Messages.CONFIGURE,
        icon: D.default,
        onClick: J.configureJoin
      }) : null, es ? ei({
        key: "mark-reminder",
        channel: t,
        message: n,
        label: ea ? en.default.Messages.MESSAGE_REMINDERS_MARK_AS_DONE : en.default.Messages.MESSAGE_REMINDERS_MARK_AS_TODO,
        icon: ea ? y.default : F.default,
        onClick: ea ? J.markMessageRemindersAsComplete : J.markMessageAsReminder
      }) : null, eC ? ei({
        key: "mark-unread",
        channel: t,
        message: n,
        label: en.default.Messages.MARK_UNREAD,
        icon: j.default,
        onClick: J.markMessageUnread
      }) : null, i ? ei({
        key: "pin",
        channel: t,
        message: n,
        label: n.pinned ? en.default.Messages.UNPIN_MESSAGE : en.default.Messages.PIN_MESSAGE,
        icon: k.default,
        onClick: J.pinMessage
      }) : null, S && f ? ei({
        key: "reply-self",
        channel: t,
        message: n,
        label: en.default.Messages.MESSAGE_ACTION_REPLY,
        icon: B.default,
        onClick: J.replyToMessage
      }) : null]
    }) : null, E && !ed ? (0, s.jsx)(Q.default, {
      channel: t,
      message: n,
      togglePopout: eh,
      renderEmojiPicker: eu,
      shouldShow: $,
      isFocused: ec
    }) : null, S && !f ? ei({
      key: "reply-other",
      channel: t,
      message: n,
      label: en.default.Messages.MESSAGE_ACTION_REPLY,
      icon: B.default,
      onClick: J.replyToMessage
    }) : null, f ? ei({
      key: "edit",
      channel: t,
      message: n,
      label: en.default.Messages.EDIT,
      icon: U.default,
      onClick: J.editMessage
    }) : null, I ? ei({
      key: "thread",
      channel: t,
      message: n,
      label: en.default.Messages.CREATE_THREAD,
      icon: G.default,
      onClick: J.createThread
    }) : null, !I && x ? ei({
      key: "view-thread",
      channel: t,
      message: n,
      label: en.default.Messages.VIEW_THREAD,
      icon: G.default,
      onClick: J.goToThread
    }) : null, h ? ei({
      key: "publish",
      channel: t,
      message: n,
      label: ep ? en.default.Messages.NEWS_CHANNEL_PUBLISHED : en.default.Messages.NEWS_CHANNEL_PUBLISH,
      icon: b.default,
      onClick: J.publishMessage,
      disabled: ep
    }) : null, r && (ed || w) ? ei({
      key: "delete",
      channel: t,
      message: n,
      label: en.default.Messages.DELETE,
      icon: V.default,
      onClick: J.deleteMessage,
      dangerous: !0,
      separator: !w
    }) : null, w && r ? null : (0, s.jsx)(d.Popout, {
      renderPopout: e => {
        let {
          updatePosition: a,
          closePopout: l
        } = e;
        return (0, s.jsx)(el, {
          channel: t,
          message: n,
          canReport: o,
          onClose: l,
          updatePosition: a
        })
      },
      shouldShow: W,
      onRequestClose: ef,
      position: "left",
      align: "top",
      animation: d.Popout.Animation.NONE,
      children: (e, s) => {
        let {
          onClick: a,
          ...l
        } = e, {
          isShown: i
        } = s;
        return ei({
          key: "more",
          label: en.default.Messages.MORE,
          icon: H.default,
          channel: t,
          message: n,
          selected: i,
          onClick: ef,
          ...l
        })
      }
    })]
  })
}

function eo(e) {
  let {
    channel: t,
    message: n
  } = e, a = (0, u.useStateFromStores)([f.default], () => null != f.default.getMessage(n.id), [n.id]), l = null == n.interaction || null != n.interactionData && (0, h.canRetryInteractionData)(n.interactionData);
  return (0, s.jsxs)(s.Fragment, {
    children: [!a && l && ei({
      key: "retry",
      label: en.default.Messages.RETRY,
      icon: w.default,
      channel: t,
      message: n,
      onClick: J.retrySendMessage
    }), ei({
      key: "delete-usent",
      label: en.default.Messages.DELETE,
      icon: V.default,
      channel: t,
      message: n,
      onClick: J.deleteMessage
    })]
  })
}

function eu(e, t, n) {
  let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    l = {
      openPopoutType: "message_reaction_emoji_picker",
      ...a && {
        openPopoutType: "message_super_reaction_emoji_picker",
        page: null != e.getGuildId() ? et.AnalyticsPages.GUILD_CHANNEL : et.AnalyticsPages.DM_CHANNEL,
        section: (0, g.getBurstAnalyticsSection)(e),
        object: et.AnalyticsObjects.EMOJI_REACTION_PICKER_POPOUT
      }
    };
  return (0, s.jsx)(S.ReactionPicker, {
    channel: e,
    closePopout: n,
    onSelectEmoji: (s, a, l) => {
      ! function(e, t, n) {
        let s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        null != e && (0, E.addReaction)(t.id, n.id, (0, g.toReactionEmoji)(e), void 0, {
          burst: s
        })
      }(s, e, t, l), a && (l ? o(n, 150)() : n())
    },
    analyticsOverride: l,
    messageId: t.id
  })
}
var ed = a.memo(function(e) {
  let {
    channel: t,
    message: n,
    isHeader: a
  } = e, l = (0, u.useStateFromStores)([I.default], () => I.default.isEditing(t.id, n.id), [t.id, n.id]), r = function(e) {
    let {
      channel: t,
      message: n
    } = e;
    return n.state === et.MessageStates.SEND_FAILED ? (0, s.jsx)(eo, {
      channel: t,
      message: n
    }) : null
  }(e), o = function(e) {
    let {
      message: t
    } = e;
    return t.state !== et.MessageStates.SEND_FAILED ? (0, s.jsx)(er, {
      ...e
    }) : null
  }(e);
  return l || null == r && null == o ? null : (0, s.jsx)("div", {
    className: i(e.className, {
      [es.container]: !0,
      [es.isHeader]: a
    }),
    onClick: ea,
    onContextMenu: ea,
    role: "group",
    "aria-label": en.default.Messages.MESSAGE_UTILITIES_A11Y_LABEL,
    children: (0, s.jsxs)(W.default, {
      className: e.innerClassName,
      children: [r, o]
    })
  })
})