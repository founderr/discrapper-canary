var i = n(735250),
  s = n(470079),
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
      trackingSource: g,
      undismissable: p,
      onDismissed: N,
      onClick: T,
      cta: C,
      ctaColor: S
    } = e;
    s.useEffect(() => {
      I(E.rMx.CHANNEL_NOTICE_VIEWED, {
        notice_type: u,
        guild_id: t.id
      })
    }, [t.id, u]);
    let A = null;
    "function" == typeof C ? A = C() : null != C && (A = (0, i.jsx)(r.Button, {
      className: _.btn,
      size: r.Button.Sizes.SMALL,
      onClick: () => {
        null != u && c.default.track(E.rMx.CHANNEL_NOTICE_CTA_CLICKED, {
          source: g,
          guild_id: t.id,
          notice_type: u
        }), null == T || T()
      },
      fullWidth: !0,
      color: S,
      children: C
    }));
    let f = null != d ? "".concat(d, "px") : "16px";
    return (0, i.jsxs)("div", {
      className: _.channelNotice,
      children: [!0 === p ? null : (0, i.jsx)(r.Clickable, {
        onClick: () => {
          o.ZP.trackWithMetadata(E.rMx.CHANNEL_NOTICE_CLOSED, {
            notice_type: u
          }), null == N || N()
        },
        className: _.close,
        "aria-label": h.Z.Messages.DISMISS,
        children: (0, i.jsx)(r.CloseSmallIcon, {
          size: "md",
          color: "currentColor",
          className: _.closeIcon
        })
      }), (0, i.jsx)("div", {
        className: _.imageContainer,
        style: {
          marginTop: "".concat(m, "px"),
          marginLeft: f,
          marginRight: f
        },
        children: (0, i.jsx)("img", {
          className: _.image,
          src: a,
          alt: ""
        })
      }), (0, i.jsxs)("div", {
        className: _.message,
        children: [null != n ? (0, i.jsx)(r.Heading, {
          variant: "heading-md/semibold",
          className: _.title,
          children: n
        }) : null, (0, i.jsx)(r.Text, {
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
  return t ? (0, i.jsx)(d.Z, {
    ...e
  }) : (0, i.jsx)(m, {
    ...e
  })
}