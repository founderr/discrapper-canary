"use strict";
n.r(t);
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("954955"),
  o = n.n(r),
  u = n("442837"),
  d = n("138270"),
  c = n("481060"),
  f = n("607070"),
  h = n("346610"),
  m = n("868643"),
  p = n("223606"),
  E = n("188597"),
  C = n("41776"),
  g = n("641051"),
  S = n("329461"),
  _ = n("222677"),
  T = n("995774"),
  I = n("931651"),
  A = n("280845"),
  x = n("665906"),
  v = n("695346"),
  N = n("314897"),
  M = n("323873"),
  y = n("271383"),
  R = n("430824"),
  L = n("607744"),
  j = n("496675"),
  O = n("468210"),
  P = n("448239"),
  D = n("754424"),
  b = n("885442"),
  U = n("757698"),
  F = n("827104"),
  w = n("316949"),
  k = n("282597"),
  H = n("808268"),
  G = n("185403"),
  B = n("394831"),
  V = n("351167"),
  W = n("612418"),
  Y = n("934458"),
  z = n("740727"),
  K = n("404975"),
  Z = n("626135"),
  X = n("572004"),
  q = n("970257"),
  J = n("418476"),
  Q = n("151007"),
  $ = n("432376"),
  ee = n("996861"),
  et = n("603490"),
  en = n("225138"),
  ea = n("717680"),
  el = n("981631"),
  es = n("689938"),
  ei = n("966631");

function er(e) {
  e.stopPropagation()
}

function eo(e) {
  let {
    message: t,
    channel: n,
    canReport: a,
    onClose: l,
    updatePosition: s
  } = e;
  return (0, en.useMessageMenu)({
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
    onHeightUpdate: s,
    onClose: l,
    navId: "message-actions",
    ariaLabel: es.default.Messages.MESSAGE_UTILITIES_A11Y_LABEL
  })
}

function eu(e) {
  let {
    label: t,
    ariaLabel: n,
    tooltipText: l,
    tooltipColor: s,
    icon: i,
    iconProps: r,
    channel: o,
    message: u,
    onClick: d,
    key: f,
    disabled: h,
    dangerous: m,
    separator: p,
    sparkle: E,
    ...C
  } = e;
  return (0, a.jsx)(c.Tooltip, {
    text: null != l ? l : t,
    color: null != s ? s : c.TooltipColors.PRIMARY,
    "aria-label": t,
    hideOnClick: !0,
    tooltipClassName: ei.tooltip,
    children: e => {
      let {
        onMouseEnter: l,
        onMouseLeave: s,
        onClick: c
      } = e;
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)(K.Button, {
          onMouseEnter: l,
          onMouseLeave: s,
          onClick: e => {
            null == c || c(), d(o, u, e)
          },
          "aria-label": null != n ? n : t,
          disabled: h,
          dangerous: m,
          ...C,
          children: [(0, a.jsx)(i, {
            className: ei.icon,
            ...r
          }), E && (0, a.jsx)(O.default, {})]
        }), p && (0, a.jsx)(K.Separator, {})]
      })
    }
  }, f)
}

