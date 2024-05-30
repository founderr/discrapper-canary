"use strict";
s.r(t), s.d(t, {
  default: function() {
    return W
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
  f = s("786761"),
  m = s("3148"),
  g = s("739566"),
  I = s("753206"),
  N = s("440849"),
  h = s("196051"),
  C = s("441729"),
  A = s("285952"),
  p = s("153124"),
  O = s("786048"),
  R = s("897353"),
  x = s("626135"),
  M = s("63063"),
  v = s("695346"),
  L = s("263937"),
  D = s("996073"),
  P = s("526761"),
  b = s("981631"),
  j = s("611480"),
  U = s("653477"),
  y = s("689938"),
  G = s("572965"),
  F = s("611273"),
  B = s("328756");
let k = (0, p.uid)(),
  H = (0, p.uid)(),
  w = (0, p.uid)(),
  Y = o().debounce(e => {
    (0, E.setSaturation)(e)
  }, 250),
  V = o().debounce(e => {
    (0, h.setSpeechRate)(e)
  }, 250);

function W(e) {
  return (0, a.jsxs)(u.FormSection, {
    tag: u.FormTitleTags.H1,
    title: y.default.Messages.ACCESSIBILITY,
    children: [(0, a.jsx)(K, {}), (0, a.jsx)(z, {}), (0, a.jsx)(u.FormDivider, {}), (0, a.jsx)(Q, {}), (0, a.jsx)(q, {}), (0, a.jsx)(Z, {}), (0, a.jsx)(X, {}), (0, _.canEnableForcedColors)() ? (0, a.jsx)(J, {}) : null, (0, a.jsx)($, {}), (0, a.jsx)(ee, {}), (0, a.jsx)(et, {}), (0, a.jsx)(es, {}), (0, a.jsx)(u.FormDivider, {
      className: F.marginBottom20
    }), (0, a.jsx)(u.Text, {
      variant: "text-md/normal",
      children: y.default.Messages.ACCESSIBILITY_SETTINGS_APPEARANCE_LINK.format({
        onAppearanceClick() {
          c.default.open(b.UserSettingsSections.APPEARANCE)
        }
      })
    })]
  })
}

function K() {
  let e = v.MessageDisplayCompact.useSetting(),
    [t] = n.useState(() => {
      let e = (0, f.createMessageRecord)({
        ...(0, m.default)({
          channelId: "1337",
          content: y.default.Messages.ACCESSIBILITY_SETTINGS_SATURATION_LINK_PREVIEW_MESSAGE.format({
            previewLink: "https://discord.com/accessibility"
          })
        }),
        state: b.MessageStates.SENT,
        id: "".concat(0)
      });
      return e.colorString = "green", e
    });
  return (0, a.jsx)(u.FocusBlock, {
    children: (0, a.jsxs)(u.Card, {
      className: G.preview,
      "aria-hidden": !0,
      children: [(0, a.jsxs)("div", {
        className: G.previewHeader,
        children: [(0, a.jsx)(u.Button, {
          size: u.Button.Sizes.SMALL,
          color: u.Button.Colors.BRAND,
          children: y.default.Messages.ACCESSIBILITY_EXAMPLE_BUTTON_LABEL
        }), (0, a.jsx)("div", {
          className: G.previewAvatars,
          children: [b.StatusTypes.ONLINE, b.StatusTypes.DND, b.StatusTypes.IDLE].map(e => (0, a.jsx)(u.AnimatedAvatar, {
            "aria-label": y.default.Messages.USER_SETTINGS_AVATAR,
            src: B,
            size: u.AvatarSizes.SIZE_32,
            status: e
          }, e))
        })]
      }), (0, a.jsx)("div", {
        className: G.previewMessage,
        children: (0, a.jsx)(I.default, {
          compact: e,
          author: {
            ...(0, g.getMessageAuthor)(t),
            colorString: "#DD80F4"
          },
          message: t
        })
      })]
    })
  })
}

function z() {
  let {
    saturation: e,
    desaturateUserColors: t
  } = (0, d.useStateFromStoresObject)([T.default], () => ({
    saturation: T.default.saturation,
    desaturateUserColors: T.default.desaturateUserColors
  }));
  return (0, a.jsxs)(u.FormSection, {
    className: F.marginTop20,
    children: [(0, a.jsx)(u.FormTitle, {
      id: k,
      className: F.marginBottom8,
      children: y.default.Messages.ACCESSIBILITY_SETTINGS_SATURATION_TITLE
    }), (0, a.jsx)(u.FormText, {
      id: H,
      type: u.FormText.Types.DESCRIPTION,
      className: F.marginBottom20,
      children: y.default.Messages.ACCESSIBILITY_SETTINGS_SATURATION_DESCRIPTION
    }), (0, a.jsx)(u.Slider, {
      "aria-labelledby": k,
      "aria-describedby": H,
      markers: b.Accessibility.SATURATION_INCREMENTS,
      equidistant: !0,
      stickToMarkers: !0,
      maxValue: 1,
      minValue: 0,
      initialValue: e,
      onValueChange: Y,
      onMarkerRender: e => 100 * e % 2 == 0 ? "".concat(100 * e, "%") : void 0
    }), (0, a.jsx)(u.FormSwitch, {
      hideBorder: !0,
      className: i()(F.marginTop8, F.marginBottom20),
      value: t,
      onChange: E.toggleDesaturateUserColors,
      note: y.default.Messages.ACCESSIBILITY_SETTINGS_SATURATION_CUSTOM_COLORS_DESCRIPTION,
      children: y.default.Messages.ACCESSIBILITY_SETTINGS_SATURATION_CUSTOM_COLORS_LABEL
    })]
  })
}

function Q() {
  let e = (0, d.useStateFromStores)([T.default], () => T.default.alwaysShowLinkDecorations);
  return (0, a.jsx)(u.FormItem, {
    className: F.marginTop20,
    children: (0, a.jsx)(u.FormSwitch, {
      note: y.default.Messages.ACCESSIBILITY_SETTINGS_ALWAYS_SHOW_LINK_DECORATIONS_NOTE,
      value: e,
      onChange: function() {
        (0, E.setAlwaysShowLinkDecorations)(!e)
      },
      children: y.default.Messages.ACCESSIBILITY_SETTINGS_ALWAYS_SHOW_LINK_DECORATIONS_LABEL
    })
  })
}

function q() {
  let e = (0, d.useStateFromStores)([T.default], () => T.default.roleStyle);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(u.FormItem, {
      title: y.default.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_TITLE,
      className: F.marginTop20,
      children: [(0, a.jsx)(u.FormText, {
        type: u.FormText.Types.DESCRIPTION,
        className: F.marginBottom8,
        children: y.default.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_DESCRIPTION
      }), (0, a.jsx)(u.RadioGroup, {
        options: [{
          name: y.default.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_USERNAME_LABEL,
          value: "username"
        }, {
          name: y.default.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_DOT_LABEL,
          value: "dot"
        }, {
          name: y.default.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_HIDDEN_LABEL,
          value: "hidden"
        }],
        onChange: function(e) {
          (0, E.setRoleStyle)(e.value)
        },
        value: e
      })]
    }), (0, a.jsx)(u.FormDivider, {
      className: F.marginTop20
    })]
  })
}

