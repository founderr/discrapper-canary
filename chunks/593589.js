"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var i = n("735250"),
  l = n("470079"),
  a = n("481060"),
  r = n("372900"),
  u = n("238246"),
  o = n("788983"),
  s = n("207035"),
  d = n("823748"),
  c = n("981631"),
  f = n("993622");

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
  let n = (0, s.useOpenInPopoutExperiment)(t),
    r = l.useCallback(() => {
      o.open("".concat(c.PopoutWindowKeys.CHANNEL_POPOUT, "-").concat(e.id), t => (0, i.jsx)(p, {
        windowKey: t,
        channel: e
      }), {
        defaultWidth: 854,
        defaultHeight: 480
      })
    }, [e]);
  return n ? (0, i.jsx)(a.MenuItem, {
    id: "channel-pop-out",
    label: "Open in Popout",
    action: () => r()
  }) : null
}