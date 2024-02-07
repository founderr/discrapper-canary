"use strict";
n.r(e), n.d(e, {
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
  u = n("430568"),
  s = n("271560"),
  o = n("692105"),
  c = n("888266");

function d(t) {
  let e, {
    applicationId: n,
    storeListingBenefits: l,
    skuBenefits: r,
    className: u
  } = t;
  return null != l ? e = l.map(t => (0, i.jsx)(p, {
    applicationId: n,
    benefit: t,
    className: a(c.benefit, u)
  }, t.id)) : null != r && (e = r.map((t, e) => (0, i.jsx)(f, {
    benefit: t,
    className: a(c.benefit, u)
  }, e))), (0, i.jsx)(i.Fragment, {
    children: e
  })
}

function f(t) {
  let {
    benefit: e,
    className: n,
    emojiContainerClassName: l,
    showsDescription: s = !0,
    nameTextVariant: o = "text-md/medium",
    nameTextColor: d = "header-primary"
  } = t;
  return (0, i.jsxs)("div", {
    className: a(c.container, n),
    children: [null != e.emoji && (0, i.jsx)("div", {
      className: a(c.emojiContainer, l),
      children: (0, i.jsx)(u.default, {
        emojiId: e.emoji.id,
        emojiName: e.emoji.name,
        animated: e.emoji.animated
      })
    }), (0, i.jsxs)("div", {
      className: c.infoContainer,
      children: [(0, i.jsx)(r.Text, {
        variant: o,
        color: d,
        className: c.name,
        children: e.name
      }), s && (0, i.jsx)(r.Text, {
        color: "interactive-normal",
        variant: "text-sm/normal",
        children: e.description
      })]
    })]
  })
}

function p(t) {
  let e, {
    applicationId: n,
    benefit: l,
    className: d,
    emojiContainerClassName: f,
    showsDescription: p = !0,
    nameTextVariant: I = "text-md/medium",
    nameTextColor: S = "header-primary"
  } = t;
  if (null != l.icon) switch (l.icon.type) {
    case o.IconType.STORE_ASSET:
      let T = (0, s.getAssetURL)(n, l.icon.store_asset_id);
      e = (0, i.jsx)("img", {
        src: T,
        alt: "",
        className: "emoji"
      });
      break;
    case o.IconType.EMOJI:
      e = (0, i.jsx)(u.default, {
        emojiName: l.icon.emoji
      })
  }
  return (0, i.jsxs)("div", {
    className: a(c.container, d),
    children: [(0, i.jsx)("div", {
      className: a(c.emojiContainer, f),
      children: e
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