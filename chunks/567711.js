e.d(t, {
    Z: function () {
        return f;
    }
});
var r = e(200651);
e(192379);
var i = e(442837),
    u = e(481060),
    a = e(313889),
    l = e(825829),
    o = e(36459),
    c = e(592125),
    d = e(375954),
    s = e(496675),
    _ = e(981631),
    E = e(388032);
function f(n, t) {
    let e = (0, i.e7)([s.Z], () => null != n && s.Z.canWithPartialContext(_.Plq.MANAGE_MESSAGES, { channelId: n }), [n]),
        f = (0, i.e7)([c.Z], () => c.Z.getChannel(n), [n]),
        M = (0, i.e7)([d.Z], () => (null != n && null != t ? d.Z.getMessage(n, t) : null)),
        A = (0, l.NK)(null != M ? M : null);
    if (null == f || null == M) return null;
    let I = null != A && A.actions.hasOwnProperty(a.d.SET_COMPLETED) ? a.d.UNSET_COMPLETED : a.d.SET_COMPLETED,
        O = I === a.d.SET_COMPLETED ? E.intl.string(E.t.VWNyUl) : E.intl.string(E.t.l9GqxM);
    return e && null != t
        ? (0, r.jsx)(
              u.MenuItem,
              {
                  id: 'mark-automod-alert-completed',
                  label: O,
                  action: () => {
                      (0, o.Xx)(t, f, I);
                  }
              },
              'mark-automod-alert-completed'
          )
        : null;
}
