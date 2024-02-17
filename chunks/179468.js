"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("37983"),
  l = n("884691"),
  i = n("77078"),
  u = n("390236"),
  d = n("292508"),
  s = n("383294"),
  r = n("913452"),
  o = n("533466"),
  c = n("49111"),
  f = n("765479");

function _(e) {
  let {
    windowKey: t,
    channel: n
  } = e;
  return (0, a.jsx)(d.default, {
    withTitleBar: !0,
    windowKey: t,
    title: n.name,
    channelId: n.id,
    contentClassName: f.popoutContent,
    children: (0, a.jsx)(u.default.Provider, {
      value: n.guild_id,
      children: (0, a.jsx)(o.default, {
        providedChannel: n
      })
    })
  })
}

function E(e, t) {
  let n = (0, r.useOpenInPopoutExperiment)(t),
    u = l.useCallback(() => {
      s.open("".concat(c.PopoutWindowKeys.CHANNEL_POPOUT, "-").concat(e.id), t => (0, a.jsx)(_, {
        windowKey: t,
        channel: e
      }), {
        defaultWidth: 854,
        defaultHeight: 480
      })
    }, [e]);
  return n ? (0, a.jsx)(i.MenuItem, {
    id: "channel-pop-out",
    label: "Open in Popout",
    action: () => u()
  }) : null
}