function ed(e) {
  let {
    channel: t,
    message: n,
    canCopy: s,
    canPin: i,
    canDelete: r,
    canReport: o,
    canEdit: p,
    canPublish: E,
    canReact: _,
    canConfigureJoin: T,
    canReply: I,
    canStartThread: M,
    canViewThread: O,
    canForward: W,
    isExpanded: K,
    showMoreUtilities: en,
    showEmojiPicker: ei,
    showMessageRemindersActions: er,
    isMessageReminder: ed,
    setPopout: ec,
    hasDeveloperMode: eh,
    isGuildInviteReminder: em,
    isFocused: ep
  } = function(e) {
    let {
      channel: t,
      message: n,
      showEmojiPicker: a,
      showEmojiBurstPicker: l,
      showMoreUtilities: s,
      setPopout: i,
      isFocused: r
    } = e, {
      author: o
    } = n, d = (0, u.useStateFromStores)([R.default], () => R.default.getGuild(t.guild_id), [t.guild_id]), c = (0, u.useStateFromStores)([N.default], () => N.default.getId()), p = (0, x.useIsActiveChannelOrUnarchivableThread)(t), E = (0, x.useIsNonModInLockedThread)(t), _ = v.RenderReactions.useSetting(), T = v.DeveloperMode.useSetting(), I = (0, u.useStateFromStores)([L.default], () => null == t.guild_id || L.default.canChatInGuild(t.guild_id), [t]), {
      canManageMessages: M,
      canAddNewReactions: O
    } = (0, u.useStateFromStoresObject)([j.default], () => ({
      canAddNewReactions: I && j.default.can(el.Permissions.ADD_REACTIONS, t),
      canManageMessages: j.default.can(el.Permissions.MANAGE_MESSAGES, t)
    }), [t, I]), P = (0, A.useCanReplyToMessage)(t, n), D = (0, x.useCanStartPublicThread)(t, n), b = (0, x.useCanViewThreadForMessage)(n), U = (0, u.useStateFromStores)([C.default], () => null != t.guild_id && C.default.isLurking(t.guild_id), [t]), F = (0, u.useStateFromStores)([y.default], () => null != t.guild_id && y.default.isCurrentUserGuest(t.guild_id), [t]), w = o.id === c, k = (M || n.canDeleteOwnMessage(c)) && p && !el.MessageTypesSets.UNDELETABLE.has(n.type);
    n.type === el.MessageTypes.AUTO_MODERATION_ACTION && (k = k && M);
    let H = (0, q.canReportMessage)(n),
      G = (0, Q.default)(n, t, M),
      B = !t.isSystemDM() && (0, J.default)(n, c) && p && !E,
      {
        disableReactionCreates: V
      } = (0, $.default)({
        channel: t,
        canChat: I,
        renderReactions: _,
        canAddNewReactions: O,
        isLurking: U,
        isGuest: F,
        isActiveChannelOrUnarchivableThread: p
      }),
      W = t.type === el.ChannelTypes.GUILD_ANNOUNCEMENT && null != d && d.hasFeature(el.GuildFeatures.NEWS) && (w || M) && n.type === el.MessageTypes.DEFAULT && !n.isPoll(),
      Y = t.getGuildId(),
      z = null != Y && (n.type === el.MessageTypes.USER_JOIN || n.type === el.MessageTypes.GUILD_INVITE_REMINDER) && j.default.canWithPartialContext(el.Permissions.MANAGE_GUILD, {
        guildId: Y
      }),
      {
        canForwardMessages: K
      } = h.MessageForwardingExperiment.useExperiment({
        location: "useMessageUtilitiesProps"
      }),
      Z = (0, m.useCanForwardMessage)(n),
      {
        showReminders: ee
      } = g.default.useExperiment({
        location: "9bfedc_1"
      }, {
        autoTrackExposure: !1
      }),
      et = (0, u.useStateFromStores)([S.default], () => null != S.default.getMessageReminders().find(e => e.messageId === n.id)),
      en = (0, ea.default)(),
      es = (0, u.useStateFromStores)([f.default], () => f.default.keyboardModeEnabled);
    return {
      channel: t,
      message: n,
      canPin: G,
      canEdit: B,
      canDelete: k,
      canReport: H,
      canReply: P,
      canStartThread: D,
      canViewThread: b,
      canForward: K && Z,
      canCopy: X.SUPPORTS_COPY,
      hasDeveloperMode: T,
      canReact: !V && _,
      canPublish: W,
      canConfigureJoin: z,
      isExpanded: en && !es && !a && !l && !s,
      showEmojiPicker: a,
      showEmojiBurstPicker: l,
      showMoreUtilities: s,
      showMessageRemindersActions: ee,
      isMessageReminder: et,
      setPopout: i,
      isFocused: r,
      isGuildInviteReminder: n.type === el.MessageTypes.GUILD_INVITE_REMINDER
    }
  }(e), eE = l.useCallback(() => {
    !en && Z.default.track(el.AnalyticEvents.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
      message_id: n.id,
      channel: n.channel_id
    }), ec({
      moreUtilities: !en
    })
  }, [en, ec, n]), eC = l.useCallback(() => {
    ec({
      emojiPicker: !ei
    })
  }, [ei, ec]), eg = (0, x.useIsActiveChannelOrUnarchivableThread)(t), eS = n.hasFlag(el.MessageFlags.CROSSPOSTED);
  return (0, a.jsxs)(a.Fragment, {
    children: [K ? (0, a.jsxs)(a.Fragment, {
      children: [s && eh ? eu({
        key: "copy-id",
        channel: t,
        message: n,
        label: es.default.Messages.COPY_ID_MESSAGE,
        icon: D.default,
        onClick: ee.copyId
      }) : null, s && !em ? eu({
        key: "copy-link",
        channel: t,
        message: n,
        label: es.default.Messages.COPY_LINK,
        icon: U.default,
        onClick: ee.copyLink
      }) : null, T ? eu({
        key: "configure",
        channel: t,
        message: n,
        label: es.default.Messages.CONFIGURE,
        icon: b.default,
        onClick: ee.configureJoin
      }) : null, er ? eu({
        key: "mark-reminder",
        channel: t,
        message: n,
        label: ed ? es.default.Messages.MESSAGE_REMINDERS_MARK_AS_DONE : es.default.Messages.MESSAGE_REMINDERS_MARK_AS_TODO,
        icon: ed ? P.default : k.default,
        onClick: ed ? ee.markMessageRemindersAsComplete : ee.markMessageAsReminder
      }) : null, eg ? eu({
        key: "mark-unread",
        channel: t,
        message: n,
        label: es.default.Messages.MARK_UNREAD,
        icon: F.default,
        onClick: ee.markMessageUnread
      }) : null, i ? eu({
        key: "pin",
        channel: t,
        message: n,
        label: n.pinned ? es.default.Messages.UNPIN_MESSAGE : es.default.Messages.PIN_MESSAGE,
        icon: B.default,
        onClick: ee.pinMessage
      }) : null, I && p ? eu({
        key: "reply-self",
        channel: t,
        message: n,
        label: es.default.Messages.MESSAGE_ACTION_REPLY,
        icon: V.default,
        onClick: ee.replyToMessage
      }) : null]
    }) : null, _ && !em ? (0, a.jsx)(et.default, {
      channel: t,
      message: n,
      togglePopout: eC,
      renderEmojiPicker: ef,
      shouldShow: ei,
      isFocused: ep
    }) : null, I && !p ? eu({
      key: "reply-other",
      channel: t,
      message: n,
      label: es.default.Messages.MESSAGE_ACTION_REPLY,
      icon: V.default,
      onClick: ee.replyToMessage
    }) : null, p ? eu({
      key: "edit",
      channel: t,
      message: n,
      label: es.default.Messages.EDIT,
      icon: G.default,
      onClick: ee.editMessage
    }) : null, W ? eu({
      key: "forward",
      channel: t,
      message: n,
      label: es.default.Messages.MESSAGE_ACTION_FORWARD,
      icon: d.ArrowAngleRightUpIcon,
      onClick: ee.forwardMessage
    }) : null, M && !W ? eu({
      key: "thread",
      channel: t,
      message: n,
      label: es.default.Messages.CREATE_THREAD,
      icon: Y.default,
      onClick: ee.createThread
    }) : null, !M && O ? eu({
      key: "view-thread",
      channel: t,
      message: n,
      label: es.default.Messages.VIEW_THREAD,
      icon: Y.default,
      onClick: ee.goToThread
    }) : null, E ? eu({
      key: "publish",
      channel: t,
      message: n,
      label: eS ? es.default.Messages.NEWS_CHANNEL_PUBLISHED : es.default.Messages.NEWS_CHANNEL_PUBLISH,
      icon: w.default,
      onClick: ee.publishMessage,
      disabled: eS
    }) : null, r && (em || K) ? eu({
      key: "delete",
      channel: t,
      message: n,
      label: es.default.Messages.DELETE,
      icon: z.default,
      onClick: ee.deleteMessage,
      dangerous: !0,
      separator: !K
    }) : null, K && r ? null : (0, a.jsx)(c.Popout, {
      renderPopout: e => {
        let {
          updatePosition: l,
          closePopout: s
        } = e;
        return (0, a.jsx)(eo, {
          channel: t,
          message: n,
          canReport: o,
          onClose: s,
          updatePosition: l
        })
      },
      shouldShow: en,
      onRequestClose: eE,
      position: "left",
      align: "top",
      animation: c.Popout.Animation.NONE,
      children: (e, a) => {
        let {
          onClick: l,
          ...s
        } = e, {
          isShown: i
        } = a;
        return eu({
          key: "more",
          label: es.default.Messages.MORE,
          icon: H.default,
          channel: t,
          message: n,
          selected: i,
          onClick: eE,
          ...s
        })
      }
    })]
  })
}

