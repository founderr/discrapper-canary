r.d(t, {
    D: function () {
        return N;
    },
    N: function () {
        return A;
    }
});
var a = r(263449),
    n = r(696486),
    _ = r(988097),
    o = r(152228),
    E = r(101284),
    i = r(467510),
    c = r(370336),
    s = r(395848),
    l = r(501684),
    I = r(108185);
let u = [],
    R = new Map();
function A() {
    if ((0, I.QV)() && E.Z1) {
        let e = (function () {
            return (0, l.YF)(({ metric: e }) => {
                let t,
                    r = (0, a.s3)();
                if (!r || void 0 == e.value) return;
                let l = e.entries.find((t) => t.duration === e.value && T[t.name]);
                if (!l) return;
                let { interactionId: u } = l,
                    A = T[l.name],
                    N = r.getOptions(),
                    d = (0, I.XL)(E.Z1 + l.startTime),
                    f = (0, I.XL)(e.value),
                    O = (0, a.nZ)(),
                    L = (0, n.HN)(),
                    p = L ? (0, n.Gx)(L) : void 0,
                    h = (null != u ? R.get(u) : void 0) || p,
                    D = h ? (0, n.XU)(h).description : O.getScopeData().transactionName,
                    S = O.getUser(),
                    C = r.getIntegrationByName('Replay'),
                    P = C && C.getReplayId(),
                    g = void 0 !== S ? S.email || S.id || S.ip_address : void 0;
                try {
                    t = O.getScopeData().contexts.profile.profile_id;
                } catch (e) {}
                let U = (0, i.Rt)(l.target),
                    M = (0, c.Jr)({
                        release: N.release,
                        environment: N.environment,
                        transaction: D,
                        [_.JQ]: e.value,
                        [_.S3]: 'auto.http.browser.inp',
                        user: g || void 0,
                        profile_id: t || void 0,
                        replay_id: P || void 0,
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
                    G.end(d + f);
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
        let t = (0, n.HN)(),
            r = t && (0, n.Gx)(t);
        e.forEach((e) => {
            if (!(0, l.cN)(e) || !r) return;
            let t = e.interactionId;
            if (!(null == t || R.has(t))) {
                if (u.length > 10) {
                    let e = u.shift();
                    R.delete(e);
                }
                u.push(t), R.set(t, r);
            }
        });
    };
    (0, l._j)('event', t), (0, l._j)('first-input', t);
}
