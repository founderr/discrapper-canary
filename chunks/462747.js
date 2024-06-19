l.d(n, {
  Z: function() {
    return M
  }
});
var t = l(735250);
l(470079);
var i = l(120356),
  r = l.n(i),
  s = l(442837),
  a = l(481060),
  o = l(239091),
  u = l(129861),
  c = l(939863),
  d = l(484459),
  v = l(103575),
  h = l(314897),
  E = l(158776),
  g = l(885110),
  f = l(594174),
  m = l(315416),
  x = l(765305),
  _ = l(689938),
  I = l(590311);

function Z(e) {
  let {
    children: n
  } = e;
  return (0, t.jsxs)("div", {
    className: I.emptyContainer,
    children: [(0, t.jsx)(c.Z, {
      children: (0, t.jsx)("div", {
        className: I.circle,
        children: (0, t.jsx)(a.GroupIcon, {
          size: "custom",
          color: "currentColor",
          height: 40,
          width: 40,
          className: I.icon
        })
      })
    }), n]
  })
}

function N() {
  return (0, t.jsx)(Z, {
    children: (0, t.jsx)(a.Heading, {
      color: "header-primary",
      variant: "heading-xl/semibold",
      className: I.title,
      children: _.Z.Messages.GUILD_EVENT_DETAILS_USER_LIST_EMPTY_TITLE
    })
  })
}

function T() {
  return (0, t.jsx)(Z, {
    children: (0, t.jsx)(a.Heading, {
      color: "header-secondary",
      variant: "heading-md/semibold",
      className: I.errorTitle,
      children: _.Z.Messages.GUILD_EVENT_DETAILS_USER_LIST_FETCH_ERROR
    })
  })
}

function j(e) {
  let {
    count: n
  } = e;
  return (0, t.jsx)(t.Fragment, {
    children: (0, t.jsxs)("div", {
      className: I.listRow,
      children: [(0, t.jsx)("div", {
        className: r()(I.listRowCircle, I.listAvatar),
        children: (0, t.jsx)(a.GroupIcon, {
          size: "custom",
          color: "currentColor",
          height: 14,
          width: 14,
          className: I.icon
        })
      }), (0, t.jsx)(a.Text, {
        color: "text-normal",
        variant: "text-md/normal",
        children: _.Z.Messages.GUILD_EVENT_DETAILS_USER_LIST_REMAINING.format({
          userRemainCount: n
        })
      })]
    })
  })
}

function C(e) {
  let {
    eventUser: n,
    guildId: l,
    onContextMenu: i
  } = e, o = (0, s.e7)([f.default], () => f.default.getUser(n.user_id)), c = (0, s.e7)([g.Z, E.Z, h.default], () => n.user_id === h.default.getId() ? g.Z.getStatus() : E.Z.getStatus(n.user_id, l), [n.user_id, l]);
  return null == o ? null : (0, t.jsx)(a.Popout, {
    preload: () => (0, d.W)(o.id, o.getAvatarURL(l, 80), {
      guildId: l
    }),
    renderPopout: e => (0, t.jsx)(v.Z, {
      ...e,
      location: "EventDetailRsvpTab",
      userId: n.user_id,
      guildId: l
    }),
    position: "left",
    spacing: 16,
    children: (e, s) => {
      var d;
      let {
        isShown: v
      } = s;
      return (0, t.jsxs)(a.Clickable, {
        className: r()(I.listRow, I.interactiveRow, {
          [I.selected]: v
        }),
        onContextMenu: e => i(e, o),
        ...e,
        children: [(0, t.jsx)(a.Avatar, {
          src: o.getAvatarURL(l, 24),
          "aria-label": o.username,
          size: a.AvatarSizes.SIZE_24,
          className: I.listAvatar,
          status: c
        }), (0, t.jsx)(u.Z, {
          user: o,
          className: I.listName,
          discriminatorClass: I.listDiscriminator,
          nick: null === (d = n.member) || void 0 === d ? void 0 : d.nick
        })]
      })
    }
  })
}

function p(e) {
  let {
    eventUsers: n,
    guildId: l,
    usersNotShownCount: i = 0,
    onContextMenu: r
  } = e;
  return (0, t.jsxs)(a.ScrollerThin, {
    className: I.listScroller,
    children: [n.map(e => (0, t.jsx)(C, {
      guildId: l,
      eventUser: e,
      onContextMenu: r
    }, e.user_id)), i > 0 && (0, t.jsx)(j, {
      count: i
    })]
  })
}

function L(e) {
  let {
    children: n,
    style: l
  } = e;
  return (0, t.jsx)("div", {
    className: I.container,
    style: null != l ? l : {},
    children: n
  })
}

function S(e) {
  let {
    children: n,
    height: l
  } = e;
  return (0, t.jsx)(L, {
    style: {
      height: l
    },
    children: n
  })
}

function M(e) {
  let {
    guildEvent: n,
    recurrenceId: i,
    eventUsers: r,
    loading: s,
    error: u,
    containerHeight: c
  } = e, d = (0, m.Z)(n.guild_id, n.id, i);
  if (s && 0 === r.length) return (0, t.jsx)(S, {
    height: c,
    children: (0, t.jsx)(a.Spinner, {
      type: a.Spinner.Type.SPINNING_CIRCLE,
      className: I.spinner
    })
  });
  if (null != u && 0 === r.length) return (0, t.jsx)(S, {
    height: c,
    children: (0, t.jsx)(T, {})
  });
  let v = 0;
  return r.length >= x.rC && d > x.rC && (v = Math.max(d - r.length, 0)), 0 === r.length ? (0, t.jsx)(S, {
    height: c,
    children: (0, t.jsx)(N, {})
  }) : (0, t.jsx)(L, {
    children: (0, t.jsx)(p, {
      eventUsers: r,
      guildId: n.guild_id,
      onContextMenu: function(e, n) {
        (0, o.jW)(e, async () => {
          let {
            default: e
          } = await Promise.all([l.e("99387"), l.e("79695"), l.e("32006"), l.e("64409")]).then(l.bind(l, 881351));
          return l => (0, t.jsx)(e, {
            ...l,
            user: n
          })
        })
      },
      usersNotShownCount: v
    })
  })
}