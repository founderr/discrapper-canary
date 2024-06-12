"use strict";
s.r(t), s.d(t, {
  default: function() {
    return b
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("120356"),
  i = s.n(n),
  r = s("512722"),
  o = s.n(r),
  d = s("392711"),
  u = s.n(d),
  c = s("207561"),
  E = s("215569"),
  _ = s("477690"),
  I = s("481060"),
  T = s("852860"),
  S = s("393238"),
  f = s("345861"),
  m = s("208567"),
  N = s("153124"),
  g = s("93879"),
  h = s("385950"),
  C = s("73346"),
  R = s("624138"),
  x = s("584825"),
  L = s("723047"),
  O = s("927954"),
  p = s("164000"),
  A = s("587431"),
  M = s("293810"),
  D = s("333866"),
  v = s("689938"),
  j = s("738961");
let G = (0, R.cssValueToNumber)(_.default.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_OVERVIEW_SETTINGS_MAX_WIDTH);

function U() {
  return [{
    name: v.default.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_SOME_CHANNELS_NAME,
    desc: v.default.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_SOME_CHANNELS_DESCRIPTION,
    value: M.GuildRoleSubscriptionFormat.SOME_CHANNELS,
    icon: g.default
  }, {
    name: v.default.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_ALL_CHANNELS_NAME,
    desc: v.default.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_ALL_CHANNELS_DESCRIPTION,
    value: M.GuildRoleSubscriptionFormat.ALL_CHANNELS,
    icon: h.default
  }]
}

function P(e) {
  let {
    value: t,
    "aria-labelledby": s,
    onChange: n,
    disabled: r = !1
  } = e, {
    ref: o,
    width: d
  } = (0, S.default)(), u = (0, c.useLazyValue)(U), E = l.useMemo(() => u.map(e => ({
    ...e,
    icon: function() {
      let {
        icon: t
      } = e;
      return (0, a.jsx)("div", {
        className: j.formatRadioIconWrapper,
        children: (0, a.jsx)(t, {
          className: j.formatRadioIcon
        })
      })
    },
    radioBarClassName: j.formatOptionRadioBar,
    radioItemIconClassName: j.formatOptionRadioItemIcon
  })), [u]), _ = null != d && d >= 400;
  return (0, a.jsx)("div", {
    ref: o,
    children: (0, a.jsx)(I.RadioGroup, {
      options: E,
      value: t,
      orientation: _ ? "horizontal" : "vertical",
      size: I.RadioGroup.Sizes.NONE,
      className: i()({
        [j.radioGroupHorizontal]: _
      }),
      radioItemClassName: j.formatOptionRadioItem,
      onChange: e => {
        let {
          value: t
        } = e;
        return n(t)
      },
      "aria-labelledby": s,
      disabled: r
    })
  })
}

function b(e) {
  var t;
  let {
    guild: s,
    isGuildProducts: n = !1
  } = e, {
    format: i
  } = (0, p.default)(s.id), r = (0, x.useSubscriptionsSettings)(s.id), d = l.useCallback(() => {
    var e;
    return (null == r ? void 0 : null === (e = r.cover_image_asset) || void 0 === e ? void 0 : e.application_id) == null ? null : (0, C.getAssetURL)(r.cover_image_asset.application_id, r.cover_image_asset, G)
  }, [r]), [c, _] = l.useState(i), [S, g] = l.useState(null !== (t = null == r ? void 0 : r.description) && void 0 !== t ? t : ""), [h, R] = l.useState(d), [U, b] = l.useState(null == r ? void 0 : r.store_page_guild_products_default_sort), [y, B] = l.useState(null == r ? void 0 : r.server_shop_tab_order), {
    loading: F,
    error: H,
    updateSubscriptionsSettings: k
  } = (0, x.useUpdateSubscriptionsSettings)(), {
    imageCTA: w,
    imageAriaLabel: V,
    setFilename: Y
  } = (0, O.default)(null == r ? void 0 : r.cover_image_asset), W = (0, N.useUID)(), z = (0, N.useUID)(), K = (0, N.useUID)();

  function Z(e, t) {
    o()(null != e, "Null value not allowed"), null != t && Y(t.name), R(e)
  }
  let X = l.useMemo(() => {
      var e;
      return null != S && S !== (null !== (e = null == r ? void 0 : r.description) && void 0 !== e ? e : "") || (null == h ? void 0 : h.startsWith("data:")) === !0 || c !== i || (null == r ? void 0 : r.store_page_guild_products_default_sort) !== U || (null == r ? void 0 : r.server_shop_tab_order) !== y
    }, [h, i, S, r, c, U, y]),
    Q = null != S && "" !== S && null != h;
  l.useEffect(() => {
    var e;
    (null == r ? void 0 : null === (e = r.cover_image_asset) || void 0 === e ? void 0 : e.application_id) != null && R((0, C.getAssetURL)(r.cover_image_asset.application_id, r.cover_image_asset, G))
  }, [null == r ? void 0 : r.cover_image_asset]);
  let J = (0, L.useRoleSubscriptionSettingsDisabled)(),
    q = l.useMemo(() => D.DISPLAYED_SORT_OPTIONS.map(e => ({
      label: (0, D.getGuildProductSortOptionLabel)(e),
      value: e
    })), []),
    $ = l.useMemo(() => [{
      label: v.default.Messages.GUILD_PRODUCTS_TITLE,
      value: D.ServerShopTabOrder.PRODUCTS_FIRST
    }, {
      label: v.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE,
      value: D.ServerShopTabOrder.SUBS_FIRST
    }], []);
  return (0, a.jsxs)("div", {
    className: j.container,
    children: [null != H && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(A.default, {
        children: H.getAnyErrorMessage()
      }), (0, a.jsx)(I.Spacer, {
        size: 16
      })]
    }), n ? null : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(I.FormSection, {
        title: v.default.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_TITLE,
        titleId: W,
        disabled: J,
        children: [(0, a.jsx)(I.FormText, {
          type: I.FormText.Types.DESCRIPTION,
          className: j.formDescription,
          disabled: J,
          children: v.default.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_DESCRIPTION
        }), (0, a.jsx)(P, {
          value: c,
          onChange: e => {
            i !== e && e === M.GuildRoleSubscriptionFormat.ALL_CHANNELS && (0, I.openModal)(e => (0, a.jsx)(I.ConfirmModal, {
              ...e,
              header: v.default.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_ALL_CHANNELS_DIALOG_TITLE,
              confirmText: v.default.Messages.GOT_IT,
              confirmButtonColor: I.Button.Colors.BRAND,
              children: (0, a.jsx)(I.Text, {
                variant: "text-md/normal",
                children: v.default.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_ALL_CHANNELS_DIALOG_TEXT
              })
            })), _(e)
          },
          "aria-labelledby": W,
          disabled: J
        })]
      }), (0, a.jsx)(I.FormDivider, {
        className: j.divider
      })]
    }), (0, a.jsx)(I.FormSection, {
      title: v.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INFO_DESCRIPTION_TITLE,
      titleId: z,
      disabled: J,
      children: (0, a.jsx)(I.TextArea, {
        placeholder: n ? v.default.Messages.GUILD_PRODUCT_SETUP_INFO_DESCRIPTION_PLACEHOLDER : v.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INFO_DESCRIPTION_PLACEHOLDER,
        maxLength: 1500,
        value: S,
        rows: 2,
        autosize: !0,
        onChange: g,
        "aria-labelledby": z,
        disabled: J
      })
    }), (0, a.jsx)(I.FormDivider, {
      className: j.divider
    }), (0, a.jsxs)(I.FormSection, {
      title: v.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INFO_COVER_IMAGE_TITLE,
      disabled: J,
      children: [(0, a.jsx)(I.FormText, {
        type: I.FormText.Types.DESCRIPTION,
        className: j.formDescription,
        disabled: J,
        children: v.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INFO_COVER_IMAGE_DESCRIPTION
      }), (0, a.jsx)(m.default, {
        image: h,
        hint: w,
        showIcon: !0,
        showRemoveButton: !1,
        hideSize: !0,
        className: j.coverImageUploader,
        iconWrapperClassName: j.coverImageUploaderIconWrapper,
        imageClassName: j.coverImageUploaderInner,
        iconClassName: j.coverImageUploaderIcon,
        onChange: Z,
        "aria-label": V,
        disabled: J
      }), (0, a.jsx)(I.Spacer, {
        size: 16
      }), (0, a.jsx)(f.default, {
        onChange: Z,
        buttonCTA: w,
        "aria-label": V,
        disabled: J,
        look: I.Button.Looks.OUTLINED,
        color: I.Button.Colors.PRIMARY
      })]
    }), n ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(I.FormDivider, {
        className: j.divider
      }), (0, a.jsxs)(I.FormSection, {
        title: v.default.Messages.CREATOR_MONETIZATION_SETTINGS_GUILD_PRODUCT_SORT_OPTION_TITLE,
        titleId: K,
        disabled: J,
        children: [(0, a.jsx)(I.FormText, {
          type: I.FormText.Types.DESCRIPTION,
          className: j.formDescription,
          disabled: J,
          children: v.default.Messages.CREATOR_MONETIZATION_SETTINGS_GUILD_PRODUCT_SORT_OPTION_DESCRIPTION
        }), (0, a.jsx)(I.SingleSelect, {
          value: U,
          placeholder: v.default.Messages.SELECT,
          options: q,
          onChange: e => b(e)
        })]
      })]
    }) : null, $.length > 0 && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(I.FormDivider, {
        className: j.divider
      }), (0, a.jsxs)(I.FormSection, {
        title: v.default.Messages.CREATOR_MONETIZATION_SETTINGS_SERVER_SHOP_DEFAULT_TAB_OPTION_TITLE,
        titleId: K,
        disabled: J,
        children: [(0, a.jsx)(I.FormText, {
          type: I.FormText.Types.DESCRIPTION,
          className: j.formDescription,
          disabled: J,
          children: v.default.Messages.CREATOR_MONETIZATION_SETTINGS_SERVER_SHOP_DEFAULT_TAB_OPTION_DESCRIPTION
        }), (0, a.jsx)(I.SingleSelect, {
          value: y,
          placeholder: v.default.Messages.SELECT,
          options: $,
          onChange: e => B(e)
        })]
      })]
    }), (0, a.jsx)(E.TransitionGroup, {
      component: "div",
      className: j.contentRegion,
      children: X && (0, a.jsx)(I.SlideIn, {
        children: (0, a.jsx)(T.default, {
          submitting: F,
          disabled: !Q,
          onReset: () => {
            var e;
            _(i), g(null !== (e = null == r ? void 0 : r.description) && void 0 !== e ? e : ""), R(d), b(null == r ? void 0 : r.store_page_guild_products_default_sort), B(null == r ? void 0 : r.server_shop_tab_order)
          },
          onSave: () => {
            o()(null != r, "Settings must be defined");
            let e = {};
            S !== r.description && (e.description = S), null != h && h.startsWith("data:") && (e.cover_image = h), c !== i && (e.full_server_gate = c === M.GuildRoleSubscriptionFormat.ALL_CHANNELS), U !== r.store_page_guild_products_default_sort && (e.store_page_guild_products_default_sort = U), y !== r.server_shop_tab_order && (e.server_shop_tab_order = y), !u().isEmpty(e) && k(s.id, e)
          },
          saveButtonTooltip: Q ? void 0 : v.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INFO_FULL_OUT_ALL_INFO
        })
      })
    })]
  })
}