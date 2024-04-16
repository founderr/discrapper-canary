"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("25752"),
  o = a("481060"),
  u = a("442837"),
  d = a("465670"),
  c = a("792125"),
  f = a("547280"),
  E = a("678513"),
  h = a("981631"),
  _ = a("689938"),
  C = a("504763");
let m = (0, c.getThemeClass)(h.ThemeTypes.DARK);
t.default = function(e) {
  let {
    guild: t
  } = e, l = (0, u.useStateFromStores)([E.default], () => E.default.getActiveGuildSignUp(t.id)), c = s.useCallback(() => {
    null != l && (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([a.e("99387"), a.e("22862")]).then(a.bind(a, "646202"));
      return a => (0, n.jsx)(e, {
        ...a,
        target: l,
        guildId: t.id
      })
    })
  }, [l, t.id]), S = s.useCallback(() => {
    null != l && (0, f.dismissSignUp)(l.key, l.dismissibleContent)
  }, [l]);
  if (null == l) return null;
  let p = "url(".concat(l.backgroundAssetUrl, ") black top / cover no-repeat");
  return (0, n.jsx)(o.ThemeContextProvider, {
    theme: h.ThemeTypes.DARK,
    children: (0, n.jsx)("div", {
      className: i()(C.container, m),
      children: (0, n.jsxs)("div", {
        className: C.card,
        style: {
          background: p
        },
        children: [(0, n.jsxs)("div", {
          className: C.eyebrow,
          children: [(0, n.jsx)(r.EnvelopeIcon, {
            height: 12,
            width: 12,
            color: "currentColor"
          }), (0, n.jsx)(o.Text, {
            variant: "text-xs/semibold",
            color: "none",
            children: _.default.Messages.SIGNUP_NOTICE_EYEBROW
          })]
        }), (0, n.jsx)(o.Heading, {
          variant: "heading-sm/medium",
          children: l.noticeHeader
        }), (0, n.jsx)(o.Button, {
          className: C.button,
          color: "none",
          onClick: c,
          children: (0, n.jsx)(o.Text, {
            variant: "text-sm/medium",
            color: "none",
            children: _.default.Messages.SIGNUP_NOTICE_CTA
          })
        }), (0, n.jsx)("div", {
          className: C.dismiss,
          children: (0, n.jsx)(o.Clickable, {
            onClick: S,
            children: (0, n.jsx)(d.default, {
              height: 16,
              width: 16,
              color: "currentColor"
            })
          })
        })]
      })
    })
  })
}