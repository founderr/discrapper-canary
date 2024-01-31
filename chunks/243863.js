"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
});
var a = s("37983");
s("884691");
var n = s("819855"),
  l = s("77078"),
  i = s("841098"),
  r = s("716241"),
  o = s("685665"),
  d = s("634544"),
  u = s("405645"),
  c = s("379532"),
  E = s("818643"),
  _ = s("483093"),
  T = s("766419"),
  I = s("49111"),
  S = s("944305"),
  N = s("782340"),
  f = s("195072"),
  g = function(e) {
    let {
      guild: t,
      disabled: g,
      role: A
    } = e, L = (0, i.default)(), m = (0, u.useRoleIconForPreview)(t.id, A), {
      analyticsLocations: C
    } = (0, o.default)(), O = () => {
      (0, l.openModalLazy)(async () => {
        let {
          default: e
        } = await s.el("64567").then(s.bind(s, "64567"));
        return s => (0, a.jsx)(e, {
          ...s,
          guildId: t.id,
          onUploadIcon: e => (0, T.updateRoleIcon)(A.id, e, null),
          onSelectUnicodeEmoji: e => (0, T.updateRoleIcon)(A.id, null, e)
        })
      })
    }, h = t.features.has(I.GuildFeatures.ROLE_ICONS), R = e => {
      !h && ((0, r.trackWithMetadata)(I.AnalyticEvents.PREMIUM_GUILD_PROMOTION_OPENED, {
        location: {
          ...e,
          section: I.AnalyticsSections.CUSTOM_ROLE_ICONS_TOOLTIP
        },
        guild_id: null == t ? void 0 : t.id,
        location_stack: C
      }), (0, c.default)({
        analyticsLocations: C,
        analyticsSourceLocation: {
          page: I.AnalyticsPages.GUILD_SETTINGS,
          section: I.AnalyticsSections.GUILD_ROLE_EDIT_UPSELL_MODAL,
          object: I.AnalyticsObjects.BADGE
        },
        guild: t,
        perks: (0, S.customRoleIconUpsellPerks)()
      }))
    }, D = (0, a.jsx)(d.default, {
      className: f.availabilityIndicator,
      guild: t,
      guildFeature: I.GuildFeatures.ROLE_ICONS,
      tooltipPosition: "top",
      hideTooltip: h,
      onClick: () => R({
        object: I.AnalyticsObjects.LEARN_MORE,
        objectType: I.AnalyticsObjectTypes.TIER_2
      })
    });
    return (0, a.jsxs)(l.FormItem, {
      className: f.container,
      children: [(0, a.jsxs)(l.FormTitle, {
        className: f.formTitle,
        children: [(0, a.jsx)("div", {
          children: N.default.Messages.FORM_LABEL_ROLE_ICON
        }), D]
      }), (0, a.jsx)(l.FormText, {
        className: f.description,
        children: N.default.Messages.ROLE_ICON_HELP
      }), (0, a.jsxs)("div", {
        className: f.rolePreviewArea,
        children: [(0, a.jsx)("div", {
          className: f.previewContainer,
          children: null != m ? (0, a.jsx)(_.default, {
            ...m,
            className: f.roleIconPreview,
            enableTooltip: !1
          }) : (0, a.jsx)(E.default, {
            width: 24,
            height: 24,
            className: f.preview
          })
        }), (0, a.jsx)(l.Button, {
          className: f.button,
          color: (0, n.isThemeLight)(L) ? l.Button.Colors.PRIMARY : l.Button.Colors.WHITE,
          look: l.Button.Looks.OUTLINED,
          onClick: () => t.hasFeature(I.GuildFeatures.ROLE_ICONS) ? O() : R({
            object: I.AnalyticsObjects.UPLOAD_IMAGE
          }),
          disabled: g,
          children: N.default.Messages.ROLE_ICON_CHOOSE_IMAGE
        }), null != m ? (0, a.jsx)(l.Button, {
          className: f.button,
          color: (0, n.isThemeLight)(L) ? l.Button.Colors.BLACK : l.Button.Colors.TRANSPARENT,
          look: l.Button.Looks.BLANK,
          onClick: () => {
            (0, T.updateRoleIcon)(A.id, null, null)
          },
          disabled: g,
          children: N.default.Messages.REMOVE_ICON
        }) : null]
      })]
    })
  }