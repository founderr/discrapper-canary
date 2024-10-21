n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651),
    s = n(192379),
    a = n(846519),
    l = n(689938);
function r(e) {
    return ''.concat(e).length < 13 ? 1000 * e : e;
}
function o(e) {
    return class extends s.PureComponent {
        componentDidMount() {
            this._interval.start(1000, () => this.setState(this.getUpdatedTime()));
        }
        componentWillUnmount() {
            this._interval.stop();
        }
        componentDidUpdate(e) {
            (e.timestamps.end !== this.props.timestamps.end || e.timestamps.start !== this.props.timestamps.start) && this.setState(this.getUpdatedTime());
        }
        getUpdatedTime() {
            let { timestamps: e } = this.props,
                t = Date.now() / 1000;
            return null != e.end
                ? this.getDiff(t, r(e.end) / 1000)
                : null != e.start
                  ? this.getDiff(r(e.start) / 1000, t)
                  : {
                        hours: 0,
                        minutes: 0,
                        seconds: 0
                    };
        }
        renderTime(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return t && e <= 0 ? -1 : e < 10 ? '0'.concat(e) : e;
        }
        getDiff(e, t) {
            let n = Math.max(t - e, 0),
                i = Math.floor(n) % 60,
                s = Math.floor(n / 60) % 60;
            return {
                hours: Math.floor(n / 3600) % 24,
                minutes: s,
                seconds: i
            };
        }
        render() {
            let { timestamps: t, ...n } = this.props,
                { hours: s, minutes: a, seconds: r } = this.state,
                o = {
                    hours: this.renderTime(s, !0),
                    minutes: this.renderTime(a),
                    seconds: this.renderTime(r)
                };
            return null != t.end
                ? (0, i.jsx)(e, {
                      ...n,
                      message: l.Z.Messages.USER_ACTIVITY_TIMESTAMP_END.format(o)
                  })
                : null != t.start
                  ? (0, i.jsx)(e, {
                        ...n,
                        message: l.Z.Messages.USER_ACTIVITY_TIMESTAMP_START.format(o)
                    })
                  : null;
        }
        constructor(e) {
            var t, n, i;
            super(e),
                (t = this),
                (i = void 0),
                (n = '_interval') in t
                    ? Object.defineProperty(t, n, {
                          value: i,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0
                      })
                    : (t[n] = i),
                (this._interval = new a.Xp()),
                (this.state = { ...this.getUpdatedTime() });
        }
    };
}
