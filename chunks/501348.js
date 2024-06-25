t.d(s, {
  Z: function() {
    return q
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  a = t(120356),
  l = t.n(a),
  r = t(442837),
  o = t(704215),
  c = t(780384),
  E = t(481060),
  d = t(153867),
  _ = t(230711),
  T = t(714338),
  S = t(857595),
  u = t(607070),
  I = t(627845),
  N = t(514361),
  A = t(605236),
  C = t(786761),
  O = t(3148),
  m = t(739566),
  h = t(753206),
  g = t(837741),
  R = t(804545),
  M = t(921801),
  x = t(594174),
  p = t(285952),
  D = t(153124),
  L = t(358085),
  P = t(210887),
  Z = t(740492),
  f = t(695346),
  v = t(329013),
  j = t(333859),
  U = t(726985),
  B = t(981631),
  b = t(921944),
  G = t(959517),
  F = t(689938),
  V = t(225731),
  y = t(331651);

function Y(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
let H = {
    COZY: "cozy",
    COMPACT: "compact"
  },
  k = (0, D.hQ)(),
  w = (0, D.hQ)(),
  W = (0, D.hQ)(),
  K = "1337",
  z = e => {
    let s = 0;
    return [(0, C.e5)({
      ...(0, O.ZP)({
        channelId: K,
        content: F.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_1
      }),
      state: B.yb.SENT,
      id: "".concat(s++)
    }), (0, C.e5)({
      ...(0, O.ZP)({
        channelId: K,
        content: (0, c.wj)(e) ? F.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_2_DARK : F.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_2_LIGHT
      }),
      state: B.yb.SENT,
      id: "".concat(s++)
    }), (0, C.e5)({
      ...(0, O.ZP)({
        channelId: K,
        content: F.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_3
      }),
      state: B.yb.SENT,
      id: "".concat(s++)
    }), (0, C.e5)({
      ...(0, O.ZP)({
        channelId: K,
        content: F.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_4
      }),
      state: B.yb.SENT,
      id: "".concat(s++)
    }), (0, C.e5)({
      ...(0, O.ZP)({
        channelId: K,
        content: F.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_5
      }),
      state: B.yb.SENT,
      id: "".concat(s)
    })]
  };
class Q extends i.Component {
  renderZoomSlider() {
    return L.isPlatformEmbedded ? (0, n.jsxs)(E.FormItem, {
      className: y.marginTop20,
      children: [(0, n.jsx)(E.FormTitle, {
        id: k,
        tag: E.FormTitleTags.H5,
        className: y.marginBottom8,
        children: F.Z.Messages.ACCESSIBILITY_ZOOM_LEVEL_LABEL
      }), (0, n.jsx)(E.Slider, {
        className: l()(y.marginTop20, y.marginBottom4),
        initialValue: this.props.zoom,
        defaultValue: B.yqN.ZOOM_DEFAULT,
        markers: B.yqN.ZOOM_SCALES,
        stickToMarkers: !0,
        onValueChange: this.handleZoomChange,
        onValueRender: this.handleSliderRender,
        "aria-labelledby": k
      }), (0, n.jsx)(E.FormText, {
        type: E.FormText.Types.DESCRIPTION,
        children: F.Z.Messages.USER_SETTINGS_APPEARANCE_ZOOM_TIP.format({
          modKey: T.Z.modKey
        })
      })]
    }) : null
  }
  renderFontScaleSlider() {
    return (0, n.jsxs)(E.FormItem, {
      className: y.marginTop20,
      children: [(0, n.jsx)(E.FormTitle, {
        id: w,
        tag: E.FormTitleTags.H5,
        className: y.marginBottom8,
        children: F.Z.Messages.ACCESSIBILITY_FONT_SCALING_LABEL
      }), (0, n.jsx)(p.Z, {
        align: p.Z.Align.CENTER,
        children: (0, n.jsx)(E.Slider, {
          className: l()(y.marginTop20, y.marginBottom4),
          initialValue: this.props.fontSize,
          defaultValue: B.yqN.FONT_SIZE_DEFAULT,
          markers: B.yqN.FONT_SIZES,
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
      messageGroupSpacing: s
    } = this.props;
    return (0, n.jsxs)(E.FormItem, {
      className: y.marginTop20,
      children: [(0, n.jsx)(E.FormTitle, {
        id: W,
        tag: E.FormTitleTags.H5,
        className: y.marginBottom8,
        children: F.Z.Messages.ACCESSIBILITY_MESSAGE_GROUP_SPACING
      }), (0, n.jsx)(E.Slider, {
        className: l()(y.marginTop20, y.marginBottom4),
        initialValue: s,
        defaultValue: e ? G.c8 : G.pq,
        markers: G.fP,
        stickToMarkers: !0,
        onValueChange: this.handleMessageSpacingChange,
        onValueRender: this.handleSliderRenderPX,
        onMarkerRender: this.handleSliderRenderPX,
        getAriaValueText: this.handleSliderValueText,
        "aria-labelledby": W
      })]
    })
  }
  renderPreview() {
    let {
      messageDisplayCompact: e,
      theme: s,
      messageGroupSpacing: t,
      hideSimpleEmbedContent: i
    } = this.props, a = (0, c.wj)(s) ? this.darkMessages : this.lightMessages;
    return (0, n.jsx)(E.FocusBlock, {
      children: (0, n.jsx)(E.Card, {
        className: l()(V.preview, y.marginBottom40, e ? V.compactPreview : void 0, "group-spacing-".concat(null != t ? t : e ? G.c8 : G.pq)),
        outline: !0,
        "aria-hidden": !0,
        children: a.map((s, t) => (0, n.jsx)(h.Z, {
          author: (0, m.ZH)(s),
          message: s,
          compact: e,
          isGroupStart: t % 2 == 0,
          className: 0 === t ? V.firstMessage : void 0,
          hideSimpleEmbedContent: i
        }, s.id))
      })
    })
  }
  renderTheme() {
    let {
      theme: e,
      useForcedColors: s,
      darkSidebar: t,
      gradientPreset: i
    } = this.props;
    return s ? (0, n.jsx)(E.FormItem, {
      className: l()(y.marginTop8, y.marginBottom40),
      title: (0, n.jsx)("div", {
        className: V.themeTitle,
        children: (0, n.jsx)("div", {
          className: V.title,
          children: F.Z.Messages.THEME
        })
      }),
      children: (0, n.jsx)(E.FormText, {
        type: E.FormText.Types.DEFAULT,
        className: V.forcedColorsWarning,
        children: (0, I.b)() ? F.Z.Messages.THEME_DISABLED_FOR_CONTRAST_SYNC.format({
          onClick: () => {
            _.Z.open(B.oAB.ACCESSIBILITY)
          }
        }) : F.Z.Messages.THEME_DISABLED_FOR_FORCED_COLORS
      })
    }) : (0, n.jsxs)(E.FormItem, {
      className: y.marginTop8,
      title: (0, n.jsxs)("div", {
        className: V.themeTitle,
        children: [(0, n.jsx)("div", {
          className: V.title,
          children: F.Z.Messages.THEME
        }), (0, n.jsx)(v.g, {})]
      }),
      children: [(0, n.jsx)(v.i, {}), (0, n.jsx)(M.F, {
        setting: U.s6.APPEARANCE_ICON,
        children: (0, n.jsx)(j.c, {})
      }), (0, n.jsx)(E.FormSwitch, {
        value: t && (0, c.ap)(e) && !s,
        disabled: e !== B.BRd.LIGHT || s || null != i,
        onChange: this.handleDarkSidebarChecked,
        className: y.marginTop20,
        children: F.Z.Messages.ACCESSIBILITY_DARK_SIDEBAR
      })]
    })
  }
  renderDisplayMode() {
    return (0, n.jsxs)(E.FormItem, {
      title: F.Z.Messages.MESSAGE_DISPLAY_MODE_LABEL,
      className: y.marginTop8,
      children: [(0, n.jsx)(E.RadioGroup, {
        options: [{
          name: F.Z.Messages.COZY_MODE,
          value: H.COZY
        }, {
          name: F.Z.Messages.COMPACT_MODE,
          value: H.COMPACT
        }],
        onChange: this.handleMessageDisplayModeChange,
        value: this.props.messageDisplayCompact ? H.COMPACT : H.COZY
      }), (0, n.jsx)(E.FormSwitch, {
        value: this.props.messageDisplayCompact && this.props.displayCompactAvatars,
        disabled: !this.props.messageDisplayCompact,
        onChange: this.handleDisplayCompactAvatarsChanged,
        className: y.marginTop20,
        children: F.Z.Messages.DISPLAY_COMPACT_AVATARS
      })]
    })
  }
  handleDarkSidebarChecked() {
    (0, S.lq)()
  }
  renderScalingAndSpacing() {
    return (0, n.jsxs)(n.Fragment, {
      children: [this.renderFontScaleSlider(), this.renderMessageGroupSpacingSlider(), this.renderZoomSlider(), (0, n.jsx)(E.FormDivider, {
        className: y.marginTop20
      })]
    })
  }
  render() {
    return (0, n.jsxs)(E.FormSection, {
      tag: E.FormTitleTags.H1,
      title: F.Z.Messages.APPEARANCE,
      children: [(0, n.jsxs)(M.F, {
        setting: U.s6.APPEARANCE_THEME,
        children: [this.renderPreview(), this.renderTheme()]
      }), (0, n.jsx)(M.F, {
        setting: U.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
        children: this.renderDisplayMode()
      }), (0, n.jsx)(M.F, {
        setting: U.s6.APPEARANCE_SCALING_SPACING,
        children: this.renderScalingAndSpacing()
      }), (0, n.jsx)(E.Text, {
        variant: "text-md/normal",
        className: y.marginTop20,
        children: F.Z.Messages.APPEARANCE_SETTINGS_ACCESSIBILITY_LINK.format({
          onAccessibilityClick() {
            _.Z.open(B.oAB.ACCESSIBILITY)
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
    return F.Z.Messages.PIXEL_VALUE_A11Y_TEXT.format({
      value: e
    })
  }
  handleFontSizeChange(e) {
    (0, S.oL)(e)
  }
  handleMessageSpacingChange(e) {
    switch (e) {
      case 0:
      case 4:
      case 8:
      case 16:
      case 24:
        (0, S.ZZ)(e)
    }
  }
  handleZoomChange(e) {
    (0, S.cq)(e)
  }
  constructor(...e) {
    super(...e), Y(this, "darkMessages", z(B.BRd.DARK)), Y(this, "lightMessages", z(B.BRd.LIGHT)), Y(this, "handleDisplayCompactAvatarsChanged", e => {
      d.ZP.updatedUnsyncedSettings({
        displayCompactAvatars: e
      })
    }), Y(this, "handleMessageDisplayModeChange", e => {
      let {
        value: s
      } = e;
      f.jU.updateSetting(s === H.COMPACT), (0, S.ZZ)()
    })
  }
}
let X = e => {
  !(0, A.un)(e) && (0, A.EW)(e, {
    dismissAction: b.L.AUTO,
    forceTrack: !0
  })
};

function q() {
  let e = f.jU.useSetting(),
    s = f.RS.useSetting(),
    t = f.NA.useSetting(),
    a = f.L1.useSetting(),
    l = "UserSettingsAppearance",
    {
      enabled: c
    } = (0, g.J)({
      location: l
    }),
    {
      enabled: E
    } = (0, R._)({
      location: l
    });
  i.useEffect(() => {
    X(o.z.CLIENT_THEMES_SETTINGS_BADGE), X(o.z.DEKSTOP_CUSTOM_APP_ICON_BADGE), X(o.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK), c && X(o.z.BRAND_REFRESH_NEW_BADGE), E && X(o.z.PRIDE_ICONS_APPEARANCE_BADGE)
  }, []);
  let d = (0, r.cj)([P.Z, Z.ZP, u.Z, x.default, N.Z], () => {
    var e, s;
    return {
      theme: P.Z.theme,
      useForcedColors: u.Z.useForcedColors,
      useSystemTheme: Z.ZP.useSystemTheme,
      darkSidebar: P.Z.darkSidebar,
      fontSize: u.Z.fontSize,
      zoom: u.Z.zoom,
      messageGroupSpacing: u.Z.messageGroupSpacing,
      displayCompactAvatars: Z.ZP.displayCompactAvatars,
      isStaff: null !== (s = null === (e = x.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff) && void 0 !== s && s,
      gradientPreset: N.Z.gradientPreset
    }
  });
  return (0, n.jsx)(Q, {
    messageDisplayCompact: e,
    hideSimpleEmbedContent: s && t,
    clientTheme: a,
    ...d
  })
}