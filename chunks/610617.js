"use strict";
s.r(t), s.d(t, {
  default: function() {
    return x
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
  g = s("552958"),
  f = s("820408"),
  m = s("921944"),
  E = s("689938"),
  _ = s("998799");
let T = [{
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

function x(e) {
  let {
    guildId: t,
    onClose: s
  } = e, n = (0, r.useStateFromStores)([c.default], () => c.default.getGuild(t)), x = (0, r.useStateFromStores)([h.default], () => h.default.getCurrentUser()), [I, C] = a.useState(0), {
    playSound: p,
    isPlaying: O
  } = (0, g.default)(), M = T.map((e, t) => {
    var s, i, a;
    return {
      name: e.name,
      value: t,
      desc: e.description,
      radioBarClassName: (s = t, i = I, a = O, l()(_.option, {
        [_.optionPlaying]: s === i && a
      }))
    }
  }), [v, L] = (0, u.useSelectedDismissibleContent)([d.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]), j = v === d.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
  return (a.useEffect(() => () => {
    L(m.ContentDismissActionType.AUTO_DISMISS)
  }, [L]), null == x) ? null : (0, i.jsxs)("div", {
    className: _.container,
    children: [(0, i.jsxs)("div", {
      className: _.header,
      children: [(0, i.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        children: E.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND
      }), (0, i.jsx)(S.default, {
        className: _.nitroWheel
      }), j && (0, i.jsx)(N.TextBadge, {
        className: _.newBadge,
        text: E.default.Messages.NEW
      })]
    }), (0, i.jsx)(o.Text, {
      className: _.subheader,
      variant: "text-sm/normal",
      children: E.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_NOTIFICATION_SETTINGS_DESCRIPTION_V2.format({
        guildName: (e, t) => (0, i.jsx)(o.Text, {
          tag: "span",
          variant: "text-sm/medium",
          children: null == n ? void 0 : n.name
        }, t)
      })
    }), (0, i.jsx)(o.FormItem, {
      className: _.optionsContainer,
      title: E.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_NOTIFICATION_SETTINGS_LABEL,
      children: (0, i.jsx)(o.RadioGroup, {
        className: _.options,
        value: I,
        onChange: e => {
          p(), C(e.value)
        },
        options: M
      })
    }), (0, i.jsx)(f.default, {
      onClose: s
    }), (0, i.jsx)(o.FormDivider, {
      className: _.divider
    })]
  })
}