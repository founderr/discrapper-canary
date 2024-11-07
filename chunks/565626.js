n.d(t, {
    Ag: function () {
        return d;
    },
    I2: function () {
        return u;
    }
}),
    n(47120),
    n(192379),
    n(399606);
var i = n(704215),
    r = n(211242),
    a = n(605236),
    s = n(706140);
n(581883);
var l = n(494127),
    o = n(687362);
n(526761);
let c = [
        [i.z.WHATS_NEW_AVATAR_DECOS_NOTIF_BADGE, l.F_, i.z.WHATS_NEW_AVATAR_DECOS_FLIP],
        [i.z.WHATS_NEW_PROFILE_EFFECTS_NOTIF_BADGE, l.YQ, i.z.WHATS_NEW_PROFILE_EFFECTS_FLIP]
    ],
    d = (e) => {
        let t = c.some((e) => {
                let [t, n, i] = e,
                    { flipped: r } = n.getCurrentConfig({ location: 'useShouldShowNewBadge' });
                return !!r && !(0, a.un)(t);
            }),
            n = (0, o.vi)(e);
        return t || !0 === n;
    },
    u = () => {
        let e = (0, r.Q)(),
            t = c
                .map((e) => {
                    let [t, n] = e,
                        { flipped: i } = n.getCurrentConfig({ location: 'useClearNewBadge' });
                    return i ? t : null;
                })
                .filter((e) => null != e),
            [n] = (0, s.cv)(e ? [] : t);
        null != n && t.includes(n) && !e && (0, a.EW)(n);
    };
