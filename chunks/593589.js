t.d(e, {
  Z: function() {
    return f
  }
});
var i = t(735250),
  l = t(470079),
  a = t(481060),
  u = t(372900),
  r = t(238246),
  o = t(788983),
  d = t(207035),
  c = t(823748),
  s = t(981631),
  h = t(384690);

function p(n) {
  let {
    windowKey: e,
    channel: t
  } = n;
  return (0, i.jsx)(r.Z, {
    withTitleBar: !0,
    windowKey: e,
    title: t.name,
    channelId: t.id,
    contentClassName: h.popoutContent,
    children: (0, i.jsx)(u.Z.Provider, {
      value: t.guild_id,
      children: (0, i.jsx)(c.Z, {
        providedChannel: t
      })
    })
  })
}

function f(n, e) {
  let t = (0, d.P)(e),
    u = l.useCallback(() => {
      o.bA("".concat(s.KJ3.CHANNEL_POPOUT, "-").concat(n.id), e => (0, i.jsx)(p, {
        windowKey: e,
        channel: n
      }), {
        defaultWidth: 854,
        defaultHeight: 480
      })
    }, [n]);
  return t ? (0, i.jsx)(a.MenuItem, {
    id: "channel-pop-out",
    label: "Open in Popout",
    action: () => u()
  }) : null
}