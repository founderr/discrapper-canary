n.d(t, {
    u: function () {
        return U;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(91192),
    a = n(442837),
    s = n(704215),
    o = n(433517),
    c = n(481060),
    u = n(339149),
    d = n(327943),
    h = n(864682),
    p = n(605236),
    f = n(899740),
    _ = n(786397),
    m = n(155409),
    g = n(699516),
    C = n(944486),
    I = n(594174),
    E = n(295226),
    N = n(774343),
    x = n(417363),
    S = n(941128),
    v = n(780570),
    Z = n(557177),
    T = n(278464),
    b = n(276952),
    A = n(682662),
    M = n(662146),
    R = n(674552),
    L = n(981631),
    y = n(474936),
    P = n(871465),
    O = n(689938),
    j = n(342824);
let D = {
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
    let { selected: t, user: n, badge: s, link: p, showProgressBadge: f } = e,
        _ = (0, a.e7)([d.Z], () => d.Z.isEditorOpen),
        [g, C] = l.useState(!1),
        [I, E] = l.useState(!1),
        [N, x] = l.useState(null),
        [S, v] = l.useState(0),
        T = (0, r.Ie)('home'),
        y = () => {
            x(null), v(0), clearTimeout(N);
        };
    if (null == n) return null;
    let w = O.Z.Messages.DIRECT_MESSAGES;
    I && (w = o.K.get(L.wli) ? O.Z.Messages.DISCODO_ENABLED : O.Z.Messages.DISCODO_DISABLED);
    let U = null;
    !t &&
        f &&
        (U = (0, i.jsx)(u.Z, {
            className: j.downloadProgress,
            determineOwnVisibility: !1
        }));
    let G = t || g || _,
        k = (0, i.jsx)(c.BlobMask, {
            selected: G,
            lowerBadge: s > 0 ? (0, R.Ne)(s) : null,
            upperBadge: U,
            lowerBadgeSize: { width: (0, c.getBadgeWidthForValue)(s) },
            children: (0, i.jsx)(c.NavItem, {
                onMouseEnter: () => C(!0),
                onMouseLeave: () => C(!1),
                onClick: () => {
                    if (!__OVERLAY__ && (null != N && clearTimeout(N), x(setTimeout(y, 500)), v(S + 1), 15 === S)) {
                        y();
                        let e = !o.K.get(L.wli);
                        o.K.set(L.wli, e),
                            e && o.K.set(P.O5, !0),
                            e ? (0, Z.GN)('discodo') : (0, Z.GN)('user_leave'),
                            E(!0),
                            setTimeout(() => {
                                E(!1);
                            }, 1000);
                    }
                },
                selected: G,
                ariaLabel: O.Z.Messages.DIRECT_MESSAGES,
                ...T,
                to: {
                    pathname: p,
                    state: {
                        analyticsSource: {
                            page: L.ZY5.GUILD_CHANNEL,
                            section: L.jXE.NAVIGATION,
                            object: L.qAy.BUTTON_HOME
                        }
                    }
                },
                children: (0, i.jsx)(h.Z, {})
            })
        });
    return (0, i.jsx)('div', {
        className: j.tutorialContainer,
        children: (0, i.jsx)(m.Z, {
            inlineSpecs: D,
            tutorialId: 'friends-list',
            position: 'right',
            children: (0, i.jsxs)(A.H, {
                children: [
                    (0, i.jsx)(b.Z, {
                        selected: t,
                        hovered: g,
                        className: j.pill
                    }),
                    (0, i.jsx)(M.Z, {
                        color: c.Tooltip.Colors.PRIMARY,
                        hideOnClick: !0,
                        text: w,
                        selected: t,
                        children: k
                    })
                ]
            })
        })
    });
}
function U() {
    let e = (0, T.n)(),
        t = (0, a.e7)([S.Z, x.Z], () => {
            let e = (0, u.E)(S.Z.activeItems, x.Z),
                { total: t, progress: n } = v.lK(e),
                i = v.xI(n, t);
            return i > 0 && i < 100;
        }),
        n = (0, a.e7)([g.Z], () => g.Z.getPendingCount()),
        l = Object.keys(y.nG),
        { unviewedTrialCount: r, unviewedDiscountCount: o } = (0, a.cj)([E.Z], () => ({
            unviewedTrialCount: E.Z.getUnacknowledgedOffers(l).length,
            unviewedDiscountCount: E.Z.getUnacknowledgedDiscountOffers().length
        })),
        c = (0, _.w)(y.jz),
        d = (0, p.wE)(s.z.TRIAL_FOR_ALL_MARKETING_PAGE_BADGE),
        h = r + o + (null == c || d ? 0 : 1),
        m = (0, a.e7)([I.default], () => I.default.getCurrentUser()),
        Z = (0, f.q)(),
        b = n + h + Z,
        A = b === h && h > 0 && n + Z === 0,
        M = N.Z.getHomeLink();
    return (
        A && (M = L.Z5c.APPLICATION_STORE),
        (0, i.jsx)(w, {
            selected: e,
            user: m,
            selectedChannelId: C.Z.getChannelId(L.ME),
            badge: b,
            link: M,
            showProgressBadge: t
        })
    );
}
