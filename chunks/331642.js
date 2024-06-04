"use strict";
s.r(t), s.d(t, {
  default: function() {
    return A
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("442837"),
  i = s("692547"),
  r = s("481060"),
  o = s("596454"),
  d = s("594174"),
  u = s("586791"),
  c = s("632184"),
  S = s("740727"),
  E = s("74538"),
  T = s("242291"),
  _ = s("706667"),
  f = s("792165"),
  I = s("409673"),
  m = s("603074"),
  N = s("689938"),
  g = s("152951");

function h(e) {
  let {
    onSelect: t
  } = e, [s, i] = n.useState(!1), o = (0, l.useStateFromStores)([d.default], () => d.default.getCurrentUser()), c = E.default.canUseCustomCallSounds(o);

  function S(e) {
    c && (i(!1), null == t || t(e))
  }
  return (0, a.jsx)(r.Popout, {
    shouldShow: s,
    position: "left",
    onRequestClose: () => i(!1),
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, a.jsx)(r.Dialog, {
        children: (0, a.jsx)(m.default, {
          suppressPlaySound: !0,
          shouldShowUpsell: !1,
          guildId: null,
          channel: null,
          onClose: t,
          onSelect: S,
          gridNotice: c ? null : (0, a.jsx)(f.CustomCallSoundUpsell, {}),
          analyticsSource: "call sounds edit setting"
        })
      })
    },
    children: e => (0, a.jsx)(I.SecondaryActionButton, {
      ...e,
      onClick: () => {
        i(!s)
      },
      text: N.default.Messages.CALL_SOUNDS_SETTINGS_JOIN_SOUND_CHANGE,
      children: (0, a.jsx)(u.default, {
        className: g.secondaryIcon
      })
    })
  })
}

function C(e) {
  let {
    sound: t
  } = e, {
    previewSound: s
  } = (0, _.default)(t, null), n = 0 === (0, T.getAmplitudinalSoundboardVolume)() ? N.default.Messages.SOUNDBOARD_SOUND_PREVIEW_SOUND_LOW_VOLUME : N.default.Messages.SOUNDBOARD_SOUND_PREVIEW_SOUND.format({
    emojiName: t.emojiName,
    soundName: t.name
  });
  return (0, a.jsx)(I.SecondaryActionButton, {
    onClick: s,
    text: n,
    children: (0, a.jsx)(c.default, {
      className: g.secondaryIconActive
    })
  })
}

function A(e) {
  let {
    sound: t,
    isGlobal: s,
    onSelect: n
  } = e, l = null != t, d = null == t ? void 0 : t.emojiId, u = null == t ? void 0 : t.emojiName, E = l && (null != u || null != d), T = e => (0, a.jsx)(r.Text, {
    variant: "text-xs/medium",
    color: "header-secondary",
    tag: "span",
    children: e
  });
  return (0, a.jsxs)("div", {
    className: g.soundButtonSettingContainer,
    children: [(0, a.jsxs)("div", {
      className: g.container,
      children: [E && (0, a.jsx)(o.default, {
        emojiId: d,
        emojiName: u,
        className: g.emoji
      }), (0, a.jsx)(r.Text, {
        variant: "text-xs/medium",
        color: "header-primary",
        className: g.soundText,
        children: null == t ? N.default.Messages.NONE : s ? N.default.Messages.CALL_SOUNDS_SETTINGS_ALL_SERVERS.format({
          soundName: t.name,
          subtextHook: T
        }) : t.name
      }), l ? (0, a.jsx)(C, {
        sound: t
      }) : (0, a.jsx)(c.default, {
        className: g.secondaryIconDisabled
      })]
    }), (0, a.jsxs)("div", {
      className: g.container,
      children: [(0, a.jsx)(h, {
        onSelect: n
      }), l && !s && (0, a.jsx)(I.SecondaryActionButton, {
        onClick: () => n(null),
        text: N.default.Messages.CALL_SOUNDS_SETTINGS_JOIN_SOUND_REMOVE,
        children: (0, a.jsx)(S.default, {
          color: i.default.unsafe_rawColors.RED_400.css,
          className: g.secondaryIcon
        })
      })]
    })]
  })
}