n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(47120),
    n(411104);
var r = n(259443),
    i = n(911284),
    a = n(598077),
    s = n(314897),
    o = n(456644),
    l = n(484459);
let u = new r.Yd('preloadUserProfileForPopout'),
    c = async (e) => {
        let t = s.default.getId() === e,
            { recentActivityEnabled: n } = (0, o.G)({
                location: 'preloadUserProfileForPopout',
                autoTrackExposure: !1
            });
        if (!!n && !!t)
            try {
                await Promise.race([(0, i.Z)(e), new Promise((e) => setTimeout(e, 300))]);
            } catch (t) {
                u.log('Failed to fetch content inventory outbox for '.concat(e, ':'), t);
            }
    };
async function d() {
    let e, t, n;
    for (var r = arguments.length, i = Array(r), s = 0; s < r; s++) i[s] = arguments[s];
    let o = i[0],
        u = i[1];
    if ('string' == typeof o && ('string' == typeof u || null == u)) (e = o), (t = u), (n = i[2]);
    else if (o instanceof a.Z && ('object' == typeof u || null == u)) (e = o.id), (t = o.getAvatarURL(void 0, 80)), (n = u);
    else throw Error('Invalid arguments');
    if (null == e) return Promise.resolve();
    let [d] = await Promise.all([
        (0, l.Z)(e, t, {
            withMutualFriends: !0,
            withMutualGuilds: !0,
            ...n
        }),
        c(e)
    ]);
    return d;
}
