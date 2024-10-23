n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(653041),
    n(47120);
var i = n(200651),
    s = n(192379),
    a = n(120356),
    l = n.n(a),
    r = n(748780),
    o = n(442837),
    c = n(215569),
    u = n(780384),
    d = n(481060),
    h = n(410030),
    m = n(451478),
    p = n(584511),
    _ = n(354459),
    f = n(634817),
    E = n(739017),
    g = n(351915);
function C(e, t, n) {
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
let I = {
        STEPS: 23,
        FRAME_DURATION: 17,
        FRAME_SIZE: 26
    },
    T = {
        SCALE_MIN: 0.7,
        SCALE_MAX: 1,
        DURATION_IN: 300,
        DURATION_OUT: 170,
        EASING_IN: r.Z.Easing.inOut(r.Z.Easing.back()),
        EASING_OUT: r.Z.Easing.quad
    },
    x = 200,
    S = 125;
class v extends s.PureComponent {
    componentDidMount() {
        this.componentDidAppear();
    }
    componentDidAppear() {
        let { scaleAnimation: e, widthAnimation: t } = this;
        e.setValue(1), t.setValue(1);
    }
    componentWillEnter(e) {
        let { scaleAnimation: t, widthAnimation: n } = this;
        t.setValue(0),
            n.setValue(0),
            r.Z.parallel([
                r.Z.timing(t, {
                    toValue: 1,
                    duration: T.DURATION_IN,
                    easing: T.EASING_IN
                }),
                r.Z.timing(n, {
                    toValue: 1,
                    duration: x
                })
            ]).start(e);
    }
    componentWillLeave(e) {
        let { scaleAnimation: t, spriteAnimation: n, spriteOpacity: i, widthAnimation: s } = this;
        i.setValue(1), n.setValue(0);
        let a = [];
        for (let e = 0; e < I.STEPS; e++)
            a.push(
                r.Z.timing(n, {
                    toValue: -I.FRAME_SIZE * e,
                    duration: I.FRAME_DURATION
                })
            );
        r.Z.sequence([
            r.Z.timing(t, {
                toValue: 0,
                duration: T.DURATION_OUT,
                easing: T.EASING_OUT
            }),
            r.Z.sequence(a),
            r.Z.timing(s, {
                toValue: 0,
                duration: S
            })
        ]).start(e);
    }
    getScaleStyle() {
        let { scaleAnimation: e } = this;
        return r.Z.accelerate({
            transform: [
                {
                    scale: e.interpolate({
                        inputRange: [0, 1],
                        outputRange: [T.SCALE_MIN, T.SCALE_MAX]
                    })
                }
            ],
            opacity: e
        });
    }
    getSpriteStyle() {
        let { spriteAnimation: e, spriteOpacity: t } = this;
        return {
            backgroundPosition: e,
            opacity: t
        };
    }
    getWidthStyle() {
        return {
            width: this.widthAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: ['0px', ''.concat(this.props.width, 'px')]
            })
        };
    }
    render() {
        let { theme: e, children: t, className: n } = this.props,
            s = (0, u.wj)(e),
            a = l()(f.sprite, {
                [g.crossWhite]: s,
                [g.crossGrey]: !s
            });
        return (0, i.jsxs)(r.Z.div, {
            className: l()(f.transition, n),
            style: this.getWidthStyle(),
            children: [
                (0, i.jsx)('div', {
                    className: l()(f.spriteWrapper, E.horizontal, E.justifyCenter, E.alignCenter),
                    children: (0, i.jsx)(r.Z.div, {
                        className: a,
                        style: this.getSpriteStyle()
                    })
                }),
                (0, i.jsx)(r.Z.div, {
                    style: this.getScaleStyle(),
                    children: t
                })
            ]
        });
    }
    constructor(...e) {
        super(...e), C(this, 'scaleAnimation', new r.Z.Value(0)), C(this, 'spriteAnimation', new r.Z.Value(0)), C(this, 'spriteOpacity', new r.Z.Value(0)), C(this, 'widthAnimation', new r.Z.Value(0));
    }
}
function N(e) {
    var t, n;
    let { participants: s, onContextMenu: a, className: r, onClick: u, width: E, guildId: g } = e,
        C = (0, h.ZP)();
    let I = ((t = E), (n = s.length), ((0, d.getAvatarSize)(d.AvatarSizes.SIZE_80) + 16) * n > t ? d.AvatarSizes.SIZE_40 : d.AvatarSizes.SIZE_80),
        T = (0, o.e7)([m.Z], () => m.Z.isFocused()),
        x = s.map((e) => {
            var t, n;
            if (e.type !== _.fO.USER) return null;
            let { user: s, voiceState: l, speaking: r, ringing: o } = e;
            return (0, i.jsx)(
                v,
                {
                    className: f.participant,
                    width: (0, d.getAvatarSize)(I),
                    theme: C,
                    children: (0, i.jsx)(
                        p.Z,
                        {
                            src: s.getAvatarURL(g, (0, d.getAvatarSize)(I), r && T),
                            size: I,
                            muted: null !== (t = null == l ? void 0 : l.isVoiceMuted()) && void 0 !== t && t,
                            deafen: null !== (n = null == l ? void 0 : l.isVoiceDeafened()) && void 0 !== n && n,
                            speaking: r,
                            ringing: o,
                            onClick: (t) => (null == u ? void 0 : u(e, t)),
                            onContextMenu: (t) => (null == a ? void 0 : a(e, t))
                        },
                        e.id
                    )
                },
                s.id
            );
        });
    return (0, i.jsx)(c.W, {
        component: 'div',
        className: l()(f.root, r),
        children: x
    });
}
