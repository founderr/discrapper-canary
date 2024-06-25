var l = n(735250),
  i = n(470079),
  s = n(120356),
  r = n.n(s),
  a = n(392711),
  o = n(481060),
  u = n(367907),
  c = n(626135),
  d = n(981631),
  h = n(689938),
  p = n(846756);
let g = (0, a.debounce)(u.ZP.trackWithMetadata, 500);
t.Z = function(e) {
  let {
    guild: t,
    title: n,
    message: s,
    image: a,
    type: m,
    imageStyles: C,
    imageMarginX: E,
    imageMarginTop: f,
    trackingSource: _,
    undismissable: I,
    onDismissed: N,
    onClick: Z,
    cta: S,
    ctaColor: x,
    centerText: L,
    className: T
  } = e;
  i.useEffect(() => {
    g(d.rMx.CHANNEL_NOTICE_VIEWED, {
      notice_type: m,
      guild_id: t.id
    })
  }, [t.id, m]);
  let v = null;
  "function" == typeof S ? v = S() : null != S && (v = (0, l.jsx)(o.Button, {
    className: p.button,
    size: o.Button.Sizes.SMALL,
    onClick: () => {
      null != m && c.default.track(d.rMx.CHANNEL_NOTICE_CTA_CLICKED, {
        source: _,
        guild_id: t.id,
        notice_type: m
      }), null == Z || Z()
    },
    fullWidth: !0,
    color: x,
    children: S
  }));
  let A = null;
  "function" == typeof n ? A = n() : null != n && (A = (0, l.jsx)(o.Text, {
    variant: "text-md/medium",
    color: "header-primary",
    className: r()(p.title, {
      [p.noImageTitle]: null == a
    }, {
      [p.center]: L
    }),
    children: n
  }));
  let M = null;
  "function" == typeof s ? M = s() : null != s && (M = (0, l.jsx)(o.Text, {
    className: r()({
      [p.center]: L
    }),
    variant: "text-sm/normal",
    color: "text-muted",
    children: s
  }));
  let R = null != E ? "".concat(E, "px") : "16px";
  return (0, l.jsxs)("div", {
    className: r()(p.container, T),
    children: [!0 === I ? null : (0, l.jsx)(o.Clickable, {
      onClick: () => {
        u.ZP.trackWithMetadata(d.rMx.CHANNEL_NOTICE_CLOSED, {
          notice_type: m
        }), null == N || N()
      },
      className: p.close,
      "aria-label": h.Z.Messages.DISMISS,
      children: (0, l.jsx)(o.CloseSmallIcon, {
        size: "md",
        color: "currentColor",
        className: p.closeIcon
      })
    }), null != a && (0, l.jsx)("div", {
      className: p.imageContainer,
      style: {
        marginTop: "".concat(f, "px"),
        marginLeft: R,
        marginRight: R
      },
      children: (0, l.jsx)("img", {
        className: p.image,
        style: C,
        src: a,
        alt: ""
      })
    }), (0, l.jsxs)("div", {
      className: p.message,
      children: [A, M, v]
    })]
  })
}