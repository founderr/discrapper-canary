var s = n(735250),
  i = n(470079),
  l = n(392711),
  a = n.n(l),
  r = n(481060),
  o = n(367907),
  c = n(626135),
  u = n(986332),
  d = n(428695),
  E = n(981631),
  h = n(689938),
  _ = n(243844);
let I = a().debounce(o.ZP.trackWithMetadata, 500),
  m = e => {
    let {
      guild: t,
      title: n,
      message: l,
      image: a,
      type: u,
      imageMarginX: d,
      imageMarginTop: m,
      trackingSource: T,
      undismissable: g,
      onDismissed: p,
      onClick: N,
      cta: S,
      ctaColor: C
    } = e;
    i.useEffect(() => {
      I(E.rMx.CHANNEL_NOTICE_VIEWED, {
        notice_type: u,
        guild_id: t.id
      })
    }, [t.id, u]);
    let A = null;
    "function" == typeof S ? A = S() : null != S && (A = (0, s.jsx)(r.Button, {
      className: _.btn,
      size: r.Button.Sizes.SMALL,
      onClick: () => {
        null != u && c.default.track(E.rMx.CHANNEL_NOTICE_CTA_CLICKED, {
          source: T,
          guild_id: t.id,
          notice_type: u
        }), null == N || N()
      },
      fullWidth: !0,
      color: C,
      children: S
    }));
    let f = null != d ? "".concat(d, "px") : "16px";
    return (0, s.jsxs)("div", {
      className: _.channelNotice,
      children: [!0 === g ? null : (0, s.jsx)(r.Clickable, {
        onClick: () => {
          o.ZP.trackWithMetadata(E.rMx.CHANNEL_NOTICE_CLOSED, {
            notice_type: u
          }), null == p || p()
        },
        className: _.close,
        "aria-label": h.Z.Messages.DISMISS,
        children: (0, s.jsx)(r.CloseSmallIcon, {
          size: "md",
          color: "currentColor",
          className: _.closeIcon
        })
      }), (0, s.jsx)("div", {
        className: _.imageContainer,
        style: {
          marginTop: "".concat(m, "px"),
          marginLeft: f,
          marginRight: f
        },
        children: (0, s.jsx)("img", {
          className: _.image,
          src: a,
          alt: ""
        })
      }), (0, s.jsxs)("div", {
        className: _.message,
        children: [null != n ? (0, s.jsx)(r.Heading, {
          variant: "heading-md/semibold",
          className: _.title,
          children: n
        }) : null, (0, s.jsx)(r.Text, {
          variant: "text-sm/normal",
          children: l
        }), A]
      })]
    })
  };
t.Z = function(e) {
  let {
    showRedesignedChannelNotice: t
  } = (0, u.o)(!0);
  return t ? (0, s.jsx)(d.Z, {
    ...e
  }) : (0, s.jsx)(m, {
    ...e
  })
}