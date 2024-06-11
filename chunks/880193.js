"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("442837"),
  i = s("481060"),
  r = s("208567"),
  o = s("153124"),
  d = s("540086"),
  u = s("937615"),
  c = s("289393"),
  E = s("723047"),
  _ = s("727843"),
  I = s("290348"),
  T = s("927954"),
  S = s("783454"),
  f = s("981631"),
  m = s("689938"),
  N = s("169769"),
  g = s("881744");

function h(e) {
  let {
    priceTiers: t
  } = e, {
    editStateId: s
  } = (0, _.useEditStateContext)(), h = (0, n.useStateFromStores)([c.default], () => {
    var e;
    return null === (e = c.default.getSubscriptionListing(s)) || void 0 === e ? void 0 : e.image_asset
  }), [C, R] = I.useName(s), [x, L] = I.usePriceTier(s), [O, p] = I.useDescription(s), [A, M] = I.useImage(s, 1024), {
    imageCTA: D,
    imageAriaLabel: v,
    setFilename: j
  } = (0, T.default)(h), G = l.useMemo(() => {
    var e;
    return null !== (e = null == t ? void 0 : t.map(e => ({
      value: e,
      label: (0, u.formatPrice)(e, f.CurrencyCodes.USD)
    }))) && void 0 !== e ? e : []
  }, [t]);

  function U(e, t) {
    null != t && j(t.name), M(e)
  }
  let P = (0, E.useRoleSubscriptionSettingsDisabled)(),
    b = (0, o.useUID)(),
    y = (0, o.useUID)(),
    B = (0, o.useUID)();
  return (0, a.jsxs)(S.default, {
    title: m.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_BASIC_INFO_SECTION_TITLE,
    intiallyExpanded: !0,
    children: [(0, a.jsxs)("div", {
      className: g.formSplit,
      children: [(0, a.jsx)("div", {
        className: g.formSplitHalf,
        children: (0, a.jsx)(i.FormSection, {
          title: m.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_NAME_TITLE,
          titleId: b,
          disabled: P,
          children: (0, a.jsx)(i.TextInput, {
            placeholder: m.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_NAME_PLACEHOLDER,
            value: C,
            inputClassName: N.formInput,
            onChange: R,
            "aria-labelledby": b,
            disabled: P
          })
        })
      }), (0, a.jsx)("div", {
        className: g.formSplitHalf,
        children: (0, a.jsx)(i.FormSection, {
          title: m.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_PRICE_TITLE,
          titleId: y,
          disabled: P,
          children: (0, a.jsx)(i.SingleSelect, {
            options: G,
            className: N.formInput,
            isDisabled: P || null == t,
            placeholder: m.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_PRICE_PLACEHOLDER,
            value: x,
            onChange: L,
            maxVisibleItems: 5,
            look: i.SelectLooks.CUSTOM,
            "aria-labelledby": y
          })
        })
      })]
    }), (0, a.jsx)(i.Spacer, {
      size: 24
    }), (0, a.jsx)(i.FormSection, {
      title: m.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DESCRIPTION_TITLE,
      titleId: B,
      disabled: P,
      children: (0, a.jsx)(i.TextArea, {
        placeholder: m.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DESCRIPTION_PLACEHOLDER,
        value: O,
        rows: 2,
        autosize: !0,
        className: N.formInput,
        onChange: p,
        "aria-labelledby": B,
        disabled: P
      })
    }), (0, a.jsx)(i.Spacer, {
      size: 24
    }), (0, a.jsxs)("div", {
      className: g.iconSection,
      children: [(0, a.jsxs)(i.FormSection, {
        title: m.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_SYMBOL_TITLE,
        className: g.iconSectionDescription,
        disabled: P,
        children: [(0, a.jsx)(i.FormText, {
          type: i.FormText.Types.DESCRIPTION,
          className: N.formDescription,
          disabled: P,
          children: m.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_SYMBOL_DESCRIPTION
        }), (0, a.jsx)(d.default, {
          onChange: U,
          buttonCTA: D,
          "aria-label": v,
          disabled: P,
          look: i.Button.Looks.OUTLINED,
          color: i.Button.Colors.PRIMARY
        })]
      }), (0, a.jsx)(r.default, {
        image: A,
        hint: D,
        showIcon: !0,
        showRemoveButton: !1,
        hideSize: !0,
        className: g.iconUploader,
        imageClassName: g.tierSymbolUploaderInner,
        onChange: U,
        "aria-label": v,
        disabled: P
      })]
    })]
  })
}