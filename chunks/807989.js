n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(789020),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var r = n(200651);
n(192379);
var i = n(243814),
    a = n(993365),
    s = n(481060),
    o = n(979200),
    l = n(630388),
    u = n(709054),
    c = n(941532),
    d = n(713938),
    f = n(981631),
    _ = n(388032),
    p = n(202722);
let h = (e) => {
    switch (e) {
        case o.ZC.IP_LOCATION:
            return s.GlobeEarthIcon;
        case o.ZC.DISPLAYS_ADVERTISEMENTS:
            return s.EmbedIcon;
        default:
            return null;
    }
};
function m(e) {
    var t;
    let n,
        { application: a, scopes: m, redirectUri: E, approximateGuildCount: v, isEmbeddedFlow: b, disclosures: I } = e,
        S = new Date(u.default.extractTimestamp(a.id)),
        T = (0, d.W3)(m),
        y = (0, l.yE)(null !== (t = a.flags) && void 0 !== t ? t : 0, f.udG.EMBEDDED);
    if (null != E && !y && !b)
        try {
            let e = new URL(E);
            n = null != e.host && e.host.length > 0 ? e.origin : e.href;
        } catch (e) {
            n = null;
        }
    return (0, r.jsxs)('div', {
        className: p.applicationDetails,
        children: [
            null != n
                ? (0, r.jsx)(g, {
                      icon: s.LinkIcon,
                      text: _.intl.format(_.t['5k5OKC'], { origin: n })
                  })
                : null,
            (0, r.jsx)(g, {
                icon: s.LockIcon,
                text: (0, c.i)(a)
            }),
            (0, r.jsx)(g, {
                icon: s.ClockIcon,
                text: _.intl.formatToPlainString(_.t['+1bjc3'], { date: S })
            }),
            m.includes(i.x.BOT) && null != v
                ? (0, r.jsx)(g, {
                      icon: s.RobotIcon,
                      text: _.intl.formatToPlainString(_.t.UHGHSE, { guildCount: v })
                  })
                : null,
            (0, r.jsx)(g, {
                icon: s.ShieldIcon,
                text: T
            }),
            null != I
                ? I.map((e) => {
                      let t = (0, o.PM)(e),
                          n = h(e);
                      return null != n && null != t
                          ? (0, r.jsx)(g, {
                                icon: n,
                                text: t
                            })
                          : null;
                  })
                : null
        ]
    });
}
function g(e) {
    let { icon: t, text: n } = e;
    return (0, r.jsxs)('div', {
        className: p.entry,
        children: [
            (0, r.jsx)(t, {
                className: p.entryIcon,
                color: 'currentColor'
            }),
            (0, r.jsx)(a.x, {
                variant: 'text-xs/normal',
                className: p.entryInner,
                children: n
            })
        ]
    });
}
