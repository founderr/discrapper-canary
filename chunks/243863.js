"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
  }
});
var a = s("37983");
s("884691");
var l = s("819855"),
  n = s("77078"),
  i = s("841098"),
  r = s("716241"),
  o = s("685665"),
  d = s("634544"),
  u = s("405645"),
  c = s("379532"),
  E = s("818643"),
  _ = s("483093"),
  I = s("766419"),
  f = s("49111"),
  T = s("944305"),
  S = s("782340"),
  m = s("195072"),
  N = function(e) {
    let {
      guild: t,
      disabled: N,
      role: g
    } = e, h = (0, i.default)(), C = (0, u.useRoleIconForPreview)(t.id, g), {
      analyticsLocations: R
    } = (0, o.default)(), x = () => {
      (0, n.openModalLazy)(async () => {
        let {
          default: e
        } = await s.el("64567").then(s.bind(s, "64567"));
        return s => (0, a.jsx)(e, {
          ...s,
          guildId: t.id,
          onUploadIcon: e => (0, I.updateRoleIcon)(g.id, e, null),
          onSelectUnicodeEmoji: e => (0, I.updateRoleIcon)(g.id, null, e)
        })
      })
    }, L = t.features.has(f.GuildFeatures.ROLE_ICONS), O = e => {
      !L && ((0, r.trackWithMetadata)(f.AnalyticEvents.PREMIUM_GUILD_PROMOTION_OPENED, {
        location: {
          ...e,
          section: f.AnalyticsSections.CUSTOM_ROLE_ICONS_TOOLTIP
        },
        guild_id: null == t ? void 0 : t.id,
        location_stack: R
      }), (0, c.default)({
        analyticsLocations: R,
        analyticsSourceLocation: {
          page: f.AnalyticsPages.GUILD_SETTINGS,
          section: f.AnalyticsSections.GUILD_ROLE_EDIT_UPSELL_MODAL,
          object: f.AnalyticsObjects.BADGE
        },
        guild: t,
        perks: (0, T.customRoleIconUpsellPerks)()
      }))
    }, p = (0, a.jsx)(d.default, {
      className: m.availabilityIndicator,
      guild: t,
      guildFeature: f.GuildFeatures.ROLE_ICONS,
      tooltipPosition: "top",
      hideTooltip: L,
      onClick: () => O({
        object: f.AnalyticsObjects.LEARN_MORE,
        objectType: f.AnalyticsObjectTypes.TIER_2
      })
    });
    return (0, a.jsxs)(n.FormItem, {
      className: m.container,
      children: [(0, a.jsxs)(n.FormTitle, {
        className: m.formTitle,
        children: [(0, a.jsx)("div", {
          children: S.default.Messages.FORM_LABEL_ROLE_ICON
        }), p]
      }), (0, a.jsx)(n.FormText, {
        className: m.description,
        children: S.default.Messages.ROLE_ICON_HELP
      }), (0, a.jsxs)("div", {
        className: m.rolePreviewArea,
        children: [(0, a.jsx)("div", {
          className: m.previewContainer,
          children: null != C ? (0, a.jsx)(_.default, {
            ...C,
            className: m.roleIconPreview,
            enableTooltip: !1
          }) : (0, a.jsx)(E.default, {
            width: 24,
            height: 24,
            className: m.preview
          })
        }), (0, a.jsx)(n.Button, {
          className: m.button,
          color: (0, l.isThemeLight)(h) ? n.Button.Colors.PRIMARY : n.Button.Colors.WHITE,
          look: n.Button.Looks.OUTLINED,
          onClick: () => t.hasFeature(f.GuildFeatures.ROLE_ICONS) ? x() : O({
            object: f.AnalyticsObjects.UPLOAD_IMAGE
          }),
          disabled: N,
          children: S.default.Messages.ROLE_ICON_CHOOSE_IMAGE
        }), null != C ? (0, a.jsx)(n.Button, {
          className: m.button,
          color: (0, l.isThemeLight)(h) ? n.Button.Colors.BLACK : n.Button.Colors.TRANSPARENT,
          look: n.Button.Looks.BLANK,
          onClick: () => {
            (0, I.updateRoleIcon)(g.id, null, null)
          },
          disabled: N,
          children: S.default.Messages.REMOVE_ICON
        }) : null]
      })]
    })
  }