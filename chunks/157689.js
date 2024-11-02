n.d(t, {
    Z: function () {
        return d;
    }
});
var l = n(709054),
    i = n(482241),
    r = n(854698);
function d(e, t, n, d) {
    let a = (0, r.iA)(t, e),
        s = (0, r.Uq)(a.startDate, n.startDate) ? null : n.startDate,
        o = (0, r.Uq)(a.endDate, n.endDate) ? null : n.endDate;
    if (null != d)
        return (0, r.Y4)(n, a)
            ? i.Z.deleteGuildEventException(e.guild_id, e.id, d.event_exception_id)
            : i.Z.updateGuildEventException(
                  {
                      scheduled_start_time: null == s ? void 0 : s.toISOString(),
                      scheduled_end_time: null == o ? void 0 : o.toISOString(),
                      is_canceled: d.is_canceled
                  },
                  e.guild_id,
                  e.id,
                  t
              );
    {
        let n = l.default.extractTimestamp(t);
        return i.Z.createGuildEventException(
            {
                original_scheduled_start_time: new Date(n).toISOString(),
                scheduled_start_time: null == s ? void 0 : s.toISOString(),
                scheduled_end_time: null == o ? void 0 : o.toISOString(),
                is_canceled: !1
            },
            e.guild_id,
            e.id
        );
    }
}
