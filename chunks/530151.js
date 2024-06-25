n(411104), n(47120), n(724458), n(653041);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(392711),
  o = n.n(r),
  c = n(442837),
  u = n(692547),
  d = n(780384),
  E = n(481060),
  h = n(570140),
  _ = n(239091),
  I = n(51025),
  m = n(785547),
  T = n(730749),
  g = n(112724),
  p = n(812206),
  N = n(44315),
  S = n(210887),
  C = n(283595),
  A = n(417363),
  f = n(941128),
  Z = n(451478),
  L = n(285952),
  O = n(366695),
  v = n(366966),
  R = n(151011),
  P = n(424218),
  x = n(780570),
  M = n(353042),
  D = n(86826),
  b = n(981631),
  y = n(689938),
  j = n(32785);

function U(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let G = e => {
    let {
      className: t,
      children: n,
      onContextMenu: i,
      item: l
    } = e;
    return (0, s.jsx)("div", {
      className: t,
      onContextMenu: e => i(e, l),
      children: n
    })
  },
  w = [u.Z.unsafe_rawColors.BLUE_345.css, u.Z.colors.INTERACTIVE_NORMAL.css],
  k = e => {
    let {
      tooltip: t,
      onClick: n,
      icon: i
    } = e;
    return (0, s.jsx)(E.Tooltip, {
      text: t,
      children: e => {
        let {
          onMouseEnter: l,
          onMouseLeave: a
        } = e;
        return (0, s.jsx)(E.Button, {
          "aria-label": t,
          className: j.actionButton,
          innerClassName: j.actionButtonContents,
          color: E.Button.Colors.PRIMARY,
          size: E.Button.Sizes.ICON,
          onClick: n,
          onMouseEnter: l,
          onMouseLeave: a,
          children: (0, s.jsx)(i, {
            className: j.actionIcon
          })
        })
      }
    })
  };

function B(e, t) {
  switch (t) {
    case b.f07.POST_INSTALL_SCRIPTS:
    case b.f07.PLANNING:
    case b.f07.FINALIZING:
    case b.f07.ALLOCATING_DISK:
      return "".concat(e);
    default:
      return (0, P.BU)(e, {
        useKibibytes: !0
      })
  }
}
let H = {
  [b.vxO.INSTALLING]: {
    [v.J6.NONE]: (e, t, n, s) => y.Z.Messages.GAME_LIBRARY_UPDATES_INSTALLING.format({
      percent: e,
      progress: t,
      total: n
    }),
    [v.J6.SECONDS]: (e, t, n, s) => y.Z.Messages.GAME_LIBRARY_UPDATES_INSTALLING_SECONDS.format({
      percent: e,
      progress: t,
      total: n,
      timeRemaining: s
    }),
    [v.J6.MINUTES]: (e, t, n, s) => y.Z.Messages.GAME_LIBRARY_UPDATES_INSTALLING_MINUTES.format({
      percent: e,
      progress: t,
      total: n,
      timeRemaining: s
    }),
    [v.J6.HOURS]: (e, t, n, s) => y.Z.Messages.GAME_LIBRARY_UPDATES_INSTALLING_HOURS.format({
      percent: e,
      progress: t,
      total: n,
      timeRemaining: s
    })
  },
  [b.vxO.UPDATING]: {
    [v.J6.NONE]: (e, t, n, s) => y.Z.Messages.GAME_LIBRARY_UPDATES_UPDATING.format({
      percent: e,
      progress: t,
      total: n
    }),
    [v.J6.SECONDS]: (e, t, n, s) => y.Z.Messages.GAME_LIBRARY_UPDATES_UPDATING_UPDATING_SECONDS.format({
      percent: e,
      progress: t,
      total: n,
      timeRemaining: s
    }),
    [v.J6.MINUTES]: (e, t, n, s) => y.Z.Messages.GAME_LIBRARY_UPDATES_UPDATING_UPDATING_MINUTES.format({
      percent: e,
      progress: t,
      total: n,
      timeRemaining: s
    }),
    [v.J6.HOURS]: (e, t, n, s) => y.Z.Messages.GAME_LIBRARY_UPDATES_UPDATING_UPDATING_HOURS.format({
      percent: e,
      progress: t,
      total: n,
      timeRemaining: s
    })
  },
  [b.vxO.REPAIRING]: {
    [v.J6.NONE]: (e, t, n, s) => y.Z.Messages.GAME_LIBRARY_UPDATES_INSTALLING.format({
      percent: e,
      progress: t,
      total: n
    }),
    [v.J6.SECONDS]: (e, t, n, s) => y.Z.Messages.GAME_LIBRARY_UPDATES_INSTALLING_SECONDS.format({
      percent: e,
      progress: t,
      total: n,
      timeRemaining: s
    }),
    [v.J6.MINUTES]: (e, t, n, s) => y.Z.Messages.GAME_LIBRARY_UPDATES_INSTALLING_MINUTES.format({
      percent: e,
      progress: t,
      total: n,
      timeRemaining: s
    }),
    [v.J6.HOURS]: (e, t, n, s) => y.Z.Messages.GAME_LIBRARY_UPDATES_INSTALLING_HOURS.format({
      percent: e,
      progress: t,
      total: n,
      timeRemaining: s
    })
  }
};

function V(e, t, n, s, i) {
  let l = H[t],
    a = null != l ? Object.keys(l) : [],
    {
      unit: r,
      time: o
    } = (0, v.CI)(null != e ? e / 60 : null, a);
  if (null != l && null != r) {
    let e = l[r];
    return null != e ? e(n, s, i, o) : null
  }
  return null
}

function F(e) {
  let {
    type: t,
    stage: n,
    percent: s,
    progress: i,
    total: l,
    secondsRemaining: a
  } = e, r = B(l, n), o = B(i, n);
  switch (n) {
    case b.f07.QUEUED:
      if (0 === i) return y.Z.Messages.GAME_LIBRARY_UPDATES_PROGRESS_WAITING_FOR_ANOTHER_NO_TRANSITION;
      return y.Z.Messages.GAME_LIBRARY_UPDATES_PROGRESS_WAITING_FOR_ANOTHER.format({
        percent: s,
        progress: o,
        total: r
      });
    case b.f07.PLANNING:
      return y.Z.Messages.GAME_LIBRARY_UPDATES_PROGRESS_PLANNING.format({
        percent: s
      });
    case b.f07.ALLOCATING_DISK:
      return y.Z.Messages.GAME_LIBRARY_UPDATES_PROGRESS_ALLOCATING_DISK.format({
        percent: s
      });
    case b.f07.PATCHING:
      return V(a, t, s, o, r);
    case b.f07.FINALIZING:
      return y.Z.Messages.GAME_LIBRARY_UPDATES_PROGRESS_FINALIZING.format({
        percent: s
      });
    case b.f07.PAUSING:
      return y.Z.Messages.GAME_LIBRARY_UPDATES_PROGRESS_PAUSING.format({
        percent: s,
        progress: o,
        total: r
      });
    case b.f07.VERIFYING:
      return y.Z.Messages.GAME_LIBRARY_UPDATES_PROGRESS_VERIFYING.format({
        percent: s,
        progress: o,
        total: r
      });
    case b.f07.POST_INSTALL_SCRIPTS:
      return y.Z.Messages.GAME_LIBRARY_UPDATES_PROGRESS_POST_INSTALL_SCRIPTS.format({
        percent: s,
        progress: o,
        total: r
      });
    case b.f07.REPAIRING:
      if (t === b.vxO.REPAIRING) return V(a, t, s, o, r);
      return y.Z.Messages.GAME_LIBRARY_UPDATES_PROGRESS_REPAIRING.format({
        percent: s,
        progress: o,
        total: r
      })
  }
  throw Error("Invalid Dispatch stage")
}
let Y = "name",
  z = "progress",
  W = "actions";
class K extends i.PureComponent {
  get isFocused() {
    let {
      cellProps: e
    } = this.props;
    return null != e && e.isFocused
  }
  renderBody(e) {
    let {
      percent: t,
      foregroundColor: n,
      foregroundGradientColor: i,
      message: l
    } = e;
    return (0, s.jsxs)(L.Z, {
      direction: L.Z.Direction.VERTICAL,
      children: [(0, s.jsx)(E.Progress, {
        percent: t,
        size: E.Progress.Sizes.SMALL,
        foregroundColor: (0, N.Lq)(n),
        foregroundGradientColor: null != i ? [(0, N.Lq)(i[0]), (0, N.Lq)(i[1])] : void 0,
        animate: this.isFocused
      }), (0, s.jsx)("div", {
        className: j.progressCellText,
        children: null != l ? l : ""
      })]
    })
  }
  renderStackedProgress(e) {
    let {
      percents: t,
      message: n
    } = e;
    return (0, s.jsxs)(L.Z, {
      direction: L.Z.Direction.VERTICAL,
      children: [(0, s.jsx)(E.StackedProgress, {
        percents: t,
        size: E.Progress.Sizes.SMALL,
        foregroundColors: w,
        animate: this.isFocused
      }), (0, s.jsx)("div", {
        className: j.progressCellText,
        children: null != n ? n : ""
      })]
    })
  }
  renderFinished() {
    let {
      item: e
    } = this.props;
    return this.renderBody({
      message: y.Z.Messages.GAME_LIBRARY_UPDATES_PROGRESS_FINISHED.format({
        remove: () => I.wi(e.applicationId, e.branchId)
      }),
      foregroundColor: (0, d.ap)(e.theme) ? b.Ilk.PRIMARY_300 : b.Ilk.PRIMARY_500,
      percent: 100
    })
  }
  renderQueued() {
    let e, t;
    let {
      item: {
        state: n,
        theme: s
      }
    } = this.props;
    if (null != n) {
      let {
        progress: s,
        total: i,
        stage: l
      } = n;
      if (null != s && null != i) {
        let n = B(i, l),
          a = B(s, l),
          r = Math.floor(t = x.xI(s, i));
        e = l === b.f07.PAUSING ? y.Z.Messages.GAME_LIBRARY_UPDATES_PROGRESS_PAUSING.format({
          percent: r,
          progress: a,
          total: n
        }) : y.Z.Messages.GAME_LIBRARY_UPDATES_PROGRESS_QUEUED.format({
          percent: r,
          progress: a,
          total: n
        })
      }
    }
    return (null == t || null == e) && (t = 0, e = y.Z.Messages.GAME_LIBRARY_UPDATES_PROGRESS_QUEUED_NO_TRANSITION), this.renderBody({
      percent: t,
      foregroundColor: (0, d.ap)(s) ? b.Ilk.PRIMARY_300 : b.Ilk.PRIMARY_500,
      message: e
    })
  }
  renderPaused() {
    let {
      item: {
        state: e,
        theme: t
      }
    } = this.props;
    if (null == e) return null;
    let {
      progress: n,
      total: s
    } = e;
    if (null == n || null == s) return null;
    let i = x.xI(n, s),
      l = Math.floor(i),
      a = 0 === n && 1 === s ? y.Z.Messages.GAME_LIBRARY_UPDATES_PROGRESS_PAUSED_NO_TRANSITION : y.Z.Messages.GAME_LIBRARY_UPDATES_PROGRESS_PAUSED.format({
        percent: l,
        progress: (0, P.BU)(n),
        total: (0, P.BU)(s)
      });
    return this.renderBody({
      message: a,
      foregroundColor: (0, d.ap)(t) ? b.Ilk.PRIMARY_300 : b.Ilk.PRIMARY_500,
      percent: i
    })
  }
  renderProgressPatching() {
    return (0, s.jsx)(M.Z, {
      getHistoricalTotalBytes: A.Z.getHistoricalTotalBytesWritten,
      updateInterval: 5e3,
      children: this.renderProgressPatchingBody
    })
  }
  renderProgressDefault() {
    let {
      state: e
    } = this.props.item;
    if (null == e) return null;
    let {
      total: t,
      progress: n,
      stage: s,
      type: i
    } = e;
    if (null == t || null == n || null == s) return null;
    let l = x.xI(n, t),
      a = Math.floor(l);
    return this.renderBody({
      percent: l,
      message: F({
        type: i,
        stage: s,
        percent: a,
        progress: n,
        total: t
      }),
      foregroundColor: b.Ilk.BLUE_345
    })
  }
  renderProgress() {
    let {
      state: e
    } = this.props.item;
    switch (null != e ? e.stage : null) {
      case b.f07.PATCHING:
      case b.f07.REPAIRING:
        return this.renderProgressPatching();
      default:
        return this.renderProgressDefault()
    }
  }
  render() {
    let {
      item: e,
      cellProps: t
    } = this.props;
    if (e.finished) return this.renderFinished();
    if (e.index > 0) return this.renderQueued();
    if (null != e.state && (e.state.type === b.vxO.UPDATING || e.state.type === b.vxO.REPAIRING || e.state.type === b.vxO.INSTALLING)) return null != t && t.paused ? this.renderPaused() : this.renderProgress();
    return null
  }
  constructor(...e) {
    super(...e), U(this, "renderProgressPatchingBody", (e, t) => {
      let {
        item: {
          state: n
        }
      } = this.props;
      if (null == n) return null;
      let {
        stage: s,
        progress: i,
        total: l,
        type: a,
        readerProgress: r
      } = n;
      if (null == i || null == l || null == s) return null;
      let o = x.xI(i, l),
        c = x.xI(null != r ? r : 0, l),
        u = e[e.length - 1] / t * 1e3,
        d = l - i,
        E = F({
          type: a,
          stage: s,
          percent: Math.floor(o),
          progress: i,
          total: l,
          secondsRemaining: 0 !== u ? Math.max(1, d / u) : null
        });
      return this.renderStackedProgress({
        percents: [o, c],
        message: E
      })
    })
  }
}
let q = () => (0, s.jsx)(k, {
    icon: E.PlayIcon,
    tooltip: y.Z.Messages.GAME_LIBRARY_UPDATES_ACTION_RESUME,
    onClick: () => I.v4()
  }),
  Q = () => (0, s.jsx)(k, {
    icon: E.PauseIcon,
    tooltip: y.Z.Messages.GAME_LIBRARY_UPDATES_ACTION_PAUSE,
    onClick: () => I.wO()
  }),
  X = e => {
    let {
      item: t
    } = e;
    return (0, s.jsx)(k, {
      icon: E.ArrowSmallUpIcon,
      tooltip: y.Z.Messages.GAME_LIBRARY_UPDATES_ACTION_MOVE_UP,
      onClick: () => I.A1(t.applicationId, t.branchId)
    })
  },
  J = e => {
    let {
      item: t
    } = e;
    return (0, s.jsx)(k, {
      icon: E.CloseSmallIcon,
      tooltip: y.Z.Messages.GAME_LIBRARY_UPDATES_ACTION_REMOVE,
      onClick: () => I.al(t.applicationId, t.branchId)
    })
  },
  $ = [{
    key: Y,
    cellClassName: j.nameCell,
    render: e => (0, s.jsxs)(L.Z, {
      align: L.Z.Align.CENTER,
      children: [(0, s.jsx)(O.Z, {
        game: e.application,
        className: j.__invalid_gameIcon,
        size: O.Z.Sizes.SMALL
      }), (0, s.jsx)("div", {
        className: j.nameCellText,
        children: e.application.name
      })]
    })
  }, {
    key: z,
    cellClassName: j.progressCell,
    headerCellClassName: j.progressCellHeader,
    bodyCellClassName: j.progressCellBody,
    render: (e, t) => (0, s.jsx)(K, {
      item: e,
      cellProps: t
    })
  }, {
    key: W,
    cellClassName: j.actionsCell,
    render(e, t) {
      let n, i;
      return e.finished ? n = null != e.libraryApplication ? (0, s.jsx)(m.Z, {
        libraryApplication: e.libraryApplication,
        size: E.Button.Sizes.SMALL,
        className: j.gameActionButton,
        source: b.Sbl.APPLICATION_LIBRARY_UPDATES
      }) : null : null != e.state ? e.state.type !== b.vxO.UP_TO_DATE && (n = e.index > 0 ? (0, s.jsx)(X, {
        item: e
      }) : null != t && t.paused ? (0, s.jsx)(q, {}) : (0, s.jsx)(Q, {
        item: e
      }), i = (0, s.jsx)(J, {
        item: e
      })) : i = (0, s.jsx)(J, {
        item: e
      }), (0, s.jsxs)(L.Z, {
        justify: L.Z.Justify.END,
        children: [n, i]
      })
    }
  }];
class ee extends i.PureComponent {
  componentDidMount() {
    window.addEventListener("resize", this.throttledUpdateHeight)
  }
  componentDidUpdate(e) {
    this.props.height !== e.height && this.throttledUpdateHeight()
  }
  componentWillUnmount() {
    let {
      applications: e
    } = this.props;
    e.forEach(e => {
      e.finished && h.Z.wait(() => {
        I.wi(e.applicationId, e.branchId)
      })
    }), window.removeEventListener("resize", this.throttledUpdateHeight), this.isUnmounted = !0
  }
  render() {
    let {
      applications: e,
      paused: t,
      isFocused: i,
      theme: l,
      analyticsContext: r
    } = this.props;
    return 0 === e.length ? null : (0, s.jsxs)("div", {
      className: j.gameUpdates,
      children: [(0, s.jsxs)("div", {
        className: j.headerRow,
        children: [(0, s.jsx)(D.Z, {
          className: a()(j.headerCell, j.networkProgress),
          title: y.Z.Messages.GAME_LIBRARY_UPDATES_HEADER_NETWORK,
          getHistoricalTotalBytes: A.Z.getHistoricalTotalBytesDownloaded,
          color: b.Ilk.GREEN_360,
          animate: i
        }), (0, s.jsx)(D.Z, {
          className: a()(j.headerCell, j.diskProgress),
          title: y.Z.Messages.GAME_LIBRARY_UPDATES_HEADER_DISK,
          getHistoricalTotalBytes: A.Z.getHistoricalTotalBytesWritten,
          color: b.Ilk.BLUE_345,
          animate: i
        })]
      }), (0, s.jsx)(R.Z, {
        hasHeader: !1,
        columns: $,
        data: e,
        className: j.table,
        rowClassName: j.row,
        rowComponent: G,
        cellProps: {
          paused: t,
          isFocused: i,
          theme: l
        },
        rowProps: {
          onContextMenu: (e, t) => {
            var i, l, a;
            return i = e, l = t, a = r, void _.jW(i, async () => {
              let {
                default: e
              } = await n.e("98335").then(n.bind(n, 485292));
              return t => (0, s.jsx)(e, {
                ...t,
                applicationId: l.applicationId,
                branchId: l.branchId,
                analyticsContext: a
              })
            })
          }
        },
        bodyCellClassName: j.cell
      })]
    })
  }
  constructor(...e) {
    super(...e), U(this, "isUnmounted", !1), U(this, "isTallerThanHalfViewport", !1), U(this, "throttledUpdateHeight", o().throttle(() => {
      if (this.isUnmounted) return;
      let {
        height: e,
        onHeightTallerThanHalfViewportChange: t
      } = this.props, n = e > window.innerHeight / 2;
      this.isTallerThanHalfViewport !== n && (this.isTallerThanHalfViewport = n, t(n))
    }, 1e3))
  }
}

function et(e, t, n, s) {
  return e.reduce((e, i, l) => {
    let {
      applicationId: a,
      branchId: r
    } = i, o = n.getApplication(a), c = s.getState(a, r);
    return null != o && e.push({
      key: "".concat(a, ":").concat(r),
      applicationId: a,
      branchId: r,
      state: c,
      application: o,
      libraryApplication: C.Z.getLibraryApplication(a, r),
      finished: t,
      index: l
    }), e
  }, [])
}
t.Z = (0, g.Z)(c.ZP.connectStores([p.Z, A.Z, f.Z, S.Z, Z.Z], () => {
  let e = et(f.Z.activeItems, !1, p.Z, A.Z);
  return {
    applications: [...e, ...et(f.Z.finishedItems, !0, p.Z, A.Z)],
    paused: f.Z.paused,
    isFocused: Z.Z.isFocused(),
    theme: S.Z.theme
  }
})((0, T.Z)(ee)))