"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("392711"),
  o = n("481060"),
  u = n("367907"),
  d = n("465670"),
  c = n("626135"),
  f = n("981631"),
  E = n("689938"),
  _ = n("615273");
let h = (0, r.debounce)(u.default.trackWithMetadata, 500);
t.default = function(e) {
  let {
    guild: t,
    title: n,
    message: l,
    image: r,
    type: C,
    imageStyles: m,
    imageMarginX: S,
    imageMarginTop: I,
    trackingSource: T,
    undismissable: p,
    onDismissed: g,
    onClick: N,
    cta: A,
    ctaColor: R,
    centerText: O
  } = e;
  s.useEffect(() => {
    h(f.AnalyticEvents.CHANNEL_NOTICE_VIEWED, {
      notice_type: C,
      guild_id: t.id
    })
  }, [t.id, C]);
  let v = null;
  "function" == typeof A ? v = A() : null != A && (v = (0, a.jsx)(o.Button, {
    className: _.button,
    size: o.Button.Sizes.SMALL,
    onClick: () => {
      null != C && c.default.track(f.AnalyticEvents.CHANNEL_NOTICE_CTA_CLICKED, {
        source: T,
        guild_id: t.id,
        notice_type: C
      }), null == N || N()
    },
    fullWidth: !0,
    color: R,
    children: A
  }));
  let L = null;
  "function" == typeof n ? L = n() : null != n && (L = (0, a.jsx)(o.Text, {
    variant: "text-md/medium",
    color: "header-primary",
    className: i()(_.title, {
      [_.noImageTitle]: null == r
    }, {
      [_.center]: O
    }),
    children: n
  }));
  let P = null != S ? "".concat(S, "px") : "16px";
  return (0, a.jsxs)("div", {
    className: _.container,
    children: [!0 === p ? null : (0, a.jsx)(o.Clickable, {
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
        marginTop: "".concat(I, "px"),
        marginLeft: P,
        marginRight: P
      },
      children: (0, a.jsx)("img", {
        className: _.image,
        style: m,
        src: r,
        alt: ""
      })
    }), (0, a.jsxs)("div", {
      className: _.message,
      children: [L, (0, a.jsx)(o.Text, {
        className: i()({
          [_.center]: O
        }),
        variant: "text-sm/normal",
        color: "text-muted",
        children: l
      }), v]
    })]
  })
}