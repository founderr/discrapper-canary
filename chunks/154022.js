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
  r = s("392711"),
  o = s.n(r),
  d = s("442837"),
  u = s("481060"),
  c = s("230711"),
  S = s("419363"),
  E = s("857595"),
  T = s("607070"),
  _ = s("627845"),
  I = s("786761"),
  N = s("3148"),
  f = s("739566"),
  g = s("753206"),
  m = s("440849"),
  C = s("921801"),
  A = s("196051"),
  h = s("441729"),
  O = s("285952"),
  p = s("153124"),
  R = s("786048"),
  x = s("897353"),
  M = s("626135"),
  D = s("63063"),
  L = s("695346"),
  P = s("263937"),
  b = s("996073"),
  v = s("526761"),
  U = s("726985"),
  j = s("981631"),
  G = s("611480"),
  F = s("653477"),
  B = s("689938"),
  y = s("572965"),
  V = s("611273"),
  H = s("328756");
let k = (0, p.uid)(),
  Y = (0, p.uid)(),
  w = (0, p.uid)(),
  W = o().debounce(e => {
    (0, E.setSaturation)(e)
  }, 250),
  K = o().debounce(e => {
    (0, A.setSpeechRate)(e)
  }, 250);

function z(e) {
  return (0, a.jsxs)(u.FormSection, {
    tag: u.FormTitleTags.H1,
    title: B.default.Messages.ACCESSIBILITY,
    children: [(0, a.jsx)(Q, {}), (0, a.jsx)(C.Subsetting, {
      setting: U.WebSetting.ACCESSIBILITY_SATURATION,
      children: (0, a.jsx)(q, {})
    }), (0, a.jsx)(u.FormDivider, {}), (0, a.jsx)(C.Subsetting, {
      setting: U.WebSetting.ACCESSIBILITY_LINK_DECORATIONS,
      children: (0, a.jsx)(X, {})
    }), (0, a.jsx)(C.Subsetting, {
      setting: U.WebSetting.ACCESSIBILITY_ROLE_STYLE,
      children: (0, a.jsx)(Z, {})
    }), (0, a.jsx)(C.Subsetting, {
      setting: U.WebSetting.ACCESSIBILITY_TAGS,
      children: (0, a.jsx)(J, {})
    }), (0, a.jsx)(C.Subsetting, {
      setting: U.WebSetting.ACCESSIBILITY_SYNC_PROFILE_THEME,
      children: (0, a.jsx)($, {})
    }), (0, _.canEnableForcedColors)() ? (0, a.jsxs)(C.Subsetting, {
      setting: U.WebSetting.ACCESSIBILITY_CONTRAST,
      children: [(0, a.jsx)(ee, {}), " "]
    }) : null, (0, a.jsx)(C.Subsetting, {
      setting: U.WebSetting.ACCESSIBILITY_REDUCED_MOTION,
      children: (0, a.jsx)(et, {})
    }), (0, a.jsx)(C.Subsetting, {
      setting: U.WebSetting.ACCESSIBILITY_STICKERS,
      children: (0, a.jsx)(es, {})
    }), (0, a.jsx)(C.Subsetting, {
      setting: U.WebSetting.ACCESSIBILITY_MESSAGES,
      children: (0, a.jsx)(ea, {})
    }), (0, a.jsx)(C.Subsetting, {
      setting: U.WebSetting.ACCESSIBILITY_TEXT_TO_SPEECH,
      children: (0, a.jsx)(en, {})
    }), (0, a.jsx)(u.FormDivider, {
      className: V.marginBottom20
    }), (0, a.jsx)(u.Text, {
      variant: "text-md/normal",
      children: B.default.Messages.ACCESSIBILITY_SETTINGS_APPEARANCE_LINK.format({
        onAppearanceClick() {
          c.default.open(j.UserSettingsSections.APPEARANCE)
        }
      })
    })]
  })
}

