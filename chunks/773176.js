var i = n(735250),
  a = n(470079),
  l = n(120356),
  s = n.n(l),
  r = n(954955),
  o = n.n(r),
  c = n(442837),
  u = n(481060),
  d = n(607070),
  h = n(110630),
  p = n(346610),
  m = n(868643),
  _ = n(223606),
  f = n(188597),
  E = n(41776),
  g = n(641051),
  C = n(329461),
  I = n(222677),
  x = n(995774),
  T = n(931651),
  N = n(280845),
  v = n(665906),
  S = n(695346),
  Z = n(314897),
  A = n(323873),
  M = n(271383),
  b = n(430824),
  R = n(607744),
  j = n(496675),
  L = n(448239),
  P = n(404975),
  O = n(626135),
  y = n(572004),
  D = n(970257),
  k = n(418476),
  U = n(151007),
  w = n(432376),
  B = n(996861),
  H = n(603490),
  G = n(225138),
  V = n(717680),
  F = n(981631),
  W = n(689938),
  z = n(961864);

function Y(e) {
  e.stopPropagation()
}

function K(e) {
  let {
    message: t,
    channel: n,
    canReport: i,
    onClose: a,
    updatePosition: l
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
    canReport: i,
    onHeightUpdate: l,
    onClose: a,
    navId: "message-actions",
    ariaLabel: W.Z.Messages.MESSAGE_UTILITIES_A11Y_LABEL
  })
}

function q(e) {
  let {
    label: t,
    ariaLabel: n,
    tooltipText: a,
    tooltipColor: l,
    icon: s,
    iconProps: r,
    channel: o,
    message: c,
    onClick: d,
    key: h,
    disabled: p,
    dangerous: m,
    separator: _,
    sparkle: f,
    ...E
  } = e;
  return (0, i.jsx)(u.Tooltip, {
    text: null != a ? a : t,
    color: null != l ? l : u.TooltipColors.PRIMARY,
    "aria-label": t,
    hideOnClick: !0,
    tooltipClassName: z.tooltip,
    children: e => {
      let {
        onMouseEnter: a,
        onMouseLeave: l,
        onClick: h
      } = e;
      return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)(P.zx, {
          onMouseEnter: a,
          onMouseLeave: l,
          onClick: e => {
            null == h || h(), d(o, c, e)
          },
          "aria-label": null != n ? n : t,
          disabled: p,
          dangerous: m,
          ...E,
          children: [(0, i.jsx)(s, {
            className: z.icon,
            color: "currentColor",
            ...r
          }), f && (0, i.jsx)(u.LottieSparkle, {})]
        }), _ && (0, i.jsx)(P.Z0, {})]
      })
    }
  }, h)
}

