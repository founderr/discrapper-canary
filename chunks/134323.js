t.d(n, {
    Z: function () {
        return o;
    }
});
var i = t(200651);
t(192379);
var a = t(481060),
    s = t(280845),
    l = t(996861),
    r = t(689938);
function o(e, n) {
    return (0, s.U)(n, e)
        ? (0, i.jsx)(a.MenuItem, {
              id: 'reply',
              label: r.Z.Messages.MESSAGE_ACTION_REPLY,
              icon: a.ArrowAngleLeftUpIcon,
              action: (t) => {
                  (0, l.HH)(n, e, t);
              }
          })
        : null;
}
