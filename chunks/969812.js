var r = n(544891),
    i = n(904245),
    a = n(981631),
    s = n(388032);
t.Z = {
    changeNickname: (e, t, n, o) =>
        r.tn
            .patch({
                url: a.ANM.GUILD_MEMBER_NICK(e, n),
                body: { nick: o },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(
                (e) => {
                    (o = e.body.nick), i.Z.sendBotMessage(t, null != o && '' !== o ? s.intl.formatToMarkdownString(s.t['gz+HRk'], { nick: o }) : s.intl.string(s.t.Vhpd9P));
                },
                (e) => {
                    403 === e.status ? i.Z.sendBotMessage(t, s.intl.formatToMarkdownString(s.t.Izf9jI, {})) : i.Z.sendBotMessage(t, s.intl.string(s.t['5LO/Sk']));
                }
            )
};