function Q() {
  let e = L.MessageDisplayCompact.useSetting(),
    [t] = n.useState(() => {
      let e = (0, I.createMessageRecord)({
        ...(0, N.default)({
          channelId: "1337",
          content: B.default.Messages.ACCESSIBILITY_SETTINGS_SATURATION_LINK_PREVIEW_MESSAGE.format({
            previewLink: "https://discord.com/accessibility"
          })
        }),
        state: j.MessageStates.SENT,
        id: "".concat(0)
      });
      return e.colorString = "green", e
    });
  return (0, a.jsx)(u.FocusBlock, {
    children: (0, a.jsxs)(u.Card, {
      className: y.preview,
      "aria-hidden": !0,
      children: [(0, a.jsxs)("div", {
        className: y.previewHeader,
        children: [(0, a.jsx)(u.Button, {
          size: u.Button.Sizes.SMALL,
          color: u.Button.Colors.BRAND,
          children: B.default.Messages.ACCESSIBILITY_EXAMPLE_BUTTON_LABEL
        }), (0, a.jsx)("div", {
          className: y.previewAvatars,
          children: [j.StatusTypes.ONLINE, j.StatusTypes.DND, j.StatusTypes.IDLE].map(e => (0, a.jsx)(u.AnimatedAvatar, {
            "aria-label": B.default.Messages.USER_SETTINGS_AVATAR,
            src: H,
            size: u.AvatarSizes.SIZE_32,
            status: e
          }, e))
        })]
      }), (0, a.jsx)("div", {
        className: y.previewMessage,
        children: (0, a.jsx)(g.default, {
          compact: e,
          author: {
            ...(0, f.getMessageAuthor)(t),
            colorString: "#DD80F4"
          },
          message: t
        })
      })]
    })
  })
}

function q() {
  let {
    saturation: e,
    desaturateUserColors: t
  } = (0, d.useStateFromStoresObject)([T.default], () => ({
    saturation: T.default.saturation,
    desaturateUserColors: T.default.desaturateUserColors
  }));
  return (0, a.jsxs)(u.FormSection, {
    className: V.marginTop20,
    children: [(0, a.jsx)(u.FormTitle, {
      id: k,
      className: V.marginBottom8,
      children: B.default.Messages.ACCESSIBILITY_SETTINGS_SATURATION_TITLE
    }), (0, a.jsx)(u.FormText, {
      id: Y,
      type: u.FormText.Types.DESCRIPTION,
      className: V.marginBottom20,
      children: B.default.Messages.ACCESSIBILITY_SETTINGS_SATURATION_DESCRIPTION
    }), (0, a.jsx)(u.Slider, {
      "aria-labelledby": k,
      "aria-describedby": Y,
      markers: j.Accessibility.SATURATION_INCREMENTS,
      equidistant: !0,
      stickToMarkers: !0,
      maxValue: 1,
      minValue: 0,
      initialValue: e,
      onValueChange: W,
      onMarkerRender: e => 100 * e % 2 == 0 ? "".concat(100 * e, "%") : void 0
    }), (0, a.jsx)(u.FormSwitch, {
      hideBorder: !0,
      className: i()(V.marginTop8, V.marginBottom20),
      value: t,
      onChange: E.toggleDesaturateUserColors,
      note: B.default.Messages.ACCESSIBILITY_SETTINGS_SATURATION_CUSTOM_COLORS_DESCRIPTION,
      children: B.default.Messages.ACCESSIBILITY_SETTINGS_SATURATION_CUSTOM_COLORS_LABEL
    })]
  })
}

function X() {
  let e = (0, d.useStateFromStores)([T.default], () => T.default.alwaysShowLinkDecorations);
  return (0, a.jsx)(u.FormItem, {
    className: V.marginTop20,
    children: (0, a.jsx)(u.FormSwitch, {
      note: B.default.Messages.ACCESSIBILITY_SETTINGS_ALWAYS_SHOW_LINK_DECORATIONS_NOTE,
      value: e,
      onChange: function() {
        (0, E.setAlwaysShowLinkDecorations)(!e)
      },
      children: B.default.Messages.ACCESSIBILITY_SETTINGS_ALWAYS_SHOW_LINK_DECORATIONS_LABEL
    })
  })
}

