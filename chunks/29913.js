"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  i = n.n(a),
  u = n("77078"),
  r = n("849467"),
  s = n("782340"),
  d = n("602552");

function o(e) {
  let {
    guild: t,
    speakers: n,
    speakerCount: a,
    className: o
  } = e, c = n.slice(0, 5), f = c.map(e => {
    var n, a;
    return (0, l.jsxs)("div", {
      className: d.speakerContainer,
      children: [(0, l.jsx)(u.Avatar, {
        src: null == e ? void 0 : null === (n = e.user) || void 0 === n ? void 0 : n.getAvatarURL(t.id, 20),
        size: u.AvatarSizes.SIZE_20,
        className: d.avatar,
        "aria-label": "".concat(null == e ? void 0 : e.userNick, "-avatar")
      }), (0, l.jsx)("div", {
        className: d.textInGridContainer,
        children: (0, l.jsx)(u.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          className: d.textInGrid,
          children: null == e ? void 0 : e.userNick
        })
      })]
    }, null == e ? void 0 : null === (a = e.user) || void 0 === a ? void 0 : a.id)
  }), E = a - c.length;
  return (0, l.jsxs)("div", {
    className: i(d.grid, o),
    children: [f, E > 0 && (0, l.jsxs)("div", {
      className: d.speakerContainer,
      children: [(0, l.jsx)("div", {
        className: d.iconMicrophone,
        children: (0, l.jsx)(r.default, {
          height: 12
        })
      }), (0, l.jsx)(u.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        className: d.textInGrid,
        children: s.default.Messages.STAGE_DISCOVERY_LIVE_STAGE_TILE_SPEAKER_SUMMARY_OVERFLOW.format({
          count: E
        })
      })]
    })]
  })
}