function X(e) {
  let {
    channel: t,
    message: n,
    canCopy: l,
    canPin: s,
    canDelete: r,
    canReport: o,
    canEdit: _,
    canPublish: f,
    canReact: I,
    canConfigureJoin: x,
    canReply: T,
    canStartThread: A,
    canViewThread: P,
    canForward: G,
    isExpanded: z,
    showMoreUtilities: Y,
    showEmojiPicker: X,
    showMessageRemindersActions: Q,
    isMessageReminder: $,
    setPopout: ee,
    hasDeveloperMode: et,
    isGuildInviteReminder: en,
    isFocused: ei
  } = function(e) {
    let {
      channel: t,
      message: n,
      showEmojiPicker: i,
      showEmojiBurstPicker: a,
      showMoreUtilities: l,
      setPopout: s,
      isFocused: r
    } = e, {
      author: o
    } = n, u = (0, c.e7)([b.Z], () => b.Z.getGuild(t.guild_id), [t.guild_id]), _ = (0, c.e7)([Z.default], () => Z.default.getId()), f = (0, v.$R)(t), I = (0, v.Gu)(t), x = S.nc.useSetting(), T = S.Sb.useSetting(), A = (0, c.e7)([R.Z], () => null == t.guild_id || R.Z.canChatInGuild(t.guild_id), [t]), {
      canManageMessages: L,
      canAddNewReactions: P
    } = (0, c.cj)([j.Z], () => ({
      canAddNewReactions: A && j.Z.can(F.Plq.ADD_REACTIONS, t),
      canManageMessages: j.Z.can(F.Plq.MANAGE_MESSAGES, t)
    }), [t, A]), O = (0, N.U)(t, n), B = (0, v.NE)(t, n), H = (0, v.Ek)(n), G = (0, c.e7)([E.Z], () => null != t.guild_id && E.Z.isLurking(t.guild_id), [t]), W = (0, c.e7)([M.ZP], () => null != t.guild_id && M.ZP.isCurrentUserGuest(t.guild_id), [t]), z = o.id === _, Y = (L || n.canDeleteOwnMessage(_)) && f && !F.V$x.UNDELETABLE.has(n.type);
    n.type === F.uaV.AUTO_MODERATION_ACTION && (Y = Y && L);
    let K = (0, D.a4)(n),
      q = (0, U.Z)(n, t, L),
      X = !t.isSystemDM() && (0, k.Z)(n, _) && f && !I,
      {
        disableReactionCreates: Q
      } = (0, w.Z)({
        channel: t,
        canChat: A,
        renderReactions: x,
        canAddNewReactions: P,
        isLurking: G,
        isGuest: W,
        isActiveChannelOrUnarchivableThread: f
      }),
      J = t.type === F.d4z.GUILD_ANNOUNCEMENT && null != u && u.hasFeature(F.oNc.NEWS) && (z || L) && (0, h.Z)(n),
      $ = t.getGuildId(),
      ee = null != $ && (n.type === F.uaV.USER_JOIN || n.type === F.uaV.GUILD_INVITE_REMINDER) && j.Z.canWithPartialContext(F.Plq.MANAGE_GUILD, {
        guildId: $
      }),
      {
        canForwardMessages: et
      } = p.w.useExperiment({
        location: "useMessageUtilitiesProps"
      }, {
        autoTrackExposure: !1
      }),
      en = (0, m.a)(n),
      {
        showReminders: ei
      } = g.Z.useExperiment({
        location: "9bfedc_1"
      }, {
        autoTrackExposure: !1
      }),
      ea = (0, c.e7)([C.Z], () => null != C.Z.getMessageReminders().find(e => e.messageId === n.id)),
      el = (0, V.Z)(),
      es = (0, c.e7)([d.Z], () => d.Z.keyboardModeEnabled);
    return {
      channel: t,
      message: n,
      canPin: q,
      canEdit: X,
      canDelete: Y,
      canReport: K,
      canReply: O,
      canStartThread: B,
      canViewThread: H,
      canForward: et && en,
      canCopy: y.wS,
      hasDeveloperMode: T,
      canReact: !Q && x,
      canPublish: J,
      canConfigureJoin: ee,
      isExpanded: el && !es && !i && !a && !l,
      showEmojiPicker: i,
      showEmojiBurstPicker: a,
      showMoreUtilities: l,
      showMessageRemindersActions: ei,
      isMessageReminder: ea,
      setPopout: s,
      isFocused: r,
      isGuildInviteReminder: n.type === F.uaV.GUILD_INVITE_REMINDER
    }
  }(e), ea = a.useCallback(() => {
    !Y && O.default.track(F.rMx.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
      message_id: n.id,
      channel: n.channel_id
    }), ee({
      moreUtilities: !Y
    })
  }, [Y, ee, n]), el = a.useCallback(() => {
    ee({
      emojiPicker: !X
    })
  }, [X, ee]), es = (0, v.$R)(t), er = n.hasFlag(F.iLy.CROSSPOSTED);
  return (0, i.jsxs)(i.Fragment, {
    children: [z ? (0, i.jsxs)(i.Fragment, {
      children: [l && et ? q({
        key: "copy-id",
        channel: t,
        message: n,
        label: W.Z.Messages.COPY_ID_MESSAGE,
        icon: u.IdIcon,
        onClick: B.F4
      }) : null, l && !en ? q({
        key: "copy-link",
        channel: t,
        message: n,
        label: W.Z.Messages.COPY_LINK,
        icon: u.LinkIcon,
        onClick: B.fB
      }) : null, x ? q({
        key: "configure",
        channel: t,
        message: n,
        label: W.Z.Messages.CONFIGURE,
        icon: u.CircleQuestionIcon,
        onClick: B.zW
      }) : null, Q ? q({
        key: "mark-reminder",
        channel: t,
        message: n,
        label: $ ? W.Z.Messages.MESSAGE_REMINDERS_MARK_AS_DONE : W.Z.Messages.MESSAGE_REMINDERS_MARK_AS_TODO,
        icon: $ ? (0, u.makeIconCompat)(L.Z) : u.ListBulletsIcon,
        onClick: $ ? B.l9 : B.W1
      }) : null, es ? q({
        key: "mark-unread",
        channel: t,
        message: n,
        label: W.Z.Messages.MARK_UNREAD,
        icon: u.ChatMarkUnreadIcon,
        onClick: B.B8
      }) : null, s ? q({
        key: "pin",
        channel: t,
        message: n,
        label: n.pinned ? W.Z.Messages.UNPIN_MESSAGE : W.Z.Messages.PIN_MESSAGE,
        icon: u.PinIcon,
        onClick: B.rY
      }) : null, A && G ? q({
        key: "thread",
        channel: t,
        message: n,
        label: W.Z.Messages.CREATE_THREAD,
        icon: u.ThreadIcon,
        onClick: B.gK
      }) : null, T && _ ? q({
        key: "reply-self",
        channel: t,
        message: n,
        label: W.Z.Messages.MESSAGE_ACTION_REPLY,
        icon: u.ArrowAngleLeftUpIcon,
        onClick: B.HH
      }) : null]
    }) : null, I && !en ? (0, i.jsx)(H.Z, {
      channel: t,
      message: n,
      togglePopout: el,
      renderEmojiPicker: J,
      shouldShow: X,
      isFocused: ei
    }) : null, T && !_ ? q({
      key: "reply-other",
      channel: t,
      message: n,
      label: W.Z.Messages.MESSAGE_ACTION_REPLY,
      icon: u.ArrowAngleLeftUpIcon,
      onClick: B.HH
    }) : null, _ ? q({
      key: "edit",
      channel: t,
      message: n,
      label: W.Z.Messages.EDIT,
      icon: u.PencilIcon,
      onClick: B.Hd
    }) : null, G ? q({
      key: "forward",
      channel: t,
      message: n,
      label: W.Z.Messages.MESSAGE_ACTION_FORWARD,
      icon: u.ChatArrowRightIcon,
      onClick: B.ts
    }) : null, A && !G ? q({
      key: "thread",
      channel: t,
      message: n,
      label: W.Z.Messages.CREATE_THREAD,
      icon: u.ThreadIcon,
      onClick: B.gK
    }) : null, !A && P ? q({
      key: "view-thread",
      channel: t,
      message: n,
      label: W.Z.Messages.VIEW_THREAD,
      icon: u.ThreadIcon,
      onClick: B.qe
    }) : null, f ? q({
      key: "publish",
      channel: t,
      message: n,
      label: er ? W.Z.Messages.NEWS_CHANNEL_PUBLISHED : W.Z.Messages.NEWS_CHANNEL_PUBLISH,
      icon: u.AnnouncementsIcon,
      onClick: B.Xl,
      disabled: er
    }) : null, r && (en || z) ? q({
      key: "delete",
      channel: t,
      message: n,
      label: W.Z.Messages.DELETE,
      icon: u.TrashIcon,
      onClick: B.$Z,
      dangerous: !0,
      separator: !z
    }) : null, z && r ? null : (0, i.jsx)(u.Popout, {
      renderPopout: e => {
        let {
          updatePosition: a,
          closePopout: l
        } = e;
        return (0, i.jsx)(K, {
          channel: t,
          message: n,
          canReport: o,
          onClose: l,
          updatePosition: a
        })
      },
      shouldShow: Y,
      onRequestClose: ea,
      position: "left",
      align: "top",
      animation: u.Popout.Animation.NONE,
      children: (e, i) => {
        let {
          onClick: a,
          ...l
        } = e, {
          isShown: s
        } = i;
        return q({
          key: "more",
          label: W.Z.Messages.MORE,
          icon: u.MoreHorizontalIcon,
          channel: t,
          message: n,
          selected: s,
          onClick: ea,
          ...l
        })
      }
    })]
  })
}

