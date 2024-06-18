"use strict";
t.d(s, {
  Z: function() {
    return j
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
  u = t(442837),
  E = t(692547),
  _ = t(215569),
  I = t(481060),
  T = t(484614),
  N = t(852860),
  m = t(782568),
  S = t(367907),
  h = t(674180),
  g = t(999382),
  C = t(626135),
  x = t(730647),
  R = t(584825),
  L = t(981631),
  O = t(689938),
  A = t(117770);
let p = [14361481, 12200937, 8804082, 6576370, 5335282, 2652110, 2128781, 2196594, 4752414, 13064760, 13058360, 12401e3, 12933021, 5659039, 4092591, 5868359, 6586142, 8876063, 8484432, 9979976, 5269106, 3421236],
  M = /^(https?:\/\/)?(?:m\.|www\.)?(youtu\.be|youtube\.com)\/(embed\/|v\/|watch\?v=|watch\?.+&v=)?((\w|-){11})(?:\S+)?$/,
  f = p[4],
  D = e => {
    var s, t;
    let {
      guild: l,
      canEnable: r
    } = e, c = (0, R.YB)(l.id), {
      loading: u,
      updateSubscriptionsSettings: g
    } = (0, R.QV)(), [x, D] = i.useState(l.hasFeature(L.oNc.CREATOR_STORE_PAGE)), [v, j] = i.useState(null !== (s = null == c ? void 0 : c.store_page_primary_color) && void 0 !== s ? s : f), [Z, U] = i.useState(null == c ? void 0 : c.store_page_trailer_url), G = null == Z || null != Z.match(M), [P, b] = i.useState(null !== (t = null == c ? void 0 : c.store_page_show_subscriber_count) && void 0 !== t && t), B = i.useRef(null == c ? void 0 : c.store_page_slug).current, y = x !== l.hasFeature(L.oNc.CREATOR_STORE_PAGE) || (null == c ? void 0 : c.store_page_primary_color) == null && v !== f || (null == c ? void 0 : c.store_page_primary_color) != null && v !== (null == c ? void 0 : c.store_page_primary_color) || Z !== (null == c ? void 0 : c.store_page_trailer_url) || null != P && P !== (null == c ? void 0 : c.store_page_show_subscriber_count), F = async () => {
      o()(null != c, "Settings must be defined");
      let e = {};
      x !== l.hasFeature(L.oNc.CREATOR_STORE_PAGE) && (e.store_page_enabled = x), ((null == c ? void 0 : c.store_page_primary_color) == null && v !== f || (null == c ? void 0 : c.store_page_primary_color) != null && v !== (null == c ? void 0 : c.store_page_primary_color)) && (e.store_page_primary_color = v), Z !== (null == c ? void 0 : c.store_page_trailer_url) && (e.store_page_trailer_url = Z), P !== (null == c ? void 0 : c.store_page_show_subscriber_count) && (e.store_page_show_subscriber_count = P), !d().isEmpty(e) && (await g(l.id, e), "store_page_enabled" in e && C.default.track(L.rMx.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_TOGGLED, {
        enabled: x,
        ...(0, S.hH)(l.id)
      }))
    }, k = L.EYA.ROLE_SUBSCRIPTION_STORE_PAGE(B), H = null != Z && Z === (null == c ? void 0 : c.store_page_trailer_url), {
      shouldRestrictUpdatingCreatorMonetizationSettings: w
    } = (0, h.gX)(l.id), V = w || !G;
    return (0, n.jsxs)("div", {
      children: [(0, n.jsx)(I.FormTitle, {
        tag: "h1",
        children: O.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_TITLE
      }), (0, n.jsx)(I.FormText, {
        type: I.FormText.Types.DESCRIPTION,
        children: O.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_DESCRIPTION
      }), (0, n.jsx)(I.FormSwitch, {
        className: A.enableSwitch,
        value: x,
        disabled: w || !x && !r,
        tooltipNote: x || r ? void 0 : O.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_PRIMARY_TOGGLE_DISABLED_TOOLTIP,
        hideBorder: !0,
        onChange: e => D(e),
        children: (0, n.jsx)(I.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: O.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_ENABLE
        })
      }), (0, n.jsxs)(I.FormItem, {
        title: O.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_PROMO_URL,
        disabled: w,
        children: [(0, n.jsx)(T.Z, {
          value: k,
          className: a()({
            [A.disabled]: w
          })
        }), (0, n.jsx)(I.Button, {
          onClick: () => (0, m.Z)(k),
          className: A.openPageButton,
          disabled: w,
          children: O.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_GO_TO_PAGE
        })]
      }), (0, n.jsx)(I.FormDivider, {
        className: A.divider
      }), (0, n.jsxs)(I.FormItem, {
        title: O.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_ACCENT_COLOR_TITLE,
        disabled: w,
        children: [(0, n.jsx)(I.FormText, {
          disabled: w,
          children: O.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_ACCENT_COLOR_DESCRIPTION
        }), (0, n.jsxs)("div", {
          className: A.accentColorContainer,
          children: [(0, n.jsx)(I.Button, {
            onClick: () => null,
            color: I.Button.Colors.CUSTOM,
            style: {
              backgroundColor: "#".concat(v.toString(16).padStart(6, "0"))
            },
            className: A.buttonPreview,
            disabled: w,
            children: O.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_ACCENT_COLOR_BUTTON_PREVIEW
          }), (0, n.jsx)(I.ColorPicker, {
            colors: p,
            customColor: null,
            defaultColor: f,
            value: v,
            onChange: e => j(e),
            renderDefaultButton: () => null,
            renderCustomButton: () => null,
            colorContainerClassName: A.hideColorButtons,
            disabled: w
          })]
        })]
      }), (0, n.jsx)(I.FormDivider, {
        className: A.divider
      }), (0, n.jsxs)(I.FormItem, {
        title: O.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_TRAILER_TITLE,
        disabled: w,
        children: [(0, n.jsx)(I.FormText, {
          disabled: w,
          children: O.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_TRAILER_DESCRIPTION
        }), (0, n.jsx)(I.TextInput, {
          value: null != Z ? Z : void 0,
          onChange: e => U("" === e ? null : e),
          error: G ? null : O.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_TRAILER_BAD_LINK,
          placeholder: O.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_TRAILER_PLACEHOLDER,
          className: A.trailerInputWrapper,
          inputClassName: a()(A.trailerInput, {
            [A.error]: !G,
            [A.trailerInputWithCheckmark]: H || !G
          }),
          prefixElement: G && H && (0, n.jsx)(I.CircleCheckIcon, {
            size: "md",
            color: E.Z.unsafe_rawColors.BRAND_500.css,
            secondaryColor: E.Z.unsafe_rawColors.WHITE_500.css,
            className: A.inputCheckmark
          }),
          disabled: w
        })]
      }), (0, n.jsx)(I.FormDivider, {
        className: A.divider
      }), (0, n.jsxs)(I.FormItem, {
        title: O.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_DISPLAY_OPTIONS_TITLE,
        disabled: w,
        children: [(0, n.jsx)(I.FormText, {
          disabled: w,
          children: O.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_DISPLAY_OPTIONS_DESCRIPTION
        }), (0, n.jsx)(I.FormSwitch, {
          className: A.premiumMemberCountSwitchContainer,
          value: P,
          hideBorder: !0,
          onChange: e => b(e),
          disabled: w,
          children: (0, n.jsxs)("div", {
            className: A.iconSwitchLabel,
            children: [(0, n.jsx)("div", {
              className: A.iconContainer,
              children: (0, n.jsx)(I.UserIcon, {
                size: "custom",
                color: "currentColor",
                width: 28,
                height: 28,
                className: A.premiumMemberCountIcon
              })
            }), (0, n.jsxs)("div", {
              children: [(0, n.jsx)(I.Text, {
                variant: "text-md/medium",
                color: "header-primary",
                children: O.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_DISPLAY_OPTIONS_PREMIUM_MEMBER_COUNT
              }), (0, n.jsx)(I.Text, {
                variant: "text-sm/normal",
                color: "header-secondary",
                children: O.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_DISPLAY_OPTIONS_PREMIUM_MEMBER_COUNT_DESCRIPTION
              })]
            })]
          })
        })]
      }), (0, n.jsx)(_.W, {
        component: "div",
        className: A.contentRegion,
        children: y && (0, n.jsx)(I.SlideIn, {
          children: (0, n.jsx)(N.Z, {
            submitting: u,
            onReset: () => {
              var e, s;
              D(l.hasFeature(L.oNc.CREATOR_STORE_PAGE)), j(null !== (e = null == c ? void 0 : c.store_page_primary_color) && void 0 !== e ? e : f), U(null == c ? void 0 : c.store_page_trailer_url), b(null !== (s = null == c ? void 0 : c.store_page_show_subscriber_count) && void 0 !== s && s)
            },
            onSave: F,
            disabled: V
          })
        })
      })]
    })
  };

function v() {
  let e = (0, u.e7)([g.Z], () => g.Z.getGuild()),
    s = (0, x.f)(),
    t = (0, R.qi)(null == e ? void 0 : e.id).some(e => e.published);
  return null != e && s ? (0, n.jsx)(D, {
    guild: e,
    canEnable: t
  }) : (0, n.jsx)(I.Spinner, {})
}

function j() {
  let e = (0, u.e7)([g.Z], () => g.Z.getGuild());
  return (0, n.jsxs)(x.l, {
    guildId: null == e ? void 0 : e.id,
    refetchOnMount: !0,
    children: [(0, n.jsx)(v, {}), ";"]
  })
}