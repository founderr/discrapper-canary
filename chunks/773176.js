n(47120);
var i = n(735250),
  a = n(470079),
  l = n(120356),
  s = n.n(l),
  r = n(954955),
  o = n.n(r),
  c = n(442837),
  u = n(704215),
  d = n(481060),
  h = n(607070),
  p = n(110630),
  m = n(377171),
  _ = n(706140),
  f = n(346610),
  E = n(868643),
  C = n(223606),
  g = n(188597),
  I = n(41776),
  x = n(222677),
  T = n(995774),
  N = n(931651),
  v = n(280845),
  S = n(742989),
  Z = n(802463),
  A = n(665906),
  M = n(695346),
  b = n(314897),
  R = n(323873),
  j = n(271383),
  L = n(430824),
  P = n(607744),
  O = n(496675),
  y = n(448239),
  D = n(404975),
  k = n(626135),
  U = n(572004),
  w = n(970257),
  B = n(418476),
  H = n(151007),
  G = n(432376),
  V = n(996861),
  F = n(603490),
  W = n(225138),
  z = n(717680),
  Y = n(981631),
  K = n(921944),
  q = n(689938),
  X = n(961864);

function Q(e) {
  e.stopPropagation()
}

function J(e) {
  let {
    message: t,
    channel: n,
    canReport: i,
    onClose: a,
    updatePosition: l
  } = e;
  return (0, W.useMessageMenu)({
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
    ariaLabel: q.Z.Messages.MESSAGE_UTILITIES_A11Y_LABEL
  })
}

function $(e) {
  let {
    label: t,
    ariaLabel: n,
    tooltipText: a,
    tooltipColor: l,
    icon: s,
    iconProps: r,
    channel: o,
    message: c,
    onClick: u,
    onTooltipShow: h,
    onTooltipHide: p,
    key: _,
    disabled: f,
    dangerous: E,
    separator: C,
    sparkle: g,
    showNewBadge: I,
    ...x
  } = e;
  return (0, i.jsx)(d.Tooltip, {
    text: null != a ? a : t,
    color: null != l ? l : d.TooltipColors.PRIMARY,
    "aria-label": t,
    onTooltipShow: h,
    onTooltipHide: p,
    hideOnClick: !0,
    tooltipClassName: X.tooltip,
    children: e => {
      let {
        onMouseEnter: a,
        onMouseLeave: l,
        onClick: h
      } = e;
      return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)(D.zx, {
          onMouseEnter: a,
          onMouseLeave: l,
          onClick: e => {
            null == h || h(), u(o, c, e)
          },
          "aria-label": null != n ? n : t,
          disabled: f,
          dangerous: E,
          ...x,
          children: [(0, i.jsx)(s, {
            className: X.icon,
            color: "currentColor",
            ...r
          }), g && (0, i.jsx)(d.LottieSparkle, {}), I && (0, i.jsx)(d.TextBadge, {
            text: q.Z.Messages.NEW,
            color: m.Z.BG_BRAND,
            className: X.newBadge
          })]
        }), C && (0, i.jsx)(D.Z0, {})]
      })
    }
  }, _)
}

