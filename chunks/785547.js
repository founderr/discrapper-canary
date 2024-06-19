n.d(t, {
  Z: function() {
    return P
  }
}), n(411104), n(47120);
var s, i, l, a = n(735250),
  r = n(470079),
  o = n(442837),
  c = n(692547),
  u = n(481060),
  d = n(58642),
  E = n(2052),
  _ = n(710845),
  I = n(703656),
  T = n(173747),
  N = n(7956),
  m = n(293245),
  h = n(417363),
  C = n(941128),
  S = n(780570),
  A = n(358085),
  p = n(814225),
  g = n(346329),
  f = n(701560),
  O = n(981631),
  R = n(689938),
  M = n(329279);

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(l = s || (s = {})).PLAY = "play", l.NOW_PLAYING = "now_playing", l.INSTALL = "install", l.UPDATE = "update", l.PAUSED = "paused", l.LOCATE = "locate", l.UNINSTALLING = "uninstalling", l.QUEUED = "queued", l.DOWNLOADING = "downloading", l.UNSUPPORTED_OS = "unsupported_os", l.ADD_TO_LIBRARY = "add_to_library", l.PREORDER_WAIT = "preorder_wait";
let v = Object.freeze({
    [O.apO.PLAY]: "play",
    [O.apO.INSTALL]: "install",
    [O.apO.UPDATE]: "update",
    [O.apO.PAUSE]: "downloading",
    [O.apO.MOVE_UP]: "queued",
    [O.apO.RESUME]: "paused"
  }),
  L = () => [R.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_1, R.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_2, R.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_3, R.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_4, R.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_5, R.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_6, R.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_7, R.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_8, R.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_9, R.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_10];