function Z() {
  let e = (0, d.useStateFromStores)([T.default], () => T.default.roleStyle);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(u.FormItem, {
      title: B.default.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_TITLE,
      className: V.marginTop20,
      children: [(0, a.jsx)(u.FormText, {
        type: u.FormText.Types.DESCRIPTION,
        className: V.marginBottom8,
        children: B.default.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_DESCRIPTION
      }), (0, a.jsx)(u.RadioGroup, {
        options: [{
          name: B.default.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_USERNAME_LABEL,
          value: "username"
        }, {
          name: B.default.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_DOT_LABEL,
          value: "dot"
        }, {
          name: B.default.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_HIDDEN_LABEL,
          value: "hidden"
        }],
        onChange: function(e) {
          (0, E.setRoleStyle)(e.value)
        },
        value: e
      })]
    }), (0, a.jsx)(u.FormDivider, {
      className: V.marginTop20
    })]
  })
}

function J() {
  let e = (0, d.useStateFromStores)([T.default], () => T.default.hideTags);
  return (0, a.jsx)(u.FormItem, {
    title: B.default.Messages.ACCESSIBILITY_SETTINGS_TAGS_TITLE,
    className: V.marginTop20,
    children: (0, a.jsx)(u.FormSwitch, {
      value: !e,
      onChange: () => (0, E.setHideTags)(!e),
      children: B.default.Messages.ACCESSIBILITY_SETTINGS_TAGS_LABEL
    })
  })
}

function $() {
  let e = (0, d.useStateFromStores)([T.default], () => T.default.syncProfileThemeWithUserTheme),
    t = n.useRef(null);
  return (0, b.default)(t, v.AccessibilityScrollPositions.SYNC_PROFILE_THEME_WITH_USER_THEME), (0, a.jsx)(u.FormItem, {
    ref: t,
    title: B.default.Messages.ACCESSIBILITY_SETTINGS_PROFILE_COLORS_TITLE,
    className: i()(V.marginTop20, y.syncProfileThemeWithUserTheme),
    children: (0, a.jsx)(u.FormSwitch, {
      note: B.default.Messages.ACCESSIBILITY_SETTINGS_PROFILE_THEMES_NOTE.format({
        onThemeClick() {
          c.default.open(j.UserSettingsSections.APPEARANCE)
        }
      }),
      className: V.marginTop20,
      value: e,
      onChange: E.toggleSyncProfileThemeWithUserTheme,
      children: B.default.Messages.ACCESSIBILITY_SETTINGS_PROFILE_THEMES_DESCRIPTION
    })
  })
}

function ee() {
  let [e] = (0, d.useStateFromStoresArray)([T.default], () => [T.default.syncForcedColors, T.default.systemForcedColors]), [t, s] = n.useState(e);
  n.useEffect(() => {
    s(e)
  }, [e]);
  let l = n.useRef(null);
  n.useEffect(() => {
    null != l.current && (clearTimeout(l.current), l.current = null), t !== e && (l.current = setTimeout(() => (0, E.setSyncForcedColors)(t), 150))
  }, [t, e]);
  let i = B.default.Messages.ACCESSIBILITY_SETTINGS_SYNC_FORCED_COLORS_DESCRIPTION.format({
    learnMoreLink: D.default.getArticleURL(j.HelpdeskArticles.FORCED_COLORS)
  });
  return (0, a.jsx)(u.FormItem, {
    title: B.default.Messages.ACCESSIBILITY_SETTINGS_CONTRAST,
    className: V.marginTop20,
    children: (0, a.jsx)(u.FormSwitch, {
      value: t,
      note: i,
      onChange: s,
      children: B.default.Messages.ACCESSIBILITY_SETTINGS_SYNC_FORCED_COLORS_LABEL
    })
  })
}

