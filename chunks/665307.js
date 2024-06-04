"use strict";
n.r(t), n.d(t, {
  default: function() {
    return F
  }
}), n("411104"), n("47120");
var a, s = n("735250"),
  l = n("470079"),
  i = n("120356"),
  r = n.n(i),
  o = n("613828"),
  u = n("442837"),
  d = n("846519"),
  c = n("477690"),
  f = n("481060"),
  E = n("570140"),
  h = n("239091"),
  _ = n("287259"),
  C = n("785547"),
  m = n("490983"),
  S = n("799777"),
  p = n("285952"),
  I = n("366695"),
  g = n("366966"),
  T = n("151011"),
  A = n("880008"),
  N = n("466111"),
  v = n("931003"),
  R = n("626135"),
  O = n("780570"),
  L = n("624138"),
  M = n("645818"),
  P = n("981631"),
  x = n("689938"),
  y = n("638920");

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let b = (0, L.cssValueToNumber)(c.default.GAME_LIST_ROW_MIN_HEIGHT),
  U = (0, L.cssValueToNumber)(c.default.GAME_LIST_LINKED_TO_GLOW_DURATION),
  j = Object.freeze({
    [P.GameTableListKeys.PLATFORM]: "Platform",
    [P.GameTableListKeys.LAST_PLAYED]: "Last Played",
    [P.GameTableListKeys.NAME]: "Name"
  }),
  G = e => {
    let {
      flag: t,
      icon: n,
      item: a,
      tooltip: l
    } = e, i = a.libraryApplication.hasFlag(t);
    return (0, s.jsx)(f.Tooltip, {
      text: l,
      children: e => (0, s.jsx)(n, {
        className: r()(y.settingIcon, {
          [y.hidden]: !i
        }),
        ...e
      })
    })
  },
  w = [{
    key: P.GameTableListKeys.NAME,
    renderHeader: () => x.default.Messages.GAME_LIBRARY_LIST_HEADER_NAME,
    sort: !0,
    cellClassName: y.nameCell,
    bodyCellClassName: y.nameBodyCell,
    render: e => (0, s.jsxs)(p.default, {
      align: p.default.Align.CENTER,
      children: [(0, s.jsx)(I.default, {
        game: e.application,
        size: I.default.Sizes.SMALL,
        className: y.gameIcon
      }), (0, s.jsxs)("div", {
        className: y.nameCellInfo,
        children: [(0, s.jsx)("div", {
          className: y.nameCellText,
          children: e.libraryApplication.getBranchedName(e.application)
        }), e.libraryApplication.hasFlag(P.LibraryApplicationFlags.PREMIUM) ? (0, s.jsx)(f.Tooltip, {
          text: x.default.Messages.PREMIUM_GAME,
          children: e => (0, s.jsx)(N.default, {
            className: y.nitroIcon,
            ...e
          })
        }) : null]
      })]
    })
  }, {
    key: P.GameTableListKeys.PLATFORM,
    renderHeader: () => x.default.Messages.GAME_LIBRARY_LIST_HEADER_PLATFORM,
    sort: !0,
    cellClassName: y.platformCell,
    bodyCellClassName: y.textCell,
    render(e) {
      let t = e.libraryApplication.getDistributor();
      return (0, s.jsx)(p.default, {
        align: p.default.Align.CENTER,
        children: null != t ? P.DistributorNames[t] : x.default.Messages.GAME_LIBRARY_NOT_APPLICABLE
      })
    }
  }, {
    key: P.GameTableListKeys.LAST_PLAYED,
    renderHeader: () => x.default.Messages.GAME_LIBRARY_LIST_HEADER_LAST_PLAYED,
    sort: !0,
    cellClassName: y.lastPlayedCell,
    bodyCellClassName: y.textCell,
    render(e) {
      let t;
      return t = e.isRunning ? x.default.Messages.GAME_LIBRARY_LAST_PLAYED_PLAYING_NOW : e.isNew ? x.default.Messages.GAME_LIBRARY_NEW : 0 !== e.lastPlayed ? (0, s.jsx)(g.default, {
        end: e.lastPlayed,
        location: g.default.Locations.GAME_LIBRARY_LAST_PLAYED
      }) : x.default.Messages.GAME_LIBRARY_LAST_PLAYED_NONE, (0, s.jsx)(p.default, {
        align: p.default.Align.CENTER,
        className: r()({
          [y.lastPlayedCellNew]: e.isNew
        }),
        children: t
      })
    }
  }, {
    key: P.GameTableListKeys.ACTIONS,
    renderHeader: () => null,
    cellClassName: y.actionsCell,
    render(e, t, n) {
      var a, i;
      if (null == t) throw Error("No cell props defined.");
      let o = e.key === t.activeRowKey;
      return (0, s.jsxs)(l.Fragment, {
        children: [(0, s.jsxs)("div", {
          className: y.settingIcons,
          children: [(0, s.jsx)(G, {
            flag: P.LibraryApplicationFlags.PRIVATE,
            item: e,
            icon: A.default,
            tooltip: x.default.Messages.GAME_LIBRARY_PRIVATE_TOOLTIP
          }), (0, s.jsx)(G, {
            flag: P.LibraryApplicationFlags.OVERLAY_DISABLED,
            item: e,
            icon: v.default,
            tooltip: x.default.Messages.GAME_LIBRARY_OVERLAY_DISABLED_TOOLTIP
          }), (0, s.jsx)(M.default, {
            className: r()(y.settingIcon, {
              [y.hidden]: !e.supportsCloudSync
            }),
            libraryApplication: e.libraryApplication
          })]
        }), (0, O.isUserEntitledToLibraryApplication)(e.libraryApplication) ? (0, s.jsx)(C.default, {
          analyticsListSort: (a = t.sortKey, i = t.sortDirection, "".concat(j[a], " ").concat(i === P.TableSortDirections.ASCENDING ? "ASC" : "DESC")),
          analyticsListIndex: n,
          source: P.AnalyticsLocations.APPLICATION_LIBRARY,
          libraryApplication: e.libraryApplication,
          color: o ? f.Button.Colors.GREEN : f.Button.Colors.PRIMARY,
          isPlayShiny: o && e.defaultAction === P.LibraryApplicationActions.PLAY,
          size: y.actionButtonSize,
          hideProgress: null != e.defaultAction,
          onDropdownOpen: () => null != t && t.setActiveRowKey(e),
          onDropdownClose: () => null != t && t.clearActiveRowKey()
        }) : (0, s.jsx)("div", {
          children: "deprecated!"
        })]
      })
    }
  }],
  k = e => {
    let {
      item: t,
      activeRowKey: n,
      highlightedApplicationKey: a,
      onMouseEnter: l,
      onMouseLeave: i,
      onContextMenu: o,
      setRef: u,
      ...d
    } = e, c = t.key === n, f = t.key === a;
    return (0, s.jsx)("div", {
      className: r()({
        [y.rowWrapperActive]: c && !f,
        [y.rowWrapperGlow]: f,
        [y.rowWrapper]: !c && !f,
        [y.rowWrapperDim]: !c && !t.isLaunchable
      }),
      ref: e => u(e, t.key),
      onMouseEnter: () => l(t),
      onMouseLeave: i,
      onContextMenu: e => o(e, t),
      children: (0, s.jsx)("div", {
        ...d
      })
    })
  };
