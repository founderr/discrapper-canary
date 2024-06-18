"use strict";
var n = t(735250);
t(470079);
var i = t(780384),
  l = t(481060),
  a = t(410030),
  r = t(367907),
  o = t(906732),
  c = t(807582),
  d = t(518738),
  u = t(26323),
  E = t(176278),
  _ = t(764260),
  I = t(981631),
  T = t(30513),
  N = t(689938),
  m = t(311180);
s.Z = function(e) {
  let {
    guild: s,
    disabled: S,
    role: h
  } = e, g = (0, a.ZP)(), C = (0, d.oC)(s.id, h), {
    analyticsLocations: x
  } = (0, o.ZP)(), R = () => {
    (0, l.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([t.e("99387"), t.e("22942")]).then(t.bind(t, 660727));
      return t => (0, n.jsx)(e, {
        ...t,
        guildId: s.id,
        onUploadIcon: e => (0, _._l)(h.id, e, null),
        onSelectUnicodeEmoji: e => (0, _._l)(h.id, null, e)
      })
    })
  }, L = s.features.has(I.oNc.ROLE_ICONS), O = e => {
    !L && ((0, r.yw)(I.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
      location: {
        ...e,
        section: I.jXE.CUSTOM_ROLE_ICONS_TOOLTIP
      },
      guild_id: null == s ? void 0 : s.id,
      location_stack: x
    }), (0, u.Z)({
      analyticsLocations: x,
      analyticsSourceLocation: {
        page: I.ZY5.GUILD_SETTINGS,
        section: I.jXE.GUILD_ROLE_EDIT_UPSELL_MODAL,
        object: I.qAy.BADGE
      },
      guild: s,
      perks: (0, T.Yp)()
    }))
  }, A = (0, n.jsx)(c.Z, {
    className: m.availabilityIndicator,
    guild: s,
    guildFeature: I.oNc.ROLE_ICONS,
    tooltipPosition: "top",
    hideTooltip: L,
    onClick: () => O({
      object: I.qAy.LEARN_MORE,
      objectType: I.Qqv.TIER_2
    })
  });
  return (0, n.jsxs)(l.FormItem, {
    className: m.container,
    children: [(0, n.jsxs)(l.FormTitle, {
      className: m.formTitle,
      children: [(0, n.jsx)("div", {
        children: N.Z.Messages.FORM_LABEL_ROLE_ICON
      }), A]
    }), (0, n.jsx)(l.FormText, {
      className: m.description,
      children: N.Z.Messages.ROLE_ICON_HELP
    }), (0, n.jsxs)("div", {
      className: m.rolePreviewArea,
      children: [(0, n.jsx)("div", {
        className: m.previewContainer,
        children: null != C ? (0, n.jsx)(E.Z, {
          ...C,
          className: m.roleIconPreview,
          enableTooltip: !1
        }) : (0, n.jsx)(l.ImagePlusIcon, {
          size: "custom",
          color: "currentColor",
          width: 24,
          height: 24,
          className: m.preview
        })
      }), (0, n.jsx)(l.Button, {
        className: m.button,
        color: (0, i.ap)(g) ? l.Button.Colors.PRIMARY : l.Button.Colors.WHITE,
        look: l.Button.Looks.OUTLINED,
        onClick: () => s.hasFeature(I.oNc.ROLE_ICONS) ? R() : O({
          object: I.qAy.UPLOAD_IMAGE
        }),
        disabled: S,
        children: N.Z.Messages.ROLE_ICON_CHOOSE_IMAGE
      }), null != C ? (0, n.jsx)(l.Button, {
        className: m.button,
        color: (0, i.ap)(g) ? l.Button.Colors.PRIMARY : l.Button.Colors.TRANSPARENT,
        look: l.Button.Looks.BLANK,
        onClick: () => {
          (0, _._l)(h.id, null, null)
        },
        disabled: S,
        children: N.Z.Messages.REMOVE_ICON
      }) : null]
    })]
  })
}