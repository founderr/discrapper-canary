a(47120);
var t = a(735250),
  i = a(470079),
  l = a(120356),
  n = a.n(l),
  r = a(699581),
  c = a(481060),
  o = a(689938),
  d = a(537254),
  I = a(288429);

function N(e) {
  let {
    text: s,
    className: a,
    hidden: i
  } = e;
  return (0, t.jsxs)("div", {
    className: n()(a, d.tip, {
      [d.hidden]: i
    }),
    children: [(0, t.jsx)(c.Text, {
      className: d.__invalid_tipText,
      variant: "text-sm/normal",
      color: "text-secondary",
      children: s
    }), (0, t.jsx)("div", {
      className: d.tipLine
    })]
  })
}

function x(e) {
  let {
    grey: s,
    mention: a,
    name: i
  } = e;
  return (0, t.jsxs)("div", {
    className: n()(d.channel, {
      [d.grey]: s,
      [d.mention]: a
    }),
    children: [(0, t.jsx)(c.TextIcon, {
      size: "xs",
      color: "currentColor",
      className: d.channelIcon
    }), (0, t.jsx)(c.Text, {
      variant: "text-md/medium",
      className: d.channelName,
      children: i
    })]
  })
}
s.Z = i.forwardRef(function(e, s) {
  let {} = e, [l, n] = i.useState("before"), [T, m] = i.useState(!1), [_, u] = i.useState(!1);
  i.useImperativeHandle(s, () => ({
    maybeChangeToAfterTab: () => (!_ && h("after"), _)
  }));
  let h = i.useCallback(e => {
    m(!0), setTimeout(() => {
      r.unstable_batchedUpdates(() => {
        "after" === e && u(!0), m(!1), n(e)
      })
    }, 400)
  }, []);
  return (0, t.jsxs)(c.Scroller, {
    className: I.content,
    children: [(0, t.jsxs)("div", {
      className: I.header,
      children: [(0, t.jsx)(c.BellIcon, {
        size: "custom",
        color: "currentColor",
        width: 40,
        height: 40
      }), (0, t.jsx)(c.Heading, {
        variant: "heading-xl/semibold",
        color: "header-primary",
        children: o.Z.Messages.NOTIF_MIGRATION_INTRO_TITLE
      }), (0, t.jsx)(c.Text, {
        className: I.__invalid_subtitle,
        variant: "text-md/normal",
        color: "header-secondary",
        children: o.Z.Messages.NOTIF_MIGRATION_INTRO_SUB_TITLE
      })]
    }), (0, t.jsxs)("div", {
      className: d.container,
      children: [(0, t.jsxs)("div", {
        className: d.tabs,
        children: [(0, t.jsx)("div", {
          className: d.tabBackground,
          style: {
            left: "before" === l ? 0 : "50%"
          }
        }), (0, t.jsx)(c.Clickable, {
          className: d.tab,
          onClick: () => h("before"),
          children: (0, t.jsx)(c.Text, {
            variant: "text-sm/medium",
            color: "before" === l ? "header-primary" : "text-muted",
            children: o.Z.Messages.NOTIF_MIGRATION_INTRO_BEFORE
          })
        }), (0, t.jsx)(c.Clickable, {
          className: d.tab,
          onClick: () => h("after"),
          children: (0, t.jsx)(c.Text, {
            variant: "text-sm/medium",
            color: "after" === l ? "header-primary" : "text-muted",
            children: o.Z.Messages.NOTIF_MIGRATION_INTRO_AFTER
          })
        })]
      }), (0, t.jsxs)("div", {
        className: d.previewContainer,
        children: [(0, t.jsxs)("div", {
          className: d.guilds,
          children: [(0, t.jsx)("div", {
            className: d.unreadGuild,
            children: (0, t.jsx)("img", {
              src: a(180681),
              width: 36,
              height: 36,
              alt: "Example Guild Icon"
            })
          }), (0, t.jsx)("div", {
            className: "after" === l ? d.guild : d.unreadGuild,
            children: (0, t.jsx)("img", {
              src: a(390115),
              width: 36,
              height: 36,
              alt: "Example Guild Icon"
            })
          }), (0, t.jsx)("div", {
            className: "after" === l ? d.guild : d.unreadGuild,
            children: (0, t.jsx)("img", {
              src: a(17840),
              width: 36,
              height: 36,
              alt: "Example Guild Icon"
            })
          })]
        }), (0, t.jsxs)("div", {
          className: d.channels,
          children: [(0, t.jsx)(x, {
            mention: !0,
            name: o.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_1
          }), (0, t.jsx)(x, {
            name: o.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_2
          }), (0, t.jsx)(x, {
            grey: "after" === l,
            name: o.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_3
          }), (0, t.jsx)(x, {
            grey: "after" === l,
            name: o.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_4
          }), (0, t.jsx)(x, {
            name: o.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_5
          }), (0, t.jsx)(x, {
            grey: "after" === l,
            name: o.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_6
          }), (0, t.jsx)(x, {
            grey: "after" === l,
            name: o.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_7
          })]
        })]
      }), (0, t.jsx)(N, {
        hidden: T || "after" === l,
        className: d.tipBefore1,
        text: o.Z.Messages.NOTIF_MIGRATION_INTRO_TIP_BEFORE1
      }), (0, t.jsx)(N, {
        hidden: T || "after" === l,
        className: d.tipBefore2,
        text: o.Z.Messages.NOTIF_MIGRATION_INTRO_TIP_BEFORE2
      }), (0, t.jsx)(N, {
        hidden: T || "before" === l,
        className: d.tipAfter1,
        text: o.Z.Messages.NOTIF_MIGRATION_INTRO_TIP_AFTER1
      }), (0, t.jsx)(N, {
        hidden: T || "before" === l,
        className: d.tipAfter2,
        text: o.Z.Messages.NOTIF_MIGRATION_INTRO_TIP_AFTER2
      })]
    })]
  })
})