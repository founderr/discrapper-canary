n.d(t, {
    Z: function () {
        return k;
    }
}),
    n(411104),
    n(47120);
var i,
    r = n(200651),
    l = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(512969),
    c = n(442837),
    d = n(846519),
    u = n(477690),
    h = n(481060),
    m = n(570140),
    p = n(239091),
    g = n(287259),
    f = n(785547),
    _ = n(600164),
    E = n(167533),
    I = n(925329),
    C = n(707409),
    v = n(490983),
    S = n(799777),
    N = n(626135),
    T = n(780570),
    x = n(624138),
    A = n(645818),
    b = n(981631),
    Z = n(388032),
    y = n(705309);
function L(e, t, n) {
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
let j = (0, x.Mg)(u.Z.GAME_LIST_ROW_MIN_HEIGHT),
    R = (0, x.Mg)(u.Z.GAME_LIST_LINKED_TO_GLOW_DURATION),
    O = Object.freeze({
        [b.iEv.PLATFORM]: 'Platform',
        [b.iEv.LAST_PLAYED]: 'Last Played',
        [b.iEv.NAME]: 'Name'
    }),
    P = (e) => {
        let { flag: t, icon: n, item: i, tooltip: l } = e,
            a = i.libraryApplication.hasFlag(t);
        return (0, r.jsx)(h.Tooltip, {
            text: l,
            children: (e) =>
                (0, r.jsx)(n, {
                    className: s()(y.settingIcon, { [y.hidden]: !a }),
                    ...e
                })
        });
    },
    D = [
        {
            key: b.iEv.NAME,
            renderHeader: () => Z.intl.string(Z.t.dBfWfX),
            sort: !0,
            cellClassName: y.nameCell,
            bodyCellClassName: y.nameBodyCell,
            render: (e) =>
                (0, r.jsxs)(_.Z, {
                    align: _.Z.Align.CENTER,
                    children: [
                        (0, r.jsx)(I.Z, {
                            game: e.application,
                            size: I.Z.Sizes.SMALL,
                            className: y.gameIcon
                        }),
                        (0, r.jsxs)('div', {
                            className: y.nameCellInfo,
                            children: [
                                (0, r.jsx)('div', {
                                    className: y.nameCellText,
                                    children: e.libraryApplication.getBranchedName(e.application)
                                }),
                                e.libraryApplication.hasFlag(b.eHb.PREMIUM)
                                    ? (0, r.jsx)(h.Tooltip, {
                                          text: Z.intl.string(Z.t.tG2SzM),
                                          children: (e) =>
                                              (0, r.jsx)(h.NitroWheelIcon, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: y.nitroIcon,
                                                  ...e
                                              })
                                      })
                                    : null
                            ]
                        })
                    ]
                })
        },
        {
            key: b.iEv.PLATFORM,
            renderHeader: () => Z.intl.string(Z.t.YR4cHB),
            sort: !0,
            cellClassName: y.platformCell,
            bodyCellClassName: y.textCell,
            render(e) {
                let t = e.libraryApplication.getDistributor();
                return (0, r.jsx)(_.Z, {
                    align: _.Z.Align.CENTER,
                    children: null != t ? b.EOG[t] : Z.intl.string(Z.t['F+l3Ji'])
                });
            }
        },
        {
            key: b.iEv.LAST_PLAYED,
            renderHeader: () => Z.intl.string(Z.t.FDDyjY),
            sort: !0,
            cellClassName: y.lastPlayedCell,
            bodyCellClassName: y.textCell,
            render(e) {
                let t;
                return (
                    (t = e.isRunning
                        ? Z.intl.string(Z.t.Md326u)
                        : e.isNew
                          ? Z.intl.string(Z.t['+F0Tho'])
                          : 0 !== e.lastPlayed
                            ? (0, r.jsx)(C.ZP, {
                                  end: e.lastPlayed,
                                  location: C.ZP.Locations.GAME_LIBRARY_LAST_PLAYED
                              })
                            : Z.intl.string(Z.t.EoWLrq)),
                    (0, r.jsx)(_.Z, {
                        align: _.Z.Align.CENTER,
                        className: s()({ [y.lastPlayedCellNew]: e.isNew }),
                        children: t
                    })
                );
            }
        },
        {
            key: b.iEv.ACTIONS,
            renderHeader: () => null,
            cellClassName: y.actionsCell,
            render(e, t, n) {
                var i, a;
                if (null == t) throw Error('No cell props defined.');
                let o = e.key === t.activeRowKey;
                return (0, r.jsxs)(l.Fragment, {
                    children: [
                        (0, r.jsxs)('div', {
                            className: y.settingIcons,
                            children: [
                                (0, r.jsx)(P, {
                                    flag: b.eHb.PRIVATE,
                                    item: e,
                                    icon: h.EyeSlashIcon,
                                    tooltip: Z.intl.string(Z.t.NozAoq)
                                }),
                                (0, r.jsx)(P, {
                                    flag: b.eHb.OVERLAY_DISABLED,
                                    item: e,
                                    icon: h.ScreenSlashIcon,
                                    tooltip: Z.intl.string(Z.t.Az9eqq)
                                }),
                                (0, r.jsx)(A.Z, {
                                    className: s()(y.settingIcon, { [y.hidden]: !e.supportsCloudSync }),
                                    libraryApplication: e.libraryApplication
                                })
                            ]
                        }),
                        (0, T.Je)(e.libraryApplication)
                            ? (0, r.jsx)(f.Z, {
                                  analyticsListSort: ((i = t.sortKey), (a = t.sortDirection), ''.concat(O[i], ' ').concat(a === b.sHY.ASCENDING ? 'ASC' : 'DESC')),
                                  analyticsListIndex: n,
                                  source: b.Sbl.APPLICATION_LIBRARY,
                                  libraryApplication: e.libraryApplication,
                                  color: o ? h.Button.Colors.GREEN : h.Button.Colors.PRIMARY,
                                  isPlayShiny: o && e.defaultAction === b.apO.PLAY,
                                  size: y.actionButtonSize,
                                  hideProgress: null != e.defaultAction,
                                  onDropdownOpen: () => null != t && t.setActiveRowKey(e),
                                  onDropdownClose: () => null != t && t.clearActiveRowKey()
                              })
                            : (0, r.jsx)('div', { children: 'deprecated!' })
                    ]
                });
            }
        }
    ],
    M = (e) => {
        let { item: t, activeRowKey: n, highlightedApplicationKey: i, onMouseEnter: l, onMouseLeave: a, onContextMenu: o, setRef: c, ...d } = e,
            u = t.key === n,
            h = t.key === i;
        return (0, r.jsx)('div', {
            className: s()({
                [y.rowWrapperActive]: u && !h,
                [y.rowWrapperGlow]: h,
                [y.rowWrapper]: !u && !h,
                [y.rowWrapperDim]: !u && !t.isLaunchable
            }),
            ref: (e) => c(e, t.key),
            onMouseEnter: () => l(t),
            onMouseLeave: a,
            onContextMenu: (e) => o(e, t),
            children: (0, r.jsx)('div', { ...d })
        });
    };
