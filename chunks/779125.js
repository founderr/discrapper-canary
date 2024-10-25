n.d(t, {
    Z: function () {
        return N;
    }
});
var i = n(200651);
n(192379);
var a = n(442837),
    s = n(481060),
    r = n(475179),
    l = n(287734),
    o = n(933557),
    c = n(124072),
    u = n(703656),
    d = n(131704),
    _ = n(592125),
    E = n(430824),
    I = n(699516),
    m = n(594174),
    f = n(934415),
    T = n(900849),
    h = n(981631);
function N(e) {
    let { channel: t, onClick: n, beforeTransition: N, className: p, openChatWithoutConnecting: C } = e,
        g = (0, a.e7)([m.default, I.Z], () => (null == t ? '' : (0, o.F6)(t, m.default, I.Z)), [t]);
    return (0, i.jsx)(s.Tooltip, {
        text: g,
        position: 'top',
        children: (e) => {
            let { onMouseEnter: a, onMouseLeave: o } = e;
            return (0, i.jsx)(c.Z, {
                role: 'link',
                className: p,
                onClick: (e) => {
                    e.stopPropagation(),
                        null != n
                            ? n()
                            : (null != N && N(),
                              (0, s.closeAllModals)(),
                              !(function (e, t) {
                                  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                  if (null == e || null == t) return;
                                  let i = E.Z.getGuild(e);
                                  if ((null == i ? void 0 : i.joinedAt) == null) {
                                      T.Ub(e, {}, { channelId: t });
                                      return;
                                  }
                                  let a = _.Z.getChannel(t);
                                  if (null != a && (0, d.bw)(a.type)) {
                                      if (n) {
                                          r.Z.updateChatOpen(a.id, !0), (0, u.uL)(h.Z5c.CHANNEL(e, t));
                                          return;
                                      }
                                      l.default.selectVoiceChannel(a.id);
                                      return;
                                  }
                                  (0, u.uL)(h.Z5c.CHANNEL(e, t));
                              })(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, C));
                },
                onMouseEnter: a,
                onMouseLeave: o,
                iconType: (0, f.wl)(t),
                children: g
            });
        }
    });
}
