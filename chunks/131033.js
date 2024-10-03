n.d(a, {
    Z: function () {
        return l;
    }
});
var t = n(735250);
n(470079);
var i = n(793030),
    r = n(689938),
    o = n(51527);
function l(e) {
    let { detectedGame: a } = e;
    return 0 === a.publishers.length
        ? null
        : (0, t.jsxs)('div', {
              children: [
                  (0, t.jsx)(i.X6, {
                      className: o.sectionHeader,
                      variant: 'text-xs/semibold',
                      color: 'header-secondary',
                      children: r.Z.Messages.GAME_PROFILE_PUBLISHER
                  }),
                  (0, t.jsx)(i.xv, {
                      variant: 'text-sm/normal',
                      children: a.publishers.join(', ')
                  })
              ]
          });
}