class w extends (i = l.PureComponent) {
    componentDidMount() {
        let { fetched: e } = this.props;
        e && (this.handleHighlightedApplicationKey(), this.trackViewed());
    }
    componentWillUnmount() {
        this._didUnmount = !0;
    }
    componentDidUpdate(e) {
        !e.fetched && this.props.fetched && (this.handleHighlightedApplicationKey(), this.trackViewed());
        let t = this.props.activeRowKey;
        if (null != t && e.activeRowKey !== t && this.props.isNavigatingByKeyboard) {
            let e = this._rowRefs[t];
            null != e && (m.Z.wait(p.Zy), this.props.scrollToRow(e, j));
        }
    }
    handleHighlightedApplicationKey() {
        let { highlightedApplicationKey: e } = this.state;
        null != e &&
            null != this._rowRefs[e] &&
            (this.props.scrollToRow(this._rowRefs[e], j),
            new d.V7().start(R, () => {
                !this._didUnmount && this.setState({ highlightedApplicationKey: null });
            }));
    }
    trackViewed() {
        let e = {
                num_applications_total: 0,
                num_applications_discord: 0,
                num_applications_steam: 0,
                num_applications_battlenet: 0,
                num_applications_twitch: 0,
                num_applications_uplay: 0,
                num_applications_origin: 0,
                num_applications_gog: 0,
                num_applications_epic: 0
            },
            { analyticsContext: t, applicationViewItems: n } = this.props;
        for (let t of n) {
            switch (t.libraryApplication.getDistributor()) {
                case b.GQo.DISCORD:
                    e.num_applications_discord++;
                    break;
                case b.GQo.STEAM:
                    e.num_applications_steam++;
                    break;
                case b.GQo.BATTLENET:
                    e.num_applications_battlenet++;
                    break;
                case b.GQo.TWITCH:
                    e.num_applications_twitch++;
                    break;
                case b.GQo.UPLAY:
                    e.num_applications_uplay++;
                    break;
                case b.GQo.ORIGIN:
                    e.num_applications_origin++;
                    break;
                case b.GQo.GOG:
                    e.num_applications_gog++;
                    break;
                case b.GQo.EPIC:
                    e.num_applications_epic++;
            }
            e.num_applications_total++;
        }
        N.default.track(b.rMx.LIBRARY_VIEWED, {
            ...e,
            load_id: t.loadId
        });
    }
    handleSort(e, t) {
        g.fS(e, t);
    }
    renderImportHelp() {
        let e;
        let { applicationViewItems: t, filterQuery: n } = this.props,
            i = t.length > 0;
        return i
            ? null
            : ((e = '' !== n ? Z.intl.format(Z.t['4Q1TAg'], { query: n }) : Z.intl.string(Z.t['0Y+0PT'])),
              (0, r.jsxs)('div', {
                  className: i ? y.emptyStateSmall : y.emptyStateLarge,
                  children: [
                      (0, r.jsx)('div', { className: y.emptyWumpus }),
                      (0, r.jsx)(_.Z, {
                          grow: 0,
                          shrink: i ? 1 : 0,
                          direction: _.Z.Direction.VERTICAL,
                          children: (0, r.jsxs)('div', {
                              className: y.emptyStateText,
                              children: [
                                  (0, r.jsx)('div', {
                                      className: y.emptyStateHeader,
                                      children: Z.intl.string(Z.t.Lw8X2t)
                                  }),
                                  (0, r.jsx)('div', {
                                      className: y.emptyStateDescription,
                                      children: e
                                  })
                              ]
                          })
                      })
                  ]
              }));
    }
    render() {
        let { sortKey: e, sortDirection: t, applicationViewItems: n, activeRowKey: i, stickyHeader: a } = this.props,
            { overflowMenuRowKey: s, highlightedApplicationKey: o } = this.state;
        return (0, r.jsxs)(l.Fragment, {
            children: [
                n.length > 0
                    ? (0, r.jsx)(E.Z, {
                          columns: D,
                          data: n,
                          sortData: !1,
                          rowComponent: M,
                          className: y.table,
                          headerClassName: a ? y.stickyHeader : y.header,
                          headerCellClassName: y.headerCell,
                          sortedHeaderCellClassName: y.headerCellSorted,
                          bodyCellClassName: y.bodyCell,
                          rowClassName: y.row,
                          sortKey: e,
                          sortDirection: t,
                          stickyHeader: a,
                          rowProps: {
                              activeRowKey: null != s ? s : i,
                              highlightedApplicationKey: o,
                              onMouseEnter: this.handleRowMouseEnter,
                              onMouseLeave: this.handleRowMouseLeave,
                              onContextMenu: this.handleApplicationContextMenu,
                              setRef: this.setRowRef
                          },
                          cellProps: {
                              activeRowKey: null != s ? s : i,
                              onContextMenu: this.handleApplicationContextMenu,
                              setActiveRowKey: this.setActiveRowKey,
                              clearActiveRowKey: this.clearActiveRowKey,
                              sortKey: e,
                              sortDirection: t
                          },
                          onSort: this.handleSort
                      })
                    : null,
                this.renderImportHelp()
            ]
        });
    }
    constructor(...e) {
        super(...e),
            L(this, '_didUnmount', !1),
            L(this, '_rowRefs', {}),
            L(this, 'state', {
                overflowMenuRowKey: null,
                highlightedApplicationKey: null != this.props.location.state ? this.props.location.state.applicationId : null
            }),
            L(this, 'setActiveRowKey', (e) => {
                this.setState({ overflowMenuRowKey: e.key });
            }),
            L(this, 'clearActiveRowKey', () => {
                !this._didUnmount && this.setState({ overflowMenuRowKey: null });
            }),
            L(this, 'handleRowMouseEnter', (e) => {
                !this.props.isNavigatingByKeyboard && g.wX(e.key);
            }),
            L(this, 'handleRowMouseLeave', () => {
                !this.props.isNavigatingByKeyboard && g.wX(null);
            }),
            L(this, 'setRowRef', (e, t) => {
                this._rowRefs[t] = e;
            }),
            L(this, 'handleApplicationContextMenu', (e, t) => {
                this.setActiveRowKey(t);
                let { analyticsContext: i } = this.props;
                (0, p.jW)(
                    e,
                    async () => {
                        let { default: e } = await n.e('98335').then(n.bind(n, 485292));
                        return (n) =>
                            (0, r.jsx)(e, {
                                ...n,
                                applicationId: t.libraryApplication.id,
                                branchId: t.libraryApplication.branchId,
                                analyticsContext: i
                            });
                    },
                    { onClose: this.clearActiveRowKey }
                );
            });
    }
}
function k(e) {
    let t = l.useContext(N.AnalyticsContext),
        n = (0, o.TH)(),
        {
            applicationViewItems: i,
            filterQuery: a,
            fetched: s
        } = (0, c.cj)([v.Z], () => ({
            applicationViewItems: v.Z.sortedFilteredLibraryApplicationViewItems,
            filterQuery: v.Z.applicationFilterQuery,
            fetched: v.Z.hasFetchedApplications
        })),
        {
            sortKey: d,
            sortDirection: u,
            activeRowKey: h,
            isNavigatingByKeyboard: m
        } = (0, c.cj)([S.Z], () => ({
            sortKey: S.Z.sortKey,
            sortDirection: S.Z.sortDirection,
            activeRowKey: S.Z.activeRowKey,
            isNavigatingByKeyboard: S.Z.isNavigatingByKeyboard
        }));
    return (0, r.jsx)(w, {
        ...e,
        analyticsContext: t,
        location: n,
        applicationViewItems: i,
        filterQuery: a,
        fetched: s,
        sortKey: d,
        sortDirection: u,
        activeRowKey: h,
        isNavigatingByKeyboard: m
    });
}
L(w, 'defaultProps', { stickyHeader: !1 });
