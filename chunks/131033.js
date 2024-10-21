n.d(t, {
    Z: function () {
        return o;
    }
});
var a = n(200651);
n(192379);
var r = n(793030),
    s = n(689938),
    i = n(51527);
function o(e) {
    let { detectedGame: t } = e;
    return 0 === t.publishers.length
        ? null
        : (0, a.jsxs)('div', {
              children: [
                  (0, a.jsx)(r.X6, {
                      className: i.sectionHeader,
                      variant: 'text-xs/semibold',
                      color: 'header-secondary',
                      children: s.Z.Messages.GAME_PROFILE_PUBLISHER
                  }),
                  (0, a.jsx)(r.xv, {
                      variant: 'text-sm/normal',
                      children: t.publishers.join(', ')
                  })
              ]
          });
}
