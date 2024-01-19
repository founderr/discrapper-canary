"use strict";
l.r(t), l.d(t, {
  default: function() {
    return m
  }
});
var n = l("37983");
l("884691");
var s = l("414456"),
  a = l.n(s),
  r = l("77078"),
  i = l("679653"),
  u = l("619335"),
  o = l("811305"),
  d = l("387111"),
  c = l("782340"),
  f = l("890514");

function m(e) {
  let {
    channel: t,
    users: l,
    selected: s = !1
  } = e, m = (0, i.default)(t), S = null;
  null != l && l.length > 0 && (S = (0, n.jsx)(o.default, {
    guildId: t.guild_id,
    className: f.voiceUserList,
    users: l,
    renderUser: e => {
      if (null == e) return null;
      let l = d.default.getName(t.guild_id, t.id, e),
        s = e.getAvatarURL(t.guild_id, 24);
      return (0, n.jsx)(r.TooltipContainer, {
        text: l,
        children: (0, n.jsx)("img", {
          src: null != s ? s : void 0,
          "aria-label": e.username,
          alt: "",
          className: f.avatar
        })
      })
    },
    renderMoreUsers: e => {
      let s = l.slice(4),
        a = function(e, t) {
          let l = t.id,
            n = t.guild_id;
          return e.length <= 1 ? null : 2 === e.length ? c.default.Messages.GO_LIVE_MODAL_OVERFLOW_TWO_USERS.format({
            nickname0: d.default.getName(n, l, e[0]),
            nickname1: d.default.getName(n, l, e[1])
          }) : 3 === e.length ? c.default.Messages.GO_LIVE_MODAL_OVERFLOW_THREE_USERS.format({
            nickname0: d.default.getName(n, l, e[0]),
            nickname1: d.default.getName(n, l, e[1]),
            nickname2: d.default.getName(n, l, e[2])
          }) : c.default.Messages.GO_LIVE_MODAL_OVERFLOW_FOUR_OR_MORE_USERS.format({
            nickname0: d.default.getName(n, l, e[0]),
            nickname1: d.default.getName(n, l, e[1]),
            remainingCount: e.length - 2
          })
        }(s, t);
      return (0, n.jsx)("div", {
        children: (0, n.jsx)(r.TooltipContainer, {
          text: a,
          children: (0, n.jsx)("div", {
            className: f.userListOverflow,
            children: e
          })
        })
      })
    },
    max: 5,
    showUserPopout: !1
  }));
  let h = (0, u.default)(t);
  return (0, n.jsxs)("div", {
    className: a(f.channelInfo, {
      [f.selected]: s
    }),
    children: [(0, n.jsx)(h, {
      className: f.channelIcon
    }), (0, n.jsx)("div", {
      className: f.channelName,
      children: m
    }), S]
  })
}