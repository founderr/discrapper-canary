var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(981729),
    o = n(481060),
    l = n(674563),
    u = n(388032),
    c = n(936485);
let d = (e) => {
    let t,
        { invertColor: n = !1, type: i = l.Hb.BOT, className: d, verified: f, hideIcon: _ = !1, useRemSizes: p = !1, children: h = [] } = e,
        m = null,
        g = u.intl.string(u.t.g76OcH);
    switch (i) {
        case l.Hb.SYSTEM_DM:
        case l.Hb.OFFICIAL:
            (f = !0), (g = u.intl.string(u.t['7s687u'])), (m = u.intl.string(u.t.lKQ7Wl));
            break;
        case l.Hb.SERVER:
            m = u.intl.string(u.t.PuJGuL);
            break;
        case l.Hb.ORIGINAL_POSTER:
            m = u.intl.string(u.t.fyE8sL);
            break;
        case l.Hb.STAFF_ONLY_DM:
            m = u.intl.string(u.t.oMx98P);
            break;
        case l.Hb.AI:
            (f = !0), (g = u.intl.string(u.t.d5YwQE)), (m = u.intl.string(u.t.pLTJZG));
            break;
        case l.Hb.REMIX:
            (f = !1), (m = u.intl.string(u.t.uXDG39));
            break;
        case l.Hb.BOT:
        default:
            m = u.intl.string(u.t['9RNkeH']);
    }
    let E = i === l.Hb.ORIGINAL_POSTER,
        v = i === l.Hb.REMIX,
        b = null;
    f &&
        (b = (0, r.jsx)(s.u, {
            text: g,
            align: 'center',
            position: 'top',
            children: (e) =>
                (0, r.jsx)(o.CheckmarkSmallBoldIcon, {
                    ...e,
                    className: c.botTagVerified,
                    color: o.tokens.colors.WHITE
                })
        })),
        (t = i === l.Hb.AI ? c.botTagAI : n ? c.botTagInvert : c.botTagRegular);
    let I = (e) =>
        (0, r.jsxs)('span', {
            ...e,
            className: a()(d, t, p ? c.rem : c.px, {
                [c.botTagOP]: E,
                [c.botTagRemix]: v
            }),
            children: [
                _ ? null : b,
                h,
                (0, r.jsx)('span', {
                    className: c.botText,
                    children: m
                })
            ]
        });
    switch (i) {
        case l.Hb.REMIX:
            return (0, r.jsx)(s.u, {
                text: u.intl.string(u.t.xb0str),
                position: 'top',
                children: (e) => I(e)
            });
        case l.Hb.ORIGINAL_POSTER:
            return (0, r.jsx)(s.u, {
                text: u.intl.string(u.t.uN6Emp),
                position: 'top',
                children: (e) => I(e)
            });
        default:
            return I();
    }
};
(d.Types = l.Hb), (t.Z = d);
