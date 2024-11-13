r.d(t, {
    D: function () {
        return T;
    },
    N: function () {
        return A;
    }
});
var n = r(263449),
    a = r(696486),
    _ = r(988097),
    o = r(152228),
    i = r(101284),
    E = r(467510),
    c = r(370336),
    s = r(395848),
    l = r(501684),
    u = r(108185);
let I = [],
    R = new Map();
function A() {
    if ((0, u.QV)() && i.Z1) {
        let e = (function () {
            return (0, l.YF)(({ metric: e }) => {
                let t,
                    r = (0, n.s3)();
                if (!r || void 0 == e.value) return;
                let l = e.entries.find((t) => t.duration === e.value && N[t.name]);
                if (!l) return;
                let { interactionId: I } = l,
                    A = N[l.name],
                    T = r.getOptions(),
                    d = (0, u.XL)(i.Z1 + l.startTime),
                    L = (0, u.XL)(e.value),
                    f = (0, n.nZ)(),
                    O = (0, a.HN)(),
                    p = O ? (0, a.Gx)(O) : void 0,
                    h = (null != I ? R.get(I) : void 0) || p,
                    S = h ? (0, a.XU)(h).description : f.getScopeData().transactionName,
                    D = f.getUser(),
                    C = r.getIntegrationByName('Replay'),
                    g = C && C.getReplayId(),
                    P = void 0 !== D ? D.email || D.id || D.ip_address : void 0;
                try {
                    t = f.getScopeData().contexts.profile.profile_id;
                } catch (e) {}
                let U = (0, E.Rt)(l.target),
                    M = (0, c.Jr)({
                        release: T.release,
                        environment: T.environment,
                        transaction: S,
                        [_.JQ]: e.value,
                        [_.S3]: 'auto.http.browser.inp',
                        user: P || void 0,
                        profile_id: t || void 0,
                        replay_id: g || void 0,
                        'user_agent.original': s.m.navigator && s.m.navigator.userAgent
                    }),
                    G = (0, o.qp)({
                        name: U,
                        op: `ui.interaction.${A}`,
                        attributes: M,
                        startTime: d,
                        experimental: { standalone: !0 }
                    });
                G.addEvent('inp', {
                    [_.E1]: 'millisecond',
                    [_.Wb]: e.value
                }),
                    G.end(d + L);
            });
        })();
        return () => {
            e();
        };
    }
    return () => void 0;
}
let N = {
    click: 'click',
    pointerdown: 'click',
    pointerup: 'click',
    mousedown: 'click',
    mouseup: 'click',
    touchstart: 'click',
    touchend: 'click',
    mouseover: 'hover',
    mouseout: 'hover',
    mouseenter: 'hover',
    mouseleave: 'hover',
    pointerover: 'hover',
    pointerout: 'hover',
    pointerenter: 'hover',
    pointerleave: 'hover',
    dragstart: 'drag',
    dragend: 'drag',
    drag: 'drag',
    dragenter: 'drag',
    dragleave: 'drag',
    dragover: 'drag',
    drop: 'drag',
    keydown: 'press',
    keyup: 'press',
    keypress: 'press',
    input: 'press'
};
function T(e) {
    let t = ({ entries: e }) => {
        let t = (0, a.HN)(),
            r = t && (0, a.Gx)(t);
        e.forEach((e) => {
            if (!(0, l.cN)(e) || !r) return;
            let t = e.interactionId;
            if (!(null == t || R.has(t))) {
                if (I.length > 10) {
                    let e = I.shift();
                    R.delete(e);
                }
                I.push(t), R.set(t, r);
            }
        });
    };
    (0, l._j)('event', t), (0, l._j)('first-input', t);
}
