"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
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
  f = n("594190"),
  E = n("592745"),
  _ = n("757266"),
  T = n("417363"),
  m = n("86813"),
  I = n("358085"),
  N = n("346329"),
  p = n("981631"),
  h = n("689938"),
  S = n("2050");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class A extends(s = l.PureComponent) {
  get analyticsLocation() {
    return {
      ...this.props.analyticsContext.location,
      object: p.AnalyticsObjects.BUTTON_CTA
    }
  }
  renderDropdown() {
    let {
      dispatchState: e
    } = this.props;
    return null != e && null != e.launchOptions && Object.keys(e.launchOptions).length > 1 ? (0, a.jsxs)(u.Clickable, {
      "aria-label": h.default.Messages.APPLICATION_CONTEXT_MENU_LAUNCH_OPTIONS,
      className: S.dropdownArrowHitbox,
      onClick: this.handleDropdownClick,
      children: [(0, a.jsx)("div", {
        className: S.arrowSeparator
      }), (0, a.jsx)(m.default, {
        className: S.dropdownArrow
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
      className: S.disabledButtonWrapper,
      children: [(0, a.jsx)(u.Button, {
        className: n,
        fullWidth: s,
        size: l,
        color: null != i ? i : S.disabledButtonColor,
        disabled: !0,
        children: e
      }), (0, a.jsx)(u.Tooltip, {
        text: t,
        position: r,
        children: e => (0, a.jsx)("div", {
          className: S.disabledButtonOverlay,
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
    if (!l) return c ? null : this.renderDisabledButton(h.default.Messages.GAME_ACTION_BUTTON_PLAY, I.isPlatformEmbedded ? h.default.Messages.GAME_ACTION_BUTTON_GAME_NOT_DETECTED : h.default.Messages.GAME_ACTION_BUTTON_PLAY_DISABLED_DESKTOP_APP);
    if (o) return this.renderDisabledButton(h.default.Messages.GAME_ACTION_BUTTON_NOW_PLAYING);
    let f = d ? u.ShinyButton : u.Button;
    return (0, a.jsxs)(f, {
      className: r()(S.playButton, e),
      innerClassName: S.playButtonContents,
      fullWidth: t,
      size: n,
      color: null != s ? s : u.Button.Colors.GREEN,
      submitting: i,
      onClick: this.handleClick,
      children: [(0, a.jsx)("div", {
        className: S.buttonText,
        children: h.default.Messages.GAME_ACTION_BUTTON_PLAY
      }), this.renderDropdown()]
    })
  }
  constructor(...e) {
    super(...e), C(this, "handleDropdownClick", e => {
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
    }), C(this, "handleClick", () => {
      let {
        applicationId: e,
        libraryApplication: t,
        analyticsListSort: n,
        analyticsListIndex: s
      } = this.props;
      N.playApplication(e, t, {
        analyticsParams: {
          location: this.analyticsLocation,
          list_sort: n,
          list_index: s
        }
      })
    })
  }
}

function g(e) {
  let {
    applicationId: t,
    libraryApplication: n
  } = e, s = (0, c.useAnalyticsContext)(), [l, i] = (0, o.useStateFromStoresArray)([_.default, E.default, T.default], () => [_.default.isConnected(t) || E.default.isLaunchable(t) || null != n && T.default.isLaunchable(n.id, n.branchId), E.default.launchingGames.has(t)], [t, n]), r = (0, o.useStateFromStores)([f.default], () => new Set(f.default.getRunningVerifiedApplicationIds()).has(t), [t]), u = (0, o.useStateFromStores)([T.default], () => null != n ? T.default.getState(n.id, n.branchId) : null, [n]);
  return (0, a.jsx)(A, {
    ...e,
    analyticsContext: s,
    isLaunchable: l,
    isLaunching: i,
    isRunning: r,
    dispatchState: u
  })
}
C(A, "defaultProps", {
  fullWidth: !1,
  size: u.Button.Sizes.LARGE,
  tooltipPosition: "top",
  isShiny: !1,
  hideNotLaunchable: !1
})