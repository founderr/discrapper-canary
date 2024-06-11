"use strict";
s.r(t), s.d(t, {
  default: function() {
    return U
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
  c = s("442837"),
  E = s("692547"),
  _ = s("215569"),
  I = s("481060"),
  T = s("484614"),
  S = s("852860"),
  f = s("782568"),
  m = s("367907"),
  N = s("674180"),
  g = s("999382"),
  h = s("441674"),
  C = s("964309"),
  R = s("626135"),
  x = s("730647"),
  L = s("584825"),
  O = s("981631"),
  p = s("689938"),
  A = s("117770");
let M = [14361481, 12200937, 8804082, 6576370, 5335282, 2652110, 2128781, 2196594, 4752414, 13064760, 13058360, 12401e3, 12933021, 5659039, 4092591, 5868359, 6586142, 8876063, 8484432, 9979976, 5269106, 3421236],
  D = /^(https?:\/\/)?(?:m\.|www\.)?(youtu\.be|youtube\.com)\/(embed\/|v\/|watch\?v=|watch\?.+&v=)?((\w|-){11})(?:\S+)?$/,
  v = M[4],
  j = e => {
    var t, s;
    let {
      guild: n,
      canEnable: r
    } = e, d = (0, L.useSubscriptionsSettings)(n.id), {
      loading: c,
      updateSubscriptionsSettings: g
    } = (0, L.useUpdateSubscriptionsSettings)(), [x, j] = l.useState(n.hasFeature(O.GuildFeatures.CREATOR_STORE_PAGE)), [G, U] = l.useState(null !== (t = null == d ? void 0 : d.store_page_primary_color) && void 0 !== t ? t : v), [P, b] = l.useState(null == d ? void 0 : d.store_page_trailer_url), y = null == P || null != P.match(D), [B, F] = l.useState(null !== (s = null == d ? void 0 : d.store_page_show_subscriber_count) && void 0 !== s && s), H = l.useRef(null == d ? void 0 : d.store_page_slug).current, k = x !== n.hasFeature(O.GuildFeatures.CREATOR_STORE_PAGE) || (null == d ? void 0 : d.store_page_primary_color) == null && G !== v || (null == d ? void 0 : d.store_page_primary_color) != null && G !== (null == d ? void 0 : d.store_page_primary_color) || P !== (null == d ? void 0 : d.store_page_trailer_url) || null != B && B !== (null == d ? void 0 : d.store_page_show_subscriber_count), w = async () => {
      o()(null != d, "Settings must be defined");
      let e = {};
      x !== n.hasFeature(O.GuildFeatures.CREATOR_STORE_PAGE) && (e.store_page_enabled = x), ((null == d ? void 0 : d.store_page_primary_color) == null && G !== v || (null == d ? void 0 : d.store_page_primary_color) != null && G !== (null == d ? void 0 : d.store_page_primary_color)) && (e.store_page_primary_color = G), P !== (null == d ? void 0 : d.store_page_trailer_url) && (e.store_page_trailer_url = P), B !== (null == d ? void 0 : d.store_page_show_subscriber_count) && (e.store_page_show_subscriber_count = B), !u().isEmpty(e) && (await g(n.id, e), "store_page_enabled" in e && R.default.track(O.AnalyticEvents.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_TOGGLED, {
        enabled: x,
        ...(0, m.collectGuildAnalyticsMetadata)(n.id)
      }))
    }, V = O.MarketingURLs.ROLE_SUBSCRIPTION_STORE_PAGE(H), Y = null != P && P === (null == d ? void 0 : d.store_page_trailer_url), {
      shouldRestrictUpdatingCreatorMonetizationSettings: W
    } = (0, N.useShouldRestrictUpdatingCreatorMonetizationSettings)(n.id), z = W || !y;
    return (0, a.jsxs)("div", {
      children: [(0, a.jsx)(I.FormTitle, {
        tag: "h1",
        children: p.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_TITLE
      }), (0, a.jsx)(I.FormText, {
        type: I.FormText.Types.DESCRIPTION,
        children: p.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_DESCRIPTION
      }), (0, a.jsx)(I.FormSwitch, {
        className: A.enableSwitch,
        value: x,
        disabled: W || !x && !r,
        tooltipNote: x || r ? void 0 : p.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_PRIMARY_TOGGLE_DISABLED_TOOLTIP,
        hideBorder: !0,
        onChange: e => j(e),
        children: (0, a.jsx)(I.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: p.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_ENABLE
        })
      }), (0, a.jsxs)(I.FormItem, {
        title: p.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_PROMO_URL,
        disabled: W,
        children: [(0, a.jsx)(T.default, {
          value: V,
          className: i()({
            [A.disabled]: W
          })
        }), (0, a.jsx)(I.Button, {
          onClick: () => (0, f.default)(V),
          className: A.openPageButton,
          disabled: W,
          children: p.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_GO_TO_PAGE
        })]
      }), (0, a.jsx)(I.FormDivider, {
        className: A.divider
      }), (0, a.jsxs)(I.FormItem, {
        title: p.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_ACCENT_COLOR_TITLE,
        disabled: W,
        children: [(0, a.jsx)(I.FormText, {
          disabled: W,
          children: p.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_ACCENT_COLOR_DESCRIPTION
        }), (0, a.jsxs)("div", {
          className: A.accentColorContainer,
          children: [(0, a.jsx)(I.Button, {
            onClick: () => null,
            color: I.Button.Colors.CUSTOM,
            style: {
              backgroundColor: "#".concat(G.toString(16).padStart(6, "0"))
            },
            className: A.buttonPreview,
            disabled: W,
            children: p.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_ACCENT_COLOR_BUTTON_PREVIEW
          }), (0, a.jsx)(I.ColorPicker, {
            colors: M,
            customColor: null,
            defaultColor: v,
            value: G,
            onChange: e => U(e),
            renderDefaultButton: () => null,
            renderCustomButton: () => null,
            colorContainerClassName: A.hideColorButtons,
            disabled: W
          })]
        })]
      }), (0, a.jsx)(I.FormDivider, {
        className: A.divider
      }), (0, a.jsxs)(I.FormItem, {
        title: p.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_TRAILER_TITLE,
        disabled: W,
        children: [(0, a.jsx)(I.FormText, {
          disabled: W,
          children: p.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_TRAILER_DESCRIPTION
        }), (0, a.jsx)(I.TextInput, {
          value: null != P ? P : void 0,
          onChange: e => b("" === e ? null : e),
          error: y ? null : p.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_TRAILER_BAD_LINK,
          placeholder: p.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_TRAILER_PLACEHOLDER,
          className: A.trailerInputWrapper,
          inputClassName: i()(A.trailerInput, {
            [A.error]: !y,
            [A.trailerInputWithCheckmark]: Y || !y
          }),
          prefixElement: y && Y && (0, a.jsx)(h.default, {
            color: E.default.unsafe_rawColors.BRAND_500.css,
            backgroundColor: E.default.unsafe_rawColors.WHITE_500.css,
            className: A.inputCheckmark
          }),
          disabled: W
        })]
      }), (0, a.jsx)(I.FormDivider, {
        className: A.divider
      }), (0, a.jsxs)(I.FormItem, {
        title: p.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_DISPLAY_OPTIONS_TITLE,
        disabled: W,
        children: [(0, a.jsx)(I.FormText, {
          disabled: W,
          children: p.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_DISPLAY_OPTIONS_DESCRIPTION
        }), (0, a.jsx)(I.FormSwitch, {
          className: A.premiumMemberCountSwitchContainer,
          value: B,
          hideBorder: !0,
          onChange: e => F(e),
          disabled: W,
          children: (0, a.jsxs)("div", {
            className: A.iconSwitchLabel,
            children: [(0, a.jsx)("div", {
              className: A.iconContainer,
              children: (0, a.jsx)(C.default, {
                width: 28,
                height: 28,
                className: A.premiumMemberCountIcon
              })
            }), (0, a.jsxs)("div", {
              children: [(0, a.jsx)(I.Text, {
                variant: "text-md/medium",
                color: "header-primary",
                children: p.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_DISPLAY_OPTIONS_PREMIUM_MEMBER_COUNT
              }), (0, a.jsx)(I.Text, {
                variant: "text-sm/normal",
                color: "header-secondary",
                children: p.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_DISPLAY_OPTIONS_PREMIUM_MEMBER_COUNT_DESCRIPTION
              })]
            })]
          })
        })]
      }), (0, a.jsx)(_.TransitionGroup, {
        component: "div",
        className: A.contentRegion,
        children: k && (0, a.jsx)(I.SlideIn, {
          children: (0, a.jsx)(S.default, {
            submitting: c,
            onReset: () => {
              var e, t;
              j(n.hasFeature(O.GuildFeatures.CREATOR_STORE_PAGE)), U(null !== (e = null == d ? void 0 : d.store_page_primary_color) && void 0 !== e ? e : v), b(null == d ? void 0 : d.store_page_trailer_url), F(null !== (t = null == d ? void 0 : d.store_page_show_subscriber_count) && void 0 !== t && t)
            },
            onSave: w,
            disabled: z
          })
        })
      })]
    })
  };

function G() {
  let e = (0, c.useStateFromStores)([g.default], () => g.default.getGuild()),
    t = (0, x.useGroupListingsFetchContext)(),
    s = (0, L.useSubscriptionListingsForGuild)(null == e ? void 0 : e.id).some(e => e.published);
  return null != e && t ? (0, a.jsx)(j, {
    guild: e,
    canEnable: s
  }) : (0, a.jsx)(I.Spinner, {})
}

function U() {
  let e = (0, c.useStateFromStores)([g.default], () => g.default.getGuild());
  return (0, a.jsxs)(x.GroupListingsFetchContextProvider, {
    guildId: null == e ? void 0 : e.id,
    refetchOnMount: !0,
    children: [(0, a.jsx)(G, {}), ";"]
  })
}