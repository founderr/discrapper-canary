n.d(t, {
    T: function () {
        return c;
    }
});
var i = n(159300),
    r = n(430824),
    a = n(496675),
    l = n(996106),
    s = n(561205),
    o = n(981631);
function c() {
    let e = (0, s.Z)();
    if (null == e) throw new l.Z({ errorCode: o.lTL.INVALID_CHANNEL }, 'Invalid channel');
    let t = r.Z.getGuild(e.getGuildId());
    if (null == t) throw new l.Z({ errorCode: o.lTL.INVALID_CHANNEL }, 'Invalid guild '.concat(e.getGuildId()));
    if (!(0, i.b)(a.Z, t, e)) throw new l.Z({ errorCode: o.lTL.INVALID_PERMISSIONS }, 'No invite permissions for '.concat(e.id));
    return {
        channel: e,
        guild: t
    };
}
