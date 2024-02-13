"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var i = n("37983"),
  a = n("884691"),
  l = n("77078"),
  r = n("390236"),
  u = n("292508"),
  s = n("383294"),
  o = n("913452"),
  d = n("533466"),
  c = n("49111"),
  f = n("268333");

function p(e) {
  let {
    windowKey: t,
    channel: n
  } = e;
  return (0, i.jsx)(u.default, {
    withTitleBar: !0,
    windowKey: t,
    title: n.name,
    channelId: n.id,
    contentClassName: f.popoutContent,
    children: (0, i.jsx)(r.default.Provider, {
      value: n.guild_id,
      children: (0, i.jsx)(d.default, {
        providedChannel: n
      })
    })
  })
}

function h(e, t) {
  let n = (0, o.useOpenInPopoutExperiment)(t),
    r = a.useCallback(() => {
      s.open("".concat(c.PopoutWindowKeys.CHANNEL_POPOUT, "-").concat(e.id), t => (0, i.jsx)(p, {
        windowKey: t,
        channel: e
      }), {
        defaultWidth: 854,
        defaultHeight: 480
      })
    }, [e]);
  return n ? (0, i.jsx)(l.MenuItem, {
    id: "channel-pop-out",
    label: "Open in Popout",
    action: () => r()
  }) : null
}