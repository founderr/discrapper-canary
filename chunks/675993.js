"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var i = n("735250"),
  r = n("470079"),
  s = n("993365"),
  a = n("481060"),
  o = n("240991"),
  l = n("682864"),
  u = n("810090"),
  d = n("783097"),
  _ = n("47713"),
  c = n("689938"),
  E = n("113046"),
  I = n("946278");

function T(e) {
  var t;
  let {
    channel: n,
    application: r,
    videoUrl: a,
    imageCoverUrl: o
  } = e, d = null != a || null != o, _ = (null !== (t = r.description) && void 0 !== t ? t : "").length > 0;
  return (0, i.jsxs)("div", {
    className: E.container,
    children: [(0, i.jsx)(f, {
      channel: n,
      application: r
    }), (0, i.jsx)(l.default, {
      size: 16
    }), (0, i.jsxs)("div", {
      className: E.profileAndVideoContainer,
      children: [d ? (0, i.jsx)("div", {
        className: E.videoContainer,
        children: (0, i.jsx)(u.default, {
          loop: !0,
          autoPlay: !0,
          muted: !0,
          className: E.video,
          src: a,
          poster: o
        })
      }) : null, (0, i.jsxs)("div", {
        className: d ? E.overviewContainerWithVideo : E.overviewContainerNoVideo,
        children: [(0, i.jsx)(s.Text, {
          variant: "text-sm/semibold",
          children: c.default.Messages.OVERVIEW
        }), _ ? (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(l.default, {
            size: 8
          }), (0, i.jsx)(S, {
            application: r
          })]
        }) : null]
      })]
    })]
  })
}

function f(e) {
  let {
    channel: t,
    application: n,
    sectionName: r
  } = e, s = (0, d.isEmbeddedApp)({
    application: n
  }), o = t.isThread();
  return (0, i.jsx)("div", {
    className: E.titleContainer,
    children: (0, i.jsxs)("div", {
      className: E.titleInnerContainer,
      children: [(0, i.jsx)(a.Heading, {
        variant: "heading-xl/extrabold",
        children: n.name
      }), s ? (0, i.jsx)(_.default, {
        channel: t,
        application: n,
        disabled: o,
        sectionName: r
      }) : null]
    })
  })
}

function S(e) {
  let {
    application: t
  } = e, n = r.useMemo(() => {
    var e;
    return (0, o.parseBioReact)(null !== (e = t.description) && void 0 !== e ? e : "")
  }, [t]);
  return (0, i.jsx)(s.Text, {
    className: I.markup,
    variant: "text-sm/medium",
    lineClamp: 3,
    children: n
  })
}