n.d(t, {
    Z: function () {
        return E;
    }
});
var r = n(47120);
var i = n(411104);
var a = n(259443),
    o = n(911284),
    s = n(598077),
    l = n(27144),
    u = n(484459);
let c = 300,
    d = new a.Y('preloadUserProfileForPopout'),
    _ = async (e) => {
        let { mostRecentActivityEnabled: t } = (0, l.L)({
            location: 'preloadUserProfileForPopout',
            autoTrackExposure: !1
        });
        if (!!t)
            try {
                await Promise.race([(0, o.Z)(e), new Promise((e) => setTimeout(e, c))]);
            } catch (t) {
                d.log('Failed to fetch content inventory outbox for '.concat(e, ':'), t);
            }
    };
async function E() {
    let e, t, n;
    for (var r = arguments.length, i = Array(r), a = 0; a < r; a++) i[a] = arguments[a];
    let o = i[0],
        l = i[1];
    if ('string' == typeof o && ('string' == typeof l || null == l)) (e = o), (t = l), (n = i[2]);
    else if (o instanceof s.Z && ('object' == typeof l || null == l)) (e = o.id), (t = o.getAvatarURL(void 0, 80)), (n = l);
    else throw Error('Invalid arguments');
    if (null == e) return Promise.resolve();
    let [c] = await Promise.all([
        (0, u.Z)(e, t, {
            withMutualFriends: !0,
            withMutualGuilds: !0,
            ...n
        }),
        _(e)
    ]);
    return c;
}
