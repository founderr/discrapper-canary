t.d(s, {
  Z: function() {
    return w
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  a = t(120356),
  l = t.n(a),
  r = t(392711),
  o = t.n(r),
  c = t(442837),
  E = t(481060),
  d = t(230711),
  _ = t(419363),
  T = t(857595),
  S = t(607070),
  u = t(627845),
  I = t(786761),
  N = t(3148),
  A = t(739566),
  C = t(753206),
  O = t(440849),
  m = t(921801),
  h = t(196051),
  g = t(441729),
  R = t(285952),
  M = t(153124),
  x = t(626135),
  D = t(63063),
  p = t(695346),
  L = t(263937),
  P = t(996073),
  Z = t(526761),
  f = t(726985),
  v = t(981631),
  j = t(611480),
  U = t(653477),
  B = t(689938),
  b = t(542065),
  G = t(331651),
  F = t(328756);
let V = (0, M.hQ)(),
  y = (0, M.hQ)(),
  Y = (0, M.hQ)(),
  H = o().debounce(e => {
    (0, T.o2)(e)
  }, 250),
  k = o().debounce(e => {
    (0, h.Ct)(e)
  }, 250);

function w(e) {
  return (0, n.jsxs)(E.FormSection, {
    tag: E.FormTitleTags.H1,
    title: B.Z.Messages.ACCESSIBILITY,
    children: [(0, n.jsx)("div", {
      className: G.marginBottom20,
      children: (0, n.jsx)(W, {})
    }), (0, n.jsxs)(m.F, {
      setting: f.s6.ACCESSIBILITY_SATURATION,
      children: [(0, n.jsx)(K, {}), (0, n.jsx)(E.FormDivider, {})]
    }), (0, n.jsx)(m.F, {
      setting: f.s6.ACCESSIBILITY_LINK_DECORATIONS,
      children: (0, n.jsx)(z, {})
    }), (0, n.jsx)(m.F, {
      setting: f.s6.ACCESSIBILITY_ROLE_STYLE,
      children: (0, n.jsx)(Q, {})
    }), (0, n.jsx)(m.F, {
      setting: f.s6.ACCESSIBILITY_TAGS,
      children: (0, n.jsx)(X, {})
    }), (0, n.jsx)(m.F, {
      setting: f.s6.ACCESSIBILITY_SYNC_PROFILE_THEME,
      children: (0, n.jsx)(q, {})
    }), (0, u.b)() ? (0, n.jsxs)(m.F, {
      setting: f.s6.ACCESSIBILITY_CONTRAST,
      children: [(0, n.jsx)(J, {}), " "]
    }) : null, (0, n.jsx)(m.F, {
      setting: f.s6.ACCESSIBILITY_REDUCED_MOTION,
      children: (0, n.jsx)($, {})
    }), (0, n.jsx)(m.F, {
      setting: f.s6.ACCESSIBILITY_STICKERS,
      children: (0, n.jsx)(ee, {})
    }), (0, n.jsx)(m.F, {
      setting: f.s6.ACCESSIBILITY_MESSAGES,
      children: (0, n.jsx)(es, {})
    }), (0, n.jsxs)(m.F, {
      setting: f.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
      children: [(0, n.jsx)(et, {}), (0, n.jsx)(E.FormDivider, {})]
    }), (0, n.jsx)(E.Text, {
      className: G.marginTop20,
      variant: "text-md/normal",
      children: B.Z.Messages.ACCESSIBILITY_SETTINGS_APPEARANCE_LINK.format({
        onAppearanceClick() {
          d.Z.open(v.oAB.APPEARANCE)
        }
      })
    })]
  })
}

function W() {
  let e = p.jU.useSetting(),
    [s] = i.useState(() => {
      let e = (0, I.e5)({
        ...(0, N.ZP)({
          channelId: "1337",
          content: B.Z.Messages.ACCESSIBILITY_SETTINGS_SATURATION_LINK_PREVIEW_MESSAGE.format({
            previewLink: "https://discord.com/accessibility"
          })
        }),
        state: v.yb.SENT,
        id: "".concat(0)
      });
      return e.colorString = "green", e
    });
  return (0, n.jsx)(E.FocusBlock, {
    children: (0, n.jsxs)(E.Card, {
      className: b.preview,
      "aria-hidden": !0,
      children: [(0, n.jsxs)("div", {
        className: b.previewHeader,
        children: [(0, n.jsx)(E.Button, {
          size: E.Button.Sizes.SMALL,
          color: E.Button.Colors.BRAND,
          children: B.Z.Messages.ACCESSIBILITY_EXAMPLE_BUTTON_LABEL
        }), (0, n.jsx)("div", {
          className: b.previewAvatars,
          children: [v.Skl.ONLINE, v.Skl.DND, v.Skl.IDLE].map(e => (0, n.jsx)(E.AnimatedAvatar, {
            "aria-label": B.Z.Messages.USER_SETTINGS_AVATAR,
            src: F,
            size: E.AvatarSizes.SIZE_32,
            status: e
          }, e))
        })]
      }), (0, n.jsx)("div", {
        className: b.previewMessage,
        children: (0, n.jsx)(C.Z, {
          compact: e,
          author: {
            ...(0, A.ZH)(s),
            colorString: "#DD80F4"
          },
          message: s
        })
      })]
    })
  })
}

function K() {
  let {
    saturation: e,
    desaturateUserColors: s
  } = (0, c.cj)([S.Z], () => ({
    saturation: S.Z.saturation,
    desaturateUserColors: S.Z.desaturateUserColors
  }));
  return (0, n.jsxs)(E.FormSection, {
    className: G.marginTop20,
    children: [(0, n.jsx)(E.FormTitle, {
      id: V,
      className: G.marginBottom8,
      children: B.Z.Messages.ACCESSIBILITY_SETTINGS_SATURATION_TITLE
    }), (0, n.jsx)(E.FormText, {
      id: y,
      type: E.FormText.Types.DESCRIPTION,
      className: G.marginBottom20,
      children: B.Z.Messages.ACCESSIBILITY_SETTINGS_SATURATION_DESCRIPTION
    }), (0, n.jsx)(E.Slider, {
      "aria-labelledby": V,
      "aria-describedby": y,
      markers: v.yqN.SATURATION_INCREMENTS,
      equidistant: !0,
      stickToMarkers: !0,
      maxValue: 1,
      minValue: 0,
      initialValue: e,
      onValueChange: H,
      onMarkerRender: e => 100 * e % 2 == 0 ? "".concat(100 * e, "%") : void 0
    }), (0, n.jsx)(E.FormSwitch, {
      hideBorder: !0,
      className: l()(G.marginTop8, G.marginBottom20),
      value: s,
      onChange: T.f1,
      note: B.Z.Messages.ACCESSIBILITY_SETTINGS_SATURATION_CUSTOM_COLORS_DESCRIPTION,
      children: B.Z.Messages.ACCESSIBILITY_SETTINGS_SATURATION_CUSTOM_COLORS_LABEL
    })]
  })
}

function z() {
  let e = (0, c.e7)([S.Z], () => S.Z.alwaysShowLinkDecorations);
  return (0, n.jsx)(E.FormItem, {
    className: G.marginTop20,
    children: (0, n.jsx)(E.FormSwitch, {
      note: B.Z.Messages.ACCESSIBILITY_SETTINGS_ALWAYS_SHOW_LINK_DECORATIONS_NOTE,
      value: e,
      onChange: function() {
        (0, T.gs)(!e)
      },
      children: B.Z.Messages.ACCESSIBILITY_SETTINGS_ALWAYS_SHOW_LINK_DECORATIONS_LABEL
    })
  })
}

function Q() {
  let e = (0, c.e7)([S.Z], () => S.Z.roleStyle);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(E.FormItem, {
      title: B.Z.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_TITLE,
      className: G.marginTop20,
      children: [(0, n.jsx)(E.FormText, {
        type: E.FormText.Types.DESCRIPTION,
        className: G.marginBottom8,
        children: B.Z.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_DESCRIPTION
      }), (0, n.jsx)(E.RadioGroup, {
        options: [{
          name: B.Z.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_USERNAME_LABEL,
          value: "username"
        }, {
          name: B.Z.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_DOT_LABEL,
          value: "dot"
        }, {
          name: B.Z.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_HIDDEN_LABEL,
          value: "hidden"
        }],
        onChange: function(e) {
          (0, T.u1)(e.value)
        },
        value: e
      })]
    }), (0, n.jsx)(E.FormDivider, {
      className: G.marginTop20
    })]
  })
}

