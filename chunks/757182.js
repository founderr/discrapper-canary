n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var l = n(655922),
    a = n(420660),
    r = n(915863),
    o = n(388032);
function s(e) {
    let { activity: t, onAction: n, ButtonComponent: s = r.Z, ...u } = e;
    return (0, a.Z)(t)
        ? (0, i.jsx)(
              s,
              {
                  onClick: () => {
                      null == n || n();
                      let e = (0, l.Z)(t);
                      return window.open(null != e ? e : void 0);
                  },
                  fullWidth: !0,
                  ...u,
                  children: o.intl.string(o.t['I6JG4+'])
              },
              'play-activity'
          )
        : null;
}
