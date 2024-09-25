n.d(t, {
    _: function () {
        return u;
    }
});
var l = n(470079),
    s = n(442837),
    a = n(594174),
    r = n(823379),
    i = n(51144),
    o = n(689938);
function u(e) {
    let t = (0, s.Wu)([a.default], () =>
        e.recipients
            .map((e) => a.default.getUser(e))
            .filter(r.lm)
            .map((e) => i.ZP.getName(e))
    );
    return l.useMemo(
        () =>
            '' === e.name
                ? null
                : (function (e) {
                      if (0 === e.length) return null;
                      if (1 === e.length) return o.Z.Messages.USER_SUMMARY_ONE.format({ first: e[0] });
                      if (2 === e.length)
                          return o.Z.Messages.USER_SUMMARY_TWO.format({
                              first: e[0],
                              second: e[1]
                          });
                      if (3 === e.length)
                          return o.Z.Messages.USER_SUMMARY_THREE.format({
                              first: e[0],
                              second: e[1],
                              third: e[2]
                          });
                      let t = e.length - 3;
                      return o.Z.Messages.USER_SUMMARY_THREE_AND_OTHERS.format({
                          first: e[0],
                          second: e[1],
                          third: e[2],
                          count: t
                      });
                  })(t),
        [e, t]
    );
}
