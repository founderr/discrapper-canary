var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(954955),
  o = n.n(r),
  c = n(442837),
  u = n(481060),
  d = n(607070),
  h = n(346610),
  m = n(868643),
  E = n(223606),
  p = n(188597),
  g = n(41776),
  f = n(641051),
  C = n(329461),
  _ = n(222677),
  I = n(995774),
  x = n(931651),
  T = n(280845),
  N = n(665906),
  Z = n(695346),
  S = n(314897),
  v = n(323873),
  A = n(271383),
  M = n(430824),
  R = n(607744),
  j = n(496675),
  L = n(448239),
  O = n(404975),
  P = n(626135),
  y = n(572004),
  b = n(970257),
  D = n(418476),
  U = n(151007),
  k = n(432376),
  w = n(996861),
  H = n(603490),
  G = n(225138),
  B = n(717680),
  V = n(981631),
  F = n(689938),
  z = n(961864);

function W(e) {
  e.stopPropagation()
}

function Y(e) {
  let {
    message: t,
    channel: n,
    canReport: l,
    onClose: i,
    updatePosition: s
  } = e;
  return (0, G.useMessageMenu)({
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
    canReport: l,
    onHeightUpdate: s,
    onClose: i,
    navId: "message-actions",
    ariaLabel: F.Z.Messages.MESSAGE_UTILITIES_A11Y_LABEL
  })
}

function K(e) {
  let {
    label: t,
    ariaLabel: n,
    tooltipText: i,
    tooltipColor: s,
    icon: a,
    iconProps: r,
    channel: o,
    message: c,
    onClick: d,
    key: h,
    disabled: m,
    dangerous: E,
    separator: p,
    sparkle: g,
    ...f
  } = e;
  return (0, l.jsx)(u.Tooltip, {
    text: null != i ? i : t,
    color: null != s ? s : u.TooltipColors.PRIMARY,
    "aria-label": t,
    hideOnClick: !0,
    tooltipClassName: z.tooltip,
    children: e => {
      let {
        onMouseEnter: i,
        onMouseLeave: s,
        onClick: h
      } = e;
      return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsxs)(O.zx, {
          onMouseEnter: i,
          onMouseLeave: s,
          onClick: e => {
            null == h || h(), d(o, c, e)
          },
          "aria-label": null != n ? n : t,
          disabled: m,
          dangerous: E,
          ...f,
          children: [(0, l.jsx)(a, {
            className: z.icon,
            color: "currentColor",
            ...r
          }), g && (0, l.jsx)(u.LottieSparkle, {})]
        }), p && (0, l.jsx)(O.Z0, {})]
      })
    }
  }, h)
}

