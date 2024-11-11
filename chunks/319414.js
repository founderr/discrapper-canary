n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(352527),
    o = n(183584),
    a = n(487029),
    s = n(592125),
    u = n(944486),
    c = n(554174),
    d = n(710111),
    h = n(555018);
function f() {
    let [e, t] = (0, r.Wu)([l.Z], () => [l.Z.enabled, l.Z.keepOpen]),
        n = (0, r.e7)([u.Z], () => u.Z.getVoiceChannelId()),
        f = (0, r.e7)([s.Z], () => s.Z.getChannel(n), [n]),
        p = null == f ? void 0 : f.getGuildId();
    return e && null != f
        ? (0, i.jsx)('div', {
              className: h.container,
              children: (0, i.jsx)(a.Z, {
                  width: d.FW.width,
                  height: d.FW.height,
                  guildId: p,
                  channel: f,
                  keepOpen: t,
                  onClose: function () {
                      let e = (0, c.Z)();
                      null != e && (0, o.oZ)(e);
                  },
                  analyticsSource: 'overlay'
              })
          })
        : null;
}
