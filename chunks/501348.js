"use strict";
s.r(t), s.d(t, {
  default: function() {
    return q
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
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
  f = s("514361"),
  m = s("605236"),
  N = s("786761"),
  g = s("3148"),
  h = s("739566"),
  C = s("753206"),
  O = s("837741"),
  A = s("804545"),
  p = s("594174"),
  R = s("285952"),
  x = s("153124"),
  M = s("358085"),
  D = s("210887"),
  L = s("740492"),
  P = s("695346"),
  v = s("329013"),
  b = s("333859"),
  U = s("981631"),
  j = s("921944"),
  F = s("959517"),
  G = s("689938"),
  B = s("471264"),
  y = s("611273");

function V(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let H = {
    COZY: "cozy",
    COMPACT: "compact"
  },
  k = (0, x.uid)(),
  w = (0, x.uid)(),
  Y = (0, x.uid)(),
  W = "1337",
  K = e => {
    let t = 0;
    return [(0, N.createMessageRecord)({
      ...(0, g.default)({
        channelId: W,
        content: G.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_1
      }),
      state: U.MessageStates.SENT,
      id: "".concat(t++)
    }), (0, N.createMessageRecord)({
      ...(0, g.default)({
        channelId: W,
        content: (0, d.isThemeDark)(e) ? G.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_2_DARK : G.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_2_LIGHT
      }),
      state: U.MessageStates.SENT,
      id: "".concat(t++)
    }), (0, N.createMessageRecord)({
      ...(0, g.default)({
        channelId: W,
        content: G.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_3
      }),
      state: U.MessageStates.SENT,
      id: "".concat(t++)
    }), (0, N.createMessageRecord)({
      ...(0, g.default)({
        channelId: W,
        content: G.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_4
      }),
      state: U.MessageStates.SENT,
      id: "".concat(t++)
    }), (0, N.createMessageRecord)({
      ...(0, g.default)({
        channelId: W,
        content: G.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_5
      }),
      state: U.MessageStates.SENT,
      id: "".concat(t)
    })]
  };
class z extends n.Component {
  renderZoomSlider() {
    return M.isPlatformEmbedded ? (0, a.jsxs)(u.FormItem, {
      className: y.marginTop20,
      children: [(0, a.jsx)(u.FormTitle, {
        id: k,
        tag: u.FormTitleTags.H5,
        className: y.marginBottom8,
        children: G.default.Messages.ACCESSIBILITY_ZOOM_LEVEL_LABEL
      }), (0, a.jsx)(u.Slider, {
        className: i()(y.marginTop20, y.marginBottom4),
        initialValue: this.props.zoom,
        defaultValue: U.Accessibility.ZOOM_DEFAULT,
        markers: U.Accessibility.ZOOM_SCALES,
        stickToMarkers: !0,
        onValueChange: this.handleZoomChange,
        onValueRender: this.handleSliderRender,
        "aria-labelledby": k
      }), (0, a.jsx)(u.FormText, {
        type: u.FormText.Types.DESCRIPTION,
        children: G.default.Messages.USER_SETTINGS_APPEARANCE_ZOOM_TIP.format({
          modKey: E.default.modKey
        })
      })]
    }) : null
  }
  renderFontScaleSlider() {
    return (0, a.jsxs)(u.FormItem, {
      className: y.marginTop20,
      children: [(0, a.jsx)(u.FormTitle, {
        id: w,
        tag: u.FormTitleTags.H5,
        className: y.marginBottom8,
        children: G.default.Messages.ACCESSIBILITY_FONT_SCALING_LABEL
      }), (0, a.jsx)(R.default, {
        align: R.default.Align.CENTER,
        children: (0, a.jsx)(u.Slider, {
          className: i()(y.marginTop20, y.marginBottom4),
          initialValue: this.props.fontSize,
          defaultValue: U.Accessibility.FONT_SIZE_DEFAULT,
          markers: U.Accessibility.FONT_SIZES,
          stickToMarkers: !0,
          onValueChange: this.handleFontSizeChange,
          onValueRender: this.handleSliderRenderPX,
          onMarkerRender: this.handleSliderRenderPX,
          getAriaValueText: this.handleSliderValueText,
          "aria-labelledby": w
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
      className: y.marginTop20,
      children: [(0, a.jsx)(u.FormTitle, {
        id: Y,
        tag: u.FormTitleTags.H5,
        className: y.marginBottom8,
        children: G.default.Messages.ACCESSIBILITY_MESSAGE_GROUP_SPACING
      }), (0, a.jsx)(u.Slider, {
        className: i()(y.marginTop20, y.marginBottom4),
        initialValue: t,
        defaultValue: e ? F.DEFAULT_COMPACT_SPACING : F.DEFAULT_COZY_SPACING,
        markers: F.MESSAGE_GROUP_SPACING,
        stickToMarkers: !0,
        onValueChange: this.handleMessageSpacingChange,
        onValueRender: this.handleSliderRenderPX,
        onMarkerRender: this.handleSliderRenderPX,
        getAriaValueText: this.handleSliderValueText,
        "aria-labelledby": Y
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
        className: i()(B.preview, y.marginBottom40, e ? B.compactPreview : void 0, "group-spacing-".concat(null != s ? s : e ? F.DEFAULT_COMPACT_SPACING : F.DEFAULT_COZY_SPACING)),
        outline: !0,
        "aria-hidden": !0,
        children: l.map((t, s) => (0, a.jsx)(C.default, {
          author: (0, h.getMessageAuthor)(t),
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
      className: i()(y.marginTop8, y.marginBottom40),
      title: (0, a.jsx)("div", {
        className: B.themeTitle,
        children: (0, a.jsx)("div", {
          className: B.title,
          children: G.default.Messages.THEME
        })
      }),
      children: (0, a.jsx)(u.FormText, {
        type: u.FormText.Types.DEFAULT,
        className: B.forcedColorsWarning,
        children: (0, I.canEnableForcedColors)() ? G.default.Messages.THEME_DISABLED_FOR_CONTRAST_SYNC.format({
          onClick: () => {
            S.default.open(U.UserSettingsSections.ACCESSIBILITY)
          }
        }) : G.default.Messages.THEME_DISABLED_FOR_FORCED_COLORS
      })
    }) : (0, a.jsxs)(u.FormItem, {
      className: y.marginTop8,
      title: (0, a.jsxs)("div", {
        className: B.themeTitle,
        children: [(0, a.jsx)("div", {
          className: B.title,
          children: G.default.Messages.THEME
        }), (0, a.jsx)(v.ClientThemesSidebarButton, {})]
      }),
      children: [(0, a.jsx)(v.UserSettingsAppearanceClientThemes, {}), (0, a.jsx)(b.UserSettingsAppearanceInAppIcon, {}), (0, a.jsx)(u.FormSwitch, {
        value: s && (0, d.isThemeLight)(e) && !t,
        disabled: e !== U.ThemeTypes.LIGHT || t || null != n,
        onChange: this.handleDarkSidebarChecked,
        className: y.marginTop20,
        children: G.default.Messages.ACCESSIBILITY_DARK_SIDEBAR
      })]
    })
  }
  renderDisplayMode() {
    return (0, a.jsxs)(u.FormItem, {
      title: G.default.Messages.MESSAGE_DISPLAY_MODE_LABEL,
      className: y.marginTop8,
      children: [(0, a.jsx)(u.RadioGroup, {
        options: [{
          name: G.default.Messages.COZY_MODE,
          value: H.COZY
        }, {
          name: G.default.Messages.COMPACT_MODE,
          value: H.COMPACT
        }],
        onChange: this.handleMessageDisplayModeChange,
        value: this.props.messageDisplayCompact ? H.COMPACT : H.COZY
      }), (0, a.jsx)(u.FormSwitch, {
        value: this.props.messageDisplayCompact && this.props.displayCompactAvatars,
        disabled: !this.props.messageDisplayCompact,
        onChange: this.handleDisplayCompactAvatarsChanged,
        className: y.marginTop20,
        children: G.default.Messages.DISPLAY_COMPACT_AVATARS
      })]
    })
  }
  handleDarkSidebarChecked() {
    (0, T.toggleDarkSidebar)()
  }
  renderScalingAndSpacing() {
    return (0, a.jsxs)(a.Fragment, {
      children: [this.renderFontScaleSlider(), this.renderMessageGroupSpacingSlider(), this.renderZoomSlider(), (0, a.jsx)(u.FormDivider, {
        className: y.marginTop20
      })]
    })
  }
  render() {
    return (0, a.jsxs)(u.FormSection, {
      tag: u.FormTitleTags.H1,
      title: G.default.Messages.APPEARANCE,
      children: [this.renderPreview(), this.renderTheme(), this.renderDisplayMode(), this.renderScalingAndSpacing(), (0, a.jsx)(u.Text, {
        variant: "text-md/normal",
        className: y.marginTop20,
        children: G.default.Messages.APPEARANCE_SETTINGS_ACCESSIBILITY_LINK.format({
          onAccessibilityClick() {
            S.default.open(U.UserSettingsSections.ACCESSIBILITY)
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
    return G.default.Messages.PIXEL_VALUE_A11Y_TEXT.format({
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
    super(...e), V(this, "darkMessages", K(U.ThemeTypes.DARK)), V(this, "lightMessages", K(U.ThemeTypes.LIGHT)), V(this, "handleDisplayCompactAvatarsChanged", e => {
      c.default.updatedUnsyncedSettings({
        displayCompactAvatars: e
      })
    }), V(this, "handleMessageDisplayModeChange", e => {
      let {
        value: t
      } = e;
      P.MessageDisplayCompact.updateSetting(t === H.COMPACT), (0, T.setMessageGroupSpacing)()
    })
  }
}
let Q = e => {
  !(0, m.isDismissibleContentDismissed)(e) && (0, m.markDismissibleContentAsDismissed)(e, {
    dismissAction: j.ContentDismissActionType.AUTO,
    forceTrack: !0
  })
};

function q() {
  let e = P.MessageDisplayCompact.useSetting(),
    t = P.InlineEmbedMedia.useSetting(),
    s = P.RenderEmbeds.useSetting(),
    l = P.ClientThemeSettings.useSetting(),
    i = "UserSettingsAppearance",
    {
      enabled: d
    } = (0, O.useBrandRefreshPerksExperiment)({
      location: i
    }),
    {
      enabled: u
    } = (0, A.usePrideMonthPerksExperiment)({
      location: i
    });
  n.useEffect(() => {
    Q(o.DismissibleContent.CLIENT_THEMES_SETTINGS_BADGE), Q(o.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_BADGE), Q(o.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_COACHMARK), d && Q(o.DismissibleContent.BRAND_REFRESH_NEW_BADGE), u && Q(o.DismissibleContent.PRIDE_ICONS_APPEARANCE_BADGE)
  }, []);
  let c = (0, r.useStateFromStoresObject)([D.default, L.default, _.default, p.default, f.default], () => {
    var e, t;
    return {
      theme: D.default.theme,
      useForcedColors: _.default.useForcedColors,
      useSystemTheme: L.default.useSystemTheme,
      darkSidebar: D.default.darkSidebar,
      fontSize: _.default.fontSize,
      zoom: _.default.zoom,
      messageGroupSpacing: _.default.messageGroupSpacing,
      displayCompactAvatars: L.default.displayCompactAvatars,
      isStaff: null !== (t = null === (e = p.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff) && void 0 !== t && t,
      gradientPreset: f.default.gradientPreset
    }
  });
  return (0, a.jsx)(z, {
    messageDisplayCompact: e,
    hideSimpleEmbedContent: t && s,
    clientTheme: l,
    ...c
  })
}