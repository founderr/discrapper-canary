n.d(t, {
  E: function() {
    return v
  }
}), n(47120), n(724458), n(653041);
var l, i = n(735250),
  s = n(470079),
  r = n(120356),
  a = n.n(r),
  o = n(748780),
  u = n(442837),
  c = n(692547),
  d = n(215569),
  h = n(481060),
  g = n(812206),
  p = n(703656),
  m = n(417363),
  C = n(941128),
  E = n(366966),
  f = n(780570),
  _ = n(353042),
  I = n(981631),
  N = n(689938),
  Z = n(182216);

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let x = {
  [I.vxO.INSTALLING]: {
    [E.J6.NONE]: (e, t) => N.Z.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING.format({
      name: e
    }),
    [E.J6.SECONDS]: (e, t) => N.Z.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING_SECONDS.format({
      name: e,
      timeRemaining: t
    }),
    [E.J6.MINUTES]: (e, t) => N.Z.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING_MINUTES.format({
      name: e,
      timeRemaining: t
    }),
    [E.J6.HOURS]: (e, t) => N.Z.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING_HOURS.format({
      name: e,
      timeRemaining: t
    })
  },
  [I.vxO.UPDATING]: {
    [E.J6.NONE]: (e, t) => N.Z.Messages.APPLICATION_PROGRESS_INDICATOR_UPDATING.format({
      name: e
    }),
    [E.J6.SECONDS]: (e, t) => N.Z.Messages.APPLICATION_PROGRESS_INDICATOR_UPDATING_SECONDS.format({
      name: e,
      timeRemaining: t
    }),
    [E.J6.MINUTES]: (e, t) => N.Z.Messages.APPLICATION_PROGRESS_INDICATOR_UPDATING_MINUTES.format({
      name: e,
      timeRemaining: t
    }),
    [E.J6.HOURS]: (e, t) => N.Z.Messages.APPLICATION_PROGRESS_INDICATOR_UPDATING_HOURS.format({
      name: e,
      timeRemaining: t
    })
  },
  [I.vxO.REPAIRING]: {
    [E.J6.NONE]: (e, t) => N.Z.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING.format({
      name: e
    }),
    [E.J6.SECONDS]: (e, t) => N.Z.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING_SECONDS.format({
      name: e,
      timeRemaining: t
    }),
    [E.J6.MINUTES]: (e, t) => N.Z.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING_MINUTES.format({
      name: e,
      timeRemaining: t
    }),
    [E.J6.HOURS]: (e, t) => N.Z.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING_HOURS.format({
      name: e,
      timeRemaining: t
    })
  }
};
class T extends s.PureComponent {
  renderText() {
    let {
      state: e,
      isPaused: t
    } = this.props;
    if (e.type === I.vxO.UPDATING || e.type === I.vxO.REPAIRING || e.type === I.vxO.INSTALLING) {
      if (t) return N.Z.Messages.APPLICATION_PROGRESS_INDICATOR_PAUSED;
      if (e.stage === I.f07.PATCHING || e.stage === I.f07.REPAIRING) return (0, i.jsx)(_.Z, {
        getHistoricalTotalBytes: m.Z.getHistoricalTotalBytesWritten,
        updateInterval: 5e3,
        children: this.renderProgressBody
      })
    }
    return null
  }
  render() {
    let e = this.renderText();
    return null != e ? e : N.Z.Messages.LIBRARY
  }
  constructor(...e) {
    super(...e), S(this, "renderProgressBody", (e, t) => {
      let {
        state: n,
        application: l
      } = this.props, {
        stage: i,
        progress: s,
        total: r,
        type: a
      } = n;
      if (null == s || null == r || null == i) return null;
      let o = e[e.length - 1] / t * 1e3,
        u = 0 !== o ? Math.max(1, (r - s) / o) : null,
        c = x[a],
        d = null != c ? Object.keys(c) : [],
        {
          unit: h,
          time: g
        } = (0, E.CI)(null != u ? u / 60 : null, d);
      if (null != c && null != h) {
        let e = c[h];
        return null != e ? e(l.name, g) : null
      }
      return null
    })
  }
}
class L extends(l = s.PureComponent) {
  componentWillAppear(e) {
    this.state.animationScale.setValue(1), e()
  }
  componentWillEnter(e) {
    o.Z.spring(this.state.animationScale, {
      toValue: 1,
      duration: 200
    }).start(e)
  }
  componentWillLeave(e) {
    o.Z.spring(this.state.animationScale, {
      toValue: 0,
      duration: 200
    }).start(e)
  }
  getTooltipText() {
    let {
      firstApplication: e,
      firstState: t,
      isPaused: n
    } = this.props;
    return null == e || null == t ? N.Z.Messages.LIBRARY : (0, i.jsx)(T, {
      application: e,
      state: t,
      isPaused: n
    })
  }
  render() {
    let {
      percent: e,
      isPaused: t,
      className: n
    } = this.props;
    return (0, i.jsx)(o.Z.div, {
      style: {
        transform: [{
          scale: this.state.animationScale
        }]
      },
      className: a()(n, Z.progressContainer),
      onClick: this.handleOnClick,
      children: (0, i.jsx)(h.Tooltip, {
        text: this.getTooltipText(),
        position: "right",
        "aria-label": !1,
        children: n => (0, i.jsx)("div", {
          ...n,
          children: (0, i.jsx)(h.ProgressCircle, {
            percent: e,
            colorOverride: t ? c.Z.unsafe_rawColors.PRIMARY_500.css : null,
            children: (0, i.jsx)(h.DownloadIcon, {
              size: "md",
              color: "currentColor",
              className: Z.downloadIcon
            })
          })
        })
      })
    })
  }
  constructor(...e) {
    super(...e), S(this, "state", {
      animationScale: new o.Z.Value(0)
    }), S(this, "handleOnClick", e => {
      let {
        onClick: t
      } = this.props;
      e.preventDefault(), e.stopPropagation(), null != t && t(e), (0, p.uL)(I.Z5c.APPLICATION_LIBRARY)
    })
  }
}
S(L, "defaultProps", {
  strokeSize: h.ProgressCircle.StrokeSizes.MEDIUM
});

function v(e, t) {
  return e.reduce((e, n) => {
    let {
      applicationId: l,
      branchId: i
    } = n, s = t.getState(l, i);
    return null != s && e.push(s), e
  }, [])
}
t.Z = u.ZP.connectStores([C.Z, m.Z, g.Z], () => {
  let e = C.Z.activeItems,
    t = v(e, m.Z),
    {
      total: n,
      progress: l
    } = f.lK(t);
  return {
    percent: f.xI(l, n),
    isPaused: C.Z.paused,
    firstApplication: e.length > 0 ? g.Z.getApplication(e[0].applicationId) : null,
    firstState: t.length > 0 ? t[0] : null
  }
})(e => {
  let {
    determineOwnVisibility: t = !0,
    ...n
  } = e;
  return t ? (0, i.jsx)(d.W, {
    component: s.Fragment,
    children: n.percent > 0 && n.percent < 100 ? (0, i.jsx)(L, {
      ...n
    }) : null
  }) : (0, i.jsx)(L, {
    ...n
  })
})