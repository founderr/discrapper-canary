n.d(t, {
  Z: function() {
    return y
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(512722),
  o = n.n(r),
  c = n(913527),
  d = n.n(c),
  u = n(442837),
  _ = n(524437),
  E = n(481060),
  m = n(239091),
  I = n(904245),
  T = n(43267),
  h = n(933557),
  N = n(294218),
  f = n(703656),
  p = n(686478),
  C = n(962796),
  g = n(802463),
  S = n(543666),
  A = n(682417),
  R = n(695346),
  O = n(592125),
  x = n(430824),
  M = n(375954),
  v = n(346656),
  L = n(240126),
  Z = n(791914),
  P = n(981631),
  b = n(689938),
  D = n(111212),
  j = n(174766);
let U = {
  offset: {
    left: 4,
    right: -12
  }
};

function y(e) {
  let {
    setTab: t,
    closePopout: n
  } = e, s = (0, u.e7)([g.Z], () => g.Z.getMessageReminders());
  a.useEffect(() => () => {
    (0, C.Mf)()
  }, []);
  let [l, r] = a.useState(!1), o = a.useMemo(() => s.filter(e => null == e.dueAt || e.dueAt < new Date), [s]), c = l ? s : o, d = c.filter(e => !(0, p.uX)(e));
  return (0, S.N)(d), (0, i.jsxs)("div", {
    className: D.container,
    children: [(0, i.jsx)(Z.Z, {
      tab: _.X.TODOS,
      setTab: t,
      closePopout: n
    }), (0, i.jsxs)("div", {
      className: D.headerText,
      children: [(0, i.jsx)(E.Heading, {
        variant: "heading-lg/bold",
        children: l ? b.Z.Messages.MESSAGE_REMINDERS_HEADER_ALL : b.Z.Messages.MESSAGE_REMINDERS_HEADER_OVERDUE
      }), (0, i.jsx)(E.Anchor, {
        onClick: () => r(!l),
        children: (0, i.jsx)(E.Text, {
          variant: "text-sm/normal",
          color: "text-link",
          children: l ? b.Z.Messages.MESSAGE_REMINDERS_HEADER_SHOW_OVERDUE.format({
            count: o.length
          }) : b.Z.Messages.MESSAGE_REMINDERS_HEADER_SHOW_ALL.format({
            count: s.length
          })
        })
      })]
    }), 0 === c.length ? (0, i.jsx)(k, {}) : null, (0, i.jsx)(E.AdvancedScrollerThin, {
      children: c.map(e => (function(e) {
        return [(0, i.jsx)(B, {
          messageId: e.messageId
        }, e.messageId)]
      })(e))
    })]
  })
}

function B(e) {
  let t, {
      messageId: a
    } = e,
    s = (0, u.e7)([g.Z], () => g.Z.getMessageReminders().find(e => e.messageId === a));
  o()(null != s, "should not be rendering a to-do message without a to-do message");
  let r = s.complete,
    c = (0, u.e7)([M.Z], () => M.Z.getMessage(s.channelId, s.messageId)),
    {
      message: _,
      channel: p
    } = (0, A.p)(s),
    S = O.Z.getChannel(p.id),
    L = (0, h.ZP)(S, !0),
    Z = null != L ? L : p.name,
    y = (0, u.e7)([x.Z], () => x.Z.getGuild(null == p ? void 0 : p.guild_id)),
    B = null != p ? (0, T.x)(p) : null,
    k = null;
  return null != s.dueAt && (s.dueAt > new Date ? (t = "text-muted", k = b.Z.Messages.MESSAGE_REMINDERS_DUE_IN.format({
    duration: d().duration(s.dueAt.getTime() - Date.now(), "millisecond").humanize()
  })) : (t = "text-danger", k = b.Z.Messages.MESSAGE_REMINDERS_OVERDUE.format({
    duration: d().duration(Date.now() - s.dueAt.getTime(), "millisecond").humanize()
  }))), (0, i.jsxs)("div", {
    className: j.container,
    children: [(0, i.jsxs)("div", {
      className: D.messageHeader,
      children: [(0, i.jsxs)("div", {
        children: [(0, i.jsxs)("div", {
          className: D.messageInfo,
          children: [null != y ? (0, i.jsx)(v.Z, {
            className: D.guildIcon,
            guild: y,
            size: v.Z.Sizes.SMALL,
            active: !0
          }) : (0, i.jsx)(E.Avatar, {
            "aria-hidden": !0,
            src: null != B ? B : n(187293),
            size: E.AvatarSizes.SIZE_32
          }), (0, i.jsx)(E.Text, {
            variant: "text-md/medium",
            color: "header-primary",
            selectable: !0,
            children: Z
          })]
        }), null != s.notes && s.notes.length > 0 ? (0, i.jsxs)(E.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: D.notes,
          selectable: !0,
          children: [(0, i.jsx)(E.FileIcon, {
            size: "xxs",
            color: "currentColor"
          }), s.notes]
        }) : null, null != k ? (0, i.jsx)(E.Text, {
          variant: "text-sm/medium",
          color: t,
          style: {
            marginTop: 4
          },
          children: k
        }) : null]
      }), (0, i.jsxs)("div", {
        className: D.reminderActions,
        children: [(0, i.jsx)(E.TooltipContainer, {
          text: b.Z.Messages.MESSAGE_REMINDERS_SNOOZE,
          children: (0, i.jsx)(E.Clickable, {
            onClick: e => (0, m.jW)(e, async () => {
              let {
                default: e
              } = await n.e("6045").then(n.bind(n, 883150));
              return t => (0, i.jsx)(e, {
                ...t,
                message: _
              })
            }),
            className: D.clock,
            children: (0, i.jsx)(E.ClockIcon, {
              size: "custom",
              width: 20,
              height: 20,
              color: "currentColor"
            })
          })
        }), (0, i.jsx)(E.Checkbox, {
          type: E.Checkbox.Types.INVERTED,
          value: r,
          onChange: (e, t) => {
            (0, C.Y_)(s.messageId, t)
          }
        })]
      })]
    }), (0, i.jsxs)("div", {
      className: l()(j.messageContainer, D.unloadedMessage, {
        [D.disabledMessage]: r
      }),
      children: [(0, i.jsx)(N.Z, {
        message: _,
        channel: p,
        className: j.message,
        compact: R.jU.getSetting(),
        animateAvatar: !1,
        focusProps: U,
        trackAnnouncementViews: !0
      }, _.id), (0, i.jsxs)("div", {
        className: D.actions,
        children: [null == c ? (0, i.jsx)(E.Button, {
          onClick: () => {
            I.Z.fetchMessages({
              channelId: s.channelId,
              limit: 1,
              jump: {
                messageId: s.messageId,
                flash: !1,
                offset: 1
              }
            })
          },
          size: E.Button.Sizes.MIN,
          color: E.Button.Colors.TRANSPARENT,
          className: D.loadButton,
          children: (0, i.jsx)(E.Text, {
            variant: "text-xs/normal",
            children: "Load"
          })
        }) : null, (0, i.jsx)(E.Button, {
          onClick: () => {
            (0, f.uL)(P.Z5c.CHANNEL(null == p ? void 0 : p.getGuildId(), s.channelId, s.messageId))
          },
          size: E.Button.Sizes.MIN,
          color: E.Button.Colors.TRANSPARENT,
          className: D.loadButton,
          children: (0, i.jsx)(E.Text, {
            variant: "text-xs/normal",
            children: b.Z.Messages.JUMP
          })
        })]
      })]
    })]
  })
}

function k() {
  return (0, u.e7)([g.Z], () => g.Z.getMessageReminders().length > 0) ? null : (0, i.jsx)(L.Z, {
    Icon: E.DoubleCheckmarkLargeIcon,
    header: b.Z.Messages.MESSAGE_REMINDERS_EMPTY,
    tip: b.Z.Messages.MESSAGE_REMINDERS_EMPTY_TIP
  })
}