a.d(n, {
    Z: function () {
        return l;
    }
}),
    a(47120);
var t = a(735250),
    r = a(470079),
    s = a(481060);
function i(e, n, a) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = a),
        e
    );
}
class o extends r.PureComponent {
    render() {
        let { text: e, lastItem: n, className: a } = this.props;
        return (0, t.jsxs)('span', {
            children: [
                (0, t.jsx)(s.Anchor, {
                    className: a,
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
        return e.map((e, a) =>
            (0, t.jsx)(
                o,
                {
                    text: e,
                    index: a,
                    lastItem: a === n,
                    onClick: this.handleOpenSpotifyArtist,
                    className: this.props.linkClassName
                },
                'spotify-artist-'.concat(a)
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