function Z() {
  let e = (0, d.useStateFromStores)([T.default], () => T.default.hideTags);
  return (0, a.jsx)(u.FormItem, {
    title: y.default.Messages.ACCESSIBILITY_SETTINGS_TAGS_TITLE,
    className: F.marginTop20,
    children: (0, a.jsx)(u.FormSwitch, {
      value: !e,
      onChange: () => (0, E.setHideTags)(!e),
      children: y.default.Messages.ACCESSIBILITY_SETTINGS_TAGS_LABEL
    })
  })
}

function X() {
  let e = (0, d.useStateFromStores)([T.default], () => T.default.syncProfileThemeWithUserTheme),
    t = n.useRef(null);
  return (0, D.default)(t, P.AccessibilityScrollPositions.SYNC_PROFILE_THEME_WITH_USER_THEME), (0, a.jsx)(u.FormItem, {
    ref: t,
    title: y.default.Messages.ACCESSIBILITY_SETTINGS_PROFILE_COLORS_TITLE,
    className: i()(F.marginTop20, G.syncProfileThemeWithUserTheme),
    children: (0, a.jsx)(u.FormSwitch, {
      note: y.default.Messages.ACCESSIBILITY_SETTINGS_PROFILE_THEMES_NOTE.format({
        onThemeClick() {
          c.default.open(b.UserSettingsSections.APPEARANCE)
        }
      }),
      className: F.marginTop20,
      value: e,
      onChange: E.toggleSyncProfileThemeWithUserTheme,
      children: y.default.Messages.ACCESSIBILITY_SETTINGS_PROFILE_THEMES_DESCRIPTION
    })
  })
}

