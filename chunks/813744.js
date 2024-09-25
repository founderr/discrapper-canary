n.d(t, {
    Z: function () {
        return f;
    }
});
var r = n(47120);
var i = n(653041);
var a = n(735250);
n(470079);
var o = n(442837),
    s = n(481060),
    l = n(314910),
    u = n(857192),
    c = n(517100),
    d = n(594174),
    _ = n(231338),
    E = n(952188);
function f() {
    var e;
    let t = (0, o.e7)([u.default], () => u.default.isIdleStatusIndicatorEnabled),
        n = (0, o.e7)([d.default], () => {
            var e, t;
            return null !== (t = null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t;
        }),
        [r, i] = (0, o.Wu)([c.Z], () => [c.Z.isIdle(), c.Z.isAFK()]),
        f = [];
    return (
        !r && !i && f.push('ACTIVE'),
        r && f.push('IDLE'),
        i && f.push('AFK'),
        n && t
            ? (0, a.jsx)(l.ZP, {
                  children: (0, a.jsxs)('div', {
                      className: E.container,
                      children: [
                          (0, a.jsxs)('div', {
                              className: E.status,
                              children: [
                                  (0, a.jsx)(s.Status, {
                                      status: f.includes('ACTIVE') ? _.Sk.ONLINE : _.Sk.IDLE,
                                      className: E.statusIndicator
                                  }),
                                  (0, a.jsx)(s.Text, {
                                      variant: 'text-md/normal',
                                      children: 'IDLE STATUS:'
                                  }),
                                  (0, a.jsx)('div', {
                                      className: E.statusText,
                                      children: (0, a.jsx)(s.Text, {
                                          variant: 'text-md/bold',
                                          children: f.join(' + ')
                                      })
                                  })
                              ]
                          }),
                          r &&
                              (0, a.jsxs)(s.Text, {
                                  variant: 'text-md/normal',
                                  children: [
                                      'Idle since:',
                                      ' ',
                                      new Date(null !== (e = c.Z.getIdleSince()) && void 0 !== e ? e : 0).toLocaleDateString(void 0, {
                                          year: 'numeric',
                                          day: 'numeric',
                                          month: 'numeric',
                                          hour: 'numeric',
                                          minute: 'numeric',
                                          second: 'numeric'
                                      })
                                  ]
                              })
                      ]
                  })
              })
            : null
    );
}
