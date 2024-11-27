n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    s = n(973616),
    l = n(131704),
    a = n(601964),
    o = n(598077),
    c = n(230224),
    u = n(258356),
    d = n(981631),
    h = n(388032),
    g = n(461342);
let m = (e) => {
    let { state: t } = e;
    switch (t) {
        case d.r2o.ACCEPTING:
        case d.r2o.APP_OPENING:
            return !0;
        default:
            return !1;
    }
};
function f(e) {
    let { invite: t, onAcceptInvite: n, disableUser: f = !1 } = e;
    if (null == t) return null;
    let p = null != t.guild ? new a.ZP(t.guild) : null,
        x = null != t.channel ? (0, l.jD)(t.channel) : null,
        _ = null != t.target_application ? new s.Z(t.target_application) : null,
        E = f || null == t.inviter ? null : new o.Z(t.inviter),
        I = !((null != t.approximate_member_count && t.approximate_member_count > c.mx) || (null != p && p.hasFeature(d.oNc.COMMUNITY))) && null != E && (0, c.WT)(t),
        v = m(t),
        N = {
            invite: t,
            user: E,
            guild: p,
            channel: x,
            application: _
        };
    return (0, c.JI)(t)
        ? (0, i.jsx)(u.Z, {
              invite: t,
              channel: x,
              isSubmitting: v,
              onAcceptInvite: n
          })
        : (0, i.jsxs)('div', {
              className: g.container,
              children: [
                  (0, i.jsx)(c.GB, {
                      application: _,
                      guild: p,
                      user: I || (0, c.X7)(t) ? E : null
                  }),
                  (0, c.X7)(t)
                      ? null
                      : (0, i.jsx)(c.jq, {
                            ...N,
                            showBigUserIcon: I
                        }),
                  (0, i.jsx)(c.UM, {
                      ...N,
                      showBigUserIcon: I
                  }),
                  (0, i.jsx)(c.V6, { ...N }),
                  (0, i.jsx)(r.Button, {
                      onClick: n,
                      submitting: v,
                      className: g.acceptButton,
                      children: h.intl.string(h.t.ohMvm5)
                  })
              ]
          });
}
