n(47120);
var i = n(735250),
    s = n(470079),
    a = n(13245),
    o = n(593481),
    r = n(692546),
    l = n(981631),
    c = n(668697);
function d(e, t, n) {
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
class u extends s.Component {
    getStyle() {
        let e, t, n, i;
        let {
            props: { position: s, zIndex: a }
        } = this;
        switch (s) {
            case l._vf.TOP_LEFT:
            case l._vf.BOTTOM_LEFT:
                e = 0;
                break;
            default:
                t = 0;
        }
        switch (s) {
            case l._vf.BOTTOM_LEFT:
            case l._vf.BOTTOM_RIGHT:
                n = 0;
                break;
            default:
                i = 0;
        }
        return {
            left: e,
            right: t,
            bottom: n,
            top: i,
            zIndex: a
        };
    }
    render() {
        let {
                props: {
                    locked: e,
                    index: t,
                    notification: {
                        props: { onNotificationShow: n, onDismissClick: s, onNotificationClick: a, onConfirmClick: l, onCancelClick: d, ...u }
                    }
                }
            } = this,
            h = (0, i.jsx)('div', {
                className: c.notificationContainer,
                children: (0, i.jsx)(o.ZP, {
                    ...u,
                    onNotificationShow: 0 === t ? this.handleNotificationShow : null,
                    onDismissClick: this.handleDismissClick,
                    onNotificationClick: null != a ? this.handleNotificationClick : null,
                    onConfirmClick: null != l ? this.handleConfirmClick : null,
                    onCancelClick: null != d ? this.handleCancelClick : null,
                    expand: !e && 0 === t
                })
            });
        return 0 === t
            ? (0, i.jsx)(r.Z, {
                  observeInterval: 200,
                  children: h
              })
            : h;
    }
    constructor(...e) {
        super(...e),
            d(this, 'handleNotificationShow', () => {
                let {
                    id: e,
                    props: { onNotificationShow: t }
                } = this.props.notification;
                t(e);
            }),
            d(this, 'handleDismissClick', (e) => {
                let {
                    id: t,
                    props: { onDismissClick: n }
                } = this.props.notification;
                a.Z.updateNotificationStatus(t), null != n && n(e, t);
            }),
            d(this, 'handleNotificationClick', (e) => {
                let {
                    id: t,
                    props: { onNotificationClick: n }
                } = this.props.notification;
                null != n && n(e, t);
            }),
            d(this, 'handleConfirmClick', (e) => {
                let {
                    id: t,
                    props: { onConfirmClick: n }
                } = this.props.notification;
                null != n && n(e, t);
            }),
            d(this, 'handleCancelClick', (e) => {
                let {
                    id: t,
                    props: { onCancelClick: n }
                } = this.props.notification;
                null != n && n(e, t);
            });
    }
}
t.Z = u;
