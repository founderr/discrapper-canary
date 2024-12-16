n.d(e, {
    Z: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var l = n(655922),
    o = n(420660),
    r = n(915863),
    a = n(388032);
function s(t) {
    let { activity: e, onAction: n, ButtonComponent: s = r.Z, ...u } = t;
    return (0, o.Z)(e)
        ? (0, i.jsx)(
              s,
              {
                  onClick: () => {
                      null == n || n();
                      let t = (0, l.Z)(e);
                      return window.open(null != t ? t : void 0);
                  },
                  fullWidth: !0,
                  ...u,
                  children: a.intl.string(a.t['I6JG4+'])
              },
              'play-activity'
          )
        : null;
}
