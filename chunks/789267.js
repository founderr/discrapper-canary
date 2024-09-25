n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(735250);
n(470079);
var i = n(739566),
    a = n(834129),
    o = n(689938);
function s(e) {
    let t = null != e.call ? e.call.duration : null;
    return null != t ? t.humanize() : null;
}
function l(e) {
    let { message: t, compact: l, missed: u, joinable: c, usernameHook: d, onClickJoinCall: _ } = e,
        E = (0, i.ZP)(t),
        f = E.nick,
        h = d(E),
        p = s(t);
    return u
        ? (0, r.jsx)(a.Z, {
              icon: n(154239),
              timestamp: t.timestamp,
              compact: l,
              children:
                  null != p
                      ? o.Z.Messages.SYSTEM_MESSAGE_CALL_MISSED_WITH_DURATION_HOOK.format({
                            username: f,
                            usernameHook: h,
                            callDuration: p
                        })
                      : o.Z.Messages.SYSTEM_MESSAGE_CALL_MISSED_HOOK.format({
                            username: f,
                            usernameHook: h
                        })
          })
        : (0, r.jsxs)(a.Z, {
              icon: n(344163),
              timestamp: t.timestamp,
              compact: l,
              children: [
                  null != p
                      ? o.Z.Messages.SYSTEM_MESSAGE_CALL_STARTED_WITH_DURATION_HOOK.format({
                            username: f,
                            usernameHook: h,
                            callDuration: p
                        })
                      : o.Z.Messages.SYSTEM_MESSAGE_CALL_STARTED_HOOK.format({
                            username: f,
                            usernameHook: h
                        }),
                  c
                      ? (0, r.jsx)(a.Z.Action, {
                            onClick: _,
                            children: o.Z.Messages.SYSTEM_MESSAGE_JOIN_CALL
                        })
                      : null
              ]
          });
}
