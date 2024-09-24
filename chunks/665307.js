n.d(t, {
    Z: function () {
        return G;
    }
}),
    n(411104),
    n(47120);
var i,
    a = n(735250),
    s = n(470079),
    r = n(120356),
    l = n.n(r),
    o = n(266067),
    c = n(442837),
    d = n(846519),
    u = n(477690),
    _ = n(481060),
    E = n(570140),
    h = n(239091),
    m = n(287259),
    I = n(785547),
    g = n(600164),
    p = n(167533),
    T = n(925329),
    f = n(707409),
    S = n(490983),
    C = n(799777),
    N = n(626135),
    A = n(780570),
    v = n(624138),
    L = n(645818),
    Z = n(981631),
    R = n(689938),
    O = n(96510);
function x(e, t, n) {
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
let b = (0, v.Mg)(u.Z.GAME_LIST_ROW_MIN_HEIGHT),
    P = (0, v.Mg)(u.Z.GAME_LIST_LINKED_TO_GLOW_DURATION),
    M = Object.freeze({
        [Z.iEv.PLATFORM]: 'Platform',
        [Z.iEv.LAST_PLAYED]: 'Last Played',
        [Z.iEv.NAME]: 'Name'
    }),
    D = (e) => {
        let { flag: t, icon: n, item: i, tooltip: s } = e,
            r = i.libraryApplication.hasFlag(t);
        return (0, a.jsx)(_.Tooltip, {
            text: s,
            children: (e) =>
                (0, a.jsx)(n, {
                    className: l()(O.settingIcon, { [O.hidden]: !r }),
                    ...e
                })
        });
    },
    y = [
        {
            key: Z.iEv.NAME,
            renderHeader: () => R.Z.Messages.GAME_LIBRARY_LIST_HEADER_NAME,
            sort: !0,
            cellClassName: O.nameCell,
            bodyCellClassName: O.nameBodyCell,
            render: (e) =>
                (0, a.jsxs)(g.Z, {
                    align: g.Z.Align.CENTER,
                    children: [
                        (0, a.jsx)(T.Z, {
                            game: e.application,
                            size: T.Z.Sizes.SMALL,
                            className: O.gameIcon
                        }),
                        (0, a.jsxs)('div', {
                            className: O.nameCellInfo,
                            children: [
                                (0, a.jsx)('div', {
                                    className: O.nameCellText,
                                    children: e.libraryApplication.getBranchedName(e.application)
                                }),
                                e.libraryApplication.hasFlag(Z.eHb.PREMIUM)
                                    ? (0, a.jsx)(_.Tooltip, {
                                          text: R.Z.Messages.PREMIUM_GAME,
                                          children: (e) =>
                                              (0, a.jsx)(_.NitroWheelIcon, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: O.nitroIcon,
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
            key: Z.iEv.PLATFORM,
            renderHeader: () => R.Z.Messages.GAME_LIBRARY_LIST_HEADER_PLATFORM,
            sort: !0,
            cellClassName: O.platformCell,
            bodyCellClassName: O.textCell,
            render(e) {
                let t = e.libraryApplication.getDistributor();
                return (0, a.jsx)(g.Z, {
                    align: g.Z.Align.CENTER,
                    children: null != t ? Z.EOG[t] : R.Z.Messages.GAME_LIBRARY_NOT_APPLICABLE
                });
            }
        },
        {
            key: Z.iEv.LAST_PLAYED,
            renderHeader: () => R.Z.Messages.GAME_LIBRARY_LIST_HEADER_LAST_PLAYED,
            sort: !0,
            cellClassName: O.lastPlayedCell,
            bodyCellClassName: O.textCell,
            render(e) {
                let t;
                return (
                    (t = e.isRunning
                        ? R.Z.Messages.GAME_LIBRARY_LAST_PLAYED_PLAYING_NOW
                        : e.isNew
                          ? R.Z.Messages.GAME_LIBRARY_NEW
                          : 0 !== e.lastPlayed
                            ? (0, a.jsx)(f.ZP, {
                                  end: e.lastPlayed,
                                  location: f.ZP.Locations.GAME_LIBRARY_LAST_PLAYED
                              })
                            : R.Z.Messages.GAME_LIBRARY_LAST_PLAYED_NONE),
                    (0, a.jsx)(g.Z, {
                        align: g.Z.Align.CENTER,
                        className: l()({ [O.lastPlayedCellNew]: e.isNew }),
                        children: t
                    })
                );
            }
        },
        {
            key: Z.iEv.ACTIONS,
            renderHeader: () => null,
            cellClassName: O.actionsCell,
            render(e, t, n) {
                var i, r;
                if (null == t) throw Error('No cell props defined.');
                let o = e.key === t.activeRowKey;
                return (0, a.jsxs)(s.Fragment, {
                    children: [
                        (0, a.jsxs)('div', {
                            className: O.settingIcons,
                            children: [
                                (0, a.jsx)(D, {
                                    flag: Z.eHb.PRIVATE,
                                    item: e,
                                    icon: _.EyeSlashIcon,
                                    tooltip: R.Z.Messages.GAME_LIBRARY_PRIVATE_TOOLTIP
                                }),
                                (0, a.jsx)(D, {
                                    flag: Z.eHb.OVERLAY_DISABLED,
                                    item: e,
                                    icon: _.ScreenSlashIcon,
                                    tooltip: R.Z.Messages.GAME_LIBRARY_OVERLAY_DISABLED_TOOLTIP
                                }),
                                (0, a.jsx)(L.Z, {
                                    className: l()(O.settingIcon, { [O.hidden]: !e.supportsCloudSync }),
                                    libraryApplication: e.libraryApplication
                                })
                            ]
                        }),
                        (0, A.Je)(e.libraryApplication)
                            ? (0, a.jsx)(I.Z, {
                                  analyticsListSort: ((i = t.sortKey), (r = t.sortDirection), ''.concat(M[i], ' ').concat(r === Z.sHY.ASCENDING ? 'ASC' : 'DESC')),
                                  analyticsListIndex: n,
                                  source: Z.Sbl.APPLICATION_LIBRARY,
                                  libraryApplication: e.libraryApplication,
                                  color: o ? _.Button.Colors.GREEN : _.Button.Colors.PRIMARY,
                                  isPlayShiny: o && e.defaultAction === Z.apO.PLAY,
                                  size: O.actionButtonSize,
                                  hideProgress: null != e.defaultAction,
                                  onDropdownOpen: () => null != t && t.setActiveRowKey(e),
                                  onDropdownClose: () => null != t && t.clearActiveRowKey()
                              })
                            : (0, a.jsx)('div', { children: 'deprecated!' })
                    ]
                });
            }
        }
    ],
    j = (e) => {
        let { item: t, activeRowKey: n, highlightedApplicationKey: i, onMouseEnter: s, onMouseLeave: r, onContextMenu: o, setRef: c, ...d } = e,
            u = t.key === n,
            _ = t.key === i;
        return (0, a.jsx)('div', {
            className: l()({
                [O.rowWrapperActive]: u && !_,
                [O.rowWrapperGlow]: _,
                [O.rowWrapper]: !u && !_,
                [O.rowWrapperDim]: !u && !t.isLaunchable
            }),
            ref: (e) => c(e, t.key),
            onMouseEnter: () => s(t),
            onMouseLeave: r,
            onContextMenu: (e) => o(e, t),
            children: (0, a.jsx)('div', { ...d })
        });
    };
class U extends (i = s.PureComponent) {
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
            null != e && (E.Z.wait(h.Zy), this.props.scrollToRow(e, b));
        }
    }
    handleHighlightedApplicationKey() {
        let { highlightedApplicationKey: e } = this.state;
        null != e &&
            null != this._rowRefs[e] &&
            (this.props.scrollToRow(this._rowRefs[e], b),
            new d.V7().start(P, () => {
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
                case Z.GQo.DISCORD:
                    e.num_applications_discord++;
                    break;
                case Z.GQo.STEAM:
                    e.num_applications_steam++;
                    break;
                case Z.GQo.BATTLENET:
                    e.num_applications_battlenet++;
                    break;
                case Z.GQo.TWITCH:
                    e.num_applications_twitch++;
                    break;
                case Z.GQo.UPLAY:
                    e.num_applications_uplay++;
                    break;
                case Z.GQo.ORIGIN:
                    e.num_applications_origin++;
                    break;
                case Z.GQo.GOG:
                    e.num_applications_gog++;
                    break;
                case Z.GQo.EPIC:
                    e.num_applications_epic++;
            }
            e.num_applications_total++;
        }
        N.default.track(Z.rMx.LIBRARY_VIEWED, {
            ...e,
            load_id: t.loadId
        });
    }
    handleSort(e, t) {
        m.fS(e, t);
    }
    renderImportHelp() {
        let e;
        let { applicationViewItems: t, filterQuery: n } = this.props,
            i = t.length > 0;
        return i
            ? null
            : ((e = '' !== n ? R.Z.Messages.APPLICATION_LIBRARY_EMPTY_SEARCH_DESCRIPTION.format({ query: n }) : R.Z.Messages.APPLICATION_LIBRARY_EMPTY_STATE_DESCRIPTION_NO_IMPORT),
              (0, a.jsxs)('div', {
                  className: i ? O.emptyStateSmall : O.emptyStateLarge,
                  children: [
                      (0, a.jsx)('div', { className: O.emptyWumpus }),
                      (0, a.jsx)(g.Z, {
                          grow: 0,
                          shrink: i ? 1 : 0,
                          direction: g.Z.Direction.VERTICAL,
                          children: (0, a.jsxs)('div', {
                              className: O.emptyStateText,
                              children: [
                                  (0, a.jsx)('div', {
                                      className: O.emptyStateHeader,
                                      children: R.Z.Messages.APPLICATION_LIBRARY_EMPTY_STATE_HEADER
                                  }),
                                  (0, a.jsx)('div', {
                                      className: O.emptyStateDescription,
                                      children: e
                                  })
                              ]
                          })
                      })
                  ]
              }));
    }
    render() {
        let { sortKey: e, sortDirection: t, applicationViewItems: n, activeRowKey: i, stickyHeader: r } = this.props,
            { overflowMenuRowKey: l, highlightedApplicationKey: o } = this.state;
        return (0, a.jsxs)(s.Fragment, {
            children: [
                n.length > 0
                    ? (0, a.jsx)(p.Z, {
                          columns: y,
                          data: n,
                          sortData: !1,
                          rowComponent: j,
                          className: O.table,
                          headerClassName: r ? O.stickyHeader : O.header,
                          headerCellClassName: O.headerCell,
                          sortedHeaderCellClassName: O.headerCellSorted,
                          bodyCellClassName: O.bodyCell,
                          rowClassName: O.row,
                          sortKey: e,
                          sortDirection: t,
                          stickyHeader: r,
                          rowProps: {
                              activeRowKey: null != l ? l : i,
                              highlightedApplicationKey: o,
                              onMouseEnter: this.handleRowMouseEnter,
                              onMouseLeave: this.handleRowMouseLeave,
                              onContextMenu: this.handleApplicationContextMenu,
                              setRef: this.setRowRef
                          },
                          cellProps: {
                              activeRowKey: null != l ? l : i,
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
            x(this, '_didUnmount', !1),
            x(this, '_rowRefs', {}),
            x(this, 'state', {
                overflowMenuRowKey: null,
                highlightedApplicationKey: null != this.props.location.state ? this.props.location.state.applicationId : null
            }),
            x(this, 'setActiveRowKey', (e) => {
                this.setState({ overflowMenuRowKey: e.key });
            }),
            x(this, 'clearActiveRowKey', () => {
                !this._didUnmount && this.setState({ overflowMenuRowKey: null });
            }),
            x(this, 'handleRowMouseEnter', (e) => {
                !this.props.isNavigatingByKeyboard && m.wX(e.key);
            }),
            x(this, 'handleRowMouseLeave', () => {
                !this.props.isNavigatingByKeyboard && m.wX(null);
            }),
            x(this, 'setRowRef', (e, t) => {
                this._rowRefs[t] = e;
            }),
            x(this, 'handleApplicationContextMenu', (e, t) => {
                this.setActiveRowKey(t);
                let { analyticsContext: i } = this.props;
                (0, h.jW)(
                    e,
                    async () => {
                        let { default: e } = await n.e('98335').then(n.bind(n, 485292));
                        return (n) =>
                            (0, a.jsx)(e, {
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
function G(e) {
    let t = s.useContext(N.AnalyticsContext),
        n = (0, o.TH)(),
        {
            applicationViewItems: i,
            filterQuery: r,
            fetched: l
        } = (0, c.cj)([S.Z], () => ({
            applicationViewItems: S.Z.sortedFilteredLibraryApplicationViewItems,
            filterQuery: S.Z.applicationFilterQuery,
            fetched: S.Z.hasFetchedApplications
        })),
        {
            sortKey: d,
            sortDirection: u,
            activeRowKey: _,
            isNavigatingByKeyboard: E
        } = (0, c.cj)([C.Z], () => ({
            sortKey: C.Z.sortKey,
            sortDirection: C.Z.sortDirection,
            activeRowKey: C.Z.activeRowKey,
            isNavigatingByKeyboard: C.Z.isNavigatingByKeyboard
        }));
    return (0, a.jsx)(U, {
        ...e,
        analyticsContext: t,
        location: n,
        applicationViewItems: i,
        filterQuery: r,
        fetched: l,
        sortKey: d,
        sortDirection: u,
        activeRowKey: _,
        isNavigatingByKeyboard: E
    });
}
x(U, 'defaultProps', { stickyHeader: !1 });
