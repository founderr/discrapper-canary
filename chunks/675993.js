"use strict";
n.d(t, {
  Z: function() {
    return T
  }
});
var i = n(735250),
  r = n(470079),
  s = n(993365),
  o = n(481060),
  a = n(240991),
  l = n(810090),
  u = n(283442),
  _ = n(783097),
  d = n(591204),
  c = n(689938),
  E = n(113046),
  I = n(946278);

function T(e) {
  var t;
  let {
    channel: n,
    application: r,
    videoUrl: a,
    imageCoverUrl: u
  } = e, _ = null != a || null != u, d = (null !== (t = r.description) && void 0 !== t ? t : "").length > 0;
  return (0, i.jsxs)("div", {
    className: E.container,
    children: [(0, i.jsx)(h, {
      channel: n,
      application: r
    }), (0, i.jsx)(o.Spacer, {
      size: 16
    }), (0, i.jsxs)("div", {
      className: E.profileAndVideoContainer,
      children: [_ ? (0, i.jsx)("div", {
        className: E.videoContainer,
        children: (0, i.jsx)(l.Z, {
          loop: !0,
          autoPlay: !0,
          muted: !0,
          className: E.video,
          src: a,
          poster: u
        })
      }) : null, (0, i.jsxs)("div", {
        className: _ ? E.overviewContainerWithVideo : E.overviewContainerNoVideo,
        children: [(0, i.jsx)(s.x, {
          variant: "text-sm/semibold",
          children: c.Z.Messages.OVERVIEW
        }), d ? (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(o.Spacer, {
            size: 8
          }), (0, i.jsx)(S, {
            application: r
          })]
        }) : null]
      })]
    })]
  })
}

function h(e) {
  let {
    channel: t,
    application: n,
    sectionName: r
  } = e, s = (0, _.ye)({
    application: n
  }), a = t.isThread(), l = (0, u.Z)({
    applicationId: n.id,
    channel: t
  });
  return (0, i.jsx)("div", {
    className: E.titleContainer,
    children: (0, i.jsxs)("div", {
      className: E.titleInnerContainer,
      children: [(0, i.jsx)(o.Heading, {
        variant: "heading-xl/extrabold",
        children: n.name
      }), s ? (0, i.jsx)(d.Z, {
        channel: t,
        application: n,
        disabled: a,
        sectionName: r,
        commandName: l
      }) : null]
    })
  })
}

function S(e) {
  let {
    application: t
  } = e, n = r.useMemo(() => {
    var e;
    return (0, a.YP)(null !== (e = t.description) && void 0 !== e ? e : "")
  }, [t]);
  return (0, i.jsx)(s.x, {
    className: I.markup,
    variant: "text-sm/medium",
    lineClamp: 3,
    children: n
  })
}