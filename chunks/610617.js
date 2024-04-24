"use strict";
s.r(t), s.d(t, {
  default: function() {
    return j
  }
}), s("47120");
var a = s("735250"),
  i = s("470079"),
  n = s("120356"),
  l = s.n(n),
  r = s("392711"),
  d = s.n(r),
  o = s("831209"),
  u = s("442837"),
  c = s("524437"),
  h = s("481060"),
  S = s("243778"),
  N = s("430824"),
  g = s("9156"),
  f = s("594174"),
  m = s("466111"),
  E = s("759231"),
  T = s("26290"),
  _ = s("74538"),
  x = s("671105"),
  I = s("552958"),
  O = s("213931"),
  C = s("940165"),
  p = s("820408"),
  M = s("921944"),
  v = s("871465"),
  L = s("689938"),
  A = s("998799");

function j(e) {
  let {
    guildId: t,
    onClose: s
  } = e, n = (0, u.useStateFromStores)([N.default], () => N.default.getGuild(t)), r = (0, u.useStateFromStores)([f.default], () => f.default.getCurrentUser()), {
    playSound: j,
    isPlaying: R,
    soundpackPlaying: b
  } = (0, I.default)(), U = (0, x.useGuildCustomNotificationSound)(t), G = _.default.canUseCustomNotificationSounds(r), F = G ? U : v.Soundpacks.CLASSIC, P = (0, v.getCustomNotificationSoundpackOptions)(), [D, y] = d().partition(P, e => !e.requirePremium || e.requirePremium && G), k = D.map(e => {
    var t, s, a;
    return {
      name: e.label,
      value: e.value,
      desc: e.description,
      radioBarClassName: (t = e.value, s = b, a = R, l()(A.option, {
        [A.optionPlaying]: t === s && a
      }))
    }
  }), [H, w] = (0, S.useSelectedDismissibleContent)([c.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]), B = H === c.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
  i.useEffect(() => () => {
    w(M.ContentDismissActionType.AUTO_DISMISS)
  }, [w]);
  let Y = _.default.canUseCustomNotificationSounds(r),
    V = (0, u.useStateFromStores)([g.default], () => g.default.isMuted(t), [t]);
  return null == r ? null : (0, a.jsxs)("div", {
    className: A.container,
    children: [(0, a.jsxs)("div", {
      className: A.header,
      children: [(0, a.jsx)(h.Heading, {
        variant: "heading-md/semibold",
        children: L.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND
      }), (0, a.jsx)(m.default, {
        className: A.nitroWheel
      }), B && (0, a.jsx)(T.TextBadge, {
        className: A.newBadge,
        text: L.default.Messages.NEW
      })]
    }), (0, a.jsx)(h.Text, {
      className: A.subheader,
      variant: "text-sm/normal",
      children: L.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_NOTIFICATION_SETTINGS_DESCRIPTION_V2.format({
        guildName: (e, t) => (0, a.jsx)(h.Text, {
          tag: "span",
          variant: "text-sm/medium",
          children: null == n ? void 0 : n.name
        }, t)
      })
    }), V && (0, a.jsxs)("div", {
      className: A.warningContainer,
      children: [(0, a.jsx)(E.default, {
        color: o.default.STATUS_WARNING
      }), (0, a.jsx)(h.Text, {
        className: A.warningLabel,
        variant: "text-sm/medium",
        children: L.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_NOTIFICATION_SETTINGS_WARNING
      })]
    }), (0, a.jsx)(h.FormItem, {
      className: A.optionsContainer,
      title: L.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_NOTIFICATION_SETTINGS_LABEL,
      children: (0, a.jsxs)("div", {
        className: l()({
          [A.options]: !Y
        }),
        children: [(0, a.jsx)(h.RadioGroup, {
          className: l()({
            [A.options]: Y
          }),
          value: null != F ? F : v.Soundpacks.CLASSIC,
          onChange: e => {
            j(e.value), G && (0, O.updateGuildCustomNotificationSound)(t, e.value)
          },
          options: k,
          radioItemClassName: A.option
        }), y.map((e, t) => (0, a.jsx)(C.default, {
          className: A.playableOption,
          label: e.label,
          description: e.description,
          soundpack: e.value
        }, "sound_option_".concat(t)))]
      })
    }), !Y && (0, a.jsx)(p.default, {
      onClose: s
    }), (0, a.jsx)(h.FormDivider, {
      className: A.divider
    })]
  })
}