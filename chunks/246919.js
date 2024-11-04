var i = n(192379),
    l = n(442837),
    a = n(445384),
    r = n(420438),
    s = n(271383),
    o = n(594174),
    c = n(981631),
    d = n(440493);
t.Z = (e) => {
    let t = (0, l.e7)([r.Z], () => ((null == e ? void 0 : e.hasFeature(c.oNc.HUB)) ? r.Z.hasViewedPrompt(d.r.REAL_NAME_PROMPT, e.id) : null)),
        n = (0, l.e7)([o.default], () => o.default.getCurrentUser()),
        u = (0, l.e7)([s.ZP], () => ((null == e ? void 0 : e.id) != null && null != n ? s.ZP.getMember(null == e ? void 0 : e.id, n.id) : null)),
        h = (null == u ? void 0 : u.nick) != null;
    return (
        i.useEffect(() => {
            h && null != e && !1 === t && a.Z.viewPrompt(d.r.REAL_NAME_PROMPT, e.id);
        }, [h, e, t]),
        !1 === t && !h
    );
};
