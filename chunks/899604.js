"use strict";
n.r(t), n.d(t, {
  SubscriptionListingBenefits: function() {
    return d
  },
  default: function() {
    return f
  }
});
var i = n("37983");
n("884691");
var l = n("414456"),
  a = n.n(l),
  r = n("77078"),
  s = n("430568"),
  u = n("271560"),
  o = n("692105"),
  c = n("888266");

function d(e) {
  let t, {
    applicationId: n,
    storeListingBenefits: l,
    skuBenefits: r,
    className: s
  } = e;
  return null != l ? t = l.map(e => (0, i.jsx)(p, {
    applicationId: n,
    benefit: e,
    className: a(c.benefit, s)
  }, e.id)) : null != r && (t = r.map((e, t) => (0, i.jsx)(f, {
    benefit: e,
    className: a(c.benefit, s)
  }, t))), (0, i.jsx)(i.Fragment, {
    children: t
  })
}

function f(e) {
  let {
    benefit: t,
    className: n,
    emojiContainerClassName: l,
    showsDescription: u = !0,
    nameTextVariant: o = "text-md/medium",
    nameTextColor: d = "header-primary"
  } = e;
  return (0, i.jsxs)("div", {
    className: a(c.container, n),
    children: [null != t.emoji && (0, i.jsx)("div", {
      className: a(c.emojiContainer, l),
      children: (0, i.jsx)(s.default, {
        emojiId: t.emoji.id,
        emojiName: t.emoji.name,
        animated: t.emoji.animated
      })
    }), (0, i.jsxs)("div", {
      className: c.infoContainer,
      children: [(0, i.jsx)(r.Text, {
        variant: o,
        color: d,
        className: c.name,
        children: t.name
      }), u && (0, i.jsx)(r.Text, {
        color: "interactive-normal",
        variant: "text-sm/normal",
        children: t.description
      })]
    })]
  })
}

function p(e) {
  let t, {
    applicationId: n,
    benefit: l,
    className: d,
    emojiContainerClassName: f,
    showsDescription: p = !0,
    nameTextVariant: I = "text-md/medium",
    nameTextColor: S = "header-primary"
  } = e;
  if (null != l.icon) switch (l.icon.type) {
    case o.IconType.STORE_ASSET:
      let h = (0, u.getAssetURL)(n, l.icon.store_asset_id);
      t = (0, i.jsx)("img", {
        src: h,
        alt: "",
        className: "emoji"
      });
      break;
    case o.IconType.EMOJI:
      t = (0, i.jsx)(s.default, {
        emojiName: l.icon.emoji
      })
  }
  return (0, i.jsxs)("div", {
    className: a(c.container, d),
    children: [(0, i.jsx)("div", {
      className: a(c.emojiContainer, f),
      children: t
    }), (0, i.jsxs)("div", {
      className: c.infoContainer,
      children: [(0, i.jsx)(r.Text, {
        variant: I,
        color: S,
        className: c.name,
        children: l.name
      }), p && (0, i.jsx)(r.Text, {
        color: "interactive-normal",
        variant: "text-sm/normal",
        children: l.description
      })]
    })]
  })
}