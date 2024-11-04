n.d(t, {
    Z: function () {
        return w;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(392711),
    o = n.n(a),
    c = n(399606),
    d = n(481060),
    u = n(239091),
    m = n(749210),
    h = n(479531),
    g = n(110924),
    x = n(410030),
    p = n(367907),
    f = n(906732),
    C = n(118012),
    I = n(218867),
    _ = n(733026),
    N = n(246946),
    v = n(594174),
    T = n(626135),
    j = n(136015),
    E = n(51144),
    S = n(434404),
    b = n(999382),
    R = n(84613),
    Z = n(740903),
    A = n(981631),
    L = n(388032),
    y = n(264112);
function D(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function O(e) {
    var t;
    let { transitionState: n, guild: l, user: s, ban: a, hideDiscriminator: o, onClose: c } = e,
        [u, g] = r.useState(!1),
        [x, I] = r.useState(null),
        { analyticsLocations: _ } = (0, f.ZP)(),
        N = null !== (t = null == _ ? void 0 : _[0]) && void 0 !== t ? t : null;
    async function v() {
        if (null != l) {
            I(null), g(!0);
            try {
                await m.Z.unbanUser(l.id, s.id),
                    c(),
                    T.default.track(A.rMx.GUILD_BAN_REMOVED, {
                        ...(0, p.hH)(l.id),
                        target_user_id: s.id,
                        reason: a.reason,
                        location: N
                    });
            } catch (e) {
                I(new h.Z(e)), g(!1);
            }
        }
    }
    return (0, i.jsxs)(d.ModalRoot, {
        className: y.bannedUserModal,
        transitionState: n,
        children: [
            (0, i.jsxs)(d.ModalHeader, {
                className: y.header,
                separator: !1,
                children: [
                    (0, i.jsx)(C.Z, {
                        size: C.Z.Sizes.SIZE_24,
                        className: y.userUsername,
                        children: E.ZP.getUserTag(s, {
                            mode: 'username',
                            identifiable: o ? 'never' : 'always'
                        })
                    }),
                    o || s.isPomelo()
                        ? null
                        : (0, i.jsxs)(C.Z, {
                              size: C.Z.Sizes.SIZE_24,
                              className: y.userDiscrim,
                              children: ['#', s.discriminator]
                          })
                ]
            }),
            (0, i.jsxs)(d.ModalContent, {
                className: y.content,
                children: [
                    (0, i.jsx)(d.Text, {
                        className: y.reasonHeader,
                        variant: 'text-xs/normal',
                        children: L.intl.string(L.t['9Ki66O'])
                    }),
                    (0, i.jsx)(d.Text, {
                        variant: 'text-sm/normal',
                        children: null != a.reason && '' !== a.reason ? a.reason : L.intl.string(L.t['t+2Zcn'])
                    }),
                    null != x
                        ? (0, i.jsx)(d.Text, {
                              className: y.error,
                              color: 'text-danger',
                              variant: 'text-sm/normal',
                              children: x.getAnyErrorMessage()
                          })
                        : null
                ]
            }),
            (0, i.jsxs)(d.ModalFooter, {
                className: y.footer,
                children: [
                    (0, i.jsx)(d.Button, {
                        onClick: v,
                        look: d.Button.Looks.LINK,
                        color: d.Button.Colors.RED,
                        submitting: u,
                        children: L.intl.string(L.t.UPcIa2)
                    }),
                    (0, i.jsx)(d.Button, {
                        onClick: c,
                        children: L.intl.string(L.t.i4jeWV)
                    })
                ]
            })
        ]
    });
}
class M extends r.PureComponent {
    render() {
        let { user: e, hideDiscriminator: t, guild: n } = this.props,
            r = E.ZP.getGlobalName(e);
        return (0, i.jsxs)(d.Clickable, {
            className: s()(y.bannedUser),
            onClick: this.handleShowModal,
            onContextMenu: this.handleContextMenu,
            children: [
                (0, i.jsx)(d.Avatar, {
                    src: e.getAvatarURL(null == n ? void 0 : n.id, 40),
                    'aria-label': e.username,
                    size: d.AvatarSizes.SIZE_40,
                    className: y.bannedUserAvatar
                }),
                (0, i.jsxs)('div', {
                    className: y.username,
                    children: [
                        E.ZP.getUserTag(e, {
                            mode: 'username',
                            identifiable: t ? 'never' : 'always'
                        }),
                        !t &&
                            !e.isPomelo() &&
                            (0, i.jsxs)('span', {
                                className: y.discrim,
                                children: ['#', e.discriminator]
                            }),
                        e.isPomelo() &&
                            (0, i.jsxs)('span', {
                                className: y.discrim,
                                children: ['(', r, ')']
                            })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            D(this, 'handleShowModal', () => {
                let { guild: e, user: t, hideDiscriminator: n, ban: r } = this.props;
                (0, d.openModal)((l) =>
                    (0, i.jsx)(O, {
                        ...l,
                        guild: e,
                        user: t,
                        ban: r,
                        hideDiscriminator: n
                    })
                );
            }),
            D(this, 'handleContextMenu', (e) => {
                (0, u.jW)(e, async () => {
                    let { default: e } = await n.e('23835').then(n.bind(n, 768079));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            user: this.props.user
                        });
                });
            });
    }
}
let P = r.forwardRef(function (e, t) {
    let { guild: n, sortedBans: l, bans: s } = e,
        a = (0, c.e7)([N.Z], () => N.Z.hidePersonalInformation, []),
        o = r.useCallback(
            (e) => {
                var t;
                if (null == s && 0 === e) return 60;
                let n = l[e],
                    i = null == s ? void 0 : s.get(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : '');
                return null == n || null == i ? 0 : 60;
            },
            [s, l]
        ),
        u = r.useCallback(
            (e) => {
                var t;
                if (null == s && 0 === e)
                    return (0, i.jsx)(
                        d.Spinner,
                        {
                            className: y.spinner,
                            type: d.Spinner.Type.SPINNING_CIRCLE
                        },
                        'spinner'
                    );
                let r = l[e],
                    o = null == s ? void 0 : s.get(null !== (t = null == r ? void 0 : r.id) && void 0 !== t ? t : '');
                if (null != r && null != o)
                    return (0, i.jsx)(
                        M,
                        {
                            user: r,
                            ban: o,
                            hideDiscriminator: a,
                            guild: n
                        },
                        r.id
                    );
            },
            [s, n, l, a]
        );
    return (0, i.jsx)(I.Z, {
        role: 'listbox',
        listPadding: [8, 8, 8, 8],
        rowCount: l.length,
        rowHeight: o,
        renderRow: u,
        ref: t
    });
});
function k(e) {
    let { guildId: t, storedSearchQuery: n } = e,
        [l, s] = r.useState(null != n ? n : ''),
        [a, o] = r.useState(!1),
        c = r.useCallback(() => {
            S.Z.setSection(A.pNK.SAFETY), (0, R.K)(Z.u.DM_AND_SPAM_PROTECTION);
        }, []),
        u = r.useCallback((e) => {
            s(e), 0 === e.trim().length && S.Z.setSearchQuery(e);
        }, []),
        h = r.useCallback(() => {
            s(''), S.Z.setSearchQuery('');
        }, []),
        g = r.useCallback(async () => {
            if (0 === l.trim().length) {
                S.Z.setSearchQuery(l), o(!1);
                return;
            }
            if (!a)
                try {
                    o(!0);
                    let [e, n] = (0, _.C)(l),
                        i = e[0];
                    S.Z.setSearchQuery(l), await m.Z.searchGuildBans(t, i, n), o(!1);
                } catch (e) {
                    o(!1);
                }
        }, [t, a, l]),
        x = r.useCallback(
            (e) => {
                'Enter' === e.key && (e.preventDefault(), e.stopPropagation(), g());
            },
            [g]
        );
    return (0, i.jsxs)(
        d.FormSection,
        {
            tag: d.FormTitleTags.H1,
            title: L.intl.string(L.t['7OY0gI']),
            children: [
                (0, i.jsx)('div', {
                    className: y.settingsHeader,
                    children: (0, i.jsx)(d.FormText, {
                        type: d.FormTextTypes.DESCRIPTION,
                        className: y.description,
                        children: L.intl.format(L.t.JcZ36u, { onModerationClick: c })
                    })
                }),
                (0, i.jsxs)('div', {
                    className: y.bansSearchContainer,
                    children: [
                        (0, i.jsx)(d.SearchBar, {
                            className: y.searchBar,
                            query: null != l ? l : '',
                            placeholder: L.intl.string(L.t.MiqUmZ),
                            'aria-label': L.intl.string(L.t.MiqUmZ),
                            onChange: u,
                            onKeyDown: x,
                            onClear: h,
                            size: d.SearchBar.Sizes.MEDIUM,
                            isLoading: a
                        }),
                        (0, i.jsx)(d.Button, {
                            color: d.Button.Colors.BRAND,
                            onClick: g,
                            size: d.Button.Sizes.SMALL,
                            disabled: a,
                            submitting: a,
                            className: y.searchButton,
                            children: L.intl.string(L.t['5h0QOD'])
                        })
                    ]
                })
            ]
        },
        'bans-header'
    );
}
function w() {
    var e, t;
    let { guild: l, searchQuery: u } = (0, c.e7)([b.Z], () => b.Z.getProps(), [], a.isEqual),
        h = null != u && u.trim().length > 0,
        p = (0, g.Z)(h),
        f = h !== p,
        [C] = (0, c.e7)([b.Z], () => b.Z.getBans(), [], j.Q),
        I = null !== (e = null == C ? void 0 : C.size) && void 0 !== e ? e : 0,
        N = (0, x.ZP)(),
        T = null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : A.lds,
        E = r.useRef(null),
        S = r.useCallback(
            (e) =>
                null == e || 0 === e.length
                    ? (e) => null != e
                    : (t) => {
                          if (null == t || 0 === e.trim().length) return !1;
                          let [[n], i] = (0, _.C)(e);
                          return !!i.includes(t.id) || (null != n && (!!(t.username.toLowerCase().includes(n.toLowerCase()) || (null != t.globalName && t.globalName.toLowerCase().includes(n.toLowerCase()))) || !1));
                      },
            []
        ),
        R = r.useCallback(
            (e, t, n) => {
                if (null == e || 0 === n) return [];
                let i = [];
                for (let n of e.keys()) {
                    let e = v.default.getUser(n);
                    null != e && S(t)(e) && i.push(e);
                }
                return i;
            },
            [S]
        ),
        Z = r.useMemo(() => R(C, u, I), [C, R, u, I]),
        D = null != C,
        O = Z.length % 1000 == 0 && Z.length > 0 && D,
        M = 0 === Z.length,
        [w, B] = r.useState({
            currentPage: 1,
            pageSize: 100
        });
    r.useEffect(() => {
        f &&
            1 !== w.currentPage &&
            B((e) => ({
                ...e,
                currentPage: 1
            }));
    }, [f, w.currentPage]);
    let U = r.useCallback(
            (e) => {
                m.Z.fetchGuildBansBatch(T, 1000, e);
            },
            [T]
        ),
        G = r.useMemo(() => o().chunk(Z, w.pageSize), [w.pageSize, Z]),
        F = r.useCallback(
            (e) => {
                var t, n, i;
                if ((null === (t = E.current) || void 0 === t || t.scrollToSectionTop(0), (e + 1) * w.pageSize > Z.length && O && !h && ((H.current = null !== (i = null === (n = Z[Z.length - 1]) || void 0 === n ? void 0 : n.id) && void 0 !== i ? i : null), U(H.current)), null != G[e - 1] || !!O))
                    B((t) => ({
                        ...t,
                        currentPage: e
                    }));
            },
            [w.pageSize, Z, O, G, U, h]
        ),
        H = r.useRef(null);
    r.useEffect(() => {
        U(H.current);
    }, [U]);
    let z = r.useMemo(() => {
        var e;
        return null !== (e = G[w.currentPage - 1]) && void 0 !== e ? e : [];
    }, [G, w.currentPage]);
    return null == l
        ? null
        : (0, i.jsxs)('div', {
              className: s()(y.container),
              children: [
                  (0, i.jsx)(k, {
                      guildId: T,
                      storedSearchQuery: u
                  }),
                  (0, i.jsxs)('div', {
                      className: s()(y.scrollerContainer),
                      children: [
                          !M &&
                              (0, i.jsx)(P, {
                                  guild: l,
                                  bans: C,
                                  sortedBans: z,
                                  ref: E
                              }),
                          !O &&
                              M &&
                              (0, i.jsxs)(d.EmptyState, {
                                  theme: N,
                                  className: y.emptyState,
                                  children: [
                                      (0, i.jsx)(d.EmptyStateImage, {
                                          darkSrc: n(532747),
                                          lightSrc: n(433466),
                                          width: 256,
                                          height: 212
                                      }),
                                      (0, i.jsx)(d.EmptyStateText, {
                                          note: L.intl.string(L.t.zfCsAw),
                                          style: { maxWidth: 300 },
                                          children: L.intl.string(L.t.ZEiY1N)
                                      })
                                  ]
                              })
                      ]
                  }),
                  (0, i.jsx)('div', {
                      className: s()(y.__invalid_paginationContainer),
                      children: (0, i.jsx)(d.Paginator, {
                          className: s()(y.paginationInput),
                          totalCount: Z.length + (O ? w.pageSize : 0),
                          pageSize: w.pageSize,
                          currentPage: w.currentPage,
                          onPageChange: F,
                          maxVisiblePages: 9
                      })
                  })
              ]
          });
}
