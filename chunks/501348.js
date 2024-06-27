t.d(s, {
  Z: function() {
    return q
  }
}), t(47120);
var n = t(735250),
  a = t(470079),
  i = t(120356),
  r = t.n(i),
  o = t(442837),
  l = t(704215),
  c = t(780384),
  d = t(481060),
  _ = t(153867),
  E = t(230711),
  u = t(714338),
  T = t(857595),
  S = t(607070),
  I = t(627845),
  N = t(514361),
  C = t(605236),
  m = t(786761),
  A = t(3148),
  g = t(739566),
  O = t(753206),
  h = t(837741),
  p = t(804545),
  R = t(921801),
  x = t(594174),
  M = t(285952),
  D = t(153124),
  f = t(358085),
  L = t(210887),
  P = t(740492),
  Z = t(695346),
  v = t(329013),
  b = t(333859),
  j = t(726985),
  B = t(981631),
  U = t(921944),
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
    return [(0, m.e5)({
      ...(0, A.ZP)({
        channelId: K,
        content: F.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_1
      }),
      state: B.yb.SENT,
      id: "".concat(s++)
    }), (0, m.e5)({
      ...(0, A.ZP)({
        channelId: K,
        content: (0, c.wj)(e) ? F.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_2_DARK : F.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_2_LIGHT
      }),
      state: B.yb.SENT,
      id: "".concat(s++)
    }), (0, m.e5)({
      ...(0, A.ZP)({
        channelId: K,
        content: F.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_3
      }),
      state: B.yb.SENT,
      id: "".concat(s++)
    }), (0, m.e5)({
      ...(0, A.ZP)({
        channelId: K,
        content: F.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_4
      }),
      state: B.yb.SENT,
      id: "".concat(s++)
    }), (0, m.e5)({
      ...(0, A.ZP)({
        channelId: K,
        content: F.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_5
      }),
      state: B.yb.SENT,
      id: "".concat(s)
    })]
  };
