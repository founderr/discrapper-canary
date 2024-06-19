n(47120);
var i = n(735250),
  s = n(470079),
  l = n(442837),
  a = n(846519),
  r = n(481060),
  o = n(293245),
  c = n(863969),
  u = n(563593),
  d = n(981631),
  E = n(689938);
let h = (0, r.makeIconCompat)(c.Z),
  _ = (0, r.makeIconCompat)(u.Z),
  I = new Set([d.TzF.PUSHING, d.TzF.PULLING]),
  m = Object.freeze({
    [d.TzF.DONE]: h,
    [d.TzF.PLANNING]: h,
    [d.TzF.PREPARING]: h,
    [d.TzF.PUSHING]: r.UploadIcon,
    [d.TzF.PULLING]: r.DownloadIcon,
    [d.TzF.CONFLICT]: h,
    [d.TzF.ERROR]: h
  });
class g extends s.PureComponent {
  componentDidMount() {
    this.getIsRecentlySynced() && this.setRecentlySyncedTimeout()
  }
  componentDidUpdate(e) {
    null != this.props.cloudSyncState && this.props.cloudSyncState.type === d.TzF.DONE && null != this.props.cloudSyncState.timestamp && (null == e.cloudSyncState || null == e.cloudSyncState.timestamp) && this.setRecentlySyncedTimeout()
  }
  componentWillUnmount() {
    this._doneTimer.stop()
  }
  setRecentlySyncedTimeout() {
    this._doneTimer.start(2e3, () => this.forceUpdate())
  }
  getIsRecentlySynced() {
    let {
      cloudSyncState: e
    } = this.props;
    if (null != e && e.type === d.TzF.DONE) {
      let t = e.timestamp;
      return null != t && Date.now() - t <= 2e3
    }
    return !1
  }
  getStop(e, t) {
    if (t) return 1;
    if (e.type === d.TzF.PUSHING || e.type === d.TzF.PULLING) {
      let {
        progress: t,
        total: n
      } = e;
      return t / n
    }
    return 0
  }
  getTooltip(e, t) {
    switch (e.type) {
      case d.TzF.DONE:
        if (t) return E.Z.Messages.CLOUD_SYNC_ICON_TOOLTIP_DONE;
        return E.Z.Messages.CLOUD_SYNC_ICON_TOOLTIP_SUPPORTED;
      case d.TzF.CONFLICT:
      case d.TzF.ERROR:
        return E.Z.Messages.CLOUD_SYNC_ICON_TOOLTIP_SUPPORTED;
      case d.TzF.PLANNING:
        return E.Z.Messages.CLOUD_SYNC_ICON_TOOLTIP_PLANNING;
      case d.TzF.PREPARING:
        return E.Z.Messages.CLOUD_SYNC_ICON_TOOLTIP_PREPARING;
      case d.TzF.PUSHING:
        return E.Z.Messages.CLOUD_SYNC_ICON_TOOLTIP_PUSHING;
      case d.TzF.PULLING:
        return E.Z.Messages.CLOUD_SYNC_ICON_TOOLTIP_PULLING;
      default:
        return null
    }
  }
  render() {
    let {
      cloudSyncState: e,
      libraryApplication: t,
      className: n
    } = this.props, s = null == e ? {
      type: d.TzF.DONE
    } : e, l = this.getIsRecentlySynced(), a = {};
    (I.has(s.type) || l) && (a.gradientConfig = {
      id: t.id,
      startColor: "rgba(199, 208, 240, 1)",
      stopColor: "rgba(114, 137, 218, 1)",
      stop: this.getStop(s, l)
    });
    let o = l ? _ : m[s.type];
    return (0, i.jsx)(r.Tooltip, {
      text: this.getTooltip(s, l),
      children: e => (0, i.jsx)(o, {
        className: n,
        ...a,
        ...e
      })
    })
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "_doneTimer", i = new a.V7, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.Z = l.ZP.connectStores([o.Z], e => {
  let {
    libraryApplication: t
  } = e;
  return {
    cloudSyncState: o.Z.getState(t.id, t.branchId)
  }
})(g)