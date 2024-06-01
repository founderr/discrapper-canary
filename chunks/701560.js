"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("47120"), n("411104");
var s, a = n("735250"),
  l = n("470079"),
  i = n("120356"),
  r = n.n(i),
  o = n("442837"),
  u = n("481060"),
  d = n("239091"),
  c = n("2052"),
  E = n("594190"),
  f = n("592745"),
  _ = n("757266"),
  T = n("417363"),
  m = n("976644"),
  I = n("86813"),
  N = n("358085"),
  p = n("346329"),
  S = n("981631"),
  C = n("689938"),
  A = n("2050");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class g extends(s = l.PureComponent) {
  get analyticsLocation() {
    return {
      ...this.props.analyticsContext.location,
      object: S.AnalyticsObjects.BUTTON_CTA
    }
  }
  renderDropdown() {
    let {
      dispatchState: e
    } = this.props;
    return null != e && null != e.launchOptions && Object.keys(e.launchOptions).length > 1 ? (0, a.jsxs)(u.Clickable, {
      "aria-label": C.default.Messages.APPLICATION_CONTEXT_MENU_LAUNCH_OPTIONS,
      className: A.dropdownArrowHitbox,
      onClick: this.handleDropdownClick,
      children: [(0, a.jsx)("div", {
        className: A.arrowSeparator
      }), (0, a.jsx)(I.default, {
        className: A.dropdownArrow
      })]
    }) : null
  }
  renderDisabledButton(e, t) {
    let {
      className: n,
      fullWidth: s,
      size: l,
      customDisabledColor: i,
      tooltipPosition: r
    } = this.props;
    return (0, a.jsxs)("div", {
      className: A.disabledButtonWrapper,
      children: [(0, a.jsx)(u.Button, {
        className: n,
        fullWidth: s,
        size: l,
        color: null != i ? i : A.disabledButtonColor,
        disabled: !0,
        children: e
      }), (0, a.jsx)(u.Tooltip, {
        text: t,
        position: r,
        children: e => (0, a.jsx)("div", {
          className: A.disabledButtonOverlay,
          ...e
        })
      })]
    })
  }
  render() {
    let {
      className: e,
      fullWidth: t,
      size: n,
      color: s,
      isLaunchable: l,
      isLaunching: i,
      isRunning: o,
      isShiny: d,
      hideNotLaunchable: c
    } = this.props;
    if (!l) return c ? null : this.renderDisabledButton(C.default.Messages.GAME_ACTION_BUTTON_PLAY, N.isPlatformEmbedded ? C.default.Messages.GAME_ACTION_BUTTON_GAME_NOT_DETECTED : C.default.Messages.GAME_ACTION_BUTTON_PLAY_DISABLED_DESKTOP_APP);
    if (o) return this.renderDisabledButton(C.default.Messages.GAME_ACTION_BUTTON_NOW_PLAYING);
    let E = d ? m.default : u.Button;
    return (0, a.jsxs)(E, {
      className: r()(A.playButton, e),
      innerClassName: A.playButtonContents,
      fullWidth: t,
      size: n,
      color: null != s ? s : u.Button.Colors.GREEN,
      submitting: i,
      onClick: this.handleClick,
      children: [(0, a.jsx)("div", {
        className: A.buttonText,
        children: C.default.Messages.GAME_ACTION_BUTTON_PLAY
      }), this.renderDropdown()]
    })
  }
  constructor(...e) {
    super(...e), h(this, "handleDropdownClick", e => {
      e.stopPropagation();
      let {
        libraryApplication: t,
        onDropdownOpen: s,
        onDropdownClose: l
      } = this.props;
      if (null == s || s(e), null == t) throw Error("Unexpected missing libraryApplication");
      d.openContextMenuLazy(e, async () => {
        let {
          default: e
        } = await n.e("53195").then(n.bind(n, "918306"));
        return n => (0, a.jsx)(e, {
          ...n,
          libraryApplication: t,
          onPlay: this.handleClick
        })
      }, {
        onClose: l
      })
    }), h(this, "handleClick", () => {
      let {
        applicationId: e,
        libraryApplication: t,
        analyticsListSort: n,
        analyticsListIndex: s
      } = this.props;
      p.playApplication(e, t, {
        analyticsParams: {
          location: this.analyticsLocation,
          list_sort: n,
          list_index: s
        }
      })
    })
  }
}

function M(e) {
  let {
    applicationId: t,
    libraryApplication: n
  } = e, s = (0, c.useAnalyticsContext)(), [l, i] = (0, o.useStateFromStoresArray)([_.default, f.default, T.default], () => [_.default.isConnected(t) || f.default.isLaunchable(t) || null != n && T.default.isLaunchable(n.id, n.branchId), f.default.launchingGames.has(t)], [t, n]), r = (0, o.useStateFromStores)([E.default], () => new Set(E.default.getRunningVerifiedApplicationIds()).has(t), [t]), u = (0, o.useStateFromStores)([T.default], () => null != n ? T.default.getState(n.id, n.branchId) : null, [n]);
  return (0, a.jsx)(g, {
    ...e,
    analyticsContext: s,
    isLaunchable: l,
    isLaunching: i,
    isRunning: r,
    dispatchState: u
  })
}
h(g, "defaultProps", {
  fullWidth: !1,
  size: u.Button.Sizes.LARGE,
  tooltipPosition: "top",
  isShiny: !1,
  hideNotLaunchable: !1
})