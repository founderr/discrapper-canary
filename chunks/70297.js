l.d(n, {
  Z: function() {
    return E
  },
  q: function() {
    return g
  }
});
var t = l(735250);
l(470079);
var i = l(120356),
  s = l.n(i),
  a = l(704215),
  r = l(481060),
  d = l(605236),
  o = l(434404),
  c = l(707076),
  u = l(398758),
  h = l(981631),
  m = l(921944),
  x = l(689938),
  N = l(337415),
  C = l(697611);

function g(e) {
  return (0, u.te)(e) ? 250 : 152
}

function E(e) {
  let {
    guild: n
  } = e, l = (0, u.te)(n.id), i = (0, d.wE)(a.z.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL), g = l && !i ? a.z.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL : a.z.CHANNEL_BROWSER_NUX;
  (0, d.kk)(g);
  let E = l ? (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsxs)("div", {
      children: [(0, t.jsx)(r.Heading, {
        className: N.heading,
        color: "always-white",
        variant: "heading-lg/semibold",
        children: x.Z.Messages.CHANNEL_BROWSER_ADMIN_NUX_TITLE
      }), (0, t.jsx)(r.Text, {
        variant: "text-md/normal",
        color: "always-white",
        children: x.Z.Messages.CHANNEL_BROWSER_ADMIN_NUX_DESCRIPTION
      }), (0, t.jsx)(r.Button, {
        className: N.checkItOut,
        onClick: () => {
          o.Z.open(n.id, h.pNK.ONBOARDING), (0, d.EW)(g, {
            dismissAction: m.L.PRIMARY
          })
        },
        color: r.Button.Colors.BRAND_INVERTED,
        children: (0, t.jsx)(r.Text, {
          variant: "text-md/medium",
          color: "none",
          children: x.Z.Messages.CHANNEL_BROWSER_ADMIN_NUX_CTA
        })
      })]
    }), (0, t.jsx)(c.j, {
      isTooltip: !0
    })]
  }) : (0, t.jsxs)("div", {
    className: N.nuxContent,
    children: [(0, t.jsx)("img", {
      width: 180,
      className: N.image,
      src: C,
      alt: "",
      "aria-hidden": !0
    }), (0, t.jsxs)("div", {
      children: [(0, t.jsx)(r.Heading, {
        className: N.heading,
        variant: "heading-lg/semibold",
        color: "header-primary",
        children: x.Z.Messages.CHANNEL_BROWSER_NUX_TITLE
      }), (0, t.jsx)(r.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: x.Z.Messages.CHANNEL_BROWSER_NUX_DESCRIPTION
      }), (0, t.jsx)(r.Text, {
        className: N.tip,
        variant: "text-md/normal",
        color: "header-secondary",
        children: x.Z.Messages.CHANNEL_BROWSER_NUX_DESCRIPTION_2.format()
      })]
    })]
  });
  return (0, t.jsxs)("div", {
    className: s()(N.container, {
      [N.adminUpsell]: l
    }),
    children: [(0, t.jsx)(r.Clickable, {
      className: N.closeButton,
      onClick: () => {
        (0, d.EW)(g, {
          dismissAction: m.L.DISMISS
        })
      },
      children: (0, t.jsx)(r.CloseSmallIcon, {
        size: "md",
        color: "currentColor"
      })
    }), E]
  })
}