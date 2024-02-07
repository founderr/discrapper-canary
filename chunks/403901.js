"use strict";
n.r(t), n.d(t, {
  default: function() {
    return j
  }
});
var i = n("37983");
n("884691");
var l = n("414456"),
  r = n.n(l),
  s = n("446674"),
  a = n("77078"),
  u = n("272030"),
  o = n("145079"),
  c = n("119184"),
  d = n("506885"),
  f = n("981601"),
  h = n("271938"),
  C = n("824563"),
  v = n("101125"),
  p = n("697218"),
  E = n("155207"),
  S = n("398604"),
  I = n("745049"),
  m = n("782340"),
  g = n("758024");

function _(e) {
  let {
    children: t
  } = e;
  return (0, i.jsxs)("div", {
    className: g.emptyContainer,
    children: [(0, i.jsx)(c.default, {
      children: (0, i.jsx)("div", {
        className: g.circle,
        children: (0, i.jsx)(E.default, {
          height: 40,
          width: 40,
          className: g.icon
        })
      })
    }), t]
  })
}

function N() {
  return (0, i.jsx)(_, {
    children: (0, i.jsx)(a.Heading, {
      color: "header-primary",
      variant: "heading-xl/semibold",
      className: g.title,
      children: m.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_EMPTY_TITLE
    })
  })
}

function x() {
  return (0, i.jsx)(_, {
    children: (0, i.jsx)(a.Heading, {
      color: "header-secondary",
      variant: "heading-md/semibold",
      className: g.errorTitle,
      children: m.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_FETCH_ERROR
    })
  })
}

function T(e) {
  let {
    count: t
  } = e;
  return (0, i.jsx)(i.Fragment, {
    children: (0, i.jsxs)("div", {
      className: g.listRow,
      children: [(0, i.jsx)("div", {
        className: r(g.listRowCircle, g.listAvatar),
        children: (0, i.jsx)(E.default, {
          height: 14,
          width: 14,
          className: g.icon
        })
      }), (0, i.jsx)(a.Text, {
        color: "text-normal",
        variant: "text-md/normal",
        children: m.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_REMAINING.format({
          userRemainCount: t
        })
      })]
    })
  })
}

function y(e) {
  var t;
  let {
    eventUser: n,
    onContextMenu: l
  } = e, u = (0, s.useStateFromStores)([p.default], () => p.default.getUser(n.user_id)), c = null === (t = n.member) || void 0 === t ? void 0 : t.guildId, E = (0, s.useStateFromStores)([v.default, C.default, h.default], () => n.user_id === h.default.getId() ? v.default.getStatus() : C.default.getStatus(n.user_id, c), [n.user_id, c]);
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
        className: r(g.listRow, g.interactiveRow, {
          [g.selected]: d
        }),
        onContextMenu: e => l(e, u),
        ...e,
        children: [(0, i.jsx)(a.Avatar, {
          src: u.getAvatarURL(null === (s = n.member) || void 0 === s ? void 0 : s.guildId, 24),
          "aria-label": u.username,
          size: a.AvatarSizes.SIZE_24,
          className: g.listAvatar,
          status: E
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

function A(e) {
  let {
    eventUsers: t,
    usersNotShownCount: n = 0,
    onContextMenu: l
  } = e;
  return (0, i.jsxs)(a.ScrollerThin, {
    className: g.listScroller,
    children: [t.map(e => (0, i.jsx)(y, {
      eventUser: e,
      onContextMenu: l
    }, e.user_id)), n > 0 && (0, i.jsx)(T, {
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

function R(e) {
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

function j(e) {
  let {
    guildEvent: t,
    recurrenceId: l,
    eventUsers: r,
    loading: o,
    error: c,
    containerHeight: d
  } = e, f = (0, s.useStateFromStores)([S.default], () => S.default.getUserCount(t.id, l));
  if (o && 0 === r.length) return (0, i.jsx)(R, {
    height: d,
    children: (0, i.jsx)(a.Spinner, {
      type: a.Spinner.Type.SPINNING_CIRCLE,
      className: g.spinner
    })
  });
  if (null != c && 0 === r.length) return (0, i.jsx)(R, {
    height: d,
    children: (0, i.jsx)(x, {})
  });
  let h = 0;
  return r.length >= I.MAX_RSVP_USER_DISPLAY_COUNT && f > I.MAX_RSVP_USER_DISPLAY_COUNT && (h = Math.max(f - r.length, 0)), 0 === r.length ? (0, i.jsx)(R, {
    height: d,
    children: (0, i.jsx)(N, {})
  }) : (0, i.jsx)(L, {
    children: (0, i.jsx)(A, {
      eventUsers: r,
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
      usersNotShownCount: h
    })
  })
}