function X() {
  let e = (0, c.e7)([S.Z], () => S.Z.hideTags);
  return (0, n.jsx)(E.FormItem, {
    title: B.Z.Messages.ACCESSIBILITY_SETTINGS_TAGS_TITLE,
    className: G.marginTop20,
    children: (0, n.jsx)(E.FormSwitch, {
      value: !e,
      onChange: () => (0, T.Nv)(!e),
      children: B.Z.Messages.ACCESSIBILITY_SETTINGS_TAGS_LABEL
    })
  })
}

function q() {
  let e = (0, c.e7)([S.Z], () => S.Z.syncProfileThemeWithUserTheme),
    s = i.useRef(null);
  return (0, P.Z)(s, Z.rP.SYNC_PROFILE_THEME_WITH_USER_THEME), (0, n.jsx)(E.FormItem, {
    ref: s,
    title: B.Z.Messages.ACCESSIBILITY_SETTINGS_PROFILE_COLORS_TITLE,
    className: l()(G.marginTop20, b.syncProfileThemeWithUserTheme),
    children: (0, n.jsx)(E.FormSwitch, {
      note: B.Z.Messages.ACCESSIBILITY_SETTINGS_PROFILE_THEMES_NOTE.format({
        onThemeClick() {
          d.Z.open(v.oAB.APPEARANCE)
        }
      }),
      className: G.marginTop20,
      value: e,
      onChange: T.Uv,
      children: B.Z.Messages.ACCESSIBILITY_SETTINGS_PROFILE_THEMES_DESCRIPTION
    })
  })
}

