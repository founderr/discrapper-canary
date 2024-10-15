r.d(t, {
    Wg: function () {
        return S;
    }
}),
    r(47120);
var n,
    i = r(470079),
    a = r(392711),
    o = r.n(a),
    d = r(442837),
    l = r(570140),
    s = r(944163),
    c = r(709054),
    g = r(116175),
    f = r(308083);
function u(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = r),
        e
    );
}
let C = new Map(),
    b = new Map(),
    p = !1,
    _ = Object.freeze({
        gameApplicationIds: new Set(),
        playstyle: f.zv.NONE,
        interests: new Set(),
        description: '',
        wildcardDescriptors: [f.U6, f.U6, f.U6],
        tag: '',
        verificationForm: { ...s.t },
        badgeKind: g.ZD.SWORD,
        badgePrimaryColor: void 0,
        badgeSecondaryColor: void 0,
        banner: f.qC.NIGHT_SKY,
        brandPrimaryColor: void 0,
        brandSecondaryColor: void 0,
        currentStep: f.Wy.GAMES,
        furthestStep: f.Wy.GAMES,
        requiredGameId: void 0
    });
function v() {
    let e = o().cloneDeep(_);
    return (e.badgeKind = (0, g.lP)()), (e.banner = (0, f.i1)()), e;
}
function S() {
    return i.useState(() => v())[0];
}
function m(e) {
    var t;
    return null !== (t = C.get(e)) && void 0 !== t ? t : v();
}
function y(e, t) {
    let r = m(e);
    C.set(e, {
        ...r,
        ...t
    });
    let n = b.get(e);
    if (null != n) {
        let r = { ...n };
        Object.keys(t).forEach((e) => {
            delete r[e];
        }),
            b.set(e, r);
    }
}
class h extends (n = d.ZP.PersistedStore) {
    initialize(e) {
        null != e &&
            c.default.keys(e.progressByGuild).forEach((t) => {
                var r, n, i, a, o;
                C.set(t, {
                    gameApplicationIds: new Set((r = e.progressByGuild[t]).gameApplicationIds),
                    playstyle: r.playstyle,
                    interests: new Set(r.interests),
                    description: r.description,
                    wildcardDescriptors: null !== (n = r.wildcardDescriptors) && void 0 !== n ? n : [f.U6, f.U6, f.U6],
                    tag: r.tag,
                    verificationForm: null !== (i = r.verificationForm) && void 0 !== i ? i : { ...s.t },
                    badgeKind: null !== (a = r.badgeKind) && void 0 !== a ? a : g.ZD.SWORD,
                    badgePrimaryColor: r.badgePrimaryColor,
                    badgeSecondaryColor: r.badgeSecondaryColor,
                    banner: null !== (o = r.banner) && void 0 !== o ? o : f.qC.NIGHT_SKY,
                    brandPrimaryColor: r.brandPrimaryColor,
                    brandSecondaryColor: r.brandSecondaryColor,
                    currentStep: r.currentStep,
                    furthestStep: r.furthestStep,
                    requiredGameId: r.requiredGameId
                });
            });
    }
    getState() {
        let e = {};
        return (
            C.forEach((t, r) => {
                var n;
                e[r] = {
                    gameApplicationIds: Array.from((n = t).gameApplicationIds),
                    playstyle: n.playstyle,
                    interests: Array.from(n.interests),
                    description: n.description,
                    wildcardDescriptors: n.wildcardDescriptors,
                    tag: n.tag,
                    verificationForm: n.verificationForm,
                    badgeKind: n.badgeKind,
                    badgePrimaryColor: n.badgePrimaryColor,
                    badgeSecondaryColor: n.badgeSecondaryColor,
                    banner: n.banner,
                    brandPrimaryColor: n.brandPrimaryColor,
                    brandSecondaryColor: n.brandSecondaryColor,
                    currentStep: n.currentStep,
                    furthestStep: n.furthestStep,
                    requiredGameId: n.requiredGameId
                };
            }),
            { progressByGuild: e }
        );
    }
    getStateForGuild(e) {
        return {
            progress: C.get(e),
            errors: b.get(e),
            submitting: p
        };
    }
    getGuildIds() {
        return [...C.keys()];
    }
}
u(h, 'displayName', 'ClanSetupStore'),
    u(h, 'persistKey', 'ClanSetupStore'),
    (t.ZP = new h(l.Z, {
        CLAN_SETUP_RESET: function () {
            C.clear(), b.clear();
        },
        CLAN_SETUP_UPDATE: function (e) {
            let { guildId: t, updates: r } = e;
            y(t, r);
        },
        CLAN_SETUP_SUBMIT: function (e) {
            let { guildId: t } = e;
            (p = !0), b.delete(t);
        },
        CLAN_SETUP_SUCCESS: function (e) {
            let { guildId: t } = e;
            (p = !1), C.delete(t), b.delete(t);
        },
        CLAN_SETUP_ERROR: function (e) {
            let { guildId: t, error: r } = e;
            (p = !1),
                b.set(t, {
                    gameApplicationIds: r.getFirstFieldErrorMessage('game_application_ids'),
                    playstyle: r.getFirstFieldErrorMessage('play_style'),
                    description: r.getFirstFieldErrorMessage('description'),
                    wildcardDescriptors: r.getFirstFieldErrorMessage('wildcard_descriptors'),
                    interests: r.getFirstFieldErrorMessage('search_terms'),
                    tag: r.getFirstFieldErrorMessage('tag'),
                    verificationForm: r.getFirstFieldErrorMessage(['verification_form', 'form_fields'])
                });
        },
        MEMBER_VERIFICATION_FORM_UPDATE: function (e) {
            let t;
            let { form: r, guildId: n, isLocalUpdate: i } = e;
            i &&
                ((t =
                    null == r
                        ? s.t
                        : {
                              ...m(n).verificationForm,
                              ...r
                          }),
                y(n, { verificationForm: t }));
        }
    }));
