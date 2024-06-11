"use strict";
a.r(s), a("47120");
var t = a("735250"),
  l = a("470079"),
  i = a("120356"),
  n = a.n(i),
  d = a("699581"),
  r = a.n(d),
  c = a("481060"),
  o = a("808602"),
  u = a("93879"),
  h = a("689938"),
  N = a("878163"),
  x = a("351109");

function I(e) {
  let {
    text: s,
    className: a,
    hidden: l
  } = e;
  return (0, t.jsxs)("div", {
    className: n()(a, N.tip, {
      [N.hidden]: l
    }),
    children: [(0, t.jsx)(c.Text, {
      className: N.__invalid_tipText,
      variant: "text-sm/normal",
      color: "text-secondary",
      children: s
    }), (0, t.jsx)("div", {
      className: N.tipLine
    })]
  })
}

function T(e) {
  let {
    grey: s,
    mention: a,
    name: l
  } = e;
  return (0, t.jsxs)("div", {
    className: n()(N.channel, {
      [N.grey]: s,
      [N.mention]: a
    }),
    children: [(0, t.jsx)(u.default, {
      className: N.channelIcon,
      width: 16,
      height: 16
    }), (0, t.jsx)(c.Text, {
      variant: "text-md/medium",
      className: N.channelName,
      children: l
    })]
  })
}
s.default = l.forwardRef(function(e, s) {
  let {} = e, [i, n] = l.useState("before"), [d, u] = l.useState(!1), [m, f] = l.useState(!1);
  l.useImperativeHandle(s, () => ({
    maybeChangeToAfterTab: () => (!m && _("after"), m)
  }));
  let _ = l.useCallback(e => {
    u(!0), setTimeout(() => {
      r().unstable_batchedUpdates(() => {
        "after" === e && f(!0), u(!1), n(e)
      })
    }, 400)
  }, []);
  return (0, t.jsxs)(c.Scroller, {
    className: x.content,
    children: [(0, t.jsxs)("div", {
      className: x.header,
      children: [(0, t.jsx)(o.default, {
        width: 40,
        height: 40
      }), (0, t.jsx)(c.Heading, {
        variant: "heading-xl/semibold",
        color: "header-primary",
        children: h.default.Messages.NOTIF_MIGRATION_INTRO_TITLE
      }), (0, t.jsx)(c.Text, {
        className: x.__invalid_subtitle,
        variant: "text-md/normal",
        color: "header-secondary",
        children: h.default.Messages.NOTIF_MIGRATION_INTRO_SUB_TITLE
      })]
    }), (0, t.jsxs)("div", {
      className: N.container,
      children: [(0, t.jsxs)("div", {
        className: N.tabs,
        children: [(0, t.jsx)("div", {
          className: N.tabBackground,
          style: {
            left: "before" === i ? 0 : "50%"
          }
        }), (0, t.jsx)(c.Clickable, {
          className: N.tab,
          onClick: () => _("before"),
          children: (0, t.jsx)(c.Text, {
            variant: "text-sm/medium",
            color: "before" === i ? "header-primary" : "text-muted",
            children: h.default.Messages.NOTIF_MIGRATION_INTRO_BEFORE
          })
        }), (0, t.jsx)(c.Clickable, {
          className: N.tab,
          onClick: () => _("after"),
          children: (0, t.jsx)(c.Text, {
            variant: "text-sm/medium",
            color: "after" === i ? "header-primary" : "text-muted",
            children: h.default.Messages.NOTIF_MIGRATION_INTRO_AFTER
          })
        })]
      }), (0, t.jsxs)("div", {
        className: N.previewContainer,
        children: [(0, t.jsxs)("div", {
          className: N.guilds,
          children: [(0, t.jsx)("div", {
            className: N.unreadGuild,
            children: (0, t.jsx)("img", {
              src: a("180681"),
              width: 36,
              height: 36,
              alt: "Example Guild Icon"
            })
          }), (0, t.jsx)("div", {
            className: "after" === i ? N.guild : N.unreadGuild,
            children: (0, t.jsx)("img", {
              src: a("390115"),
              width: 36,
              height: 36,
              alt: "Example Guild Icon"
            })
          }), (0, t.jsx)("div", {
            className: "after" === i ? N.guild : N.unreadGuild,
            children: (0, t.jsx)("img", {
              src: a("17840"),
              width: 36,
              height: 36,
              alt: "Example Guild Icon"
            })
          })]
        }), (0, t.jsxs)("div", {
          className: N.channels,
          children: [(0, t.jsx)(T, {
            mention: !0,
            name: h.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_1
          }), (0, t.jsx)(T, {
            name: h.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_2
          }), (0, t.jsx)(T, {
            grey: "after" === i,
            name: h.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_3
          }), (0, t.jsx)(T, {
            grey: "after" === i,
            name: h.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_4
          }), (0, t.jsx)(T, {
            name: h.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_5
          }), (0, t.jsx)(T, {
            grey: "after" === i,
            name: h.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_6
          }), (0, t.jsx)(T, {
            grey: "after" === i,
            name: h.default.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_7
          })]
        })]
      }), (0, t.jsx)(I, {
        hidden: d || "after" === i,
        className: N.tipBefore1,
        text: h.default.Messages.NOTIF_MIGRATION_INTRO_TIP_BEFORE1
      }), (0, t.jsx)(I, {
        hidden: d || "after" === i,
        className: N.tipBefore2,
        text: h.default.Messages.NOTIF_MIGRATION_INTRO_TIP_BEFORE2
      }), (0, t.jsx)(I, {
        hidden: d || "before" === i,
        className: N.tipAfter1,
        text: h.default.Messages.NOTIF_MIGRATION_INTRO_TIP_AFTER1
      }), (0, t.jsx)(I, {
        hidden: d || "before" === i,
        className: N.tipAfter2,
        text: h.default.Messages.NOTIF_MIGRATION_INTRO_TIP_AFTER2
      })]
    })]
  })
})