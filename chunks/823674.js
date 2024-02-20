"use strict";
n.r(t), n.d(t, {
  default: function() {
    return ed
  }
});
var a = n("37983"),
  s = n("884691"),
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
  j = n("83900"),
  P = n("993477"),
  b = n("733160"),
  F = n("100300"),
  H = n("433487"),
  U = n("987772"),
  k = n("566998"),
  w = n("516358"),
  G = n("550515"),
  B = n("959097"),
  V = n("228220"),
  W = n("149279"),
  z = n("599110"),
  Z = n("306160"),
  K = n("870190"),
  Y = n("61400"),
  q = n("327054"),
  X = n("583022"),
  J = n("363396"),
  Q = n("891405"),
  $ = n("261649"),
  ee = n("739034"),
  et = n("49111"),
  en = n("782340"),
  ea = n("398226");

function es(e) {
  e.stopPropagation()
}

function el(e) {
  let {
    message: t,
    channel: n,
    canReport: a,
    onClose: s,
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
    canReport: a,
    onHeightUpdate: l,
    onClose: s,
    navId: "message-actions",
    ariaLabel: en.default.Messages.MESSAGE_UTILITIES_A11Y_LABEL
  })
}

function ei(e) {
  let {
    label: t,
    ariaLabel: n,
    tooltipText: s,
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
  return (0, a.jsx)(d.Tooltip, {
    text: null != s ? s : t,
    color: null != l ? l : d.TooltipColors.PRIMARY,
    "aria-label": t,
    hideOnClick: !0,
    tooltipClassName: ea.tooltip,
    children: e => {
      let {
        onMouseEnter: s,
        onMouseLeave: l,
        onClick: d
      } = e;
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)(W.Button, {
          onMouseEnter: s,
          onMouseLeave: l,
          onClick: e => {
            null == d || d(), c(o, u, e)
          },
          "aria-label": null != n ? n : t,
          disabled: h,
          dangerous: C,
          ...E,
          children: [(0, a.jsx)(i, {
            className: ea.icon,
            ...r
          }), m && (0, a.jsx)(x.default, {})]
        }), p && (0, a.jsx)(W.Separator, {})]
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
    isExpanded: G,
    showMoreUtilities: W,
    showEmojiPicker: $,
    showMessageRemindersActions: ea,
    isMessageReminder: es,
    setPopout: er,
    hasDeveloperMode: eo,
    isGuildInviteReminder: ed,
    isFocused: ec
  } = function(e) {
    let {
      channel: t,
      message: n,
      showEmojiPicker: a,
      showEmojiBurstPicker: s,
      showMoreUtilities: l,
      setPopout: i,
      isFocused: r
    } = e, {
      author: o
    } = n, d = (0, u.useStateFromStores)([v.default], () => v.default.getGuild(t.guild_id), [t.guild_id]), f = (0, u.useStateFromStores)([M.default], () => M.default.getId()), h = (0, T.useIsActiveChannelOrUnarchivableThread)(t), E = (0, T.useIsNonModInLockedThread)(t), g = A.RenderReactions.useSetting(), S = A.DeveloperMode.useSetting(), I = (0, u.useStateFromStores)([L.default], () => null == t.guild_id || L.default.canChatInGuild(t.guild_id), [t]), {
      canManageMessages: x,
      canAddNewReactions: y
    } = (0, u.useStateFromStoresObject)([R.default], () => ({
      canAddNewReactions: I && R.default.can(et.Permissions.ADD_REACTIONS, t),
      canManageMessages: R.default.can(et.Permissions.MANAGE_MESSAGES, t)
    }), [t, I]), O = (0, _.useCanReplyToMessage)(t, n), D = (0, T.useCanStartPublicThread)(t, n), j = (0, T.useCanViewThreadForMessage)(n), P = (0, u.useStateFromStores)([C.default], () => null != t.guild_id && C.default.isLurking(t.guild_id), [t]), b = (0, u.useStateFromStores)([N.default], () => null != t.guild_id && N.default.isCurrentUserGuest(t.guild_id), [t]), F = o.id === f, H = (x || F) && h && !et.MessageTypesSets.UNDELETABLE.has(n.type);
    n.type === et.MessageTypes.AUTO_MODERATION_ACTION && (H = H && x);
    let U = (0, K.canReportMessage)(n),
      k = (0, q.default)(n, t, x),
      w = !t.isSystemDM() && (0, Y.default)(n, f) && h && !E,
      {
        disableReactionCreates: G
      } = (0, X.default)({
        channel: t,
        canChat: I,
        renderReactions: g,
        canAddNewReactions: y,
        isLurking: P,
        isGuest: b,
        isActiveChannelOrUnarchivableThread: h
      }),
      B = t.type === et.ChannelTypes.GUILD_ANNOUNCEMENT && null != d && d.hasFeature(et.GuildFeatures.NEWS) && (F || x) && n.type === et.MessageTypes.DEFAULT,
      V = t.getGuildId(),
      W = null != V && (n.type === et.MessageTypes.USER_JOIN || n.type === et.MessageTypes.GUILD_INVITE_REMINDER) && R.default.canWithPartialContext(et.Permissions.MANAGE_GUILD, {
        guildId: V
      }),
      {
        showReminders: z
      } = p.default.useExperiment({
        location: "9bfedc_1"
      }, {
        autoTrackExposure: !1
      }),
      J = (0, u.useStateFromStores)([m.default], () => null != m.default.getMessageReminders().find(e => e.messageId === n.id)),
      Q = (0, ee.default)(),
      $ = (0, u.useStateFromStores)([c.default], () => c.default.keyboardModeEnabled);
    return {
      channel: t,
      message: n,
      canPin: k,
      canEdit: w,
      canDelete: H,
      canReport: U,
      canReply: O,
      canStartThread: D,
      canViewThread: j,
      canCopy: Z.SUPPORTS_COPY,
      hasDeveloperMode: S,
      canReact: !G && g,
      canPublish: B,
      canConfigureJoin: W,
      isExpanded: Q && !$ && !a && !s && !l,
      showEmojiPicker: a,
      showEmojiBurstPicker: s,
      showMoreUtilities: l,
      showMessageRemindersActions: z,
      isMessageReminder: J,
      setPopout: i,
      isFocused: r,
      isGuildInviteReminder: n.type === et.MessageTypes.GUILD_INVITE_REMINDER
    }
  }(e), ef = s.useCallback(() => {
    !W && z.default.track(et.AnalyticEvents.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
      message_id: n.id,
      channel: n.channel_id
    }), er({
      moreUtilities: !W
    })
  }, [W, er, n]), eh = s.useCallback(() => {
    er({
      emojiPicker: !$
    })
  }, [$, er]), eC = (0, T.useIsActiveChannelOrUnarchivableThread)(t), ep = n.hasFlag(et.MessageFlags.CROSSPOSTED);
  return (0, a.jsxs)(a.Fragment, {
    children: [G ? (0, a.jsxs)(a.Fragment, {
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
        icon: j.default,
        onClick: J.copyLink
      }) : null, g ? ei({
        key: "configure",
        channel: t,
        message: n,
        label: en.default.Messages.CONFIGURE,
        icon: D.default,
        onClick: J.configureJoin
      }) : null, ea ? ei({
        key: "mark-reminder",
        channel: t,
        message: n,
        label: es ? en.default.Messages.MESSAGE_REMINDERS_MARK_AS_DONE : en.default.Messages.MESSAGE_REMINDERS_MARK_AS_TODO,
        icon: es ? y.default : F.default,
        onClick: es ? J.markMessageRemindersAsComplete : J.markMessageAsReminder
      }) : null, eC ? ei({
        key: "mark-unread",
        channel: t,
        message: n,
        label: en.default.Messages.MARK_UNREAD,
        icon: P.default,
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
        icon: w.default,
        onClick: J.replyToMessage
      }) : null]
    }) : null, E && !ed ? (0, a.jsx)(Q.default, {
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
      icon: w.default,
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
      icon: B.default,
      onClick: J.createThread
    }) : null, !I && x ? ei({
      key: "view-thread",
      channel: t,
      message: n,
      label: en.default.Messages.VIEW_THREAD,
      icon: B.default,
      onClick: J.goToThread
    }) : null, h ? ei({
      key: "publish",
      channel: t,
      message: n,
      label: ep ? en.default.Messages.NEWS_CHANNEL_PUBLISHED : en.default.Messages.NEWS_CHANNEL_PUBLISH,
      icon: b.default,
      onClick: J.publishMessage,
      disabled: ep
    }) : null, r && (ed || G) ? ei({
      key: "delete",
      channel: t,
      message: n,
      label: en.default.Messages.DELETE,
      icon: V.default,
      onClick: J.deleteMessage,
      dangerous: !0,
      separator: !G
    }) : null, G && r ? null : (0, a.jsx)(d.Popout, {
      renderPopout: e => {
        let {
          updatePosition: s,
          closePopout: l
        } = e;
        return (0, a.jsx)(el, {
          channel: t,
          message: n,
          canReport: o,
          onClose: l,
          updatePosition: s
        })
      },
      shouldShow: W,
      onRequestClose: ef,
      position: "left",
      align: "top",
      animation: d.Popout.Animation.NONE,
      children: (e, a) => {
        let {
          onClick: s,
          ...l
        } = e, {
          isShown: i
        } = a;
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
  } = e, s = (0, u.useStateFromStores)([f.default], () => null != f.default.getMessage(n.id), [n.id]), l = null == n.interaction || null != n.interactionData && (0, h.canRetryInteractionData)(n.interactionData);
  return (0, a.jsxs)(a.Fragment, {
    children: [!s && l && ei({
      key: "retry",
      label: en.default.Messages.RETRY,
      icon: G.default,
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
  let s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    l = {
      openPopoutType: "message_reaction_emoji_picker",
      ...s && {
        openPopoutType: "message_super_reaction_emoji_picker",
        page: null != e.getGuildId() ? et.AnalyticsPages.GUILD_CHANNEL : et.AnalyticsPages.DM_CHANNEL,
        section: (0, g.getBurstAnalyticsSection)(e),
        object: et.AnalyticsObjects.EMOJI_REACTION_PICKER_POPOUT
      }
    };
  return (0, a.jsx)(S.ReactionPicker, {
    channel: e,
    closePopout: n,
    onSelectEmoji: (a, s, l) => {
      ! function(e, t, n) {
        let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        null != e && (0, E.addReaction)(t.id, n.id, (0, g.toReactionEmoji)(e), void 0, {
          burst: a
        })
      }(a, e, t, l), s && (l ? o(n, 150)() : n())
    },
    analyticsOverride: l,
    messageId: t.id
  })
}
var ed = s.memo(function(e) {
  let {
    channel: t,
    message: n,
    isHeader: s
  } = e, l = (0, u.useStateFromStores)([I.default], () => I.default.isEditing(t.id, n.id), [t.id, n.id]), r = function(e) {
    let {
      channel: t,
      message: n
    } = e;
    return n.state === et.MessageStates.SEND_FAILED ? (0, a.jsx)(eo, {
      channel: t,
      message: n
    }) : null
  }(e), o = function(e) {
    let {
      message: t
    } = e;
    return t.state !== et.MessageStates.SEND_FAILED ? (0, a.jsx)(er, {
      ...e
    }) : null
  }(e);
  return l || null == r && null == o ? null : (0, a.jsx)("div", {
    className: i(e.className, {
      [ea.container]: !0,
      [ea.isHeader]: s
    }),
    onClick: es,
    onContextMenu: es,
    role: "group",
    "aria-label": en.default.Messages.MESSAGE_UTILITIES_A11Y_LABEL,
    children: (0, a.jsxs)(W.default, {
      className: e.innerClassName,
      children: [r, o]
    })
  })
})