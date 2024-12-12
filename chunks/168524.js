r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(492423),
    a = r(774073);
function s(e) {
    let { onOpened: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { applicationId: r } = e,
        s = (0, a.ZP)(e);
    return s.shouldOpenGameProfile && null != r
        ? (a) => {
              a.stopPropagation(),
                  a.preventDefault(),
                  i.Z.openGameProfileModal({
                      ...e,
                      applicationId: r,
                      gameProfileModalChecks: s
                  }),
                  null == n || n();
          }
        : void 0;
}
