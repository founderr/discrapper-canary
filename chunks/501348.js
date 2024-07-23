t.d(s, {
  Z: function() {
return $;
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
  I = t(607070),
  S = t(627845),
  N = t(514361),
  C = t(605236),
  m = t(786761),
  A = t(3148),
  h = t(739566),
  g = t(753206),
  O = t(837741),
  p = t(804545),
  R = t(311476),
  x = t(921801),
  M = t(594174),
  D = t(285952),
  f = t(153124),
  P = t(358085),
  L = t(210887),
  Z = t(740492),
  b = t(695346),
  v = t(329013),
  j = t(333859),
  B = t(726985),
  U = t(981631),
  G = t(921944),
  F = t(959517),
  y = t(689938),
  V = t(45031),
  Y = t(224499);

function k(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
value: t,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[s] = t, e;
}
let w = {
COZY: 'cozy',
COMPACT: 'compact'
  },
  H = (0, f.hQ)(),
  W = (0, f.hQ)(),
  K = (0, f.hQ)(),
  z = '1337',
  Q = e => {
let s = 0;
return [
  (0, m.e5)({
    ...(0, A.ZP)({
      channelId: z,
      content: y.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_1
    }),
    state: U.yb.SENT,
    id: ''.concat(s++)
  }),
  (0, m.e5)({
    ...(0, A.ZP)({
      channelId: z,
      content: (0, c.wj)(e) ? y.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_2_DARK : y.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_2_LIGHT
    }),
    state: U.yb.SENT,
    id: ''.concat(s++)
  }),
  (0, m.e5)({
    ...(0, A.ZP)({
      channelId: z,
      content: y.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_3
    }),
    state: U.yb.SENT,
    id: ''.concat(s++)
  }),
  (0, m.e5)({
    ...(0, A.ZP)({
      channelId: z,
      content: y.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_4
    }),
    state: U.yb.SENT,
    id: ''.concat(s++)
  }),
  (0, m.e5)({
    ...(0, A.ZP)({
      channelId: z,
      content: y.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_5
    }),
    state: U.yb.SENT,
    id: ''.concat(s)
  })
];
  },
  X = () => {
let e = (0, o.e7)([N.Z], () => N.Z.isPreview),
  {
    enabled: s
  } = R.Z.useExperiment({
    location: 'GradientSelectorsTitle'
  }, {
    autoTrackExposure: !1,
    disable: !e
  });
return s ? null : (0, n.jsxs)('div', {
  className: V.themeTitle,
  children: [
    (0, n.jsx)('div', {
      className: V.title,
      children: y.Z.Messages.THEME
    }),
    (0, n.jsx)(v.g, {})
  ]
});
  };
class q extends a.Component {
  renderZoomSlider() {
return P.isPlatformEmbedded ? (0, n.jsxs)(d.FormItem, {
  className: Y.marginTop20,
  children: [
    (0, n.jsx)(d.FormTitle, {
      id: H,
      tag: d.FormTitleTags.H5,
      className: Y.marginBottom8,
      children: y.Z.Messages.ACCESSIBILITY_ZOOM_LEVEL_LABEL
    }),
    (0, n.jsx)(d.Slider, {
      className: r()(Y.marginTop20, Y.marginBottom4),
      initialValue: this.props.zoom,
      defaultValue: U.yqN.ZOOM_DEFAULT,
      markers: U.yqN.ZOOM_SCALES,
      stickToMarkers: !0,
      onValueChange: this.handleZoomChange,
      onValueRender: this.handleSliderRender,
      'aria-labelledby': H
    }),
    (0, n.jsx)(d.FormText, {
      type: d.FormText.Types.DESCRIPTION,
      children: y.Z.Messages.USER_SETTINGS_APPEARANCE_ZOOM_TIP.format({
        modKey: u.Z.modKey
      })
    })
  ]
}) : null;
  }
  renderFontScaleSlider() {
return (0, n.jsxs)(d.FormItem, {
  className: Y.marginTop20,
  children: [
    (0, n.jsx)(d.FormTitle, {
      id: W,
      tag: d.FormTitleTags.H5,
      className: Y.marginBottom8,
      children: y.Z.Messages.ACCESSIBILITY_FONT_SCALING_LABEL
    }),
    (0, n.jsx)(D.Z, {
      align: D.Z.Align.CENTER,
      children: (0, n.jsx)(d.Slider, {
        className: r()(Y.marginTop20, Y.marginBottom4),
        initialValue: this.props.fontSize,
        defaultValue: U.yqN.FONT_SIZE_DEFAULT,
        markers: U.yqN.FONT_SIZES,
        stickToMarkers: !0,
        onValueChange: this.handleFontSizeChange,
        onValueRender: this.handleSliderRenderPX,
        onMarkerRender: this.handleSliderRenderPX,
        getAriaValueText: this.handleSliderValueText,
        'aria-labelledby': W
      })
    })
  ]
});
  }
  renderMessageGroupSpacingSlider() {
let {
  messageDisplayCompact: e,
  messageGroupSpacing: s
} = this.props;
return (0, n.jsxs)(d.FormItem, {
  className: Y.marginTop20,
  children: [
    (0, n.jsx)(d.FormTitle, {
      id: K,
      tag: d.FormTitleTags.H5,
      className: Y.marginBottom8,
      children: y.Z.Messages.ACCESSIBILITY_MESSAGE_GROUP_SPACING
    }),
    (0, n.jsx)(d.Slider, {
      className: r()(Y.marginTop20, Y.marginBottom4),
      initialValue: s,
      defaultValue: e ? F.c8 : F.pq,
      markers: F.fP,
      stickToMarkers: !0,
      onValueChange: this.handleMessageSpacingChange,
      onValueRender: this.handleSliderRenderPX,
      onMarkerRender: this.handleSliderRenderPX,
      getAriaValueText: this.handleSliderValueText,
      'aria-labelledby': K
    })
  ]
});
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
    className: r()(V.preview, Y.marginBottom40, e ? V.compactPreview : void 0, 'group-spacing-'.concat(null != t ? t : e ? F.c8 : F.pq)),
    outline: !0,
    'aria-hidden': !0,
    children: i.map((s, t) => (0, n.jsx)(g.Z, {
      author: (0, h.ZH)(s),
      message: s,
      compact: e,
      isGroupStart: t % 2 == 0,
      className: 0 === t ? V.firstMessage : void 0,
      hideSimpleEmbedContent: a
    }, s.id))
  })
});
  }
  renderTheme() {
let {
  theme: e,
  useForcedColors: s,
  darkSidebar: t,
  gradientPreset: a
} = this.props;
return s ? (0, n.jsx)(d.FormItem, {
  className: r()(Y.marginTop8, Y.marginBottom40),
  title: (0, n.jsx)('div', {
    className: V.themeTitle,
    children: (0, n.jsx)('div', {
      className: V.title,
      children: y.Z.Messages.THEME
    })
  }),
  children: (0, n.jsx)(d.FormText, {
    type: d.FormText.Types.DEFAULT,
    className: V.forcedColorsWarning,
    children: (0, S.b)() ? y.Z.Messages.THEME_DISABLED_FOR_CONTRAST_SYNC.format({
      onClick: () => {
        E.Z.open(U.oAB.ACCESSIBILITY);
      }
    }) : y.Z.Messages.THEME_DISABLED_FOR_FORCED_COLORS
  })
}) : (0, n.jsxs)(d.FormItem, {
  className: Y.marginTop8,
  title: (0, n.jsx)(X, {}),
  children: [
    (0, n.jsx)(v.i, {}),
    (0, n.jsx)(x.F, {
      setting: B.s6.APPEARANCE_ICON,
      children: (0, n.jsx)(j.c, {})
    }),
    (0, n.jsx)(d.FormSwitch, {
      value: t && (0, c.ap)(e) && !s,
      disabled: e !== U.BRd.LIGHT || s || null != a,
      onChange: this.handleDarkSidebarChecked,
      className: Y.marginTop20,
      children: y.Z.Messages.ACCESSIBILITY_DARK_SIDEBAR
    })
  ]
});
  }
  renderDisplayMode() {
return (0, n.jsxs)(d.FormItem, {
  title: y.Z.Messages.MESSAGE_DISPLAY_MODE_LABEL,
  className: Y.marginTop8,
  children: [
    (0, n.jsx)(d.RadioGroup, {
      options: [{
          name: y.Z.Messages.COZY_MODE,
          value: w.COZY
        },
        {
          name: y.Z.Messages.COMPACT_MODE,
          value: w.COMPACT
        }
      ],
      onChange: this.handleMessageDisplayModeChange,
      value: this.props.messageDisplayCompact ? w.COMPACT : w.COZY
    }),
    (0, n.jsx)(d.FormSwitch, {
      value: this.props.messageDisplayCompact && this.props.displayCompactAvatars,
      disabled: !this.props.messageDisplayCompact,
      onChange: this.handleDisplayCompactAvatarsChanged,
      className: Y.marginTop20,
      children: y.Z.Messages.DISPLAY_COMPACT_AVATARS
    })
  ]
});
  }
  handleDarkSidebarChecked() {
(0, T.lq)();
  }
  renderScalingAndSpacing() {
return (0, n.jsxs)(n.Fragment, {
  children: [
    this.renderFontScaleSlider(),
    this.renderMessageGroupSpacingSlider(),
    this.renderZoomSlider(),
    (0, n.jsx)(d.FormDivider, {
      className: Y.marginTop20
    })
  ]
});
  }
  render() {
return (0, n.jsxs)(d.FormSection, {
  tag: d.FormTitleTags.H1,
  title: y.Z.Messages.APPEARANCE,
  children: [
    (0, n.jsxs)(x.F, {
      setting: B.s6.APPEARANCE_THEME,
      children: [
        this.renderPreview(),
        this.renderTheme()
      ]
    }),
    (0, n.jsx)(x.F, {
      setting: B.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
      children: this.renderDisplayMode()
    }),
    (0, n.jsx)(x.F, {
      setting: B.s6.APPEARANCE_SCALING_SPACING,
      children: this.renderScalingAndSpacing()
    }),
    (0, n.jsx)(d.Text, {
      variant: 'text-md/normal',
      className: Y.marginTop20,
      children: y.Z.Messages.APPEARANCE_SETTINGS_ACCESSIBILITY_LINK.format({
        onAccessibilityClick() {
          E.Z.open(U.oAB.ACCESSIBILITY);
        }
      })
    })
  ]
});
  }
  handleSliderRender(e) {
return ''.concat(e.toFixed(0), '%');
  }
  handleSliderRenderPX(e) {
return ''.concat(e.toFixed(0), 'px');
  }
  handleSliderValueText(e) {
return y.Z.Messages.PIXEL_VALUE_A11Y_TEXT.format({
  value: e
});
  }
  handleFontSizeChange(e) {
(0, T.oL)(e);
  }
  handleMessageSpacingChange(e) {
switch (e) {
  case 0:
  case 4:
  case 8:
  case 16:
  case 24:
    (0, T.ZZ)(e);
}
  }
  handleZoomChange(e) {
(0, T.cq)(e);
  }
  constructor(...e) {
super(...e), k(this, 'darkMessages', Q(U.BRd.DARK)), k(this, 'lightMessages', Q(U.BRd.LIGHT)), k(this, 'handleDisplayCompactAvatarsChanged', e => {
  _.ZP.updatedUnsyncedSettings({
    displayCompactAvatars: e
  });
}), k(this, 'handleMessageDisplayModeChange', e => {
  let {
    value: s
  } = e;
  b.jU.updateSetting(s === w.COMPACT), (0, T.ZZ)();
});
  }
}
let J = e => {
  !(0, C.un)(e) && (0, C.EW)(e, {
dismissAction: G.L.AUTO,
forceTrack: !0
  });
};

