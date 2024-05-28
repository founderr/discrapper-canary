"use strict";
n.r(t), n.d(t, {
  default: function() {
    return H
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
  C = n("239091"),
  h = n("287259"),
  _ = n("404133"),
  S = n("785547"),
  m = n("490983"),
  p = n("799777"),
  I = n("285952"),
  g = n("366695"),
  T = n("366966"),
  A = n("151011"),
  N = n("880008"),
  v = n("466111"),
  R = n("931003"),
  O = n("626135"),
  L = n("780570"),
  P = n("624138"),
  y = n("645818"),
  M = n("981631"),
  D = n("689938"),
  x = n("638920");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let U = (0, P.cssValueToNumber)(c.default.GAME_LIST_ROW_MIN_HEIGHT),
  j = (0, P.cssValueToNumber)(c.default.GAME_LIST_LINKED_TO_GLOW_DURATION),
  G = Object.freeze({
    [M.GameTableListKeys.PLATFORM]: "Platform",
    [M.GameTableListKeys.LAST_PLAYED]: "Last Played",
    [M.GameTableListKeys.NAME]: "Name"
  }),
  w = e => {
    let {
      flag: t,
      icon: n,
      item: a,
      tooltip: l
    } = e, i = a.libraryApplication.hasFlag(t);
    return (0, s.jsx)(f.Tooltip, {
      text: l,
      children: e => (0, s.jsx)(n, {
        className: r()(x.settingIcon, {
          [x.hidden]: !i
        }),
        ...e
      })
    })
  },
  k = [{
    key: M.GameTableListKeys.NAME,
    renderHeader: () => D.default.Messages.GAME_LIBRARY_LIST_HEADER_NAME,
    sort: !0,
    cellClassName: x.nameCell,
    bodyCellClassName: x.nameBodyCell,
    render: e => (0, s.jsxs)(I.default, {
      align: I.default.Align.CENTER,
      children: [(0, s.jsx)(g.default, {
        game: e.application,
        size: g.default.Sizes.SMALL,
        className: x.gameIcon
      }), (0, s.jsxs)("div", {
        className: x.nameCellInfo,
        children: [(0, s.jsx)("div", {
          className: x.nameCellText,
          children: e.libraryApplication.getBranchedName(e.application)
        }), e.libraryApplication.hasFlag(M.LibraryApplicationFlags.PREMIUM) ? (0, s.jsx)(f.Tooltip, {
          text: D.default.Messages.PREMIUM_GAME,
          children: e => (0, s.jsx)(v.default, {
            className: x.nitroIcon,
            ...e
          })
        }) : null]
      })]
    })
  }, {
    key: M.GameTableListKeys.PLATFORM,
    renderHeader: () => D.default.Messages.GAME_LIBRARY_LIST_HEADER_PLATFORM,
    sort: !0,
    cellClassName: x.platformCell,
    bodyCellClassName: x.textCell,
    render(e) {
      let t = e.libraryApplication.getDistributor();
      return (0, s.jsx)(I.default, {
        align: I.default.Align.CENTER,
        children: null != t ? M.DistributorNames[t] : D.default.Messages.GAME_LIBRARY_NOT_APPLICABLE
      })
    }
  }, {
    key: M.GameTableListKeys.LAST_PLAYED,
    renderHeader: () => D.default.Messages.GAME_LIBRARY_LIST_HEADER_LAST_PLAYED,
    sort: !0,
    cellClassName: x.lastPlayedCell,
    bodyCellClassName: x.textCell,
    render(e) {
      let t;
      return t = e.isRunning ? D.default.Messages.GAME_LIBRARY_LAST_PLAYED_PLAYING_NOW : e.isNew ? D.default.Messages.GAME_LIBRARY_NEW : 0 !== e.lastPlayed ? (0, s.jsx)(T.default, {
        end: e.lastPlayed,
        location: T.default.Locations.GAME_LIBRARY_LAST_PLAYED
      }) : D.default.Messages.GAME_LIBRARY_LAST_PLAYED_NONE, (0, s.jsx)(I.default, {
        align: I.default.Align.CENTER,
        className: r()({
          [x.lastPlayedCellNew]: e.isNew
        }),
        children: t
      })
    }
  }, {
    key: M.GameTableListKeys.ACTIONS,
    renderHeader: () => null,
    cellClassName: x.actionsCell,
    render(e, t, n) {
      var a, i;
      if (null == t) throw Error("No cell props defined.");
      let o = e.key === t.activeRowKey;
      return (0, s.jsxs)(l.Fragment, {
        children: [(0, s.jsxs)("div", {
          className: x.settingIcons,
          children: [(0, s.jsx)(w, {
            flag: M.LibraryApplicationFlags.PRIVATE,
            item: e,
            icon: N.default,
            tooltip: D.default.Messages.GAME_LIBRARY_PRIVATE_TOOLTIP
          }), (0, s.jsx)(w, {
            flag: M.LibraryApplicationFlags.OVERLAY_DISABLED,
            item: e,
            icon: R.default,
            tooltip: D.default.Messages.GAME_LIBRARY_OVERLAY_DISABLED_TOOLTIP
          }), (0, s.jsx)(y.default, {
            className: r()(x.settingIcon, {
              [x.hidden]: !e.supportsCloudSync
            }),
            libraryApplication: e.libraryApplication
          })]
        }), (0, L.isUserEntitledToLibraryApplication)(e.libraryApplication) ? (0, s.jsx)(S.default, {
          analyticsListSort: (a = t.sortKey, i = t.sortDirection, "".concat(G[a], " ").concat(i === M.TableSortDirections.ASCENDING ? "ASC" : "DESC")),
          analyticsListIndex: n,
          source: M.AnalyticsLocations.APPLICATION_LIBRARY,
          libraryApplication: e.libraryApplication,
          color: o ? f.Button.Colors.GREEN : f.Button.Colors.PRIMARY,
          isPlayShiny: o && e.defaultAction === M.LibraryApplicationActions.PLAY,
          size: x.actionButtonSize,
          hideProgress: null != e.defaultAction,
          onDropdownOpen: () => null != t && t.setActiveRowKey(e),
          onDropdownClose: () => null != t && t.clearActiveRowKey()
        }) : (0, s.jsx)(_.default, {
          skuId: e.libraryApplication.sku.id,
          applicationId: e.application.id,
          color: o ? f.Button.Colors.GREEN : f.Button.Colors.PRIMARY,
          customDisabledColor: f.Button.Colors.PRIMARY,
          size: x.actionButtonSize
        })]
      })
    }
  }],
  B = e => {
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
        [x.rowWrapperActive]: c && !f,
        [x.rowWrapperGlow]: f,
        [x.rowWrapper]: !c && !f,
        [x.rowWrapperDim]: !c && !t.isLaunchable
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
class F extends(a = l.PureComponent) {
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
      null != e && (E.default.wait(C.closeContextMenu), this.props.scrollToRow(e, U))
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
        case M.Distributors.DISCORD:
          e.num_applications_discord++;
          break;
        case M.Distributors.STEAM:
          e.num_applications_steam++;
          break;
        case M.Distributors.BATTLENET:
          e.num_applications_battlenet++;
          break;
        case M.Distributors.TWITCH:
          e.num_applications_twitch++;
          break;
        case M.Distributors.UPLAY:
          e.num_applications_uplay++;
          break;
        case M.Distributors.ORIGIN:
          e.num_applications_origin++;
          break;
        case M.Distributors.GOG:
          e.num_applications_gog++;
          break;
        case M.Distributors.EPIC:
          e.num_applications_epic++
      }
      e.num_applications_total++
    }
    O.default.track(M.AnalyticEvents.LIBRARY_VIEWED, {
      ...e,
      load_id: t.loadId
    })
  }
  handleSort(e, t) {
    h.sortList(e, t)
  }
  renderImportHelp() {
    let e;
    let {
      applicationViewItems: t,
      filterQuery: n
    } = this.props, a = t.length > 0;
    return a ? null : (e = "" !== n ? D.default.Messages.APPLICATION_LIBRARY_EMPTY_SEARCH_DESCRIPTION.format({
      query: n
    }) : D.default.Messages.APPLICATION_LIBRARY_EMPTY_STATE_DESCRIPTION_NO_IMPORT, (0, s.jsxs)("div", {
      className: a ? x.emptyStateSmall : x.emptyStateLarge,
      children: [(0, s.jsx)("div", {
        className: x.emptyWumpus
      }), (0, s.jsx)(I.default, {
        grow: 0,
        shrink: a ? 1 : 0,
        direction: I.default.Direction.VERTICAL,
        children: (0, s.jsxs)("div", {
          className: x.emptyStateText,
          children: [(0, s.jsx)("div", {
            className: x.emptyStateHeader,
            children: D.default.Messages.APPLICATION_LIBRARY_EMPTY_STATE_HEADER
          }), (0, s.jsx)("div", {
            className: x.emptyStateDescription,
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
      children: [n.length > 0 ? (0, s.jsx)(A.default, {
        columns: k,
        data: n,
        sortData: !1,
        rowComponent: B,
        className: x.table,
        headerClassName: i ? x.stickyHeader : x.header,
        headerCellClassName: x.headerCell,
        sortedHeaderCellClassName: x.headerCellSorted,
        bodyCellClassName: x.bodyCell,
        rowClassName: x.row,
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
      !this.props.isNavigatingByKeyboard && h.updateActiveRowKey(e.key)
    }), b(this, "handleRowMouseLeave", () => {
      !this.props.isNavigatingByKeyboard && h.updateActiveRowKey(null)
    }), b(this, "setRowRef", (e, t) => {
      this._rowRefs[t] = e
    }), b(this, "handleApplicationContextMenu", (e, t) => {
      this.setActiveRowKey(t);
      let {
        analyticsContext: a
      } = this.props;
      (0, C.openContextMenuLazy)(e, async () => {
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
  let t = l.useContext(O.AnalyticsContext),
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
    } = (0, u.useStateFromStoresObject)([p.default], () => ({
      sortKey: p.default.sortKey,
      sortDirection: p.default.sortDirection,
      activeRowKey: p.default.activeRowKey,
      isNavigatingByKeyboard: p.default.isNavigatingByKeyboard
    }));
  return (0, s.jsx)(F, {
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
b(F, "defaultProps", {
  stickyHeader: !1
})