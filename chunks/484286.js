var r,
    i = n(47120);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(869035);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class d extends (r = o.PureComponent) {
    static getDerivedStateFromProps(e, t) {
        let { streamId: n } = e;
        if (t.aReady) {
            if (n !== t.aStreamId)
                return null == n
                    ? {
                          bStreamId: n,
                          bReady: !0,
                          aStreamId: null,
                          aReady: !1
                      }
                    : {
                          bStreamId: n,
                          bReady: !1
                      };
        } else if (n !== t.bStreamId)
            return null == n
                ? {
                      aStreamId: n,
                      aReady: !0,
                      bStreamId: null,
                      bReady: !1
                  }
                : {
                      aStreamId: n,
                      aReady: !1
                  };
        return null;
    }
    renderVideo(e, t) {
        let { children: n, mirror: r, paused: i, component: s } = this.props;
        if (null == e) {
            if (null == n) return null;
            let e = o.Children.only(n);
            return o.cloneElement(e, {
                style: { display: t && !r ? void 0 : 'none' },
                ...e.props
            });
        }
        return (0, a.jsx)(s, {
            paused: i,
            className: u.media,
            streamId: e,
            onReady: t ? null : this.handleReady
        });
    }
    render() {
        let { mirror: e, className: t } = this.props;
        return (0, a.jsxs)('div', {
            className: l()(u.video, t, { [u.mirror]: e }),
            onDoubleClick: this.handleDoubleClick,
            onContextMenu: this.handleContextMenu,
            children: [this.renderVideo(this.state.aStreamId, this.state.aReady), this.renderVideo(this.state.bStreamId, this.state.bReady)]
        });
    }
    constructor(...e) {
        super(...e),
            c(this, 'state', {
                aStreamId: null,
                aReady: !1,
                bStreamId: this.props.streamId,
                bReady: !0
            }),
            c(this, 'handleReady', () => {
                this.state.aReady
                    ? this.setState({
                          bReady: !0,
                          aStreamId: null,
                          aReady: !1
                      })
                    : this.setState({
                          aReady: !0,
                          bStreamId: null,
                          bReady: !1
                      });
            }),
            c(this, 'handleDoubleClick', (e) => {
                let { onDoubleClick: t, id: n } = this.props;
                null == t || t(e, n);
            }),
            c(this, 'handleContextMenu', (e) => {
                let { onContextMenu: t, id: n } = this.props;
                null == t || t(e, n);
            });
    }
}
c(d, 'defaultProps', { paused: !0 }), (t.Z = d);