class Z extends(i = r.Component) {
  get analyticsLocation() {
    return {
      ...this.props.analyticsContext.location,
      object: O.qAy.BUTTON_CTA
    }
  }
  getText(e) {
    switch ("uninstalling" !== e && (this._uninstallStringIndex = null), e) {
      case "install":
      case "unsupported_os":
        return R.Z.Messages.GAME_ACTION_BUTTON_INSTALL;
      case "update":
        return R.Z.Messages.GAME_ACTION_BUTTON_UPDATE;
      case "paused":
        return R.Z.Messages.GAME_ACTION_BUTTON_PAUSED;
      case "locate":
        return R.Z.Messages.GAME_ACTION_BUTTON_LOCATE;
      case "uninstalling":
        let t = L();
        return null == this._uninstallStringIndex && (this._uninstallStringIndex = Math.floor(Math.random() * t.length)), t[this._uninstallStringIndex];
      case "queued":
        return R.Z.Messages.GAME_ACTION_BUTTON_QUEUED;
      case "downloading":
        return R.Z.Messages.GAME_ACTION_BUTTON_DOWNLOADING;
      case "preorder_wait":
        return R.Z.Messages.GAME_ACTION_BUTTON_PREORDER_WAIT;
      case "add_to_library":
        return R.Z.Messages.GAME_ACTION_BUTTON_ADD_TO_LIBRARY;
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
    let s = null != n ? v[n] : null;
    return null != s ? s : null != t && t.type === O.vxO.UNINSTALLING ? "uninstalling" : (0, A.isWeb)() ? "play" : "unsupported_os"
  }
  renderPlayButton() {
    let {
      libraryApplication: e,
      fullWidth: t,
      size: n,
      color: s,
      customDisabledColor: i,
      isPlayShiny: l,
      onDropdownOpen: r,
      onDropdownClose: o,
      analyticsListSort: c,
      analyticsListIndex: u
    } = this.props;
    return (0, a.jsx)(f.Z, {
      applicationId: e.id,
      libraryApplication: e,
      fullWidth: t,
      size: n,
      color: s,
      customDisabledColor: i,
      isShiny: l,
      onDropdownOpen: r,
      onDropdownClose: o,
      analyticsListSort: c,
      analyticsListIndex: u
    })
  }
  renderDisabledButton(e, t) {
    let {
      className: n,
      fullWidth: s,
      size: i,
      customDisabledColor: l,
      tooltipPosition: r
    } = this.props;
    return (0, a.jsxs)("div", {
      className: M.disabledButtonWrapper,
      children: [(0, a.jsxs)(u.Button, {
        className: n,
        fullWidth: s,
        size: i,
        color: null != l ? l : M.disabledButtonColor,
        disabled: !0,
        children: [this.getText(e), this.renderProgressBar()]
      }), (0, a.jsx)(u.Tooltip, {
        text: t,
        position: r,
        children: e => (0, a.jsx)("div", {
          className: M.disabledButtonOverlay,
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
    let n = S.KJ(t);
    if (null == n) return null;
    let s = n.type === O.vxO.UNINSTALLING ? u.Progress.INDETERMINATE : S.xI(Number(n.progress), Number(n.total));
    return (0, a.jsx)(u.Progress, {
      percent: s,
      size: u.Progress.Sizes.XSMALL,
      foregroundColor: n.paused ? c.Z.unsafe_rawColors.PRIMARY_500.css : c.Z.unsafe_rawColors.GREEN_360.css,
      backgroundColor: c.Z.unsafe_rawColors.TRANSPARENT.css,
      className: M.progress
    })
  }
  renderActionButton(e, t) {
    let {
      className: n,
      fullWidth: s,
      size: i,
      color: l,
      isCloudSyncing: r
    } = this.props;
    return (0, a.jsxs)(u.Button, {
      className: n,
      fullWidth: s,
      size: i,
      color: null != l ? l : u.Button.Colors.GREEN,
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
      let t = p.en(e.sku);
      return null != t ? R.Z.Messages.GAME_ACTION_BUTTON_PREORDER_WAIT_TOOLTIP.format({
        date: t
      }) : null
    }(t));
    if ("unsupported_os" === n) return this.renderDisabledButton(n, R.Z.Messages.GAME_ACTION_BUTTON_UNAVAILABLE_TOOLTIP.format({
      operatingSystem: R.Z.Messages.WINDOWS
    }));
    if ("install" === n && e) return this.renderDisabledButton(n, R.Z.Messages.GAME_ACTION_BUTTON_CANNOT_INSTALL);
    let s = this.onClickHandlers[n];
    return null == s ? this.renderDisabledButton(n) : this.renderActionButton(n, s)
  }
  constructor(...e) {
    super(...e), x(this, "_uninstallStringIndex", null), x(this, "handleAddToLibrary", async () => {
      try {
        let {
          libraryApplication: e
        } = this.props;
        await d.h(e.id, e.branchId, e.getFlags() & ~O.eHb.HIDDEN), (0, I.uL)(O.Z5c.APPLICATION_LIBRARY)
      } catch (e) {
        new _.Z("LibraryApplicationButton").error(e)
      }
    }), x(this, "handleInstall", () => {
      let {
        libraryApplication: e,
        source: t
      } = this.props;
      g.installApplication(e.id, e.branchId, t)
    }), x(this, "handleUpdate", () => {
      let {
        libraryApplication: e
      } = this.props;
      g.updateApplication(e.id, e.branchId)
    }), x(this, "onClickHandlers", {
      add_to_library: this.handleAddToLibrary,
      install: this.handleInstall,
      update: this.handleUpdate
    }), x(this, "handleClick", (e, t) => {
      let {
        onClick: n
      } = this.props;
      null == n || n(e), t(e)
    })
  }
}

function P(e) {
  let {
    libraryApplication: t
  } = e, n = (0, E.O)(), [s, i] = (0, o.Wu)([h.Z, C.Z], () => [(0, N.i)(t, h.Z, C.Z), h.Z.getState(t.id, t.branchId)], [t]), l = (0, o.e7)([m.Z], () => m.Z.isSyncing(t.id, t.branchId), [t]), r = (0, o.e7)([T.Z], () => T.Z.hasNoBuild(t.id, t.branchId), [t]);
  return (0, a.jsx)(Z, {
    ...e,
    analyticsContext: n,
    actionState: s,
    dispatchState: i,
    isCloudSyncing: l,
    hasNoBuild: r
  })
}
x(Z, "defaultProps", {
  fullWidth: !1,
  size: u.Button.Sizes.LARGE,
  hideProgress: !1,
  isPlayShiny: !1,
  tooltipPosition: "top"
}), x(Z, "ButtonStates", s)