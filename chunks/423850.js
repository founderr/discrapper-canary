r.d(t, {
    D: function () {
        return N;
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
    I = r(501684),
    u = r(108185);
let l = [],
    R = new Map();
function A() {
    if ((0, u.QV)() && i.Z1) {
        let e = (function () {
            return (0, I.YF)(({ metric: e }) => {
                let t,
                    r = (0, n.s3)();
                if (!r || void 0 == e.value) return;
                let I = e.entries.find((t) => t.duration === e.value && T[t.name]);
                if (!I) return;
                let { interactionId: l } = I,
                    A = T[I.name],
                    N = r.getOptions(),
                    d = (0, u.XL)(i.Z1 + I.startTime),
                    O = (0, u.XL)(e.value),
                    p = (0, n.nZ)(),
                    f = (0, a.HN)(),
                    L = f ? (0, a.Gx)(f) : void 0,
                    S = (null != l ? R.get(l) : void 0) || L,
                    D = S ? (0, a.XU)(S).description : p.getScopeData().transactionName,
                    h = p.getUser(),
                    C = r.getIntegrationByName('Replay'),
                    g = C && C.getReplayId(),
                    P = void 0 !== h ? h.email || h.id || h.ip_address : void 0;
                try {
                    t = p.getScopeData().contexts.profile.profile_id;
                } catch (e) {}
                let M = (0, E.Rt)(I.target),
                    U = (0, c.Jr)({
                        release: N.release,
                        environment: N.environment,
                        transaction: D,
                        [_.JQ]: e.value,
                        [_.S3]: 'auto.http.browser.inp',
                        user: P || void 0,
                        profile_id: t || void 0,
                        replay_id: g || void 0,
                        'user_agent.original': s.m.navigator && s.m.navigator.userAgent
                    }),
                    m = (0, o.qp)({
                        name: M,
                        op: `ui.interaction.${A}`,
                        attributes: U,
                        startTime: d,
                        experimental: { standalone: !0 }
                    });
                m.addEvent('inp', {
                    [_.E1]: 'millisecond',
                    [_.Wb]: e.value
                }),
                    m.end(d + O);
            });
        })();
        return () => {
            e();
        };
    }
    return () => void 0;
}
let T = {
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
function N(e) {
    let t = ({ entries: e }) => {
        let t = (0, a.HN)(),
            r = t && (0, a.Gx)(t);
        e.forEach((e) => {
            if (!(0, I.cN)(e) || !r) return;
            let t = e.interactionId;
            if (!(null == t || R.has(t))) {
                if (l.length > 10) {
                    let e = l.shift();
                    R.delete(e);
                }
                l.push(t), R.set(t, r);
            }
        });
    };
    (0, I._j)('event', t), (0, I._j)('first-input', t);
}