function Q(e) {
  let {
    channel: t,
    message: n
  } = e, a = (0, c.e7)([_.Z], () => null != _.Z.getMessage(n.id), [n.id]), l = null == n.interaction || null != n.interactionData && (0, f.$s)(n.interactionData);
  return (0, i.jsxs)(i.Fragment, {
    children: [!a && l && q({
      key: "retry",
      label: W.Z.Messages.RETRY,
      icon: u.RetryIcon,
      channel: t,
      message: n,
      onClick: B.mG
    }), q({
      key: "delete-usent",
      label: W.Z.Messages.DELETE,
      icon: u.TrashIcon,
      channel: t,
      message: n,
      onClick: B.$Z
    })]
  })
}

function J(e, t, n) {
  let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    l = {
      openPopoutType: "message_reaction_emoji_picker",
      ...a && {
        openPopoutType: "message_super_reaction_emoji_picker",
        page: null != e.getGuildId() ? F.ZY5.GUILD_CHANNEL : F.ZY5.DM_CHANNEL,
        section: (0, x.s4)(e),
        object: F.qAy.EMOJI_REACTION_PICKER_POPOUT
      }
    };
  return (0, i.jsx)(T.$, {
    channel: e,
    closePopout: n,
    onSelectEmoji: (i, a, l) => {
      ! function(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        null != e && (0, I.rU)(t.id, n.id, (0, x.g1)(e), void 0, {
          burst: i
        })
      }(i, e, t, l), a && (l ? o()(n, 150)() : n())
    },
    analyticsOverride: l,
    messageId: t.id
  })
}
t.Z = a.memo(function(e) {
  let {
    channel: t,
    message: n,
    isHeader: a
  } = e, l = (0, c.e7)([A.Z], () => A.Z.isEditing(t.id, n.id), [t.id, n.id]), r = function(e) {
    let {
      channel: t,
      message: n
    } = e;
    return n.state === F.yb.SEND_FAILED ? (0, i.jsx)(Q, {
      channel: t,
      message: n
    }) : null
  }(e), o = function(e) {
    let {
      message: t
    } = e;
    return t.state !== F.yb.SEND_FAILED ? (0, i.jsx)(X, {
      ...e
    }) : null
  }(e);
  return l || null == r && null == o ? null : (0, i.jsx)("div", {
    className: s()(e.className, {
      [z.container]: !0,
      [z.isHeader]: a
    }),
    onClick: Y,
    onContextMenu: Y,
    role: "group",
    "aria-label": W.Z.Messages.MESSAGE_UTILITIES_A11Y_LABEL,
    children: (0, i.jsxs)(P.ZP, {
      className: e.innerClassName,
      children: [r, o]
    })
  })
})