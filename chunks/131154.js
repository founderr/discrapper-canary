"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("735250");
n("470079");
var a = n("120356"),
  s = n.n(a),
  i = n("481060"),
  u = n("357727"),
  r = n("689938"),
  d = n("373140");

function o(e) {
  let {
    guild: t,
    speakers: n,
    speakerCount: a,
    className: o
  } = e, I = n.slice(0, 5), c = I.map(e => {
    var n, a;
    return (0, l.jsxs)("div", {
      className: d.speakerContainer,
      children: [(0, l.jsx)(i.Avatar, {
        src: null == e ? void 0 : null === (n = e.user) || void 0 === n ? void 0 : n.getAvatarURL(t.id, 20),
        size: i.AvatarSizes.SIZE_20,
        className: d.avatar,
        "aria-label": "".concat(null == e ? void 0 : e.userNick, "-avatar")
      }), (0, l.jsx)("div", {
        className: d.textInGridContainer,
        children: (0, l.jsx)(i.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          className: d.textInGrid,
          children: null == e ? void 0 : e.userNick
        })
      })]
    }, null == e ? void 0 : null === (a = e.user) || void 0 === a ? void 0 : a.id)
  }), E = a - I.length;
  return (0, l.jsxs)("div", {
    className: s()(d.grid, o),
    children: [c, E > 0 && (0, l.jsxs)("div", {
      className: d.speakerContainer,
      children: [(0, l.jsx)("div", {
        className: d.iconMicrophone,
        children: (0, l.jsx)(u.default, {
          height: 12
        })
      }), (0, l.jsx)(i.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        className: d.textInGrid,
        children: r.default.Messages.STAGE_DISCOVERY_LIVE_STAGE_TILE_SPEAKER_SUMMARY_OVERFLOW.format({
          count: E
        })
      })]
    })]
  })
}