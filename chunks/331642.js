"use strict";
s.r(t), s.d(t, {
  default: function() {
    return O
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("442837"),
  l = s("692547"),
  r = s("481060"),
  o = s("596454"),
  d = s("594174"),
  u = s("586791"),
  c = s("632184"),
  S = s("740727"),
  E = s("74538"),
  T = s("242291"),
  _ = s("706667"),
  I = s("792165"),
  N = s("409673"),
  g = s("603074"),
  f = s("689938"),
  m = s("152951");

function A(e) {
  let {
    onSelect: t
  } = e, [s, l] = n.useState(!1), o = (0, i.useStateFromStores)([d.default], () => d.default.getCurrentUser()), c = E.default.canUseCustomCallSounds(o);

  function S(e) {
    c && (l(!1), null == t || t(e))
  }
  return (0, a.jsx)(r.Popout, {
    shouldShow: s,
    position: "left",
    onRequestClose: () => l(!1),
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, a.jsx)(r.Dialog, {
        children: (0, a.jsx)(g.default, {
          suppressPlaySound: !0,
          shouldShowUpsell: !1,
          guildId: null,
          channel: null,
          onClose: t,
          onSelect: S,
          gridNotice: c ? null : (0, a.jsx)(I.CustomCallSoundUpsell, {}),
          analyticsSource: "call sounds edit setting"
        })
      })
    },
    children: e => (0, a.jsx)(N.SecondaryActionButton, {
      ...e,
      onClick: () => {
        l(!s)
      },
      text: f.default.Messages.CALL_SOUNDS_SETTINGS_JOIN_SOUND_CHANGE,
      children: (0, a.jsx)(u.default, {
        className: m.secondaryIcon
      })
    })
  })
}

function C(e) {
  let {
    sound: t
  } = e, {
    previewSound: s
  } = (0, _.default)(t, null), n = 0 === (0, T.getAmplitudinalSoundboardVolume)() ? f.default.Messages.SOUNDBOARD_SOUND_PREVIEW_SOUND_LOW_VOLUME : f.default.Messages.SOUNDBOARD_SOUND_PREVIEW_SOUND.format({
    emojiName: t.emojiName,
    soundName: t.name
  });
  return (0, a.jsx)(N.SecondaryActionButton, {
    onClick: s,
    text: n,
    children: (0, a.jsx)(c.default, {
      className: m.secondaryIconActive
    })
  })
}

function O(e) {
  let {
    sound: t,
    isGlobal: s,
    onSelect: n
  } = e, i = null != t, d = null == t ? void 0 : t.emojiId, u = null == t ? void 0 : t.emojiName, E = i && (null != u || null != d), T = e => (0, a.jsx)(r.Text, {
    variant: "text-xs/medium",
    color: "header-secondary",
    tag: "span",
    children: e
  });
  return (0, a.jsxs)("div", {
    className: m.soundButtonSettingContainer,
    children: [(0, a.jsxs)("div", {
      className: m.container,
      children: [E && (0, a.jsx)(o.default, {
        emojiId: d,
        emojiName: u,
        className: m.emoji
      }), (0, a.jsx)(r.Text, {
        variant: "text-xs/medium",
        color: "header-primary",
        className: m.soundText,
        children: null == t ? f.default.Messages.NONE : s ? f.default.Messages.CALL_SOUNDS_SETTINGS_ALL_SERVERS.format({
          soundName: t.name,
          subtextHook: T
        }) : t.name
      }), i ? (0, a.jsx)(C, {
        sound: t
      }) : (0, a.jsx)(c.default, {
        className: m.secondaryIconDisabled
      })]
    }), (0, a.jsxs)("div", {
      className: m.container,
      children: [(0, a.jsx)(A, {
        onSelect: n
      }), i && !s && (0, a.jsx)(N.SecondaryActionButton, {
        onClick: () => n(null),
        text: f.default.Messages.CALL_SOUNDS_SETTINGS_JOIN_SOUND_REMOVE,
        children: (0, a.jsx)(S.default, {
          color: l.default.unsafe_rawColors.RED_400.css,
          className: m.secondaryIcon
        })
      })]
    })]
  })
}