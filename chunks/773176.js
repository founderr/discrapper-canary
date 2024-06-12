"use strict";
n.r(t);
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("954955"),
  o = n.n(r),
  u = n("442837"),
  d = n("255025"),
  c = n("481060"),
  f = n("607070"),
  h = n("346610"),
  m = n("868643"),
  p = n("223606"),
  E = n("188597"),
  g = n("41776"),
  C = n("641051"),
  S = n("329461"),
  _ = n("222677"),
  T = n("995774"),
  I = n("931651"),
  A = n("280845"),
  v = n("665906"),
  x = n("695346"),
  N = n("314897"),
  M = n("323873"),
  y = n("271383"),
  R = n("430824"),
  L = n("607744"),
  O = n("496675"),
  j = n("448239"),
  P = n("754424"),
  D = n("885442"),
  b = n("757698"),
  U = n("827104"),
  F = n("316949"),
  w = n("282597"),
  k = n("808268"),
  H = n("185403"),
  G = n("394831"),
  B = n("351167"),
  V = n("612418"),
  W = n("934458"),
  Y = n("740727"),
  z = n("404975"),
  K = n("626135"),
  Z = n("572004"),
  X = n("970257"),
  q = n("418476"),
  J = n("151007"),
  Q = n("432376"),
  $ = n("996861"),
  ee = n("603490"),
  et = n("225138"),
  en = n("717680"),
  ea = n("981631"),
  el = n("689938"),
  es = n("966631");

function ei(e) {
  e.stopPropagation()
}

function er(e) {
  let {
    message: t,
    channel: n,
    canReport: a,
    onClose: l,
    updatePosition: s
  } = e;
  return (0, et.useMessageMenu)({
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
    ariaLabel: el.default.Messages.MESSAGE_UTILITIES_A11Y_LABEL
  })
}

function eo(e) {
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
    ...g
  } = e;
  return (0, a.jsx)(c.Tooltip, {
    text: null != l ? l : t,
    color: null != s ? s : c.TooltipColors.PRIMARY,
    "aria-label": t,
    hideOnClick: !0,
    tooltipClassName: es.tooltip,
    children: e => {
      let {
        onMouseEnter: l,
        onMouseLeave: s,
        onClick: f
      } = e;
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)(z.Button, {
          onMouseEnter: l,
          onMouseLeave: s,
          onClick: e => {
            null == f || f(), d(o, u, e)
          },
          "aria-label": null != n ? n : t,
          disabled: h,
          dangerous: m,
          ...g,
          children: [(0, a.jsx)(i, {
            className: es.icon,
            ...r
          }), E && (0, a.jsx)(c.LottieSparkle, {})]
        }), p && (0, a.jsx)(z.Separator, {})]
      })
    }
  }, f)
}

