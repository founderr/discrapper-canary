"use strict";
l.r(t), l.d(t, {
  default: function() {
    return M
  }
});
var n = l("735250");
l("470079");
var i = l("120356"),
  a = l.n(i),
  r = l("442837"),
  s = l("481060"),
  u = l("239091"),
  d = l("129861"),
  o = l("939863"),
  c = l("484459"),
  f = l("103575"),
  v = l("314897"),
  E = l("158776"),
  h = l("885110"),
  m = l("594174"),
  _ = l("158010"),
  g = l("315416"),
  I = l("765305"),
  S = l("689938"),
  x = l("101705");

function N(e) {
  let {
    children: t
  } = e;
  return (0, n.jsxs)("div", {
    className: x.emptyContainer,
    children: [(0, n.jsx)(o.default, {
      children: (0, n.jsx)("div", {
        className: x.circle,
        children: (0, n.jsx)(_.default, {
          height: 40,
          width: 40,
          className: x.icon
        })
      })
    }), t]
  })
}

function T() {
  return (0, n.jsx)(N, {
    children: (0, n.jsx)(s.Heading, {
      color: "header-primary",
      variant: "heading-xl/semibold",
      className: x.title,
      children: S.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_EMPTY_TITLE
    })
  })
}

function j() {
  return (0, n.jsx)(N, {
    children: (0, n.jsx)(s.Heading, {
      color: "header-secondary",
      variant: "heading-md/semibold",
      className: x.errorTitle,
      children: S.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_FETCH_ERROR
    })
  })
}

function C(e) {
  let {
    count: t
  } = e;
  return (0, n.jsx)(n.Fragment, {
    children: (0, n.jsxs)("div", {
      className: x.listRow,
      children: [(0, n.jsx)("div", {
        className: a()(x.listRowCircle, x.listAvatar),
        children: (0, n.jsx)(_.default, {
          height: 14,
          width: 14,
          className: x.icon
        })
      }), (0, n.jsx)(s.Text, {
        color: "text-normal",
        variant: "text-md/normal",
        children: S.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_REMAINING.format({
          userRemainCount: t
        })
      })]
    })
  })
}

function p(e) {
  var t;
  let {
    eventUser: l,
    onContextMenu: i
  } = e, u = (0, r.useStateFromStores)([m.default], () => m.default.getUser(l.user_id)), o = null === (t = l.member) || void 0 === t ? void 0 : t.guildId, _ = (0, r.useStateFromStores)([h.default, E.default, v.default], () => l.user_id === v.default.getId() ? h.default.getStatus() : E.default.getStatus(l.user_id, o), [l.user_id, o]);
  return null == u ? null : (0, n.jsx)(s.Popout, {
    preload: () => (0, c.maybeFetchUserProfileForPopout)(u.id, u.getAvatarURL(o, 80), {
      guildId: o
    }),
    renderPopout: e => (0, n.jsx)(f.default, {
      ...e,
      location: "EventDetailRsvpTab",
      userId: l.user_id,
      guildId: o
    }),
    position: "left",
    spacing: 16,
    children: (e, t) => {
      var r, o;
      let {
        isShown: c
      } = t;
      return (0, n.jsxs)(s.Clickable, {
        className: a()(x.listRow, x.interactiveRow, {
          [x.selected]: c
        }),
        onContextMenu: e => i(e, u),
        ...e,
        children: [(0, n.jsx)(s.Avatar, {
          src: u.getAvatarURL(null === (r = l.member) || void 0 === r ? void 0 : r.guildId, 24),
          "aria-label": u.username,
          size: s.AvatarSizes.SIZE_24,
          className: x.listAvatar,
          status: _
        }), (0, n.jsx)(d.default, {
          user: u,
          className: x.listName,
          discriminatorClass: x.listDiscriminator,
          nick: null === (o = l.member) || void 0 === o ? void 0 : o.nick
        })]
      })
    }
  })
}

function L(e) {
  let {
    eventUsers: t,
    usersNotShownCount: l = 0,
    onContextMenu: i
  } = e;
  return (0, n.jsxs)(s.ScrollerThin, {
    className: x.listScroller,
    children: [t.map(e => (0, n.jsx)(p, {
      eventUser: e,
      onContextMenu: i
    }, e.user_id)), l > 0 && (0, n.jsx)(C, {
      count: l
    })]
  })
}

function R(e) {
  let {
    children: t,
    style: l
  } = e;
  return (0, n.jsx)("div", {
    className: x.container,
    style: null != l ? l : {},
    children: t
  })
}

function y(e) {
  let {
    children: t,
    height: l
  } = e;
  return (0, n.jsx)(R, {
    style: {
      height: l
    },
    children: t
  })
}

function M(e) {
  let {
    guildEvent: t,
    recurrenceId: i,
    eventUsers: a,
    loading: r,
    error: d,
    containerHeight: o
  } = e, c = (0, g.default)(t.guild_id, t.id, i);
  if (r && 0 === a.length) return (0, n.jsx)(y, {
    height: o,
    children: (0, n.jsx)(s.Spinner, {
      type: s.Spinner.Type.SPINNING_CIRCLE,
      className: x.spinner
    })
  });
  if (null != d && 0 === a.length) return (0, n.jsx)(y, {
    height: o,
    children: (0, n.jsx)(j, {})
  });
  let f = 0;
  return a.length >= I.MAX_RSVP_USER_DISPLAY_COUNT && c > I.MAX_RSVP_USER_DISPLAY_COUNT && (f = Math.max(c - a.length, 0)), 0 === a.length ? (0, n.jsx)(y, {
    height: o,
    children: (0, n.jsx)(T, {})
  }) : (0, n.jsx)(R, {
    children: (0, n.jsx)(L, {
      eventUsers: a,
      onContextMenu: function(e, t) {
        (0, u.openContextMenuLazy)(e, async () => {
          let {
            default: e
          } = await Promise.all([l.e("99387"), l.e("79695"), l.e("1502"), l.e("69220")]).then(l.bind(l, "881351"));
          return l => (0, n.jsx)(e, {
            ...l,
            user: t
          })
        })
      },
      usersNotShownCount: f
    })
  })
}