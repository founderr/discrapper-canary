n(47120);
var i,
    r,
    l,
    s,
    a = n(392711),
    o = n.n(a),
    c = n(906280),
    d = n.n(c),
    u = n(442837),
    m = n(570140),
    h = n(944163),
    g = n(77498),
    x = n(116175),
    p = n(308083);
function f(e) {
    return new Set(Array.from(e).filter((e) => null != g.Z.getDetectableGame(e)));
}
let C = () => ({
        gameApplicationIds: new Set(),
        playstyle: p.zv.NONE,
        interests: new Set(),
        description: '',
        wildcardDescriptors: [p.U6, p.U6, p.U6],
        tag: '',
        verificationForm: { ...h.t },
        badgeKind: x.ZD.SWORD,
        badgePrimaryColor: x.sg['0'].primary,
        badgeSecondaryColor: x.sg['0'].secondary,
        banner: p.qC.NIGHT_SKY,
        brandPrimaryColor: p.ym['0'].primary,
        brandSecondaryColor: p.ym['0'].secondary
    }),
    I = C(),
    _ = d()(I),
    v = !1,
    N = !1,
    T = {};
class b extends (i = u.ZP.Store) {
    getState() {
        return {
            initialSettings: I,
            settings: _,
            dirty: v,
            errors: T,
            submitting: N
        };
    }
}
(s = 'ClanSettingsStore'),
    (l = 'displayName') in (r = b)
        ? Object.defineProperty(r, l, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[l] = s),
    (t.Z = new b(m.Z, {
        CLAN_SETTINGS_FETCH_START: function () {
            (N = !1), (I = C()), (_ = d()(I)), (v = !1), (T = {});
        },
        CLAN_SETTINGS_FETCH_SUCCESS: function (e) {
            let { settings: t } = e;
            (I = {
                ...C(),
                ...t
            }),
                ((_ = d()(I)).gameApplicationIds = f(_.gameApplicationIds)),
                (v = !1);
        },
        CLAN_SETTINGS_UPDATE: function (e) {
            let { updates: t } = e,
                { gameApplicationIds: n } = t;
            for (let e in (null != n && (t.gameApplicationIds = f(n)),
            (_ = {
                ..._,
                ...d()(t)
            }),
            t))
                delete T[e], (T = { ...T });
            v = !o().isEqual(o().omit(_, 'verificationForm'), o().omit(I, 'verificationForm'));
        },
        CLAN_SETTINGS_SUBMIT: function () {
            (N = !0), (T = {});
        },
        CLAN_SETTINGS_SUBMIT_SUCCESS: function () {
            (N = !1), (I = d()(_)), (v = !1), (T = {});
        },
        CLAN_SETTINGS_SUBMIT_ERROR: function (e) {
            let { error: t } = e;
            (N = !1),
                (T = {
                    gameApplicationIds: t.getFirstFieldErrorMessage('game_application_ids'),
                    playstyle: t.getFirstFieldErrorMessage('play_style'),
                    description: t.getFirstFieldErrorMessage('description'),
                    wildcardDescriptors: t.getFirstFieldErrorMessage('wildcard_descriptors'),
                    interests: t.getFirstFieldErrorMessage('search_terms'),
                    tag: t.getFirstFieldErrorMessage('tag'),
                    verificationForm: t.getFirstFieldErrorMessage(['verification_form', 'form_fields'])
                });
        },
        MEMBER_VERIFICATION_FORM_UPDATE: function (e) {
            let { form: t, isLocalUpdate: n } = e;
            if (null == _.verificationForm) return !1;
            if (
                ((_ = {
                    ..._,
                    verificationForm: {
                        ..._.verificationForm,
                        ...t
                    }
                }),
                n)
            ) {
                var i;
                v = !o().isEqual(_.verificationForm.formFields, null === (i = I.verificationForm) || void 0 === i ? void 0 : i.formFields);
            } else v = !1;
        }
    }));
