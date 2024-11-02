l.r(n);
var a = l(200651),
    i = l(192379),
    t = l(442837),
    r = l(749210),
    s = l(112724),
    d = l(923029),
    c = l(353926),
    o = l(931261),
    u = l(333323),
    h = l(430824);
let m = (0, s.Z)(u.Z);
n.default = function (e) {
    let { guildId: n } = e,
        l = (0, t.e7)([h.Z], () => h.Z.getGuild(n), [n]),
        s = (0, t.e7)([c.Z], () => c.Z.hasLoadedExperiments),
        u = (0, o.g)(n);
    return (i.useEffect(() => {
        if (!!s) {
            if (!u) {
                r.Z.escapeToDefaultChannel(n);
                return;
            }
        }
    }, [n, s, u]),
    null != l && u)
        ? (0, a.jsx)(m, { guild: l })
        : (0, a.jsx)(d.Z, { channelId: void 0 });
};
