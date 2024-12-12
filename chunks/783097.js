r.d(n, {
    $d: function () {
        return A;
    },
    BQ: function () {
        return S;
    },
    Cb: function () {
        return w;
    },
    Hu: function () {
        return P;
    },
    L1: function () {
        return B;
    },
    Wx: function () {
        return y;
    },
    XZ: function () {
        return k;
    },
    Y$: function () {
        return L;
    },
    Yn: function () {
        return M;
    },
    jD: function () {
        return N;
    },
    lf: function () {
        return O;
    },
    pF: function () {
        return U;
    },
    sl: function () {
        return x;
    },
    vJ: function () {
        return R;
    },
    yJ: function () {
        return D;
    },
    ye: function () {
        return C;
    }
});
var i = r(789020);
var a = r(627494);
var s = r(757143);
var o = r(653041);
var l = r(47120);
var u = r(668781),
    c = r(904245),
    d = r(911969),
    f = r(895924),
    _ = r(667204),
    h = r(957730),
    p = r(973616),
    m = r(768581),
    g = r(630388),
    E = r(541099),
    v = r(827498),
    I = r(981631),
    T = r(689079),
    b = r(388032);
let y = { id: T.bi.BUILT_IN };
function S(e) {
    return e.id !== T.bi.BUILT_IN;
}
function A(e) {
    return S(e) ? e.name : b.intl.string(b.t.UB2gGx);
}
function N(e) {
    return S(e) ? e.description : b.intl.string(b.t.X9fusr);
}
function C(e) {
    var n;
    return S(e) && (0, g.yE)(null !== (n = e.flags) && void 0 !== n ? n : 0, I.udG.EMBEDDED);
}
function R(e) {
    var n;
    return S(e) && (0, g.yE)(null !== (n = e.flags) && void 0 !== n ? n : 0, I.udG.PARTNER);
}
function O(e) {
    var n;
    return S(e) && (0, g.yE)(null !== (n = e.flags) && void 0 !== n ? n : 0, I.udG.PROMOTED);
}
function D(e) {
    return S(e) && C(e) ? (e instanceof p.ZP ? e.embeddedActivityConfig : e.embedded_activity_config) : null;
}
function L(e) {
    let { command: n, optionValues: r, context: i, commandTargetId: a, maxSizeCallback: s, sectionName: o, commandOrigin: l = f.bB.APPLICATION_LAUNCHER } = e,
        { channel: d } = i,
        p = async () => {
            try {
                let u = await (0, _.Z)({
                    command: n,
                    optionValues: r,
                    context: i,
                    commandTargetId: a,
                    maxSizeCallback: s,
                    commandOrigin: l,
                    sectionName: o,
                    source: E.Z.entrypoint()
                });
                if (n.inputType === f.iw.BUILT_IN_TEXT && null != u) {
                    var e;
                    let n = h.ZP.parse(d, u.content);
                    (n.tts = null !== (e = u.tts) && void 0 !== e && e), c.Z.sendMessage(i.channel.id, n);
                }
            } catch (e) {
                throw (
                    (u.Z.show({
                        title: b.intl.string(b.t['aHO//v']),
                        body: b.intl.string(b.t.kuzKHB),
                        confirmText: b.intl.string(b.t['5911LS']),
                        onConfirm: () => p()
                    }),
                    e)
                );
            }
        };
    return p();
}
function x(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { fakeAppIconURL: r, ...i } = n;
    return S(e)
        ? {
              iconURL: m.ZP.getApplicationIconURL({
                  ...i,
                  id: e.id,
                  icon: e.icon
              }),
              name: e.name,
              description: e.description
          }
        : {
              iconURL: null != r ? r : null,
              name: b.intl.string(b.t.UB2gGx),
              description: b.intl.string(b.t.X9fusr)
          };
}
function w(e) {
    return !!S(e) && (e instanceof p.ZP ? e.isMonetized : e.is_monetized);
}
function P(e) {
    let n = D(e);
    return null != n && n.displays_advertisements;
}
function M(e) {
    return e === v._b.TEXT;
}
function k(e) {
    return null == e ? '' : (e.charAt(0).toLocaleUpperCase() + e.slice(1)).replaceAll('_', ' ');
}
function U(e) {
    let n = [];
    for (let r of e) {
        let e = r.items.filter((e) => {
            var n;
            let r = e.application,
                i = null !== (n = e.commands) && void 0 !== n ? n : [];
            return C(r) && i.some((e) => e.type === d.yU.PRIMARY_ENTRY_POINT);
        });
        if (0 !== e.length)
            n.push({
                ...r,
                items: e
            });
    }
    return n;
}
function B(e) {
    return e instanceof p.ZP
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
