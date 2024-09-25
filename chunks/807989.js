n.d(t, {
    Z: function () {
        return v;
    }
});
var r = n(789020);
var i = n(315314);
var a = n(610138);
var o = n(216116);
var s = n(78328);
var l = n(815648);
var u = n(47120);
var c = n(735250);
n(470079);
var d = n(243814),
    _ = n(993365),
    E = n(481060),
    f = n(979200),
    h = n(630388),
    p = n(709054),
    m = n(941532),
    I = n(713938),
    T = n(981631),
    g = n(689938),
    S = n(883540);
let A = (e) => {
    switch (e) {
        case f.ZC.IP_LOCATION:
            return E.GlobeEarthIcon;
        case f.ZC.DISPLAYS_ADVERTISEMENTS:
            return E.EmbedIcon;
        default:
            return null;
    }
};
function v(e) {
    var t;
    let n,
        { application: r, scopes: i, redirectUri: a, approximateGuildCount: o, isEmbeddedFlow: s, disclosures: l } = e,
        u = new Date(p.default.extractTimestamp(r.id)),
        _ = (0, I.W3)(i),
        v = (0, h.yE)(null !== (t = r.flags) && void 0 !== t ? t : 0, T.udG.EMBEDDED);
    if (null != a && !v && !s)
        try {
            let e = new URL(a);
            n = null != e.host && e.host.length > 0 ? e.origin : e.href;
        } catch (e) {
            n = null;
        }
    return (0, c.jsxs)('div', {
        className: S.applicationDetails,
        children: [
            null != n
                ? (0, c.jsx)(N, {
                      icon: E.LinkIcon,
                      text: g.Z.Messages.OAUTH2_DETAILS_REDIRECT.format({ origin: n })
                  })
                : null,
            (0, c.jsx)(N, {
                icon: E.LockIcon,
                text: (0, m.i)(r)
            }),
            (0, c.jsx)(N, {
                icon: E.ClockIcon,
                text: g.Z.Messages.OAUTH2_DETAILS_CREATION_DATE.format({ date: u })
            }),
            i.includes(d.x.BOT) && null != o
                ? (0, c.jsx)(N, {
                      icon: E.RobotIcon,
                      text: g.Z.Messages.OAUTH2_DETAILS_GUILDS.format({ guildCount: o })
                  })
                : null,
            (0, c.jsx)(N, {
                icon: E.ShieldIcon,
                text: _
            }),
            null != l
                ? l.map((e) => {
                      let t = (0, f.PM)(e),
                          n = A(e);
                      return null != n && null != t
                          ? (0, c.jsx)(N, {
                                icon: n,
                                text: t
                            })
                          : null;
                  })
                : null
        ]
    });
}
function N(e) {
    let { icon: t, text: n } = e;
    return (0, c.jsxs)('div', {
        className: S.entry,
        children: [
            (0, c.jsx)(t, {
                className: S.entryIcon,
                color: 'currentColor'
            }),
            (0, c.jsx)(_.x, {
                variant: 'text-xs/normal',
                className: S.entryInner,
                children: n
            })
        ]
    });
}
