E.d(_, {
    Wg: function () {
        return o;
    }
}),
    E(47120);
var s,
    T = E(470079),
    I = E(392711),
    n = E.n(I),
    t = E(442837),
    A = E(570140),
    r = E(944163),
    a = E(709054),
    N = E(116175),
    S = E(308083);
function l(e, _, E) {
    return (
        _ in e
            ? Object.defineProperty(e, _, {
                  value: E,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[_] = E),
        e
    );
}
let D = new Map(),
    L = new Map(),
    U = !1,
    O = Object.freeze({
        gameApplicationIds: new Set(),
        playstyle: S.zv.NONE,
        interests: new Set(),
        description: '',
        wildcardDescriptors: [S.U6, S.U6, S.U6],
        tag: '',
        verificationForm: { ...r.t },
        badgeKind: N.ZD.SWORD,
        badgePrimaryColor: void 0,
        badgeSecondaryColor: void 0,
        banner: S.qC.NIGHT_SKY,
        brandPrimaryColor: void 0,
        brandSecondaryColor: void 0,
        currentStep: S.Wy.GAMES,
        furthestStep: S.Wy.GAMES,
        requiredGameId: void 0
    });
function G() {
    let e = n().cloneDeep(O);
    return (e.badgeKind = (0, N.lP)()), (e.banner = (0, S.i1)()), e;
}
function o() {
    return T.useState(() => G())[0];
}
function i(e) {
    var _;
    return null !== (_ = D.get(e)) && void 0 !== _ ? _ : G();
}
function M(e, _) {
    let E = i(e);
    D.set(e, {
        ...E,
        ..._
    });
    let s = L.get(e);
    if (null != s) {
        let E = { ...s };
        Object.keys(_).forEach((e) => {
            delete E[e];
        }),
            L.set(e, E);
    }
}
class R extends (s = t.ZP.PersistedStore) {
    initialize(e) {
        null != e &&
            a.default.keys(e.progressByGuild).forEach((_) => {
                var E, s, T, I, n;
                D.set(_, {
                    gameApplicationIds: new Set((E = e.progressByGuild[_]).gameApplicationIds),
                    playstyle: E.playstyle,
                    interests: new Set(E.interests),
                    description: E.description,
                    wildcardDescriptors: null !== (s = E.wildcardDescriptors) && void 0 !== s ? s : [S.U6, S.U6, S.U6],
                    tag: E.tag,
                    verificationForm: null !== (T = E.verificationForm) && void 0 !== T ? T : { ...r.t },
                    badgeKind: null !== (I = E.badgeKind) && void 0 !== I ? I : N.ZD.SWORD,
                    badgePrimaryColor: E.badgePrimaryColor,
                    badgeSecondaryColor: E.badgeSecondaryColor,
                    banner: null !== (n = E.banner) && void 0 !== n ? n : S.qC.NIGHT_SKY,
                    brandPrimaryColor: E.brandPrimaryColor,
                    brandSecondaryColor: E.brandSecondaryColor,
                    currentStep: E.currentStep,
                    furthestStep: E.furthestStep,
                    requiredGameId: E.requiredGameId
                });
            });
    }
    getState() {
        let e = {};
        return (
            D.forEach((_, E) => {
                var s;
                e[E] = {
                    gameApplicationIds: Array.from((s = _).gameApplicationIds),
                    playstyle: s.playstyle,
                    interests: Array.from(s.interests),
                    description: s.description,
                    wildcardDescriptors: s.wildcardDescriptors,
                    tag: s.tag,
                    verificationForm: s.verificationForm,
                    badgeKind: s.badgeKind,
                    badgePrimaryColor: s.badgePrimaryColor,
                    badgeSecondaryColor: s.badgeSecondaryColor,
                    banner: s.banner,
                    brandPrimaryColor: s.brandPrimaryColor,
                    brandSecondaryColor: s.brandSecondaryColor,
                    currentStep: s.currentStep,
                    furthestStep: s.furthestStep,
                    requiredGameId: s.requiredGameId
                };
            }),
            { progressByGuild: e }
        );
    }
    getStateForGuild(e) {
        return {
            progress: D.get(e),
            errors: L.get(e),
            submitting: U
        };
    }
    getGuildIds() {
        return [...D.keys()];
    }
}
l(R, 'displayName', 'ClanSetupStore'),
    l(R, 'persistKey', 'ClanSetupStore'),
    (_.ZP = new R(A.Z, {
        CLAN_SETUP_RESET: function () {
            D.clear(), L.clear();
        },
        CLAN_SETUP_UPDATE: function (e) {
            let { guildId: _, updates: E } = e;
            M(_, E);
        },
        CLAN_SETUP_SUBMIT: function (e) {
            let { guildId: _ } = e;
            (U = !0), L.delete(_);
        },
        CLAN_SETUP_SUCCESS: function (e) {
            let { guildId: _ } = e;
            (U = !1), D.delete(_), L.delete(_);
        },
        CLAN_SETUP_ERROR: function (e) {
            let { guildId: _, error: E } = e;
            (U = !1),
                L.set(_, {
                    gameApplicationIds: E.getFirstFieldErrorMessage('game_application_ids'),
                    playstyle: E.getFirstFieldErrorMessage('play_style'),
                    description: E.getFirstFieldErrorMessage('description'),
                    wildcardDescriptors: E.getFirstFieldErrorMessage('wildcard_descriptors'),
                    interests: E.getFirstFieldErrorMessage('search_terms'),
                    tag: E.getFirstFieldErrorMessage('tag'),
                    verificationForm: E.getFirstFieldErrorMessage(['verification_form', 'form_fields'])
                });
        },
        MEMBER_VERIFICATION_FORM_UPDATE: function (e) {
            let _;
            let { form: E, guildId: s, isLocalUpdate: T } = e;
            T &&
                ((_ =
                    null == E
                        ? r.t
                        : {
                              ...i(s).verificationForm,
                              ...E
                          }),
                M(s, { verificationForm: _ }));
        }
    }));
