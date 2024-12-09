n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    o = n(481060),
    a = n(110924),
    s = n(693546),
    c = n(863249),
    u = n(937111),
    d = n(914010),
    h = n(289090),
    p = n(727258),
    m = n(234383),
    f = n(179809),
    g = n(588275),
    C = n(388032),
    _ = n(738945);
function v(e) {
    let { onActivate: t, children: n } = e,
        s = (0, r.e7)([u.Z], () => u.Z.hasJoinRequestCoackmark()),
        d = l.useCallback(() => {
            c.ZP.clearCoachmark();
        }, []),
        h = (0, a.Z)(s),
        p = l.useRef(null);
    return (
        l.useEffect(() => {
            if (s && s !== h) {
                var e, n, i, l, r;
                t(), null === (r = p.current) || void 0 === r || null === (l = r.ref) || void 0 === l || null === (i = l.current) || void 0 === i || null === (n = i.layerRef) || void 0 === n || null === (e = n.current) || void 0 === e || e.updatePosition();
            }
        }, [p, s, h, t]),
        (0, i.jsxs)('div', {
            className: _.container,
            children: [
                (0, i.jsx)(o.Popout, {
                    ref: p,
                    shouldShow: s,
                    renderPopout: () =>
                        (0, i.jsxs)('div', {
                            className: _.popoutContainer,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: _.popoutContent,
                                    children: [
                                        (0, i.jsxs)('div', {
                                            className: _.coachmarkTextContainer,
                                            children: [
                                                (0, i.jsx)(o.Heading, {
                                                    variant: 'heading-md/medium',
                                                    children: C.intl.string(C.t.fRUGzs)
                                                }),
                                                (0, i.jsx)(o.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'text-muted',
                                                    children: C.intl.string(C.t.ja0Tg4)
                                                })
                                            ]
                                        }),
                                        (0, i.jsx)(o.Button, {
                                            fullWidth: !0,
                                            size: o.ButtonSizes.SMALL,
                                            color: o.ButtonColors.BRAND,
                                            onClick: d,
                                            children: C.intl.string(C.t.E0MgHh)
                                        })
                                    ]
                                }),
                                (0, i.jsx)('div', { className: _.popoutCaretLeft })
                            ]
                        }),
                    position: 'right',
                    animationPosition: 'right',
                    align: 'top',
                    spacing: 16,
                    children: (e) =>
                        (0, i.jsx)('div', {
                            ...e,
                            className: _.popoutAnchor
                        })
                }),
                n
            ]
        })
    );
}
function x(e) {
    let { onActivate: t } = e,
        [n, x] = l.useState(!1),
        I = (0, r.e7)([d.Z], () => d.Z.getGuildId()),
        b = (0, r.e7)([u.Z], () => u.Z.hasFetchedRequestToJoinGuilds),
        E = (0, m.Z)(),
        S = (0, a.Z)(I),
        Z = l.useMemo(() => {
            let e = (0, p.qQ)({
                folderId: h.S.PENDING_JOIN_REQUESTS_FOLDER,
                folderName: C.intl.string(C.t['scsU+v']),
                expanded: n,
                guildIds: []
            });
            for (let t of E) e.children.push((0, p.Mg)(t, e.id));
            return e;
        }, [E, n]);
    l.useEffect(() => {
        n && !b && s.Z.fetchRequestToJoinGuilds();
    }, [n, b]);
    let N = null != I && E.includes(I);
    return (l.useEffect(() => {
        !n && N && S !== I && x(!0);
    }, [n, N, S, I]),
    0 === E.length)
        ? null
        : (0, i.jsx)(v, {
              onActivate: t,
              children: (0, i.jsx)(f.Z, {
                  folderNode: Z,
                  expanded: n,
                  useCircleMask: !n && !N,
                  selected: N,
                  draggable: !1,
                  sorting: !1,
                  onExpandCollapse: () => {
                      x(!n), c.ZP.clearCoachmark();
                  },
                  folderIconContent: (0, i.jsx)(o.HourglassIcon, {
                      size: 'custom',
                      color: 'currentColor',
                      width: 24,
                      height: 24,
                      className: _.pendingIcon
                  }),
                  renderChildNode: function (e) {
                      return e.type !== p.eD.GUILD ? null : (0, i.jsx)(g.Z, { guildNode: e }, e.id);
                  }
              })
          });
}