function J() {
  let [e] = (0, c.Wu)([S.Z], () => [S.Z.syncForcedColors, S.Z.systemForcedColors]), [s, t] = i.useState(e);
  i.useEffect(() => {
    t(e)
  }, [e]);
  let a = i.useRef(null);
  i.useEffect(() => {
    null != a.current && (clearTimeout(a.current), a.current = null), s !== e && (a.current = setTimeout(() => (0, T.qz)(s), 150))
  }, [s, e]);
  let l = B.Z.Messages.ACCESSIBILITY_SETTINGS_SYNC_FORCED_COLORS_DESCRIPTION.format({
    learnMoreLink: D.Z.getArticleURL(v.BhN.FORCED_COLORS)
  });
  return (0, n.jsx)(E.FormItem, {
    title: B.Z.Messages.ACCESSIBILITY_SETTINGS_CONTRAST,
    className: G.marginTop20,
    children: (0, n.jsx)(E.FormSwitch, {
      value: s,
      note: l,
      onChange: t,
      children: B.Z.Messages.ACCESSIBILITY_SETTINGS_SYNC_FORCED_COLORS_LABEL
    })
  })
}

function $() {
  let e = p.QK.useSetting(),
    s = p.Yk.useSetting(),
    {
      useReducedMotion: t,
      rawPrefersReducedMotion: a,
      systemPrefersReducedMotion: r,
      gifAutoPlayOverrideReason: o,
      animateEmojiOverrideReason: d
    } = (0, c.cj)([S.Z, L.Z], () => ({
      systemPrefersReducedMotion: S.Z.systemPrefersReducedMotion,
      rawPrefersReducedMotion: S.Z.rawPrefersReducedMotion,
      useReducedMotion: S.Z.useReducedMotion,
      gifAutoPlayOverrideReason: L.Z.getAppliedOverrideReasonKey("gifAutoPlay"),
      animateEmojiOverrideReason: L.Z.getAppliedOverrideReasonKey("animateEmoji")
    })),
    _ = i.useRef(null);
  (0, P.Z)(_, Z.rP.REDUCED_MOTION);
  let u = i.useCallback((e, s) => {
      (0, T.Zt)(s ? "auto" : r)
    }, [r]),
    I = i.useCallback(e => {
      (0, T.Zt)(e ? "reduce" : "no-preference")
    }, []);
  return (0, n.jsxs)(E.FormItem, {
    ref: _,
    title: B.Z.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION,
    className: l()(G.marginTop20, b.reducedMotion),
    children: [(0, n.jsx)(E.FormText, {
      type: E.FormText.Types.DESCRIPTION,
      className: G.marginBottom8,
      children: B.Z.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION_DESCRIPTION.format({
        helpdeskArticle: D.Z.getArticleURL(v.BhN.REDUCED_MOTION)
      })
    }), (0, n.jsx)(E.Checkbox, {
      className: G.marginTop20,
      value: "auto" === a,
      shape: E.Checkbox.Shapes.BOX,
      type: E.Checkbox.Types.INVERTED,
      onChange: u,
      children: (0, n.jsx)(E.Text, {
        variant: "text-sm/normal",
        children: B.Z.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION_AUTO
      })
    }), (0, n.jsx)(E.FormSwitch, {
      className: G.marginTop20,
      value: t,
      onChange: I,
      children: B.Z.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION_ENABLE
    }), (0, n.jsx)(E.FormSwitch, {
      className: G.marginBottom40,
      value: e,
      note: null != o ? (0, O.Z)(o) : void 0,
      onChange: p.QK.updateSetting,
      children: B.Z.Messages.GIF_AUTO_PLAY_LABEL
    }), (0, n.jsx)(E.FormSwitch, {
      className: l()(G.marginTop8, G.marginBottom20),
      value: s,
      note: null != d ? (0, O.Z)(d) : void 0,
      onChange: p.Yk.updateSetting,
      children: B.Z.Messages.ANIMATE_EMOJI
    })]
  })
}

