n.d(t, {
  Z: function() {
    return G
  }
}), n(411104), n(47120);
var i, s = n(735250),
  l = n(470079),
  a = n(120356),
  r = n.n(a),
  o = n(266067),
  c = n(442837),
  u = n(846519),
  d = n(477690),
  E = n(481060),
  h = n(570140),
  _ = n(239091),
  I = n(287259),
  m = n(785547),
  g = n(490983),
  p = n(799777),
  N = n(285952),
  T = n(366695),
  C = n(366966),
  S = n(151011),
  A = n(626135),
  f = n(780570),
  Z = n(624138),
  v = n(645818),
  L = n(981631),
  O = n(689938),
  R = n(971567);

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let M = (0, Z.Mg)(d.Z.GAME_LIST_ROW_MIN_HEIGHT),
  P = (0, Z.Mg)(d.Z.GAME_LIST_LINKED_TO_GLOW_DURATION),
  D = Object.freeze({
    [L.iEv.PLATFORM]: "Platform",
    [L.iEv.LAST_PLAYED]: "Last Played",
    [L.iEv.NAME]: "Name"
  }),
  b = e => {
    let {
      flag: t,
      icon: n,
      item: i,
      tooltip: l
    } = e, a = i.libraryApplication.hasFlag(t);
    return (0, s.jsx)(E.Tooltip, {
      text: l,
      children: e => (0, s.jsx)(n, {
        className: r()(R.settingIcon, {
          [R.hidden]: !a
        }),
        ...e
      })
    })
  },
  y = [{
    key: L.iEv.NAME,
    renderHeader: () => O.Z.Messages.GAME_LIBRARY_LIST_HEADER_NAME,
    sort: !0,
    cellClassName: R.nameCell,
    bodyCellClassName: R.nameBodyCell,
    render: e => (0, s.jsxs)(N.Z, {
      align: N.Z.Align.CENTER,
      children: [(0, s.jsx)(T.Z, {
        game: e.application,
        size: T.Z.Sizes.SMALL,
        className: R.gameIcon
      }), (0, s.jsxs)("div", {
        className: R.nameCellInfo,
        children: [(0, s.jsx)("div", {
          className: R.nameCellText,
          children: e.libraryApplication.getBranchedName(e.application)
        }), e.libraryApplication.hasFlag(L.eHb.PREMIUM) ? (0, s.jsx)(E.Tooltip, {
          text: O.Z.Messages.PREMIUM_GAME,
          children: e => (0, s.jsx)(E.NitroWheelIcon, {
            size: "md",
            color: "currentColor",
            className: R.nitroIcon,
            ...e
          })
        }) : null]
      })]
    })
  }, {
    key: L.iEv.PLATFORM,
    renderHeader: () => O.Z.Messages.GAME_LIBRARY_LIST_HEADER_PLATFORM,
    sort: !0,
    cellClassName: R.platformCell,
    bodyCellClassName: R.textCell,
    render(e) {
      let t = e.libraryApplication.getDistributor();
      return (0, s.jsx)(N.Z, {
        align: N.Z.Align.CENTER,
        children: null != t ? L.EOG[t] : O.Z.Messages.GAME_LIBRARY_NOT_APPLICABLE
      })
    }
  }, {
    key: L.iEv.LAST_PLAYED,
    renderHeader: () => O.Z.Messages.GAME_LIBRARY_LIST_HEADER_LAST_PLAYED,
    sort: !0,
    cellClassName: R.lastPlayedCell,
    bodyCellClassName: R.textCell,
    render(e) {
      let t;
      return t = e.isRunning ? O.Z.Messages.GAME_LIBRARY_LAST_PLAYED_PLAYING_NOW : e.isNew ? O.Z.Messages.GAME_LIBRARY_NEW : 0 !== e.lastPlayed ? (0, s.jsx)(C.ZP, {
        end: e.lastPlayed,
        location: C.ZP.Locations.GAME_LIBRARY_LAST_PLAYED
      }) : O.Z.Messages.GAME_LIBRARY_LAST_PLAYED_NONE, (0, s.jsx)(N.Z, {
        align: N.Z.Align.CENTER,
        className: r()({
          [R.lastPlayedCellNew]: e.isNew
        }),
        children: t
      })
    }
  }, {
    key: L.iEv.ACTIONS,
    renderHeader: () => null,
    cellClassName: R.actionsCell,
    render(e, t, n) {
      var i, a;
      if (null == t) throw Error("No cell props defined.");
      let o = e.key === t.activeRowKey;
      return (0, s.jsxs)(l.Fragment, {
        children: [(0, s.jsxs)("div", {
          className: R.settingIcons,
          children: [(0, s.jsx)(b, {
            flag: L.eHb.PRIVATE,
            item: e,
            icon: E.EyeSlashIcon,
            tooltip: O.Z.Messages.GAME_LIBRARY_PRIVATE_TOOLTIP
          }), (0, s.jsx)(b, {
            flag: L.eHb.OVERLAY_DISABLED,
            item: e,
            icon: E.ScreenSlashIcon,
            tooltip: O.Z.Messages.GAME_LIBRARY_OVERLAY_DISABLED_TOOLTIP
          }), (0, s.jsx)(v.Z, {
            className: r()(R.settingIcon, {
              [R.hidden]: !e.supportsCloudSync
            }),
            libraryApplication: e.libraryApplication
          })]
        }), (0, f.Je)(e.libraryApplication) ? (0, s.jsx)(m.Z, {
          analyticsListSort: (i = t.sortKey, a = t.sortDirection, "".concat(D[i], " ").concat(a === L.sHY.ASCENDING ? "ASC" : "DESC")),
          analyticsListIndex: n,
          source: L.Sbl.APPLICATION_LIBRARY,
          libraryApplication: e.libraryApplication,
          color: o ? E.Button.Colors.GREEN : E.Button.Colors.PRIMARY,
          isPlayShiny: o && e.defaultAction === L.apO.PLAY,
          size: R.actionButtonSize,
          hideProgress: null != e.defaultAction,
          onDropdownOpen: () => null != t && t.setActiveRowKey(e),
          onDropdownClose: () => null != t && t.clearActiveRowKey()
        }) : (0, s.jsx)("div", {
          children: "deprecated!"
        })]
      })
    }
  }],
  j = e => {
    let {
      item: t,
      activeRowKey: n,
      highlightedApplicationKey: i,
      onMouseEnter: l,
      onMouseLeave: a,
      onContextMenu: o,
      setRef: c,
      ...u
    } = e, d = t.key === n, E = t.key === i;
    return (0, s.jsx)("div", {
      className: r()({
        [R.rowWrapperActive]: d && !E,
        [R.rowWrapperGlow]: E,
        [R.rowWrapper]: !d && !E,
        [R.rowWrapperDim]: !d && !t.isLaunchable
      }),
      ref: e => c(e, t.key),
      onMouseEnter: () => l(t),
      onMouseLeave: a,
      onContextMenu: e => o(e, t),
      children: (0, s.jsx)("div", {
        ...u
      })
    })
  };