function $() {
  let e = b.jU.useSetting(),
s = b.RS.useSetting(),
t = b.NA.useSetting(),
i = b.L1.useSetting(),
r = 'UserSettingsAppearance',
{
  enabled: c
} = (0, O.J)({
  location: r
}),
{
  enabled: d
} = (0, p._)({
  location: r
});
  a.useEffect(() => {
J(l.z.CLIENT_THEMES_SETTINGS_BADGE), J(l.z.DEKSTOP_CUSTOM_APP_ICON_BADGE), J(l.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK), c && J(l.z.BRAND_REFRESH_NEW_BADGE), d && J(l.z.PRIDE_ICONS_APPEARANCE_BADGE);
  }, []);
  let _ = (0, o.cj)([
L.Z,
Z.ZP,
I.Z,
M.default,
N.Z
  ], () => {
var e, s;
return {
  theme: L.Z.theme,
  useForcedColors: I.Z.useForcedColors,
  useSystemTheme: Z.ZP.useSystemTheme,
  darkSidebar: L.Z.darkSidebar,
  fontSize: I.Z.fontSize,
  zoom: I.Z.zoom,
  messageGroupSpacing: I.Z.messageGroupSpacing,
  displayCompactAvatars: Z.ZP.displayCompactAvatars,
  isStaff: null !== (s = null === (e = M.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff) && void 0 !== s && s,
  gradientPreset: N.Z.gradientPreset
};
  });
  return (0, n.jsx)(q, {
messageDisplayCompact: e,
hideSimpleEmbedContent: s && t,
clientTheme: i,
..._
  });
}