function et() {
  let e = L.GifAutoPlay.useSetting(),
    t = L.AnimateEmoji.useSetting(),
    {
      useReducedMotion: s,
      rawPrefersReducedMotion: l,
      systemPrefersReducedMotion: r,
      gifAutoPlayOverrideReason: o,
      animateEmojiOverrideReason: c
    } = (0, d.useStateFromStoresObject)([T.default, P.default], () => ({
      systemPrefersReducedMotion: T.default.systemPrefersReducedMotion,
      rawPrefersReducedMotion: T.default.rawPrefersReducedMotion,
      useReducedMotion: T.default.useReducedMotion,
      gifAutoPlayOverrideReason: P.default.getAppliedOverrideReasonKey("gifAutoPlay"),
      animateEmojiOverrideReason: P.default.getAppliedOverrideReasonKey("animateEmoji")
    })),
    S = n.useRef(null);
  (0, b.default)(S, v.AccessibilityScrollPositions.REDUCED_MOTION);
  let _ = n.useCallback((e, t) => {
      (0, E.setPrefersReducedMotion)(t ? "auto" : r)
    }, [r]),
    I = n.useCallback(e => {
      (0, E.setPrefersReducedMotion)(e ? "reduce" : "no-preference")
    }, []);
  return (0, a.jsxs)(u.FormItem, {
    ref: S,
    title: B.default.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION,
    className: i()(V.marginTop20, y.reducedMotion),
    children: [(0, a.jsx)(u.FormText, {
      type: u.FormText.Types.DESCRIPTION,
      className: V.marginBottom8,
      children: B.default.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION_DESCRIPTION.format({
        helpdeskArticle: D.default.getArticleURL(j.HelpdeskArticles.REDUCED_MOTION)
      })
    }), (0, a.jsx)(u.Checkbox, {
      className: V.marginTop20,
      value: "auto" === l,
      shape: u.Checkbox.Shapes.BOX,
      type: u.Checkbox.Types.INVERTED,
      onChange: _,
      children: (0, a.jsx)(u.Text, {
        variant: "text-sm/normal",
        children: B.default.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION_AUTO
      })
    }), (0, a.jsx)(u.FormSwitch, {
      className: V.marginTop20,
      value: s,
      onChange: I,
      children: B.default.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION_ENABLE
    }), (0, a.jsx)(u.FormSwitch, {
      className: V.marginBottom40,
      value: e,
      note: null != o ? (0, m.default)(o) : void 0,
      onChange: L.GifAutoPlay.updateSetting,
      children: B.default.Messages.GIF_AUTO_PLAY_LABEL
    }), (0, a.jsx)(u.FormSwitch, {
      className: i()(V.marginTop8, V.marginBottom20),
      value: t,
      note: null != c ? (0, m.default)(c) : void 0,
      onChange: L.AnimateEmoji.updateSetting,
      children: B.default.Messages.ANIMATE_EMOJI
    })]
  })
}

function es() {
  let e = L.AnimateStickers.useSetting(),
    t = (0, d.useStateFromStores)([P.default], () => P.default.getAppliedOverrideReasonKey("animateStickers")),
    s = n.useCallback(e => {
      L.AnimateStickers.updateSetting(e.value)
    }, []);
  return (0, a.jsxs)(u.FormItem, {
    className: V.marginBottom40,
    title: B.default.Messages.STICKERS_AUTO_PLAY_HEADING,
    children: [(0, a.jsx)(u.FormText, {
      type: u.FormText.Types.DESCRIPTION,
      className: V.marginBottom8,
      children: null != t ? (0, m.default)(t) : B.default.Messages.STICKERS_AUTO_PLAY_HELP
    }), (0, a.jsx)(u.RadioGroup, {
      options: [{
        name: B.default.Messages.STICKERS_ALWAYS_ANIMATE,
        value: G.StickerAnimationSettings.ALWAYS_ANIMATE
      }, {
        name: B.default.Messages.STICKERS_ANIMATE_ON_INTERACTION,
        desc: B.default.Messages.STICKERS_ANIMATE_ON_INTERACTION_DESCRIPTION,
        value: G.StickerAnimationSettings.ANIMATE_ON_INTERACTION
      }, {
        name: B.default.Messages.STICKERS_NEVER_ANIMATE,
        value: G.StickerAnimationSettings.NEVER_ANIMATE
      }],
      onChange: s,
      value: e
    })]
  })
}

