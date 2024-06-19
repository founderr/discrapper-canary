t.d(s, {
  Z: function() {
    return O
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  a = t(442837),
  l = t(692547),
  r = t(481060),
  o = t(596454),
  c = t(594174),
  E = t(74538),
  d = t(242291),
  _ = t(706667),
  T = t(458263),
  S = t(409673),
  u = t(603074),
  I = t(689938),
  N = t(836214);

function A(e) {
  let {
    onSelect: s
  } = e, [t, l] = i.useState(!1), o = (0, a.e7)([c.default], () => c.default.getCurrentUser()), d = E.ZP.canUseCustomCallSounds(o);

  function _(e) {
    d && (l(!1), null == s || s(e))
  }
  return (0, n.jsx)(r.Popout, {
    shouldShow: t,
    position: "left",
    onRequestClose: () => l(!1),
    renderPopout: e => {
      let {
        closePopout: s
      } = e;
      return (0, n.jsx)(r.Dialog, {
        children: (0, n.jsx)(u.Z, {
          suppressPlaySound: !0,
          shouldShowUpsell: !1,
          guildId: null,
          channel: null,
          onClose: s,
          onSelect: _,
          gridNotice: d ? null : (0, n.jsx)(T.o, {}),
          analyticsSource: "call sounds edit setting"
        })
      })
    },
    children: e => (0, n.jsx)(S.hU, {
      ...e,
      onClick: () => {
        l(!t)
      },
      text: I.Z.Messages.CALL_SOUNDS_SETTINGS_JOIN_SOUND_CHANGE,
      children: (0, n.jsx)(r.PencilIcon, {
        size: "md",
        color: "currentColor",
        className: N.secondaryIcon
      })
    })
  })
}

function C(e) {
  let {
    sound: s
  } = e, {
    previewSound: t
  } = (0, _.Z)(s, null), i = 0 === (0, d.pI)() ? I.Z.Messages.SOUNDBOARD_SOUND_PREVIEW_SOUND_LOW_VOLUME : I.Z.Messages.SOUNDBOARD_SOUND_PREVIEW_SOUND.format({
    emojiName: s.emojiName,
    soundName: s.name
  });
  return (0, n.jsx)(S.hU, {
    onClick: t,
    text: i,
    children: (0, n.jsx)(r.VoiceNormalIcon, {
      size: "md",
      color: "currentColor",
      className: N.secondaryIconActive
    })
  })
}

function O(e) {
  let {
    sound: s,
    isGlobal: t,
    onSelect: i
  } = e, a = null != s, c = null == s ? void 0 : s.emojiId, E = null == s ? void 0 : s.emojiName, d = a && (null != E || null != c), _ = e => (0, n.jsx)(r.Text, {
    variant: "text-xs/medium",
    color: "header-secondary",
    tag: "span",
    children: e
  });
  return (0, n.jsxs)("div", {
    className: N.soundButtonSettingContainer,
    children: [(0, n.jsxs)("div", {
      className: N.container,
      children: [d && (0, n.jsx)(o.Z, {
        emojiId: c,
        emojiName: E,
        className: N.emoji
      }), (0, n.jsx)(r.Text, {
        variant: "text-xs/medium",
        color: "header-primary",
        className: N.soundText,
        children: null == s ? I.Z.Messages.NONE : t ? I.Z.Messages.CALL_SOUNDS_SETTINGS_ALL_SERVERS.format({
          soundName: s.name,
          subtextHook: _
        }) : s.name
      }), a ? (0, n.jsx)(C, {
        sound: s
      }) : (0, n.jsx)(r.VoiceNormalIcon, {
        size: "md",
        color: "currentColor",
        className: N.secondaryIconDisabled
      })]
    }), (0, n.jsxs)("div", {
      className: N.container,
      children: [(0, n.jsx)(A, {
        onSelect: i
      }), a && !t && (0, n.jsx)(S.hU, {
        onClick: () => i(null),
        text: I.Z.Messages.CALL_SOUNDS_SETTINGS_JOIN_SOUND_REMOVE,
        children: (0, n.jsx)(r.TrashIcon, {
          size: "md",
          color: l.Z.unsafe_rawColors.RED_400.css,
          className: N.secondaryIcon
        })
      })]
    })]
  })
}