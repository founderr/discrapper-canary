"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("411104"), n("47120");
var s, a, l, i = n("735250"),
  r = n("470079"),
  o = n("442837"),
  u = n("692547"),
  d = n("481060"),
  c = n("58642"),
  E = n("2052"),
  f = n("710845"),
  _ = n("703656"),
  T = n("173747"),
  I = n("7956"),
  m = n("293245"),
  N = n("417363"),
  p = n("941128"),
  S = n("780570"),
  C = n("358085"),
  A = n("814225"),
  h = n("346329"),
  g = n("701560"),
  M = n("981631"),
  O = n("689938"),
  R = n("308743");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(l = s || (s = {})).PLAY = "play", l.NOW_PLAYING = "now_playing", l.INSTALL = "install", l.UPDATE = "update", l.PAUSED = "paused", l.LOCATE = "locate", l.UNINSTALLING = "uninstalling", l.QUEUED = "queued", l.DOWNLOADING = "downloading", l.UNSUPPORTED_OS = "unsupported_os", l.ADD_TO_LIBRARY = "add_to_library", l.PREORDER_WAIT = "preorder_wait";
let L = Object.freeze({
    [M.LibraryApplicationActions.PLAY]: "play",
    [M.LibraryApplicationActions.INSTALL]: "install",
    [M.LibraryApplicationActions.UPDATE]: "update",
    [M.LibraryApplicationActions.PAUSE]: "downloading",
    [M.LibraryApplicationActions.MOVE_UP]: "queued",
    [M.LibraryApplicationActions.RESUME]: "paused"
  }),
  P = () => [O.default.Messages.GAME_ACTION_BUTTON_UNINSTALLING_1, O.default.Messages.GAME_ACTION_BUTTON_UNINSTALLING_2, O.default.Messages.GAME_ACTION_BUTTON_UNINSTALLING_3, O.default.Messages.GAME_ACTION_BUTTON_UNINSTALLING_4, O.default.Messages.GAME_ACTION_BUTTON_UNINSTALLING_5, O.default.Messages.GAME_ACTION_BUTTON_UNINSTALLING_6, O.default.Messages.GAME_ACTION_BUTTON_UNINSTALLING_7, O.default.Messages.GAME_ACTION_BUTTON_UNINSTALLING_8, O.default.Messages.GAME_ACTION_BUTTON_UNINSTALLING_9, O.default.Messages.GAME_ACTION_BUTTON_UNINSTALLING_10];