function ea() {
  let e = (0, d.useStateFromStores)([T.default], () => T.default.isSubmitButtonEnabled),
    t = L.UseLegacyChatInput.useSetting(),
    s = n.useRef(null);
  return (0, b.default)(s, v.AccessibilityScrollPositions.LEGACY_CHAT_INPUT), (0, a.jsxs)(u.FormItem, {
    ref: s,
    children: [(0, a.jsx)(u.FormTitle, {
      className: V.marginBottom8,
      children: B.default.Messages.FORM_LABEL_ACCESSIBILITY_CHAT_INPUT
    }), (0, a.jsx)(u.FormSwitch, {
      className: V.marginTop20,
      value: e,
      onChange: E.toggleSubmitButton,
      children: B.default.Messages.DISPLAY_SUBMIT_BUTTON
    }), (0, a.jsx)(u.FormSwitch, {
      className: V.marginTop8,
      value: t,
      note: B.default.Messages.LEGACY_CHAT_INPUT_DESCRIPTION,
      onChange: e => {
        M.default.track(j.AnalyticEvents.LEGACY_CHAT_INPUT_TOGGLED, {
          enabled: e,
          location: {
            section: j.AnalyticsSections.SETTINGS_ACCESSIBILITY
          }
        }), L.UseLegacyChatInput.updateSetting(e)
      },
      children: B.default.Messages.LEGACY_CHAT_INPUT
    })]
  })
}

function en() {
  let e = L.EnableTTSCommand.useSetting(),
    t = (0, d.useStateFromStores)([h.default], () => h.default.speechRate),
    [s, l] = n.useState(!1);
  return S.supported ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(u.FormItem, {
      children: [(0, a.jsx)(u.FormTitle, {
        className: V.marginBottom8,
        children: B.default.Messages.FORM_LABEL_TTS
      }), (0, a.jsx)(u.FormSwitch, {
        className: V.marginTop20,
        value: e,
        onChange: L.EnableTTSCommand.updateSetting,
        children: B.default.Messages.ALLOW_TTS_COMMAND
      })]
    }), (0, a.jsxs)(u.FormItem, {
      className: V.marginBottom20,
      children: [(0, a.jsx)(u.FormTitle, {
        id: w,
        className: V.marginBottom20,
        children: B.default.Messages.ACCESSIBILITY_SETTINGS_TTS_RATE_LABEL
      }), (0, a.jsx)("div", {
        className: y.ttsPreviewWrapper,
        children: (0, a.jsx)(u.Button, {
          color: u.ButtonColors.BRAND,
          onClick: () => {
            if (s) {
              (0, A.stopSpeaking)(), l(!1);
              return
            }(0, A.speakText)(B.default.Messages.ACCESSIBILITY_SETTINGS_TTS_RATE_TEST, !0, void 0, () => l(!0), () => l(!1)), l(!0)
          },
          children: (0, a.jsxs)(O.default, {
            align: O.default.Align.CENTER,
            children: [s ? (0, a.jsx)(R.default, {
              width: 24,
              height: 24
            }) : (0, a.jsx)(x.default, {
              width: 24,
              height: 24
            }), (0, a.jsx)("span", {
              children: B.default.Messages.ACCESSIBILITY_SETTINGS_TTS_RATE_PREVIEW
            }), (0, a.jsx)(u.HiddenVisually, {
              children: B.default.Messages.ACCESSIBILITY_SETTINGS_TTS_RATE_LABEL
            })]
          })
        })
      }), (0, a.jsx)(u.Slider, {
        markers: F.SPEECH_RATE_INCREMENTS,
        initialValue: t,
        defaultValue: 1,
        stickToMarkers: !0,
        onValueChange: K,
        onValueRender: e => "x".concat(e.toFixed(2)),
        onMarkerRender: e => 0 === e ? (0, a.jsx)("span", {
          className: y.ttsSliderMarker,
          children: B.default.Messages.ACCESSIBILITY_SETTINGS_TTS_RATE_SLOWER
        }) : 10 === e ? (0, a.jsx)("span", {
          className: y.ttsSliderMarker,
          children: B.default.Messages.ACCESSIBILITY_SETTINGS_TTS_RATE_FASTER
        }) : 1 === e ? (0, a.jsx)("span", {
          children: "x1.0"
        }) : e % 1 == 0 ? "" : void 0,
        "aria-labelledby": w
      })]
    })]
  }) : null
}