function J() {
  let [e] = (0, d.useStateFromStoresArray)([T.default], () => [T.default.syncForcedColors, T.default.systemForcedColors]), [t, s] = n.useState(e);
  n.useEffect(() => {
    s(e)
  }, [e]);
  let l = n.useRef(null);
  n.useEffect(() => {
    null != l.current && (clearTimeout(l.current), l.current = null), t !== e && (l.current = setTimeout(() => (0, E.setSyncForcedColors)(t), 150))
  }, [t, e]);
  let i = y.default.Messages.ACCESSIBILITY_SETTINGS_SYNC_FORCED_COLORS_DESCRIPTION.format({
    learnMoreLink: M.default.getArticleURL(b.HelpdeskArticles.FORCED_COLORS)
  });
  return (0, a.jsx)(u.FormItem, {
    title: y.default.Messages.ACCESSIBILITY_SETTINGS_CONTRAST,
    className: F.marginTop20,
    children: (0, a.jsx)(u.FormSwitch, {
      value: t,
      note: i,
      onChange: s,
      children: y.default.Messages.ACCESSIBILITY_SETTINGS_SYNC_FORCED_COLORS_LABEL
    })
  })
}

function $() {
  let e = v.GifAutoPlay.useSetting(),
    t = v.AnimateEmoji.useSetting(),
    {
      useReducedMotion: s,
      rawPrefersReducedMotion: l,
      systemPrefersReducedMotion: r,
      gifAutoPlayOverrideReason: o,
      animateEmojiOverrideReason: c
    } = (0, d.useStateFromStoresObject)([T.default, L.default], () => ({
      systemPrefersReducedMotion: T.default.systemPrefersReducedMotion,
      rawPrefersReducedMotion: T.default.rawPrefersReducedMotion,
      useReducedMotion: T.default.useReducedMotion,
      gifAutoPlayOverrideReason: L.default.getAppliedOverrideReasonKey("gifAutoPlay"),
      animateEmojiOverrideReason: L.default.getAppliedOverrideReasonKey("animateEmoji")
    })),
    S = n.useRef(null);
  (0, D.default)(S, P.AccessibilityScrollPositions.REDUCED_MOTION);
  let _ = n.useCallback((e, t) => {
      (0, E.setPrefersReducedMotion)(t ? "auto" : r)
    }, [r]),
    f = n.useCallback(e => {
      (0, E.setPrefersReducedMotion)(e ? "reduce" : "no-preference")
    }, []);
  return (0, a.jsxs)(u.FormItem, {
    ref: S,
    title: y.default.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION,
    className: i()(F.marginTop20, G.reducedMotion),
    children: [(0, a.jsx)(u.FormText, {
      type: u.FormText.Types.DESCRIPTION,
      className: F.marginBottom8,
      children: y.default.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION_DESCRIPTION.format({
        helpdeskArticle: M.default.getArticleURL(b.HelpdeskArticles.REDUCED_MOTION)
      })
    }), (0, a.jsx)(u.Checkbox, {
      className: F.marginTop20,
      value: "auto" === l,
      shape: u.Checkbox.Shapes.BOX,
      type: u.Checkbox.Types.INVERTED,
      onChange: _,
      children: (0, a.jsx)(u.Text, {
        variant: "text-sm/normal",
        children: y.default.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION_AUTO
      })
    }), (0, a.jsx)(u.FormSwitch, {
      className: F.marginTop20,
      value: s,
      onChange: f,
      children: y.default.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION_ENABLE
    }), (0, a.jsx)(u.FormSwitch, {
      className: F.marginBottom40,
      value: e,
      note: null != o ? (0, N.default)(o) : void 0,
      onChange: v.GifAutoPlay.updateSetting,
      children: y.default.Messages.GIF_AUTO_PLAY_LABEL
    }), (0, a.jsx)(u.FormSwitch, {
      className: i()(F.marginTop8, F.marginBottom20),
      value: t,
      note: null != c ? (0, N.default)(c) : void 0,
      onChange: v.AnimateEmoji.updateSetting,
      children: y.default.Messages.ANIMATE_EMOJI
    })]
  })
}

function ee() {
  let e = v.AnimateStickers.useSetting(),
    t = (0, d.useStateFromStores)([L.default], () => L.default.getAppliedOverrideReasonKey("animateStickers")),
    s = n.useCallback(e => {
      v.AnimateStickers.updateSetting(e.value)
    }, []);
  return (0, a.jsxs)(u.FormItem, {
    className: F.marginBottom40,
    title: y.default.Messages.STICKERS_AUTO_PLAY_HEADING,
    children: [(0, a.jsx)(u.FormText, {
      type: u.FormText.Types.DESCRIPTION,
      className: F.marginBottom8,
      children: null != t ? (0, N.default)(t) : y.default.Messages.STICKERS_AUTO_PLAY_HELP
    }), (0, a.jsx)(u.RadioGroup, {
      options: [{
        name: y.default.Messages.STICKERS_ALWAYS_ANIMATE,
        value: j.StickerAnimationSettings.ALWAYS_ANIMATE
      }, {
        name: y.default.Messages.STICKERS_ANIMATE_ON_INTERACTION,
        desc: y.default.Messages.STICKERS_ANIMATE_ON_INTERACTION_DESCRIPTION,
        value: j.StickerAnimationSettings.ANIMATE_ON_INTERACTION
      }, {
        name: y.default.Messages.STICKERS_NEVER_ANIMATE,
        value: j.StickerAnimationSettings.NEVER_ANIMATE
      }],
      onChange: s,
      value: e
    })]
  })
}

