var i = r(524437),
    a = r(247206),
    s = r(82554),
    o = r(388032);
function l() {
    let { explicitContentGuilds: e, explicitContentFriendDm: n, explicitContentNonFriendDm: r } = (0, a.l4)(),
        s = {};
    return e === i.Q4.SHOW && (s.explicitContentGuilds = i.Q4.BLUR), n === i.Q4.SHOW && (s.explicitContentFriendDm = i.Q4.BLUR), r === i.Q4.SHOW && (s.explicitContentNonFriendDm = i.Q4.BLUR), s;
}
let u = {
    getTitle: () => o.intl.string(o.t['5Qu1IS']),
    getDisabledTitle: () => o.intl.string(o.t.YdZZtL),
    getDescription: () => o.intl.string(o.t.Vzp5BA),
    eligibleReportSubtypes: [s.i5.SUB_CSAM, s.i5.SUB_LOLI, s.i5.SUB_NCP, s.i5.SUB_SEXUALLY_DEGRADING_CONTENT, s.i5.SUB_UNSOLICITED_PORN],
    onApply: () => (0, a.zj)(l()),
    predicate: () => {
        let { explicitContentGuilds: e, explicitContentFriendDm: n, explicitContentNonFriendDm: r } = (0, a.l4)();
        return e === i.Q4.SHOW || n === i.Q4.SHOW || r === i.Q4.SHOW;
    }
};
n.Z = u;
