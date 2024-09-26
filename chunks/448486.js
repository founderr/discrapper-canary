t.d(n, {
    _: function () {
        return u;
    }
});
var l = t(470079),
    s = t(442837),
    a = t(594174),
    r = t(823379),
    i = t(51144),
    o = t(689938);
function u(e) {
    let n = (0, s.Wu)([a.default], () =>
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
                      let n = e.length - 3;
                      return o.Z.Messages.USER_SUMMARY_THREE_AND_OTHERS.format({
                          first: e[0],
                          second: e[1],
                          third: e[2],
                          count: n
                      });
                  })(n),
        [e, n]
    );
}
