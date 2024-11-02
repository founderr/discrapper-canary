e.d(t, {
    Z: function () {
        return i;
    }
});
var l = e(482241);
function i(n, t, e, i) {
    let { scheduled_start_time: r, scheduled_end_time: u } = n;
    return null == r && null == u
        ? l.Z.deleteGuildEventException(t, e, i)
        : l.Z.updateGuildEventException(
              {
                  scheduled_start_time: r,
                  scheduled_end_time: u,
                  is_canceled: !1
              },
              t,
              e,
              i
          );
}
