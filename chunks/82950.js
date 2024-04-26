"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("392711"),
  i = a.n(l),
  r = a("481060"),
  o = a("367907"),
  u = a("465670"),
  d = a("626135"),
  c = a("986332"),
  f = a("428695"),
  E = a("981631"),
  h = a("689938"),
  _ = a("85488");
let C = i().debounce(o.default.trackWithMetadata, 500),
  m = e => {
    let {
      guild: t,
      title: a,
      message: l,
      image: i,
      type: c,
      imageMarginX: f,
      imageMarginTop: m,
      trackingSource: S,
      undismissable: p,
      onDismissed: I,
      onClick: T,
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
    "function" == typeof g ? N = g() : null != g && (N = (0, n.jsx)(r.Button, {
      className: _.btn,
      size: r.Button.Sizes.SMALL,
      onClick: () => {
        null != c && d.default.track(E.AnalyticEvents.CHANNEL_NOTICE_CTA_CLICKED, {
          source: S,
          guild_id: t.id,
          notice_type: c
        }), null == T || T()
      },
      fullWidth: !0,
      color: A,
      children: g
    }));
    let v = null != f ? "".concat(f, "px") : "16px";
    return (0, n.jsxs)("div", {
      className: _.channelNotice,
      children: [!0 === p ? null : (0, n.jsx)(r.Clickable, {
        onClick: () => {
          o.default.trackWithMetadata(E.AnalyticEvents.CHANNEL_NOTICE_CLOSED, {
            notice_type: c
          }), null == I || I()
        },
        className: _.close,
        "aria-label": h.default.Messages.DISMISS,
        children: (0, n.jsx)(u.default, {
          className: _.closeIcon
        })
      }), (0, n.jsx)("div", {
        className: _.imageContainer,
        style: {
          marginTop: "".concat(m, "px"),
          marginLeft: v,
          marginRight: v
        },
        children: (0, n.jsx)("img", {
          className: _.image,
          src: i,
          alt: ""
        })
      }), (0, n.jsxs)("div", {
        className: _.message,
        children: [null != a ? (0, n.jsx)(r.Heading, {
          variant: "heading-md/semibold",
          className: _.title,
          children: a
        }) : null, (0, n.jsx)(r.Text, {
          variant: "text-sm/normal",
          children: l
        }), N]
      })]
    })
  };
t.default = function(e) {
  let {
    showRedesignedChannelNotice: t
  } = (0, c.useChannelNoticeRedesignExperiment)(!0);
  return t ? (0, n.jsx)(f.default, {
    ...e
  }) : (0, n.jsx)(m, {
    ...e
  })
}