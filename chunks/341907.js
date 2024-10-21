n.r(t),
    n.d(t, {
        maybeShowSurveyForQuest: function () {
            return R;
        },
        navigateToQuestHome: function () {
            return N;
        },
        openDisclosureModal: function () {
            return A;
        },
        openQuestInGameRewardModal: function () {
            return g;
        },
        openQuestsNitroRewardModal: function () {
            return S;
        },
        openQuestsRewardCodeModal: function () {
            return T;
        },
        openVideoQuestModal: function () {
            return O;
        }
    });
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(836768),
    s = n(703656),
    o = n(617136),
    l = n(497505),
    u = n(918701),
    c = n(862847),
    d = n(5881),
    _ = n(842942),
    E = n(61115),
    f = n(150560),
    h = n(957119),
    p = n(46140),
    I = n(981631),
    m = n(49898);
function T(e) {
    let { questId: t, location: a, questContentPosition: s, preview: o = !1 } = e;
    (0, i.openModalLazy)(async () => {
        let { default: e } = await Promise.all([n.e('48923'), n.e('99393'), n.e('28044'), n.e('71740')]).then(n.bind(n, 985866));
        return (n) =>
            (0, r.jsx)(e, {
                ...n,
                questId: t,
                questContentPosition: s,
                location: a,
                preview: o
            });
    });
}
function S(e, t) {
    (0, i.openModalLazy)(async () => {
        let { default: i } = await n.e('838').then(n.bind(n, 824393));
        return (n) =>
            (0, r.jsx)(i, {
                ...n,
                quest: e,
                location: t
            });
    });
}
function g(e, t) {
    (0, i.openModalLazy)(async () => {
        let { default: i } = await n.e('88938').then(n.bind(n, 390238));
        return (n) =>
            (0, r.jsx)(i, {
                ...n,
                quest: e,
                location: t
            });
    });
}
function A(e, t) {
    (0, o._3)({
        questId: e.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent
    }),
        (0, i.openModalLazy)(async () => {
            let { default: i } = await n.e('4266').then(n.bind(n, 316210));
            return (n) =>
                (0, r.jsx)(i, {
                    ...n,
                    questContent: t.content,
                    quest: e
                });
        });
}
function N(e, t, n) {
    let r = f.Z.getState().setUtmCurrentContext;
    r({
        utmSourceCurrent: 'Discord Widget',
        utmMediumCurrent: 'in-app',
        utmCampaignCurrent: n,
        utmContentCurrent: Object.keys(l.jn).find((e) => l.jn[e] === t)
    });
    let i = null != n ? '#'.concat(n) : '';
    (0, a.Sx)({ selectedTab: m.F$.QUESTS }), (0, s.uL)(I.Z5c.QUEST_HOME + i);
}
function R(e) {
    let t = (0, d.T)({ quest: e }),
        n = { location: p.dr.QUESTS_BAR };
    if (!(0, c.j)(n)) return;
    let r = (0, u.il)(e),
        i = (0, _.Z)({ gameName: e.config.messages.gameTitle });
    if (i.taskType === r.taskType && !!i.experiment.getCurrentConfig(n).enabled)
        t.log('Showing survey '.concat(i.id)),
            (0, E.openQuestSurveyModal)({
                questId: e.id,
                survey: i
            });
}
function O(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    (0, i.openModalLazy)(
        async () => {
            let { default: i } = await n.e('3951').then(n.bind(n, 874083));
            return (n) =>
                (0, r.jsx)(i, {
                    ...n,
                    questId: e.id,
                    autoplay: t
                });
        },
        { modalKey: (0, h.u)(e.id) }
    );
}