class B extends(a = l.PureComponent) {
  componentDidMount() {
    let {
      fetched: e
    } = this.props;
    e && (this.handleHighlightedApplicationKey(), this.trackViewed())
  }
  componentWillUnmount() {
    this._didUnmount = !0
  }
  componentDidUpdate(e) {
    !e.fetched && this.props.fetched && (this.handleHighlightedApplicationKey(), this.trackViewed());
    let t = this.props.activeRowKey;
    if (null != t && e.activeRowKey !== t && this.props.isNavigatingByKeyboard) {
      let e = this._rowRefs[t];
      null != e && (E.default.wait(h.closeContextMenu), this.props.scrollToRow(e, b))
    }
  }
  handleHighlightedApplicationKey() {
    let {
      highlightedApplicationKey: e
    } = this.state;
    null != e && null != this._rowRefs[e] && (this.props.scrollToRow(this._rowRefs[e], b), new d.Timeout().start(U, () => {
      !this._didUnmount && this.setState({
        highlightedApplicationKey: null
      })
    }))
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
      {
        analyticsContext: t,
        applicationViewItems: n
      } = this.props;
    for (let t of n) {
      switch (t.libraryApplication.getDistributor()) {
        case P.Distributors.DISCORD:
          e.num_applications_discord++;
          break;
        case P.Distributors.STEAM:
          e.num_applications_steam++;
          break;
        case P.Distributors.BATTLENET:
          e.num_applications_battlenet++;
          break;
        case P.Distributors.TWITCH:
          e.num_applications_twitch++;
          break;
        case P.Distributors.UPLAY:
          e.num_applications_uplay++;
          break;
        case P.Distributors.ORIGIN:
          e.num_applications_origin++;
          break;
        case P.Distributors.GOG:
          e.num_applications_gog++;
          break;
        case P.Distributors.EPIC:
          e.num_applications_epic++
      }
      e.num_applications_total++
    }
    R.default.track(P.AnalyticEvents.LIBRARY_VIEWED, {
      ...e,
      load_id: t.loadId
    })
  }
  handleSort(e, t) {
    _.sortList(e, t)
  }
  renderImportHelp() {
    let e;
    let {
      applicationViewItems: t,
      filterQuery: n
    } = this.props, a = t.length > 0;
    return a ? null : (e = "" !== n ? x.default.Messages.APPLICATION_LIBRARY_EMPTY_SEARCH_DESCRIPTION.format({
      query: n
    }) : x.default.Messages.APPLICATION_LIBRARY_EMPTY_STATE_DESCRIPTION_NO_IMPORT, (0, s.jsxs)("div", {
      className: a ? y.emptyStateSmall : y.emptyStateLarge,
      children: [(0, s.jsx)("div", {
        className: y.emptyWumpus
      }), (0, s.jsx)(p.default, {
        grow: 0,
        shrink: a ? 1 : 0,
        direction: p.default.Direction.VERTICAL,
        children: (0, s.jsxs)("div", {
          className: y.emptyStateText,
          children: [(0, s.jsx)("div", {
            className: y.emptyStateHeader,
            children: x.default.Messages.APPLICATION_LIBRARY_EMPTY_STATE_HEADER
          }), (0, s.jsx)("div", {
            className: y.emptyStateDescription,
            children: e
          })]
        })
      })]
    }))
  }
  render() {
    let {
      sortKey: e,
      sortDirection: t,
      applicationViewItems: n,
      activeRowKey: a,
      stickyHeader: i
    } = this.props, {
      overflowMenuRowKey: r,
      highlightedApplicationKey: o
    } = this.state;
    return (0, s.jsxs)(l.Fragment, {
      children: [n.length > 0 ? (0, s.jsx)(T.default, {
        columns: w,
        data: n,
        sortData: !1,
        rowComponent: k,
        className: y.table,
        headerClassName: i ? y.stickyHeader : y.header,
        headerCellClassName: y.headerCell,
        sortedHeaderCellClassName: y.headerCellSorted,
        bodyCellClassName: y.bodyCell,
        rowClassName: y.row,
        sortKey: e,
        sortDirection: t,
        stickyHeader: i,
        rowProps: {
          activeRowKey: null != r ? r : a,
          highlightedApplicationKey: o,
          onMouseEnter: this.handleRowMouseEnter,
          onMouseLeave: this.handleRowMouseLeave,
          onContextMenu: this.handleApplicationContextMenu,
          setRef: this.setRowRef
        },
        cellProps: {
          activeRowKey: null != r ? r : a,
          onContextMenu: this.handleApplicationContextMenu,
          setActiveRowKey: this.setActiveRowKey,
          clearActiveRowKey: this.clearActiveRowKey,
          sortKey: e,
          sortDirection: t
        },
        onSort: this.handleSort
      }) : null, this.renderImportHelp()]
    })
  }
  constructor(...e) {
    super(...e), D(this, "_didUnmount", !1), D(this, "_rowRefs", {}), D(this, "state", {
      overflowMenuRowKey: null,
      highlightedApplicationKey: null != this.props.location.state ? this.props.location.state.applicationId : null
    }), D(this, "setActiveRowKey", e => {
      this.setState({
        overflowMenuRowKey: e.key
      })
    }), D(this, "clearActiveRowKey", () => {
      !this._didUnmount && this.setState({
        overflowMenuRowKey: null
      })
    }), D(this, "handleRowMouseEnter", e => {
      !this.props.isNavigatingByKeyboard && _.updateActiveRowKey(e.key)
    }), D(this, "handleRowMouseLeave", () => {
      !this.props.isNavigatingByKeyboard && _.updateActiveRowKey(null)
    }), D(this, "setRowRef", (e, t) => {
      this._rowRefs[t] = e
    }), D(this, "handleApplicationContextMenu", (e, t) => {
      this.setActiveRowKey(t);
      let {
        analyticsContext: a
      } = this.props;
      (0, h.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.e("98335").then(n.bind(n, "485292"));
        return n => (0, s.jsx)(e, {
          ...n,
          applicationId: t.libraryApplication.id,
          branchId: t.libraryApplication.branchId,
          analyticsContext: a
        })
      }, {
        onClose: this.clearActiveRowKey
      })
    })
  }
}

function F(e) {
  let t = l.useContext(R.AnalyticsContext),
    n = (0, o.useLocation)(),
    {
      applicationViewItems: a,
      filterQuery: i,
      fetched: r
    } = (0, u.useStateFromStoresObject)([m.default], () => ({
      applicationViewItems: m.default.sortedFilteredLibraryApplicationViewItems,
      filterQuery: m.default.applicationFilterQuery,
      fetched: m.default.hasFetchedApplications
    })),
    {
      sortKey: d,
      sortDirection: c,
      activeRowKey: f,
      isNavigatingByKeyboard: E
    } = (0, u.useStateFromStoresObject)([S.default], () => ({
      sortKey: S.default.sortKey,
      sortDirection: S.default.sortDirection,
      activeRowKey: S.default.activeRowKey,
      isNavigatingByKeyboard: S.default.isNavigatingByKeyboard
    }));
  return (0, s.jsx)(B, {
    ...e,
    analyticsContext: t,
    location: n,
    applicationViewItems: a,
    filterQuery: i,
    fetched: r,
    sortKey: d,
    sortDirection: c,
    activeRowKey: f,
    isNavigatingByKeyboard: E
  })
}
D(B, "defaultProps", {
  stickyHeader: !1
})