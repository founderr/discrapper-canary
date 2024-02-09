"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("917351"),
  i = n.n(l),
  r = n("77078"),
  o = n("716241"),
  u = n("945330"),
  d = n("599110"),
  c = n("478761"),
  f = n("164586"),
  E = n("49111"),
  _ = n("782340"),
  h = n("866241");
let C = i.debounce(o.default.trackWithMetadata, 500),
  I = e => {
    let {
      guild: t,
      title: n,
      message: l,
      image: i,
      type: c,
      imageMarginX: f,
      imageMarginTop: I,
      trackingSource: T,
      undismissable: S,
      onDismissed: p,
      onClick: m,
      cta: g,
      ctaColor: A
    } = e;
    s.useEffect(() => {
      C(E.AnalyticEvents.CHANNEL_NOTICE_VIEWED, {
        notice_type: c,
        guild_id: t.id
      })
    }, [t.id, c]);
    let N = null;
    "function" == typeof g ? N = g() : null != g && (N = (0, a.jsx)(r.Button, {
      className: h.btn,
      size: r.Button.Sizes.SMALL,
      onClick: () => {
        null != c && d.default.track(E.AnalyticEvents.CHANNEL_NOTICE_CTA_CLICKED, {
          source: T,
          guild_id: t.id,
          notice_type: c
        }), null == m || m()
      },
      fullWidth: !0,
      color: A,
      children: g
    }));
    let R = null != f ? "".concat(f, "px") : "16px";
    return (0, a.jsxs)("div", {
      className: h.channelNotice,
      children: [!0 === S ? null : (0, a.jsx)(r.Clickable, {
        onClick: () => {
          o.default.trackWithMetadata(E.AnalyticEvents.CHANNEL_NOTICE_CLOSED, {
            notice_type: c
          }), null == p || p()
        },
        className: h.close,
        "aria-label": _.default.Messages.DISMISS,
        children: (0, a.jsx)(u.default, {
          className: h.closeIcon
        })
      }), (0, a.jsx)("div", {
        className: h.imageContainer,
        style: {
          marginTop: "".concat(I, "px"),
          marginLeft: R,
          marginRight: R
        },
        children: (0, a.jsx)("img", {
          className: h.image,
          src: i,
          alt: ""
        })
      }), (0, a.jsxs)("div", {
        className: h.message,
        children: [null != n ? (0, a.jsx)(r.Heading, {
          variant: "heading-md/semibold",
          className: h.title,
          children: n
        }) : null, (0, a.jsx)(r.Text, {
          variant: "text-sm/normal",
          children: l
        }), N]
      })]
    })
  };
var T = function(e) {
  let {
    showRedesignedChannelNotice: t
  } = (0, c.useChannelNoticeRedesignExperiment)(!0);
  return t ? (0, a.jsx)(f.default, {
    ...e
  }) : (0, a.jsx)(I, {
    ...e
  })
}