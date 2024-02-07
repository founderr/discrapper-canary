"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("37983"),
  i = n("884691"),
  l = n("77078"),
  u = n("390236"),
  s = n("292508"),
  r = n("383294"),
  o = n("913452"),
  d = n("533466"),
  c = n("49111"),
  f = n("268333");

function _(e) {
  let {
    windowKey: t,
    channel: n
  } = e;
  return (0, a.jsx)(s.default, {
    withTitleBar: !0,
    windowKey: t,
    title: n.name,
    channelId: n.id,
    contentClassName: f.popoutContent,
    children: (0, a.jsx)(u.default.Provider, {
      value: n.guild_id,
      children: (0, a.jsx)(d.default, {
        providedChannel: n
      })
    })
  })
}

function E(e, t) {
  let n = (0, o.useOpenInPopoutExperiment)(t),
    u = i.useCallback(() => {
      r.open("".concat(c.PopoutWindowKeys.CHANNEL_POPOUT, "-").concat(e.id), t => (0, a.jsx)(_, {
        windowKey: t,
        channel: e
      }), {
        defaultWidth: 854,
        defaultHeight: 480
      })
    }, [e]);
  return n ? (0, a.jsx)(l.MenuItem, {
    id: "channel-pop-out",
    label: "Open in Popout",
    action: () => u()
  }) : null
}