n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(149765),
    r = n(442837),
    l = n(984933),
    a = n(496675),
    o = n(981631);
function s(e) {
    let t = (0, r.e7)(
        [l.ZP],
        () => {
            var t;
            return null !== (t = l.ZP.getChannels(e)[l.sH]) && void 0 !== t ? t : [];
        },
        [e]
    );
    return 0 === t.length
        ? 0
        : t.filter((e) => {
              let { channel: t } = e;
              return a.Z.can(i.$e(o.Plq.SEND_MESSAGES, o.Plq.VIEW_CHANNEL), t);
          }).length;
}
