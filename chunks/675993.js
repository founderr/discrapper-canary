"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var i = n("735250"),
  r = n("470079"),
  s = n("993365"),
  a = n("481060"),
  o = n("240991"),
  l = n("810090"),
  u = n("783097"),
  d = n("47713"),
  _ = n("689938"),
  c = n("113046"),
  E = n("946278");

function I(e) {
  var t;
  let {
    channel: n,
    application: r,
    videoUrl: o,
    imageCoverUrl: u
  } = e, d = null != o || null != u, E = (null !== (t = r.description) && void 0 !== t ? t : "").length > 0;
  return (0, i.jsxs)("div", {
    className: c.container,
    children: [(0, i.jsx)(T, {
      channel: n,
      application: r
    }), (0, i.jsx)(a.Spacer, {
      size: 16
    }), (0, i.jsxs)("div", {
      className: c.profileAndVideoContainer,
      children: [d ? (0, i.jsx)("div", {
        className: c.videoContainer,
        children: (0, i.jsx)(l.default, {
          loop: !0,
          autoPlay: !0,
          muted: !0,
          className: c.video,
          src: o,
          poster: u
        })
      }) : null, (0, i.jsxs)("div", {
        className: d ? c.overviewContainerWithVideo : c.overviewContainerNoVideo,
        children: [(0, i.jsx)(s.Text, {
          variant: "text-sm/semibold",
          children: _.default.Messages.OVERVIEW
        }), E ? (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(a.Spacer, {
            size: 8
          }), (0, i.jsx)(f, {
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
  } = e, s = (0, u.isEmbeddedApp)({
    application: n
  }), o = t.isThread();
  return (0, i.jsx)("div", {
    className: c.titleContainer,
    children: (0, i.jsxs)("div", {
      className: c.titleInnerContainer,
      children: [(0, i.jsx)(a.Heading, {
        variant: "heading-xl/extrabold",
        children: n.name
      }), s ? (0, i.jsx)(d.default, {
        channel: t,
        application: n,
        disabled: o,
        sectionName: r
      }) : null]
    })
  })
}

function f(e) {
  let {
    application: t
  } = e, n = r.useMemo(() => {
    var e;
    return (0, o.parseBioReact)(null !== (e = t.description) && void 0 !== e ? e : "")
  }, [t]);
  return (0, i.jsx)(s.Text, {
    className: E.markup,
    variant: "text-sm/medium",
    lineClamp: 3,
    children: n
  })
}