class U extends(i = l.PureComponent) {
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
      null != e && (h.Z.wait(_.Zy), this.props.scrollToRow(e, M))
    }
  }
  handleHighlightedApplicationKey() {
    let {
      highlightedApplicationKey: e
    } = this.state;
    null != e && null != this._rowRefs[e] && (this.props.scrollToRow(this._rowRefs[e], M), new u.V7().start(P, () => {
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
        case L.GQo.DISCORD:
          e.num_applications_discord++;
          break;
        case L.GQo.STEAM:
          e.num_applications_steam++;
          break;
        case L.GQo.BATTLENET:
          e.num_applications_battlenet++;
          break;
        case L.GQo.TWITCH:
          e.num_applications_twitch++;
          break;
        case L.GQo.UPLAY:
          e.num_applications_uplay++;
          break;
        case L.GQo.ORIGIN:
          e.num_applications_origin++;
          break;
        case L.GQo.GOG:
          e.num_applications_gog++;
          break;
        case L.GQo.EPIC:
          e.num_applications_epic++
      }
      e.num_applications_total++
    }
    A.default.track(L.rMx.LIBRARY_VIEWED, {
      ...e,
      load_id: t.loadId
    })
  }
  handleSort(e, t) {
    I.fS(e, t)
  }
  renderImportHelp() {
    let e;
    let {
      applicationViewItems: t,
      filterQuery: n
    } = this.props, i = t.length > 0;
    return i ? null : (e = "" !== n ? O.Z.Messages.APPLICATION_LIBRARY_EMPTY_SEARCH_DESCRIPTION.format({
      query: n
    }) : O.Z.Messages.APPLICATION_LIBRARY_EMPTY_STATE_DESCRIPTION_NO_IMPORT, (0, s.jsxs)("div", {
      className: i ? R.emptyStateSmall : R.emptyStateLarge,
      children: [(0, s.jsx)("div", {
        className: R.emptyWumpus
      }), (0, s.jsx)(N.Z, {
        grow: 0,
        shrink: i ? 1 : 0,
        direction: N.Z.Direction.VERTICAL,
        children: (0, s.jsxs)("div", {
          className: R.emptyStateText,
          children: [(0, s.jsx)("div", {
            className: R.emptyStateHeader,
            children: O.Z.Messages.APPLICATION_LIBRARY_EMPTY_STATE_HEADER
          }), (0, s.jsx)("div", {
            className: R.emptyStateDescription,
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
      activeRowKey: i,
      stickyHeader: a
    } = this.props, {
      overflowMenuRowKey: r,
      highlightedApplicationKey: o
    } = this.state;
    return (0, s.jsxs)(l.Fragment, {
      children: [n.length > 0 ? (0, s.jsx)(S.Z, {
        columns: y,
        data: n,
        sortData: !1,
        rowComponent: j,
        className: R.table,
        headerClassName: a ? R.stickyHeader : R.header,
        headerCellClassName: R.headerCell,
        sortedHeaderCellClassName: R.headerCellSorted,
        bodyCellClassName: R.bodyCell,
        rowClassName: R.row,
        sortKey: e,
        sortDirection: t,
        stickyHeader: a,
        rowProps: {
          activeRowKey: null != r ? r : i,
          highlightedApplicationKey: o,
          onMouseEnter: this.handleRowMouseEnter,
          onMouseLeave: this.handleRowMouseLeave,
          onContextMenu: this.handleApplicationContextMenu,
          setRef: this.setRowRef
        },
        cellProps: {
          activeRowKey: null != r ? r : i,
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
    super(...e), x(this, "_didUnmount", !1), x(this, "_rowRefs", {}), x(this, "state", {
      overflowMenuRowKey: null,
      highlightedApplicationKey: null != this.props.location.state ? this.props.location.state.applicationId : null
    }), x(this, "setActiveRowKey", e => {
      this.setState({
        overflowMenuRowKey: e.key
      })
    }), x(this, "clearActiveRowKey", () => {
      !this._didUnmount && this.setState({
        overflowMenuRowKey: null
      })
    }), x(this, "handleRowMouseEnter", e => {
      !this.props.isNavigatingByKeyboard && I.wX(e.key)
    }), x(this, "handleRowMouseLeave", () => {
      !this.props.isNavigatingByKeyboard && I.wX(null)
    }), x(this, "setRowRef", (e, t) => {
      this._rowRefs[t] = e
    }), x(this, "handleApplicationContextMenu", (e, t) => {
      this.setActiveRowKey(t);
      let {
        analyticsContext: i
      } = this.props;
      (0, _.jW)(e, async () => {
        let {
          default: e
        } = await n.e("98335").then(n.bind(n, 485292));
        return n => (0, s.jsx)(e, {
          ...n,
          applicationId: t.libraryApplication.id,
          branchId: t.libraryApplication.branchId,
          analyticsContext: i
        })
      }, {
        onClose: this.clearActiveRowKey
      })
    })
  }
}

function G(e) {
  let t = l.useContext(A.AnalyticsContext),
    n = (0, o.TH)(),
    {
      applicationViewItems: i,
      filterQuery: a,
      fetched: r
    } = (0, c.cj)([g.Z], () => ({
      applicationViewItems: g.Z.sortedFilteredLibraryApplicationViewItems,
      filterQuery: g.Z.applicationFilterQuery,
      fetched: g.Z.hasFetchedApplications
    })),
    {
      sortKey: u,
      sortDirection: d,
      activeRowKey: E,
      isNavigatingByKeyboard: h
    } = (0, c.cj)([p.Z], () => ({
      sortKey: p.Z.sortKey,
      sortDirection: p.Z.sortDirection,
      activeRowKey: p.Z.activeRowKey,
      isNavigatingByKeyboard: p.Z.isNavigatingByKeyboard
    }));
  return (0, s.jsx)(U, {
    ...e,
    analyticsContext: t,
    location: n,
    applicationViewItems: i,
    filterQuery: a,
    fetched: r,
    sortKey: u,
    sortDirection: d,
    activeRowKey: E,
    isNavigatingByKeyboard: h
  })
}
x(U, "defaultProps", {
  stickyHeader: !1
})