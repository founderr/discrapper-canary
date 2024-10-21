var i = n(192379),
    s = n(442837),
    a = n(445384),
    l = n(420438),
    r = n(271383),
    o = n(594174),
    c = n(981631),
    u = n(440493);
t.Z = (e) => {
    let t = (0, s.e7)([l.Z], () => ((null == e ? void 0 : e.hasFeature(c.oNc.HUB)) ? l.Z.hasViewedPrompt(u.r.REAL_NAME_PROMPT, e.id) : null)),
        n = (0, s.e7)([o.default], () => o.default.getCurrentUser()),
        d = (0, s.e7)([r.ZP], () => ((null == e ? void 0 : e.id) != null && null != n ? r.ZP.getMember(null == e ? void 0 : e.id, n.id) : null)),
        h = (null == d ? void 0 : d.nick) != null;
    return (
        i.useEffect(() => {
            h && null != e && !1 === t && a.Z.viewPrompt(u.r.REAL_NAME_PROMPT, e.id);
        }, [h, e, t]),
        !1 === t && !h
    );
};
