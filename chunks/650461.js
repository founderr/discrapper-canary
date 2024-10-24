E.d(_, {
    Wg: function () {
        return c;
    }
}),
    E(47120);
var s,
    n = E(192379),
    t = E(392711),
    r = E.n(t),
    T = E(442837),
    a = E(570140),
    I = E(944163),
    l = E(709054),
    o = E(116175),
    A = E(308083);
function i(e, _, E) {
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
let N = new Map(),
    D = new Map(),
    L = !1,
    S = Object.freeze({
        gameApplicationIds: new Set(),
        playstyle: A.zv.NONE,
        interests: new Set(),
        description: '',
        wildcardDescriptors: [A.U6, A.U6, A.U6],
        tag: '',
        verificationForm: { ...I.t },
        badgeKind: o.ZD.SWORD,
        badgePrimaryColor: void 0,
        badgeSecondaryColor: void 0,
        banner: A.qC.NIGHT_SKY,
        brandPrimaryColor: void 0,
        brandSecondaryColor: void 0,
        currentStep: A.Wy.GAMES,
        furthestStep: A.Wy.GAMES,
        requiredGameId: void 0
    });
function u() {
    let e = r().cloneDeep(S);
    return (e.badgeKind = (0, o.lP)()), (e.banner = (0, A.i1)()), e;
}
function c() {
    return n.useState(() => u())[0];
}
function O(e) {
    var _;
    return null !== (_ = N.get(e)) && void 0 !== _ ? _ : u();
}
function U(e, _) {
    let E = O(e);
    N.set(e, {
        ...E,
        ..._
    });
    let s = D.get(e);
    if (null != s) {
        let E = { ...s };
        Object.keys(_).forEach((e) => {
            delete E[e];
        }),
            D.set(e, E);
    }
}
class G extends (s = T.ZP.PersistedStore) {
    initialize(e) {
        null != e &&
            l.default.keys(e.progressByGuild).forEach((_) => {
                var E, s, n, t, r;
                N.set(_, {
                    gameApplicationIds: new Set((E = e.progressByGuild[_]).gameApplicationIds),
                    playstyle: E.playstyle,
                    interests: new Set(E.interests),
                    description: E.description,
                    wildcardDescriptors: null !== (s = E.wildcardDescriptors) && void 0 !== s ? s : [A.U6, A.U6, A.U6],
                    tag: E.tag,
                    verificationForm: null !== (n = E.verificationForm) && void 0 !== n ? n : { ...I.t },
                    badgeKind: null !== (t = E.badgeKind) && void 0 !== t ? t : o.ZD.SWORD,
                    badgePrimaryColor: E.badgePrimaryColor,
                    badgeSecondaryColor: E.badgeSecondaryColor,
                    banner: null !== (r = E.banner) && void 0 !== r ? r : A.qC.NIGHT_SKY,
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
            N.forEach((_, E) => {
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
            progress: N.get(e),
            errors: D.get(e),
            submitting: L
        };
    }
    getGuildIds() {
        return [...N.keys()];
    }
}
i(G, 'displayName', 'ClanSetupStore'),
    i(G, 'persistKey', 'ClanSetupStore'),
    (_.ZP = new G(a.Z, {
        CLAN_SETUP_RESET: function () {
            N.clear(), D.clear();
        },
        CLAN_SETUP_UPDATE: function (e) {
            let { guildId: _, updates: E } = e;
            U(_, E);
        },
        CLAN_SETUP_SUBMIT: function (e) {
            let { guildId: _ } = e;
            (L = !0), D.delete(_);
        },
        CLAN_SETUP_SUCCESS: function (e) {
            let { guildId: _ } = e;
            (L = !1), N.delete(_), D.delete(_);
        },
        CLAN_SETUP_ERROR: function (e) {
            let { guildId: _, error: E } = e;
            (L = !1),
                D.set(_, {
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
            let { form: E, guildId: s, isLocalUpdate: n } = e;
            n &&
                ((_ =
                    null == E
                        ? I.t
                        : {
                              ...O(s).verificationForm,
                              ...E
                          }),
                U(s, { verificationForm: _ }));
        }
    }));
