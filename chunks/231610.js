"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  }
}), s("47120");
var a = s("735250");
s("470079");
var l = s("481060"),
  n = s("723047"),
  i = s("727843"),
  r = s("290348"),
  o = s("783454"),
  d = s("893729"),
  u = s("619326"),
  c = s("553204"),
  E = s("689938"),
  _ = s("169769"),
  I = s("654402");

function T() {
  let {
    editStateId: e,
    guildId: t
  } = (0, i.useEditStateContext)(), [, T] = r.useRoleIcon(e, t), [S, f] = r.useRoleColor(e, t), m = r.useRole(e, t);

  function N() {
    (0, l.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("99387"), s.e("22942")]).then(s.bind(s, "660727"));
      return s => (0, a.jsx)(e, {
        ...s,
        guildId: t,
        onUploadIcon: e => T({
          icon: e,
          unicodeEmoji: null
        }),
        onSelectUnicodeEmoji: e => T({
          icon: null,
          unicodeEmoji: e
        })
      })
    })
  }
  let g = (0, n.useRoleSubscriptionSettingsDisabled)();
  return (0, a.jsxs)(o.default, {
    title: E.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_FLAIR_HEADER_TITLE,
    description: E.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_FLAIR_HEADER_SUBTITLE,
    children: [(0, a.jsx)(l.FormSection, {
      title: E.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FLAIR_COLOR_TITLE,
      disabled: g,
      children: (0, a.jsx)(u.default, {
        value: S,
        onChange: f,
        disabled: g
      })
    }), (0, a.jsx)(l.Spacer, {
      size: 24
    }), (0, a.jsx)("div", {
      className: _.__invalid_iconSection,
      children: (0, a.jsxs)(l.FormSection, {
        title: E.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FLAIR_BADGE_TITLE,
        disabled: g,
        children: [(0, a.jsx)(l.FormText, {
          type: l.FormText.Types.DESCRIPTION,
          className: _.formDescription,
          disabled: g,
          children: E.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FLAIR_BADGE_DESCRIPTION
        }), (0, a.jsxs)("div", {
          className: I.iconUploaderContainer,
          children: [(0, a.jsx)(c.default, {
            role: m,
            "aria-label": E.default.Messages.ROLE_ICON_CHOOSE_IMAGE,
            onClick: N,
            disabled: g
          }), (0, a.jsx)(l.Button, {
            look: l.Button.Looks.OUTLINED,
            color: l.Button.Colors.PRIMARY,
            className: _.__invalid_imageUploadButtonCTA,
            onClick: N,
            disabled: g,
            children: E.default.Messages.ROLE_ICON_CHOOSE_IMAGE
          })]
        })]
      })
    }), (0, a.jsx)(l.Spacer, {
      size: 24
    }), (0, a.jsx)(l.FocusBlock, {
      children: (0, a.jsxs)("div", {
        className: I.previewContainer,
        "aria-hidden": !0,
        children: [(0, a.jsx)(d.default, {
          guildId: t,
          role: m,
          className: I.messageContainer,
          theme: "light"
        }), (0, a.jsx)(d.default, {
          guildId: t,
          role: m,
          className: I.messageContainer,
          theme: "dark"
        })]
      })
    })]
  })
}