function eu(e) {
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
    canViewThread: V,
    canForward: z,
    isExpanded: et,
    showMoreUtilities: es,
    showEmojiPicker: ei,
    showMessageRemindersActions: eu,
    isMessageReminder: ed,
    setPopout: ef,
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
    } = n, d = (0, u.useStateFromStores)([R.default], () => R.default.getGuild(t.guild_id), [t.guild_id]), c = (0, u.useStateFromStores)([N.default], () => N.default.getId()), p = (0, v.useIsActiveChannelOrUnarchivableThread)(t), E = (0, v.useIsNonModInLockedThread)(t), _ = x.RenderReactions.useSetting(), T = x.DeveloperMode.useSetting(), I = (0, u.useStateFromStores)([L.default], () => null == t.guild_id || L.default.canChatInGuild(t.guild_id), [t]), {
      canManageMessages: M,
      canAddNewReactions: j
    } = (0, u.useStateFromStoresObject)([O.default], () => ({
      canAddNewReactions: I && O.default.can(ea.Permissions.ADD_REACTIONS, t),
      canManageMessages: O.default.can(ea.Permissions.MANAGE_MESSAGES, t)
    }), [t, I]), P = (0, A.useCanReplyToMessage)(t, n), D = (0, v.useCanStartPublicThread)(t, n), b = (0, v.useCanViewThreadForMessage)(n), U = (0, u.useStateFromStores)([g.default], () => null != t.guild_id && g.default.isLurking(t.guild_id), [t]), F = (0, u.useStateFromStores)([y.default], () => null != t.guild_id && y.default.isCurrentUserGuest(t.guild_id), [t]), w = o.id === c, k = (M || n.canDeleteOwnMessage(c)) && p && !ea.MessageTypesSets.UNDELETABLE.has(n.type);
    n.type === ea.MessageTypes.AUTO_MODERATION_ACTION && (k = k && M);
    let H = (0, X.canReportMessage)(n),
      G = (0, J.default)(n, t, M),
      B = !t.isSystemDM() && (0, q.default)(n, c) && p && !E,
      {
        disableReactionCreates: V
      } = (0, Q.default)({
        channel: t,
        canChat: I,
        renderReactions: _,
        canAddNewReactions: j,
        isLurking: U,
        isGuest: F,
        isActiveChannelOrUnarchivableThread: p
      }),
      W = t.type === ea.ChannelTypes.GUILD_ANNOUNCEMENT && null != d && d.hasFeature(ea.GuildFeatures.NEWS) && (w || M) && n.type === ea.MessageTypes.DEFAULT && !n.isPoll(),
      Y = t.getGuildId(),
      z = null != Y && (n.type === ea.MessageTypes.USER_JOIN || n.type === ea.MessageTypes.GUILD_INVITE_REMINDER) && O.default.canWithPartialContext(ea.Permissions.MANAGE_GUILD, {
        guildId: Y
      }),
      {
        canForwardMessages: K
      } = h.MessageForwardingExperiment.useExperiment({
        location: "useMessageUtilitiesProps"
      }),
      $ = (0, m.useCanForwardMessage)(n),
      {
        showReminders: ee
      } = C.default.useExperiment({
        location: "9bfedc_1"
      }, {
        autoTrackExposure: !1
      }),
      et = (0, u.useStateFromStores)([S.default], () => null != S.default.getMessageReminders().find(e => e.messageId === n.id)),
      el = (0, en.default)(),
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
      canForward: K && $,
      canCopy: Z.SUPPORTS_COPY,
      hasDeveloperMode: T,
      canReact: !V && _,
      canPublish: W,
      canConfigureJoin: z,
      isExpanded: el && !es && !a && !l && !s,
      showEmojiPicker: a,
      showEmojiBurstPicker: l,
      showMoreUtilities: s,
      showMessageRemindersActions: ee,
      isMessageReminder: et,
      setPopout: i,
      isFocused: r,
      isGuildInviteReminder: n.type === ea.MessageTypes.GUILD_INVITE_REMINDER
    }
  }(e), eE = l.useCallback(() => {
    !es && K.default.track(ea.AnalyticEvents.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
      message_id: n.id,
      channel: n.channel_id
    }), ef({
      moreUtilities: !es
    })
  }, [es, ef, n]), eg = l.useCallback(() => {
    ef({
      emojiPicker: !ei
    })
  }, [ei, ef]), eC = (0, v.useIsActiveChannelOrUnarchivableThread)(t), eS = n.hasFlag(ea.MessageFlags.CROSSPOSTED);
  return (0, a.jsxs)(a.Fragment, {
    children: [et ? (0, a.jsxs)(a.Fragment, {
      children: [s && eh ? eo({
        key: "copy-id",
        channel: t,
        message: n,
        label: el.default.Messages.COPY_ID_MESSAGE,
        icon: P.default,
        onClick: $.copyId
      }) : null, s && !em ? eo({
        key: "copy-link",
        channel: t,
        message: n,
        label: el.default.Messages.COPY_LINK,
        icon: b.default,
        onClick: $.copyLink
      }) : null, T ? eo({
        key: "configure",
        channel: t,
        message: n,
        label: el.default.Messages.CONFIGURE,
        icon: D.default,
        onClick: $.configureJoin
      }) : null, eu ? eo({
        key: "mark-reminder",
        channel: t,
        message: n,
        label: ed ? el.default.Messages.MESSAGE_REMINDERS_MARK_AS_DONE : el.default.Messages.MESSAGE_REMINDERS_MARK_AS_TODO,
        icon: ed ? j.default : w.default,
        onClick: ed ? $.markMessageRemindersAsComplete : $.markMessageAsReminder
      }) : null, eC ? eo({
        key: "mark-unread",
        channel: t,
        message: n,
        label: el.default.Messages.MARK_UNREAD,
        icon: U.default,
        onClick: $.markMessageUnread
      }) : null, i ? eo({
        key: "pin",
        channel: t,
        message: n,
        label: n.pinned ? el.default.Messages.UNPIN_MESSAGE : el.default.Messages.PIN_MESSAGE,
        icon: G.default,
        onClick: $.pinMessage
      }) : null, M && z ? eo({
        key: "thread",
        channel: t,
        message: n,
        label: el.default.Messages.CREATE_THREAD,
        icon: W.default,
        onClick: $.createThread
      }) : null, I && p ? eo({
        key: "reply-self",
        channel: t,
        message: n,
        label: el.default.Messages.MESSAGE_ACTION_REPLY,
        icon: B.default,
        onClick: $.replyToMessage
      }) : null]
    }) : null, _ && !em ? (0, a.jsx)(ee.default, {
      channel: t,
      message: n,
      togglePopout: eg,
      renderEmojiPicker: ec,
      shouldShow: ei,
      isFocused: ep
    }) : null, I && !p ? eo({
      key: "reply-other",
      channel: t,
      message: n,
      label: el.default.Messages.MESSAGE_ACTION_REPLY,
      icon: B.default,
      onClick: $.replyToMessage
    }) : null, p ? eo({
      key: "edit",
      channel: t,
      message: n,
      label: el.default.Messages.EDIT,
      icon: H.default,
      onClick: $.editMessage
    }) : null, z ? eo({
      key: "forward",
      channel: t,
      message: n,
      label: el.default.Messages.MESSAGE_ACTION_FORWARD,
      icon: d.ChatArrowRightIcon,
      onClick: $.forwardMessage
    }) : null, M && !z ? eo({
      key: "thread",
      channel: t,
      message: n,
      label: el.default.Messages.CREATE_THREAD,
      icon: W.default,
      onClick: $.createThread
    }) : null, !M && V ? eo({
      key: "view-thread",
      channel: t,
      message: n,
      label: el.default.Messages.VIEW_THREAD,
      icon: W.default,
      onClick: $.goToThread
    }) : null, E ? eo({
      key: "publish",
      channel: t,
      message: n,
      label: eS ? el.default.Messages.NEWS_CHANNEL_PUBLISHED : el.default.Messages.NEWS_CHANNEL_PUBLISH,
      icon: F.default,
      onClick: $.publishMessage,
      disabled: eS
    }) : null, r && (em || et) ? eo({
      key: "delete",
      channel: t,
      message: n,
      label: el.default.Messages.DELETE,
      icon: Y.default,
      onClick: $.deleteMessage,
      dangerous: !0,
      separator: !et
    }) : null, et && r ? null : (0, a.jsx)(c.Popout, {
      renderPopout: e => {
        let {
          updatePosition: l,
          closePopout: s
        } = e;
        return (0, a.jsx)(er, {
          channel: t,
          message: n,
          canReport: o,
          onClose: s,
          updatePosition: l
        })
      },
      shouldShow: es,
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
        return eo({
          key: "more",
          label: el.default.Messages.MORE,
          icon: k.default,
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

function ed(e) {
  let {
    channel: t,
    message: n
  } = e, l = (0, u.useStateFromStores)([p.default], () => null != p.default.getMessage(n.id), [n.id]), s = null == n.interaction || null != n.interactionData && (0, E.canRetryInteractionData)(n.interactionData);
  return (0, a.jsxs)(a.Fragment, {
    children: [!l && s && eo({
      key: "retry",
      label: el.default.Messages.RETRY,
      icon: V.default,
      channel: t,
      message: n,
      onClick: $.retrySendMessage
    }), eo({
      key: "delete-usent",
      label: el.default.Messages.DELETE,
      icon: Y.default,
      channel: t,
      message: n,
      onClick: $.deleteMessage
    })]
  })
}

function ec(e, t, n) {
  let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    s = {
      openPopoutType: "message_reaction_emoji_picker",
      ...l && {
        openPopoutType: "message_super_reaction_emoji_picker",
        page: null != e.getGuildId() ? ea.AnalyticsPages.GUILD_CHANNEL : ea.AnalyticsPages.DM_CHANNEL,
        section: (0, T.getBurstAnalyticsSection)(e),
        object: ea.AnalyticsObjects.EMOJI_REACTION_PICKER_POPOUT
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
    return n.state === ea.MessageStates.SEND_FAILED ? (0, a.jsx)(ed, {
      channel: t,
      message: n
    }) : null
  }(e), o = function(e) {
    let {
      message: t
    } = e;
    return t.state !== ea.MessageStates.SEND_FAILED ? (0, a.jsx)(eu, {
      ...e
    }) : null
  }(e);
  return s || null == r && null == o ? null : (0, a.jsx)("div", {
    className: i()(e.className, {
      [es.container]: !0,
      [es.isHeader]: l
    }),
    onClick: ei,
    onContextMenu: ei,
    role: "group",
    "aria-label": el.default.Messages.MESSAGE_UTILITIES_A11Y_LABEL,
    children: (0, a.jsxs)(z.default, {
      className: e.innerClassName,
      children: [r, o]
    })
  })
})