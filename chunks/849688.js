var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(481060),
  o = n(442837),
  c = n(792125),
  u = n(547280),
  d = n(678513),
  E = n(981631),
  h = n(689938),
  _ = n(774245);
let I = (0, c.Q)(E.BRd.DARK);
t.Z = function(e) {
  let {
    guild: t
  } = e, l = (0, o.e7)([d.Z], () => d.Z.getActiveGuildSignUp(t.id)), c = i.useCallback(() => {
    null != l && (0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("22862")]).then(n.bind(n, 646202));
      return n => (0, s.jsx)(e, {
        ...n,
        target: l,
        guildId: t.id
      })
    })
  }, [l, t.id]), m = i.useCallback(() => {
    null != l && (0, u.b)(l.key, l.dismissibleContent)
  }, [l]);
  if (null == l) return null;
  let T = "url(".concat(l.backgroundAssetUrl, ") black top / cover no-repeat");
  return (0, s.jsx)(r.ThemeContextProvider, {
    theme: E.BRd.DARK,
    children: (0, s.jsx)("div", {
      className: a()(_.container, I),
      children: (0, s.jsxs)("div", {
        className: _.card,
        style: {
          background: T
        },
        children: [(0, s.jsxs)("div", {
          className: _.eyebrow,
          children: [(0, s.jsx)(r.EnvelopeIcon, {
            size: "xxs",
            color: "currentColor"
          }), (0, s.jsx)(r.Text, {
            variant: "text-xs/semibold",
            color: "none",
            children: h.Z.Messages.SIGNUP_NOTICE_EYEBROW
          })]
        }), (0, s.jsx)(r.Heading, {
          variant: "heading-sm/medium",
          children: l.noticeHeader
        }), (0, s.jsx)(r.Button, {
          className: _.button,
          color: "none",
          onClick: c,
          children: (0, s.jsx)(r.Text, {
            variant: "text-sm/medium",
            color: "none",
            children: h.Z.Messages.SIGNUP_NOTICE_CTA
          })
        }), (0, s.jsx)("div", {
          className: _.dismiss,
          children: (0, s.jsx)(r.Clickable, {
            onClick: m,
            children: (0, s.jsx)(r.CloseSmallIcon, {
              size: "xs",
              color: "currentColor"
            })
          })
        })]
      })
    })
  })
}