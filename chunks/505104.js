n.d(t, {
    M: function () {
        return l;
    }
}),
    n(47120);
var i = n(876215),
    s = n(911969),
    a = n(939170);
let r = new Set([i.s.TOP_ARTIST, i.s.TOP_GAME, i.s.PLAYED_GAME, i.s.WATCHED_MEDIA, i.s.LISTENED_SESSION, i.s.LAUNCHED_ACTIVITY]);
function l(e, t) {
    var n;
    if (!(0, a.b)(e)) return !1;
    let i = (null !== (n = t.components) && void 0 !== n ? n : []).filter((e) => e.type === s.re.CONTENT_INVENTORY_ENTRY);
    return (
        0 === i.length ||
        i.some((e) => {
            let { contentInventoryEntry: t } = e;
            return !r.has(t.content_type);
        })
    );
}
