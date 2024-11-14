n.d(t, {
    u: function () {
        return w;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(91192),
    a = n(442837),
    o = n(433517),
    s = n(481060),
    c = n(339149),
    u = n(327943),
    d = n(864682),
    h = n(899740),
    p = n(155409),
    f = n(699516),
    m = n(944486),
    g = n(594174),
    C = n(431),
    _ = n(774343),
    v = n(417363),
    x = n(941128),
    I = n(780570),
    b = n(557177),
    E = n(278464),
    S = n(276952),
    N = n(682662),
    Z = n(662146),
    y = n(674552),
    T = n(981631),
    j = n(474936),
    A = n(871465),
    P = n(388032),
    M = n(342824);
let R = {
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
function L(e) {
    let { selected: t, user: n, badge: h, link: f, showProgressBadge: m } = e,
        g = (0, a.e7)([u.Z], () => u.Z.isEditorOpen),
        [C, _] = l.useState(!1),
        [v, x] = l.useState(!1),
        [I, E] = l.useState(null),
        [j, L] = l.useState(0),
        w = (0, r.Ie)('home'),
        D = () => {
            E(null), L(0), clearTimeout(I);
        };
    if (null == n) return null;
    let O = P.intl.string(P.t.YUU0RE);
    v && (O = o.K.get(T.wli) ? P.intl.string(P.t.nkq1l5) : P.intl.string(P.t.Be8Q5O));
    let k = null;
    !t &&
        m &&
        (k = (0, i.jsx)(c.Z, {
            className: M.downloadProgress,
            determineOwnVisibility: !1
        }));
    let G = t || C || g,
        U = (0, i.jsx)(s.BlobMask, {
            selected: G,
            lowerBadge: h > 0 ? (0, y.Ne)(h) : null,
            upperBadge: k,
            lowerBadgeSize: { width: (0, s.getBadgeWidthForValue)(h) },
            children: (0, i.jsx)(s.NavItem, {
                onMouseEnter: () => _(!0),
                onMouseLeave: () => _(!1),
                onClick: () => {
                    if (!__OVERLAY__ && (null != I && clearTimeout(I), E(setTimeout(D, 500)), L(j + 1), 15 === j)) {
                        D();
                        let e = !o.K.get(T.wli);
                        o.K.set(T.wli, e),
                            e && o.K.set(A.O5, !0),
                            e ? (0, b.GN)('discodo') : (0, b.GN)('user_leave'),
                            x(!0),
                            setTimeout(() => {
                                x(!1);
                            }, 1000);
                    }
                },
                selected: G,
                ariaLabel: P.intl.string(P.t.YUU0RE),
                ...w,
                to: {
                    pathname: f,
                    state: {
                        analyticsSource: {
                            page: T.ZY5.GUILD_CHANNEL,
                            section: T.jXE.NAVIGATION,
                            object: T.qAy.BUTTON_HOME
                        }
                    }
                },
                children: (0, i.jsx)(d.Z, {})
            })
        });
    return (0, i.jsx)('div', {
        className: M.tutorialContainer,
        children: (0, i.jsx)(p.Z, {
            inlineSpecs: R,
            tutorialId: 'friends-list',
            position: 'right',
            children: (0, i.jsxs)(N.H, {
                children: [
                    (0, i.jsx)(S.Z, {
                        selected: t,
                        hovered: C,
                        className: M.pill
                    }),
                    (0, i.jsx)(Z.Z, {
                        color: s.Tooltip.Colors.PRIMARY,
                        hideOnClick: !0,
                        text: O,
                        selected: t,
                        children: U
                    })
                ]
            })
        })
    });
}
function w() {
    let e = (0, E.n)(),
        t = (0, a.e7)([x.Z, v.Z], () => {
            let e = (0, c.E)(x.Z.activeItems, v.Z),
                { total: t, progress: n } = I.lK(e),
                i = I.xI(n, t);
            return i > 0 && i < 100;
        }),
        n = (0, a.e7)([f.Z], () => f.Z.getPendingCount()),
        l = Object.keys(j.nG),
        { unviewedTrialCount: r, unviewedDiscountCount: o } = (0, a.cj)([C.Z], () => ({
            unviewedTrialCount: C.Z.getUnacknowledgedOffers(l).length,
            unviewedDiscountCount: C.Z.getUnacknowledgedDiscountOffers().length
        })),
        s = r + o,
        u = (0, a.e7)([g.default], () => g.default.getCurrentUser()),
        d = (0, h.q)(),
        p = n + s + d,
        b = p === s && s > 0 && n + d === 0,
        S = _.Z.getHomeLink();
    return (
        b && (S = T.Z5c.APPLICATION_STORE),
        (0, i.jsx)(L, {
            selected: e,
            user: u,
            selectedChannelId: m.Z.getChannelId(T.ME),
            badge: p,
            link: S,
            showProgressBadge: t
        })
    );
}