function ee(e) {
  let {
    channel: t,
    message: n,
    canCopy: l,
    canPin: s,
    canDelete: r,
    canReport: o,
    canEdit: m,
    canPublish: C,
    canReact: g,
    canConfigureJoin: x,
    canReply: T,
    canStartThread: N,
    canViewThread: R,
    canForward: D,
    isExpanded: W,
    showMoreUtilities: X,
    showEmojiPicker: Q,
    showMessageRemindersActions: ee,
    isMessageReminder: et,
    setPopout: ei,
    hasDeveloperMode: ea,
    isGuildInviteReminder: el,
    isFocused: es
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
    } = n, u = (0, c.e7)([L.Z], () => L.Z.getGuild(t.guild_id), [t.guild_id]), d = (0, c.e7)([b.default], () => b.default.getId()), m = (0, A.$R)(t), _ = (0, A.Gu)(t), C = M.nc.useSetting(), g = M.Sb.useSetting(), x = (0, c.e7)([P.Z], () => null == t.guild_id || P.Z.canChatInGuild(t.guild_id), [t]), {
      canManageMessages: T,
      canAddNewReactions: N
    } = (0, c.cj)([O.Z], () => ({
      canAddNewReactions: x && O.Z.can(Y.Plq.ADD_REACTIONS, t),
      canManageMessages: O.Z.can(Y.Plq.MANAGE_MESSAGES, t)
    }), [t, x]), R = (0, v.U)(t, n), y = (0, A.NE)(t, n), D = (0, A.Ek)(n), k = (0, c.e7)([I.Z], () => null != t.guild_id && I.Z.isLurking(t.guild_id), [t]), V = (0, c.e7)([j.ZP], () => null != t.guild_id && j.ZP.isCurrentUserGuest(t.guild_id), [t]), F = o.id === d, W = (T || n.canDeleteOwnMessage(d)) && m && !Y.V$x.UNDELETABLE.has(n.type);
    n.type === Y.uaV.AUTO_MODERATION_ACTION && (W = W && T);
    let K = (0, w.a4)(n),
      q = (0, H.Z)(n, t, T),
      X = !t.isSystemDM() && (0, B.Z)(n, d) && m && !_,
      {
        disableReactionCreates: Q
      } = (0, G.Z)({
        channel: t,
        canChat: x,
        renderReactions: C,
        canAddNewReactions: N,
        isLurking: k,
        isGuest: V,
        isActiveChannelOrUnarchivableThread: m
      }),
      J = t.type === Y.d4z.GUILD_ANNOUNCEMENT && null != u && u.hasFeature(Y.oNc.NEWS) && (F || T) && (0, p.Z)(n),
      $ = t.getGuildId(),
      ee = null != $ && (n.type === Y.uaV.USER_JOIN || n.type === Y.uaV.GUILD_INVITE_REMINDER) && O.Z.canWithPartialContext(Y.Plq.MANAGE_GUILD, {
        guildId: $
      }),
      {
        canForwardMessages: et
      } = f.w.useExperiment({
        location: "useMessageUtilitiesProps"
      }, {
        autoTrackExposure: !1
      }),
      en = (0, E.a)(n),
      {
        showReminders: ei
      } = S.Z.useExperiment({
        location: "9bfedc_1"
      }, {
        autoTrackExposure: !1
      }),
      ea = (0, c.e7)([Z.Z], () => null != Z.Z.getMessageReminders().find(e => e.messageId === n.id)),
      el = (0, z.Z)(),
      es = (0, c.e7)([h.Z], () => h.Z.keyboardModeEnabled);
    return {
      channel: t,
      message: n,
      canPin: q,
      canEdit: X,
      canDelete: W,
      canReport: K,
      canReply: R,
      canStartThread: y,
      canViewThread: D,
      canForward: et && en,
      canCopy: U.wS,
      hasDeveloperMode: g,
      canReact: !Q && C,
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
      isGuildInviteReminder: n.type === Y.uaV.GUILD_INVITE_REMINDER
    }
  }(e), er = a.useCallback(() => {
    !X && k.default.track(Y.rMx.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
      message_id: n.id,
      channel: n.channel_id
    }), ei({
      moreUtilities: !X
    })
  }, [X, ei, n]), eo = a.useCallback(() => {
    ei({
      emojiPicker: !Q
    })
  }, [Q, ei]), ec = (0, A.$R)(t), eu = n.hasFlag(Y.iLy.CROSSPOSTED), [ed, eh] = (0, _.c)(D ? [u.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE] : []), ep = ed === u.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE, [em, e_] = a.useState(!1), ef = a.useCallback(() => {
    e_(!0)
  }, []), eE = a.useCallback(() => {
    e_(!1)
  }, []), eC = a.useCallback((e, t) => {
    eh(K.L.TAKE_ACTION), (0, V.ts)(e, t)
  }, [eh]);
  return (0, i.jsxs)(i.Fragment, {
    children: [W ? (0, i.jsxs)(i.Fragment, {
      children: [l && ea ? $({
        key: "copy-id",
        channel: t,
        message: n,
        label: q.Z.Messages.COPY_ID_MESSAGE,
        icon: d.IdIcon,
        onClick: V.F4
      }) : null, l && !el ? $({
        key: "copy-link",
        channel: t,
        message: n,
        label: q.Z.Messages.COPY_LINK,
        icon: d.LinkIcon,
        onClick: V.fB
      }) : null, x ? $({
        key: "configure",
        channel: t,
        message: n,
        label: q.Z.Messages.CONFIGURE,
        icon: d.CircleQuestionIcon,
        onClick: V.zW
      }) : null, ee ? $({
        key: "mark-reminder",
        channel: t,
        message: n,
        label: et ? q.Z.Messages.MESSAGE_REMINDERS_MARK_AS_DONE : q.Z.Messages.MESSAGE_REMINDERS_MARK_AS_TODO,
        icon: et ? (0, d.makeIconCompat)(y.Z) : d.ListBulletsIcon,
        onClick: et ? V.l9 : V.W1
      }) : null, ec ? $({
        key: "mark-unread",
        channel: t,
        message: n,
        label: q.Z.Messages.MARK_UNREAD,
        icon: d.ChatMarkUnreadIcon,
        onClick: V.B8
      }) : null, s ? $({
        key: "pin",
        channel: t,
        message: n,
        label: n.pinned ? q.Z.Messages.UNPIN_MESSAGE : q.Z.Messages.PIN_MESSAGE,
        icon: d.PinIcon,
        onClick: V.rY
      }) : null, N && D ? $({
        key: "thread",
        channel: t,
        message: n,
        label: q.Z.Messages.CREATE_THREAD,
        icon: d.ThreadIcon,
        onClick: V.gK
      }) : null, T && m ? $({
        key: "reply-self",
        channel: t,
        message: n,
        label: q.Z.Messages.MESSAGE_ACTION_REPLY,
        icon: d.ArrowAngleLeftUpIcon,
        onClick: V.HH
      }) : null]
    }) : null, g && !el ? (0, i.jsx)(F.Z, {
      channel: t,
      message: n,
      togglePopout: eo,
      renderEmojiPicker: en,
      shouldShow: Q,
      isFocused: es
    }) : null, T && !m ? $({
      key: "reply-other",
      channel: t,
      message: n,
      label: q.Z.Messages.MESSAGE_ACTION_REPLY,
      icon: d.ArrowAngleLeftUpIcon,
      onClick: V.HH
    }) : null, m ? $({
      key: "edit",
      channel: t,
      message: n,
      label: q.Z.Messages.EDIT,
      icon: d.PencilIcon,
      onClick: V.Hd
    }) : null, D ? $({
      key: "forward",
      channel: t,
      message: n,
      label: q.Z.Messages.MESSAGE_ACTION_FORWARD,
      icon: d.ChatArrowRightIcon,
      onClick: eC,
      onTooltipShow: ef,
      onTooltipHide: eE,
      showNewBadge: !em && ep
    }) : null, N && !D ? $({
      key: "thread",
      channel: t,
      message: n,
      label: q.Z.Messages.CREATE_THREAD,
      icon: d.ThreadIcon,
      onClick: V.gK
    }) : null, !N && R ? $({
      key: "view-thread",
      channel: t,
      message: n,
      label: q.Z.Messages.VIEW_THREAD,
      icon: d.ThreadIcon,
      onClick: V.qe
    }) : null, C ? $({
      key: "publish",
      channel: t,
      message: n,
      label: eu ? q.Z.Messages.NEWS_CHANNEL_PUBLISHED : q.Z.Messages.NEWS_CHANNEL_PUBLISH,
      icon: d.AnnouncementsIcon,
      onClick: V.Xl,
      disabled: eu
    }) : null, r && (el || W) ? $({
      key: "delete",
      channel: t,
      message: n,
      label: q.Z.Messages.DELETE,
      icon: d.TrashIcon,
      onClick: V.$Z,
      dangerous: !0,
      separator: !W
    }) : null, W && r ? null : (0, i.jsx)(d.Popout, {
      renderPopout: e => {
        let {
          updatePosition: a,
          closePopout: l
        } = e;
        return (0, i.jsx)(J, {
          channel: t,
          message: n,
          canReport: o,
          onClose: l,
          updatePosition: a
        })
      },
      shouldShow: X,
      onRequestClose: er,
      position: "left",
      align: "top",
      animation: d.Popout.Animation.NONE,
      children: (e, i) => {
        let {
          onClick: a,
          ...l
        } = e, {
          isShown: s
        } = i;
        return $({
          key: "more",
          label: q.Z.Messages.MORE,
          icon: d.MoreHorizontalIcon,
          channel: t,
          message: n,
          selected: s,
          onClick: er,
          ...l
        })
      }
    })]
  })
}

