"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var i = n("37983");
n("884691");
var r = n("414456"),
  l = n.n(r),
  a = n("866227"),
  s = n.n(a),
  o = n("446674"),
  u = n("77078"),
  c = n("442939"),
  d = n("730859"),
  f = n("697218"),
  E = n("953109"),
  _ = n("449008"),
  S = n("782340"),
  p = n("127789"),
  I = function(e) {
    let {
      createdAt: t,
      participantIds: n,
      applicationId: r,
      title: a,
      guildId: I,
      className: h
    } = e, T = (0, c.useGetOrFetchApplication)(r), C = (0, o.useStateFromStoresArray)([f.default], () => {
      var e;
      return null !== (e = n.map(e => f.default.getUser(e)).filter(_.isNotNullish)) && void 0 !== e ? e : []
    }), v = null == T ? void 0 : T.name, A = s(t).fromNow();
    return null == t ? null : (0, i.jsxs)("div", {
      className: l(h, p.container),
      children: [(0, i.jsx)(E.default, {
        game: T
      }), (0, i.jsxs)("div", {
        className: p.textSection,
        children: [null != a && "" !== a ? (0, i.jsx)(u.Text, {
          variant: "text-md/semibold",
          color: "interactive-active",
          children: a
        }) : (0, i.jsx)(u.Text, {
          variant: "text-md/semibold",
          color: "text-muted",
          children: S.default.Messages.CLIPS_UNTITLED
        }), (0, i.jsxs)(u.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: p.subtitle,
          children: [null != v ? "".concat(v, " • ") : null, A]
        }), (0, i.jsx)(u.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: p.subtitle
        })]
      }), null != C && C.length > 0 && (0, i.jsx)(d.default, {
        maxUsers: 4,
        users: C,
        className: p.facePile,
        guildId: I
      })]
    })
  }