"use strict";
n.r(t);
var l = n("735250"),
  a = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("392711"),
  o = n("481060"),
  u = n("367907"),
  d = n("465670"),
  c = n("626135"),
  f = n("981631"),
  h = n("689938"),
  p = n("53116");
let m = (0, r.debounce)(u.default.trackWithMetadata, 500);
t.default = function(e) {
  let {
    guild: t,
    title: n,
    message: s,
    image: r,
    type: C,
    imageStyles: g,
    imageMarginX: E,
    imageMarginTop: _,
    trackingSource: I,
    undismissable: S,
    onDismissed: N,
    onClick: T,
    cta: A,
    ctaColor: L,
    centerText: v,
    className: x
  } = e;
  a.useEffect(() => {
    m(f.AnalyticEvents.CHANNEL_NOTICE_VIEWED, {
      notice_type: C,
      guild_id: t.id
    })
  }, [t.id, C]);
  let R = null;
  "function" == typeof A ? R = A() : null != A && (R = (0, l.jsx)(o.Button, {
    className: p.button,
    size: o.Button.Sizes.SMALL,
    onClick: () => {
      null != C && c.default.track(f.AnalyticEvents.CHANNEL_NOTICE_CTA_CLICKED, {
        source: I,
        guild_id: t.id,
        notice_type: C
      }), null == T || T()
    },
    fullWidth: !0,
    color: L,
    children: A
  }));
  let M = null;
  "function" == typeof n ? M = n() : null != n && (M = (0, l.jsx)(o.Text, {
    variant: "text-md/medium",
    color: "header-primary",
    className: i()(p.title, {
      [p.noImageTitle]: null == r
    }, {
      [p.center]: v
    }),
    children: n
  }));
  let y = null;
  "function" == typeof s ? y = s() : null != s && (y = (0, l.jsx)(o.Text, {
    className: i()({
      [p.center]: v
    }),
    variant: "text-sm/normal",
    color: "text-muted",
    children: s
  }));
  let O = null != E ? "".concat(E, "px") : "16px";
  return (0, l.jsxs)("div", {
    className: i()(p.container, x),
    children: [!0 === S ? null : (0, l.jsx)(o.Clickable, {
      onClick: () => {
        u.default.trackWithMetadata(f.AnalyticEvents.CHANNEL_NOTICE_CLOSED, {
          notice_type: C
        }), null == N || N()
      },
      className: p.close,
      "aria-label": h.default.Messages.DISMISS,
      children: (0, l.jsx)(d.default, {
        className: p.closeIcon
      })
    }), null != r && (0, l.jsx)("div", {
      className: p.imageContainer,
      style: {
        marginTop: "".concat(_, "px"),
        marginLeft: O,
        marginRight: O
      },
      children: (0, l.jsx)("img", {
        className: p.image,
        style: g,
        src: r,
        alt: ""
      })
    }), (0, l.jsxs)("div", {
      className: p.message,
      children: [M, y, R]
    })]
  })
}