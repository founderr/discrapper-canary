"use strict";
l.r(t), l.d(t, {
  default: function() {
    return m
  }
});
var a = l("735250");
l("470079");
var n = l("120356"),
  s = l.n(n),
  i = l("481060"),
  r = l("933557"),
  u = l("995123"),
  o = l("602623"),
  d = l("5192"),
  c = l("689938"),
  f = l("322838");

function m(e) {
  let {
    channel: t,
    users: l,
    selected: n = !1
  } = e, m = (0, r.default)(t), S = null;
  null != l && l.length > 0 && (S = (0, a.jsx)(o.default, {
    guildId: t.guild_id,
    className: f.voiceUserList,
    users: l,
    renderUser: e => {
      if (null == e) return null;
      let l = d.default.getName(t.guild_id, t.id, e),
        n = e.getAvatarURL(t.guild_id, 24);
      return (0, a.jsx)(i.TooltipContainer, {
        text: l,
        children: (0, a.jsx)("img", {
          src: null != n ? n : void 0,
          "aria-label": e.username,
          alt: "",
          className: f.avatar
        })
      })
    },
    renderMoreUsers: e => {
      let n = function(e, t) {
        let l = t.id,
          a = t.guild_id;
        return e.length <= 1 ? null : 2 === e.length ? c.default.Messages.GO_LIVE_MODAL_OVERFLOW_TWO_USERS.format({
          nickname0: d.default.getName(a, l, e[0]),
          nickname1: d.default.getName(a, l, e[1])
        }) : 3 === e.length ? c.default.Messages.GO_LIVE_MODAL_OVERFLOW_THREE_USERS.format({
          nickname0: d.default.getName(a, l, e[0]),
          nickname1: d.default.getName(a, l, e[1]),
          nickname2: d.default.getName(a, l, e[2])
        }) : c.default.Messages.GO_LIVE_MODAL_OVERFLOW_FOUR_OR_MORE_USERS.format({
          nickname0: d.default.getName(a, l, e[0]),
          nickname1: d.default.getName(a, l, e[1]),
          remainingCount: e.length - 2
        })
      }(l.slice(4), t);
      return (0, a.jsx)("div", {
        children: (0, a.jsx)(i.TooltipContainer, {
          text: n,
          children: (0, a.jsx)("div", {
            className: f.userListOverflow,
            children: e
          })
        })
      })
    },
    max: 5,
    showUserPopout: !1
  }));
  let E = (0, u.default)(t);
  return (0, a.jsxs)("div", {
    className: s()(f.channelInfo, {
      [f.selected]: n
    }),
    children: [(0, a.jsx)(E, {
      className: f.channelIcon
    }), (0, a.jsx)("div", {
      className: f.channelName,
      children: m
    }), S]
  })
}