n.d(t, {
    $d: function () {
        return v;
    },
    BQ: function () {
        return E;
    },
    Cb: function () {
        return C;
    },
    Hu: function () {
        return R;
    },
    L1: function () {
        return x;
    },
    Wx: function () {
        return g;
    },
    XZ: function () {
        return D;
    },
    Y$: function () {
        return A;
    },
    Yn: function () {
        return O;
    },
    jD: function () {
        return I;
    },
    lf: function () {
        return S;
    },
    pF: function () {
        return L;
    },
    sl: function () {
        return N;
    },
    vJ: function () {
        return b;
    },
    yJ: function () {
        return y;
    },
    ye: function () {
        return T;
    }
}),
    n(789020),
    n(627494),
    n(757143),
    n(653041),
    n(47120);
var r = n(668781),
    i = n(904245),
    a = n(911969),
    s = n(895924),
    o = n(667204),
    l = n(957730),
    u = n(973616),
    c = n(768581),
    d = n(630388),
    f = n(541099),
    _ = n(827498),
    p = n(981631),
    h = n(689079),
    m = n(388032);
let g = { id: h.bi.BUILT_IN };
function E(e) {
    return e.id !== h.bi.BUILT_IN;
}
function v(e) {
    return E(e) ? e.name : m.intl.string(m.t.UB2gGx);
}
function I(e) {
    return E(e) ? e.description : m.intl.string(m.t.X9fusr);
}
function T(e) {
    var t;
    return E(e) && (0, d.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, p.udG.EMBEDDED);
}
function b(e) {
    var t;
    return E(e) && (0, d.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, p.udG.PARTNER);
}
function S(e) {
    var t;
    return E(e) && (0, d.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, p.udG.PROMOTED);
}
function y(e) {
    return E(e) && T(e) ? (e instanceof u.Z ? e.embeddedActivityConfig : e.embedded_activity_config) : null;
}
function A(e) {
    let { command: t, optionValues: n, context: a, commandTargetId: u, maxSizeCallback: c, sectionName: d, commandOrigin: _ = s.bB.APPLICATION_LAUNCHER } = e,
        { channel: p } = a,
        h = async () => {
            try {
                let r = await (0, o.Z)({
                    command: t,
                    optionValues: n,
                    context: a,
                    commandTargetId: u,
                    maxSizeCallback: c,
                    commandOrigin: _,
                    sectionName: d,
                    source: f.Z.entrypoint()
                });
                if (t.inputType === s.iw.BUILT_IN_TEXT && null != r) {
                    var e;
                    let t = l.ZP.parse(p, r.content);
                    (t.tts = null !== (e = r.tts) && void 0 !== e && e), i.Z.sendMessage(a.channel.id, t);
                }
            } catch (e) {
                throw (
                    (r.Z.show({
                        title: m.intl.string(m.t['aHO//v']),
                        body: m.intl.string(m.t.kuzKHB),
                        confirmText: m.intl.string(m.t['5911LS']),
                        onConfirm: () => h()
                    }),
                    e)
                );
            }
        };
    return h();
}
function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { fakeAppIconURL: n, ...r } = t;
    return E(e)
        ? {
              iconURL: c.ZP.getApplicationIconURL({
                  ...r,
                  id: e.id,
                  icon: e.icon
              }),
              name: e.name,
              description: e.description
          }
        : {
              iconURL: null != n ? n : null,
              name: m.intl.string(m.t.UB2gGx),
              description: m.intl.string(m.t.X9fusr)
          };
}
function C(e) {
    return !!E(e) && (e instanceof u.Z ? e.isMonetized : e.is_monetized);
}
function R(e) {
    let t = y(e);
    return null != t && t.displays_advertisements;
}
function O(e) {
    return e === _._b.TEXT;
}
function D(e) {
    return null == e ? '' : (e.charAt(0).toLocaleUpperCase() + e.slice(1)).replaceAll('_', ' ');
}
function L(e) {
    let t = [];
    for (let n of e) {
        let e = n.items.filter((e) => {
            var t;
            let n = e.application,
                r = null !== (t = e.commands) && void 0 !== t ? t : [];
            return T(n) && r.some((e) => e.type === a.yU.PRIMARY_ENTRY_POINT);
        });
        if (0 !== e.length)
            t.push({
                ...n,
                items: e
            });
    }
    return t;
}
function x(e) {
    return e instanceof u.Z
        ? {
              applicationId: e.id,
              customInstallUrl: e.customInstallUrl,
              installParams: e.installParams,
              integrationTypesConfig: e.integrationTypesConfig
          }
        : {
              applicationId: e.id,
              customInstallUrl: e.custom_install_url,
              installParams: e.install_params,
              integrationTypesConfig: e.integration_types_config
          };
}
