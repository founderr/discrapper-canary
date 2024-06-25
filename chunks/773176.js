var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(954955),
  o = n.n(r),
  c = n(442837),
  u = n(481060),
  d = n(607070),
  h = n(110630),
  m = n(346610),
  E = n(868643),
  p = n(223606),
  g = n(188597),
  f = n(41776),
  C = n(641051),
  _ = n(329461),
  I = n(222677),
  x = n(995774),
  T = n(931651),
  N = n(280845),
  Z = n(665906),
  S = n(695346),
  v = n(314897),
  A = n(323873),
  M = n(271383),
  R = n(430824),
  j = n(607744),
  L = n(496675),
  O = n(448239),
  P = n(404975),
  y = n(626135),
  b = n(572004),
  D = n(970257),
  U = n(418476),
  k = n(151007),
  w = n(432376),
  H = n(996861),
  G = n(603490),
  B = n(225138),
  V = n(717680),
  F = n(981631),
  z = n(689938),
  W = n(961864);

function Y(e) {
  e.stopPropagation()
}

function K(e) {
  let {
    message: t,
    channel: n,
    canReport: l,
    onClose: i,
    updatePosition: s
  } = e;
  return (0, B.useMessageMenu)({
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
    ariaLabel: z.Z.Messages.MESSAGE_UTILITIES_A11Y_LABEL
  })
}

function q(e) {
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
    tooltipClassName: W.tooltip,
    children: e => {
      let {
        onMouseEnter: i,
        onMouseLeave: s,
        onClick: h
      } = e;
      return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsxs)(P.zx, {
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
            className: W.icon,
            color: "currentColor",
            ...r
          }), g && (0, l.jsx)(u.LottieSparkle, {})]
        }), p && (0, l.jsx)(P.Z0, {})]
      })
    }
  }, h)
}

