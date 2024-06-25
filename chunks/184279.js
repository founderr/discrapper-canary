n.d(t, {
  Z: function() {
    return E
  }
});
var l = n(735250);
n(470079);
var i = n(481060),
  s = n(43267),
  a = n(933557),
  r = n(534091),
  o = n(797717),
  c = n(967128),
  u = n(689938),
  d = n(492932),
  h = n(191986);
let m = () => (0, l.jsx)("svg", {
  width: "46",
  height: "34",
  viewBox: "0 0 46 34",
  className: d.chatBubbleLip,
  xmlns: "http://www.w3.org/2000/svg",
  children: (0, l.jsx)("path", {
    d: "M0 33.4637C16.1697 28.954 21.1764 9.59155 19.2146 0L45.681 0.000148089C45.681 0.000148089 44.681 9.14498 40.1914 18.3023C34.4077 30.0996 6.2893 33.1232 0 33.4637Z"
  })
});

function E(e) {
  var t;
  let {
    channel: n
  } = e, E = null !== (t = (0, a.ZP)(n)) && void 0 !== t ? t : "";
  return (0, l.jsxs)("div", {
    id: (0, r.p)(n.id, n.id),
    className: d.headerContainer,
    children: [(0, l.jsx)("img", {
      src: h,
      className: d.wumpusImage,
      alt: ""
    }), (0, l.jsxs)("div", {
      className: d.chatBubbleContainer,
      children: [(0, l.jsx)(m, {}), (0, l.jsxs)("div", {
        className: d.chatBubble,
        children: [(0, l.jsx)(i.Avatar, {
          "aria-label": E,
          size: i.AvatarSizes.SIZE_80,
          src: (0, s.x)(n, 80, !1)
        }), (0, l.jsxs)(c.Ot, {
          className: d.emptyMessageHeader,
          children: [E, (0, l.jsx)(o.Z, {
            className: d.flowerStar,
            size: 24,
            children: (0, l.jsx)(i.CheckmarkSmallIcon, {
              size: "md",
              color: "currentColor",
              className: d.verified
            })
          })]
        }), (0, l.jsx)(c.jz, {
          children: u.Z.Messages.SYSTEM_DM_EMPTY_MESSAGE
        })]
      })]
    })]
  })
}