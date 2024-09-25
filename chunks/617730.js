n.d(t, {
    Z: function () {
        return p;
    }
});
var s = n(735250);
n(470079);
var r = n(481060),
    i = n(973616),
    a = n(131704),
    o = n(601964),
    l = n(598077),
    c = n(230224),
    u = n(258356),
    d = n(981631),
    _ = n(689938),
    h = n(39578);
let E = (e) => {
    let { state: t } = e;
    switch (t) {
        case d.r2o.ACCEPTING:
        case d.r2o.APP_OPENING:
            return !0;
        default:
            return !1;
    }
};
function p(e) {
    let { invite: t, onAcceptInvite: n, disableUser: p = !1 } = e;
    if (null == t) return null;
    let g = null != t.guild ? new o.ZP(t.guild) : null,
        m = null != t.channel ? (0, a.jD)(t.channel) : null,
        f = null != t.target_application ? new i.Z(t.target_application) : null,
        I = p || null == t.inviter ? null : new l.Z(t.inviter),
        N = !((null != t.approximate_member_count && t.approximate_member_count > c.mx) || (null != g && g.hasFeature(d.oNc.COMMUNITY))) && null != I && (0, c.WT)(t),
        T = E(t),
        x = {
            invite: t,
            user: I,
            guild: g,
            channel: m,
            application: f
        };
    return (0, c.JI)(t)
        ? (0, s.jsx)(u.Z, {
              invite: t,
              channel: m,
              isSubmitting: T,
              onAcceptInvite: n
          })
        : (0, s.jsxs)('div', {
              className: h.container,
              children: [
                  (0, s.jsx)(c.GB, {
                      application: f,
                      guild: g,
                      user: N || (0, c.X7)(t) ? I : null
                  }),
                  (0, c.X7)(t)
                      ? null
                      : (0, s.jsx)(c.jq, {
                            ...x,
                            showBigUserIcon: N
                        }),
                  (0, s.jsx)(c.UM, {
                      ...x,
                      showBigUserIcon: N
                  }),
                  (0, s.jsx)(c.V6, { ...x }),
                  (0, s.jsx)(r.Button, {
                      onClick: n,
                      submitting: T,
                      className: h.acceptButton,
                      children: _.Z.Messages.INSTANT_INVITE_ACCEPT
                  })
              ]
          });
}
