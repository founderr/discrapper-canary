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
  I = s("739566"),
  g = s("753206"),
  N = s("440849"),
  h = s("196051"),
  C = s("441729"),
  O = s("285952"),
  A = s("153124"),
  p = s("786048"),
  R = s("897353"),
  x = s("626135"),
  M = s("63063"),
  L = s("695346"),
  D = s("263937"),
  P = s("996073"),
  v = s("526761"),
  b = s("981631"),
  j = s("611480"),
  U = s("653477"),
  G = s("689938"),
  F = s("572965"),
  B = s("611273"),
  y = s("328756");
let k = (0, A.uid)(),
  V = (0, A.uid)(),
  H = (0, A.uid)(),
  w = o().debounce(e => {
    (0, E.setSaturation)(e)
  }, 250),
  Y = o().debounce(e => {
    (0, h.setSpeechRate)(e)
  }, 250);

function W(e) {
  return (0, a.jsxs)(u.FormSection, {
    tag: u.FormTitleTags.H1,
    title: G.default.Messages.ACCESSIBILITY,
    children: [(0, a.jsx)(K, {}), (0, a.jsx)(z, {}), (0, a.jsx)(u.FormDivider, {}), (0, a.jsx)(Q, {}), (0, a.jsx)(q, {}), (0, a.jsx)(Z, {}), (0, a.jsx)(X, {}), (0, _.canEnableForcedColors)() ? (0, a.jsx)(J, {}) : null, (0, a.jsx)($, {}), (0, a.jsx)(ee, {}), (0, a.jsx)(et, {}), (0, a.jsx)(es, {}), (0, a.jsx)(u.FormDivider, {
      className: B.marginBottom20
    }), (0, a.jsx)(u.Text, {
      variant: "text-md/normal",
      children: G.default.Messages.ACCESSIBILITY_SETTINGS_APPEARANCE_LINK.format({
        onAppearanceClick() {
          c.default.open(b.UserSettingsSections.APPEARANCE)
        }
      })
    })]
  })
}

