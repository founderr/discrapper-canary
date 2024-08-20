n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(735250),
    s = n(913527),
    a = n.n(s),
    r = n(481060),
    l = n(689938),
    o = n(782590);
function c(e) {
    let t,
        n,
        { reminder: s, throttledNow: c } = e;
    return null == s.saveData.dueAt
        ? null
        : (s.saveData.dueAt > c
              ? ((n = 'text-normal'),
                (t = l.Z.Messages.MESSAGE_REMINDERS_DUE_IN.format({
                    duration: a()
                        .duration(s.saveData.dueAt.getTime() - c.getTime(), 'millisecond')
                        .humanize()
                })))
              : ((n = 'text-danger'),
                (t = l.Z.Messages.MESSAGE_REMINDERS_OVERDUE.format({
                    duration: a()
                        .duration(c.getTime() - s.saveData.dueAt.getTime(), 'millisecond')
                        .humanize()
                }))),
          (0, i.jsxs)('div', {
              className: o.container,
              children: [
                  (0, i.jsx)('div', {
                      className: o.icon,
                      children: (0, i.jsx)(r.ClockIcon, {
                          size: 'xxs',
                          color: 'text-danger' === n ? r.tokens.colors.TEXT_DANGER : r.tokens.colors.INTERACTIVE_ACTIVE
                      })
                  }),
                  (0, i.jsx)(r.Heading, {
                      variant: 'text-md/semibold',
                      color: n,
                      children: t
                  })
              ]
          }));
}
