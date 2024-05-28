"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("25752"),
  o = n("481060"),
  u = n("442837"),
  d = n("465670"),
  c = n("792125"),
  f = n("547280"),
  E = n("678513"),
  C = n("981631"),
  h = n("689938"),
  _ = n("934206");
let S = (0, c.getThemeClass)(C.ThemeTypes.DARK);
t.default = function(e) {
  let {
    guild: t
  } = e, l = (0, u.useStateFromStores)([E.default], () => E.default.getActiveGuildSignUp(t.id)), c = s.useCallback(() => {
    null != l && (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("22862")]).then(n.bind(n, "646202"));
      return n => (0, a.jsx)(e, {
        ...n,
        target: l,
        guildId: t.id
      })
    })
  }, [l, t.id]), m = s.useCallback(() => {
    null != l && (0, f.dismissSignUp)(l.key, l.dismissibleContent)
  }, [l]);
  if (null == l) return null;
  let p = "url(".concat(l.backgroundAssetUrl, ") black top / cover no-repeat");
  return (0, a.jsx)(o.ThemeContextProvider, {
    theme: C.ThemeTypes.DARK,
    children: (0, a.jsx)("div", {
      className: i()(_.container, S),
      children: (0, a.jsxs)("div", {
        className: _.card,
        style: {
          background: p
        },
        children: [(0, a.jsxs)("div", {
          className: _.eyebrow,
          children: [(0, a.jsx)(r.EnvelopeIcon, {
            height: 12,
            width: 12,
            color: "currentColor"
          }), (0, a.jsx)(o.Text, {
            variant: "text-xs/semibold",
            color: "none",
            children: h.default.Messages.SIGNUP_NOTICE_EYEBROW
          })]
        }), (0, a.jsx)(o.Heading, {
          variant: "heading-sm/medium",
          children: l.noticeHeader
        }), (0, a.jsx)(o.Button, {
          className: _.button,
          color: "none",
          onClick: c,
          children: (0, a.jsx)(o.Text, {
            variant: "text-sm/medium",
            color: "none",
            children: h.default.Messages.SIGNUP_NOTICE_CTA
          })
        }), (0, a.jsx)("div", {
          className: _.dismiss,
          children: (0, a.jsx)(o.Clickable, {
            onClick: m,
            children: (0, a.jsx)(d.default, {
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