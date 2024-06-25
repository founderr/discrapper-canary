n.d(t, {
  Z: function() {
    return G
  }
}), n(411104), n(47120);
var s, i = n(735250),
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
  T = n(490983),
  g = n(799777),
  p = n(285952),
  N = n(366695),
  S = n(366966),
  C = n(151011),
  A = n(626135),
  f = n(780570),
  Z = n(624138),
  L = n(645818),
  O = n(981631),
  v = n(689938),
  R = n(971567);

function P(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let x = (0, Z.Mg)(d.Z.GAME_LIST_ROW_MIN_HEIGHT),
  M = (0, Z.Mg)(d.Z.GAME_LIST_LINKED_TO_GLOW_DURATION),
  D = Object.freeze({
    [O.iEv.PLATFORM]: "Platform",
    [O.iEv.LAST_PLAYED]: "Last Played",
    [O.iEv.NAME]: "Name"
  }),
  b = e => {
    let {
      flag: t,
      icon: n,
      item: s,
      tooltip: l
    } = e, a = s.libraryApplication.hasFlag(t);
    return (0, i.jsx)(E.Tooltip, {
      text: l,
      children: e => (0, i.jsx)(n, {
        className: r()(R.settingIcon, {
          [R.hidden]: !a
        }),
        ...e
      })
    })
  },
  y = [{
    key: O.iEv.NAME,
    renderHeader: () => v.Z.Messages.GAME_LIBRARY_LIST_HEADER_NAME,
    sort: !0,
    cellClassName: R.nameCell,
    bodyCellClassName: R.nameBodyCell,
    render: e => (0, i.jsxs)(p.Z, {
      align: p.Z.Align.CENTER,
      children: [(0, i.jsx)(N.Z, {
        game: e.application,
        size: N.Z.Sizes.SMALL,
        className: R.gameIcon
      }), (0, i.jsxs)("div", {
        className: R.nameCellInfo,
        children: [(0, i.jsx)("div", {
          className: R.nameCellText,
          children: e.libraryApplication.getBranchedName(e.application)
        }), e.libraryApplication.hasFlag(O.eHb.PREMIUM) ? (0, i.jsx)(E.Tooltip, {
          text: v.Z.Messages.PREMIUM_GAME,
          children: e => (0, i.jsx)(E.NitroWheelIcon, {
            size: "md",
            color: "currentColor",
            className: R.nitroIcon,
            ...e
          })
        }) : null]
      })]
    })
  }, {
    key: O.iEv.PLATFORM,
    renderHeader: () => v.Z.Messages.GAME_LIBRARY_LIST_HEADER_PLATFORM,
    sort: !0,
    cellClassName: R.platformCell,
    bodyCellClassName: R.textCell,
    render(e) {
      let t = e.libraryApplication.getDistributor();
      return (0, i.jsx)(p.Z, {
        align: p.Z.Align.CENTER,
        children: null != t ? O.EOG[t] : v.Z.Messages.GAME_LIBRARY_NOT_APPLICABLE
      })
    }
  }, {
    key: O.iEv.LAST_PLAYED,
    renderHeader: () => v.Z.Messages.GAME_LIBRARY_LIST_HEADER_LAST_PLAYED,
    sort: !0,
    cellClassName: R.lastPlayedCell,
    bodyCellClassName: R.textCell,
    render(e) {
      let t;
      return t = e.isRunning ? v.Z.Messages.GAME_LIBRARY_LAST_PLAYED_PLAYING_NOW : e.isNew ? v.Z.Messages.GAME_LIBRARY_NEW : 0 !== e.lastPlayed ? (0, i.jsx)(S.ZP, {
        end: e.lastPlayed,
        location: S.ZP.Locations.GAME_LIBRARY_LAST_PLAYED
      }) : v.Z.Messages.GAME_LIBRARY_LAST_PLAYED_NONE, (0, i.jsx)(p.Z, {
        align: p.Z.Align.CENTER,
        className: r()({
          [R.lastPlayedCellNew]: e.isNew
        }),
        children: t
      })
    }
  }, {
    key: O.iEv.ACTIONS,
    renderHeader: () => null,
    cellClassName: R.actionsCell,
    render(e, t, n) {
      var s, a;
      if (null == t) throw Error("No cell props defined.");
      let o = e.key === t.activeRowKey;
      return (0, i.jsxs)(l.Fragment, {
        children: [(0, i.jsxs)("div", {
          className: R.settingIcons,
          children: [(0, i.jsx)(b, {
            flag: O.eHb.PRIVATE,
            item: e,
            icon: E.EyeSlashIcon,
            tooltip: v.Z.Messages.GAME_LIBRARY_PRIVATE_TOOLTIP
          }), (0, i.jsx)(b, {
            flag: O.eHb.OVERLAY_DISABLED,
            item: e,
            icon: E.ScreenSlashIcon,
            tooltip: v.Z.Messages.GAME_LIBRARY_OVERLAY_DISABLED_TOOLTIP
          }), (0, i.jsx)(L.Z, {
            className: r()(R.settingIcon, {
              [R.hidden]: !e.supportsCloudSync
            }),
            libraryApplication: e.libraryApplication
          })]
        }), (0, f.Je)(e.libraryApplication) ? (0, i.jsx)(m.Z, {
          analyticsListSort: (s = t.sortKey, a = t.sortDirection, "".concat(D[s], " ").concat(a === O.sHY.ASCENDING ? "ASC" : "DESC")),
          analyticsListIndex: n,
          source: O.Sbl.APPLICATION_LIBRARY,
          libraryApplication: e.libraryApplication,
          color: o ? E.Button.Colors.GREEN : E.Button.Colors.PRIMARY,
          isPlayShiny: o && e.defaultAction === O.apO.PLAY,
          size: R.actionButtonSize,
          hideProgress: null != e.defaultAction,
          onDropdownOpen: () => null != t && t.setActiveRowKey(e),
          onDropdownClose: () => null != t && t.clearActiveRowKey()
        }) : (0, i.jsx)("div", {
          children: "deprecated!"
        })]
      })
    }
  }],
  j = e => {
    let {
      item: t,
      activeRowKey: n,
      highlightedApplicationKey: s,
      onMouseEnter: l,
      onMouseLeave: a,
      onContextMenu: o,
      setRef: c,
      ...u
    } = e, d = t.key === n, E = t.key === s;
    return (0, i.jsx)("div", {
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
      children: (0, i.jsx)("div", {
        ...u
      })
    })
  };
class U extends(s = l.PureComponent) {
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
      null != e && (h.Z.wait(_.Zy), this.props.scrollToRow(e, x))
    }
  }
  handleHighlightedApplicationKey() {
    let {
      highlightedApplicationKey: e
    } = this.state;
    null != e && null != this._rowRefs[e] && (this.props.scrollToRow(this._rowRefs[e], x), new u.V7().start(M, () => {
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
        case O.GQo.DISCORD:
          e.num_applications_discord++;
          break;
        case O.GQo.STEAM:
          e.num_applications_steam++;
          break;
        case O.GQo.BATTLENET:
          e.num_applications_battlenet++;
          break;
        case O.GQo.TWITCH:
          e.num_applications_twitch++;
          break;
        case O.GQo.UPLAY:
          e.num_applications_uplay++;
          break;
        case O.GQo.ORIGIN:
          e.num_applications_origin++;
          break;
        case O.GQo.GOG:
          e.num_applications_gog++;
          break;
        case O.GQo.EPIC:
          e.num_applications_epic++
      }
      e.num_applications_total++
    }
    A.default.track(O.rMx.LIBRARY_VIEWED, {
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
    } = this.props, s = t.length > 0;
    return s ? null : (e = "" !== n ? v.Z.Messages.APPLICATION_LIBRARY_EMPTY_SEARCH_DESCRIPTION.format({
      query: n
    }) : v.Z.Messages.APPLICATION_LIBRARY_EMPTY_STATE_DESCRIPTION_NO_IMPORT, (0, i.jsxs)("div", {
      className: s ? R.emptyStateSmall : R.emptyStateLarge,
      children: [(0, i.jsx)("div", {
        className: R.emptyWumpus
      }), (0, i.jsx)(p.Z, {
        grow: 0,
        shrink: s ? 1 : 0,
        direction: p.Z.Direction.VERTICAL,
        children: (0, i.jsxs)("div", {
          className: R.emptyStateText,
          children: [(0, i.jsx)("div", {
            className: R.emptyStateHeader,
            children: v.Z.Messages.APPLICATION_LIBRARY_EMPTY_STATE_HEADER
          }), (0, i.jsx)("div", {
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
      activeRowKey: s,
      stickyHeader: a
    } = this.props, {
      overflowMenuRowKey: r,
      highlightedApplicationKey: o
    } = this.state;
    return (0, i.jsxs)(l.Fragment, {
      children: [n.length > 0 ? (0, i.jsx)(C.Z, {
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
          activeRowKey: null != r ? r : s,
          highlightedApplicationKey: o,
          onMouseEnter: this.handleRowMouseEnter,
          onMouseLeave: this.handleRowMouseLeave,
          onContextMenu: this.handleApplicationContextMenu,
          setRef: this.setRowRef
        },
        cellProps: {
          activeRowKey: null != r ? r : s,
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
    super(...e), P(this, "_didUnmount", !1), P(this, "_rowRefs", {}), P(this, "state", {
      overflowMenuRowKey: null,
      highlightedApplicationKey: null != this.props.location.state ? this.props.location.state.applicationId : null
    }), P(this, "setActiveRowKey", e => {
      this.setState({
        overflowMenuRowKey: e.key
      })
    }), P(this, "clearActiveRowKey", () => {
      !this._didUnmount && this.setState({
        overflowMenuRowKey: null
      })
    }), P(this, "handleRowMouseEnter", e => {
      !this.props.isNavigatingByKeyboard && I.wX(e.key)
    }), P(this, "handleRowMouseLeave", () => {
      !this.props.isNavigatingByKeyboard && I.wX(null)
    }), P(this, "setRowRef", (e, t) => {
      this._rowRefs[t] = e
    }), P(this, "handleApplicationContextMenu", (e, t) => {
      this.setActiveRowKey(t);
      let {
        analyticsContext: s
      } = this.props;
      (0, _.jW)(e, async () => {
        let {
          default: e
        } = await n.e("98335").then(n.bind(n, 485292));
        return n => (0, i.jsx)(e, {
          ...n,
          applicationId: t.libraryApplication.id,
          branchId: t.libraryApplication.branchId,
          analyticsContext: s
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
      applicationViewItems: s,
      filterQuery: a,
      fetched: r
    } = (0, c.cj)([T.Z], () => ({
      applicationViewItems: T.Z.sortedFilteredLibraryApplicationViewItems,
      filterQuery: T.Z.applicationFilterQuery,
      fetched: T.Z.hasFetchedApplications
    })),
    {
      sortKey: u,
      sortDirection: d,
      activeRowKey: E,
      isNavigatingByKeyboard: h
    } = (0, c.cj)([g.Z], () => ({
      sortKey: g.Z.sortKey,
      sortDirection: g.Z.sortDirection,
      activeRowKey: g.Z.activeRowKey,
      isNavigatingByKeyboard: g.Z.isNavigatingByKeyboard
    }));
  return (0, i.jsx)(U, {
    ...e,
    analyticsContext: t,
    location: n,
    applicationViewItems: s,
    filterQuery: a,
    fetched: r,
    sortKey: u,
    sortDirection: d,
    activeRowKey: E,
    isNavigatingByKeyboard: h
  })
}
P(U, "defaultProps", {
  stickyHeader: !1
})