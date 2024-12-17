n.d(t, {
    u: function () {
        return D;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(91192),
    o = n(442837),
    a = n(433517),
    s = n(481060),
    c = n(339149),
    u = n(327943),
    d = n(864682),
    h = n(540059),
    p = n(899740),
    m = n(155409),
    f = n(699516),
    g = n(944486),
    C = n(594174),
    v = n(431),
    _ = n(774343),
    x = n(417363),
    I = n(941128),
    b = n(780570),
    E = n(557177),
    S = n(278464),
    Z = n(276952),
    N = n(682662),
    y = n(662146),
    T = n(674552),
    j = n(981631),
    A = n(474936),
    P = n(871465),
    R = n(388032),
    M = n(491708);
let L = {
    origin: {
        x: -16,
        y: 0
    },
    targetWidth: 48,
    targetHeight: 48,
    offset: {
        x: 0,
        y: 0
    }
};
function w(e) {
    let { selected: t, user: n, badge: p, link: f, showProgressBadge: g } = e,
        C = (0, o.e7)([u.Z], () => u.Z.isEditorOpen),
        [v, _] = l.useState(!1),
        [x, I] = l.useState(!1),
        [b, S] = l.useState(null),
        [A, w] = l.useState(0),
        D = (0, r.Ie)('home'),
        O = (0, h.Q3)('DefaultHomeButton'),
        k = () => {
            S(null), w(0), clearTimeout(b);
        };
    if (null == n) return null;
    let G = R.intl.string(R.t.YUU0RE);
    x && (G = a.K.get(j.wli) ? R.intl.string(R.t.nkq1l5) : R.intl.string(R.t.Be8Q5O));
    let U = null;
    !t &&
        g &&
        (U = (0, i.jsx)(c.Z, {
            className: M.downloadProgress,
            determineOwnVisibility: !1
        }));
    let B = t || v || C,
        H = (0, i.jsx)(s.BlobMask, {
            selected: O || B,
            lowerBadge: p > 0 ? (0, T.Ne)(p) : null,
            upperBadge: U,
            lowerBadgeSize: { width: (0, s.getBadgeWidthForValue)(p) },
            children: (0, i.jsx)(s.NavItem, {
                onMouseEnter: () => _(!0),
                onMouseLeave: () => _(!1),
                onClick: () => {
                    if (!__OVERLAY__ && (null != b && clearTimeout(b), S(setTimeout(k, 500)), w(A + 1), 15 === A)) {
                        k();
                        let e = !a.K.get(j.wli);
                        a.K.set(j.wli, e),
                            e && a.K.set(P.O5, !0),
                            e ? (0, E.GN)('discodo') : (0, E.GN)('user_leave'),
                            I(!0),
                            setTimeout(() => {
                                I(!1);
                            }, 1000);
                    }
                },
                selected: B,
                ariaLabel: R.intl.string(R.t.YUU0RE),
                ...D,
                to: {
                    pathname: f,
                    state: {
                        analyticsSource: {
                            page: j.ZY5.GUILD_CHANNEL,
                            section: j.jXE.NAVIGATION,
                            object: j.qAy.BUTTON_HOME
                        }
                    }
                },
                children: (0, i.jsx)(d.Z, {})
            })
        });
    return (0, i.jsx)('div', {
        className: M.tutorialContainer,
        children: (0, i.jsx)(m.Z, {
            inlineSpecs: L,
            tutorialId: 'friends-list',
            position: 'right',
            children: (0, i.jsxs)(N.H, {
                children: [
                    (0, i.jsx)(Z.Z, {
                        selected: t,
                        hovered: v,
                        className: M.pill
                    }),
                    (0, i.jsx)(y.Z, {
                        color: s.Tooltip.Colors.PRIMARY,
                        hideOnClick: !0,
                        text: G,
                        selected: t,
                        children: H
                    })
                ]
            })
        })
    });
}
function D() {
    let e = (0, S.n)(),
        t = (0, o.e7)([I.Z, x.Z], () => {
            let e = (0, c.E)(I.Z.activeItems, x.Z),
                { total: t, progress: n } = b.lK(e),
                i = b.xI(n, t);
            return i > 0 && i < 100;
        }),
        n = (0, o.e7)([f.Z], () => f.Z.getPendingCount()),
        l = Object.keys(A.nG),
        { unviewedTrialCount: r, unviewedDiscountCount: a } = (0, o.cj)([v.Z], () => ({
            unviewedTrialCount: v.Z.getUnacknowledgedOffers(l).length,
            unviewedDiscountCount: v.Z.getUnacknowledgedDiscountOffers().length
        })),
        s = r + a,
        u = (0, o.e7)([C.default], () => C.default.getCurrentUser()),
        d = (0, p.q)(),
        h = n + s + d,
        m = h === s && s > 0 && n + d === 0,
        E = _.Z.getHomeLink();
    return (
        m && (E = j.Z5c.APPLICATION_STORE),
        (0, i.jsx)(w, {
            selected: e,
            user: u,
            selectedChannelId: g.Z.getChannelId(j.ME),
            badge: h,
            link: E,
            showProgressBadge: t
        })
    );
}
