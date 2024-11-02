t.d(n, {
    Z: function () {
        return o;
    }
});
var i = t(200651);
t(192379);
var l = t(481060),
    r = t(79390),
    a = t(388032);
function o(e) {
    return null == e.reactions || 0 === e.reactions.length || (e.isPoll() && !(0, r.eQ)(e))
        ? null
        : (0, i.jsx)(l.MenuItem, {
              id: 'reactions',
              label: a.intl.string(a.t.wikODg),
              icon: l.ReactionIcon,
              action: () =>
                  (0, l.openModalLazy)(async () => {
                      let { default: n } = await Promise.resolve().then(t.bind(t, 785388));
                      return (t) =>
                          (0, i.jsx)(n, {
                              ...t,
                              message: e
                          });
                  })
          });
}
