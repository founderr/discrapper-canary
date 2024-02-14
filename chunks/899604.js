"use strict";
n.r(t), n.d(t, {
  SubscriptionListingBenefits: function() {
    return c
  },
  default: function() {
    return f
  }
});
var l = n("37983");
n("884691");
var i = n("414456"),
  a = n.n(i),
  s = n("77078"),
  r = n("430568"),
  o = n("271560"),
  u = n("692105"),
  d = n("794280");

function c(e) {
  let t, {
    applicationId: n,
    storeListingBenefits: i,
    skuBenefits: s,
    className: r
  } = e;
  return null != i ? t = i.map(e => (0, l.jsx)(m, {
    applicationId: n,
    benefit: e,
    className: a(d.benefit, r)
  }, e.id)) : null != s && (t = s.map((e, t) => (0, l.jsx)(f, {
    benefit: e,
    className: a(d.benefit, r)
  }, t))), (0, l.jsx)(l.Fragment, {
    children: t
  })
}

function f(e) {
  let {
    benefit: t,
    className: n,
    emojiContainerClassName: i,
    showsDescription: o = !0,
    nameTextVariant: u = "text-md/medium",
    nameTextColor: c = "header-primary"
  } = e;
  return (0, l.jsxs)("div", {
    className: a(d.container, n),
    children: [null != t.emoji && (0, l.jsx)("div", {
      className: a(d.emojiContainer, i),
      children: (0, l.jsx)(r.default, {
        emojiId: t.emoji.id,
        emojiName: t.emoji.name,
        animated: t.emoji.animated
      })
    }), (0, l.jsxs)("div", {
      className: d.infoContainer,
      children: [(0, l.jsx)(s.Text, {
        variant: u,
        color: c,
        className: d.name,
        children: t.name
      }), o && (0, l.jsx)(s.Text, {
        color: "interactive-normal",
        variant: "text-sm/normal",
        children: t.description
      })]
    })]
  })
}

function m(e) {
  let t, {
    applicationId: n,
    benefit: i,
    className: c,
    emojiContainerClassName: f,
    showsDescription: m = !0,
    nameTextVariant: p = "text-md/medium",
    nameTextColor: h = "header-primary"
  } = e;
  if (null != i.icon) switch (i.icon.type) {
    case u.IconType.STORE_ASSET:
      let E = (0, o.getAssetURL)(n, i.icon.store_asset_id);
      t = (0, l.jsx)("img", {
        src: E,
        alt: "",
        className: "emoji"
      });
      break;
    case u.IconType.EMOJI:
      t = (0, l.jsx)(r.default, {
        emojiName: i.icon.emoji
      })
  }
  return (0, l.jsxs)("div", {
    className: a(d.container, c),
    children: [(0, l.jsx)("div", {
      className: a(d.emojiContainer, f),
      children: t
    }), (0, l.jsxs)("div", {
      className: d.infoContainer,
      children: [(0, l.jsx)(s.Text, {
        variant: p,
        color: h,
        className: d.name,
        children: i.name
      }), m && (0, l.jsx)(s.Text, {
        color: "interactive-normal",
        variant: "text-sm/normal",
        children: i.description
      })]
    })]
  })
}