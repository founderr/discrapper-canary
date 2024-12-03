n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var o = n(442837),
    l = n(352527),
    r = n(183584),
    s = n(487029),
    a = n(592125),
    u = n(944486),
    c = n(554174),
    d = n(710111),
    h = n(714902);
function f() {
    let [e, t] = (0, o.Wu)([l.Z], () => [l.Z.enabled, l.Z.keepOpen]),
        n = (0, o.e7)([u.Z], () => u.Z.getVoiceChannelId()),
        f = (0, o.e7)([a.Z], () => a.Z.getChannel(n), [n]),
        p = null == f ? void 0 : f.getGuildId();
    return e && null != f
        ? (0, i.jsx)('div', {
              className: h.container,
              children: (0, i.jsx)(s.Z, {
                  width: d.FW.width,
                  height: d.FW.height,
                  guildId: p,
                  channel: f,
                  keepOpen: t,
                  onClose: function () {
                      let e = (0, c.Z)();
                      null != e && (0, r.oZ)(e);
                  },
                  analyticsSource: 'overlay'
              })
          })
        : null;
}
