a.d(n, {
    Z: function () {
        return o;
    }
});
var t = a(735250);
a(470079);
var r = a(793030),
    s = a(689938),
    i = a(51527);
function o(e) {
    let { detectedGame: n } = e;
    return 0 === n.publishers.length
        ? null
        : (0, t.jsxs)('div', {
              children: [
                  (0, t.jsx)(r.X6, {
                      className: i.sectionHeader,
                      variant: 'text-xs/semibold',
                      color: 'header-secondary',
                      children: s.Z.Messages.GAME_PROFILE_PUBLISHER
                  }),
                  (0, t.jsx)(r.xv, {
                      variant: 'text-sm/normal',
                      children: n.publishers.join(', ')
                  })
              ]
          });
}
