var i = n(544891),
    r = n(900849),
    l = n(981631);
t.Z = (e) =>
    i.tn
        .get({
            url: l.ANM.STICKER_GUILD_DATA(e),
            oldFormErrors: !0,
            rejectWithError: !1
        })
        .then((e) => ((null == e ? void 0 : e.body) != null ? (0, r.PP)(e.body) : null))
        .catch(() => null);
