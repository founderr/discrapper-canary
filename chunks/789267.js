n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var r = n(739566),
    l = n(834129),
    a = n(388032);
function o(e) {
    let { message: t, compact: o, missed: s, joinable: c, usernameHook: u, onClickJoinCall: d } = e,
        m = (0, r.ZP)(t),
        f = m.nick,
        h = u(m),
        p = (function (e) {
            let t = null != e.call ? e.call.duration : null;
            return null != t ? t.humanize() : null;
        })(t);
    return s
        ? (0, i.jsx)(l.Z, {
              icon: n(154239),
              timestamp: t.timestamp,
              compact: o,
              children:
                  null != p
                      ? a.intl.format(a.t.AcqBmJ, {
                            username: f,
                            usernameHook: h,
                            callDuration: p
                        })
                      : a.intl.format(a.t['43phHx'], {
                            username: f,
                            usernameHook: h
                        })
          })
        : (0, i.jsxs)(l.Z, {
              icon: n(344163),
              timestamp: t.timestamp,
              compact: o,
              children: [
                  null != p
                      ? a.intl.format(a.t['7TeC1N'], {
                            username: f,
                            usernameHook: h,
                            callDuration: p
                        })
                      : a.intl.format(a.t.LuB5RE, {
                            username: f,
                            usernameHook: h
                        }),
                  c
                      ? (0, i.jsx)(l.Z.Action, {
                            onClick: d,
                            children: a.intl.string(a.t.oa9mvb)
                        })
                      : null
              ]
          });
}
