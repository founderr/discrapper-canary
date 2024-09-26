n.d(t, {
    u: function () {
        return j;
    }
}),
    n(47120);
var i = n(735250),
    l = n(470079),
    r = n(91192),
    a = n(442837),
    s = n(433517),
    o = n(481060),
    c = n(339149),
    u = n(327943),
    d = n(864682),
    h = n(899740),
    p = n(155409),
    f = n(699516),
    _ = n(944486),
    m = n(594174),
    g = n(295226),
    C = n(774343),
    I = n(417363),
    E = n(941128),
    N = n(780570),
    x = n(557177),
    S = n(278464),
    v = n(276952),
    Z = n(682662),
    T = n(662146),
    b = n(674552),
    A = n(981631),
    M = n(474936),
    R = n(871465),
    L = n(689938),
    y = n(342824);
let P = {
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
function O(e) {
    let { selected: t, user: n, badge: h, link: f, showProgressBadge: _ } = e,
        m = (0, a.e7)([u.Z], () => u.Z.isEditorOpen),
        [g, C] = l.useState(!1),
        [I, E] = l.useState(!1),
        [N, S] = l.useState(null),
        [M, O] = l.useState(0),
        j = (0, r.Ie)('home'),
        D = () => {
            S(null), O(0), clearTimeout(N);
        };
    if (null == n) return null;
    let G = L.Z.Messages.DIRECT_MESSAGES;
    I && (G = s.K.get(A.wli) ? L.Z.Messages.DISCODO_ENABLED : L.Z.Messages.DISCODO_DISABLED);
    let w = null;
    !t &&
        _ &&
        (w = (0, i.jsx)(c.Z, {
            className: y.downloadProgress,
            determineOwnVisibility: !1
        }));
    let U = t || g || m,
        k = (0, i.jsx)(o.BlobMask, {
            selected: U,
            lowerBadge: h > 0 ? (0, b.Ne)(h) : null,
            upperBadge: w,
            lowerBadgeSize: { width: (0, o.getBadgeWidthForValue)(h) },
            children: (0, i.jsx)(o.NavItem, {
                onMouseEnter: () => C(!0),
                onMouseLeave: () => C(!1),
                onClick: () => {
                    if (!__OVERLAY__ && (null != N && clearTimeout(N), S(setTimeout(D, 500)), O(M + 1), 15 === M)) {
                        D();
                        let e = !s.K.get(A.wli);
                        s.K.set(A.wli, e),
                            e && s.K.set(R.O5, !0),
                            e ? (0, x.GN)('discodo') : (0, x.GN)('user_leave'),
                            E(!0),
                            setTimeout(() => {
                                E(!1);
                            }, 1000);
                    }
                },
                selected: U,
                ariaLabel: L.Z.Messages.DIRECT_MESSAGES,
                ...j,
                to: {
                    pathname: f,
                    state: {
                        analyticsSource: {
                            page: A.ZY5.GUILD_CHANNEL,
                            section: A.jXE.NAVIGATION,
                            object: A.qAy.BUTTON_HOME
                        }
                    }
                },
                children: (0, i.jsx)(d.Z, {})
            })
        });
    return (0, i.jsx)('div', {
        className: y.tutorialContainer,
        children: (0, i.jsx)(p.Z, {
            inlineSpecs: P,
            tutorialId: 'friends-list',
            position: 'right',
            children: (0, i.jsxs)(Z.H, {
                children: [
                    (0, i.jsx)(v.Z, {
                        selected: t,
                        hovered: g,
                        className: y.pill
                    }),
                    (0, i.jsx)(T.Z, {
                        color: o.Tooltip.Colors.PRIMARY,
                        hideOnClick: !0,
                        text: G,
                        selected: t,
                        children: k
                    })
                ]
            })
        })
    });
}
function j() {
    let e = (0, S.n)(),
        t = (0, a.e7)([E.Z, I.Z], () => {
            let e = (0, c.E)(E.Z.activeItems, I.Z),
                { total: t, progress: n } = N.lK(e),
                i = N.xI(n, t);
            return i > 0 && i < 100;
        }),
        n = (0, a.e7)([f.Z], () => f.Z.getPendingCount()),
        l = Object.keys(M.nG),
        { unviewedTrialCount: r, unviewedDiscountCount: s } = (0, a.cj)([g.Z], () => ({
            unviewedTrialCount: g.Z.getUnacknowledgedOffers(l).length,
            unviewedDiscountCount: g.Z.getUnacknowledgedDiscountOffers().length
        })),
        o = r + s,
        u = (0, a.e7)([m.default], () => m.default.getCurrentUser()),
        d = (0, h.q)(),
        p = n + o + d,
        x = p === o && o > 0 && n + d === 0,
        v = C.Z.getHomeLink();
    return (
        x && (v = A.Z5c.APPLICATION_STORE),
        (0, i.jsx)(O, {
            selected: e,
            user: u,
            selectedChannelId: _.Z.getChannelId(A.ME),
            badge: p,
            link: v,
            showProgressBadge: t
        })
    );
}
