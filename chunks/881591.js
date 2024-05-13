"use strict";
n.r(t), n.d(t, {
  default: function() {
    return G
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("512722"),
  o = n.n(r),
  u = n("913527"),
  d = n.n(u),
  c = n("442837"),
  f = n("524437"),
  h = n("481060"),
  E = n("239091"),
  m = n("904245"),
  p = n("43267"),
  g = n("933557"),
  S = n("822893"),
  N = n("329461"),
  _ = n("831267"),
  I = n("203965"),
  T = n("570907"),
  C = n("294218"),
  A = n("703656"),
  v = n("695346"),
  x = n("592125"),
  R = n("430824"),
  M = n("375954"),
  L = n("346656"),
  b = n("855693"),
  O = n("568570"),
  y = n("617808"),
  j = n("240126"),
  D = n("791914"),
  F = n("981631"),
  P = n("689938"),
  k = n("488234"),
  U = n("705332");
let w = {
  offset: {
    left: 4,
    right: -12
  }
};

function G(e) {
  let {
    setTab: t,
    closePopout: n
  } = e, s = (0, c.useStateFromStores)([N.default], () => N.default.getMessageReminders());
  l.useEffect(() => () => {
    (0, S.cleanupMessageReminders)()
  }, []);
  let [i, r] = l.useState(!1), o = l.useMemo(() => s.filter(e => null == e.dueAt || e.dueAt < new Date), [s]), u = i ? s : o, d = u.filter(e => !(0, _.savedMessageHasMetadata)(e));
  return (0, I.useMessageRemindersLoader)(d), (0, a.jsxs)("div", {
    className: k.container,
    children: [(0, a.jsx)(D.default, {
      tab: f.InboxTab.TODOS,
      setTab: t,
      closePopout: n
    }), (0, a.jsxs)("div", {
      className: k.headerText,
      children: [(0, a.jsx)(h.Heading, {
        variant: "heading-lg/bold",
        children: i ? P.default.Messages.MESSAGE_REMINDERS_HEADER_ALL : P.default.Messages.MESSAGE_REMINDERS_HEADER_OVERDUE
      }), (0, a.jsx)(h.Anchor, {
        onClick: () => r(!i),
        children: (0, a.jsx)(h.Text, {
          variant: "text-sm/normal",
          color: "text-link",
          children: i ? P.default.Messages.MESSAGE_REMINDERS_HEADER_SHOW_OVERDUE.format({
            count: o.length
          }) : P.default.Messages.MESSAGE_REMINDERS_HEADER_SHOW_ALL.format({
            count: s.length
          })
        })
      })]
    }), 0 === u.length ? (0, a.jsx)(H, {}) : null, (0, a.jsx)(h.AdvancedScrollerThin, {
      children: u.map(e => (function(e) {
        return [(0, a.jsx)(B, {
          messageId: e.messageId
        }, e.messageId)]
      })(e))
    })]
  })
}

function B(e) {
  let t, {
      messageId: l
    } = e,
    s = (0, c.useStateFromStores)([N.default], () => N.default.getMessageReminders().find(e => e.messageId === l));
  o()(null != s, "should not be rendering a to-do message without a to-do message");
  let r = s.complete,
    u = (0, c.useStateFromStores)([M.default], () => M.default.getMessage(s.channelId, s.messageId)),
    {
      message: f,
      channel: _
    } = (0, T.getSavedMessageAndChannel)(s),
    I = x.default.getChannel(_.id),
    O = (0, g.default)(I, !0),
    j = null != O ? O : _.name,
    D = (0, c.useStateFromStores)([R.default], () => R.default.getGuild(null == _ ? void 0 : _.guild_id)),
    G = null != _ ? (0, p.getChannelIconURL)(_) : null,
    B = null;
  return null != s.dueAt && (s.dueAt > new Date ? (t = "text-muted", B = P.default.Messages.MESSAGE_REMINDERS_DUE_IN.format({
    duration: d().duration(s.dueAt.getTime() - Date.now(), "millisecond").humanize()
  })) : (t = "text-danger", B = P.default.Messages.MESSAGE_REMINDERS_OVERDUE.format({
    duration: d().duration(Date.now() - s.dueAt.getTime(), "millisecond").humanize()
  }))), (0, a.jsxs)("div", {
    className: U.container,
    children: [(0, a.jsxs)("div", {
      className: k.messageHeader,
      children: [(0, a.jsxs)("div", {
        children: [(0, a.jsxs)("div", {
          className: k.messageInfo,
          children: [null != D ? (0, a.jsx)(L.default, {
            className: k.guildIcon,
            guild: D,
            size: L.default.Sizes.SMALL,
            active: !0
          }) : (0, a.jsx)(h.Avatar, {
            "aria-hidden": !0,
            src: null != G ? G : n("788429"),
            size: h.AvatarSizes.SIZE_32
          }), (0, a.jsx)(h.Text, {
            variant: "text-md/medium",
            color: "header-primary",
            selectable: !0,
            children: j
          })]
        }), null != s.notes && s.notes.length > 0 ? (0, a.jsxs)(h.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: k.notes,
          selectable: !0,
          children: [(0, a.jsx)(y.default, {
            width: 12,
            height: 12
          }), s.notes]
        }) : null, null != B ? (0, a.jsx)(h.Text, {
          variant: "text-sm/medium",
          color: t,
          style: {
            marginTop: 4
          },
          children: B
        }) : null]
      }), (0, a.jsxs)("div", {
        className: k.reminderActions,
        children: [(0, a.jsx)(h.TooltipContainer, {
          text: P.default.Messages.MESSAGE_REMINDERS_SNOOZE,
          children: (0, a.jsx)(h.Clickable, {
            onClick: e => (0, E.openContextMenuLazy)(e, async () => {
              let {
                default: e
              } = await n.e("6045").then(n.bind(n, "883150"));
              return t => (0, a.jsx)(e, {
                ...t,
                message: f
              })
            }),
            className: k.clock,
            children: (0, a.jsx)(b.default, {})
          })
        }), (0, a.jsx)(h.Checkbox, {
          type: h.Checkbox.Types.INVERTED,
          value: r,
          onChange: (e, t) => {
            (0, S.toggleMessageReminders)(s.messageId, t)
          }
        })]
      })]
    }), (0, a.jsxs)("div", {
      className: i()(U.messageContainer, k.unloadedMessage, {
        [k.disabledMessage]: r
      }),
      children: [(0, a.jsx)(C.default, {
        message: f,
        channel: _,
        className: U.message,
        compact: v.MessageDisplayCompact.getSetting(),
        animateAvatar: !1,
        focusProps: w,
        trackAnnouncementViews: !0
      }, f.id), (0, a.jsxs)("div", {
        className: k.actions,
        children: [null == u ? (0, a.jsx)(h.Button, {
          onClick: () => {
            m.default.fetchMessages({
              channelId: s.channelId,
              limit: 1,
              jump: {
                messageId: s.messageId,
                flash: !1,
                offset: 1
              }
            })
          },
          size: h.Button.Sizes.MIN,
          color: h.Button.Colors.TRANSPARENT,
          className: k.loadButton,
          children: (0, a.jsx)(h.Text, {
            variant: "text-xs/normal",
            children: "Load"
          })
        }) : null, (0, a.jsx)(h.Button, {
          onClick: () => {
            (0, A.transitionTo)(F.Routes.CHANNEL(null == _ ? void 0 : _.getGuildId(), s.channelId, s.messageId))
          },
          size: h.Button.Sizes.MIN,
          color: h.Button.Colors.TRANSPARENT,
          className: k.loadButton,
          children: (0, a.jsx)(h.Text, {
            variant: "text-xs/normal",
            children: P.default.Messages.JUMP
          })
        })]
      })]
    })]
  })
}

function H() {
  return (0, c.useStateFromStores)([N.default], () => N.default.getMessageReminders().length > 0) ? null : (0, a.jsx)(j.default, {
    Icon: O.default,
    header: P.default.Messages.MESSAGE_REMINDERS_EMPTY,
    tip: P.default.Messages.MESSAGE_REMINDERS_EMPTY_TIP
  })
}