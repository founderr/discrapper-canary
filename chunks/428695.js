"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("803997"),
  i = a.n(l),
  r = a("392711"),
  o = a("481060"),
  u = a("367907"),
  d = a("465670"),
  c = a("626135"),
  f = a("981631"),
  E = a("689938"),
  h = a("615273");
let _ = (0, r.debounce)(u.default.trackWithMetadata, 500);
t.default = function(e) {
  let {
    guild: t,
    title: a,
    message: l,
    image: r,
    type: C,
    imageStyles: m,
    imageMarginX: S,
    imageMarginTop: p,
    trackingSource: I,
    undismissable: T,
    onDismissed: g,
    onClick: A,
    cta: N,
    ctaColor: v,
    centerText: R
  } = e;
  s.useEffect(() => {
    _(f.AnalyticEvents.CHANNEL_NOTICE_VIEWED, {
      notice_type: C,
      guild_id: t.id
    })
  }, [t.id, C]);
  let O = null;
  "function" == typeof N ? O = N() : null != N && (O = (0, n.jsx)(o.Button, {
    className: h.button,
    size: o.Button.Sizes.SMALL,
    onClick: () => {
      null != C && c.default.track(f.AnalyticEvents.CHANNEL_NOTICE_CTA_CLICKED, {
        source: I,
        guild_id: t.id,
        notice_type: C
      }), null == A || A()
    },
    fullWidth: !0,
    color: v,
    children: N
  }));
  let L = null;
  "function" == typeof a ? L = a() : null != a && (L = (0, n.jsx)(o.Text, {
    variant: "text-md/medium",
    color: "header-primary",
    className: i()(h.title, {
      [h.noImageTitle]: null == r
    }, {
      [h.center]: R
    }),
    children: a
  }));
  let M = null != S ? "".concat(S, "px") : "16px";
  return (0, n.jsxs)("div", {
    className: h.container,
    children: [!0 === T ? null : (0, n.jsx)(o.Clickable, {
      onClick: () => {
        u.default.trackWithMetadata(f.AnalyticEvents.CHANNEL_NOTICE_CLOSED, {
          notice_type: C
        }), null == g || g()
      },
      className: h.close,
      "aria-label": E.default.Messages.DISMISS,
      children: (0, n.jsx)(d.default, {
        className: h.closeIcon
      })
    }), null != r && (0, n.jsx)("div", {
      className: h.imageContainer,
      style: {
        marginTop: "".concat(p, "px"),
        marginLeft: M,
        marginRight: M
      },
      children: (0, n.jsx)("img", {
        className: h.image,
        style: m,
        src: r,
        alt: ""
      })
    }), (0, n.jsxs)("div", {
      className: h.message,
      children: [L, (0, n.jsx)(o.Text, {
        className: i()({
          [h.center]: R
        }),
        variant: "text-sm/normal",
        color: "text-muted",
        children: l
      }), O]
    })]
  })
}