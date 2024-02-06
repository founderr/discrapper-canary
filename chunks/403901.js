"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
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
  d = n("119184"),
  c = n("506885"),
  f = n("981601"),
  h = n("271938"),
  E = n("824563"),
  v = n("101125"),
  C = n("697218"),
  _ = n("155207"),
  p = n("398604"),
  S = n("745049"),
  N = n("782340"),
  T = n("758024");

function I(e) {
  let {
    children: t
  } = e;
  return (0, i.jsxs)("div", {
    className: T.emptyContainer,
    children: [(0, i.jsx)(d.default, {
      children: (0, i.jsx)("div", {
        className: T.circle,
        children: (0, i.jsx)(_.default, {
          height: 40,
          width: 40,
          className: T.icon
        })
      })
    }), t]
  })
}

function g() {
  return (0, i.jsx)(I, {
    children: (0, i.jsx)(a.Heading, {
      color: "header-primary",
      variant: "heading-xl/semibold",
      className: T.title,
      children: N.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_EMPTY_TITLE
    })
  })
}

function m() {
  return (0, i.jsx)(I, {
    children: (0, i.jsx)(a.Heading, {
      color: "header-secondary",
      variant: "heading-md/semibold",
      className: T.errorTitle,
      children: N.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_FETCH_ERROR
    })
  })
}

function A(e) {
  let {
    count: t
  } = e;
  return (0, i.jsx)(i.Fragment, {
    children: (0, i.jsxs)("div", {
      className: T.listRow,
      children: [(0, i.jsx)("div", {
        className: r(T.listRowCircle, T.listAvatar),
        children: (0, i.jsx)(_.default, {
          height: 14,
          width: 14,
          className: T.icon
        })
      }), (0, i.jsx)(a.Text, {
        color: "text-normal",
        variant: "text-md/normal",
        children: N.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_REMAINING.format({
          userRemainCount: t
        })
      })]
    })
  })
}

function R(e) {
  var t;
  let {
    eventUser: n,
    onContextMenu: l
  } = e, u = (0, s.useStateFromStores)([C.default], () => C.default.getUser(n.user_id)), d = null === (t = n.member) || void 0 === t ? void 0 : t.guildId, _ = (0, s.useStateFromStores)([v.default, E.default, h.default], () => n.user_id === h.default.getId() ? v.default.getStatus() : E.default.getStatus(n.user_id, d), [n.user_id, d]);
  return null == u ? null : (0, i.jsx)(a.Popout, {
    preload: () => (0, c.default)(u.id, u.getAvatarURL(d, 80), {
      guildId: d
    }),
    renderPopout: e => (0, i.jsx)(f.default, {
      ...e,
      userId: n.user_id,
      guildId: d
    }),
    position: "left",
    spacing: 16,
    children: (e, t) => {
      var s, d;
      let {
        isShown: c
      } = t;
      return (0, i.jsxs)(a.Clickable, {
        className: r(T.listRow, T.interactiveRow, {
          [T.selected]: c
        }),
        onContextMenu: e => l(e, u),
        ...e,
        children: [(0, i.jsx)(a.Avatar, {
          src: u.getAvatarURL(null === (s = n.member) || void 0 === s ? void 0 : s.guildId, 24),
          "aria-label": u.username,
          size: a.AvatarSizes.SIZE_24,
          className: T.listAvatar,
          status: _
        }), (0, i.jsx)(o.default, {
          user: u,
          className: T.listName,
          discriminatorClass: T.listDiscriminator,
          nick: null === (d = n.member) || void 0 === d ? void 0 : d.nick
        })]
      })
    }
  })
}

function x(e) {
  let {
    eventUsers: t,
    usersNotShownCount: n = 0,
    onContextMenu: l
  } = e;
  return (0, i.jsxs)(a.ScrollerThin, {
    className: T.listScroller,
    children: [t.map(e => (0, i.jsx)(R, {
      eventUser: e,
      onContextMenu: l
    }, e.user_id)), n > 0 && (0, i.jsx)(A, {
      count: n
    })]
  })
}

function y(e) {
  let {
    children: t,
    style: n
  } = e;
  return (0, i.jsx)("div", {
    className: T.container,
    style: null != n ? n : {},
    children: t
  })
}

function U(e) {
  let {
    children: t,
    height: n
  } = e;
  return (0, i.jsx)(y, {
    style: {
      height: n
    },
    children: t
  })
}

function L(e) {
  let {
    guildEvent: t,
    recurrenceId: l,
    eventUsers: r,
    loading: o,
    error: d,
    containerHeight: c
  } = e, f = (0, s.useStateFromStores)([p.default], () => p.default.getUserCount(t.id, l));
  if (o && 0 === r.length) return (0, i.jsx)(U, {
    height: c,
    children: (0, i.jsx)(a.Spinner, {
      type: a.Spinner.Type.SPINNING_CIRCLE,
      className: T.spinner
    })
  });
  if (null != d && 0 === r.length) return (0, i.jsx)(U, {
    height: c,
    children: (0, i.jsx)(m, {})
  });
  let h = 0;
  return r.length >= S.MAX_RSVP_USER_DISPLAY_COUNT && f > S.MAX_RSVP_USER_DISPLAY_COUNT && (h = Math.max(f - r.length, 0)), 0 === r.length ? (0, i.jsx)(U, {
    height: c,
    children: (0, i.jsx)(g, {})
  }) : (0, i.jsx)(y, {
    children: (0, i.jsx)(x, {
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