function ee() {
  let e = p.Wp.useSetting(),
    s = (0, c.e7)([L.Z], () => L.Z.getAppliedOverrideReasonKey("animateStickers")),
    t = i.useCallback(e => {
      p.Wp.updateSetting(e.value)
    }, []);
  return (0, n.jsxs)(E.FormItem, {
    className: G.marginBottom40,
    title: B.Z.Messages.STICKERS_AUTO_PLAY_HEADING,
    children: [(0, n.jsx)(E.FormText, {
      type: E.FormText.Types.DESCRIPTION,
      className: G.marginBottom8,
      children: null != s ? (0, O.Z)(s) : B.Z.Messages.STICKERS_AUTO_PLAY_HELP
    }), (0, n.jsx)(E.RadioGroup, {
      options: [{
        name: B.Z.Messages.STICKERS_ALWAYS_ANIMATE,
        value: j.yr.ALWAYS_ANIMATE
      }, {
        name: B.Z.Messages.STICKERS_ANIMATE_ON_INTERACTION,
        desc: B.Z.Messages.STICKERS_ANIMATE_ON_INTERACTION_DESCRIPTION,
        value: j.yr.ANIMATE_ON_INTERACTION
      }, {
        name: B.Z.Messages.STICKERS_NEVER_ANIMATE,
        value: j.yr.NEVER_ANIMATE
      }],
      onChange: t,
      value: e
    })]
  })
}

