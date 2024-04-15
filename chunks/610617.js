"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  }
}), s("47120");
var i = s("735250"),
  n = s("470079"),
  a = s("120356"),
  l = s.n(a),
  r = s("442837"),
  o = s("524437"),
  d = s("481060"),
  u = s("243778"),
  c = s("594174"),
  h = s("466111"),
  S = s("26290"),
  N = s("552958"),
  f = s("820408"),
  g = s("921944"),
  m = s("689938"),
  E = s("998799");
let _ = [{
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

function T(e) {
  let {
    onClose: t
  } = e, s = (0, r.useStateFromStores)([c.default], () => c.default.getCurrentUser()), [a, T] = n.useState(0), {
    playSound: x,
    isPlaying: p
  } = (0, N.default)(), C = _.map((e, t) => {
    var s, i, n;
    return {
      name: e.name,
      value: t,
      desc: e.description,
      radioBarClassName: (s = t, i = a, n = p, l()(E.option, {
        [E.optionPlaying]: s === i && n
      }))
    }
  }), [I, O] = (0, u.useSelectedDismissibleContent)([o.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]), M = I === o.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
  return (n.useEffect(() => () => {
    O(g.ContentDismissActionType.AUTO_DISMISS)
  }, [O]), null == s) ? null : (0, i.jsxs)("div", {
    className: E.container,
    children: [(0, i.jsxs)("div", {
      className: E.header,
      children: [(0, i.jsx)(d.Heading, {
        variant: "heading-md/semibold",
        children: "Notification Sound"
      }), (0, i.jsx)(h.default, {
        className: E.nitroWheel
      }), M && (0, i.jsx)(S.TextBadge, {
        className: E.newBadge,
        text: m.default.Messages.NEW
      })]
    }), (0, i.jsx)(d.Text, {
      className: E.subheader,
      variant: "text-sm/normal",
      children: "Set a unique sound for when you receive a notification from Design Buddies. Only with Nitro. This feature is currently only available on Desktop."
    }), (0, i.jsx)(d.FormItem, {
      className: E.optionsContainer,
      title: "Choose a notification sound",
      children: (0, i.jsx)(d.RadioGroup, {
        className: E.options,
        value: a,
        onChange: e => {
          x(), T(e.value)
        },
        options: C
      })
    }), (0, i.jsx)(f.default, {
      onClose: t
    }), (0, i.jsx)(d.FormDivider, {
      className: E.divider
    })]
  })
}