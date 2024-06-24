t.d(n, {
  h: function() {
    return h
  },
  x: function() {
    return R
  }
});
var i = t(735250);
t(470079);
var l = t(120356),
  s = t.n(l),
  r = t(442837),
  a = t(481060),
  o = t(596454),
  u = t(131388),
  c = t(409813),
  d = t(430824),
  _ = t(73346),
  I = t(817460),
  E = t(584825),
  C = t(570533),
  m = t(629262),
  S = t(575460),
  N = t(293810),
  T = t(689938),
  L = t(538568);
let h = e => {
    let {
      onClose: n,
      listing: t,
      step: l,
      guildId: r
    } = e, o = (0, E.YB)(r), d = (0, u.Z)(N.Xy), I = (() => {
      var e;
      if (d) return null;
      let n = (null == o ? void 0 : null === (e = o.cover_image_asset) || void 0 === e ? void 0 : e.application_id) != null ? (0, _._W)(o.cover_image_asset.application_id, o.cover_image_asset, 440) : void 0;
      return null == n && l !== c.h8.CONFIRM ? null : null == n ? (0, i.jsx)("div", {
        className: L.headerImageEmpty
      }) : (0, i.jsx)("img", {
        src: n,
        alt: "",
        className: L.headerImage
      })
    })();
    return (0, i.jsxs)("div", {
      className: s()(L.headerContainer, {
        [L.headerEmpty]: d || null == I
      }),
      children: [I, (() => {
        if (l !== c.h8.CONFIRM) return null;
        let e = null == t.image_asset ? void 0 : (0, _._W)(t.application_id, t.image_asset, 80);
        return (0, i.jsx)("div", {
          className: L.tierImageContainer,
          children: (0, i.jsx)("img", {
            src: e,
            alt: "",
            className: L.tierImage
          })
        })
      })(), (0, i.jsx)(a.Clickable, {
        className: L.closeContainer,
        onClick: () => n(!1),
        "aria-label": T.Z.Messages.CLOSE,
        children: (0, i.jsx)(a.CloseSmallIcon, {
          size: "md",
          color: "currentColor",
          className: L.closeIcon
        })
      })]
    })
  },
  R = e => {
    let {
      onClose: n,
      listing: t,
      guildId: l
    } = e, s = (0, r.e7)([d.Z], () => d.Z.getGuild(l), [l]), u = (0, C.Z)(l).filter(e => e.roles.includes(t.role_id)), c = t.role_benefits.benefits.filter(I.rC).slice(0, null === u.length ? 4 : 3), _ = (0, m.Z)(c).slice(0, null === u.length ? 4 : 3);
    return (0, i.jsxs)("div", {
      className: L.confirmationContainer,
      children: [(0, i.jsx)(a.Heading, {
        className: L.confirmationHeader,
        variant: "heading-xl/semibold",
        color: "header-secondary",
        children: T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE.format({
          serverName: null == s ? void 0 : s.toString()
        })
      }), (0, i.jsx)(a.Text, {
        className: L.confirmationSubtitle,
        variant: "text-md/normal",
        color: "header-secondary",
        children: T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
          tier: t.name
        })
      }), _.length > 0 && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: L.confirmationSectionLabel,
          children: T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CHANNEL_PREVIEW
        }), (0, i.jsx)("div", {
          className: L.confirmationBenefits,
          children: _.map(e => (0, i.jsx)(S.Z, {
            benefit: e,
            guildId: l,
            onClick: () => n(!0)
          }, (0, I.ab)(e)))
        })]
      }), (() => {
        var e;
        if (0 === u.length) return null;
        let n = u[0];
        return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(a.Text, {
            variant: "text-xs/medium",
            color: "header-secondary",
            className: L.confirmationSectionLabel,
            children: T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_PREMIUM_EMOJI_PREVIEW_TITLE
          }), (0, i.jsxs)("div", {
            className: L.emojiBenefitsRow,
            children: [(0, i.jsx)(o.Z, {
              emojiId: n.id,
              emojiName: n.name,
              animated: null !== (e = n.animated) && void 0 !== e && e,
              className: L.emojiImage
            }), (0, i.jsxs)("div", {
              children: [(0, i.jsx)(a.Text, {
                variant: "text-md/medium",
                color: "header-primary",
                className: L.emojiName,
                children: T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_PREMIUM_EMOJI_BENEFIT_TEXT
              }), (0, i.jsx)(a.Text, {
                color: "interactive-normal",
                variant: "text-sm/normal",
                children: T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_PREMIUM_EMOJI_BENEFIT_DESCRIPTION.format({
                  count: u.length
                })
              })]
            })]
          })]
        })
      })(), (0, i.jsx)(a.Button, {
        className: L.confirmationButton,
        onClick: () => n(!0),
        children: T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
      })]
    })
  }