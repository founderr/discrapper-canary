r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(47120);
var a = r(411104);
var s = r(259443),
    o = r(911284),
    l = r(598077),
    u = r(314897),
    c = r(456644),
    d = r(484459);
let f = 300,
    _ = new s.Yd('preloadUserProfileForPopout'),
    h = async (e) => {
        let n = u.default.getId() === e,
            { recentActivityEnabled: r } = (0, c.G)({
                location: 'preloadUserProfileForPopout',
                autoTrackExposure: !1
            });
        if (!!r && !!n)
            try {
                await Promise.race([(0, o.Z)(e), new Promise((e) => setTimeout(e, f))]);
            } catch (n) {
                _.log('Failed to fetch content inventory outbox for '.concat(e, ':'), n);
            }
    };
async function p() {
    let e, n, r;
    for (var i = arguments.length, a = Array(i), s = 0; s < i; s++) a[s] = arguments[s];
    let o = a[0],
        u = a[1];
    if ('string' == typeof o && ('string' == typeof u || null == u)) (e = o), (n = u), (r = a[2]);
    else if (o instanceof l.Z && ('object' == typeof u || null == u)) (e = o.id), (n = o.getAvatarURL(void 0, 80)), (r = u);
    else throw Error('Invalid arguments');
    if (null == e) return Promise.resolve();
    let [c] = await Promise.all([
        (0, d.Z)(e, n, {
            withMutualFriends: !0,
            withMutualGuilds: !0,
            ...r
        }),
        h(e)
    ]);
    return c;
}
