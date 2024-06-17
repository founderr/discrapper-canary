"use strict";
n.d(t, {
  Z: function() {
    return I
  }
});
var i = n(735250),
  r = n(470079),
  s = n(993365),
  o = n(481060),
  a = n(240991),
  l = n(810090),
  u = n(783097),
  _ = n(47713),
  d = n(689938),
  c = n(113046),
  E = n(946278);

function I(e) {
  var t;
  let {
    channel: n,
    application: r,
    videoUrl: a,
    imageCoverUrl: u
  } = e, _ = null != a || null != u, E = (null !== (t = r.description) && void 0 !== t ? t : "").length > 0;
  return (0, i.jsxs)("div", {
    className: c.container,
    children: [(0, i.jsx)(T, {
      channel: n,
      application: r
    }), (0, i.jsx)(o.Spacer, {
      size: 16
    }), (0, i.jsxs)("div", {
      className: c.profileAndVideoContainer,
      children: [_ ? (0, i.jsx)("div", {
        className: c.videoContainer,
        children: (0, i.jsx)(l.Z, {
          loop: !0,
          autoPlay: !0,
          muted: !0,
          className: c.video,
          src: a,
          poster: u
        })
      }) : null, (0, i.jsxs)("div", {
        className: _ ? c.overviewContainerWithVideo : c.overviewContainerNoVideo,
        children: [(0, i.jsx)(s.x, {
          variant: "text-sm/semibold",
          children: d.Z.Messages.OVERVIEW
        }), E ? (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(o.Spacer, {
            size: 8
          }), (0, i.jsx)(h, {
            application: r
          })]
        }) : null]
      })]
    })]
  })
}

function T(e) {
  let {
    channel: t,
    application: n,
    sectionName: r
  } = e, s = (0, u.ye)({
    application: n
  }), a = t.isThread();
  return (0, i.jsx)("div", {
    className: c.titleContainer,
    children: (0, i.jsxs)("div", {
      className: c.titleInnerContainer,
      children: [(0, i.jsx)(o.Heading, {
        variant: "heading-xl/extrabold",
        children: n.name
      }), s ? (0, i.jsx)(_.Z, {
        channel: t,
        application: n,
        disabled: a,
        sectionName: r
      }) : null]
    })
  })
}

function h(e) {
  let {
    application: t
  } = e, n = r.useMemo(() => {
    var e;
    return (0, a.YP)(null !== (e = t.description) && void 0 !== e ? e : "")
  }, [t]);
  return (0, i.jsx)(s.x, {
    className: E.markup,
    variant: "text-sm/medium",
    lineClamp: 3,
    children: n
  })
}