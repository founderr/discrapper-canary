n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(200651);
n(192379);
var r = n(13245),
    s = n(593481),
    l = n(237997),
    a = n(312839),
    o = n(987650),
    c = n(388032);
let d = () => ({
        icon: n(328756),
        title: c.intl.string(c.t.pkXAeH),
        body: null,
        hint: u,
        colorScheme: s.IC.PRIMARY,
        notifType: o.n0.WelcomeNudge
    }),
    u = (e) => (0, s.QR)(e, (0, a.P)(), c.t['z8/sgI']);
function h(e) {
    let { type: t } = e,
        {
            icon: n,
            title: u,
            body: h,
            hint: p,
            colorScheme: f,
            notifType: m
        } = (function (e, t) {
            if (t.type === o.nc.NEWS) {
                var n, i, r, l, a, c, d, u;
                return {
                    icon: null !== (a = null === (n = t.news) || void 0 === n ? void 0 : n.icon) && void 0 !== a ? a : e.icon,
                    title: null !== (c = null === (i = t.news) || void 0 === i ? void 0 : i.title) && void 0 !== c ? c : e.title,
                    body: null !== (d = null === (r = t.news) || void 0 === r ? void 0 : r.body) && void 0 !== d ? d : e.body,
                    hint: null !== (u = null === (l = t.news) || void 0 === l ? void 0 : l.hint) && void 0 !== u ? u : e.hint,
                    colorScheme: null != t.news ? s.IC.BRAND : e.colorScheme,
                    notifType: null != t.news ? o.n0.NewsNudge : e.notifType
                };
            }
            return e;
        })(d(), e),
        { trackView: g, trackClick: v } = (0, a.R)(m, { notif_type: m });
    return {
        colorScheme: f,
        icon: n,
        title: u,
        body: h,
        hint: p,
        renderFooter: () =>
            (0, i.jsx)('div', {
                style: {
                    textAlign: 'center',
                    padding: 2
                },
                children: c.intl.string(c.t['9MyuT0'])
            }),
        onNotificationShow: () => {
            g();
        },
        onNotificationClick: (e, n) => {
            v('unlock'), t === o.nc.NEWS && r.Z.updateNotificationStatus(n), l.Z.isInstanceUILocked() && r.Z.setInstanceLocked(!1);
        },
        onDismissClick: () => {
            v('dismiss');
        }
    };
}
