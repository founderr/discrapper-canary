"use strict";
a.r(t), a("411104"), a("47120"), a("724458"), a("653041");
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("392711"),
  o = a.n(r),
  u = a("442837"),
  d = a("692547"),
  c = a("780384"),
  f = a("481060"),
  E = a("570140"),
  h = a("239091"),
  _ = a("51025"),
  C = a("785547"),
  m = a("730749"),
  S = a("112724"),
  p = a("812206"),
  I = a("44315"),
  T = a("210887"),
  g = a("283595"),
  A = a("417363"),
  N = a("941128"),
  v = a("451478"),
  R = a("285952"),
  O = a("366695"),
  L = a("366966"),
  M = a("151011"),
  P = a("774832"),
  x = a("465670"),
  y = a("786048"),
  D = a("897353"),
  b = a("424218"),
  U = a("780570"),
  j = a("353042"),
  G = a("86826"),
  w = a("981631"),
  k = a("689938"),
  F = a("600262");

function H(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let B = e => {
    let {
      className: t,
      children: a,
      onContextMenu: s,
      item: l
    } = e;
    return (0, n.jsx)("div", {
      className: t,
      onContextMenu: e => s(e, l),
      children: a
    })
  },
  V = [d.default.unsafe_rawColors.BLUE_345.css, d.default.colors.INTERACTIVE_NORMAL.css],
  Y = e => {
    let {
      tooltip: t,
      onClick: a,
      icon: s
    } = e;
    return (0, n.jsx)(f.Tooltip, {
      text: t,
      children: e => {
        let {
          onMouseEnter: l,
          onMouseLeave: i
        } = e;
        return (0, n.jsx)(f.Button, {
          "aria-label": t,
          className: F.actionButton,
          innerClassName: F.actionButtonContents,
          color: f.Button.Colors.PRIMARY,
          size: f.Button.Sizes.ICON,
          onClick: a,
          onMouseEnter: l,
          onMouseLeave: i,
          children: (0, n.jsx)(s, {
            className: F.actionIcon
          })
        })
      }
    })
  };

function W(e, t) {
  switch (t) {
    case w.DispatchApplicationStages.POST_INSTALL_SCRIPTS:
    case w.DispatchApplicationStages.PLANNING:
    case w.DispatchApplicationStages.FINALIZING:
    case w.DispatchApplicationStages.ALLOCATING_DISK:
      return "".concat(e);
    default:
      return (0, b.formatSize)(e, {
        useKibibytes: !0
      })
  }
}
let K = {
  [w.LocalDispatchApplicationStates.INSTALLING]: {
    [L.TimeUnits.NONE]: (e, t, a, n) => k.default.Messages.GAME_LIBRARY_UPDATES_INSTALLING.format({
      percent: e,
      progress: t,
      total: a
    }),
    [L.TimeUnits.SECONDS]: (e, t, a, n) => k.default.Messages.GAME_LIBRARY_UPDATES_INSTALLING_SECONDS.format({
      percent: e,
      progress: t,
      total: a,
      timeRemaining: n
    }),
    [L.TimeUnits.MINUTES]: (e, t, a, n) => k.default.Messages.GAME_LIBRARY_UPDATES_INSTALLING_MINUTES.format({
      percent: e,
      progress: t,
      total: a,
      timeRemaining: n
    }),
    [L.TimeUnits.HOURS]: (e, t, a, n) => k.default.Messages.GAME_LIBRARY_UPDATES_INSTALLING_HOURS.format({
      percent: e,
      progress: t,
      total: a,
      timeRemaining: n
    })
  },
  [w.LocalDispatchApplicationStates.UPDATING]: {
    [L.TimeUnits.NONE]: (e, t, a, n) => k.default.Messages.GAME_LIBRARY_UPDATES_UPDATING.format({
      percent: e,
      progress: t,
      total: a
    }),
    [L.TimeUnits.SECONDS]: (e, t, a, n) => k.default.Messages.GAME_LIBRARY_UPDATES_UPDATING_UPDATING_SECONDS.format({
      percent: e,
      progress: t,
      total: a,
      timeRemaining: n
    }),
    [L.TimeUnits.MINUTES]: (e, t, a, n) => k.default.Messages.GAME_LIBRARY_UPDATES_UPDATING_UPDATING_MINUTES.format({
      percent: e,
      progress: t,
      total: a,
      timeRemaining: n
    }),
    [L.TimeUnits.HOURS]: (e, t, a, n) => k.default.Messages.GAME_LIBRARY_UPDATES_UPDATING_UPDATING_HOURS.format({
      percent: e,
      progress: t,
      total: a,
      timeRemaining: n
    })
  },
  [w.LocalDispatchApplicationStates.REPAIRING]: {
    [L.TimeUnits.NONE]: (e, t, a, n) => k.default.Messages.GAME_LIBRARY_UPDATES_INSTALLING.format({
      percent: e,
      progress: t,
      total: a
    }),
    [L.TimeUnits.SECONDS]: (e, t, a, n) => k.default.Messages.GAME_LIBRARY_UPDATES_INSTALLING_SECONDS.format({
      percent: e,
      progress: t,
      total: a,
      timeRemaining: n
    }),
    [L.TimeUnits.MINUTES]: (e, t, a, n) => k.default.Messages.GAME_LIBRARY_UPDATES_INSTALLING_MINUTES.format({
      percent: e,
      progress: t,
      total: a,
      timeRemaining: n
    }),
    [L.TimeUnits.HOURS]: (e, t, a, n) => k.default.Messages.GAME_LIBRARY_UPDATES_INSTALLING_HOURS.format({
      percent: e,
      progress: t,
      total: a,
      timeRemaining: n
    })
  }
};

function z(e, t, a, n, s) {
  let l = K[t],
    i = null != l ? Object.keys(l) : [],
    {
      unit: r,
      time: o
    } = (0, L.getTimeAndUnit)(null != e ? e / 60 : null, i);
  if (null != l && null != r) {
    let e = l[r];
    return null != e ? e(a, n, s, o) : null
  }
  return null
}

function q(e) {
  let {
    type: t,
    stage: a,
    percent: n,
    progress: s,
    total: l,
    secondsRemaining: i
  } = e, r = W(l, a), o = W(s, a);
  switch (a) {
    case w.DispatchApplicationStages.QUEUED:
      if (0 === s) return k.default.Messages.GAME_LIBRARY_UPDATES_PROGRESS_WAITING_FOR_ANOTHER_NO_TRANSITION;
      return k.default.Messages.GAME_LIBRARY_UPDATES_PROGRESS_WAITING_FOR_ANOTHER.format({
        percent: n,
        progress: o,
        total: r
      });
    case w.DispatchApplicationStages.PLANNING:
      return k.default.Messages.GAME_LIBRARY_UPDATES_PROGRESS_PLANNING.format({
        percent: n
      });
    case w.DispatchApplicationStages.ALLOCATING_DISK:
      return k.default.Messages.GAME_LIBRARY_UPDATES_PROGRESS_ALLOCATING_DISK.format({
        percent: n
      });
    case w.DispatchApplicationStages.PATCHING:
      return z(i, t, n, o, r);
    case w.DispatchApplicationStages.FINALIZING:
      return k.default.Messages.GAME_LIBRARY_UPDATES_PROGRESS_FINALIZING.format({
        percent: n
      });
    case w.DispatchApplicationStages.PAUSING:
      return k.default.Messages.GAME_LIBRARY_UPDATES_PROGRESS_PAUSING.format({
        percent: n,
        progress: o,
        total: r
      });
    case w.DispatchApplicationStages.VERIFYING:
      return k.default.Messages.GAME_LIBRARY_UPDATES_PROGRESS_VERIFYING.format({
        percent: n,
        progress: o,
        total: r
      });
    case w.DispatchApplicationStages.POST_INSTALL_SCRIPTS:
      return k.default.Messages.GAME_LIBRARY_UPDATES_PROGRESS_POST_INSTALL_SCRIPTS.format({
        percent: n,
        progress: o,
        total: r
      });
    case w.DispatchApplicationStages.REPAIRING:
      if (t === w.LocalDispatchApplicationStates.REPAIRING) return z(i, t, n, o, r);
      return k.default.Messages.GAME_LIBRARY_UPDATES_PROGRESS_REPAIRING.format({
        percent: n,
        progress: o,
        total: r
      })
  }
  throw Error("Invalid Dispatch stage")
}
let Q = {
  NAME: "name",
  PROGRESS: "progress",
  ACTIONS: "actions"
};
class Z extends s.PureComponent {
  get isFocused() {
    let {
      cellProps: e
    } = this.props;
    return null != e && e.isFocused
  }
  renderBody(e) {
    let {
      percent: t,
      foregroundColor: a,
      foregroundGradientColor: s,
      message: l
    } = e;
    return (0, n.jsxs)(R.default, {
      direction: R.default.Direction.VERTICAL,
      children: [(0, n.jsx)(f.Progress, {
        percent: t,
        size: f.Progress.Sizes.SMALL,
        foregroundColor: (0, I.getColor)(a),
        foregroundGradientColor: null != s ? [(0, I.getColor)(s[0]), (0, I.getColor)(s[1])] : void 0,
        animate: this.isFocused
      }), (0, n.jsx)("div", {
        className: F.progressCellText,
        children: null != l ? l : ""
      })]
    })
  }
  renderStackedProgress(e) {
    let {
      percents: t,
      message: a
    } = e;
    return (0, n.jsxs)(R.default, {
      direction: R.default.Direction.VERTICAL,
      children: [(0, n.jsx)(f.StackedProgress, {
        percents: t,
        size: f.Progress.Sizes.SMALL,
        foregroundColors: V,
        animate: this.isFocused
      }), (0, n.jsx)("div", {
        className: F.progressCellText,
        children: null != a ? a : ""
      })]
    })
  }
  renderFinished() {
    let {
      item: e
    } = this.props;
    return this.renderBody({
      message: k.default.Messages.GAME_LIBRARY_UPDATES_PROGRESS_FINISHED.format({
        remove: () => _.removeFinished(e.applicationId, e.branchId)
      }),
      foregroundColor: (0, c.isThemeLight)(e.theme) ? w.Color.PRIMARY_300 : w.Color.PRIMARY_500,
      percent: 100
    })
  }
  renderQueued() {
    let e, t;
    let {
      item: {
        state: a,
        theme: n
      }
    } = this.props;
    if (null != a) {
      let {
        progress: n,
        total: s,
        stage: l
      } = a;
      if (null != n && null != s) {
        let a = W(s, l),
          i = W(n, l),
          r = Math.floor(t = U.calculateProgressPercentage(n, s));
        e = l === w.DispatchApplicationStages.PAUSING ? k.default.Messages.GAME_LIBRARY_UPDATES_PROGRESS_PAUSING.format({
          percent: r,
          progress: i,
          total: a
        }) : k.default.Messages.GAME_LIBRARY_UPDATES_PROGRESS_QUEUED.format({
          percent: r,
          progress: i,
          total: a
        })
      }
    }
    return (null == t || null == e) && (t = 0, e = k.default.Messages.GAME_LIBRARY_UPDATES_PROGRESS_QUEUED_NO_TRANSITION), this.renderBody({
      percent: t,
      foregroundColor: (0, c.isThemeLight)(n) ? w.Color.PRIMARY_300 : w.Color.PRIMARY_500,
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
      progress: a,
      total: n
    } = e;
    if (null == a || null == n) return null;
    let s = U.calculateProgressPercentage(a, n),
      l = 0 === a && 1 === n ? k.default.Messages.GAME_LIBRARY_UPDATES_PROGRESS_PAUSED_NO_TRANSITION : k.default.Messages.GAME_LIBRARY_UPDATES_PROGRESS_PAUSED.format({
        percent: Math.floor(s),
        progress: (0, b.formatSize)(a),
        total: (0, b.formatSize)(n)
      });
    return this.renderBody({
      message: l,
      foregroundColor: (0, c.isThemeLight)(t) ? w.Color.PRIMARY_300 : w.Color.PRIMARY_500,
      percent: s
    })
  }
  renderProgressPatching() {
    return (0, n.jsx)(j.default, {
      getHistoricalTotalBytes: A.default.getHistoricalTotalBytesWritten,
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
      progress: a,
      stage: n,
      type: s
    } = e;
    if (null == t || null == a || null == n) return null;
    let l = U.calculateProgressPercentage(a, t),
      i = Math.floor(l);
    return this.renderBody({
      percent: l,
      message: q({
        type: s,
        stage: n,
        percent: i,
        progress: a,
        total: t
      }),
      foregroundColor: w.Color.BLUE_345
    })
  }
  renderProgress() {
    let {
      state: e
    } = this.props.item;
    switch (null != e ? e.stage : null) {
      case w.DispatchApplicationStages.PATCHING:
      case w.DispatchApplicationStages.REPAIRING:
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
    if (null != e.state && (e.state.type === w.LocalDispatchApplicationStates.UPDATING || e.state.type === w.LocalDispatchApplicationStates.REPAIRING || e.state.type === w.LocalDispatchApplicationStates.INSTALLING)) return null != t && t.paused ? this.renderPaused() : this.renderProgress();
    return null
  }
  constructor(...e) {
    super(...e), H(this, "renderProgressPatchingBody", (e, t) => {
      let {
        item: {
          state: a
        }
      } = this.props;
      if (null == a) return null;
      let {
        stage: n,
        progress: s,
        total: l,
        type: i,
        readerProgress: r
      } = a;
      if (null == s || null == l || null == n) return null;
      let o = U.calculateProgressPercentage(s, l),
        u = U.calculateProgressPercentage(null != r ? r : 0, l),
        d = e[e.length - 1] / t * 1e3,
        c = l - s,
        f = q({
          type: i,
          stage: n,
          percent: Math.floor(o),
          progress: s,
          total: l,
          secondsRemaining: 0 !== d ? Math.max(1, c / d) : null
        });
      return this.renderStackedProgress({
        percents: [o, u],
        message: f
      })
    })
  }
}
let X = () => (0, n.jsx)(Y, {
    icon: D.default,
    tooltip: k.default.Messages.GAME_LIBRARY_UPDATES_ACTION_RESUME,
    onClick: () => _.resume()
  }),
  J = () => (0, n.jsx)(Y, {
    icon: y.default,
    tooltip: k.default.Messages.GAME_LIBRARY_UPDATES_ACTION_PAUSE,
    onClick: () => _.pause()
  }),
  $ = e => {
    let {
      item: t
    } = e;
    return (0, n.jsx)(Y, {
      icon: P.default,
      tooltip: k.default.Messages.GAME_LIBRARY_UPDATES_ACTION_MOVE_UP,
      onClick: () => _.moveUp(t.applicationId, t.branchId)
    })
  },
  ee = e => {
    let {
      item: t
    } = e;
    return (0, n.jsx)(Y, {
      icon: x.default,
      tooltip: k.default.Messages.GAME_LIBRARY_UPDATES_ACTION_REMOVE,
      onClick: () => _.cancel(t.applicationId, t.branchId)
    })
  },
  et = [{
    key: Q.NAME,
    cellClassName: F.nameCell,
    render: e => (0, n.jsxs)(R.default, {
      align: R.default.Align.CENTER,
      children: [(0, n.jsx)(O.default, {
        game: e.application,
        className: F.__invalid_gameIcon,
        size: O.default.Sizes.SMALL
      }), (0, n.jsx)("div", {
        className: F.nameCellText,
        children: e.application.name
      })]
    })
  }, {
    key: Q.PROGRESS,
    cellClassName: F.progressCell,
    headerCellClassName: F.progressCellHeader,
    bodyCellClassName: F.progressCellBody,
    render: (e, t) => (0, n.jsx)(Z, {
      item: e,
      cellProps: t
    })
  }, {
    key: Q.ACTIONS,
    cellClassName: F.actionsCell,
    render(e, t) {
      let a, s;
      return e.finished ? a = null != e.libraryApplication ? (0, n.jsx)(C.default, {
        libraryApplication: e.libraryApplication,
        size: f.Button.Sizes.SMALL,
        className: F.gameActionButton,
        source: w.AnalyticsLocations.APPLICATION_LIBRARY_UPDATES
      }) : null : null != e.state ? e.state.type !== w.LocalDispatchApplicationStates.UP_TO_DATE && (a = e.index > 0 ? (0, n.jsx)($, {
        item: e
      }) : null != t && t.paused ? (0, n.jsx)(X, {}) : (0, n.jsx)(J, {
        item: e
      }), s = (0, n.jsx)(ee, {
        item: e
      })) : s = (0, n.jsx)(ee, {
        item: e
      }), (0, n.jsxs)(R.default, {
        justify: R.default.Justify.END,
        children: [a, s]
      })
    }
  }];
class ea extends s.PureComponent {
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
      e.finished && E.default.wait(() => {
        _.removeFinished(e.applicationId, e.branchId)
      })
    }), window.removeEventListener("resize", this.throttledUpdateHeight), this.isUnmounted = !0
  }
  render() {
    let {
      applications: e,
      paused: t,
      isFocused: s,
      theme: l,
      analyticsContext: r
    } = this.props;
    return 0 === e.length ? null : (0, n.jsxs)("div", {
      className: F.gameUpdates,
      children: [(0, n.jsxs)("div", {
        className: F.headerRow,
        children: [(0, n.jsx)(G.default, {
          className: i()(F.headerCell, F.networkProgress),
          title: k.default.Messages.GAME_LIBRARY_UPDATES_HEADER_NETWORK,
          getHistoricalTotalBytes: A.default.getHistoricalTotalBytesDownloaded,
          color: w.Color.GREEN_360,
          animate: s
        }), (0, n.jsx)(G.default, {
          className: i()(F.headerCell, F.diskProgress),
          title: k.default.Messages.GAME_LIBRARY_UPDATES_HEADER_DISK,
          getHistoricalTotalBytes: A.default.getHistoricalTotalBytesWritten,
          color: w.Color.BLUE_345,
          animate: s
        })]
      }), (0, n.jsx)(M.default, {
        hasHeader: !1,
        columns: et,
        data: e,
        className: F.table,
        rowClassName: F.row,
        rowComponent: B,
        cellProps: {
          paused: t,
          isFocused: s,
          theme: l
        },
        rowProps: {
          onContextMenu: (e, t) => {
            var s, l, i;
            return s = e, l = t, i = r, void h.openContextMenuLazy(s, async () => {
              let {
                default: e
              } = await a.e("98335").then(a.bind(a, "485292"));
              return t => (0, n.jsx)(e, {
                ...t,
                applicationId: l.applicationId,
                branchId: l.branchId,
                analyticsContext: i
              })
            })
          }
        },
        bodyCellClassName: F.cell
      })]
    })
  }
  constructor(...e) {
    super(...e), H(this, "isUnmounted", !1), H(this, "isTallerThanHalfViewport", !1), H(this, "throttledUpdateHeight", o().throttle(() => {
      if (this.isUnmounted) return;
      let {
        height: e,
        onHeightTallerThanHalfViewportChange: t
      } = this.props, a = e > window.innerHeight / 2;
      this.isTallerThanHalfViewport !== a && (this.isTallerThanHalfViewport = a, t(a))
    }, 1e3))
  }
}

function en(e, t, a, n) {
  return e.reduce((e, s, l) => {
    let {
      applicationId: i,
      branchId: r
    } = s, o = a.getApplication(i), u = n.getState(i, r);
    return null != o && e.push({
      key: "".concat(i, ":").concat(r),
      applicationId: i,
      branchId: r,
      state: u,
      application: o,
      libraryApplication: g.default.getLibraryApplication(i, r),
      finished: t,
      index: l
    }), e
  }, [])
}
t.default = (0, S.default)(u.default.connectStores([p.default, A.default, N.default, T.default, v.default], () => {
  let e = en(N.default.activeItems, !1, p.default, A.default);
  return {
    applications: [...e, ...en(N.default.finishedItems, !0, p.default, A.default)],
    paused: N.default.paused,
    isFocused: v.default.isFocused(),
    theme: T.default.theme
  }
})((0, m.default)(ea)))