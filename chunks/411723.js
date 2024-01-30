"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var i = n("37983");
n("884691");
var l = n("414456"),
  r = n.n(l),
  a = n("866227"),
  o = n.n(a),
  s = n("446674"),
  u = n("77078"),
  c = n("442939"),
  d = n("730859"),
  f = n("697218"),
  E = n("953109"),
  _ = n("449008"),
  p = n("782340"),
  S = n("127789"),
  I = function(e) {
    let {
      createdAt: t,
      participantIds: n,
      applicationId: l,
      title: a,
      guildId: I,
      className: T
    } = e, h = (0, c.useGetOrFetchApplication)(l), C = (0, s.useStateFromStoresArray)([f.default], () => {
      var e;
      return null !== (e = n.map(e => f.default.getUser(e)).filter(_.isNotNullish)) && void 0 !== e ? e : []
    }), v = null == h ? void 0 : h.name, g = o(t).fromNow();
    return null == t ? null : (0, i.jsxs)("div", {
      className: r(T, S.container),
      children: [(0, i.jsx)(E.default, {
        game: h
      }), (0, i.jsxs)("div", {
        className: S.textSection,
        children: [null != a && "" !== a ? (0, i.jsx)(u.Text, {
          variant: "text-md/semibold",
          color: "interactive-active",
          children: a
        }) : (0, i.jsx)(u.Text, {
          variant: "text-md/semibold",
          color: "text-muted",
          children: p.default.Messages.CLIPS_UNTITLED
        }), (0, i.jsxs)(u.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: S.subtitle,
          children: [null != v ? "".concat(v, " • ") : null, g]
        }), (0, i.jsx)(u.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: S.subtitle
        })]
      }), null != C && C.length > 0 && (0, i.jsx)(d.default, {
        maxUsers: 4,
        users: C,
        className: S.facePile,
        guildId: I
      })]
    })
  }