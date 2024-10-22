t.d(n, {
    Bm: function () {
        return L;
    },
    P7: function () {
        return T;
    },
    ae: function () {
        return g;
    }
});
var i = t(192379),
    a = t(392711),
    l = t.n(a),
    o = t(442837),
    r = t(25209),
    s = t(481060),
    c = t(2052),
    d = t(542094),
    u = t(513202),
    m = t(367907),
    p = t(895924),
    _ = t(691424),
    C = t(428595),
    h = t(364458),
    f = t(499254),
    A = t(541099),
    E = t(827498),
    N = t(346683),
    v = t(981631),
    x = t(689938);
let I = {
        ...C.Z.RULES.commandMention,
        parse: (e, n, t) => ({ content: C.Z.RULES.commandMention.parse(e, n, t).content })
    },
    P = l().pick(
        (0, h.Z)([
            C.Z.RULES,
            { commandMention: I },
            (0, _.Z)({
                enableBuildOverrides: !1,
                enableEmojiClick: !1
            })
        ]),
        ['commandMention', 'customEmoji', 'em', 'emoji', 'emoticon', 'highlight', 'inlineCode', 'looseEm', 's', 'strong', 'text', 'timestamp', 'u', 'spoiler']
    ),
    g = r.w4(P);
function T(e) {
    let { channel: n, application: t, location: i, sectionName: a, commandName: l, autoDismissOnClick: r = !0, launchingComponentId: _, submitting: C = !1, fetchesApplication: h = !0 } = e,
        I = (0, c.O)(),
        P = (0, d.Qv)({
            channelId: n.id,
            applicationId: t.id,
            fetchesApplication: h
        }),
        g = (0, N.Q)(P),
        T = (0, o.e7)([A.Z], () => A.Z.entrypoint()),
        L = (0, d.w1)({
            applicationId: t.id,
            embeddedActivitiesManager: u.Z,
            channelId: n.id,
            locationObject: I.location,
            onActivityItemSelectedProp: (e) => {
                let { applicationId: n } = e;
                r && f.yT(E.ti.ACTIVITY),
                    (0, m.yw)(v.rMx.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
                        location: i,
                        application_id: n,
                        section_name: a,
                        action: g,
                        source: T
                    });
            },
            launchingComponentId: _,
            commandOrigin: p.bB.APPLICATION_LAUNCHER,
            sectionName: a,
            source: T,
            fetchesApplication: h
        }),
        b = s.ButtonColors.BRAND,
        S = null != l ? l : x.Z.Messages.LAUNCH;
    return (
        g === d.JS.JOIN ? ((b = s.ButtonColors.GREEN), (S = x.Z.Messages.JOIN_ACTIVITY)) : g === d.JS.LEAVE && !C && ((b = s.ButtonColors.RED), (S = x.Z.Messages.LEAVE)),
        {
            onActivityItemSelected: L,
            activityAction: g,
            buttonColor: b,
            buttonText: S
        }
    );
}
function L(e, n) {
    let t = A.Z.entrypoint(),
        l = i.useMemo(
            () =>
                (0, a.debounce)(
                    (e, n) => {
                        (0, m.yw)(v.rMx.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, {
                            type: e,
                            source: n
                        });
                    },
                    400,
                    {
                        leading: !1,
                        trailing: !0
                    }
                ),
            []
        );
    i.useEffect(() => {
        null != e && l(e, t);
    }, [e, n, t, l]);
}
