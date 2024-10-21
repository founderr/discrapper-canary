n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var s = n(710845),
    a = n(620662),
    l = n(915863),
    r = n(981631),
    o = n(689938);
function c(e) {
    let { activity: t, user: n, look: c, color: u, onAction: d } = e;
    return (0, a.Z)(t, r.xjy.INSTANCE)
        ? (0, i.jsx)(
              l.Z,
              {
                  look: c,
                  color: u,
                  onClick: () => {
                      null == d || d(), new s.Z('UserActivityActions').log('notify', n.id, t);
                  },
                  fullWidth: !0,
                  children: o.Z.Messages.USER_ACTIVITY_ACTION_NOTIFY_ME
              },
              'notify'
          )
        : null;
}
