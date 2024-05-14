"use strict";
n.r(t), n.d(t, {
  default: function() {
    return H
  }
}), n("411104"), n("47120");
var a, s = n("735250"),
  i = n("470079"),
  l = n("120356"),
  r = n.n(l),
  o = n("613828"),
  u = n("442837"),
  d = n("846519"),
  c = n("477690"),
  f = n("481060"),
  E = n("570140"),
  h = n("239091"),
  _ = n("287259"),
  C = n("404133"),
  m = n("785547"),
  S = n("490983"),
  p = n("799777"),
  g = n("285952"),
  I = n("366695"),
  T = n("366966"),
  A = n("151011"),
  N = n("880008"),
  v = n("466111"),
  R = n("931003"),
  L = n("626135"),
  O = n("780570"),
  y = n("624138"),
  M = n("645818"),
  P = n("981631"),
  x = n("689938"),
  D = n("638920");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let U = (0, y.cssValueToNumber)(c.default.GAME_LIST_ROW_MIN_HEIGHT),
  j = (0, y.cssValueToNumber)(c.default.GAME_LIST_LINKED_TO_GLOW_DURATION),
  G = Object.freeze({
    [P.GameTableListKeys.PLATFORM]: "Platform",
    [P.GameTableListKeys.LAST_PLAYED]: "Last Played",
    [P.GameTableListKeys.NAME]: "Name"
  }),
  k = e => {
    let {
      flag: t,
      icon: n,
      item: a,
      tooltip: i
    } = e, l = a.libraryApplication.hasFlag(t);
    return (0, s.jsx)(f.Tooltip, {
      text: i,
      children: e => (0, s.jsx)(n, {
        className: r()(D.settingIcon, {
          [D.hidden]: !l
        }),
        ...e
      })
    })
  },
  w = [{
    key: P.GameTableListKeys.NAME,
    renderHeader: () => x.default.Messages.GAME_LIBRARY_LIST_HEADER_NAME,
    sort: !0,
    cellClassName: D.nameCell,
    bodyCellClassName: D.nameBodyCell,
    render: e => (0, s.jsxs)(g.default, {
      align: g.default.Align.CENTER,
      children: [(0, s.jsx)(I.default, {
        game: e.application,
        size: I.default.Sizes.SMALL,
        className: D.gameIcon
      }), (0, s.jsxs)("div", {
        className: D.nameCellInfo,
        children: [(0, s.jsx)("div", {
          className: D.nameCellText,
          children: e.libraryApplication.getBranchedName(e.application)
        }), e.libraryApplication.hasFlag(P.LibraryApplicationFlags.PREMIUM) ? (0, s.jsx)(f.Tooltip, {
          text: x.default.Messages.PREMIUM_GAME,
          children: e => (0, s.jsx)(v.default, {
            className: D.nitroIcon,
            ...e
          })
        }) : null]
      })]
    })
  }, {
    key: P.GameTableListKeys.PLATFORM,
    renderHeader: () => x.default.Messages.GAME_LIBRARY_LIST_HEADER_PLATFORM,
    sort: !0,
    cellClassName: D.platformCell,
    bodyCellClassName: D.textCell,
    render(e) {
      let t = e.libraryApplication.getDistributor();
      return (0, s.jsx)(g.default, {
        align: g.default.Align.CENTER,
        children: null != t ? P.DistributorNames[t] : x.default.Messages.GAME_LIBRARY_NOT_APPLICABLE
      })
    }
  }, {
    key: P.GameTableListKeys.LAST_PLAYED,
    renderHeader: () => x.default.Messages.GAME_LIBRARY_LIST_HEADER_LAST_PLAYED,
    sort: !0,
    cellClassName: D.lastPlayedCell,
    bodyCellClassName: D.textCell,
    render(e) {
      let t;
      return t = e.isRunning ? x.default.Messages.GAME_LIBRARY_LAST_PLAYED_PLAYING_NOW : e.isNew ? x.default.Messages.GAME_LIBRARY_NEW : 0 !== e.lastPlayed ? (0, s.jsx)(T.default, {
        end: e.lastPlayed,
        location: T.default.Locations.GAME_LIBRARY_LAST_PLAYED
      }) : x.default.Messages.GAME_LIBRARY_LAST_PLAYED_NONE, (0, s.jsx)(g.default, {
        align: g.default.Align.CENTER,
        className: r()({
          [D.lastPlayedCellNew]: e.isNew
        }),
        children: t
      })
    }
  }, {
    key: P.GameTableListKeys.ACTIONS,
    renderHeader: () => null,
    cellClassName: D.actionsCell,
    render(e, t, n) {
      var a, l;
      if (null == t) throw Error("No cell props defined.");
      let o = e.key === t.activeRowKey;
      return (0, s.jsxs)(i.Fragment, {
        children: [(0, s.jsxs)("div", {
          className: D.settingIcons,
          children: [(0, s.jsx)(k, {
            flag: P.LibraryApplicationFlags.PRIVATE,
            item: e,
            icon: N.default,
            tooltip: x.default.Messages.GAME_LIBRARY_PRIVATE_TOOLTIP
          }), (0, s.jsx)(k, {
            flag: P.LibraryApplicationFlags.OVERLAY_DISABLED,
            item: e,
            icon: R.default,
            tooltip: x.default.Messages.GAME_LIBRARY_OVERLAY_DISABLED_TOOLTIP
          }), (0, s.jsx)(M.default, {
            className: r()(D.settingIcon, {
              [D.hidden]: !e.supportsCloudSync
            }),
            libraryApplication: e.libraryApplication
          })]
        }), (0, O.isUserEntitledToLibraryApplication)(e.libraryApplication) ? (0, s.jsx)(m.default, {
          analyticsListSort: (a = t.sortKey, l = t.sortDirection, "".concat(G[a], " ").concat(l === P.TableSortDirections.ASCENDING ? "ASC" : "DESC")),
          analyticsListIndex: n,
          source: P.AnalyticsLocations.APPLICATION_LIBRARY,
          libraryApplication: e.libraryApplication,
          color: o ? f.Button.Colors.GREEN : f.Button.Colors.PRIMARY,
          isPlayShiny: o && e.defaultAction === P.LibraryApplicationActions.PLAY,
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
      activeRowKey: n,
      highlightedApplicationKey: a,
      onMouseEnter: i,
      onMouseLeave: l,
      onContextMenu: o,
      setRef: u,
      ...d
    } = e, c = t.key === n, f = t.key === a;
    return (0, s.jsx)("div", {
      className: r()({
        [D.rowWrapperActive]: c && !f,
        [D.rowWrapperGlow]: f,
        [D.rowWrapper]: !c && !f,
        [D.rowWrapperDim]: !c && !t.isLaunchable
      }),
      ref: e => u(e, t.key),
      onMouseEnter: () => i(t),
      onMouseLeave: l,
      onContextMenu: e => o(e, t),
      children: (0, s.jsx)("div", {
        ...d
      })
    })
  };
class B extends(a = i.PureComponent) {
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
    L.default.track(P.AnalyticEvents.LIBRARY_VIEWED, {
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
      className: a ? D.emptyStateSmall : D.emptyStateLarge,
      children: [(0, s.jsx)("div", {
        className: D.emptyWumpus
      }), (0, s.jsx)(g.default, {
        grow: 0,
        shrink: a ? 1 : 0,
        direction: g.default.Direction.VERTICAL,
        children: (0, s.jsxs)("div", {
          className: D.emptyStateText,
          children: [(0, s.jsx)("div", {
            className: D.emptyStateHeader,
            children: x.default.Messages.APPLICATION_LIBRARY_EMPTY_STATE_HEADER
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
      applicationViewItems: n,
      activeRowKey: a,
      stickyHeader: l
    } = this.props, {
      overflowMenuRowKey: r,
      highlightedApplicationKey: o
    } = this.state;
    return (0, s.jsxs)(i.Fragment, {
      children: [n.length > 0 ? (0, s.jsx)(A.default, {
        columns: w,
        data: n,
        sortData: !1,
        rowComponent: F,
        className: D.table,
        headerClassName: l ? D.stickyHeader : D.header,
        headerCellClassName: D.headerCell,
        sortedHeaderCellClassName: D.headerCellSorted,
        bodyCellClassName: D.bodyCell,
        rowClassName: D.row,
        sortKey: e,
        sortDirection: t,
        stickyHeader: l,
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

function H(e) {
  let t = i.useContext(L.AnalyticsContext),
    n = (0, o.useLocation)(),
    {
      applicationViewItems: a,
      filterQuery: l,
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
    } = (0, u.useStateFromStoresObject)([p.default], () => ({
      sortKey: p.default.sortKey,
      sortDirection: p.default.sortDirection,
      activeRowKey: p.default.activeRowKey,
      isNavigatingByKeyboard: p.default.isNavigatingByKeyboard
    }));
  return (0, s.jsx)(B, {
    ...e,
    analyticsContext: t,
    location: n,
    applicationViewItems: a,
    filterQuery: l,
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