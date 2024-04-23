"use strict";
s.r(t), s.d(t, {
  default: function() {
    return C
  }
}), s("47120");
var i = s("735250"),
  a = s("470079"),
  n = s("120356"),
  l = s.n(n),
  r = s("442837"),
  d = s("524437"),
  o = s("481060"),
  u = s("243778"),
  c = s("430824"),
  h = s("594174"),
  S = s("466111"),
  N = s("26290"),
  g = s("74538"),
  f = s("671105"),
  m = s("552958"),
  E = s("213931"),
  _ = s("820408"),
  T = s("921944"),
  x = s("871465"),
  I = s("689938"),
  O = s("998799");

function C(e) {
  let {
    guildId: t,
    onClose: s
  } = e, n = (0, r.useStateFromStores)([c.default], () => c.default.getGuild(t)), C = (0, r.useStateFromStores)([h.default], () => h.default.getCurrentUser()), {
    playSound: p,
    isPlaying: M,
    soundpackPlaying: v
  } = (0, m.default)(), L = (0, f.useGuildCustomNotificationSound)(t), A = g.default.canUseCustomNotificationSounds(C), j = A ? L : x.Soundpacks.CLASSIC, R = (0, x.getCustomNotificationSoundpackOptions)().map(e => {
    var t, s, i;
    return {
      name: e.label,
      value: e.value,
      desc: e.description,
      radioBarClassName: (t = e.value, s = v, i = M, l()(O.option, {
        [O.optionPlaying]: t === s && i
      }))
    }
  }), [b, U] = (0, u.useSelectedDismissibleContent)([d.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]), G = b === d.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
  a.useEffect(() => () => {
    U(T.ContentDismissActionType.AUTO_DISMISS)
  }, [U]);
  let F = g.default.canUseCustomNotificationSounds(C);
  return null == C ? null : (0, i.jsxs)("div", {
    className: O.container,
    children: [(0, i.jsxs)("div", {
      className: O.header,
      children: [(0, i.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        children: I.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND
      }), (0, i.jsx)(S.default, {
        className: O.nitroWheel
      }), G && (0, i.jsx)(N.TextBadge, {
        className: O.newBadge,
        text: I.default.Messages.NEW
      })]
    }), (0, i.jsx)(o.Text, {
      className: O.subheader,
      variant: "text-sm/normal",
      children: I.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_NOTIFICATION_SETTINGS_DESCRIPTION_V2.format({
        guildName: (e, t) => (0, i.jsx)(o.Text, {
          tag: "span",
          variant: "text-sm/medium",
          children: null == n ? void 0 : n.name
        }, t)
      })
    }), (0, i.jsx)(o.FormItem, {
      className: O.optionsContainer,
      title: I.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_NOTIFICATION_SETTINGS_LABEL,
      children: (0, i.jsx)(o.RadioGroup, {
        className: O.options,
        value: null != j ? j : x.Soundpacks.CLASSIC,
        onChange: e => {
          p(e.value), A && (0, E.updateGuildCustomNotificationSound)(t, e.value)
        },
        options: R
      })
    }), !F && (0, i.jsx)(_.default, {
      onClose: s
    }), (0, i.jsx)(o.FormDivider, {
      className: O.divider
    })]
  })
}