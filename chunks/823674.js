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
  E = n("520899"),
  m = n("166257"),
  g = n("432173"),
  _ = n("219013"),
  S = n("625149"),
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
  H = n("100300"),
  F = n("433487"),
  U = n("987772"),
  k = n("566998"),
  w = n("516358"),
  G = n("550515"),
  B = n("959097"),
  V = n("228220"),
  W = n("149279"),
  Z = n("599110"),
  z = n("306160"),
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
    sparkle: E,
    ...m
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
          ...m,
          children: [(0, a.jsx)(i, {
            className: ea.icon,
            ...r
          }), E && (0, a.jsx)(x.default, {})]
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
    canReact: m,
    canConfigureJoin: g,
    canReply: _,
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
    var t;
    let {
      channel: n,
      message: a,
      showEmojiPicker: s,
      showEmojiBurstPicker: l,
      showMoreUtilities: i,
      setPopout: r,
      isFocused: o
    } = e, {
      author: d
    } = a, f = (0, u.useStateFromStores)([v.default], () => v.default.getGuild(n.guild_id), [n.guild_id]), h = (0, u.useStateFromStores)([M.default], () => M.default.getId()), m = (0, T.useIsActiveChannelOrUnarchivableThread)(n), g = (0, T.useIsNonModInLockedThread)(n), _ = A.RenderReactions.useSetting(), I = A.DeveloperMode.useSetting(), x = (0, u.useStateFromStores)([L.default], () => null == n.guild_id || L.default.canChatInGuild(n.guild_id), [n]), {
      canManageMessages: y,
      canAddNewReactions: O
    } = (0, u.useStateFromStoresObject)([R.default], () => ({
      canAddNewReactions: x && R.default.can(et.Permissions.ADD_REACTIONS, n),
      canManageMessages: R.default.can(et.Permissions.MANAGE_MESSAGES, n)
    }), [n, x]), D = (0, S.useCanReplyToMessage)(n, a), P = (0, T.useCanStartPublicThread)(n, a), j = (0, T.useCanViewThreadForMessage)(a), b = (0, u.useStateFromStores)([C.default], () => null != n.guild_id && C.default.isLurking(n.guild_id), [n]), H = (0, u.useStateFromStores)([N.default], () => null != n.guild_id && N.default.isCurrentUserGuest(n.guild_id), [n]), F = d.id === h, U = (null === (t = a.interactionMetadata) || void 0 === t ? void 0 : t.user_id) === h, k = (y || F || U) && m && !et.MessageTypesSets.UNDELETABLE.has(a.type);
    a.type === et.MessageTypes.AUTO_MODERATION_ACTION && (k = k && y);
    let w = (0, Y.canReportMessage)(a),
      G = (0, q.default)(a, n, y),
      B = !n.isSystemDM() && (0, K.default)(a, h) && m && !g,
      {
        disableReactionCreates: V
      } = (0, X.default)({
        channel: n,
        canChat: x,
        renderReactions: _,
        canAddNewReactions: O,
        isLurking: b,
        isGuest: H,
        isActiveChannelOrUnarchivableThread: m
      }),
      W = n.type === et.ChannelTypes.GUILD_ANNOUNCEMENT && null != f && f.hasFeature(et.GuildFeatures.NEWS) && (F || y) && a.type === et.MessageTypes.DEFAULT,
      Z = n.getGuildId(),
      J = null != Z && (a.type === et.MessageTypes.USER_JOIN || a.type === et.MessageTypes.GUILD_INVITE_REMINDER) && R.default.canWithPartialContext(et.Permissions.MANAGE_GUILD, {
        guildId: Z
      }),
      {
        showReminders: Q
      } = p.default.useExperiment({
        location: "9bfedc_1"
      }, {
        autoTrackExposure: !1
      }),
      $ = (0, u.useStateFromStores)([E.default], () => null != E.default.getMessageReminders().find(e => e.messageId === a.id)),
      en = (0, ee.default)(),
      ea = (0, u.useStateFromStores)([c.default], () => c.default.keyboardModeEnabled);
    return {
      channel: n,
      message: a,
      canPin: G,
      canEdit: B,
      canDelete: k,
      canReport: w,
      canReply: D,
      canStartThread: P,
      canViewThread: j,
      canCopy: z.SUPPORTS_COPY,
      hasDeveloperMode: I,
      canReact: !V && _,
      canPublish: W,
      canConfigureJoin: J,
      isExpanded: en && !ea && !s && !l && !i,
      showEmojiPicker: s,
      showEmojiBurstPicker: l,
      showMoreUtilities: i,
      showMessageRemindersActions: Q,
      isMessageReminder: $,
      setPopout: r,
      isFocused: o,
      isGuildInviteReminder: a.type === et.MessageTypes.GUILD_INVITE_REMINDER
    }
  }(e), ef = s.useCallback(() => {
    !W && Z.default.track(et.AnalyticEvents.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
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
        icon: P.default,
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
        icon: es ? y.default : H.default,
        onClick: es ? J.markMessageRemindersAsComplete : J.markMessageAsReminder
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
      }) : null, _ && f ? ei({
        key: "reply-self",
        channel: t,
        message: n,
        label: en.default.Messages.MESSAGE_ACTION_REPLY,
        icon: w.default,
        onClick: J.replyToMessage
      }) : null]
    }) : null, m && !ed ? (0, a.jsx)(Q.default, {
      channel: t,
      message: n,
      togglePopout: eh,
      renderEmojiPicker: eu,
      shouldShow: $,
      isFocused: ec
    }) : null, _ && !f ? ei({
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
          icon: F.default,
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
  return (0, a.jsx)(_.ReactionPicker, {
    channel: e,
    closePopout: n,
    onSelectEmoji: (a, s, l) => {
      ! function(e, t, n) {
        let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        null != e && (0, m.addReaction)(t.id, n.id, (0, g.toReactionEmoji)(e), void 0, {
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