function K() {
  let e = L.MessageDisplayCompact.useSetting(),
    [t] = n.useState(() => {
      let e = (0, f.createMessageRecord)({
        ...(0, m.default)({
          channelId: "1337",
          content: G.default.Messages.ACCESSIBILITY_SETTINGS_SATURATION_LINK_PREVIEW_MESSAGE.format({
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
      className: F.preview,
      "aria-hidden": !0,
      children: [(0, a.jsxs)("div", {
        className: F.previewHeader,
        children: [(0, a.jsx)(u.Button, {
          size: u.Button.Sizes.SMALL,
          color: u.Button.Colors.BRAND,
          children: G.default.Messages.ACCESSIBILITY_EXAMPLE_BUTTON_LABEL
        }), (0, a.jsx)("div", {
          className: F.previewAvatars,
          children: [b.StatusTypes.ONLINE, b.StatusTypes.DND, b.StatusTypes.IDLE].map(e => (0, a.jsx)(u.AnimatedAvatar, {
            "aria-label": G.default.Messages.USER_SETTINGS_AVATAR,
            src: y,
            size: u.AvatarSizes.SIZE_32,
            status: e
          }, e))
        })]
      }), (0, a.jsx)("div", {
        className: F.previewMessage,
        children: (0, a.jsx)(g.default, {
          compact: e,
          author: {
            ...(0, I.getMessageAuthor)(t),
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
    className: B.marginTop20,
    children: [(0, a.jsx)(u.FormTitle, {
      id: k,
      className: B.marginBottom8,
      children: G.default.Messages.ACCESSIBILITY_SETTINGS_SATURATION_TITLE
    }), (0, a.jsx)(u.FormText, {
      id: V,
      type: u.FormText.Types.DESCRIPTION,
      className: B.marginBottom20,
      children: G.default.Messages.ACCESSIBILITY_SETTINGS_SATURATION_DESCRIPTION
    }), (0, a.jsx)(u.Slider, {
      "aria-labelledby": k,
      "aria-describedby": V,
      markers: b.Accessibility.SATURATION_INCREMENTS,
      equidistant: !0,
      stickToMarkers: !0,
      maxValue: 1,
      minValue: 0,
      initialValue: e,
      onValueChange: w,
      onMarkerRender: e => 100 * e % 2 == 0 ? "".concat(100 * e, "%") : void 0
    }), (0, a.jsx)(u.FormSwitch, {
      hideBorder: !0,
      className: i()(B.marginTop8, B.marginBottom20),
      value: t,
      onChange: E.toggleDesaturateUserColors,
      note: G.default.Messages.ACCESSIBILITY_SETTINGS_SATURATION_CUSTOM_COLORS_DESCRIPTION,
      children: G.default.Messages.ACCESSIBILITY_SETTINGS_SATURATION_CUSTOM_COLORS_LABEL
    })]
  })
}

function Q() {
  let e = (0, d.useStateFromStores)([T.default], () => T.default.alwaysShowLinkDecorations);
  return (0, a.jsx)(u.FormItem, {
    className: B.marginTop20,
    children: (0, a.jsx)(u.FormSwitch, {
      note: G.default.Messages.ACCESSIBILITY_SETTINGS_ALWAYS_SHOW_LINK_DECORATIONS_NOTE,
      value: e,
      onChange: function() {
        (0, E.setAlwaysShowLinkDecorations)(!e)
      },
      children: G.default.Messages.ACCESSIBILITY_SETTINGS_ALWAYS_SHOW_LINK_DECORATIONS_LABEL
    })
  })
}

function q() {
  let e = (0, d.useStateFromStores)([T.default], () => T.default.roleStyle);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(u.FormItem, {
      title: G.default.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_TITLE,
      className: B.marginTop20,
      children: [(0, a.jsx)(u.FormText, {
        type: u.FormText.Types.DESCRIPTION,
        className: B.marginBottom8,
        children: G.default.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_DESCRIPTION
      }), (0, a.jsx)(u.RadioGroup, {
        options: [{
          name: G.default.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_USERNAME_LABEL,
          value: "username"
        }, {
          name: G.default.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_DOT_LABEL,
          value: "dot"
        }, {
          name: G.default.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_HIDDEN_LABEL,
          value: "hidden"
        }],
        onChange: function(e) {
          (0, E.setRoleStyle)(e.value)
        },
        value: e
      })]
    }), (0, a.jsx)(u.FormDivider, {
      className: B.marginTop20
    })]
  })
}

function Z() {
  let e = (0, d.useStateFromStores)([T.default], () => T.default.hideTags);
  return (0, a.jsx)(u.FormItem, {
    title: G.default.Messages.ACCESSIBILITY_SETTINGS_TAGS_TITLE,
    className: B.marginTop20,
    children: (0, a.jsx)(u.FormSwitch, {
      value: !e,
      onChange: () => (0, E.setHideTags)(!e),
      children: G.default.Messages.ACCESSIBILITY_SETTINGS_TAGS_LABEL
    })
  })
}

function X() {
  let e = (0, d.useStateFromStores)([T.default], () => T.default.syncProfileThemeWithUserTheme),
    t = n.useRef(null);
  return (0, P.default)(t, v.AccessibilityScrollPositions.SYNC_PROFILE_THEME_WITH_USER_THEME), (0, a.jsx)(u.FormItem, {
    ref: t,
    title: G.default.Messages.ACCESSIBILITY_SETTINGS_PROFILE_COLORS_TITLE,
    className: i()(B.marginTop20, F.syncProfileThemeWithUserTheme),
    children: (0, a.jsx)(u.FormSwitch, {
      note: G.default.Messages.ACCESSIBILITY_SETTINGS_PROFILE_THEMES_NOTE.format({
        onThemeClick() {
          c.default.open(b.UserSettingsSections.APPEARANCE)
        }
      }),
      className: B.marginTop20,
      value: e,
      onChange: E.toggleSyncProfileThemeWithUserTheme,
      children: G.default.Messages.ACCESSIBILITY_SETTINGS_PROFILE_THEMES_DESCRIPTION
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
  let i = G.default.Messages.ACCESSIBILITY_SETTINGS_SYNC_FORCED_COLORS_DESCRIPTION.format({
    learnMoreLink: M.default.getArticleURL(b.HelpdeskArticles.FORCED_COLORS)
  });
  return (0, a.jsx)(u.FormItem, {
    title: G.default.Messages.ACCESSIBILITY_SETTINGS_CONTRAST,
    className: B.marginTop20,
    children: (0, a.jsx)(u.FormSwitch, {
      value: t,
      note: i,
      onChange: s,
      children: G.default.Messages.ACCESSIBILITY_SETTINGS_SYNC_FORCED_COLORS_LABEL
    })
  })
}

function $() {
  let e = L.GifAutoPlay.useSetting(),
    t = L.AnimateEmoji.useSetting(),
    {
      useReducedMotion: s,
      rawPrefersReducedMotion: l,
      systemPrefersReducedMotion: r,
      gifAutoPlayOverrideReason: o,
      animateEmojiOverrideReason: c
    } = (0, d.useStateFromStoresObject)([T.default, D.default], () => ({
      systemPrefersReducedMotion: T.default.systemPrefersReducedMotion,
      rawPrefersReducedMotion: T.default.rawPrefersReducedMotion,
      useReducedMotion: T.default.useReducedMotion,
      gifAutoPlayOverrideReason: D.default.getAppliedOverrideReasonKey("gifAutoPlay"),
      animateEmojiOverrideReason: D.default.getAppliedOverrideReasonKey("animateEmoji")
    })),
    S = n.useRef(null);
  (0, P.default)(S, v.AccessibilityScrollPositions.REDUCED_MOTION);
  let _ = n.useCallback((e, t) => {
      (0, E.setPrefersReducedMotion)(t ? "auto" : r)
    }, [r]),
    f = n.useCallback(e => {
      (0, E.setPrefersReducedMotion)(e ? "reduce" : "no-preference")
    }, []);
  return (0, a.jsxs)(u.FormItem, {
    ref: S,
    title: G.default.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION,
    className: i()(B.marginTop20, F.reducedMotion),
    children: [(0, a.jsx)(u.FormText, {
      type: u.FormText.Types.DESCRIPTION,
      className: B.marginBottom8,
      children: G.default.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION_DESCRIPTION.format({
        helpdeskArticle: M.default.getArticleURL(b.HelpdeskArticles.REDUCED_MOTION)
      })
    }), (0, a.jsx)(u.Checkbox, {
      className: B.marginTop20,
      value: "auto" === l,
      shape: u.Checkbox.Shapes.BOX,
      type: u.Checkbox.Types.INVERTED,
      onChange: _,
      children: (0, a.jsx)(u.Text, {
        variant: "text-sm/normal",
        children: G.default.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION_AUTO
      })
    }), (0, a.jsx)(u.FormSwitch, {
      className: B.marginTop20,
      value: s,
      onChange: f,
      children: G.default.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION_ENABLE
    }), (0, a.jsx)(u.FormSwitch, {
      className: B.marginBottom40,
      value: e,
      note: null != o ? (0, N.default)(o) : void 0,
      onChange: L.GifAutoPlay.updateSetting,
      children: G.default.Messages.GIF_AUTO_PLAY_LABEL
    }), (0, a.jsx)(u.FormSwitch, {
      className: i()(B.marginTop8, B.marginBottom20),
      value: t,
      note: null != c ? (0, N.default)(c) : void 0,
      onChange: L.AnimateEmoji.updateSetting,
      children: G.default.Messages.ANIMATE_EMOJI
    })]
  })
}

function ee() {
  let e = L.AnimateStickers.useSetting(),
    t = (0, d.useStateFromStores)([D.default], () => D.default.getAppliedOverrideReasonKey("animateStickers")),
    s = n.useCallback(e => {
      L.AnimateStickers.updateSetting(e.value)
    }, []);
  return (0, a.jsxs)(u.FormItem, {
    className: B.marginBottom40,
    title: G.default.Messages.STICKERS_AUTO_PLAY_HEADING,
    children: [(0, a.jsx)(u.FormText, {
      type: u.FormText.Types.DESCRIPTION,
      className: B.marginBottom8,
      children: null != t ? (0, N.default)(t) : G.default.Messages.STICKERS_AUTO_PLAY_HELP
    }), (0, a.jsx)(u.RadioGroup, {
      options: [{
        name: G.default.Messages.STICKERS_ALWAYS_ANIMATE,
        value: j.StickerAnimationSettings.ALWAYS_ANIMATE
      }, {
        name: G.default.Messages.STICKERS_ANIMATE_ON_INTERACTION,
        desc: G.default.Messages.STICKERS_ANIMATE_ON_INTERACTION_DESCRIPTION,
        value: j.StickerAnimationSettings.ANIMATE_ON_INTERACTION
      }, {
        name: G.default.Messages.STICKERS_NEVER_ANIMATE,
        value: j.StickerAnimationSettings.NEVER_ANIMATE
      }],
      onChange: s,
      value: e
    })]
  })
}

function et() {
  let e = (0, d.useStateFromStores)([T.default], () => T.default.isSubmitButtonEnabled),
    t = L.UseLegacyChatInput.useSetting(),
    s = n.useRef(null);
  return (0, P.default)(s, v.AccessibilityScrollPositions.LEGACY_CHAT_INPUT), (0, a.jsxs)(u.FormItem, {
    ref: s,
    children: [(0, a.jsx)(u.FormTitle, {
      className: B.marginBottom8,
      children: G.default.Messages.FORM_LABEL_ACCESSIBILITY_CHAT_INPUT
    }), (0, a.jsx)(u.FormSwitch, {
      className: B.marginTop20,
      value: e,
      onChange: E.toggleSubmitButton,
      children: G.default.Messages.DISPLAY_SUBMIT_BUTTON
    }), (0, a.jsx)(u.FormSwitch, {
      className: B.marginTop8,
      value: t,
      note: G.default.Messages.LEGACY_CHAT_INPUT_DESCRIPTION,
      onChange: e => {
        x.default.track(b.AnalyticEvents.LEGACY_CHAT_INPUT_TOGGLED, {
          enabled: e,
          location: {
            section: b.AnalyticsSections.SETTINGS_ACCESSIBILITY
          }
        }), L.UseLegacyChatInput.updateSetting(e)
      },
      children: G.default.Messages.LEGACY_CHAT_INPUT
    })]
  })
}

function es() {
  let e = L.EnableTTSCommand.useSetting(),
    t = (0, d.useStateFromStores)([C.default], () => C.default.speechRate),
    [s, l] = n.useState(!1);
  return S.supported ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(u.FormItem, {
      children: [(0, a.jsx)(u.FormTitle, {
        className: B.marginBottom8,
        children: G.default.Messages.FORM_LABEL_TTS
      }), (0, a.jsx)(u.FormSwitch, {
        className: B.marginTop20,
        value: e,
        onChange: L.EnableTTSCommand.updateSetting,
        children: G.default.Messages.ALLOW_TTS_COMMAND
      })]
    }), (0, a.jsxs)(u.FormItem, {
      className: B.marginBottom20,
      children: [(0, a.jsx)(u.FormTitle, {
        id: H,
        className: B.marginBottom20,
        children: G.default.Messages.ACCESSIBILITY_SETTINGS_TTS_RATE_LABEL
      }), (0, a.jsx)("div", {
        className: F.ttsPreviewWrapper,
        children: (0, a.jsx)(u.Button, {
          color: u.ButtonColors.BRAND,
          onClick: () => {
            if (s) {
              (0, h.stopSpeaking)(), l(!1);
              return
            }(0, h.speakText)(G.default.Messages.ACCESSIBILITY_SETTINGS_TTS_RATE_TEST, !0, void 0, () => l(!0), () => l(!1)), l(!0)
          },
          children: (0, a.jsxs)(O.default, {
            align: O.default.Align.CENTER,
            children: [s ? (0, a.jsx)(p.default, {
              width: 24,
              height: 24
            }) : (0, a.jsx)(R.default, {
              width: 24,
              height: 24
            }), (0, a.jsx)("span", {
              children: G.default.Messages.ACCESSIBILITY_SETTINGS_TTS_RATE_PREVIEW
            }), (0, a.jsx)(u.HiddenVisually, {
              children: G.default.Messages.ACCESSIBILITY_SETTINGS_TTS_RATE_LABEL
            })]
          })
        })
      }), (0, a.jsx)(u.Slider, {
        markers: U.SPEECH_RATE_INCREMENTS,
        initialValue: t,
        defaultValue: 1,
        stickToMarkers: !0,
        onValueChange: Y,
        onValueRender: e => "x".concat(e.toFixed(2)),
        onMarkerRender: e => 0 === e ? (0, a.jsx)("span", {
          className: F.ttsSliderMarker,
          children: G.default.Messages.ACCESSIBILITY_SETTINGS_TTS_RATE_SLOWER
        }) : 10 === e ? (0, a.jsx)("span", {
          className: F.ttsSliderMarker,
          children: G.default.Messages.ACCESSIBILITY_SETTINGS_TTS_RATE_FASTER
        }) : 1 === e ? (0, a.jsx)("span", {
          children: "x1.0"
        }) : e % 1 == 0 ? "" : void 0,
        "aria-labelledby": H
      })]
    })]
  }) : null
}