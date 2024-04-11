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
  h = n("615273");
let _ = (0, r.debounce)(u.default.trackWithMetadata, 500);
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
  "function" == typeof N ? O = N() : null != N && (O = (0, a.jsx)(o.Button, {
    className: h.button,
    size: o.Button.Sizes.SMALL,
    onClick: () => {
      null != C && c.default.track(f.AnalyticEvents.CHANNEL_NOTICE_CTA_CLICKED, {
        source: T,
        guild_id: t.id,
        notice_type: C
      }), null == A || A()
    },
    fullWidth: !0,
    color: v,
    children: N
  }));
  let L = null;
  "function" == typeof n ? L = n() : null != n && (L = (0, a.jsx)(o.Text, {
    variant: "text-md/medium",
    color: "header-primary",
    className: i()(h.title, {
      [h.noImageTitle]: null == r
    }, {
      [h.center]: R
    }),
    children: n
  }));
  let M = null != S ? "".concat(S, "px") : "16px";
  return (0, a.jsxs)("div", {
    className: h.container,
    children: [!0 === p ? null : (0, a.jsx)(o.Clickable, {
      onClick: () => {
        u.default.trackWithMetadata(f.AnalyticEvents.CHANNEL_NOTICE_CLOSED, {
          notice_type: C
        }), null == g || g()
      },
      className: h.close,
      "aria-label": E.default.Messages.DISMISS,
      children: (0, a.jsx)(d.default, {
        className: h.closeIcon
      })
    }), null != r && (0, a.jsx)("div", {
      className: h.imageContainer,
      style: {
        marginTop: "".concat(I, "px"),
        marginLeft: M,
        marginRight: M
      },
      children: (0, a.jsx)("img", {
        className: h.image,
        style: m,
        src: r,
        alt: ""
      })
    }), (0, a.jsxs)("div", {
      className: h.message,
      children: [L, (0, a.jsx)(o.Text, {
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