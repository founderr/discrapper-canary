"use strict";
t.d(s, {
  Z: function() {
    return I
  },
  w: function() {
    return T
  }
});
var n = t(735250);
t(470079);
var i = t(120356),
  l = t.n(i),
  a = t(481060),
  r = t(259580),
  o = t(73346),
  c = t(817460),
  d = t(723047),
  u = t(880229),
  E = t(689938),
  _ = t(576272);

function I(e) {
  let {
    channelBenefits: s,
    intangibleBenefits: t,
    subscriptionListings: i,
    onImport: r
  } = e, I = (0, d.mY)();
  return (0, n.jsx)("div", {
    className: _.container,
    children: i.map(e => (0, n.jsxs)("div", {
      className: _.row,
      children: [(0, n.jsx)("img", {
        alt: "",
        src: null == e.image_asset ? void 0 : (0, o._W)(e.application_id, e.image_asset, 512),
        className: l()(_.rowIcon, _.listingImage)
      }), (0, n.jsxs)("div", {
        className: _.rowBody,
        children: [(0, n.jsx)(a.Text, {
          variant: "text-md/normal",
          color: "header-primary",
          className: l()(_.rowText, _.listingName),
          children: e.name
        }), (0, n.jsx)(a.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          children: E.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_IMPORT_NUM_BENEFITS.format({
            channels: e.role_benefits.benefits.filter(c.rC).length,
            benefits: e.role_benefits.benefits.filter(c.lL).length
          })
        })]
      }), (0, n.jsx)(a.Button, {
        look: a.Button.Looks.OUTLINED,
        color: a.Button.Colors.PRIMARY,
        onClick: () => {
          var i;
          return i = e, void(0, a.openModal)(e => (0, n.jsx)(u.K, {
            ...e,
            fromSubscriptionListing: i,
            existingChannelBenefits: s,
            existingIntangibleBenefits: t,
            onSubmit: r
          }))
        },
        disabled: I,
        children: E.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_IMPORT_BUTTON
      })]
    }, e.id))
  })
}

function T(e) {
  let {
    guildId: s,
    onImport: t,
    disabled: i = !1
  } = e;
  return (0, n.jsxs)(a.Clickable, {
    className: l()(_.importRoleCard, {
      [_.disabled]: i
    }),
    onClick: i ? void 0 : function() {
      (0, a.openModal)(e => (0, n.jsx)(u.C, {
        ...e,
        guildId: s,
        onImport: t
      }))
    },
    "aria-disabled": i,
    children: [(0, n.jsx)(a.ShieldUserIcon, {
      size: "custom",
      width: 23,
      height: 23,
      color: "currentColor",
      className: _.rowIcon
    }), (0, n.jsx)(a.Text, {
      variant: "text-md/normal",
      color: "header-primary",
      className: _.rowText,
      children: E.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_IMPORT_SELECT_ROLE
    }), (0, n.jsx)(r.Z, {
      direction: r.Z.Directions.RIGHT,
      className: _.caret
    })]
  })
}