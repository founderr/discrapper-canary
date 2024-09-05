t.d(n, {
    Z: function () {
        return s;
    }
});
var a = t(735250);
t(470079);
var i = t(481060),
    l = t(79390),
    r = t(689938);
function s(e) {
    return null == e.reactions || 0 === e.reactions.length || (e.isPoll() && !(0, l.eQ)(e))
        ? null
        : (0, a.jsx)(i.MenuItem, {
              id: 'reactions',
              label: r.Z.Messages.VIEW_REACTIONS,
              icon: i.ReactionIcon,
              action: () =>
                  (0, i.openModalLazy)(async () => {
                      let { default: n } = await Promise.resolve().then(t.bind(t, 785388));
                      return (t) =>
                          (0, a.jsx)(n, {
                              ...t,
                              message: e
                          });
                  })
          });
}
