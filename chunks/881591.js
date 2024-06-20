n.d(t, {
  Z: function() {
    return b
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(512722),
  o = n.n(r),
  c = n(913527),
  u = n.n(c),
  d = n(442837),
  E = n(524437),
  _ = n(481060),
  I = n(239091),
  T = n(904245),
  N = n(43267),
  m = n(933557),
  h = n(822893),
  C = n(329461),
  S = n(831267),
  A = n(203965),
  p = n(570907),
  g = n(294218),
  f = n(703656),
  O = n(695346),
  R = n(592125),
  M = n(430824),
  x = n(375954),
  v = n(346656),
  L = n(240126),
  Z = n(791914),
  P = n(981631),
  D = n(689938),
  j = n(111212),
  U = n(174766);
let y = {
  offset: {
    left: 4,
    right: -12
  }
};

function b(e) {
  let {
    setTab: t,
    closePopout: n
  } = e, l = (0, d.e7)([C.Z], () => C.Z.getMessageReminders());
  i.useEffect(() => () => {
    (0, h.Mf)()
  }, []);
  let [a, r] = i.useState(!1), o = i.useMemo(() => l.filter(e => null == e.dueAt || e.dueAt < new Date), [l]), c = a ? l : o, u = c.filter(e => !(0, S.uX)(e));
  return (0, A.N)(u), (0, s.jsxs)("div", {
    className: j.container,
    children: [(0, s.jsx)(Z.Z, {
      tab: E.X.TODOS,
      setTab: t,
      closePopout: n
    }), (0, s.jsxs)("div", {
      className: j.headerText,
      children: [(0, s.jsx)(_.Heading, {
        variant: "heading-lg/bold",
        children: a ? D.Z.Messages.MESSAGE_REMINDERS_HEADER_ALL : D.Z.Messages.MESSAGE_REMINDERS_HEADER_OVERDUE
      }), (0, s.jsx)(_.Anchor, {
        onClick: () => r(!a),
        children: (0, s.jsx)(_.Text, {
          variant: "text-sm/normal",
          color: "text-link",
          children: a ? D.Z.Messages.MESSAGE_REMINDERS_HEADER_SHOW_OVERDUE.format({
            count: o.length
          }) : D.Z.Messages.MESSAGE_REMINDERS_HEADER_SHOW_ALL.format({
            count: l.length
          })
        })
      })]
    }), 0 === c.length ? (0, s.jsx)(k, {}) : null, (0, s.jsx)(_.AdvancedScrollerThin, {
      children: c.map(e => (function(e) {
        return [(0, s.jsx)(B, {
          messageId: e.messageId
        }, e.messageId)]
      })(e))
    })]
  })
}

function B(e) {
  let t, {
      messageId: i
    } = e,
    l = (0, d.e7)([C.Z], () => C.Z.getMessageReminders().find(e => e.messageId === i));
  o()(null != l, "should not be rendering a to-do message without a to-do message");
  let r = l.complete,
    c = (0, d.e7)([x.Z], () => x.Z.getMessage(l.channelId, l.messageId)),
    {
      message: E,
      channel: S
    } = (0, p.p)(l),
    A = R.Z.getChannel(S.id),
    L = (0, m.ZP)(A, !0),
    Z = null != L ? L : S.name,
    b = (0, d.e7)([M.Z], () => M.Z.getGuild(null == S ? void 0 : S.guild_id)),
    B = null != S ? (0, N.x)(S) : null,
    k = null;
  return null != l.dueAt && (l.dueAt > new Date ? (t = "text-muted", k = D.Z.Messages.MESSAGE_REMINDERS_DUE_IN.format({
    duration: u().duration(l.dueAt.getTime() - Date.now(), "millisecond").humanize()
  })) : (t = "text-danger", k = D.Z.Messages.MESSAGE_REMINDERS_OVERDUE.format({
    duration: u().duration(Date.now() - l.dueAt.getTime(), "millisecond").humanize()
  }))), (0, s.jsxs)("div", {
    className: U.container,
    children: [(0, s.jsxs)("div", {
      className: j.messageHeader,
      children: [(0, s.jsxs)("div", {
        children: [(0, s.jsxs)("div", {
          className: j.messageInfo,
          children: [null != b ? (0, s.jsx)(v.Z, {
            className: j.guildIcon,
            guild: b,
            size: v.Z.Sizes.SMALL,
            active: !0
          }) : (0, s.jsx)(_.Avatar, {
            "aria-hidden": !0,
            src: null != B ? B : n(788429),
            size: _.AvatarSizes.SIZE_32
          }), (0, s.jsx)(_.Text, {
            variant: "text-md/medium",
            color: "header-primary",
            selectable: !0,
            children: Z
          })]
        }), null != l.notes && l.notes.length > 0 ? (0, s.jsxs)(_.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: j.notes,
          selectable: !0,
          children: [(0, s.jsx)(_.FileIcon, {
            size: "xxs",
            color: "currentColor"
          }), l.notes]
        }) : null, null != k ? (0, s.jsx)(_.Text, {
          variant: "text-sm/medium",
          color: t,
          style: {
            marginTop: 4
          },
          children: k
        }) : null]
      }), (0, s.jsxs)("div", {
        className: j.reminderActions,
        children: [(0, s.jsx)(_.TooltipContainer, {
          text: D.Z.Messages.MESSAGE_REMINDERS_SNOOZE,
          children: (0, s.jsx)(_.Clickable, {
            onClick: e => (0, I.jW)(e, async () => {
              let {
                default: e
              } = await n.e("6045").then(n.bind(n, 883150));
              return t => (0, s.jsx)(e, {
                ...t,
                message: E
              })
            }),
            className: j.clock,
            children: (0, s.jsx)(_.ClockIcon, {
              size: "custom",
              width: 20,
              height: 20,
              color: "currentColor"
            })
          })
        }), (0, s.jsx)(_.Checkbox, {
          type: _.Checkbox.Types.INVERTED,
          value: r,
          onChange: (e, t) => {
            (0, h.Y_)(l.messageId, t)
          }
        })]
      })]
    }), (0, s.jsxs)("div", {
      className: a()(U.messageContainer, j.unloadedMessage, {
        [j.disabledMessage]: r
      }),
      children: [(0, s.jsx)(g.Z, {
        message: E,
        channel: S,
        className: U.message,
        compact: O.jU.getSetting(),
        animateAvatar: !1,
        focusProps: y,
        trackAnnouncementViews: !0
      }, E.id), (0, s.jsxs)("div", {
        className: j.actions,
        children: [null == c ? (0, s.jsx)(_.Button, {
          onClick: () => {
            T.Z.fetchMessages({
              channelId: l.channelId,
              limit: 1,
              jump: {
                messageId: l.messageId,
                flash: !1,
                offset: 1
              }
            })
          },
          size: _.Button.Sizes.MIN,
          color: _.Button.Colors.TRANSPARENT,
          className: j.loadButton,
          children: (0, s.jsx)(_.Text, {
            variant: "text-xs/normal",
            children: "Load"
          })
        }) : null, (0, s.jsx)(_.Button, {
          onClick: () => {
            (0, f.uL)(P.Z5c.CHANNEL(null == S ? void 0 : S.getGuildId(), l.channelId, l.messageId))
          },
          size: _.Button.Sizes.MIN,
          color: _.Button.Colors.TRANSPARENT,
          className: j.loadButton,
          children: (0, s.jsx)(_.Text, {
            variant: "text-xs/normal",
            children: D.Z.Messages.JUMP
          })
        })]
      })]
    })]
  })
}

function k() {
  return (0, d.e7)([C.Z], () => C.Z.getMessageReminders().length > 0) ? null : (0, s.jsx)(L.Z, {
    Icon: _.DoubleCheckmarkLargeIcon,
    header: D.Z.Messages.MESSAGE_REMINDERS_EMPTY,
    tip: D.Z.Messages.MESSAGE_REMINDERS_EMPTY_TIP
  })
}