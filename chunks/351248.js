n.d(t, {
    Z: function () {
        return Z;
    }
}),
    n(653041),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(748780),
    o = n(442837),
    c = n(215569),
    u = n(780384),
    d = n(481060),
    h = n(410030),
    m = n(451478),
    p = n(584511),
    f = n(354459),
    g = n(634817),
    C = n(739017),
    x = n(351915);
function v(e, t, n) {
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
let _ = {
        STEPS: 23,
        FRAME_DURATION: 17,
        FRAME_SIZE: 26
    },
    I = {
        SCALE_MIN: 0.7,
        SCALE_MAX: 1,
        DURATION_IN: 300,
        DURATION_OUT: 170,
        EASING_IN: a.Z.Easing.inOut(a.Z.Easing.back()),
        EASING_OUT: a.Z.Easing.quad
    },
    E = 200,
    b = 125;
class S extends l.PureComponent {
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
            a.Z.parallel([
                a.Z.timing(t, {
                    toValue: 1,
                    duration: I.DURATION_IN,
                    easing: I.EASING_IN
                }),
                a.Z.timing(n, {
                    toValue: 1,
                    duration: E
                })
            ]).start(e);
    }
    componentWillLeave(e) {
        let { scaleAnimation: t, spriteAnimation: n, spriteOpacity: i, widthAnimation: l } = this;
        i.setValue(1), n.setValue(0);
        let r = [];
        for (let e = 0; e < _.STEPS; e++)
            r.push(
                a.Z.timing(n, {
                    toValue: -_.FRAME_SIZE * e,
                    duration: _.FRAME_DURATION
                })
            );
        a.Z.sequence([
            a.Z.timing(t, {
                toValue: 0,
                duration: I.DURATION_OUT,
                easing: I.EASING_OUT
            }),
            a.Z.sequence(r),
            a.Z.timing(l, {
                toValue: 0,
                duration: b
            })
        ]).start(e);
    }
    getScaleStyle() {
        let { scaleAnimation: e } = this;
        return a.Z.accelerate({
            transform: [
                {
                    scale: e.interpolate({
                        inputRange: [0, 1],
                        outputRange: [I.SCALE_MIN, I.SCALE_MAX]
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
            l = (0, u.wj)(e),
            r = s()(g.sprite, {
                [x.crossWhite]: l,
                [x.crossGrey]: !l
            });
        return (0, i.jsxs)(a.Z.div, {
            className: s()(g.transition, n),
            style: this.getWidthStyle(),
            children: [
                (0, i.jsx)('div', {
                    className: s()(g.spriteWrapper, C.horizontal, C.justifyCenter, C.alignCenter),
                    children: (0, i.jsx)(a.Z.div, {
                        className: r,
                        style: this.getSpriteStyle()
                    })
                }),
                (0, i.jsx)(a.Z.div, {
                    style: this.getScaleStyle(),
                    children: t
                })
            ]
        });
    }
    constructor(...e) {
        super(...e), v(this, 'scaleAnimation', new a.Z.Value(0)), v(this, 'spriteAnimation', new a.Z.Value(0)), v(this, 'spriteOpacity', new a.Z.Value(0)), v(this, 'widthAnimation', new a.Z.Value(0));
    }
}
function Z(e) {
    var t, n;
    let { participants: l, onContextMenu: r, className: a, onClick: u, width: C, guildId: x } = e,
        v = (0, h.ZP)();
    let _ = ((t = C), (n = l.length), ((0, d.getAvatarSize)(d.AvatarSizes.SIZE_80) + 16) * n > t ? d.AvatarSizes.SIZE_40 : d.AvatarSizes.SIZE_80),
        I = (0, o.e7)([m.Z], () => m.Z.isFocused()),
        E = l.map((e) => {
            var t, n;
            if (e.type !== f.fO.USER) return null;
            let { user: l, voiceState: s, speaking: a, ringing: o } = e;
            return (0, i.jsx)(
                S,
                {
                    className: g.participant,
                    width: (0, d.getAvatarSize)(_),
                    theme: v,
                    children: (0, i.jsx)(
                        p.Z,
                        {
                            src: l.getAvatarURL(x, (0, d.getAvatarSize)(_), a && I),
                            size: _,
                            muted: null !== (t = null == s ? void 0 : s.isVoiceMuted()) && void 0 !== t && t,
                            deafen: null !== (n = null == s ? void 0 : s.isVoiceDeafened()) && void 0 !== n && n,
                            speaking: a,
                            ringing: o,
                            onClick: (t) => (null == u ? void 0 : u(e, t)),
                            onContextMenu: (t) => (null == r ? void 0 : r(e, t))
                        },
                        e.id
                    )
                },
                l.id
            );
        });
    return (0, i.jsx)(c.W, {
        component: 'div',
        className: s()(g.root, a),
        children: E
    });
}
