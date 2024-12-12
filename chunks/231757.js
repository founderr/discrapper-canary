r.d(n, {
    Z: function () {
        return _;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    s = r(726542),
    o = r(842146),
    l = r(293177),
    u = r(349407),
    c = r(49012),
    d = r(202120),
    f = r(981631);
function _(e) {
    var n;
    let { platformType: _, location: h, overrideUrl: p, successRedirect: m } = e;
    if ((_ === f.ABu.LEAGUE_OF_LEGENDS && (_ = f.ABu.RIOT_GAMES), _ === f.ABu.CRUNCHYROLL)) {
        o.K([null != h ? h : 'unknown']);
        return;
    }
    if (_ === f.ABu.XBOX) {
        u.K([null != h ? h : 'unknown']);
        return;
    }
    if (_ === f.ABu.PLAYSTATION || _ === f.ABu.PLAYSTATION_STAGING) {
        l.K([null != h ? h : 'unknown'], _);
        return;
    }
    if (_ === f.ABu.DOMAIN) {
        (0, a.openModalLazy)(async () => {
            let { default: e } = await r.e('64941').then(r.bind(r, 907053));
            return (n) =>
                (0, i.jsx)(e, {
                    analyticsLocation: [null != h ? h : 'unknown'],
                    ...n
                });
        });
        return;
    }
    if ((null === (n = s.Z.get(_)) || void 0 === n ? void 0 : n.isFederated) === !0) {
        (0, a.openModalLazy)(async () => {
            let { default: e } = await r.e('54934').then(r.bind(r, 701460));
            return (n) =>
                (0, i.jsx)(e, {
                    platformType: _,
                    location: h,
                    successRedirect: m,
                    ...n
                });
        });
        return;
    }
    if (null != p) {
        (0, c.q)({
            shouldConfirm: !0,
            href: p,
            onConfirm: () => {
                (0, d.H)(
                    _,
                    {
                        location: h,
                        successRedirect: m
                    },
                    p
                );
            }
        });
        return;
    }
    (0, d.H)(_, {
        location: h,
        successRedirect: m
    });
}
