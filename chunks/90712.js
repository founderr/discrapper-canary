n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(47120);
var i = n(726542),
    a = n(394821),
    o = n(503438),
    s = n(834353),
    l = n(802856),
    u = n(981631);
let c = new Set([u.ABu.LEAGUE_OF_LEGENDS, u.ABu.ROBLOX, u.ABu.TWITCH, u.ABu.YOUTUBE]);
function d(e) {
    if ((0, o.Z)(e)) return i.Z.get(u.ABu.SPOTIFY);
    if ((0, a.Z)(e)) return i.Z.get(u.ABu.CRUNCHYROLL);
    if ((0, l.Z)(e)) return i.Z.get(u.ABu.XBOX);
    if ((0, s.Z)(e)) return i.Z.get(u.ABu.PLAYSTATION);
    let t = i.Z.find((t) => {
        let { name: n } = t;
        return n === e.name;
    });
    return null != t && c.has(t.type) ? t : null;
}
