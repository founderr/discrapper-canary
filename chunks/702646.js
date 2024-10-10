n.d(t, {
    C: function () {
        return h;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(143927),
    o = n(481060),
    c = n(377171),
    d = n(207796),
    u = n(689938),
    _ = n(899115);
function E(e) {
    let { icon: t, text: n, ariaLabel: s, tooltip: l, onClick: c, isActive: u, autoWidth: E = !1 } = e,
        [h, m] = a.useState(!1),
        [I, p] = a.useState(!1),
        g = d.GN.getState().mode,
        T = g === d.v0.GAMES || g === d.v0.PLAYSTYLE || g === d.v0.TRAITS;
    a.useEffect(() => {
        T && (m(!1), p(!1));
    }, [T]);
    let f = u && (I || h),
        S = a.useMemo(
            () =>
                null != l
                    ? (0, i.jsxs)(o.Clickable, {
                          className: _.tooltipContentWrapper,
                          onClick: c,
                          onMouseEnter: () => {
                              !T && m(!0);
                          },
                          onMouseLeave: () => {
                              m(!1);
                          },
                          children: [(0, i.jsx)('div', { className: _.tooltipHoverBridge }), l]
                      })
                    : null,
            [l, c, T]
        ),
        C = a.useCallback(
            (e) =>
                (0, i.jsxs)(o.Button, {
                    ...e,
                    className: r()(_.filterPill, { [_.filterPillActive]: u }),
                    innerClassName: _.filterPillContents,
                    look: o.ButtonLooks.OUTLINED,
                    color: o.ButtonColors.CUSTOM,
                    onClick: c,
                    onMouseEnter: () => {
                        p(!0);
                    },
                    onMouseLeave: () => {
                        p(!1);
                    },
                    children: [
                        t,
                        (0, i.jsxs)('div', {
                            className: _.filterPillText,
                            children: [
                                (0, i.jsx)(o.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'none',
                                    children: n
                                }),
                                null != S &&
                                    (0, i.jsx)(o.ChevronSmallDownIcon, {
                                        className: _.chevron,
                                        color: 'currentColor'
                                    })
                            ]
                        })
                    ]
                }),
            [t, n, u, c, S]
        );
    return null == S
        ? C({})
        : (0, i.jsx)(o.Tooltip, {
              text: S,
              position: 'bottom',
              'aria-label': s,
              shouldShow: f,
              forceOpen: f,
              allowOverflow: !0,
              disableTooltipPointerEvents: !1,
              tooltipClassName: r()(_.filterTooltip, { [_.filterTooltipAutoWidth]: E }),
              tooltipContentClassName: _.filterTooltipContent,
              children: C
          });
}
function h() {
    let e = (0, d.GN)((e) => e.mode, l.Z),
        {
            selectedGames: t,
            selectedPlaystyle: n,
            selectedTraits: s
        } = (0, d.GN)((e) => ({
            selectedGames: e.selectedGames,
            selectedPlaystyle: e.selectedPlaystyle,
            selectedTraits: e.selectedTraits
        })),
        r = t.length + (null != n ? 1 : 0) + s.length,
        h = a.useCallback(() => {
            if (e === d.v0.PREFERENCES) {
                (0, d.fH)(d.v0.DISCOVERY);
                return;
            }
            (0, d.fH)(d.v0.PREFERENCES);
        }, [e]),
        m = (0, i.jsxs)('div', {
            className: _.savedInnerContainer,
            children: [
                u.Z.Messages.CLAN_DISCOVERY_PREFERENCES,
                r > 0
                    ? (0, i.jsx)(o.NumberBadge, {
                          count: r,
                          color: c.Z.INTERACTIVE_ACTIVE,
                          className: _.badgeInnerText
                      })
                    : null
            ]
        });
    return (0, i.jsx)(E, {
        icon: (0, i.jsx)(o.FiltersHorizontalIcon, {
            className: _.filterPillIcon,
            color: 'currentColor'
        }),
        text: m,
        onClick: h,
        isActive: r > 0,
        ariaLabel: u.Z.Messages.CLAN_DISCOVERY_PREFERENCES,
        autoWidth: !0
    });
}
