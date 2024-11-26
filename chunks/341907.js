n.r(t),
    n.d(t, {
        formatVideoProgressRatio: function () {
            return N;
        },
        maybeShowSurveyForQuest: function () {
            return A;
        },
        navigateToQuestHome: function () {
            return y;
        },
        openDisclosureModal: function () {
            return S;
        },
        openQuestInGameRewardModal: function () {
            return b;
        },
        openQuestsNitroRewardModal: function () {
            return T;
        },
        openQuestsRewardCodeModal: function () {
            return I;
        },
        openVideoQuestModal: function () {
            return C;
        }
    });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(836768),
    s = n(703656),
    o = n(617136),
    l = n(569984),
    u = n(497505),
    c = n(918701),
    d = n(184299),
    f = n(862847),
    _ = n(5881),
    p = n(842942),
    h = n(61115),
    m = n(150560),
    g = n(46140),
    E = n(981631),
    v = n(49898);
function I(e) {
    let { questId: t, location: a, questContentPosition: s, preview: o = !1 } = e;
    (0, i.openModalLazy)(async () => {
        let { default: e } = await Promise.all([n.e('48923'), n.e('99393'), n.e('28044'), n.e('84120')]).then(n.bind(n, 985866));
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
function T(e, t) {
    (0, i.openModalLazy)(async () => {
        let { default: i } = await Promise.all([n.e('8016'), n.e('36909')]).then(n.bind(n, 824393));
        return (n) =>
            (0, r.jsx)(i, {
                ...n,
                quest: e,
                location: t
            });
    });
}
function b(e, t) {
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
function S(e, t) {
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
function y(e, t, n) {
    let r = m.Z.getState().setUtmCurrentContext;
    r({
        utmSourceCurrent: 'Discord Widget',
        utmMediumCurrent: 'in-app',
        utmCampaignCurrent: n,
        utmContentCurrent: Object.keys(u.jn).find((e) => u.jn[e] === t)
    });
    let i = null != n ? '#'.concat(n) : '';
    a.Z.setState({ selectedTab: v.F$.QUESTS }), (0, s.uL)(E.Z5c.QUEST_HOME + i);
}
function A(e) {
    let t = (0, _.T)({ quest: e }),
        n = { location: g.dr.QUESTS_BAR };
    if (!(0, f.j)(n)) return;
    let r = (0, c.il)(e),
        i = (0, p.Z)({ entityName: e.config.messages.gameTitle });
    if (i.taskType === r.taskType && !!i.experiment.getCurrentConfig(n).enabled)
        t.log('Showing survey '.concat(i.id)),
            (0, h.openQuestSurveyModal)({
                questId: e.id,
                survey: i
            });
}
function N(e, t) {
    return e <= 0 || t <= 0 ? 0 : e >= t ? 1 : Math.min(1, Math.round((e / t) * 100) / 100);
}
function C(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    (0, i.openModalLazy)(
        async () => {
            let { default: i } = await n.e('32249').then(n.bind(n, 536687));
            return (n) =>
                (0, r.jsx)(i, {
                    ...n,
                    questId: e.id,
                    autoplay: t
                });
        },
        {
            modalKey: (0, c.u7)(e.id),
            backdropStyle: i.BackdropStyles.IMMERSIVE,
            onCloseCallback: () => {
                var t, n;
                let r = d.ZP.getState().getVideoProgress(e.id);
                if (null == r) return;
                let i = l.Z.getQuest(e.id);
                null != i && (null === (t = i.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null && (null === (n = i.userStatus) || void 0 === n ? void 0 : n.completedAt) == null && (0, c.FI)(i, r.maxTimestampSec);
                let a = N(r.maxTimestampSec, r.duration);
                (0, o.dA)({
                    questId: e.id,
                    event: E.rMx.QUEST_VIDEO_PROGRESSED,
                    properties: {
                        progress: a,
                        video_timestamp_seconds: r.maxTimestampSec
                    }
                });
            }
        }
    );
}
