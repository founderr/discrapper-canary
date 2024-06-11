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
  c = s("704215"),
  h = s("433517"),
  S = s("481060"),
  N = s("243778"),
  g = s("430824"),
  f = s("9156"),
  m = s("594174"),
  E = s("466111"),
  T = s("759231"),
  _ = s("74538"),
  I = s("671105"),
  x = s("552958"),
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
  } = e, r = (0, u.useStateFromStores)([g.default], () => g.default.getGuild(t)), j = (0, u.useStateFromStores)([m.default], () => m.default.getCurrentUser()), {
    playSound: R,
    isPlaying: b,
    soundpackPlaying: U
  } = (0, x.default)(), G = (0, I.useGuildCustomNotificationSound)(t), F = _.default.canUseCustomNotificationSounds(j), P = F ? G : v.Soundpacks.CLASSIC, D = a.useRef(0), k = a.useRef(-1), [y, H] = a.useState(!1), w = (0, v.getCustomNotificationSoundpackOptions)(), B = a.useCallback(() => {
    clearTimeout(k.current), D.current += 1, D.current > 10 && (H(!0), h.Storage.set(v.CUSTOM_NOTIFICATION_SOUNDS_ASMR_STORAGE_KEY, !0)), k.current = setTimeout(() => {
      D.current = 0
    }, 1e3)
  }, []), [Y, V] = o().partition(w, e => !e.requirePremium || e.requirePremium && F), W = Y.map(e => {
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
  }), [z, K] = (0, N.useSelectedDismissibleContent)([c.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]), X = z === c.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
  a.useEffect(() => () => {
    K(M.ContentDismissActionType.AUTO_DISMISS)
  }, [K]);
  let q = _.default.canUseCustomNotificationSounds(j),
    J = (0, u.useStateFromStores)([f.default], () => f.default.isMuted(t), [t]);
  return null == j ? null : (0, i.jsxs)("div", {
    children: [(0, i.jsxs)("div", {
      className: A.header,
      children: [(0, i.jsx)(S.Heading, {
        variant: "heading-md/semibold",
        children: L.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND
      }), (0, i.jsx)(S.Clickable, {
        onClick: B,
        className: A.nitroWheelContainer,
        children: (0, i.jsx)(E.default, {
          className: A.nitroWheel
        })
      }), X && (0, i.jsx)(S.TextBadge, {
        className: A.newBadge,
        text: L.default.Messages.NEW
      })]
    }), (0, i.jsx)(S.Text, {
      className: A.subheader,
      variant: "text-sm/normal",
      children: L.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_NOTIFICATION_SETTINGS_DESCRIPTION_V2.format({
        guildName: (e, t) => (0, i.jsx)(S.Text, {
          tag: "span",
          variant: "text-sm/medium",
          children: null == r ? void 0 : r.name
        }, t)
      })
    }), J && (0, i.jsxs)("div", {
      className: A.warningContainer,
      children: [(0, i.jsx)(T.default, {
        color: d.default.STATUS_WARNING
      }), (0, i.jsx)(S.Text, {
        className: A.warningLabel,
        variant: "text-sm/medium",
        children: L.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_NOTIFICATION_SETTINGS_WARNING
      })]
    }), (0, i.jsx)(S.FormItem, {
      className: A.optionsContainer,
      title: L.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_NOTIFICATION_SETTINGS_LABEL,
      children: (0, i.jsxs)("div", {
        className: l()({
          [A.options]: !q
        }),
        children: [(0, i.jsx)(S.RadioGroup, {
          className: l()({
            [A.options]: q
          }),
          value: null != P ? P : v.Soundpacks.CLASSIC,
          onChange: e => {
            R(e.value), F && (0, C.updateGuildCustomNotificationSound)(t, P, e.value, "notificationSettings")
          },
          options: W,
          radioItemClassName: A.option
        }), V.map((e, t) => (0, i.jsx)(O.default, {
          className: A.playableOption,
          label: e.label,
          description: e.description,
          soundpack: e.value,
          location: "notificationSettings"
        }, "sound_option_".concat(t)))]
      })
    }), !q && (0, i.jsx)(p.default, {
      onClose: s
    })]
  })
}