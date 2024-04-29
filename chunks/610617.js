"use strict";
s.r(t), s.d(t, {
  default: function() {
    return j
  }
}), s("47120");
var i = s("735250"),
  a = s("470079"),
  n = s("120356"),
  l = s.n(n),
  r = s("392711"),
  o = s.n(r),
  d = s("831209"),
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
  C = s("213931"),
  O = s("940165"),
  p = s("820408"),
  M = s("921944"),
  v = s("871465"),
  L = s("689938"),
  A = s("520112");

function j(e) {
  let {
    guildId: t,
    onClose: s,
    isRedesign: n = !1
  } = e, r = (0, u.useStateFromStores)([N.default], () => N.default.getGuild(t)), j = (0, u.useStateFromStores)([f.default], () => f.default.getCurrentUser()), {
    playSound: R,
    isPlaying: b,
    soundpackPlaying: U
  } = (0, I.default)(), G = (0, x.useGuildCustomNotificationSound)(t), F = _.default.canUseCustomNotificationSounds(j), P = F ? G : v.Soundpacks.CLASSIC, D = (0, v.getCustomNotificationSoundpackOptions)(), [k, y] = o().partition(D, e => !e.requirePremium || e.requirePremium && F), H = k.map(e => {
    var t, s, i, a;
    return {
      name: e.label,
      value: e.value,
      desc: e.description,
      radioBarClassName: (t = e.value, s = U, i = b, a = n, l()(A.option, {
        [A.optionRedesign]: a,
        [A.optionPlaying]: t === s && i
      }))
    }
  }), [w, B] = (0, S.useSelectedDismissibleContent)([c.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]), Y = w === c.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
  a.useEffect(() => () => {
    B(M.ContentDismissActionType.AUTO_DISMISS)
  }, [B]);
  let V = _.default.canUseCustomNotificationSounds(j),
    W = (0, u.useStateFromStores)([g.default], () => g.default.isMuted(t), [t]);
  return null == j ? null : (0, i.jsxs)("div", {
    children: [(0, i.jsxs)("div", {
      className: A.header,
      children: [(0, i.jsx)(h.Heading, {
        variant: "heading-md/semibold",
        children: L.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND
      }), (0, i.jsx)(m.default, {
        className: A.nitroWheel
      }), Y && (0, i.jsx)(T.TextBadge, {
        className: A.newBadge,
        text: L.default.Messages.NEW
      })]
    }), (0, i.jsx)(h.Text, {
      className: A.subheader,
      variant: "text-sm/normal",
      children: L.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_NOTIFICATION_SETTINGS_DESCRIPTION_V2.format({
        guildName: (e, t) => (0, i.jsx)(h.Text, {
          tag: "span",
          variant: "text-sm/medium",
          children: null == r ? void 0 : r.name
        }, t)
      })
    }), W && (0, i.jsxs)("div", {
      className: A.warningContainer,
      children: [(0, i.jsx)(E.default, {
        color: d.default.STATUS_WARNING
      }), (0, i.jsx)(h.Text, {
        className: A.warningLabel,
        variant: "text-sm/medium",
        children: L.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_NOTIFICATION_SETTINGS_WARNING
      })]
    }), (0, i.jsx)(h.FormItem, {
      className: A.optionsContainer,
      title: L.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_NOTIFICATION_SETTINGS_LABEL,
      children: (0, i.jsxs)("div", {
        className: l()({
          [A.options]: !V
        }),
        children: [(0, i.jsx)(h.RadioGroup, {
          className: l()({
            [A.options]: V
          }),
          value: null != P ? P : v.Soundpacks.CLASSIC,
          onChange: e => {
            R(e.value), F && (0, C.updateGuildCustomNotificationSound)(t, e.value)
          },
          options: H,
          radioItemClassName: A.option
        }), y.map((e, t) => (0, i.jsx)(O.default, {
          className: A.playableOption,
          label: e.label,
          description: e.description,
          soundpack: e.value
        }, "sound_option_".concat(t)))]
      })
    }), !V && (0, i.jsx)(p.default, {
      onClose: s
    })]
  })
}