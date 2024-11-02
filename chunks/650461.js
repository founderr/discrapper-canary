n.d(t, {
    Wg: function () {
        return f;
    }
}),
    n(47120);
var r,
    l = n(192379),
    i = n(392711),
    s = n.n(i),
    a = n(442837),
    o = n(570140),
    E = n(944163),
    u = n(709054),
    c = n(116175),
    d = n(308083);
function _(e, t, n) {
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
let A = new Map(),
    T = new Map(),
    I = !1,
    g = Object.freeze({
        gameApplicationIds: new Set(),
        playstyle: d.zv.NONE,
        interests: new Set(),
        description: '',
        wildcardDescriptors: [d.U6, d.U6, d.U6],
        tag: '',
        verificationForm: { ...E.t },
        badgeKind: c.ZD.SWORD,
        badgePrimaryColor: void 0,
        badgeSecondaryColor: void 0,
        banner: d.qC.NIGHT_SKY,
        brandPrimaryColor: void 0,
        brandSecondaryColor: void 0,
        currentStep: d.Wy.GAMES,
        furthestStep: d.Wy.GAMES,
        requiredGameId: void 0
    });
function N() {
    let e = s().cloneDeep(g);
    return (e.badgeKind = (0, c.lP)()), (e.banner = (0, d.i1)()), e;
}
function f() {
    return l.useState(() => N())[0];
}
function R(e) {
    var t;
    return null !== (t = A.get(e)) && void 0 !== t ? t : N();
}
function O(e, t) {
    let n = R(e);
    A.set(e, {
        ...n,
        ...t
    });
    let r = T.get(e);
    if (null != r) {
        let n = { ...r };
        Object.keys(t).forEach((e) => {
            delete n[e];
        }),
            T.set(e, n);
    }
}
class S extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        null != e &&
            u.default.keys(e.progressByGuild).forEach((t) => {
                var n, r, l, i, s;
                A.set(t, {
                    gameApplicationIds: new Set((n = e.progressByGuild[t]).gameApplicationIds),
                    playstyle: n.playstyle,
                    interests: new Set(n.interests),
                    description: n.description,
                    wildcardDescriptors: null !== (r = n.wildcardDescriptors) && void 0 !== r ? r : [d.U6, d.U6, d.U6],
                    tag: n.tag,
                    verificationForm: null !== (l = n.verificationForm) && void 0 !== l ? l : { ...E.t },
                    badgeKind: null !== (i = n.badgeKind) && void 0 !== i ? i : c.ZD.SWORD,
                    badgePrimaryColor: n.badgePrimaryColor,
                    badgeSecondaryColor: n.badgeSecondaryColor,
                    banner: null !== (s = n.banner) && void 0 !== s ? s : d.qC.NIGHT_SKY,
                    brandPrimaryColor: n.brandPrimaryColor,
                    brandSecondaryColor: n.brandSecondaryColor,
                    currentStep: n.currentStep,
                    furthestStep: n.furthestStep,
                    requiredGameId: n.requiredGameId
                });
            });
    }
    getState() {
        let e = {};
        return (
            A.forEach((t, n) => {
                var r;
                e[n] = {
                    gameApplicationIds: Array.from((r = t).gameApplicationIds),
                    playstyle: r.playstyle,
                    interests: Array.from(r.interests),
                    description: r.description,
                    wildcardDescriptors: r.wildcardDescriptors,
                    tag: r.tag,
                    verificationForm: r.verificationForm,
                    badgeKind: r.badgeKind,
                    badgePrimaryColor: r.badgePrimaryColor,
                    badgeSecondaryColor: r.badgeSecondaryColor,
                    banner: r.banner,
                    brandPrimaryColor: r.brandPrimaryColor,
                    brandSecondaryColor: r.brandSecondaryColor,
                    currentStep: r.currentStep,
                    furthestStep: r.furthestStep,
                    requiredGameId: r.requiredGameId
                };
            }),
            { progressByGuild: e }
        );
    }
    getStateForGuild(e) {
        return {
            progress: A.get(e),
            errors: T.get(e),
            submitting: I
        };
    }
    getGuildIds() {
        return [...A.keys()];
    }
}
_(S, 'displayName', 'ClanSetupStore'),
    _(S, 'persistKey', 'ClanSetupStore'),
    (t.ZP = new S(o.Z, {
        CLAN_SETUP_RESET: function () {
            A.clear(), T.clear();
        },
        CLAN_SETUP_UPDATE: function (e) {
            let { guildId: t, updates: n } = e;
            O(t, n);
        },
        CLAN_SETUP_SUBMIT: function (e) {
            let { guildId: t } = e;
            (I = !0), T.delete(t);
        },
        CLAN_SETUP_SUCCESS: function (e) {
            let { guildId: t } = e;
            (I = !1), A.delete(t), T.delete(t);
        },
        CLAN_SETUP_ERROR: function (e) {
            let { guildId: t, error: n } = e;
            (I = !1),
                T.set(t, {
                    gameApplicationIds: n.getFirstFieldErrorMessage('game_application_ids'),
                    playstyle: n.getFirstFieldErrorMessage('play_style'),
                    description: n.getFirstFieldErrorMessage('description'),
                    wildcardDescriptors: n.getFirstFieldErrorMessage('wildcard_descriptors'),
                    interests: n.getFirstFieldErrorMessage('search_terms'),
                    tag: n.getFirstFieldErrorMessage('tag'),
                    verificationForm: n.getFirstFieldErrorMessage(['verification_form', 'form_fields'])
                });
        },
        MEMBER_VERIFICATION_FORM_UPDATE: function (e) {
            let t;
            let { form: n, guildId: r, isLocalUpdate: l } = e;
            l &&
                ((t =
                    null == n
                        ? E.t
                        : {
                              ...R(r).verificationForm,
                              ...n
                          }),
                O(r, { verificationForm: t }));
        }
    }));