function ec(e) {
  let {
    channel: t,
    message: n
  } = e, l = (0, u.useStateFromStores)([p.default], () => null != p.default.getMessage(n.id), [n.id]), s = null == n.interaction || null != n.interactionData && (0, E.canRetryInteractionData)(n.interactionData);
  return (0, a.jsxs)(a.Fragment, {
    children: [!l && s && eu({
      key: "retry",
      label: es.default.Messages.RETRY,
      icon: W.default,
      channel: t,
      message: n,
      onClick: ee.retrySendMessage
    }), eu({
      key: "delete-usent",
      label: es.default.Messages.DELETE,
      icon: z.default,
      channel: t,
      message: n,
      onClick: ee.deleteMessage
    })]
  })
}

function ef(e, t, n) {
  let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    s = {
      openPopoutType: "message_reaction_emoji_picker",
      ...l && {
        openPopoutType: "message_super_reaction_emoji_picker",
        page: null != e.getGuildId() ? el.AnalyticsPages.GUILD_CHANNEL : el.AnalyticsPages.DM_CHANNEL,
        section: (0, T.getBurstAnalyticsSection)(e),
        object: el.AnalyticsObjects.EMOJI_REACTION_PICKER_POPOUT
      }
    };
  return (0, a.jsx)(I.ReactionPicker, {
    channel: e,
    closePopout: n,
    onSelectEmoji: (a, l, s) => {
      ! function(e, t, n) {
        let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        null != e && (0, _.addReaction)(t.id, n.id, (0, T.toReactionEmoji)(e), void 0, {
          burst: a
        })
      }(a, e, t, s), l && (s ? o()(n, 150)() : n())
    },
    analyticsOverride: s,
    messageId: t.id
  })
}
t.default = l.memo(function(e) {
  let {
    channel: t,
    message: n,
    isHeader: l
  } = e, s = (0, u.useStateFromStores)([M.default], () => M.default.isEditing(t.id, n.id), [t.id, n.id]), r = function(e) {
    let {
      channel: t,
      message: n
    } = e;
    return n.state === el.MessageStates.SEND_FAILED ? (0, a.jsx)(ec, {
      channel: t,
      message: n
    }) : null
  }(e), o = function(e) {
    let {
      message: t
    } = e;
    return t.state !== el.MessageStates.SEND_FAILED ? (0, a.jsx)(ed, {
      ...e
    }) : null
  }(e);
  return s || null == r && null == o ? null : (0, a.jsx)("div", {
    className: i()(e.className, {
      [ei.container]: !0,
      [ei.isHeader]: l
    }),
    onClick: er,
    onContextMenu: er,
    role: "group",
    "aria-label": es.default.Messages.MESSAGE_UTILITIES_A11Y_LABEL,
    children: (0, a.jsxs)(K.default, {
      className: e.innerClassName,
      children: [r, o]
    })
  })
})