function et() {
  let e = (0, d.useStateFromStores)([T.default], () => T.default.isSubmitButtonEnabled),
    t = v.UseLegacyChatInput.useSetting(),
    s = n.useRef(null);
  return (0, D.default)(s, P.AccessibilityScrollPositions.LEGACY_CHAT_INPUT), (0, a.jsxs)(u.FormItem, {
    ref: s,
    children: [(0, a.jsx)(u.FormTitle, {
      className: F.marginBottom8,
      children: y.default.Messages.FORM_LABEL_ACCESSIBILITY_CHAT_INPUT
    }), (0, a.jsx)(u.FormSwitch, {
      className: F.marginTop20,
      value: e,
      onChange: E.toggleSubmitButton,
      children: y.default.Messages.DISPLAY_SUBMIT_BUTTON
    }), (0, a.jsx)(u.FormSwitch, {
      className: F.marginTop8,
      value: t,
      note: y.default.Messages.LEGACY_CHAT_INPUT_DESCRIPTION,
      onChange: e => {
        x.default.track(b.AnalyticEvents.LEGACY_CHAT_INPUT_TOGGLED, {
          enabled: e,
          location: {
            section: b.AnalyticsSections.SETTINGS_ACCESSIBILITY
          }
        }), v.UseLegacyChatInput.updateSetting(e)
      },
      children: y.default.Messages.LEGACY_CHAT_INPUT
    })]
  })
}

function es() {
  let e = v.EnableTTSCommand.useSetting(),
    t = (0, d.useStateFromStores)([C.default], () => C.default.speechRate),
    [s, l] = n.useState(!1);
  return S.supported ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(u.FormItem, {
      children: [(0, a.jsx)(u.FormTitle, {
        className: F.marginBottom8,
        children: y.default.Messages.FORM_LABEL_TTS
      }), (0, a.jsx)(u.FormSwitch, {
        className: F.marginTop20,
        value: e,
        onChange: v.EnableTTSCommand.updateSetting,
        children: y.default.Messages.ALLOW_TTS_COMMAND
      })]
    }), (0, a.jsxs)(u.FormItem, {
      className: F.marginBottom20,
      children: [(0, a.jsx)(u.FormTitle, {
        id: w,
        className: F.marginBottom20,
        children: y.default.Messages.ACCESSIBILITY_SETTINGS_TTS_RATE_LABEL
      }), (0, a.jsx)("div", {
        className: G.ttsPreviewWrapper,
        children: (0, a.jsx)(u.Button, {
          color: u.ButtonColors.BRAND,
          onClick: () => {
            if (s) {
              (0, h.stopSpeaking)(), l(!1);
              return
            }(0, h.speakText)(y.default.Messages.ACCESSIBILITY_SETTINGS_TTS_RATE_TEST, !0, void 0, () => l(!0), () => l(!1)), l(!0)
          },
          children: (0, a.jsxs)(A.default, {
            align: A.default.Align.CENTER,
            children: [s ? (0, a.jsx)(O.default, {
              width: 24,
              height: 24
            }) : (0, a.jsx)(R.default, {
              width: 24,
              height: 24
            }), (0, a.jsx)("span", {
              children: y.default.Messages.ACCESSIBILITY_SETTINGS_TTS_RATE_PREVIEW
            }), (0, a.jsx)(u.HiddenVisually, {
              children: y.default.Messages.ACCESSIBILITY_SETTINGS_TTS_RATE_LABEL
            })]
          })
        })
      }), (0, a.jsx)(u.Slider, {
        markers: U.SPEECH_RATE_INCREMENTS,
        initialValue: t,
        defaultValue: 1,
        stickToMarkers: !0,
        onValueChange: V,
        onValueRender: e => "x".concat(e.toFixed(2)),
        onMarkerRender: e => 0 === e ? (0, a.jsx)("span", {
          className: G.ttsSliderMarker,
          children: y.default.Messages.ACCESSIBILITY_SETTINGS_TTS_RATE_SLOWER
        }) : 10 === e ? (0, a.jsx)("span", {
          className: G.ttsSliderMarker,
          children: y.default.Messages.ACCESSIBILITY_SETTINGS_TTS_RATE_FASTER
        }) : 1 === e ? (0, a.jsx)("span", {
          children: "x1.0"
        }) : e % 1 == 0 ? "" : void 0,
        "aria-labelledby": w
      })]
    })]
  }) : null
}