function q(e) {
  let {
    channel: t,
    message: n,
    canCopy: s,
    canPin: a,
    canDelete: r,
    canReport: o,
    canEdit: E,
    canPublish: p,
    canReact: _,
    canConfigureJoin: I,
    canReply: x,
    canStartThread: v,
    canViewThread: O,
    canForward: G,
    isExpanded: z,
    showMoreUtilities: W,
    showEmojiPicker: q,
    showMessageRemindersActions: X,
    isMessageReminder: J,
    setPopout: $,
    hasDeveloperMode: ee,
    isGuildInviteReminder: et,
    isFocused: en
  } = function(e) {
    let {
      channel: t,
      message: n,
      showEmojiPicker: l,
      showEmojiBurstPicker: i,
      showMoreUtilities: s,
      setPopout: a,
      isFocused: r
    } = e, {
      author: o
    } = n, u = (0, c.e7)([M.Z], () => M.Z.getGuild(t.guild_id), [t.guild_id]), E = (0, c.e7)([S.default], () => S.default.getId()), p = (0, N.$R)(t), _ = (0, N.Gu)(t), I = Z.nc.useSetting(), x = Z.Sb.useSetting(), v = (0, c.e7)([R.Z], () => null == t.guild_id || R.Z.canChatInGuild(t.guild_id), [t]), {
      canManageMessages: L,
      canAddNewReactions: O
    } = (0, c.cj)([j.Z], () => ({
      canAddNewReactions: v && j.Z.can(V.Plq.ADD_REACTIONS, t),
      canManageMessages: j.Z.can(V.Plq.MANAGE_MESSAGES, t)
    }), [t, v]), P = (0, T.U)(t, n), w = (0, N.NE)(t, n), H = (0, N.Ek)(n), G = (0, c.e7)([g.Z], () => null != t.guild_id && g.Z.isLurking(t.guild_id), [t]), F = (0, c.e7)([A.ZP], () => null != t.guild_id && A.ZP.isCurrentUserGuest(t.guild_id), [t]), z = o.id === E, W = (L || n.canDeleteOwnMessage(E)) && p && !V.V$x.UNDELETABLE.has(n.type);
    n.type === V.uaV.AUTO_MODERATION_ACTION && (W = W && L);
    let Y = (0, b.a4)(n),
      K = (0, U.Z)(n, t, L),
      q = !t.isSystemDM() && (0, D.Z)(n, E) && p && !_,
      {
        disableReactionCreates: X
      } = (0, k.Z)({
        channel: t,
        canChat: v,
        renderReactions: I,
        canAddNewReactions: O,
        isLurking: G,
        isGuest: F,
        isActiveChannelOrUnarchivableThread: p
      }),
      Q = t.type === V.d4z.GUILD_ANNOUNCEMENT && null != u && u.hasFeature(V.oNc.NEWS) && (z || L) && n.type === V.uaV.DEFAULT && !n.isPoll(),
      J = t.getGuildId(),
      $ = null != J && (n.type === V.uaV.USER_JOIN || n.type === V.uaV.GUILD_INVITE_REMINDER) && j.Z.canWithPartialContext(V.Plq.MANAGE_GUILD, {
        guildId: J
      }),
      {
        canForwardMessages: ee
      } = h.w.useExperiment({
        location: "useMessageUtilitiesProps"
      }, {
        autoTrackExposure: !1
      }),
      et = (0, m.a)(n),
      {
        showReminders: en
      } = f.Z.useExperiment({
        location: "9bfedc_1"
      }, {
        autoTrackExposure: !1
      }),
      el = (0, c.e7)([C.Z], () => null != C.Z.getMessageReminders().find(e => e.messageId === n.id)),
      ei = (0, B.Z)(),
      es = (0, c.e7)([d.Z], () => d.Z.keyboardModeEnabled);
    return {
      channel: t,
      message: n,
      canPin: K,
      canEdit: q,
      canDelete: W,
      canReport: Y,
      canReply: P,
      canStartThread: w,
      canViewThread: H,
      canForward: ee && et,
      canCopy: y.wS,
      hasDeveloperMode: x,
      canReact: !X && I,
      canPublish: Q,
      canConfigureJoin: $,
      isExpanded: ei && !es && !l && !i && !s,
      showEmojiPicker: l,
      showEmojiBurstPicker: i,
      showMoreUtilities: s,
      showMessageRemindersActions: en,
      isMessageReminder: el,
      setPopout: a,
      isFocused: r,
      isGuildInviteReminder: n.type === V.uaV.GUILD_INVITE_REMINDER
    }
  }(e), el = i.useCallback(() => {
    !W && P.default.track(V.rMx.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
      message_id: n.id,
      channel: n.channel_id
    }), $({
      moreUtilities: !W
    })
  }, [W, $, n]), ei = i.useCallback(() => {
    $({
      emojiPicker: !q
    })
  }, [q, $]), es = (0, N.$R)(t), ea = n.hasFlag(V.iLy.CROSSPOSTED);
  return (0, l.jsxs)(l.Fragment, {
    children: [z ? (0, l.jsxs)(l.Fragment, {
      children: [s && ee ? K({
        key: "copy-id",
        channel: t,
        message: n,
        label: F.Z.Messages.COPY_ID_MESSAGE,
        icon: u.IdIcon,
        onClick: w.F4
      }) : null, s && !et ? K({
        key: "copy-link",
        channel: t,
        message: n,
        label: F.Z.Messages.COPY_LINK,
        icon: u.LinkIcon,
        onClick: w.fB
      }) : null, I ? K({
        key: "configure",
        channel: t,
        message: n,
        label: F.Z.Messages.CONFIGURE,
        icon: u.CircleQuestionIcon,
        onClick: w.zW
      }) : null, X ? K({
        key: "mark-reminder",
        channel: t,
        message: n,
        label: J ? F.Z.Messages.MESSAGE_REMINDERS_MARK_AS_DONE : F.Z.Messages.MESSAGE_REMINDERS_MARK_AS_TODO,
        icon: J ? (0, u.makeIconCompat)(L.Z) : u.ListBulletsIcon,
        onClick: J ? w.l9 : w.W1
      }) : null, es ? K({
        key: "mark-unread",
        channel: t,
        message: n,
        label: F.Z.Messages.MARK_UNREAD,
        icon: u.ChatMarkUnreadIcon,
        onClick: w.B8
      }) : null, a ? K({
        key: "pin",
        channel: t,
        message: n,
        label: n.pinned ? F.Z.Messages.UNPIN_MESSAGE : F.Z.Messages.PIN_MESSAGE,
        icon: u.PinIcon,
        onClick: w.rY
      }) : null, v && G ? K({
        key: "thread",
        channel: t,
        message: n,
        label: F.Z.Messages.CREATE_THREAD,
        icon: u.ThreadIcon,
        onClick: w.gK
      }) : null, x && E ? K({
        key: "reply-self",
        channel: t,
        message: n,
        label: F.Z.Messages.MESSAGE_ACTION_REPLY,
        icon: u.ArrowAngleLeftUpIcon,
        onClick: w.HH
      }) : null]
    }) : null, _ && !et ? (0, l.jsx)(H.Z, {
      channel: t,
      message: n,
      togglePopout: ei,
      renderEmojiPicker: Q,
      shouldShow: q,
      isFocused: en
    }) : null, x && !E ? K({
      key: "reply-other",
      channel: t,
      message: n,
      label: F.Z.Messages.MESSAGE_ACTION_REPLY,
      icon: u.ArrowAngleLeftUpIcon,
      onClick: w.HH
    }) : null, E ? K({
      key: "edit",
      channel: t,
      message: n,
      label: F.Z.Messages.EDIT,
      icon: u.PencilIcon,
      onClick: w.Hd
    }) : null, G ? K({
      key: "forward",
      channel: t,
      message: n,
      label: F.Z.Messages.MESSAGE_ACTION_FORWARD,
      icon: u.ChatArrowRightIcon,
      onClick: w.ts
    }) : null, v && !G ? K({
      key: "thread",
      channel: t,
      message: n,
      label: F.Z.Messages.CREATE_THREAD,
      icon: u.ThreadIcon,
      onClick: w.gK
    }) : null, !v && O ? K({
      key: "view-thread",
      channel: t,
      message: n,
      label: F.Z.Messages.VIEW_THREAD,
      icon: u.ThreadIcon,
      onClick: w.qe
    }) : null, p ? K({
      key: "publish",
      channel: t,
      message: n,
      label: ea ? F.Z.Messages.NEWS_CHANNEL_PUBLISHED : F.Z.Messages.NEWS_CHANNEL_PUBLISH,
      icon: u.AnnouncementsIcon,
      onClick: w.Xl,
      disabled: ea
    }) : null, r && (et || z) ? K({
      key: "delete",
      channel: t,
      message: n,
      label: F.Z.Messages.DELETE,
      icon: u.TrashIcon,
      onClick: w.$Z,
      dangerous: !0,
      separator: !z
    }) : null, z && r ? null : (0, l.jsx)(u.Popout, {
      renderPopout: e => {
        let {
          updatePosition: i,
          closePopout: s
        } = e;
        return (0, l.jsx)(Y, {
          channel: t,
          message: n,
          canReport: o,
          onClose: s,
          updatePosition: i
        })
      },
      shouldShow: W,
      onRequestClose: el,
      position: "left",
      align: "top",
      animation: u.Popout.Animation.NONE,
      children: (e, l) => {
        let {
          onClick: i,
          ...s
        } = e, {
          isShown: a
        } = l;
        return K({
          key: "more",
          label: F.Z.Messages.MORE,
          icon: u.MoreHorizontalIcon,
          channel: t,
          message: n,
          selected: a,
          onClick: el,
          ...s
        })
      }
    })]
  })
}