function X(e) {
  let {
    channel: t,
    message: n,
    canCopy: s,
    canPin: a,
    canDelete: r,
    canReport: o,
    canEdit: p,
    canPublish: g,
    canReact: I,
    canConfigureJoin: x,
    canReply: T,
    canStartThread: A,
    canViewThread: P,
    canForward: B,
    isExpanded: W,
    showMoreUtilities: Y,
    showEmojiPicker: X,
    showMessageRemindersActions: Q,
    isMessageReminder: $,
    setPopout: ee,
    hasDeveloperMode: et,
    isGuildInviteReminder: en,
    isFocused: el
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
    } = n, u = (0, c.e7)([R.Z], () => R.Z.getGuild(t.guild_id), [t.guild_id]), p = (0, c.e7)([v.default], () => v.default.getId()), g = (0, Z.$R)(t), I = (0, Z.Gu)(t), x = S.nc.useSetting(), T = S.Sb.useSetting(), A = (0, c.e7)([j.Z], () => null == t.guild_id || j.Z.canChatInGuild(t.guild_id), [t]), {
      canManageMessages: O,
      canAddNewReactions: P
    } = (0, c.cj)([L.Z], () => ({
      canAddNewReactions: A && L.Z.can(F.Plq.ADD_REACTIONS, t),
      canManageMessages: L.Z.can(F.Plq.MANAGE_MESSAGES, t)
    }), [t, A]), y = (0, N.U)(t, n), H = (0, Z.NE)(t, n), G = (0, Z.Ek)(n), B = (0, c.e7)([f.Z], () => null != t.guild_id && f.Z.isLurking(t.guild_id), [t]), z = (0, c.e7)([M.ZP], () => null != t.guild_id && M.ZP.isCurrentUserGuest(t.guild_id), [t]), W = o.id === p, Y = (O || n.canDeleteOwnMessage(p)) && g && !F.V$x.UNDELETABLE.has(n.type);
    n.type === F.uaV.AUTO_MODERATION_ACTION && (Y = Y && O);
    let K = (0, D.a4)(n),
      q = (0, k.Z)(n, t, O),
      X = !t.isSystemDM() && (0, U.Z)(n, p) && g && !I,
      {
        disableReactionCreates: Q
      } = (0, w.Z)({
        channel: t,
        canChat: A,
        renderReactions: x,
        canAddNewReactions: P,
        isLurking: B,
        isGuest: z,
        isActiveChannelOrUnarchivableThread: g
      }),
      J = t.type === F.d4z.GUILD_ANNOUNCEMENT && null != u && u.hasFeature(F.oNc.NEWS) && (W || O) && (0, h.Z)(n),
      $ = t.getGuildId(),
      ee = null != $ && (n.type === F.uaV.USER_JOIN || n.type === F.uaV.GUILD_INVITE_REMINDER) && L.Z.canWithPartialContext(F.Plq.MANAGE_GUILD, {
        guildId: $
      }),
      {
        canForwardMessages: et
      } = m.w.useExperiment({
        location: "useMessageUtilitiesProps"
      }, {
        autoTrackExposure: !1
      }),
      en = (0, E.a)(n),
      {
        showReminders: el
      } = C.Z.useExperiment({
        location: "9bfedc_1"
      }, {
        autoTrackExposure: !1
      }),
      ei = (0, c.e7)([_.Z], () => null != _.Z.getMessageReminders().find(e => e.messageId === n.id)),
      es = (0, V.Z)(),
      ea = (0, c.e7)([d.Z], () => d.Z.keyboardModeEnabled);
    return {
      channel: t,
      message: n,
      canPin: q,
      canEdit: X,
      canDelete: Y,
      canReport: K,
      canReply: y,
      canStartThread: H,
      canViewThread: G,
      canForward: et && en,
      canCopy: b.wS,
      hasDeveloperMode: T,
      canReact: !Q && x,
      canPublish: J,
      canConfigureJoin: ee,
      isExpanded: es && !ea && !l && !i && !s,
      showEmojiPicker: l,
      showEmojiBurstPicker: i,
      showMoreUtilities: s,
      showMessageRemindersActions: el,
      isMessageReminder: ei,
      setPopout: a,
      isFocused: r,
      isGuildInviteReminder: n.type === F.uaV.GUILD_INVITE_REMINDER
    }
  }(e), ei = i.useCallback(() => {
    !Y && y.default.track(F.rMx.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
      message_id: n.id,
      channel: n.channel_id
    }), ee({
      moreUtilities: !Y
    })
  }, [Y, ee, n]), es = i.useCallback(() => {
    ee({
      emojiPicker: !X
    })
  }, [X, ee]), ea = (0, Z.$R)(t), er = n.hasFlag(F.iLy.CROSSPOSTED);
  return (0, l.jsxs)(l.Fragment, {
    children: [W ? (0, l.jsxs)(l.Fragment, {
      children: [s && et ? q({
        key: "copy-id",
        channel: t,
        message: n,
        label: z.Z.Messages.COPY_ID_MESSAGE,
        icon: u.IdIcon,
        onClick: H.F4
      }) : null, s && !en ? q({
        key: "copy-link",
        channel: t,
        message: n,
        label: z.Z.Messages.COPY_LINK,
        icon: u.LinkIcon,
        onClick: H.fB
      }) : null, x ? q({
        key: "configure",
        channel: t,
        message: n,
        label: z.Z.Messages.CONFIGURE,
        icon: u.CircleQuestionIcon,
        onClick: H.zW
      }) : null, Q ? q({
        key: "mark-reminder",
        channel: t,
        message: n,
        label: $ ? z.Z.Messages.MESSAGE_REMINDERS_MARK_AS_DONE : z.Z.Messages.MESSAGE_REMINDERS_MARK_AS_TODO,
        icon: $ ? (0, u.makeIconCompat)(O.Z) : u.ListBulletsIcon,
        onClick: $ ? H.l9 : H.W1
      }) : null, ea ? q({
        key: "mark-unread",
        channel: t,
        message: n,
        label: z.Z.Messages.MARK_UNREAD,
        icon: u.ChatMarkUnreadIcon,
        onClick: H.B8
      }) : null, a ? q({
        key: "pin",
        channel: t,
        message: n,
        label: n.pinned ? z.Z.Messages.UNPIN_MESSAGE : z.Z.Messages.PIN_MESSAGE,
        icon: u.PinIcon,
        onClick: H.rY
      }) : null, A && B ? q({
        key: "thread",
        channel: t,
        message: n,
        label: z.Z.Messages.CREATE_THREAD,
        icon: u.ThreadIcon,
        onClick: H.gK
      }) : null, T && p ? q({
        key: "reply-self",
        channel: t,
        message: n,
        label: z.Z.Messages.MESSAGE_ACTION_REPLY,
        icon: u.ArrowAngleLeftUpIcon,
        onClick: H.HH
      }) : null]
    }) : null, I && !en ? (0, l.jsx)(G.Z, {
      channel: t,
      message: n,
      togglePopout: es,
      renderEmojiPicker: J,
      shouldShow: X,
      isFocused: el
    }) : null, T && !p ? q({
      key: "reply-other",
      channel: t,
      message: n,
      label: z.Z.Messages.MESSAGE_ACTION_REPLY,
      icon: u.ArrowAngleLeftUpIcon,
      onClick: H.HH
    }) : null, p ? q({
      key: "edit",
      channel: t,
      message: n,
      label: z.Z.Messages.EDIT,
      icon: u.PencilIcon,
      onClick: H.Hd
    }) : null, B ? q({
      key: "forward",
      channel: t,
      message: n,
      label: z.Z.Messages.MESSAGE_ACTION_FORWARD,
      icon: u.ChatArrowRightIcon,
      onClick: H.ts
    }) : null, A && !B ? q({
      key: "thread",
      channel: t,
      message: n,
      label: z.Z.Messages.CREATE_THREAD,
      icon: u.ThreadIcon,
      onClick: H.gK
    }) : null, !A && P ? q({
      key: "view-thread",
      channel: t,
      message: n,
      label: z.Z.Messages.VIEW_THREAD,
      icon: u.ThreadIcon,
      onClick: H.qe
    }) : null, g ? q({
      key: "publish",
      channel: t,
      message: n,
      label: er ? z.Z.Messages.NEWS_CHANNEL_PUBLISHED : z.Z.Messages.NEWS_CHANNEL_PUBLISH,
      icon: u.AnnouncementsIcon,
      onClick: H.Xl,
      disabled: er
    }) : null, r && (en || W) ? q({
      key: "delete",
      channel: t,
      message: n,
      label: z.Z.Messages.DELETE,
      icon: u.TrashIcon,
      onClick: H.$Z,
      dangerous: !0,
      separator: !W
    }) : null, W && r ? null : (0, l.jsx)(u.Popout, {
      renderPopout: e => {
        let {
          updatePosition: i,
          closePopout: s
        } = e;
        return (0, l.jsx)(K, {
          channel: t,
          message: n,
          canReport: o,
          onClose: s,
          updatePosition: i
        })
      },
      shouldShow: Y,
      onRequestClose: ei,
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
        return q({
          key: "more",
          label: z.Z.Messages.MORE,
          icon: u.MoreHorizontalIcon,
          channel: t,
          message: n,
          selected: a,
          onClick: ei,
          ...s
        })
      }
    })]
  })
}

