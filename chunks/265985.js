n.d(t, {
  h: function() {
    return A
  },
  x: function() {
    return g
  }
});
var s = n(735250);
n(470079);
var i = n(120356),
  l = n.n(i),
  a = n(442837),
  r = n(481060),
  o = n(596454),
  c = n(131388),
  u = n(409813),
  d = n(430824),
  E = n(73346),
  _ = n(817460),
  I = n(584825),
  T = n(570533),
  m = n(629262),
  N = n(575460),
  h = n(293810),
  C = n(689938),
  S = n(538568);
let A = e => {
    let {
      onClose: t,
      listing: n,
      step: i,
      guildId: a
    } = e, o = (0, I.YB)(a), d = (0, c.Z)(h.Xy), _ = (() => {
      var e;
      if (d) return null;
      let t = (null == o ? void 0 : null === (e = o.cover_image_asset) || void 0 === e ? void 0 : e.application_id) != null ? (0, E._W)(o.cover_image_asset.application_id, o.cover_image_asset, 440) : void 0;
      return null == t && i !== u.h8.CONFIRM ? null : null == t ? (0, s.jsx)("div", {
        className: S.headerImageEmpty
      }) : (0, s.jsx)("img", {
        src: t,
        alt: "",
        className: S.headerImage
      })
    })();
    return (0, s.jsxs)("div", {
      className: l()(S.headerContainer, {
        [S.headerEmpty]: d || null == _
      }),
      children: [_, (() => {
        if (i !== u.h8.CONFIRM) return null;
        let e = null == n.image_asset ? void 0 : (0, E._W)(n.application_id, n.image_asset, 80);
        return (0, s.jsx)("div", {
          className: S.tierImageContainer,
          children: (0, s.jsx)("img", {
            src: e,
            alt: "",
            className: S.tierImage
          })
        })
      })(), (0, s.jsx)(r.Clickable, {
        className: S.closeContainer,
        onClick: () => t(!1),
        "aria-label": C.Z.Messages.CLOSE,
        children: (0, s.jsx)(r.CloseSmallIcon, {
          size: "md",
          color: "currentColor",
          className: S.closeIcon
        })
      })]
    })
  },
  g = e => {
    let {
      onClose: t,
      listing: n,
      guildId: i
    } = e, l = (0, a.e7)([d.Z], () => d.Z.getGuild(i), [i]), c = (0, T.Z)(i).filter(e => e.roles.includes(n.role_id)), u = n.role_benefits.benefits.filter(_.rC).slice(0, null === c.length ? 4 : 3), E = (0, m.Z)(u).slice(0, null === c.length ? 4 : 3);
    return (0, s.jsxs)("div", {
      className: S.confirmationContainer,
      children: [(0, s.jsx)(r.Heading, {
        className: S.confirmationHeader,
        variant: "heading-xl/semibold",
        color: "header-secondary",
        children: C.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE.format({
          serverName: null == l ? void 0 : l.toString()
        })
      }), (0, s.jsx)(r.Text, {
        className: S.confirmationSubtitle,
        variant: "text-md/normal",
        color: "header-secondary",
        children: C.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
          tier: n.name
        })
      }), E.length > 0 && (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(r.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: S.confirmationSectionLabel,
          children: C.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CHANNEL_PREVIEW
        }), (0, s.jsx)("div", {
          className: S.confirmationBenefits,
          children: E.map(e => (0, s.jsx)(N.Z, {
            benefit: e,
            guildId: i,
            onClick: () => t(!0)
          }, (0, _.ab)(e)))
        })]
      }), (() => {
        var e;
        if (0 === c.length) return null;
        let t = c[0];
        return (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(r.Text, {
            variant: "text-xs/medium",
            color: "header-secondary",
            className: S.confirmationSectionLabel,
            children: C.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_PREMIUM_EMOJI_PREVIEW_TITLE
          }), (0, s.jsxs)("div", {
            className: S.emojiBenefitsRow,
            children: [(0, s.jsx)(o.Z, {
              emojiId: t.id,
              emojiName: t.name,
              animated: null !== (e = t.animated) && void 0 !== e && e,
              className: S.emojiImage
            }), (0, s.jsxs)("div", {
              children: [(0, s.jsx)(r.Text, {
                variant: "text-md/medium",
                color: "header-primary",
                className: S.emojiName,
                children: C.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_PREMIUM_EMOJI_BENEFIT_TEXT
              }), (0, s.jsx)(r.Text, {
                color: "interactive-normal",
                variant: "text-sm/normal",
                children: C.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_PREMIUM_EMOJI_BENEFIT_DESCRIPTION.format({
                  count: c.length
                })
              })]
            })]
          })]
        })
      })(), (0, s.jsx)(r.Button, {
        className: S.confirmationButton,
        onClick: () => t(!0),
        children: C.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
      })]
    })
  }