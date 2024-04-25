"use strict";
a.r(t), a.d(t, {
  default: function() {
    return H
  }
}), a("411104"), a("47120");
var n, s = a("735250"),
  l = a("470079"),
  i = a("120356"),
  r = a.n(i),
  o = a("613828"),
  u = a("442837"),
  d = a("846519"),
  c = a("477690"),
  f = a("481060"),
  E = a("570140"),
  h = a("239091"),
  _ = a("287259"),
  C = a("404133"),
  m = a("785547"),
  S = a("490983"),
  I = a("799777"),
  p = a("285952"),
  T = a("366695"),
  g = a("366966"),
  A = a("151011"),
  N = a("880008"),
  v = a("466111"),
  R = a("931003"),
  L = a("626135"),
  O = a("780570"),
  P = a("624138"),
  M = a("645818"),
  x = a("981631"),
  y = a("689938"),
  D = a("373438");

function b(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let U = (0, P.cssValueToNumber)(c.default.GAME_LIST_ROW_MIN_HEIGHT),
  j = (0, P.cssValueToNumber)(c.default.GAME_LIST_LINKED_TO_GLOW_DURATION),
  G = Object.freeze({
    [x.GameTableListKeys.PLATFORM]: "Platform",
    [x.GameTableListKeys.LAST_PLAYED]: "Last Played",
    [x.GameTableListKeys.NAME]: "Name"
  }),
  w = e => {
    let {
      flag: t,
      icon: a,
      item: n,
      tooltip: l
    } = e, i = n.libraryApplication.hasFlag(t);
    return (0, s.jsx)(f.Tooltip, {
      text: l,
      children: e => (0, s.jsx)(a, {
        className: r()(D.settingIcon, {
          [D.hidden]: !i
        }),
        ...e
      })
    })
  },
  k = [{
    key: x.GameTableListKeys.NAME,
    renderHeader: () => y.default.Messages.GAME_LIBRARY_LIST_HEADER_NAME,
    sort: !0,
    cellClassName: D.nameCell,
    bodyCellClassName: D.nameBodyCell,
    render: e => (0, s.jsxs)(p.default, {
      align: p.default.Align.CENTER,
      children: [(0, s.jsx)(T.default, {
        game: e.application,
        size: T.default.Sizes.SMALL,
        className: D.gameIcon
      }), (0, s.jsxs)("div", {
        className: D.nameCellInfo,
        children: [(0, s.jsx)("div", {
          className: D.nameCellText,
          children: e.libraryApplication.getBranchedName(e.application)
        }), e.libraryApplication.hasFlag(x.LibraryApplicationFlags.PREMIUM) ? (0, s.jsx)(f.Tooltip, {
          text: y.default.Messages.PREMIUM_GAME,
          children: e => (0, s.jsx)(v.default, {
            className: D.nitroIcon,
            ...e
          })
        }) : null]
      })]
    })
  }, {
    key: x.GameTableListKeys.PLATFORM,
    renderHeader: () => y.default.Messages.GAME_LIBRARY_LIST_HEADER_PLATFORM,
    sort: !0,
    cellClassName: D.platformCell,
    bodyCellClassName: D.textCell,
    render(e) {
      let t = e.libraryApplication.getDistributor();
      return (0, s.jsx)(p.default, {
        align: p.default.Align.CENTER,
        children: null != t ? x.DistributorNames[t] : y.default.Messages.GAME_LIBRARY_NOT_APPLICABLE
      })
    }
  }, {
    key: x.GameTableListKeys.LAST_PLAYED,
    renderHeader: () => y.default.Messages.GAME_LIBRARY_LIST_HEADER_LAST_PLAYED,
    sort: !0,
    cellClassName: D.lastPlayedCell,
    bodyCellClassName: D.textCell,
    render(e) {
      let t;
      return t = e.isRunning ? y.default.Messages.GAME_LIBRARY_LAST_PLAYED_PLAYING_NOW : e.isNew ? y.default.Messages.GAME_LIBRARY_NEW : 0 !== e.lastPlayed ? (0, s.jsx)(g.default, {
        end: e.lastPlayed,
        location: g.default.Locations.GAME_LIBRARY_LAST_PLAYED
      }) : y.default.Messages.GAME_LIBRARY_LAST_PLAYED_NONE, (0, s.jsx)(p.default, {
        align: p.default.Align.CENTER,
        className: r()({
          [D.lastPlayedCellNew]: e.isNew
        }),
        children: t
      })
    }
  }, {
    key: x.GameTableListKeys.ACTIONS,
    renderHeader: () => null,
    cellClassName: D.actionsCell,
    render(e, t, a) {
      var n, i;
      if (null == t) throw Error("No cell props defined.");
      let o = e.key === t.activeRowKey;
      return (0, s.jsxs)(l.Fragment, {
        children: [(0, s.jsxs)("div", {
          className: D.settingIcons,
          children: [(0, s.jsx)(w, {
            flag: x.LibraryApplicationFlags.PRIVATE,
            item: e,
            icon: N.default,
            tooltip: y.default.Messages.GAME_LIBRARY_PRIVATE_TOOLTIP
          }), (0, s.jsx)(w, {
            flag: x.LibraryApplicationFlags.OVERLAY_DISABLED,
            item: e,
            icon: R.default,
            tooltip: y.default.Messages.GAME_LIBRARY_OVERLAY_DISABLED_TOOLTIP
          }), (0, s.jsx)(M.default, {
            className: r()(D.settingIcon, {
              [D.hidden]: !e.supportsCloudSync
            }),
            libraryApplication: e.libraryApplication
          })]
        }), (0, O.isUserEntitledToLibraryApplication)(e.libraryApplication) ? (0, s.jsx)(m.default, {
          analyticsListSort: (n = t.sortKey, i = t.sortDirection, "".concat(G[n], " ").concat(i === x.TableSortDirections.ASCENDING ? "ASC" : "DESC")),
          analyticsListIndex: a,
          source: x.AnalyticsLocations.APPLICATION_LIBRARY,
          libraryApplication: e.libraryApplication,
          color: o ? f.Button.Colors.GREEN : f.Button.Colors.PRIMARY,
          isPlayShiny: o && e.defaultAction === x.LibraryApplicationActions.PLAY,
          size: D.actionButtonSize,
          hideProgress: null != e.defaultAction,
          onDropdownOpen: () => null != t && t.setActiveRowKey(e),
          onDropdownClose: () => null != t && t.clearActiveRowKey()
        }) : (0, s.jsx)(C.default, {
          skuId: e.libraryApplication.sku.id,
          applicationId: e.application.id,
          color: o ? f.Button.Colors.GREEN : f.Button.Colors.PRIMARY,
          customDisabledColor: f.Button.Colors.PRIMARY,
          size: D.actionButtonSize
        })]
      })
    }
  }],
  F = e => {
    let {
      item: t,
      activeRowKey: a,
      highlightedApplicationKey: n,
      onMouseEnter: l,
      onMouseLeave: i,
      onContextMenu: o,
      setRef: u,
      ...d
    } = e, c = t.key === a, f = t.key === n;
    return (0, s.jsx)("div", {
      className: r()({
        [D.rowWrapperActive]: c && !f,
        [D.rowWrapperGlow]: f,
        [D.rowWrapper]: !c && !f,
        [D.rowWrapperDim]: !c && !t.isLaunchable
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
class B extends(n = l.PureComponent) {
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
      null != e && (E.default.wait(h.closeContextMenu), this.props.scrollToRow(e, U))
    }
  }
  handleHighlightedApplicationKey() {
    let {
      highlightedApplicationKey: e
    } = this.state;
    null != e && null != this._rowRefs[e] && (this.props.scrollToRow(this._rowRefs[e], U), new d.Timeout().start(j, () => {
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
        applicationViewItems: a
      } = this.props;
    for (let t of a) {
      switch (t.libraryApplication.getDistributor()) {
        case x.Distributors.DISCORD:
          e.num_applications_discord++;
          break;
        case x.Distributors.STEAM:
          e.num_applications_steam++;
          break;
        case x.Distributors.BATTLENET:
          e.num_applications_battlenet++;
          break;
        case x.Distributors.TWITCH:
          e.num_applications_twitch++;
          break;
        case x.Distributors.UPLAY:
          e.num_applications_uplay++;
          break;
        case x.Distributors.ORIGIN:
          e.num_applications_origin++;
          break;
        case x.Distributors.GOG:
          e.num_applications_gog++;
          break;
        case x.Distributors.EPIC:
          e.num_applications_epic++
      }
      e.num_applications_total++
    }
    L.default.track(x.AnalyticEvents.LIBRARY_VIEWED, {
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
      filterQuery: a
    } = this.props, n = t.length > 0;
    return n ? null : (e = "" !== a ? y.default.Messages.APPLICATION_LIBRARY_EMPTY_SEARCH_DESCRIPTION.format({
      query: a
    }) : y.default.Messages.APPLICATION_LIBRARY_EMPTY_STATE_DESCRIPTION_NO_IMPORT, (0, s.jsxs)("div", {
      className: n ? D.emptyStateSmall : D.emptyStateLarge,
      children: [(0, s.jsx)("div", {
        className: D.emptyWumpus
      }), (0, s.jsx)(p.default, {
        grow: 0,
        shrink: n ? 1 : 0,
        direction: p.default.Direction.VERTICAL,
        children: (0, s.jsxs)("div", {
          className: D.emptyStateText,
          children: [(0, s.jsx)("div", {
            className: D.emptyStateHeader,
            children: y.default.Messages.APPLICATION_LIBRARY_EMPTY_STATE_HEADER
          }), (0, s.jsx)("div", {
            className: D.emptyStateDescription,
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
      applicationViewItems: a,
      activeRowKey: n,
      stickyHeader: i
    } = this.props, {
      overflowMenuRowKey: r,
      highlightedApplicationKey: o
    } = this.state;
    return (0, s.jsxs)(l.Fragment, {
      children: [a.length > 0 ? (0, s.jsx)(A.default, {
        columns: k,
        data: a,
        sortData: !1,
        rowComponent: F,
        className: D.table,
        headerClassName: i ? D.stickyHeader : D.header,
        headerCellClassName: D.headerCell,
        sortedHeaderCellClassName: D.headerCellSorted,
        bodyCellClassName: D.bodyCell,
        rowClassName: D.row,
        sortKey: e,
        sortDirection: t,
        stickyHeader: i,
        rowProps: {
          activeRowKey: null != r ? r : n,
          highlightedApplicationKey: o,
          onMouseEnter: this.handleRowMouseEnter,
          onMouseLeave: this.handleRowMouseLeave,
          onContextMenu: this.handleApplicationContextMenu,
          setRef: this.setRowRef
        },
        cellProps: {
          activeRowKey: null != r ? r : n,
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
    super(...e), b(this, "_didUnmount", !1), b(this, "_rowRefs", {}), b(this, "state", {
      overflowMenuRowKey: null,
      highlightedApplicationKey: null != this.props.location.state ? this.props.location.state.applicationId : null
    }), b(this, "setActiveRowKey", e => {
      this.setState({
        overflowMenuRowKey: e.key
      })
    }), b(this, "clearActiveRowKey", () => {
      !this._didUnmount && this.setState({
        overflowMenuRowKey: null
      })
    }), b(this, "handleRowMouseEnter", e => {
      !this.props.isNavigatingByKeyboard && _.updateActiveRowKey(e.key)
    }), b(this, "handleRowMouseLeave", () => {
      !this.props.isNavigatingByKeyboard && _.updateActiveRowKey(null)
    }), b(this, "setRowRef", (e, t) => {
      this._rowRefs[t] = e
    }), b(this, "handleApplicationContextMenu", (e, t) => {
      this.setActiveRowKey(t);
      let {
        analyticsContext: n
      } = this.props;
      (0, h.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await a.e("98335").then(a.bind(a, "485292"));
        return a => (0, s.jsx)(e, {
          ...a,
          applicationId: t.libraryApplication.id,
          branchId: t.libraryApplication.branchId,
          analyticsContext: n
        })
      }, {
        onClose: this.clearActiveRowKey
      })
    })
  }
}

function H(e) {
  let t = l.useContext(L.AnalyticsContext),
    a = (0, o.useLocation)(),
    {
      applicationViewItems: n,
      filterQuery: i,
      fetched: r
    } = (0, u.useStateFromStoresObject)([S.default], () => ({
      applicationViewItems: S.default.sortedFilteredLibraryApplicationViewItems,
      filterQuery: S.default.applicationFilterQuery,
      fetched: S.default.hasFetchedApplications
    })),
    {
      sortKey: d,
      sortDirection: c,
      activeRowKey: f,
      isNavigatingByKeyboard: E
    } = (0, u.useStateFromStoresObject)([I.default], () => ({
      sortKey: I.default.sortKey,
      sortDirection: I.default.sortDirection,
      activeRowKey: I.default.activeRowKey,
      isNavigatingByKeyboard: I.default.isNavigatingByKeyboard
    }));
  return (0, s.jsx)(B, {
    ...e,
    analyticsContext: t,
    location: a,
    applicationViewItems: n,
    filterQuery: i,
    fetched: r,
    sortKey: d,
    sortDirection: c,
    activeRowKey: f,
    isNavigatingByKeyboard: E
  })
}
b(B, "defaultProps", {
  stickyHeader: !1
})