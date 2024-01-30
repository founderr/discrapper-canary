"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var n = s("37983");
s("884691");
var a = s("414456"),
  r = s.n(a),
  l = s("77078"),
  i = s("849467"),
  u = s("782340"),
  o = s("130221");

function d(e) {
  let {
    guild: t,
    speakers: s,
    speakerCount: a,
    className: d
  } = e, c = s.slice(0, 5), E = c.map(e => {
    var s, a;
    return (0, n.jsxs)("div", {
      className: o.speakerContainer,
      children: [(0, n.jsx)(l.Avatar, {
        src: null == e ? void 0 : null === (s = e.user) || void 0 === s ? void 0 : s.getAvatarURL(t.id, 20),
        size: l.AvatarSizes.SIZE_20,
        className: o.avatar,
        "aria-label": "".concat(null == e ? void 0 : e.userNick, "-avatar")
      }), (0, n.jsx)("div", {
        className: o.textInGridContainer,
        children: (0, n.jsx)(l.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          className: o.textInGrid,
          children: null == e ? void 0 : e.userNick
        })
      })]
    }, null == e ? void 0 : null === (a = e.user) || void 0 === a ? void 0 : a.id)
  }), _ = a - c.length;
  return (0, n.jsxs)("div", {
    className: r(o.grid, d),
    children: [E, _ > 0 && (0, n.jsxs)("div", {
      className: o.speakerContainer,
      children: [(0, n.jsx)("div", {
        className: o.iconMicrophone,
        children: (0, n.jsx)(i.default, {
          height: 12
        })
      }), (0, n.jsx)(l.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        className: o.textInGrid,
        children: u.default.Messages.STAGE_DISCOVERY_LIVE_STAGE_TILE_SPEAKER_SUMMARY_OVERFLOW.format({
          count: _
        })
      })]
    })]
  })
}