t.d(n, {
    Z: function () {
        return l;
    }
}),
    t(47120);
var a = t(735250),
    r = t(470079),
    s = t(481060);
function i(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = t),
        e
    );
}
class o extends r.PureComponent {
    render() {
        let { text: e, lastItem: n, className: t } = this.props;
        return (0, a.jsxs)('span', {
            children: [
                (0, a.jsx)(s.Anchor, {
                    className: t,
                    onClick: this.handleClick,
                    children: e
                }),
                n ? '' : ', '
            ]
        });
    }
    constructor(...e) {
        super(...e),
            i(this, 'handleClick', () => {
                let { onClick: e, index: n } = this.props;
                null == e || e(n);
            });
    }
}
class l extends r.PureComponent {
    render() {
        let e = this.props.artists.split(';');
        if (!this.props.canOpen) return e.join(', ');
        let n = e.length - 1;
        return e.map((e, t) =>
            (0, a.jsx)(
                o,
                {
                    text: e,
                    index: t,
                    lastItem: t === n,
                    onClick: this.handleOpenSpotifyArtist,
                    className: this.props.linkClassName
                },
                'spotify-artist-'.concat(t)
            )
        );
    }
    constructor(...e) {
        super(...e),
            i(this, 'handleOpenSpotifyArtist', (e) => {
                let { onOpenSpotifyArtist: n } = this.props;
                null == n || n(e);
            });
    }
}
