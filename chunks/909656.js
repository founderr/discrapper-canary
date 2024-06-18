"use strict";
t.d(s, {
  Z: function() {
    return U
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(512722),
  o = t.n(r),
  c = t(392711),
  d = t.n(c),
  u = t(77866),
  E = t(215569),
  _ = t(477690),
  I = t(481060),
  T = t(852860),
  N = t(393238),
  m = t(345861),
  S = t(208567),
  h = t(153124),
  g = t(73346),
  C = t(624138),
  x = t(584825),
  R = t(723047),
  L = t(927954),
  O = t(164e3),
  A = t(587431),
  p = t(293810),
  M = t(333866),
  f = t(689938),
  D = t(857669);
let v = (0, C.Mg)(_.Z.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_OVERVIEW_SETTINGS_MAX_WIDTH);

function j() {
  return [{
    name: f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_SOME_CHANNELS_NAME,
    desc: f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_SOME_CHANNELS_DESCRIPTION,
    value: p.e3.SOME_CHANNELS,
    icon: I.TextIcon
  }, {
    name: f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_ALL_CHANNELS_NAME,
    desc: f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_ALL_CHANNELS_DESCRIPTION,
    value: p.e3.ALL_CHANNELS,
    icon: I.KeyIcon
  }]
}

function Z(e) {
  let {
    value: s,
    "aria-labelledby": t,
    onChange: l,
    disabled: r = !1
  } = e, {
    ref: o,
    width: c
  } = (0, N.Z)(), d = (0, u.Z)(j), E = i.useMemo(() => d.map(e => ({
    ...e,
    icon: function() {
      let {
        icon: s
      } = e;
      return (0, n.jsx)("div", {
        className: D.formatRadioIconWrapper,
        children: (0, n.jsx)(s, {
          className: D.formatRadioIcon
        })
      })
    },
    radioBarClassName: D.formatOptionRadioBar,
    radioItemIconClassName: D.formatOptionRadioItemIcon
  })), [d]), _ = null != c && c >= 400;
  return (0, n.jsx)("div", {
    ref: o,
    children: (0, n.jsx)(I.RadioGroup, {
      options: E,
      value: s,
      orientation: _ ? "horizontal" : "vertical",
      size: I.RadioGroup.Sizes.NONE,
      className: a()({
        [D.radioGroupHorizontal]: _
      }),
      radioItemClassName: D.formatOptionRadioItem,
      onChange: e => {
        let {
          value: s
        } = e;
        return l(s)
      },
      "aria-labelledby": t,
      disabled: r
    })
  })
}

function U(e) {
  var s;
  let {
    guild: t,
    isGuildProducts: l = !1
  } = e, {
    format: a
  } = (0, O.Z)(t.id), r = (0, x.YB)(t.id), c = i.useCallback(() => {
    var e;
    return (null == r ? void 0 : null === (e = r.cover_image_asset) || void 0 === e ? void 0 : e.application_id) == null ? null : (0, g._W)(r.cover_image_asset.application_id, r.cover_image_asset, v)
  }, [r]), [u, _] = i.useState(a), [N, C] = i.useState(null !== (s = null == r ? void 0 : r.description) && void 0 !== s ? s : ""), [j, U] = i.useState(c), [G, P] = i.useState(null == r ? void 0 : r.store_page_guild_products_default_sort), [b, B] = i.useState(null == r ? void 0 : r.server_shop_tab_order), {
    loading: y,
    error: F,
    updateSubscriptionsSettings: k
  } = (0, x.QV)(), {
    imageCTA: H,
    imageAriaLabel: w,
    setFilename: V
  } = (0, L.Z)(null == r ? void 0 : r.cover_image_asset), Y = (0, h.Dt)(), W = (0, h.Dt)(), z = (0, h.Dt)();

  function K(e, s) {
    o()(null != e, "Null value not allowed"), null != s && V(s.name), U(e)
  }
  let q = i.useMemo(() => {
      var e;
      return null != N && N !== (null !== (e = null == r ? void 0 : r.description) && void 0 !== e ? e : "") || (null == j ? void 0 : j.startsWith("data:")) === !0 || u !== a || (null == r ? void 0 : r.store_page_guild_products_default_sort) !== G || (null == r ? void 0 : r.server_shop_tab_order) !== b
    }, [j, a, N, r, u, G, b]),
    X = null != N && "" !== N && null != j;
  i.useEffect(() => {
    var e;
    (null == r ? void 0 : null === (e = r.cover_image_asset) || void 0 === e ? void 0 : e.application_id) != null && U((0, g._W)(r.cover_image_asset.application_id, r.cover_image_asset, v))
  }, [null == r ? void 0 : r.cover_image_asset]);
  let Q = (0, R.mY)(),
    J = i.useMemo(() => M.kL.map(e => ({
      label: (0, M.eJ)(e),
      value: e
    })), []),
    $ = i.useMemo(() => [{
      label: f.Z.Messages.GUILD_PRODUCTS_TITLE,
      value: M.a3.PRODUCTS_FIRST
    }, {
      label: f.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE,
      value: M.a3.SUBS_FIRST
    }], []);
  return (0, n.jsxs)("div", {
    className: D.container,
    children: [null != F && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(A.Z, {
        children: F.getAnyErrorMessage()
      }), (0, n.jsx)(I.Spacer, {
        size: 16
      })]
    }), l ? null : (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsxs)(I.FormSection, {
        title: f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_TITLE,
        titleId: Y,
        disabled: Q,
        children: [(0, n.jsx)(I.FormText, {
          type: I.FormText.Types.DESCRIPTION,
          className: D.formDescription,
          disabled: Q,
          children: f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_DESCRIPTION
        }), (0, n.jsx)(Z, {
          value: u,
          onChange: e => {
            a !== e && e === p.e3.ALL_CHANNELS && (0, I.openModal)(e => (0, n.jsx)(I.ConfirmModal, {
              ...e,
              header: f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_ALL_CHANNELS_DIALOG_TITLE,
              confirmText: f.Z.Messages.GOT_IT,
              confirmButtonColor: I.Button.Colors.BRAND,
              children: (0, n.jsx)(I.Text, {
                variant: "text-md/normal",
                children: f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_ALL_CHANNELS_DIALOG_TEXT
              })
            })), _(e)
          },
          "aria-labelledby": Y,
          disabled: Q
        })]
      }), (0, n.jsx)(I.FormDivider, {
        className: D.divider
      })]
    }), (0, n.jsx)(I.FormSection, {
      title: f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INFO_DESCRIPTION_TITLE,
      titleId: W,
      disabled: Q,
      children: (0, n.jsx)(I.TextArea, {
        placeholder: l ? f.Z.Messages.GUILD_PRODUCT_SETUP_INFO_DESCRIPTION_PLACEHOLDER : f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INFO_DESCRIPTION_PLACEHOLDER,
        maxLength: 1500,
        value: N,
        rows: 2,
        autosize: !0,
        onChange: C,
        "aria-labelledby": W,
        disabled: Q
      })
    }), (0, n.jsx)(I.FormDivider, {
      className: D.divider
    }), (0, n.jsxs)(I.FormSection, {
      title: f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INFO_COVER_IMAGE_TITLE,
      disabled: Q,
      children: [(0, n.jsx)(I.FormText, {
        type: I.FormText.Types.DESCRIPTION,
        className: D.formDescription,
        disabled: Q,
        children: f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INFO_COVER_IMAGE_DESCRIPTION
      }), (0, n.jsx)(S.Z, {
        image: j,
        hint: H,
        showIcon: !0,
        showRemoveButton: !1,
        hideSize: !0,
        className: D.coverImageUploader,
        iconWrapperClassName: D.coverImageUploaderIconWrapper,
        imageClassName: D.coverImageUploaderInner,
        iconClassName: D.coverImageUploaderIcon,
        onChange: K,
        "aria-label": w,
        disabled: Q
      }), (0, n.jsx)(I.Spacer, {
        size: 16
      }), (0, n.jsx)(m.Z, {
        onChange: K,
        buttonCTA: H,
        "aria-label": w,
        disabled: Q,
        look: I.Button.Looks.OUTLINED,
        color: I.Button.Colors.PRIMARY
      })]
    }), l ? (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(I.FormDivider, {
        className: D.divider
      }), (0, n.jsxs)(I.FormSection, {
        title: f.Z.Messages.CREATOR_MONETIZATION_SETTINGS_GUILD_PRODUCT_SORT_OPTION_TITLE,
        titleId: z,
        disabled: Q,
        children: [(0, n.jsx)(I.FormText, {
          type: I.FormText.Types.DESCRIPTION,
          className: D.formDescription,
          disabled: Q,
          children: f.Z.Messages.CREATOR_MONETIZATION_SETTINGS_GUILD_PRODUCT_SORT_OPTION_DESCRIPTION
        }), (0, n.jsx)(I.SingleSelect, {
          value: G,
          placeholder: f.Z.Messages.SELECT,
          options: J,
          onChange: e => P(e)
        })]
      })]
    }) : null, $.length > 0 && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(I.FormDivider, {
        className: D.divider
      }), (0, n.jsxs)(I.FormSection, {
        title: f.Z.Messages.CREATOR_MONETIZATION_SETTINGS_SERVER_SHOP_DEFAULT_TAB_OPTION_TITLE,
        titleId: z,
        disabled: Q,
        children: [(0, n.jsx)(I.FormText, {
          type: I.FormText.Types.DESCRIPTION,
          className: D.formDescription,
          disabled: Q,
          children: f.Z.Messages.CREATOR_MONETIZATION_SETTINGS_SERVER_SHOP_DEFAULT_TAB_OPTION_DESCRIPTION
        }), (0, n.jsx)(I.SingleSelect, {
          value: b,
          placeholder: f.Z.Messages.SELECT,
          options: $,
          onChange: e => B(e)
        })]
      })]
    }), (0, n.jsx)(E.W, {
      component: "div",
      className: D.contentRegion,
      children: q && (0, n.jsx)(I.SlideIn, {
        children: (0, n.jsx)(T.Z, {
          submitting: y,
          disabled: !X,
          onReset: () => {
            var e;
            _(a), C(null !== (e = null == r ? void 0 : r.description) && void 0 !== e ? e : ""), U(c), P(null == r ? void 0 : r.store_page_guild_products_default_sort), B(null == r ? void 0 : r.server_shop_tab_order)
          },
          onSave: () => {
            o()(null != r, "Settings must be defined");
            let e = {};
            N !== r.description && (e.description = N), null != j && j.startsWith("data:") && (e.cover_image = j), u !== a && (e.full_server_gate = u === p.e3.ALL_CHANNELS), G !== r.store_page_guild_products_default_sort && (e.store_page_guild_products_default_sort = G), b !== r.server_shop_tab_order && (e.server_shop_tab_order = b), !d().isEmpty(e) && k(t.id, e)
          },
          saveButtonTooltip: X ? void 0 : f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INFO_FULL_OUT_ALL_INFO
        })
      })
    })]
  })
}