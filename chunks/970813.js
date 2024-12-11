n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var s = n(722932),
    r = n(824690),
    l = n(674343),
    a = n(388032);
function o() {
    let { volume: e, onVolumeChange: t } = (0, r.Z)();
    return (0, s.X0)({ location: 'UserSettingsSoundmojiVolume' })
        ? (0, i.jsx)(l.Z, {
              title: a.intl.string(a.t.w9Hq8P),
              description: a.intl.string(a.t.INenzc),
              label: a.intl.string(a.t['2JbvKy']),
              volume: e,
              onVolumeChange: t
          })
        : null;
}
