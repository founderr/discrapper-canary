"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
});
var i = n("37983");
n("884691");
var r = n("414456"),
  l = n.n(r),
  s = n("446674"),
  a = n("77078"),
  u = n("272030"),
  o = n("145079"),
  c = n("119184"),
  d = n("506885"),
  f = n("981601"),
  h = n("271938"),
  v = n("824563"),
  E = n("101125"),
  C = n("697218"),
  S = n("155207"),
  p = n("18284"),
  m = n("745049"),
  _ = n("782340"),
  g = n("519951");

function I(e) {
  let {
    children: t
  } = e;
  return (0, i.jsxs)("div", {
    className: g.emptyContainer,
    children: [(0, i.jsx)(c.default, {
      children: (0, i.jsx)("div", {
        className: g.circle,
        children: (0, i.jsx)(S.default, {
          height: 40,
          width: 40,
          className: g.icon
        })
      })
    }), t]
  })
}

function N() {
  return (0, i.jsx)(I, {
    children: (0, i.jsx)(a.Heading, {
      color: "header-primary",
      variant: "heading-xl/semibold",
      className: g.title,
      children: _.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_EMPTY_TITLE
    })
  })
}

function T() {
  return (0, i.jsx)(I, {
    children: (0, i.jsx)(a.Heading, {
      color: "header-secondary",
      variant: "heading-md/semibold",
      className: g.errorTitle,
      children: _.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_FETCH_ERROR
    })
  })
}

function A(e) {
  let {
    count: t
  } = e;
  return (0, i.jsx)(i.Fragment, {
    children: (0, i.jsxs)("div", {
      className: g.listRow,
      children: [(0, i.jsx)("div", {
        className: l(g.listRowCircle, g.listAvatar),
        children: (0, i.jsx)(S.default, {
          height: 14,
          width: 14,
          className: g.icon
        })
      }), (0, i.jsx)(a.Text, {
        color: "text-normal",
        variant: "text-md/normal",
        children: _.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_REMAINING.format({
          userRemainCount: t
        })
      })]
    })
  })
}

function x(e) {
  var t;
  let {
    eventUser: n,
    onContextMenu: r
  } = e, u = (0, s.useStateFromStores)([C.default], () => C.default.getUser(n.user_id)), c = null === (t = n.member) || void 0 === t ? void 0 : t.guildId, S = (0, s.useStateFromStores)([E.default, v.default, h.default], () => n.user_id === h.default.getId() ? E.default.getStatus() : v.default.getStatus(n.user_id, c), [n.user_id, c]);
  return null == u ? null : (0, i.jsx)(a.Popout, {
    preload: () => (0, d.default)(u.id, u.getAvatarURL(c, 80), {
      guildId: c
    }),
    renderPopout: e => (0, i.jsx)(f.default, {
      ...e,
      userId: n.user_id,
      guildId: c
    }),
    position: "left",
    spacing: 16,
    children: (e, t) => {
      var s, c;
      let {
        isShown: d
      } = t;
      return (0, i.jsxs)(a.Clickable, {
        className: l(g.listRow, g.interactiveRow, {
          [g.selected]: d
        }),
        onContextMenu: e => r(e, u),
        ...e,
        children: [(0, i.jsx)(a.Avatar, {
          src: u.getAvatarURL(null === (s = n.member) || void 0 === s ? void 0 : s.guildId, 24),
          "aria-label": u.username,
          size: a.AvatarSizes.SIZE_24,
          className: g.listAvatar,
          status: S
        }), (0, i.jsx)(o.default, {
          user: u,
          className: g.listName,
          discriminatorClass: g.listDiscriminator,
          nick: null === (c = n.member) || void 0 === c ? void 0 : c.nick
        })]
      })
    }
  })
}

function R(e) {
  let {
    eventUsers: t,
    usersNotShownCount: n = 0,
    onContextMenu: r
  } = e;
  return (0, i.jsxs)(a.ScrollerThin, {
    className: g.listScroller,
    children: [t.map(e => (0, i.jsx)(x, {
      eventUser: e,
      onContextMenu: r
    }, e.user_id)), n > 0 && (0, i.jsx)(A, {
      count: n
    })]
  })
}

function L(e) {
  let {
    children: t,
    style: n
  } = e;
  return (0, i.jsx)("div", {
    className: g.container,
    style: null != n ? n : {},
    children: t
  })
}

function y(e) {
  let {
    children: t,
    height: n
  } = e;
  return (0, i.jsx)(L, {
    style: {
      height: n
    },
    children: t
  })
}

function M(e) {
  let {
    guildEvent: t,
    recurrenceId: r,
    eventUsers: l,
    loading: s,
    error: o,
    containerHeight: c
  } = e, d = (0, p.default)(t.guild_id, t.id, r);
  if (s && 0 === l.length) return (0, i.jsx)(y, {
    height: c,
    children: (0, i.jsx)(a.Spinner, {
      type: a.Spinner.Type.SPINNING_CIRCLE,
      className: g.spinner
    })
  });
  if (null != o && 0 === l.length) return (0, i.jsx)(y, {
    height: c,
    children: (0, i.jsx)(T, {})
  });
  let f = 0;
  return l.length >= m.MAX_RSVP_USER_DISPLAY_COUNT && d > m.MAX_RSVP_USER_DISPLAY_COUNT && (f = Math.max(d - l.length, 0)), 0 === l.length ? (0, i.jsx)(y, {
    height: c,
    children: (0, i.jsx)(N, {})
  }) : (0, i.jsx)(L, {
    children: (0, i.jsx)(R, {
      eventUsers: l,
      onContextMenu: function(e, t) {
        (0, u.openContextMenuLazy)(e, async () => {
          let {
            default: e
          } = await n.el("406784").then(n.bind(n, "406784"));
          return n => (0, i.jsx)(e, {
            ...n,
            user: t
          })
        })
      },
      usersNotShownCount: f
    })
  })
}