function Q(e) {
  let {
    channel: t,
    message: n
  } = e, i = (0, c.e7)([p.Z], () => null != p.Z.getMessage(n.id), [n.id]), s = null == n.interaction || null != n.interactionData && (0, g.$s)(n.interactionData);
  return (0, l.jsxs)(l.Fragment, {
    children: [!i && s && q({
      key: "retry",
      label: z.Z.Messages.RETRY,
      icon: u.RetryIcon,
      channel: t,
      message: n,
      onClick: H.mG
    }), q({
      key: "delete-usent",
      label: z.Z.Messages.DELETE,
      icon: u.TrashIcon,
      channel: t,
      message: n,
      onClick: H.$Z
    })]
  })
}

function J(e, t, n) {
  let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    s = {
      openPopoutType: "message_reaction_emoji_picker",
      ...i && {
        openPopoutType: "message_super_reaction_emoji_picker",
        page: null != e.getGuildId() ? F.ZY5.GUILD_CHANNEL : F.ZY5.DM_CHANNEL,
        section: (0, x.s4)(e),
        object: F.qAy.EMOJI_REACTION_PICKER_POPOUT
      }
    };
  return (0, l.jsx)(T.$, {
    channel: e,
    closePopout: n,
    onSelectEmoji: (l, i, s) => {
      ! function(e, t, n) {
        let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        null != e && (0, I.rU)(t.id, n.id, (0, x.g1)(e), void 0, {
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
  } = e, s = (0, c.e7)([A.Z], () => A.Z.isEditing(t.id, n.id), [t.id, n.id]), r = function(e) {
    let {
      channel: t,
      message: n
    } = e;
    return n.state === F.yb.SEND_FAILED ? (0, l.jsx)(Q, {
      channel: t,
      message: n
    }) : null
  }(e), o = function(e) {
    let {
      message: t
    } = e;
    return t.state !== F.yb.SEND_FAILED ? (0, l.jsx)(X, {
      ...e
    }) : null
  }(e);
  return s || null == r && null == o ? null : (0, l.jsx)("div", {
    className: a()(e.className, {
      [W.container]: !0,
      [W.isHeader]: i
    }),
    onClick: Y,
    onContextMenu: Y,
    role: "group",
    "aria-label": z.Z.Messages.MESSAGE_UTILITIES_A11Y_LABEL,
    children: (0, l.jsxs)(P.ZP, {
      className: e.innerClassName,
      children: [r, o]
    })
  })
})