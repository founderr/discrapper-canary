n.d(t, {
  Z: function() {
    return p
  }
}), n(47120), n(411104);
var s, i = n(735250),
  l = n(470079),
  a = n(120356),
  r = n.n(a),
  o = n(442837),
  c = n(481060),
  u = n(239091),
  d = n(2052),
  E = n(594190),
  _ = n(592745),
  I = n(757266),
  T = n(417363),
  m = n(358085),
  N = n(346329),
  h = n(981631),
  C = n(689938),
  S = n(199623);

function A(e, t, n) {
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
      object: h.qAy.BUTTON_CTA
    }
  }
  renderDropdown() {
    let {
      dispatchState: e
    } = this.props;
    return null != e && null != e.launchOptions && Object.keys(e.launchOptions).length > 1 ? (0, i.jsxs)(c.Clickable, {
      "aria-label": C.Z.Messages.APPLICATION_CONTEXT_MENU_LAUNCH_OPTIONS,
      className: S.dropdownArrowHitbox,
      onClick: this.handleDropdownClick,
      children: [(0, i.jsx)("div", {
        className: S.arrowSeparator
      }), (0, i.jsx)(c.ChevronSmallDownIcon, {
        size: "md",
        color: "currentColor",
        className: S.dropdownArrow
      })]
    }) : null
  }
  renderDisabledButton(e, t) {
    let {
      className: n,
      fullWidth: s,
      size: l,
      customDisabledColor: a,
      tooltipPosition: r
    } = this.props;
    return (0, i.jsxs)("div", {
      className: S.disabledButtonWrapper,
      children: [(0, i.jsx)(c.Button, {
        className: n,
        fullWidth: s,
        size: l,
        color: null != a ? a : S.disabledButtonColor,
        disabled: !0,
        children: e
      }), (0, i.jsx)(c.Tooltip, {
        text: t,
        position: r,
        children: e => (0, i.jsx)("div", {
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
      isLaunching: a,
      isRunning: o,
      isShiny: u,
      hideNotLaunchable: d
    } = this.props;
    if (!l) return d ? null : this.renderDisabledButton(C.Z.Messages.GAME_ACTION_BUTTON_PLAY, m.isPlatformEmbedded ? C.Z.Messages.GAME_ACTION_BUTTON_GAME_NOT_DETECTED : C.Z.Messages.GAME_ACTION_BUTTON_PLAY_DISABLED_DESKTOP_APP);
    if (o) return this.renderDisabledButton(C.Z.Messages.GAME_ACTION_BUTTON_NOW_PLAYING);
    let E = u ? c.ShinyButton : c.Button;
    return (0, i.jsxs)(E, {
      className: r()(S.playButton, e),
      innerClassName: S.playButtonContents,
      fullWidth: t,
      size: n,
      color: null != s ? s : c.Button.Colors.GREEN,
      submitting: a,
      onClick: this.handleClick,
      children: [(0, i.jsx)("div", {
        className: S.buttonText,
        children: C.Z.Messages.GAME_ACTION_BUTTON_PLAY
      }), this.renderDropdown()]
    })
  }
  constructor(...e) {
    super(...e), A(this, "handleDropdownClick", e => {
      e.stopPropagation();
      let {
        libraryApplication: t,
        onDropdownOpen: s,
        onDropdownClose: l
      } = this.props;
      if (null == s || s(e), null == t) throw Error("Unexpected missing libraryApplication");
      u.jW(e, async () => {
        let {
          default: e
        } = await n.e("53195").then(n.bind(n, 918306));
        return n => (0, i.jsx)(e, {
          ...n,
          libraryApplication: t,
          onPlay: this.handleClick
        })
      }, {
        onClose: l
      })
    }), A(this, "handleClick", () => {
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

function p(e) {
  let {
    applicationId: t,
    libraryApplication: n
  } = e, s = (0, d.O)(), [l, a] = (0, o.Wu)([I.Z, _.Z, T.Z], () => [I.Z.isConnected(t) || _.Z.isLaunchable(t) || null != n && T.Z.isLaunchable(n.id, n.branchId), _.Z.launchingGames.has(t)], [t, n]), r = (0, o.e7)([E.ZP], () => new Set(E.ZP.getRunningVerifiedApplicationIds()).has(t), [t]), c = (0, o.e7)([T.Z], () => null != n ? T.Z.getState(n.id, n.branchId) : null, [n]);
  return (0, i.jsx)(g, {
    ...e,
    analyticsContext: s,
    isLaunchable: l,
    isLaunching: a,
    isRunning: r,
    dispatchState: c
  })
}
A(g, "defaultProps", {
  fullWidth: !1,
  size: c.Button.Sizes.LARGE,
  tooltipPosition: "top",
  isShiny: !1,
  hideNotLaunchable: !1
})