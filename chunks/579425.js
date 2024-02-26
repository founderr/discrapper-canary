"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("866227"),
  i = n.n(s),
  r = n("446674"),
  u = n("77078"),
  o = n("299285"),
  d = n("61918"),
  c = n("740822"),
  f = n("26989"),
  h = n("1017"),
  m = n("697218"),
  p = n("824326"),
  E = n("315102"),
  S = n("387111"),
  g = n("299039"),
  C = n("481931");

function _(e) {
  let {
    nowPlaying: t,
    guildId: n,
    channelId: a
  } = e, s = (0, r.useStateFromStores)([m.default], () => m.default.getUser(t.userId)), o = null != s ? E.default.getUserAvatarURL(s) : null, d = S.default.getName(n, a, s), c = i.duration(i().diff(i(Number(t.startedPlaying)))).humanize(), f = null != t.activity.details ? "".concat(t.activity.details, " - ").concat(c) : c;
  return (0, l.jsxs)("div", {
    className: C.userGameContainer,
    children: [(0, l.jsx)("div", {
      className: C.userGameAvatar,
      children: (0, l.jsx)(u.Avatar, {
        src: o,
        size: u.AvatarSizes.SIZE_32,
        "aria-label": null != d ? d : ""
      })
    }), (0, l.jsxs)("div", {
      className: C.userGameInfo,
      children: [(0, l.jsx)(u.Text, {
        variant: "text-md/semibold",
        children: d
      }), (0, l.jsx)("div", {
        className: C.userGameInfoDetails,
        children: (0, l.jsx)(u.Text, {
          variant: "text-xs/medium",
          children: f
        })
      })]
    })]
  })
}

function I(e) {
  let {
    game: t,
    guildId: n,
    channelId: s
  } = e, i = a.useMemo(() => g.default.keys(t).filter(e => f.default.isMember(n, e)), [t, n]), d = i.length > 0 ? t[i[0]] : null, c = null == d ? void 0 : d.activity.application_id, h = (0, r.useStateFromStores)([o.default], () => null != c ? o.default.getApplication(c) : null != d ? o.default.getApplicationByName(d.activity.name) : null);
  return 0 === i.length || null == d ? null : (0, l.jsxs)("div", {
    className: C.gameContainer,
    children: [(0, l.jsxs)("div", {
      className: C.gameHeader,
      children: [null != h && (0, l.jsx)(u.Avatar, {
        src: h.getIconURL(16),
        size: u.AvatarSizes.SIZE_16,
        "aria-label": d.activity.name
      }), (0, l.jsx)(u.Text, {
        variant: "text-xs/bold",
        color: "text-muted",
        children: d.activity.name
      })]
    }), i.map(e => (0, l.jsx)(_, {
      nowPlaying: t[e],
      guildId: n,
      channelId: s
    }, e))]
  })
}

function T(e) {
  let {
    guildId: t,
    channel: n
  } = e, a = (0, r.useStateFromStoresArray)([h.default], () => h.default.gameIds.sort((e, t) => ~~Number(e) - ~~Number(t))), s = (0, r.useStateFromStoresObject)([h.default], () => h.default.games);
  return (0, l.jsxs)(u.ScrollerAuto, {
    className: C.container,
    children: [(0, l.jsx)(c.default, {
      className: C.alphaTag
    }), (0, l.jsxs)("div", {
      className: C.partyUpContainer,
      children: [(0, l.jsx)("div", {
        className: C.partyUpIconContainer,
        children: (0, l.jsx)(p.default, {})
      }), (0, l.jsx)(u.Text, {
        variant: "text-md/bold",
        children: "Party Up"
      })]
    }), (0, l.jsx)("div", {
      className: C.games,
      children: a.map(e => (0, l.jsx)(I, {
        game: s[e],
        guildId: t,
        channelId: n.id
      }, e))
    }), (0, l.jsx)(d.default, {
      channel: n,
      className: C.channelMembers
    })]
  })
}