class D extends(a = r.Component) {
  get analyticsLocation() {
    return {
      ...this.props.analyticsContext.location,
      object: M.AnalyticsObjects.BUTTON_CTA
    }
  }
  getText(e) {
    switch ("uninstalling" !== e && (this._uninstallStringIndex = null), e) {
      case "install":
      case "unsupported_os":
        return O.default.Messages.GAME_ACTION_BUTTON_INSTALL;
      case "update":
        return O.default.Messages.GAME_ACTION_BUTTON_UPDATE;
      case "paused":
        return O.default.Messages.GAME_ACTION_BUTTON_PAUSED;
      case "locate":
        return O.default.Messages.GAME_ACTION_BUTTON_LOCATE;
      case "uninstalling":
        let t = P();
        return null == this._uninstallStringIndex && (this._uninstallStringIndex = Math.floor(Math.random() * t.length)), t[this._uninstallStringIndex];
      case "queued":
        return O.default.Messages.GAME_ACTION_BUTTON_QUEUED;
      case "downloading":
        return O.default.Messages.GAME_ACTION_BUTTON_DOWNLOADING;
      case "preorder_wait":
        return O.default.Messages.GAME_ACTION_BUTTON_PREORDER_WAIT;
      case "add_to_library":
        return O.default.Messages.GAME_ACTION_BUTTON_ADD_TO_LIBRARY;
      default:
        throw Error("Unexpected button state")
    }
  }
  getButtonState() {
    let {
      libraryApplication: e,
      dispatchState: t,
      actionState: n
    } = this.props;
    if (e.isHidden()) return "add_to_library";
    if (e.isPreorder()) return "preorder_wait";
    let s = null != n ? L[n] : null;
    return null != s ? s : null != t && t.type === M.LocalDispatchApplicationStates.UNINSTALLING ? "uninstalling" : (0, C.isWeb)() ? "play" : "unsupported_os"
  }
  renderPlayButton() {
    let {
      libraryApplication: e,
      fullWidth: t,
      size: n,
      color: s,
      customDisabledColor: a,
      isPlayShiny: l,
      onDropdownOpen: r,
      onDropdownClose: o,
      analyticsListSort: u,
      analyticsListIndex: d
    } = this.props;
    return (0, i.jsx)(g.default, {
      applicationId: e.id,
      libraryApplication: e,
      fullWidth: t,
      size: n,
      color: s,
      customDisabledColor: a,
      isShiny: l,
      onDropdownOpen: r,
      onDropdownClose: o,
      analyticsListSort: u,
      analyticsListIndex: d
    })
  }
  renderDisabledButton(e, t) {
    let {
      className: n,
      fullWidth: s,
      size: a,
      customDisabledColor: l,
      tooltipPosition: r
    } = this.props;
    return (0, i.jsxs)("div", {
      className: R.disabledButtonWrapper,
      children: [(0, i.jsxs)(d.Button, {
        className: n,
        fullWidth: s,
        size: a,
        color: null != l ? l : R.disabledButtonColor,
        disabled: !0,
        children: [this.getText(e), this.renderProgressBar()]
      }), (0, i.jsx)(d.Tooltip, {
        text: t,
        position: r,
        children: e => (0, i.jsx)("div", {
          className: R.disabledButtonOverlay,
          ...e
        })
      })]
    })
  }
  renderProgressBar() {
    let {
      hideProgress: e,
      dispatchState: t
    } = this.props;
    if (e) return null;
    let n = S.convertToTransitionState(t);
    if (null == n) return null;
    let s = n.type === M.LocalDispatchApplicationStates.UNINSTALLING ? d.Progress.INDETERMINATE : S.calculateProgressPercentage(Number(n.progress), Number(n.total));
    return (0, i.jsx)(d.Progress, {
      percent: s,
      size: d.Progress.Sizes.XSMALL,
      foregroundColor: n.paused ? u.default.unsafe_rawColors.PRIMARY_500.css : u.default.unsafe_rawColors.GREEN_360.css,
      backgroundColor: u.default.unsafe_rawColors.TRANSPARENT.css,
      className: R.progress
    })
  }
  renderActionButton(e, t) {
    let {
      className: n,
      fullWidth: s,
      size: a,
      color: l,
      isCloudSyncing: r
    } = this.props;
    return (0, i.jsxs)(d.Button, {
      className: n,
      fullWidth: s,
      size: a,
      color: null != l ? l : d.Button.Colors.GREEN,
      hover: null != l ? d.Button.Hovers.GREEN : d.Button.Hovers.DEFAULT,
      submitting: "uninstalling" === e || r,
      onClick: e => this.handleClick(e, t),
      children: [this.getText(e), this.renderProgressBar()]
    })
  }
  render() {
    let {
      hasNoBuild: e,
      libraryApplication: t
    } = this.props, n = this.getButtonState();
    if ("play" === n) return this.renderPlayButton();
    if ("preorder_wait" === n) return this.renderDisabledButton(n, function(e) {
      let t = A.getReadablePreorderReleaseDate(e.sku);
      return null != t ? O.default.Messages.GAME_ACTION_BUTTON_PREORDER_WAIT_TOOLTIP.format({
        date: t
      }) : null
    }(t));
    if ("unsupported_os" === n) return this.renderDisabledButton(n, O.default.Messages.GAME_ACTION_BUTTON_UNAVAILABLE_TOOLTIP.format({
      operatingSystem: O.default.Messages.WINDOWS
    }));
    if ("install" === n && e) return this.renderDisabledButton(n, O.default.Messages.GAME_ACTION_BUTTON_CANNOT_INSTALL);
    let s = this.onClickHandlers[n];
    return null == s ? this.renderDisabledButton(n) : this.renderActionButton(n, s)
  }
  constructor(...e) {
    super(...e), v(this, "_uninstallStringIndex", null), v(this, "handleAddToLibrary", async () => {
      try {
        let {
          libraryApplication: e
        } = this.props;
        await c.updateFlags(e.id, e.branchId, e.getFlags() & ~M.LibraryApplicationFlags.HIDDEN), (0, _.transitionTo)(M.Routes.APPLICATION_LIBRARY)
      } catch (e) {
        new f.default("LibraryApplicationButton").error(e)
      }
    }), v(this, "handleInstall", () => {
      let {
        libraryApplication: e,
        source: t
      } = this.props;
      h.installApplication(e.id, e.branchId, t)
    }), v(this, "handleUpdate", () => {
      let {
        libraryApplication: e
      } = this.props;
      h.updateApplication(e.id, e.branchId)
    }), v(this, "onClickHandlers", {
      add_to_library: this.handleAddToLibrary,
      install: this.handleInstall,
      update: this.handleUpdate
    }), v(this, "handleClick", (e, t) => {
      let {
        onClick: n
      } = this.props;
      null == n || n(e), t(e)
    })
  }
}

function x(e) {
  let {
    libraryApplication: t
  } = e, n = (0, E.useAnalyticsContext)(), [s, a] = (0, o.useStateFromStoresArray)([N.default, p.default], () => [(0, I.getDefaultLibraryApplicationAction)(t, N.default, p.default), N.default.getState(t.id, t.branchId)], [t]), l = (0, o.useStateFromStores)([m.default], () => m.default.isSyncing(t.id, t.branchId), [t]), r = (0, o.useStateFromStores)([T.default], () => T.default.hasNoBuild(t.id, t.branchId), [t]);
  return (0, i.jsx)(D, {
    ...e,
    analyticsContext: n,
    actionState: s,
    dispatchState: a,
    isCloudSyncing: l,
    hasNoBuild: r
  })
}
v(D, "defaultProps", {
  fullWidth: !1,
  size: d.Button.Sizes.LARGE,
  hideProgress: !1,
  isPlayShiny: !1,
  tooltipPosition: "top"
}), v(D, "ButtonStates", s)