t.d(e, {
  Z: function() {
    return p
  }
});
var i = t(735250),
  l = t(470079),
  u = t(481060),
  o = t(372900),
  r = t(238246),
  a = t(788983),
  s = t(207035),
  c = t(823748),
  d = t(981631),
  Z = t(384690);

function h(n) {
  let {
    windowKey: e,
    channel: t
  } = n;
  return (0, i.jsx)(r.Z, {
    withTitleBar: !0,
    windowKey: e,
    title: t.name,
    channelId: t.id,
    contentClassName: Z.popoutContent,
    children: (0, i.jsx)(o.Z.Provider, {
      value: t.guild_id,
      children: (0, i.jsx)(c.Z, {
        providedChannel: t
      })
    })
  })
}

function p(n, e) {
  let t = (0, s.P)(e),
    o = l.useCallback(() => {
      a.bA("".concat(d.KJ3.CHANNEL_POPOUT, "-").concat(n.id), e => (0, i.jsx)(h, {
        windowKey: e,
        channel: n
      }), {
        defaultWidth: 854,
        defaultHeight: 480
      })
    }, [n]);
  return t ? (0, i.jsx)(u.MenuItem, {
    id: "channel-pop-out",
    label: "Open in Popout",
    action: () => o()
  }) : null
}