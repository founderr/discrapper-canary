n.d(t, {
    Z: function () {
        return j;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(512722),
    o = n.n(a),
    c = n(442837),
    d = n(481060),
    u = n(44315),
    m = n(937615),
    h = n(817460),
    g = n(584825),
    x = n(289393),
    p = n(723047),
    f = n(727843),
    C = n(290348),
    I = n(857081),
    _ = n(869269),
    N = n(981631),
    v = n(388032),
    T = n(517194);
function j(e) {
    var t, n;
    let { guildId: l, initialEditStateId: a, allSubscriptionListings: j, priceTiers: S, onDeleteEditState: b, groupListingId: E, onBeforeDispatchNewListing: R, onAfterDispatchNewListing: Z } = e,
        [A, L] = r.useState(a),
        y = (0, c.e7)([x.Z], () => x.Z.getSubscriptionListing(A)),
        D = null == y,
        [O, M] = r.useState(D),
        P = null == y ? void 0 : y.subscription_plans[0],
        k = null !== (t = null == y ? void 0 : y.published) && void 0 !== t && t,
        w = null !== (n = null == y ? void 0 : y.archived) && void 0 !== n && n,
        B = !w && !k && void 0 !== y,
        U = void 0 === y,
        G = (0, p.mY)(),
        [F] = C._T(A),
        [H] = C.mR(A),
        [z] = C.PK(A),
        [V] = C.d9(A, 1024),
        W = '' !== F ? F : v.intl.string(v.t.QWhe9P),
        Y = '' !== F && null != V && '' !== z && null != H && !G,
        K = C.rU(A),
        { loading: q, error: X, handleCreateOrUpdateFromEditState: Q } = C.Xo(),
        { submitting: J, error: $, publishSubscriptionListing: ee } = (0, g.HQ)(),
        et = q || J;
    return (0, i.jsxs)('div', {
        className: T.container,
        children: [
            (0, i.jsxs)('div', {
                className: s()(T.header, { [T.headerExpanded]: O }),
                children: [
                    (0, i.jsx)('div', {
                        className: T.headerImageContainer,
                        children:
                            null == V
                                ? (0, i.jsx)(I.Z, {
                                      className: T.starIcon,
                                      'aria-hidden': !0
                                  })
                                : (0, i.jsx)('img', {
                                      className: T.headerImage,
                                      src: V,
                                      alt: W
                                  })
                    }),
                    (0, i.jsxs)('div', {
                        className: T.headerListingInfo,
                        children: [
                            (0, i.jsx)(d.Text, {
                                variant: 'text-md/medium',
                                color: 'interactive-active',
                                children: W
                            }),
                            (0, i.jsx)(d.Spacer, { size: 2 }),
                            (0, i.jsxs)('div', {
                                className: T.headerDescriptionContainer,
                                children: [
                                    B &&
                                        (0, i.jsx)(d.TextBadge, {
                                            color: (0, u.Lq)(N.Ilk.YELLOW_300),
                                            text: v.intl.string(v.t.vosPk5),
                                            className: T.draftBadge
                                        }),
                                    w &&
                                        (0, i.jsx)(d.TextBadge, {
                                            color: (0, u.Lq)(N.Ilk.PRIMARY_500),
                                            text: v.intl.string(v.t.nhbtEh),
                                            className: T.archivedBadge
                                        }),
                                    U &&
                                        (0, i.jsx)(d.TextBadge, {
                                            color: (0, u.Lq)(N.Ilk.PRIMARY_500),
                                            text: v.intl.string(v.t.aiwXen),
                                            className: T.unsavedBadge
                                        }),
                                    null != P &&
                                        (0, i.jsxs)(d.Text, {
                                            color: 'interactive-normal',
                                            variant: 'text-sm/normal',
                                            children: [(0, m.T4)(P.price, P.currency), '/', (0, h.JE)(P)]
                                        })
                                ]
                            })
                        ]
                    }),
                    O
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(d.Button, {
                                      look: d.Button.Looks.BLANK,
                                      className: T.cancel,
                                      onClick: () => {
                                          C.GM(A), D ? null == b || b() : M(!1);
                                      },
                                      children: v.intl.string(v.t['ETE/oK'])
                                  }),
                                  (0, i.jsx)(d.Button, {
                                      onClick: () =>
                                          Q({
                                              guildId: l,
                                              editStateId: A,
                                              groupListingId: E,
                                              onBeforeDispatchNewListing: R,
                                              onAfterDispatchNewListing: (e) => {
                                                  L(e.id), null == Z || Z(e);
                                              }
                                          }),
                                      disabled: !Y || !K,
                                      className: T.autoWidth,
                                      submitting: et,
                                      children: v.intl.string(v.t.R3BPHx)
                                  })
                              ]
                          })
                        : (0, i.jsx)(d.Clickable, {
                              onClick: () => M(!0),
                              'aria-label': v.intl.string(v.t['2qPbmJ']),
                              children: (0, i.jsx)(d.PencilIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: T.pencilIcon
                              })
                          })
                ]
            }),
            O &&
                (0, i.jsx)(f.I, {
                    editStateId: A,
                    guildId: l,
                    groupListingId: E,
                    children: (0, i.jsx)(_.Z, {
                        allSubscriptionListings: j,
                        priceTiers: S,
                        loading: et,
                        error: null != X ? X : $,
                        handlePublishTier: () => {
                            o()(null != E, 'group listing doesnt exist'),
                                o()(null != y, 'subscription listing doesnt exist'),
                                ee({
                                    guildId: l,
                                    groupListingId: E,
                                    listingId: y.id
                                });
                        },
                        onDeleteEditState: b
                    })
                })
        ]
    });
}