function X(e) {
  let {
    channel: t,
    message: n
  } = e, i = (0, c.e7)([E.Z], () => null != E.Z.getMessage(n.id), [n.id]), s = null == n.interaction || null != n.interactionData && (0, p.$s)(n.interactionData);
  return (0, l.jsxs)(l.Fragment, {
    children: [!i && s && K({
      key: "retry",
      label: F.Z.Messages.RETRY,
      icon: u.RetryIcon,
      channel: t,
      message: n,
      onClick: w.mG
    }), K({
      key: "delete-usent",
      label: F.Z.Messages.DELETE,
      icon: u.TrashIcon,
      channel: t,
      message: n,
      onClick: w.$Z
    })]
  })
}

function Q(e, t, n) {
  let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    s = {
      openPopoutType: "message_reaction_emoji_picker",
      ...i && {
        openPopoutType: "message_super_reaction_emoji_picker",
        page: null != e.getGuildId() ? V.ZY5.GUILD_CHANNEL : V.ZY5.DM_CHANNEL,
        section: (0, I.s4)(e),
        object: V.qAy.EMOJI_REACTION_PICKER_POPOUT
      }
    };
  return (0, l.jsx)(x.$, {
    channel: e,
    closePopout: n,
    onSelectEmoji: (l, i, s) => {
      ! function(e, t, n) {
        let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        null != e && (0, _.rU)(t.id, n.id, (0, I.g1)(e), void 0, {
          burst: l
        })
      }(l, e, t, s), i && (s ? o()(n, 150)() : n())
    },
    analyticsOverride: s,
    messageId: t.id
  })
}
t.Z = i.memo(function(e) {
  let {
    channel: t,
    message: n,
    isHeader: i
  } = e, s = (0, c.e7)([v.Z], () => v.Z.isEditing(t.id, n.id), [t.id, n.id]), r = function(e) {
    let {
      channel: t,
      message: n
    } = e;
    return n.state === V.yb.SEND_FAILED ? (0, l.jsx)(X, {
      channel: t,
      message: n
    }) : null
  }(e), o = function(e) {
    let {
      message: t
    } = e;
    return t.state !== V.yb.SEND_FAILED ? (0, l.jsx)(q, {
      ...e
    }) : null
  }(e);
  return s || null == r && null == o ? null : (0, l.jsx)("div", {
    className: a()(e.className, {
      [z.container]: !0,
      [z.isHeader]: i
    }),
    onClick: W,
    onContextMenu: W,
    role: "group",
    "aria-label": F.Z.Messages.MESSAGE_UTILITIES_A11Y_LABEL,
    children: (0, l.jsxs)(O.ZP, {
      className: e.innerClassName,
      children: [r, o]
    })
  })
})