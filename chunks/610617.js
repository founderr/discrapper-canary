"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
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
  f = s("552958"),
  m = s("820408"),
  E = s("921944"),
  _ = s("689938"),
  T = s("998799");
let x = [{
  name: "Discord Default",
  description: "Wumpus’ Favorite"
}, {
  name: "Discord Default",
  description: "Wumpus’ Favorite"
}, {
  name: "Discord Default",
  description: "Wumpus’ Favorite"
}, {
  name: "Discord Default",
  description: "Wumpus’ Favorite"
}];

function I(e) {
  let {
    guildId: t,
    onClose: s
  } = e, n = (0, r.useStateFromStores)([c.default], () => c.default.getGuild(t)), I = (0, r.useStateFromStores)([h.default], () => h.default.getCurrentUser()), [O, C] = a.useState(0), {
    playSound: p,
    isPlaying: M
  } = (0, f.default)(), v = x.map((e, t) => {
    var s, i, a;
    return {
      name: e.name,
      value: t,
      desc: e.description,
      radioBarClassName: (s = t, i = O, a = M, l()(T.option, {
        [T.optionPlaying]: s === i && a
      }))
    }
  }), [L, A] = (0, u.useSelectedDismissibleContent)([d.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]), j = L === d.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
  a.useEffect(() => () => {
    A(E.ContentDismissActionType.AUTO_DISMISS)
  }, [A]);
  let R = g.default.canUseCustomNotificationSounds(I);
  return null == I ? null : (0, i.jsxs)("div", {
    className: T.container,
    children: [(0, i.jsxs)("div", {
      className: T.header,
      children: [(0, i.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        children: _.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND
      }), (0, i.jsx)(S.default, {
        className: T.nitroWheel
      }), j && (0, i.jsx)(N.TextBadge, {
        className: T.newBadge,
        text: _.default.Messages.NEW
      })]
    }), (0, i.jsx)(o.Text, {
      className: T.subheader,
      variant: "text-sm/normal",
      children: _.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_NOTIFICATION_SETTINGS_DESCRIPTION_V2.format({
        guildName: (e, t) => (0, i.jsx)(o.Text, {
          tag: "span",
          variant: "text-sm/medium",
          children: null == n ? void 0 : n.name
        }, t)
      })
    }), (0, i.jsx)(o.FormItem, {
      className: T.optionsContainer,
      title: _.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_NOTIFICATION_SETTINGS_LABEL,
      children: (0, i.jsx)(o.RadioGroup, {
        className: T.options,
        value: O,
        onChange: e => {
          p(), C(e.value)
        },
        options: v
      })
    }), !R && (0, i.jsx)(m.default, {
      onClose: s
    }), (0, i.jsx)(o.FormDivider, {
      className: T.divider
    })]
  })
}