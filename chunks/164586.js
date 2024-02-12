"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("917351"),
  o = n("77078"),
  u = n("716241"),
  d = n("945330"),
  c = n("599110"),
  f = n("49111"),
  E = n("782340"),
  _ = n("832025");
let h = (0, r.debounce)(u.default.trackWithMetadata, 500);
var C = function(e) {
  let {
    guild: t,
    title: n,
    message: l,
    image: r,
    type: C,
    imageStyles: I,
    imageMarginX: T,
    imageMarginTop: S,
    trackingSource: p,
    undismissable: m,
    onDismissed: g,
    onClick: A,
    cta: N,
    ctaColor: R,
    centerText: O
  } = e;
  s.useEffect(() => {
    h(f.AnalyticEvents.CHANNEL_NOTICE_VIEWED, {
      notice_type: C,
      guild_id: t.id
    })
  }, [t.id, C]);
  let L = null;
  "function" == typeof N ? L = N() : null != N && (L = (0, a.jsx)(o.Button, {
    className: _.button,
    size: o.Button.Sizes.SMALL,
    onClick: () => {
      null != C && c.default.track(f.AnalyticEvents.CHANNEL_NOTICE_CTA_CLICKED, {
        source: p,
        guild_id: t.id,
        notice_type: C
      }), null == A || A()
    },
    fullWidth: !0,
    color: R,
    children: N
  }));
  let v = null;
  "function" == typeof n ? v = n() : null != n && (v = (0, a.jsx)(o.Text, {
    variant: "text-md/medium",
    color: "header-primary",
    className: i(_.title, {
      [_.noImageTitle]: null == r
    }, {
      [_.center]: O
    }),
    children: n
  }));
  let M = null != T ? "".concat(T, "px") : "16px";
  return (0, a.jsxs)("div", {
    className: _.container,
    children: [!0 === m ? null : (0, a.jsx)(o.Clickable, {
      onClick: () => {
        u.default.trackWithMetadata(f.AnalyticEvents.CHANNEL_NOTICE_CLOSED, {
          notice_type: C
        }), null == g || g()
      },
      className: _.close,
      "aria-label": E.default.Messages.DISMISS,
      children: (0, a.jsx)(d.default, {
        className: _.closeIcon
      })
    }), null != r && (0, a.jsx)("div", {
      className: _.imageContainer,
      style: {
        marginTop: "".concat(S, "px"),
        marginLeft: M,
        marginRight: M
      },
      children: (0, a.jsx)("img", {
        className: _.image,
        style: I,
        src: r,
        alt: ""
      })
    }), (0, a.jsxs)("div", {
      className: _.message,
      children: [v, (0, a.jsx)(o.Text, {
        className: i({
          [_.center]: O
        }),
        variant: "text-sm/normal",
        color: "text-muted",
        children: l
      }), L]
    })]
  })
}