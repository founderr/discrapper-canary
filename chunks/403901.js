"use strict";
n.r(t), n.d(t, {
  default: function() {
    return y
  }
});
var i = n("37983");
n("884691");
var r = n("414456"),
  l = n.n(r),
  u = n("446674"),
  a = n("77078"),
  s = n("272030"),
  o = n("145079"),
  d = n("119184"),
  c = n("506885"),
  f = n("981601"),
  E = n("271938"),
  _ = n("824563"),
  S = n("101125"),
  T = n("697218"),
  I = n("155207"),
  h = n("398604"),
  v = n("745049"),
  N = n("782340"),
  C = n("519951");

function p(e) {
  let {
    children: t
  } = e;
  return (0, i.jsxs)("div", {
    className: C.emptyContainer,
    children: [(0, i.jsx)(d.default, {
      children: (0, i.jsx)("div", {
        className: C.circle,
        children: (0, i.jsx)(I.default, {
          height: 40,
          width: 40,
          className: C.icon
        })
      })
    }), t]
  })
}

function g() {
  return (0, i.jsx)(p, {
    children: (0, i.jsx)(a.Heading, {
      color: "header-primary",
      variant: "heading-xl/semibold",
      className: C.title,
      children: N.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_EMPTY_TITLE
    })
  })
}

function A() {
  return (0, i.jsx)(p, {
    children: (0, i.jsx)(a.Heading, {
      color: "header-secondary",
      variant: "heading-md/semibold",
      className: C.errorTitle,
      children: N.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_FETCH_ERROR
    })
  })
}

function m(e) {
  let {
    count: t
  } = e;
  return (0, i.jsx)(i.Fragment, {
    children: (0, i.jsxs)("div", {
      className: C.listRow,
      children: [(0, i.jsx)("div", {
        className: l(C.listRowCircle, C.listAvatar),
        children: (0, i.jsx)(I.default, {
          height: 14,
          width: 14,
          className: C.icon
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
    onContextMenu: r
  } = e, s = (0, u.useStateFromStores)([T.default], () => T.default.getUser(n.user_id)), d = null === (t = n.member) || void 0 === t ? void 0 : t.guildId, I = (0, u.useStateFromStores)([S.default, _.default, E.default], () => n.user_id === E.default.getId() ? S.default.getStatus() : _.default.getStatus(n.user_id, d), [n.user_id, d]);
  return null == s ? null : (0, i.jsx)(a.Popout, {
    preload: () => (0, c.default)(s.id, s.getAvatarURL(d, 80), {
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
      var u, d;
      let {
        isShown: c
      } = t;
      return (0, i.jsxs)(a.Clickable, {
        className: l(C.listRow, C.interactiveRow, {
          [C.selected]: c
        }),
        onContextMenu: e => r(e, s),
        ...e,
        children: [(0, i.jsx)(a.Avatar, {
          src: s.getAvatarURL(null === (u = n.member) || void 0 === u ? void 0 : u.guildId, 24),
          "aria-label": s.username,
          size: a.AvatarSizes.SIZE_24,
          className: C.listAvatar,
          status: I
        }), (0, i.jsx)(o.default, {
          user: s,
          className: C.listName,
          discriminatorClass: C.listDiscriminator,
          nick: null === (d = n.member) || void 0 === d ? void 0 : d.nick
        })]
      })
    }
  })
}

function L(e) {
  let {
    eventUsers: t,
    usersNotShownCount: n = 0,
    onContextMenu: r
  } = e;
  return (0, i.jsxs)(a.ScrollerThin, {
    className: C.listScroller,
    children: [t.map(e => (0, i.jsx)(R, {
      eventUser: e,
      onContextMenu: r
    }, e.user_id)), n > 0 && (0, i.jsx)(m, {
      count: n
    })]
  })
}

function P(e) {
  let {
    children: t,
    style: n
  } = e;
  return (0, i.jsx)("div", {
    className: C.container,
    style: null != n ? n : {},
    children: t
  })
}

function D(e) {
  let {
    children: t,
    height: n
  } = e;
  return (0, i.jsx)(P, {
    style: {
      height: n
    },
    children: t
  })
}

function y(e) {
  let {
    guildEvent: t,
    recurrenceId: r,
    eventUsers: l,
    loading: o,
    error: d,
    containerHeight: c
  } = e, f = (0, u.useStateFromStores)([h.default], () => h.default.getUserCount(t.id, r));
  if (o && 0 === l.length) return (0, i.jsx)(D, {
    height: c,
    children: (0, i.jsx)(a.Spinner, {
      type: a.Spinner.Type.SPINNING_CIRCLE,
      className: C.spinner
    })
  });
  if (null != d && 0 === l.length) return (0, i.jsx)(D, {
    height: c,
    children: (0, i.jsx)(A, {})
  });
  let E = 0;
  return l.length >= v.MAX_RSVP_USER_DISPLAY_COUNT && f > v.MAX_RSVP_USER_DISPLAY_COUNT && (E = Math.max(f - l.length, 0)), 0 === l.length ? (0, i.jsx)(D, {
    height: c,
    children: (0, i.jsx)(g, {})
  }) : (0, i.jsx)(P, {
    children: (0, i.jsx)(L, {
      eventUsers: l,
      onContextMenu: function(e, t) {
        (0, s.openContextMenuLazy)(e, async () => {
          let {
            default: e
          } = await n.el("406784").then(n.bind(n, "406784"));
          return n => (0, i.jsx)(e, {
            ...n,
            user: t
          })
        })
      },
      usersNotShownCount: E
    })
  })
}