class Q extends a.Component {
  renderZoomSlider() {
    return f.isPlatformEmbedded ? (0, n.jsxs)(d.FormItem, {
      className: y.marginTop20,
      children: [(0, n.jsx)(d.FormTitle, {
        id: k,
        tag: d.FormTitleTags.H5,
        className: y.marginBottom8,
        children: F.Z.Messages.ACCESSIBILITY_ZOOM_LEVEL_LABEL
      }), (0, n.jsx)(d.Slider, {
        className: r()(y.marginTop20, y.marginBottom4),
        initialValue: this.props.zoom,
        defaultValue: B.yqN.ZOOM_DEFAULT,
        markers: B.yqN.ZOOM_SCALES,
        stickToMarkers: !0,
        onValueChange: this.handleZoomChange,
        onValueRender: this.handleSliderRender,
        "aria-labelledby": k
      }), (0, n.jsx)(d.FormText, {
        type: d.FormText.Types.DESCRIPTION,
        children: F.Z.Messages.USER_SETTINGS_APPEARANCE_ZOOM_TIP.format({
          modKey: u.Z.modKey
        })
      })]
    }) : null
  }
  renderFontScaleSlider() {
    return (0, n.jsxs)(d.FormItem, {
      className: y.marginTop20,
      children: [(0, n.jsx)(d.FormTitle, {
        id: w,
        tag: d.FormTitleTags.H5,
        className: y.marginBottom8,
        children: F.Z.Messages.ACCESSIBILITY_FONT_SCALING_LABEL
      }), (0, n.jsx)(M.Z, {
        align: M.Z.Align.CENTER,
        children: (0, n.jsx)(d.Slider, {
          className: r()(y.marginTop20, y.marginBottom4),
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
    return (0, n.jsxs)(d.FormItem, {
      className: y.marginTop20,
      children: [(0, n.jsx)(d.FormTitle, {
        id: W,
        tag: d.FormTitleTags.H5,
        className: y.marginBottom8,
        children: F.Z.Messages.ACCESSIBILITY_MESSAGE_GROUP_SPACING
      }), (0, n.jsx)(d.Slider, {
        className: r()(y.marginTop20, y.marginBottom4),
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
      hideSimpleEmbedContent: a
    } = this.props, i = (0, c.wj)(s) ? this.darkMessages : this.lightMessages;
    return (0, n.jsx)(d.FocusBlock, {
      children: (0, n.jsx)(d.Card, {
        className: r()(V.preview, y.marginBottom40, e ? V.compactPreview : void 0, "group-spacing-".concat(null != t ? t : e ? G.c8 : G.pq)),
        outline: !0,
        "aria-hidden": !0,
        children: i.map((s, t) => (0, n.jsx)(O.Z, {
          author: (0, g.ZH)(s),
          message: s,
          compact: e,
          isGroupStart: t % 2 == 0,
          className: 0 === t ? V.firstMessage : void 0,
          hideSimpleEmbedContent: a
        }, s.id))
      })
    })
  }
  renderTheme() {
    let {
      theme: e,
      useForcedColors: s,
      darkSidebar: t,
      gradientPreset: a
    } = this.props;
    return s ? (0, n.jsx)(d.FormItem, {
      className: r()(y.marginTop8, y.marginBottom40),
      title: (0, n.jsx)("div", {
        className: V.themeTitle,
        children: (0, n.jsx)("div", {
          className: V.title,
          children: F.Z.Messages.THEME
        })
      }),
      children: (0, n.jsx)(d.FormText, {
        type: d.FormText.Types.DEFAULT,
        className: V.forcedColorsWarning,
        children: (0, I.b)() ? F.Z.Messages.THEME_DISABLED_FOR_CONTRAST_SYNC.format({
          onClick: () => {
            E.Z.open(B.oAB.ACCESSIBILITY)
          }
        }) : F.Z.Messages.THEME_DISABLED_FOR_FORCED_COLORS
      })
    }) : (0, n.jsxs)(d.FormItem, {
      className: y.marginTop8,
      title: (0, n.jsxs)("div", {
        className: V.themeTitle,
        children: [(0, n.jsx)("div", {
          className: V.title,
          children: F.Z.Messages.THEME
        }), (0, n.jsx)(v.g, {})]
      }),
      children: [(0, n.jsx)(v.i, {}), (0, n.jsx)(R.F, {
        setting: j.s6.APPEARANCE_ICON,
        children: (0, n.jsx)(b.c, {})
      }), (0, n.jsx)(d.FormSwitch, {
        value: t && (0, c.ap)(e) && !s,
        disabled: e !== B.BRd.LIGHT || s || null != a,
        onChange: this.handleDarkSidebarChecked,
        className: y.marginTop20,
        children: F.Z.Messages.ACCESSIBILITY_DARK_SIDEBAR
      })]
    })
  }
  renderDisplayMode() {
    return (0, n.jsxs)(d.FormItem, {
      title: F.Z.Messages.MESSAGE_DISPLAY_MODE_LABEL,
      className: y.marginTop8,
      children: [(0, n.jsx)(d.RadioGroup, {
        options: [{
          name: F.Z.Messages.COZY_MODE,
          value: H.COZY
        }, {
          name: F.Z.Messages.COMPACT_MODE,
          value: H.COMPACT
        }],
        onChange: this.handleMessageDisplayModeChange,
        value: this.props.messageDisplayCompact ? H.COMPACT : H.COZY
      }), (0, n.jsx)(d.FormSwitch, {
        value: this.props.messageDisplayCompact && this.props.displayCompactAvatars,
        disabled: !this.props.messageDisplayCompact,
        onChange: this.handleDisplayCompactAvatarsChanged,
        className: y.marginTop20,
        children: F.Z.Messages.DISPLAY_COMPACT_AVATARS
      })]
    })
  }
  handleDarkSidebarChecked() {
    (0, T.lq)()
  }
  renderScalingAndSpacing() {
    return (0, n.jsxs)(n.Fragment, {
      children: [this.renderFontScaleSlider(), this.renderMessageGroupSpacingSlider(), this.renderZoomSlider(), (0, n.jsx)(d.FormDivider, {
        className: y.marginTop20
      })]
    })
  }
  render() {
    return (0, n.jsxs)(d.FormSection, {
      tag: d.FormTitleTags.H1,
      title: F.Z.Messages.APPEARANCE,
      children: [(0, n.jsxs)(R.F, {
        setting: j.s6.APPEARANCE_THEME,
        children: [this.renderPreview(), this.renderTheme()]
      }), (0, n.jsx)(R.F, {
        setting: j.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
        children: this.renderDisplayMode()
      }), (0, n.jsx)(R.F, {
        setting: j.s6.APPEARANCE_SCALING_SPACING,
        children: this.renderScalingAndSpacing()
      }), (0, n.jsx)(d.Text, {
        variant: "text-md/normal",
        className: y.marginTop20,
        children: F.Z.Messages.APPEARANCE_SETTINGS_ACCESSIBILITY_LINK.format({
          onAccessibilityClick() {
            E.Z.open(B.oAB.ACCESSIBILITY)
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
    (0, T.oL)(e)
  }
  handleMessageSpacingChange(e) {
    switch (e) {
      case 0:
      case 4:
      case 8:
      case 16:
      case 24:
        (0, T.ZZ)(e)
    }
  }
  handleZoomChange(e) {
    (0, T.cq)(e)
  }
  constructor(...e) {
    super(...e), Y(this, "darkMessages", z(B.BRd.DARK)), Y(this, "lightMessages", z(B.BRd.LIGHT)), Y(this, "handleDisplayCompactAvatarsChanged", e => {
      _.ZP.updatedUnsyncedSettings({
        displayCompactAvatars: e
      })
    }), Y(this, "handleMessageDisplayModeChange", e => {
      let {
        value: s
      } = e;
      Z.jU.updateSetting(s === H.COMPACT), (0, T.ZZ)()
    })
  }
}
let X = e => {
  !(0, C.un)(e) && (0, C.EW)(e, {
    dismissAction: U.L.AUTO,
    forceTrack: !0
  })
};

function q() {
  let e = Z.jU.useSetting(),
    s = Z.RS.useSetting(),
    t = Z.NA.useSetting(),
    i = Z.L1.useSetting(),
    r = "UserSettingsAppearance",
    {
      enabled: c
    } = (0, h.J)({
      location: r
    }),
    {
      enabled: d
    } = (0, p._)({
      location: r
    });
  a.useEffect(() => {
    X(l.z.CLIENT_THEMES_SETTINGS_BADGE), X(l.z.DEKSTOP_CUSTOM_APP_ICON_BADGE), X(l.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK), c && X(l.z.BRAND_REFRESH_NEW_BADGE), d && X(l.z.PRIDE_ICONS_APPEARANCE_BADGE)
  }, []);
  let _ = (0, o.cj)([L.Z, P.ZP, S.Z, x.default, N.Z], () => {
    var e, s;
    return {
      theme: L.Z.theme,
      useForcedColors: S.Z.useForcedColors,
      useSystemTheme: P.ZP.useSystemTheme,
      darkSidebar: L.Z.darkSidebar,
      fontSize: S.Z.fontSize,
      zoom: S.Z.zoom,
      messageGroupSpacing: S.Z.messageGroupSpacing,
      displayCompactAvatars: P.ZP.displayCompactAvatars,
      isStaff: null !== (s = null === (e = x.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff) && void 0 !== s && s,
      gradientPreset: N.Z.gradientPreset
    }
  });
  return (0, n.jsx)(Q, {
    messageDisplayCompact: e,
    hideSimpleEmbedContent: s && t,
    clientTheme: i,
    ..._
  })
}