function et(e) {
  let {
    channel: t,
    message: n
  } = e, a = (0, c.e7)([C.Z], () => null != C.Z.getMessage(n.id), [n.id]), l = null == n.interaction || null != n.interactionData && (0, g.$s)(n.interactionData);
  return (0, i.jsxs)(i.Fragment, {
    children: [!a && l && $({
      key: "retry",
      label: q.Z.Messages.RETRY,
      icon: d.RetryIcon,
      channel: t,
      message: n,
      onClick: V.mG
    }), $({
      key: "delete-usent",
      label: q.Z.Messages.DELETE,
      icon: d.TrashIcon,
      channel: t,
      message: n,
      onClick: V.$Z
    })]
  })
}

function en(e, t, n) {
  let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    l = {
      openPopoutType: "message_reaction_emoji_picker",
      ...a && {
        openPopoutType: "message_super_reaction_emoji_picker",
        page: null != e.getGuildId() ? Y.ZY5.GUILD_CHANNEL : Y.ZY5.DM_CHANNEL,
        section: (0, T.s4)(e),
        object: Y.qAy.EMOJI_REACTION_PICKER_POPOUT
      }
    };
  return (0, i.jsx)(N.$, {
    channel: e,
    closePopout: n,
    onSelectEmoji: (i, a, l) => {
      ! function(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        null != e && (0, x.rU)(t.id, n.id, (0, T.g1)(e), void 0, {
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
  } = e, l = (0, c.e7)([R.Z], () => R.Z.isEditing(t.id, n.id), [t.id, n.id]), r = function(e) {
    let {
      channel: t,
      message: n
    } = e;
    return n.state === Y.yb.SEND_FAILED ? (0, i.jsx)(et, {
      channel: t,
      message: n
    }) : null
  }(e), o = function(e) {
    let {
      message: t
    } = e;
    return t.state !== Y.yb.SEND_FAILED ? (0, i.jsx)(ee, {
      ...e
    }) : null
  }(e);
  return l || null == r && null == o ? null : (0, i.jsx)("div", {
    className: s()(e.className, {
      [X.container]: !0,
      [X.isHeader]: a
    }),
    onClick: Q,
    onContextMenu: Q,
    role: "group",
    "aria-label": q.Z.Messages.MESSAGE_UTILITIES_A11Y_LABEL,
    children: (0, i.jsxs)(D.ZP, {
      className: s()(e.innerClassName, X.inner),
      children: [r, o]
    })
  })
})