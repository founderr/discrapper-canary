t.d(n, {
    Z: function () {
        return o;
    }
});
var l = t(735250);
t(470079);
var i = t(442837),
    u = t(481060),
    s = t(357156),
    a = t(924301),
    r = t(554747),
    E = t(981631),
    d = t(689938);
function o(e, n, o) {
    var c;
    let { canManageGuildEvent: _ } = (0, s.XJ)(null != o ? o : n),
        Z = (0, i.e7)([a.ZP], () => a.ZP.getGuildScheduledEvent(e), [e]),
        T = _(Z),
        N = null != (0, r.qY)(null !== (c = null == o ? void 0 : o.id) && void 0 !== c ? c : E.lds),
        I = null != Z && (0, a.xt)(Z);
    return T && !I && !N
        ? (0, l.jsx)(u.MenuItem, {
              id: d.Z.Messages.START_EVENT,
              label: d.Z.Messages.START_EVENT,
              action: function () {
                  null != Z &&
                      (0, u.openModalLazy)(async () => {
                          let { default: e } = await Promise.all([t.e('84722'), t.e('66586')]).then(t.bind(t, 296864));
                          return (n) =>
                              (0, l.jsx)(e, {
                                  ...n,
                                  event: Z
                              });
                      });
              }
          })
        : null;
}