function es() {
  let e = (0, c.e7)([S.Z], () => S.Z.isSubmitButtonEnabled),
    s = p.dN.useSetting(),
    t = i.useRef(null);
  return (0, P.Z)(t, Z.rP.LEGACY_CHAT_INPUT), (0, n.jsxs)(E.FormItem, {
    ref: t,
    children: [(0, n.jsx)(E.FormTitle, {
      className: G.marginBottom8,
      children: B.Z.Messages.FORM_LABEL_ACCESSIBILITY_CHAT_INPUT
    }), (0, n.jsx)(E.FormSwitch, {
      className: G.marginTop20,
      value: e,
      onChange: T.eN,
      children: B.Z.Messages.DISPLAY_SUBMIT_BUTTON
    }), (0, n.jsx)(E.FormSwitch, {
      className: G.marginTop8,
      value: s,
      note: B.Z.Messages.LEGACY_CHAT_INPUT_DESCRIPTION,
      onChange: e => {
        x.default.track(v.rMx.LEGACY_CHAT_INPUT_TOGGLED, {
          enabled: e,
          location: {
            section: v.jXE.SETTINGS_ACCESSIBILITY
          }
        }), p.dN.updateSetting(e)
      },
      children: B.Z.Messages.LEGACY_CHAT_INPUT
    })]
  })
}

function et() {
  let e = p.OW.useSetting(),
    s = (0, c.e7)([g.Z], () => g.Z.speechRate),
    [t, a] = i.useState(!1);
  return _.Zh ? (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(E.FormItem, {
      children: [(0, n.jsx)(E.FormTitle, {
        className: G.marginBottom8,
        children: B.Z.Messages.FORM_LABEL_TTS
      }), (0, n.jsx)(E.FormSwitch, {
        className: G.marginTop20,
        value: e,
        onChange: p.OW.updateSetting,
        children: B.Z.Messages.ALLOW_TTS_COMMAND
      })]
    }), (0, n.jsxs)(E.FormItem, {
      className: G.marginBottom20,
      children: [(0, n.jsx)(E.FormTitle, {
        id: Y,
        className: G.marginBottom20,
        children: B.Z.Messages.ACCESSIBILITY_SETTINGS_TTS_RATE_LABEL
      }), (0, n.jsx)("div", {
        className: b.ttsPreviewWrapper,
        children: (0, n.jsx)(E.Button, {
          color: E.ButtonColors.BRAND,
          onClick: () => {
            if (t) {
              (0, h.NB)(), a(!1);
              return
            }(0, h.cP)(B.Z.Messages.ACCESSIBILITY_SETTINGS_TTS_RATE_TEST, !0, void 0, () => a(!0), () => a(!1)), a(!0)
          },
          children: (0, n.jsxs)(R.Z, {
            align: R.Z.Align.CENTER,
            children: [t ? (0, n.jsx)(E.PauseIcon, {
              size: "md",
              color: "currentColor"
            }) : (0, n.jsx)(E.PlayIcon, {
              size: "md",
              color: "currentColor"
            }), (0, n.jsx)("span", {
              children: B.Z.Messages.ACCESSIBILITY_SETTINGS_TTS_RATE_PREVIEW
            }), (0, n.jsx)(E.HiddenVisually, {
              children: B.Z.Messages.ACCESSIBILITY_SETTINGS_TTS_RATE_LABEL
            })]
          })
        })
      }), (0, n.jsx)(E.Slider, {
        markers: U.q,
        initialValue: s,
        defaultValue: 1,
        stickToMarkers: !0,
        onValueChange: k,
        onValueRender: e => "x".concat(e.toFixed(2)),
        onMarkerRender: e => 0 === e ? (0, n.jsx)("span", {
          className: b.ttsSliderMarker,
          children: B.Z.Messages.ACCESSIBILITY_SETTINGS_TTS_RATE_SLOWER
        }) : 10 === e ? (0, n.jsx)("span", {
          className: b.ttsSliderMarker,
          children: B.Z.Messages.ACCESSIBILITY_SETTINGS_TTS_RATE_FASTER
        }) : 1 === e ? (0, n.jsx)("span", {
          children: "x1.0"
        }) : e % 1 == 0 ? "" : void 0,
        "aria-labelledby": Y
      })]
    })]
  }) : null
}