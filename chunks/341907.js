n.r(t),
    n.d(t, {
        formatVideoProgressRatio: function () {
            return C;
        },
        maybeShowSurveyForQuest: function () {
            return N;
        },
        navigateToQuestHome: function () {
            return A;
        },
        openDisclosureModal: function () {
            return y;
        },
        openQuestInGameRewardModal: function () {
            return T;
        },
        openQuestsNitroRewardModal: function () {
            return S;
        },
        openQuestsRewardCodeModal: function () {
            return I;
        },
        openVideoQuestModal: function () {
            return R;
        }
    });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(836768),
    s = n(703656),
    o = n(617136),
    l = n(272008),
    u = n(569984),
    c = n(497505),
    d = n(918701),
    f = n(184299),
    _ = n(862847),
    p = n(5881),
    h = n(842942),
    m = n(61115),
    g = n(150560),
    E = n(46140),
    v = n(981631),
    b = n(49898);
function I(e) {
    let { questId: t, location: a, questContentPosition: s, preview: o = !1 } = e;
    (0, i.openModalLazy)(async () => {
        let { default: e } = await Promise.all([n.e('48923'), n.e('99393'), n.e('28044'), n.e('58950')]).then(n.bind(n, 985866));
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
function T(e, t) {
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
function y(e, t) {
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
function A(e, t, n) {
    let r = g.Z.getState().setUtmCurrentContext;
    r({
        utmSourceCurrent: 'Discord Widget',
        utmMediumCurrent: 'in-app',
        utmCampaignCurrent: n,
        utmContentCurrent: Object.keys(c.jn).find((e) => c.jn[e] === t)
    });
    let i = null != n ? '#'.concat(n) : '';
    a.Z.setState({ selectedTab: b.F$.QUESTS }), (0, s.uL)(v.Z5c.QUEST_HOME + i);
}
function N(e) {
    let t = (0, p.T)({ quest: e }),
        n = { location: E.dr.QUESTS_BAR };
    if (!(0, _.j)(n)) return;
    let r = (0, d.il)(e),
        i = (0, h.Z)({ entityName: e.config.messages.gameTitle });
    if (i.taskType === r.taskType && !!i.experiment.getCurrentConfig(n).enabled)
        t.log('Showing survey '.concat(i.id)),
            (0, m.openQuestSurveyModal)({
                questId: e.id,
                survey: i
            });
}
function C(e, t) {
    return e <= 0 || t <= 0 ? 0 : e >= t ? 1 : Math.min(1, Math.round((e / t) * 100) / 100);
}
function R(e) {
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
            modalKey: (0, d.u7)(e.id),
            backdropStyle: i.BackdropStyles.IMMERSIVE,
            onCloseCallback: () => {
                var t;
                let n = f.ZP.getState().getVideoProgress(e.id);
                if (null == n) return;
                let r = u.Z.getQuest(e.id);
                null != r && (null === (t = r.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null && (0, l.FI)(r.id, n.maxTimestampSec);
                let i = C(n.maxTimestampSec, n.duration);
                (0, o.dA)({
                    questId: e.id,
                    event: v.rMx.QUEST_VIDEO_PROGRESSED,
                    properties: {
                        progress: i,
                        video_timestamp_seconds: n.maxTimestampSec
                    }
                });
            }
        }
    );
}
