"use strict";
s.r(t), s.d(t, {
  default: function() {
    return z
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("442837"),
  o = s("524437"),
  d = s("780384"),
  u = s("481060"),
  c = s("153867"),
  S = s("230711"),
  E = s("714338"),
  T = s("857595"),
  f = s("607070"),
  m = s("627845"),
  _ = s("514361"),
  g = s("605236"),
  I = s("786761"),
  h = s("3148"),
  N = s("739566"),
  p = s("753206"),
  C = s("837741"),
  A = s("594174"),
  O = s("285952"),
  x = s("153124"),
  R = s("358085"),
  M = s("210887"),
  v = s("740492"),
  D = s("695346"),
  L = s("329013"),
  P = s("333859"),
  j = s("981631"),
  b = s("921944"),
  U = s("959517"),
  y = s("689938"),
  B = s("471264"),
  F = s("611273");

function G(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let k = {
    COZY: "cozy",
    COMPACT: "compact"
  },
  w = (0, x.uid)(),
  H = (0, x.uid)(),
  V = (0, x.uid)(),
  Y = "1337",
  W = e => {
    let t = 0;
    return [(0, I.createMessageRecord)({
      ...(0, h.default)({
        channelId: Y,
        content: y.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_1
      }),
      state: j.MessageStates.SENT,
      id: "".concat(t++)
    }), (0, I.createMessageRecord)({
      ...(0, h.default)({
        channelId: Y,
        content: (0, d.isThemeDark)(e) ? y.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_2_DARK : y.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_2_LIGHT
      }),
      state: j.MessageStates.SENT,
      id: "".concat(t++)
    }), (0, I.createMessageRecord)({
      ...(0, h.default)({
        channelId: Y,
        content: y.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_3
      }),
      state: j.MessageStates.SENT,
      id: "".concat(t++)
    }), (0, I.createMessageRecord)({
      ...(0, h.default)({
        channelId: Y,
        content: y.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_4
      }),
      state: j.MessageStates.SENT,
      id: "".concat(t++)
    }), (0, I.createMessageRecord)({
      ...(0, h.default)({
        channelId: Y,
        content: y.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_5
      }),
      state: j.MessageStates.SENT,
      id: "".concat(t)
    })]
  };
class K extends n.Component {
  renderZoomSlider() {
    return R.isPlatformEmbedded ? (0, a.jsxs)(u.FormItem, {
      className: F.marginTop20,
      children: [(0, a.jsx)(u.FormTitle, {
        id: w,
        tag: u.FormTitleTags.H5,
        className: F.marginBottom8,
        children: y.default.Messages.ACCESSIBILITY_ZOOM_LEVEL_LABEL
      }), (0, a.jsx)(u.Slider, {
        className: i()(F.marginTop20, F.marginBottom4),
        initialValue: this.props.zoom,
        defaultValue: j.Accessibility.ZOOM_DEFAULT,
        markers: j.Accessibility.ZOOM_SCALES,
        stickToMarkers: !0,
        onValueChange: this.handleZoomChange,
        onValueRender: this.handleSliderRender,
        "aria-labelledby": w
      }), (0, a.jsx)(u.FormText, {
        type: u.FormText.Types.DESCRIPTION,
        children: y.default.Messages.USER_SETTINGS_APPEARANCE_ZOOM_TIP.format({
          modKey: E.default.modKey
        })
      })]
    }) : null
  }
  renderFontScaleSlider() {
    return (0, a.jsxs)(u.FormItem, {
      className: F.marginTop20,
      children: [(0, a.jsx)(u.FormTitle, {
        id: H,
        tag: u.FormTitleTags.H5,
        className: F.marginBottom8,
        children: y.default.Messages.ACCESSIBILITY_FONT_SCALING_LABEL
      }), (0, a.jsx)(O.default, {
        align: O.default.Align.CENTER,
        children: (0, a.jsx)(u.Slider, {
          className: i()(F.marginTop20, F.marginBottom4),
          initialValue: this.props.fontSize,
          defaultValue: j.Accessibility.FONT_SIZE_DEFAULT,
          markers: j.Accessibility.FONT_SIZES,
          stickToMarkers: !0,
          onValueChange: this.handleFontSizeChange,
          onValueRender: this.handleSliderRenderPX,
          onMarkerRender: this.handleSliderRenderPX,
          getAriaValueText: this.handleSliderValueText,
          "aria-labelledby": H
        })
      })]
    })
  }
  renderMessageGroupSpacingSlider() {
    let {
      messageDisplayCompact: e,
      messageGroupSpacing: t
    } = this.props;
    return (0, a.jsxs)(u.FormItem, {
      className: F.marginTop20,
      children: [(0, a.jsx)(u.FormTitle, {
        id: V,
        tag: u.FormTitleTags.H5,
        className: F.marginBottom8,
        children: y.default.Messages.ACCESSIBILITY_MESSAGE_GROUP_SPACING
      }), (0, a.jsx)(u.Slider, {
        className: i()(F.marginTop20, F.marginBottom4),
        initialValue: t,
        defaultValue: e ? U.DEFAULT_COMPACT_SPACING : U.DEFAULT_COZY_SPACING,
        markers: U.MESSAGE_GROUP_SPACING,
        stickToMarkers: !0,
        onValueChange: this.handleMessageSpacingChange,
        onValueRender: this.handleSliderRenderPX,
        onMarkerRender: this.handleSliderRenderPX,
        getAriaValueText: this.handleSliderValueText,
        "aria-labelledby": V
      })]
    })
  }
  renderPreview() {
    let {
      messageDisplayCompact: e,
      theme: t,
      messageGroupSpacing: s,
      hideSimpleEmbedContent: n
    } = this.props, l = (0, d.isThemeDark)(t) ? this.darkMessages : this.lightMessages;
    return (0, a.jsx)(u.FocusBlock, {
      children: (0, a.jsx)(u.Card, {
        className: i()(B.preview, F.marginBottom40, e ? B.compactPreview : void 0, "group-spacing-".concat(null != s ? s : e ? U.DEFAULT_COMPACT_SPACING : U.DEFAULT_COZY_SPACING)),
        outline: !0,
        "aria-hidden": !0,
        children: l.map((t, s) => (0, a.jsx)(p.default, {
          author: (0, N.getMessageAuthor)(t),
          message: t,
          compact: e,
          isGroupStart: s % 2 == 0,
          className: 0 === s ? B.firstMessage : void 0,
          hideSimpleEmbedContent: n
        }, t.id))
      })
    })
  }
  renderTheme() {
    let {
      theme: e,
      useForcedColors: t,
      darkSidebar: s,
      gradientPreset: n
    } = this.props;
    return t ? (0, a.jsx)(u.FormItem, {
      className: i()(F.marginTop8, F.marginBottom40),
      title: (0, a.jsx)("div", {
        className: B.themeTitle,
        children: (0, a.jsx)("div", {
          className: B.title,
          children: y.default.Messages.THEME
        })
      }),
      children: (0, a.jsx)(u.FormText, {
        type: u.FormText.Types.DEFAULT,
        className: B.forcedColorsWarning,
        children: (0, m.canEnableForcedColors)() ? y.default.Messages.THEME_DISABLED_FOR_CONTRAST_SYNC.format({
          onClick: () => {
            S.default.open(j.UserSettingsSections.ACCESSIBILITY)
          }
        }) : y.default.Messages.THEME_DISABLED_FOR_FORCED_COLORS
      })
    }) : (0, a.jsxs)(u.FormItem, {
      className: F.marginTop8,
      title: (0, a.jsxs)("div", {
        className: B.themeTitle,
        children: [(0, a.jsx)("div", {
          className: B.title,
          children: y.default.Messages.THEME
        }), (0, a.jsx)(L.ClientThemesSidebarButton, {})]
      }),
      children: [(0, a.jsx)(L.UserSettingsAppearanceClientThemes, {}), (0, a.jsx)(P.UserSettingsAppearanceInAppIcon, {}), (0, a.jsx)(u.FormSwitch, {
        value: s && (0, d.isThemeLight)(e) && !t,
        disabled: e !== j.ThemeTypes.LIGHT || t || null != n,
        onChange: this.handleDarkSidebarChecked,
        className: F.marginTop20,
        children: y.default.Messages.ACCESSIBILITY_DARK_SIDEBAR
      })]
    })
  }
  renderDisplayMode() {
    return (0, a.jsxs)(u.FormItem, {
      title: y.default.Messages.MESSAGE_DISPLAY_MODE_LABEL,
      className: F.marginTop8,
      children: [(0, a.jsx)(u.RadioGroup, {
        options: [{
          name: y.default.Messages.COZY_MODE,
          value: k.COZY
        }, {
          name: y.default.Messages.COMPACT_MODE,
          value: k.COMPACT
        }],
        onChange: this.handleMessageDisplayModeChange,
        value: this.props.messageDisplayCompact ? k.COMPACT : k.COZY
      }), (0, a.jsx)(u.FormSwitch, {
        value: this.props.messageDisplayCompact && this.props.displayCompactAvatars,
        disabled: !this.props.messageDisplayCompact,
        onChange: this.handleDisplayCompactAvatarsChanged,
        className: F.marginTop20,
        children: y.default.Messages.DISPLAY_COMPACT_AVATARS
      })]
    })
  }
  handleDarkSidebarChecked() {
    (0, T.toggleDarkSidebar)()
  }
  renderScalingAndSpacing() {
    return (0, a.jsxs)(a.Fragment, {
      children: [this.renderFontScaleSlider(), this.renderMessageGroupSpacingSlider(), this.renderZoomSlider(), (0, a.jsx)(u.FormDivider, {
        className: F.marginTop20
      })]
    })
  }
  render() {
    return (0, a.jsxs)(u.FormSection, {
      tag: u.FormTitleTags.H1,
      title: y.default.Messages.APPEARANCE,
      children: [this.renderPreview(), this.renderTheme(), this.renderDisplayMode(), this.renderScalingAndSpacing(), (0, a.jsx)(u.Text, {
        variant: "text-md/normal",
        className: F.marginTop20,
        children: y.default.Messages.APPEARANCE_SETTINGS_ACCESSIBILITY_LINK.format({
          onAccessibilityClick() {
            S.default.open(j.UserSettingsSections.ACCESSIBILITY)
          }
        })
      })]
    })
  }
  handleSliderRender(e) {
    return "".concat(e.toFixed(0), "%")
  }
  handleSliderRenderPX(e) {
    return "".concat(e.toFixed(0), "px")
  }
  handleSliderValueText(e) {
    return y.default.Messages.PIXEL_VALUE_A11Y_TEXT.format({
      value: e
    })
  }
  handleFontSizeChange(e) {
    (0, T.setFontSize)(e)
  }
  handleMessageSpacingChange(e) {
    switch (e) {
      case 0:
      case 4:
      case 8:
      case 16:
      case 24:
        (0, T.setMessageGroupSpacing)(e)
    }
  }
  handleZoomChange(e) {
    (0, T.setZoom)(e)
  }
  constructor(...e) {
    super(...e), G(this, "darkMessages", W(j.ThemeTypes.DARK)), G(this, "lightMessages", W(j.ThemeTypes.LIGHT)), G(this, "handleDisplayCompactAvatarsChanged", e => {
      c.default.updatedUnsyncedSettings({
        displayCompactAvatars: e
      })
    }), G(this, "handleMessageDisplayModeChange", e => {
      let {
        value: t
      } = e;
      D.MessageDisplayCompact.updateSetting(t === k.COMPACT), (0, T.setMessageGroupSpacing)()
    })
  }
}

function z() {
  let e = D.MessageDisplayCompact.useSetting(),
    t = D.InlineEmbedMedia.useSetting(),
    s = D.RenderEmbeds.useSetting(),
    l = D.ClientThemeSettings.useSetting(),
    {
      enabled: i
    } = (0, C.useBrandRefreshPerksExperiment)({
      location: "UserSettingsAppearance"
    });
  n.useEffect(() => {
    (0, g.markDismissibleContentAsDismissed)(o.DismissibleContent.CLIENT_THEMES_SETTINGS_BADGE, {
      dismissAction: b.ContentDismissActionType.AUTO,
      forceTrack: !0
    }), (0, g.markDismissibleContentAsDismissed)(o.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_BADGE, {
      dismissAction: b.ContentDismissActionType.AUTO,
      forceTrack: !0
    }), (0, g.markDismissibleContentAsDismissed)(o.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_COACHMARK, {
      dismissAction: b.ContentDismissActionType.AUTO,
      forceTrack: !0
    }), i && (0, g.markDismissibleContentAsDismissed)(o.DismissibleContent.BRAND_REFRESH_NEW_BADGE, {
      dismissAction: b.ContentDismissActionType.AUTO,
      forceTrack: !0
    })
  }, []);
  let d = (0, r.useStateFromStoresObject)([M.default, v.default, f.default, A.default, _.default], () => {
    var e, t;
    return {
      theme: M.default.theme,
      useForcedColors: f.default.useForcedColors,
      useSystemTheme: v.default.useSystemTheme,
      darkSidebar: M.default.darkSidebar,
      fontSize: f.default.fontSize,
      zoom: f.default.zoom,
      messageGroupSpacing: f.default.messageGroupSpacing,
      displayCompactAvatars: v.default.displayCompactAvatars,
      isStaff: null !== (t = null === (e = A.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff) && void 0 !== t && t,
      gradientPreset: _.default.gradientPreset
    }
  });
  return (0, a.jsx)(K, {
    messageDisplayCompact: e,
    hideSimpleEmbedContent: t && s,
    clientTheme: l,
    ...d
  })
}