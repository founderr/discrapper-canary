"use strict";
s.r(t), s.d(t, {
  default: function() {
    return Z
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  l = s.n(i),
  r = s("442837"),
  o = s("704215"),
  d = s("780384"),
  u = s("481060"),
  c = s("153867"),
  S = s("230711"),
  E = s("714338"),
  T = s("857595"),
  _ = s("607070"),
  I = s("627845"),
  N = s("514361"),
  g = s("605236"),
  f = s("786761"),
  m = s("3148"),
  A = s("739566"),
  C = s("753206"),
  O = s("837741"),
  h = s("804545"),
  R = s("921801"),
  p = s("594174"),
  M = s("285952"),
  D = s("153124"),
  x = s("358085"),
  L = s("210887"),
  P = s("740492"),
  b = s("695346"),
  v = s("329013"),
  U = s("333859"),
  j = s("726985"),
  G = s("981631"),
  F = s("921944"),
  B = s("959517"),
  y = s("689938"),
  V = s("471264"),
  Y = s("611273");

function H(e, t, s) {
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
  w = (0, D.uid)(),
  W = (0, D.uid)(),
  K = (0, D.uid)(),
  Q = "1337",
  z = e => {
    let t = 0;
    return [(0, f.createMessageRecord)({
      ...(0, m.default)({
        channelId: Q,
        content: y.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_1
      }),
      state: G.MessageStates.SENT,
      id: "".concat(t++)
    }), (0, f.createMessageRecord)({
      ...(0, m.default)({
        channelId: Q,
        content: (0, d.isThemeDark)(e) ? y.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_2_DARK : y.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_2_LIGHT
      }),
      state: G.MessageStates.SENT,
      id: "".concat(t++)
    }), (0, f.createMessageRecord)({
      ...(0, m.default)({
        channelId: Q,
        content: y.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_3
      }),
      state: G.MessageStates.SENT,
      id: "".concat(t++)
    }), (0, f.createMessageRecord)({
      ...(0, m.default)({
        channelId: Q,
        content: y.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_4
      }),
      state: G.MessageStates.SENT,
      id: "".concat(t++)
    }), (0, f.createMessageRecord)({
      ...(0, m.default)({
        channelId: Q,
        content: y.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_5
      }),
      state: G.MessageStates.SENT,
      id: "".concat(t)
    })]
  };
class X extends n.Component {
  renderZoomSlider() {
    return x.isPlatformEmbedded ? (0, a.jsxs)(u.FormItem, {
      className: Y.marginTop20,
      children: [(0, a.jsx)(u.FormTitle, {
        id: w,
        tag: u.FormTitleTags.H5,
        className: Y.marginBottom8,
        children: y.default.Messages.ACCESSIBILITY_ZOOM_LEVEL_LABEL
      }), (0, a.jsx)(u.Slider, {
        className: l()(Y.marginTop20, Y.marginBottom4),
        initialValue: this.props.zoom,
        defaultValue: G.Accessibility.ZOOM_DEFAULT,
        markers: G.Accessibility.ZOOM_SCALES,
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
      className: Y.marginTop20,
      children: [(0, a.jsx)(u.FormTitle, {
        id: W,
        tag: u.FormTitleTags.H5,
        className: Y.marginBottom8,
        children: y.default.Messages.ACCESSIBILITY_FONT_SCALING_LABEL
      }), (0, a.jsx)(M.default, {
        align: M.default.Align.CENTER,
        children: (0, a.jsx)(u.Slider, {
          className: l()(Y.marginTop20, Y.marginBottom4),
          initialValue: this.props.fontSize,
          defaultValue: G.Accessibility.FONT_SIZE_DEFAULT,
          markers: G.Accessibility.FONT_SIZES,
          stickToMarkers: !0,
          onValueChange: this.handleFontSizeChange,
          onValueRender: this.handleSliderRenderPX,
          onMarkerRender: this.handleSliderRenderPX,
          getAriaValueText: this.handleSliderValueText,
          "aria-labelledby": W
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
      className: Y.marginTop20,
      children: [(0, a.jsx)(u.FormTitle, {
        id: K,
        tag: u.FormTitleTags.H5,
        className: Y.marginBottom8,
        children: y.default.Messages.ACCESSIBILITY_MESSAGE_GROUP_SPACING
      }), (0, a.jsx)(u.Slider, {
        className: l()(Y.marginTop20, Y.marginBottom4),
        initialValue: t,
        defaultValue: e ? B.DEFAULT_COMPACT_SPACING : B.DEFAULT_COZY_SPACING,
        markers: B.MESSAGE_GROUP_SPACING,
        stickToMarkers: !0,
        onValueChange: this.handleMessageSpacingChange,
        onValueRender: this.handleSliderRenderPX,
        onMarkerRender: this.handleSliderRenderPX,
        getAriaValueText: this.handleSliderValueText,
        "aria-labelledby": K
      })]
    })
  }
  renderPreview() {
    let {
      messageDisplayCompact: e,
      theme: t,
      messageGroupSpacing: s,
      hideSimpleEmbedContent: n
    } = this.props, i = (0, d.isThemeDark)(t) ? this.darkMessages : this.lightMessages;
    return (0, a.jsx)(u.FocusBlock, {
      children: (0, a.jsx)(u.Card, {
        className: l()(V.preview, Y.marginBottom40, e ? V.compactPreview : void 0, "group-spacing-".concat(null != s ? s : e ? B.DEFAULT_COMPACT_SPACING : B.DEFAULT_COZY_SPACING)),
        outline: !0,
        "aria-hidden": !0,
        children: i.map((t, s) => (0, a.jsx)(C.default, {
          author: (0, A.getMessageAuthor)(t),
          message: t,
          compact: e,
          isGroupStart: s % 2 == 0,
          className: 0 === s ? V.firstMessage : void 0,
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
      className: l()(Y.marginTop8, Y.marginBottom40),
      title: (0, a.jsx)("div", {
        className: V.themeTitle,
        children: (0, a.jsx)("div", {
          className: V.title,
          children: y.default.Messages.THEME
        })
      }),
      children: (0, a.jsx)(u.FormText, {
        type: u.FormText.Types.DEFAULT,
        className: V.forcedColorsWarning,
        children: (0, I.canEnableForcedColors)() ? y.default.Messages.THEME_DISABLED_FOR_CONTRAST_SYNC.format({
          onClick: () => {
            S.default.open(G.UserSettingsSections.ACCESSIBILITY)
          }
        }) : y.default.Messages.THEME_DISABLED_FOR_FORCED_COLORS
      })
    }) : (0, a.jsxs)(u.FormItem, {
      className: Y.marginTop8,
      title: (0, a.jsxs)("div", {
        className: V.themeTitle,
        children: [(0, a.jsx)("div", {
          className: V.title,
          children: y.default.Messages.THEME
        }), (0, a.jsx)(v.ClientThemesSidebarButton, {})]
      }),
      children: [(0, a.jsx)(v.UserSettingsAppearanceClientThemes, {}), (0, a.jsx)(R.Subsetting, {
        setting: j.WebSetting.APPEARANCE_ICON,
        children: (0, a.jsx)(U.UserSettingsAppearanceInAppIcon, {})
      }), (0, a.jsx)(u.FormSwitch, {
        value: s && (0, d.isThemeLight)(e) && !t,
        disabled: e !== G.ThemeTypes.LIGHT || t || null != n,
        onChange: this.handleDarkSidebarChecked,
        className: Y.marginTop20,
        children: y.default.Messages.ACCESSIBILITY_DARK_SIDEBAR
      })]
    })
  }
  renderDisplayMode() {
    return (0, a.jsxs)(u.FormItem, {
      title: y.default.Messages.MESSAGE_DISPLAY_MODE_LABEL,
      className: Y.marginTop8,
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
        className: Y.marginTop20,
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
        className: Y.marginTop20
      })]
    })
  }
  render() {
    return (0, a.jsxs)(u.FormSection, {
      tag: u.FormTitleTags.H1,
      title: y.default.Messages.APPEARANCE,
      children: [(0, a.jsxs)(R.Subsetting, {
        setting: j.WebSetting.APPEARANCE_THEME,
        children: [this.renderPreview(), this.renderTheme()]
      }), (0, a.jsx)(R.Subsetting, {
        setting: j.WebSetting.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
        children: this.renderDisplayMode()
      }), (0, a.jsx)(R.Subsetting, {
        setting: j.WebSetting.APPEARANCE_SCALING_SPACING,
        children: this.renderScalingAndSpacing()
      }), (0, a.jsx)(u.Text, {
        variant: "text-md/normal",
        className: Y.marginTop20,
        children: y.default.Messages.APPEARANCE_SETTINGS_ACCESSIBILITY_LINK.format({
          onAccessibilityClick() {
            S.default.open(G.UserSettingsSections.ACCESSIBILITY)
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
    super(...e), H(this, "darkMessages", z(G.ThemeTypes.DARK)), H(this, "lightMessages", z(G.ThemeTypes.LIGHT)), H(this, "handleDisplayCompactAvatarsChanged", e => {
      c.default.updatedUnsyncedSettings({
        displayCompactAvatars: e
      })
    }), H(this, "handleMessageDisplayModeChange", e => {
      let {
        value: t
      } = e;
      b.MessageDisplayCompact.updateSetting(t === k.COMPACT), (0, T.setMessageGroupSpacing)()
    })
  }
}
let q = e => {
  !(0, g.isDismissibleContentDismissed)(e) && (0, g.markDismissibleContentAsDismissed)(e, {
    dismissAction: F.ContentDismissActionType.AUTO,
    forceTrack: !0
  })
};

function Z() {
  let e = b.MessageDisplayCompact.useSetting(),
    t = b.InlineEmbedMedia.useSetting(),
    s = b.RenderEmbeds.useSetting(),
    i = b.ClientThemeSettings.useSetting(),
    l = "UserSettingsAppearance",
    {
      enabled: d
    } = (0, O.useBrandRefreshPerksExperiment)({
      location: l
    }),
    {
      enabled: u
    } = (0, h.usePrideMonthPerksExperiment)({
      location: l
    });
  n.useEffect(() => {
    q(o.DismissibleContent.CLIENT_THEMES_SETTINGS_BADGE), q(o.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_BADGE), q(o.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_COACHMARK), d && q(o.DismissibleContent.BRAND_REFRESH_NEW_BADGE), u && q(o.DismissibleContent.PRIDE_ICONS_APPEARANCE_BADGE)
  }, []);
  let c = (0, r.useStateFromStoresObject)([L.default, P.default, _.default, p.default, N.default], () => {
    var e, t;
    return {
      theme: L.default.theme,
      useForcedColors: _.default.useForcedColors,
      useSystemTheme: P.default.useSystemTheme,
      darkSidebar: L.default.darkSidebar,
      fontSize: _.default.fontSize,
      zoom: _.default.zoom,
      messageGroupSpacing: _.default.messageGroupSpacing,
      displayCompactAvatars: P.default.displayCompactAvatars,
      isStaff: null !== (t = null === (e = p.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff) && void 0 !== t && t,
      gradientPreset: N.default.gradientPreset
    }
  });
  return (0, a.jsx)(X, {
    messageDisplayCompact: e,
    hideSimpleEmbedContent: t && s,
    clientTheme: i,
    ...c
  })
}