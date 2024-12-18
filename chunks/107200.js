t.d(n, {
    Z: function () {
        return _;
    }
}),
    t(47120);
var i = t(200651);
t(192379);
var a = t(442837),
    o = t(352527),
    r = t(183584),
    l = t(487029),
    c = t(592125),
    s = t(944486),
    d = t(554174),
    u = t(710111),
    p = t(408704);
function _() {
    let [e, n] = (0, a.Wu)([o.Z], () => [o.Z.enabled, o.Z.keepOpen]),
        t = (0, a.e7)([s.Z], () => s.Z.getVoiceChannelId()),
        _ = (0, a.e7)([c.Z], () => c.Z.getChannel(t), [t]),
        h = null == _ ? void 0 : _.getGuildId();
    return e && null != _
        ? (0, i.jsx)('div', {
              className: p.widget,
              children: (0, i.jsx)(l.Z, {
                  width: u.FW.width,
                  height: u.FW.height,
                  guildId: h,
                  channel: _,
                  keepOpen: n,
                  onClose: function () {
                      let e = (0, d.Z)();
                      null != e && (0, r.oZ)(e);
                  },
                  analyticsSource: 'overlay'
              })
          })
        : null;
}
