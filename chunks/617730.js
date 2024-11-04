n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    s = n(973616),
    a = n(131704),
    l = n(601964),
    o = n(598077),
    c = n(230224),
    u = n(258356),
    d = n(981631),
    h = n(388032),
    g = n(39578);
let f = (e) => {
    let { state: t } = e;
    switch (t) {
        case d.r2o.ACCEPTING:
        case d.r2o.APP_OPENING:
            return !0;
        default:
            return !1;
    }
};
function m(e) {
    let { invite: t, onAcceptInvite: n, disableUser: m = !1 } = e;
    if (null == t) return null;
    let p = null != t.guild ? new l.ZP(t.guild) : null,
        _ = null != t.channel ? (0, a.jD)(t.channel) : null,
        x = null != t.target_application ? new s.Z(t.target_application) : null,
        E = m || null == t.inviter ? null : new o.Z(t.inviter),
        v = !((null != t.approximate_member_count && t.approximate_member_count > c.mx) || (null != p && p.hasFeature(d.oNc.COMMUNITY))) && null != E && (0, c.WT)(t),
        I = f(t),
        N = {
            invite: t,
            user: E,
            guild: p,
            channel: _,
            application: x
        };
    return (0, c.JI)(t)
        ? (0, i.jsx)(u.Z, {
              invite: t,
              channel: _,
              isSubmitting: I,
              onAcceptInvite: n
          })
        : (0, i.jsxs)('div', {
              className: g.container,
              children: [
                  (0, i.jsx)(c.GB, {
                      application: x,
                      guild: p,
                      user: v || (0, c.X7)(t) ? E : null
                  }),
                  (0, c.X7)(t)
                      ? null
                      : (0, i.jsx)(c.jq, {
                            ...N,
                            showBigUserIcon: v
                        }),
                  (0, i.jsx)(c.UM, {
                      ...N,
                      showBigUserIcon: v
                  }),
                  (0, i.jsx)(c.V6, { ...N }),
                  (0, i.jsx)(r.Button, {
                      onClick: n,
                      submitting: I,
                      className: g.acceptButton,
                      children: h.intl.string(h.t.ohMvm5)
                  })
              ]
          });
}
