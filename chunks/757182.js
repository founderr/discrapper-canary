n.d(t, {
    Z: function () {
        return o;
    }
});
var l = n(735250);
n(470079);
var a = n(655922),
    i = n(420660),
    r = n(915863),
    s = n(689938);
function o(e) {
    let { activity: t, onAction: n, ButtonComponent: o = r.Z, ...u } = e;
    return (0, i.Z)(t)
        ? (0, l.jsx)(
              o,
              {
                  onClick: () => {
                      null == n || n();
                      let e = (0, a.Z)(t);
                      return window.open(null != e ? e : void 0);
                  },
                  fullWidth: !0,
                  ...u,
                  children: s.Z.Messages.WATCH
              },
              'play-activity'
          )
        : null;
}
